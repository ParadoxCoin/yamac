import Image from 'next/image';
import { Award, CheckCircle2, Star, ShieldCheck, Trophy, ExternalLink } from 'lucide-react';

const translations = {
  tr: {
    subtitle: 'Gökyüzünde Güvenli Ellerde',
    title: 'Sizi Gökyüzünde Kim Uçuruyor?',
    desc: "23 yıllık deneyim ve 10.000'den fazla tandem uçuş tecrübesi ile Antalya Varyant ve Falezler üzerinde emniyetli ve unutulmaz bir deneyim.",
    experience: '23 Yıllık Deneyim',
    flights: '10.000+ Tandem Uçuş',
    pilotOrigin: 'Deneyimli Ölüdeniz Pilotu',
    cert: 'THSF & FAI T2 Commercial Tandem Pilot (Lisans No: 1019)',
    bio: "T.C. Gençlik ve Spor Bakanlığı, Türkiye Hava Sporları Federasyonu (THSF) ve Uluslararası Havacılık Federasyonu (FAI) tarafından verilen resmi T2 Commercial Tandem Pilot Lisansı (No: 1019) ile Antalya Varyant Seyir Terası'ndan uluslararası standartlarda emniyetli tandem uçuşlar gerçekleştirilmektedir.",
    cert1Title: 'Resmi THSF & FAI Sertifikası',
    cert1Desc: 'T2 Ticari Tandem Pilot Yeterlilik Belgesi (No: 1019)',
    cert2Title: 'Test Raporlu Ekipmanlar',
    cert2Desc: 'Periyodik test ve bakımları yapılmış yedek paraşütlü takımlar',
    btnCert: 'THSF Resmi Pilot Sertifikası',
    btnAward: 'Ödüller & Dereceler',
  },
  en: {
    subtitle: 'In Safe Hands in the Sky',
    title: 'Who Flies You in the Sky?',
    desc: 'Safe and unforgettable flights over Antalya Varyant and Falezler with 23 years of experience and 10,000+ tandem flights.',
    experience: '23 Years Experience',
    flights: '10,000+ Tandem Flights',
    pilotOrigin: 'Experienced Ölüdeniz Pilot',
    cert: 'THSF & FAI T2 Commercial Tandem Pilot (License No: 1019)',
    bio: 'Official T2 Commercial Tandem Pilot license (No: 1019) issued by the Turkish Air Sports Federation (THSF) and FAI. Over 23 years of professional experience conducting safe tandem paragliding flights from Antalya Varyant Viewpoint.',
    cert1Title: 'Official THSF & FAI License',
    cert1Desc: 'T2 Commercial Tandem Pilot Certificate (No: 1019)',
    cert2Title: 'Certified Equipment',
    cert2Desc: 'Internationally test-certified tandem wings and reserve parachutes',
    btnCert: 'View THSF Official License',
    btnAward: 'Awards & Trophies',
  },
  ru: {
    subtitle: 'В Надёжных Руках',
    title: 'Кто поднимет вас в небо?',
    desc: 'Безопасные и незабываемые полёты над Анталией: 23 года опыта и более 10 000 тандем-полётов.',
    experience: '23 Года Опыта',
    flights: '10 000+ Тандем-полётов',
    pilotOrigin: 'Опытный пилот Ёлюдениз',
    cert: 'THSF & FAI T2 Коммерческий тандем-пилот (Лицензия № 1019)',
    bio: 'Официальная лицензия коммерческого тандем-пилота T2 (№ 1019), выданная Турецкой федерацией воздушных видов спорта (THSF) и FAI. 23 года профессионального опыта тандем-полётов с площадки Вариант в Анталии.',
    cert1Title: 'Официальная лицензия THSF & FAI',
    cert1Desc: 'T2 Коммерческий тандем-пилот, Лицензия № 1019',
    cert2Title: 'Сертифицированное снаряжение',
    cert2Desc: 'Международно сертифицированные крылья и запасной парашют',
    btnCert: 'Смотреть лицензию THSF',
    btnAward: 'Награды и призы',
  },
  ar: {
    subtitle: 'في أيدٍ أمينة في السماء',
    title: 'من يطير معك في السماء؟',
    desc: 'رحلات آمنة ولا تُنسى فوق أنطاليا مع 23 عاماً من الخبرة وأكثر من 10,000 رحلة تانديم ناجحة.',
    experience: '٢٣ عاماً خبرة',
    flights: '+١٠,٠٠٠ رحلة تانديم',
    pilotOrigin: 'طيار ذو خبرة في أولودينيز',
    cert: 'THSF & FAI T2 طيار تانديم تجاري (رخصة رقم: 1019)',
    bio: 'حاصل على رخصة T2 Commercial Tandem Pilot الدولية (رقم: 1019) من الاتحاد التركي للرياضات الجوية (THSF) وFAI. 23 عاماً من الخبرة المهنية في رحلات تانديم آمنة انطلاقاً من منصة فاريانت في أنطاليا.',
    cert1Title: 'شهادة THSF & FAI الرسمية',
    cert1Desc: 'رخصة T2 طيار تانديم تجاري، رقم: 1019',
    cert2Title: 'معدات معتمدة دولياً',
    cert2Desc: 'أجنحة بشهادات اختبار دولية ومظلات احتياطية',
    btnCert: 'عرض الرخصة الرسمية THSF',
    btnAward: 'الجوائز والأوسمة',
  },
};

export default function PilotProfile({ locale }: { locale?: string; dict?: any }) {
  const currentLocale = locale || 'tr';
  const t = translations[currentLocale as keyof typeof translations] || translations.tr;

  return (
    <section id="pilot" className="py-20 bg-[#0B1D3A] text-[#F8F9FA]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#4A9FD9] text-sm font-semibold tracking-wider uppercase mb-2 block">
            {t.subtitle}
          </span>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mb-4">
            {t.title}
          </h2>
          <p className="text-gray-300 text-lg">{t.desc}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Pilot Photo */}
          <div className="lg:col-span-5 relative">
            <div className="relative h-[480px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-[#122B5C]">
              <Image
                src="/images/pilot/mehmet-bayraktar.jpg"
                alt="Mehmet Bayraktar - Tandem Paragliding Pilot"
                fill
                className="object-cover object-top"
                priority
              />
            </div>

            <div className="absolute -bottom-6 -right-2 md:right-4 bg-[#D4A96A] text-[#0B1D3A] p-4 rounded-2xl shadow-xl flex items-center gap-3 border-2 border-white">
              <Trophy className="w-8 h-8 flex-shrink-0" />
              <div>
                <div className="font-extrabold text-base">{t.experience}</div>
                <div className="text-xs font-semibold">{t.flights}</div>
              </div>
            </div>
          </div>

          {/* Pilot Info */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="flex items-center gap-2 text-[#4A9FD9] font-medium text-sm mb-1">
                <Star className="w-4 h-4 fill-current text-[#D4A96A]" />
                {t.pilotOrigin}
              </div>
              <h3 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-white mb-2">
                Mehmet BAYRAKTAR
              </h3>
              <p className="text-[#D4A96A] font-semibold text-lg">
                {t.cert}
              </p>
            </div>

            <p className="text-gray-300 leading-relaxed text-base">{t.bio}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 bg-[#122B5C] p-4 rounded-2xl border border-gray-700">
                <ShieldCheck className="w-6 h-6 text-[#4A9FD9] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white text-sm">{t.cert1Title}</h4>
                  <p className="text-xs text-gray-300">{t.cert1Desc}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-[#122B5C] p-4 rounded-2xl border border-gray-700">
                <Award className="w-6 h-6 text-[#D4A96A] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white text-sm">{t.cert2Title}</h4>
                  <p className="text-xs text-gray-300">{t.cert2Desc}</p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <a
                href="/images/pilot/thsf-sertifika.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#4A9FD9] hover:bg-[#3b8bc4] text-white font-bold rounded-xl transition-all shadow-lg text-sm"
              >
                <CheckCircle2 className="w-5 h-5" />
                {t.btnCert}
                <ExternalLink className="w-4 h-4 ml-1" />
              </a>

              <a
                href="/images/pilot/mehmet-bayraktar-odul.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-gray-600 hover:border-gray-400 text-gray-200 rounded-xl transition-all text-sm font-semibold"
              >
                🏆 {t.btnAward}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
