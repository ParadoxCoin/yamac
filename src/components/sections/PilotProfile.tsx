import Image from 'next/image';
import { Award, CheckCircle2, Star, ShieldCheck, Trophy, ExternalLink } from 'lucide-react';
import { siteConfig } from '@/lib/config/site';

export default function PilotProfile({ locale }: { locale?: string; dict?: any }) {
  const isTr = locale !== 'en';

  return (
    <section id="pilot" className="py-20 bg-[#0B1D3A] text-[#F8F9FA]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#4A9FD9] text-sm font-semibold tracking-wider uppercase mb-2 block">
            {isTr ? 'Gökyüzünde Güvenli Gökyüzü ellerdesiniz' : 'In Safe Hands in the Sky'}
          </span>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mb-4">
            {isTr ? 'Sizi Gökyüzünde Kim Uçuruyor?' : 'Who Flies You in the Sky?'}
          </h2>
          <p className="text-gray-300 text-lg">
            {isTr
              ? "23 yıllık deneyim ve 10.000'den fazla tandem uçuş tecrübesi ile Antalya Varyant ve Falezler üzerinde emniyetli ve unutulmaz bir deneyim."
              : "Safe and unforgettable flights over Antalya Varyant and Falezler with 23 years of experience and 10,000+ flights."}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Pilot Photo */}
          <div className="lg:col-span-5 relative">
            <div className="relative h-[480px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-[#122B5C]">
              <Image
                src="/images/pilot/mehmet-bayraktar.jpg"
                alt="Mehmet Bayraktar - Tandem Yamaç Paraşütü Pilotu"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
            
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-2 md:right-4 bg-[#D4A96A] text-[#0B1D3A] p-4 rounded-2xl shadow-xl flex items-center gap-3 border-2 border-white">
              <Trophy className="w-8 h-8 flex-shrink-0" />
              <div>
                <div className="font-extrabold text-base">23 Yıllık Deneyim</div>
                <div className="text-xs font-semibold">10.000+ Tandem Uçuş</div>
              </div>
            </div>
          </div>

          {/* Pilot Info Details */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="flex items-center gap-2 text-[#4A9FD9] font-medium text-sm mb-1">
                <Star className="w-4 h-4 fill-current text-[#D4A96A]" /> {siteConfig.pilot.origin}
              </div>
              <h3 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-white mb-2">
                {siteConfig.pilot.name}
              </h3>
              <p className="text-[#D4A96A] font-semibold text-lg">
                {siteConfig.pilot.certification}
              </p>
            </div>

            <p className="text-gray-300 leading-relaxed text-base">
              {isTr
                ? "T.C. Gençlik ve Spor Bakanlığı, Türkiye Hava Sporları Federasyonu (THSF) ve Uluslararası Havacılık Federasyonu (FAI) tarafından verilen resmi T2 Commercial Tandem Pilot (Ticari Tandem Pilotu) Lisansı (Lisans No: 1019) ile Antalya Varyant Seyir Terası'ndan uluslararası standartlarda emniyetli tandem uçuşlar gerçekleştirilmektedir."
                : "Official T2 Commercial Tandem Pilot license (No: 1019) issued by the Turkish Air Sports Federation (THSF) and FAI. Over 23 years of professional experience flying tandem paragliders."}
            </p>

            {/* Qualifications Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 bg-[#122B5C] p-4 rounded-2xl border border-gray-700">
                <ShieldCheck className="w-6 h-6 text-[#4A9FD9] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white text-sm">Resmi THSF & FAI Sertifikası</h4>
                  <p className="text-xs text-gray-300">T2 Ticari Tandem Pilot Yeterlilik Belgesi (No: 1019)</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-[#122B5C] p-4 rounded-2xl border border-gray-700">
                <Award className="w-6 h-6 text-[#D4A96A] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white text-sm">Test Raporlu Ekipmanlar</h4>
                  <p className="text-xs text-gray-300">Periyodik test ve bakımları yapılmış yedek paraşütlü takımlar</p>
                </div>
              </div>
            </div>

            {/* Certificate Buttons */}
            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <a
                href="/images/pilot/thsf-sertifika.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#4A9FD9] hover:bg-[#3b8bc4] text-white font-bold rounded-xl transition-all shadow-lg text-sm"
              >
                <CheckCircle2 className="w-5 h-5" />
                {isTr ? 'THSF Resmi Pilot Sertifikası' : 'Official THSF License'}
                <ExternalLink className="w-4 h-4 ml-1" />
              </a>

              <a
                href="/images/pilot/mehmet-bayraktar-odul.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-gray-600 hover:border-gray-400 text-gray-200 rounded-xl transition-all text-sm font-semibold"
              >
                🏆 {isTr ? 'Ödüller & Dereceler' : 'Awards & Trophies'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
