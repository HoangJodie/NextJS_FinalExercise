'use client';

import { forwardRef, TextareaHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => (
    <textarea
      ref={ref}
      className={cn(
        'w-full rounded-2xl border border-border bg-surface/80 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30',
        className,
      )}
      {...props}
    />
  ),
);

Textarea.displayName = 'Textarea';
