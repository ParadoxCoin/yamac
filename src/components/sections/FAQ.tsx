'use client';

import { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { siteConfig } from '@/lib/config/site';

const faqData = {
  tr: [
    { q: 'Kaç yaşından itibaren yamaç paraşütü yapılabilir?', a: '5 yaşından 90 yaşına kadar sağlıklı olan herkes tandem yamaç paraşütü yapabilir. Herhangi bir eğitim veya ön tecrübe gerektirmez.' },
    { q: 'Kilo sınırı (üst kilo limiti) nedir?', a: 'Standart üst kilo limiti 100 kg\'dır. Rüzgar koşulları elverdiğinde pilot değerlendirmesiyle 105 kg\'a kadar yolcu kabul edilebilmektedir.' },
    { q: 'Uçuş sonrası nereye iniş yapılıyor?', a: 'Hava durumuna göre ya kalkış yaptığımız Konyaaltı Varyant Seyir Terası alanına ya da Konyaaltı Plajı\'na iniş gerçekleştirilir.' },
    { q: 'Fotoğraf ve video çekimi paket fiyatına dahil mi?', a: 'Evet! Profesyonel aksiyon kamerası ile çekilen fotoğraf ve 4K video kayıtları standart uçuş paketimize dahildir.' },
    { q: 'Uçuşlar günün hangi saatlerinde yapılmaktadır?', a: 'Her gün 12:00 ile 18:00 saatleri arasında hava durumuna bağlı olarak uçuşlar gerçekleştirilmektedir.' },
    { q: 'Güneş gözlüğü takmam gerekiyor mu?', a: 'Rüzgardan korunmak ve fotoğraflarda gözlerinizin kısık çıkmaması için güneş gözlüğü tavsiye edilir.' },
    { q: 'Pilotunuz kim ve ne kadar deneyimlidir?', a: 'Pilotumuz Mehmet BAYRAKTAR; 23 yıllık tecrübeye ve 10.000\'den fazla tandem uçuşa sahip THSF & FAI T2 sertifikalı ticari tandem pilottur (Lisans No: 1019).' },
    { q: 'Ekipmanlar güvenli mi?', a: 'Uluslararası test raporlu (EN/LTF) tandem kanatlar ve periyodik bakımlı yedek paraşüt sistemleri kullanılmaktadır.' },
  ],
  en: [
    { q: 'What is the minimum age for tandem paragliding?', a: 'Anyone aged 5 to 90 who is healthy can enjoy tandem paragliding. No prior experience or training is needed.' },
    { q: 'What is the maximum weight limit?', a: 'The standard maximum weight is 100 kg. In good wind conditions, passengers up to 105 kg may fly at the pilot\'s discretion.' },
    { q: 'Where do we land after the flight?', a: 'Depending on weather and wind, we land either back at the Varyant viewpoint takeoff area or at Konyaaltı Beach.' },
    { q: 'Are photos and videos included in the price?', a: 'Yes! Professional action camera photos and 4K video recordings taken during your flight are included in the package price.' },
    { q: 'When do flights take place each day?', a: 'Flights operate daily between 12:00 and 18:00, subject to weather and wind conditions.' },
    { q: 'Should I wear sunglasses?', a: 'Yes — sunglasses are recommended to protect from wind and to keep your eyes open for great-looking flight photos!' },
    { q: 'Who is our pilot?', a: 'Your pilot is Mehmet BAYRAKTAR: 23 years of professional experience, 10,000+ tandem flights, officially licensed THSF & FAI T2 Commercial Tandem Pilot (License No: 1019).' },
    { q: 'Are the equipment and parachutes safe?', a: 'All equipment is internationally certified (EN/LTF standard) with periodic maintenance and mandatory reserve parachutes.' },
  ],
  ru: [
    { q: 'С какого возраста можно летать на параплане?', a: 'Тандем-полёты доступны для здоровых людей в возрасте от 5 до 90 лет. Предварительный опыт и подготовка не нужны.' },
    { q: 'Какой максимальный вес пассажира?', a: 'Стандартный лимит — 100 кг. При хорошем ветре пилот может принять пассажира весом до 105 кг.' },
    { q: 'Где происходит посадка после полёта?', a: 'В зависимости от погоды и ветра — либо обратно на площадку Вариант, либо на пляж Коньяалты.' },
    { q: 'Включены ли фото и видео в стоимость?', a: 'Да! Профессиональные фото и видео 4K, снятые во время полёта, включены в стоимость пакета.' },
    { q: 'В какое время проходят полёты?', a: 'Ежедневно с 12:00 до 18:00 — при подходящих погодных условиях.' },
    { q: 'Нужны ли солнцезащитные очки?', a: 'Да — они защищают от ветра и помогают не щуриться на фото во время полёта.' },
    { q: 'Кто наш пилот?', a: 'Ваш пилот — Мехмет Байрактар: 23 года опыта, более 10 000 тандем-полётов, официальная лицензия THSF & FAI T2 (№ 1019).' },
    { q: 'Насколько безопасно снаряжение?', a: 'Всё снаряжение сертифицировано по международным стандартам (EN/LTF) с регулярным техобслуживанием и обязательным запасным парашютом.' },
  ],
  ar: [
    { q: 'ما هو الحد الأدنى للسن للطيران الشراعي التانديم؟', a: 'يمكن لأي شخص بصحة جيدة من سن 5 إلى 90 سنة الاستمتاع بالطيران الشراعي التانديم. لا تدريب مسبق مطلوب.' },
    { q: 'ما هو الحد الأقصى للوزن؟', a: 'الحد الأقصى القياسي هو 100 كجم. عند ملاءمة الرياح، يمكن قبول الركاب حتى 105 كجم وفق تقدير الكابتن.' },
    { q: 'أين يكون الهبوط بعد الرحلة؟', a: 'حسب الطقس والرياح، يكون الهبوط إما في منصة فاريانت أو على شاطئ كونيالتي.' },
    { q: 'هل الصور والفيديو مشمولان في السعر؟', a: 'نعم! الصور الاحترافية وفيديو 4K المُلتقَطة خلال رحلتك مشمولة في سعر الباقة.' },
    { q: 'ما أوقات الرحلات اليومية؟', a: 'تُنفَّذ الرحلات يومياً بين 12:00 و18:00، وفق أحوال الطقس.' },
    { q: 'هل أحتاج نظارات شمسية؟', a: 'نعم — تحمي من الرياح وتبقي عيونك مفتوحة للصور الجميلة!' },
    { q: 'من هو كابتننا؟', a: 'كابتنكم محمد بيرقدار: 23 عاماً خبرة، أكثر من 10,000 رحلة تانديم، رخصة THSF & FAI T2 رسمية (رقم: 1019).' },
    { q: 'هل المعدات آمنة؟', a: 'جميع المعدات معتمدة دولياً (مقياس EN/LTF) مع صيانة دورية ومظلة احتياطية إلزامية.' },
  ],
};

const uiLabels = {
  tr: { title: 'Sık Sorulan Sorular', badge: 'Merak Edilenler', subtitle: 'Antalya Varyant yamaç paraşütü uçuşları, yaş/kilo limitleri ve rezervasyon hakkında en çok sorulan sorular.', moreQ: 'Aklınıza Takılan Bir Soru mu Var?', moreDesc: 'Aklınıza takılan tüm sorularınız için doğrudan pilotumuzla WhatsApp üzerinden iletişime geçebilirsiniz.', btn: "WhatsApp'tan Soru Sor & Randevu Al" },
  en: { title: 'Frequently Asked Questions', badge: 'FAQs', subtitle: 'Everything you need to know about tandem paragliding in Antalya — age limits, weight limits, safety, and booking.', moreQ: 'Still Have Questions?', moreDesc: 'Contact pilot Mehmet Bayraktar directly via WhatsApp for any questions or to make a booking.', btn: 'Ask & Book via WhatsApp' },
  ru: { title: 'Часто задаваемые вопросы', badge: 'FAQ', subtitle: 'Всё, что нужно знать о тандем-полётах на параплане в Анталии: возраст, вес, безопасность и бронирование.', moreQ: 'Остались вопросы?', moreDesc: 'Свяжитесь напрямую с пилотом Мехметом Байрактаром через WhatsApp — он ответит на все вопросы.', btn: 'Задать вопрос и забронировать в WhatsApp' },
  ar: { title: 'الأسئلة الشائعة', badge: 'أسئلة متكررة', subtitle: 'كل ما تحتاج معرفته عن الطيران الشراعي التانديم في أنطاليا — السن والوزن والأمان والحجز.', moreQ: 'هل لديك سؤال آخر؟', moreDesc: 'تواصل مباشرة مع الكابتن محمد بيرقدار عبر الواتساب لأي استفسار أو لإتمام الحجز.', btn: 'اسأل واحجز عبر الواتساب' },
};

const wpMessages = {
  tr: "Merhaba, Antalya Varyant'ta yamaç paraşütü yapmayı düşünüyor ancak soruma cevap bulamadım. Bilgi almak istiyorum.",
  en: "Hello, I have a question about paragliding in Antalya and could not find the answer. I would like more information.",
  ru: "Здравствуйте, у меня есть вопрос о полётах на параплане в Анталии. Хотел бы уточнить детали.",
  ar: "مرحباً، لدي سؤال حول الطيران الشراعي في أنطاليا ولم أجد إجابة. أودّ الاستفسار.",
};

export default function FAQ({ locale }: { locale?: string; dict?: any }) {
  const currentLocale = (locale || 'tr') as keyof typeof faqData;
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const items = faqData[currentLocale] || faqData.tr;
  const ui = uiLabels[currentLocale] || uiLabels.tr;
  const msg = wpMessages[currentLocale] || wpMessages.tr;
  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(msg)}`;

  return (
    <section id="faq" className="py-20 bg-[#FAFBFC]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[#4A9FD9] text-sm font-semibold tracking-wider uppercase mb-2 block">
            {ui.badge}
          </span>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold text-[#0B1D3A] mb-4">
            {ui.title}
          </h2>
          <p className="text-gray-600 text-base md:text-lg">{ui.subtitle}</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-6 text-left font-bold text-[#0B1D3A] flex justify-between items-center text-base md:text-lg hover:text-[#4A9FD9] transition-colors"
                >
                  <span className="pr-4">{item.q}</span>
                  <ChevronDown className={`w-5 h-5 text-[#4A9FD9] transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-gray-600 text-sm md:text-base leading-relaxed border-t border-gray-100 pt-4">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center bg-white rounded-2xl p-8 max-w-xl mx-auto border border-gray-200 shadow-sm">
          <h3 className="font-bold text-lg text-[#0B1D3A] mb-2">{ui.moreQ}</h3>
          <p className="text-sm text-gray-600 mb-6">{ui.moreDesc}</p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#25D366] hover:bg-[#1da851] text-white font-extrabold rounded-xl text-sm transition-colors shadow-md"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            {ui.btn}
          </a>
        </div>
      </div>
    </section>
  );
}
