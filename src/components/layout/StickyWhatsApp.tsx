'use client';

import { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

export default function StickyWhatsApp({ locale }: { locale?: string }) {
  const [isVisible, setIsVisible] = useState(false);

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

  const handleClick = () => {
    // Analytics tracking can be added here
    console.log('WhatsApp sticky button clicked');
  };

  return (
    <div
      className={`fixed bottom-4 left-1/2 -translate-x-1/2 z-40 transition-all duration-500 md:hidden w-[90%] max-w-sm ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'
      }`}
    >
      <a
        href="https://wa.me/905555555555?text=Merhaba,%20randevu%20talep%20etmek%20istiyorum."
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className="flex items-center justify-center space-x-2 bg-[#22C55E] text-white py-3 px-6 rounded-full shadow-lg shadow-green-500/30 w-full font-semibold active:scale-95 transition-transform"
      >
        <MessageCircle className="w-5 h-5" />
        <span>WhatsApp'tan Randevu Talep Et</span>
      </a>
    </div>
  );
}
