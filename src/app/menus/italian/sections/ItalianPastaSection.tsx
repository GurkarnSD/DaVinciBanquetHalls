import MenuSectionCard from '@/components/MenuSectionCard';

export default function ItalianPastaSection() {
  return (
    <MenuSectionCard imageSrc="/assets/images/menus/italian/pasta.jpg" imageAlt="Pasta" title="Pasta">
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <h3 className="mb-6 text-center font-serif text-3xl font-bold text-white">Pasta Types</h3>
          <div className="space-y-3">
            {[
              'Penne',
              'Casareccia',
              'Gnocchi',
              'Fettuccine',
              'Spaghetti',
              'Lasagna with meat or vegetables',
              'Agnolotti filled with cheese or meat',
              'Torteillini filled with cheese or meat',
              'Rotolo stuffed with ricotta & spinach',
              'Fazzoletti',
              'Manicotti stuffed with ricotta and spinach',
              'Cannelloni stuffed with meat',
            ].map((item) => (
              <div key={item} className="border-b border-gray-600 py-2 text-xl leading-relaxed text-gray-300">
                • {item}
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-6 text-center font-serif text-3xl font-bold text-white">Sauces</h3>
          <div className="space-y-3">
            {[
              'Tomato basil',
              'Rose',
              'Primavera',
              'Pesto',
              'Alla vodka',
              'Alla panna',
              'Alla arrabbiata',
              'Alla bolognese',
            ].map((item) => (
              <div key={item} className="border-b border-gray-600 py-2 text-xl leading-relaxed text-gray-300">
                • {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </MenuSectionCard>
  );
}
