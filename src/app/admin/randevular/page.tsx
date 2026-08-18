export default function AdminBookingsPage() {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-[#0B1D3A]">Randevu Talepleri Yönetimi</h1>
          <p className="text-gray-500 text-sm">Form üzerinden gönderilen tüm WhatsApp randevu talepleri</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
          <span className="text-sm font-semibold text-gray-700">Tüm Kayıtlar (0)</span>
          <span className="text-xs text-gray-500">KVKK Uyumlu Güvenli Liste</span>
        </div>

        <div className="p-12 text-center text-gray-400">
          Henüz kaydedilmiş randevu talebi bulunmamaktadır.
        </div>
      </div>
    </div>
  );
}
