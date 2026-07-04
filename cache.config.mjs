/**
 * Shared cache header values — imported by next.config.js.
 * Media uses must-revalidate so you can swap files at the same path without stale browsers.
 */
const CACHE_ONE_YEAR = 31_536_000;

/** /public/assets — replace in place; ETag checks pick up new bytes on deploy. */
export const CACHE_MEDIA = 'public, max-age=0, must-revalidate';

/** Pre-rendered HTML — CDN-friendly; browser rechecks hourly. */
export const CACHE_STATIC_PAGE = `public, max-age=3600, s-maxage=${CACHE_ONE_YEAR}, stale-while-revalidate=604800`;

/** Sitemaps, robots. */
export const CACHE_STATIC_METADATA = `public, max-age=86400, s-maxage=${CACHE_ONE_YEAR}, stale-while-revalidate=604800`;
