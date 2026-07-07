'use client';

import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/section-heading';
import { Card, CardContent } from '@/components/ui/card';
import { testimonials } from '@/lib/content';

export function TestimonialsSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Testimonials"
        title="The kind of praise that keeps us grounded"
        description="Our clients return for the quality, the calm, and the feeling that every detail was considered."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-3">
        {testimonials.map((item, index) => (
          <motion.div key={item.name} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.4, delay: index * 0.07 }}>
            <Card>
              <CardContent>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--brand-500)]/10 text-[var(--brand-600)]">
                  <Quote className="h-5 w-5" />
                </div>
                <p className="mt-6 text-lg leading-8 text-[var(--foreground)]">“{item.quote}”</p>
                <div className="mt-8">
                  <p className="font-semibold text-[var(--foreground)]">{item.name}</p>
                  <p className="text-sm text-[var(--muted)]">{item.role}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
