import { getDictionary } from '@/lib/i18n/getDictionary';
import type { Locale } from '@/lib/i18n/config';
import Hero from '@/components/sections/Hero';
import WhatsAppCTA from '@/components/sections/WhatsAppCTA';
import WeatherConditions from '@/components/sections/WeatherConditions';
import FlightExperience from '@/components/sections/FlightExperience';
import HowItWorks from '@/components/sections/HowItWorks';
import PilotProfile from '@/components/sections/PilotProfile';
import PhotoGallery from '@/components/sections/PhotoGallery';
import WhyUs from '@/components/sections/WhyUs';
import Safety from '@/components/sections/Safety';
import FAQ from '@/components/sections/FAQ';
import Pricing from '@/components/sections/Pricing';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import StickyWhatsApp from '@/components/layout/StickyWhatsApp';
import CookieConsent from '@/components/shared/CookieConsent';
import LiveMapWrapper from '@/components/sections/LiveMapWrapper';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return (
    <>
      <Header locale={locale} dict={dict} />

      <main className="flex-1">
        <Hero locale={locale} dict={dict} />

        <section id="weather" className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <WeatherConditions locale={locale} dict={dict} />
          </div>
        </section>

        <section id="experience" className="py-16 md:py-24 bg-[#FAFBFC]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <FlightExperience locale={locale} dict={dict} />
          </div>
        </section>

        <section id="how-it-works" className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <HowItWorks locale={locale} dict={dict} />
          </div>
        </section>

        <section id="pilot" className="py-16 md:py-24 bg-[#0B1D3A] text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <PilotProfile locale={locale} dict={dict} />
          </div>
        </section>

        <section id="gallery" className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <PhotoGallery locale={locale} dict={dict} />
          </div>
        </section>

        <section id="why-us" className="py-16 md:py-24 bg-[#FAFBFC]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <WhyUs locale={locale} dict={dict} />
          </div>
        </section>

        <section id="pricing" className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <Pricing locale={locale} dict={dict} />
          </div>
        </section>

        <section id="safety" className="py-16 md:py-24 bg-[#FAFBFC]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <Safety locale={locale} dict={dict} />
          </div>
        </section>

        <section id="map" className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-[#0B1D3A] mb-8 text-center">
              {locale === 'tr' ? 'Uçuş Noktasını Haritada Gör' : 'View Takeoff Point on Map'}
            </h2>
            <LiveMapWrapper locale={locale} />
          </div>
        </section>

        <section id="faq" className="py-16 md:py-24 bg-[#FAFBFC]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <FAQ locale={locale} dict={dict} />
          </div>
        </section>

        <WhatsAppCTA locale={locale} dict={dict} />
      </main>

      <Footer locale={locale} dict={dict} />
      <StickyWhatsApp locale={locale} />
      <CookieConsent locale={locale} />
    </>
  );
}
