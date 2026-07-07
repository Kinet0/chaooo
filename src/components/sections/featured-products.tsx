'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/section-heading';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { featuredProducts } from '@/lib/content';

export function FeaturedProducts() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Featured offerings"
        title="Thoughtfully curated for your table"
        description="From intimate dinners to celebrations, every selection is shaped by the quality and warmth our family is known for."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-3">
        {featuredProducts.map((product, index) => (
          <motion.article key={product.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.45, delay: index * 0.08 }}>
            <Card className="overflow-hidden">
              <div className="relative h-56 overflow-hidden">
                <Image src={product.image} alt={product.title} fill className="object-cover transition duration-700 hover:scale-105" />
              </div>
              <CardContent>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--brand-500)]">{product.accent}</p>
                <h3 className="mt-3 text-2xl font-semibold text-[var(--foreground)]">{product.title}</h3>
                <p className="mt-3 text-base leading-8 text-[var(--muted)]">{product.description}</p>
                <Button asChild variant="ghost" className="mt-6 px-0">
                  <Link href="/products" className="flex items-center gap-2">
                    Explore collection <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
