import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Required for static exports
  images: {
    unoptimized: true, // Global image optimization disable
  }
};

export default nextConfig;
