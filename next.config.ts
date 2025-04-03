import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['https://uludag-portfolio.vercel.app/'], // Replace 'example.com' with your image domains if needed
  },
  output: 'standalone', // Ensures compatibility with Vercel's serverless environment
};

export default nextConfig;
