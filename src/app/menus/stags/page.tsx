import { type Metadata } from 'next';
import { generateMetadata } from '@/lib/seo';
import MenuPageHeader from '@/components/MenuPageHeader';
import MenuSectionCard from '@/components/MenuSectionCard';
import MenuCTA from '@/components/MenuCTA';

export const metadata: Metadata = generateMetadata({
  title: 'Stag Menus',
  description:
    'Stag party menu samples at Da Vinci Banquet Halls in Woodbridge, ON. Customizable for your guest count.',
  path: '/menus/stags',
  image: '/assets/images/menus/stags/menu.jpg',
});

export default function StagsMenuPage() {
  return (
    <div className="min-h-screen pt-32 pb-16">
      <div className="container mx-auto max-w-7xl px-4">
        <MenuPageHeader
          title="Stag Menus"
          subtitle="Sample menus for stag parties."
          pdfLink="/assets/menus/StagMenu.pdf"
        />

        {/* Stag Menu */}
        <MenuSectionCard imageSrc="/assets/images/menus/stags/menu.jpg" imageAlt="Stag Menu" title="Stag Menu">
          <div className="space-y-8">
            {/* Antipasto Station */}
            <div>
              <h3 className="menu-section-title">Antipasto Station</h3>
              <div className="menu-panel-accent">
                <div className="grid grid-cols-2 gap-3 text-lg leading-relaxed text-gray-300 md:grid-cols-3">
                  <p>• Assorted Cold Cuts</p>
                  <p>• Bocconcino & Tomatoes</p>
                  <p>• Assorted Olives</p>
                  <p>• Assorted Salads</p>
                  <p>• Assorted Cheese Trays</p>
                  <p>• Vegetables Sotto Olio</p>
                  <p>• Assorted Breads</p>
                </div>
              </div>
            </div>

            {/* Pasta Station */}
            <div>
              <h3 className="menu-section-title">Pasta Station</h3>
              <div className="menu-panel-accent">
                <div className="space-y-3 text-lg leading-relaxed text-gray-300">
                  <p>• Choice of Two Pastas</p>
                  <p>• Assorted Pizza & Focaccia</p>
                </div>
              </div>
            </div>

            {/* Entrée Items */}
            <div>
              <h3 className="menu-section-title">Entrée Items</h3>
              <div className="menu-panel">
                <div className="space-y-3 text-lg leading-relaxed text-gray-300">
                  <p>• Oven Roasted Chicken</p>
                  <p>• Veal al Sugo</p>
                  <p>• Fresh Seasonal Vegetables</p>
                  <p>• Oven Roasted Potatoes</p>
                </div>
              </div>
            </div>

            {/* Late Night Optional Add-ons */}
            <div>
              <h3 className="menu-section-title">Late Night (Optional Add-ons)</h3>
              <div className="menu-panel">
                <div className="space-y-3 text-lg leading-relaxed text-gray-300">
                  <p>• Porchetta Station</p>
                  <p>• Fish & Chips Station</p>
                  <p>• Pasta Aglio e Olio</p>
                </div>
              </div>
            </div>

            {/* Bar */}
            <div className="menu-callout">
              <h3 className="text-davinci-teal mb-2 font-serif text-2xl font-bold">Open Standard Bar</h3>
            </div>
          </div>
        </MenuSectionCard>

        {/* CTA */}
        <MenuCTA
          title="Finalize your stag menu"
          description="Share your guest count and preferences — we will help lock in the selection."
        />
      </div>
    </div>
  );
}
