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
          subtitle="Specialized curated menus for South Asian celebrations"
          pdfLink="/assets/menus/SouthAsianCelebrationMenus.pdf"
        />

        <GoldPackageSection />
        <DiamondPackageSection />
        <PlatinumPackageSection />
        <ExclusivePackageSection />

        <MenuCTA
          title="Customize Your Celebration Menu"
          description="Contact us to discuss your South Asian celebration and build the right menu."
        />
      </div>
    </div>
  );
}
