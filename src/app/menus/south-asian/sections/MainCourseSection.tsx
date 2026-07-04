import MenuSectionCard from '@/components/MenuSectionCard';

export default function MainCourseSection() {
  return (
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
  );
}
