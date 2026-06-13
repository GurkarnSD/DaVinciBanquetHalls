'use client';

import Image from 'next/image';
import MenuPageHeader from '@/components/MenuPageHeader';
import MenuCTA from '@/components/MenuCTA';

export default function SouthAsianCelebrationsMenuPage() {
  return (
    <div className="page-shell pb-16">
      <div className="container mx-auto max-w-5xl px-4">
        <MenuPageHeader
          title="South Asian Celebrations"
          subtitle="Specialized curated menus for South Asian celebrations"
          pdfLink="/assets/menus/SouthAsianCelebrationMenus.pdf"
        />

        {/* Gold Package */}
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
                {/* Appetizers */}
                <div>
                  <h3 className="menu-section-title">Appetizers</h3>
                  <div className="menu-panel-accent">
                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <h4 className="mb-3 text-xl font-semibold text-white">Vegetarian</h4>
                        <p className="text-lg leading-relaxed text-gray-200">Choice of 2 Vegetarian Appetizers</p>
                      </div>
                      <div>
                        <h4 className="mb-3 text-xl font-semibold text-white">Non-Vegetarian</h4>
                        <p className="text-lg leading-relaxed text-gray-200">Choice of 2 Non-Vegetarian Appetizers</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dinner */}
                <div>
                  <h3 className="menu-section-title">Dinner</h3>
                  <div className="rounded-xl border border-[#C9A961]/20 bg-linear-to-br from-[#C9A961]/10 to-[#E5C97A]/10 p-6">
                    <div className="space-y-4">
                      <div className="grid gap-6 md:grid-cols-2">
                        <div>
                          <h4 className="mb-3 text-xl font-semibold text-white">Vegetarian</h4>
                          <p className="text-lg leading-relaxed text-gray-200">Choice of 2 Vegetarian Dinner Items</p>
                        </div>
                        <div>
                          <h4 className="mb-3 text-xl font-semibold text-white">Non-Vegetarian</h4>
                          <p className="text-lg leading-relaxed text-gray-200">
                            Choice of 2 Non-Vegetarian Dinner Items
                          </p>
                        </div>
                      </div>
                      <div className="mt-4 grid grid-cols-2 gap-3 border-t border-[#C9A961]/20 pt-4 md:grid-cols-3">
                        <p className="text-lg leading-relaxed text-gray-200">• Basmati Rice</p>
                        <p className="text-lg leading-relaxed text-gray-200">• Cucumber Raita</p>
                        <p className="text-lg leading-relaxed text-gray-200">• Garden Salad</p>
                        <p className="text-lg leading-relaxed text-gray-200 md:col-span-3">• Fresh Butter Naan</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dessert */}
                <div>
                  <h3 className="menu-section-title">Dessert</h3>
                  <div className="menu-panel">
                    <div className="space-y-3 text-center text-lg leading-relaxed text-gray-200">
                      <p>Choice of 1 Sweet (Raas Malai, Gulab Jamun, Moong Halwa, and/or Gajar Halwa)</p>
                      <p>Choice of 1 Ice Cream</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Diamond Package */}
        <section className="mb-20">
          <div className="overflow-hidden border border-white/8">
            <div className="relative h-64 md:h-96">
              <Image
                src="/assets/images/menus/south-asian-celebrations/diamond-package.jpg"
                alt="Diamond Package"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1200px"
                quality={80}
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                <h2 className="px-4 text-center font-serif text-5xl font-bold text-white md:text-6xl">Diamond</h2>
              </div>
            </div>
            <div className="p-8 md:p-12">
              <div className="space-y-8">
                {/* Cocktail Hour */}
                <div className="menu-callout">
                  <h3 className="mb-2 font-serif text-xl font-medium text-white">Cocktail Hour</h3>
                  <p className="text-lg leading-relaxed text-gray-200">Choice of 1 Welcome Drink</p>
                </div>

                {/* Appetizers */}
                <div>
                  <h3 className="menu-section-title">Appetizers</h3>
                  <div className="menu-panel-accent">
                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <h4 className="mb-3 text-xl font-semibold text-white">Vegetarian</h4>
                        <p className="text-lg leading-relaxed text-gray-200">Choice of 3 Vegetarian Appetizers</p>
                      </div>
                      <div>
                        <h4 className="mb-3 text-xl font-semibold text-white">Non-Vegetarian</h4>
                        <p className="text-lg leading-relaxed text-gray-200">Choice of 2 Non-Vegetarian Appetizers</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dinner */}
                <div>
                  <h3 className="menu-section-title">Dinner</h3>
                  <div className="rounded-xl border border-[#C9A961]/20 bg-linear-to-br from-[#C9A961]/10 to-[#E5C97A]/10 p-6">
                    <div className="space-y-4">
                      <div className="grid gap-6 md:grid-cols-2">
                        <div>
                          <h4 className="mb-3 text-xl font-semibold text-white">Vegetarian</h4>
                          <p className="text-lg leading-relaxed text-gray-200">Choice of 3 Vegetarian Dinner Items</p>
                        </div>
                        <div>
                          <h4 className="mb-3 text-xl font-semibold text-white">Non-Vegetarian</h4>
                          <p className="text-lg leading-relaxed text-gray-200">
                            Choice of 2 Non-Vegetarian Dinner Items
                          </p>
                        </div>
                      </div>
                      <div className="mt-4 grid grid-cols-2 gap-3 border-t border-[#C9A961]/20 pt-4 md:grid-cols-4">
                        <p className="text-lg leading-relaxed text-gray-200">• Basmati Rice</p>
                        <p className="text-lg leading-relaxed text-gray-200">• Raita</p>
                        <p className="text-lg leading-relaxed text-gray-200">• Garden Salad</p>
                        <p className="text-lg leading-relaxed text-gray-200">• Pasta Salad</p>
                        <p className="text-lg leading-relaxed text-gray-200 md:col-span-4">• Fresh Butter Naan</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dessert */}
                <div>
                  <h3 className="menu-section-title">Dessert</h3>
                  <div className="menu-panel">
                    <div className="space-y-3 text-center text-lg leading-relaxed text-gray-200">
                      <p>Choice of 2 Sweets (Raas Malai, Gulab Jamun, Moong Halwa, and/or Gajar Halwa)</p>
                      <p>Choice of 1 Ice Cream</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Platinum Package */}
        <section className="mb-20">
          <div className="overflow-hidden border border-white/8">
            <div className="relative h-64 md:h-96">
              <Image
                src="/assets/images/menus/south-asian-celebrations/platinum-package.jpg"
                alt="Platinum Package"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1200px"
                quality={80}
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                <h2 className="px-4 text-center font-serif text-5xl font-bold text-white md:text-6xl">Platinum</h2>
              </div>
            </div>
            <div className="p-8 md:p-12">
              <div className="space-y-8">
                {/* Cocktail Hour */}
                <div className="menu-callout">
                  <h3 className="mb-2 font-serif text-xl font-medium text-white">Cocktail Hour</h3>
                  <p className="text-lg leading-relaxed text-gray-200">Choice of 1 Welcome Drink</p>
                </div>

                {/* Appetizers */}
                <div>
                  <h3 className="menu-section-title">Appetizers</h3>
                  <div className="menu-panel-accent">
                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <h4 className="mb-3 text-xl font-semibold text-white">Vegetarian</h4>
                        <p className="text-lg leading-relaxed text-gray-200">Choice of 3 Vegetarian Appetizers</p>
                      </div>
                      <div>
                        <h4 className="mb-3 text-xl font-semibold text-white">Non-Vegetarian</h4>
                        <p className="text-lg leading-relaxed text-gray-200">Choice of 3 Non-Vegetarian Appetizers</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dinner */}
                <div>
                  <h3 className="menu-section-title">Dinner</h3>
                  <div className="rounded-xl border border-[#C9A961]/20 bg-linear-to-br from-[#C9A961]/10 to-[#E5C97A]/10 p-6">
                    <div className="space-y-4">
                      <div className="grid gap-6 md:grid-cols-2">
                        <div>
                          <h4 className="mb-3 text-xl font-semibold text-white">Vegetarian</h4>
                          <p className="text-lg leading-relaxed text-gray-200">Choice of 4 Vegetarian Dinner Items</p>
                        </div>
                        <div>
                          <h4 className="mb-3 text-xl font-semibold text-white">Non-Vegetarian</h4>
                          <p className="text-lg leading-relaxed text-gray-200">
                            Choice of 2 Non-Vegetarian Dinner Items
                          </p>
                        </div>
                      </div>
                      <div className="mt-4 grid grid-cols-2 gap-3 border-t border-[#C9A961]/20 pt-4 md:grid-cols-3">
                        <p className="text-lg leading-relaxed text-gray-200">• Basmati Rice</p>
                        <p className="text-lg leading-relaxed text-gray-200">• Raita</p>
                        <p className="text-lg leading-relaxed text-gray-200">• Choice of 3 Salads</p>
                        <p className="text-lg leading-relaxed text-gray-200 md:col-span-3">• Fresh Butter Naan</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dessert */}
                <div>
                  <h3 className="menu-section-title">Dessert</h3>
                  <div className="menu-panel">
                    <div className="space-y-3 text-center text-lg leading-relaxed text-gray-200">
                      <p>Choice of 2 Sweets (Raas Malai, Gulab Jamun, Moong Halwa, and/or Gajar Halwa)</p>
                      <p>Choice of 2 Ice Creams</p>
                      <p>Fruit Platters</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Exclusive Package */}
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
                {/* Cocktail Hour */}
                <div>
                  <h3 className="menu-section-title">Cocktail Hour</h3>
                  <div className="menu-panel">
                    <div className="space-y-3 text-center text-lg leading-relaxed text-gray-200">
                      <p>Choice of 2 Welcome Drinks</p>
                      <p>Chef&apos;s Choice Hors D&apos;Oeuvres</p>
                    </div>
                  </div>
                </div>

                {/* Appetizers */}
                <div>
                  <h3 className="menu-section-title">Appetizers</h3>
                  <div className="menu-panel-accent">
                    <div className="mb-4 grid gap-6 md:grid-cols-2">
                      <div>
                        <h4 className="mb-3 text-xl font-semibold text-white">Vegetarian</h4>
                        <p className="text-lg leading-relaxed text-gray-200">Choice of 4 Vegetarian Appetizers</p>
                      </div>
                      <div>
                        <h4 className="mb-3 text-xl font-semibold text-white">Non-Vegetarian</h4>
                        <p className="text-lg leading-relaxed text-gray-200">Choice of 3 Non-Vegetarian Appetizers</p>
                      </div>
                    </div>
                    <div className="border-t border-[#C9A961]/30 pt-4 text-center">
                      <p className="text-lg leading-relaxed text-gray-200">
                        Sweet Platters to be included with Coffee & Tea
                      </p>
                    </div>
                  </div>
                </div>

                {/* Dinner */}
                <div>
                  <h3 className="menu-section-title">Dinner</h3>
                  <div className="rounded-xl border border-[#C9A961]/20 bg-linear-to-br from-[#C9A961]/10 to-[#E5C97A]/10 p-6">
                    <div className="space-y-4">
                      <div className="grid gap-6 md:grid-cols-2">
                        <div>
                          <h4 className="mb-3 text-xl font-semibold text-white">Vegetarian</h4>
                          <p className="text-lg leading-relaxed text-gray-200">Choice of 4 Vegetarian Dinner Items</p>
                        </div>
                        <div>
                          <h4 className="mb-3 text-xl font-semibold text-white">Non-Vegetarian</h4>
                          <p className="text-lg leading-relaxed text-gray-200">
                            Choice of 3 Non-Vegetarian Dinner Items
                          </p>
                        </div>
                      </div>
                      <div className="mt-4 grid grid-cols-2 gap-3 border-t border-[#C9A961]/20 pt-4 md:grid-cols-3">
                        <p className="text-lg leading-relaxed text-gray-200">• Basmati Rice</p>
                        <p className="text-lg leading-relaxed text-gray-200">• Cucumber Raita</p>
                        <p className="text-lg leading-relaxed text-gray-200">• Salad Bar</p>
                        <p className="text-lg leading-relaxed text-gray-200 md:col-span-3">
                          • Fresh Butter & Garlic Naan
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

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

        <MenuCTA
          title="Customize Your Celebration Menu"
          description="Contact us to discuss your South Asian celebration and build the right menu."
        />
      </div>
    </div>
  );
}
