import Image from 'next/image';
import { SectionHeading } from '@/components/section-heading';
import { galleryItems } from '@/lib/content';

export const metadata = {
  title: 'Gallery | Family Table',
  description: 'Browse our visual gallery and get a sense of the atmosphere and presentation behind our work.',
};

export default function GalleryPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Gallery"
        title="Moments that capture the spirit of gathering"
        description="From candlelit dinners to fresh market mornings, these images reflect the warmth and detail behind every experience."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {galleryItems.map((item) => (
          <div key={item.title} className="overflow-hidden rounded-[32px] border border-[var(--border)] bg-[var(--card)]">
            <div className="relative h-72">
              <Image src={item.image} alt={item.title} fill className="object-cover" />
            </div>
            <div className="p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--brand-500)]">{item.category}</p>
              <h3 className="mt-2 text-2xl font-semibold text-[var(--foreground)]">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
