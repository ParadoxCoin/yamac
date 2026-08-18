import Link from 'next/link';
import { Compass } from 'lucide-react';

export default function NotFound() {
  return (
    <html lang="tr">
      <body className="min-h-screen flex items-center justify-center bg-[#FAFBFC]">
        <div className="max-w-lg mx-auto px-4 text-center">
          <div className="mb-8">
            <Compass className="w-24 h-24 mx-auto text-[#4A9FD9] animate-pulse" />
          </div>

          <h1 className="text-6xl font-bold text-[#0B1D3A] mb-4">404</h1>

          <h2 className="text-2xl font-semibold text-[#122B5C] mb-4">
            Bu sayfa rotadan çıktı
          </h2>

          <p className="text-gray-600 mb-8">
            Aradığınız sayfa bulunamadı. Belki rüzgar yönü değişmiştir.
            Aşağıdaki bağlantılardan devam edebilirsiniz.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tr"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#0B1D3A] text-white rounded-lg hover:bg-[#122B5C] transition-colors font-medium"
            >
              Ana Sayfa
            </Link>

            <Link
              href="/tr/antalya-yamac-parasutu"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-[#0B1D3A] text-[#0B1D3A] rounded-lg hover:bg-[#0B1D3A] hover:text-white transition-colors font-medium"
            >
              Yamaç Paraşütü
            </Link>

            <a
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '905XXXXXXXXX'}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#25D366] text-white rounded-lg hover:bg-[#1DA851] transition-colors font-medium"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}
