import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/dubhe101',
  trailingSlash: true,
  assetPrefix: '/dubhe101/',
};

export default withMDX(config);
