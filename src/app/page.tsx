import { type Metadata } from 'next';
import HomePageContent from '@/components/HomePageContent';
import { generateMetadata } from '@/lib/seo';

export const metadata: Metadata = generateMetadata({
  title: '',
  locationKeywords: 'Woodbridge, Brampton, Mississauga, Vaughan, GTA',
  description:
    'Da Vinci Banquet Halls — wedding and event venues serving Woodbridge, Brampton, Mississauga, Vaughan, and the Greater Toronto Area. Six halls for weddings, corporate events, and celebrations.',
  path: '/',
  image: '/assets/images/venue/exterior-front-head-on.jpg',
});

export default function HomePage() {
  return <HomePageContent />;
}
