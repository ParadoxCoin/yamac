import { Map, Sun, ShieldCheck, Award, MessageCircle, Camera, Plane, Heart } from 'lucide-react';

const ICONS = [Map, Sun, Plane, Award, ShieldCheck, Camera, MessageCircle, Heart];

const translations = {
  tr: {
    badge: 'Neden Biz?',
    title: 'Neden Bizi Tercih Etmelisiniz?',
    sub: "Antalya'da güvenli, keyifli ve unutulmaz bir uçuş deneyimi yaşamanız için çalışıyoruz.",
    reasons: [
      { title: 'Merkezi Konum', desc: 'Antalya şehir merkezinde, kolay ulaşılabilir kalkış ve iniş noktası.' },
      { title: 'Falezler Manzarası', desc: 'Tarihi Varyant, falezler ve sonsuz Akdeniz maviliğini havadan izleme fırsatı.' },
      { title: 'Tandem Uçuş', desc: 'Sıfır deneyimle, uzman pilotumuz eşliğinde güvenli ikili uçuş keyfi.' },
      { title: 'Profesyonel Ekip', desc: 'THK ve FAI lisanslı, binlerce saat uçuş tecrübesine sahip yetkili pilot.' },
      { title: 'Kapsamlı Bilgilendirme', desc: 'Uçuş öncesi adım adım bilgilendirme ile stresi azaltan hazırlık süreci.' },
      { title: 'Aksiyon Kamera', desc: 'Havada geçen her saniyenizi yüksek çözünürlüklü video ve fotoğrafla ölümsüzleştirin.' },
      { title: 'Hızlı İletişim', desc: 'WhatsApp üzerinden kolay randevu, iptal/erteleme ve anında destek.' },
      { title: 'Gerçek Deneyimler', desc: 'Yüzlerce mutlu misafirimizin yorumları ve tavsiyeleriyle kanıtlanmış kalite.' },
    ],
  },
  en: {
    badge: 'Why Choose Us?',
    title: 'Why Choose Us for Paragliding?',
    sub: 'We work hard to give you a safe, joyful, and unforgettable paragliding experience in Antalya.',
    reasons: [
      { title: 'Central Location', desc: 'Easy-to-reach takeoff and landing spot right in the heart of Antalya.' },
      { title: 'Falezler View', desc: 'A bird\'s-eye view of the historic Varyant, the cliffs, and the endless Mediterranean blue.' },
      { title: 'Tandem Flight', desc: 'No experience needed — just fly safely alongside our expert pilot.' },
      { title: 'Professional Team', desc: 'THSF and FAI licensed pilot with thousands of hours of flight experience.' },
      { title: 'Full Pre-flight Info', desc: 'Step-by-step briefing before flight to ease your nerves and prepare you fully.' },
      { title: 'Action Camera', desc: 'Every second in the sky immortalized in HD photos and 4K video included in price.' },
      { title: 'Fast Communication', desc: 'Easy booking, cancellation/rescheduling, and instant support via WhatsApp.' },
      { title: 'Real Reviews', desc: 'Proven quality — backed by hundreds of happy guests\' reviews and testimonials.' },
    ],
  },
  ru: {
    badge: 'Почему мы?',
    title: 'Почему выбирают нас?',
    sub: 'Мы делаем всё для вашего безопасного, радостного и незабываемого полёта на параплане в Анталии.',
    reasons: [
      { title: 'Центральное расположение', desc: 'Легкодоступная площадка для взлёта и посадки в самом центре Анталии.' },
      { title: 'Вид на Фалезлер', desc: 'Захватывающий вид с высоты птичьего полёта на скалы и Средиземное море.' },
      { title: 'Тандем-полёт', desc: 'Опыт не нужен — летите уверенно рядом с опытным пилотом.' },
      { title: 'Профессиональная команда', desc: 'Пилот с лицензией THSF и FAI, тысячи часов налёта.' },
      { title: 'Полный инструктаж', desc: 'Пошаговый брифинг перед вылетом — спокойствие и уверенность.' },
      { title: 'Экшн-камера', desc: 'Каждая секунда в небе — HD-фото и видео 4K включены в цену.' },
      { title: 'Быстрая связь', desc: 'Лёгкое бронирование, отмена/перенос и поддержка в WhatsApp.' },
      { title: 'Реальные отзывы', desc: 'Сотни довольных гостей и заслуженная репутация — говорят сами за себя.' },
    ],
  },
  ar: {
    badge: 'لماذا نحن؟',
    title: 'لماذا تختار خدماتنا؟',
    sub: 'نعمل بجد لمنحك تجربة طيران شراعي آمنة وممتعة ولا تُنسى في أنطاليا.',
    reasons: [
      { title: 'موقع مركزي', desc: 'نقطة إقلاع وهبوط سهلة الوصول في قلب أنطاليا.' },
      { title: 'منظر الجروف', desc: 'منظر بانورامي خلاّب على جروف فاريانت التاريخية والبحر الأبيض المتوسط.' },
      { title: 'طيران تانديم', desc: 'لا تجربة مطلوبة — اطِر بأمان مع كابتنك المحترف.' },
      { title: 'فريق احترافي', desc: 'كابتن حاصل على رخصة THSF وFAI مع آلاف ساعات الطيران.' },
      { title: 'إيجاز شامل قبل الرحلة', desc: 'تعليمات خطوة بخطوة قبل الإقلاع لراحتك وثقتك.' },
      { title: 'كاميرا أكشن', desc: 'كل ثانية في السماء خالدة بصور HD وفيديو 4K مشمولة بالسعر.' },
      { title: 'تواصل سريع', desc: 'حجز سهل وإلغاء/تأجيل ودعم فوري عبر الواتساب.' },
      { title: 'آراء حقيقية', desc: 'جودة مثبتة — مئات الضيوف السعداء وتقييماتهم الإيجابية.' },
    ],
  },
};

export default function WhyUs({ locale }: { locale?: string; dict?: any }) {
  const currentLocale = (locale || 'tr') as keyof typeof translations;
  const t = translations[currentLocale] || translations.tr;

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#4A9FD9] text-sm font-semibold tracking-wider uppercase mb-2 block">{t.badge}</span>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">{t.title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{t.sub}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {t.reasons.map((reason, index) => {
            const Icon = ICONS[index];
            return (
              <div key={index} className="bg-[#FAFBFC] p-6 rounded-2xl border border-gray-100 hover:border-[#4A9FD9]/30 hover:shadow-lg transition-all duration-300 group">
                <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-[#4A9FD9]" />
                </div>
                <h3 className="font-semibold text-lg text-[#1A1A2E] mb-3 group-hover:text-[#4A9FD9] transition-colors">{reason.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{reason.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
