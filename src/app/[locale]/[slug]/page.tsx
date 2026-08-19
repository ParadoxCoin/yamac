import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { landingPages } from '@/lib/content/landingPages';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Breadcrumb from '@/components/layout/Breadcrumb';
import LiveMapWrapper from '@/components/sections/LiveMapWrapper';
import StickyWhatsApp from '@/components/layout/StickyWhatsApp';
import { generateQuickWhatsAppUrl } from '@/lib/services/whatsapp';
import { Check, ShieldCheck, MapPin, Calendar, Camera } from 'lucide-react';

interface Props {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const params = [];
  const locales = ['tr', 'en', 'ru', 'ar'];
  for (const key of Object.keys(landingPages)) {
    const page = landingPages[key];
    for (const loc of locales) {
      params.push({ locale: loc, slug: page.slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, locale } = await params;
  const page = landingPages[slug];

  if (!page) {
    return {};
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yamac-five.vercel.app';

  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords.join(', '),
    alternates: {
      canonical: `${baseUrl}/${locale}/${slug}`,
    },
    openGraph: {
      title: page.title,
      description: page.description,
      type: 'website',
      url: `${baseUrl}/${locale}/${slug}`,
    },
  };
}

export default async function LandingPage({ params }: Props) {
  const { slug, locale } = await params;
  const page = landingPages[slug];

  if (!page) {
    notFound();
  }

  const isTr = locale === 'tr';
  const whatsappUrl = generateQuickWhatsAppUrl(locale);

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
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Header locale={locale} />

      <main className="flex-1 bg-[#FAFBFC] pt-24 pb-16">
        {/* Hero Section */}
        <section className="bg-[#0B1D3A] text-white py-16 relative overflow-hidden">
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <Breadcrumb
              items={[
                { label: isTr ? 'Ana Sayfa' : 'Home', href: `/${locale}` },
                { label: page.h1, href: `/${locale}/${slug}` },
              ]}
            />

            <div className="max-w-3xl my-6">
              <span className="inline-block px-4 py-1.5 bg-[#4A9FD9]/20 text-[#4A9FD9] rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-[#4A9FD9]/30">
                23 Yıllık Deneyim - Mehmet Bayraktar
              </span>
              <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
                {page.h1}
              </h1>
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8">
                {page.heroSubtitle}
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-[#25D366] hover:bg-[#1da851] text-white font-extrabold rounded-full transition-all transform hover:scale-105 shadow-xl text-base"
                >
                  WhatsApp ile Rezervasyon Al
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Content & Sidebar */}
        <section className="py-12">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              
              <div className="lg:col-span-8 space-y-10">
                <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-200">
                  <p className="text-lg text-gray-700 leading-relaxed mb-8 font-medium">
                    {page.introText}
                  </p>

                  <div className="space-y-8">
                    {page.sections.map((section, idx) => (
                      <div key={idx} className="border-t border-gray-100 pt-6">
                        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[#0B1D3A] mb-3">
                          {section.h2}
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                          {section.content}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Local Map */}
                <LiveMapWrapper locale={locale} />
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-4 space-y-6">
                <div className="bg-white rounded-3xl p-6 shadow-md border border-gray-200 sticky top-28">
                  <h3 className="font-bold text-xl text-[#0B1D3A] mb-4 pb-3 border-b border-gray-100">
                    Özet Uçuş Bilgileri
                  </h3>

                  <ul className="space-y-4 text-sm text-gray-700">
                    <li className="flex items-start gap-3">
                      <ShieldCheck className="w-5 h-5 text-[#4A9FD9] flex-shrink-0 mt-0.5" />
                      <span><strong>Pilot:</strong> Mehmet BAYRAKTAR (THSF & FAI T2 Lisanslı)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Calendar className="w-5 h-5 text-[#4A9FD9] flex-shrink-0 mt-0.5" />
                      <span><strong>Yaş:</strong> 5 - 90 Yaş Arası</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Camera className="w-5 h-5 text-[#25D366] flex-shrink-0 mt-0.5" />
                      <span><strong>Medya:</strong> Fotoğraf ve 4K Video Dahil</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-[#4A9FD9] flex-shrink-0 mt-0.5" />
                      <span><strong>Konum:</strong> Konyaaltı Varyant Büyük Seyir Terası</span>
                    </li>
                  </ul>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 w-full py-3.5 bg-[#25D366] hover:bg-[#1da851] text-white font-extrabold rounded-xl text-center block transition-colors shadow-md"
                  >
                    WhatsApp'tan İletişime Geç
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer locale={locale} />
      <StickyWhatsApp locale={locale} />
    </>
  );
}
