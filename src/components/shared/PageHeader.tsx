import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { LayoutContainer } from './LayoutContainer';

type PageHeaderProps = {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  actions?: ReactNode;
  className?: string;
};

export function PageHeader({ title, subtitle, eyebrow, actions, className }: PageHeaderProps) {
  return (
    <header className={cn('border-b border-border/60 bg-gradient-to-b from-background to-background/60', className)}>
      <LayoutContainer className="flex flex-col gap-4 py-12 sm:py-14">
        {eyebrow ? (
          <span className="text-xs uppercase tracking-[0.25em] text-accent">{eyebrow}</span>
        ) : null}
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="space-y-3">
            <h1 className="text-3xl font-display font-semibold text-white sm:text-4xl">{title}</h1>
            {subtitle ? <p className="max-w-3xl text-base text-gray-400">{subtitle}</p> : null}
          </div>
          {actions ? <div className="flex items-center gap-3">{actions}</div> : null}
        </div>
      </LayoutContainer>
    </header>
  );
}
