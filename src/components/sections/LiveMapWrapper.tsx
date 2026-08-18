'use client';

import dynamic from 'next/dynamic';

const LiveMap = dynamic(() => import('@/components/sections/LiveMap'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[420px] rounded-2xl bg-gray-100 animate-pulse flex items-center justify-center text-gray-400">
      Harita yükleniyor...
    </div>
  ),
});

export default function LiveMapWrapper({ locale }: { locale: string }) {
  return <LiveMap locale={locale} />;
}
