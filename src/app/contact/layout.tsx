import { type Metadata } from 'next';
import { generateMetadata } from '@/lib/seo';

export const metadata: Metadata = generateMetadata({
  title: 'Contact Us',
  description:
    'Contact Da Vinci Banquet Halls - serving Woodbridge, Brampton, Mississauga, Vaughan, and the GTA. Located at 5732 Highway 7, Woodbridge, ON. Call 905-851-3131 or email us to plan your perfect event.',
  path: '/contact',
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
