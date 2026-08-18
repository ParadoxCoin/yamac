'use client';

import { useState } from 'react';
import { z } from 'zod';
import BookingSummary from './BookingSummary';

// Zod schema for validation
const bookingSchema = z.object({
  fullName: z.string().min(3, { message: 'Ad Soyad en az 3 karakter olmalıdır.' }),
  phone: z.string().regex(/^[0-9\-\+\s\(\)]{10,15}$/, { message: 'Geçerli bir telefon numarası giriniz.' }),
  email: z.string().email({ message: 'Geçerli bir e-posta adresi giriniz.' }),
  date: z.string().min(1, { message: 'Lütfen bir tarih seçiniz.' }),
  timeFrame: z.string().min(1, { message: 'Lütfen saat aralığı seçiniz.' }),
  participantCount: z.number().min(1).max(10),
  weight: z.number().min(20, { message: 'Minimum 20 kg.' }).max(110, { message: 'Maksimum 110 kg.' }).optional().or(z.literal('')),
  notes: z.string().optional(),
  honeypot: z.string().max(0) // Anti-spam
});

type BookingFormData = z.infer<typeof bookingSchema>;

export default function BookingForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<BookingFormData | null>(null);
  const [errors, setErrors] = useState<Partial<Record<keyof BookingFormData, string>>>({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    
    const rawData = {
      fullName: data.get('fullName') as string,
      phone: data.get('phone') as string,
      email: data.get('email') as string,
      date: data.get('date') as string,
      timeFrame: data.get('timeFrame') as string,
      participantCount: parseInt(data.get('participantCount') as string, 10) || 1,
      weight: data.get('weight') ? parseInt(data.get('weight') as string, 10) : '',
      notes: data.get('notes') as string,
      honeypot: data.get('honeypot') as string,
    };

    try {
      const validData = bookingSchema.parse(rawData);
      setErrors({});
      setFormData(validData);
      setIsSubmitted(true);
    } catch (err) {
      if (err instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        err.issues.forEach((error) => {
          if (error.path[0]) {
            fieldErrors[error.path[0] as string] = error.message;
          }
        });
        setErrors(fieldErrors);
      }
    }
  };

  if (isSubmitted && formData) {
    return <BookingSummary data={formData} onBack={() => setIsSubmitted(false)} />;
  }

  return (
    <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 md:p-10 max-w-2xl mx-auto">
      <h2 className="font-playfair text-2xl font-bold text-[#0B1D3A] mb-6 border-b pb-4">
        Randevu Talebi Oluştur
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Anti-spam honeypot */}
        <input type="text" name="honeypot" className="hidden" tabIndex={-1} autoComplete="off" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Ad Soyad */}
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
              Ad Soyad <span className="text-red-500">*</span>
            </label>
            <input 
              type="text" 
              id="fullName" 
              name="fullName" 
              className={`w-full px-4 py-2.5 rounded-lg border ${errors.fullName ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-[#4A9FD9] focus:border-transparent outline-none transition-all bg-[#FAFBFC]`}
              placeholder="Örn: Ahmet Yılmaz"
            />
            {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
          </div>

          {/* Telefon */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Telefon <span className="text-red-500">*</span>
            </label>
            <input 
              type="tel" 
              id="phone" 
              name="phone" 
              className={`w-full px-4 py-2.5 rounded-lg border ${errors.phone ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-[#4A9FD9] focus:border-transparent outline-none transition-all bg-[#FAFBFC]`}
              placeholder="Örn: 0555 555 5555"
            />
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
          </div>

          {/* Email */}
          <div className="md:col-span-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              E-posta <span className="text-red-500">*</span>
            </label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              className={`w-full px-4 py-2.5 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-[#4A9FD9] focus:border-transparent outline-none transition-all bg-[#FAFBFC]`}
              placeholder="Örn: ahmet@email.com"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          {/* Tarih */}
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
              Uçuş Tarihi <span className="text-red-500">*</span>
            </label>
            <input 
              type="date" 
              id="date" 
              name="date" 
              min={new Date().toISOString().split('T')[0]}
              className={`w-full px-4 py-2.5 rounded-lg border ${errors.date ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-[#4A9FD9] focus:border-transparent outline-none transition-all bg-[#FAFBFC]`}
            />
            {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date}</p>}
          </div>

          {/* Saat Aralığı */}
          <div>
            <label htmlFor="timeFrame" className="block text-sm font-medium text-gray-700 mb-1">
              Tercih Edilen Saat <span className="text-red-500">*</span>
            </label>
            <select 
              id="timeFrame" 
              name="timeFrame"
              className={`w-full px-4 py-2.5 rounded-lg border ${errors.timeFrame ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-[#4A9FD9] focus:border-transparent outline-none transition-all bg-[#FAFBFC]`}
            >
              <option value="">Seçiniz...</option>
              <option value="Sabah (09:00 - 12:00)">Sabah (09:00 - 12:00)</option>
              <option value="Öğle (12:00 - 15:00)">Öğle (12:00 - 15:00)</option>
              <option value="Öğleden Sonra (15:00 - 18:00)">Öğleden Sonra (15:00 - 18:00)</option>
              <option value="Gün Batımı">Gün Batımı</option>
            </select>
            {errors.timeFrame && <p className="text-red-500 text-xs mt-1">{errors.timeFrame}</p>}
          </div>

          {/* Kişi Sayısı */}
          <div>
            <label htmlFor="participantCount" className="block text-sm font-medium text-gray-700 mb-1">
              Kişi Sayısı <span className="text-red-500">*</span>
            </label>
            <input 
              type="number" 
              id="participantCount" 
              name="participantCount" 
              min="1"
              max="10"
              defaultValue="1"
              className={`w-full px-4 py-2.5 rounded-lg border ${errors.participantCount ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-[#4A9FD9] focus:border-transparent outline-none transition-all bg-[#FAFBFC]`}
            />
            {errors.participantCount && <p className="text-red-500 text-xs mt-1">{errors.participantCount}</p>}
          </div>

          {/* Kilo (Opsiyonel) */}
          <div>
            <label htmlFor="weight" className="block text-sm font-medium text-gray-700 mb-1">
              Kilonuz (kg) - Opsiyonel
            </label>
            <input 
              type="number" 
              id="weight" 
              name="weight" 
              placeholder="Örn: 75"
              className={`w-full px-4 py-2.5 rounded-lg border ${errors.weight ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-[#4A9FD9] focus:border-transparent outline-none transition-all bg-[#FAFBFC]`}
            />
            {errors.weight && <p className="text-red-500 text-xs mt-1">{errors.weight}</p>}
            <p className="text-xs text-gray-500 mt-1">Sınır: 20-110 kg</p>
          </div>
        </div>

        {/* Notlar */}
        <div>
          <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
            Ek Notlar
          </label>
          <textarea 
            id="notes" 
            name="notes" 
            rows={3}
            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#4A9FD9] focus:border-transparent outline-none transition-all bg-[#FAFBFC] resize-none"
            placeholder="Belirtmek istediğiniz özel bir durum var mı?"
          ></textarea>
        </div>

        <div className="pt-2">
          <button 
            type="submit"
            className="w-full bg-[#0B1D3A] hover:bg-[#122B5C] text-white py-3.5 rounded-xl font-semibold transition-colors shadow-md"
          >
            Devam Et
          </button>
          <p className="text-center text-xs text-gray-500 mt-3">
            Devam ederek KVKK Aydınlatma Metni'ni kabul etmiş olursunuz.
          </p>
        </div>
      </form>
    </div>
  );
}
