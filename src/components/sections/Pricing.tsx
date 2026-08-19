import { Check, MessageCircle, Phone, Camera, Sparkles } from 'lucide-react';
import { siteConfig } from '@/lib/config/site';

export default function Pricing({ locale }: { locale?: string; dict?: any }) {
  const isTr = locale !== 'en';

  const whatsappMessage = isTr
    ? `Merhaba, Antalya Varyant'ta yamaç paraşütü yapmak istiyorum.\n\nAd Soyad:\nKişi Sayısı:\nTercih Edilen Tarih:\nTercih Edilen Saat:\nYaklaşık Kilo:\nKonaklama Bölgesi:\n\nUçuş koşulları ve uygunluk hakkında bilgi almak istiyorum.`
    : `Hello, I would like to book tandem paragliding in Antalya.\n\nFull Name:\nNumber of People:\nPreferred Date:\nPreferred Time:\nApproximate Weight:\nAccommodation Area:\n\nI would like information about flight conditions and availability.`;

  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section id="pricing" className="py-20 bg-[#FAFBFC]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[#4A9FD9] text-sm font-semibold tracking-wider uppercase mb-2 block">
            {isTr ? 'Şeffaf Hizmet İçeriği' : 'Package Details'}
          </span>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold text-[#0B1D3A] mb-4">
            {isTr ? 'Uçuş Fiyatları & Paket İçeriği' : 'Flight Prices & Package'}
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            {isTr
              ? "Antalya Varyant ve Falezler üzerindeki uçuşlarımız aksiyon kamerası fotoğraf ve 4K video çekimleri dahil paket olarak sunulmaktadır."
              : "Tandem paragliding flight over Antalya cliffs including HD photos and 4K video capture."}
          </p>
        </div>

        <div className="max-w-xl mx-auto bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-200 relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-[#25D366] text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl uppercase tracking-wider">
            {isTr ? 'Fotoğraf & Video Dahil!' : 'Photos & Video Included!'}
          </div>

          <div className="text-center mb-8 border-b border-gray-100 pb-6">
            <h3 className="text-2xl font-bold text-[#0B1D3A] mb-2">Tandem Uçuş Paketi</h3>
            <p className="text-sm text-gray-500 mb-3">Antalya Varyant Seyir Terası - Konyaaltı Plajı Güzergahı</p>
            
            <div className="text-2xl md:text-3xl font-extrabold text-[#4A9FD9] my-3">
              {isTr ? 'Güncel Sezon Fiyatı İçin Arayınız' : 'Contact for Seasonal Pricing'}
            </div>
            <p className="text-xs text-gray-500">
              {isTr
                ? "Sezon ve rüzgar şartlarına göre güncel fiyat bilgisi için WhatsApp veya telefon üzerinden anında bilgi alabilirsiniz."
                : "Contact us directly via WhatsApp or phone for current pricing and availability."}
            </p>
          </div>

          <ul className="space-y-4 mb-8">
            <li className="flex items-center gap-3 text-sm text-gray-800 font-bold bg-green-50 p-3 rounded-xl border border-green-100">
              <Camera className="w-5 h-5 text-[#25D366] flex-shrink-0" />
              <span>Fotoğraf ve 4K Video Çekimi Paket Ücretine DAHİLDİR</span>
            </li>

            <li className="flex items-center gap-3 text-sm text-gray-700">
              <Check className="w-5 h-5 text-[#25D366] flex-shrink-0" />
              <span><strong>Pilot:</strong> 23 Yıllık Deneyimli THSF/FAI Sertifikalı Mehmet Bayraktar</span>
            </li>

            <li className="flex items-center gap-3 text-sm text-gray-700">
              <Check className="w-5 h-5 text-[#25D366] flex-shrink-0" />
              <span><strong>Katılım:</strong> 5 Yaşından 90 Yaşına Kadar Herkes Uçabilir</span>
            </li>

            <li className="flex items-center gap-3 text-sm text-gray-700">
              <Check className="w-5 h-5 text-[#25D366] flex-shrink-0" />
              <span><strong>Kilo Limiti:</strong> 100 kg (Rüzgar durumuna göre 105 kg'a kadar)</span>
            </li>

            <li className="flex items-center gap-3 text-sm text-gray-700">
              <Check className="w-5 h-5 text-[#25D366] flex-shrink-0" />
              <span><strong>Uçuş Süresi:</strong> Ortalama 15-20 Dakika Havada Kalış</span>
            </li>

            <li className="flex items-center gap-3 text-sm text-gray-700">
              <Check className="w-5 h-5 text-[#25D366] flex-shrink-0" />
              <span><strong>İniş Noktası:</strong> Hava durumuna göre Kalkış Alanına veya Plaja İniş</span>
            </li>

            <li className="flex items-center gap-3 text-sm text-gray-700">
              <Sparkles className="w-5 h-5 text-[#D4A96A] flex-shrink-0" />
              <span><strong>İpucu:</strong> Fotoğraflarda gözlerin kısık çıkmaması için güneş gözlüğü önerilir</span>
            </li>
          </ul>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#25D366] hover:bg-[#1da851] text-white font-bold rounded-2xl transition-all shadow-lg text-sm"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              WhatsApp ile Fiyat Al & Rezervasyon
            </a>
            <a
              href={`tel:${siteConfig.phone.replace(/[^0-9]/g, '')}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#0B1D3A] hover:bg-[#122B5C] text-white font-bold rounded-2xl transition-colors text-sm"
            >
              <Phone className="w-5 h-5" />
              Hemen Ara
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
