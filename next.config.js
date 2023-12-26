/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd2mc-api.sherry.moe',
        pathname: '/**',
      },
    ],
  }
}

module.exports = nextConfig
