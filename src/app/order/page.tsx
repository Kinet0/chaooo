import Link from 'next/link';
import { SectionHeading } from '@/components/section-heading';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export const metadata = {
  title: 'Order | Family Table',
  description: 'Request a custom order, gift box, or event menu with our family team.',
};

export default function OrderPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Order"
        title="Make your next gathering feel beautifully effortless"
        description="Share your ideal timeline and preferences. We will help you choose the right menu, gift selection, or event approach."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <Card className="bg-[linear-gradient(135deg,var(--brand-500),var(--brand-600))] text-white">
          <CardContent>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-white/80">How it works</p>
            <h3 className="mt-4 text-3xl font-semibold">We customize each request around your plans.</h3>
            <p className="mt-4 text-lg leading-8 text-white/80">From intimate dinners to holiday gifting, our team helps shape a thoughtful experience with clear recommendations and a warm point of contact.</p>
            <Button asChild variant="secondary" className="mt-8 border-white/30 bg-white/10 text-white hover:bg-white/20">
              <Link href="/contact">Book a consultation</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <form className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block text-sm font-medium text-[var(--foreground)]">
                  Name
                  <input className="mt-2 w-full rounded-2xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 outline-none" placeholder="Your name" />
                </label>
                <label className="block text-sm font-medium text-[var(--foreground)]">
                  Email
                  <input className="mt-2 w-full rounded-2xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 outline-none" placeholder="you@example.com" />
                </label>
              </div>
              <label className="block text-sm font-medium text-[var(--foreground)]">
                Order type
                <input className="mt-2 w-full rounded-2xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 outline-none" placeholder="Gift box, dinner, event menu..." />
              </label>
              <label className="block text-sm font-medium text-[var(--foreground)]">
                Date and notes
                <textarea className="mt-2 min-h-36 w-full rounded-2xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 outline-none" placeholder="Share your date, guest count, and preferences." />
              </label>
              <Button asChild>
                <Link href="/order">Submit request</Link>
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
