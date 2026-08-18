import { MessageCircle, Phone } from 'lucide-react';

export default function WhatsAppCTA({ locale, dict }: { locale?: string; dict?: any }) {
  return (
    <section className="bg-[#0B1D3A] py-16 relative overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full border-[20px] border-white" />
        <div className="absolute top-1/2 right-10 w-48 h-48 rounded-full border-[10px] border-white" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12">
          
          <div className="text-center md:text-left mb-8 md:mb-0 md:mr-8">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#F8F9FA] mb-4">
              Randevunuzu Hemen Oluşturun
            </h2>
            <p className="text-gray-300 text-lg max-w-xl">
              WhatsApp üzerinden hızlı ve kolay randevu talebi oluşturabilir, uçuş saatleri hakkında bilgi alabilirsiniz.
            </p>
          </div>

          <div className="flex flex-col space-y-4 w-full md:w-auto">
            <a
              href="https://wa.me/905555555555?text=Merhaba,%20yamaç%20paraşütü%20randevusu%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-3 bg-[#22C55E] hover:bg-[#1ea951] text-white py-4 px-8 rounded-full font-bold text-lg transition-transform hover:scale-105 shadow-lg shadow-green-500/20"
            >
              <MessageCircle className="w-6 h-6" />
              <span>WhatsApp'tan Yazın</span>
            </a>
            
            <a 
              href="tel:+905555555555"
              className="flex items-center justify-center space-x-2 text-gray-300 hover:text-white transition-colors py-2"
            >
              <Phone className="w-5 h-5" />
              <span>[ADMIN TARAFINDAN DOLDURULACAK]</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
