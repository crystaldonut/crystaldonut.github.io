// pages/misc/[slug].tsx
import { GetStaticPaths, GetStaticProps } from 'next';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks'; // Import remark-breaks
import Layout from '../../components/Layout/Layout';
import { Topic } from '../../utils/getSortedTopics';
import { getSortedTopics } from '../../utils/getSortedTopics';

interface MiscPageProps {
  content: string;
  data: {
    title: string;
  };
  topics: Topic[];
}

const MiscPage:React.FC<MiscPageProps> = ({ content, data,topics }) => {
  return (
    <Layout topics={topics}>
      <article className="prose lg:prose-xl p-8">
        <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
        <ReactMarkdown remarkPlugins={[remarkGfm,remarkBreaks]}>{content}</ReactMarkdown>
      </article>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const miscDirectory = path.join(process.cwd(), 'content/misc');
  const filenames = fs.readdirSync(miscDirectory);

  const paths = filenames.map((filename) => ({
    params: { slug: filename.replace(/\.md$/, '') },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params!;
  const miscDirectory = path.join(process.cwd(), 'content/misc');
  const fullPath = path.join(miscDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const { data, content } = matter(fileContents);
  const topics = getSortedTopics(); // Ensure you have a utility to fetch topics

  return {
    props: {
      content,
      data,
      topics,
    },
  };
};

export default MiscPage;
