'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { MessageCircle, MapPin, ChevronDown } from 'lucide-react';

export default function Hero({ locale, dict }: { locale?: string; dict?: any }) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToWeather = () => {
    document.getElementById('weather-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#0B1D3A]">
      <div 
        className="absolute inset-0 w-full h-full"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      >
        <Image
          src="/images/hero/antalya-yamac-parasutu-hero.jpg"
          alt="Antalya'da Yamaç Paraşütü"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1D3A]/70 via-[#0B1D3A]/40 to-[#0B1D3A]/80" />
      </div>

      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 container mx-auto pt-20">
        <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl text-[#F8F9FA] font-bold mb-6 drop-shadow-lg tracking-tight">
          Antalya'da Yamaç Paraşütü
        </h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mb-10 drop-shadow-md">
          Varyant ve Falezler üzerinde Akdeniz'in eşsiz manzarası eşliğinde tandem uçuş deneyimi.
        </p>

        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
          <a
            href="https://wa.me/905555555555?text=Merhaba,%20randevu%20talep%20etmek%20istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 bg-[#22C55E] hover:bg-[#1ea951] text-white py-3 px-8 rounded-full font-semibold transition-transform hover:scale-105 w-full sm:w-auto shadow-lg shadow-green-500/20"
          >
            <MessageCircle className="w-5 h-5" />
            <span>WhatsApp'tan Randevu Talep Et</span>
          </a>
          
          <button
            onClick={scrollToWeather}
            className="flex items-center justify-center bg-transparent border-2 border-[#F8F9FA] hover:bg-[#F8F9FA] hover:text-[#0B1D3A] text-[#F8F9FA] py-3 px-8 rounded-full font-semibold transition-all w-full sm:w-auto"
          >
            Uçuş Koşullarını Gör
          </button>
        </div>

        <a 
          href="https://maps.google.com/?q=36.8769,30.6525" 
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 flex items-center space-x-1 text-sm text-gray-300 hover:text-[#D4A96A] transition-colors"
        >
          <MapPin className="w-4 h-4" />
          <span>Konumu Haritada Aç</span>
        </a>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <button onClick={scrollToWeather} aria-label="Aşağı kaydır" className="text-white/70 hover:text-white transition-colors">
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
}
