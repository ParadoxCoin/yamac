import Link from 'next/link';
import { Shield, Check, AlertTriangle, ArrowRight } from 'lucide-react';

export default function Safety({ locale, dict }: { locale?: string; dict?: any }) {
  return (
    <section className="py-20 bg-[#0B1D3A] text-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5">
            <div className="w-16 h-16 bg-[#D4A96A]/20 rounded-2xl flex items-center justify-center mb-6">
              <Shield className="w-8 h-8 text-[#D4A96A]" />
            </div>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
              Önceliğimiz Güvenliğiniz
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Yamaç paraşütü doğa şartlarına bağlı bir hava sporudur. Tüm uçuşlarımız, havacılık kuralları çerçevesinde, deneyimli pilotlar ve periyodik bakımı yapılan sertifikalı ekipmanlarla gerçekleştirilmektedir.
            </p>
            
            <Link 
              href="/guvenlik"
              className="inline-flex items-center space-x-2 text-[#4A9FD9] hover:text-white transition-colors font-medium group"
            >
              <span>Detaylı Güvenlik Prosedürlerini Oku</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {[
                { title: 'Sertifikalı Pilotlar', desc: 'Sadece THK ve FAI lisansına sahip ticari tandem pilotları ile uçuş.' },
                { title: 'Meteorolojik Onay', desc: 'Rüzgar hızı, yönü ve diğer koşulların detaylı analizi sonrası kalkış kararı.' },
                { title: 'Modern Ekipman', desc: 'Düzenli test edilen, uluslararası standartlara uygun paraşüt ve kuşamlar.' },
                { title: 'Yedek Paraşüt', desc: 'Her uçuşta standart olarak bulunan ve periyodik bakımı yapılan acil durum sistemleri.' }
              ].map((item, i) => (
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
              <p className="text-sm text-yellow-200/80">
                Sıfır risk iddia edilemez, ancak havacılık kurallarına sıkı sıkıya bağlı kalınarak riskler minimize edilmektedir. Nihai uçuş kararı her zaman yetkili pilottadır.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
