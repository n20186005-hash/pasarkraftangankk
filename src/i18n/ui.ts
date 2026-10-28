import type { Locale } from './config';

const ms = {
  meta: {
    name: 'Pasar Kraftangan Kota Kinabalu',
    alternateName: 'Pasar Filipina Kota Kinabalu · Handicraft Market Kota Kinabalu',
    title: "Pasar Kraftangan Kota Kinabalu | Waktu, Lokasi & Apa Nak Beli",
    description:
      "Panduan Pasar Kraftangan / Filipino Market di Jalan Tun Fuad Stephen: waktu senarai peta 08:00–22:00, lokasi, mutiara, cenderamata dan tips belian.",
    htmlLang: 'ms',
    ogLocale: 'ms_MY',
  },
  hero: {
    badge: 'Kota Kinabalu · Sabah · Malaysia',
    h1: 'Pasar Kraftangan Kota Kinabalu',
    ctaProducts: 'Teroka Produk',
    ctaTransport: 'Cara Ke Sana',
    reviewsWord: 'ulasan',
    hoursNote: "08:00–22:00 · Senarai Google Maps",
  },
  nav: [
    { id: 'info-penting', label: 'Info Penting' },
    { id: 'kategori', label: 'Kategori Produk' },
    { id: 'galeri', label: 'Galeri' },
    { id: 'tiket', label: 'Tiket & Yuran' },
    { id: 'masa-terbaik', label: 'Masa Terbaik' },
    { id: 'parkir', label: 'Parkir' },
    { id: 'pengangkutan', label: 'Pengangkutan' },
    { id: 'makanan', label: 'Makanan Berdekatan' },
    { id: 'tempat-menarik', label: 'Tempat Menarik' },
    { id: 'peta', label: 'Peta' },
    { id: 'faq', label: 'FAQ' },
  ],
  guidesNav: {
    shopping: 'Apa Nak Beli',
    itinerary: 'Rancangan 1 Hari',
    'best-time': 'Masa Terbaik',
    'airport-to-market': 'Dari Lapangan Terbang',
    'seafood-near-market': 'Makanan Laut',
    'atkinson-clock-tower': 'Menara Jam Atkinson',
    'half-day-itinerary': 'Rancangan Separuh Hari',
  },
  keyInfo: [
  {
    "icon": "clock",
    "label": "Waktu senarai peta",
    "value": "08:00–22:00",
    "sub": "Disemak 19 Oktober 2026; waktu gerai berbeza"
  },
  {
    "icon": "stopwatch",
    "label": "Rancang lawatan",
    "value": "Ikut pilihan gerai",
    "sub": "Peruntukkan masa untuk membandingkan barang dan harga."
  },
  {
    "icon": "ticket",
    "label": "Belian",
    "value": "Bandingkan dahulu",
    "sub": "Bandingkan bahan dan harga di beberapa gerai."
  },
  {
    "icon": "sun",
    "label": "Cuaca",
    "value": "Semak hari lawatan",
    "sub": "Bawa air dan perlindungan hujan atau matahari."
  }
],
  products: {
    eyebrow: 'Koleksi Kraftangan Sabah',
    title: 'Kategori Produk Utama',
    intro:
      "Cari sarung, pareo, perhiasan mutiara, ukiran dan cenderamata. Bandingkan bahan, kemasan dan asal barang dengan penjual; jangan anggap semua barang dibuat di Sabah.",
    guideCta: 'Baca panduan lengkap beli-belah di Pasar Kraftangan',
    categories: [
      {
        id: 'tenun',
        title: 'Kain Tenun & Songket Sabah',
        tagline: 'Warisan Tekstil Sabah',
        description:
          'Kain tenun tradisional daripada pelbagai suku kaum Sabah seperti Dusun, Kadazan, Bajau, dan Murut. Corak geometrik dan motif flora yang kaya dengan makna budaya.',
        items: ['Songket Sabah', 'Kain Tenun Dusun', 'Selendang Tenun', 'Baju Kurung Tenun'],
      },
      {
        id: 'mutiara',
        title: 'Perhiasan Mutiara',
        tagline: "Pilih dengan teliti",
        description:
          "Perhiasan mutiara ditawarkan dalam pelbagai bentuk. Tanya jenis mutiara, rawatan, bahan tetapan dan bukti asal; rupa atau harga sahaja bukan pengesahan ketulenan.",
        items: ['Rantai Leher Mutiara', 'Subang Mutiara', 'Gelang Mutiara', 'Cincin Mutiara'],
      },
      {
        id: 'ukiran',
        title: 'Kraftangan Kayu & Ukiran',
        tagline: 'Tangan Seni Pengrajin Sabah',
        description:
          'Ukiran kayu daripada kayu keras tempatan. Patung haiwan, topeng tradisional, perisai, dan barang hiasan dengan motif etnik Sabah.',
        items: ['Patung Orang Ulu', 'Topeng Tradisional', 'Perahu Miniatur', 'Kotak Hiasan Kayu'],
      },
      {
        id: 'rotan',
        title: 'Barangan Rotan & Bambu',
        tagline: 'Semula Jadi & Kekal',
        description:
          'Bakul, beg, tikar, dan perabot kecil anyaman rotan dan buluh. Ringan, tahan lasak, dan kebanyakannya buatan tangan oleh komuniti kampung.',
        items: ['Beg Anyaman Rotan', 'Bakul Rotan', 'Tikar Buluh', 'Pasu Bunga Rotan'],
      },
      {
        id: 'cenderamata',
        title: 'Cenderamata & Hadiah',
        tagline: 'Kenang-kenangan Sabah',
        description:
          'Fridge magnet, kad pos, t-shirt, kunci rantai, dan pelbagai cenderamata ringkas untuk oleh-oleh keluarga dan rakan.',
        items: ['Fridge Magnet', 'Poskad', 'T-Shirt Sabah', 'Kunci Rantai'],
      },
      {
        id: 'pakaian',
        title: 'Pakaian Tradisional',
        tagline: 'Fesyen Budaya Sabah',
        description:
          'Pakaian tradisional pelbagai suku kaum, seluar batik, dan aksesori seperti manik-manik yang boleh dipakai seharian.',
        items: ['Baju Batik Lelaki', 'Baju Kurung Wanita', 'Samping Tenun', 'Tudung Bawal Corak Sabah'],
      },
    ],
  },
  gallery: {
    eyebrow: 'Galeri Gambar',
    title: 'Sekitar Pasar Kraftangan',
    intro:
      '20 gambar sebenar Pasar Kraftangan Kota Kinabalu — suasana gerai, butiran kraftangan, dan pemandangan laut yang mengiringi lawatan anda di tengah bandar.',
    captionWord: 'Foto',
    alt: (n: number) => `Gambar ${n} Pasar Kraftangan Kota Kinabalu, Sabah`,
  },
  tickets: {
    eyebrow: 'Tiket & Yuran',
    title: 'Kemasukan adalah PERCUMA',
    intro:
      'Tiada bayaran masuk dikenakan ke atas semua pelawat, sama ada rakyat Malaysia mahupun pelancong antarabangsa. Anda hanya perlu membayar untuk barang yang dibeli, parkir kenderaan, dan perkhidmatan makan di dalam pasar.',
    tipsTitle: '💡 Tips Pembelian',
    tips: [
      'Menawar harga adalah amalan biasa, terutamanya untuk belian banyak.',
      'Bawa wang tunai secukupnya — kebanyakan gerai kecil tidak terima kad.',
      'Minta resit jika membeli barang berharga seperti mutiara.',
    ],
    tableHeaders: ['Kategori Pengunjung', 'Yuran Masuk', 'Nota'],
    ticketInfo: [
      { type: 'Dewasa', price: 'Percuma', note: 'Tanpa had umur' },
      { type: 'Kanak-kanak', price: 'Percuma', note: 'Semua kanak-kanak dialu-alukan' },
      { type: 'Warga Emas', price: 'Percuma', note: 'Tiada caj khas' },
      { type: 'Pelancong Asing', price: 'Percuma', note: 'Sama seperti rakyat Malaysia' },
    ],
  },
  bestTime: {
    eyebrow: 'Masa Terbaik & Tempoh Lawatan',
    title: 'Bila & Berapa Lama Sebaiknya?',
    intro:
      "Pilih waktu mengikut gerai yang mahu dikunjungi, cuaca dan rancangan pulang. Waktu senarai peta tidak menjamin semua gerai beroperasi serentak.",
    cards: [
  {
    "title": "Rancang lawatan sendiri",
    "badge": "Cadangan",
    "time": "Siang atau petang mengikut gerai",
    "points": [
      "Sahkan waktu penjual yang ingin dilawati.",
      "Bawa air dan perlindungan hujan atau matahari.",
      "Peruntukkan masa untuk membandingkan barang dan harga."
    ]
  }
],
    bestDayTitle: '📅 Hari Paling Sesuai Lawat',
    dayRows: [
  {
    "label": "Rancang lawatan sendiri",
    "text": "Pilih waktu mengikut gerai yang mahu dikunjungi, cuaca dan rancangan pulang. Waktu senarai peta tidak menjamin semua gerai beroperasi serentak."
  }
],
    climateTitle: '🌤️ Iklim Kota Kinabalu',
    climateText:
      "Bawa air dan perlindungan hujan atau matahari.",
  },
  parking: {
    eyebrow: 'Maklumat Parkir',
    title: 'Di Mana Hendak Letak Kereta?',
    intro:
      "Gunakan lot bertanda atau tempat letak kereta komersial yang sesuai. Kadar, kapasiti dan jarak berjalan belum disahkan; semak papan tanda serta laluan ke pin pasar.",
    rateLabel: 'Kadar',
    capacityLabel: 'Kapasiti',
    spots: [
  {
    "name": "Parkir sah di sekitar Jalan Tun Fuad Stephen",
    "distance": "Ikut laluan peta",
    "rate": "Semak papan kadar",
    "capacity": "Semak ketersediaan",
    "notes": "Pastikan laluan pejalan kaki sesuai sebelum meninggalkan kenderaan."
  }
],
  },
  transport: {
    eyebrow: 'Pengangkutan Terperinci',
    title: 'Cara Ke Pasar Kraftangan',
    intro:
      "Pilih perjalanan mengikut lokasi permulaan. Sahkan tambang, titik turun dan masa perjalanan semasa; tiada jadual bas atau harga tetap yang disahkan di sini.",
    costPrefix: 'Anggaran kos:',
    stepsLabel: 'Langkah-langkah',
    tipsLabel: '💡 Petua Berguna',
    modeLabels: {
      kapal_terbang: 'Kapal Terbang',
      bas: 'Bas Bandar',
      teksi: 'Teksi',
      grab: 'Grab / E-Hailing',
      berjalan: 'Berjalan Kaki',
      kereta: 'Kereta Sendiri',
    },
    options: [
  {
    "id": "taxi-map",
    "mode": "grab",
    "title": "Teksi / e-hailing ke Pasar Kraftangan",
    "duration": "Mengikut trafik",
    "cost": "Semak sebelum tempah",
    "steps": [
      "Gunakan alamat tempat tinggal atau titik jemputan sebagai asal perjalanan.",
      "Pilih pin Pasar Kraftangan pada Jalan Tun Fuad Stephen.",
      "Semak tambang dan titik turun dalam aplikasi atau dengan pemandu.",
      "Simpan titik jemputan untuk perjalanan pulang."
    ],
    "tips": "Jika menaiki bas, sahkan laluan dan bas terakhir dengan pengendali sebelum bertolak."
  }
],
  },
  food: {
    eyebrow: 'Makanan Berdekatan',
    title: 'Di Mana Hendak Makan?',
    intro:
      "Kawasan pasar tepi laut mempunyai gerai makanan. Pilih berdasarkan menu, harga dan keadaan gerai pada hari lawatan.",
    distanceLabel: 'Jarak dari pasar',
    priceLabels: {
      murah: 'Ekonomi',
      sederhana: 'Sederhana',
      mewah: 'Mewah',
    },
    spots: [
  {
    "id": "market-food",
    "name": "Gerai makanan di kawasan pasar",
    "distance": "Kawasan pasar",
    "specialty": [
      "Makanan laut",
      "Buah-buahan",
      "Snek"
    ],
    "price": "sederhana",
    "note": "Semak harga satu hidangan atau berat makanan laut serta caj masakan sebelum memesan."
  }
],
  },
  nearby: {
    eyebrow: 'Tempat Menarik Berdekatan',
    title: 'Gabungkan Lawatan Anda',
    intro:
      "Gaya Street dan Jesselton Point boleh menjadi sambungan perjalanan bandar. Semak laluan dan waktu operasi berasingan; keduanya bukan pintu masuk pasar ini.",
    guideCta: 'Lihat rancangan satu hari di Kota Kinabalu',
    viewMapLabel: 'Lihat peta',
    attractions: [
  {
    "id": "gaya-street",
    "name": "Gaya Street Sunday Market",
    "distance": "Semak laluan semasa",
    "duration": "Rancang secara berasingan",
    "highlight": "Pasar Ahad di Gaya Street ialah acara berasingan. Semak waktu sebelum menggabungkannya dengan membeli-belah di sini.",
    "category": "Pasar bandar"
  },
  {
    "id": "jesselton-point",
    "name": "Jesselton Point",
    "distance": "Semak laluan semasa",
    "duration": "Rancang secara berasingan",
    "highlight": "Jesselton Point ialah kawasan dermaga di utara pusat bandar. Jika mahu menaiki bot, sahkan jadual pergi dan pulang terlebih dahulu.",
    "category": "Persisiran"
  }
],
  },
  map: {
    eyebrow: 'Peta Lokasi',
    title: 'Cari Lokasi di Google Maps',
    intro:
      "Gunakan pin Pasar Kraftangan / Filipino Market pada alamat di bawah. Waktu 08:00–22:00 ialah waktu senarai Google Maps yang disemak pada 19 Oktober 2026, bukan jaminan semua gerai dibuka sepanjang tempoh itu.",
    iframeTitle: 'Peta Pasar Kraftangan Kota Kinabalu Sabah',
    openMapsLabel: 'Buka dalam Google Maps',
  },
  faq: {
    eyebrow: 'Soalan Lazim',
    title: 'FAQ · Soalan yang sering ditanya',
    intro:
      "Jawapan tentang nama tempat, waktu, lokasi dan belian.",
    items: [
  {
    "q": "Apakah nama lain Pasar Kraftangan Kota Kinabalu?",
    "a": "Pasar Kraftangan juga dicari sebagai Handicraft Market atau Filipino Market. Pautan peta laman ini kini memaparkan Pasar Kraftangan / Filipino Market. Sabah Tourism menerbitkan panduan pasarnya di bawah tajuk Anjung Kinabalu; nama boleh merujuk kawasan pasar yang berdekatan, jadi ikut pin dan alamat."
  },
  {
    "q": "Bilakah waktu operasi pasar?",
    "a": "Google Maps menyenaraikan 08:00–22:00 setiap hari pada 19 Oktober 2026. Waktu ini merujuk senarai tempat; gerai kraftangan, makanan dan kedai individu boleh mempunyai waktu berlainan."
  },
  {
    "q": "Di manakah lokasi Pasar Kraftangan?",
    "a": "7, Jalan Tun Fuad Stephen, Pusat Bandar Kota Kinabalu, 88000 Kota Kinabalu, Sabah. Gunakan pautan peta untuk laluan dari lokasi sebenar anda."
  },
  {
    "q": "Apa yang boleh dibeli?",
    "a": "Cari sarung atau pareo, perhiasan mutiara, ukiran kayu, sompoton dan cenderamata. Stok, bahan, asal dan harga berbeza mengikut penjual."
  },
  {
    "q": "Bolehkah menawar harga?",
    "a": "Sabah Tourism mencadangkan tawar-menawar. Bandingkan beberapa gerai dan tawar secara sopan; tiada peratus diskaun yang dijamin."
  },
  {
    "q": "Adakah mutiara dijamin asli?",
    "a": "Tidak semua barang boleh disahkan melalui pemerhatian. Minta butiran bertulis tentang jenis, rawatan dan bahan tetapan serta resit. Untuk belian bernilai tinggi, dapatkan pengesahan pakar yang bebas."
  },
  {
    "q": "Bagaimana dengan bayaran dan kemudahan?",
    "a": "Sahkan kaedah bayaran, tandas, akses tanpa tangga dan tempat letak kereta di lokasi. Jangan anggap semua gerai menerima kad atau semua lorong sesuai untuk kerusi roda."
  },
  {
    "q": "Berapakah rating Google sekarang?",
    "a": "Snapshot 19 Oktober 2026: 4.0/5 daripada 13,958 ulasan untuk senarai peta yang dipautkan. Angka boleh berubah; buka Google Maps untuk nilai semasa."
  }
],
  },
  guides: {
    relatedTitle: 'Panduan Berkaitan',
    backHomeLabel: 'Kembali ke panduan utama',
    backHomeHint:
      'Panduan penuh Pasar Kraftangan: waktu operasi, parkir, pengangkutan, makanan & peta.',
  },
  header: {
    visitUs: 'Lawati Kami',
    navAria: 'Navigasi utama',
  },
  footer: {
    about:
      "Panduan bebas Pasar Kraftangan Kota Kinabalu: lokasi, waktu senarai peta, pilihan belian dan perancangan lawatan.",
    locationLine: '🌐 Bahasa Melayu · Lokasi: Kota Kinabalu, Sabah, Malaysia',
    quickLinksTitle: 'Pautan Pantas',
    quickLinks: [
      { href: '#kategori', label: 'Kategori Produk' },
      { href: '#galeri', label: 'Galeri Gambar' },
      { href: '#pengangkutan', label: 'Cara Ke Sana' },
      { href: '#parkir', label: 'Maklumat Parkir' },
      { href: '#makanan', label: 'Makanan Berdekatan' },
      { href: '#tempat-menarik', label: 'Tempat Menarik' },
      { href: '#peta', label: 'Peta Lokasi' },
      { href: '#faq', label: 'Soalan Lazim' },
    ],
    disclaimerTitle: 'Penafian Tidak Rasmi',
    disclaimerBody1:
      'Laman web ini adalah inisiatif panduan pelawat bebas dan TIDAK dikendalikan, dikeluarkan, atau diwakili oleh pihak pengurusan Pasar Kraftangan Kota Kinabalu, Dewan Bandaraya Kota Kinabalu (DBKK), atau agensi kerajaan Sabah.',
    disclaimerBody2:
      'Rujuk pihak pengurusan pasar atau laman web rasmi Tourism Sabah untuk pengesahan maklumat terkini sebelum perjalanan anda.',
    copyrightSuffix: 'Panduan pelawat tidak rasmi.',
    backToTop: 'Kembali ke atas',
  },
};

export type Translation = typeof ms;

const en: Translation = {
  meta: {
    name: 'Kota Kinabalu Handicraft Market',
    alternateName: 'Pasar Kraftangan Kota Kinabalu · Filipino Market Kota Kinabalu',
    title: "Kota Kinabalu Handicraft Market | Hours, Location & Shopping",
    description:
      "Plan a visit to Pasar Kraftangan / Filipino Market on Jalan Tun Fuad Stephen: mapped hours 08:00–22:00, directions, pearls, souvenirs and shopping tips.",
    htmlLang: 'en',
    ogLocale: 'en_US',
  },
  hero: {
    badge: 'Kota Kinabalu · Sabah · Malaysia',
    h1: 'Kota Kinabalu Handicraft Market',
    ctaProducts: 'Explore Products',
    ctaTransport: 'How to Get Here',
    reviewsWord: 'reviews',
    hoursNote: "08:00–22:00 · Google Maps listing",
  },
  nav: [
    { id: 'info-penting', label: 'Key Info' },
    { id: 'kategori', label: 'Products' },
    { id: 'galeri', label: 'Gallery' },
    { id: 'tiket', label: 'Tickets & Fees' },
    { id: 'masa-terbaik', label: 'Best Time' },
    { id: 'parkir', label: 'Parking' },
    { id: 'pengangkutan', label: 'Transport' },
    { id: 'makanan', label: 'Food Nearby' },
    { id: 'tempat-menarik', label: 'Nearby Attractions' },
    { id: 'peta', label: 'Map' },
    { id: 'faq', label: 'FAQ' },
  ],
  guidesNav: {
    shopping: 'What to Buy',
    itinerary: 'One-Day Plan',
    'best-time': 'Best Time',
    'airport-to-market': 'From the Airport',
    'seafood-near-market': 'Seafood Nearby',
    'atkinson-clock-tower': 'Atkinson Clock Tower',
    'half-day-itinerary': 'Half-Day Plan',
  },
  keyInfo: [
  {
    "icon": "clock",
    "label": "Listed hours",
    "value": "08:00–22:00",
    "sub": "Checked 19 October 2026; stall hours vary"
  },
  {
    "icon": "stopwatch",
    "label": "Plan your visit",
    "value": "Choose your stalls",
    "sub": "Allow time to compare goods and prices."
  },
  {
    "icon": "ticket",
    "label": "Shopping",
    "value": "Compare first",
    "sub": "Compare materials and prices at several stalls."
  },
  {
    "icon": "sun",
    "label": "Weather",
    "value": "Check on the day",
    "sub": "Bring water and protection from rain or sun."
  }
],
  products: {
    eyebrow: 'Sabah Handicraft Collection',
    title: 'Main Product Categories',
    intro:
      "Browse sarongs, pareos, pearl jewellery, carvings and souvenirs. Compare materials, finish and origin with each seller; do not assume everything is made in Sabah.",
    guideCta: 'Read the full shopping guide to the market',
    categories: [
      {
        id: 'tenun',
        title: 'Woven Textiles & Sabah Songket',
        tagline: 'Sabah Textile Heritage',
        description:
          "Traditional woven fabrics from Sabah's indigenous communities such as Dusun, Kadazan, Bajau and Murut. Geometric patterns and flora motifs rich with cultural meaning.",
        items: ['Sabah Songket', 'Dusun Woven Cloth', 'Woven Shawl', 'Woven Baju Kurung'],
      },
      {
        id: 'mutiara',
        title: 'Pearl Jewellery',
        tagline: "Check before buying",
        description:
          "Pearl jewellery comes in different forms. Ask about pearl type, treatment, setting materials and origin; appearance or price alone does not establish authenticity.",
        items: ['Pearl Necklace', 'Pearl Earrings', 'Pearl Bracelet', 'Pearl Ring'],
      },
      {
        id: 'ukiran',
        title: 'Wood Carvings & Crafts',
        tagline: 'Sabah Artisan Woodwork',
        description:
          'Hardwood carvings from local timber — animal figurines, traditional masks, shields and decorative pieces with ethnic Sabah motifs.',
        items: ['Orang Ulu Figurines', 'Traditional Masks', 'Miniature Boats', 'Wooden Keepsake Boxes'],
      },
      {
        id: 'rotan',
        title: 'Rattan & Bamboo Goods',
        tagline: 'Natural & Durable',
        description:
          'Baskets, bags, mats and small furniture handwoven from rattan and bamboo by village communities — lightweight and built to last.',
        items: ['Woven Rattan Bag', 'Rattan Basket', 'Bamboo Mat', 'Rattan Planter'],
      },
      {
        id: 'cenderamata',
        title: 'Souvenirs & Gifts',
        tagline: 'Sabah Keepsakes',
        description:
          'Fridge magnets, postcards, T-shirts, keychains and more — simple souvenirs for family and friends back home.',
        items: ['Fridge Magnets', 'Postcards', 'Sabah T-Shirts', 'Keychains'],
      },
      {
        id: 'pakaian',
        title: 'Traditional Clothing',
        tagline: 'Sabah Cultural Fashion',
        description:
          "Traditional outfits of Sabah's ethnic communities, batik wear and accessories such as beadwork that can be worn every day.",
        items: ["Men's Batik Shirt", 'Baju Kurung', 'Woven Samping', 'Sabah-Patterned Hijab'],
      },
    ],
  },
  gallery: {
    eyebrow: 'Photo Gallery',
    title: 'Around the Handicraft Market',
    intro:
      '20 real photos of the Kota Kinabalu Handicraft Market — stall scenes, handicraft close-ups and the seafront views that accompany your visit to the city centre.',
    captionWord: 'Photo',
    alt: (n: number) => `Photo ${n} of Kota Kinabalu Handicraft Market, Sabah`,
  },
  tickets: {
    eyebrow: 'Tickets & Fees',
    title: 'Admission is FREE',
    intro:
      'No entrance fee is charged for any visitor, Malaysian or international. You only pay for the goods you buy, vehicle parking and meals inside the market.',
    tipsTitle: '💡 Shopping Tips',
    tips: [
      'Bargaining is common practice, especially when buying multiple items.',
      'Bring enough cash — most small stalls do not accept cards.',
      'Ask for a receipt when buying valuables such as pearls.',
    ],
    tableHeaders: ['Visitor Category', 'Entrance Fee', 'Notes'],
    ticketInfo: [
      { type: 'Adults', price: 'Free', note: 'No age limit' },
      { type: 'Children', price: 'Free', note: 'All children welcome' },
      { type: 'Senior Citizens', price: 'Free', note: 'No special charge' },
      { type: 'Foreign Tourists', price: 'Free', note: 'Same as Malaysians' },
    ],
  },
  bestTime: {
    eyebrow: 'Best Time & Visit Duration',
    title: 'When to Go & How Long?',
    intro:
      "Choose a time around the sellers you want to visit, the weather and your return plans. Listed hours do not guarantee every stall is open at once.",
    cards: [
  {
    "title": "Plan around your visit",
    "badge": "Suggestion",
    "time": "Daytime or evening, depending on stalls",
    "points": [
      "Confirm the hours of the sellers you want to visit.",
      "Bring water and protection from rain or sun.",
      "Allow time to compare goods and prices."
    ]
  }
],
    bestDayTitle: '📅 Best Days to Visit',
    dayRows: [
  {
    "label": "Plan around your visit",
    "text": "Choose a time around the sellers you want to visit, the weather and your return plans. Listed hours do not guarantee every stall is open at once."
  }
],
    climateTitle: '🌤️ Kota Kinabalu Climate',
    climateText:
      "Bring water and protection from rain or sun.",
  },
  parking: {
    eyebrow: 'Parking Information',
    title: 'Where to Park?',
    intro:
      "Choose signed public or commercial parking that suits your route. Current rates, capacity and walking distances are unverified; check signs and the route to the market pin.",
    rateLabel: 'Rate',
    capacityLabel: 'Capacity',
    spots: [
  {
    "name": "Marked parking around Jalan Tun Fuad Stephen",
    "distance": "Follow map directions",
    "rate": "Check posted rates",
    "capacity": "Check availability",
    "notes": "Check the pedestrian route before leaving your vehicle."
  }
],
  },
  transport: {
    eyebrow: 'Getting There in Detail',
    title: 'How to Get to the Market',
    intro:
      "Choose transport based on your starting point. Confirm fares, drop-off points and current travel time; no fixed bus schedule or fare is verified here.",
    costPrefix: 'Estimated cost:',
    stepsLabel: 'Step-by-Step',
    tipsLabel: '💡 Useful Tip',
    modeLabels: {
      kapal_terbang: 'Flight',
      bas: 'City Bus',
      teksi: 'Taxi',
      grab: 'Grab / E-Hailing',
      berjalan: 'On Foot',
      kereta: 'Self-Drive',
    },
    options: [
  {
    "id": "taxi-map",
    "mode": "grab",
    "title": "Taxi / e-hailing to Pasar Kraftangan",
    "duration": "Depends on traffic",
    "cost": "Check before booking",
    "steps": [
      "Use your accommodation or actual pickup point as the origin.",
      "Select the Pasar Kraftangan pin on Jalan Tun Fuad Stephen.",
      "Check the fare and drop-off point in the app or with the driver.",
      "Save a pickup point for the return journey."
    ],
    "tips": "If taking a bus, confirm the current route and last service with the operator first."
  }
],
  },
  food: {
    eyebrow: 'Food Nearby',
    title: 'Where to Eat?',
    intro:
      "The waterfront market area has food stalls. Choose using the menu, prices and stall conditions on the day.",
    distanceLabel: 'Distance from market',
    priceLabels: {
      murah: 'Budget',
      sederhana: 'Mid-range',
      mewah: 'Premium',
    },
    spots: [
  {
    "id": "market-food",
    "name": "Food stalls in the market area",
    "distance": "Market area",
    "specialty": [
      "Seafood",
      "Fruit",
      "Snacks"
    ],
    "price": "sederhana",
    "note": "Confirm the price per portion or seafood weight and any cooking charges before ordering."
  }
],
  },
  nearby: {
    eyebrow: 'Nearby Attractions',
    title: 'Combine Your Visit',
    intro:
      "Gaya Street and Jesselton Point can be separate stops on a city visit. Check routes and opening times; neither is the entrance to this market.",
    guideCta: 'See the one-day Kota Kinabalu itinerary',
    viewMapLabel: 'View map',
    attractions: [
  {
    "id": "gaya-street",
    "name": "Gaya Street Sunday Market",
    "distance": "Check current directions",
    "duration": "Plan separately",
    "highlight": "The Gaya Street Sunday Market is a separate event. Check its hours before combining it with this market.",
    "category": "City market"
  },
  {
    "id": "jesselton-point",
    "name": "Jesselton Point",
    "distance": "Check current directions",
    "duration": "Plan separately",
    "highlight": "Jesselton Point is a waterfront area north of downtown. Confirm outbound and return boat times before planning an island trip.",
    "category": "Waterfront"
  }
],
  },
  map: {
    eyebrow: 'Location Map',
    title: 'Find Us on Google Maps',
    intro:
      "Use the Pasar Kraftangan / Filipino Market pin at the address below. The Google Maps listing showed 08:00–22:00 on 19 October 2026; individual handicraft and food stalls can keep different hours.",
    iframeTitle: 'Map of Kota Kinabalu Handicraft Market, Sabah',
    openMapsLabel: 'Open in Google Maps',
  },
  faq: {
    eyebrow: 'Frequently Asked Questions',
    title: 'FAQ · Frequently asked questions',
    intro:
      "Answers about names, hours, location and shopping.",
    items: [
  {
    "q": "Is this the Filipino Market?",
    "a": "Pasar Kraftangan is also searched as Handicraft Market or Filipino Market. The map linked here currently shows Pasar Kraftangan / Filipino Market. Sabah Tourism publishes its market guide under Anjung Kinabalu; names can cover neighbouring market areas, so follow the pin and street address."
  },
  {
    "q": "What are the opening hours?",
    "a": "Google Maps listed 08:00–22:00 daily when checked on 19 October 2026. These are listing hours, not a promise that every handicraft shop or food stall operates throughout that period."
  },
  {
    "q": "Where is the market?",
    "a": "7, Jalan Tun Fuad Stephen, Pusat Bandar Kota Kinabalu, 88000 Kota Kinabalu, Sabah. Open the map link for directions from your actual starting point."
  },
  {
    "q": "What can I buy?",
    "a": "Look for sarongs or pareos, pearl jewellery, wooden carvings, sompoton and small souvenirs. Stock, materials, origin and prices vary between sellers."
  },
  {
    "q": "Can I bargain?",
    "a": "Sabah Tourism recommends bargaining. Compare stalls and negotiate politely; no fixed discount is guaranteed."
  },
  {
    "q": "Are the pearls guaranteed genuine?",
    "a": "Appearance alone cannot confirm every item. Ask for written details of type, treatment and setting, plus a receipt. Consider independent expert verification for expensive purchases."
  },
  {
    "q": "What payment and facilities are available?",
    "a": "Confirm payment methods, toilets, step-free access and parking locally. Do not assume every stall takes cards or every aisle is suitable for a wheelchair."
  },
  {
    "q": "What is the Google rating?",
    "a": "The linked listing showed 4.0/5 from 13,958 reviews on 19 October 2026. Ratings change; open Google Maps for the current figure."
  }
],
  },
  guides: {
    relatedTitle: 'Related Guides',
    backHomeLabel: 'Back to the main guide',
    backHomeHint:
      'The full Pasar Kraftangan guide: opening hours, parking, transport, food and map.',
  },
  header: {
    visitUs: 'Visit Us',
    navAria: 'Main navigation',
  },
  footer: {
    about:
      "Independent visitor guide to Kota Kinabalu Handicraft Market: location, listed hours, shopping and trip planning.",
    locationLine: '🌐 English · Location: Kota Kinabalu, Sabah, Malaysia',
    quickLinksTitle: 'Quick Links',
    quickLinks: [
      { href: '#kategori', label: 'Product Categories' },
      { href: '#galeri', label: 'Photo Gallery' },
      { href: '#pengangkutan', label: 'Getting There' },
      { href: '#parkir', label: 'Parking' },
      { href: '#makanan', label: 'Food Nearby' },
      { href: '#tempat-menarik', label: 'Nearby Attractions' },
      { href: '#peta', label: 'Location Map' },
      { href: '#faq', label: 'FAQ' },
    ],
    disclaimerTitle: 'Unofficial Disclaimer',
    disclaimerBody1:
      'This website is an independent visitor guide and is NOT operated, endorsed or represented by the management of Pasar Kraftangan Kota Kinabalu, Kota Kinabalu City Hall (DBKK) or any Sabah government agency.',
    disclaimerBody2:
      'Please verify the latest information with the market management or the official Sabah Tourism website before your trip.',
    copyrightSuffix: 'Unofficial visitor guide.',
    backToTop: 'Back to top',
  },
};

const zh: Translation = {
  meta: {
    name: '亚庇手工艺品市场',
    alternateName: 'Pasar Kraftangan Kota Kinabalu · 菲律宾市场',
    title: "亚庇手工艺品市场｜营业时间、位置与购物指南",
    description:
      "Pasar Kraftangan／菲律宾市场位于亚庇 Jalan Tun Fuad Stephen。核对地图营业时间08:00–22:00，了解定位、珍珠饰品、纪念品与选购要点。",
    htmlLang: 'zh',
    ogLocale: 'zh_CN',
  },
  hero: {
    badge: 'Kota Kinabalu · Sabah · Malaysia',
    h1: '亚庇手工艺品市场（菲律宾市场）',
    ctaProducts: '逛逛商品',
    ctaTransport: '交通指南',
    reviewsWord: '则评价',
    hoursNote: "08:00–22:00 · Google 地图所列时间",
  },
  nav: [
    { id: 'info-penting', label: '重要信息' },
    { id: 'kategori', label: '商品分类' },
    { id: 'galeri', label: '图库' },
    { id: 'tiket', label: '门票与费用' },
    { id: 'masa-terbaik', label: '最佳时间' },
    { id: 'parkir', label: '停车' },
    { id: 'pengangkutan', label: '交通' },
    { id: 'makanan', label: '周边美食' },
    { id: 'tempat-menarik', label: '周边景点' },
    { id: 'peta', label: '地图' },
    { id: 'faq', label: '常见问题' },
  ],
  guidesNav: {
    shopping: '必买清单',
    itinerary: '一日游行程',
    'best-time': '最佳时间',
    'airport-to-market': '机场到市场',
    'seafood-near-market': '周边海鲜',
    'atkinson-clock-tower': '艾京生钟楼',
    'half-day-itinerary': '半日行程',
  },
  keyInfo: [
  {
    "icon": "clock",
    "label": "地图所列时间",
    "value": "08:00–22:00",
    "sub": "2026年10月19日核对；各摊位时间不同"
  },
  {
    "icon": "stopwatch",
    "label": "游览安排",
    "value": "按目标摊位安排",
    "sub": "预留比较商品和价格的时间。"
  },
  {
    "icon": "ticket",
    "label": "购物",
    "value": "先比较再购买",
    "sub": "比较多家摊位的材质和价格。"
  },
  {
    "icon": "sun",
    "label": "天气",
    "value": "出行当天查询",
    "sub": "带水及遮阳防雨用品。"
  }
],
  products: {
    eyebrow: '沙巴手工艺品精选',
    title: '主要商品分类',
    intro:
      "可寻找沙笼、围裙式披布、珍珠饰品、木雕和纪念品。向各卖家核对材质、做工与产地，不应默认所有商品均在沙巴制作。",
    guideCta: '阅读完整购物攻略',
    categories: [
      {
        id: 'tenun',
        title: '传统织布与宋吉（Songket）',
        tagline: '沙巴纺织传承',
        description:
          '来自沙巴杜顺、卡达山、巴瑶、姆鲁特等原住民族群的传统手织布。几何纹样与花草图案蕴含丰富的文化意涵。',
        items: ['沙巴宋吉布', '杜顺手织布', '手织披肩', '手织马来套装'],
      },
      {
        id: 'mutiara',
        title: '珍珠饰品',
        tagline: "购买前核实",
        description:
          "珍珠饰品有不同类型。询问珍珠类别、处理方式、镶嵌材质和产地凭证；仅凭外观或价格无法确认真伪。",
        items: ['珍珠项链', '珍珠耳环', '珍珠手链', '珍珠戒指'],
      },
      {
        id: 'ukiran',
        title: '木雕工艺品',
        tagline: '沙巴匠人木艺',
        description:
          '以本地硬木雕刻的工艺品——动物雕像、传统面具、盾牌与富有沙巴民族风格的摆件。',
        items: ['内陆民族雕像', '传统面具', '迷你木船', '木制收纳盒'],
      },
      {
        id: 'rotan',
        title: '藤竹编织品',
        tagline: '天然耐用',
        description:
          '由乡村社区手工编织的藤、竹提篮、袋子、席子与小件家具——轻便又耐用。',
        items: ['藤编手提袋', '藤篮', '竹席', '藤编花盆套'],
      },
      {
        id: 'cenderamata',
        title: '纪念品与伴手礼',
        tagline: '沙巴伴手礼',
        description: '冰箱贴、明信片、T恤、钥匙圈等各式轻便纪念品，适合带回送给亲友。',
        items: ['冰箱贴', '明信片', '沙巴T恤', '钥匙圈'],
      },
      {
        id: 'pakaian',
        title: '传统服饰',
        tagline: '沙巴民族时尚',
        description: '沙巴各族群传统服装、蜡染服饰，以及适合日常穿搭的串珠配饰等。',
        items: ['男款蜡染衬衫', '传统马来女装', '手织腰布', '沙巴花纹头巾'],
      },
    ],
  },
  gallery: {
    eyebrow: '图片导览',
    title: '市场实拍图集',
    intro:
      '20 张亚庇手工艺品市场实拍照片——摊位氛围、手工艺品细节，以及市中心海滨的动人景色。',
    captionWord: '照片',
    alt: (n: number) => `亚庇手工艺品市场实拍照片 ${n}`,
  },
  tickets: {
    eyebrow: '门票与费用',
    title: '入场完全免费',
    intro:
      '无论马来西亚本地民众还是国际游客，一律免收入场费。您只需为购买的商品、停车以及市场内的餐饮付费。',
    tipsTitle: '💡 购物小贴士',
    tips: [
      '讨价还价是常态，买多更容易砍价。',
      '备足现金——多数小摊不接受刷卡。',
      '购买珍珠等贵重物品时请索取收据。',
    ],
    tableHeaders: ['游客类别', '入场费', '备注'],
    ticketInfo: [
      { type: '成人', price: '免费', note: '不限年龄' },
      { type: '儿童', price: '免费', note: '欢迎所有儿童' },
      { type: '长者', price: '免费', note: '无额外收费' },
      { type: '外国游客', price: '免费', note: '与马来西亚公民相同' },
    ],
  },
  bestTime: {
    eyebrow: '最佳时间与游览时长',
    title: '什么时候去？逛多久？',
    intro:
      "根据希望逛的摊位、天气和返程安排选择时间。地图所列时间并不保证全部摊位同时营业。",
    cards: [
  {
    "title": "按实际需求安排",
    "badge": "行程建议",
    "time": "白天或傍晚，以目标摊位为准",
    "points": [
      "核对计划拜访的卖家营业时间。",
      "带水及遮阳防雨用品。",
      "预留比较商品和价格的时间。"
    ]
  }
],
    bestDayTitle: '📅 最适合到访的日子',
    dayRows: [
  {
    "label": "按实际需求安排",
    "text": "根据希望逛的摊位、天气和返程安排选择时间。地图所列时间并不保证全部摊位同时营业。"
  }
],
    climateTitle: '🌤️ 亚庇气候',
    climateText:
      "带水及遮阳防雨用品。",
  },
  parking: {
    eyebrow: '停车信息',
    title: '车该停在哪里？',
    intro:
      "选择有标识的公共或商业停车场。当前收费、容量和步行距离未核实，请查看现场标牌并确认到市场定位的路线。",
    rateLabel: '费率',
    capacityLabel: '车位数',
    spots: [
  {
    "name": "Jalan Tun Fuad Stephen 周边合规停车位",
    "distance": "按地图规划路线",
    "rate": "以现场收费牌为准",
    "capacity": "现场确认空位",
    "notes": "停车前确认步行通道是否适合同行人员。"
  }
],
  },
  transport: {
    eyebrow: '交通方式详解',
    title: '如何前往手工艺品市场',
    intro:
      "根据实际出发地点选择交通。确认当日费用、下车点和路程时间；本站未核实固定公交时刻或票价。",
    costPrefix: '预估费用：',
    stepsLabel: '路线步骤',
    tipsLabel: '💡 实用提示',
    modeLabels: {
      kapal_terbang: '飞机',
      bas: '市区巴士',
      teksi: '出租车',
      grab: 'Grab 网约车',
      berjalan: '步行',
      kereta: '自驾',
    },
    options: [
  {
    "id": "taxi-map",
    "mode": "grab",
    "title": "出租车／网约车前往 Pasar Kraftangan",
    "duration": "视交通情况而定",
    "cost": "预订前确认",
    "steps": [
      "以住宿或实际接车点作为起点。",
      "选择 Jalan Tun Fuad Stephen 上的 Pasar Kraftangan 定位。",
      "在应用内或向司机确认费用及下车位置。",
      "保存返程接车点。"
    ],
    "tips": "若乘公交，请先向运营方确认当前路线和末班时间。"
  }
],
  },
  food: {
    eyebrow: '周边美食',
    title: '哪里吃饭？',
    intro:
      "海滨市场区域设有餐饮摊位，请根据当天菜单、价格和摊位情况选择。",
    distanceLabel: '与市场的距离',
    priceLabels: {
      murah: '经济',
      sederhana: '中档',
      mewah: '高档',
    },
    spots: [
  {
    "id": "market-food",
    "name": "市场区域餐饮摊位",
    "distance": "市场区域",
    "specialty": [
      "海鲜",
      "水果",
      "小吃"
    ],
    "price": "sederhana",
    "note": "点餐前确认每份价格，或海鲜重量、单价及加工费。"
  }
],
  },
  nearby: {
    eyebrow: '周边景点',
    title: '串联周边行程',
    intro:
      "Gaya Street 和 Jesselton Point 可作为市区游览中的其他停靠点。请分别核对路线和开放时间，它们并非本市场入口。",
    guideCta: '查看亚庇一日游行程安排',
    viewMapLabel: '查看地图',
    attractions: [
  {
    "id": "gaya-street",
    "name": "Gaya Street Sunday Market",
    "distance": "查看当前路线",
    "duration": "单独安排",
    "highlight": "Gaya Street 周日市场是另一项活动，搭配本市场行程前需核对其开放时间。",
    "category": "市区市场"
  },
  {
    "id": "jesselton-point",
    "name": "Jesselton Point",
    "distance": "查看当前路线",
    "duration": "单独安排",
    "highlight": "Jesselton Point 位于市中心以北的海滨区域。若计划乘船，请先确认去程与返程时刻。",
    "category": "海滨"
  }
],
  },
  map: {
    eyebrow: '位置地图',
    title: '在 Google 地图上找到我们',
    intro: "请使用下方 Pasar Kraftangan／菲律宾市场的定位。2026年10月19日核对的 Google 地图所列时间为08:00–22:00；手工艺摊、餐饮摊和个别商店可有不同营业时间。",
    iframeTitle: '沙巴亚庇手工艺品市场地图',
    openMapsLabel: '在 Google 地图中打开',
  },
  faq: {
    eyebrow: '常见问题',
    title: 'FAQ · 游客常问的问题',
    intro: "关于名称、营业时间、位置和购物的常见问题。",
    items: [
  {
    "q": "这里是菲律宾市场吗？",
    "a": "Pasar Kraftangan 也常被搜索为 Handicraft Market 或 Filipino Market。本站链接的地图目前显示菲律宾夜市／Pasar Kraftangan。沙巴旅游局以 Anjung Kinabalu 为标题介绍该市场；不同名称可能涵盖相邻市场区域，请以定位和街道地址核对。"
  },
  {
    "q": "市场几点营业？",
    "a": "2026年10月19日核对时，Google 地图显示每天08:00–22:00。这是地点列表的营业时间，并不保证每个手工艺摊、商店或餐饮摊全时段开放。"
  },
  {
    "q": "具体位置在哪里？",
    "a": "7, Jalan Tun Fuad Stephen, Pusat Bandar Kota Kinabalu, 88000 Kota Kinabalu, Sabah。请打开地图，从实际出发地点规划路线。"
  },
  {
    "q": "可以买什么？",
    "a": "可寻找沙笼、披布、珍珠饰品、木雕、sompoton传统乐器和小纪念品。库存、材质、产地和价格因卖家而异。"
  },
  {
    "q": "可以议价吗？",
    "a": "沙巴旅游局建议议价。先比较不同摊位，再礼貌沟通；没有保证能获得的固定折扣。"
  },
  {
    "q": "珍珠都保证是真的吗？",
    "a": "不能仅凭外观确认每件商品。购买前索取类别、处理方式、镶嵌材质等书面信息及收据；高价商品可考虑独立专业鉴定。"
  },
  {
    "q": "支付和设施有什么注意事项？",
    "a": "现场核对支付方式、厕所、无台阶通道和停车位置。不要默认每个摊位支持刷卡，也不要默认全部通道都适合轮椅。"
  },
  {
    "q": "现在的 Google 评分是多少？",
    "a": "本站所链接地图在2026年10月19日显示4.0/5、13,958条评价。数字可能变化，请打开 Google 地图查看当前值。"
  }
],
  },
  guides: {
    relatedTitle: '相关指南',
    backHomeLabel: '返回主指南',
    backHomeHint: '手工艺品市场完整指南：营业时间、停车、交通、美食与地图。',
  },
  header: {
    visitUs: '到访信息',
    navAria: '主导航',
  },
  footer: {
    about:
      "亚庇手工艺品市场独立游客指南：位置、地图所列时间、商品选择和行程安排。",
    locationLine: '🌐 中文 · 位置：马来西亚沙巴亚庇',
    quickLinksTitle: '快速链接',
    quickLinks: [
      { href: '#kategori', label: '商品分类' },
      { href: '#galeri', label: '图片导览' },
      { href: '#pengangkutan', label: '交通指南' },
      { href: '#parkir', label: '停车信息' },
      { href: '#makanan', label: '周边美食' },
      { href: '#tempat-menarik', label: '周边景点' },
      { href: '#peta', label: '位置地图' },
      { href: '#faq', label: '常见问题' },
    ],
    disclaimerTitle: '非官方声明',
    disclaimerBody1:
      '本网站为独立编制的游客指南，并非由亚庇手工艺品市场管理方、亚庇市政厅（DBKK）或沙巴任何政府机构运营、授权或代表。',
    disclaimerBody2: '出行前请向市场管理方或沙巴旅游局官方渠道核实最新信息。',
    copyrightSuffix: '非官方游客指南。',
    backToTop: '回到顶部',
  },
};

export const translations: Record<Locale, Translation> = { ms, en, zh };
