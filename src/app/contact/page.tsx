import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';
import { SectionHeading } from '@/components/section-heading';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { contactDetails } from '@/lib/content';

export const metadata = {
  title: 'Contact | Family Table',
  description: 'Get in touch for orders, inquiries, or to plan a celebration with our family team.',
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Contact"
        title="We would love to hear from you"
        description="Share your plans, ask a question, or request a personalized recommendation and we will be in touch soon."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <Card>
          <CardContent className="space-y-4">
            {contactDetails.map((detail) => (
              <div key={detail.title} className="rounded-2xl border border-[var(--border)] bg-[var(--background)] p-4">
                <div className="flex items-start gap-3">
                  {detail.title === 'Visit' ? <MapPin className="mt-0.5 h-5 w-5 text-[var(--brand-600)]" /> : detail.title === 'Call' ? <Phone className="mt-0.5 h-5 w-5 text-[var(--brand-600)]" /> : <Mail className="mt-0.5 h-5 w-5 text-[var(--brand-600)]" />}
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--brand-500)]">{detail.title}</p>
                    <p className="mt-1 text-base text-[var(--muted)]">{detail.value}</p>
                  </div>
                </div>
              </div>
            ))}
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
                Subject
                <input className="mt-2 w-full rounded-2xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 outline-none" placeholder="Order, event, partnership..." />
              </label>
              <label className="block text-sm font-medium text-[var(--foreground)]">
                Message
                <textarea className="mt-2 min-h-36 w-full rounded-2xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 outline-none" placeholder="Tell us what you need." />
              </label>
              <Button asChild>
                <Link href="/contact">Send message</Link>
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
