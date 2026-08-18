import { Metadata } from 'next';

export interface LandingPageSection {
  h2: string;
  content: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface LandingPage {
  slug: string;
  locale: 'tr' | 'en';
  title: string;
  description: string;
  h1: string;
  heroSubtitle: string;
  introText: string;
  sections: LandingPageSection[];
  faqs: FAQ[];
  canonical: string;
  keywords: string[];
}

export const landingPages: Record<string, LandingPage> = {
  'antalya-yamac-parasutu': {
    slug: 'antalya-yamac-parasutu',
    locale: 'tr',
    title: 'Antalya Yamaç Paraşütü | Eşsiz Akdeniz Manzarasıyla Uçuş',
    description: 'Antalya Varyant ve Falezler üzerinden profesyonel pilotlarımız eşliğinde yamaç paraşütü deneyimi yaşayın. Güvenli, heyecan verici ve unutulmaz bir uçuş sizi bekliyor.',
    h1: 'Antalya Yamaç Paraşütü Deneyimi',
    heroSubtitle: 'Akdeniz\'in Mavi Sularına Kuş Bakışı Bakmaya Hazır Mısınız?',
    introText: 'Antalya, eşsiz falezleri, masmavi denizi ve harika iklimiyle Türkiye\'nin en güzel yamaç paraşütü lokasyonlarından biridir. İster ilk defa uçuyor olun, ister deneyimli bir maceraperest olun, Antalya\'nın kalbinde, Konyaaltı plajı ve Toros Dağları manzarası eşliğinde unutulmaz bir deneyim sunuyoruz.',
    sections: [
      {
        h2: 'Neden Antalya\'da Yamaç Paraşütü?',
        content: 'Antalya\'nın benzersiz coğrafyası, yamaç paraşütü için mükemmel hava akımları ve olağanüstü manzaralar sunar. Şehir merkezine çok yakın olan kalkış noktalarımız, uçuş sonrasında da gününüzü Antalya\'nın tarihi ve turistik yerlerinde değerlendirmenize olanak tanır. Falezlerin üzerinden süzülürken Akdeniz\'in turkuaz sularını ve tarihi Kaleiçi\'ni gökyüzünden izlemek paha biçilemez bir duygudur.'
      },
      {
        h2: 'Kimler Yapabilir?',
        content: 'Tandem (iki kişilik) uçuşlarımız, hiçbir deneyim gerektirmez. Alanında uzman, THK ve FAI sertifikalı pilotlarımız tüm uçuşu yönetir, size sadece manzaranın tadını çıkarmak kalır. 4 yaşından büyük ve sağlık durumu uçuşa engel olmayan herkes bu deneyimi yaşayabilir.'
      }
    ],
    faqs: [
      { question: 'Uçuş ne kadar sürüyor?', answer: 'Hava şartlarına bağlı olarak ortalama 15-20 dakika havada kalıyoruz. Tüm hazırlık süreci ile birlikte toplamda 1 saatlik bir aktivitedir.' },
      { question: 'Uçuş sırasında fotoğraf çekebilir miyim?', answer: 'Kendi cihazlarınızla çekim yapmanız güvenlik nedeniyle yasaktır ancak pilotlarımız uçuş boyunca 360 derece aksiyon kameraları ile profesyonel fotoğraf ve video çekimi yapmaktadır.' }
    ],
    canonical: 'https://antalyaparagliding.com/tr/antalya-yamac-parasutu',
    keywords: ['antalya yamaç paraşütü', 'antalya paragliding', 'antalya yamaç paraşütü uçuşu']
  },
  'antalya-tandem-yamac-parasutu': {
    slug: 'antalya-tandem-yamac-parasutu',
    locale: 'tr',
    title: 'Antalya Tandem Yamaç Paraşütü | Çift Kişilik Güvenli Uçuş',
    description: 'Antalya\'da profesyonel pilot eşliğinde tandem yamaç paraşütü. Eğitim gerektirmeden, güvenle gökyüzüyle buluşun.',
    h1: 'Antalya Tandem Yamaç Paraşütü',
    heroSubtitle: 'Uzman Pilotlarımızla Güvenli ve Keyifli Uçuş',
    introText: 'Tandem yamaç paraşütü, hiçbir eğitim almadan profesyonel bir pilot eşliğinde yapılan iki kişilik uçuşlardır. Antalya\'nın muhteşem manzarası eşliğinde, güvenle gökyüzünde süzülmenin keyfini çıkarın.',
    sections: [
      {
        h2: 'Tandem Uçuş Nedir?',
        content: 'Tandem yamaç paraşütü, iki kişi için tasarlanmış geniş yüzeyli bir paraşütle yapılan uçuştur. Pilot arkada, yolcu (siz) önde oturursunuz. Sizin yapmanız gereken tek şey, kalkış sırasında birkaç adım koşmaktır. Havalandıktan sonra konforlu harness (oturak) sisteminde arkanıza yaslanıp manzaranın tadını çıkarabilirsiniz.'
      },
      {
        h2: 'Güvenlik Standartlarımız',
        content: 'Tüm pilotlarımız uzun yıllar uçuş tecrübesine sahip, lisanslı profesyonellerdir. Kullandığımız tüm ekipmanlar düzenli olarak kontrol edilir ve uluslararası standartlara uygundur.'
      }
    ],
    faqs: [
      { question: 'Kilo sınırınız var mı?', answer: 'Evet, yolcularımız için maksimum kilo sınırımız 110 kg, minimum sınırımız ise 25 kg\'dır.' },
      { question: 'Nasıl giyinmeliyim?', answer: 'Mevsime uygun rahat spor kıyafetler ve bileği saran rahat bir spor ayakkabı giymenizi tavsiye ederiz.' }
    ],
    canonical: 'https://antalyaparagliding.com/tr/antalya-tandem-yamac-parasutu',
    keywords: ['antalya tandem yamaç paraşütü', 'iki kişilik yamaç paraşütü antalya']
  },
  'antalya-paragliding': {
    slug: 'antalya-paragliding',
    locale: 'en',
    title: 'Antalya Paragliding | Unforgettable Flights Over the Mediterranean',
    description: 'Experience the thrill of paragliding in Antalya. Fly safely with our professional tandem pilots over the beautiful cliffs and Konyaalti beach.',
    h1: 'Antalya Paragliding Experience',
    heroSubtitle: 'Ready to Fly Over the Turquoise Waters of the Mediterranean?',
    introText: 'Antalya is one of Turkey\'s premier paragliding destinations, offering stunning views of the Taurus Mountains meeting the Mediterranean Sea. Join us for a safe and exhilarating tandem flight right in the heart of the city.',
    sections: [
      {
        h2: 'Why Choose Antalya for Paragliding?',
        content: 'Unlike remote mountain take-offs, our launch site in Antalya offers a unique city and sea panorama. You will glide over the impressive cliffs (Falezler) and the famous Konyaalti beach. The mild climate allows us to fly almost year-round.'
      },
      {
        h2: 'No Experience Needed',
        content: 'Tandem paragliding means you fly with a highly experienced, certified pilot. You don\'t need any prior knowledge. After a short briefing, a few running steps will take you into the sky.'
      }
    ],
    faqs: [
      { question: 'Is it safe?', answer: 'Safety is our absolute priority. We use top-of-the-line equipment, and all our pilots are internationally certified with thousands of successful flights.' },
      { question: 'How long does the experience take?', answer: 'The flight itself lasts 15-20 minutes, but the whole activity including briefing and preparation takes about 1 hour.' }
    ],
    canonical: 'https://antalyaparagliding.com/en/antalya-paragliding',
    keywords: ['antalya paragliding', 'paragliding turkey antalya', 'tandem paragliding antalya']
  },
  'antalya-paragliding-price': {
    slug: 'antalya-paragliding-price',
    locale: 'en',
    title: 'Antalya Paragliding Price 2024 | Best Value Tandem Flights',
    description: 'Check out the most competitive Antalya paragliding prices. Transparent pricing, photo/video packages, and easy online booking.',
    h1: 'Antalya Paragliding Prices',
    heroSubtitle: 'Premium Experience at the Best Value',
    introText: 'We offer transparent, all-inclusive pricing for our tandem paragliding flights in Antalya. No hidden fees, just pure adrenaline and breathtaking views.',
    sections: [
      {
        h2: 'What is Included in the Price?',
        content: 'Our standard flight package includes professional tandem flight with a certified pilot, all necessary safety equipment, transfer from our meeting point to the take-off area, and insurance during the flight.'
      },
      {
        h2: 'Photo & Video Packages',
        content: 'You can optionally purchase our photo and video package. Your pilot will capture high-quality photos and videos from multiple angles using a 360-degree action camera, delivered straight to your phone right after the flight.'
      }
    ],
    faqs: [
      { question: 'Can I pay by credit card?', answer: 'Yes, we accept major credit cards, cash in TRY, EUR, USD, and GBP.' },
      { question: 'Is booking in advance required?', answer: 'We highly recommend booking in advance, especially during the summer season, to secure your preferred date and time.' }
    ],
    canonical: 'https://antalyaparagliding.com/en/antalya-paragliding-price',
    keywords: ['antalya paragliding price', 'how much is paragliding in antalya', 'cheap paragliding antalya']
  },
  'antalya-varyant-yamac-parasutu': {
    slug: 'antalya-varyant-yamac-parasutu',
    locale: 'tr',
    title: 'Antalya Varyant Yamaç Paraşütü | Şehrin Merkezinde Uçuş',
    description: 'Antalya Varyant bölgesinden havalanıp Konyaaltı sahilini kuş bakışı izleyin. Kolay ulaşım ve muhteşem manzara.',
    h1: 'Varyant Yamaç Paraşütü',
    heroSubtitle: 'Şehrin Kalbinden Gökyüzüne',
    introText: 'Antalya Varyant, şehrin simgelerinden biridir. Buradan yapılan uçuşlar, şehrin kalbinden Akdeniz\'in maviliklerine doğru eşsiz bir süzülüş sunar.',
    sections: [
      {
        h2: 'Varyant Uçuşunun Özellikleri',
        content: 'Varyant kalkış pistimiz, ulaşımı en kolay noktalardan biridir. Kalkışın hemen ardından Konyaaltı plajının kilometrelerce uzanan kumsalı ve Beydağları\'nın görkemi sizi karşılar.'
      }
    ],
    faqs: [
      { question: 'Varyant uçuşu ne kadar sürer?', answer: 'Rüzgar durumuna göre 15-20 dakika sürmektedir.' }
    ],
    canonical: 'https://antalyaparagliding.com/tr/antalya-varyant-yamac-parasutu',
    keywords: ['varyant yamaç paraşütü', 'antalya varyant paragliding']
  },
  'antalya-falezler-yamac-parasutu': {
    slug: 'antalya-falezler-yamac-parasutu',
    locale: 'tr',
    title: 'Antalya Falezler Yamaç Paraşütü | Eşsiz Manzara',
    description: 'Antalya Falezler üzerinden yamaç paraşütü ile uçmanın keyfini çıkarın. Mavi deniz ve dik kayalıkların eşsiz uyumu.',
    h1: 'Falezler Üzerinde Yamaç Paraşütü',
    heroSubtitle: 'Kayalıkların Üzerinde Özgürce Süzülün',
    introText: 'Antalya\'nın doğal güzelliklerinden olan Falezler, yamaç paraşütü için harika bir arka plan oluşturur. Denizin ve kayalıkların muhteşem uyumunu havadan izleyin.',
    sections: [
      {
        h2: 'Manzara',
        content: 'Falezlerden süzülürken suyun berraklığını ve derinliğini görebilirsiniz. Unutulmaz fotoğraf kareleri için mükemmel bir rotadır.'
      }
    ],
    faqs: [
      { question: 'Nereden kalkış yapılıyor?', answer: 'Uçuş için en uygun ve güvenli noktalardan, hava durumuna göre belirlenen pistlerden kalkış yapıyoruz.' }
    ],
    canonical: 'https://antalyaparagliding.com/tr/antalya-falezler-yamac-parasutu',
    keywords: ['falezler yamaç paraşütü', 'antalya falez paragliding']
  },
  'antalya-konyaalti-yamac-parasutu': {
    slug: 'antalya-konyaalti-yamac-parasutu',
    locale: 'tr',
    title: 'Konyaaltı Yamaç Paraşütü | Sahil Üzerinde Uçuş',
    description: 'Konyaaltı Plajı semalarında yamaç paraşütü. Akdeniz sularına doğru süzülmenin en heyecanlı yolu.',
    h1: 'Konyaaltı Yamaç Paraşütü',
    heroSubtitle: 'Türkiye\'nin En Ünlü Plajına Havadan Bakış',
    introText: 'Dünyaca ünlü Konyaaltı Plajı\'nı havadan izlemek ister misiniz? Yamaç paraşütü ile bu eşsiz manzarayı keşfedin.',
    sections: [
      {
        h2: 'İniş Noktası',
        content: 'Konyaaltı bölgesinde güvenli noktalara iniş yapıyoruz. Uçuşunuz bittikten sonra doğrudan denize girebilir veya sahildeki kafelerde dinlenebilirsiniz.'
      }
    ],
    faqs: [
      { question: 'Ulaşım sağlıyor musunuz?', answer: 'Buluşma noktamızdan kalkış alanına transfer hizmetimiz fiyata dahildir.' }
    ],
    canonical: 'https://antalyaparagliding.com/tr/antalya-konyaalti-yamac-parasutu',
    keywords: ['konyaaltı yamaç paraşütü', 'konyaaltı plajı uçuş']
  },
  'antalya-muratpasa-yamac-parasutu': {
    slug: 'antalya-muratpasa-yamac-parasutu',
    locale: 'tr',
    title: 'Muratpaşa Yamaç Paraşütü | Merkezden Gökyüzüne',
    description: 'Antalya Muratpaşa sınırlarında, şehir ve deniz manzaralı yamaç paraşütü keyfi.',
    h1: 'Muratpaşa Bölgesi Uçuşları',
    heroSubtitle: 'Şehri Kuş Bakışı Keşfedin',
    introText: 'Muratpaşa, Antalya\'nın kalbidir. Yamaç paraşütü uçuşlarımızla bu merkezi bölgenin güzelliklerini havadan görebilirsiniz.',
    sections: [
      {
        h2: 'Şehir ve Doğa',
        content: 'Kaleiçi, yat limanı ve Toros dağlarını aynı karede görebileceğiniz uçuşlar sizi bekliyor.'
      }
    ],
    faqs: [
      { question: 'Yılın her dönemi uçuş var mı?', answer: 'Hava şartları uygun olduğu sürece 12 ay uçuş yapıyoruz.' }
    ],
    canonical: 'https://antalyaparagliding.com/tr/antalya-muratpasa-yamac-parasutu',
    keywords: ['muratpaşa yamaç paraşütü', 'antalya merkez paragliding']
  },
  'antalya-yamac-parasutu-fiyatlari': {
    slug: 'antalya-yamac-parasutu-fiyatlari',
    locale: 'tr',
    title: 'Antalya Yamaç Paraşütü Fiyatları 2024 | Güncel Ücretler',
    description: '2024 Antalya yamaç paraşütü fiyatları, fotoğraf/video paketleri ve kampanyalar. Hemen online rezervasyon yapın.',
    h1: 'Antalya Yamaç Paraşütü Fiyatları 2024',
    heroSubtitle: 'Kaliteli Hizmet, Uygun Fiyatlar',
    introText: 'Antalya\'da yamaç paraşütü yapmayı planlıyorsanız, en uygun fiyat ve kaliteli hizmet garantisiyle yanınızdayız.',
    sections: [
      {
        h2: 'Fiyata Neler Dahil?',
        content: 'Transfer, sigorta, uzman pilot eşliğinde uçuş ve kask, uçuş tulumu gibi ekipmanlar ücrete dahildir. Ekstra sürpriz masraflar yoktur.'
      },
      {
        h2: 'Fotoğraf ve Video Çekimi',
        content: 'Uçuş anılarınızı ölümsüzleştirmek için pilotlarımız profesyonel aksiyon kameraları ile çekim yapmaktadır. Bu hizmet opsiyonel olup uçuş sonrasında satın alınabilir.'
      }
    ],
    faqs: [
      { question: 'Kredi kartı geçerli mi?', answer: 'Tüm uçuş alanlarımızda ve ofisimizde kredi kartı geçerlidir.' },
      { question: 'Grup indirimi var mı?', answer: 'Evet, kalabalık gruplar için özel indirimlerimiz mevcuttur. Detaylar için iletişime geçebilirsiniz.' }
    ],
    canonical: 'https://antalyaparagliding.com/tr/antalya-yamac-parasutu-fiyatlari',
    keywords: ['antalya yamaç paraşütü fiyatları', 'yamaç paraşütü antalya fiyat']
  },
  'antalya-yamac-parasutu-randevu': {
    slug: 'antalya-yamac-parasutu-randevu',
    locale: 'tr',
    title: 'Antalya Yamaç Paraşütü Randevu ve İletişim',
    description: 'Hızlı ve kolay randevu oluşturun. WhatsApp üzerinden veya online form ile yamaç paraşütü rezervasyonunuzu yapın.',
    h1: 'Yamaç Paraşütü Rezervasyon',
    heroSubtitle: 'Uçuşunuzu Hemen Planlayın',
    introText: 'Unutulmaz bir deneyim için yerinizi hemen ayırtın. Randevu sistemimiz çok basit ve hızlıdır.',
    sections: [
      {
        h2: 'Nasıl Rezervasyon Yapılır?',
        content: 'WhatsApp hattımızdan bize ulaşarak, uçmak istediğiniz tarih ve saati belirtebilirsiniz. Ekibimiz size en uygun müsaitliği sunacaktır.'
      }
    ],
    faqs: [
      { question: 'Ödemeyi ne zaman yapacağım?', answer: 'Ödemeyi uçuş günü ofisimizde veya uçuş öncesi yapabilirsiniz.' }
    ],
    canonical: 'https://antalyaparagliding.com/tr/antalya-yamac-parasutu-randevu',
    keywords: ['antalya yamaç paraşütü randevu', 'rezervasyon antalya paragliding']
  },
  'antalya-yamac-parasutu-nasil-yapilir': {
    slug: 'antalya-yamac-parasutu-nasil-yapilir',
    locale: 'tr',
    title: 'Yamaç Paraşütü Nasıl Yapılır? | Adım Adım Uçuş Deneyimi',
    description: 'Tandem yamaç paraşütü uçuşu nasıl gerçekleşir? Hazırlık aşamasından inişe kadar tüm detaylar.',
    h1: 'Yamaç Paraşütü Nasıl Yapılır?',
    heroSubtitle: 'Hazırlıktan İnişe Uçuş Süreci',
    introText: 'İlk defa uçacak olanlar için süreç oldukça basittir. Tandem (iki kişilik) uçuşlarda sizin tek yapmanız gereken pilotunuzun talimatlarına uymaktır.',
    sections: [
      {
        h2: 'Kalkış Süreci',
        content: 'Pilotunuz sizi yolcu harnessine (oturak) bağlar ve güvenlik kontrollerini yapar. Paraşüt havalandığında, rüzgara doğru birkaç adım hızlıca yürümeniz veya koşmanız istenir. Asla atlama veya zıplama yapılmaz.'
      },
      {
        h2: 'Uçuş ve İniş',
        content: 'Havalandıktan sonra arkanıza yaslanıp rahat edersiniz. İniş aşamasında ise yine pilotunuzun yönlendirmesiyle ayaklarınızın üzerine yumuşak bir şekilde basarsınız.'
      }
    ],
    faqs: [
      { question: 'Uçuş öncesi eğitim gerekli mi?', answer: 'Hayır, uçuş öncesi pilotumuz size 5 dakikalık kısa bir bilgilendirme yapar, bu yeterlidir.' }
    ],
    canonical: 'https://antalyaparagliding.com/tr/antalya-yamac-parasutu-nasil-yapilir',
    keywords: ['yamaç paraşütü nasıl yapılır', 'tandem yamaç paraşütü nedir']
  },
  'antalya-yamac-parasutu-guvenli-mi': {
    slug: 'antalya-yamac-parasutu-guvenli-mi',
    locale: 'tr',
    title: 'Yamaç Paraşütü Güvenli mi? | Antalya Paragliding',
    description: 'Yamaç paraşütü güvenlik önlemleri, ekipman standartları ve uzman pilot kadromuz hakkında detaylı bilgi.',
    h1: 'Yamaç Paraşütü Güvenli Mi?',
    heroSubtitle: 'Önceliğimiz Sizin Güvenliğiniz',
    introText: 'Yamaç paraşütü, kurallarına uygun yapıldığında oldukça güvenli bir doğa sporudur. Tüm uçuşlarımız yüksek güvenlik standartlarında gerçekleştirilir.',
    sections: [
      {
        h2: 'Ekipman ve Pilotlar',
        content: 'Tandem uçuşlarımızda kullanılan paraşütler uluslararası testlerden geçmiş sertifikalı ürünlerdir. Ayrıca her uçuşta yedek paraşüt bulunur. Pilotlarımız ise THK ve uluslararası lisanslara sahip deneyimli profesyonellerdir.'
      }
    ],
    faqs: [
      { question: 'Korku veya yükseklik korkusu sorun olur mu?', answer: 'Yamaç paraşütünde yükseklik korkusu (akrofobi) tetiklenmez çünkü ayaklarınız yerle temas etmediği için referans noktası kaybolur. Oldukça huzurlu bir his verir.' }
    ],
    canonical: 'https://antalyaparagliding.com/tr/antalya-yamac-parasutu-guvenli-mi',
    keywords: ['yamaç paraşütü güvenli mi', 'yamaç paraşütü riskleri']
  },
  'antalya-yamac-parasutu-hakkinda': {
    slug: 'antalya-yamac-parasutu-hakkinda',
    locale: 'tr',
    title: 'Hakkımızda | Antalya Paragliding',
    description: 'Antalya Paragliding firmamız hakkında detaylar, vizyonumuz ve uçuş noktalarımız.',
    h1: 'Antalya Paragliding Hakkında',
    heroSubtitle: 'Yılların Tecrübesiyle Gökyüzündeyiz',
    introText: 'Antalya Paragliding olarak amacımız, misafirlerimize en güvenli ve en keyifli yamaç paraşütü deneyimini sunmaktır.',
    sections: [
      {
        h2: 'Vizyonumuz',
        content: 'Antalya\'yı Türkiye\'nin ve dünyanın önde gelen yamaç paraşütü merkezlerinden biri haline getirmek ve hava sporlarını sevdirmek için çalışıyoruz.'
      }
    ],
    faqs: [
      { question: 'Ofisiniz nerede?', answer: 'Ofisimiz Antalya merkezde, uçuş noktalarına yakın bir konumdadır.' }
    ],
    canonical: 'https://antalyaparagliding.com/tr/antalya-yamac-parasutu-hakkinda',
    keywords: ['antalya paragliding hakkında', 'antalya yamaç paraşütü firmaları']
  },
  'antalya-yamac-parasutu-sss': {
    slug: 'antalya-yamac-parasutu-sss',
    locale: 'tr',
    title: 'Sıkça Sorulan Sorular | Antalya Yamaç Paraşütü',
    description: 'Antalya yamaç paraşütü ile ilgili en çok merak edilen sorular ve cevapları. Kilo sınırı, yaş sınırı, kıyafet seçimi.',
    h1: 'Sıkça Sorulan Sorular',
    heroSubtitle: 'Merak Ettiğiniz Her Şey',
    introText: 'Uçuş öncesi misafirlerimizin en çok sorduğu soruları sizin için derledik.',
    sections: [
      {
        h2: 'Kimler Uçabilir, Kimler Uçamaz?',
        content: '4 yaşından büyük, 110 kg sınırını aşmayan ve kalp rahatsızlığı, epilepsi veya hamilelik gibi durumu olmayan herkes uçabilir.'
      }
    ],
    faqs: [
      { question: 'Uçuşta midem bulanır mı?', answer: 'Genellikle hayır, ancak hassas bir mideniz varsa uçuş öncesi çok ağır yemekler yememenizi tavsiye ederiz.' },
      { question: 'Yanımda ne getirmeliyim?', answer: 'Güneş gözlüğü ve su getirmeniz yeterlidir.' }
    ],
    canonical: 'https://antalyaparagliding.com/tr/antalya-yamac-parasutu-sss',
    keywords: ['yamaç paraşütü sıkça sorulan sorular', 'yamaç paraşütü yaş sınırı']
  },
  'antalya-yamac-parasutu-guvenlik': {
    slug: 'antalya-yamac-parasutu-guvenlik',
    locale: 'tr',
    title: 'Güvenlik Politikamız | Antalya Paragliding',
    description: 'Uçuşlarımızdaki güvenlik standartları, hava durumu takibi ve ekipman bakımları.',
    h1: 'Güvenlik Standartlarımız',
    heroSubtitle: 'Sıfır Risk Prensibi',
    introText: 'Bizim için en önemli şey güvenliğinizdir. Hava durumu, rüzgar hızı ve ekipman durumunu sürekli kontrol ediyoruz.',
    sections: [
      {
        h2: 'Hava Durumu ve İptaller',
        content: 'Rüzgarın limitlerin dışında olduğu veya yağışlı havalarda kesinlikle uçuş yapılmaz. Bu gibi durumlarda uçuşunuz başka bir güne ertelenir veya ücret iadesi yapılır.'
      }
    ],
    faqs: [
      { question: 'Sigorta yapılıyor mu?', answer: 'Evet, tüm uçuşlarımızda misafirlerimiz uçuş sigortası kapsamındadır.' }
    ],
    canonical: 'https://antalyaparagliding.com/tr/antalya-yamac-parasutu-guvenlik',
    keywords: ['yamaç paraşütü güvenlik', 'antalya paragliding güvenlik']
  },
  'antalya-tandem-paragliding': {
    slug: 'antalya-tandem-paragliding',
    locale: 'en',
    title: 'Antalya Tandem Paragliding | Safe 2-Person Flights',
    description: 'Fly with certified tandem pilots in Antalya. No experience needed. Book your tandem paragliding adventure today.',
    h1: 'Tandem Paragliding in Antalya',
    heroSubtitle: 'Double the Fun, Zero Experience Needed',
    introText: 'Tandem paragliding is the easiest and safest way to experience the magic of free flight. Attached securely to a professional pilot, you can simply enjoy the ride.',
    sections: [
      {
        h2: 'How It Works',
        content: 'You and your pilot are connected to a large, specially designed paraglider. The pilot controls the wing while you sit comfortably in front, enjoying the panoramic views of the Mediterranean coastline.'
      }
    ],
    faqs: [
      { question: 'What is the weight limit?', answer: 'Passengers must weigh between 25 kg and 110 kg.' },
      { question: 'What should I wear?', answer: 'Comfortable sports clothing and trainers/sneakers are highly recommended.' }
    ],
    canonical: 'https://antalyaparagliding.com/en/antalya-tandem-paragliding',
    keywords: ['tandem paragliding antalya', '2 person paragliding turkey']
  }
};
