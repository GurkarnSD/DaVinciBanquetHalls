import MenuCard from '@/components/MenuCard';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import CTASection from '@/components/CTASection';
import VerticalVideoReel from '@/components/VerticalVideoReel';
import { foodVideoSlots } from '@/config/video-slots';

const fullMenus = [
  {
    title: 'Italian Menu',
    description: 'Full catalog — appetizers through bar.',
    href: '/menus/italian',
    image: '/assets/images/menus/italian/appetizers.jpg',
  },
  {
    title: 'South Asian Menu',
    description: 'Full catalog — welcome drinks through dessert (Punjabi, Pakistani, Gujarati).',
    href: '/menus/south-asian',
    image: '/assets/images/menus/south-asian/card.webp',
  },
];

const sampleMenus = [
  {
    title: 'Wedding Menus',
    description: 'Sample menus for ceremonies and receptions.',
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
    description: 'Menus for stag parties.',
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
    description: 'Menus for memorial services.',
    href: '/menus/celebration-of-life',
    image: '/assets/images/menus/celebration-of-life/card.webp',
  },
  {
    title: 'Holiday Menus',
    description: 'Menus for holiday gatherings.',
    href: '/menus/holiday',
    image: '/assets/images/menus/holiday/menu-1.jpg',
  },
];

export default function MenusPage() {
  return (
    <div className="page-shell pb-0">
      <div className="container mx-auto px-4">
        <PageHero
          title="Curated Menus for Every Occasion"
          description="Explore our collection of customizable menus featuring appetizers, entrees, desserts, stations, and more - crafted to suit every celebration."
          align="center"
          className="mx-auto max-w-3xl"
        />
      </div>

      <section className="container mx-auto px-4 py-12">
        <SectionHeading title="Menu Brochures" align="left" className="max-w-4xl" />
        <div className="mx-auto grid max-w-4xl gap-10 md:grid-cols-2">
          {fullMenus.map((menu) => (
            <MenuCard {...menu} key={menu.href} />
          ))}
        </div>
      </section>

      <VerticalVideoReel title="Food Presentation" slots={foodVideoSlots} />

      <section className="section-edge container mx-auto border-t px-4 py-16">
        <SectionHeading
          title="Sample Menus"
          subtitle="Discover our sample menus. Use these as inspiration; every menu can be personalized to create the perfect culinary experience for your event."
          align="left"
        />
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {sampleMenus.map((menu) => (
            <MenuCard {...menu} key={menu.href} />
          ))}
        </div>
      </section>

      <CTASection
        title="Build Your Menu"
        description="Share dietary needs or dish preferences and we will help finalize the selection."
        primaryLabel="Contact us"
        primaryHref="/contact"
      />
    </div>
  );
}
