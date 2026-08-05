import '@/styles/globals.css';

import { type Metadata } from 'next';
import Script from 'next/script';
import { Geist, Bodoni_Moda } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Providers from '@/components/Providers';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import StructuredData from '@/components/StructuredData';
import { generateMetadata as generateSEOMetadata, generateStructuredData } from '@/lib/seo';

export const dynamic = 'force-static';
export const revalidate = false;

export const metadata: Metadata = {
  ...generateSEOMetadata(),
  verification: {
    google: 'xpEKXVZoru8mamiSFwJYBEuK45UDhuzmeNUmNOvO10Q',
  },
};

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
});

const bodoni = Bodoni_Moda({
  subsets: ['latin'],
  variable: '--font-bodoni',
});

const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark')t='light';document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme','light');}})();`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = generateStructuredData('LocalBusiness', {
    servesCuisine: ['Italian', 'South Asian', 'International'],
    amenityFeature: [
      { '@type': 'LocationFeatureSpecification', name: 'Parking', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Bridal Suite', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Full Bar', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Sound System', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Professional Lighting', value: true },
    ],
    sameAs: ['https://www.instagram.com/davinci.banquethalls/'],
  });

  return (
    <html lang="en" className={`${geist.variable} ${bodoni.variable}`} suppressHydrationWarning>
      <head>
        <Script id="theme-init" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="flex min-h-screen flex-col">
        {/*
          THESIS: The property is presented as a lookbook — real halls as looks, Call as the only loud act; refuses dark-gold banquet hero.
          OWN-WORLD: Bone paper #F7F6F2, ink #0B0B0B, merlot #6B1F2B; hairline nav; monumental Bodoni display + spare grotesk; sharp ink rectangles; real venue media only.
          STORY: Visitor understands halls + catering + capacity, believes one booking covers the night, calls or inquires.
          FIRST VIEWPORT: Split editorial — type left (straightforward banquet headline + dek), tall real hall photo right, real-photo strip below; Call + Book.
          FORM: Lookbook Flagship / luxury-fashion-flagship · seed 94672f9b · Split Editorial composition.
          FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md
        */}
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <StructuredData data={structuredData} />
        <Analytics />
        <SpeedInsights />
        <Providers>
          <Header />
          <main id="main-content" className="grow">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
