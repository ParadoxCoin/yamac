export interface BlogPost {
  slug: string;
  locale: 'tr' | 'en';
  title: string;
  metaDescription: string;
  excerpt: string;
  content: string; // HTML or Markdown formatted content
  category: string;
  publishDate: string;
  readTime: string;
  author: string;
  image: string;
  tags: string[];
}

export const blogPosts: Record<string, BlogPost> = {
  'antalya-yamac-parasutu-nasil-yapilir-rehber': {
    slug: 'antalya-yamac-parasutu-nasil-yapilir-rehber',
    locale: 'tr',
    title: "Antalya'da Yamaç Paraşütü Nasıl Yapılır? Adım Adım Rehber",
    metaDescription: "Antalya Varyant ve Falezler bölgesinde tandem yamaç paraşütü uçuş deneyimi nasıl gerçekleşir? Buluşmadan inişe kadar tüm detaylı rehber.",
    excerpt: "Gökyüzünde özgürce süzülmek istiyorsunuz ama sürecin nasıl işlediğini merak mı ediyorsunuz? İşte Antalya falezlerinde ilk yamaç paraşütü deneyiminizin adım adım detayları.",
    category: "Rehber",
    publishDate: "2026-08-10",
    readTime: "5 dk",
    author: "Kıdemli Tandem Pilotu",
    image: "/images/gallery/antalya-yamac-parasutu-kalkis.jpg",
    tags: ["Antalya Yamaç Paraşütü", "Tandem Uçuş", "Falezler", "Varyant"],
    content: `
      <h2>1. Randevu Talebi ve Hava Koşulları Kontrolü</h2>
      <p>Antalya'da yamaç paraşütü deneyimi doğrudan yerel rüzgar ve hava şartlarına bağlıdır. Uçuş günü öncesinde ekibimiz meteorolojik verileri (Open-Meteo ve hava sahası rüzgar radarları) inceleyerek uçuş penceresini teyit eder.</p>
      
      <h2>2. Kalkış Noktasında Buluşma (Varyant / Atatürk Parkı Falez Alanı)</h2>
      <p>Belirlenen randevu saatinde Antalya merkezde yer alan kalkış noktasında pilotunuzla buluşursunuz. Uçuş öncesinde kısa bir tanışma ve emniyet bilgilendirmesi (briefing) yapılır.</p>
      
      <h2>3. Ekipman Hazırlığı ve Kask Takılması</h2>
      <p>Deneyimli pilotunuz yolcu harnesini (oturma kuşamı) boyunuza ve kilonuza göre ayarlar. Tüm kilitler çift kontrol edilir. Kask takılarak kalkış koşusu için hazır hale gelinir.</p>
      
      <h2>4. Kalkış Anı (Koş ve Gökyüzüne Yüksel)</h2>
      <p>Tandem yamaç paraşütünde uçurumdan atlama yoktur! Rüzgar kanadı kaldırdığında, pilotun talimatıyla ileri doğru birkaç adım koşmanız yeterlidir. Ayaklarınız yerden kesildiğinde kendinizi Akdeniz manzarasına bırakırsınız.</p>
      
      <h2>5. Havada Süzülüş ve Aksiyon Kamerası Çekimleri</h2>
      <p>Uçuş boyunca falezlerin, Konyaaltı plajının ve Toros dağlarının eşsiz manzarasını seyredersiniz. Pilotunuz 4K aksiyon kamerası ile bu anları ölümsüzleştirir.</p>
      
      <h2>6. Konyaaltı Sahiline Yumuşak İniş</h2>
      <p>Uçuş süresi sonunda Konyaaltı sahilindeki iniş alanına doğru yaklaşma yapılır. Ayakta birkaç adım atarak son derece konforlu ve güvenli bir iniş gerçekleştirilir.</p>
    `
  },
  'antalya-yamac-parasutu-guvenli-mi-bilmeniz-gerekenler': {
    slug: 'antalya-yamac-parasutu-guvenli-mi-bilmeniz-gerekenler',
    locale: 'tr',
    title: "Yamaç Paraşütü Güvenli mi? Güvenlik Standardı ve İpuçları",
    metaDescription: "Antalya falezlerinde tandem yamaç paraşütü güvenliği hakkında bilmeniz gereken her şey. Pilot sertifikaları, yedek paraşüt ve hava şartları kontrolü.",
    excerpt: "Yamaç paraşütü yapmayı düşünüyor ama güvenlik konusunda endişe mi duyuyorsunuz? Tandem uçuşlarda güvenlik protokollerimizi keşfedin.",
    category: "Güvenlik",
    publishDate: "2026-08-12",
    readTime: "6 dk",
    author: "Uçuş Emniyet Uzmanı",
    image: "/images/gallery/antalya-falezler-yamac-parasutu-hava.jpg",
    tags: ["Güvenlik", "Tandem Pilot", "Yedek Paraşüt", "Sertifika"],
    content: `
      <h2>Tandem Uçuşlarda Güvenlik Standartları</h2>
      <p>Tandem (iki kişilik) yamaç paraşütü, ticari ve ulusal havacılık federasyonlarının sıkı denetim ve standartlarına tabidir. Sizi uçuran pilotlar binlerce saatlik uçuş tecrübesine ve resmi sertifikalara sahiptir.</p>
      
      <h2>Hava Koşulları ve Uçuş Kararı</h2>
      <p>Yamaç paraşütünde emniyetin birinci kuralı doğru hava durumunu değerlendirmektir. Rüzgar hızı, yönü veya türbülans limitleri aşıldığında uçuşlar derhal ertelenir veya iptal edilir.</p>
      
      <h2>Ekipman Bakımı ve Çift Yedek Sistemler</h2>
      <p>Kullanılan tüm tandem kanatlar, kuşamlar ve kasklar uluslararası test kuruluşları (EN/LTF) tarafından sertifikalandırılmıştır. Her tandem takımında zorunlu yedek paraşüt sistemi bulunur.</p>
    `
  },
  'antalya-paragliding-guide-for-tourists': {
    slug: 'antalya-paragliding-guide-for-tourists',
    locale: 'en',
    title: "Antalya Paragliding Guide for Tourists: Flights Over Falezler & Coastline",
    metaDescription: "Everything international tourists need to know about tandem paragliding in Antalya. Requirements, booking via WhatsApp, takeoff location, and prices.",
    excerpt: "Visiting Antalya and looking for an unforgettable adventure? Soar over the Mediterranean cliffs with certified tandem pilots. Read our essential tourist guide.",
    category: "Guide",
    publishDate: "2026-08-14",
    readTime: "4 min",
    author: "Senior Flight Captain",
    image: "/images/hero/antalya-yamac-parasutu-hero.jpg",
    tags: ["Antalya Paragliding", "Tandem Flight", "Turkey Adventure", "Varyant"],
    content: `
      <h2>Why Paraglide in Antalya City Center?</h2>
      <p>Unlike distant flight sites requiring hours of travel, flying over Antalya's Varyant and Falezler cliffs allows you to experience breathtaking coastal views right from the heart of the city.</p>
      
      <h2>What Should You Wear & Bring?</h2>
      <ul>
        <li>Comfortable sports shoes (sneakers)</li>
        <li>Sunglasses</li>
        <li>Comfortable clothes suited for the season</li>
      </ul>
      
      <h2>How to Book via WhatsApp</h2>
      <p>We keep booking fast and friction-free. Simply send us a message on WhatsApp with your preferred date, time, and number of passengers. We will verify real-time weather conditions and confirm your flight slot.</p>
    `
  }
};
