import Link from 'next/link';
import { Shield, Check, AlertTriangle, ArrowRight } from 'lucide-react';

const translations = {
  tr: {
    badge: 'Güvenliğiniz Birinci',
    title: 'Önceliğimiz Güvenliğiniz',
    desc: 'Yamaç paraşütü doğa şartlarına bağlı bir hava sporudur. Tüm uçuşlarımız, havacılık kuralları çerçevesinde, deneyimli pilotlar ve periyodik bakımı yapılan sertifikalı ekipmanlarla gerçekleştirilmektedir.',
    readMore: 'Detaylı Güvenlik Prosedürlerini Oku',
    cards: [
      { title: 'Sertifikalı Pilotlar', desc: 'Sadece THK ve FAI lisansına sahip ticari tandem pilotları ile uçuş.' },
      { title: 'Meteorolojik Onay', desc: 'Rüzgar hızı, yönü ve diğer koşulların detaylı analizi sonrası kalkış kararı.' },
      { title: 'Modern Ekipman', desc: 'Düzenli test edilen, uluslararası standartlara uygun paraşüt ve kuşamlar.' },
      { title: 'Yedek Paraşüt', desc: 'Her uçuşta standart olarak bulunan ve periyodik bakımı yapılan acil durum sistemleri.' },
    ],
    disclaimer: 'Sıfır risk iddia edilemez, ancak havacılık kurallarına sıkı sıkıya bağlı kalınarak riskler minimize edilmektedir. Nihai uçuş kararı her zaman yetkili pilottadır.',
  },
  en: {
    badge: 'Safety First',
    title: 'Your Safety is Our Priority',
    desc: 'Paragliding is a nature-dependent aerial sport. All our flights are conducted within aviation regulations, with experienced pilots and periodically maintained certified equipment.',
    readMore: 'Read Detailed Safety Procedures',
    cards: [
      { title: 'Certified Pilots', desc: 'Flights only with THSF and FAI licensed commercial tandem pilots.' },
      { title: 'Meteorological Approval', desc: 'Takeoff decision made after thorough analysis of wind speed, direction, and all conditions.' },
      { title: 'Modern Equipment', desc: 'Regularly tested paragliders and harnesses meeting international standards.' },
      { title: 'Reserve Parachute', desc: 'Emergency reserve parachute is standard on every flight with regular maintenance.' },
    ],
    disclaimer: 'Zero risk cannot be claimed, but risks are minimized by strictly adhering to aviation regulations. The final flight decision always rests with the certified pilot.',
  },
  ru: {
    badge: 'Безопасность — прежде всего',
    title: 'Ваша безопасность — наш приоритет',
    desc: 'Парапланеризм — это авиационный спорт, зависящий от природных условий. Все полёты выполняются согласно авиационным правилам с опытными пилотами и регулярно проходящим техобслуживание снаряжением.',
    readMore: 'Читать подробные правила безопасности',
    cards: [
      { title: 'Сертифицированные пилоты', desc: 'Полёты только с коммерческими тандем-пилотами, лицензированными THSF и FAI.' },
      { title: 'Метеорологическое подтверждение', desc: 'Решение о взлёте принимается после тщательного анализа ветра и всех условий.' },
      { title: 'Современное снаряжение', desc: 'Регулярно проверяемые крылья и подвески соответствуют международным стандартам.' },
      { title: 'Запасной парашют', desc: 'Запасной парашют — стандарт каждого полёта, регулярное техобслуживание обязательно.' },
    ],
    disclaimer: 'Нулевой риск не может быть гарантирован, но строгое соблюдение авиационных правил сводит риски к минимуму. Финальное решение о полёте всегда остаётся за лицензированным пилотом.',
  },
  ar: {
    badge: 'السلامة أولاً',
    title: 'سلامتك هي أولويتنا',
    desc: 'الطيران الشراعي رياضة جوية تعتمد على أحوال الطبيعة. تُنفَّذ جميع رحلاتنا وفق لوائح الطيران مع طيارين ذوي خبرة ومعدات معتمدة يجري صيانتها بانتظام.',
    readMore: 'اقرأ إجراءات السلامة التفصيلية',
    cards: [
      { title: 'طيارون معتمدون', desc: 'الرحلات مع طيارين تانديم تجاريين حاصلين على رخصة THSF وFAI فقط.' },
      { title: 'موافقة أرصاد جوية', desc: 'قرار الإقلاع يُتخَذ بعد تحليل دقيق لسرعة الرياح واتجاهها وسائر الظروف.' },
      { title: 'معدات حديثة', desc: 'أجنحة ومقاعد مختبَرة بانتظام وتستوفي المعايير الدولية.' },
      { title: 'مظلة احتياطية', desc: 'مظلة طوارئ احتياطية إلزامية في كل رحلة مع صيانة دورية.' },
    ],
    disclaimer: 'لا يمكن ادّعاء الخلو التام من المخاطر، لكن الالتزام الصارم باللوائح الجوية يُقلّلها إلى الحد الأدنى. القرار النهائي دائماً بيد الكابتن المعتمد.',
  },
};

export default function Safety({ locale }: { locale?: string; dict?: any }) {
  const currentLocale = (locale || 'tr') as keyof typeof translations;
  const t = translations[currentLocale] || translations.tr;

  return (
    <section id="safety" className="py-20 bg-[#0B1D3A] text-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          <div className="lg:col-span-5">
            <div className="w-16 h-16 bg-[#D4A96A]/20 rounded-2xl flex items-center justify-center mb-6">
              <Shield className="w-8 h-8 text-[#D4A96A]" />
            </div>
            <span className="text-[#4A9FD9] text-sm font-semibold tracking-wider uppercase mb-3 block">{t.badge}</span>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold mb-6">{t.title}</h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">{t.desc}</p>

            <Link
              href={`/${currentLocale}#safety`}
              className="inline-flex items-center space-x-2 text-[#4A9FD9] hover:text-white transition-colors font-medium group"
            >
              <span>{t.readMore}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {t.cards.map((item, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                  <div className="flex items-start space-x-4">
                    <div className="mt-1">
                      <Check className="w-5 h-5 text-[#22C55E]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-4 flex items-start space-x-3">
              <AlertTriangle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-yellow-200/80">{t.disclaimer}</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
