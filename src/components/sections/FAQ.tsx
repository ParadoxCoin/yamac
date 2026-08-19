'use client';

import { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { siteConfig } from '@/lib/config/site';

const FAQ_ITEMS = [
  {
    question: 'Kaç yaşından itibaren yamaç paraşütü yapılabilir?',
    answer: '5 yaşından 90 yaşına kadar sağlıklı olan herkes tandem yamaç paraşütü yapabilir. Herhangi bir eğitim veya ön tecrübe gerektirmez. Pilotunuz kalkışta ve uçuş süresince sizi bilgilendirecektir.',
  },
  {
    question: 'Kilo sınırı (üst kilo limiti) nedir?',
    answer: 'Standart üst kilo limiti 100 kg\'dır. Rüzgar koşulları ve hava durumu elverdiğinde pilot değerlendirmesiyle 105 kg\'a kadar yolcu kabul edilebilmektedir.',
  },
  {
    question: 'Uçuş sonrası nereye iniş yapılıyor?',
    answer: 'Uçuş günü rüzgarın şiddetine ve yönüne bağlı olarak ya kalkış yaptığımız Konyaaltı Varyant Seyir Terası alanına ya da Konyaaltı Plajı\'na son derece konforlu ve yumuşak bir iniş gerçekleştirilir.',
  },
  {
    question: 'Fotoğraf ve video çekimi paket fiyatına dahil mi?',
    answer: 'Evet! Profesyonel aksiyon kamerası ile uçuş boyunca çekilen fotoğraf ve 4K video kayıtları standart uçuş paketimize dahildir. Güncel paket fiyatı ve rezervasyon için lütfen WhatsApp veya telefon ile bizimle iletişime geçiniz.',
  },
  {
    question: 'Uçuşlar günün hangi saatlerinde yapılmaktadır?',
    answer: 'Meteorolojik uygunluk ve termik rüzgar şartlarına bağlı olarak her gün 12:00 ile 18:00 saatleri arasında uçuşlarımız gerçekleştirilmektedir.',
  },
  {
    question: 'Uçuşta ne giymeliyim? Güneş gözlüğü gerekli mi?',
    answer: 'Spor ayakkabı (sneaker) ve mevsime uygun konforlu kıyafetler giymeniz önerilir (topuklu ayakkabı ve terlikle uçuş yapılmaz). Güneş gözlüğü sadece rüzgardan korunmak için değil, gökyüzündeki fotoğraflarda ve videolarda gözlerinizin kısık çıkmaması için önemle tavsiye edilir.',
  },
  {
    question: 'Sizi uçuran pilot kimdir ve ne kadar tecrübelidir?',
    answer: 'Pilotumuz Mehmet BAYRAKTAR, 23 yıllık mesleki tecrübeye ve 10.000\'den fazla başarılı tandem uçuş sayısına sahiptir. Deneyimli Ölüdeniz pilotumuz; T.C. Gençlik ve Spor Bakanlığı, Türkiye Hava Sporları Federasyonu (THSF) ve Uluslararası Havacılık Federasyonu (FAI) onaylı T2 Commercial Tandem Pilot (Lisans No: 1019) sertifikasına sahiptir.',
  },
  {
    question: 'Paraşüt ve uçuş ekipmanları güvenli mi?',
    answer: 'Uçuşlarımızda kullanılan tandem kanatlar, kuşamlar ve kasklar uluslararası test raporlu (EN/LTF sertifikalı) olup periyodik bakımları titizlikle yapılmaktadır. Her uçuş takımımızda zorunlu otomatik yedek paraşüt sistemi bulunur.',
  },
];

export default function FAQ({ locale }: { locale?: string; dict?: any }) {
  const isTr = locale !== 'en';
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const whatsappMessage = isTr
    ? `Merhaba, Antalya Varyant'ta yamaç paraşütü yapmayı düşünüyor ancak soruma cevap bulamadım. Bilgi almak istiyorum.`
    : `Hello, I have a question about paragliding in Antalya.`;

  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section id="faq" className="py-20 bg-[#FAFBFC]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[#4A9FD9] text-sm font-semibold tracking-wider uppercase mb-2 block flex items-center justify-center gap-1.5">
            <HelpCircle className="w-4 h-4" />
            {isTr ? 'Merak Edilenler' : 'FAQ'}
          </span>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold text-[#0B1D3A] mb-4">
            {isTr ? 'Sık Sorulan Sorular' : 'Frequently Asked Questions'}
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            {isTr
              ? "Antalya Varyant yamaç paraşütü uçuşları, yaş/kilo limitleri, emniyet ve rezervasyon hakkında en çok sorulan sorular."
              : "Everything you need to know about tandem paragliding in Antalya."}
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden transition-all shadow-sm"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-6 text-left font-bold text-[#0B1D3A] flex justify-between items-center text-base md:text-lg hover:text-[#4A9FD9] transition-colors"
                >
                  <span className="pr-4">{item.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#4A9FD9] transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-gray-600 text-sm md:text-base leading-relaxed border-t border-gray-100 pt-4">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions? */}
        <div className="mt-12 text-center bg-white rounded-2xl p-8 max-w-xl mx-auto border border-gray-200 shadow-sm">
          <h3 className="font-bold text-lg text-[#0B1D3A] mb-2">
            {isTr ? 'Başka Bir Sorunuz mu Var?' : 'Have More Questions?'}
          </h3>
          <p className="text-sm text-gray-600 mb-6">
            {isTr
              ? "Aklınıza takılan tüm konular ve rezervasyon için doğrudan pilotumuzla iletişime geçebilirsiniz."
              : "Contact pilot Mehmet Bayraktar directly via WhatsApp for any questions."}
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#1da851] text-white font-bold rounded-xl text-sm transition-colors shadow-md"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            {isTr ? "WhatsApp'tan Soru Sor" : 'Ask via WhatsApp'}
          </a>
        </div>
      </div>
    </section>
  );
}
