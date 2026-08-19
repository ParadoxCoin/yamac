'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Globe } from 'lucide-react';
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

export default function Header({ locale }: { locale?: string; dict?: any }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const currentLocale = locale || (pathname?.startsWith('/en') ? 'en' : pathname?.startsWith('/ru') ? 'ru' : pathname?.startsWith('/ar') ? 'ar' : 'tr');

  const navTranslations: Record<string, { home: string; experience: string; pricing: string; pilot: string; gallery: string; safety: string; blog: string; faq: string }> = {
    tr: { home: 'Ana Sayfa', experience: 'Yamaç Paraşütü', pricing: 'Fiyatlar', pilot: 'Pilotumuz', gallery: 'Galeri', safety: 'Güvenlik', blog: 'Blog', faq: 'SSS' },
    en: { home: 'Home', experience: 'Paragliding', pricing: 'Pricing', pilot: 'Our Pilot', gallery: 'Gallery', safety: 'Safety', blog: 'Blog', faq: 'FAQ' },
    ru: { home: 'Главная', experience: 'Параплан', pricing: 'Цены', pilot: 'Пилот', gallery: 'Галерея', safety: 'Безопасность', blog: 'Блог', faq: 'Вопросы' },
    ar: { home: 'الرئيسية', experience: 'الطيران الشراعي', pricing: 'الأسعار', pilot: 'الكابتن', gallery: 'الصور', safety: 'السلامة', blog: 'المدونة', faq: 'الأسئلة' },
  };

  const t = navTranslations[currentLocale] || navTranslations.tr;

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
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  const whatsappMessage = currentLocale === 'en'
    ? `Hello, I would like to book tandem paragliding in Antalya.\n\nFull Name:\nNumber of People:\nPreferred Date:\nPreferred Time:\nApproximate Weight:\nAccommodation Area:\n\nI would like information about flight conditions and availability.`
    : currentLocale === 'ru'
    ? `Здравствуйте, я хочу забронировать полет на параплане в Анталии.\n\nИмя и Фамилия:\nКоличество человек:\nЖелаемая дата:\nЖелаемое время:\nВес (кг):\nОтель / Район:\n\nХочу узнать подробности и наличие свободных мест.`
    : currentLocale === 'ar'
    ? `مرحباً، أود حجز رحلة طيران شراعي في أنطاليا.\n\nالاسم الكامل:\nعدد الأشخاص:\nالتاريخ المفضل:\nالوقت المفضل:\nالوزن التقريبي:\nمنطقة الإقامة:\n\nأود الحصول على معلومات حول الرحلة والمواعيد المتاحة.`
    : `Merhaba, Antalya Varyant'ta yamaç paraşütü yapmak istiyorum.\n\nAd Soyad:\nKişi Sayısı:\nTercih Edilen Tarih:\nTercih Edilen Saat:\nYaklaşık Kilo:\nKonaklama Bölgesi:\n\nUçuş koşulları ve uygunluk hakkında bilgi almak istiyorum.`;

  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0B1D3A] shadow-xl py-3' : 'bg-[#0B1D3A]/90 backdrop-blur-md py-4'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link href={`/${currentLocale}`} className="flex items-center space-x-2 text-[#F8F9FA] z-50">
            <ParagliderLogoIcon className="w-7 h-7 md:w-8 md:h-8 text-[#4A9FD9] flex-shrink-0" />
            <span className="font-[family-name:var(--font-heading)] text-sm sm:text-xl font-extrabold tracking-wider truncate max-w-[210px] sm:max-w-none">
              ANTALYA<span className="text-[#4A9FD9]"> YAMAÇ PARAŞÜTÜ</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-5 xl:space-x-7">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-semibold transition-colors hover:text-[#D4A96A] ${
                  pathname === link.href ? 'text-[#D4A96A]' : 'text-[#F8F9FA]'
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Language Switcher TR | EN | RU | AR */}
            <div className="flex items-center space-x-[#3] text-[#F8F9FA] text-xs font-bold border-l border-r border-gray-600 px-3">
              <Link href="/tr" className={`hover:text-[#D4A96A] px-1 transition-colors ${currentLocale === 'tr' ? 'text-[#4A9FD9] underline' : 'text-gray-300'}`}>TR</Link>
              <span className="text-gray-500">|</span>
              <Link href="/en" className={`hover:text-[#D4A96A] px-1 transition-colors ${currentLocale === 'en' ? 'text-[#4A9FD9] underline' : 'text-gray-300'}`}>EN</Link>
              <span className="text-gray-500">|</span>
              <Link href="/ru" className={`hover:text-[#D4A96A] px-1 transition-colors ${currentLocale === 'ru' ? 'text-[#4A9FD9] underline' : 'text-gray-300'}`}>RU</Link>
              <span className="text-gray-500">|</span>
              <Link href="/ar" className={`hover:text-[#D4A96A] px-1 transition-colors ${currentLocale === 'ar' ? 'text-[#4A9FD9] underline' : 'text-gray-300'}`}>AR</Link>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#1da851] text-white px-5 py-2.5 rounded-full text-sm font-bold transition-all transform hover:scale-105 shadow-lg flex items-center gap-2"
            >
              <span>WhatsApp</span>
            </a>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button
            className="lg:hidden text-[#F8F9FA] z-[110] p-2 hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-7 h-7 text-white" /> : <Menu className="w-7 h-7 text-white" />}
          </button>
        </div>

        {/* Solid Clean Fullscreen Mobile Overlay Menu */}
        {isOpen && (
          <div className="fixed inset-0 bg-[#0B1D3A] z-[100] flex flex-col justify-between p-6 pt-24 overflow-y-auto lg:hidden">
            <div className="flex flex-col space-y-5 text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-2xl font-bold text-[#F8F9FA] hover:text-[#D4A96A] transition-colors py-1"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="space-y-6 pt-6 border-t border-gray-700 text-center">
              {/* Language Options in Mobile */}
              <div className="flex items-center justify-center gap-4 text-sm font-bold text-white">
                <Globe className="w-4 h-4 text-[#4A9FD9]" />
                <Link href="/tr" onClick={() => setIsOpen(false)} className={currentLocale === 'tr' ? 'text-[#4A9FD9] underline' : 'text-gray-300'}>TR</Link>
                <span>•</span>
                <Link href="/en" onClick={() => setIsOpen(false)} className={currentLocale === 'en' ? 'text-[#4A9FD9] underline' : 'text-gray-300'}>EN</Link>
                <span>•</span>
                <Link href="/ru" onClick={() => setIsOpen(false)} className={currentLocale === 'ru' ? 'text-[#4A9FD9] underline' : 'text-gray-300'}>RU</Link>
                <span>•</span>
                <Link href="/ar" onClick={() => setIsOpen(false)} className={currentLocale === 'ar' ? 'text-[#4A9FD9] underline' : 'text-gray-300'}>AR</Link>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="bg-[#25D366] text-white py-4 px-8 rounded-full text-base font-extrabold flex items-center justify-center space-x-2 shadow-xl w-full"
              >
                <span>WhatsApp ile İletişime Geç</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
