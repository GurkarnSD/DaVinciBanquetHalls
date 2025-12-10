'use client';

import MenuPageHeader from '@/components/MenuPageHeader';
import MenuSectionCard from '@/components/MenuSectionCard';
import MenuCTA from '@/components/MenuCTA';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function SouthAsianMenuPage() {
  return (
    <div className="min-h-screen pt-32 pb-16">
      <div className="container mx-auto max-w-7xl px-4">
        <MenuPageHeader
          title="South Asian Menu"
          subtitle="Authentic South Asian cuisine with rich flavors and traditional recipes"
          pdfLink="/assets/menus/SouthAsianMenu.pdf"
        />

        {/* Welcome Drinks Section */}
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
              <div
                key={item}
                className="bg-davinci-dark-light border-davinci-gold/20 rounded-lg border p-4 text-center text-lg leading-relaxed text-gray-200"
              >
                • {item}
              </div>
            ))}
          </div>
          <p className="mt-4 text-center text-sm text-gray-400 italic">** Premium - additional charges will apply</p>
        </MenuSectionCard>

        {/* Hors D'Oeuvres Section */}
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
                <div
                  key={item}
                  className="border-davinci-gold/20 from-davinci-gold/10 to-davinci-gold-light/10 rounded-xl border bg-linear-to-br p-4 text-center"
                >
                  <p className="text-lg leading-relaxed font-semibold text-white">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </MenuSectionCard>

        {/* Appetizers Section - Special Layout */}
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
                  src="/assets/images/menus/south-asian/appetizers.jpg"
                  alt="Appetizers"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={80}
                  loading="lazy"
                />
                <div className="from-davinci-teal/85 to-davinci-teal-dark/85 absolute inset-0 flex items-center justify-center bg-linear-to-br p-8">
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
        </motion.section>

        {/* Dinner Section */}
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
                  'Vegetable Fried Rice',
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
                <div
                  key={item}
                  className="bg-davinci-dark-light border-davinci-gold/20 rounded-lg border p-4 text-center"
                >
                  <p className="text-lg leading-relaxed font-semibold text-white">{item}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-center text-sm text-gray-400 italic">** Premium - additional charges will apply</p>
          </div>
        </MenuSectionCard>

        {/* Main Course Section */}
        <MenuSectionCard
          imageSrc="/assets/images/menus/south-asian/main-course.jpg"
          imageAlt="Main Course"
          title="Main Course"
        >
          <div className="grid gap-8 md:grid-cols-2">
            {/* Vegetarian Options */}
            <div>
              <h3 className="mb-6 text-center font-serif text-3xl font-bold text-white">Vegetarian Options</h3>
              <div className="space-y-2">
                {[
                  'Daal Makhani',
                  'Daal Tadka',
                  'Channa Masala',
                  'Tawa Sabzi',
                  'Mixed Vegetables',
                  'Aloo Bangan',
                  'Aloo Gobi',
                  'Aloo Masala',
                  'Dum Aloo',
                  'Bangan Bharta',
                  'Bhindi Masala',
                  'Shahi Paneer',
                  'Paneer Lababdar',
                  'Paneer Butter Masala',
                  'Paneer Makhani',
                  'Palak Paneer',
                  'Paneer Bhurji',
                  'Achari Paneer',
                  'Mattar Paneer',
                  'Malai Kofta',
                  'Methi Mattar Malai',
                  'Mattar Mushroom',
                  'Masala Soya Chop',
                  'Vegetable Korma',
                  'Kadhi Pakora',
                  'Aloo Sabji Rasa Wala',
                  'Dahi Bhindi',
                  'Kala Channa',
                  'Tindora Aloo',
                  'Moong Daal',
                  'Ringra Tuver',
                  'Gujarati Daal',
                  'Dry Aloo Sabzi',
                  'Tuver Totha',
                  'Sev Tomato',
                  'Ringan Bata Ka Shaak',
                  'Undhiyu**',
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

            {/* Non-Vegetarian Options */}
            <div>
              <h3 className="mb-6 text-center font-serif text-3xl font-bold text-white">Non-Vegetarian Options</h3>
              <div className="space-y-2">
                {[
                  'Butter Chicken',
                  'Rara Chicken',
                  'Chicken Curry',
                  'Karahi Chicken',
                  'Chicken Korma',
                  'Palak Chicken',
                  'Goat Curry',
                  'Karahi Goat',
                  'Goat Korma',
                  'Palak Goat',
                  'Veal Korma',
                  'Fish Curry',
                  'Lamb Curry',
                  'Keema Mattar',
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
        </MenuSectionCard>

        {/* Dessert Section - Special Layout */}
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
                <div className="from-davinci-gold/85 to-davinci-gold-dark/85 absolute inset-0 flex items-center justify-center bg-linear-to-br p-8">
                  <h2 className="text-center font-serif text-5xl font-bold text-white md:text-6xl">Desserts</h2>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Bar Section */}
        <MenuSectionCard
          imageSrc="/assets/images/menus/south-asian/bar.jpg"
          imageAlt="Bar Selections"
          title="Bar Selections"
          gradientFrom="teal"
        >
          <div className="space-y-8">
            <div className="border-davinci-gold/20 from-davinci-gold/10 to-davinci-gold-light/10 rounded-xl border bg-linear-to-br p-8">
              <h3 className="mb-4 text-center font-serif text-2xl font-bold text-white">Non-Alcoholic</h3>
              <p className="text-lg leading-relaxed text-gray-200">
                Soft Drinks, Juices, Still & Sparkling Water, Coffee, Tea, Espresso
              </p>
            </div>

            <div className="border-davinci-gold/20 from-davinci-gold/10 to-davinci-gold-light/10 rounded-xl border bg-linear-to-br p-8">
              <h3 className="mb-4 text-center font-serif text-2xl font-bold text-white">Deluxe Bar</h3>
              <div className="space-y-2 text-lg leading-relaxed text-gray-200">
                <p>Red & White Wine, Vodka, Gin, Rum, Tequila, Whiskey, Scotch</p>
                <p>Domestic Beer, Imported Beer, Brandy, Cognac</p>
                <p>Campari, Vermouth, Cinzano, Aperol, Lucano, Montenegro, Averna</p>
                <p>Soft Drinks, Juices, Still & Sparkling Water, Coffee, Tea, Espresso</p>
              </div>
            </div>

            <div className="border-davinci-gold/20 from-davinci-gold/10 to-davinci-gold-light/10 rounded-xl border bg-linear-to-br p-8">
              <h3 className="mb-4 text-center font-serif text-2xl font-bold text-white">Premium Bar</h3>
              <p className="mb-3 text-lg font-semibold text-white">Premium Brand Upgrades:</p>
              <div className="space-y-2 text-lg leading-relaxed text-gray-200">
                <p>Red & White Wine</p>
                <p>Vodka (Grey Goose, Titos), Gin, Rum, Tequila (1800 Blanco)</p>
                <p>
                  Whiskey (Jagermeister, Jack Daniel&apos;s), Scotch (Glenlivet, Black Label, Chivas Regal, Glenfiddich)
                </p>
                <p>Domestic Beer (Coors Lite, Molson), Imported Beer (Heineken, Corona, Stella)</p>
                <p>Brandy, Cognac, Campari, Vermouth, Cinzano, Aperol, Lucano, Montenegro, Averna</p>
                <p>Soft Drinks, Juices, Still & Sparkling Water, Coffee, Tea, Espresso</p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="mb-4 text-center font-serif text-2xl font-bold text-white">Specialty Items</h3>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {['Martini Bar', 'Prosecco station', 'Sangria station', 'Espresso Martini Station'].map((item) => (
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
          description="Contact us to discuss your event and create the perfect South Asian menu"
        />
      </div>
    </div>
  );
}
