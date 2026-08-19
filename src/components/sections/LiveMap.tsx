'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { MapPin, Navigation, ExternalLink } from 'lucide-react';
import { siteConfig } from '@/lib/config/site';

const MapContainer = dynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import('react-leaflet').then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import('react-leaflet').then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(
  () => import('react-leaflet').then((mod) => mod.Popup),
  { ssr: false }
);

export default function LiveMap({ locale }: { locale?: string }) {
  const [mounted, setMounted] = useState(false);
  const isTr = locale !== 'en';
  
  // Exact Google Maps location for Konyaaltı Varyant Büyük Seyir Terası
  const position: [number, number] = [36.8844596, 30.6795452];

  useEffect(() => {
    setMounted(true);
    
    if (typeof window !== 'undefined') {
      const L = require('leaflet');
      delete L.Icon.Default.prototype._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
      });
    }
  }, []);

  const googleMapsUrl = siteConfig.social.googleMaps;
  const appleMapsUrl = `https://maps.apple.com/?daddr=${position[0]},${position[1]}`;
  const yandexMapsUrl = `https://yandex.com/maps/?rtext=~${position[0]},${position[1]}`;

  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 shadow-lg border border-gray-200">
      <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-bold text-[#0B1D3A] flex items-center gap-2">
            <MapPin className="w-5 h-5 text-[#4A9FD9]" />
            Konyaaltı Varyant Büyük Seyir Terası
          </h3>
          <p className="text-sm text-gray-500 mt-1">
            Kalkış Alanımız: Panoramik Seyir Terası, Muratpaşa / Antalya
          </p>
        </div>

        <a
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#4A9FD9] hover:bg-[#3b8bc4] text-white font-bold text-sm rounded-xl transition-colors shadow-md w-fit"
        >
          <Navigation className="w-4 h-4" />
          {isTr ? 'Google Maps ile Yol Tarifi' : 'Get Directions on Google Maps'}
          <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
        </a>
      </div>

      {/* Map Container */}
      <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-inner border border-gray-200">
        {mounted ? (
          <MapContainer
            center={position}
            zoom={16}
            scrollWheelZoom={false}
            style={{ height: '100%', width: '100%' }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>
                <div className="p-1 space-y-2 text-slate-800">
                  <div className="font-bold text-sm text-[#0B1D3A]">
                    🪂 Antalya Yamaç Paraşütü Kalkış Noktası
                  </div>
                  <p className="text-xs text-gray-600">
                    Konyaaltı Varyant Büyük Seyir Terası<br />
                    Mehmet BAYRAKTAR - 0507 904 64 46
                  </p>
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-3 py-1 bg-[#4A9FD9] text-white text-xs font-bold rounded"
                  >
                    Google Maps'te Aç
                  </a>
                </div>
              </Popup>
            </Marker>
          </MapContainer>
        ) : (
          <div className="w-full h-full bg-gray-100 animate-pulse flex items-center justify-center text-gray-400">
            Harita Yükleniyor...
          </div>
        )}
      </div>

      <div className="mt-4 flex flex-wrap gap-3 justify-end text-xs text-gray-500">
        <span>Diğer Haritalarda Aç:</span>
        <a href={appleMapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#4A9FD9] underline">
          Apple Maps
        </a>
        <span>•</span>
        <a href={yandexMapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#4A9FD9] underline">
          Yandex Navi
        </a>
      </div>
    </div>
  );
}
