'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { siteConfig } from '@/lib/config/site';

function ParagliderLogoIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {/* Paraglider Canopy Wing */}
      <path d="M2 9C2 4.5 6.5 2 12 2C17.5 2 22 4.5 22 9C17 7.5 14 7.5 12 7.5C10 7.5 7 7.5 2 9Z" fill="#4A9FD9" fillOpacity="0.2" />
      <path d="M2 9C2 4.5 6.5 2 12 2C17.5 2 22 4.5 22 9" />
      {/* Lines to Pilot */}
      <line x1="2" y1="9" x2="11" y2="18" />
      <line x1="7" y1="7.8" x2="11.5" y2="18" />
      <line x1="17" y1="7.8" x2="12.5" y2="18" />
      <line x1="22" y1="9" x2="13" y2="18" />
      {/* Pilot Harness */}
      <circle cx="12" cy="19.5" r="1.5" fill="#D4A96A" />
    </svg>
  );
}

export default function Header({ locale }: { locale?: string; dict?: any }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const currentLocale = locale || (pathname?.startsWith('/en') ? 'en' : 'tr');
  const isTr = currentLocale === 'tr';

  const navLinks = [
    { name: isTr ? 'Ana Sayfa' : 'Home', href: `/${currentLocale}` },
    { name: isTr ? 'Yamaç Paraşütü' : 'Paragliding', href: `/${currentLocale}#experience` },
    { name: isTr ? 'Fiyatlar' : 'Pricing', href: `/${currentLocale}#pricing` },
    { name: isTr ? 'Pilotumuz' : 'Our Pilot', href: `/${currentLocale}#pilot` },
    { name: isTr ? 'Galeri' : 'Gallery', href: `/${currentLocale}#gallery` },
    { name: isTr ? 'Güvenlik' : 'Safety', href: `/${currentLocale}#safety` },
    { name: isTr ? 'Blog' : 'Blog', href: `/${currentLocale}/blog` },
    { name: isTr ? 'SSS' : 'FAQ', href: `/${currentLocale}#faq` },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappMessage = isTr
    ? `Merhaba, Antalya Varyant'ta yamaç paraşütü yapmak istiyorum.\n\nAd Soyad:\nKişi Sayısı:\nTercih Edilen Tarih:\nTercih Edilen Saat:\nYaklaşık Kilo:\nKonaklama Bölgesi:\n\nUçuş koşulları ve uygunluk hakkında bilgi almak istiyorum.`
    : `Hello, I would like to book tandem paragliding in Antalya.\n\nFull Name:\nNumber of People:\nPreferred Date:\nPreferred Time:\nApproximate Weight:\nAccommodation Area:\n\nI would like information about flight conditions and availability.`;

  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0B1D3A]/95 backdrop-blur-md shadow-lg py-3' : 'bg-[#0B1D3A]/85 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href={`/${currentLocale}`} className="flex items-center space-x-2.5 text-[#F8F9FA] z-50">
            <ParagliderLogoIcon className="w-8 h-8 text-[#4A9FD9]" />
            <span className="font-[family-name:var(--font-heading)] text-lg md:text-2xl font-extrabold tracking-wider">
              ANTALYA<span className="text-[#4A9FD9]"> YAMAÇ PARAŞÜTÜ</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-[#D4A96A] ${
                  pathname === link.href ? 'text-[#D4A96A]' : 'text-[#F8F9FA]'
                }`}
              >
                {link.name}
              </Link>
            ))}

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-[#F8F9FA] text-sm font-semibold border-l border-r border-gray-600 px-3">
                <Link
                  href="/tr"
                  className={`hover:text-[#D4A96A] transition-colors ${isTr ? 'text-[#4A9FD9] underline' : 'text-gray-300'}`}
                >
                  TR
                </Link>
                <span>|</span>
                <Link
                  href="/en"
                  className={`hover:text-[#D4A96A] transition-colors ${!isTr ? 'text-[#4A9FD9] underline' : 'text-gray-300'}`}
                >
                  EN
                </Link>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#1da851] text-white px-5 py-2.5 rounded-full text-sm font-bold transition-all transform hover:scale-105 shadow-lg flex items-center gap-2"
              >
                <span>WhatsApp</span>
              </a>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-[#F8F9FA] z-50 p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        <div
          className={`fixed inset-0 bg-[#0B1D3A] transform ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-300 ease-in-out lg:hidden flex flex-col items-center justify-center space-y-6 z-40 p-6`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xl font-medium text-[#F8F9FA] hover:text-[#D4A96A] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          <div className="flex items-center space-x-4 text-[#F8F9FA] text-lg font-bold pt-4 border-t border-gray-700 w-48 justify-center">
            <Link
              href="/tr"
              onClick={() => setIsOpen(false)}
              className={isTr ? 'text-[#4A9FD9]' : 'text-gray-400'}
            >
              Türkçe
            </Link>
            <span>|</span>
            <Link
              href="/en"
              onClick={() => setIsOpen(false)}
              className={!isTr ? 'text-[#4A9FD9]' : 'text-gray-400'}
            >
              English
            </Link>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] text-white px-8 py-3.5 rounded-full text-lg font-bold flex items-center space-x-2 shadow-lg"
          >
            <span>WhatsApp ile İletişime Geç</span>
          </a>
        </div>
      </div>
    </header>
  );
}
