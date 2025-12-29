import { FeaturedSlider } from '@/components/shared/FeaturedSlider';
import { LayoutContainer } from '@/components/shared/LayoutContainer';
import { Pagination } from '@/components/shared/Pagination';
import { PostCard } from '@/components/shared/PostCard';
import { Section } from '@/components/shared/Section';
import { featuredPosts, posts } from '@/lib/data/posts';

export default function HomePage() {
  return (
    <>
      <LayoutContainer>
        <Section
          title="Featured Stories"
          description="A curated selection inspired by the original template — reimagined with cleaner component patterns."
        >
          <FeaturedSlider items={featuredPosts} />
        </Section>
      </LayoutContainer>

      <LayoutContainer>
        <Section
          title="Latest Posts"
          description="Masonry-inspired grid with mixed media cards, keeping the feel of the template while using reusable components."
        >
          <div className="content-grid">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
          <Pagination current={1} total={9} />
        </Section>
      </LayoutContainer>
    </>
  );
}
