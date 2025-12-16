import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Otimização de Imagens (já tínhamos)
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    minimumCacheTTL: 60 * 60 * 24 * 30, // Cache de imagens por 30 dias
  },

  // Cabeçalhos de Cache (A "Memória" do Navegador)
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png)',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable', // Grava por 1 ano!
          },
        ],
      },
    ];
  },
};

export default nextConfig;
