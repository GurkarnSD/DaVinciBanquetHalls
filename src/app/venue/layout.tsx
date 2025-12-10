import { type Metadata } from 'next';
import { generateMetadata } from '@/lib/seo';

export const metadata: Metadata = generateMetadata({
  title: 'Venue Information',
  description:
    'Explore our elegant banquet halls in Woodbridge, ON. Flexible spaces accommodating 50-1000 guests. Features include state-of-the-art sound systems, professional lighting, full-service bar, and ample parking.',
  path: '/venue',
  image: '/assets/images/hero/venue.jpg',
});

export default function VenueLayout({ children }: { children: React.ReactNode }) {
  return children;
}
