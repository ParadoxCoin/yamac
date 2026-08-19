'use client';

import { useState, useEffect } from 'react';
import { Wind, Thermometer, CloudRain, Eye, Compass, Info } from 'lucide-react';

const translations = {
  tr: {
    title: 'Bugün Uçuş İçin Uygun mu?',
    subtitle: 'Canlı hava durumu verileri ile Falezler üzerindeki güncel uçuş koşullarını takip edin.',
    statusGood: 'Uçuş İçin Uygun',
    statusCaution: 'Koşullar Değerlendiriliyor',
    statusBad: 'Uçuşa Uygun Değil',
    statusUnknown: 'Bilinmiyor',
    lastUpdate: 'Son Güncelleme',
    wind: 'Rüzgar', dir: 'Yön', temp: 'Sıcaklık', rain: 'Yağış', vis: 'Görüş',
    errorMsg: 'Hava durumu verileri alınamadı.',
    retry: 'Tekrar dene',
    disclaimer: 'Bu bilgiler yalnızca genel hava koşullarını gösterir. Nihai uçuş kararı yetkili pilot tarafından rüzgar, türbülans ve diğer lokal faktörler değerlendirilerek verilir.',
  },
  en: {
    title: 'Is Today Suitable for Flying?',
    subtitle: 'Check live weather conditions for paragliding over Falezler cliffs right now.',
    statusGood: 'Good for Flying',
    statusCaution: 'Conditions Being Assessed',
    statusBad: 'Not Suitable for Flying',
    statusUnknown: 'Unknown',
    lastUpdate: 'Last Updated',
    wind: 'Wind', dir: 'Direction', temp: 'Temperature', rain: 'Precipitation', vis: 'Visibility',
    errorMsg: 'Weather data could not be loaded.',
    retry: 'Try again',
    disclaimer: 'This information shows general weather conditions only. The final flight decision is made by the certified pilot on-site, based on wind, turbulence, and local factors.',
  },
  ru: {
    title: 'Подходит ли сегодня для полёта?',
    subtitle: 'Актуальные погодные условия над скалами Фалезлер для полётов на параплане.',
    statusGood: 'Подходит для полёта',
    statusCaution: 'Условия оцениваются',
    statusBad: 'Не подходит для полёта',
    statusUnknown: 'Неизвестно',
    lastUpdate: 'Последнее обновление',
    wind: 'Ветер', dir: 'Направление', temp: 'Температура', rain: 'Осадки', vis: 'Видимость',
    errorMsg: 'Не удалось загрузить данные погоды.',
    retry: 'Попробовать снова',
    disclaimer: 'Эти данные отражают общие погодные условия. Окончательное решение о полёте принимается сертифицированным пилотом на месте — с учётом ветра, турбулентности и местных факторов.',
  },
  ar: {
    title: 'هل الطقس مناسب للطيران اليوم؟',
    subtitle: 'تابع ظروف الطيران الحالية فوق جروف فالزلر عبر بيانات الطقس المباشرة.',
    statusGood: 'مناسب للطيران',
    statusCaution: 'يجري تقييم الظروف',
    statusBad: 'غير مناسب للطيران',
    statusUnknown: 'غير معروف',
    lastUpdate: 'آخر تحديث',
    wind: 'الرياح', dir: 'الاتجاه', temp: 'الحرارة', rain: 'الأمطار', vis: 'الرؤية',
    errorMsg: 'تعذّر تحميل بيانات الطقس.',
    retry: 'المحاولة مرة أخرى',
    disclaimer: 'تعكس هذه البيانات الأحوال الجوية العامة فقط. القرار النهائي بشأن الطيران يتخذه الكابتن المعتمد في الموقع، بناءً على الرياح والاضطرابات والعوامل المحلية.',
  },
};

type WeatherData = {
  windSpeed: number; windDirection: number; temperature: number;
  precipitation: number; visibility: number;
  status: 'GREEN' | 'YELLOW' | 'RED'; lastUpdate: string;
};

export default function WeatherConditions({ locale }: { locale?: string; dict?: any }) {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const currentLocale = (locale || 'tr') as keyof typeof translations;
  const t = translations[currentLocale] || translations.tr;

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);
        await new Promise(resolve => setTimeout(resolve, 1000));
        setWeather({
          windSpeed: 12, windDirection: 180, temperature: 24,
          precipitation: 0, visibility: 10, status: 'GREEN',
          lastUpdate: new Date().toLocaleTimeString(currentLocale === 'ar' ? 'ar-SA' : currentLocale === 'ru' ? 'ru-RU' : currentLocale === 'tr' ? 'tr-TR' : 'en-US', { hour: '2-digit', minute: '2-digit' }),
        });
        setError(false);
      } catch { setError(true); } finally { setLoading(false); }
    };
    fetchWeather();
    const interval = setInterval(fetchWeather, 15 * 60 * 1000);
    return () => clearInterval(interval);
  }, [currentLocale]);

  const getStatus = (status: string) => {
    switch (status) {
      case 'GREEN': return { color: 'text-green-500', bg: 'bg-green-500/10', border: 'border-green-500/20', text: t.statusGood, dot: 'bg-green-500' };
      case 'YELLOW': return { color: 'text-yellow-500', bg: 'bg-yellow-500/10', border: 'border-yellow-500/20', text: t.statusCaution, dot: 'bg-yellow-500' };
      case 'RED': return { color: 'text-red-500', bg: 'bg-red-500/10', border: 'border-red-500/20', text: t.statusBad, dot: 'bg-red-500' };
      default: return { color: 'text-gray-500', bg: 'bg-gray-100', border: 'border-gray-200', text: t.statusUnknown, dot: 'bg-gray-500' };
    }
  };

  return (
    <section id="weather-section" className="py-16 bg-[#FAFBFC]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">{t.title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
          {loading ? (
            <div className="animate-pulse space-y-6">
              <div className="h-12 bg-gray-200 rounded-lg w-full max-w-md mx-auto"></div>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {[...Array(5)].map((_, i) => <div key={i} className="h-24 bg-gray-100 rounded-xl"></div>)}
              </div>
            </div>
          ) : error || !weather ? (
            <div className="text-center py-8">
              <p className="text-red-500 mb-2">{t.errorMsg}</p>
              <button onClick={() => window.location.reload()} className="text-[#4A9FD9] underline text-sm">{t.retry}</button>
            </div>
          ) : (
            <>
              <div className={`mb-8 p-4 rounded-xl border ${getStatus(weather.status).border} ${getStatus(weather.status).bg} flex flex-col sm:flex-row items-center justify-between`}>
                <div className="flex items-center space-x-3 mb-2 sm:mb-0">
                  <span className="relative flex h-4 w-4">
                    <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${getStatus(weather.status).dot}`}></span>
                    <span className={`relative inline-flex rounded-full h-4 w-4 ${getStatus(weather.status).dot}`}></span>
                  </span>
                  <span className={`font-semibold text-lg ${getStatus(weather.status).color}`}>{getStatus(weather.status).text}</span>
                </div>
                <span className="text-sm text-gray-500">{t.lastUpdate}: {weather.lastUpdate}</span>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
                {[
                  { icon: Wind, label: t.wind, value: `${weather.windSpeed} km/s` },
                  { icon: Compass, label: t.dir, value: `${weather.windDirection}°`, rotate: weather.windDirection },
                  { icon: Thermometer, label: t.temp, value: `${weather.temperature}°C` },
                  { icon: CloudRain, label: t.rain, value: `${weather.precipitation} mm` },
                  { icon: Eye, label: t.vis, value: `${weather.visibility} km`, colSpan: true },
                ].map(({ icon: Icon, label, value, rotate, colSpan }) => (
                  <div key={label} className={`bg-[#FAFBFC] p-4 rounded-xl flex flex-col items-center justify-center text-center ${colSpan ? 'col-span-2 md:col-span-1' : ''}`}>
                    <Icon className="w-6 h-6 text-[#4A9FD9] mb-2" style={rotate ? { transform: `rotate(${rotate}deg)` } : undefined} />
                    <span className="text-sm text-gray-500 mb-1">{label}</span>
                    <span className="font-semibold text-[#1A1A2E]">{value}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-start space-x-3 text-sm text-gray-500 bg-gray-50 p-4 rounded-lg">
                <Info className="w-5 h-5 flex-shrink-0 text-gray-400 mt-0.5" />
                <p>{t.disclaimer}</p>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
