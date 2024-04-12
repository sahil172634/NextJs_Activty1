/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'view.com.au',
        port: '',
        pathname: '/viewstatic/lancer/**',
      },
      {
        protocol: 'https',
        hostname: 'resi.uatz.view.com.au',
        port: '',
        pathname: '/viewstatic/lancer/**',
      },
    ],
  },
};

export default nextConfig;
