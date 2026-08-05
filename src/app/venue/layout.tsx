import { type Metadata } from 'next';
import { generateMetadata } from '@/lib/seo';

export const metadata: Metadata = generateMetadata({
  title: 'Venue Information',
  locationKeywords: 'Woodbridge, Brampton, Mississauga, Vaughan, GTA',
  description:
    'Banquet halls in Woodbridge for 50–1,000 guests. Sound, lighting, full-service bar, catering kitchen, and parking. Serving Woodbridge, Brampton, Mississauga, Vaughan, and the GTA.',
  path: '/venue',
  image: '/assets/images/venue/hall-a-table-av-lights.jpg',
});

export default function VenueLayout({ children }: { children: React.ReactNode }) {
  return children;
}
