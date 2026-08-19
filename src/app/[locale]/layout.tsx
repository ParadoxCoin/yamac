import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "../globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export function generateStaticParams() {
  return [{ locale: "tr" }, { locale: "en" }, { locale: "ru" }, { locale: "ar" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://yamac-five.vercel.app";
  const brandName = "Antalya Yamaç Paraşütü - Mehmet Bayraktar";

  let title = `${brandName} | Varyant & Falezler Tandem Uçuş`;
  let description = `Antalya Varyant ve Falezler üzerinde tandem yamaç paraşütü deneyimi. 23 yıllık deneyimli pilot Mehmet Bayraktar ile güvenli uçuş. Fotoğraf ve 4K video dahil.`;

  if (locale === 'en') {
    title = `Antalya Paragliding | Tandem Flight Over Mediterranean Cliffs`;
    description = `Tandem paragliding flight in Antalya over Varyant & Falezler cliffs. Flown safely by 23-year commercial pilot Mehmet Bayraktar. Includes HD photos & 4K video.`;
  } else if (locale === 'ru') {
    title = `Парапланеризм в Анталии | Полет на параплане над утесами Вариант`;
    description = `Тандем полет на параплане в Анталии над утесами Вариант и пляжем Коньяалты. Опытный пилот с 23-летним стажем Мехмет Байрактар. Фото и видео 4K включены.`;
  } else if (locale === 'ar') {
    title = `الطيران الشراعي في أنطاليا | رحلة تانديم فوق جروف كونيالتي`;
    description = `رحلة طيران شراعي مزدوج في أنطاليا فوق جروف كونيالتي مع الكابتن محمد بيرقدار (23 عاماً خبرة). الصور وفيديو 4K مجاناً. حجز واتساب مباشر.`;
  }

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: title,
      template: `%s | ${brandName}`,
    },
    description,
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        "tr-TR": `${baseUrl}/tr`,
        "en-US": `${baseUrl}/en`,
        "ru-RU": `${baseUrl}/ru`,
        "ar-SA": `${baseUrl}/ar`,
        "x-default": `${baseUrl}/tr`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${locale}`,
      siteName: brandName,
      type: "website",
      images: [
        {
          url: `${baseUrl}/images/hero/antalya-yamac-parasutu-hero.jpg`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${baseUrl}/images/hero/antalya-yamac-parasutu-hero.jpg`],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://yamac-five.vercel.app";
  const brandName = "Antalya Yamaç Paraşütü";
  const isRtl = locale === 'ar';

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: brandName,
    description: "Antalya Varyant ve Falezler üzerinde tandem yamaç paraşütü uçuş deneyimi.",
    url: `${baseUrl}/${locale}`,
    telephone: "05079046446",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Antalya",
      addressRegion: "Antalya",
      addressCountry: "TR",
      streetAddress: "Konyaaltı Varyant Büyük Seyir Terası - Panoramik Seyir Terası, Muratpaşa",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 36.8844596,
      longitude: 30.6795452,
    },
    image: `${baseUrl}/images/hero/antalya-yamac-parasutu-hero.jpg`,
    priceRange: "₺₺",
  };

  return (
    <html
      lang={locale}
      dir={isRtl ? 'rtl' : 'ltr'}
      className={`${inter.variable} ${playfair.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="alternate" hrefLang="tr" href={`${baseUrl}/tr`} />
        <link rel="alternate" hrefLang="en" href={`${baseUrl}/en`} />
        <link rel="alternate" hrefLang="ru" href={`${baseUrl}/ru`} />
        <link rel="alternate" hrefLang="ar" href={`${baseUrl}/ar`} />
        <link rel="alternate" hrefLang="x-default" href={`${baseUrl}/tr`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased min-h-screen flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
