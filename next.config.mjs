import withMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost'
      },
      {
        protocol: 'https',
        hostname: 'localhost'
      }
    ]
  },
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
};

export default withMDX()(nextConfig);
