'use client';

import { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { generateQuickWhatsAppUrl } from '@/lib/services/whatsapp';

export default function StickyWhatsApp({ locale }: { locale?: string }) {
  const [isVisible, setIsVisible] = useState(false);
  const currentLocale = locale || 'tr';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappUrl = generateQuickWhatsAppUrl(currentLocale);

  return (
    <div
      className={`fixed bottom-4 left-1/2 -translate-x-1/2 z-40 transition-all duration-500 md:hidden w-[92%] max-w-sm ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'
      }`}
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center space-x-2 bg-[#25D366] text-white py-3.5 px-6 rounded-full shadow-2xl shadow-green-600/40 w-full font-extrabold text-sm active:scale-95 transition-transform"
      >
        <MessageCircle className="w-5 h-5 fill-current" />
        <span>WhatsApp'tan Randevu Talep Et</span>
      </a>
    </div>
  );
}
