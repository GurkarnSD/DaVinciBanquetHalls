import { type Metadata } from 'next';
import { generateMetadata } from '@/lib/seo';

export const metadata: Metadata = generateMetadata({
  title: 'Venue Information',
  locationKeywords: 'Woodbridge, Brampton, Mississauga, Vaughan, GTA',
  description:
    'Explore our elegant banquet halls serving Woodbridge, Brampton, Mississauga, Vaughan, and the GTA. Flexible spaces accommodating 50-1000 guests. Features include state-of-the-art sound systems, professional lighting, full-service bar, and ample parking.',
  path: '/venue',
  image: '/assets/images/venue/hall-ab-wide-corner.jpg',
});

export default function VenueLayout({ children }: { children: React.ReactNode }) {
  return children;
}
