// utils/links.ts



export const LINKS = {
  homepage: '/',
  topics: {} as Record<string, string>, // Define topics with dynamic keys
  currentlyWorkingOn: '/misc/current',
  contactMe: '/misc/contact',
};

// Example of populating topics dynamically
LINKS.topics = {
  AboutMe: '/topics/AboutMe',
  Cloud: '/topics/Cloud',
  Mobile: '/topics/Mobile',
  OPS: '/topics/OPS',
  Tools: '/topics/Tools',
  Web: '/topics/Web',
  // Add more topics as needed
};
