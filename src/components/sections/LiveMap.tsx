'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { MapPin } from 'lucide-react';
import 'leaflet/dist/leaflet.css';

// Dynamic import for Leaflet since it needs window object
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
  const position: [number, number] = [36.8769, 30.6525]; // Varyant / Falezler

  useEffect(() => {
    setMounted(true);
    
    // Fix Leaflet marker icon issue in Next.js
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

  return (
    <section className="py-20 bg-[#FAFBFC]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
            Uçuş Noktasını Haritada Gör
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Antalya Varyant seyir terasında buluşuyor ve falezler üzerinden kalkışımızı gerçekleştiriyoruz.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-white p-4 rounded-3xl shadow-sm border border-gray-100">
          <div className="h-[400px] md:h-[500px] rounded-2xl overflow-hidden relative z-0">
            {!mounted ? (
              <div className="w-full h-full bg-gray-100 animate-pulse flex items-center justify-center">
                <MapPin className="w-10 h-10 text-gray-300" />
              </div>
            ) : (
              <MapContainer 
                center={position} 
                zoom={14} 
                scrollWheelZoom={false}
                className="w-full h-full"
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                  <Popup>
                    <div className="text-center font-sans">
                      <strong className="block mb-1 text-[#0B1D3A]">Kalkış Noktası</strong>
                      <span className="text-sm text-gray-600 mb-3 block">Antalya Varyant / Falezler</span>
                      <a 
                        href={`https://www.google.com/maps/dir/?api=1&destination=${position[0]},${position[1]}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-[#4A9FD9] text-white px-4 py-1.5 rounded-full text-xs font-semibold hover:bg-[#398bc2] transition-colors"
                      >
                        Yol Tarifi Al
                      </a>
                    </div>
                  </Popup>
                </Marker>
              </MapContainer>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
