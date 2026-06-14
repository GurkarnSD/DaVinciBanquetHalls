'use client';

import MenuCard from '@/components/MenuCard';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import CTASection from '@/components/CTASection';
import VerticalVideoReel from '@/components/VerticalVideoReel';
import { foodVideoSlots } from '@/config/video-slots';

const fullMenus = [
  {
    title: 'Italian Menu',
    description: 'Complete selection of authentic Italian dishes.',
    href: '/menus/italian',
    image: '/assets/images/menus/italian/appetizers.jpg',
  },
  {
    title: 'South Asian Menu',
    description: 'Full range of traditional South Asian cuisine.',
    href: '/menus/south-asian',
    image: '/assets/images/menus/south-asian/card.webp',
  },
];

const sampleMenus = [
  {
    title: 'Wedding Menus',
    description: 'Curated selections for your wedding day.',
    href: '/menus/weddings',
    image: '/assets/images/menus/weddings/menu-1.jpg',
  },
  {
    title: 'Shower Menus',
    description: 'Menus for baby and bridal showers.',
    href: '/menus/showers',
    image: '/assets/images/menus/showers/menu-1.jpg',
  },
  {
    title: 'Stag Menus',
    description: 'Selections for stag parties.',
    href: '/menus/stags',
    image: '/assets/images/menus/stags/menu.jpg',
  },
  {
    title: 'South Asian Celebrations',
    description: 'Packages for cultural celebrations.',
    href: '/menus/south-asian-celebrations',
    image: '/assets/images/menus/south-asian-celebrations/diamond-package.jpg',
  },
  {
    title: 'Celebration of Life',
    description: 'Thoughtful menus for memorial services.',
    href: '/menus/celebration-of-life',
    image: '/assets/images/menus/celebration-of-life/card.webp',
  },
  {
    title: 'Holiday Menus',
    description: 'Festive menus for the season.',
    href: '/menus/holiday',
    image: '/assets/images/menus/holiday/menu-1.jpg',
  },
];

export default function MenusPage() {
  return (
    <div className="page-shell pb-0">
      <div className="container mx-auto px-4">
        <PageHero
          eyebrow="Menus"
          title="Cuisine Shaped Around Your Event"
          description="Full catalogs list every available item. Sample menus offer a starting point — each can be adjusted to your preferences."
          align="center"
          className="mx-auto max-w-3xl"
        />
      </div>

      <section className="container mx-auto px-4 py-12">
        <SectionHeading
          eyebrow="Catalogs"
          title="Full Menus"
          subtitle="Browse complete dish lists and build a custom selection."
          align="left"
          className="max-w-4xl"
        />
        <div className="mx-auto grid max-w-4xl gap-10 md:grid-cols-2">
          {fullMenus.map((menu) => (
            <MenuCard key={menu.href} {...menu} />
          ))}
        </div>
      </section>

      <VerticalVideoReel eyebrow="Catering" title="Food & Table Presentations" slots={foodVideoSlots} />

      <section className="section-edge container mx-auto border-t px-4 py-16">
        <SectionHeading
          eyebrow="Samples"
          title="Curated Starting Points"
          subtitle="Each sample menu can be customized — items can be added or removed."
          align="left"
        />
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {sampleMenus.map((menu) => (
            <MenuCard key={menu.href} {...menu} />
          ))}
        </div>
      </section>

      <CTASection
        title="Customize Your Menu"
        description="Dietary requirements or specific preferences? We will work with you on a tailored selection."
        primaryLabel="Contact us"
        primaryHref="/contact"
      />
    </div>
  );
}
