import type { NextConfig } from "next";

// GitHub Pages uses repo name as base path (e.g. /pplandingpage)
// In local dev, basePath is empty ("") so localhost:3000 works normally
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
};

export default nextConfig;