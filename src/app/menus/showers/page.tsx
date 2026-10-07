import { type Metadata } from 'next';
import { generateMetadata } from '@/lib/seo';
import MenuCourse from '@/components/MenuCourse';
import MenuPageHeader from '@/components/MenuPageHeader';
import MenuSectionCard from '@/components/MenuSectionCard';
import MenuCTA from '@/components/MenuCTA';

export const metadata: Metadata = generateMetadata({
  title: 'Shower Menus',
  description: 'Shower menu samples for baby and bridal showers at Da Vinci Banquet Halls in Woodbridge, ON.',
  path: '/menus/showers',
  image: '/assets/images/menus/showers/menu-1.jpg',
});

export default function ShowersMenuPage() {
  return (
    <div className="min-h-screen pt-32 pb-16">
      <div className="container mx-auto max-w-7xl px-4">
        <MenuPageHeader
          title="Shower Menus"
          subtitle="Sample menus for baby and bridal showers."
          pdfLink="/assets/menus/ShowerMenus.pdf"
        />

        {/* Shower Menu 1 */}
        <MenuSectionCard
          imageSrc="/assets/images/menus/showers/menu-1.jpg"
          imageAlt="Shower Menu 1"
          title="Shower Menu 1"
        >
          <div className="space-y-8">
            {/* Mimosas */}
            <div className="menu-callout">
              <h3 className="mb-2 font-serif text-xl font-medium text-white">Mimosas</h3>
            </div>

            <MenuCourse
              title="Plated Antipasto"
              panel="accent"
              layout="grid"
              tone="muted"
              items={[
                '• Prosciutto',
                '• Melone',
                '• Bocconcino & Tomatoes',
                '• Grilled Vegetables',
                '• Assorted Olives',
                '• Assorted Cheese',
              ]}
            />

            {/* Pasta */}
            <div>
              <h3 className="menu-section-title">Pasta</h3>
              <div className="menu-callout">
                <p className="text-lg leading-relaxed text-gray-300">Choice of 2 Pastas OR 1 Pasta & 1 Risotto</p>
              </div>
            </div>

            <MenuCourse
              title="Entrée"
              tone="muted"
              items={[
                { label: '• Choice of Veal Scallopini OR Chicken', emphasis: true },
                '• Fresh Seasonal Vegetables',
                '• Oven Roasted Rosemary Potatoes',
              ]}
            />

            {/* Salad */}
            <div>
              <h3 className="menu-section-title">Spring Mix Salad</h3>
              <div className="menu-callout">
                <p className="text-lg leading-relaxed text-gray-300">Dressed with Olive Oil and Balsamic Vinaigrette</p>
              </div>
            </div>

            {/* Dessert */}
            <div>
              <h3 className="menu-section-title">Dessert</h3>
              <div className="menu-callout">
                <p className="text-lg leading-relaxed text-gray-300">Assortment of Fruits</p>
              </div>
            </div>

            {/* Coffee, Tea & Espresso */}
            <div className="rounded-xl border border-[#C9A961]/20 bg-linear-to-br from-[#C9A961]/10 to-[#E5C97A]/10 p-6 text-center">
              <h3 className="mb-2 font-serif text-2xl font-bold text-white">Coffee, Tea & Espresso</h3>
            </div>

            {/* Shower Bar */}
            <div className="rounded-xl border border-[#1A5F7A]/20 bg-linear-to-br from-[#1A5F7A]/10 to-[#0F4C5C]/10 p-6">
              <h3 className="mb-3 text-center font-serif text-2xl font-bold text-[#1A5F7A]">Shower Bar</h3>
              <div className="space-y-2 text-center text-lg leading-relaxed text-gray-300">
                <p>Red & White Wine on Tables</p>
                <p>Soft Drinks, Juice, Sparkling & Still Water</p>
              </div>
            </div>
          </div>
        </MenuSectionCard>

        {/* Shower Menu 2 */}
        <MenuSectionCard
          imageSrc="/assets/images/menus/showers/menu-2.jpg"
          imageAlt="Shower Menu 2"
          title="Shower Menu 2"
        >
          <div className="space-y-8">
            {/* All Buffet Badge */}
            <div className="menu-callout">
              <p className="text-lg font-semibold">All Buffet</p>
            </div>

            {/* Mimosas */}
            <div className="menu-callout">
              <h3 className="mb-2 font-serif text-xl font-medium text-white">Mimosas</h3>
            </div>

            {/* Antipasto */}
            <div>
              <h3 className="menu-section-title">Antipasto</h3>
              <div className="menu-panel-accent">
                <div className="grid grid-cols-2 gap-3 text-lg leading-relaxed text-gray-300 md:grid-cols-3">
                  <p>• Prosciutto</p>
                  <p>• Assorted Cold Cuts</p>
                  <p>• Bocconcini & Tomatoes</p>
                  <p>• Grilled Vegetables</p>
                  <p>• Assorted Olives</p>
                  <p>• Vegetables Sotto Olio</p>
                  <p>• Assorted Salads</p>
                  <p>• Assorted Cheese Trays</p>
                </div>
              </div>
            </div>

            {/* Pasta */}
            <div>
              <h3 className="menu-section-title">Pasta</h3>
              <div className="menu-callout">
                <p className="text-lg leading-relaxed text-gray-300">Choice of 2 Pastas</p>
              </div>
            </div>

            <MenuCourse
              title="Entrée"
              tone="muted"
              items={[
                { label: '• Choice of Veal Scallopini OR Chicken', emphasis: true },
                '• Fresh Seasonal Vegetables',
                '• Oven Roasted Rosemary Potatoes',
              ]}
            />

            {/* Salad */}
            <div>
              <h3 className="menu-section-title">Spring Mix Salad</h3>
              <div className="menu-callout">
                <p className="text-lg leading-relaxed text-gray-300">Dressed with Olive Oil and Balsamic Vinaigrette</p>
              </div>
            </div>

            {/* Dessert */}
            <div>
              <h3 className="menu-section-title">Dessert</h3>
              <div className="menu-callout">
                <p className="text-lg leading-relaxed text-gray-300">Assortment of Fruits</p>
              </div>
            </div>

            {/* Coffee, Tea & Espresso */}
            <div className="menu-panel text-center">
              <h3 className="mb-2 font-serif text-2xl font-bold text-white">Coffee, Tea & Espresso</h3>
            </div>

            {/* Shower Bar */}
            <div className="menu-panel">
              <h3 className="mb-3 text-center font-serif text-2xl font-bold text-[#1A5F7A]">Shower Bar</h3>
              <div className="space-y-2 text-center text-lg leading-relaxed text-gray-300">
                <p>Red & White Wine on Tables</p>
                <p>Soft Drinks, Juice, Sparkling & Still Water</p>
              </div>
            </div>
          </div>
        </MenuSectionCard>

        {/* Shower Menu 3 */}
        <MenuSectionCard
          imageSrc="/assets/images/menus/showers/menu-3.jpg"
          imageAlt="Shower Menu 3"
          title="Shower Menu 3"
        >
          <div className="space-y-8">
            {/* All Buffet Badge */}
            <div className="menu-callout">
              <p className="text-lg font-semibold">All Buffet</p>
            </div>

            {/* Mimosas */}
            <div className="menu-callout">
              <h3 className="mb-2 font-serif text-xl font-medium text-white">Mimosas</h3>
            </div>

            <MenuCourse
              title="Hot Breakfast Items"
              tone="muted"
              items={[
                '• Scrambled Eggs',
                '• Breakfast Sausage & Bacon',
                '• Hash Browns',
                '• Bagels & Toasted Bread with Cream Cheese, Peanut Butter & Jam',
              ]}
            />

            {/* Continental Breakfast Items */}
            <div>
              <h3 className="menu-section-title">Continental Breakfast Items</h3>
              <div className="menu-panel">
                <div className="space-y-3 text-lg leading-relaxed text-gray-300">
                  <p>• Assorted Croissants & Muffins</p>
                  <p>• Yogurt with Granola & Berries</p>
                </div>
              </div>
            </div>

            {/* Dessert */}
            <div>
              <h3 className="menu-section-title">Dessert</h3>
              <div className="menu-callout">
                <p className="text-lg leading-relaxed text-gray-300">Assortment of Fruits</p>
              </div>
            </div>

            {/* Coffee, Tea & Espresso */}
            <div className="menu-panel text-center">
              <h3 className="mb-2 font-serif text-2xl font-bold text-white">Coffee, Tea & Espresso</h3>
            </div>

            {/* Shower Bar */}
            <div className="menu-panel">
              <h3 className="mb-3 text-center font-serif text-2xl font-bold text-[#1A5F7A]">Shower Bar</h3>
              <div className="space-y-2 text-center text-lg leading-relaxed text-gray-300">
                <p>Red & White Wine on Tables</p>
                <p>Soft Drinks, Juice, Sparkling & Still Water</p>
              </div>
            </div>
          </div>
        </MenuSectionCard>

        {/* CTA */}
        <MenuCTA
          title="Finalize Your Shower Menu"
          description="Share your guest count and preferences — we will help lock in the selection."
        />
      </div>
    </div>
  );
}
