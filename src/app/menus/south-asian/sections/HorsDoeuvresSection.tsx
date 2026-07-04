import MenuSectionCard from '@/components/MenuSectionCard';

export default function HorsDoeuvresSection() {
  return (
    <MenuSectionCard
      imageSrc="/assets/images/menus/south-asian/hors-doeuvres.jpg"
      imageAlt="Hors D'Oeuvres"
      title="Hors D'Oeuvres"
    >
      <div className="grid gap-8 md:grid-cols-2">
        {/* Vegetarian Options */}
        <div>
          <h3 className="mb-6 text-center font-serif text-3xl font-bold text-white">Vegetarian Options</h3>
          <div className="space-y-3">
            {[
              'Mini Spring Rolls',
              'Mini Samosas',
              'Mozzarella Sticks',
              'Cauliflower Bites',
              'Mini Vegetarian Pinwheel Wraps',
              'Arancini (Mini Rice Balls)',
              'Spinach Stuffed Sandwiches',
              'Cucumber Canapes with Cream Cheese & Tomatoes',
              'Fried Pickles',
              'Jalepeno Poppers',
              'Cheese Bites',
              'Dahi Kebabs',
            ].map((item) => (
              <div key={item} className="text-lg leading-relaxed text-gray-200">
                • {item}
              </div>
            ))}
          </div>
        </div>

        {/* Non-Vegetarian Options */}
        <div>
          <h3 className="mb-6 text-center font-serif text-3xl font-bold text-white">Non-Vegetarian Options</h3>
          <div className="space-y-3">
            {[
              'Tempura Shrimps',
              'Chicken Satays',
              'Beef Satays',
              'Chicken Strips',
              'Cucumber Canapes with Tuna',
            ].map((item) => (
              <div key={item} className="text-lg leading-relaxed text-gray-200">
                • {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Specialty Live Stations */}
      <div className="mt-8">
        <h3 className="mb-6 text-center font-serif text-3xl font-bold text-white">Specialty Live Stations</h3>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {[
            'Gol Gappe / Pani Puri',
            'Jalebi',
            'Pav Bhaji',
            'Aloo Tikki with Channa',
            'Bhel Puri',
            'Shrimp Flambe',
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
