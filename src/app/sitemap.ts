import { type MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://davincibanquethalls.com'; // Update with your actual domain

  const routes = [
    '',
    '/about',
    '/venue',
    '/menus',
    '/menus/weddings',
    '/menus/italian',
    '/menus/south-asian',
    '/menus/south-asian-celebrations',
    '/menus/showers',
    '/menus/stags',
    '/menus/holiday',
    '/menus/celebration-of-life',
    '/events',
    '/events/weddings',
    '/events/corporate',
    '/events/social',
    '/events/south-asian',
    '/events/fundraisers-tradeshows',
    '/gallery',
    '/contact',
    '/book',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : route === '/book' || route === '/contact' ? 0.9 : 0.8,
  }));
}
