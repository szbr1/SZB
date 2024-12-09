import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: '/develop.ts',  // Replace with your repository name
  assetPrefix: '/develop.ts/',  // Ensure assets load correctly from the repository path

  reactStrictMode: true,
};

export default nextConfig;
