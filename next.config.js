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
    ],
    domains: ['via.placeholder.com'], // Adicione o domínio aqui
  },
};

module.exports = nextConfig;