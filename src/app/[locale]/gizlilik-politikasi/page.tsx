import type { Metadata } from 'next';
import { getDictionary } from '@/lib/i18n/getDictionary';
import type { Locale } from '@/lib/i18n/config';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Breadcrumb from '@/components/layout/Breadcrumb';

export const metadata: Metadata = {
  title: 'Gizlilik Politikası',
  description: 'Antalya Yamaç Paraşütü web sitesi gizlilik ve veri güvenliği politikası.',
};

export default async function PrivacyPolicyPage({
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
              { label: 'Gizlilik Politikası', href: `/${locale}/gizlilik-politikasi` },
            ]}
          />
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 my-8 prose max-w-none text-gray-700">
            <h1 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-[#0B1D3A] mb-6">Gizlilik Politikası</h1>
            <p>Son Güncelleme: 16 Ağustos 2026</p>
            <p>İşbu Gizlilik Politikası, Antalya Yamaç Paraşütü web platformunu ziyaret eden kullanıcılarımızın kişisel verilerinin korunması ve gizliliğinin sağlanması amacıyla hazırlanmıştır.</p>
            <h2>1. Toplanan Veriler</h2>
            <p>Randevu formu aracılığıyla sağladığınız Ad Soyad, WhatsApp telefon numarası, tercih edilen uçuş tarihi ve uçuşa ilişkin teknik detaylar (kilo/boy bilgisi) sadece randevu talebinizi işleme almak amacıyla kullanılır.</p>
            <h2>2. Verilerin Kullanımı</h2>
            <p>Toplanan bilgiler hiçbir şekilde üçüncü taraflara satılmaz veya pazarlama amacıyla paylaşılmaz. İletişim sadece WhatsApp veya telefon üzerinden onay süreci için gerçekleştirilir.</p>
            <h2>3. İletişim</h2>
            <p>Gizlilik hakkındaki sorularınız için iletişim kanallarımız üzerinden bizimle iletişime geçebilirsiniz.</p>
          </div>
        </div>
      </main>
      <Footer locale={locale} dict={dict} />
    </>
  );
}
