import { SectionHeading } from '@/components/section-heading';
import { processSteps } from '@/lib/content';

export function ProcessSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="How it works"
        title="A simple path from idea to delivery"
        description="We keep the process clear and calm so you can focus on the moment rather than the logistics."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {processSteps.map((step, index) => (
          <div key={step.title} className="rounded-[28px] border border-[var(--border)] bg-[var(--card)] p-8 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--brand-500)] text-lg font-semibold text-white">
              0{index + 1}
            </div>
            <h3 className="mt-6 text-xl font-semibold text-[var(--foreground)]">{step.title}</h3>
            <p className="mt-3 text-base leading-8 text-[var(--muted)]">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
