/**
 * Appends Sanity's on-the-fly image transformation params (resize + auto
 * format + quality) so the CDN serves a right-sized WebP/AVIF instead of the
 * original file. Non-Sanity URLs (e.g. local /public assets) pass through unchanged.
 */
export function optimizeImage(
  url: string | undefined,
  width: number,
  { quality = 75, autoFormat = true }: { quality?: number; autoFormat?: boolean } = {}
): string | undefined {
  if (!url) return url;
  if (!url.includes('cdn.sanity.io')) return url;
  const separator = url.includes('?') ? '&' : '?';
  const formatParam = autoFormat ? '&auto=format' : '';
  return `${url}${separator}w=${width}${formatParam}&q=${quality}`;
}
