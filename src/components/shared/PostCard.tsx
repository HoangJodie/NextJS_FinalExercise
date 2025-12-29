import Image from 'next/image';
import Link from 'next/link';
import { Post } from '@/types/post';
import { Card } from '../ui/Card';

type PostCardProps = {
  post: Post;
};

const badgeColors = ['bg-white/10', 'bg-accent/15 text-accent', 'bg-blue-500/10 text-blue-300'];

export function PostCard({ post }: PostCardProps) {
  return (
    <Card className="flex h-full flex-col overflow-hidden">
      {renderMedia(post)}
      <div className="flex h-full flex-col gap-4 px-6 pb-6 pt-5">
        <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.18em] text-gray-400">
          {post.categories.map((cat, idx) => (
            <span
              key={cat}
              className={`rounded-full px-3 py-1 text-[11px] font-semibold ${badgeColors[idx % badgeColors.length]}`}
            >
              {cat}
            </span>
          ))}
          <span className="ml-auto text-[11px] text-gray-500">{post.date}</span>
        </div>
        <div className="space-y-3">
          <Link href={`/posts/${post.slug}`} className="group/title block">
            <h3 className="font-display text-xl font-semibold text-white transition-colors group-hover/title:text-accent">
              {post.title}
            </h3>
          </Link>
          {post.excerpt && <p className="text-sm leading-relaxed text-gray-400">{post.excerpt}</p>}
        </div>
      </div>
    </Card>
  );
}

function renderMedia(post: Post) {
  switch (post.format) {
    case 'audio':
      return (
        <div className="relative">
          {post.image ? (
            <Image
              src={post.image}
              alt={post.title}
              width={800}
              height={600}
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="h-52 w-full object-cover"
              priority={post.featured}
            />
          ) : null}
          {post.media?.audioSrc ? (
            <div className="absolute inset-x-4 bottom-4">
              <audio
                controls
                className="w-full rounded-2xl bg-black/60 p-2 text-white backdrop-blur"
                src={post.media.audioSrc}
              />
            </div>
          ) : null}
        </div>
      );
    case 'gallery':
      return (
        <div className="grid grid-cols-3 gap-1 p-1">
          {post.media?.images?.slice(0, 3).map((src) => (
            <Image
              key={src}
              src={src}
              alt={post.title}
              width={320}
              height={220}
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="h-28 w-full rounded-xl object-cover"
            />
          ))}
        </div>
      );
    case 'quote':
      return (
        <div className="flex h-48 items-center justify-center bg-gradient-to-br from-surface to-surface/40 px-8 text-center">
          <blockquote className="space-y-3 text-lg text-gray-100">
            <p className="font-display text-2xl leading-relaxed text-white">&ldquo;{post.excerpt}&rdquo;</p>
            {post.author?.name ? (
              <footer className="text-sm uppercase tracking-[0.2em] text-gray-400">— {post.author.name}</footer>
            ) : null}
          </blockquote>
        </div>
      );
    case 'link':
      return (
        <div className="flex h-40 flex-col justify-center gap-3 bg-surface/60 px-8">
          <p className="text-sm text-gray-300">{post.excerpt}</p>
          {post.media?.linkUrl ? (
            <Link
              href={post.media.linkUrl}
              target="_blank"
              className="text-sm font-semibold text-accent underline underline-offset-4"
            >
              {post.media.linkLabel ?? post.media.linkUrl}
            </Link>
          ) : null}
        </div>
      );
    default:
      if (!post.image) return null;
      return (
        <Image
          src={post.image}
          alt={post.title}
          width={800}
          height={600}
          sizes="(max-width: 1024px) 100vw, 33vw"
          className="h-52 w-full object-cover transition duration-500"
          priority={post.featured}
        />
      );
  }
}
