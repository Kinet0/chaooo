import Link from 'next/link';
import { SectionHeading } from '@/components/section-heading';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { values } from '@/lib/content';

export const metadata = {
  title: 'About Us | Family Table',
  description: 'Learn about the family story, values, and approach that shape our food experiences.',
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="About us"
        title="A business shaped by family, craft, and hospitality"
        description="We are a multigenerational food brand rooted in consistency, quality, and the belief that beautiful meals can bring people closer together."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <Card>
          <CardContent>
            <p className="text-lg leading-8 text-[var(--muted)]">
              Our work begins in the kitchen and ends at the table. We take care of the details that make a gathering feel effortless, whether that means a seasonal gift box, a catered dinner, or a beautifully planned celebration.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {values.map((value) => (
                <div key={value.title} className="rounded-2xl border border-[var(--border)] bg-[var(--background)] p-4">
                  <h3 className="font-semibold text-[var(--foreground)]">{value.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{value.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[linear-gradient(135deg,var(--brand-500),var(--brand-600))] text-white">
          <CardContent>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-white/80">Our promise</p>
            <h3 className="mt-4 text-3xl font-semibold">Every order reflects our values.</h3>
            <p className="mt-4 text-lg leading-8 text-white/80">
              We are known for thoughtful service, premium presentation, and a warmth that invites guests to slow down and enjoy the moment.
            </p>
            <Button asChild variant="secondary" className="mt-8 border-white/30 bg-white/10 text-white hover:bg-white/20">
              <Link href="/contact">Start a conversation</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
