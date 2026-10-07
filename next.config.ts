import type { NextConfig } from "next";

// Check if building for GitHub Pages or standalone domain
const isGithubPages = process.env.GITHUB_PAGES === "true";
const basePath = isGithubPages ? "/garbhamrit" : "";

const nextConfig: NextConfig = {
  output: "export",

  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },

  ...(basePath && {
    basePath,
    assetPrefix: `${basePath}/`,
  }),
};

export default nextConfig;