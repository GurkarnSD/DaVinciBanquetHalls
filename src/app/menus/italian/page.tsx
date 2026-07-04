import MenuPageHeader from '@/components/MenuPageHeader';
import MenuCTA from '@/components/MenuCTA';
import ItalianAppetizersSection from './sections/ItalianAppetizersSection';
import ItalianSoupRisottoSection from './sections/ItalianSoupRisottoSection';
import ItalianPastaSection from './sections/ItalianPastaSection';
import ItalianEntreeSection from './sections/ItalianEntreeSection';
import ItalianSweetSavorySection from './sections/ItalianSweetSavorySection';
import ItalianBarSection from './sections/ItalianBarSection';

export default function ItalianMenuPage() {
  return (
    <div className="min-h-screen pt-32 pb-16">
      <div className="container mx-auto max-w-7xl px-4">
        <MenuPageHeader
          title="Italian Menu"
          subtitle="Authentic Italian cuisine crafted with passion and tradition"
          pdfLink="/assets/menus/ItalianMenu.pdf"
        />

        <ItalianAppetizersSection />
        <ItalianSoupRisottoSection />
        <ItalianPastaSection />
        <ItalianEntreeSection />
        <ItalianSweetSavorySection />
        <ItalianBarSection />

        <MenuCTA
          title="Ready to Customize Your Menu?"
          description="Contact us to discuss your event and create the perfect menu"
        />
      </div>
    </div>
  );
}
