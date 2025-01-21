import { createMDX } from 'fumadocs-mdx/next';

const isGithubPages = process.env.GITHUB_PAGES === 'true';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', 
  basePath: isGithubPages ? '/arch_guide' : '',
  assetPrefix: isGithubPages ? 'https://deathault.github.io/arch_guide/' : '', 
  images: {
    unoptimized: true,  
  },
};

const withMDX = createMDX();
export default withMDX(nextConfig);