// utils/getSortedTopics.ts
import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';

export interface Topic {
  slug: string;
  order: number;
  sidebarTitle: string;

  // Optional: Include other properties if needed
  title?: string;
}

export const getSortedTopics = (): Topic[] => {
  const topicsDirectory = path.join(process.cwd(), 'content', 'topics');
  const filenames = fs.readdirSync(topicsDirectory);

  const topics = filenames.map((filename) => {
    const filePath = path.join(topicsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);

    return {
      slug: filename.replace(/\.md$/, ''),
      sidebarTitle: data.sidebarTitle || data.title, // Use sidebarTitle or fallback to title
      order: data.order,
    };
  });

  // Sort topics by the 'order' field
  topics.sort((a, b) => a.order - b.order);

  return topics;
};
