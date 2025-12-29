import type { Metadata } from 'next';
import { Manrope, Playfair_Display } from 'next/font/google';
import '../styles/globals.css';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Abstract | Next.js Blog Layout',
  description: 'A modernized Next.js 14 UI inspired by the Abstract template.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${manrope.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-background font-sans text-gray-100">
        <div id="top" />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
