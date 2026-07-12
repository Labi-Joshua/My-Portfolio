import { sanityClient } from '../lib/sanity'

export interface CaseStudy {
  slug: string;
  title: string;
  description?: string;
  year: string;
  category?: string;
  featured?: boolean;
  coverImage: string;
  coverAlt: string;
  previewImages: { src: string; alt: string }[];
  quickStats?: { label: string; value: string }[];
  challenge?: {
    body: string;
    bullets?: string[];
  };
  roleTags?: string[];
  workedOn?: string[];
  designShowcase?: {
    subtitle?: string;
    images?: { src: string; alt: string; caption?: string }[];
  };
  solution?: string;
  outcome?: {
    body: string;
    quote: string;
    author: string;
    authorRole: string;
  };
  websiteUrl?: string;
  appStoreUrl?: string;
}

export interface Experiment {
  category: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  link?: string;
}

export async function getCaseStudies(): Promise<CaseStudy[]> {
  return sanityClient.fetch(`
    *[_type == "caseStudy"] | order(_createdAt asc) {
      "slug": slug.current,
      title,
      description,
      year,
      category,
      featured,
      "coverImage": coverImage.asset->url,
      coverAlt,
      "previewImages": previewImages[]{
        "src": asset->url,
        "alt": alt
      },
      quickStats,
      challenge,
      roleTags,
      workedOn,
      "designShowcase": designShowcase{
        subtitle,
        "images": images[]{
          "src": asset->url,
          "alt": alt,
          caption
        }
      },
      solution,
      outcome,
      websiteUrl,
      appStoreUrl
    }
  `)
}

export async function getExperiments(): Promise<Experiment[]> {
  return sanityClient.fetch(`
    *[_type == "experiment"] | order(_createdAt asc) {
      category,
      title,
      description,
      "image": image.asset->url,
      imageAlt,
      link
    }
  `)
}
