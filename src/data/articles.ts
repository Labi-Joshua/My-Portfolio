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
}

export interface TinyThought {
  datetime: string;
  quote: string;
}

export async function getArticles(): Promise<Article[]> {
  return sanityClient.fetch(`
    *[_type == "article"] | order(date desc) {
      "slug": slug.current,
      title,
      description,
      category,
      date,
      readTime,
      "image": image.asset->url,
      imageAlt,
      featured
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
