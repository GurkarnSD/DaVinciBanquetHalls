import { type Metadata } from 'next';
import { generateMetadata } from '@/lib/seo';
import MenuCourse from '@/components/MenuCourse';
import MenuPageHeader from '@/components/MenuPageHeader';
import MenuSectionCard from '@/components/MenuSectionCard';
import MenuCTA from '@/components/MenuCTA';

export const metadata: Metadata = generateMetadata({
  title: 'Holiday Menus',
  description: 'Holiday menu samples at Da Vinci Banquet Halls in Woodbridge, ON — Christmas and seasonal gatherings.',
  path: '/menus/holiday',
  image: '/assets/images/menus/holiday/menu-1.jpg',
});

export default function HolidayMenuPage() {
  return (
    <div className="min-h-screen pt-32 pb-16">
      <div className="container mx-auto max-w-7xl px-4">
        <MenuPageHeader
          title="Holiday Menus"
          subtitle="Sample menus for holiday gatherings."
          pdfLink="/assets/menus/ChristmasMenus.pdf"
        />

        {/* Holiday Menu 1 */}
        <MenuSectionCard
          imageSrc="/assets/images/menus/holiday/menu-1.jpg"
          imageAlt="Holiday Menu 1"
          title="Holiday Menu 1"
        >
          <div className="menu-callout mb-8">
            <p className="text-lg font-semibold">BUFFET STYLE</p>
          </div>

          <div className="space-y-8">
            {/* Antipasto Items */}
            <div>
              <h3 className="menu-section-title">Antipasto Items</h3>
              <div className="menu-panel-accent">
                <div className="grid grid-cols-2 gap-3 text-lg leading-relaxed text-gray-200 md:grid-cols-3">
                  <p>• Assorted Cold Cuts</p>
                  <p>• Assorted Cheese</p>
                  <p>• Bocconcini & Tomatoes</p>
                  <p>• Grilled Vegetables</p>
                  <p>• Olives</p>
                  <p>• Assorted Salads</p>
                  <p>• Assorted Pizza</p>
                </div>
              </div>
            </div>

            <MenuCourse
              title="Pasta Items"
              panel="accent"
              items={["• Rigatoni a'la Forno (Meat or Vegetarian)", '• Cheese Tortellini in Vodka Sauce']}
            />

            {/* Entree Items */}
            <div>
              <h3 className="menu-section-title">Entree Items</h3>
              <div className="menu-panel">
                <div className="space-y-3 text-lg leading-relaxed text-gray-200">
                  <p>• Chicken Breast alla Marsala</p>
                  <p>• Italian Sausage, Peppers & Onions</p>
                  <p>• Peas & Mushrooms with Oven Roasted Potatoes</p>
                </div>
              </div>
            </div>

            {/* Dessert */}
            <div>
              <h3 className="menu-section-title">Dessert</h3>
              <div className="menu-callout">
                <p className="text-lg leading-relaxed text-gray-200">Ice Cream Crepe with Strawberry Coulis</p>
              </div>
            </div>

            <MenuCourse title="Bar Options" items={['• Wine & Beer Bar', '• Open Standard Bar']} />
          </div>
        </MenuSectionCard>

        {/* Holiday Menu 2 */}
        <MenuSectionCard
          imageSrc="/assets/images/menus/holiday/menu-2.jpg"
          imageAlt="Holiday Menu 2"
          title="Holiday Menu 2"
        >
          <div className="menu-callout mb-8">
            <p className="text-lg font-semibold">BUFFET STYLE</p>
          </div>

          <div className="space-y-8">
            {/* Plated Antipasto */}
            <div>
              <h3 className="menu-section-title">Plated Antipasto</h3>
              <div className="menu-panel-accent">
                <div className="grid grid-cols-2 gap-3 text-lg leading-relaxed text-gray-200 md:grid-cols-3">
                  <p>• Proscuitto</p>
                  <p>• Melone</p>
                  <p>• Bocconcini & Tomatoes</p>
                  <p>• Assorted Grilled Vegetables</p>
                  <p>• Olives</p>
                </div>
              </div>
            </div>

            <MenuCourse
              title="Pasta"
              panel="accent"
              items={['• Casareccia in Tomato Basil', '• Manicotti Stuffed with Ricotta & Spinach in Rose']}
            />

            <MenuCourse
              title="Entree"
              items={[
                '• Veal Scallopini in Mushroom Sauce',
                '• Chicken Breast alla Limone',
                '• Oven Roasted Potatoes & Seasonal Vegetables',
                '• Green Salad',
              ]}
            />

            {/* Dessert */}
            <div>
              <h3 className="menu-section-title">Dessert</h3>
              <div className="menu-callout">
                <p className="text-lg leading-relaxed text-gray-200">Ice Cream Crepe with Strawberry Coulis</p>
              </div>
            </div>

            <MenuCourse title="Bar Options" items={['• Wine & Beer Bar', '• Open Standard Bar']} />
          </div>
        </MenuSectionCard>

        {/* Holiday Menu 3 */}
        <MenuSectionCard
          imageSrc="/assets/images/menus/holiday/menu-3.jpg"
          imageAlt="Holiday Menu 3"
          title="Holiday Menu 3"
        >
          <div className="space-y-8">
            {/* Plated Antipasto */}
            <div>
              <h3 className="menu-section-title">Plated Antipasto</h3>
              <div className="menu-panel-accent">
                <div className="grid grid-cols-2 gap-3 text-lg leading-relaxed text-gray-200 md:grid-cols-3">
                  <p>• Proscuitto</p>
                  <p>• Melone</p>
                  <p>• Bocconcini & Tomatoes</p>
                  <p>• Assorted Grilled Vegetables</p>
                  <p>• Olives</p>
                </div>
              </div>
            </div>

            <MenuCourse
              title="Pasta"
              panel="accent"
              items={['• Casareccia in Tomato Basil', '• Manicotti Stuffed with Ricotta & Spinach in Rose']}
            />

            <MenuCourse
              title="Entree"
              items={[
                '• 10 oz Grilled Veal Chop',
                '• Whole Baked Potato',
                '• Rapini and Red & Yellow Roasted Peppers',
                '• Green Salad',
              ]}
            />

            {/* Dessert */}
            <div>
              <h3 className="menu-section-title">Dessert</h3>
              <div className="menu-callout">
                <p className="text-lg leading-relaxed text-gray-200">Ice Cream Crepe with Strawberry Coulis</p>
              </div>
            </div>

            {/* Bar */}
            <div>
              <h3 className="menu-section-title">Bar</h3>
              <div className="menu-panel">
                <p className="text-lg leading-relaxed text-gray-200">Open Standard Bar</p>
              </div>
            </div>
          </div>
        </MenuSectionCard>

        {/* Holiday Menu 4 */}
        <MenuSectionCard
          imageSrc="/assets/images/menus/holiday/menu-4.jpg"
          imageAlt="Holiday Menu 4"
          title="Holiday Menu 4"
        >
          <div className="menu-callout mb-8">
            <p className="text-lg font-semibold">ITALIAN / INDIAN BUFFET</p>
          </div>

          <div className="space-y-8">
            {/* Starters */}
            <div>
              <h3 className="menu-section-title">Starters</h3>
              <div className="menu-panel-accent">
                <div className="grid grid-cols-2 gap-3 text-lg leading-relaxed text-gray-200 md:grid-cols-3">
                  <p>• Assorted Cold Cuts</p>
                  <p>• Bocconcini & Tomatoes</p>
                  <p>• Grilled Vegetables</p>
                  <p>• Olives</p>
                  <p>• Assorted Cheeses</p>
                  <p>• Assorted Salads</p>
                  <p>• Mini Samosas</p>
                  <p>• Mini Spring Rolls</p>
                  <p>• Assorted Pizzas</p>
                </div>
              </div>
            </div>

            <MenuCourse
              title="Pasta Items"
              panel="accent"
              items={['• Rigatoni in Tomato Basil Sauce', '• Cheese Tortellini in Vodka Sauce']}
            />
            <MenuCourse
              title="Entree Items"
              items={[
                '• Chicken Breast in Mushroom Sauce',
                '• Italian Sausage, Peppers & Onions',
                '• Butter Chicken & Shahi Paneer with Fresh Naan',
                '• Potatoes & Choice of Rice',
              ]}
            />

            {/* Dessert */}
            <div>
              <h3 className="menu-section-title">Dessert</h3>
              <div className="menu-callout">
                <p className="text-lg leading-relaxed text-gray-200">Ice Cream Crepe with Strawberry Coulis</p>
              </div>
            </div>

            <MenuCourse title="Bar Options" items={['• Wine & Beer Bar', '• Open Standard Bar']} />
          </div>
        </MenuSectionCard>

        {/* CTA */}
        <MenuCTA
          title="Finalize Your Holiday Menu"
          description="Share your guest count and preferences — we will help lock in the selection."
        />
      </div>
    </div>
  );
}
