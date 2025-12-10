import '@/styles/globals.css';

import { type Metadata } from 'next';
import { Geist, Playfair_Display } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Da Vinci Banquet Halls | Elegant Venues for Your Celebrations',
  description:
    'Da Vinci Banquet Halls offers elegant venues for weddings, corporate events, and celebrations. Located in Woodbridge, ON. Book your event today.',
  icons: [{ rel: 'icon', url: '/favicon.png' }],
};

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} ${playfair.variable}`}>
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
