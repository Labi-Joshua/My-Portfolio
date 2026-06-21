import { sanityClient } from '../lib/sanity'

export interface CaseStudy {
  slug: string;
  title: string;
  description?: string;
  tags: string;
  coverImage: string;
  coverAlt: string;
  year: string;
  role: string;
  technicalSpecs: string[];
  status: string;
  websiteUrl?: string;
  previewImages: { src: string; alt: string }[];
  sections: {
    heading: string;
    body: string;
    images?: { src: string; alt: string; caption?: string }[];
  }[];
  testimonial?: {
    quote: string;
    author: string;
    authorRole: string;
    company: string;
    displayAfterSection?: string;
  };
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
      tags,
      "coverImage": coverImage.asset->url,
      coverAlt,
      year,
      role,
      technicalSpecs,
      status,
      websiteUrl,
      "previewImages": previewImages[]{
        "src": asset->url,
        "alt": alt
      },
      "sections": sections[]{
        heading,
        body,
        "images": images[]{
          "src": asset->url,
          "alt": alt,
          caption
        }
      },
      testimonial
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
