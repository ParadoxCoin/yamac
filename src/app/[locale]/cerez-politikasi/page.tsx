import type { Metadata } from 'next';
import { getDictionary } from '@/lib/i18n/getDictionary';
import type { Locale } from '@/lib/i18n/config';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Breadcrumb from '@/components/layout/Breadcrumb';

export const metadata: Metadata = {
  title: 'Çerez Politikası',
  description: 'Çerez (Cookie) politikası ve kullanım esasları.',
};

export default async function CookiePolicyPage({
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
              { label: 'Çerez Politikası', href: `/${locale}/cerez-politikasi` },
            ]}
          />
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 my-8 prose max-w-none text-gray-700">
            <h1 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-[#0B1D3A] mb-6">Çerez Politikası</h1>
            <p>Sitemizde yalnızca zorunlu oturum çerezleri ve tercih çerezleri (dil seçimi vb.) kullanılmaktadır. Pazarlama amaçlı üçüncü taraf çerezleri izniniz olmadan aktif edilmez.</p>
          </div>
        </div>
      </main>
      <Footer locale={locale} dict={dict} />
    </>
  );
}
