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
  datetime: string; // formatted for display
  quote: string;
}

export function formatThoughtDatetime(iso: string): string {
  if (!iso) return ''
  const d = new Date(iso)
  const date = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
  const time = d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })
  return `${date} | ${time}`
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
  const data = await sanityClient.fetch(`
    *[_type == "tinyThought"] | order(postedAt desc) {
      quote,
      postedAt
    }
  `)
  return data.map((t: { quote: string; postedAt: string }) => ({
    quote: t.quote,
    datetime: formatThoughtDatetime(t.postedAt),
  }))
}
