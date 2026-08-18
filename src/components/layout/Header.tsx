'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Plane } from 'lucide-react';

const NAV_LINKS = [
  { name: 'Ana Sayfa', href: '/' },
  { name: 'Yamaç Paraşütü', href: '/yamac-parasutu' },
  { name: 'Fiyatlar', href: '/fiyatlar' },
  { name: 'Pilot', href: '/pilot' },
  { name: 'Galeri', href: '/galeri' },
  { name: 'Blog', href: '/blog' },
  { name: 'SSS', href: '/sss' },
  { name: 'İletişim', href: '/iletisim' },
];

export default function Header({ locale, dict }: { locale?: string; dict?: any }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0B1D3A]/90 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 text-[#F8F9FA] z-50">
            <Plane className="w-8 h-8 text-[#4A9FD9]" />
            <span className="font-playfair text-2xl font-bold tracking-wider">
              ANTALYA<span className="text-[#4A9FD9]">PARAŞÜT</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
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
              <div className="flex items-center space-x-2 text-[#F8F9FA] text-sm">
                <button className="hover:text-[#D4A96A] transition-colors">TR</button>
                <span>|</span>
                <button className="hover:text-[#D4A96A] transition-colors">EN</button>
              </div>
              <a
                href="https://wa.me/905555555555"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#22C55E] hover:bg-[#1fadd1] text-white px-5 py-2 rounded-full text-sm font-semibold transition-all transform hover:scale-105 flex items-center space-x-2 shadow-lg"
              >
                <span>WhatsApp</span>
              </a>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-[#F8F9FA] z-50"
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
          } transition-transform duration-300 ease-in-out lg:hidden flex flex-col items-center justify-center space-y-8`}
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-2xl font-playfair font-medium transition-colors ${
                pathname === link.href ? 'text-[#D4A96A]' : 'text-[#F8F9FA]'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="https://wa.me/905555555555"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#22C55E] text-white px-8 py-3 rounded-full text-lg font-semibold flex items-center space-x-2"
          >
            <span>WhatsApp ile İletişime Geç</span>
          </a>
        </div>
      </div>
    </header>
  );
}
