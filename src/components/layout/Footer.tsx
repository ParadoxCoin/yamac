import Link from 'next/link';
import { Compass, MapPin, Phone, Mail } from 'lucide-react';
import { siteConfig } from '@/lib/config/site';

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );
}

export default function Footer({ locale }: { locale?: string; dict?: any }) {
  const currentLocale = locale || 'tr';
  const isTr = currentLocale === 'tr';

  return (
    <footer className="bg-[#0B1D3A] text-[#F8F9FA] pt-16 pb-8 border-t border-gray-800">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand & Description */}
          <div className="space-y-4">
            <Link href={`/${currentLocale}`} className="flex items-center space-x-2 text-[#F8F9FA]">
              <Compass className="w-8 h-8 text-[#4A9FD9]" />
              <span className="font-[family-name:var(--font-heading)] text-2xl font-bold tracking-wider">
                ANTALYA<span className="text-[#4A9FD9]">PARAŞÜT</span>
              </span>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              23 yıllık deneyimli THSF/FAI sertifikalı pilotumuz Mehmet Bayraktar ile Antalya Varyant ve Falezler üzerinde emniyetli tandem uçuş deneyimi.
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
              {isTr ? 'Hızlı Bağlantılar' : 'Quick Links'}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={`/${currentLocale}`} className="text-gray-300 hover:text-white transition-colors">
                  {isTr ? 'Ana Sayfa' : 'Home'}
                </Link>
              </li>
              <li>
                <Link href={`/${currentLocale}#experience`} className="text-gray-300 hover:text-white transition-colors">
                  {isTr ? 'Yamaç Paraşütü' : 'Paragliding'}
                </Link>
              </li>
              <li>
                <Link href={`/${currentLocale}#pricing`} className="text-gray-300 hover:text-white transition-colors">
                  {isTr ? 'Fiyatlar & Paket' : 'Pricing & Packages'}
                </Link>
              </li>
              <li>
                <Link href={`/${currentLocale}#pilot`} className="text-gray-300 hover:text-white transition-colors">
                  {isTr ? 'Pilotumuz' : 'Our Pilot'}
                </Link>
              </li>
              <li>
                <Link href={`/${currentLocale}#gallery`} className="text-gray-300 hover:text-white transition-colors">
                  {isTr ? 'Fotoğraf Galerisi' : 'Photo Gallery'}
                </Link>
              </li>
              <li>
                <Link href={`/${currentLocale}/blog`} className="text-gray-300 hover:text-white transition-colors">
                  {isTr ? 'Blog & Rehberler' : 'Blog & Guides'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Pages */}
          <div>
            <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-4 text-[#D4A96A]">
              {isTr ? 'Yasal Politikalar' : 'Legal Policies'}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={`/${currentLocale}/gizlilik-politikasi`} className="text-gray-300 hover:text-white transition-colors">
                  {isTr ? 'Gizlilik Politikası' : 'Privacy Policy'}
                </Link>
              </li>
              <li>
                <Link href={`/${currentLocale}/kvkk`} className="text-gray-300 hover:text-white transition-colors">
                  {isTr ? 'KVKK Aydınlatma Metni' : 'KVKK Text'}
                </Link>
              </li>
              <li>
                <Link href={`/${currentLocale}/cerez-politikasi`} className="text-gray-300 hover:text-white transition-colors">
                  {isTr ? 'Çerez Politikası' : 'Cookie Policy'}
                </Link>
              </li>
              <li>
                <Link href={`/${currentLocale}/acik-riza`} className="text-gray-300 hover:text-white transition-colors">
                  {isTr ? 'Açık Rıza Metni' : 'Consent Policy'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-4 text-[#D4A96A]">
              {isTr ? 'İletişim' : 'Contact'}
            </h3>
            <ul className="space-y-3.5 text-sm text-gray-300">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#4A9FD9] flex-shrink-0 mt-0.5" />
                <span>{siteConfig.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#4A9FD9] flex-shrink-0" />
                <a href={`tel:${siteConfig.phone.replace(/[^0-9]/g, '')}`} className="hover:text-white transition-colors">
                  {siteConfig.phone}
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
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=Merhaba`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2.5 bg-[#25D366] hover:bg-[#1da851] text-white rounded-xl text-sm font-bold transition-colors w-full shadow-md"
              >
                WhatsApp'tan Yazın
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Antalya Yamaç Paraşütü - Mehmet Bayraktar. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}
