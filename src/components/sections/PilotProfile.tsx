import Image from 'next/image';
import { Award, FileCheck, CheckCircle2, Star } from 'lucide-react';

export default function PilotProfile({ locale, dict }: { locale?: string; dict?: any }) {
  return (
    <section className="py-20 bg-[#0B1D3A] text-[#F8F9FA]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto bg-[#122B5C] rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
          
          {/* Photo Column */}
          <div className="md:w-2/5 p-8 flex flex-col items-center justify-center bg-black/20">
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-[#D4A96A] mb-6 shadow-xl">
              {/* Fallback avatar if no image */}
              <div className="absolute inset-0 bg-gray-700 flex items-center justify-center">
                <span className="text-gray-400 text-sm">Fotoğraf</span>
              </div>
              <Image
                src="/images/pilot/pilot-profile.jpg"
                alt="Pilot Profil"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <h3 className="font-playfair text-2xl font-bold text-center">[ADMIN TARAFINDAN DOLDURULACAK]</h3>
            <p className="text-[#4A9FD9] font-medium text-center mt-1">T2 Ticari Tandem Pilotu</p>
            
            <div className="flex items-center space-x-1 mt-3 text-[#D4A96A]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
          </div>

          {/* Info Column */}
          <div className="md:w-3/5 p-8 md:p-10">
            <h4 className="text-xl font-semibold mb-6 border-b border-white/10 pb-4 flex items-center">
              <Award className="w-5 h-5 mr-3 text-[#D4A96A]" />
              Sertifikalar ve Deneyim
            </h4>
            
            <ul className="space-y-4 mb-8">
              {[
                'THK (Türk Hava Kurumu) T2 Ticari Tandem Sertifikası',
                'FAI (Uluslararası Havacılık Federasyonu) Lisansı',
                '[X]+ Yıllık Uçuş Tecrübesi',
                '[X.XXX]+ Başarılı Tandem Uçuşu',
                'İlkyardım ve Acil Durum Müdahale Eğitimi'
              ].map((item, i) => (
                <li key={i} className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#22C55E] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>

            <div className="bg-[#0B1D3A] rounded-xl p-4 flex items-center justify-between border border-white/5">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-[#122B5C] rounded-lg flex items-center justify-center">
                  <FileCheck className="w-5 h-5 text-[#4A9FD9]" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Lisans Numarası</p>
                  <p className="font-mono font-medium tracking-wider">T2-***<span className="opacity-50">****</span></p>
                </div>
              </div>
              <a 
                href="/sertifika.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-[#4A9FD9] hover:text-white transition-colors"
              >
                Belgeyi Görüntüle
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
