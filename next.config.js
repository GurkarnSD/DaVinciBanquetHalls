/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import './src/env.js';

/** @type {import("next").NextConfig} */
const config = {
  images: {
    formats: ['image/avif', 'image/webp'],
    // Optimized for mobile-first: smaller sizes for mobile, larger for desktop
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    // Smaller image sizes for thumbnails and cards on mobile
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 512],
    minimumCacheTTL: 86400, // 1 day cache
    // Enable remote patterns if needed in the future
    remotePatterns: [],
    // Optimize quality for better compression
    dangerouslyAllowSVG: false,
  },
  // SEO optimizations
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  // Ensure proper URL structure
  trailingSlash: false,
};

export default config;
