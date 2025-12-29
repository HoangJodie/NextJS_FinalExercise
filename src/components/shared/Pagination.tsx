import Link from 'next/link';
import { cn } from '@/lib/utils';

type PaginationProps = {
  current: number;
  total: number;
};

export function Pagination({ current, total }: PaginationProps) {
  const pages = Array.from({ length: total }, (_, index) => index + 1);

  return (
    <nav className="mt-10 flex flex-wrap items-center gap-2 text-sm">
      <PageLink href="#" disabled={current === 1}>
        Prev
      </PageLink>
      {pages.map((page) => (
        <PageLink key={page} href="#" active={page === current}>
          {page}
        </PageLink>
      ))}
      <PageLink href="#" disabled={current === total}>
        Next
      </PageLink>
    </nav>
  );
}

type PageLinkProps = {
  href: string;
  children: React.ReactNode;
  active?: boolean;
  disabled?: boolean;
};

function PageLink({ href, children, active, disabled }: PageLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        'rounded-full border border-border/60 px-4 py-2 font-medium text-gray-200 transition hover:border-accent hover:text-white',
        active && 'border-accent bg-accent text-white',
        disabled && 'pointer-events-none opacity-40',
      )}
    >
      {children}
    </Link>
  );
}
