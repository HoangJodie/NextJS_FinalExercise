import { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'group rounded-3xl border border-border/60 bg-surface/80 shadow-card transition-transform duration-300 hover:-translate-y-1 hover:border-accent/60',
        className,
      )}
      {...props}
    />
  );
}
