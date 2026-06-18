import { sanityClient } from '../lib/sanity'

export interface Article {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
  readTime: number;
  image: string;
  imageAlt: string;
  featured?: boolean;
  externalUrl?: string;
}

export interface TinyThought {
  datetime: string;
  quote: string;
}

export function formatArticleDate(iso: string): string {
  if (!iso) return ''
  const d = new Date(iso + 'T00:00:00')
  return d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
}

export async function getArticles(): Promise<Article[]> {
  return sanityClient.fetch(`
    *[_type == "article"] | order(coalesce(date, _createdAt) desc) {
      "slug": slug.current,
      title,
      description,
      category,
      date,
      readTime,
      "image": image.asset->url,
      imageAlt,
      featured,
      externalUrl
    }
  `)
}

export async function getTinyThoughts(): Promise<TinyThought[]> {
  return sanityClient.fetch(`
    *[_type == "tinyThought"] | order(_createdAt desc) {
      quote,
      datetime
    }
  `)
}
