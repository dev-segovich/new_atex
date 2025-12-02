import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // necesario para poder exportar sin procesar imágenes
  },
  basePath: '',           // IMPORTANTE
  assetPrefix: '.',       // pez clave: usa rutas relativas
  trailingSlash: true     // para que genere index.html en cada carpeta
};

export default nextConfig;
