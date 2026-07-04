import MenuSectionCard from '@/components/MenuSectionCard';

export default function WelcomeDrinksSection() {
  return (
    <MenuSectionCard
      imageSrc="/assets/images/menus/south-asian/welcome-drinks.jpg"
      imageAlt="Welcome Drinks"
      title="Welcome Drinks"
    >
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {[
          'Mango Shake',
          'Mango Lassi',
          'Strawberry Shake',
          'Virgin Mojito',
          'Fruit Punch',
          'Lemonade',
          'Roohafza',
          'Sangria',
        ].map((item) => (
          <div key={item} className="menu-panel">
            • {item}
          </div>
        ))}
      </div>
      <p className="mt-4 text-center text-sm text-gray-400 italic">** Premium - additional charges will apply</p>
    </MenuSectionCard>
  );
}
