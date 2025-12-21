import { type Metadata } from 'next';
import HomePageContent from '@/components/HomePageContent';
import { generateMetadata } from '@/lib/seo';

export const metadata: Metadata = generateMetadata({
  title: '',
  locationKeywords: 'Woodbridge, Brampton, Mississauga, Vaughan, GTA',
  description:
    'Da Vinci Banquet Halls - Premier wedding and event venues serving Woodbridge, Brampton, Mississauga, Vaughan, and the Greater Toronto Area (GTA). Elegant banquet halls perfect for weddings, corporate events, and celebrations. Book your event today.',
  path: '/',
  image: '/assets/images/hero/video.jpg',
});

export default function HomePage() {
  return <HomePageContent />;
}
