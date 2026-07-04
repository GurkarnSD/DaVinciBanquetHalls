import MenuSectionCard from '@/components/MenuSectionCard';

export default function BarSection() {
  return (
    <MenuSectionCard
      imageSrc="/assets/images/menus/south-asian/bar.jpg"
      imageAlt="Bar Selections"
      title="Bar Selections"
    >
      <div className="space-y-8">
        <div className="menu-panel">
          <h3 className="mb-4 text-center font-serif text-2xl font-bold text-white">Non-Alcoholic</h3>
          <p className="text-lg leading-relaxed text-gray-200">
            Soft Drinks, Juices, Still & Sparkling Water, Coffee, Tea, Espresso
          </p>
        </div>

        <div className="menu-panel">
          <h3 className="mb-4 text-center font-serif text-2xl font-bold text-white">Deluxe Bar</h3>
          <div className="space-y-2 text-lg leading-relaxed text-gray-200">
            <p>Red & White Wine, Vodka, Gin, Rum, Tequila, Whiskey, Scotch</p>
            <p>Domestic Beer, Imported Beer, Brandy, Cognac</p>
            <p>Campari, Vermouth, Cinzano, Aperol, Lucano, Montenegro, Averna</p>
            <p>Soft Drinks, Juices, Still & Sparkling Water, Coffee, Tea, Espresso</p>
          </div>
        </div>

        <div className="menu-panel">
          <h3 className="mb-4 text-center font-serif text-2xl font-bold text-white">Premium Bar</h3>
          <p className="mb-3 text-lg font-semibold text-white">Premium Brand Upgrades:</p>
          <div className="space-y-2 text-lg leading-relaxed text-gray-200">
            <p>Red & White Wine</p>
            <p>Vodka (Grey Goose, Titos), Gin, Rum, Tequila (1800 Blanco)</p>
            <p>
              Whiskey (Jagermeister, Jack Daniel&apos;s), Scotch (Glenlivet, Black Label, Chivas Regal, Glenfiddich)
            </p>
            <p>Domestic Beer (Coors Lite, Molson), Imported Beer (Heineken, Corona, Stella)</p>
            <p>Brandy, Cognac, Campari, Vermouth, Cinzano, Aperol, Lucano, Montenegro, Averna</p>
            <p>Soft Drinks, Juices, Still & Sparkling Water, Coffee, Tea, Espresso</p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="mb-4 text-center font-serif text-2xl font-bold text-white">Specialty Items</h3>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {['Martini Bar', 'Prosecco station', 'Sangria station', 'Espresso Martini Station'].map((item) => (
            <div key={item} className="menu-panel">
              <p className="text-lg leading-relaxed font-semibold text-white">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </MenuSectionCard>
  );
}
