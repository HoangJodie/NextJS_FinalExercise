export type PostFormat = 'standard' | 'audio' | 'quote' | 'gallery' | 'link' | 'video';

export type MediaGallery = {
  images?: string[];
  audioSrc?: string;
  videoUrl?: string;
  linkUrl?: string;
  linkLabel?: string;
};

export type Author = {
  name: string;
  avatar?: string;
};

export type Post = {
  id: string;
  title: string;
  slug: string;
  date: string;
  author?: Author;
  categories: string[];
  excerpt?: string;
  image?: string;
  format: PostFormat;
  featured?: boolean;
  media?: MediaGallery;
};
