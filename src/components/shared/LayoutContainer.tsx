import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type LayoutContainerProps = {
  className?: string;
  children: ReactNode;
};

export function LayoutContainer({ className, children }: LayoutContainerProps) {
  return (
    <div className={cn('mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8', className)}>
      {children}
    </div>
  );
}
