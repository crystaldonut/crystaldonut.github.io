// pages/topics/[slug].tsx
import { GetStaticPaths, GetStaticProps } from 'next';
import matter from 'gray-matter';
import path from 'path';
import fs from 'fs';
import Layout from '../../components/Layout/Layout';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks'; // Import remark-breaks

import { getSortedTopics, Topic } from '../../utils/getSortedTopics';

interface TopicProps {
  content: string;
  data: {
    title: string;
    date: string;
  };
  topics: Topic[];
}

const TopicPage: React.FC<TopicProps> = ({ content, data,topics }) => {
  return (
    <Layout topics={topics}>
      <article className="prose lg:prose-xl p-8">
        <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
        <p className="text-sm text-gray-600 mb-6">{data.date}</p>
        <ReactMarkdown remarkPlugins={[remarkGfm,remarkBreaks]}>{content}</ReactMarkdown>
      </article>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const topicsDirectory = path.join(process.cwd(), 'content', 'topics');
  const filenames = fs.readdirSync(topicsDirectory);

  const paths = filenames.map((filename) => ({
    params: { slug: filename.replace(/\.md$/, '') },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const topicsDirectory = path.join(process.cwd(), 'content', 'topics');
  const fullPath = path.join(topicsDirectory, `${params!.slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { content, data } = matter(fileContents);
  const topics = getSortedTopics();

  return {
    props: {
      content,
      data,
      topics
    },
  };
};
export default TopicPage;
