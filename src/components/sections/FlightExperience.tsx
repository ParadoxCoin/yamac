import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';

export default function FlightExperience({ locale }: { locale?: string; dict?: any }) {
  const isTr = locale !== 'en';
  const currentLocale = locale || 'tr';

  return (
    <section id="experience" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="lg:w-1/2 space-y-6">
            <div className="inline-block px-4 py-1.5 bg-[#4A9FD9]/10 rounded-full text-[#4A9FD9] font-semibold text-sm mb-2">
              {isTr ? 'Özel Bir Deneyim' : 'Unique Experience'}
            </div>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B1D3A] leading-tight">
              {isTr ? (
                <>Antalya Falezler Üzerinde <span className="text-[#D4A96A]">Kusursuz Uçuş</span></>
              ) : (
                <>Unforgettable Flight Over <span className="text-[#D4A96A]">Antalya Cliffs</span></>
              )}
            </h2>
            
            <div className="prose prose-lg text-gray-600 space-y-3">
              <p>
                {isTr ? (
                  <>Şehrin gürültüsünden uzaklaşarak, efsanevi <Link href={`/${currentLocale}/antalya-falezler-yamac-parasutu`} className="text-[#4A9FD9] hover:underline font-semibold">Antalya Falezleri</Link> üzerinden Akdeniz'in sonsuz maviliğine doğru süzülün. Varyant ahşap seyir terasından başlayan bu serüven, size şehrin en güzel manzarasını kuş bakışı sunuyor.</>
                ) : (
                  <>Soar smoothly over the famous cliffs of Antalya towards the Mediterranean sea. Starting from the Varyant viewpoint terrace, experience the most scenic aerial views of the city.</>
                )}
              </p>
              <p>
                {isTr ? (
                  <>Konyaaltı plajının eşsiz kıyı şeridini, Beydağları'nın ihtişamını ve denizin turkuaz tonlarını havadan izlerken, 23 yıllık tecrübeli THSF/FAI sertifikalı tandem pilotumuz Mehmet Bayraktar eşliğinde kendinizi güvende hissedeceksiniz.</>
                ) : (
                  <>Flown safely by commercial THSF/FAI certified tandem pilot Mehmet Bayraktar with 23 years of flying experience.</>
                )}
              </p>
            </div>

            <ul className="space-y-3 pt-2">
              {[
                isTr ? '5 yaşından 90 yaşına kadar herkes uçabilir' : 'Suitable for ages 5 to 90',
                isTr ? 'Konyaaltı Varyant ahşap seyir terasından kolay kalkış' : 'Easy takeoff from Varyant wooden terrace',
                isTr ? 'Hava durumuna göre kalkış alanına veya plaja iniş' : 'Landing at takeoff spot or beach',
                isTr ? 'Fotoğraf ve 4K Video Çekimi Dahil' : 'Includes HD photos and 4K video capture',
                isTr ? 'Üst kilo limiti 100 kg (Uygun rüzgarda 105 kg)' : 'Weight limit 100 kg (up to 105 kg if wind permits)',
              ].map((item, i) => (
                <li key={i} className="flex items-start space-x-3 text-gray-700 font-medium">
                  <div className="w-5 h-5 rounded-full bg-[#22C55E]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-[#22C55E]" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <Link 
                href={`/${currentLocale}#pricing`}
                className="inline-flex items-center space-x-2 text-[#0B1D3A] font-bold hover:text-[#4A9FD9] transition-colors group"
              >
                <span>{isTr ? 'Fiyat ve Paket Detayları' : 'Pricing & Package Details'}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-[#4A9FD9]" />
              </Link>
            </div>
          </div>

          {/* Image Content */}
          <div className="lg:w-1/2 w-full">
            <div className="relative">
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#D4A96A]/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-[#4A9FD9]/20 rounded-full blur-3xl"></div>
              
              <div className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                <Image
                  src="/images/gallery/falezler-turkuaz-ucus.jpg"
                  alt="Antalya Falezler üzerinde turkuaz yamaç paraşütü uçuşu"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -left-4 md:-left-8 bottom-8 bg-white p-4 md:p-5 rounded-2xl shadow-xl flex items-center space-x-4 border border-gray-100 animate-bounce" style={{ animationDuration: '4s' }}>
                <div className="w-12 h-12 rounded-full bg-[#0B1D3A] flex items-center justify-center flex-shrink-0">
                  <span className="text-[#4A9FD9] font-bold text-lg">15m</span>
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">{isTr ? 'Ortalama' : 'Average'}</p>
                  <p className="text-[#0B1D3A] font-bold text-sm">{isTr ? 'Uçuş Süresi (15-20 dk)' : 'Flight Time (15-20 min)'}</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
