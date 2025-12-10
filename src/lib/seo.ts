import { type Metadata } from 'next';

const baseUrl = 'https://davincibanquethalls.com'; // Update with your actual domain
const siteName = 'Da Vinci Banquet Halls';
const defaultDescription =
  'Da Vinci Banquet Halls offers elegant venues for weddings, corporate events, and celebrations. Located in Woodbridge, ON. Book your event today.';
const defaultImage = `${baseUrl}/assets/images/logos/logo.png`;

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  path?: string;
  type?: 'website' | 'article';
  noindex?: boolean;
}

export function generateMetadata({
  title,
  description = defaultDescription,
  image = defaultImage,
  path = '',
  type = 'website',
  noindex = false,
}: SEOProps = {}): Metadata {
  const fullTitle = title ? `${title} | ${siteName}` : `${siteName} | Elegant Venues for Your Celebrations`;
  const url = `${baseUrl}${path}`;
  const ogImage = image.startsWith('http') ? image : `${baseUrl}${image}`;

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      type,
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage],
    },
    robots: {
      index: !noindex,
      follow: !noindex,
      googleBot: {
        index: !noindex,
        follow: !noindex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    icons: {
      icon: '/favicon.png',
      apple: '/favicon.png',
    },
  };
}

export function generateStructuredData(
  type: 'LocalBusiness' | 'Event' | 'Organization',
  data?: Record<string, unknown>
) {
  const baseStructuredData: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': type,
    name: siteName,
    description: defaultDescription,
    url: baseUrl,
    logo: {
      '@type': 'ImageObject',
      url: `${baseUrl}/assets/images/logos/logo.png`,
    },
    image: `${baseUrl}/assets/images/logos/logo.png`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '5732 Highway 7',
      addressLocality: 'Woodbridge',
      addressRegion: 'ON',
      postalCode: 'L4L3A2',
      addressCountry: 'CA',
    },
    telephone: '+1-905-851-3131',
    email: 'contact@davincibanquethalls.com',
    priceRange: '$$',
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '43.7833',
      longitude: '-79.6000',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Monday',
        opens: '00:00',
        closes: '00:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Tuesday',
        opens: '11:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Wednesday',
        opens: '12:00',
        closes: '20:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Thursday',
        opens: '12:00',
        closes: '20:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Friday',
        opens: '11:00',
        closes: '17:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '11:00',
        closes: '17:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Sunday',
        opens: '11:00',
        closes: '17:00',
      },
    ],
    ...data,
  };

  // Merge additional data, but ensure @type is not overridden
  if (data) {
    const { '@type': _, ...restData } = data;
    Object.assign(baseStructuredData, restData);
  }

  return baseStructuredData;
}
