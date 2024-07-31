
import { fileURLToPath } from 'url';
import { dirname } from 'path';

/** @type {import('next').NextConfig} */

const inProd = process.env.NODE_ENV === "production";


const nextConfig = {
  basePath: inProd ? "/website-test-nextjs" : "",

  output: "export",
  // Optional: Change the output directory `out` -> `dist`
  distDir: "dist",
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },

};

export default nextConfig;
