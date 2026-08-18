import { CalendarCheck, CloudSun, MapPin, Users, Settings, PlaneTakeoff, Bird, PlaneLanding, Camera } from 'lucide-react';

const STEPS = [
  { id: '01', title: 'Randevu Talebi', desc: 'WhatsApp üzerinden kolayca gün ve saat belirleyin.', icon: CalendarCheck },
  { id: '02', title: 'Hava Koşullarının Kontrolü', desc: 'Uçuşa uygunluk için meteorolojik verileri inceleriz.', icon: CloudSun },
  { id: '03', title: 'Uçuş Noktasında Buluşma', desc: 'Varyant kalkış pistinde ekibimizle bir araya gelin.', icon: MapPin },
  { id: '04', title: 'Pilot Bilgilendirmesi', desc: 'Deneyimli pilotumuzdan kısa bir uçuş brifingi alın.', icon: Users },
  { id: '05', title: 'Ekipman Hazırlığı', desc: 'Kuşam (harness) ve kaskınız profesyonelce kuşanılır.', icon: Settings },
  { id: '06', title: 'Kalkış', desc: 'Sadece birkaç adım atarak gökyüzüyle buluşun.', icon: PlaneTakeoff },
  { id: '07', title: 'Akdeniz Üzerinde Uçuş', desc: 'Falezler ve denizin eşsiz manzarasının tadını çıkarın.', icon: Bird },
  { id: '08', title: 'İniş', desc: 'Konyaaltı sahiline yumuşak ve güvenli bir iniş yapın.', icon: PlaneLanding },
  { id: '09', title: 'Medya Teslimi', desc: 'Uçuş boyunca çekilen aksiyon kamera kayıtlarınızı alın.', icon: Camera },
];

export default function HowItWorks({ locale, dict }: { locale?: string; dict?: any }) {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
            Uçuş Deneyimi Nasıl Gerçekleşiyor?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            İlk iletişimden inişe kadar her adımda profesyonel ekibimiz yanınızda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {/* Connecting lines for desktop */}
          <div className="hidden lg:block absolute top-12 left-20 right-20 h-0.5 bg-gray-100 -z-10" />
          <div className="hidden lg:block absolute top-[19rem] left-20 right-20 h-0.5 bg-gray-100 -z-10" />
          <div className="hidden lg:block absolute top-[36rem] left-20 right-20 h-0.5 bg-gray-100 -z-10" />

          {STEPS.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={step.id}
                className="flex flex-col items-center text-center p-6 bg-[#FAFBFC] rounded-2xl hover:shadow-md transition-shadow group border border-gray-50"
              >
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-[#4A9FD9] text-xl font-bold shadow-sm mb-6 group-hover:scale-110 transition-transform relative">
                  <Icon className="w-6 h-6 absolute opacity-20" />
                  <span className="relative z-10 font-playfair">{step.id}</span>
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
