// utils/assets.ts
import GithubIcon from "../../public/icons/github.svg";
import EmailIcon from "../../public/icons/email.svg";
import nextConfig from "../../next.config.mjs";

const BASE_PATH = '/images'; // Base path for image assets

// this is where the magic happens
export const AVATAR = `${nextConfig.basePath}${BASE_PATH}/avatar.jpg`;

export const ICONS = {
  github: GithubIcon,
  email: EmailIcon,
};

// Example for future scalability
export const OTHER_IMAGES = {
  logo: `${BASE_PATH}/logo.svg`,
  // Add other images as needed
};
