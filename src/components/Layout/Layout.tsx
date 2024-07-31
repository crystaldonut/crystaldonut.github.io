// components/Layout/Layout.tsx
import React from 'react';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import { Topic } from '../../utils/getSortedTopics';

interface LayoutProps {
  children: React.ReactNode;
  topics: Topic[];
}

const Layout: React.FC<LayoutProps> = ({ children, topics }) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar topics={topics} />
        <main className="flex-1 overflow-y-auto p-8 bg-white">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
