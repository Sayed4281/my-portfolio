/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/experience',
        destination: '/about#experience',
        permanent: true,
      },
      {
        source: '/skills',
        destination: '/services#technologies',
        permanent: true,
      },
      {
        source: '/what-i-do',
        destination: '/services',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
