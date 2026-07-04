/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import './src/env.js';
import {
  CACHE_MEDIA,
  CACHE_STATIC_METADATA,
  CACHE_STATIC_PAGE,
} from './cache.config.mjs';

/** @type {import("next").NextConfig} */
const config = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1440, 1920, 2048],
    imageSizes: [32, 48, 64, 96, 128, 256, 384, 512],
    qualities: [70, 75, 80, 85],
    // Short TTL so /_next/image picks up replaced source files at the same path.
    minimumCacheTTL: 3600,
    localPatterns: [
      {
        pathname: '/assets/images/**',
        search: '',
      },
    ],
    remotePatterns: [],
    contentDispositionType: 'inline',
    dangerouslyAllowSVG: false,
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  trailingSlash: false,
  async headers() {
    return [
      {
        source: '/assets/:path*',
        headers: [{ key: 'Cache-Control', value: CACHE_MEDIA }],
      },
      {
        source: '/sitemap.xml',
        headers: [{ key: 'Cache-Control', value: CACHE_STATIC_METADATA }],
      },
      {
        source: '/robots.txt',
        headers: [{ key: 'Cache-Control', value: CACHE_STATIC_METADATA }],
      },
      {
        source: '/image-sitemap.xml',
        headers: [{ key: 'Cache-Control', value: CACHE_STATIC_METADATA }],
      },
      {
        source: '/:path((?!api).*)',
        headers: [{ key: 'Cache-Control', value: CACHE_STATIC_PAGE }],
      },
    ];
  },
};

export default config;
