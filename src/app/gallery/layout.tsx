import { type Metadata } from 'next';
import { generateMetadata } from '@/lib/seo';

export const metadata: Metadata = generateMetadata({
  title: 'Gallery',
  locationKeywords: 'Woodbridge, Brampton, Mississauga, Vaughan, GTA',
  description:
    'View our photo gallery showcasing elegant venues, beautiful decor, and memorable celebrations at Da Vinci Banquet Halls. Serving Woodbridge, Brampton, Mississauga, Vaughan, and the Greater Toronto Area.',
  path: '/gallery',
  image: '/assets/images/gallery/gallery-1.jpg',
});

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
