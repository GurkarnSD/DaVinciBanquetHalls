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
          subtitle="Full catalog — appetizers, pasta, entrées, desserts, and bar."
          pdfLink="/assets/menus/ItalianMenu.pdf"
        />

        <ItalianAppetizersSection />
        <ItalianSoupRisottoSection />
        <ItalianPastaSection />
        <ItalianEntreeSection />
        <ItalianSweetSavorySection />
        <ItalianBarSection />

        <MenuCTA
          title="Build your Italian menu"
          description="Share your event type and dietary needs — we will help finalize the selection."
        />
      </div>
    </div>
  );
}
