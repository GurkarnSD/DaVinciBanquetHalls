import { type Metadata } from 'next';
import HomePageContent from '@/components/HomePageContent';

export const metadata: Metadata = {
  title: 'Da Vinci Banquet Halls | Elegant Venues for Your Celebrations',
  description:
    'Welcome to Da Vinci Banquet Halls. Experience elegance and sophistication for your most important celebrations.',
};

export default function HomePage() {
  return <HomePageContent />;
}
