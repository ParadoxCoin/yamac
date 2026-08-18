import Link from 'next/link';
import { Calendar, Settings, User, Image as ImageIcon, LayoutDashboard, Compass } from 'lucide-react';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body className="min-h-screen bg-gray-100 font-sans antialiased text-gray-800">
        <div className="flex min-h-screen">
          {/* Sidebar */}
          <aside className="w-64 bg-[#0B1D3A] text-white flex flex-col p-6 shadow-xl">
            <div className="flex items-center gap-3 mb-10 pb-4 border-b border-gray-700">
              <Compass className="w-8 h-8 text-[#4A9FD9]" />
              <div>
                <h1 className="font-bold text-lg leading-tight">Yamaç Paraşütü</h1>
                <span className="text-xs text-[#7BC4E8]">Yönetim Paneli</span>
              </div>
            </div>

            <nav className="space-y-2 flex-1">
              <Link
                href="/admin"
                className="flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl hover:bg-[#122B5C] transition-colors"
              >
                <LayoutDashboard className="w-5 h-5 text-[#4A9FD9]" />
                Dashboard
              </Link>

              <Link
                href="/admin/randevular"
                className="flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl hover:bg-[#122B5C] transition-colors"
              >
                <Calendar className="w-5 h-5 text-[#4A9FD9]" />
                Randevu Talepleri
              </Link>

              <Link
                href="/admin/site-ayarlari"
                className="flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl hover:bg-[#122B5C] transition-colors"
              >
                <Settings className="w-5 h-5 text-[#4A9FD9]" />
                Site Ayarları
              </Link>
            </nav>

            <div className="pt-6 border-t border-gray-700 text-xs text-gray-400">
              Antalya Paragliding Admin v1.0
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="flex-1 p-8 overflow-y-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
