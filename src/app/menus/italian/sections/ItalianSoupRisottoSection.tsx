import Image from 'next/image';

export default function ItalianSoupRisottoSection() {
  return (
    <section className="mb-20">
      <div className="overflow-hidden border border-white/8">
        <div className="grid md:grid-cols-2">
          <div className="relative h-64 min-h-[400px] md:h-full">
            <Image
              src="/assets/images/menus/italian/soup-risotto.jpg"
              alt="Soup & Risotto"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={80}
              loading="lazy"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/50 p-8">
              <h2 className="text-center font-serif text-5xl font-bold text-white md:text-6xl">Soup & Risotto</h2>
            </div>
          </div>
          <div className="p-8 md:p-12">
            <div className="mb-8">
              <h3 className="mb-6 text-center font-serif text-3xl font-bold text-white">Soup Selections</h3>
              <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                {[
                  'Minestrone',
                  'Butternut squash',
                  'Potato & leek',
                  "Pasta e' fagioli",
                  'Stracciatella',
                  'Caldo verde with authentic chorizo sausages',
                  'Cream of asparagus',
                  'Cream of mushroom',
                ].map((item) => (
                  <div key={item} className="text-lg leading-relaxed text-gray-300">
                    • {item}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="mb-6 text-center font-serif text-3xl font-bold text-white">Risotto Selections</h3>
              <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                {[
                  'Risotto ai funghi',
                  'Risotto with asparagus',
                  'Risotto with arugula',
                  'Risotto milanese',
                  'Risotto pescatore',
                  'Risotto with butternut squash',
                  'Risotto with radicchio',
                ].map((item) => (
                  <div key={item} className="text-lg leading-relaxed text-gray-300">
                    • {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
