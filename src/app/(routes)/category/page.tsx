'use client';

import { useMemo, useState } from 'react';
import { LayoutContainer } from '@/components/shared/LayoutContainer';
import { PageHeader } from '@/components/shared/PageHeader';
import { Section } from '@/components/shared/Section';
import { PostCard } from '@/components/shared/PostCard';
import { Pagination } from '@/components/shared/Pagination';
import { Button } from '@/components/ui/Button';
import { posts } from '@/lib/data/posts';

const allCategories = Array.from(new Set(posts.flatMap((post) => post.categories))).sort();

export default function CategoryPage() {
  const [activeCategory, setActiveCategory] = useState<string>('Photography');

  const filteredPosts = useMemo(() => {
    if (activeCategory === 'All') return posts;
    return posts.filter((post) => post.categories.includes(activeCategory));
  }, [activeCategory]);

  return (
    <>
      <PageHeader
        eyebrow="Categories"
        title={`Category: ${activeCategory === 'All' ? 'All posts' : activeCategory}`}
        subtitle="Browse the masonry grid filtered by category. Derived from the original template with reusable components."
      />

      <LayoutContainer>
        <Section
          title="Browse by category"
          description="Pick a category to filter the grid. Buttons reuse the shared Button component."
          actions={
            <Button variant="secondary" onClick={() => setActiveCategory('All')}>
              Reset
            </Button>
          }
        >
          <div className="mb-6 flex flex-wrap gap-3">
            <CategoryChip label="All" active={activeCategory === 'All'} onClick={() => setActiveCategory('All')} />
            {allCategories.map((cat) => (
              <CategoryChip
                key={cat}
                label={cat}
                active={activeCategory === cat}
                onClick={() => setActiveCategory(cat)}
              />
            ))}
          </div>

          <div className="content-grid">
            {filteredPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>

          <Pagination current={1} total={5} />
        </Section>
      </LayoutContainer>
    </>
  );
}

type ChipProps = {
  label: string;
  active: boolean;
  onClick: () => void;
};

function CategoryChip({ label, active, onClick }: ChipProps) {
  return (
    <Button
      variant={active ? 'primary' : 'secondary'}
      className="px-4 py-2 text-sm"
      onClick={onClick}
      aria-pressed={active}
    >
      {label}
    </Button>
  );
}
