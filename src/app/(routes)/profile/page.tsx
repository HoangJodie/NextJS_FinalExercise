import Image from 'next/image';
import { LayoutContainer } from '@/components/shared/LayoutContainer';
import { Section } from '@/components/shared/Section';
import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

export default function ProfilePage() {
  return (
    <LayoutContainer>
      <Section
        title="Profile"
        description="Manage your author details. This page reuses the card, input, and button components."
      >
        <div className="grid gap-6 lg:grid-cols-[320px,1fr]">
          <Card className="flex flex-col items-center gap-4 p-6 text-center">
            <Image
              src="/images/avatars/user-01.jpg"
              alt="Author avatar"
              width={120}
              height={120}
              className="rounded-full border border-border/60"
            />
            <div>
              <p className="text-lg font-semibold text-white">Naruto Uzumaki</p>
              <p className="text-sm text-gray-400">Lead Writer • UI Enthusiast</p>
            </div>
            <Button className="w-full">Upload new photo</Button>
          </Card>
          <Card className="p-6">
            <form className="grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label className="text-sm font-medium text-gray-200" htmlFor="firstName">
                  First name
                </label>
                <Input id="firstName" name="firstName" placeholder="Naruto" className="mt-2" />
              </div>
              <div className="sm:col-span-1">
                <label className="text-sm font-medium text-gray-200" htmlFor="lastName">
                  Last name
                </label>
                <Input id="lastName" name="lastName" placeholder="Uzumaki" className="mt-2" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm font-medium text-gray-200" htmlFor="bio">
                  Bio
                </label>
                <Input
                  id="bio"
                  name="bio"
                  placeholder="Short intro..."
                  className="mt-2"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm font-medium text-gray-200" htmlFor="website">
                  Website
                </label>
                <Input
                  id="website"
                  name="website"
                  placeholder="https://example.com"
                  className="mt-2"
                  type="url"
                />
              </div>
              <div className="sm:col-span-2 flex justify-end gap-3">
                <Button variant="secondary" type="button">
                  Cancel
                </Button>
                <Button type="submit">Save profile</Button>
              </div>
            </form>
          </Card>
        </div>
      </Section>
    </LayoutContainer>
  );
}
