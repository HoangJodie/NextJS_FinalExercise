export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

export const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Categories',
    href: '/category',
    children: [
      { label: 'WordPress', href: '/category/wordpress' },
      { label: 'HTML', href: '/category/html' },
      { label: 'Photography', href: '/category/photography' },
      { label: 'UI', href: '/category/ui' },
      { label: 'Mockups', href: '/category/mockups' },
      { label: 'Branding', href: '/category/branding' },
    ],
  },
  {
    label: 'Blog',
    href: '/blog',
    children: [
      { label: 'Video Post', href: '/single/video' },
      { label: 'Audio Post', href: '/single/audio' },
      { label: 'Gallery Post', href: '/single/gallery' },
      { label: 'Standard Post', href: '/single/standard' },
    ],
  },
  { label: 'Styles', href: '/style-guide' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];
