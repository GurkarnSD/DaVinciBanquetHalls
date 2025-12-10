import { type Metadata } from 'next';
import { generateMetadata } from '@/lib/seo';

export const metadata: Metadata = generateMetadata({
  title: 'South Asian Menu',
  description:
    'Complete South Asian menu catalog at Da Vinci Banquet Halls in Woodbridge, ON. Traditional South Asian cuisine including appetizers, main courses, desserts, and bar selections.',
  path: '/menus/south-asian',
  image: '/assets/images/menus/south-asian/appetizers.jpg',
});

export default function SouthAsianMenuLayout({ children }: { children: React.ReactNode }) {
  return children;
}
