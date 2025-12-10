import { type Metadata } from 'next';
import { generateMetadata } from '@/lib/seo';
import MenuPageHeader from '@/components/MenuPageHeader';
import MenuSectionCard from '@/components/MenuSectionCard';
import MenuCTA from '@/components/MenuCTA';

export const metadata: Metadata = generateMetadata({
  title: 'Shower Menus',
  description:
    'Curated menu selections for baby showers and bridal showers at Da Vinci Banquet Halls in Woodbridge, ON. Thoughtfully planned menus for your special celebration.',
  path: '/menus/showers',
  image: '/assets/images/menus/showers/menu-1.jpg',
});

export default function ShowersMenuPage() {
  return (
    <div className="min-h-screen pt-32 pb-16">
      <div className="container mx-auto max-w-7xl px-4">
        <MenuPageHeader
          title="Shower Menus"
          subtitle="Thoughtfully planned menus for baby and bridal showers"
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
            <div className="bg-davinci-dark-light border-davinci-gold/20 rounded-xl border p-6 text-center">
              <h3 className="text-davinci-gold mb-2 font-serif text-2xl font-bold">Mimosas</h3>
            </div>

            {/* Plated Antipasto */}
            <div>
              <h3 className="mb-4 text-center font-serif text-3xl font-bold text-white">Plated Antipasto</h3>
              <div className="border-davinci-gold from-davinci-gold/20 to-davinci-gold-light/20 rounded-xl border-l-4 bg-linear-to-r p-6">
                <div className="grid grid-cols-2 gap-3 text-lg leading-relaxed text-gray-300 md:grid-cols-3">
                  <p>• Prosciutto</p>
                  <p>• Melone</p>
                  <p>• Bocconcino & Tomatoes</p>
                  <p>• Grilled Vegetables</p>
                  <p>• Assorted Olives</p>
                  <p>• Assorted Cheese</p>
                </div>
              </div>
            </div>

            {/* Pasta */}
            <div>
              <h3 className="mb-4 text-center font-serif text-3xl font-bold text-white">Pasta</h3>
              <div className="bg-davinci-dark-light border-davinci-gold/20 rounded-xl border p-6 text-center">
                <p className="text-lg leading-relaxed text-gray-300">Choice of 2 Pastas OR 1 Pasta & 1 Risotto</p>
              </div>
            </div>

            {/* Entrée */}
            <div>
              <h3 className="mb-4 text-center font-serif text-3xl font-bold text-white">Entrée</h3>
              <div className="border-davinci-gold/20 from-davinci-gold/10 to-davinci-gold-light/10 rounded-xl border bg-linear-to-br p-6">
                <div className="space-y-3 text-lg leading-relaxed text-gray-300">
                  <p className="font-semibold">• Choice of Veal Scallopini OR Chicken</p>
                  <p>• Fresh Seasonal Vegetables</p>
                  <p>• Oven Roasted Rosemary Potatoes</p>
                </div>
              </div>
            </div>

            {/* Salad */}
            <div>
              <h3 className="mb-4 text-center font-serif text-3xl font-bold text-white">Spring Mix Salad</h3>
              <div className="bg-davinci-dark-light border-davinci-gold/20 rounded-xl border p-6 text-center">
                <p className="text-lg leading-relaxed text-gray-300">Dressed with Olive Oil and Balsamic Vinaigrette</p>
              </div>
            </div>

            {/* Dessert */}
            <div>
              <h3 className="mb-4 text-center font-serif text-3xl font-bold text-white">Dessert</h3>
              <div className="bg-davinci-dark-light border-davinci-gold/20 rounded-xl border p-6 text-center">
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
            <div className="border-davinci-gold/20 from-davinci-gold/10 to-davinci-gold-light/10 rounded-xl border bg-linear-to-r p-4 text-center">
              <p className="text-davinci-gold text-lg font-semibold">All Buffet</p>
            </div>

            {/* Mimosas */}
            <div className="bg-davinci-dark-light border-davinci-gold/20 rounded-xl border p-6 text-center">
              <h3 className="text-davinci-gold mb-2 font-serif text-2xl font-bold">Mimosas</h3>
            </div>

            {/* Antipasto */}
            <div>
              <h3 className="mb-4 text-center font-serif text-3xl font-bold text-white">Antipasto</h3>
              <div className="border-davinci-gold from-davinci-gold/20 to-davinci-gold-light/20 rounded-xl border-l-4 bg-linear-to-r p-6">
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
              <h3 className="mb-4 text-center font-serif text-3xl font-bold text-white">Pasta</h3>
              <div className="bg-davinci-dark-light border-davinci-gold/20 rounded-xl border p-6 text-center">
                <p className="text-lg leading-relaxed text-gray-300">Choice of 2 Pastas</p>
              </div>
            </div>

            {/* Entrée */}
            <div>
              <h3 className="mb-4 text-center font-serif text-3xl font-bold text-white">Entrée</h3>
              <div className="border-davinci-gold/20 from-davinci-gold/10 to-davinci-gold-light/10 rounded-xl border bg-linear-to-br p-6">
                <div className="space-y-3 text-lg leading-relaxed text-gray-300">
                  <p className="font-semibold">• Choice of Veal Scallopini OR Chicken</p>
                  <p>• Fresh Seasonal Vegetables</p>
                  <p>• Oven Roasted Rosemary Potatoes</p>
                </div>
              </div>
            </div>

            {/* Salad */}
            <div>
              <h3 className="mb-4 text-center font-serif text-3xl font-bold text-white">Spring Mix Salad</h3>
              <div className="bg-davinci-dark-light border-davinci-gold/20 rounded-xl border p-6 text-center">
                <p className="text-lg leading-relaxed text-gray-300">Dressed with Olive Oil and Balsamic Vinaigrette</p>
              </div>
            </div>

            {/* Dessert */}
            <div>
              <h3 className="mb-4 text-center font-serif text-3xl font-bold text-white">Dessert</h3>
              <div className="bg-davinci-dark-light border-davinci-gold/20 rounded-xl border p-6 text-center">
                <p className="text-lg leading-relaxed text-gray-300">Assortment of Fruits</p>
              </div>
            </div>

            {/* Coffee, Tea & Espresso */}
            <div className="border-davinci-gold/20 from-davinci-gold/10 to-davinci-gold-light/10 rounded-xl border bg-linear-to-br p-6 text-center">
              <h3 className="mb-2 font-serif text-2xl font-bold text-white">Coffee, Tea & Espresso</h3>
            </div>

            {/* Shower Bar */}
            <div className="border-davinci-teal/20 from-davinci-teal/10 to-davinci-teal-dark/10 rounded-xl border bg-linear-to-br p-6">
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
          gradientFrom="teal"
        >
          <div className="space-y-8">
            {/* All Buffet Badge */}
            <div className="border-davinci-gold/20 from-davinci-gold/10 to-davinci-gold-light/10 rounded-xl border bg-linear-to-r p-4 text-center">
              <p className="text-davinci-gold text-lg font-semibold">All Buffet</p>
            </div>

            {/* Mimosas */}
            <div className="bg-davinci-dark-light border-davinci-gold/20 rounded-xl border p-6 text-center">
              <h3 className="text-davinci-gold mb-2 font-serif text-2xl font-bold">Mimosas</h3>
            </div>

            {/* Hot Breakfast Items */}
            <div>
              <h3 className="mb-4 text-center font-serif text-3xl font-bold text-white">Hot Breakfast Items</h3>
              <div className="border-davinci-gold/20 from-davinci-gold/10 to-davinci-gold-light/10 rounded-xl border bg-linear-to-br p-6">
                <div className="space-y-3 text-lg leading-relaxed text-gray-300">
                  <p>• Scrambled Eggs</p>
                  <p>• Breakfast Sausage & Bacon</p>
                  <p>• Hash Browns</p>
                  <p>• Bagels & Toasted Bread with Cream Cheese, Peanut Butter & Jam</p>
                </div>
              </div>
            </div>

            {/* Continental Breakfast Items */}
            <div>
              <h3 className="mb-4 text-center font-serif text-3xl font-bold text-white">Continental Breakfast Items</h3>
              <div className="border-davinci-gold/20 from-davinci-gold/10 to-davinci-gold-light/10 rounded-xl border bg-linear-to-br p-6">
                <div className="space-y-3 text-lg leading-relaxed text-gray-300">
                  <p>• Assorted Croissants & Muffins</p>
                  <p>• Yogurt with Granola & Berries</p>
                </div>
              </div>
            </div>

            {/* Dessert */}
            <div>
              <h3 className="mb-4 text-center font-serif text-3xl font-bold text-white">Dessert</h3>
              <div className="bg-davinci-dark-light border-davinci-gold/20 rounded-xl border p-6 text-center">
                <p className="text-lg leading-relaxed text-gray-300">Assortment of Fruits</p>
              </div>
            </div>

            {/* Coffee, Tea & Espresso */}
            <div className="border-davinci-gold/20 from-davinci-gold/10 to-davinci-gold-light/10 rounded-xl border bg-linear-to-br p-6 text-center">
              <h3 className="mb-2 font-serif text-2xl font-bold text-white">Coffee, Tea & Espresso</h3>
            </div>

            {/* Shower Bar */}
            <div className="border-davinci-teal/20 from-davinci-teal/10 to-davinci-teal-dark/10 rounded-xl border bg-linear-to-br p-6">
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
          title="Ready to Customize Your Shower Menu?"
          description="Contact us to discuss your shower celebration and create the perfect menu"
        />
      </div>
    </div>
  );
}
