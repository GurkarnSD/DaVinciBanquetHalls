/** Image registry — set `src` on each entry to publish. Titles are used as alt text. */

export type SlotLayout = 'landscape' | 'square' | 'banner' | 'card';

export interface MediaSlot {
  id: string;
  title: string;
  aspect: string;
  layout?: SlotLayout;
  category?: string;
  /** Set when a production-ready asset is available */
  src?: string;
}

/** Full-bleed homepage hero — used if hero video is removed */
export const homeHeroSlot: MediaSlot = {
  id: 'home-hero',
  category: 'Venue',
  title: 'Main hall during an event — wide establishing shot',
  aspect: '16:9 landscape · 1920×1080 · full-bleed',
  layout: 'landscape',
};

/** Homepage venue carousel — 16:9 landscape */
export const carouselSlots: MediaSlot[] = [
  {
    id: 'carousel-exterior',
    category: 'Venue',
    title: 'Building exterior — front entrance, daytime',
    aspect: '16:9 landscape · 1920×1080',
    layout: 'landscape',
  },
  {
    id: 'carousel-main-hall',
    category: 'Venue',
    title: 'Main hall — wide interior with tables and lighting',
    aspect: '16:9 landscape · 1920×1080',
    layout: 'landscape',
  },
  {
    id: 'carousel-dance-floor',
    category: 'Venue',
    title: 'Dance floor & stage — empty or lightly set up',
    aspect: '16:9 landscape · 1920×1080',
    layout: 'landscape',
  },
];

/** Gallery grid — 1:1 square */
export const gallerySlots: MediaSlot[] = [
  {
    id: 'gallery-lobby',
    category: 'Venue',
    title: 'Lobby & entrance interior',
    aspect: '1:1 square · 1200×1200',
    layout: 'square',
  },
  {
    id: 'gallery-hall-a',
    category: 'Venue',
    title: 'Hall A — seated dinner setup',
    aspect: '1:1 square · 1200×1200',
    layout: 'square',
  },
  {
    id: 'gallery-hall-b',
    category: 'Venue',
    title: 'Hall B — wide empty room',
    aspect: '1:1 square · 1200×1200',
    layout: 'square',
  },
  {
    id: 'gallery-stage',
    category: 'Venue',
    title: 'Stage & head table',
    aspect: '1:1 square · 1200×1200',
    layout: 'square',
  },
  { id: 'gallery-bar', category: 'Venue', title: 'Bar area', aspect: '1:1 square · 1200×1200', layout: 'square' },
  {
    id: 'gallery-bridal',
    category: 'Venue',
    title: 'Bridal suite',
    aspect: '1:1 square · 1200×1200',
    layout: 'square',
  },
  {
    id: 'gallery-table',
    category: 'Venue',
    title: 'Table setting close-up',
    aspect: '1:1 square · 1200×1200',
    layout: 'square',
  },
  {
    id: 'gallery-lighting',
    category: 'Venue',
    title: 'Lighting & decor detail',
    aspect: '1:1 square · 1200×1200',
    layout: 'square',
  },
  {
    id: 'gallery-exterior-night',
    category: 'Venue',
    title: 'Building exterior at night',
    aspect: '1:1 square · 1200×1200',
    layout: 'square',
  },
];

/** Venue page — hall & feature photography */
export const venueSlots: MediaSlot[] = [
  {
    id: 'venue-exterior',
    category: 'Venue',
    title: 'Building exterior — signage visible',
    aspect: '16:9 landscape · 1920×1080',
    layout: 'landscape',
  },
  {
    id: 'venue-lobby',
    category: 'Venue',
    title: 'Lobby & guest arrival area',
    aspect: '16:9 landscape · 1920×1080',
    layout: 'landscape',
  },
  {
    id: 'venue-hall-a',
    category: 'Venue',
    title: 'Hall A — full room, seated layout',
    aspect: '16:9 landscape · 1920×1080',
    layout: 'landscape',
  },
  {
    id: 'venue-hall-bc',
    category: 'Venue',
    title: 'Hall B or C — combined capacity view',
    aspect: '16:9 landscape · 1920×1080',
    layout: 'landscape',
  },
  {
    id: 'venue-hall-d',
    category: 'Venue',
    title: 'Hall D — intimate room setup',
    aspect: '16:9 landscape · 1920×1080',
    layout: 'landscape',
  },
  {
    id: 'venue-bridal-suite',
    category: 'Venue',
    title: 'Bridal suite interior',
    aspect: '4:3 · 1200×900',
    layout: 'card',
  },
];

/** About page */
export const aboutSlots: MediaSlot[] = [
  {
    id: 'about-atmosphere',
    category: 'Venue',
    title: 'Event in progress — candid wide shot (guests optional/blurred)',
    aspect: '16:9 landscape · 1920×1080',
    layout: 'landscape',
  },
  {
    id: 'about-team',
    category: 'Team',
    title: 'Staff or coordinators on site (posed or candid)',
    aspect: '4:3 · 1200×900',
    layout: 'card',
  },
];

/** Event page banners — 21:9 */
export const eventHeroSlots = {
  weddings: {
    id: 'hero-weddings',
    category: 'Event photo',
    title: 'Wedding reception — couple or head table in main hall',
    aspect: '21:9 banner · 2100×900',
    layout: 'banner',
  },
  social: {
    id: 'hero-social',
    category: 'Event photo',
    title: 'Social celebration — guests dining & decor',
    aspect: '21:9 banner · 2100×900',
    layout: 'banner',
  },
  corporate: {
    id: 'hero-corporate',
    category: 'Event photo',
    title: 'Corporate event — presentation or seated meeting setup',
    aspect: '21:9 banner · 2100×900',
    layout: 'banner',
  },
  'south-asian': {
    id: 'hero-south-asian',
    category: 'Event photo',
    title: 'South Asian celebration — decorated hall & mandap/stage',
    aspect: '21:9 banner · 2100×900',
    layout: 'banner',
  },
  'fundraisers-tradeshows': {
    id: 'hero-fundraisers',
    category: 'Event photo',
    title: 'Large-format event — trade show or fundraiser layout',
    aspect: '21:9 banner · 2100×900',
    layout: 'banner',
  },
} satisfies Record<string, MediaSlot>;

/** Event hub cards — 4:3 */
export const eventCardSlots = {
  weddings: {
    id: 'card-weddings',
    category: 'Event',
    title: 'Wedding — first dance or reception',
    aspect: '4:3 · 1200×900',
    layout: 'card',
  },
  social: {
    id: 'card-social',
    category: 'Event',
    title: 'Birthday or family gathering',
    aspect: '4:3 · 1200×900',
    layout: 'card',
  },
  corporate: {
    id: 'card-corporate',
    category: 'Event',
    title: 'Corporate dinner or gala',
    aspect: '4:3 · 1200×900',
    layout: 'card',
  },
  'south-asian': {
    id: 'card-south-asian',
    category: 'Event',
    title: 'South Asian wedding or cultural event',
    aspect: '4:3 · 1200×900',
    layout: 'card',
  },
  'fundraisers-tradeshows': {
    id: 'card-fundraisers',
    category: 'Event',
    title: 'Fundraiser or trade show floor',
    aspect: '4:3 · 1200×900',
    layout: 'card',
  },
} satisfies Record<string, MediaSlot>;

/** Flat list for photographer / videographer reference */
export const photoShotList: { page: string; slots: MediaSlot[] }[] = [
  { page: 'Home — hero (optional still fallback)', slots: [homeHeroSlot] },
  { page: 'Home — venue carousel', slots: carouselSlots },
  { page: 'Gallery — venue grid', slots: gallerySlots },
  { page: 'Venue — hall tour', slots: venueSlots },
  { page: 'About', slots: aboutSlots },
  { page: 'Events hub — category cards', slots: Object.values(eventCardSlots) },
  { page: 'Events — Weddings banner', slots: [eventHeroSlots.weddings] },
  { page: 'Events — Social banner', slots: [eventHeroSlots.social] },
  { page: 'Events — Corporate banner', slots: [eventHeroSlots.corporate] },
  { page: 'Events — South Asian banner', slots: [eventHeroSlots['south-asian']] },
  { page: 'Events — Fundraisers banner', slots: [eventHeroSlots['fundraisers-tradeshows']] },
];
