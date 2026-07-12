import { sanityClient } from '../lib/sanity'

export interface SiteSettings {
  contactUrl?: string;
  bookCallUrl?: string;
  whatsappUrl?: string;
  resumeUrl?: string;
  mediumUrl?: string;
  twitterUrl?: string;
  instagramUrl?: string;
  linkedinUrl?: string;
  socialLinks?: string[];
}

export async function getSiteSettings(): Promise<SiteSettings> {
  const data = await sanityClient.fetch(`
    *[_type == "siteSettings"][0] {
      contactUrl,
      bookCallUrl,
      whatsappUrl,
      resumeUrl,
      mediumUrl,
      twitterUrl,
      instagramUrl,
      linkedinUrl
    }
  `)
  return data ?? {}
}
