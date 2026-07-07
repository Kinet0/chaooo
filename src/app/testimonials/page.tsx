import { SectionHeading } from '@/components/section-heading';
import { Card, CardContent } from '@/components/ui/card';
import { testimonials } from '@/lib/content';

export const metadata = {
  title: 'Testimonials | Family Table',
  description: 'Hear from clients who have experienced our service, food, and hospitality first hand.',
};

export default function TestimonialsPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Testimonials"
        title="Trusted by hosts, families, and planners alike"
        description="The stories we hear are often the same: thoughtful service, beautiful presentation, and a genuine sense of care."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-3">
        {testimonials.map((item) => (
          <Card key={item.name}>
            <CardContent>
              <p className="text-lg leading-8 text-[var(--foreground)]">“{item.quote}”</p>
              <div className="mt-8">
                <p className="font-semibold text-[var(--foreground)]">{item.name}</p>
                <p className="text-sm text-[var(--muted)]">{item.role}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
