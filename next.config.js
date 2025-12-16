/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for GitHub Pages deployment
  output: 'export',
  // No basePath - deploying to root domain
  basePath: '',
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
