import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={twMerge(clsx('rounded-[28px] border border-[var(--border)] bg-[var(--card)]/95 shadow-[0_20px_80px_-30px_rgba(0,0,0,0.25)] backdrop-blur', className))} {...props} />;
}

export function CardContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={twMerge(clsx('p-6 sm:p-8', className))} {...props} />;
}
