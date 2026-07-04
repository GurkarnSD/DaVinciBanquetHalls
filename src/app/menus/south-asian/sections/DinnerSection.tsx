import MenuSectionCard from '@/components/MenuSectionCard';

export default function DinnerSection() {
  return (
    <MenuSectionCard imageSrc="/assets/images/menus/south-asian/dinner.jpg" imageAlt="Dinner" title="Dinner">
      <div className="grid gap-8 md:grid-cols-3">
        {/* Rice */}
        <div>
          <h3 className="mb-4 text-center font-serif text-2xl font-bold text-white">Rice</h3>
          <div className="space-y-2">
            {[
              'Jeera Rice',
              'Vegetarian Pulao Rice',
              'Steamed White Rice',
              'Vegetarian Fried Rice',
              'Chicken Biryani (Hydrabadi or Pakistani Style)',
              'Goat Biryani (Hydrabadi or Pakistani Style)',
            ].map((item) => (
              <div key={item} className="text-lg leading-relaxed text-gray-200">
                • {item}
              </div>
            ))}
          </div>
        </div>

        {/* Yogurt */}
        <div>
          <h3 className="mb-4 text-center font-serif text-2xl font-bold text-white">Yogurt</h3>
          <div className="space-y-2">
            {['Boondi Raita', 'Cucumber Raita', 'Dahi Bhalla', 'Plain Yogurt'].map((item) => (
              <div key={item} className="text-lg leading-relaxed text-gray-200">
                • {item}
              </div>
            ))}
          </div>
        </div>

        {/* Salad */}
        <div>
          <h3 className="mb-4 text-center font-serif text-2xl font-bold text-white">Salad</h3>
          <div className="space-y-2">
            {[
              'Garden Salad',
              'Coleslaw',
              'Potato Salad',
              'Macaroni Salad',
              'Pasta Salad',
              'Caesar Salad',
              'Greek Salad',
              'Bean Salad',
              'Caprese Salad (Bocconcini & Tomatoes)',
              'Assorted Olives',
            ].map((item) => (
              <div key={item} className="text-lg leading-relaxed text-gray-200">
                • {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bread */}
      <div className="mt-8">
        <h3 className="mb-4 text-center font-serif text-2xl font-bold text-white">Bread</h3>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
          {['Butter Naan', 'Garlic Naan', 'Tandoori Roti', 'Tawa Roti**', 'Pouri'].map((item) => (
            <div key={item} className="menu-panel">
              <p className="text-lg leading-relaxed font-semibold text-white">{item}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-center text-sm text-gray-400 italic">** Premium - additional charges will apply</p>
      </div>
    </MenuSectionCard>
  );
}
