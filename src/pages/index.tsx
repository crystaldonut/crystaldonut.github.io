// pages/index.tsx
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Layout from '../components/Layout/Layout';
import fs from 'fs';
import path from 'path';
import { getSortedTopics, Topic } from '../utils/getSortedTopics';

interface IndexProps {
  firstTopic: string;
  topics: Topic[]
}

const Index: React.FC<IndexProps> = ({ firstTopic,topics }) => {
  const router = useRouter();

  // Redirect to the first topic on initial load
  useEffect(() => {
    if (firstTopic) {
      router.push(`/topics/${firstTopic}`);
    }
  }, [firstTopic, router]);

  return (
    <Layout topics={topics}>
      <p>Loading...</p>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const topicsDirectory = path.join(process.cwd(), 'content', 'topics');
  const filenames = fs.readdirSync(topicsDirectory);
  const firstTopic = filenames.length > 0 ? filenames[0].replace(/\.md$/, '') : '';
  const topics = getSortedTopics();

  return {
    props: {
      topics,
      firstTopic,
    },
  };
};

export default Index;
