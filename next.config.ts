import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Set the basePath and assetPrefix for GitHub Pages
  basePath: '/website',  // Replace with your repo name
  assetPrefix: '/website/', // Ensure assets load correctly from GitHub Pages

  // Optional: enable React Strict Mode and other configurations
  reactStrictMode: true,
};

export default nextConfig;
