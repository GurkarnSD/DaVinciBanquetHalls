import { type Metadata } from 'next';
import HomePageContent from '@/components/HomePageContent';
import { generateMetadata } from '@/lib/seo';

export const metadata: Metadata = generateMetadata({
  title: '',
  description:
    'Welcome to Da Vinci Banquet Halls. Experience elegance and sophistication for your most important celebrations. Located in Woodbridge, ON. Perfect for weddings, corporate events, and special occasions.',
  path: '/',
  image: '/assets/images/hero/video.jpg',
});

export default function HomePage() {
  return <HomePageContent />;
}
