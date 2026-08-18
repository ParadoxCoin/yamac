export const siteConfig = {
  name: process.env.NEXT_PUBLIC_BRAND_NAME || '[ADMIN TARAFINDAN DOLDURULACAK]',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com',
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '905XXXXXXXXX',
  email: process.env.NEXT_PUBLIC_EMAIL || '',
  phone: process.env.NEXT_PUBLIC_PHONE || '',
  address: '[ADMIN TARAFINDAN DOLDURULACAK]',
  coordinates: {
    lat: parseFloat(process.env.NEXT_PUBLIC_MAP_LATITUDE || '36.8769'),
    lng: parseFloat(process.env.NEXT_PUBLIC_MAP_LONGITUDE || '30.6525'),
  },
  social: {
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || 'https://www.instagram.com/antalya_yamac_parasutu/',
    youtube: process.env.NEXT_PUBLIC_YOUTUBE_URL || '',
    googleMaps: process.env.NEXT_PUBLIC_GOOGLE_MAPS_URL || '',
  },
  defaultLocale: 'tr' as const,
} as const;
