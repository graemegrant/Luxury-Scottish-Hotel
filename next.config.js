/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      // Pexels (placeholder images during development)
      { protocol: 'https', hostname: 'images.pexels.com' },
      // Sanity CDN (production images)
      { protocol: 'https', hostname: 'cdn.sanity.io' },
    ],
  },
};

module.exports = nextConfig;
