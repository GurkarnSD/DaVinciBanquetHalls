import MenuSectionCard from '@/components/MenuSectionCard';

export default function ItalianBarSection() {
  return (
    <MenuSectionCard
      imageSrc="/assets/images/menus/italian/bar.jpg"
      imageAlt="Bar Selections"
      title="Bar Selections"
    >
      <div className="grid gap-8 md:grid-cols-2">
        <div className="menu-panel">
          <h3 className="mb-4 text-center font-serif text-2xl font-bold text-white">Standard Bar</h3>
          <div className="space-y-2 text-lg leading-relaxed text-gray-300">
            <p>Rum, rye, gin, vodka, scotch, dubonnet, vermouth, campari, brandy</p>
            <p>Red & white wine</p>
            <p>Domestic beer (MGD, coors lite, canadian, budweiser)</p>
            <p>Soft drinks, natural & sparkling water</p>
            <p>Coffee, tea, espresso</p>
          </div>
        </div>
        <div className="menu-panel">
          <h3 className="mb-4 text-center font-serif text-2xl font-bold text-white">Deluxe Bar</h3>
          <div className="space-y-2 text-lg leading-relaxed text-gray-300">
            <p>Saumbuca, frangelico, grand marnier, irish cream, cognac, amaretto, grappa, peach schnapps</p>
            <p>Rum, rye, gin, vodka, scotch, dubonnet, vermouth, campari, brandy</p>
            <p>Red & white wine</p>
            <p>Domestic beer (MGD, coors lite, canadian, budweiser)</p>
            <p>Imported beer (corona, heineken)</p>
            <p>Soft drinks, natural & sparkling water, coffee, tea, espresso</p>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="mb-4 text-center font-serif text-2xl font-bold text-white">Specialty Items</h3>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
          {[
            'Martini bar',
            'Prosecco station',
            'Liqueurs at reception',
            'Specialty coffee station',
            'Sangria station',
          ].map((item) => (
            <div key={item} className="menu-panel">
              <p className="text-lg leading-relaxed font-semibold text-white">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </MenuSectionCard>
  );
}
