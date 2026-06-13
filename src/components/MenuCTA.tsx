import CTASection from './CTASection';

interface MenuCTAProps {
  title: string;
  description: string;
}

export default function MenuCTA({ title, description }: MenuCTAProps) {
  return <CTASection title={title} description={description} primaryLabel="Contact us" primaryHref="/contact" />;
}
