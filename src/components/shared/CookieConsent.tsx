'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieConsent({ locale }: { locale?: string }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
    // Here you would typically initialize your analytics
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#0B1D3A] border-t border-white/10 shadow-2xl transform transition-transform duration-500">
      <div className="container mx-auto px-4 py-4 md:py-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-gray-300 flex-1">
            <p>
              Size daha iyi bir deneyim sunabilmek için web sitemizde çerezler kullanılmaktadır. 
              Sitemizi kullanmaya devam ederek çerez kullanımımızı kabul etmiş olursunuz. 
              Detaylı bilgi için{' '}
              <Link href="/cerez-politikasi" className="text-[#4A9FD9] hover:underline whitespace-nowrap">
                Çerez Politikası
              </Link>{' '}
              ve{' '}
              <Link href="/kvkk" className="text-[#4A9FD9] hover:underline whitespace-nowrap">
                KVKK Aydınlatma Metni
              </Link>'ni inceleyebilirsiniz.
            </p>
          </div>
          <div className="flex items-center space-x-3 w-full md:w-auto shrink-0">
            <button
              onClick={handleReject}
              className="flex-1 md:flex-none px-6 py-2 border border-gray-500 text-gray-300 hover:text-white hover:border-gray-400 rounded-lg text-sm font-medium transition-colors"
            >
              Reddet
            </button>
            <button
              onClick={handleAccept}
              className="flex-1 md:flex-none px-6 py-2 bg-[#D4A96A] hover:bg-[#c29a60] text-[#0B1D3A] rounded-lg text-sm font-bold transition-colors"
            >
              Kabul Et
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
