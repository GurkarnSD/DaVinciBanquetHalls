import Image from 'next/image';

export default function AppetizersSection() {
  return (
    <section className="mb-20">
      <div className="overflow-hidden border border-white/8">
        <div className="grid md:grid-cols-2">
          <div className="relative h-64 min-h-[400px] md:h-full">
            <Image
              src="/assets/images/menus/south-asian/appetizers.jpg"
              alt="Appetizers"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={80}
              loading="lazy"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/50 p-8">
              <h2 className="text-center font-serif text-5xl font-bold text-white md:text-6xl">Appetizers</h2>
            </div>
          </div>
          <div className="p-8 md:p-12">
            <div className="mb-8">
              <h3 className="mb-6 text-center font-serif text-3xl font-bold text-white">Vegetarian Options</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  'Chaat Papdi',
                  'Vegetarian Pakora',
                  'Gobi Pakora',
                  'Bread Pakora',
                  'Paneer Pakora',
                  'Paneer Fingers',
                  'Aloo Fingers',
                  'Vegetarian Spring Rolls',
                  'Mini Samosa',
                  'Aloo Tikki (with Channa)',
                  'Pav Bhaji',
                  'Vegetarian Noodles',
                  'Vegetarian Manchurian',
                  'Chilli Paneer',
                  'Soya Chop (Chilli Style or Malai Style)',
                  'Dahi Kebab',
                  'Haryali Kebabs',
                  'Vegetarian Cutlets',
                  'Bhel Puri',
                  'Sev Khamani',
                  'Dhokla',
                  'Methi Gota',
                  'Batata Poha',
                  'Dal Vada',
                  'Ragda Patties',
                ].map((item) => (
                  <div key={item} className="text-lg leading-relaxed text-gray-200">
                    • {item}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="mb-6 text-center font-serif text-3xl font-bold text-white">Non-Vegetarian Options</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  'Chicken Tikka',
                  'Chilli Chicken',
                  'Achari Chicken Tikka',
                  'Haryali Chicken Tikka',
                  'Malai Chicken',
                  'Tandoori Chicken',
                  'Chicken Shish Kebab',
                  'Goat Shish Kebab',
                  'Beef Shish Kebab',
                  'Fish Pakora',
                  'Amritsari Fry Fish',
                  'Lamb Chops**',
                ].map((item) => (
                  <div key={item} className="text-lg leading-relaxed text-gray-200">
                    • {item}
                  </div>
                ))}
              </div>
              <p className="mt-4 text-center text-sm text-gray-400 italic">
                ** Premium - additional charges will apply
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
