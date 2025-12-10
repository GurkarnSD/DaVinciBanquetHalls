import { type Metadata } from 'next';
import { generateMetadata } from '@/lib/seo';

export const metadata: Metadata = generateMetadata({
  title: 'Gallery',
  description:
    'View our photo gallery showcasing elegant venues, beautiful decor, and memorable celebrations at Da Vinci Banquet Halls in Woodbridge, ON.',
  path: '/gallery',
  image: '/assets/images/gallery/gallery-1.jpg',
});

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
