/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['localhost'],
    unoptimized: true
  },
  reactStrictMode: true,
  swcMinify: true
}

module.exports = nextConfig