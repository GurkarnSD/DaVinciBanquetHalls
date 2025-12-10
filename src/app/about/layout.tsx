import { type Metadata } from 'next';
import { generateMetadata } from '@/lib/seo';

export const metadata: Metadata = generateMetadata({
  title: 'About Us',
  description:
    'Learn about Da Vinci Banquet Halls - our mission, values, and commitment to creating extraordinary experiences for your most important celebrations in Woodbridge, ON.',
  path: '/about',
  image: '/assets/images/hero/about.jpg',
});

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
