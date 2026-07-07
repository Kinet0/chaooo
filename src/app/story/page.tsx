import { SectionHeading } from '@/components/section-heading';
import { Card, CardContent } from '@/components/ui/card';
import { timeline } from '@/lib/content';

export const metadata = {
  title: 'Our Story | Family Table',
  description: 'Follow the journey of our family-owned business as it grew from a neighborhood kitchen into a modern hospitality experience.',
};

export default function StoryPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Our story"
        title="From a small kitchen to a trusted gathering place"
        description="We have always believed hospitality is personal. What started as a homegrown passion grew into a business that values craft, consistency, and connection."
      />

      <div className="mt-12 space-y-6">
        {timeline.map((item) => (
          <Card key={item.year}>
            <CardContent className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-8">
              <div className="min-w-[90px] rounded-2xl bg-[var(--brand-500)]/10 px-4 py-3 text-center text-sm font-semibold text-[var(--brand-600)]">
                {item.year}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[var(--foreground)]">{item.title}</h3>
                <p className="mt-3 text-base leading-8 text-[var(--muted)]">{item.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
