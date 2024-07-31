// components/Content/Content.tsx
import React from 'react';

interface ContentProps {
  children: React.ReactNode;
}

const Content: React.FC<ContentProps> = ({ children }) => {
  return (
    <main className="flex-1 bg-white text-gray-900 p-8">
      {children}
    </main>
  );
};

export default Content;
