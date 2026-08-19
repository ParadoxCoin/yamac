'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Camera, X, ChevronLeft, ChevronRight } from 'lucide-react';

// category keys are internal constants — translation maps them to display labels
const GALLERY_IMAGES = [
  { id: 1, src: '/images/gallery/varyant-kalkis-terasi.jpg', categoryKey: 'takeoff', alt: 'Antalya Varyant ahşap seyir terası yamaç paraşütü kalkış anı' },
  { id: 2, src: '/images/gallery/falezler-turkuaz-ucus.jpg', categoryKey: 'air', alt: 'Antalya falezler üzerinde tandem yamaç paraşütü uçuşu' },
  { id: 3, src: '/images/gallery/antalya-tandem-deneyim.jpg', categoryKey: 'mediterranean', alt: 'Antalya deniz manzaralı tandem paraşüt deneyimi' },
  { id: 4, src: '/images/gallery/antalya-yamac-parasutu-kalkis.jpg', categoryKey: 'takeoff', alt: 'Antalya yamaç paraşütü kalkış' },
  { id: 5, src: '/images/gallery/antalya-falezler-yamac-parasutu-hava.jpg', categoryKey: 'air', alt: 'Antalya falezler ve Konyaaltı sahil manzarası' },
  { id: 6, src: '/images/gallery/antalya-konyaalti-yamac-parasutu-inis.jpg', categoryKey: 'landing', alt: 'Konyaaltı sahili yamaç paraşütü iniş anı' },
  { id: 7, src: '/images/gallery/antalya-yamac-parasutu-gunbatimi.jpg', categoryKey: 'sunset', alt: 'Antalya gün batımı yamaç paraşütü' },
];

const translations = {
  tr: {
    badge: 'Gerçek Uçuş Fotoğrafları',
    title: 'Gökyüzünden Unutulmaz Kareler',
    sub: 'Antalya Varyant ve Falezler üzerindeki gerçek tandem uçuşlarımızdan aksiyon kamerası çekimleri.',
    cats: { all: 'Tümü', takeoff: 'Kalkış', air: 'Havada', mediterranean: 'Akdeniz', landing: 'İniş', sunset: 'Gün Batımı' },
    titles: ['Konyaaltı Varyant Seyir Terası Kalkış Alanı', 'Falezler ve Turkuaz Akdeniz Üzerinde Süzülüş', 'Eşsiz Akdeniz ve Şehir Manzarası', 'Profesyonel Pilot Eşliğinde Kalkış Anı', 'Kuşbakışı Antalya Falezler ve Konyaaltı', 'Konyaaltı Sahili Konforlu İniş', 'Muhteşem Gün Batımı Uçuşu'],
  },
  en: {
    badge: 'Real Flight Photos',
    title: 'Unforgettable Moments in the Sky',
    sub: 'Action camera captures from our real tandem paragliding flights over Antalya.',
    cats: { all: 'All', takeoff: 'Takeoff', air: 'In the Air', mediterranean: 'Mediterranean', landing: 'Landing', sunset: 'Sunset' },
    titles: ['Konyaaltı Varyant Viewpoint Takeoff Area', 'Gliding over Falezler and the Turquoise Mediterranean', 'Unique Mediterranean and City View', 'Takeoff Moment with Professional Pilot', 'Bird\'s Eye View of Antalya Falezler', 'Smooth Landing at Konyaaltı Beach', 'Spectacular Sunset Flight'],
  },
  ru: {
    badge: 'Настоящие фото полётов',
    title: 'Незабываемые моменты в небе',
    sub: 'Кадры с экшн-камеры из реальных тандем-полётов над Анталией.',
    cats: { all: 'Все', takeoff: 'Взлёт', air: 'В воздухе', mediterranean: 'Средиземное', landing: 'Посадка', sunset: 'Закат' },
    titles: ['Взлётная площадка Вариант', 'Парение над Фалезлер и бирюзовым морем', 'Уникальный вид на Средиземное море и город', 'Момент взлёта с пилотом', 'Вид с высоты птичьего полёта на Анталию', 'Мягкая посадка на пляже Коньяалты', 'Великолепный закатный полёт'],
  },
  ar: {
    badge: 'صور رحلات حقيقية',
    title: 'لحظات لا تُنسى في السماء',
    sub: 'لقطات كاميرا أكشن من رحلات التانديم الحقيقية فوق أنطاليا.',
    cats: { all: 'الكل', takeoff: 'الإقلاع', air: 'في الجو', mediterranean: 'المتوسط', landing: 'الهبوط', sunset: 'الغروب' },
    titles: ['منطقة إقلاع منصة فاريانت', 'التحليق فوق جروف فالزلر والبحر الفيروزي', 'منظر رائع على البحر الأبيض والمدينة', 'لحظة الإقلاع مع الكابتن', 'منظر علوي على جروف أنطاليا', 'هبوط سلس على شاطئ كونيالتي', 'رحلة غروب رائعة'],
  },
};

export default function PhotoGallery({ locale }: { locale?: string; dict?: any }) {
  const currentLocale = (locale || 'tr') as keyof typeof translations;
  const t = translations[currentLocale] || translations.tr;

  // category keys in order used for filtering
  const CATEGORY_KEYS = ['all', 'takeoff', 'air', 'mediterranean', 'landing', 'sunset'] as const;

  const [activeKey, setActiveKey] = useState<string>('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredImages = activeKey === 'all' ? GALLERY_IMAGES : GALLERY_IMAGES.filter(img => img.categoryKey === activeKey);

  const openLightbox = (index: number) => { setCurrentIndex(index); setLightboxOpen(true); };
  const nextImage = () => setCurrentIndex(prev => (prev + 1) % filteredImages.length);
  const prevImage = () => setCurrentIndex(prev => (prev - 1 + filteredImages.length) % filteredImages.length);

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[#4A9FD9] text-sm font-semibold tracking-wider uppercase mb-2 flex items-center justify-center gap-1.5">
            <Camera className="w-4 h-4" />
            {t.badge}
          </span>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold text-[#0B1D3A] mb-4">{t.title}</h2>
          <p className="text-gray-600 text-base md:text-lg">{t.sub}</p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {CATEGORY_KEYS.map((key) => (
            <button
              key={key}
              onClick={() => setActiveKey(key)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${activeKey === key ? 'bg-[#0B1D3A] text-white shadow-md' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
            >
              {t.cats[key]}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((img, idx) => {
            const title = t.titles[GALLERY_IMAGES.indexOf(img)];
            const catLabel = t.cats[img.categoryKey as keyof typeof t.cats];
            return (
              <div
                key={img.id}
                onClick={() => openLightbox(idx)}
                className="group relative h-72 rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-gray-100"
              >
                <Image src={img.src} alt={img.alt} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="bg-[#4A9FD9] text-white text-xs px-2.5 py-1 rounded-full font-medium w-fit mb-2">{catLabel}</span>
                  <h3 className="text-white font-bold text-base leading-snug">{title}</h3>
                </div>
              </div>
            );
          })}
        </div>

        {/* Lightbox Modal */}
        {lightboxOpen && filteredImages[currentIndex] && (
          <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
            <button onClick={() => setLightboxOpen(false)} className="absolute top-6 right-6 text-white p-2 hover:bg-white/10 rounded-full transition-colors z-50">
              <X className="w-8 h-8" />
            </button>
            <button onClick={prevImage} className="absolute left-4 text-white p-3 hover:bg-white/10 rounded-full transition-colors z-50">
              <ChevronLeft className="w-8 h-8" />
            </button>
            <div className="relative max-w-4xl max-h-[85vh] w-full h-[600px]">
              <Image src={filteredImages[currentIndex].src} alt={filteredImages[currentIndex].alt} fill className="object-contain" />
            </div>
            <button onClick={nextImage} className="absolute right-4 text-white p-3 hover:bg-white/10 rounded-full transition-colors z-50">
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
