'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Post } from '@/types/post';
import { Button } from '../ui/Button';
import { cn } from '@/lib/utils';

type FeaturedSliderProps = {
  items: Post[];
};

export function FeaturedSlider({ items }: FeaturedSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (items.length <= 1) return;
    const id = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, 5000);
    return () => clearInterval(id);
  }, [items.length]);

  if (!items.length) return null;

  const active = items[activeIndex];

  return (
    <div className="relative overflow-hidden rounded-[32px] border border-border/60 bg-gradient-to-br from-surface to-background shadow-card">
      <div className="relative h-[420px] w-full">
        {items.map((post, index) => (
          <div
            key={post.id}
            className={cn(
              'absolute inset-0 transition-opacity duration-700',
              index === activeIndex ? 'opacity-100' : 'opacity-0',
            )}
          >
            {post.image ? (
              <Image
                src={post.image}
                alt={post.title}
                fill
                sizes="(max-width: 1024px) 100vw, 960px"
                className="object-cover"
                priority={index === 0}
              />
            ) : (
              <div className="h-full w-full bg-surface" />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
          </div>
        ))}
        <div className="absolute inset-0 flex items-end">
          <div className="w-full space-y-4 px-8 pb-10">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-gray-300">
              <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold">Featured</span>
              <span className="text-gray-400">{active.date}</span>
              {active.author?.name ? <span className="text-gray-400">— {active.author.name}</span> : null}
            </div>
            <Link href={`/posts/${active.slug}`} className="block max-w-3xl">
              <h1 className="text-3xl font-display font-semibold leading-tight text-white sm:text-4xl">
                {active.title}
              </h1>
              {active.excerpt ? (
                <p className="mt-3 max-w-2xl text-base text-gray-300">{active.excerpt}</p>
              ) : null}
            </Link>
            <div className="flex items-center gap-3 pt-4">
              <Button variant="primary" className="px-5 py-2.5">
                Read article
              </Button>
              <div className="flex items-center gap-2">
                {items.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={cn(
                      'h-2.5 w-2.5 rounded-full transition',
                      idx === activeIndex ? 'bg-accent' : 'bg-white/30 hover:bg-white/60',
                    )}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-y-0 right-0 flex flex-col justify-center gap-3 px-4">
        <Button
          variant="secondary"
          className="h-12 w-12 rounded-full p-0"
          onClick={() => setActiveIndex((prev) => (prev - 1 + items.length) % items.length)}
          aria-label="Previous slide"
        >
          ‹
        </Button>
        <Button
          variant="secondary"
          className="h-12 w-12 rounded-full p-0"
          onClick={() => setActiveIndex((prev) => (prev + 1) % items.length)}
          aria-label="Next slide"
        >
          ›
        </Button>
      </div>
    </div>
  );
}
