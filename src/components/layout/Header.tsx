'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Compass } from 'lucide-react';
import { siteConfig } from '@/lib/config/site';

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

  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    isTr
      ? "Merhaba, Antalya Varyant'ta yamaç paraşütü uçuşu hakkında bilgi almak istiyorum."
      : "Hello, I would like to get information about tandem paragliding in Antalya."
  )}`;

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0B1D3A]/95 backdrop-blur-md shadow-lg py-3' : 'bg-[#0B1D3A]/80 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href={`/${currentLocale}`} className="flex items-center space-x-2 text-[#F8F9FA] z-50">
            <Compass className="w-7 h-7 text-[#4A9FD9]" />
            <span className="font-[family-name:var(--font-heading)] text-xl md:text-2xl font-bold tracking-wider">
              ANTALYA<span className="text-[#4A9FD9]">PARAŞÜT</span>
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
                className="bg-[#25D366] hover:bg-[#1da851] text-white px-5 py-2 rounded-full text-sm font-bold transition-all transform hover:scale-105 shadow-lg flex items-center gap-2"
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
