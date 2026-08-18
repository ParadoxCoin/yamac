import { Map, Sun, ShieldCheck, Award, MessageCircle, Camera, Plane, Heart } from 'lucide-react';

const REASONS = [
  { icon: Map, title: 'Merkezi Konum', desc: 'Antalya şehir merkezinde, kolay ulaşılabilir kalkış ve iniş noktası.' },
  { icon: Sun, title: 'Falezler Manzarası', desc: 'Tarihi Varyant, falezler ve sonsuz Akdeniz maviliğini havadan izleme fırsatı.' },
  { icon: Plane, title: 'Tandem Uçuş', desc: 'Sıfır deneyimle, uzman pilotumuz eşliğinde güvenli ikili uçuş keyfi.' },
  { icon: Award, title: 'Profesyonel Ekip', desc: 'THK ve FAI lisanslı, binlerce saat uçuş tecrübesine sahip yetkili pilot.' },
  { icon: ShieldCheck, title: 'Kapsamlı Bilgilendirme', desc: 'Uçuş öncesi adım adım bilgilendirme ile stresi azaltan hazırlık süreci.' },
  { icon: Camera, title: 'Aksiyon Kamera', desc: 'Havada geçen her saniyenizi yüksek çözünürlüklü video ve fotoğrafla ölümsüzleştirin.' },
  { icon: MessageCircle, title: 'Hızlı İletişim', desc: 'WhatsApp üzerinden kolay randevu, iptal/erteleme ve anında destek.' },
  { icon: Heart, title: 'Gerçek Deneyimler', desc: 'Yüzlerce mutlu misafirimizin yorumları ve tavsiyeleriyle kanıtlanmış kalite.' }
];

export default function WhyUs({ locale, dict }: { locale?: string; dict?: any }) {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
            Neden Bizi Tercih Etmelisiniz?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Antalya'da güvenli, keyifli ve unutulmaz bir uçuş deneyimi yaşamanız için çalışıyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {REASONS.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div 
                key={index}
                className="bg-[#FAFBFC] p-6 rounded-2xl border border-gray-100 hover:border-[#4A9FD9]/30 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-[#4A9FD9]" />
                </div>
                <h3 className="font-semibold text-lg text-[#1A1A2E] mb-3 group-hover:text-[#4A9FD9] transition-colors">
                  {reason.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {reason.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
