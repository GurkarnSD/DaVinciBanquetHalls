import Image from 'next/image';
import { CenteredMenuCourse, PackageAppetizers, PackageDinner } from '@/components/PackageMenuBlocks';

export default function GoldPackageSection() {
  return (
    <section className="mb-20">
      <div className="overflow-hidden border border-white/8">
        <div className="relative h-64 md:h-96">
          <Image
            src="/assets/images/menus/south-asian-celebrations/gold-package.jpg"
            alt="Gold Package"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 1200px"
            quality={80}
            loading="lazy"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/50">
            <h2 className="px-4 text-center font-serif text-5xl font-bold text-white md:text-6xl">Gold</h2>
          </div>
        </div>
        <div className="p-8 md:p-12">
          <div className="space-y-8">
            <PackageAppetizers
              vegetarian="Choice of 2 Vegetarian Appetizers"
              nonVegetarian="Choice of 2 Non-Vegetarian Appetizers"
            />
            <PackageDinner
              vegetarian="Choice of 2 Vegetarian Dinner Items"
              nonVegetarian="Choice of 2 Non-Vegetarian Dinner Items"
              columns={3}
              sides={[
                { label: '• Basmati Rice' },
                { label: '• Cucumber Raita' },
                { label: '• Garden Salad' },
                { label: '• Fresh Butter Naan', span: true },
              ]}
            />
            <CenteredMenuCourse
              title="Dessert"
              lines={[
                'Choice of 1 Sweet (Raas Malai, Gulab Jamun, Moong Halwa, and/or Gajar Halwa)',
                'Choice of 1 Ice Cream',
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
