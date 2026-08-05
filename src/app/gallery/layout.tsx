import { type Metadata } from 'next';
import { generateMetadata } from '@/lib/seo';

export const metadata: Metadata = generateMetadata({
  title: 'Gallery',
  locationKeywords: 'Woodbridge, Brampton, Mississauga, Vaughan, GTA',
  description:
    'Photos and video from halls, setups, and celebrations at Da Vinci Banquet Halls. Serving Woodbridge, Brampton, Mississauga, Vaughan, and the Greater Toronto Area.',
  path: '/gallery',
  image: '/assets/images/venue/exterior-front-side-corner.jpg',
});

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
