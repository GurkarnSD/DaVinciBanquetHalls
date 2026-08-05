import MenuPageHeader from '@/components/MenuPageHeader';
import MenuCTA from '@/components/MenuCTA';
import AppetizersSection from './sections/AppetizersSection';
import BarSection from './sections/BarSection';
import DessertSection from './sections/DessertSection';
import DinnerSection from './sections/DinnerSection';
import HorsDoeuvresSection from './sections/HorsDoeuvresSection';
import MainCourseSection from './sections/MainCourseSection';
import WelcomeDrinksSection from './sections/WelcomeDrinksSection';

export default function SouthAsianMenuPage() {
  return (
    <div className="min-h-screen pt-32 pb-16">
      <div className="container mx-auto max-w-7xl px-4">
        <MenuPageHeader
          title="South Asian Menu"
          subtitle="Full catalog — welcome drinks through dinner, dessert, and bar."
          pdfLink="/assets/menus/SouthAsianMenu.pdf"
        />

        <WelcomeDrinksSection />
        <HorsDoeuvresSection />
        <AppetizersSection />
        <DinnerSection />
        <MainCourseSection />
        <DessertSection />
        <BarSection />

        <MenuCTA
          title="Build your South Asian menu"
          description="Share your event type and dietary needs — we will help finalize the selection."
        />
      </div>
    </div>
  );
}
