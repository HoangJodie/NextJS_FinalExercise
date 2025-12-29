import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type SectionProps = {
  title?: string;
  description?: string;
  actions?: ReactNode;
  className?: string;
  children: ReactNode;
};

export function Section({ title, description, actions, className, children }: SectionProps) {
  return (
    <section className={cn('py-10 sm:py-12 lg:py-16', className)}>
      <div className="flex flex-wrap items-end gap-4 pb-6">
        <div className="flex-1 space-y-2">
          {title ? <h2 className="section-heading">{title}</h2> : null}
          {description ? (
            <p className="max-w-3xl text-base text-gray-400">{description}</p>
          ) : null}
        </div>
        {actions ? <div className="flex items-center gap-3">{actions}</div> : null}
      </div>
      {children}
    </section>
  );
}
