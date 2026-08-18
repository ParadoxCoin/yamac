import type { Metadata } from 'next';
import { getDictionary } from '@/lib/i18n/getDictionary';
import type { Locale } from '@/lib/i18n/config';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Breadcrumb from '@/components/layout/Breadcrumb';

export const metadata: Metadata = {
  title: 'Açık Rıza Metni',
  description: 'Fotoğraf ve video paylaşımı açık rıza beyanı.',
};

export default async function ConsentPolicyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return (
    <>
      <Header locale={locale} dict={dict} />
      <main className="flex-1 bg-[#FAFBFC] py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: 'Ana Sayfa', href: `/${locale}` },
              { label: 'Açık Rıza Metni', href: `/${locale}/acik-riza` },
            ]}
          />
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 my-8 prose max-w-none text-gray-700">
            <h1 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-[#0B1D3A] mb-6">Müşteri Fotoğraf & Video Açık Rıza Metni</h1>
            <p>Uçuş esnasında çekilen aksiyon kamerası görüntülerinin web sitemizde ve sosyal medya hesaplarımızda yayınlanması yalnızca açık rızanız doğrultusunda gerçekleşir.</p>
            <p>Verilen izin dilediğiniz an yazılı bildirim ile geri alınabilir.</p>
          </div>
        </div>
      </main>
      <Footer locale={locale} dict={dict} />
    </>
  );
}
