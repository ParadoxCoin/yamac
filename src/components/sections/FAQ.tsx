'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ_DATA = [
  {
    q: 'Yamaç paraşütü yapmak için yaş sınırı var mı?',
    a: 'Uçuşlarımız için minimum yaş 4, maksimum yaş sınırı bulunmamaktadır. 18 yaş altı misafirlerimizin ebeveyn izni gereklidir.'
  },
  {
    q: 'Kilo sınırı nedir?',
    a: 'Güvenli bir uçuş için minimum 20 kg, maksimum 110 kg ağırlık sınırımız bulunmaktadır.'
  },
  {
    q: 'Daha önce deneyimim olması gerekiyor mu?',
    a: 'Hayır, tandem (ikili) uçuşlarda tüm kontrol profesyonel pilotumuzdadır. Sizin sadece pilotun kalkış ve iniş sırasındaki basit komutlarına (birkaç adım koşmak gibi) uymanız yeterlidir.'
  },
  {
    q: 'Ne giymeliyim?',
    a: 'Mevsime uygun, rahat spor kıyafetler ve spor ayakkabı giymenizi öneririz. Güneş gözlüğü takmanız rüzgardan korunmak için faydalı olacaktır.'
  },
  {
    q: 'Uçuş ne kadar sürüyor?',
    a: 'Hava koşullarına bağlı olarak uçuş süremiz ortalama 15-20 dakika sürmektedir. Ancak tüm aktivite (hazırlık, ulaşım vs.) için 1 saat ayırmanızı öneririz.'
  },
  {
    q: 'Fotoğraf ve video çekimi fiyata dahil mi?',
    a: 'Fotoğraf ve video çekimleri opsiyonel olup fiyata dahil değildir. Pilotlarımız aksiyon kameraları ile yüksek çözünürlüklü çekimler yapmaktadır, uçuş sonrası inceleyip satın alabilirsiniz.'
  },
  {
    q: 'Kendi telefonumla çekim yapabilir miyim?',
    a: 'Güvenlik nedenleriyle uçuş sırasında kişisel cihazların kullanımına izin verilmemektedir. Düşme riski uçuş güvenliğini tehlikeye atabilir.'
  },
  {
    q: 'Yükseklik korkum var, uçabilir miyim?',
    a: 'Yamaç paraşütünde yükseklik korkusu (akrofobi) genellikle tetiklenmez çünkü ayaklarınızın altında boşluk hissini veren görsel referanslar farklıdır. Birçok misafirimiz uçuş başladıktan saniyeler sonra korkularının geçtiğini belirtmiştir.'
  },
  {
    q: 'Hangi saatlerde uçuş yapılıyor?',
    a: 'Hava şartlarının uygun olduğu günlerde, sabah 09:00 ile gün batımına kadar her saat başı uçuşlarımız gerçekleştirilmektedir.'
  },
  {
    q: 'Kalkış ve iniş neresi?',
    a: 'Kalkışımızı Varyant mevkiindeki falezler üzerinden yapıyor, inişimizi ise Konyaaltı sahiline veya duruma göre kalkış alanına yakın bir noktaya gerçekleştiriyoruz.'
  },
  {
    q: 'Hava şartları uygun olmazsa ne oluyor?',
    a: 'Güvenlik önceliğimizdir. Meteorolojik şartlar uçuşa elverişli değilse, uçuşunuz iptal edilir veya size uygun başka bir tarih/saate ertelenir.'
  }
];

export default function FAQ({ locale, dict }: { locale?: string; dict?: any }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Generate JSON-LD for FAQPage
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_DATA.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };

  return (
    <section className="py-20 bg-[#FAFBFC]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
            Sıkça Sorulan Sorular
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Uçuş deneyimi hakkında merak ettikleriniz.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {FAQ_DATA.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`border border-gray-200 rounded-2xl bg-white overflow-hidden transition-all duration-300 ${isOpen ? 'shadow-md' : 'hover:shadow-sm'}`}
              >
                <button
                  className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-[#1A1A2E] pr-4">{faq.q}</span>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-[#0B1D3A] text-white' : 'bg-gray-100 text-gray-500'}`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-5 pt-0 text-gray-600 leading-relaxed border-t border-gray-100 mt-2">
                    {faq.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
