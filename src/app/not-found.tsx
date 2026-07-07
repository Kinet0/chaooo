import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-xl rounded-[32px] border border-[var(--border)] bg-[var(--card)] p-10 text-center shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--brand-500)]">404</p>
        <h1 className="mt-4 text-4xl font-semibold text-[var(--foreground)]">This page slipped away.</h1>
        <p className="mt-4 text-lg leading-8 text-[var(--muted)]">The page you are looking for may have moved or no longer exists. Let us guide you back to the experience.</p>
        <Button asChild className="mt-8">
          <Link href="/">Return home</Link>
        </Button>
      </div>
    </main>
  );
}
