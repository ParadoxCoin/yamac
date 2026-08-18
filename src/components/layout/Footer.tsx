import Link from 'next/link';
import { Plane, MapPin, Phone, Mail } from 'lucide-react';

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );
}

export default function Footer({ locale, dict }: { locale?: string; dict?: any }) {
  return (
    <footer className="bg-[#0B1D3A] text-[#F8F9FA] pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand & Description */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2 text-[#F8F9FA]">
              <Plane className="w-8 h-8 text-[#4A9FD9]" />
              <span className="font-playfair text-2xl font-bold tracking-wider">
                ANTALYA<span className="text-[#4A9FD9]">PARAŞÜT</span>
              </span>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              Antalya Varyant ve Falezler üzerinde profesyonel ekibimizle güvenli ve unutulmaz tandem yamaç paraşütü deneyimi yaşayın.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-300 hover:text-[#D4A96A] transition-colors">
                <InstagramIcon className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-[#D4A96A] transition-colors">
                <YoutubeIcon className="w-5 h-5" />
                <span className="sr-only">YouTube</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-playfair text-lg font-semibold mb-4 text-[#D4A96A]">Hızlı Bağlantılar</h3>
            <ul className="space-y-2">
              {[
                { name: 'Ana Sayfa', href: '/' },
                { name: 'Hakkımızda', href: '/hakkimizda' },
                { name: 'Fiyatlar', href: '/fiyatlar' },
                { name: 'Galeri', href: '/galeri' },
                { name: 'İletişim', href: '/iletisim' },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Pages */}
          <div>
            <h3 className="font-playfair text-lg font-semibold mb-4 text-[#D4A96A]">Yasal</h3>
            <ul className="space-y-2">
              {[
                { name: 'Gizlilik Politikası', href: '/gizlilik-politikasi' },
                { name: 'KVKK Aydınlatma Metni', href: '/kvkk' },
                { name: 'Çerez Politikası', href: '/cerez-politikasi' },
                { name: 'Açık Rıza Metni', href: '/acik-riza' },
                { name: 'Uçuş Şartları', href: '/ucus-sartlari' },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* NAP & Contact */}
          <div>
            <h3 className="font-playfair text-lg font-semibold mb-4 text-[#D4A96A]">İletişim</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-sm text-gray-300">
                <MapPin className="w-5 h-5 text-[#4A9FD9] flex-shrink-0 mt-0.5" />
                <span>[ADMIN TARAFINDAN DOLDURULACAK - Adres Bilgisi, Muratpaşa/Antalya]</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-gray-300">
                <Phone className="w-5 h-5 text-[#4A9FD9] flex-shrink-0" />
                <a href="tel:+905555555555" className="hover:text-white transition-colors">
                  [ADMIN TARAFINDAN DOLDURULACAK - Tel]
                </a>
              </li>
              <li className="flex items-center space-x-3 text-sm text-gray-300">
                <Mail className="w-5 h-5 text-[#4A9FD9] flex-shrink-0" />
                <a href="mailto:info@antalyaparasut.com" className="hover:text-white transition-colors">
                  [ADMIN TARAFINDAN DOLDURULACAK - Email]
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <a
                href="https://wa.me/905555555555"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 bg-[#22C55E] hover:bg-[#1fadd1] text-white rounded-md text-sm font-semibold transition-colors w-full"
              >
                WhatsApp'tan Yazın
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 mt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Antalya Paragliding. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}
