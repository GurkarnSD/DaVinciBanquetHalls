import { type Metadata } from 'next';
import { generateMetadata } from '@/lib/seo';

export const metadata: Metadata = generateMetadata({
  title: 'Book Your Event',
  locationKeywords: 'Woodbridge, Brampton, Mississauga, Vaughan, GTA',
  description:
    "Reserve your date at Da Vinci Banquet Halls - serving Woodbridge, Brampton, Mississauga, Vaughan, and the GTA. Fill out our reservation form and we'll help create your perfect celebration.",
  path: '/book',
});

export default function BookLayout({ children }: { children: React.ReactNode }) {
  return children;
}
