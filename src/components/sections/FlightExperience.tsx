import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';

const translations = {
  tr: {
    badge: 'Özel Bir Deneyim',
    title1: 'Antalya Falezler Üzerinde',
    titleHL: 'Kusursuz Uçuş',
    p1: 'Şehrin gürültüsünden uzaklaşarak, efsanevi Antalya Falezleri üzerinden Akdeniz\'in sonsuz maviliğine doğru süzülün. Varyant ahşap seyir terasından başlayan bu serüven, size şehrin en güzel manzarasını kuş bakışı sunuyor.',
    p2: 'Konyaaltı plajının eşsiz kıyı şeridini, Beydağları\'nın ihtişamını ve denizin turkuaz tonlarını havadan izlerken, 23 yıllık tecrübeli THSF/FAI sertifikalı tandem pilotumuz Mehmet Bayraktar eşliğinde kendinizi güvende hissedeceksiniz.',
    bullets: [
      '5 yaşından 90 yaşına kadar herkes uçabilir',
      'Konyaaltı Varyant ahşap seyir terasından kolay kalkış',
      'Hava durumuna göre kalkış alanına veya plaja iniş',
      'Fotoğraf ve 4K Video Çekimi Dahil',
      'Üst kilo limiti 100 kg (Uygun rüzgarda 105 kg)',
    ],
    cta: 'Fiyat ve Paket Detayları',
    avg: 'Ortalama',
    flightTime: 'Uçuş Süresi (15-20 dk)',
  },
  en: {
    badge: 'Unique Experience',
    title1: 'Unforgettable Flight Over',
    titleHL: 'Antalya Cliffs',
    p1: 'Escape the city noise and soar smoothly over the famous Antalya Falezler cliffs towards the endless blue of the Mediterranean. Starting from the Varyant wooden viewpoint terrace, experience the most breathtaking aerial views of the city.',
    p2: 'Safely flown by 23-year experienced commercial THSF/FAI certified tandem pilot Mehmet Bayraktar, with over 10,000 successful tandem flights to his name.',
    bullets: [
      'Open to all ages 5 to 90 years old',
      'Easy takeoff from Varyant wooden viewpoint terrace',
      'Landing at takeoff spot or Konyaaltı Beach (wind-dependent)',
      'Professional HD photos and 4K video included',
      'Weight limit: 100 kg (up to 105 kg when wind permits)',
    ],
    cta: 'Pricing & Package Details',
    avg: 'Average',
    flightTime: 'Flight Duration (15-20 min)',
  },
  ru: {
    badge: 'Уникальный Опыт',
    title1: 'Незабываемый Полет над',
    titleHL: 'Скалами Анталии',
    p1: 'Взлетите с деревянной смотровой площадки Вариант и плавно парите над знаменитыми скалами Фалезлер над Средиземным морем. Птичий взгляд на Анталию, который вы запомните навсегда.',
    p2: 'Полет в полной безопасности с сертифицированным тандем-пилотом Мехметом Байрактаром (23 года опыта, более 10 000 полетов, лицензия THSF & FAI T2).',
    bullets: [
      'Подходит для детей от 5 лет и взрослых до 90 лет',
      'Удобный взлет с деревянной площадки Вариант',
      'Посадка на площадку или пляж Коньяалты (зависит от ветра)',
      'Профессиональные фото и видео 4K включены',
      'Максимальный вес: 100 кг (до 105 кг при подходящем ветре)',
    ],
    cta: 'Цены и пакеты',
    avg: 'В среднем',
    flightTime: 'Время полёта (15-20 мин)',
  },
  ar: {
    badge: 'تجربة فريدة من نوعها',
    title1: 'رحلة لا تُنسى فوق',
    titleHL: 'جروف أنطاليا',
    p1: 'انطلق من منصة الإقلاع الخشبية في فاريانت وحلق بسلاسة فوق جروف فالزلر الشهيرة المطلة على البحر الأبيض المتوسط. منظر طائر على أنطاليا لن تنساه أبداً.',
    p2: 'رحلة آمنة تماماً مع الكابتن المحترف محمد بيرقدار، 23 عاماً من الخبرة وأكثر من 10,000 رحلة ناجحة، حاصل على رخصة THSF & FAI T2 الدولية.',
    bullets: [
      'مناسب للأعمار من 5 إلى 90 سنة',
      'إقلاع سهل من منصة فاريانت الخشبية',
      'الهبوط في المنصة أو شاطئ كونيالتي (حسب الرياح)',
      'صور احترافية وفيديو 4K مشمولة بالسعر',
      'الحد الأقصى للوزن: 100 كجم (حتى 105 كجم عند مناسبة الرياح)',
    ],
    cta: 'الأسعار والباقات',
    avg: 'متوسط',
    flightTime: 'مدة الرحلة (15-20 دقيقة)',
  },
};

export default function FlightExperience({ locale }: { locale?: string; dict?: any }) {
  const currentLocale = locale || 'tr';
  const t = translations[currentLocale as keyof typeof translations] || translations.tr;

  return (
    <section id="experience" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Text Content */}
          <div className="lg:w-1/2 space-y-6">
            <div className="inline-block px-4 py-1.5 bg-[#4A9FD9]/10 rounded-full text-[#4A9FD9] font-semibold text-sm mb-2">
              {t.badge}
            </div>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B1D3A] leading-tight">
              {t.title1} <span className="text-[#D4A96A]">{t.titleHL}</span>
            </h2>

            <div className="prose prose-lg text-gray-600 space-y-3">
              <p>{t.p1}</p>
              <p>{t.p2}</p>
            </div>

            <ul className="space-y-3 pt-2">
              {t.bullets.map((item, i) => (
                <li key={i} className="flex items-start space-x-3 text-gray-700 font-medium">
                  <div className="w-5 h-5 rounded-full bg-[#22C55E]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-[#22C55E]" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <Link
                href={`/${currentLocale}#pricing`}
                className="inline-flex items-center space-x-2 text-[#0B1D3A] font-bold hover:text-[#4A9FD9] transition-colors group"
              >
                <span>{t.cta}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-[#4A9FD9]" />
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="lg:w-1/2 w-full">
            <div className="relative">
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#D4A96A]/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-[#4A9FD9]/20 rounded-full blur-3xl"></div>

              <div className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                <Image
                  src="/images/gallery/antalya-falezler-varyant-tandem.jpg"
                  alt="Antalya Varyant Falezler üzerinde tandem yamaç paraşütü deneyimi"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>

              <div className="absolute -left-4 md:-left-8 bottom-8 bg-white p-4 md:p-5 rounded-2xl shadow-xl flex items-center space-x-4 border border-gray-100 animate-bounce" style={{ animationDuration: '4s' }}>
                <div className="w-12 h-12 rounded-full bg-[#0B1D3A] flex items-center justify-center flex-shrink-0">
                  <span className="text-[#4A9FD9] font-bold text-lg">15m</span>
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">{t.avg}</p>
                  <p className="text-[#0B1D3A] font-bold text-sm">{t.flightTime}</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
