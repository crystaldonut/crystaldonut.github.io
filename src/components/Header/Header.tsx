// components/Header/Header.tsx
import React from 'react';
import { PERSONAL } from '@/utils/personalInfo';

const Header: React.FC = () => {
  return (
    <header className="w-full bg-gray-100 p-4 flex justify-between items-center">
      <div className="flex-1">
        <span></span>
      </div>
      <div className="flex-1 text-center">
        <span>Ivan Ramirez</span>
      </div>
      <div className="flex-1 text-right">
        <a href={PERSONAL.social.email} className="text-blue-600 hover:underline">
          {PERSONAL.social.email.replace('mailto:', '')}
        </a>
      </div>
    </header>
  );
};

export default Header;
