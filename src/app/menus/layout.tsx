import { type Metadata } from 'next';
import { generateMetadata } from '@/lib/seo';

export const metadata: Metadata = generateMetadata({
  title: 'Menus',
  description:
    'Explore our complete menu catalogs and curated sample menus at Da Vinci Banquet Halls. Italian cuisine, South Asian dishes, wedding menus, and customizable options in Woodbridge, ON.',
  path: '/menus',
});

export default function MenusLayout({ children }: { children: React.ReactNode }) {
  return children;
}
