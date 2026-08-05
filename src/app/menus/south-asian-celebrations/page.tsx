import MenuPageHeader from '@/components/MenuPageHeader';
import MenuCTA from '@/components/MenuCTA';
import GoldPackageSection from './sections/GoldPackageSection';
import DiamondPackageSection from './sections/DiamondPackageSection';
import PlatinumPackageSection from './sections/PlatinumPackageSection';
import ExclusivePackageSection from './sections/ExclusivePackageSection';

export default function SouthAsianCelebrationsMenuPage() {
  return (
    <div className="page-shell pb-16">
      <div className="container mx-auto max-w-5xl px-4">
        <MenuPageHeader
          title="South Asian Celebrations"
          subtitle="Gold, Platinum, Diamond, and Exclusive packages."
          pdfLink="/assets/menus/SouthAsianCelebrationMenus.pdf"
        />

        <GoldPackageSection />
        <DiamondPackageSection />
        <PlatinumPackageSection />
        <ExclusivePackageSection />

        <MenuCTA
          title="Choose a celebration package"
          description="Tell us your event timeline and guest count — we will outline the right package."
        />
      </div>
    </div>
  );
}
