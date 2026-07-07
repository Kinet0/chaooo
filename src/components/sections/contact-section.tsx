import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { contactDetails } from '@/lib/content';

export function ContactSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <Card className="overflow-hidden">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="bg-[linear-gradient(135deg,var(--brand-500),var(--brand-600))] p-8 text-white sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-white/80">Let’s talk</p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Ready to plan something special?</h2>
            <p className="mt-4 max-w-lg text-lg leading-8 text-white/80">
              Whether you are hosting a dinner, sending a gift, or exploring a new partnership, we would love to help.
            </p>
            <div className="mt-8 space-y-4">
              {contactDetails.map((detail) => (
                <div key={detail.title} className="flex items-start gap-3 rounded-2xl border border-white/20 bg-white/10 p-4">
                  {detail.title === 'Visit' ? <MapPin className="mt-0.5 h-5 w-5" /> : detail.title === 'Call' ? <Phone className="mt-0.5 h-5 w-5" /> : <Mail className="mt-0.5 h-5 w-5" />}
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">{detail.title}</p>
                    <p className="mt-1 text-base">{detail.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <CardContent className="flex flex-col justify-center">
            <form className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block text-sm font-medium text-[var(--foreground)]">
                  Name
                  <input className="mt-2 w-full rounded-2xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 outline-none ring-0" placeholder="Your name" />
                </label>
                <label className="block text-sm font-medium text-[var(--foreground)]">
                  Email
                  <input className="mt-2 w-full rounded-2xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 outline-none ring-0" placeholder="you@example.com" />
                </label>
              </div>
              <label className="block text-sm font-medium text-[var(--foreground)]">
                Occasion
                <input className="mt-2 w-full rounded-2xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 outline-none ring-0" placeholder="Dinner, gift box, catering..." />
              </label>
              <label className="block text-sm font-medium text-[var(--foreground)]">
                Details
                <textarea className="mt-2 min-h-32 w-full rounded-2xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 outline-none ring-0" placeholder="Tell us what you have in mind." />
              </label>
              <Button asChild className="w-full sm:w-auto">
                <Link href="/contact">Send inquiry</Link>
              </Button>
            </form>
          </CardContent>
        </div>
      </Card>
    </section>
  );
}
