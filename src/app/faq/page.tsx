import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import { SectionHeading } from '@/components/section-heading';
import { Card, CardContent } from '@/components/ui/card';
import { faqs } from '@/lib/content';

export const metadata = {
  title: 'FAQs | Family Table',
  description: 'Find answers to common questions about ordering, visits, and our services.',
};

export default function FAQPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="FAQs"
        title="Questions, answered with clarity"
        description="Whether you are planning an event or exploring a regular order, these are the details our clients ask about most."
      />

      <Card className="mt-12">
        <CardContent>
          <Accordion.Root type="single" collapsible className="space-y-4">
            {faqs.map((faq) => (
              <Accordion.Item key={faq.question} value={faq.question} className="rounded-2xl border border-[var(--border)] bg-[var(--background)] px-5 py-4">
                <Accordion.Header>
                  <Accordion.Trigger className="flex w-full items-center justify-between gap-3 text-left text-base font-semibold text-[var(--foreground)]">
                    <span>{faq.question}</span>
                    <ChevronDown className="h-5 w-5 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="pt-3 text-base leading-8 text-[var(--muted)]">
                  {faq.answer}
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </CardContent>
      </Card>
    </main>
  );
}
