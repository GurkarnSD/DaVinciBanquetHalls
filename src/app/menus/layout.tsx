import { type Metadata } from 'next';
import { generateMetadata } from '@/lib/seo';

export const metadata: Metadata = generateMetadata({
  title: 'Menus',
  locationKeywords: 'Woodbridge, Brampton, Mississauga, Vaughan, GTA',
  description:
    'Italian and South Asian menu catalogs plus sample menus for weddings, showers, stags, and celebrations at Da Vinci Banquet Halls. Serving Woodbridge, Brampton, Mississauga, Vaughan, and the Greater Toronto Area.',
  path: '/menus',
});

export default function MenusLayout({ children }: { children: React.ReactNode }) {
  return children;
}
