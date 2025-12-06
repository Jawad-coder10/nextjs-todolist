/** @type {import('next').NextConfig} */
const nextConfig = {
  // Désactive entièrement Turbopack
  experimental: {
    turbo: false,
  },

  // Force Webpack au build et au dev
  webpack: (config) => {
    return config;
  },
};

module.exports = nextConfig;
