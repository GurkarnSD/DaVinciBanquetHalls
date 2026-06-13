import {
  aboutSlots,
  carouselSlots,
  eventCardSlots,
  eventHeroSlots,
  gallerySlots,
  homeHeroSlot,
  venueSlots,
  type MediaSlot,
} from '@/config/media-slots';

const baseUrl = 'https://davincibanquethalls.com';

const pageImages: { path: string; slots: MediaSlot[] }[] = [
  { path: '/', slots: [homeHeroSlot, ...carouselSlots] },
  { path: '/venue', slots: venueSlots },
  { path: '/gallery', slots: gallerySlots },
  { path: '/about', slots: aboutSlots },
  { path: '/events', slots: Object.values(eventCardSlots) },
  { path: '/events/weddings', slots: [eventHeroSlots.weddings, eventCardSlots.weddings] },
  { path: '/events/social', slots: [eventHeroSlots.social, eventCardSlots.social] },
  { path: '/events/corporate', slots: [eventHeroSlots.corporate, eventCardSlots.corporate] },
  { path: '/events/south-asian', slots: [eventHeroSlots['south-asian'], eventCardSlots['south-asian']] },
  {
    path: '/events/fundraisers-tradeshows',
    slots: [eventHeroSlots['fundraisers-tradeshows'], eventCardSlots['fundraisers-tradeshows']],
  },
];

function escapeXml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

function absoluteImageUrl(src: string) {
  return src.startsWith('http') ? src : `${baseUrl}${src}`;
}

export function GET() {
  const urls = pageImages
    .map(({ path, slots }) => {
      const seen = new Set<string>();
      const images = slots
        .filter((slot): slot is MediaSlot & { src: string } => Boolean(slot.src))
        .filter((slot) => {
          if (seen.has(slot.src)) return false;
          seen.add(slot.src);
          return true;
        })
        .map(
          (slot) => `    <image:image>
      <image:loc>${escapeXml(absoluteImageUrl(slot.src))}</image:loc>
      <image:title>${escapeXml(slot.title)}</image:title>
      <image:caption>${escapeXml(`${slot.title} at Da Vinci Banquet Halls`)}</image:caption>
    </image:image>`
        )
        .join('\n');

      return `  <url>
    <loc>${escapeXml(`${baseUrl}${path}`)}</loc>
${images}
  </url>`;
    })
    .join('\n');

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls}
</urlset>`;

  return new Response(body, {
    headers: {
      'content-type': 'application/xml; charset=utf-8',
    },
  });
}
