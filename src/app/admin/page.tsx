import Link from 'next/link';
import { Calendar, CheckCircle2, Clock, MessageSquare, AlertCircle } from 'lucide-react';

export default function AdminDashboardPage() {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-[#0B1D3A]">Yönetim Paneli Özet</h1>
          <p className="text-gray-500 text-sm">Gelen randevu talepleri ve site durum kontrolleri</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 flex items-center gap-4">
          <div className="p-4 bg-blue-50 text-blue-600 rounded-xl">
            <Calendar className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-bold text-gray-900">0</div>
            <div className="text-xs text-gray-500 font-medium">Yeni Randevu</div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 flex items-center gap-4">
          <div className="p-4 bg-amber-50 text-amber-600 rounded-xl">
            <Clock className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-bold text-gray-900">0</div>
            <div className="text-xs text-gray-500 font-medium">Onay Bekleyen</div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 flex items-center gap-4">
          <div className="p-4 bg-emerald-50 text-emerald-600 rounded-xl">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-bold text-gray-900">0</div>
            <div className="text-xs text-gray-500 font-medium">Tamamlanan Uçuş</div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 flex items-center gap-4">
          <div className="p-4 bg-purple-50 text-purple-600 rounded-xl">
            <MessageSquare className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-bold text-gray-900">WhatsApp</div>
            <div className="text-xs text-gray-500 font-medium">Aktif Yönlendirme</div>
          </div>
        </div>
      </div>

      {/* Quick Action & Status */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 mb-8">
        <h2 className="text-lg font-bold text-[#0B1D3A] mb-4 flex items-center gap-2">
          <AlertCircle className="w-5 h-5 text-amber-500" />
          Hızlı Bilgilendirme
        </h2>
        <p className="text-sm text-gray-600 leading-relaxed">
          Sitedeki tüm müşteri talepleri online ödeme alınmadan doğrudan WhatsApp randevu sistemine yönlendirilir. KVKK politikası uyarınca müşteri kişisel verileri güvenli şekilde saklanmaktadır.
        </p>
      </div>
    </div>
  );
}
