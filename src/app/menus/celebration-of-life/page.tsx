import MenuCourse from '@/components/MenuCourse';
import MenuPageHeader from '@/components/MenuPageHeader';
import MenuSectionCard from '@/components/MenuSectionCard';
import MenuCTA from '@/components/MenuCTA';

export default function CelebrationOfLifeMenuPage() {
  return (
    <div className="min-h-screen pt-32 pb-16">
      <div className="container mx-auto max-w-7xl px-4">
        <MenuPageHeader
          title="Celebration of Life"
          subtitle="Menu options for memorial services."
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
              <h3 className="menu-section-title">Antipasto</h3>
              <div className="menu-panel-accent">
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

            <MenuCourse title="Pasta" panel="accent" items={['• Casarecce al Pomodoro', '• Tortellini Alla Panna']} />
            <MenuCourse
              title="Entree"
              items={[
                '• Veal Parmigiana',
                '• Oven Roasted Chicken',
                '• Piselli with Mushrooms',
                '• Oven Roasted Rosemary Potatoes',
              ]}
            />
            <MenuCourse title="Dessert" items={['• Assorted Fruit', '• Fresh Baked Cookies']} />
            <MenuCourse
              title="Bar"
              items={[
                '• Coffee, Tea, Espresso',
                '• Red & White Wine on Tables',
                '• Soft Drinks & Juice',
                '• Still & Sparkling Water',
              ]}
            />
          </div>
        </MenuSectionCard>

        {/* CTA */}
        <MenuCTA title="Discuss the Menu" description="Tell us about the gathering and we will help shape the menu." />
      </div>
    </div>
  );
}
