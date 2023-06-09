/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: [
      "media.graphassets.com",
      "bs.plantnet.org",
      "images.unsplash.com",
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
