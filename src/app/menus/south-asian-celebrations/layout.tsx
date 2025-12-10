import { type Metadata } from 'next';
import { generateMetadata } from '@/lib/seo';

export const metadata: Metadata = generateMetadata({
  title: 'South Asian Celebration Menus',
  description:
    'Specialized curated menus for South Asian celebrations at Da Vinci Banquet Halls in Woodbridge, ON. Gold, Platinum, Diamond, and Exclusive packages available.',
  path: '/menus/south-asian-celebrations',
  image: '/assets/images/menus/south-asian-celebrations/gold-package.jpg',
});

export default function SouthAsianCelebrationsMenuLayout({ children }: { children: React.ReactNode }) {
  return children;
}
