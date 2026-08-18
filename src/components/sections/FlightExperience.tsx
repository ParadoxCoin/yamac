import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';

export default function FlightExperience({ locale, dict }: { locale?: string; dict?: any }) {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="lg:w-1/2 space-y-6">
            <div className="inline-block px-4 py-1.5 bg-[#4A9FD9]/10 rounded-full text-[#4A9FD9] font-medium text-sm mb-2">
              Özel Bir Deneyim
            </div>
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A2E] leading-tight">
              Antalya Falezler Üzerinde <span className="text-[#D4A96A]">Kusursuz Uçuş</span>
            </h2>
            
            <div className="prose prose-lg text-gray-600">
              <p>
                Şehrin gürültüsünden uzaklaşarak, efsanevi <Link href="/antalya-falezler-yamac-parasutu" className="text-[#4A9FD9] hover:underline font-medium">Antalya Falezleri</Link> üzerinden Akdeniz'in sonsuz maviliğine doğru süzülün. Varyant kalkış noktasından başlayan bu serüven, size şehrin en güzel manzarasını kuş bakışı sunuyor.
              </p>
              <p>
                Konyaaltı plajının eşsiz kıyı şeridini, Beydağları'nın ihtişamını ve denizin turkuaz tonlarını havadan izlerken, rüzgarın huzur veren sesiyle baş başa kalacaksınız.
              </p>
            </div>

            <ul className="space-y-3 pt-4">
              {[
                'Varyant seyir terasından kolay kalkış',
                'Deniz ve şehir manzarasının eşsiz uyumu',
                'Konyaaltı sahiline yumuşak iniş',
                'Havada geçen 15-20 dakikalık saf özgürlük'
              ].map((item, i) => (
                <li key={i} className="flex items-start space-x-3 text-gray-700">
                  <div className="w-5 h-5 rounded-full bg-[#22C55E]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-[#22C55E]" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-6">
              <Link 
                href="/yamac-parasutu"
                className="inline-flex items-center space-x-2 text-[#0B1D3A] font-semibold hover:text-[#4A9FD9] transition-colors group"
              >
                <span>Uçuş detaylarını incele</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Image Content */}
          <div className="lg:w-1/2 w-full">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#D4A96A]/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-[#4A9FD9]/20 rounded-full blur-3xl"></div>
              
              {/* Main Image */}
              <div className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                <Image
                  src="/images/experience/antalya-falezler-ucus.jpg"
                  alt="Antalya Falezler üzerinde yamaç paraşütü uçuşu"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              
              {/* Floating card */}
              <div className="absolute -left-4 md:-left-12 bottom-10 bg-white p-4 md:p-6 rounded-2xl shadow-xl flex items-center space-x-4 border border-gray-100 animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="w-12 h-12 rounded-full bg-[#0B1D3A] flex items-center justify-center">
                  <span className="text-white font-bold text-xl">15m</span>
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Ortalama</p>
                  <p className="text-[#1A1A2E] font-bold">Uçuş Süresi</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
