/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['pt-BR'],
    defaultLocale: 'pt-BR',
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        pathname: '/MedeirosJunior/Landing-Page/main/public/images/**',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        pathname: '/**', // Permite qualquer caminho no domínio
      },
      {
        protocol: 'https',
        hostname: 'gleeful-mermaid-da1ea1.netlify.app',
        pathname: '/**', // Permite qualquer caminho no domínio
      },
    ],
  },
};

module.exports = nextConfig;