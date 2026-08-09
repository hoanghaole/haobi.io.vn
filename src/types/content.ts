export interface WebsiteHero {
  id: string;
  title?: string | null;
  subtitle?: string | null;
  description?: string | null;
  summary?: string | null;
  cta?: string | null;
  cta_text?: string | null;
  cta_url?: string | null;
  image?: string | null;
  image_hero?: string | null;
  order?: number | null;
}

export interface ProductSummary {
  id: string;
  title?: string | null;
  name?: string | null;
  description?: string | null;
  summary?: string | null;
  category?: string | null;
  tag?: string | null;
  cta?: string | null;
  image?: string | null;
  link?: string | null;
  url?: string | null;
  order?: number | null;
}

export interface WebsiteBlogPost {
  id: string;
  slug: string;
  title: string;
  content?: string | null;
  summary?: string | null;
  category?: string | null;
  date?: string | null;
  image?: string | null;
  image_hero?: string | null;
  image_poster?: string | null;
  image_content?: string | null;
}
