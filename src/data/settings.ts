import { sanityClient } from '../lib/sanity'

export interface SiteSettings {
  contactUrl?: string;
  resumeUrl?: string;
}

export async function getSiteSettings(): Promise<SiteSettings> {
  const data = await sanityClient.fetch(`
    *[_type == "siteSettings"][0] {
      contactUrl,
      resumeUrl
    }
  `)
  return data ?? {}
}
