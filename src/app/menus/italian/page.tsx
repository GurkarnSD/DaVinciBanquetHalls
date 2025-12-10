'use client';

import MenuPageHeader from '@/components/MenuPageHeader';
import MenuSectionCard from '@/components/MenuSectionCard';
import MenuCTA from '@/components/MenuCTA';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ItalianMenuPage() {
  return (
    <div className="min-h-screen pt-32 pb-16">
      <div className="container mx-auto max-w-7xl px-4">
        <MenuPageHeader
          title="Italian Menu"
          subtitle="Authentic Italian cuisine crafted with passion and tradition"
          pdfLink="/assets/menus/ItalianMenu.pdf"
        />

        {/* Appetizers Section */}
        <MenuSectionCard
          imageSrc="/assets/images/menus/italian/appetizers.jpg"
          imageAlt="Italian Appetizers"
          title="Appetizers"
        >
          {/* Hors D'Oeuvres */}
          <div className="mb-12">
            <h3 className="mb-6 text-center font-serif text-3xl font-bold text-white md:text-4xl">
              Hors D&apos;Oeuvres
            </h3>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="bg-davinci-dark-light border-davinci-gold/20 rounded-xl border p-6">
                <h4 className="text-davinci-gold mb-4 text-xl font-semibold">Butler Style</h4>
                <div className="space-y-2 text-lg leading-relaxed text-gray-300">
                  <p>• Mini spring rolls</p>
                  <p>• Tempura shrimps</p>
                  <p>• Mozzarella sticks</p>
                  <p>• Spanakopita</p>
                  <p>• Cauliflower bites</p>
                  <p>• Fried breaded zucchini</p>
                  <p>• Mini egg rolls</p>
                </div>
              </div>
              <div className="bg-davinci-dark-light border-davinci-gold/20 rounded-xl border p-6">
                <h4 className="text-davinci-gold mb-4 text-xl font-semibold">Options Available</h4>
                <ul className="space-y-2 text-lg leading-relaxed text-gray-300">
                  <li>• Mini rice balls</li>
                  <li>• Shrimp cocktail</li>
                  <li>• Proscuitto wrapped melon squares</li>
                  <li>• Stuffed mushroom caps</li>
                  <li>• Chicken satays</li>
                  <li>• Assorted mini pizza</li>
                  <li>• Coconut shrimp</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Antipasto */}
          <div>
            <h3 className="mb-8 text-center font-serif text-3xl font-bold text-white md:text-4xl">Antipasto</h3>
            <div className="space-y-6">
              <div className="border-davinci-gold from-davinci-gold/20 to-davinci-gold-light/20 rounded-xl border-l-4 bg-linear-to-r p-6">
                <h4 className="mb-3 text-2xl font-semibold text-white">Plated Antipasto</h4>
                <div className="space-y-2 text-lg leading-relaxed text-gray-300">
                  <p>• Proscuitto</p>
                  <p>• Melone</p>
                  <p>• Bocconcini & cherry tomatoes</p>
                  <p>• Grilled vegetables (zucchini, eggplant, red peppers)</p>
                  <p>• Assorted olives</p>
                  <p>• Assorted cheese</p>
                </div>
              </div>
              <div className="border-davinci-gold from-davinci-gold/20 to-davinci-gold-light/20 rounded-xl border-l-4 bg-linear-to-r p-6">
                <h4 className="mb-3 text-2xl font-semibold text-white">Plated Antipasto Options</h4>
                <div className="grid grid-cols-2 gap-3 text-lg text-gray-300 md:grid-cols-3">
                  <p>• Bruschetta</p>
                  <p>• Seafood salad</p>
                  <p>• Shrimp cocktail</p>
                  <p>• Mussels marinara</p>
                  <p>• Calamari</p>
                </div>
              </div>
              <div className="border-davinci-gold from-davinci-gold/20 to-davinci-gold-light/20 rounded-xl border-l-4 bg-linear-to-r p-6">
                <h4 className="mb-3 text-2xl font-semibold text-white">Antipasto Bar</h4>
                <div className="grid grid-cols-2 gap-3 text-lg leading-relaxed text-gray-300 md:grid-cols-3">
                  <p>• Proscuitto</p>
                  <p>• Assorted cold cuts</p>
                  <p>• Bocconcini & cherry tomatoes</p>
                  <p>• Grilled vegetables</p>
                  <p>• Assorted olives</p>
                  <p>• Vegetables sott&apos;olio</p>
                  <p>• Assorted salads</p>
                  <p>• Couscous</p>
                  <p>• Assorted pizza</p>
                  <p>• Assorted international cheese trays</p>
                </div>
              </div>
              <div className="border-davinci-gold from-davinci-gold/20 to-davinci-gold-light/20 rounded-xl border-l-4 bg-linear-to-r p-6">
                <h4 className="mb-3 text-2xl font-semibold text-white">Deluxe Antipasto & Seafood Bar</h4>
                <p className="mb-3 text-lg leading-relaxed text-gray-300">Includes above noted items with:</p>
                <div className="grid grid-cols-2 gap-3 text-lg text-gray-300 md:grid-cols-3">
                  <p>• Whole baked salmon</p>
                  <p>• Shrimp cocktail</p>
                  <p>• Mussels marinara</p>
                  <p>• Seppiolline con piselli</p>
                  <p>• Risotto pescatore</p>
                  <p>• Seafood salad</p>
                  <p>• Smoked salmon</p>
                </div>
              </div>
              <div className="border-davinci-gold from-davinci-gold/20 to-davinci-gold-light/20 rounded-xl border-l-4 bg-linear-to-r p-6">
                <h4 className="mb-3 text-2xl font-semibold text-white">Specialty Antipasto Station Options</h4>
                <div className="grid grid-cols-2 gap-3 text-lg text-gray-300 md:grid-cols-3">
                  <p>• Saganaki station</p>
                  <p>• Shrimp flambe</p>
                  <p>• Sushi bar</p>
                  <p>• Live pasta station</p>
                  <p>• Oyster bar</p>
                </div>
              </div>
            </div>
          </div>
        </MenuSectionCard>

        {/* Soup & Risotto Section - Special Layout */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="premium-card overflow-hidden rounded-2xl">
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
                <div className="from-davinci-teal/85 to-davinci-teal-dark/85 absolute inset-0 flex items-center justify-center bg-linear-to-br p-8">
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
        </motion.section>

        {/* Pasta Section */}
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

        {/* Entree Section */}
        <MenuSectionCard imageSrc="/assets/images/menus/italian/entree.jpg" imageAlt="Entree" title="Entree">
          <div className="mb-12 grid gap-8 md:grid-cols-3">
            {/* Poultry */}
            <div className="border-davinci-gold/20 from-davinci-gold/10 to-davinci-gold-light/10 rounded-xl border bg-linear-to-br p-6">
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
            <div className="border-davinci-gold/20 from-davinci-gold/10 to-davinci-gold-light/10 rounded-xl border bg-linear-to-br p-6">
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
            <div className="border-davinci-gold/20 from-davinci-gold/10 to-davinci-gold-light/10 rounded-xl border bg-linear-to-br p-6">
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
              <div className="bg-davinci-dark-light border-davinci-gold/20 rounded-xl border p-6">
                <h4 className="mb-2 text-xl font-semibold text-white">Frittura Mista di Mare</h4>
                <p className="text-lg leading-relaxed text-gray-300">
                  Shrimp, calamari rings, fillet of sole, merluzzo lightly floured and deep fried
                </p>
              </div>
              <div className="bg-davinci-dark-light border-davinci-gold/20 rounded-xl border p-6">
                <h4 className="mb-2 text-xl font-semibold text-white">Zuppa di Pesce</h4>
                <p className="text-lg leading-relaxed text-gray-300">
                  Jumbo shrimps, crab legs, calamari, seppiolini, monk fish and mussels. Served in your choice of a
                  light tomato or white wine sauce
                </p>
              </div>
              <div className="bg-davinci-dark-light border-davinci-gold/20 rounded-xl border p-6">
                <p className="text-lg leading-relaxed text-gray-300">• Lobster tail</p>
              </div>
              <div className="bg-davinci-dark-light border-davinci-gold/20 rounded-xl border p-6">
                <p className="text-lg leading-relaxed text-gray-300">• Chilean sea bass</p>
              </div>
              <div className="bg-davinci-dark-light border-davinci-gold/20 rounded-xl border p-6">
                <p className="text-lg leading-relaxed text-gray-300">• Jumbo tiger shrimp</p>
              </div>
              <div className="bg-davinci-dark-light border-davinci-gold/20 rounded-xl border p-6">
                <p className="text-lg leading-relaxed text-gray-300">• Fresh atlantic salmon filet</p>
              </div>
              <div className="bg-davinci-dark-light border-davinci-gold/20 rounded-xl border p-6 md:col-span-2">
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

        {/* Sweet & Savory Section - Special Layout */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="premium-card overflow-hidden rounded-2xl">
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
                    <div className="bg-davinci-dark-light border-davinci-gold/20 rounded-xl border p-4">
                      <h4 className="mb-2 font-semibold text-white">Deluxe Sweet Table</h4>
                      <p className="leading-relaxed text-gray-300">
                        Assortment of fresh cakes, delicious mini pastries, assorted tarts, fresh seasonal fruit
                        platters, and assortment of dessert cups
                      </p>
                    </div>
                    <div className="bg-davinci-dark-light border-davinci-gold/20 rounded-xl border p-4">
                      <h4 className="mb-2 font-semibold text-white">Sweet Stations</h4>
                      <div className="space-y-1 leading-relaxed text-gray-300">
                        <p>• Belgian waffles with ice cream, berries, nutella and banana toppings</p>
                        <p>• Crepes served with whipped cream</p>
                      </div>
                    </div>
                    <div className="bg-davinci-dark-light border-davinci-gold/20 rounded-xl border p-4">
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
                <div className="from-davinci-gold/85 to-davinci-gold-light/85 absolute inset-0 flex items-center justify-center bg-linear-to-br p-8">
                  <h2 className="text-center font-serif text-5xl font-bold text-white md:text-6xl">Desserts</h2>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Bar Section */}
        <MenuSectionCard
          imageSrc="/assets/images/menus/italian/bar.jpg"
          imageAlt="Bar Selections"
          title="Bar Selections"
          gradientFrom="teal"
        >
          <div className="grid gap-8 md:grid-cols-2">
            <div className="border-davinci-gold/20 from-davinci-gold/10 to-davinci-gold-light/10 rounded-xl border bg-linear-to-br p-8">
              <h3 className="mb-4 text-center font-serif text-2xl font-bold text-white">Standard Bar</h3>
              <div className="space-y-2 text-lg leading-relaxed text-gray-300">
                <p>Rum, rye, gin, vodka, scotch, dubonnet, vermouth, campari, brandy</p>
                <p>Red & white wine</p>
                <p>Domestic beer (MGD, coors lite, canadian, budweiser)</p>
                <p>Soft drinks, natural & sparkling water</p>
                <p>Coffee, tea, espresso</p>
              </div>
            </div>
            <div className="border-davinci-gold/20 from-davinci-gold/10 to-davinci-gold-light/10 rounded-xl border bg-linear-to-br p-8">
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
                <div
                  key={item}
                  className="border-davinci-gold/20 bg-davinci-dark-light rounded-lg border p-4 text-center"
                >
                  <p className="text-lg leading-relaxed font-semibold text-white">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </MenuSectionCard>

        {/* CTA */}
        <MenuCTA
          title="Ready to Customize Your Menu?"
          description="Contact us to discuss your event and create the perfect menu"
        />
      </div>
    </div>
  );
}
