/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/farmers',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
