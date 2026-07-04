import Image from 'next/image';

export default function DessertSection() {
  return (
    <section className="mb-20">
      <div className="overflow-hidden border border-white/8">
        <div className="grid md:grid-cols-2">
          <div className="order-2 p-8 md:order-1 md:p-12">
            <h2 className="mb-8 font-serif text-4xl font-bold text-white md:text-5xl">Dessert</h2>

            <div className="mb-8">
              <h3 className="mb-4 text-center font-serif text-2xl font-bold text-white">
                South Asian Dessert Selection
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  'Raas Malai',
                  'Gulab Jamun',
                  'Moong Halwa',
                  'Gajar Halwa',
                  'Soozi Halwa',
                  'Fruit Custard',
                  'Kheer',
                  'Jarda',
                  'Shreekhand (Plain / Mango / Dry Fruit)',
                ].map((item) => (
                  <div key={item} className="text-lg leading-relaxed text-gray-200">
                    • {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h3 className="mb-4 text-center font-serif text-2xl font-bold text-white">Ice Cream Selection</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  'Vanilla',
                  'Strawberry',
                  'Chocolate',
                  'Mango',
                  'Pistachio',
                  'Butterscotch',
                  'Cookies & Cream',
                  'Sorbet',
                ].map((item) => (
                  <div key={item} className="text-lg leading-relaxed text-gray-200">
                    • {item}
                  </div>
                ))}
              </div>
              <p className="mt-2 text-sm text-gray-400 italic">Add-ons: Waffles**</p>
            </div>

            <div className="mb-8">
              <h3 className="mb-4 text-center font-serif text-2xl font-bold text-white">Deluxe Sweet Table</h3>
              <p className="text-lg leading-relaxed text-gray-200">
                Assortment of fresh cakes, delicious mini pastries, assorted tarts, fresh seasonal fruit platters,
                and assortment of dessert cups
              </p>
            </div>

            <div>
              <h3 className="mb-4 text-center font-serif text-2xl font-bold text-white">
                Late Night Stations (Savory Stations)
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  'Pizza station',
                  'Beef sliders',
                  'Poutine station',
                  'Chicken Burgers',
                  'Taco Station',
                  'Chicken Nuggets',
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
          <div className="relative order-1 h-64 min-h-[600px] md:order-2 md:h-full">
            <Image
              src="/assets/images/menus/south-asian/desserts.jpg"
              alt="Desserts"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={80}
              loading="lazy"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/50 p-8">
              <h2 className="text-center font-serif text-5xl font-bold text-white md:text-6xl">Desserts</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
