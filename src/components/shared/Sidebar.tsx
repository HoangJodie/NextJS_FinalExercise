import Link from 'next/link';
import { cn } from '@/lib/utils';

export type SidebarSection = {
  title: string;
  items: { label: string; href: string }[];
};

type SidebarProps = {
  sections: SidebarSection[];
  className?: string;
};

export function Sidebar({ sections, className }: SidebarProps) {
  return (
    <aside className={cn('space-y-6 rounded-3xl border border-border/60 bg-surface/60 p-6', className)}>
      {sections.map((section) => (
        <div key={section.title} className="space-y-3">
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">
            {section.title}
          </h3>
          <div className="space-y-2">
            {section.items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-xl px-3 py-2 text-sm text-gray-200 transition hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </aside>
  );
}
