import MenuSectionCard from '@/components/MenuSectionCard';

export default function ItalianAppetizersSection() {
  return (
    <MenuSectionCard
      imageSrc="/assets/images/menus/italian/appetizers.jpg"
      imageAlt="Italian Appetizers"
      title="Appetizers"
    >
      {/* Hors D'Oeuvres */}
      <div className="mb-12">
        <h3 className="mb-6 text-center font-serif text-3xl font-bold text-white md:text-4xl">
          Hors D&apos;Oeuvres
        </h3>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="menu-panel">
            <h4 className="mb-4 text-xl font-semibold">Butler Style</h4>
            <div className="space-y-2 text-lg leading-relaxed text-gray-300">
              <p>• Mini spring rolls</p>
              <p>• Tempura shrimps</p>
              <p>• Mozzarella sticks</p>
              <p>• Spanakopita</p>
              <p>• Cauliflower bites</p>
              <p>• Fried breaded zucchini</p>
              <p>• Mini egg rolls</p>
            </div>
          </div>
          <div className="menu-panel">
            <h4 className="mb-4 text-xl font-semibold">Options Available</h4>
            <ul className="space-y-2 text-lg leading-relaxed text-gray-300">
              <li>• Mini rice balls</li>
              <li>• Shrimp cocktail</li>
              <li>• Proscuitto wrapped melon squares</li>
              <li>• Stuffed mushroom caps</li>
              <li>• Chicken satays</li>
              <li>• Assorted mini pizza</li>
              <li>• Coconut shrimp</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Antipasto */}
      <div>
        <h3 className="mb-8 text-center font-serif text-3xl font-bold text-white md:text-4xl">Antipasto</h3>
        <div className="space-y-6">
          <div className="menu-panel-accent">
            <h4 className="mb-3 text-2xl font-semibold text-white">Plated Antipasto</h4>
            <div className="space-y-2 text-lg leading-relaxed text-gray-300">
              <p>• Proscuitto</p>
              <p>• Melone</p>
              <p>• Bocconcini & cherry tomatoes</p>
              <p>• Grilled vegetables (zucchini, eggplant, red peppers)</p>
              <p>• Assorted olives</p>
              <p>• Assorted cheese</p>
            </div>
          </div>
          <div className="menu-panel-accent">
            <h4 className="mb-3 text-2xl font-semibold text-white">Plated Antipasto Options</h4>
            <div className="grid grid-cols-2 gap-3 text-lg text-gray-300 md:grid-cols-3">
              <p>• Bruschetta</p>
              <p>• Seafood salad</p>
              <p>• Shrimp cocktail</p>
              <p>• Mussels marinara</p>
              <p>• Calamari</p>
            </div>
          </div>
          <div className="menu-panel-accent">
            <h4 className="mb-3 text-2xl font-semibold text-white">Antipasto Bar</h4>
            <div className="grid grid-cols-2 gap-3 text-lg leading-relaxed text-gray-300 md:grid-cols-3">
              <p>• Proscuitto</p>
              <p>• Assorted cold cuts</p>
              <p>• Bocconcini & cherry tomatoes</p>
              <p>• Grilled vegetables</p>
              <p>• Assorted olives</p>
              <p>• Vegetables sott&apos;olio</p>
              <p>• Assorted salads</p>
              <p>• Couscous</p>
              <p>• Assorted pizza</p>
              <p>• Assorted international cheese trays</p>
            </div>
          </div>
          <div className="menu-panel-accent">
            <h4 className="mb-3 text-2xl font-semibold text-white">Deluxe Antipasto & Seafood Bar</h4>
            <p className="mb-3 text-lg leading-relaxed text-gray-300">Includes above noted items with:</p>
            <div className="grid grid-cols-2 gap-3 text-lg text-gray-300 md:grid-cols-3">
              <p>• Whole baked salmon</p>
              <p>• Shrimp cocktail</p>
              <p>• Mussels marinara</p>
              <p>• Seppiolline con piselli</p>
              <p>• Risotto pescatore</p>
              <p>• Seafood salad</p>
              <p>• Smoked salmon</p>
            </div>
          </div>
          <div className="menu-panel-accent">
            <h4 className="mb-3 text-2xl font-semibold text-white">Specialty Antipasto Station Options</h4>
            <div className="grid grid-cols-2 gap-3 text-lg text-gray-300 md:grid-cols-3">
              <p>• Saganaki station</p>
              <p>• Shrimp flambe</p>
              <p>• Sushi bar</p>
              <p>• Live pasta station</p>
              <p>• Oyster bar</p>
            </div>
          </div>
        </div>
      </div>
    </MenuSectionCard>
  );
}
