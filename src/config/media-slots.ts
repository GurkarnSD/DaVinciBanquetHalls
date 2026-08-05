/** Image registry — set `src` on each entry to publish. Titles are used as alt text. */

export type SlotLayout = 'landscape' | 'square' | 'banner' | 'card';

const venueImage = (filename: string) => `/assets/images/venue/${filename}`;
const eventImage = (category: string, filename: string) => `/assets/images/events/${category}/${filename}`;

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
  title: 'Da Vinci Banquet Halls front exterior',
  aspect: '16:9 landscape · 1920×1080 · full-bleed',
  layout: 'landscape',
  src: venueImage('exterior-front-head-on.jpg'),
};

/** Homepage venue carousel — 16:9 landscape */
export const carouselSlots: MediaSlot[] = [
  {
    id: 'carousel-exterior',
    category: 'Venue',
    title: 'Da Vinci Banquet Halls corner exterior',
    aspect: '3:2 landscape · 1200×800',
    layout: 'landscape',
    src: venueImage('exterior-front-side-corner.jpg'),
  },
  {
    id: 'carousel-main-hall',
    category: 'Venue',
    title: 'Hall A with tables, lighting, and AV',
    aspect: '3:2 landscape · 1200×800',
    layout: 'landscape',
    src: venueImage('hall-a-av-lights.jpg'),
  },
  {
    id: 'carousel-wide-hall',
    category: 'Venue',
    title: 'Hall A tables with lighting and AV',
    aspect: '3:2 landscape · 1200×800',
    layout: 'landscape',
    src: venueImage('hall-a-table-av-lights.jpg'),
  },
  {
    id: 'carousel-lobby',
    category: 'Venue',
    title: 'Front lobby and main entrance doors',
    aspect: '3:2 landscape · 1200×800',
    layout: 'landscape',
    src: venueImage('front-lobby-entrance.jpg'),
  },
  {
    id: 'carousel-stage',
    category: 'Venue',
    title: 'Simple stage setup with loveseat',
    aspect: '3:2 landscape · 1200×800',
    layout: 'landscape',
    src: venueImage('stage-loveseat-left.jpg'),
  },
];

/** Gallery grid — 3:2 venue photography */
export const gallerySlots: MediaSlot[] = [
  {
    id: 'gallery-lobby',
    category: 'Venue',
    title: 'Lobby and entrance interior',
    aspect: '3:2 landscape · 1200×800',
    layout: 'landscape',
    src: venueImage('front-lobby-entrance.jpg'),
  },
  {
    id: 'gallery-hall-a',
    category: 'Venue',
    title: 'Hall A seated dinner setup',
    aspect: '3:2 landscape · 1200×800',
    layout: 'landscape',
    src: venueImage('hall-a-av-lights.jpg'),
  },
  {
    id: 'gallery-hall-ab',
    category: 'Venue',
    title: 'Hall A dinner tables and lighting',
    aspect: '3:2 landscape · 1200×800',
    layout: 'landscape',
    src: venueImage('hall-a-table-av-lights.jpg'),
  },
  {
    id: 'gallery-hall-lobby',
    category: 'Venue',
    title: 'Hall A lobby angled view',
    aspect: '3:2 landscape · 1200×800',
    layout: 'landscape',
    src: venueImage('hall-a-lobby-angled.jpg'),
  },
  {
    id: 'gallery-lighting',
    category: 'Venue',
    title: 'Overhead DJ lights and chandelier',
    aspect: '3:2 landscape · 1200×800',
    layout: 'landscape',
    src: venueImage('overhead-dj-lights-chandelier.jpg'),
  },
  {
    id: 'gallery-table-av-lights',
    category: 'Venue',
    title: 'Hall A setup with table lighting',
    aspect: '3:2 landscape · 1200×800',
    layout: 'landscape',
    src: venueImage('hall-a-table-av-lights.jpg'),
  },
  {
    id: 'gallery-stage-loveseat',
    category: 'Venue',
    title: 'Stage loveseat setup from the left side',
    aspect: '3:2 landscape · 1200×800',
    layout: 'landscape',
    src: venueImage('stage-loveseat-left.jpg'),
  },
  {
    id: 'gallery-lobby-fireplace',
    category: 'Venue',
    title: 'Front lobby fireplace and wedding display',
    aspect: '3:2 landscape · 1200×800',
    layout: 'landscape',
    src: venueImage('front-lobby-fireplace-vertical.jpg'),
  },
  {
    id: 'gallery-exterior',
    category: 'Venue',
    title: 'Exterior front and side corner view',
    aspect: '21:9 banner · 2100×900',
    layout: 'banner',
    src: venueImage('exterior-front-side-corner.jpg'),
  },
];

/** Venue page — hall & feature photography */
export const venueSlots: MediaSlot[] = [
  {
    id: 'venue-exterior',
    category: 'Venue',
    title: 'Building exterior with Da Vinci signage',
    aspect: '3:2 landscape · 1200×800',
    layout: 'landscape',
    src: venueImage('exterior-front-head-on.jpg'),
  },
  {
    id: 'venue-lobby',
    category: 'Venue',
    title: 'Lobby and guest arrival area',
    aspect: '3:2 landscape · 1200×800',
    layout: 'landscape',
    src: venueImage('front-lobby-entrance.jpg'),
  },
  {
    id: 'venue-hall-a',
    category: 'Venue',
    title: 'Hall A full room with seated layout',
    aspect: '3:2 landscape · 1200×800',
    layout: 'landscape',
    src: venueImage('hall-a-av-lights.jpg'),
  },
  {
    id: 'venue-hall-ab',
    category: 'Venue',
    title: 'Hall A seated setup with AV lighting',
    aspect: '3:2 landscape · 1200×800',
    layout: 'landscape',
    src: venueImage('hall-a-table-av-lights.jpg'),
  },
  {
    id: 'venue-buffet-room',
    category: 'Venue',
    title: 'Buffet room and service area',
    aspect: '3:2 landscape · 1200×800',
    layout: 'landscape',
    src: venueImage('hall-a-buffet-room.jpg'),
  },
  {
    id: 'venue-stage-loveseat',
    category: 'Venue',
    title: 'Stage and loveseat setup',
    aspect: '3:2 landscape · 1200×800',
    layout: 'landscape',
    src: venueImage('stage-loveseat-left.jpg'),
  },
  {
    id: 'venue-table-lighting',
    category: 'Venue',
    title: 'Hall A table lighting setup',
    aspect: '3:2 landscape · 1200×800',
    layout: 'landscape',
    src: venueImage('hall-a-table-av-lights.jpg'),
  },
];

/** About page */
export const aboutSlots: MediaSlot[] = [
  {
    id: 'about-entrance',
    category: 'Venue',
    title: 'Front lobby and entrance at Da Vinci Banquet Halls',
    aspect: '3:2 landscape · 1200×800',
    layout: 'landscape',
    src: venueImage('front-lobby-entrance.jpg'),
  },
  {
    id: 'about-hall',
    category: 'Venue',
    title: 'Hall setup with AV lights',
    aspect: '3:2 landscape · 1200×800',
    layout: 'landscape',
    src: venueImage('hall-a-av-lights.jpg'),
  },
];

/** Event page banners — 21:9 */
export const eventHeroSlots = {
  weddings: {
    id: 'hero-weddings',
    category: 'Event photo',
    title: 'Wedding reception celebration',
    aspect: '21:9 banner · 2100×900',
    layout: 'banner',
    src: eventImage('weddings', 'hero.jpg'),
  },
  social: {
    id: 'hero-social',
    category: 'Event photo',
    title: 'Social celebration',
    aspect: '21:9 banner · 2100×900',
    layout: 'banner',
    src: eventImage('social', 'hero.webp'),
  },
  corporate: {
    id: 'hero-corporate',
    category: 'Event photo',
    title: 'Corporate event',
    aspect: '21:9 banner · 2100×900',
    layout: 'banner',
    src: eventImage('corporate', 'hero.webp'),
  },
  'south-asian': {
    id: 'hero-south-asian',
    category: 'Event photo',
    title: 'South Asian celebration',
    aspect: '21:9 banner · 2100×900',
    layout: 'banner',
    src: eventImage('south-asian', 'hero.jpg'),
  },
  'fundraisers-tradeshows': {
    id: 'hero-fundraisers',
    category: 'Event photo',
    title: 'Fundraiser or trade show event',
    aspect: '21:9 banner · 2100×900',
    layout: 'banner',
    src: eventImage('fundraisers-tradeshows', 'hero.jpg'),
  },
} satisfies Record<string, MediaSlot>;

/** Event hub cards — 3:2 */
export const eventCardSlots = {
  weddings: {
    id: 'card-weddings',
    category: 'Event',
    title: 'Wedding reception celebration',
    aspect: '3:2 landscape · 1200×800',
    layout: 'card',
    src: eventImage('weddings', 'hero.jpg'),
  },
  social: {
    id: 'card-social',
    category: 'Event',
    title: 'Social celebration',
    aspect: '3:2 landscape · 1200×800',
    layout: 'card',
    src: eventImage('social', 'hero.webp'),
  },
  corporate: {
    id: 'card-corporate',
    category: 'Event',
    title: 'Corporate event',
    aspect: '3:2 landscape · 1200×800',
    layout: 'card',
    src: eventImage('corporate', 'hero.webp'),
  },
  'south-asian': {
    id: 'card-south-asian',
    category: 'Event',
    title: 'South Asian celebration',
    aspect: '3:2 landscape · 1200×800',
    layout: 'card',
    src: eventImage('south-asian', 'hero.jpg'),
  },
  'fundraisers-tradeshows': {
    id: 'card-fundraisers',
    category: 'Event',
    title: 'Fundraiser or trade show event',
    aspect: '3:2 landscape · 1200×800',
    layout: 'card',
    src: eventImage('fundraisers-tradeshows', 'hero.jpg'),
  },
} satisfies Record<string, MediaSlot>;
