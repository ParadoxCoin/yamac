import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getDictionary } from '@/lib/i18n/getDictionary';
import type { Locale } from '@/lib/i18n/config';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import StickyWhatsApp from '@/components/layout/StickyWhatsApp';
import Breadcrumb from '@/components/layout/Breadcrumb';
import WhatsAppCTA from '@/components/sections/WhatsAppCTA';
import { blogPosts } from '@/lib/content/blogPosts';
import { Calendar, Clock, User, ArrowLeft } from 'lucide-react';

export async function generateStaticParams() {
  const params: Array<{ locale: string; slug: string }> = [];
  Object.values(blogPosts).forEach((post) => {
    params.push({ locale: post.locale, slug: post.slug });
  });
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    return { title: '404 - Not Found' };
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com';

  return {
    title: post.title,
    description: post.metaDescription,
    alternates: {
      canonical: `${baseUrl}/${locale}/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      url: `${baseUrl}/${locale}/blog/${slug}`,
      type: 'article',
      publishedTime: post.publishDate,
      authors: [post.author],
      images: [{ url: `${baseUrl}${post.image}` }],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    notFound();
  }

  const dict = await getDictionary(locale as Locale);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.metaDescription,
    image: post.image,
    datePublished: post.publishDate,
    author: {
      '@type': 'Person',
      name: post.author,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Header locale={locale} dict={dict} />

      <main className="flex-1 bg-[#FAFBFC] py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: locale === 'tr' ? 'Ana Sayfa' : 'Home', href: `/${locale}` },
              { label: 'Blog', href: `/${locale}/blog` },
              { label: post.title, href: `/${locale}/blog/${post.slug}` },
            ]}
          />

          <article className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-gray-100 my-8">
            <div className="mb-6">
              <span className="inline-block bg-[#0B1D3A] text-white text-xs px-3 py-1 rounded-full font-medium mb-4">
                {post.category}
              </span>

              <h1 className="font-[family-name:var(--font-heading)] text-2xl md:text-4xl font-bold text-[#0B1D3A] mb-4">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center text-sm text-gray-500 gap-6 border-b border-gray-100 pb-6">
                <span className="flex items-center gap-1.5">
                  <User className="w-4 h-4 text-[#4A9FD9]" />
                  {post.author}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-[#4A9FD9]" />
                  {post.publishDate}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#4A9FD9]" />
                  {post.readTime}
                </span>
              </div>
            </div>

            <div className="relative h-64 md:h-96 w-full rounded-2xl overflow-hidden mb-8">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            <div
              className="prose prose-lg max-w-none text-gray-700 space-y-4"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <div className="mt-10 pt-6 border-t border-gray-100 flex justify-between items-center">
              <Link
                href={`/${locale}/blog`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B1D3A] hover:text-[#4A9FD9] transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                {locale === 'tr' ? 'Tüm Makalelere Dön' : 'Back to Articles'}
              </Link>
            </div>
          </article>
        </div>

        <WhatsAppCTA locale={locale} dict={dict} />
      </main>

      <Footer locale={locale} dict={dict} />
      <StickyWhatsApp locale={locale} />
    </>
  );
}
