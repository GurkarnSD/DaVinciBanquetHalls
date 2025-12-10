import '@/styles/globals.css';

import { type Metadata } from 'next';
import { Geist, Playfair_Display } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Analytics } from '@vercel/analytics/next';
import StructuredData from '@/components/StructuredData';
import { generateMetadata as generateSEOMetadata, generateStructuredData } from '@/lib/seo';

export const metadata: Metadata = generateSEOMetadata();

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = generateStructuredData('LocalBusiness', {
    '@type': 'EventVenue',
    servesCuisine: ['Italian', 'South Asian', 'International'],
    amenityFeature: [
      { '@type': 'LocationFeatureSpecification', name: 'Parking', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Bridal Suite', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Full Bar', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Sound System', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Professional Lighting', value: true },
    ],
  });

  return (
    <html lang="en" className={`${geist.variable} ${playfair.variable}`}>
      <Analytics />
      <body className="flex min-h-screen flex-col">
        <StructuredData data={structuredData} />
        <Header />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
