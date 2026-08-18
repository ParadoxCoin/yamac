import type { Metadata } from 'next';
import { getDictionary } from '@/lib/i18n/getDictionary';
import type { Locale } from '@/lib/i18n/config';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Breadcrumb from '@/components/layout/Breadcrumb';

export const metadata: Metadata = {
  title: 'KVKK Aydınlatma Metni',
  description: '6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında aydınlatma metni.',
};

export default async function KvkkPage({
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
              { label: 'KVKK Metni', href: `/${locale}/kvkk` },
            ]}
          />
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 my-8 prose max-w-none text-gray-700">
            <h1 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-[#0B1D3A] mb-6">KVKK Aydınlatma Metni</h1>
            <p>6698 Sayılı Kişisel Verilerin Korunması Kanunu uyarınca, veri sorumlusu sıfatıyla kişisel verileriniz işlenmektedir.</p>
            <h2>1. İşlenen Kişisel Veriler</h2>
            <p>İletişim verileriniz (İsim, Telefon, İletişim Notları) uçuş hizmeti organizasyonu kapsamında işlenir.</p>
            <h2>2. Haklarınız</h2>
            <p>KVKK'nın 11. maddesi uyarınca veri sahibi olarak verilerinizin silinmesini, güncellenmesini veya işlenme amacını öğrenmeyi talep edebilirsiniz.</p>
          </div>
        </div>
      </main>
      <Footer locale={locale} dict={dict} />
    </>
  );
}
