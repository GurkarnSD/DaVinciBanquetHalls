import { type Metadata } from 'next';
import { generateMetadata } from '@/lib/seo';

export const metadata: Metadata = generateMetadata({
  title: 'Italian Menu',
  description:
    'Complete Italian menu catalog at Da Vinci Banquet Halls in Woodbridge, ON. Authentic Italian cuisine including appetizers, pasta, entrees, seafood, desserts, and bar selections.',
  path: '/menus/italian',
  image: '/assets/images/menus/italian/appetizers.jpg',
});

export default function ItalianMenuLayout({ children }: { children: React.ReactNode }) {
  return children;
}
