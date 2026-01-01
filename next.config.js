/** @type {import('next').NextConfig} */
const nextConfig = {
  // Désactive entièrement Turbopack
  experimental: {
    turbo: false,
  },
   images: {
    domains: ['images.unsplash.com'],
  },

  // Force Webpack au build et au dev
  webpack: (config) => {
    return config;
  },
};

module.exports = nextConfig;
