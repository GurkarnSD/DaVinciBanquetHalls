import { type Metadata } from 'next';
import { generateMetadata } from '@/lib/seo';
import MenuPageHeader from '@/components/MenuPageHeader';
import MenuSectionCard from '@/components/MenuSectionCard';
import MenuCTA from '@/components/MenuCTA';

export const metadata: Metadata = generateMetadata({
  title: 'Wedding Menus',
  description:
    'Wedding menu samples at Da Vinci Banquet Halls in Woodbridge, ON. Italian cuisine with customizable options for receptions.',
  path: '/menus/weddings',
  image: '/assets/images/menus/weddings/menu-1.jpg',
});

export default function WeddingsMenuPage() {
  return (
    <div className="min-h-screen pt-32 pb-16">
      <div className="container mx-auto max-w-7xl px-4">
        <MenuPageHeader
          title="Wedding Menus"
          subtitle="Sample menus for receptions — dishes can be added or removed."
          pdfLink="/assets/menus/WeddingMenus.pdf"
        />

        {/* Wedding Menu 1 */}
        <MenuSectionCard
          imageSrc="/assets/images/menus/weddings/menu-1.jpg"
          imageAlt="Wedding Menu 1"
          title="Wedding Menu 1"
        >
          <div className="space-y-8">
            {/* Cocktail Hour */}
            <div>
              <h3 className="menu-section-title">Cocktail Hour</h3>
              <div className="menu-panel-accent">
                <h4 className="mb-3 text-xl font-semibold text-white">Hors D&apos;Oeuvres</h4>
                <p className="text-lg leading-relaxed text-gray-300">
                  Assorted hors d&apos;oeuvres
                </p>
              </div>
            </div>

            {/* Champagne Toast */}
            <div className="menu-callout">
              <h3 className="mb-2 font-serif text-xl font-medium text-white">Champagne for Toast</h3>
            </div>

            {/* Plated Antipasto */}
            <div>
              <h3 className="menu-section-title">Plated Antipasto</h3>
              <div className="menu-panel-accent">
                <div className="grid grid-cols-2 gap-3 text-lg leading-relaxed text-gray-300 md:grid-cols-3">
                  <p>• Proscuitto</p>
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
              <h3 className="menu-section-title">Pasta</h3>
              <div className="menu-callout">
                <p className="text-lg leading-relaxed text-gray-200">Choice of 2 Pastas</p>
              </div>
            </div>

            {/* Entrée */}
            <div>
              <h3 className="menu-section-title">Entrée</h3>
              <div className="menu-panel">
                <div className="space-y-3 text-lg leading-relaxed text-gray-300">
                  <p className="font-semibold">• Chicken Breast</p>
                  <p>• Fresh Seasonal Vegetables</p>
                  <p>• Oven Roasted Garlic & Rosemary Potatoes</p>
                </div>
              </div>
            </div>

            {/* Salad */}
            <div>
              <h3 className="menu-section-title">Spring Mix Salad</h3>
              <div className="menu-callout">
                <p className="text-lg leading-relaxed text-gray-200">Dressed with Olive Oil and Balsamic Vinaigrette</p>
              </div>
            </div>

            {/* Dessert */}
            <div>
              <h3 className="menu-section-title">Dessert</h3>
              <div className="menu-callout">
                <p className="text-lg leading-relaxed text-gray-200">Ice Cream Crepe Served with Fresh Berries</p>
              </div>
            </div>

            {/* Late Night */}
            <div>
              <h3 className="menu-section-title">Late Night</h3>
              <div className="menu-callout">
                <p className="text-lg leading-relaxed text-gray-200">One Savory Station</p>
              </div>
            </div>

            {/* Bar */}
            <div className="menu-callout">
              <h3 className="text-davinci-teal mb-2 font-serif text-2xl font-bold">Open Deluxe Bar</h3>
            </div>
          </div>
        </MenuSectionCard>

        {/* Wedding Menu 2 */}
        <MenuSectionCard
          imageSrc="/assets/images/menus/weddings/menu-2.jpg"
          imageAlt="Wedding Menu 2"
          title="Wedding Menu 2"
        >
          <div className="space-y-8">
            {/* Cocktail Hour */}
            <div>
              <h3 className="menu-section-title">Cocktail Hour</h3>
              <div className="menu-panel-accent">
                <h4 className="mb-3 text-xl font-semibold text-white">Martini Cocktails</h4>
              </div>
            </div>

            {/* Deluxe Antipasto Bar */}
            <div>
              <h3 className="menu-section-title">Deluxe Antipasto Bar</h3>
              <div className="menu-panel-accent">
                <div className="grid grid-cols-2 gap-3 text-lg leading-relaxed text-gray-300 md:grid-cols-3">
                  <p>• Prosciutto</p>
                  <p>• Assorted Cold Cuts</p>
                  <p>• Bocconcino & Tomatoes</p>
                  <p>• Grilled Vegetables</p>
                  <p>• Assorted Olives</p>
                  <p>• 3 Assorted Salads</p>
                  <p>• Vegetables Sotto Olio</p>
                  <p>• Assorted Cheese Tray</p>
                  <p>• Mussels Marinara</p>
                  <p>• Calamari</p>
                  <p>• Shrimp Flame</p>
                  <p>• Seafood Salad</p>
                  <p>• Baked Salmon</p>
                </div>
              </div>
            </div>

            {/* Prosecco Toast */}
            <div className="menu-callout">
              <h3 className="mb-2 font-serif text-xl font-medium text-white">Prosecco for Toast</h3>
            </div>

            {/* Pasta */}
            <div>
              <h3 className="menu-section-title">Pasta</h3>
              <div className="menu-callout">
                <p className="text-lg leading-relaxed text-gray-200">Choice of 2 Pastas</p>
              </div>
            </div>

            {/* Entrée */}
            <div>
              <h3 className="menu-section-title">Entrée</h3>
              <div className="menu-panel">
                <div className="space-y-3 text-lg leading-relaxed text-gray-300">
                  <p className="font-semibold">• 10 oz Veal Rib Chop</p>
                  <p>• Fresh Seasonal Vegetables</p>
                  <p>• Oven Roasted Garlic & Rosemary Potatoes</p>
                </div>
              </div>
            </div>

            {/* Salad */}
            <div>
              <h3 className="menu-section-title">Dolce Amaro Salad</h3>
              <div className="menu-callout">
                <p className="text-lg leading-relaxed text-gray-200">With Shaved Parmigiana</p>
                <p className="mt-2 text-lg leading-relaxed text-gray-200">
                  Dressed with Olive Oil and Balsamic Vinaigrette
                </p>
              </div>
            </div>

            {/* Dessert */}
            <div>
              <h3 className="menu-section-title">Dessert</h3>
              <div className="menu-callout">
                <p className="text-lg leading-relaxed text-gray-200">Lemon Sorbet Served with a Mint Leaf</p>
              </div>
            </div>

            {/* Late Night */}
            <div>
              <h3 className="menu-section-title">Late Night</h3>
              <div className="menu-panel">
                <div className="space-y-2 text-center text-lg leading-relaxed text-gray-200">
                  <p>• Deluxe Sweet Table</p>
                  <p>• One Savory Station</p>
                </div>
              </div>
            </div>

            {/* Bar */}
            <div className="menu-callout">
              <h3 className="text-davinci-teal mb-2 font-serif text-2xl font-bold">Open Deluxe Bar</h3>
            </div>
          </div>
        </MenuSectionCard>

        {/* Wedding Menu 3 */}
        <MenuSectionCard
          imageSrc="/assets/images/menus/weddings/menu-3.jpg"
          imageAlt="Wedding Menu 3"
          title="Wedding Menu 3"
        >
          <div className="space-y-8">
            {/* Cocktail Hour */}
            <div>
              <h3 className="menu-section-title">Cocktail Hour</h3>
              <div className="menu-panel-accent">
                <h4 className="mb-3 text-xl font-semibold text-white">Hors D&apos;Oeuvres</h4>
                <p className="text-lg leading-relaxed text-gray-300">
                  Assorted hors d&apos;oeuvres
                </p>
              </div>
            </div>

            {/* Champagne Toast */}
            <div className="menu-callout">
              <h3 className="mb-2 font-serif text-xl font-medium text-white">Champagne for Toast</h3>
            </div>

            {/* First Course */}
            <div>
              <h3 className="menu-section-title">First Course</h3>
              <div className="menu-callout">
                <p className="text-lg leading-relaxed text-gray-200">Choice of Soup or Salad</p>
              </div>
            </div>

            {/* Main Course */}
            <div>
              <h3 className="menu-section-title">Main Course</h3>
              <div className="menu-panel">
                <div className="space-y-3 text-lg leading-relaxed text-gray-300">
                  <p className="font-semibold">• Chicken Breast</p>
                  <p>• Fresh Seasonal Vegetables</p>
                  <p>• Oven Roasted Garlic & Rosemary Potatoes</p>
                </div>
              </div>
            </div>

            {/* Dessert */}
            <div>
              <h3 className="menu-section-title">Dessert</h3>
              <div className="menu-callout">
                <p className="text-lg leading-relaxed text-gray-200">Ice Cream Crepe Served with Fresh Berries</p>
              </div>
            </div>

            {/* Late Night */}
            <div>
              <h3 className="menu-section-title">Late Night</h3>
              <div className="menu-callout">
                <p className="text-lg leading-relaxed text-gray-200">One Savory Station</p>
              </div>
            </div>

            {/* Bar */}
            <div className="menu-callout">
              <h3 className="text-davinci-teal mb-2 font-serif text-2xl font-bold">Open Deluxe Bar</h3>
            </div>
          </div>
        </MenuSectionCard>

        {/* CTA */}
        <MenuCTA
          title="Finalize your wedding menu"
          description="Share your guest count and preferences — we will help lock in the selection."
        />
      </div>
    </div>
  );
}
