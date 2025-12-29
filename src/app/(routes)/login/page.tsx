import Link from 'next/link';
import { LayoutContainer } from '@/components/shared/LayoutContainer';
import { Section } from '@/components/shared/Section';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

export default function LoginPage() {
  return (
    <LayoutContainer>
      <Section
        title="Welcome back"
        description="Sign in to continue exploring the stories and dashboards. This page uses the shared form controls."
      >
        <div className="mx-auto max-w-lg space-y-6 rounded-3xl border border-border/60 bg-surface/70 p-8 shadow-card">
          <form className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200" htmlFor="email">
                Email
              </label>
              <Input id="email" name="email" type="email" placeholder="you@example.com" required />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200" htmlFor="password">
                Password
              </label>
              <Input id="password" name="password" type="password" placeholder="••••••••" required />
            </div>
            <div className="flex items-center justify-between text-sm text-gray-300">
              <label className="inline-flex items-center gap-2">
                <input type="checkbox" className="h-4 w-4 rounded border-border/80 bg-surface" />
                Remember me
              </label>
              <Link href="#" className="text-accent hover:underline">
                Forgot password?
              </Link>
            </div>
            <Button type="submit" className="w-full py-3 text-base">
              Log in
            </Button>
          </form>
          <p className="text-center text-sm text-gray-300">
            New here?{' '}
            <Link href="/profile" className="text-accent hover:underline">
              Create a profile
            </Link>
          </p>
        </div>
      </Section>
    </LayoutContainer>
  );
}
