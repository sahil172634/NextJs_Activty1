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
      {
        protocol: 'https',
        hostname: 'd126h31mg8tzcs.cloudfront.net',
        port: '',
        pathname: '/arbour-park/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/new-developments',
        destination: '/conveyancing',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
