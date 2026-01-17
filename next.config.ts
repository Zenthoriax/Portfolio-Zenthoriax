const repoName = "Portfolio-Zenthoriax";
const isVercel = process.env.VERCEL === "1";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: "export", // 🔥 THIS IS MANDATORY
  images: {
    unoptimized: true
  },
  trailingSlash: true, // Recommended for GitHub Pages
  ...(isProd
    ? {
      basePath: `/${repoName}`,
      assetPrefix: `/${repoName}/`
    }
    : {})
};

export default nextConfig;
