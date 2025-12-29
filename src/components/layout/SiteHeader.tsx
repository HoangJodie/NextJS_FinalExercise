'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { navItems } from '@/lib/data/navigation';
import { cn } from '@/lib/utils';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';

const containerClass = 'mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8';

export function SiteHeader() {
  const pathname = usePathname();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent via-purple-500 to-blue-500" />
      <div className={cn('relative flex items-center justify-between py-5', containerClass)}>
        <Link href="/" className="flex items-center gap-2 text-xl font-display font-semibold text-white">
          <Image src="/images/logo.png" alt="Abstract logo" width={40} height={40} className="h-10 w-10" />
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <NavItem key={item.label} href={item.href} label={item.label} active={pathname === item.href}>
              {item.children}
            </NavItem>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Button
            variant="secondary"
            className="h-10 w-10 rounded-full p-0 text-xs font-semibold"
            aria-label="Toggle search"
            onClick={() => setIsSearchOpen((open) => !open)}
          >
            Search
          </Button>
          <Button
            variant="secondary"
            className="h-10 w-10 rounded-full p-0 text-xs font-semibold md:hidden"
            aria-label="Toggle menu"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            MENU
          </Button>
        </div>
      </div>
      {isSearchOpen ? (
        <div className="border-y border-border/60 bg-surface/80 backdrop-blur">
          <div className={cn('py-4', containerClass)}>
            <form className="flex items-center gap-3" role="search">
              <Input name="search" placeholder="Type your keywords" className="flex-1" />
              <Button type="submit" className="px-5">
                Search
              </Button>
            </form>
          </div>
        </div>
      ) : null}
      {isMenuOpen ? (
        <div className="border-t border-border/60 bg-background/95 pb-4 md:hidden">
          <div className={cn('space-y-2 pt-2', containerClass)}>
            {navItems.map((item) => (
              <div key={item.label} className="space-y-1">
                <Link
                  href={item.href}
                  className={cn(
                    'block rounded-xl px-3 py-2 text-sm font-medium text-gray-200 hover:bg-white/5 hover:text-white',
                    pathname === item.href && 'text-accent',
                  )}
                >
                  {item.label}
                </Link>
                {item.children ? (
                  <div className="ml-3 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block rounded-lg px-3 py-1 text-xs text-gray-400 hover:text-white"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}

type NavItemProps = {
  label: string;
  href: string;
  active?: boolean;
  children?: { label: string; href: string }[];
};

function NavItem({ label, href, active, children }: NavItemProps) {
  return (
    <div className="group relative">
      <Link
        href={href}
        className={cn(
          'text-sm font-medium text-gray-200 transition hover:text-white',
          active && 'text-accent',
        )}
      >
        {label}
      </Link>
      {children ? (
        <div className="pointer-events-none absolute left-0 top-full pt-3 min-w-[220px] rounded-2xl border border-border/60 bg-surface/90 opacity-0 shadow-xl backdrop-blur transition group-hover:pointer-events-auto group-hover:opacity-100">
          <ul className="py-3">
            {children.map((child) => (
              <li key={child.href}>
                <Link
                  href={child.href}
                  className="block px-4 py-2 text-sm text-gray-200 transition hover:bg-white/5 hover:text-white"
                >
                  {child.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
