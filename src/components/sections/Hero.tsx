'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { MessageCircle, MapPin, ChevronDown } from 'lucide-react';
import { siteConfig } from '@/lib/config/site';

export default function Hero({ locale }: { locale?: string; dict?: any }) {
  const [scrollY, setScrollY] = useState(0);
  const isTr = locale !== 'en';

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToWeather = () => {
    document.getElementById('weather')?.scrollIntoView({ behavior: 'smooth' });
  };

  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    isTr
      ? "Merhaba, Antalya Varyant'ta yamaç paraşütü yapmak istiyorum.\n\nAd Soyad:\nKişi Sayısı:\nTercih Edilen Tarih:\nTercih Edilen Saat:\nYaklaşık Kilo:\nKonaklama Bölgesi:\n\nUçuş koşulları ve uygunluk hakkında bilgi almak istiyorum."
      : "Hello, I would like to book tandem paragliding in Antalya.\n\nFull Name:\nNumber of People:\nPreferred Date:\nPreferred Time:\nApproximate Weight:\nAccommodation Area:\n\nI would like information about flight conditions and availability."
  )}`;

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#0B1D3A]">
      <div 
        className="absolute inset-0 w-full h-full"
        style={{ transform: `translateY(${scrollY * 0.4}px)` }}
      >
        <Image
          src="/images/hero/antalya-yamac-parasutu-hero.jpg"
          alt="Antalya'da Yamaç Paraşütü - Varyant ve Falezler Uçuşu"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1D3A]/75 via-[#0B1D3A]/45 to-[#0B1D3A]/85" />
      </div>

      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 container mx-auto pt-20">
        <span className="inline-block px-4 py-1.5 bg-[#4A9FD9]/20 border border-[#4A9FD9]/30 rounded-full text-[#4A9FD9] font-bold text-xs md:text-sm mb-4 tracking-wider uppercase backdrop-blur-sm">
          {isTr ? '23 Yıllık Deneyim - Mehmet Bayraktar' : '23 Years Experience - Commercial Pilot'}
        </span>

        <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-6xl lg:text-7xl text-[#F8F9FA] font-extrabold mb-6 drop-shadow-lg tracking-tight max-w-4xl">
          {isTr ? "Antalya'da Yamaç Paraşütü" : 'Paragliding in Antalya'}
        </h1>

        <p className="text-base md:text-xl text-gray-200 max-w-2xl mb-10 drop-shadow-md leading-relaxed">
          {isTr
            ? "Varyant ve Falezler üzerinde Akdeniz'in eşsiz manzarası eşliğinde THSF sertifikalı pilot ile tandem uçuş deneyimi."
            : "Tandem paragliding experience over Antalya's Varyant viewpoint and Falezler cliffs over the Mediterranean Sea."}
        </p>

        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 bg-[#25D366] hover:bg-[#1da851] text-white py-4 px-8 rounded-full font-bold transition-all transform hover:scale-105 w-full sm:w-auto shadow-xl shadow-green-600/30 text-base"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>{isTr ? "WhatsApp'tan Randevu Talep Et" : 'Book via WhatsApp'}</span>
          </a>
          
          <button
            onClick={scrollToWeather}
            className="flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white hover:text-[#0B1D3A] text-white py-4 px-8 rounded-full font-bold transition-all w-full sm:w-auto text-base"
          >
            {isTr ? 'Uçuş Koşullarını Gör' : 'Check Flight Conditions'}
          </button>
        </div>

        <a 
          href="https://maps.google.com/?q=36.8769,30.6525" 
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 flex items-center space-x-1.5 text-sm text-gray-300 hover:text-[#D4A96A] transition-colors font-medium bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10"
        >
          <MapPin className="w-4 h-4 text-[#4A9FD9]" />
          <span>{isTr ? 'Konyaaltı Varyant Kalkış Noktası Haritası' : 'Takeoff Location on Map'}</span>
        </a>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <button onClick={scrollToWeather} aria-label="Aşağı kaydır" className="text-white/70 hover:text-white transition-colors">
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
}
