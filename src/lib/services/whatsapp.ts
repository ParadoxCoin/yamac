import { siteConfig } from '@/lib/config/site';

export interface BookingData {
  fullName: string;
  whatsappNumber: string;
  personCount: number;
  preferredDate: string;
  alternativeDate?: string;
  preferredTime?: string;
  weightPerPerson?: string;
  height?: string;
  accommodationArea?: string;
  specialNote?: string;
  photoVideoRequest: boolean;
}

export function generateWhatsAppUrl(data?: BookingData, locale: string = 'tr'): string {
  const phone = siteConfig.whatsappNumber.replace(/[^0-9]/g, '');
  const isTr = locale !== 'en';
  
  if (!data) {
    const defaultMessage = isTr
      ? `Merhaba, Antalya Varyant'ta yamaç paraşütü yapmak istiyorum.\n\nAd Soyad:\nKişi Sayısı:\nTercih Edilen Tarih:\nTercih Edilen Saat:\nYaklaşık Kilo:\nKonaklama Bölgesi:\n\nUçuş koşulları ve uygunluk hakkında bilgi almak istiyorum.`
      : `Hello, I would like to book tandem paragliding in Antalya.\n\nFull Name:\nNumber of People:\nPreferred Date:\nPreferred Time:\nApproximate Weight:\nAccommodation Area:\n\nI would like information about flight conditions and availability.`;
    
    return `https://wa.me/${phone}?text=${encodeURIComponent(defaultMessage)}`;
  }

  const message = isTr
    ? `Merhaba, yamaç paraşütü randevu talebi göndermek istiyorum.\n\n` +
      `Ad Soyad: ${data.fullName}\n` +
      `WhatsApp: ${data.whatsappNumber}\n` +
      `Kişi Sayısı: ${data.personCount}\n` +
      `Tercih Edilen Tarih: ${data.preferredDate}\n` +
      (data.alternativeDate ? `Alternatif Tarih: ${data.alternativeDate}\n` : '') +
      (data.preferredTime ? `Tercih Edilen Saat: ${data.preferredTime}\n` : '') +
      (data.weightPerPerson ? `Kişi Başı Yaklaşık Ağırlık: ${data.weightPerPerson} kg\n` : '') +
      (data.height ? `Boy: ${data.height} cm\n` : '') +
      (data.accommodationArea ? `Konaklama Bölgesi: ${data.accommodationArea}\n` : '') +
      (data.specialNote ? `Özel Not: ${data.specialNote}\n` : '') +
      `Fotoğraf/Video Çekimi: ${data.photoVideoRequest ? 'Evet' : 'Hayır'}\n` +
      `\nUçuş koşulları ve uygunluk hakkında bilgi almak istiyorum.`
    : `Hello, I would like to send a paragliding booking request.\n\n` +
      `Full Name: ${data.fullName}\n` +
      `WhatsApp: ${data.whatsappNumber}\n` +
      `Number of People: ${data.personCount}\n` +
      `Preferred Date: ${data.preferredDate}\n` +
      (data.alternativeDate ? `Alternative Date: ${data.alternativeDate}\n` : '') +
      (data.preferredTime ? `Preferred Time: ${data.preferredTime}\n` : '') +
      (data.weightPerPerson ? `Weight per Person: ${data.weightPerPerson} kg\n` : '') +
      (data.height ? `Height: ${data.height} cm\n` : '') +
      (data.accommodationArea ? `Accommodation Area: ${data.accommodationArea}\n` : '') +
      (data.specialNote ? `Special Note: ${data.specialNote}\n` : '') +
      `Photo/Video Request: ${data.photoVideoRequest ? 'Yes' : 'No'}\n` +
      `\nI would like information about flight conditions and availability.`;

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export function generateQuickWhatsAppUrl(locale: string = 'tr'): string {
  return generateWhatsAppUrl(undefined, locale);
}
