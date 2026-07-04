import MenuSectionCard from '@/components/MenuSectionCard';

export default function ItalianEntreeSection() {
  return (
    <MenuSectionCard imageSrc="/assets/images/menus/italian/entree.jpg" imageAlt="Entree" title="Entree">
      <div className="mb-12 grid gap-8 md:grid-cols-3">
        {/* Poultry */}
        <div className="menu-panel">
          <h3 className="mb-4 text-center font-serif text-2xl font-bold text-white">Poultry</h3>
          <ul className="space-y-2 text-lg leading-relaxed text-gray-300">
            <li>• Chicken breast with a white wine sauce</li>
            <li>• Chicken corden bleu</li>
            <li>• Grilled chicken breast al limone</li>
            <li>• Chicken breast alla marsala</li>
            <li>• Chicken breast alla parmigiana</li>
            <li>• Rock cornish hen stuffed with rice</li>
            <li>• Chicken breast stuffed with asiago cheese and spinach</li>
          </ul>
        </div>

        {/* Veal */}
        <div className="menu-panel">
          <h3 className="mb-4 text-center font-serif text-2xl font-bold text-white">Veal</h3>
          <ul className="space-y-2 text-lg leading-relaxed text-gray-300">
            <li>• Grilled veal rib chop (8-10 oz)</li>
            <li>• Veal scaloppini with a mushroom sauce</li>
            <li>• Veal marsala</li>
            <li>• Veal tenderloin medallions</li>
            <li>• Veal piccata</li>
            <li>• Veal roast au jus</li>
            <li>• Veal parmigiana</li>
          </ul>
        </div>

        {/* Beef */}
        <div className="menu-panel">
          <h3 className="mb-4 text-center font-serif text-2xl font-bold text-white">Beef</h3>
          <ul className="space-y-2 text-lg leading-relaxed text-gray-300">
            <li>• Chateaubriand with a reduced cognac sauce</li>
            <li>• Filet mignon with a mushroom sauce</li>
            <li>• Prime rib</li>
            <li>• New York strip loin steak</li>
            <li>• Beef rib eye steak au jus</li>
            <li>• Roast beef</li>
          </ul>
        </div>
      </div>

      {/* Seafood */}
      <div className="mb-8">
        <h3 className="mb-6 text-center font-serif text-3xl font-bold text-white">Seafood Selections</h3>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="menu-panel">
            <h4 className="mb-2 text-xl font-semibold text-white">Frittura Mista di Mare</h4>
            <p className="text-lg leading-relaxed text-gray-300">
              Shrimp, calamari rings, fillet of sole, merluzzo lightly floured and deep fried
            </p>
          </div>
          <div className="menu-panel">
            <h4 className="mb-2 text-xl font-semibold text-white">Zuppa di Pesce</h4>
            <p className="text-lg leading-relaxed text-gray-300">
              Jumbo shrimps, crab legs, calamari, seppiolini, monk fish and mussels. Served in your choice of a
              light tomato or white wine sauce
            </p>
          </div>
          <div className="menu-panel">
            <p className="text-lg leading-relaxed text-gray-300">• Lobster tail</p>
          </div>
          <div className="menu-panel">
            <p className="text-lg leading-relaxed text-gray-300">• Chilean sea bass</p>
          </div>
          <div className="menu-panel">
            <p className="text-lg leading-relaxed text-gray-300">• Jumbo tiger shrimp</p>
          </div>
          <div className="menu-panel">
            <p className="text-lg leading-relaxed text-gray-300">• Fresh atlantic salmon filet</p>
          </div>
          <div className="menu-panel md:col-span-2">
            <p className="text-lg leading-relaxed text-gray-300">
              • Fish skewer with jumbo shrimps and calamari rings
            </p>
          </div>
        </div>
      </div>

      {/* Vegetables, Potatoes, Salads */}
      <div className="grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="mb-4 text-center font-serif text-2xl font-bold text-white">Vegetables</h3>
          <div className="space-y-3">
            {['Medley of vegetables', 'Asparagus bundle', 'Rapini', 'Roasted peppers', 'Green beans'].map(
              (item) => (
                <div key={item} className="text-lg leading-relaxed text-gray-300">
                  • {item}
                </div>
              )
            )}
          </div>
        </div>
        <div>
          <h3 className="mb-4 text-center font-serif text-2xl font-bold text-white">Potatoes</h3>
          <div className="space-y-3">
            {[
              'Oven roasted rosemary potatoes',
              'Mini reds',
              'Parisienne',
              'Mashed potatoes',
              'Whole baked potato',
            ].map((item) => (
              <div key={item} className="text-lg leading-relaxed text-gray-300">
                • {item}
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-4 text-center font-serif text-2xl font-bold text-white">Salads</h3>
          <div className="space-y-3">
            {['Mixed Italian salad', 'Dolce amaro salad', 'Caesar salad', 'Greek salad'].map((item) => (
              <div key={item} className="text-lg leading-relaxed text-gray-300">
                • {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </MenuSectionCard>
  );
}
