'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Camera, X, ChevronLeft, ChevronRight, Play } from 'lucide-react';

// category keys are internal constants — translation maps them to display labels
const GALLERY_IMAGES = [
  { id: 1,  src: '/images/gallery/antalya-falezler-varyant-tandem.jpg',    categoryKey: 'air',         alt: 'Antalya Varyant Falezler üzerinde tandem paraşütü' },
  { id: 2,  src: '/images/gallery/antalya-tandem-ucus-1.jpg',              categoryKey: 'air',         alt: 'Antalya tandem yamaç paraşütü uçuşu' },
  { id: 3,  src: '/images/gallery/antalya-tandem-ucus-2.jpg',              categoryKey: 'air',         alt: 'Antalya tandem yamaç paraşütü deneyimi' },
  { id: 4,  src: '/images/gallery/antalya-tandem-ucus-3.jpg',              categoryKey: 'mediterranean', alt: 'Antalya Akdeniz üzerinde paraşüt uçuşu' },
  { id: 5,  src: '/images/gallery/antalya-tandem-ucus-4.jpg',              categoryKey: 'air',         alt: 'Antalya gökyüzünde tandem uçuş' },
  { id: 6,  src: '/images/gallery/antalya-tandem-ucus-5.jpg',              categoryKey: 'air',         alt: 'Antalya Falezler üzerinde hava fotoğrafı' },
  { id: 7,  src: '/images/gallery/antalya-tandem-ucus-6.jpg',              categoryKey: 'mediterranean', alt: 'Akdeniz manzaralı tandem paraşüt' },
  { id: 8,  src: '/images/gallery/antalya-tandem-ucus-7.jpg',              categoryKey: 'air',         alt: 'Antalya Varyant kalkış ve uçuş anı' },
  { id: 9,  src: '/images/gallery/antalya-varyant-kalkis-2.jpg',           categoryKey: 'takeoff',     alt: 'Konyaaltı Varyant kalkış pistinde hazırlık' },
  { id: 10, src: '/images/gallery/antalya-varyant-manzara.jpg',            categoryKey: 'takeoff',     alt: 'Antalya Varyant panoramik seyir terası manzarası' },
  { id: 11, src: '/images/gallery/varyant-kalkis-terasi.jpg',              categoryKey: 'takeoff',     alt: 'Antalya Varyant ahşap seyir terası kalkış alanı' },
  { id: 12, src: '/images/gallery/falezler-turkuaz-ucus.jpg',              categoryKey: 'mediterranean', alt: 'Falezler ve turkuaz Akdeniz üzerinde uçuş' },
  { id: 13, src: '/images/gallery/antalya-tandem-deneyim.jpg',             categoryKey: 'air',         alt: 'Antalya deniz manzaralı tandem paraşüt deneyimi' },
  { id: 14, src: '/images/gallery/antalya-yamac-parasutu-kalkis.jpg',      categoryKey: 'takeoff',     alt: 'Antalya yamaç paraşütü kalkış' },
  { id: 15, src: '/images/gallery/antalya-falezler-yamac-parasutu-hava.jpg', categoryKey: 'air',       alt: 'Antalya Falezler ve Konyaaltı sahil kuş bakışı' },
  { id: 16, src: '/images/gallery/antalya-yamac-parasutu-gunbatimi.jpg',   categoryKey: 'sunset',      alt: 'Antalya gün batımı yamaç paraşütü uçuşu' },
];

const GALLERY_VIDEOS = [
  { id: 'v1', src: '/images/gallery/antalya-yamac-parasutu-video-1.mp4', poster: '/images/gallery/antalya-falezler-varyant-tandem.jpg' },
  { id: 'v2', src: '/images/gallery/antalya-yamac-parasutu-video-2.mp4', poster: '/images/gallery/antalya-tandem-ucus-2.jpg' },
  { id: 'v3', src: '/images/gallery/antalya-yamac-parasutu-video-3.mp4', poster: '/images/gallery/antalya-tandem-ucus-4.jpg' },
];

const translations = {
  tr: {
    badge: 'Gerçek Uçuş Fotoğraf & Videoları',
    title: 'Gökyüzünden Unutulmaz Kareler',
    sub: 'Antalya Varyant ve Falezler üzerindeki gerçek tandem uçuşlarımızdan aksiyon kamerası çekimleri.',
    cats: { all: 'Tümü', takeoff: 'Kalkış', air: 'Havada', mediterranean: 'Akdeniz', landing: 'İniş', sunset: 'Gün Batımı', video: '🎬 Video' },
    videoTitle: 'Uçuş Videoları',
  },
  en: {
    badge: 'Real Flight Photos & Videos',
    title: 'Unforgettable Moments in the Sky',
    sub: 'Action camera captures from our real tandem paragliding flights over Antalya.',
    cats: { all: 'All', takeoff: 'Takeoff', air: 'In the Air', mediterranean: 'Mediterranean', landing: 'Landing', sunset: 'Sunset', video: '🎬 Videos' },
    videoTitle: 'Flight Videos',
  },
  ru: {
    badge: 'Фото и Видео полётов',
    title: 'Незабываемые моменты в небе',
    sub: 'Кадры с экшн-камеры из реальных тандем-полётов над Анталией.',
    cats: { all: 'Все', takeoff: 'Взлёт', air: 'В воздухе', mediterranean: 'Средиземное', landing: 'Посадка', sunset: 'Закат', video: '🎬 Видео' },
    videoTitle: 'Видео полётов',
  },
  ar: {
    badge: 'صور وفيديوهات رحلات حقيقية',
    title: 'لحظات لا تُنسى في السماء',
    sub: 'لقطات كاميرا أكشن من رحلات التانديم الحقيقية فوق أنطاليا.',
    cats: { all: 'الكل', takeoff: 'الإقلاع', air: 'في الجو', mediterranean: 'المتوسط', landing: 'الهبوط', sunset: 'الغروب', video: '🎬 فيديو' },
    videoTitle: 'فيديوهات الطيران',
  },
};

export default function PhotoGallery({ locale }: { locale?: string; dict?: any }) {
  const currentLocale = (locale || 'tr') as keyof typeof translations;
  const t = translations[currentLocale] || translations.tr;

  const CATEGORY_KEYS = ['all', 'takeoff', 'air', 'mediterranean', 'landing', 'sunset', 'video'] as const;

  const [activeKey, setActiveKey] = useState<string>('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  const filteredImages = activeKey === 'all' ? GALLERY_IMAGES : GALLERY_IMAGES.filter(img => img.categoryKey === activeKey);
  const showVideos = activeKey === 'video' || activeKey === 'all';

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

        {/* Photo Grid */}
        {activeKey !== 'video' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-12">
            {filteredImages.map((img, idx) => (
              <div
                key={img.id}
                onClick={() => openLightbox(idx)}
                className="group relative h-60 rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-gray-100"
              >
                <Image src={img.src} alt={img.alt} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white text-sm font-medium leading-snug">{img.alt}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Video Section */}
        {showVideos && (
          <div className={activeKey === 'all' ? 'border-t border-gray-100 pt-10' : ''}>
            {activeKey === 'all' && (
              <h3 className="text-center text-xl font-bold text-[#0B1D3A] mb-6 flex items-center justify-center gap-2">
                <Play className="w-5 h-5 text-[#4A9FD9]" />
                {t.videoTitle}
              </h3>
            )}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {GALLERY_VIDEOS.map((vid) => (
                <div key={vid.id} className="relative rounded-2xl overflow-hidden bg-black shadow-lg aspect-video">
                  <video
                    src={vid.src}
                    poster={vid.poster}
                    controls
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover"
                    onPlay={() => setPlayingVideo(vid.id)}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Lightbox */}
        {lightboxOpen && filteredImages[currentIndex] && (
          <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
            <button onClick={() => setLightboxOpen(false)} className="absolute top-6 right-6 text-white p-2 hover:bg-white/10 rounded-full transition-colors z-50">
              <X className="w-8 h-8" />
            </button>
            <button onClick={prevImage} className="absolute left-4 text-white p-3 hover:bg-white/10 rounded-full transition-colors z-50">
              <ChevronLeft className="w-8 h-8" />
            </button>
            <div className="relative max-w-5xl max-h-[88vh] w-full h-[600px]">
              <Image src={filteredImages[currentIndex].src} alt={filteredImages[currentIndex].alt} fill className="object-contain" />
              <p className="absolute bottom-2 left-0 right-0 text-center text-white/70 text-sm">{currentIndex + 1} / {filteredImages.length}</p>
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
