import { HeroSection } from '@/components/sections/hero-section';
import { FeaturedProducts } from '@/components/sections/featured-products';
import { WhyUsSection } from '@/components/sections/why-us-section';
import { ProcessSection } from '@/components/sections/process-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { GalleryPreview } from '@/components/sections/gallery-preview';
import { ContactSection } from '@/components/sections/contact-section';

export const metadata = {
  title: 'Family Table | Crafted Food Experiences',
  description: 'A modern family-owned food brand offering curated dining experiences, premium gift boxes, and heartfelt hospitality.',
};

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <FeaturedProducts />
      <WhyUsSection />
      <ProcessSection />
      <TestimonialsSection />
      <GalleryPreview />
      <ContactSection />
    </main>
  );
}
