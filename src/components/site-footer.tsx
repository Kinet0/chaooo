import Link from 'next/link';
import { Send, MessageCircle, Mail } from 'lucide-react';
import { navItems } from '@/lib/content';

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--card)]/70">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--brand-500)]">Family Table</p>
          <h3 className="mt-4 text-2xl font-semibold text-[var(--foreground)]">Warm hospitality, crafted with care.</h3>
          <p className="mt-4 max-w-md text-base leading-8 text-[var(--muted)]">
            We believe the best experiences are built around community, seasonality, and the comfort of familiar flavors.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--foreground)]">Navigate</h4>
          <ul className="mt-4 space-y-3 text-sm text-[var(--muted)]">
            {navItems.slice(0, 6).map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-[var(--foreground)]">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--foreground)]">Stay connected</h4>
          <div className="mt-4 flex gap-3">
            <a href="https://instagram.com" className="rounded-full border border-[var(--border)] p-3 text-[var(--foreground)] transition hover:bg-[var(--brand-500)] hover:text-white" aria-label="Instagram">
              <Send className="h-4 w-4" />
            </a>
            <a href="https://facebook.com" className="rounded-full border border-[var(--border)] p-3 text-[var(--foreground)] transition hover:bg-[var(--brand-500)] hover:text-white" aria-label="Facebook">
              <MessageCircle className="h-4 w-4" />
            </a>
            <a href="mailto:hello@familytable.co" className="rounded-full border border-[var(--border)] p-3 text-[var(--foreground)] transition hover:bg-[var(--brand-500)] hover:text-white" aria-label="Email">
              <Mail className="h-4 w-4" />
            </a>
          </div>
          <p className="mt-6 text-sm text-[var(--muted)]">© 2026 Family Table. Crafted for gatherings and everyday rituals.</p>
        </div>
      </div>
    </footer>
  );
}
