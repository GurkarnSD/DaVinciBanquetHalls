'use client';

import MenuPageHeader from '@/components/MenuPageHeader';
import MenuSectionCard from '@/components/MenuSectionCard';
import MenuCTA from '@/components/MenuCTA';

export default function CelebrationOfLifeMenuPage() {
  return (
    <div className="min-h-screen pt-32 pb-16">
      <div className="container mx-auto max-w-7xl px-4">
        <MenuPageHeader
          title="Celebration of Life"
          subtitle="Thoughtful menu selections for memorial services"
          pdfLink="/assets/menus/CelebrationofLifeMenu.pdf"
        />

        {/* Buffet Menu */}
        <MenuSectionCard
          imageSrc="/assets/images/menus/celebration-of-life/card.webp"
          imageAlt="Celebration of Life Menu"
          title="Buffet Menu"
        >
          <div className="space-y-8">
            {/* Antipasto */}
            <div>
              <h3 className="mb-4 text-center font-serif text-3xl font-bold text-white">Antipasto</h3>
              <div className="border-davinci-gold from-davinci-gold/20 to-davinci-gold-light/20 rounded-xl border-l-4 bg-linear-to-r p-6">
                <div className="grid grid-cols-2 gap-3 text-lg leading-relaxed text-gray-200 md:grid-cols-3">
                  <p>• Proscuitto</p>
                  <p>• Assorted Cold Cuts</p>
                  <p>• Bocconcini & Tomatoes</p>
                  <p>• Grilled Vegetables</p>
                  <p>• Assorted Olives</p>
                  <p>• Vegetables Sotto Olio</p>
                  <p>• Assorted Salads</p>
                  <p>• Couscous</p>
                  <p>• Assorted Pizzas & Bread</p>
                  <p>• Assorted Cheese Trays</p>
                </div>
              </div>
            </div>

            {/* Pasta */}
            <div>
              <h3 className="mb-4 text-center font-serif text-3xl font-bold text-white">Pasta</h3>
              <div className="border-davinci-gold from-davinci-gold/20 to-davinci-gold-light/20 rounded-xl border-l-4 bg-linear-to-r p-6">
                <div className="space-y-3 text-lg leading-relaxed text-gray-200">
                  <p>• Casarecce al Pomodoro</p>
                  <p>• Tortellini Alla Panna</p>
                </div>
              </div>
            </div>

            {/* Entree */}
            <div>
              <h3 className="mb-4 text-center font-serif text-3xl font-bold text-white">Entree</h3>
              <div className="border-davinci-gold/20 from-davinci-gold/10 to-davinci-gold-light/10 rounded-xl border bg-linear-to-br p-6">
                <div className="space-y-3 text-lg leading-relaxed text-gray-200">
                  <p>• Veal Parmigiana</p>
                  <p>• Oven Roasted Chicken</p>
                  <p>• Piselli with Mushrooms</p>
                  <p>• Oven Roasted Rosemary Potatoes</p>
                </div>
              </div>
            </div>

            {/* Dessert */}
            <div>
              <h3 className="mb-4 text-center font-serif text-3xl font-bold text-white">Dessert</h3>
              <div className="bg-davinci-dark-light border-davinci-gold/20 rounded-xl border p-6">
                <div className="space-y-3 text-lg leading-relaxed text-gray-200">
                  <p>• Assorted Fruit</p>
                  <p>• Fresh Baked Cookies</p>
                </div>
              </div>
            </div>

            {/* Bar */}
            <div>
              <h3 className="mb-4 text-center font-serif text-3xl font-bold text-white">Bar</h3>
              <div className="border-davinci-teal/20 from-davinci-teal/10 to-davinci-teal-dark/10 rounded-xl border bg-linear-to-br p-6">
                <div className="space-y-3 text-lg leading-relaxed text-gray-200">
                  <p>• Coffee, Tea, Espresso</p>
                  <p>• Red & White Wine on Tables</p>
                  <p>• Soft Drinks & Juice</p>
                  <p>• Still & Sparkling Water</p>
                </div>
              </div>
            </div>
          </div>
        </MenuSectionCard>

        {/* CTA */}
        <MenuCTA
          title="Ready to Customize Your Menu?"
          description="Contact us to discuss your celebration of life service and create a thoughtful menu"
        />
      </div>
    </div>
  );
}
