'use client';

import { CheckCircle2, Calendar, Clock, Users, ArrowLeft, MessageCircle } from 'lucide-react';

interface BookingSummaryProps {
  data: any;
  onBack: () => void;
}

export default function BookingSummary({ data, onBack }: BookingSummaryProps) {
  // Format the date nicely
  const formattedDate = new Date(data.date).toLocaleDateString('tr-TR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  // Construct WhatsApp Message
  const waMessage = `Merhaba, web sitesi üzerinden randevu talebi oluşturdum.
Bilgilerim:
İsim: ${data.fullName}
Tarih: ${formattedDate}
Saat: ${data.timeFrame}
Kişi: ${data.participantCount}
${data.weight ? `Kilo: ${data.weight} kg` : ''}
${data.notes ? `Not: ${data.notes}` : ''}
  `;
  
  const encodedMessage = encodeURIComponent(waMessage);
  const waLink = `https://wa.me/905555555555?text=${encodedMessage}`;

  return (
    <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 md:p-10 max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8 text-green-500" />
        </div>
        <h2 className="font-playfair text-2xl font-bold text-[#0B1D3A] mb-2">
          Randevu Özeti Hazır
        </h2>
        <p className="text-gray-600">
          Talebiniz oluşturuldu. Uçuş uygunluğu ve kesin saat için bilgileri WhatsApp üzerinden ekibimize iletiniz.
        </p>
      </div>

      <div className="bg-[#FAFBFC] border border-gray-200 rounded-2xl p-6 mb-8">
        <h3 className="font-semibold text-lg text-[#1A1A2E] mb-4 border-b pb-2">Talep Detayları</h3>
        
        <ul className="space-y-4">
          <li className="flex items-start">
            <span className="w-32 text-gray-500 text-sm">Ad Soyad:</span>
            <span className="font-medium text-[#1A1A2E]">{data.fullName}</span>
          </li>
          <li className="flex items-start">
            <span className="w-32 text-gray-500 text-sm">İletişim:</span>
            <span className="font-medium text-[#1A1A2E]">{data.phone}</span>
          </li>
          <li className="flex items-start">
            <Calendar className="w-4 h-4 text-[#4A9FD9] mr-2 mt-0.5" />
            <span className="w-26 text-gray-500 text-sm mr-2">Tarih:</span>
            <span className="font-medium text-[#1A1A2E]">{formattedDate}</span>
          </li>
          <li className="flex items-start">
            <Clock className="w-4 h-4 text-[#4A9FD9] mr-2 mt-0.5" />
            <span className="w-26 text-gray-500 text-sm mr-2">Saat Aralığı:</span>
            <span className="font-medium text-[#1A1A2E]">{data.timeFrame}</span>
          </li>
          <li className="flex items-start">
            <Users className="w-4 h-4 text-[#4A9FD9] mr-2 mt-0.5" />
            <span className="w-26 text-gray-500 text-sm mr-2">Kişi Sayısı:</span>
            <span className="font-medium text-[#1A1A2E]">{data.participantCount} Kişi</span>
          </li>
          {data.weight && (
            <li className="flex items-start">
              <span className="w-32 text-gray-500 text-sm">Kilo:</span>
              <span className="font-medium text-[#1A1A2E]">{data.weight} kg</span>
            </li>
          )}
        </ul>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <button 
          onClick={onBack}
          className="flex-1 flex items-center justify-center space-x-2 border border-gray-300 text-gray-700 py-3.5 rounded-xl font-medium hover:bg-gray-50 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Düzenle</span>
        </button>
        <a 
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-[2] flex items-center justify-center space-x-2 bg-[#22C55E] hover:bg-[#1ea951] text-white py-3.5 rounded-xl font-bold transition-transform hover:scale-[1.02] shadow-lg shadow-green-500/20"
        >
          <MessageCircle className="w-5 h-5" />
          <span>WhatsApp'ta Gönder</span>
        </a>
      </div>
    </div>
  );
}
