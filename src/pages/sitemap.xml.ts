import type { APIRoute } from 'astro'
import { getCaseStudies } from '../data/projects'

export const GET: APIRoute = async () => {
  const siteUrl = 'https://labijoshua.com'
  const now = new Date().toISOString()

  const caseStudies = await getCaseStudies()

  const staticPages = [
    { url: siteUrl,                  priority: '1.0', changefreq: 'weekly' },
    { url: `${siteUrl}/about`,       priority: '0.9', changefreq: 'monthly' },
    { url: `${siteUrl}/articles`,    priority: '0.8', changefreq: 'weekly' },
  ]

  const workPages = caseStudies.map(cs => ({
    url: `${siteUrl}/work/${cs.slug}`,
    priority: '0.9',
    changefreq: 'monthly',
  }))

  const allPages = [...staticPages, ...workPages]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(p => `  <url>
    <loc>${p.url}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`).join('\n')}
</urlset>`

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  })
}
