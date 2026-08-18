import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { getDictionary } from '@/lib/i18n/getDictionary';
import type { Locale } from '@/lib/i18n/config';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import StickyWhatsApp from '@/components/layout/StickyWhatsApp';
import Breadcrumb from '@/components/layout/Breadcrumb';
import { blogPosts } from '@/lib/content/blogPosts';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isTr = locale === 'tr';

  return {
    title: isTr
      ? 'Antalya Yamaç Paraşütü Blog & Rehber'
      : 'Antalya Paragliding Blog & Guides',
    description: isTr
      ? "Antalya yamaç paraşütü uçuş rehberleri, güvenlik bilgileri, en iyi uçuş zamanları ve tavsiyeler."
      : "Paragliding flight guides in Antalya, safety information, best flight times, and expert advice.",
  };
}

export default async function BlogListPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  const posts = Object.values(blogPosts).filter(
    (p) => p.locale === locale || (locale === 'en' && p.locale === 'en')
  );

  return (
    <>
      <Header locale={locale} dict={dict} />

      <main className="flex-1 bg-[#FAFBFC] py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: locale === 'tr' ? 'Ana Sayfa' : 'Home', href: `/${locale}` },
              { label: 'Blog', href: `/${locale}/blog` },
            ]}
          />

          <div className="text-center my-10">
            <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold text-[#0B1D3A] mb-4">
              {locale === 'tr' ? 'Yamaç Paraşütü Rehberi & İpuçları' : 'Paragliding Guides & Articles'}
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
              {locale === 'tr'
                ? "Antalya'da tandem yamaç paraşütü hakkında bilmek istediğiniz tüm detaylar, güvenlik kılavuzları ve uçuş önerileri."
                : "Everything you need to know about tandem paragliding in Antalya, safety protocols, and flying tips."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-12">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="relative h-48 w-full bg-gray-200">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                  <span className="absolute top-4 left-4 bg-[#0B1D3A] text-white text-xs px-3 py-1 rounded-full font-medium">
                    {post.category}
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center text-xs text-gray-500 gap-4 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {post.publishDate}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                    </div>

                    <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-[#0B1D3A] mb-2 hover:text-[#4A9FD9] transition-colors line-clamp-2">
                      <Link href={`/${locale}/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h2>

                    <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                      {post.excerpt}
                    </p>
                  </div>

                  <Link
                    href={`/${locale}/blog/${post.slug}`}
                    className="inline-flex items-center text-[#4A9FD9] font-semibold text-sm hover:underline gap-1 mt-2"
                  >
                    {locale === 'tr' ? 'Devamını Oku' : 'Read Article'}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>

      <Footer locale={locale} dict={dict} />
      <StickyWhatsApp locale={locale} />
    </>
  );
}
