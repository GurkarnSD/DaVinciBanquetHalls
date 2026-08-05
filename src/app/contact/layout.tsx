import { type Metadata } from 'next';
import { generateMetadata } from '@/lib/seo';

export const metadata: Metadata = generateMetadata({
  title: 'Contact Us',
  locationKeywords: 'Woodbridge, Brampton, Mississauga, Vaughan, GTA',
  description:
    'Contact Da Vinci Banquet Halls — Woodbridge, Brampton, Mississauga, Vaughan, and the GTA. 5732 Highway 7, Woodbridge, ON. Call 905-851-3131 or email to ask about availability and menus.',
  path: '/contact',
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
