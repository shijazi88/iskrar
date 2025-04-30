/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "**",
      },
    ],
    // In development, optimize. For DigitalOcean deployment, we need to unoptimize
    unoptimized: process.env.NODE_ENV === "production",
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
  // Allow image optimization for external sources
  experimental: {
    externalDir: true,
  },
};

module.exports = nextConfig;
