export default function AdminSettingsPage() {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-[#0B1D3A]">Site Ayarları & WhatsApp Yapılandırması</h1>
          <p className="text-gray-500 text-sm">İşletme bilgileri, WhatsApp iletişim numarası ve harita koordinatları</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 space-y-6 max-w-3xl">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Marka Adı</label>
          <input
            type="text"
            defaultValue="Antalya Yamaç Paraşütü"
            className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#4A9FD9] focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">WhatsApp İletişim Numarası (Ülke kodu ile)</label>
          <input
            type="text"
            defaultValue="905XXXXXXXXX"
            className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#4A9FD9] focus:outline-none"
          />
          <p className="text-xs text-gray-500 mt-1">.env dosyası üzerinden NEXT_PUBLIC_WHATSAPP_NUMBER ile yönetilmektedir.</p>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">İşletme Adresi (NAP Uyumlu)</label>
          <textarea
            rows={3}
            defaultValue="[ADMIN TARAFINDAN DOLDURULACAK - Varyant / Atatürk Parkı Falez Altyapısı, Muratpaşa / Antalya]"
            className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#4A9FD9] focus:outline-none"
          />
        </div>

        <button className="px-6 py-3 bg-[#0B1D3A] text-white font-semibold rounded-xl hover:bg-[#122B5C] transition-colors">
          Ayarları Kaydet
        </button>
      </div>
    </div>
  );
}
