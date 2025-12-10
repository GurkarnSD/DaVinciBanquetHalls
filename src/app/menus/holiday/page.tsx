'use client';

import MenuPageHeader from '@/components/MenuPageHeader';
import MenuSectionCard from '@/components/MenuSectionCard';
import MenuCTA from '@/components/MenuCTA';

export default function HolidayMenuPage() {
  return (
    <div className="min-h-screen pt-32 pb-16">
      <div className="container mx-auto max-w-7xl px-4">
        <MenuPageHeader
          title="Holiday Menus"
          subtitle="Festive curated menus for holiday celebrations"
          pdfLink="/assets/menus/ChristmasMenus.pdf"
        />

        {/* Holiday Menu 1 */}
        <MenuSectionCard
          imageSrc="/assets/images/menus/holiday/menu-1.jpg"
          imageAlt="Holiday Menu 1"
          title="Holiday Menu 1"
        >
          <div className="mb-8 rounded-xl border border-davinci-gold/20 bg-linear-to-r from-davinci-gold/10 to-davinci-gold-light/10 p-4 text-center">
            <p className="text-lg font-semibold text-davinci-gold">BUFFET STYLE</p>
          </div>

          <div className="space-y-8">
            {/* Antipasto Items */}
            <div>
              <h3 className="mb-4 text-center font-serif text-3xl font-bold text-white">
                Antipasto Items
              </h3>
              <div className="rounded-xl border-l-4 border-davinci-gold bg-linear-to-r from-davinci-gold/20 to-davinci-gold-light/20 p-6">
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

            {/* Pasta Items */}
            <div>
              <h3 className="mb-4 text-center font-serif text-3xl font-bold text-white">Pasta Items</h3>
              <div className="rounded-xl border-l-4 border-davinci-gold bg-linear-to-r from-davinci-gold/20 to-davinci-gold-light/20 p-6">
                <div className="space-y-3 text-lg leading-relaxed text-gray-200">
                  <p>• Rigatoni a&apos;la Forno (Meat or Vegetarian)</p>
                  <p>• Cheese Tortellini in Vodka Sauce</p>
                </div>
              </div>
            </div>

            {/* Entree Items */}
            <div>
              <h3 className="mb-4 text-center font-serif text-3xl font-bold text-white">Entree Items</h3>
              <div className="rounded-xl border border-davinci-gold/20 bg-linear-to-br from-davinci-gold/10 to-davinci-gold-light/10 p-6">
                <div className="space-y-3 text-lg leading-relaxed text-gray-200">
                  <p>• Chicken Breast alla Marsala</p>
                  <p>• Italian Sausage, Peppers & Onions</p>
                  <p>• Peas & Mushrooms with Oven Roasted Potatoes</p>
                </div>
              </div>
            </div>

            {/* Dessert */}
            <div>
              <h3 className="mb-4 text-center font-serif text-3xl font-bold text-white">Dessert</h3>
              <div className="rounded-xl bg-davinci-dark-light border border-davinci-gold/20 p-6 text-center">
                <p className="text-lg leading-relaxed text-gray-200">
                  Ice Cream Crepe with Strawberry Coulis
                </p>
              </div>
            </div>

            {/* Bar Options */}
            <div>
              <h3 className="mb-4 text-center font-serif text-3xl font-bold text-white">Bar Options</h3>
              <div className="rounded-xl border border-davinci-teal/20 bg-linear-to-br from-davinci-teal/10 to-davinci-teal-dark/10 p-6">
                <div className="space-y-3 text-lg leading-relaxed text-gray-200">
                  <p>• Wine & Beer Bar</p>
                  <p>• Open Standard Bar</p>
                </div>
              </div>
            </div>
          </div>
        </MenuSectionCard>

        {/* Holiday Menu 2 */}
        <MenuSectionCard
          imageSrc="/assets/images/menus/holiday/menu-2.jpg"
          imageAlt="Holiday Menu 2"
          title="Holiday Menu 2"
          gradientFrom="teal"
        >
          <div className="mb-8 rounded-xl border border-davinci-gold/20 bg-linear-to-r from-davinci-gold/10 to-davinci-gold-light/10 p-4 text-center">
            <p className="text-lg font-semibold text-davinci-gold">BUFFET STYLE</p>
          </div>

          <div className="space-y-8">
            {/* Plated Antipasto */}
            <div>
              <h3 className="mb-4 text-center font-serif text-3xl font-bold text-white">
                Plated Antipasto
              </h3>
              <div className="rounded-xl border-l-4 border-davinci-gold bg-linear-to-r from-davinci-gold/20 to-davinci-gold-light/20 p-6">
                <div className="grid grid-cols-2 gap-3 text-lg leading-relaxed text-gray-200 md:grid-cols-3">
                  <p>• Proscuitto</p>
                  <p>• Melone</p>
                  <p>• Bocconcini & Tomatoes</p>
                  <p>• Assorted Grilled Vegetables</p>
                  <p>• Olives</p>
                </div>
              </div>
            </div>

            {/* Pasta */}
            <div>
              <h3 className="mb-4 text-center font-serif text-3xl font-bold text-white">Pasta</h3>
              <div className="rounded-xl border-l-4 border-davinci-gold bg-linear-to-r from-davinci-gold/20 to-davinci-gold-light/20 p-6">
                <div className="space-y-3 text-lg leading-relaxed text-gray-200">
                  <p>• Casareccia in Tomato Basil</p>
                  <p>• Manicotti Stuffed with Ricotta & Spinach in Rose</p>
                </div>
              </div>
            </div>

            {/* Entree */}
            <div>
              <h3 className="mb-4 text-center font-serif text-3xl font-bold text-white">Entree</h3>
              <div className="rounded-xl border border-davinci-gold/20 bg-linear-to-br from-davinci-gold/10 to-davinci-gold-light/10 p-6">
                <div className="space-y-3 text-lg leading-relaxed text-gray-200">
                  <p>• Veal Scallopini in Mushroom Sauce</p>
                  <p>• Chicken Breast alla Limone</p>
                  <p>• Oven Roasted Potatoes & Seasonal Vegetables</p>
                  <p>• Green Salad</p>
                </div>
              </div>
            </div>

            {/* Dessert */}
            <div>
              <h3 className="mb-4 text-center font-serif text-3xl font-bold text-white">Dessert</h3>
              <div className="rounded-xl bg-davinci-dark-light border border-davinci-gold/20 p-6 text-center">
                <p className="text-lg leading-relaxed text-gray-200">
                  Ice Cream Crepe with Strawberry Coulis
                </p>
              </div>
            </div>

            {/* Bar Options */}
            <div>
              <h3 className="mb-4 text-center font-serif text-3xl font-bold text-white">Bar Options</h3>
              <div className="rounded-xl border border-davinci-teal/20 bg-linear-to-br from-davinci-teal/10 to-davinci-teal-dark/10 p-6">
                <div className="space-y-3 text-lg leading-relaxed text-gray-200">
                  <p>• Wine & Beer Bar</p>
                  <p>• Open Standard Bar</p>
                </div>
              </div>
            </div>
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
              <h3 className="mb-4 text-center font-serif text-3xl font-bold text-white">
                Plated Antipasto
              </h3>
              <div className="rounded-xl border-l-4 border-davinci-gold bg-linear-to-r from-davinci-gold/20 to-davinci-gold-light/20 p-6">
                <div className="grid grid-cols-2 gap-3 text-lg leading-relaxed text-gray-200 md:grid-cols-3">
                  <p>• Proscuitto</p>
                  <p>• Melone</p>
                  <p>• Bocconcini & Tomatoes</p>
                  <p>• Assorted Grilled Vegetables</p>
                  <p>• Olives</p>
                </div>
              </div>
            </div>

            {/* Pasta */}
            <div>
              <h3 className="mb-4 text-center font-serif text-3xl font-bold text-white">Pasta</h3>
              <div className="rounded-xl border-l-4 border-davinci-gold bg-linear-to-r from-davinci-gold/20 to-davinci-gold-light/20 p-6">
                <div className="space-y-3 text-lg leading-relaxed text-gray-200">
                  <p>• Casareccia in Tomato Basil</p>
                  <p>• Manicotti Stuffed with Ricotta & Spinach in Rose</p>
                </div>
              </div>
            </div>

            {/* Entree */}
            <div>
              <h3 className="mb-4 text-center font-serif text-3xl font-bold text-white">Entree</h3>
              <div className="rounded-xl border border-davinci-gold/20 bg-linear-to-br from-davinci-gold/10 to-davinci-gold-light/10 p-6">
                <div className="space-y-3 text-lg leading-relaxed text-gray-200">
                  <p>• 10 oz Grilled Veal Chop</p>
                  <p>• Whole Baked Potato</p>
                  <p>• Rapini and Red & Yellow Roasted Peppers</p>
                  <p>• Green Salad</p>
                </div>
              </div>
            </div>

            {/* Dessert */}
            <div>
              <h3 className="mb-4 text-center font-serif text-3xl font-bold text-white">Dessert</h3>
              <div className="rounded-xl bg-davinci-dark-light border border-davinci-gold/20 p-6 text-center">
                <p className="text-lg leading-relaxed text-gray-200">
                  Ice Cream Crepe with Strawberry Coulis
                </p>
              </div>
            </div>

            {/* Bar */}
            <div>
              <h3 className="mb-4 text-center font-serif text-3xl font-bold text-white">Bar</h3>
              <div className="rounded-xl border border-davinci-teal/20 bg-linear-to-br from-davinci-teal/10 to-davinci-teal-dark/10 p-6">
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
          gradientFrom="teal"
        >
          <div className="mb-8 rounded-xl border border-davinci-gold/20 bg-linear-to-r from-davinci-gold/10 to-davinci-gold-light/10 p-4 text-center">
            <p className="text-lg font-semibold text-davinci-gold">ITALIAN / INDIAN BUFFET</p>
          </div>

          <div className="space-y-8">
            {/* Starters */}
            <div>
              <h3 className="mb-4 text-center font-serif text-3xl font-bold text-white">Starters</h3>
              <div className="rounded-xl border-l-4 border-davinci-gold bg-linear-to-r from-davinci-gold/20 to-davinci-gold-light/20 p-6">
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

            {/* Pasta Items */}
            <div>
              <h3 className="mb-4 text-center font-serif text-3xl font-bold text-white">Pasta Items</h3>
              <div className="rounded-xl border-l-4 border-davinci-gold bg-linear-to-r from-davinci-gold/20 to-davinci-gold-light/20 p-6">
                <div className="space-y-3 text-lg leading-relaxed text-gray-200">
                  <p>• Rigatoni in Tomato Basil Sauce</p>
                  <p>• Cheese Tortellini in Vodka Sauce</p>
                </div>
              </div>
            </div>

            {/* Entree Items */}
            <div>
              <h3 className="mb-4 text-center font-serif text-3xl font-bold text-white">Entree Items</h3>
              <div className="rounded-xl border border-davinci-gold/20 bg-linear-to-br from-davinci-gold/10 to-davinci-gold-light/10 p-6">
                <div className="space-y-3 text-lg leading-relaxed text-gray-200">
                  <p>• Chicken Breast in Mushroom Sauce</p>
                  <p>• Italian Sausage, Peppers & Onions</p>
                  <p>• Butter Chicken & Shahi Paneer with Fresh Naan</p>
                  <p>• Potatoes & Choice of Rice</p>
                </div>
              </div>
            </div>

            {/* Dessert */}
            <div>
              <h3 className="mb-4 text-center font-serif text-3xl font-bold text-white">Dessert</h3>
              <div className="rounded-xl bg-davinci-dark-light border border-davinci-gold/20 p-6 text-center">
                <p className="text-lg leading-relaxed text-gray-200">
                  Ice Cream Crepe with Strawberry Coulis
                </p>
              </div>
            </div>

            {/* Bar Options */}
            <div>
              <h3 className="mb-4 text-center font-serif text-3xl font-bold text-white">Bar Options</h3>
              <div className="rounded-xl border border-davinci-teal/20 bg-linear-to-br from-davinci-teal/10 to-davinci-teal-dark/10 p-6">
                <div className="space-y-3 text-lg leading-relaxed text-gray-200">
                  <p>• Wine & Beer Bar</p>
                  <p>• Open Standard Bar</p>
                </div>
              </div>
            </div>
          </div>
        </MenuSectionCard>

        {/* CTA */}
        <MenuCTA
          title="Ready to Customize Your Holiday Menu?"
          description="Contact us to discuss your holiday celebration and create a festive menu"
        />
      </div>
    </div>
  );
}
