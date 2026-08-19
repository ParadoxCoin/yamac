import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yamac-five.vercel.app';

  const locales = ['tr', 'en', 'ru', 'ar'];

  const pages = [
    '',
    '/antalya-yamac-parasutu',
    '/antalya-tandem-yamac-parasutu',
    '/antalya-paragliding',
    '/antalya-paragliding-price',
    '/antalya-varyant-yamac-parasutu',
    '/antalya-falezler-yamac-parasutu',
    '/antalya-konyaalti-yamac-parasutu',
    '/antalya-muratpasa-yamac-parasutu',
    '/antalya-yamac-parasutu-fiyatlari',
    '/antalya-yamac-parasutu-randevu',
    '/blog',
    '/gizlilik-politikasi',
    '/kvkk',
  ];

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const page of pages) {
      entries.push({
        url: `${baseUrl}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: page === '' ? 'daily' : 'weekly',
        priority: page === '' ? 1.0 : page.includes('blog') ? 0.7 : 0.8,
        alternates: {
          languages: {
            'tr-TR': `${baseUrl}/tr${page}`,
            'en-US': `${baseUrl}/en${page}`,
            'ru-RU': `${baseUrl}/ru${page}`,
            'ar-SA': `${baseUrl}/ar${page}`,
          },
        },
      });
    }
  }

  return entries;
}
