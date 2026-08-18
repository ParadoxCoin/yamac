import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { landingPages } from '@/lib/content/landingPages';
import Link from 'next/link';

interface Props {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const params = [];
  for (const key of Object.keys(landingPages)) {
    const page = landingPages[key];
    params.push({ locale: page.locale, slug: page.slug });
  }
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, locale } = await params;
  const page = landingPages[slug];

  if (!page || page.locale !== locale) {
    return {};
  }

  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords.join(', '),
    alternates: {
      canonical: page.canonical,
    },
    openGraph: {
      title: page.title,
      description: page.description,
      type: 'website',
      locale: locale === 'tr' ? 'tr_TR' : 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: page.title,
      description: page.description,
    },
  };
}

export default async function LandingPage({ params }: Props) {
  const { slug, locale } = await params;
  const page = landingPages[slug];

  if (!page || page.locale !== locale) {
    notFound();
  }

  // FAQ Schema JSON-LD
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: page.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Header Placeholder */}
      <header className="bg-white shadow-sm py-4 sticky top-0 z-50">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href={`/${locale}`} className="text-2xl font-bold text-blue-600">
            Antalya Paragliding
          </Link>
          <nav>
            <Link href={`/${locale}`} className="text-gray-600 hover:text-blue-600 transition">
              {locale === 'tr' ? 'Ana Sayfa' : 'Home'}
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-blue-600 text-white py-20 px-4 text-center">
          <div className="container mx-auto max-w-4xl">
            {/* Breadcrumb */}
            <nav className="text-sm mb-6 text-blue-200">
              <Link href={`/${locale}`} className="hover:text-white underline">
                {locale === 'tr' ? 'Ana Sayfa' : 'Home'}
              </Link>
              <span className="mx-2">{'>'}</span>
              <span>{page.h1}</span>
            </nav>
            
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
              {page.h1}
            </h1>
            <p className="text-xl md:text-2xl font-medium text-blue-100 mb-8">
              {page.heroSubtitle}
            </p>
            <a
              href="https://wa.me/905000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full text-lg transition shadow-lg"
            >
              {locale === 'tr' ? 'WhatsApp ile Rezervasyon Yap' : 'Book via WhatsApp'}
            </a>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-12 px-4 bg-white">
          <div className="container mx-auto max-w-3xl">
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              {page.introText}
            </p>
          </div>
        </section>

        {/* Main Content Sections & Sidebar */}
        <section className="py-12 px-4 container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-12">
              {page.sections.map((section, index) => (
                <div key={index} className="prose max-w-none">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-blue-100">
                    {section.h2}
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-wrap">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>

            {/* Sidebar (Quick Booking Form) */}
            <div className="md:col-span-1">
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 sticky top-24">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  {locale === 'tr' ? 'Hızlı Randevu' : 'Quick Booking'}
                </h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {locale === 'tr' ? 'Ad Soyad' : 'Full Name'}
                    </label>
                    <input type="text" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {locale === 'tr' ? 'Telefon' : 'Phone'}
                    </label>
                    <input type="tel" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {locale === 'tr' ? 'Tarih' : 'Date'}
                    </label>
                    <input type="date" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
                  </div>
                  <button type="button" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition mt-4">
                    {locale === 'tr' ? 'Gönder' : 'Submit'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        {page.faqs.length > 0 && (
          <section className="py-16 px-4 bg-gray-50">
            <div className="container mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
                {locale === 'tr' ? 'Sıkça Sorulan Sorular' : 'Frequently Asked Questions'}
              </h2>
              <div className="space-y-6">
                {page.faqs.map((faq, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-gray-700">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Map Section Placeholder */}
        <section className="py-12 px-4 bg-white">
          <div className="container mx-auto max-w-5xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {locale === 'tr' ? 'Bizi Nerede Bulabilirsiniz?' : 'Where to Find Us'}
            </h2>
            <div className="bg-gray-200 w-full h-80 rounded-xl flex items-center justify-center text-gray-500">
              <span className="text-lg">Google Maps Integration Placeholder</span>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Placeholder */}
      <footer className="bg-gray-900 text-white py-8 text-center">
        <div className="container mx-auto px-4">
          <p>© {new Date().getFullYear()} Antalya Paragliding. {locale === 'tr' ? 'Tüm hakları saklıdır.' : 'All rights reserved.'}</p>
        </div>
      </footer>

      {/* Sticky WhatsApp Button */}
      <a
        href="https://wa.me/905000000000"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition z-50 flex items-center justify-center"
        aria-label="WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16">
          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
        </svg>
      </a>
    </div>
  );
}
