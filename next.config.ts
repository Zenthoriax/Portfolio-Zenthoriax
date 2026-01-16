import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const isVercel = process.env.VERCEL === '1';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Only use basePath/assetPrefix on GitHub Pages (not Vercel)
  basePath: isProd && !isVercel ? '/Portfolio-Zenthoriax' : '',
  assetPrefix: isProd && !isVercel ? '/Portfolio-Zenthoriax/' : '',
};

export default nextConfig;
