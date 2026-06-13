import { type Metadata } from 'next';
import { generateMetadata } from '@/lib/seo';

export const metadata: Metadata = generateMetadata({
  title: 'About Us',
  locationKeywords: 'Woodbridge, Brampton, Mississauga, Vaughan, GTA',
  description:
    'Learn about Da Vinci Banquet Halls - our mission, values, and commitment to creating extraordinary experiences for your most important celebrations. Serving Woodbridge, Brampton, Mississauga, Vaughan, and the Greater Toronto Area.',
  path: '/about',
  image: '/assets/images/logos/logo.png',
});

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
