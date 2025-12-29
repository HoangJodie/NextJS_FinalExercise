import { LayoutContainer } from '@/components/shared/LayoutContainer';
import { Section } from '@/components/shared/Section';
import { Sidebar, SidebarSection } from '@/components/shared/Sidebar';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

const sidebarSections: SidebarSection[] = [
  {
    title: 'Shortcuts',
    items: [
      { label: 'New post', href: '#' },
      { label: 'Upload media', href: '#' },
      { label: 'Manage categories', href: '#' },
    ],
  },
  {
    title: 'Saved searches',
    items: [
      { label: 'Minimalism', href: '#' },
      { label: 'Branding', href: '#' },
      { label: 'Photography', href: '#' },
    ],
  },
];

const stats = [
  { label: 'Published posts', value: '128', change: '+12 this month' },
  { label: 'Drafts', value: '18', change: '3 updated' },
  { label: 'Subscribers', value: '4.2k', change: '+320 new' },
];

export default function DashboardPage() {
  return (
    <LayoutContainer>
      <Section
        title="Dashboard"
        description="A light-weight dashboard page to show how shared layout pieces can be reused beyond the blog grid."
        actions={<Button>New post</Button>}
      >
        <div className="grid gap-6 lg:grid-cols-[1fr,320px]">
          <div className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {stats.map((stat) => (
                <Card key={stat.label} className="p-6">
                  <p className="text-sm text-gray-400">{stat.label}</p>
                  <p className="mt-2 text-3xl font-display font-semibold text-white">{stat.value}</p>
                  <p className="mt-1 text-sm text-accent">{stat.change}</p>
                </Card>
              ))}
            </div>
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-white">Recent activity</h3>
              <ul className="mt-4 space-y-3 text-sm text-gray-300">
                <li>• Scheduled “Enhancing your designs with negative space”</li>
                <li>• Uploaded new gallery assets to “Workspace Design Trends”</li>
                <li>• Drafted “Designing with Black and White — redux”</li>
              </ul>
            </Card>
          </div>
          <Sidebar sections={sidebarSections} />
        </div>
      </Section>
    </LayoutContainer>
  );
}
