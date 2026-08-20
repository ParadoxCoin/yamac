'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { MessageCircle, MapPin, ChevronDown } from 'lucide-react';
import { siteConfig } from '@/lib/config/site';

const translations = {
  tr: {
    slogan: '🪂 Özgürlük Rüzgarda Saklı',
    badge: '23 Yıllık Deneyim - Mehmet Bayraktar',
    title: "Antalya'da Yamaç Paraşütü",
    subtitle: "Varyant ve Falezler üzerinde Akdeniz'in eşsiz manzarası eşliğinde THSF sertifikalı pilot ile tandem uçuş deneyimi.",
    whatsapp: "WhatsApp'tan Randevu Talep Et",
    conditions: 'Uçuş Koşullarını Gör',
    mapLabel: 'Konyaaltı Varyant Kalkış Noktası Haritası',
    wpMsg: "Merhaba, Antalya Varyant'ta yamaç paraşütü yapmak istiyorum.\n\nAd Soyad:\nKişi Sayısı:\nTercih Edilen Tarih:\nTercih Edilen Saat:\nYaklaşık Kilo:\nKonaklama Bölgesi:\n\nUçuş koşulları ve uygunluk hakkında bilgi almak istiyorum.",
  },
  en: {
    slogan: '🪂 Freedom is Hidden in the Wind',
    badge: '23 Years Experience - Commercial Pilot',
    title: 'Paragliding in Antalya',
    subtitle: "Tandem paragliding experience over Antalya's Varyant viewpoint and Falezler cliffs above the Mediterranean Sea.",
    whatsapp: 'Book via WhatsApp',
    conditions: 'Check Flight Conditions',
    mapLabel: 'Takeoff Location on Map',
    wpMsg: "Hello, I would like to book tandem paragliding in Antalya.\n\nFull Name:\nNumber of People:\nPreferred Date:\nPreferred Time:\nApproximate Weight:\nAccommodation Area:\n\nI would like information about flight conditions and availability.",
  },
  ru: {
    slogan: '🪂 Свобода скрыта в ветре',
    badge: '23 Года Опыта - Лицензированный Пилот',
    title: 'Парапланеризм в Анталии',
    subtitle: 'Тандем полет на параплане над скалами Вариант и Фалезлер в Анталии. Сертифицированный пилот THSF с 23-летним стажем.',
    whatsapp: 'Забронировать через WhatsApp',
    conditions: 'Условия полёта',
    mapLabel: 'Место старта на карте',
    wpMsg: "Здравствуйте, я хочу забронировать полет на параплане в Анталии.\n\nИмя и Фамилия:\nКоличество человек:\nЖелаемая дата:\nЖелаемое время:\nВес (кг):\nОтель / Район:\n\nХочу узнать подробности и наличие свободных мест.",
  },
  ar: {
    slogan: '🪂 الحرية مخبأة في الريح',
    badge: '٢٣ عاماً خبرة - طيار تجاري',
    title: 'الطيران الشراعي في أنطاليا',
    subtitle: 'رحلة طيران شراعي مزدوج فوق جروف أنطاليا (كونيالتي فاريانت وفالزلر) مع البحر الأبيض المتوسط. طيار معتمد دولياً THSF.',
    whatsapp: 'احجز عبر الواتساب',
    conditions: 'حالة الطيران',
    mapLabel: 'موقع الإقلاع على الخريطة',
    wpMsg: "مرحباً، أود حجز رحلة طيران شراعي في أنطاليا.\n\nالاسم الكامل:\nعدد الأشخاص:\nالتاريخ المفضل:\nالوقت المفضل:\nالوزن التقريبي:\nمنطقة الإقامة:\n\nأود الحصول على معلومات حول الرحلة والمواعيد المتاحة.",
  },
};

export default function Hero({ locale }: { locale?: string; dict?: any }) {
  const [scrollY, setScrollY] = useState(0);
  const t = translations[locale as keyof typeof translations] || translations.tr;

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToWeather = () => {
    document.getElementById('weather')?.scrollIntoView({ behavior: 'smooth' });
  };

  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(t.wpMsg)}`;

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
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1D3A]/75 via-[#0B1D3A]/45 to-[#0B1D3A]/85" />
      </div>

      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 container mx-auto pt-20">
        {/* Brand Slogan */}
        <p className="text-[#D4A96A] text-sm md:text-base font-semibold italic tracking-widest mb-3 drop-shadow-lg opacity-90">
          {t.slogan}
        </p>

        <span className="inline-block px-4 py-1.5 bg-[#4A9FD9]/20 border border-[#4A9FD9]/30 rounded-full text-[#4A9FD9] font-bold text-xs md:text-sm mb-4 tracking-wider uppercase backdrop-blur-sm">
          {t.badge}
        </span>

        <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-6xl lg:text-7xl text-[#F8F9FA] font-extrabold mb-6 drop-shadow-lg tracking-tight max-w-4xl">
          {t.title}
        </h1>

        <p className="text-base md:text-xl text-gray-200 max-w-2xl mb-10 drop-shadow-md leading-relaxed">
          {t.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 bg-[#25D366] hover:bg-[#1da851] text-white py-4 px-8 rounded-full font-bold transition-all transform hover:scale-105 w-full sm:w-auto shadow-xl shadow-green-600/30 text-base"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>{t.whatsapp}</span>
          </a>

          <button
            onClick={scrollToWeather}
            className="flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white hover:text-[#0B1D3A] text-white py-4 px-8 rounded-full font-bold transition-all w-full sm:w-auto text-base"
          >
            {t.conditions}
          </button>
        </div>

        <a
          href={siteConfig.social.googleMaps}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 flex items-center space-x-1.5 text-sm text-gray-300 hover:text-[#D4A96A] transition-colors font-medium bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10"
        >
          <MapPin className="w-4 h-4 text-[#4A9FD9]" />
          <span>{t.mapLabel}</span>
        </a>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <button onClick={scrollToWeather} aria-label="Scroll down" className="text-white/70 hover:text-white transition-colors">
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
}
