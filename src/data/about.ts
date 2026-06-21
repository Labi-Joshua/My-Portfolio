import { sanityClient } from '../lib/sanity'

export interface AboutPage {
  heroHeading?: string;
  profilePhoto?: string;
  profilePhotoAlt?: string;
  bioParagraphs?: string[];
  stats?: { label: string; value: string; sub: string }[];
  galleryImages?: { src: string; alt: string }[];
  outsideDescription?: string;
  outsideThumbnails?: { src: string; alt: string }[];
  howIWorkDescription?: string;
  sayHiDescription?: string;
  email?: string;
  phone?: string;
}

export async function getAboutPage(): Promise<AboutPage> {
  const data = await sanityClient.fetch(`
    *[_type == "aboutPage"][0] {
      heroHeading,
      "profilePhoto": profilePhoto.asset->url,
      profilePhotoAlt,
      bioParagraphs,
      stats,
      "galleryImages": galleryImages[]{
        "src": asset->url,
        "alt": alt
      },
      outsideDescription,
      "outsideThumbnails": outsideThumbnails[]{
        "src": asset->url,
        "alt": alt
      },
      howIWorkDescription,
      sayHiDescription,
      email,
      phone
    }
  `)
  return data ?? {}
}
