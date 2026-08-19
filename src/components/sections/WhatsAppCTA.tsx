import { MessageCircle, Phone } from 'lucide-react';
import { siteConfig } from '@/lib/config/site';
import { generateQuickWhatsAppUrl } from '@/lib/services/whatsapp';

export default function WhatsAppCTA({ locale }: { locale?: string; dict?: any }) {
  const currentLocale = locale || 'tr';
  const isTr = currentLocale !== 'en';
  const whatsappUrl = generateQuickWhatsAppUrl(currentLocale);

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
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-[#F8F9FA] mb-4">
              {isTr ? 'Randevunuzu Hemen Oluşturun' : 'Book Your Flight Today'}
            </h2>
            <p className="text-gray-300 text-lg max-w-xl">
              {isTr
                ? "WhatsApp üzerinden hızlı ve kolay randevu talebi oluşturabilir, uçuş saatleri ve uygunluk hakkında bilgi alabilirsiniz."
                : "Create a fast booking request via WhatsApp and check real-time availability."}
            </p>
          </div>

          <div className="flex flex-col space-y-4 w-full md:w-auto">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-3 bg-[#25D366] hover:bg-[#1da851] text-white py-4 px-8 rounded-full font-extrabold text-base transition-transform hover:scale-105 shadow-xl shadow-green-600/30"
            >
              <MessageCircle className="w-6 h-6 fill-current" />
              <span>{isTr ? "WhatsApp'tan Randevu Al" : 'Book via WhatsApp'}</span>
            </a>
            
            <a 
              href={`tel:${siteConfig.phone.replace(/[^0-9]/g, '')}`}
              className="flex items-center justify-center space-x-2 text-gray-200 hover:text-white transition-colors py-2 text-sm font-semibold"
            >
              <Phone className="w-5 h-5 text-[#4A9FD9]" />
              <span>{siteConfig.phone} (Mehmet BAYRAKTAR)</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
