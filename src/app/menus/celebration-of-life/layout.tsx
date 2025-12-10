import { type Metadata } from 'next';
import { generateMetadata } from '@/lib/seo';

export const metadata: Metadata = generateMetadata({
  title: 'Celebration of Life Menu',
  description:
    'Thoughtful menu selections for memorial services and celebration of life events at Da Vinci Banquet Halls in Woodbridge, ON.',
  path: '/menus/celebration-of-life',
});

export default function CelebrationOfLifeMenuLayout({ children }: { children: React.ReactNode }) {
  return children;
}
