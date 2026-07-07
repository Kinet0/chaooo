'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { heroStats } from '@/lib/content';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,170,87,0.16),_transparent_45%)]" />
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-28">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="relative z-10 flex flex-col justify-center">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[var(--brand-500)]/20 bg-[var(--brand-500)]/10 px-3 py-2 text-sm font-medium text-[var(--brand-600)]">
            <Sparkles className="h-4 w-4" />
            Family-owned. Seasonally inspired.
          </div>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-[var(--foreground)] sm:text-5xl lg:text-6xl">
            Beautiful food, thoughtfully shared.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--muted)]">
            We create memorable dining experiences and curated food gifts with the warmth of a family kitchen and the polish of a boutique hospitality brand.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/order">Place an order</Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href="/about">Discover our story</Link>
            </Button>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {heroStats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-[var(--border)] bg-[var(--card)]/80 p-4 backdrop-blur">
                <p className="text-xl font-semibold text-[var(--foreground)]">{stat.value}</p>
                <p className="mt-1 text-sm text-[var(--muted)]">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }} className="relative z-10">
          <div className="overflow-hidden rounded-[32px] border border-[var(--border)] bg-[var(--card)] p-3 shadow-[0_30px_100px_-30px_rgba(0,0,0,0.35)]">
            <Image
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80"
              alt="Family table gathering with beautifully plated food"
              width={900}
              height={900}
              className="h-[520px] w-full rounded-[24px] object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
