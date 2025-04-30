/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com"],
    unoptimized: process.env.NODE_ENV === "production", // This helps with static exports if needed
  },
  // Optimize for production
  reactStrictMode: true,
  swcMinify: true,
  // Add trailing slash for better compatibility
  trailingSlash: true,
  // Configure some performance settings
  poweredByHeader: false,
  // Production specific settings
  productionBrowserSourceMaps: false,
};

module.exports = nextConfig;
