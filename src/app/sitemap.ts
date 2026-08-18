import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com';

  const trPages = [
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
    '/antalya-yamac-parasutu-nasil-yapilir',
    '/antalya-yamac-parasutu-guvenli-mi',
    '/antalya-yamac-parasutu-hakkinda',
    '/antalya-yamac-parasutu-sss',
    '/antalya-yamac-parasutu-guvenlik',
    '/blog',
    '/galeri',
    '/gizlilik-politikasi',
    '/kvkk',
  ];

  const enPages = [
    '',
    '/antalya-paragliding',
    '/antalya-tandem-paragliding',
    '/antalya-paragliding-price',
    '/antalya-paragliding-booking',
    '/antalya-paragliding-safety',
    '/antalya-paragliding-faq',
    '/blog',
    '/gallery',
    '/privacy-policy',
  ];

  const entries: MetadataRoute.Sitemap = [];

  for (const page of trPages) {
    entries.push({
      url: `${baseUrl}/tr${page}`,
      lastModified: new Date(),
      changeFrequency: page === '' ? 'daily' : 'weekly',
      priority: page === '' ? 1.0 : page.includes('blog') ? 0.7 : 0.8,
      alternates: {
        languages: {
          'tr-TR': `${baseUrl}/tr${page}`,
          'en-US': `${baseUrl}/en${page}`,
        },
      },
    });
  }

  for (const page of enPages) {
    entries.push({
      url: `${baseUrl}/en${page}`,
      lastModified: new Date(),
      changeFrequency: page === '' ? 'daily' : 'weekly',
      priority: page === '' ? 0.9 : 0.7,
      alternates: {
        languages: {
          'tr-TR': `${baseUrl}/tr${page}`,
          'en-US': `${baseUrl}/en${page}`,
        },
      },
    });
  }

  return entries;
}
