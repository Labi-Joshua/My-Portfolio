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

export const tinyThoughts: TinyThought[] = [
  {
    datetime: 'Feb 18, 2026 | 11:42 PM',
    quote: '"A token isn\'t a value. It\'s a promise that the value can change without breaking anything."',
  },
  {
    datetime: 'Feb 12, 2026 | 9:15 AM',
    quote: '"Consistency is not about making everything look the same. It\'s about making everything behave the same way."',
  },
  {
    datetime: 'Jan 29, 2026 | 2:30 PM',
    quote: '"The empty state is the first state. Design it last and you\'re already doing it wrong."',
  },
  {
    datetime: 'Jan 15, 2026 | 10:00 PM',
    quote: '"Annotation explains what. Documentation explains why. Most handoffs have neither."',
  },
  {
    datetime: 'Dec 30, 2025 | 7:45 PM',
    quote: '"Stop designing for the user who knows exactly what they want. Design for the user who is figuring it out."',
  },
  {
    datetime: 'Dec 10, 2025 | 3:20 PM',
    quote: '"A component library without documentation is just a collection of unnamed objects."',
  },
]
