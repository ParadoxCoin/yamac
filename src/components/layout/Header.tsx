'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Globe } from 'lucide-react';
import { siteConfig } from '@/lib/config/site';

function ParagliderLogoIcon({ className }: { className?: string }) {
  return (
    <span className={`inline-flex items-center justify-center ${className || ''}`} style={{ fontSize: '1.4rem', lineHeight: 1 }}>
      🪂
    </span>
  );
}

const navTranslations = {
  tr: { home: 'Ana Sayfa', experience: 'Yamaç Paraşütü', pricing: 'Fiyatlar', pilot: 'Pilotumuz', gallery: 'Galeri', safety: 'Güvenlik', blog: 'Blog', faq: 'SSS', wp: 'WhatsApp' },
  en: { home: 'Home', experience: 'Paragliding', pricing: 'Pricing', pilot: 'Our Pilot', gallery: 'Gallery', safety: 'Safety', blog: 'Blog', faq: 'FAQ', wp: 'WhatsApp' },
  ru: { home: 'Главная', experience: 'Параплан', pricing: 'Цены', pilot: 'Пилот', gallery: 'Галерея', safety: 'Безопасность', blog: 'Блог', faq: 'Вопросы', wp: 'WhatsApp' },
  ar: { home: 'الرئيسية', experience: 'الطيران الشراعي', pricing: 'الأسعار', pilot: 'الكابتن', gallery: 'الصور', safety: 'السلامة', blog: 'المدونة', faq: 'الأسئلة', wp: 'واتساب' },
};

const wpMessages = {
  tr: "Merhaba, Antalya Varyant'ta yamaç paraşütü yapmak istiyorum.\n\nAd Soyad:\nKişi Sayısı:\nTercih Edilen Tarih:\nTercih Edilen Saat:\nYaklaşık Kilo:\nKonaklama Bölgesi:\n\nUçuş koşulları ve uygunluk hakkında bilgi almak istiyorum.",
  en: "Hello, I would like to book tandem paragliding in Antalya.\n\nFull Name:\nNumber of People:\nPreferred Date:\nPreferred Time:\nApproximate Weight:\nAccommodation Area:\n\nI would like information about flight conditions and availability.",
  ru: "Здравствуйте, я хочу забронировать полет на параплане в Анталии.\n\nИмя и Фамилия:\nКоличество человек:\nЖелаемая дата:\nЖелаемое время:\nВес (кг):\nОтель / Район:\n\nХочу узнать подробности и наличие свободных мест.",
  ar: "مرحباً، أود حجز رحلة طيران شراعي في أنطاليا.\n\nالاسم الكامل:\nعدد الأشخاص:\nالتاريخ المفضل:\nالوقت المفضل:\nالوزن التقريبي:\nمنطقة الإقامة:\n\nأود الحصول على معلومات حول الرحلة والمواعيد المتاحة.",
};

export default function Header({ locale }: { locale?: string; dict?: any }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const currentLocale: keyof typeof navTranslations = (locale as any) || 'tr';
  const t = navTranslations[currentLocale] || navTranslations.tr;
  const msg = wpMessages[currentLocale] || wpMessages.tr;
  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(msg)}`;

  const navLinks = [
    { name: t.home, href: `/${currentLocale}` },
    { name: t.experience, href: `/${currentLocale}#experience` },
    { name: t.pricing, href: `/${currentLocale}#pricing` },
    { name: t.pilot, href: `/${currentLocale}#pilot` },
    { name: t.gallery, href: `/${currentLocale}#gallery` },
    { name: t.safety, href: `/${currentLocale}#safety` },
    { name: t.blog, href: `/${currentLocale}/blog` },
    { name: t.faq, href: `/${currentLocale}#faq` },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0B1D3A] shadow-xl py-3' : 'bg-[#0B1D3A]/90 backdrop-blur-md py-4'}`}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href={`/${currentLocale}`} className="flex items-center gap-2 text-[#F8F9FA] min-w-0">
              <ParagliderLogoIcon className="w-7 h-7 text-[#4A9FD9] flex-shrink-0" />
              <span className="font-[family-name:var(--font-heading)] text-sm sm:text-lg md:text-xl font-extrabold tracking-wider whitespace-nowrap">
                ANTALYA<span className="text-[#4A9FD9]"> YAMAÇ PARAŞÜTÜ</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} className="text-sm font-semibold text-[#F8F9FA] hover:text-[#D4A96A] transition-colors">
                  {link.name}
                </Link>
              ))}
              <div className="flex items-center gap-1 text-xs font-bold border-l border-r border-gray-600 px-3">
                {['tr', 'en', 'ru', 'ar'].map((lang, i) => (
                  <span key={lang} className="flex items-center gap-1">
                    {i > 0 && <span className="text-gray-600">|</span>}
                    <Link href={`/${lang}`} className={`px-1 hover:text-[#D4A96A] transition-colors ${currentLocale === lang ? 'text-[#4A9FD9] underline' : 'text-gray-300'}`}>
                      {lang.toUpperCase()}
                    </Link>
                  </span>
                ))}
              </div>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="bg-[#25D366] hover:bg-[#1da851] text-white px-5 py-2.5 rounded-full text-sm font-bold transition-all hover:scale-105 shadow-lg">
                {t.wp}
              </a>
            </nav>

            {/* Mobile Hamburger */}
            <button
              className="lg:hidden text-white z-[200] p-2 rounded-lg hover:bg-white/10 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Overlay — rendered outside header to avoid overlap issues */}
      {isOpen && (
        <div className="fixed inset-0 z-[150] bg-[#0B1D3A] flex flex-col">
          {/* Close button top-right */}
          <div className="flex items-center justify-between px-4 py-4 border-b border-gray-800">
            <Link href={`/${currentLocale}`} className="flex items-center gap-2 text-white" onClick={() => setIsOpen(false)}>
              <ParagliderLogoIcon className="w-7 h-7 text-[#4A9FD9]" />
              <span className="font-extrabold text-base text-white">ANTALYA <span className="text-[#4A9FD9]">YAMAÇ PARAŞÜTÜ</span></span>
            </Link>
            <button onClick={() => setIsOpen(false)} className="text-white p-2 hover:bg-white/10 rounded-lg">
              <X className="w-7 h-7" />
            </button>
          </div>

          {/* Nav Links */}
          <nav className="flex-1 flex flex-col justify-center px-8 gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-2xl font-bold text-white hover:text-[#D4A96A] transition-colors py-1 border-b border-gray-800 pb-3"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Bottom: Language + WhatsApp */}
          <div className="px-8 pb-10 space-y-5 border-t border-gray-800 pt-6">
            <div className="flex items-center gap-3 flex-wrap">
              <Globe className="w-5 h-5 text-[#4A9FD9]" />
              {['tr', 'en', 'ru', 'ar'].map((lang) => (
                <Link
                  key={lang}
                  href={`/${lang}`}
                  onClick={() => setIsOpen(false)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-bold transition-colors ${currentLocale === lang ? 'bg-[#4A9FD9] text-white' : 'bg-[#122B5C] text-gray-300 hover:text-white'}`}
                >
                  {lang === 'tr' ? 'Türkçe' : lang === 'en' ? 'English' : lang === 'ru' ? 'Русский' : 'العربية'}
                </Link>
              ))}
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="w-full py-4 bg-[#25D366] hover:bg-[#1da851] text-white font-extrabold rounded-2xl flex items-center justify-center gap-2 shadow-xl text-base"
            >
              📱 {t.wp}
            </a>
          </div>
        </div>
      )}
    </>
  );
}
