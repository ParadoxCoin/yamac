import { Check, Info, MessageCircle } from 'lucide-react';

export default function Pricing({ locale, dict }: { locale?: string; dict?: any }) {
  return (
    <section className="py-20 bg-[#FAFBFC]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
            Uçuş Fiyatları
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Güvenli ve keyifli bir uçuş deneyimi için standart paketimiz.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden flex flex-col md:flex-row">
            
            {/* Left Content */}
            <div className="md:w-3/5 p-8 md:p-10">
              <h3 className="text-2xl font-bold text-[#0B1D3A] mb-2">Tandem Uçuş Paketi</h3>
              <p className="text-gray-500 mb-8">Antalya Varyant - Konyaaltı güzergahı</p>

              <div className="space-y-4 mb-8">
                {[
                  'Uzman pilot eşliğinde uçuş',
                  'Uçuş öncesi brifing',
                  'Kask ve uçuş ekipmanları',
                  'Ortalama 15-20 dk havada kalış',
                  'Ferdi kaza sigortası'
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3 text-gray-700">
                    <Check className="w-5 h-5 text-[#22C55E]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-start space-x-2 text-sm text-gray-500 bg-gray-50 p-4 rounded-xl">
                <Info className="w-5 h-5 text-[#4A9FD9] flex-shrink-0" />
                <p>Fotoğraf ve video çekimi ek ücrete tabidir, uçuş sonrası pilot ile görüşülebilir.</p>
              </div>
            </div>

            {/* Right Content */}
            <div className="md:w-2/5 bg-[#0B1D3A] p-8 md:p-10 flex flex-col justify-center items-center text-center text-white relative">
              {/* Decorative shape */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#4A9FD9]/20 rounded-bl-full" />
              
              <div className="relative z-10 w-full">
                <p className="text-[#D4A96A] font-medium mb-4 uppercase tracking-wider text-sm">Güncel Sezon Fiyatı</p>
                <div className="mb-8">
                  <p className="text-lg text-gray-300 italic mb-2">Güncel fiyat bilgisi için</p>
                  <p className="text-xl font-semibold">WhatsApp üzerinden iletişime geçin</p>
                </div>

                <a
                  href="https://wa.me/905555555555?text=Merhaba,%20güncel%20yamaç%20paraşütü%20fiyatını%20öğrenebilir%20miyim?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-[#22C55E] hover:bg-[#1ea951] text-white py-4 px-6 rounded-full font-bold transition-transform hover:scale-105 shadow-lg shadow-green-500/20 w-full"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Fiyat Al & Rezervasyon</span>
                </a>
                
                <p className="text-xs text-gray-400 mt-4">
                  Sezon yoğunluğuna göre fiyatlar değişiklik gösterebilir.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
