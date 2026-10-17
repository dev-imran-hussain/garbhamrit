
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Generate static HTML, CSS and JS in the out folder
  output: "export",

  // Keep React development checks
  reactStrictMode: true,

  images: {
    // Required when using next/image with static hosting
    unoptimized: true,
  },
};

export default nextConfig;
