import type { MetadataRoute } from 'next';
import { landingPages } from '@/lib/content/landingPages';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yamac-five.vercel.app';
  const locales = ['tr', 'en', 'ru', 'ar'];

  // Base pages for each locale
  const basePages = [
    '',
    '/blog',
    '/gizlilik-politikasi',
    '/kvkk',
    '/cerez-politikasi',
    '/acik-riza',
  ];

  // Landing page slugs from landingPages registry
  const landingSlugs = Object.keys(landingPages).map((slug) => `/${slug}`);

  // Combine unique pages
  const allPagePaths = Array.from(new Set([...basePages, ...landingSlugs]));

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const pagePath of allPagePaths) {
      entries.push({
        url: `${baseUrl}/${locale}${pagePath}`,
        lastModified: new Date(),
        changeFrequency: pagePath === '' ? 'daily' : pagePath.includes('blog') ? 'weekly' : 'monthly',
        priority: pagePath === '' ? 1.0 : pagePath.includes('blog') ? 0.7 : 0.8,
        alternates: {
          languages: {
            'tr-TR': `${baseUrl}/tr${pagePath}`,
            'en-US': `${baseUrl}/en${pagePath}`,
            'ru-RU': `${baseUrl}/ru${pagePath}`,
            'ar-SA': `${baseUrl}/ar${pagePath}`,
            'x-default': `${baseUrl}/tr${pagePath}`,
          },
        },
      });
    }
  }

  return entries;
}
