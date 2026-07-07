import Image from 'next/image';
import Link from 'next/link';
import { SectionHeading } from '@/components/section-heading';
import { Button } from '@/components/ui/button';
import { galleryItems } from '@/lib/content';

export function GalleryPreview() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          eyebrow="Gallery"
          title="A glimpse into the atmosphere we create"
          description="Every space we touch is styled with warmth, texture, and that unmistakable sense of gathering."
        />
        <Button asChild variant="secondary">
          <Link href="/gallery">See full gallery</Link>
        </Button>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {galleryItems.slice(0, 4).map((item) => (
          <div key={item.title} className="overflow-hidden rounded-[28px] border border-[var(--border)] bg-[var(--card)]">
            <div className="relative h-64">
              <Image src={item.image} alt={item.title} fill className="object-cover" />
            </div>
            <div className="p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--brand-500)]">{item.category}</p>
              <h3 className="mt-2 text-lg font-semibold text-[var(--foreground)]">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
