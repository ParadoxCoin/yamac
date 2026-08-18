import { z } from 'zod';

const phoneRegex = /^(\+?90|0)?5\d{9}$/;

export const bookingSchema = z.object({
  fullName: z.string().min(2, { message: 'İsim en az 2 karakter olmalıdır' }),
  whatsappNumber: z.string().regex(phoneRegex, { message: 'Geçerli bir telefon numarası giriniz' }),
  personCount: z.number().min(1).max(20),
  preferredDate: z.string().min(1, { message: 'Tarih seçimi zorunludur' }),
  alternativeDate: z.string().optional(),
  preferredTime: z.string().optional(),
  weightPerPerson: z.string().optional(),
  height: z.string().optional(),
  accommodationArea: z.string().optional(),
  specialNote: z.string().optional(),
  photoVideoRequest: z.boolean().default(false),
});

export const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

export type BookingFormData = z.infer<typeof bookingSchema>;
export type ContactFormData = z.infer<typeof contactSchema>;
