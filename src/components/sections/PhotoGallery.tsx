'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Camera, X, ChevronLeft, ChevronRight } from 'lucide-react';

const GALLERY_IMAGES = [
  {
    id: 1,
    src: '/images/gallery/varyant-kalkis-terasi.jpg',
    category: 'Kalkış',
    title: 'Konyaaltı Varyant Seyir Terası Kalkış Alanı',
    alt: 'Antalya Varyant ahşap seyir terası yamaç paraşütü kalkış anı',
  },
  {
    id: 2,
    src: '/images/gallery/falezler-turkuaz-ucus.jpg',
    category: 'Havada',
    title: 'Falezler ve Turkuaz Akdeniz Üzerinde Süzülüş',
    alt: 'Antalya falezler üzerinde tandem yamaç paraşütü uçuşu',
  },
  {
    id: 3,
    src: '/images/gallery/antalya-tandem-deneyim.jpg',
    category: 'Akdeniz',
    title: 'Eşsiz Akdeniz ve Şehir Manzarası',
    alt: 'Antalya deniz manzaralı tandem paraşüt deneyimi',
  },
  {
    id: 4,
    src: '/images/gallery/antalya-yamac-parasutu-kalkis.jpg',
    category: 'Kalkış',
    title: 'Profesyonel Pilot Eşliğinde Kalkış Anı',
    alt: 'Antalya yamaç paraşütü kalkış',
  },
  {
    id: 5,
    src: '/images/gallery/antalya-falezler-yamac-parasutu-hava.jpg',
    category: 'Havada',
    title: 'Kuşbakışı Antalya Falezler ve Konyaaltı',
    alt: 'Antalya falezler ve Konyaaltı sahil manzarası',
  },
  {
    id: 6,
    src: '/images/gallery/antalya-konyaalti-yamac-parasutu-inis.jpg',
    category: 'İniş',
    title: 'Konyaaltı Sahili Konforlu İniş',
    alt: 'Konyaaltı sahili yamaç paraşütü iniş anı',
  },
  {
    id: 7,
    src: '/images/gallery/antalya-yamac-parasutu-gunbatimi.jpg',
    category: 'Gün Batımı',
    title: 'Muhteşem Gün Batımı Uçuşu',
    alt: 'Antalya gün batımı yamaç paraşütü',
  },
];

const CATEGORIES = ['Tümü', 'Kalkış', 'Havada', 'Akdeniz', 'İniş', 'Gün Batımı'];

export default function PhotoGallery({ locale }: { locale?: string; dict?: any }) {
  const isTr = locale !== 'en';
  const [activeTab, setActiveTab] = useState('Tümü');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredImages =
    activeTab === 'Tümü'
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) => img.category === activeTab);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredImages.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[#4A9FD9] text-sm font-semibold tracking-wider uppercase mb-2 block flex items-center justify-center gap-1.5">
            <Camera className="w-4 h-4" />
            {isTr ? 'Gerçek Uçuş Fotoğrafları' : 'Real Flight Photos'}
          </span>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold text-[#0B1D3A] mb-4">
            {isTr ? 'Gökyüzünden Unutulmaz Kareler' : 'Unforgettable Moments in the Sky'}
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            {isTr
              ? "Antalya Varyant ve Falezler üzerindeki gerçek tandem uçuşlarımızdan aksiyon kamerası çekimleri."
              : "Action camera captures from our real tandem paragliding flights over Antalya."}
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                activeTab === cat
                  ? 'bg-[#0B1D3A] text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((img, idx) => (
            <div
              key={img.id}
              onClick={() => openLightbox(idx)}
              className="group relative h-72 rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-gray-100"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="bg-[#4A9FD9] text-white text-xs px-2.5 py-1 rounded-full font-medium w-fit mb-2">
                  {img.category}
                </span>
                <h3 className="text-white font-bold text-base leading-snug">{img.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {lightboxOpen && filteredImages[currentIndex] && (
          <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-6 right-6 text-white p-2 hover:bg-white/10 rounded-full transition-colors z-50"
            >
              <X className="w-8 h-8" />
            </button>

            <button
              onClick={prevImage}
              className="absolute left-4 text-white p-3 hover:bg-white/10 rounded-full transition-colors z-50"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <div className="relative max-w-4xl max-h-[85vh] w-full h-[600px]">
              <Image
                src={filteredImages[currentIndex].src}
                alt={filteredImages[currentIndex].alt}
                fill
                className="object-contain"
              />
            </div>

            <button
              onClick={nextImage}
              className="absolute right-4 text-white p-3 hover:bg-white/10 rounded-full transition-colors z-50"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
