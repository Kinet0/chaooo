import { cva, type VariantProps } from 'class-variance-authority';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-full font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60',
  {
    variants: {
      variant: {
        default: 'bg-[var(--brand-500)] text-white hover:bg-[var(--brand-600)] focus-visible:ring-[var(--brand-500)]',
        secondary: 'border border-[var(--border)] bg-white/80 text-[var(--foreground)] hover:bg-white focus-visible:ring-[var(--brand-500)] dark:bg-[var(--card)]',
        ghost: 'text-[var(--foreground)] hover:bg-[var(--card)]',
      },
      size: {
        default: 'h-11 px-5 text-sm',
        sm: 'h-9 px-4 text-sm',
        lg: 'h-12 px-6 text-base',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = ({ className, variant, size, ...props }: ButtonProps) => {
  return <button className={twMerge(clsx(buttonVariants({ variant, size, className })))} {...props} />;
};

export { Button, buttonVariants };