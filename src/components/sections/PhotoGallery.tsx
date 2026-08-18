'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X, ZoomIn } from 'lucide-react';

const CATEGORIES = ['Tümü', 'Uçuş', 'Kalkış', 'Havada', 'Akdeniz', 'Gün Batımı'];

// Placeholder images
const IMAGES = [
  { id: 1, src: '/images/gallery/1.jpg', category: 'Havada', alt: 'Antalya üzerinde yamaç paraşütü' },
  { id: 2, src: '/images/gallery/2.jpg', category: 'Kalkış', alt: 'Varyant kalkış pistinden havalanış' },
  { id: 3, src: '/images/gallery/3.jpg', category: 'Akdeniz', alt: 'Falezler ve Akdeniz manzarası' },
  { id: 4, src: '/images/gallery/4.jpg', category: 'Gün Batımı', alt: 'Antalya gün batımında yamaç paraşütü' },
  { id: 5, src: '/images/gallery/5.jpg', category: 'Uçuş', alt: 'Tandem uçuş deneyimi' },
  { id: 6, src: '/images/gallery/6.jpg', category: 'Havada', alt: 'Konyaaltı sahili üzerinden uçuş' },
];

export default function PhotoGallery({ locale, dict }: { locale?: string; dict?: any }) {
  const [activeTab, setActiveTab] = useState('Tümü');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredImages = activeTab === 'Tümü' 
    ? IMAGES 
    : IMAGES.filter(img => img.category === activeTab);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
            Uçuş Galerisi
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Göz alıcı Akdeniz manzarası eşliğinde unutulmaz anlara göz atın.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === category 
                  ? 'bg-[#0B1D3A] text-white shadow-md' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {filteredImages.map((image, index) => (
            <div 
              key={image.id}
              className="relative group rounded-xl overflow-hidden aspect-square cursor-pointer bg-gray-200"
              onClick={() => openLightbox(index)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <ZoomIn className="w-10 h-10 text-white" />
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {lightboxOpen && (
          <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
            <button 
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white/70 hover:text-white z-50 p-2"
              aria-label="Kapat"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="relative w-full max-w-5xl aspect-video max-h-screen">
              <Image
                src={filteredImages[currentImageIndex].src}
                alt={filteredImages[currentImageIndex].alt}
                fill
                className="object-contain"
                quality={100}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
