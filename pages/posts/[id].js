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
      let text = ref.current.innerHTML;

      text = text.replace(/<a href="([^"]+)\.md">/g, '<a href="$1">')

      const replacedText = text
      .replace(/\$\$([\s\S]*?)\$\$/g, (match, p1) => {
        return `<div class="katex" data-display="true">${p1.replace(/ \\\n/g, '\\\\ \n')}</div>`;
      })
      .replace(/\$([\s\S]*?)\$/g, (match, p1) => {
        return `<span class="katex" data-display="false">${p1}</span>`;
      });


      ref.current.innerHTML = replacedText;

      const elements = ref.current.querySelectorAll('.katex');
      elements.forEach(el => {
        const displayMode = el.getAttribute('data-display') === 'true';
        try {
          katex.render(el.textContent, el, {
            throwOnError: false,
            displayMode,
          });
        } catch (error) {
          console.error('Error rendering KaTeX:', error);
        }
      });
    }
  }, [postData.contentHtml]);

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
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} id='math-content' ref={ref} />
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
  return {
    props: {
      postData,
    },
  };
}
