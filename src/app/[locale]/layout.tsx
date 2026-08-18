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
  return [{ locale: "tr" }, { locale: "en" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isTr = locale === "tr";
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";
  const brandName =
    process.env.NEXT_PUBLIC_BRAND_NAME || "Antalya Yamaç Paraşütü";

  const title = isTr
    ? `${brandName} | Falezler & Varyant Tandem Uçuş`
    : `Antalya Paragliding | Tandem Flight Over the Mediterranean`;

  const description = isTr
    ? `Antalya Varyant ve Falezler üzerinde tandem yamaç paraşütü deneyimi. Akdeniz manzarası eşliğinde profesyonel pilot ile güvenli uçuş. WhatsApp üzerinden kolay randevu.`
    : `Tandem paragliding experience over Antalya's Falezler cliffs and Varyant. Safe flights with professional pilots over the Mediterranean. Easy WhatsApp booking.`;

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: title,
      template: isTr
        ? `%s | ${brandName}`
        : `%s | Antalya Paragliding`,
    },
    description,
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        "tr-TR": `${baseUrl}/tr`,
        "en-US": `${baseUrl}/en`,
        "x-default": `${baseUrl}/tr`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${locale}`,
      siteName: brandName,
      locale: isTr ? "tr_TR" : "en_US",
      alternateLocale: isTr ? ["en_US"] : ["tr_TR"],
      type: "website",
      images: [
        {
          url: `${baseUrl}/images/og/antalya-yamac-parasutu-og.jpg`,
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
      images: [`${baseUrl}/images/og/antalya-yamac-parasutu-og.jpg`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large" as const,
        "max-snippet": -1,
      },
    },
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || undefined,
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
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";
  const brandName =
    process.env.NEXT_PUBLIC_BRAND_NAME || "Antalya Yamaç Paraşütü";

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: brandName,
    description:
      locale === "tr"
        ? "Antalya Varyant ve Falezler üzerinde tandem yamaç paraşütü uçuş deneyimi."
        : "Tandem paragliding flight experience over Antalya Varyant and Falezler cliffs.",
    url: `${baseUrl}/${locale}`,
    telephone: process.env.NEXT_PUBLIC_PHONE || "",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Antalya",
      addressRegion: "Antalya",
      addressCountry: "TR",
      streetAddress: "[ADMIN TARAFINDAN DOLDURULACAK]",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 36.8769,
      longitude: 30.6525,
    },
    image: `${baseUrl}/images/hero/antalya-yamac-parasutu-hero.jpg`,
    sameAs: [
      process.env.NEXT_PUBLIC_INSTAGRAM_URL || "",
      process.env.NEXT_PUBLIC_YOUTUBE_URL || "",
    ].filter(Boolean),
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "08:00",
      closes: "19:00",
    },
    priceRange: "₺₺",
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: brandName,
    url: baseUrl,
    inLanguage: locale === "tr" ? "tr-TR" : "en-US",
    potentialAction: {
      "@type": "SearchAction",
      target: `${baseUrl}/${locale}/blog?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang={locale} className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="alternate"
          hrefLang="tr"
          href={`${baseUrl}/tr`}
        />
        <link
          rel="alternate"
          hrefLang="en"
          href={`${baseUrl}/en`}
        />
        <link
          rel="alternate"
          hrefLang="x-default"
          href={`${baseUrl}/tr`}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body
        className={`${inter.className} antialiased min-h-screen flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}
