import { type Metadata } from 'next';
import { generateMetadata } from '@/lib/seo';

export const metadata: Metadata = generateMetadata({
  title: 'Book a Hall',
  description:
    "Reserve your date at Da Vinci Banquet Halls in Woodbridge, ON. Fill out our reservation form and we'll help create your perfect celebration.",
  path: '/book',
});

export default function BookLayout({ children }: { children: React.ReactNode }) {
  return children;
}
