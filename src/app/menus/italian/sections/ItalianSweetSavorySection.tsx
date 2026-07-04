import Image from 'next/image';

export default function ItalianSweetSavorySection() {
  return (
    <section className="mb-20">
      <div className="overflow-hidden border border-white/8">
        <div className="grid md:grid-cols-2">
          <div className="order-2 p-8 md:order-1 md:p-12">
            <h2 className="mb-8 font-serif text-4xl font-bold text-white md:text-5xl">Sweet & Savory</h2>
            <div className="mb-8">
              <h3 className="mb-4 text-center font-serif text-2xl font-bold text-white">Dessert Selections</h3>
              <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                {[
                  'Tartufo served with fresh berries',
                  'Cuore freddo served with fresh berries',
                  'Lemon sorbet served with fresh mint leaves',
                  'Ice cream crepe served with fresh berries',
                  'Apple blossom topped with ice cream',
                  'Your choice of ice cream flavour',
                  'Cassata sicliana',
                  'Assorted mini pastry platter',
                  'Fresh seasonal fruit platter',
                  'Creme brule',
                ].map((item) => (
                  <div key={item} className="text-lg leading-relaxed text-gray-300">
                    • {item}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="mb-4 text-center font-serif text-2xl font-bold text-white">Late Night Stations</h3>
              <div className="space-y-4">
                <div className="menu-panel">
                  <h4 className="mb-2 font-semibold text-white">Deluxe Sweet Table</h4>
                  <p className="leading-relaxed text-gray-300">
                    Assortment of fresh cakes, delicious mini pastries, assorted tarts, fresh seasonal fruit
                    platters, and assortment of dessert cups
                  </p>
                </div>
                <div className="menu-panel">
                  <h4 className="mb-2 font-semibold text-white">Sweet Stations</h4>
                  <div className="space-y-1 leading-relaxed text-gray-300">
                    <p>• Belgian waffles with ice cream, berries, nutella and banana toppings</p>
                    <p>• Crepes served with whipped cream</p>
                  </div>
                </div>
                <div className="menu-panel">
                  <h4 className="mb-2 font-semibold text-white">Savory Stations</h4>
                  <div className="grid grid-cols-2 gap-2 leading-relaxed text-gray-300">
                    <p>• Pizza station</p>
                    <p>• Whole porchetta</p>
                    <p>• Beef sliders</p>
                    <p>• Poutine station</p>
                    <p>• Pulled pork station</p>
                    <p>• Sausage paninis</p>
                    <p>• Meatball paninis</p>
                    <p>• Veal cutlets</p>
                    <p>• Corn beef station</p>
                    <p>• Fish & chips station</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative order-1 h-64 min-h-[600px] md:order-2 md:h-full">
            <Image
              src="/assets/images/menus/italian/desserts.jpg"
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
