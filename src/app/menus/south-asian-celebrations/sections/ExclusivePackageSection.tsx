import Image from 'next/image';
import { CenteredMenuCourse, PackageAppetizers, PackageDinner } from '@/components/PackageMenuBlocks';

export default function ExclusivePackageSection() {
  return (
    <section className="mb-20">
      <div className="overflow-hidden border border-white/8">
        <div className="relative h-64 md:h-96">
          <Image
            src="/assets/images/menus/south-asian-celebrations/exclusive-package.jpg"
            alt="Exclusive Package"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 1200px"
            quality={80}
            loading="lazy"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/50">
            <h2 className="px-4 text-center font-serif text-5xl font-bold text-white md:text-6xl">Exclusive</h2>
          </div>
        </div>
        <div className="p-8 md:p-12">
          <div className="space-y-8">
            <CenteredMenuCourse
              title="Cocktail Hour"
              lines={['Choice of 2 Welcome Drinks', "Chef's Choice Hors D'Oeuvres"]}
            />
            <PackageAppetizers
              vegetarian="Choice of 4 Vegetarian Appetizers"
              nonVegetarian="Choice of 3 Non-Vegetarian Appetizers"
              note="Sweet Platters to be included with Coffee & Tea"
            />
            <PackageDinner
              vegetarian="Choice of 4 Vegetarian Dinner Items"
              nonVegetarian="Choice of 3 Non-Vegetarian Dinner Items"
              columns={3}
              sides={[
                { label: '• Basmati Rice' },
                { label: '• Cucumber Raita' },
                { label: '• Salad Bar' },
                { label: '• Fresh Butter & Garlic Naan', span: true },
              ]}
            />

            {/* Sweet Table */}
            <div>
              <h3 className="menu-section-title">Sweet Table</h3>
              <div className="menu-panel">
                <div className="space-y-4">
                  <p className="text-center text-lg leading-relaxed text-gray-300">
                    Choice of 2 Sweets (Raas Malai, Gulab Jamun, Moong Halwa, and/or Gajar Halwa)
                  </p>
                  <p className="text-center text-lg leading-relaxed text-gray-300">
                    Ice Cream Bar with 2 Flavours of Ice Cream (with toppings)
                  </p>
                  <div className="mt-4 grid grid-cols-2 gap-3 border-t border-gray-200 pt-4 md:grid-cols-4">
                    <p className="text-lg leading-relaxed text-gray-200">• Assorted Cakes</p>
                    <p className="text-lg leading-relaxed text-gray-200">• Italian Pastries</p>
                    <p className="text-lg leading-relaxed text-gray-200">• Assorted Tarts</p>
                    <p className="text-lg leading-relaxed text-gray-200">• Fresh Fruit Platters</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
