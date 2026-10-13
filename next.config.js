// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Enable image optimization for remote images if needed
  images: {
    remotePatterns: [{
    protocol: 'https',
    hostname: 'via.placeholder.com',
    pathname: '/**',
  }],
  },
};
module.exports = nextConfig;
