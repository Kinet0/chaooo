import Link from 'next/link';
import Image from 'next/image';
import { SectionHeading } from '@/components/section-heading';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { featuredProducts } from '@/lib/content';

export const metadata = {
  title: 'Products | Family Table',
  description: 'Explore our house-made offerings, curated bundles, and seasonal selections.',
};

export default function ProductsPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Products"
        title="A collection designed for everyday joy and special occasions"
        description="Every offering is prepared with the kind of care that makes guests feel welcomed from the first bite."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-3">
        {featuredProducts.map((product) => (
          <Card key={product.title} className="overflow-hidden">
            <div className="relative h-56">
              <Image src={product.image} alt={product.title} fill className="object-cover" />
            </div>
            <CardContent>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--brand-500)]">{product.accent}</p>
              <h3 className="mt-3 text-2xl font-semibold text-[var(--foreground)]">{product.title}</h3>
              <p className="mt-3 text-base leading-8 text-[var(--muted)]">{product.description}</p>
              <Button asChild variant="secondary" className="mt-6">
                <Link href="/order">Request this offering</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
