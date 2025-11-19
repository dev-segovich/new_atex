import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // necesario para poder exportar sin procesar imágenes
  },
};

export default nextConfig;
