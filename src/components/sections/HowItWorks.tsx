import { CalendarCheck, CloudSun, MapPin, Users, Settings, PlaneTakeoff, Bird, PlaneLanding, Camera } from 'lucide-react';

const stepsData = {
  tr: [
    { id: '01', title: 'Randevu Talebi', desc: 'WhatsApp üzerinden kolayca gün ve saat belirleyin.' },
    { id: '02', title: 'Hava Koşullarının Kontrolü', desc: 'Uçuşa uygunluk için meteorolojik verileri inceleriz.' },
    { id: '03', title: 'Uçuş Noktasında Buluşma', desc: 'Varyant kalkış pistinde ekibimizle bir araya gelin.' },
    { id: '04', title: 'Pilot Bilgilendirmesi', desc: 'Deneyimli pilotumuzdan kısa bir uçuş brifingi alın.' },
    { id: '05', title: 'Ekipman Hazırlığı', desc: 'Kuşam (harness) ve kaskınız profesyonelce kuşanılır.' },
    { id: '06', title: 'Kalkış', desc: 'Sadece birkaç adım atarak gökyüzüyle buluşun.' },
    { id: '07', title: 'Akdeniz Üzerinde Uçuş', desc: 'Falezler ve denizin eşsiz manzarasının tadını çıkarın.' },
    { id: '08', title: 'İniş', desc: 'Konyaaltı sahiline yumuşak ve güvenli bir iniş yapın.' },
    { id: '09', title: 'Medya Teslimi', desc: 'Uçuş boyunca çekilen aksiyon kamera kayıtlarınızı alın.' },
  ],
  en: [
    { id: '01', title: 'Book Your Slot', desc: 'Easily pick a date and time via WhatsApp.' },
    { id: '02', title: 'Weather Check', desc: 'We review meteorological data to confirm flight conditions.' },
    { id: '03', title: 'Meet at the Launch Site', desc: 'Meet our team at the Varyant takeoff platform.' },
    { id: '04', title: 'Pilot Briefing', desc: 'Get a short pre-flight briefing from your experienced pilot.' },
    { id: '05', title: 'Equipment Fitting', desc: 'Your harness and helmet are professionally fitted.' },
    { id: '06', title: 'Takeoff', desc: 'Just a few steps and you\'re soaring into the sky.' },
    { id: '07', title: 'Flight over the Mediterranean', desc: 'Enjoy the breathtaking views of Falezler cliffs and the sea.' },
    { id: '08', title: 'Landing', desc: 'Smooth and safe landing at Konyaaltı beach or takeoff spot.' },
    { id: '09', title: 'Receive Your Media', desc: 'Get your HD photos and 4K video recorded during the flight.' },
  ],
  ru: [
    { id: '01', title: 'Бронирование', desc: 'Выберите дату и время через WhatsApp — быстро и просто.' },
    { id: '02', title: 'Проверка погоды', desc: 'Анализируем метеоданные для подтверждения условий полёта.' },
    { id: '03', title: 'Встреча на старте', desc: 'Встречаемся с командой на площадке Вариант.' },
    { id: '04', title: 'Инструктаж пилота', desc: 'Получите краткий брифинг от опытного пилота.' },
    { id: '05', title: 'Подготовка снаряжения', desc: 'Профессиональная подгонка подвески и шлема.' },
    { id: '06', title: 'Взлёт', desc: 'Несколько шагов — и вы уже в небе!' },
    { id: '07', title: 'Полёт над Средиземным морем', desc: 'Наслаждайтесь захватывающими видами скал и моря.' },
    { id: '08', title: 'Посадка', desc: 'Мягкая и безопасная посадка на пляж Коньяалты или площадку.' },
    { id: '09', title: 'Получение медиафайлов', desc: 'Забирайте свои фото и видео 4K, снятые во время полёта.' },
  ],
  ar: [
    { id: '01', title: 'الحجز', desc: 'اختر التاريخ والوقت بسهولة عبر الواتساب.' },
    { id: '02', title: 'فحص الطقس', desc: 'نراجع البيانات الجوية للتأكد من ملاءمة ظروف الطيران.' },
    { id: '03', title: 'اللقاء في موقع الإقلاع', desc: 'قابل فريقنا عند منصة فاريانت.' },
    { id: '04', title: 'التوجيهات من الكابتن', desc: 'احصل على تعليمات سريعة قبل الإقلاع من كابتنك المحترف.' },
    { id: '05', title: 'تجهيز المعدات', desc: 'تثبيت المقعد والخوذة بشكل احترافي.' },
    { id: '06', title: 'الإقلاع', desc: 'بضع خطوات وستكون في عنان السماء!' },
    { id: '07', title: 'الطيران فوق المتوسط', desc: 'استمتع بمناظر الجروف والبحر الخلاّبة.' },
    { id: '08', title: 'الهبوط', desc: 'هبوط ناعم وآمن على شاطئ كونيالتي أو منصة الإقلاع.' },
    { id: '09', title: 'استلام الصور والفيديو', desc: 'خذ صورك وفيديو 4K المصوَّر خلال رحلتك.' },
  ],
};

const headings = {
  tr: { title: 'Uçuş Deneyimi Nasıl Gerçekleşiyor?', sub: 'İlk iletişimden inişe kadar her adımda profesyonel ekibimiz yanınızda.' },
  en: { title: 'How Does the Flight Experience Work?', sub: 'Our professional team is with you every step of the way — from first contact to landing.' },
  ru: { title: 'Как проходит полёт?', sub: 'Наша профессиональная команда будет рядом с вами от первого контакта до посадки.' },
  ar: { title: 'كيف تسير تجربة الطيران؟', sub: 'فريقنا المحترف بجانبك في كل خطوة — من الاتصال الأول حتى الهبوط.' },
};

const ICONS = [CalendarCheck, CloudSun, MapPin, Users, Settings, PlaneTakeoff, Bird, PlaneLanding, Camera];

export default function HowItWorks({ locale }: { locale?: string; dict?: any }) {
  const currentLocale = (locale || 'tr') as keyof typeof stepsData;
  const steps = stepsData[currentLocale] || stepsData.tr;
  const h = headings[currentLocale] || headings.tr;

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">{h.title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{h.sub}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          <div className="hidden lg:block absolute top-12 left-20 right-20 h-0.5 bg-gray-100 -z-10" />
          <div className="hidden lg:block absolute top-[19rem] left-20 right-20 h-0.5 bg-gray-100 -z-10" />
          <div className="hidden lg:block absolute top-[36rem] left-20 right-20 h-0.5 bg-gray-100 -z-10" />

          {steps.map((step, index) => {
            const Icon = ICONS[index];
            return (
              <div key={step.id} className="flex flex-col items-center text-center p-6 bg-[#FAFBFC] rounded-2xl hover:shadow-md transition-shadow group border border-gray-50">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-[#4A9FD9] text-xl font-bold shadow-sm mb-6 group-hover:scale-110 transition-transform relative">
                  <Icon className="w-6 h-6 absolute opacity-20" />
                  <span className="relative z-10 font-[family-name:var(--font-heading)]">{step.id}</span>
                </div>
                <h3 className="font-semibold text-lg text-[#1A1A2E] mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
