import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com', // Autoriza o Pexels
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', // Autoriza o Unsplash (se usarmos)
      },
    ],
  },
};

export default nextConfig;
