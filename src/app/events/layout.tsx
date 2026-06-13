import { type Metadata } from 'next';
import { generateMetadata } from '@/lib/seo';

export const metadata: Metadata = generateMetadata({
  title: 'Events',
  locationKeywords: 'Woodbridge, Brampton, Mississauga, Vaughan, GTA',
  description:
    'Da Vinci Banquet Halls hosts weddings, corporate events, social gatherings, South Asian celebrations, and fundraisers. Serving Woodbridge, Brampton, Mississauga, Vaughan, and the GTA. Perfect venues for every occasion.',
  path: '/events',
  image: '/assets/images/events/weddings/hero.jpg',
});

export default function EventsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
