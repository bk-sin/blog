import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';
import katex from 'katex';
import { useEffect, useRef } from 'react';
import 'katex/dist/katex.min.css';
export default function Post({ postData }) {
  const ref = useRef(null);
  useEffect(() => {
    if (ref.current) {
      const text = ref.current.innerHTML;
      
      const replacedText = text
      .replace(/\$\$([\s\S]*?)\$\$/g, (match, p1) => {
        return `<div class="katex">${p1.replace(/ \\\n/g, '\\\\ \n')}</div>`;
      });


      ref.current.innerHTML = replacedText;

      const elements = ref.current.querySelectorAll('.katex');
      elements.forEach(el => {
        try {
          katex.render(el.textContent, el, {
            throwOnError: false,
            displayMode: true,

          });
        } catch (error) {
          console.error('Error rendering KaTeX:', error);
        }
      });
    }
  }, [postData.contentHtml]);
  const contentHtml = `
  <p>$$\\begin{pmatrix} a &#x26; b \| c &#x26; d \\end{pmatrix}$$</p>\n
`;

  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article >
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }}  ref={ref} />
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  console.log(postData)
  return {
    props: {
      postData,
    },
  };
}
