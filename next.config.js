/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['gateway.pinata.cloud'],
  },
  // Agregar la opción de body-parser para todas las rutas
  api: {
    bodyParser: { sizeLimit: '50mb' },
    responseLimit: '50mb',
  },
  webpack: config => {
    // Agregar la configuración de WebSocket
    config.module.rules.push({
      test: /\.worker\.js$/,
      use: { loader: 'worker-loader' },
    });

    // Configurar el puerto y la dirección del servidor WebSocket
    config.devServer = {
      port: 3000,
      host: 'localhost',
    };

    return config;
  },
};

module.exports = nextConfig;
