import { Check, MessageCircle, Phone, Camera, Sparkles } from 'lucide-react';
import { siteConfig } from '@/lib/config/site';

const translations = {
  tr: {
    badge: 'Şeffaf Hizmet İçeriği',
    title: 'Uçuş Fiyatları & Paket İçeriği',
    subtitle: 'Antalya Varyant ve Falezler üzerindeki uçuşlarımız aksiyon kamerası fotoğraf ve 4K video çekimleri dahil paket olarak sunulmaktadır.',
    packageName: 'Tandem Uçuş Paketi',
    packageSub: 'Antalya Varyant Seyir Terası - Konyaaltı Plajı Güzergahı',
    priceLabel: 'Güncel Sezon Fiyatı İçin Arayınız',
    priceNote: 'Sezon ve rüzgar şartlarına göre güncel fiyat bilgisi için WhatsApp veya telefon üzerinden anında bilgi alabilirsiniz.',
    mediaIncluded: 'Fotoğraf ve 4K Video Çekimi Paket Ücretine DAHİLDİR',
    b1: 'Pilot: 23 Yıllık Deneyimli THSF/FAI Sertifikalı Mehmet Bayraktar',
    b2: 'Katılım: 5 Yaşından 90 Yaşına Kadar Herkes Uçabilir',
    b3: 'Kilo Limiti: 100 kg (Rüzgar durumuna göre 105 kg\'a kadar)',
    b4: 'Uçuş Süresi: Ortalama 15-20 Dakika Havada Kalış',
    b5: 'İniş Noktası: Hava durumuna göre Kalkış Alanına veya Plaja İniş',
    tip: 'İpucu: Fotoğraflarda gözlerin kısık çıkmaması için güneş gözlüğü önerilir',
    btnWp: 'WhatsApp ile Fiyat Al & Rezervasyon',
    btnCall: 'Hemen Ara',
  },
  en: {
    badge: 'Transparent Package Details',
    title: 'Flight Prices & Package Details',
    subtitle: 'All flights include professional action camera photos and 4K video footage taken during your flight.',
    packageName: 'Tandem Paragliding Package',
    packageSub: 'Antalya Varyant Viewpoint → Konyaaltı Beach Route',
    priceLabel: 'Contact for Current Season Price',
    priceNote: 'Get instant pricing information via WhatsApp or phone. Prices may vary by season and wind conditions.',
    mediaIncluded: 'HD Photos & 4K Video INCLUDED in Package Price',
    b1: 'Pilot: 23-Year THSF/FAI Certified Commercial Pilot Mehmet Bayraktar',
    b2: 'Open to All Ages: 5 to 90 years old (no prior training needed)',
    b3: 'Weight Limit: 100 kg (up to 105 kg when wind permits)',
    b4: 'Flight Duration: Average 15–20 minutes in the air',
    b5: 'Landing: At takeoff terrace or Konyaaltı Beach (weather-dependent)',
    tip: 'Tip: Sunglasses are recommended so your eyes stay open in the photos!',
    btnWp: 'Get Price & Book via WhatsApp',
    btnCall: 'Call Now',
  },
  ru: {
    badge: 'Прозрачное содержание пакета',
    title: 'Цены на полёт и пакеты',
    subtitle: 'Все полёты включают профессиональную фотосъёмку и видео 4K во время вашего полёта.',
    packageName: 'Тандем-полёт на параплане',
    packageSub: 'Смотровая площадка Вариант — пляж Коньяалты',
    priceLabel: 'Уточняйте актуальную цену',
    priceNote: 'Актуальные цены можно узнать мгновенно через WhatsApp или телефон. Цены зависят от сезона и погодных условий.',
    mediaIncluded: 'Фото и видео 4K ВКЛЮЧЕНЫ в стоимость пакета',
    b1: 'Пилот: Мехмет Байрактар — 23 года опыта, лицензия THSF/FAI',
    b2: 'Возраст: от 5 до 90 лет (предварительная подготовка не нужна)',
    b3: 'Максимальный вес: 100 кг (до 105 кг при подходящем ветре)',
    b4: 'Продолжительность полёта: в среднем 15–20 минут',
    b5: 'Посадка: на площадку или пляж Коньяалты (зависит от ветра)',
    tip: 'Совет: наденьте солнцезащитные очки — ваши глаза будут красиво смотреться на фото!',
    btnWp: 'Узнать цену и забронировать в WhatsApp',
    btnCall: 'Позвонить',
  },
  ar: {
    badge: 'تفاصيل الباقة الشفافة',
    title: 'أسعار الطيران وتفاصيل الباقة',
    subtitle: 'جميع الرحلات تشمل تصوير احترافي بكاميرا أكشن وتسجيل فيديو 4K طوال رحلتك.',
    packageName: 'باقة الطيران الشراعي التانديم',
    packageSub: 'منصة فاريانت البانورامية ← شاطئ كونيالتي',
    priceLabel: 'تواصل معنا لمعرفة السعر الحالي',
    priceNote: 'احصل على معلومات الأسعار الفورية عبر الواتساب أو الهاتف. قد تتغير الأسعار حسب الموسم وحالة الرياح.',
    mediaIncluded: 'الصور وفيديو 4K مشمولان في سعر الباقة',
    b1: 'الكابتن: محمد بيرقدار — 23 عاماً خبرة، رخصة THSF/FAI',
    b2: 'الأعمار: من 5 إلى 90 سنة (لا تدريب مسبق مطلوب)',
    b3: 'الحد الأقصى للوزن: 100 كجم (حتى 105 كجم عند ملاءمة الرياح)',
    b4: 'مدة الرحلة: 15 إلى 20 دقيقة في المتوسط',
    b5: 'الهبوط: في المنصة أو شاطئ كونيالتي (يعتمد على الطقس)',
    tip: 'نصيحة: الجمارات الشمسية مستحسنة لتبدو أعينكم جميلة في الصور!',
    btnWp: 'احصل على السعر واحجز عبر الواتساب',
    btnCall: 'اتصل الآن',
  },
};

export default function Pricing({ locale }: { locale?: string; dict?: any }) {
  const currentLocale = locale || 'tr';
  const t = translations[currentLocale as keyof typeof translations] || translations.tr;

  const wpMessage = currentLocale === 'en'
    ? `Hello, I would like to book tandem paragliding in Antalya.\n\nFull Name:\nNumber of People:\nPreferred Date:\nPreferred Time:\nApproximate Weight:\nAccommodation Area:\n\nI would like information about flight conditions and availability.`
    : currentLocale === 'ru'
    ? `Здравствуйте, я хочу забронировать полет на параплане в Анталии.\n\nИмя и Фамилия:\nКоличество человек:\nЖелаемая дата:\nЖелаемое время:\nВес (кг):\nОтель / Район:\n\nХочу узнать подробности и наличие свободных мест.`
    : currentLocale === 'ar'
    ? `مرحباً، أود حجز رحلة طيران شراعي في أنطاليا.\n\nالاسم الكامل:\nعدد الأشخاص:\nالتاريخ المفضل:\nالوقت المفضل:\nالوزن التقريبي:\nمنطقة الإقامة:\n\nأود الحصول على معلومات حول الرحلة والمواعيد المتاحة.`
    : `Merhaba, Antalya Varyant'ta yamaç paraşütü yapmak istiyorum.\n\nAd Soyad:\nKişi Sayısı:\nTercih Edilen Tarih:\nTercih Edilen Saat:\nYaklaşık Kilo:\nKonaklama Bölgesi:\n\nUçuş koşulları ve uygunluk hakkında bilgi almak istiyorum.`;

  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(wpMessage)}`;

  return (
    <section id="pricing" className="py-20 bg-[#FAFBFC]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[#4A9FD9] text-sm font-semibold tracking-wider uppercase mb-2 block">
            {t.badge}
          </span>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold text-[#0B1D3A] mb-4">
            {t.title}
          </h2>
          <p className="text-gray-600 text-base md:text-lg">{t.subtitle}</p>
        </div>

        <div className="max-w-xl mx-auto bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-200 relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-[#25D366] text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl uppercase tracking-wider">
            {t.mediaIncluded.split(' ').slice(0, 2).join(' ')} ✓
          </div>

          <div className="text-center mb-8 border-b border-gray-100 pb-6">
            <h3 className="text-2xl font-bold text-[#0B1D3A] mb-2">{t.packageName}</h3>
            <p className="text-sm text-gray-500 mb-3">{t.packageSub}</p>
            <div className="text-xl md:text-2xl font-extrabold text-[#4A9FD9] my-3">
              {t.priceLabel}
            </div>
            <p className="text-xs text-gray-500">{t.priceNote}</p>
          </div>

          <ul className="space-y-4 mb-8">
            <li className="flex items-center gap-3 text-sm text-gray-800 font-bold bg-green-50 p-3 rounded-xl border border-green-100">
              <Camera className="w-5 h-5 text-[#25D366] flex-shrink-0" />
              <span>{t.mediaIncluded}</span>
            </li>
            {[t.b1, t.b2, t.b3, t.b4, t.b5].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-sm text-gray-700">
                <Check className="w-5 h-5 text-[#25D366] flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
            <li className="flex items-center gap-3 text-sm text-gray-700">
              <Sparkles className="w-5 h-5 text-[#D4A96A] flex-shrink-0" />
              <span>{t.tip}</span>
            </li>
          </ul>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#25D366] hover:bg-[#1da851] text-white font-bold rounded-2xl transition-all shadow-lg text-sm"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              {t.btnWp}
            </a>
            <a
              href={`tel:${siteConfig.phone.replace(/[^0-9]/g, '')}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#0B1D3A] hover:bg-[#122B5C] text-white font-bold rounded-2xl transition-colors text-sm"
            >
              <Phone className="w-5 h-5" />
              {t.btnCall}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
