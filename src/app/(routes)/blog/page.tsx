import { FeaturedSlider } from '@/components/shared/FeaturedSlider';
import { LayoutContainer } from '@/components/shared/LayoutContainer';
import { PageHeader } from '@/components/shared/PageHeader';
import { Pagination } from '@/components/shared/Pagination';
import { PostCard } from '@/components/shared/PostCard';
import { Section } from '@/components/shared/Section';
import { featuredPosts, posts } from '@/lib/data/posts';

export default function BlogPage() {
  return (
    <>
      <PageHeader
        eyebrow="Blog"
        title="Latest from the blog"
        subtitle="Full listing page derived from the HTML template, now using server components and reusable cards."
      />

      <LayoutContainer>
        <Section
          title="Highlights"
          description="Featured slider reuses the home component."
        >
          <FeaturedSlider items={featuredPosts} />
        </Section>
      </LayoutContainer>

      <LayoutContainer>
        <Section
          title="All posts"
          description="Masonry-inspired grid of all posts."
        >
          <div className="content-grid">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
          <Pagination current={1} total={4} />
        </Section>
      </LayoutContainer>
    </>
  );
}
