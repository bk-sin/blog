import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);

  const markdownFiles = fileNames.filter((fileName) => {
    const fullPath = path.join(postsDirectory, fileName);
    
    // Exclude directories that start with a dot, like ".obsidian"
    return fs.statSync(fullPath).isFile() && fileName.endsWith('.md') && !fileName.startsWith('.');
  });

  const allPostsData = markdownFiles.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
    const date = new Date(matterResult.data.date).toISOString().split('T')[0];
    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
      date
    };
  });
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  const markdownFiles = fileNames.filter((fileName) => 
    fileName.endsWith('.md') && !fileName.startsWith('.')
  );
  return markdownFiles.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();
  const date = new Date(matterResult.data.date).toISOString().split('T')[0];
  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data, date
  };
}
