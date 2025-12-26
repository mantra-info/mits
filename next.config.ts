import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  // REMOVE THESE TWO LINES:
  // basePath: "/web",
  // assetPrefix: "/web/",

  images: {
    unoptimized: true,
  },

  reactStrictMode: true,
};

export default nextConfig;