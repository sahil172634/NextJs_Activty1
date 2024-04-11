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
    ],
  },
};

export default nextConfig;
