'use client';

import { useState, useEffect } from 'react';
import { Wind, Thermometer, CloudRain, Eye, Compass, Info } from 'lucide-react';

type WeatherData = {
  windSpeed: number;
  windDirection: number;
  temperature: number;
  precipitation: number;
  visibility: number;
  status: 'GREEN' | 'YELLOW' | 'RED';
  lastUpdate: string;
};

export default function WeatherConditions({ locale, dict }: { locale?: string; dict?: any }) {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);
        // Simulate API call for now since we don't have the real endpoint yet
        // In real app: const res = await fetch('/api/weather');
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Mock data
        setWeather({
          windSpeed: 12,
          windDirection: 180,
          temperature: 24,
          precipitation: 0,
          visibility: 10,
          status: 'GREEN',
          lastUpdate: new Date().toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' })
        });
        setError(false);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
    
    // Auto refresh every 15 minutes
    const interval = setInterval(fetchWeather, 15 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  const getStatusDisplay = (status: string) => {
    switch(status) {
      case 'GREEN': return { color: 'text-green-500', bg: 'bg-green-500/10', border: 'border-green-500/20', text: 'Uçuş İçin Uygun', dot: 'bg-green-500' };
      case 'YELLOW': return { color: 'text-yellow-500', bg: 'bg-yellow-500/10', border: 'border-yellow-500/20', text: 'Koşullar Değerlendiriliyor', dot: 'bg-yellow-500' };
      case 'RED': return { color: 'text-red-500', bg: 'bg-red-500/10', border: 'border-red-500/20', text: 'Uçuşa Uygun Değil', dot: 'bg-red-500' };
      default: return { color: 'text-gray-500', bg: 'bg-gray-100', border: 'border-gray-200', text: 'Bilinmiyor', dot: 'bg-gray-500' };
    }
  };

  return (
    <section id="weather-section" className="py-16 bg-[#FAFBFC]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
            Bugün Uçuş İçin Uygun mu?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Canlı hava durumu verileri ile Falezler üzerindeki güncel uçuş koşullarını takip edin.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
          {loading ? (
            <div className="animate-pulse space-y-6">
              <div className="h-12 bg-gray-200 rounded-lg w-full max-w-md mx-auto"></div>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="h-24 bg-gray-100 rounded-xl"></div>
                ))}
              </div>
            </div>
          ) : error || !weather ? (
            <div className="text-center py-8">
              <p className="text-red-500 mb-2">Hava durumu verileri alınamadı.</p>
              <button onClick={() => window.location.reload()} className="text-[#4A9FD9] underline text-sm">Tekrar dene</button>
            </div>
          ) : (
            <>
              {/* Status Indicator */}
              <div className={`mb-8 p-4 rounded-xl border ${getStatusDisplay(weather.status).border} ${getStatusDisplay(weather.status).bg} flex flex-col sm:flex-row items-center justify-between`}>
                <div className="flex items-center space-x-3 mb-2 sm:mb-0">
                  <span className={`relative flex h-4 w-4`}>
                    <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${getStatusDisplay(weather.status).dot}`}></span>
                    <span className={`relative inline-flex rounded-full h-4 w-4 ${getStatusDisplay(weather.status).dot}`}></span>
                  </span>
                  <span className={`font-semibold text-lg ${getStatusDisplay(weather.status).color}`}>
                    {getStatusDisplay(weather.status).text}
                  </span>
                </div>
                <span className="text-sm text-gray-500">
                  Son Güncelleme: {weather.lastUpdate}
                </span>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
                <div className="bg-[#FAFBFC] p-4 rounded-xl flex flex-col items-center justify-center text-center">
                  <Wind className="w-6 h-6 text-[#4A9FD9] mb-2" />
                  <span className="text-sm text-gray-500 mb-1">Rüzgar</span>
                  <span className="font-semibold text-[#1A1A2E]">{weather.windSpeed} km/s</span>
                </div>
                
                <div className="bg-[#FAFBFC] p-4 rounded-xl flex flex-col items-center justify-center text-center">
                  <Compass className="w-6 h-6 text-[#4A9FD9] mb-2" style={{ transform: `rotate(${weather.windDirection}deg)` }} />
                  <span className="text-sm text-gray-500 mb-1">Yön</span>
                  <span className="font-semibold text-[#1A1A2E]">{weather.windDirection}°</span>
                </div>

                <div className="bg-[#FAFBFC] p-4 rounded-xl flex flex-col items-center justify-center text-center">
                  <Thermometer className="w-6 h-6 text-[#4A9FD9] mb-2" />
                  <span className="text-sm text-gray-500 mb-1">Sıcaklık</span>
                  <span className="font-semibold text-[#1A1A2E]">{weather.temperature}°C</span>
                </div>

                <div className="bg-[#FAFBFC] p-4 rounded-xl flex flex-col items-center justify-center text-center">
                  <CloudRain className="w-6 h-6 text-[#4A9FD9] mb-2" />
                  <span className="text-sm text-gray-500 mb-1">Yağış</span>
                  <span className="font-semibold text-[#1A1A2E]">{weather.precipitation} mm</span>
                </div>

                <div className="bg-[#FAFBFC] p-4 rounded-xl flex flex-col items-center justify-center text-center col-span-2 md:col-span-1">
                  <Eye className="w-6 h-6 text-[#4A9FD9] mb-2" />
                  <span className="text-sm text-gray-500 mb-1">Görüş</span>
                  <span className="font-semibold text-[#1A1A2E]">{weather.visibility} km</span>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="flex items-start space-x-3 text-sm text-gray-500 bg-gray-50 p-4 rounded-lg">
                <Info className="w-5 h-5 flex-shrink-0 text-gray-400 mt-0.5" />
                <p>
                  Bu bilgiler yalnızca genel hava koşullarını gösterir. Nihai uçuş kararı yetkili pilot tarafından rüzgar, türbülans ve diğer lokal faktörler değerlendirilerek verilir.
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
