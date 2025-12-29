import Link from 'next/link';
import { LayoutContainer } from '../shared/LayoutContainer';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';

const siteLinks = ['About Us', 'Blog', 'FAQ', 'Terms', 'Privacy Policy'];
const socialLinks = ['Twitter', 'Facebook', 'Dribbble', 'Google+', 'Instagram'];

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-border/60 bg-surface/60 backdrop-blur">
      <LayoutContainer className="grid gap-10 py-12 lg:grid-cols-12 lg:gap-12">
        <div className="space-y-4 lg:col-span-4">
          <h4 className="text-lg font-semibold text-white">About Our Site</h4>
          <p className="text-sm leading-relaxed text-gray-400">
            Lorem ipsum Ut velit dolor Ut labore id fugiat in ut fugiat nostrud qui in dolore commodo eu magna
            Duis cillum dolor officia esse mollit proident Excepteur exercitation nulla.
          </p>
        </div>
        <div className="space-y-4 lg:col-span-2">
          <h4 className="text-lg font-semibold text-white">Site Links</h4>
          <div className="space-y-2 text-sm text-gray-300">
            {siteLinks.map((link) => (
              <Link key={link} href="#" className="block transition hover:text-white">
                {link}
              </Link>
            ))}
          </div>
        </div>
        <div className="space-y-4 lg:col-span-2">
          <h4 className="text-lg font-semibold text-white">Social</h4>
          <div className="space-y-2 text-sm text-gray-300">
            {socialLinks.map((link) => (
              <Link key={link} href="#" className="block transition hover:text-white">
                {link}
              </Link>
            ))}
          </div>
        </div>
        <div className="space-y-4 rounded-3xl border border-border/50 bg-background/60 p-6 lg:col-span-4">
          <h4 className="text-lg font-semibold text-white">Subscribe</h4>
          <p className="text-sm text-gray-400">Keep yourself updated. Subscribe to our newsletter.</p>
          <form className="flex gap-3">
            <Input type="email" placeholder="Type & press enter" required className="flex-1" />
            <Button type="submit" className="px-5">
              Subscribe
            </Button>
          </form>
        </div>
      </LayoutContainer>
      <div className="border-t border-border/60">
        <LayoutContainer className="flex flex-col items-center justify-between gap-4 py-6 text-xs text-gray-400 sm:flex-row">
          <div className="space-x-2">
            <span>© Copyright Abstract 2025</span>
            <span>•</span>
            <span>
              Design by{' '}
              <Link href="http://www.styleshout.com/" className="text-accent hover:underline">
                styleshout
              </Link>
            </span>
          </div>
          <Link
            href="#top"
            className="flex items-center gap-2 rounded-full border border-border/60 px-3 py-1 transition hover:border-accent hover:text-accent"
          >
            ↑ Back to top
          </Link>
        </LayoutContainer>
      </div>
    </footer>
  );
}
