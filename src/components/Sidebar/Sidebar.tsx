// components/Sidebar/Sidebar.tsx
import React from "react";
import Link from "next/link";
import { Topic } from "../../utils/getSortedTopics";
import { useRouter } from "next/router";
import { LINKS } from "../../utils/links";
import { PERSONAL } from "@/utils/personalInfo";
import { AVATAR, ICONS } from "../../utils/assets";

interface SidebarProps {
  topics: Topic[];
}

const Sidebar: React.FC<SidebarProps> = ({ topics = [] }) => {
  const router = useRouter();

  const handleAvatarClick = () => {
    router.push(LINKS.homepage); // Navigate to the homepage
  };

  return (
    <aside className="w-64 bg-custom-gray p-4 h-full flex flex-col">
      {/* Top Section */}
      <div className="flex-grow">
        <div className="flex flex-col items-center mb-4">
          <div
            className="w-48 h-48 rounded-full overflow-hidden border-4 border-gray-400 cursor-pointer"
            onClick={handleAvatarClick}
          >
            <img
              src={AVATAR}
              alt="Avatar"
              className="w-full h-full object-cover transition-transform duration-200 hover:scale-105"
            />
          </div>
          <span className="mt-2">{PERSONAL.name}</span>
          <span>{PERSONAL.slogan}</span>
        </div>

        {/* Main Topics */}
        <div className="mb-8 mt-8">
          <h3 className="text-xl font-bold mb-2">Main Topics</h3>
          <ul>
            {topics.map((topic) => (
              <li key={topic.slug}>
                {LINKS.topics[topic.slug] ? (
                  <Link href={LINKS.topics[topic.slug]}>{topic.sidebarTitle}</Link>
                ) : (
                  <span className="text-gray-500">Invalid link</span>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Current Projects */}
        <div className="mb-2 mt-10">
          <h3 className="text-xl font-bold mb-2">Current Projects</h3>
          <ul>
            <li>
              <Link href={LINKS.currentlyWorkingOn}>Currently Working On</Link>
            </li>
            <li>
              <Link href={LINKS.contactMe}>Contact Me</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Social Icons */}
      <div className="flex justify-around mt-auto">
        <Link href={PERSONAL.social.github} legacyBehavior>
          <a
            className="bg-white rounded-full p-2 text-gray-300 hover:text-gray-700 transition-colors duration-200"
            aria-label="Github"
          >
            <ICONS.github className="w-5 h-5" />
          </a>
        </Link>
        <Link href={PERSONAL.social.email} legacyBehavior>
          <a
            className="bg-white rounded-full p-2 text-gray-300 hover:text-gray-700 transition-colors duration-200"
            aria-label="Email"
          >
            <ICONS.email className="w-5 h-5" />
          </a>
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
