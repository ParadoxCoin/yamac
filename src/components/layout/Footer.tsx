import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';
import { siteConfig } from '@/lib/config/site';

function ParagliderLogoIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 9C2 4.5 6.5 2 12 2C17.5 2 22 4.5 22 9C17 7.5 14 7.5 12 7.5C10 7.5 7 7.5 2 9Z" fill="#4A9FD9" fillOpacity="0.25" />
      <path d="M2 9C2 4.5 6.5 2 12 2C17.5 2 22 4.5 22 9" />
      <line x1="2" y1="9" x2="11" y2="18" />
      <line x1="7" y1="7.8" x2="11.5" y2="18" />
      <line x1="17" y1="7.8" x2="12.5" y2="18" />
      <line x1="22" y1="9" x2="13" y2="18" />
      <circle cx="12" cy="19.5" r="1.5" fill="#D4A96A" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );
}

export default function Footer({ locale }: { locale?: string; dict?: any }) {
  const currentLocale = locale || 'tr';

  const footerTexts: Record<string, { desc: string; quick: string; legal: string; contact: string; languages: string }> = {
    tr: {
      desc: '23 yıllık deneyimli THSF/FAI sertifikalı pilotumuz Mehmet Bayraktar ile Antalya Varyant ve Falezler üzerinde emniyetli tandem uçuş deneyimi.',
      quick: 'Hızlı Bağlantılar',
      legal: 'Yasal Politikalar',
      contact: 'İletişim & Konum',
      languages: 'Dil Seçenekleri',
    },
    en: {
      desc: 'Safe tandem paragliding flights over Antalya Varyant and Falezler with 23-year commercial THSF/FAI pilot Mehmet Bayraktar.',
      quick: 'Quick Links',
      legal: 'Legal Policies',
      contact: 'Contact & Location',
      languages: 'Languages',
    },
    ru: {
      desc: 'Безопасные тандем-полеты на параплане в Анталии над утесами Вариант с лицензированным пилотом Мехметом Байрактаром (23 года опыта).',
      quick: 'Быстрые ссылки',
      legal: 'Правила и Политики',
      contact: 'Контакты и Локация',
      languages: 'Язык сайта',
    },
    ar: {
      desc: 'رحلات طيران شراعي مزدوج آمنة فوق جروف أنطاليا مع الكابتن محمد بيرقدار (خبرة 23 عاماً، رخصة دولية THSF/FAI).',
      quick: 'روابط سريعة',
      legal: 'السياسات والقوانين',
      contact: 'التواصل والموقع',
      languages: 'اللغة',
    },
  };

  const t = footerTexts[currentLocale] || footerTexts.tr;

  const whatsappMessage = currentLocale === 'en'
    ? `Hello, I would like to book tandem paragliding in Antalya.\n\nFull Name:\nNumber of People:\nPreferred Date:\nPreferred Time:\nApproximate Weight:\nAccommodation Area:\n\nI would like information about flight conditions and availability.`
    : currentLocale === 'ru'
    ? `Здравствуйте, я хочу забронировать полет на параплане в Анталии.\n\nИмя и Фамилия:\nКоличество человек:\nЖелаемая дата:\nЖелаемое время:\nВес (кг):\nОтель / Район:\n\nХочу узнать подробности и наличие свободных мест.`
    : currentLocale === 'ar'
    ? `مرحباً، أود حجز رحلة طيران شراعي في أنطاليا.\n\nالاسم الكامل:\nعدد الأشخاص:\nالتاريخ المفضل:\nالوقت المفضل:\nالوزن التقريبي:\nمنطقة الإقامة:\n\nأود الحصول على معلومات حول الرحلة والمواعيد المتاحة.`
    : `Merhaba, Antalya Varyant'ta yamaç paraşütü yapmak istiyorum.\n\nAd Soyad:\nKişi Sayısı:\nTercih Edilen Tarih:\nTercih Edilen Saat:\nYaklaşık Kilo:\nKonaklama Bölgesi:\n\nUçuş koşulları ve uygunluk hakkında bilgi almak istiyorum.`;

  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <footer className="bg-[#0B1D3A] text-[#F8F9FA] pt-16 pb-8 border-t border-gray-800">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <Link href={`/${currentLocale}`} className="flex items-center space-x-2 text-[#F8F9FA]">
              <ParagliderLogoIcon className="w-8 h-8 text-[#4A9FD9] flex-shrink-0" />
              <span className="font-[family-name:var(--font-heading)] text-xl font-extrabold tracking-wider">
                ANTALYA<span className="text-[#4A9FD9]"> YAMAÇ PARAŞÜTÜ</span>
              </span>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              {t.desc}
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#D4A96A] transition-colors p-2 bg-[#122B5C] rounded-full"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-4 text-[#D4A96A]">
              {t.quick}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={`/${currentLocale}`} className="text-gray-300 hover:text-white transition-colors">
                  {currentLocale === 'en' ? 'Home' : currentLocale === 'ru' ? 'Главная' : currentLocale === 'ar' ? 'الرئيسية' : 'Ana Sayfa'}
                </Link>
              </li>
              <li>
                <Link href={`/${currentLocale}#experience`} className="text-gray-300 hover:text-white transition-colors">
                  {currentLocale === 'en' ? 'Paragliding Flight' : currentLocale === 'ru' ? 'Полет на параплане' : currentLocale === 'ar' ? 'طيران شراعي' : 'Yamaç Paraşütü'}
                </Link>
              </li>
              <li>
                <Link href={`/${currentLocale}#pricing`} className="text-gray-300 hover:text-white transition-colors">
                  {currentLocale === 'en' ? 'Pricing & Packages' : currentLocale === 'ru' ? 'Цены и Пакеты' : currentLocale === 'ar' ? 'الأسعار والباقات' : 'Fiyatlar & Paket'}
                </Link>
              </li>
              <li>
                <Link href={`/${currentLocale}#pilot`} className="text-gray-300 hover:text-white transition-colors">
                  {currentLocale === 'en' ? 'Pilot Profile' : currentLocale === 'ru' ? 'Наш пилот' : currentLocale === 'ar' ? 'الكابتن' : 'Pilotumuz'}
                </Link>
              </li>
              <li>
                <Link href={`/${currentLocale}#gallery`} className="text-gray-300 hover:text-white transition-colors">
                  {currentLocale === 'en' ? 'Photo Gallery' : currentLocale === 'ru' ? 'Галерея' : currentLocale === 'ar' ? 'معرض الصور' : 'Fotoğraf Galerisi'}
                </Link>
              </li>
              <li>
                <Link href={`/${currentLocale}/blog`} className="text-gray-300 hover:text-white transition-colors">
                  {currentLocale === 'en' ? 'Blog & Guides' : currentLocale === 'ru' ? 'Блог' : currentLocale === 'ar' ? 'المدونة' : 'Blog & Rehberler'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Pages & Languages */}
          <div>
            <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-4 text-[#D4A96A]">
              {t.legal}
            </h3>
            <ul className="space-y-2 text-sm mb-6">
              <li>
                <Link href={`/${currentLocale}/gizlilik-politikasi`} className="text-gray-300 hover:text-white transition-colors">
                  Gizlilik Politikası / Privacy
                </Link>
              </li>
              <li>
                <Link href={`/${currentLocale}/kvkk`} className="text-gray-300 hover:text-white transition-colors">
                  KVKK Metni
                </Link>
              </li>
              <li>
                <Link href={`/${currentLocale}/cerez-politikasi`} className="text-gray-300 hover:text-white transition-colors">
                  Çerez Politikası
                </Link>
              </li>
            </ul>

            <h4 className="text-xs font-bold text-[#4A9FD9] uppercase tracking-wider mb-2">{t.languages}</h4>
            <div className="flex flex-wrap gap-2 text-xs font-bold">
              <Link href="/tr" className={`px-2.5 py-1 rounded bg-[#122B5C] ${currentLocale === 'tr' ? 'text-[#4A9FD9] border border-[#4A9FD9]' : 'text-gray-300 hover:text-white'}`}>Türkçe</Link>
              <Link href="/en" className={`px-2.5 py-1 rounded bg-[#122B5C] ${currentLocale === 'en' ? 'text-[#4A9FD9] border border-[#4A9FD9]' : 'text-gray-300 hover:text-white'}`}>English</Link>
              <Link href="/ru" className={`px-2.5 py-1 rounded bg-[#122B5C] ${currentLocale === 'ru' ? 'text-[#4A9FD9] border border-[#4A9FD9]' : 'text-gray-300 hover:text-white'}`}>Русский</Link>
              <Link href="/ar" className={`px-2.5 py-1 rounded bg-[#122B5C] ${currentLocale === 'ar' ? 'text-[#4A9FD9] border border-[#4A9FD9]' : 'text-gray-300 hover:text-white'}`}>العربية</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-4 text-[#D4A96A]">
              {t.contact}
            </h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#4A9FD9] flex-shrink-0 mt-0.5" />
                <span>{siteConfig.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#4A9FD9] flex-shrink-0" />
                <a href={`tel:${siteConfig.phone.replace(/[^0-9]/g, '')}`} className="hover:text-white transition-colors">
                  {siteConfig.phone} (Mehmet BAYRAKTAR)
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#4A9FD9] flex-shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white transition-colors">
                  {siteConfig.email}
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-3 bg-[#25D366] hover:bg-[#1da851] text-white rounded-xl text-sm font-extrabold transition-colors w-full shadow-md"
              >
                WhatsApp ile İletişime Geç
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Antalya Yamaç Paraşütü - Mehmet Bayraktar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
