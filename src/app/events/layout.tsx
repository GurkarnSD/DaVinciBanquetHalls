import { type Metadata } from 'next';
import { generateMetadata } from '@/lib/seo';

export const metadata: Metadata = generateMetadata({
  title: 'Events',
  description:
    'Da Vinci Banquet Halls hosts weddings, corporate events, social gatherings, South Asian celebrations, and fundraisers in Woodbridge, ON. Perfect venues for every occasion.',
  path: '/events',
});

export default function EventsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
