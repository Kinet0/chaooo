'use client';

import { HeartHandshake, Leaf, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/section-heading';
import { reasons } from '@/lib/content';

const icons = [HeartHandshake, Leaf, ShieldCheck];

export function WhyUsSection() {
  return (
    <section className="bg-[var(--card)]/70 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why families choose us"
          title="A premium experience rooted in care"
          description="We blend boutique hospitality with everyday comfort so every interaction feels personal, polished, and memorable."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {reasons.map((reason, index) => {
            const Icon = icons[index];
            return (
              <motion.div key={reason.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.4, delay: index * 0.08 }} className="rounded-[28px] border border-[var(--border)] bg-[var(--background)] p-8 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--brand-500)]/10 text-[var(--brand-600)]">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-[var(--foreground)]">{reason.title}</h3>
                <p className="mt-3 text-base leading-8 text-[var(--muted)]">{reason.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
