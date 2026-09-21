import type { Locale } from './config';

const ms = {
  meta: {
    name: 'Pasar Kraftangan Kota Kinabalu',
    alternateName: 'Pasar Filipina Kota Kinabalu · Handicraft Market Kota Kinabalu',
    title: 'Pasar Kraftangan Kota Kinabalu Panduan Pelancongan',
    description:
      'Pasar kraftangan terbesar di Sabah di Jalan Tun Fuad Stephens, Kota Kinabalu — mutiara, kain tenun, ukiran kayu dan cenderamata. Buka setiap hari 9:00 pagi – 6:00 petang. Panduan beli-belah, waktu operasi, pengangkutan dan parkir.',
    htmlLang: 'ms',
    ogLocale: 'ms_MY',
  },
  hero: {
    badge: 'Kota Kinabalu · Sabah · Malaysia',
    h1: 'Pasar Kraftangan Kota Kinabalu',
    ctaProducts: 'Teroka Produk',
    ctaTransport: 'Cara Ke Sana',
    reviewsWord: 'ulasan',
    hoursNote: '9:00 AM – 6:00 PM · Setiap hari',
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
  },
  keyInfo: [
    {
      icon: 'ticket',
      label: 'Percuma Masuk',
      value: 'TIADA BAYARAN',
      sub: 'Terbuka untuk semua pelawat',
    },
    {
      icon: 'clock',
      label: 'Waktu Operasi',
      value: '9:00 AM – 6:00 PM',
      sub: 'Setiap hari termasuk cuti umum',
    },
    {
      icon: 'stopwatch',
      label: 'Tempoh Disyorkan',
      value: '1.5 – 2 jam',
      sub: 'Untuk meneroka semua gerai',
    },
    {
      icon: 'sun',
      label: 'Masa Terbaik',
      value: '10:00 AM – 3:00 PM',
      sub: 'Pilihan lengkap & kurang sesak',
    },
  ],
  products: {
    eyebrow: 'Koleksi Kraftangan Sabah',
    title: 'Kategori Produk Utama',
    intro:
      'Lebih 100 gerai menawarkan pelbagai barangan kraftangan tradisional Sabah. Dari kain tenun warisan suku kaum, hingga mutiara air masin Laut China Selatan — setiap karya mempunyai cerita budayanya sendiri.',
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
        tagline: 'Mutiara Laut China Selatan',
        description:
          'Perhiasan mutiara asli dari ladang mutiara Sabah dan Labuan. Rangkaian emas dan perak dengan mutiara air tawar dan air masin berkualiti tinggi.',
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
      'Pasar Kraftangan dibuka setiap hari, tetapi terdapat jangka masa yang lebih sesuai untuk pengalaman beli-belah yang selesa — kurang sesak, pilihan gerai lengkap, dan udara yang masih sejuk di pesisiran laut.',
    cards: [
      {
        title: 'Waktu Pagi',
        badge: 'Terbaik · ⭐⭐⭐⭐⭐',
        time: '10:00 AM – 1:00 PM',
        points: [
          'Semua gerai sudah penuh beroperasi',
          'Kurang sesak, mudah tawar-menawar harga',
          'Udara masih sejuk sebelum matahari tinggi',
        ],
      },
      {
        title: 'Waktu Petang',
        badge: 'Bagus · ⭐⭐⭐⭐',
        time: '3:00 PM – 5:30 PM',
        points: [
          'Cuaca semakin sejuk selepas matahari condong',
          'Beberapa penjual memberi diskaun akhir hari',
          'Sesuai selepas jalan-jalan di Gaya Street',
        ],
      },
      {
        title: 'Tempoh Disyorkan',
        badge: 'Kesesuaian · ⭐⭐⭐⭐⭐',
        time: '1.5 – 2 jam yang santai',
        points: [
          '30 minit: Melintas pantas & belian ringkas',
          '2 jam: Pilihan teliti + tawar-menawar + food court',
          'Sekiranya gabung Jesselton Point: 1 hari penuh',
        ],
      },
    ],
    bestDayTitle: '📅 Hari Paling Sesuai Lawat',
    dayRows: [
      {
        label: 'Isnin – Khamis:',
        text: 'Kurang pelancong, ruang lebih luas untuk memilih barang.',
      },
      {
        label: 'Jumaat:',
        text: 'Sedikit sesak pada waktu tengahari waktu rehat pejabat.',
      },
      {
        label: 'Sabtu, Ahad & Cuti Umum:',
        text: 'Paling meriah, sesuai untuk suasana pasar tempatan.',
      },
    ],
    climateTitle: '🌤️ Iklim Kota Kinabalu',
    climateText:
      'Suhu sepanjang tahun antara 24°C – 32°C, dengan kelembapan tinggi. Musim hujan utama berlaku pada bulan November – Februari, namun hujan biasanya berlaku pada waktu petang. Bawa payung mini untuk lindungan matahari atau hujan rencana.',
  },
  parking: {
    eyebrow: 'Maklumat Parkir',
    title: 'Di Mana Hendak Letak Kereta?',
    intro:
      'Parkir di sepanjang Jalan Tun Fuad Stephen adalah terhad dan cepat penuh. Berikut adalah pilihan tempat parkir terbaik berhampiran Pasar Kraftangan untuk rujukan anda.',
    rateLabel: 'Kadar',
    capacityLabel: 'Kapasiti',
    spots: [
      {
        name: 'Parkir Jalan Tun Fuad Stephen',
        distance: 'Tepat di depan pasar',
        rate: 'RM2/jam (maks RM8/hari)',
        capacity: 'Terhad (kira-kira 40 lot)',
        notes: 'Paling hampir tetapi cepat penuh pada waktu puncak 10:00 pagi – 3:00 petang.',
      },
      {
        name: 'Parkir Suria Sabah Shopping Mall',
        distance: '350 meter (5 minit jalan kaki)',
        rate: 'RM3/jam pertama, RM2 setiap jam selepas',
        capacity: 'Bertingkat, banyak lot',
        notes: 'Pilihan terbaik jika parkir jalan penuh. Boleh membeli belah selepas melawat pasar.',
      },
      {
        name: 'Parkir Wisma Merdeka',
        distance: '450 meter (7 minit jalan kaki)',
        rate: 'RM2/jam',
        capacity: 'Sederhana',
        notes: 'Pusat beli belah yang lebih lama, biasanya kurang sesak daripada Suria Sabah.',
      },
      {
        name: 'Parkir Jesselton Point',
        distance: '200 meter (3 minit jalan kaki)',
        rate: 'RM3/jam',
        capacity: 'Sederhana',
        notes: 'Sesuai jika anda bercadang menaiki feri ke pulau selepas melawat pasar kraftangan.',
      },
    ],
  },
  transport: {
    eyebrow: 'Pengangkutan Terperinci',
    title: 'Cara Ke Pasar Kraftangan',
    intro:
      'Berikut adalah 6 cara untuk ke Pasar Kraftangan Kota Kinabalu, dari Lapangan Terbang, pusat bandar, dan sekitarnya. Panduan langkah demi langkah termasuk anggaran kos dan tempoh perjalanan.',
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
        id: 'airport',
        mode: 'kapal_terbang',
        title: 'Dari Lapangan Terbang Antarabangsa Kota Kinabalu (BKI)',
        duration: '15 – 20 minit',
        cost: 'RM30 – RM45',
        steps: [
          'Tiba di Lapangan Terbang KK, keluar dari Arrival Hall',
          'Pilih teksi di kaunter teksi rasmi di sebelah kiri keluar',
          'Atau gunakan aplikasi Grab untuk tambang tetap',
          'Beritahu pemandu "Pasar Kraftangan" atau "Handicraft Market Jalan Tun Fuad Stephen"',
        ],
        tips: 'Grab biasanya lebih murah daripada teksi biasa. Tambang lebih tinggi pada waktu puncak petang.',
      },
      {
        id: 'bas-bandar',
        mode: 'bas',
        title: 'Bas Bandar (City Bus)',
        duration: '25 – 40 minit',
        cost: 'RM1 – RM2 seorang',
        steps: [
          'Pergi ke stesen bas utama Kota Kinabalu (Wawasan Plaza / Padang Merdeka)',
          'Cari laluan bas yang melalui Jalan Tun Fuad Stephen',
          'Turun di perhentian berhampiran Pasar Kraftangan',
          'Berjalan 2–3 minit ke pintu masuk pasar',
        ],
        tips: 'Bas bandar beroperasi dari 6:30 AM hingga 8:00 PM. Perkhidmatan lebih jarang pada hujung minggu.',
      },
      {
        id: 'teksi',
        mode: 'teksi',
        title: 'Teksi Bandar (Dari Pusat Bandar)',
        duration: '5 – 10 minit',
        cost: 'RM8 – RM15',
        steps: [
          'Tunggu di tempat menunggu teksi atau halte teksi yang ditetapkan',
          'Pastikan pemandu guna meter atau bincang tambang dahulu',
          'Alamat penuh: No. 7, Jalan Tun Fuad Stephen, Pusat Bandar KK',
          'Pasar terletak bertentangan dengan laut, berhampiran Jesselton Point',
        ],
        tips: 'Kebanyakan teksi tidak guna meter di Kota Kinabalu, jadi semak harga dahulu sebelum naik.',
      },
      {
        id: 'grab',
        mode: 'grab',
        title: 'Grab / E-Hailing',
        duration: '5 – 15 minit',
        cost: 'RM5 – RM18',
        steps: [
          'Buka aplikasi Grab di telefon pintar',
          'Tetapkan destinasi: "Pasar Kraftangan Kota Kinabalu"',
          'Pilih GrabCar atau GrabTaxi',
          'Bayar secara tunai atau kad dalam aplikasi',
        ],
        tips: 'Pilihan termudah dan paling selamat. Harga terpapar dalam aplikasi, tiada tawar-menawar.',
      },
      {
        id: 'berjalan',
        mode: 'berjalan',
        title: 'Berjalan Kaki Dari Gaya Street / Padang Merdeka',
        duration: '5 – 10 minit',
        cost: 'Percuma',
        steps: [
          'Dari Gaya Street, berjalan arah laut (ke arah Jalan Tun Fuad Stephen)',
          'Ikut papan tanda "Handicraft Market" atau "Jesselton Point"',
          'Pasar terletak di sebelah kiri sebelum simpang ke Jesselton Point',
        ],
        tips: 'Sesuai jika cuaca tidak terlalu panas. Bawa payung atau topi untuk lindungan matahari.',
      },
      {
        id: 'kereta',
        mode: 'kereta',
        title: 'Pemanduan Kereta Sendiri',
        duration: 'Bergantung pada lokasi',
        cost: 'Bayaran parkir RM2 – RM5/jam',
        steps: [
          'Gunakan Waze / Google Maps cari "Pasar Kraftangan Kota Kinabalu"',
          'Pilih tempat parkir di sepanjang Jalan Tun Fuad Stephen',
          'Atau parkir di pusat beli belah berhampiran jika parkir jalan penuh',
        ],
        tips: 'Parkir jalan terhad di waktu puncak. Suria Sabah Shopping Mall mempunyai parkir bertingkat berhampiran (10 minit jalan kaki).',
      },
    ],
  },
  food: {
    eyebrow: 'Makanan Berdekatan',
    title: 'Di Mana Hendak Makan?',
    intro:
      'Dari food court bawah pasar dengan harga poket, hingga restoran makanan laut mewah di tepi laut — 6 pilihan tempat makan terbaik dalam lingkungan 10 minit dari Pasar Kraftangan.',
    distanceLabel: 'Jarak dari pasar',
    priceLabels: {
      murah: 'Ekonomi',
      sederhana: 'Sederhana',
      mewah: 'Mewah',
    },
    spots: [
      {
        id: 'kraf-food-court',
        name: 'Food Court Pasar Kraftangan',
        distance: '0 km (Aras Bawah Pasar)',
        specialty: ['Nasi Campur Sabah', 'Laksa Sabah', 'Mee Kolok', 'Teh Tarik'],
        price: 'murah',
        note: 'Pilihan makanan tempatan dengan harga yang sangat berpatutan, terletak terus di aras bawah pasar. Makanan laut ringkas dan lazat.',
      },
      {
        id: 'gaya-street',
        name: 'Gaya Street Sunday Market Food Stalls',
        distance: '300 meter ke Gaya Street',
        specialty: ['Sate Ayam', 'Popiah', 'Roti Canai', 'Kopi-O ais', 'Cendol Durian'],
        price: 'murah',
        note: 'Pasar pagi Ahad sahaja, barisan peniaga makanan di Gaya Street. Datang awal sebelum tengah hari untuk pilihan terbanyak.',
      },
      {
        id: 'seaside-market',
        name: 'Pasar Ikan Kota Kinabalu / Filipino Market',
        distance: '400 meter ke persisiran laut',
        specialty: ['Ikan Bakar', 'Ketam Bakar', 'Sotong Goreng Tepung', 'Nasi Lemak'],
        price: 'sederhana',
        note: 'Pilihan makanan laut segar yang dibakar atau digoreng di hadapan anda. Tempat popular untuk makan tengah hari atau makan malam.',
      },
      {
        id: 'the-little-italy',
        name: 'The Little Italy Restaurant',
        distance: '500 meter ke Jalan Gaya',
        specialty: ['Pasta Seafood', 'Pizza Marinara', 'Spicy Clams', 'Tiramisu'],
        price: 'sederhana',
        note: 'Restoran Itali dengan sentuhan makanan laut Sabah. Suasana yang selesa di tengah bandar.',
      },
      {
        id: 'village-park',
        name: 'Village Park Restaurant',
        distance: '700 meter ke Damai Plaza',
        specialty: ['Nasi Lemak Kukus', 'Roti Babi', 'Ayam Goreng Berempah', 'Milo Ais'],
        price: 'murah',
        note: 'Tempat makan tempatan yang terkenal dengan nasi lemak kukus. Antara kegemaran penduduk tempatan.',
      },
      {
        id: 'oceanus-waterfront',
        name: 'Oceanus Waterfront Seafood',
        distance: '600 meter ke Waterfront KK',
        specialty: ['Ketam Masak Lemak Cili Api', 'Udang Galah Bakar', 'Fish Head Curry', 'Ikan Steam'],
        price: 'mewah',
        note: 'Restoran makanan laut mewah dengan pemandangan laut. Sesuai untuk makan malam yang berpasangan atau keluarga.',
      },
    ],
  },
  nearby: {
    eyebrow: 'Tempat Menarik Berdekatan',
    title: 'Gabungkan Lawatan Anda',
    intro:
      'Pasar Kraftangan terletak di tengah-tengah pusat bandar. Manfaatkan lokasi strategik ini untuk meneroka 6 tempat menarik berhampiran — dari melawat pulau sehingga memanjat bukit Signal Hill untuk pemandangan panorama bandar.',
    guideCta: 'Lihat rancangan satu hari di Kota Kinabalu',
    viewMapLabel: 'Lihat peta',
    attractions: [
      {
        id: 'jesselton-point',
        name: 'Jesselton Point Jetty',
        distance: '200 meter',
        duration: '2 – 6 jam',
        highlight:
          'Jeti utama menaiki feri ke Pulau Manukan, Pulau Sapi, Pulau Mamutik, dan pulau-pulau lain di Taman Laut Tunku Abdul Rahman.',
        category: 'Pulau & Laut',
      },
      {
        id: 'gaya-street',
        name: 'Gaya Street',
        distance: '300 meter',
        duration: '1 – 2 jam',
        highlight:
          'Jalan utama sejarah dengan seni bina zaman kolonial British. Pasar pagi terkenal pada hari Ahad dengan pelbagai barang dan makanan.',
        category: 'Sejarah & Membeli-belah',
      },
      {
        id: 'tunku-abdul-rahman',
        name: 'Taman Laut Tunku Abdul Rahman',
        distance: '15 – 20 minit bot',
        duration: 'Sepanjang hari',
        highlight:
          'Kepulauan 5 pulau dengan pantai berpasir putih, snorkeling, dan aktiviti air. Pilihan utama pelancong ke Kota Kinabalu.',
        category: 'Pantai & Alam Semula Jadi',
      },
      {
        id: 'signal-hill',
        name: 'Signal Hill Observatory Platform',
        distance: '1 km (15 minit jalan kaki atau 5 minit kereta)',
        duration: '30 – 45 minit',
        highlight:
          'Pemandangan panorama Bandar Kota Kinabalu dan laut dari bukit. Tempat terbaik untuk mengambil gambar pemandangan bandar.',
        category: 'Pemandangan & Fotografi',
      },
      {
        id: 'sabah-museum',
        name: 'Muzium Sabah',
        distance: '4 km (10 – 15 minit kereta)',
        duration: '2 – 3 jam',
        highlight:
          'Koleksi sejarah, budaya, dan etnografi Sabah. Rumah panjang tradisional, koleksi arkeologi, dan taman budaya.',
        category: 'Muzium & Sejarah',
      },
      {
        id: 'masjid-bandaraya',
        name: 'Masjid Bandaraya Kota Kinabalu',
        distance: '5 km (10 minit kereta)',
        duration: '30 – 60 minit',
        highlight:
          'Masjid terapung yang terkenal dengan seni bina moden. Satu ikon bandar Kota Kinabalu dengan pemandangan matahari terbenam.',
        category: 'Agama & Seni Bina',
      },
    ],
  },
  map: {
    eyebrow: 'Peta Lokasi',
    title: 'Cari Lokasi di Google Maps',
    intro:
      'Buka terus dalam apl Google Maps untuk navigasi sehala dari lokasi semasa anda ke Pasar Kraftangan Kota Kinabalu, Sabah.',
    iframeTitle: 'Peta Pasar Kraftangan Kota Kinabalu Sabah',
    openMapsLabel: 'Buka dalam Google Maps',
  },
  faq: {
    eyebrow: 'Soalan Lazim',
    title: 'FAQ · Soalan yang sering ditanya',
    intro:
      'Jawapan jelas untuk 15 soalan paling kerap ditanya oleh pelawat sebelum melawat Pasar Kraftangan Kota Kinabalu.',
    items: [
      {
        q: 'Adakah bayaran masuk ke Pasar Kraftangan Kota Kinabalu?',
        a: 'Tidak. Kemasukan ke Pasar Kraftangan adalah PERCUMA untuk semua pelawat. Anda hanya perlu membayar untuk barang yang dibeli.',
      },
      {
        q: 'Bilakah waktu operasi Pasar Kraftangan?',
        a: 'Pasar Kraftangan dibuka setiap hari termasuk hari Ahad dan cuti umum, dari jam 9:00 pagi hingga 6:00 petang. Sebahagian gerai mungkin tutup lebih awal pada hari biasa.',
      },
      {
        q: 'Bolehkah saya menawar harga di Pasar Kraftangan?',
        a: 'Ya, menawar harga adalah perkara biasa di Pasar Kraftangan, terutamanya untuk pembelian dalam jumlah banyak atau barang kraftangan. Sila tawar dengan sopan dan hormat.',
      },
      {
        q: 'Adakah kad kredit diterima di gerai-gerai?',
        a: 'Kebanyakan gerai hanya menerima wang tunai. Terdapat beberapa kedai yang lebih besar dan kedai mutiara yang menerima kad kredit. Mesin ATM tersedia berhampiran.',
      },
      {
        q: 'Adakah Pasar Kraftangan mesra OKU?',
        a: 'Ya, Pasar Kraftangan mempunyai laluan rata dan akses kerusi roda di pintu masuk utama. Tandas awam juga tersedia.',
      },
      {
        q: 'Adakah kamera dibenarkan di dalam pasar?',
        a: 'Ya, gambar dibenarkan untuk kegunaan peribadi. Jika anda ingin mengambil gambar penjual atau kraftangan untuk tujuan komersial, sila minta izin terlebih dahulu.',
      },
      {
        q: 'Bolehkah saya membawa beg dan barang belian besar ke dalam?',
        a: 'Ya, dibenarkan. Lorong agak luas tetapi boleh sesak pada waktu puncak. Simpan barang berharga dengan baik.',
      },
      {
        q: 'Adakah tandas awam di dalam pasar?',
        a: 'Ya, tandas awam disediakan di aras bawah berhampiran dengan food court. Caj kecil mungkin dikenakan untuk penyelenggaraan.',
      },
      {
        q: 'Bilakah masa terbaik untuk melawat?',
        a: 'Masa terbaik adalah antara jam 10:00 pagi hingga 3:00 petang apabila semua gerai dibuka dan sebelum terlalu sesak. Waktu pagi juga pilihan yang baik untuk tawar-menawar.',
      },
      {
        q: 'Adakah tempat menyimpan bagasi di Pasar Kraftangan?',
        a: 'Tiada perkhidmatan menyimpan bagasi secara rasmi. Jika anda mempunyai beg besar, boleh tinggalkan di hotel atau gunakan locker stesen pengangkutan awam.',
      },
      {
        q: 'Bagaimana dengan makanan di sekitar pasar?',
        a: 'Terdapat food court di aras bawah pasar dengan makanan tempatan. Gaya Street juga mempunyai banyak kedai makan dalam jarak 5–10 minit jalan kaki.',
      },
      {
        q: 'Adakah Wi-Fi percuma di dalam pasar?',
        a: 'Wi-Fi percuma tidak disediakan secara rasmi. Bagaimanapun, semua pengendali telekomunikasi utama Malaysia (Maxis, Celcom, Digi, U Mobile) mempunyai liputan 4G yang baik.',
      },
      {
        q: 'Bolehkah saya membelanjakan Ringgit Malaysia sahaja?',
        a: 'Ya, Ringgit Malaysia (RM) adalah mata wang rasmi. Sesetengah kedai besar mungkin menerima mata wang asing tetapi kadar tukaran mungkin tidak menguntungkan.',
      },
      {
        q: 'Adakah barang yang dibeli mempunyai jaminan asal?',
        a: 'Kebanyakan kraftangan dijual secara terus daripada pengrajin tempatan. Untuk barang berharga seperti mutiara, minta resit dan butiran penjual untuk rujukan masa depan.',
      },
      {
        q: 'Adakah diskaun untuk pembelian borong?',
        a: 'Ya, kebanyakan penjual memberi diskaun jika anda membeli beberapa barang sekaligus. Bincang dengan penjual sebelum membuat bayaran.',
      },
    ],
  },
  guides: {
    relatedTitle: 'Panduan Berkaitan',
    backHomeLabel: 'Kembali ke panduan utama',
    backHomeHint:
      'Panduan penuh Pasar Kraftangan: waktu operasi, parkir, pengangkutan, makanan & peta.',
    shopping: {
      meta: {
        title: 'Apa Yang Boleh Dibeli di Pasar Kraftangan KK? | Panduan Belian Sabah',
        description:
          'Senarai barangan terbaik di Pasar Kraftangan Kota Kinabalu: mutiara Sabah, kain tenun & songket, ukiran kayu, sompoton, amplang dan cenderamata — dengan anggaran harga, tips tawar-menawar dan cara bezakan mutiara asli.',
      },
      eyebrow: 'Panduan Membeli-Belah',
      h1: 'Apa Yang Boleh Dibeli di Pasar Kraftangan Kota Kinabalu?',
      intro:
        'Lebih 100 gerai berada di bawah satu bumbung di Jalan Tun Fuad Stephens. Panduan ini menyenaraikan enam kategori barangan yang paling berbaloi dibeli, anggaran harga di lapangan, serta cara memilih dan menawar supaya oleh-oleh yang anda bawa pulang benar-benar berbaloi.',
      noteLabel: 'Anggaran harga',
      blocks: [
        {
          heading: 'Perhiasan Mutiara Sabah',
          body: 'Sabah mempunyai ladang mutiara sendiri di perairan sekitar Sandakan, Lahad Datu dan Labuan. Gerai mutiara di sini menjual rantai, subang dan cincin dalam pelbagai tetapan emas serta perak. Ujian paling ringkas: gosok mutiara perlahan-lahan pada gigi — mutiara asli terasa sedikit berpasir, manakala yang tiruan licin berkilat.',
          items: ['Rantai leher mutiara', 'Subang & gelang mutiara', 'Cincin mutiara', 'Set mutiara bingkai perak'],
          note: 'RM80 – RM800 mengikut saiz, kilauan, bentuk dan jenis tetapan.',
        },
        {
          heading: 'Kain Tenun, Songket & Batik Sabah',
          body: 'Kain tenun tangan daripada masyarakat Dusun, Kadazan, Bajau dan Murut menggunakan benang berwarna dengan corak geometrik serta motif alam. Songket Sabah ditenun bersama benang emas atau perak, menjadikannya hadiah yang lebih eksklusif. Kain tenunan tangan biasanya lebih mahal daripada batik cetakan mesin.',
          items: ['Songket Sabah', 'Kain tenun Dusun', 'Sarung & selendang batik', 'Baju kurung tenun'],
          note: 'RM45 – RM350; songket benang emas lazimnya bermula sekitar RM150.',
        },
        {
          heading: 'Ukiran Kayu & Alat Muzik Tradisional',
          body: 'Ukiran daripada kayu keras tempatan hadir dalam bentuk patung, topeng, perisai miniatur dan perahu hiasan. Sompoton — alat muzik tradisional Kadazan-Dusun yang diperbuat daripada labu kering dan buluh — ialah oleh-oleh yang ringan, unik dan mudah dibawa pulang dalam bagasi.',
          items: ['Sompoton', 'Patung & topeng kayu', 'Perahu miniatur', 'Kotak hiasan berukir'],
          note: 'Sompoton sekitar RM40 – RM120; ukiran besar RM80 – RM500 mengikut saiz dan kemasan.',
        },
        {
          heading: 'Rotan, Buluh & Anyaman Tangan',
          body: 'Bakul, beg, tikar dan pasu anyaman rotan dianyam oleh komuniti kampung di sekitar Sabah. Barangan ini ringan, tahan lasak dan sesuai dijadikan hiasan rumah. Periksa simpulan anyaman — yang kemas dan rapat biasanya bertahan lebih lama.',
          items: ['Beg anyaman rotan', 'Bakul & dulang rotan', 'Tikar buluh', 'Pasu bunga anyaman'],
          note: 'RM25 – RM180 mengikut saiz dan kerumitan anyaman.',
        },
        {
          heading: 'Makanan Ringan & Ole-oleh Makanan',
          body: 'Inilah bahagian pasar yang paling ramai dikunjungi pelancong — deretan gerai menjual amplang (keropok ikan Sabah), kuih tradisi, kopi tempatan dan hasil laut kering. Amplang paling sesuai dijadikan oleh-oleh kerana tahan lama dan ringan.',
          items: ['Amplang (keropok ikan)', 'Kuih cincin & kuih jala', 'Kopi & teh Sabah', 'Ikan masin, udang kering'],
          note: 'Amplang sekitar RM10 – RM25 sebungkus; hasil laut kering RM20 – RM80 sekilo.',
        },
        {
          heading: 'Cenderamata Kecil & Hadiah',
          body: 'Untuk oleh-oleh ramai, gerai cenderamata menawarkan fridge magnet, poskad, kunci rantai manik, t-shirt Sabah dan gantungan kecil. Sesuai untuk rakan sekerja atau sebagai kenang-kenangan yang tidak membebankan bagasi.',
          items: ['Fridge magnet', 'Poskad & kad', 'T-shirt Sabah', 'Kunci rantai manik'],
          note: 'RM5 – RM40; lebih murah jika dibeli beberapa helai sekaligus.',
        },
      ],
      tipsTitle: '💡 Tips Beli-Belah di Pasar Kraftangan',
      tips: [
        'Tawar-menawar ialah kebiasaan — mulakan sekitar 50–60% daripada harga yang diminta, kemudian naik secara berperingkat.',
        'Bawa wang tunai secukupnya; majoriti gerai kecil tidak menerima kad atau e-dompet.',
        'Bandingkan 2–3 gerai dahulu sebelum membeli barang berharga seperti mutiara.',
        'Minta resit bertulis yang menyatakan jenis barang dan nama gerai untuk pembelian mahal.',
        'Datang antara 10:00 pagi – 1:00 tengah hari: gerai lengkap, kurang sesak dan lebih mudah berbincang harga.',
        'Semak peraturan kastam negara anda sebelum membawa pulang hasil laut kering atau produk makanan.',
      ],
      faq: {
        eyebrow: 'Soalan Lazim',
        title: 'FAQ · Panduan belian',
        intro: 'Enam soalan yang paling kerap ditanya pelawat sebelum membeli-belah di Pasar Kraftangan.',
        items: [
          {
            q: 'Berapakah bajet yang sesuai untuk membeli-belah di Pasar Kraftangan?',
            a: 'Untuk oleh-oleh ringan, bajet RM50 – RM150 sudah memadai. Jika anda mensasarkan mutiara atau songket benang emas, sediakan RM200 – RM800. Sentiasa simpan lebihan tunai kerana kebanyakan gerai tidak menerima kad.',
          },
          {
            q: 'Bagaimana cara membezakan mutiara asli dengan yang tiruan?',
            a: 'Gosok perlahan pada gigi: mutiara asli terasa sedikit berpasir manakala mutiara tiruan licin. Mutiara asli juga mempunyai kilauan yang lebih dalam dan berat yang lebih padat. Untuk pembelian mahal, minta resit berserta butiran penjual.',
          },
          {
            q: 'Bolehkah saya menawar harga di Pasar Kraftangan?',
            a: 'Boleh. Tawar-menawar ialah amalan biasa, terutamanya jika anda membeli beberapa barang sekaligus. Mulakan dengan harga yang munasabah dan berbual secara sopan — penjual lebih mudah memberi diskaun.',
          },
          {
            q: 'Adakah gerai menerima kad kredit, e-dompet atau pembayaran QR?',
            a: 'Hanya sebahagian kecil kedai besar dan gerai mutiara menerima kad serta pembayaran QR; majoriti gerai menerima wang tunai sahaja. Terdapat ATM di pusat beli-belah berhampiran.',
          },
          {
            q: 'Barang apa yang paling sesuai dijadikan oleh-oleh dari Sabah?',
            a: 'Amplang, kopi Sabah, kain tenun kecil, sompoton dan cenderamata manik ialah pilihan paling praktikal — ringan, tahan lama dan mudah dimuatkan dalam bagasi.',
          },
          {
            q: 'Bolehkah saya membawa pulang hasil laut kering ke negara saya?',
            a: 'Kebanyakan negara mengenakan sekatan import terhadap makanan laut dan produk berasaskan daging. Sila semak peraturan kastam negara destinasi sebelum membeli, atau pilih produk yang dibungkus kilang dengan label lengkap.',
          },
        ],
      },
    },
    itinerary: {
      meta: {
        title: 'Rancangan Satu Hari di Kota Kinabalu | Pasar Kraftangan, Pasar Malam & Senja',
        description:
          'Susunan satu hari penuh di pusat bandar Kota Kinabalu: Pasar Kraftangan pada waktu pagi, makanan laut tengah hari, Jesselton Point pada petang, Pasar Malam Anjung Kinabalu pada malam hari. Anggaran bajet, masa & tips.',
      },
      eyebrow: 'Rancangan Perjalanan',
      h1: 'Rancangan Satu Hari di Sekitar Pasar Kraftangan Kota Kinabalu',
      intro:
        'Pasar kraftangan, jeti pulau, bukit pemandangan, pasar malam dan deretan makanan laut tepi laut semuanya berada dalam lingkungan 15 minit berjalan kaki. Berikut susunan masa yang praktikal, lengkap dengan anggaran bajet untuk seorang.',
      noteLabel: 'Anggaran bajet',
      blocks: [
        {
          heading: '09:00 – 11:30 · Mulakan di Pasar Kraftangan',
          body: 'Mulakan awal supaya gerai baru dibuka dan anda masih boleh memilih dengan tenang. Fokus pada mutiara, kain tenun dan ukiran kayu — bahagian yang paling memerlukan masa untuk membandingkan harga. Simpan belian ringan ke hujung lawatan supaya anda tidak mengangkut beg sepanjang hari.',
          items: ['Jalan Tun Fuad Stephens', 'Masuk percuma', '1.5 – 2 jam'],
          note: 'RM50 – RM300 untuk belian awal, mengikut bajet oleh-oleh anda.',
        },
        {
          heading: '11:30 – 13:00 · Makan Tengah Hari: Food Court atau Tepi Laut',
          body: 'Food court di aras bawah pasar menyajikan nasi campur Sabah, laksa Sabah dan mee kolok pada harga yang sangat berpatutan. Jika mahukan makanan laut, berjalan kira-kira 400 meter ke deretan gerai di persisiran — ikan bakar dan ketam bakar dimasak di hadapan anda.',
          items: ['Nasi campur & laksa Sabah', 'Ikan bakar / ketam bakar', 'Teh tarik ais'],
          note: 'RM10 – RM40 seorang untuk makan tengah hari.',
        },
        {
          heading: '13:00 – 16:00 · Dua Pilihan: Pulau atau Bandar',
          body: 'Untuk ke pulau, berjalan 200 meter ke Jesselton Point dan naik feri ke Pulau Sapi, Manukan atau Mamutik — bot terakhir biasanya kembali pada lewat petang. Jika kekal di bandar, teruskan ke Gaya Street untuk seni bina kolonial dan kedai kopi lama.',
          items: ['Feri ke Taman Laut Tunku Abdul Rahman', 'Gaya Street & kedai kopi lama', 'Suria Sabah (jika hujan)'],
          note: 'Feri pulau sekitar RM35 – RM90 seorang termasuk yuran pemuliharaan; pilihan bandar hampir percuma.',
        },
        {
          heading: '16:30 – 18:30 · Senja di Signal Hill atau KK Waterfront',
          body: 'Kota Kinabalu terkenal dengan matahari terbenamnya. Dari pasar, Signal Hill Observatory boleh dicapai dengan berjalan menanjak sekitar 15 minit atau 5 minit memandu; KK Waterfront pula lebih rata dan sesuai untuk keluarga.',
          items: ['Signal Hill Observatory Platform', 'KK Waterfront', 'Dataran pemandangan tepi laut'],
          note: 'Percuma, atau RM5 – RM20 untuk minuman sambil menunggu senja.',
        },
        {
          heading: '19:00 – 22:00 · Pasar Malam & Makan Malam Tepi Laut',
          body: 'Kawasan Anjung Kinabalu membuka deretan gerai makanan dan barangan harian menjelang senja — sesuai untuk mencuba sate, popiah dan kuih tempatan. Untuk makan malam yang lebih selesa, restoran makanan laut di sepanjang Waterfront menyajikan ketam masak lemak cili api dan udang galah bakar.',
          items: ['Sate & popiah', 'Ketam masak lemak cili api', 'Udang galah bakar', 'Kuih tempatan'],
          note: 'RM25 – RM120 seorang bergantung pada pilihan restoran.',
        },
        {
          heading: 'Jika Hujan · Alternatif Dalam Bangunan',
          body: 'Hujan di Kota Kinabalu lazimnya turun pada lewat petang dan tidak berpanjangan. Jika hujan lebat, beralih ke Suria Sabah atau Wisma Merdeka untuk membeli-belah dalam bangunan, atau ke Muzium Sabah yang berjarak kira-kira 10 – 15 minit memandu.',
          items: ['Suria Sabah Shopping Mall', 'Wisma Merdeka', 'Muzium Sabah'],
          note: 'RM10 – RM30 untuk pengangkutan dan tiket muzium (jika ada).',
        },
      ],
      tipsTitle: '💡 Tips Menyusun Hari Anda',
      tips: [
        'Mulakan lawatan pasar sebelum 11:00 pagi supaya tidak berpanas dan masih mendapat pilihan gerai yang lengkap.',
        'Simpan belian berat di hotel dahulu — lorong pasar boleh menjadi sesak pada sebelah petang.',
        'Bawa payung kecil: matahari tengah hari dan hujan petang boleh berlaku pada hari yang sama.',
        'Untuk feri ke pulau, beli tiket awal pada pagi hari supaya anda sempat menaiki bot terakhir kembali.',
        'Wang tunai masih raja di pasar malam — sediakan duit kecil untuk gerai makanan.',
      ],
      faq: {
        eyebrow: 'Soalan Lazim',
        title: 'FAQ · Rancangan satu hari',
        intro: 'Enam soalan lazim tentang menyusun lawatan sehari di pusat bandar Kota Kinabalu.',
        items: [
          {
            q: 'Berapa lama masa yang diperlukan untuk rancangan satu hari ini?',
            a: 'Kira-kira 8 – 10 jam jika anda mengikuti kesemua segmen. Anda boleh memendekkannya kepada 4 – 5 jam dengan hanya melawat pasar kraftangan, makan tengah hari dan menonton matahari terbenam.',
          },
          {
            q: 'Bolehkah saya menggabungkan lawatan pasar dengan trip ke pulau pada hari yang sama?',
            a: 'Boleh, kerana Jesselton Point hanya 200 meter dari pasar. Selesaikan membeli-belah sebelum tengah hari, kemudian naik feri dan pastikan anda menaiki bot terakhir yang kembali ke jeti pada lewat petang.',
          },
          {
            q: 'Adakah pasar malam di Anjung Kinabalu buka setiap hari?',
            a: 'Lazimnya buka pada sebelah petang hingga malam, tetapi bilangan gerai berbeza mengikut hari dan cuaca. Waktu paling meriah ialah hujung minggu; untuk kepastian, semak dengan pengurusan pasar atau penduduk setempat.',
          },
          {
            q: 'Di mana tempat terbaik untuk melihat matahari terbenam di Kota Kinabalu?',
            a: 'Signal Hill Observatory memberikan pemandangan bandar dan laut dari atas bukit, manakala KK Waterfront lebih mudah diakses dan rata. Kedua-duanya dalam lingkungan 15 – 20 minit berjalan kaki dari Pasar Kraftangan.',
          },
          {
            q: 'Berapakah anggaran bajet sehari untuk rancangan ini?',
            a: 'Tanpa trip pulau, kira-kira RM80 – RM150 seorang termasuk makan dan oleh-oleh ringan. Dengan feri ke pulau, tambah sekitar RM35 – RM90.',
          },
          {
            q: 'Adakah rancangan ini sesuai untuk kanak-kanak dan warga emas?',
            a: 'Sesuai, kerana laluan utama di pusat bandar rata dan Pasar Kraftangan mesra kerusi roda. Untuk ke Signal Hill, gunakan kenderaan dan bukannya berjalan mendaki.',
          },
        ],
      },
    },
  },
  header: {
    visitUs: 'Lawati Kami',
    navAria: 'Navigasi utama',
  },
  footer: {
    about:
      'Panduan pelawat tidak rasmi untuk Pasar Kraftangan Kota Kinabalu, Sabah. Menyediakan maklumat waktu operasi, pengangkutan, makanan, dan tips melawat bagi memudahkan pengalaman anda di pusat kraftangan terbesar Sabah.',
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
      'Laman web ini adalah inisiatif panduan pelawat bebas dan TIDAK dikendalikan, dikeluarkan, atau diwakili oleh pihak pengurusan Pasar Kraftangan Kota Kinabalu, Majlis Perbandaran Kota Kinabalu (MPKK), atau agensi kerajaan Sabah.',
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
    title: 'Kota Kinabalu Handicraft Market Travel Guide',
    description:
      "Sabah's largest handicraft market on Jalan Tun Fuad Stephens, Kota Kinabalu — pearls, woven textiles, wood carvings and souvenirs. Open daily 9:00 AM – 6:00 PM. Complete visitor guide with shopping tips, transport and parking.",
    htmlLang: 'en',
    ogLocale: 'en_US',
  },
  hero: {
    badge: 'Kota Kinabalu · Sabah · Malaysia',
    h1: 'Kota Kinabalu Handicraft Market',
    ctaProducts: 'Explore Products',
    ctaTransport: 'How to Get Here',
    reviewsWord: 'reviews',
    hoursNote: '9:00 AM – 6:00 PM · Open daily',
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
  },
  keyInfo: [
    {
      icon: 'ticket',
      label: 'Free Entry',
      value: 'NO ENTRANCE FEE',
      sub: 'Open to all visitors',
    },
    {
      icon: 'clock',
      label: 'Opening Hours',
      value: '9:00 AM – 6:00 PM',
      sub: 'Daily, including public holidays',
    },
    {
      icon: 'stopwatch',
      label: 'Recommended Duration',
      value: '1.5 – 2 hours',
      sub: 'To explore every stall',
    },
    {
      icon: 'sun',
      label: 'Best Time to Visit',
      value: '10:00 AM – 3:00 PM',
      sub: 'Full selection & fewer crowds',
    },
  ],
  products: {
    eyebrow: 'Sabah Handicraft Collection',
    title: 'Main Product Categories',
    intro:
      "Over 100 stalls offer a wide range of traditional Sabah handicrafts. From heritage woven textiles of indigenous communities to saltwater pearls of the South China Sea — every piece carries its own cultural story.",
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
        tagline: 'South China Sea Pearls',
        description:
          'Genuine pearls from Sabah and Labuan pearl farms, set in gold and silver — quality freshwater and saltwater pearls.',
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
      'The market opens daily, but certain windows offer a more comfortable shopping experience — fewer crowds, fully open stalls and cooler seafront air.',
    cards: [
      {
        title: 'Morning',
        badge: 'Best · ⭐⭐⭐⭐⭐',
        time: '10:00 AM – 1:00 PM',
        points: [
          'All stalls are fully operating',
          'Fewer crowds, easier to bargain',
          'Cool air before the sun climbs high',
        ],
      },
      {
        title: 'Late Afternoon',
        badge: 'Good · ⭐⭐⭐⭐',
        time: '3:00 PM – 5:30 PM',
        points: [
          'Cooler as the sun leans west',
          'Some vendors offer end-of-day discounts',
          'Perfect after strolling Gaya Street',
        ],
      },
      {
        title: 'Recommended Duration',
        badge: 'Suitability · ⭐⭐⭐⭐⭐',
        time: 'A relaxed 1.5 – 2 hours',
        points: [
          '30 minutes: a quick walkthrough & simple buys',
          '2 hours: careful browsing + bargaining + food court',
          'Combined with Jesselton Point: a full day',
        ],
      },
    ],
    bestDayTitle: '📅 Best Days to Visit',
    dayRows: [
      {
        label: 'Monday – Thursday:',
        text: 'Fewer tourists, more space to browse and choose.',
      },
      {
        label: 'Friday:',
        text: 'Slightly crowded during the office lunch hour.',
      },
      {
        label: 'Saturday, Sunday & Public Holidays:',
        text: 'Most lively — great for the local market atmosphere.',
      },
    ],
    climateTitle: '🌤️ Kota Kinabalu Climate',
    climateText:
      'Temperatures stay between 24°C – 32°C all year with high humidity. The main rainy season falls between November and February, though rain usually arrives in the afternoon. Carry a small umbrella for sun or sudden showers.',
  },
  parking: {
    eyebrow: 'Parking Information',
    title: 'Where to Park?',
    intro:
      'Street parking along Jalan Tun Fuad Stephen is limited and fills up quickly. Here are the best parking options near the Handicraft Market for your reference.',
    rateLabel: 'Rate',
    capacityLabel: 'Capacity',
    spots: [
      {
        name: 'Jalan Tun Fuad Stephen Street Parking',
        distance: 'Right in front of the market',
        rate: 'RM2/hour (max RM8/day)',
        capacity: 'Limited (about 40 lots)',
        notes: 'Closest option but fills quickly during peak hours 10:00 AM – 3:00 PM.',
      },
      {
        name: 'Suria Sabah Shopping Mall Parking',
        distance: '350 m (5-minute walk)',
        rate: 'RM3 first hour, RM2 each subsequent hour',
        capacity: 'Multi-storey, ample lots',
        notes: 'Best backup when street parking is full. Combine with some mall shopping after your visit.',
      },
      {
        name: 'Wisma Merdeka Parking',
        distance: '450 m (7-minute walk)',
        rate: 'RM2/hour',
        capacity: 'Moderate',
        notes: 'An older shopping centre, usually less busy than Suria Sabah.',
      },
      {
        name: 'Jesselton Point Parking',
        distance: '200 m (3-minute walk)',
        rate: 'RM3/hour',
        capacity: 'Moderate',
        notes: 'Ideal if you plan to catch a ferry to the islands after visiting the market.',
      },
    ],
  },
  transport: {
    eyebrow: 'Getting There in Detail',
    title: 'How to Get to the Market',
    intro:
      'Six ways to reach the Kota Kinabalu Handicraft Market — from the airport, the city centre and the surrounding area. Step-by-step directions with estimated costs and travel times.',
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
        id: 'airport',
        mode: 'kapal_terbang',
        title: 'From Kota Kinabalu International Airport (BKI)',
        duration: '15 – 20 minutes',
        cost: 'RM30 – RM45',
        steps: [
          'Arrive at KK Airport and exit the Arrival Hall',
          'Pick a taxi at the official taxi counter to the left of the exit',
          'Or use the Grab app for a fixed fare',
          'Tell the driver "Pasar Kraftangan" or "Handicraft Market, Jalan Tun Fuad Stephen"',
        ],
        tips: 'Grab is usually cheaper than a regular taxi. Fares are higher during the afternoon peak.',
      },
      {
        id: 'bas-bandar',
        mode: 'bas',
        title: 'City Bus',
        duration: '25 – 40 minutes',
        cost: 'RM1 – RM2 per person',
        steps: [
          'Head to the main Kota Kinabalu bus station (Wawasan Plaza / Padang Merdeka)',
          'Find a route passing Jalan Tun Fuad Stephen',
          'Get off at the stop nearest the Handicraft Market',
          'Walk 2–3 minutes to the market entrance',
        ],
        tips: 'City buses run from 6:30 AM to 8:00 PM. Services are less frequent on weekends.',
      },
      {
        id: 'teksi',
        mode: 'teksi',
        title: 'City Taxi (from the City Centre)',
        duration: '5 – 10 minutes',
        cost: 'RM8 – RM15',
        steps: [
          'Wait at a designated taxi stand or rank',
          'Make sure the driver uses the meter or agree on the fare first',
          'Full address: No. 7, Jalan Tun Fuad Stephen, city centre KK',
          'The market faces the sea, near Jesselton Point',
        ],
        tips: 'Most taxis in Kota Kinabalu do not use meters, so confirm the price before boarding.',
      },
      {
        id: 'grab',
        mode: 'grab',
        title: 'Grab / E-Hailing',
        duration: '5 – 15 minutes',
        cost: 'RM5 – RM18',
        steps: [
          'Open the Grab app on your smartphone',
          'Set the destination: "Pasar Kraftangan Kota Kinabalu"',
          'Choose GrabCar or GrabTaxi',
          'Pay by cash or in-app card',
        ],
        tips: 'The easiest and safest option. The fare is shown in the app — no haggling.',
      },
      {
        id: 'berjalan',
        mode: 'berjalan',
        title: 'On Foot from Gaya Street / Padang Merdeka',
        duration: '5 – 10 minutes',
        cost: 'Free',
        steps: [
          'From Gaya Street, walk towards the sea (Jalan Tun Fuad Stephen)',
          'Follow signs for "Handicraft Market" or "Jesselton Point"',
          'The market is on your left before the junction to Jesselton Point',
        ],
        tips: 'Best when the weather is not too hot. Bring an umbrella or hat for sun protection.',
      },
      {
        id: 'kereta',
        mode: 'kereta',
        title: 'Self-Drive',
        duration: 'Depends on your starting point',
        cost: 'Parking RM2 – RM5/hour',
        steps: [
          'Search "Pasar Kraftangan Kota Kinabalu" on Waze / Google Maps',
          'Choose street parking along Jalan Tun Fuad Stephen',
          'Or park at a nearby mall if street parking is full',
        ],
        tips: 'Street parking is tight at peak times. Suria Sabah Shopping Mall has a multi-storey car park nearby (10-minute walk).',
      },
    ],
  },
  food: {
    eyebrow: 'Food Nearby',
    title: 'Where to Eat?',
    intro:
      'From the pocket-friendly food court beneath the market to upscale seafront restaurants — six of the best dining options within 10 minutes of the Handicraft Market.',
    distanceLabel: 'Distance from market',
    priceLabels: {
      murah: 'Budget',
      sederhana: 'Mid-range',
      mewah: 'Premium',
    },
    spots: [
      {
        id: 'kraf-food-court',
        name: 'Pasar Kraftangan Food Court',
        distance: '0 km (market ground floor)',
        specialty: ['Nasi Campur Sabah', 'Sabah Laksa', 'Kolok Mee', 'Teh Tarik'],
        price: 'murah',
        note: 'Local food at very affordable prices, located on the ground floor of the market. Simple and tasty seafood bites.',
      },
      {
        id: 'gaya-street',
        name: 'Gaya Street Sunday Market Food Stalls',
        distance: '300 m to Gaya Street',
        specialty: ['Chicken Satay', 'Popiah', 'Roti Canai', 'Iced Kopi-O', 'Durian Cendol'],
        price: 'murah',
        note: 'Sunday morning market only — rows of food stalls along Gaya Street. Come early before noon for the best selection.',
      },
      {
        id: 'seaside-market',
        name: 'Kota Kinabalu Fish Market / Filipino Market',
        distance: '400 m to the waterfront',
        specialty: ['Grilled Fish', 'Grilled Crab', 'Fried Calamari', 'Nasi Lemak'],
        price: 'sederhana',
        note: 'Fresh seafood grilled or fried right in front of you. A popular spot for lunch or dinner.',
      },
      {
        id: 'the-little-italy',
        name: 'The Little Italy Restaurant',
        distance: '500 m to Jalan Gaya',
        specialty: ['Seafood Pasta', 'Pizza Marinara', 'Spicy Clams', 'Tiramisu'],
        price: 'sederhana',
        note: 'Italian cuisine with a Sabah seafood touch. A comfortable setting in the city centre.',
      },
      {
        id: 'village-park',
        name: 'Village Park Restaurant',
        distance: '700 m to Damai Plaza',
        specialty: ['Steamed Nasi Lemak', 'Roast Pork', 'Spiced Fried Chicken', 'Iced Milo'],
        price: 'murah',
        note: 'A beloved local eatery famous for steamed nasi lemak — a favourite among residents.',
      },
      {
        id: 'oceanus-waterfront',
        name: 'Oceanus Waterfront Seafood',
        distance: '600 m to KK Waterfront',
        specialty: ['Chilli Crab', 'Grilled Giant Prawns', 'Fish Head Curry', 'Steamed Fish'],
        price: 'mewah',
        note: 'Upscale seafood dining with ocean views. Great for couples and families at dinner.',
      },
    ],
  },
  nearby: {
    eyebrow: 'Nearby Attractions',
    title: 'Combine Your Visit',
    intro:
      'The market sits in the heart of the city centre. Make the most of its strategic location to explore six nearby attractions — from island hopping to panoramic city views from Signal Hill.',
    guideCta: 'See the one-day Kota Kinabalu itinerary',
    viewMapLabel: 'View map',
    attractions: [
      {
        id: 'jesselton-point',
        name: 'Jesselton Point Jetty',
        distance: '200 m',
        duration: '2 – 6 hours',
        highlight:
          'The main jetty for ferries to Manukan, Sapi, Mamutik and other islands of Tunku Abdul Rahman Marine Park.',
        category: 'Islands & Sea',
      },
      {
        id: 'gaya-street',
        name: 'Gaya Street',
        distance: '300 m',
        duration: '1 – 2 hours',
        highlight:
          'Historic main street with British colonial architecture. Famous Sunday morning market with goods and street food.',
        category: 'History & Shopping',
      },
      {
        id: 'tunku-abdul-rahman',
        name: 'Tunku Abdul Rahman Marine Park',
        distance: '15 – 20 minutes by boat',
        duration: 'Full day',
        highlight:
          'An archipelago of 5 islands with white sandy beaches, snorkelling and water activities — a top choice for visitors to Kota Kinabalu.',
        category: 'Beaches & Nature',
      },
      {
        id: 'signal-hill',
        name: 'Signal Hill Observatory Platform',
        distance: '1 km (15-minute walk or 5 minutes by car)',
        duration: '30 – 45 minutes',
        highlight:
          'Panoramic views of Kota Kinabalu and the sea from the hilltop — the best spot for city photography.',
        category: 'Views & Photography',
      },
      {
        id: 'sabah-museum',
        name: 'Sabah Museum',
        distance: '4 km (10 – 15 minutes by car)',
        duration: '2 – 3 hours',
        highlight:
          'Collections of Sabah history, culture and ethnography, with a traditional longhouse and cultural garden.',
        category: 'Museums & History',
      },
      {
        id: 'masjid-bandaraya',
        name: 'City Mosque Kota Kinabalu',
        distance: '5 km (10 minutes by car)',
        duration: '30 – 60 minutes',
        highlight:
          'The famous floating mosque with modern architecture — a city icon best seen at sunset.',
        category: 'Religion & Architecture',
      },
    ],
  },
  map: {
    eyebrow: 'Location Map',
    title: 'Find Us on Google Maps',
    intro:
      'Open directly in the Google Maps app for turn-by-turn navigation from your current location to Pasar Kraftangan Kota Kinabalu, Sabah.',
    iframeTitle: 'Map of Kota Kinabalu Handicraft Market, Sabah',
    openMapsLabel: 'Open in Google Maps',
  },
  faq: {
    eyebrow: 'Frequently Asked Questions',
    title: 'FAQ · Frequently asked questions',
    intro:
      'Clear answers to the 15 questions visitors most often ask before visiting the Kota Kinabalu Handicraft Market.',
    items: [
      {
        q: 'Is there an entrance fee for the Handicraft Market?',
        a: 'No. Entry to the market is completely FREE for all visitors — you only pay for whatever you buy.',
      },
      {
        q: 'What are the opening hours?',
        a: 'The market opens daily, including Sundays and public holidays, from 9:00 AM to 6:00 PM. Some stalls may close earlier on weekdays.',
      },
      {
        q: 'Can I bargain at the market?',
        a: 'Yes, bargaining is common practice here, especially for bulk purchases or handicrafts. Please bargain politely and respectfully.',
      },
      {
        q: 'Do the stalls accept credit cards?',
        a: 'Most stalls accept cash only. Some larger shops and pearl dealers accept cards, and there are ATMs nearby.',
      },
      {
        q: 'Is the market wheelchair-friendly?',
        a: 'Yes, the market has flat walkways and wheelchair access at the main entrance. Public toilets are also available.',
      },
      {
        q: 'Is photography allowed inside the market?',
        a: 'Yes, photos are allowed for personal use. If you wish to photograph vendors or handicrafts for commercial purposes, please ask permission first.',
      },
      {
        q: 'Can I bring large bags and purchases inside?',
        a: 'Yes. The aisles are fairly wide but can get crowded at peak times. Keep your valuables secure.',
      },
      {
        q: 'Are there public toilets in the market?',
        a: 'Yes, public toilets are located on the ground floor near the food court. A small maintenance fee may apply.',
      },
      {
        q: 'When is the best time to visit?',
        a: 'The best window is 10:00 AM to 3:00 PM, when all stalls are open and before it gets too crowded. Mornings are also good for bargaining.',
      },
      {
        q: 'Is there luggage storage at the market?',
        a: 'There is no official luggage storage service. If you have large bags, leave them at your hotel or use lockers at transport hubs.',
      },
      {
        q: 'What about food around the market?',
        a: 'There is a food court on the ground floor serving local food, and Gaya Street has plenty of eateries within a 5–10 minute walk.',
      },
      {
        q: 'Is there free Wi-Fi in the market?',
        a: 'Free Wi-Fi is not officially provided. However, all major Malaysian telcos (Maxis, Celcom, Digi, U Mobile) have good 4G coverage.',
      },
      {
        q: 'Can I pay with Malaysian Ringgit only?',
        a: 'Yes, the Malaysian Ringgit (RM) is the official currency. Some larger shops may accept foreign currencies, but the exchange rate may not be favourable.',
      },
      {
        q: 'Do purchases come with any guarantee of authenticity?',
        a: 'Most handicrafts are sold directly by local artisans. For valuables such as pearls, ask for a receipt and the seller’s details for future reference.',
      },
      {
        q: 'Are there discounts for bulk purchases?',
        a: 'Yes, most vendors offer discounts when you buy several items at once. Discuss with the seller before paying.',
      },
    ],
  },
  guides: {
    relatedTitle: 'Related Guides',
    backHomeLabel: 'Back to the main guide',
    backHomeHint:
      'The full Pasar Kraftangan guide: opening hours, parking, transport, food and map.',
    shopping: {
      meta: {
        title: 'What to Buy at Kota Kinabalu Handicraft Market | Sabah Shopping Guide',
        description:
          'The best things to buy at the Kota Kinabalu Handicraft Market (Filipino Market): Sabah pearls, woven textiles & songket, wood carvings, sompoton, amplang and souvenirs — with price ranges, bargaining tips and how to spot real pearls.',
      },
      eyebrow: 'Shopping Guide',
      h1: 'What to Buy at the Kota Kinabalu Handicraft Market',
      intro:
        'More than 100 stalls sit under one roof on Jalan Tun Fuad Stephens. This guide lists the six product categories most worth your money, realistic price ranges, and how to choose and bargain so the souvenirs you bring home are genuinely worth it.',
      noteLabel: 'Estimated price',
      blocks: [
        {
          heading: 'Sabah Pearl Jewellery',
          body: 'Sabah has its own pearl farms in the waters around Sandakan, Lahad Datu and Labuan. The pearl stalls here sell necklaces, earrings and rings in gold and silver settings. The simplest test: rub a pearl gently against your tooth — a real pearl feels slightly gritty, while an imitation feels smooth and glassy.',
          items: ['Pearl necklaces', 'Pearl earrings & bracelets', 'Pearl rings', 'Silver-set pearl collections'],
          note: 'RM80 – RM800 depending on size, lustre, shape and setting.',
        },
        {
          heading: 'Woven Textiles, Songket & Sabah Batik',
          body: 'Handwoven cloth from the Dusun, Kadazan, Bajau and Murut communities uses coloured thread in geometric patterns and nature motifs. Sabah songket is woven with gold or silver thread, which makes it a more exclusive gift. Handwoven fabric is usually pricier than machine-printed batik.',
          items: ['Sabah songket', 'Dusun woven cloth', 'Batik sarongs & shawls', 'Woven baju kurung'],
          note: 'RM45 – RM350; gold-thread songket usually starts around RM150.',
        },
        {
          heading: 'Wood Carvings & Traditional Instruments',
          body: 'Carvings made from local hardwood come as figurines, masks, miniature shields and decorative boats. The sompoton — a traditional Kadazan-Dusun instrument made from a dried gourd and bamboo — is light, distinctive and easy to pack in a suitcase.',
          items: ['Sompoton', 'Wooden figurines & masks', 'Miniature boats', 'Carved keepsake boxes'],
          note: 'Sompoton around RM40 – RM120; larger carvings RM80 – RM500 by size and finish.',
        },
        {
          heading: 'Rattan, Bamboo & Handwoven Basketry',
          body: 'Baskets, bags, mats and planters woven from rattan are made by village communities around Sabah. They are light, durable and work well as home decor. Check the weave — tight, even knots usually last much longer.',
          items: ['Woven rattan bags', 'Rattan baskets & trays', 'Bamboo mats', 'Woven planters'],
          note: 'RM25 – RM180 depending on size and complexity of the weave.',
        },
        {
          heading: 'Snacks & Edible Souvenirs',
          body: 'This is the busiest part of the market for visitors — rows of stalls selling amplang (Sabah fish crackers), traditional kuih, local coffee and dried seafood. Amplang travels well, which makes it the most practical edible souvenir.',
          items: ['Amplang (fish crackers)', 'Kuih cincin & kuih jala', 'Sabah coffee & tea', 'Salted fish, dried prawns'],
          note: 'Amplang around RM10 – RM25 per pack; dried seafood RM20 – RM80 per kilo.',
        },
        {
          heading: 'Small Souvenirs & Gifts',
          body: 'For souvenirs in bulk, the gift stalls offer fridge magnets, postcards, beaded keychains, Sabah T-shirts and small hangers. They suit colleagues back home and keep your luggage light.',
          items: ['Fridge magnets', 'Postcards & cards', 'Sabah T-shirts', 'Beaded keychains'],
          note: 'RM5 – RM40; cheaper when you buy several pieces at once.',
        },
      ],
      tipsTitle: '💡 Shopping Tips for the Market',
      tips: [
        'Bargaining is normal — start at around 50–60% of the asking price, then work your way up.',
        'Bring enough cash; most small stalls do not accept cards or e-wallets.',
        'Compare 2–3 stalls before buying anything valuable such as pearls.',
        'Ask for a written receipt stating the item and the stall name for expensive purchases.',
        'Arrive between 10:00 AM and 1:00 PM: stalls are fully stocked, crowds are thinner and prices are easier to discuss.',
        'Check your home country’s customs rules before flying back with dried seafood or food products.',
      ],
      faq: {
        eyebrow: 'FAQ',
        title: 'FAQ · Shopping guide',
        intro: 'Six questions visitors ask most often before shopping at the Handicraft Market.',
        items: [
          {
            q: 'How much budget should I set aside for shopping here?',
            a: 'For light souvenirs, RM50 – RM150 is plenty. If you are aiming for pearls or gold-thread songket, budget RM200 – RM800. Always keep extra cash because most stalls do not accept cards.',
          },
          {
            q: 'How can I tell a real pearl from an imitation?',
            a: 'Rub it gently against your tooth: a real pearl feels slightly gritty while a fake one feels smooth. Real pearls also have a deeper lustre and feel denser. For expensive pieces, ask for a receipt with the seller’s details.',
          },
          {
            q: 'Can I bargain at the market?',
            a: 'Yes. Bargaining is standard practice, especially when you buy several items at once. Open with a reasonable price and keep the conversation friendly — sellers are more likely to offer a discount.',
          },
          {
            q: 'Do stalls accept credit cards, e-wallets or QR payments?',
            a: 'Only a few larger shops and pearl dealers accept cards and QR payment; the majority are cash only. ATMs are available at the nearby shopping centres.',
          },
          {
            q: 'What is the most practical souvenir to bring home from Sabah?',
            a: 'Amplang, Sabah coffee, small woven textiles, a sompoton and beaded souvenirs are the most practical — light, durable and easy to fit into your luggage.',
          },
          {
            q: 'Can I take dried seafood back to my country?',
            a: 'Many countries restrict the import of seafood and meat-based products. Check your destination’s customs rules before buying, or choose factory-sealed products with complete labelling.',
          },
        ],
      },
    },
    itinerary: {
      meta: {
        title: 'One Day in Kota Kinabalu Itinerary | Handicraft Market, Night Market & Sunset',
        description:
          'A full day in the Kota Kinabalu city centre: the Handicraft Market in the morning, seafood at noon, Jesselton Point in the afternoon and the Anjung Kinabalu night market after dark. Times, budgets and practical tips.',
      },
      eyebrow: 'Itinerary',
      h1: 'One Day Around the Kota Kinabalu Handicraft Market',
      intro:
        'The handicraft market, island jetty, viewpoint hill, night market and seafront seafood strip are all within about 15 minutes on foot. Here is a practical hour-by-hour plan with an estimated budget per person.',
      noteLabel: 'Estimated budget',
      blocks: [
        {
          heading: '09:00 – 11:30 · Start at the Handicraft Market',
          body: 'Arrive early so the stalls have just opened and you can browse calmly. Focus on pearls, woven textiles and wood carvings — the sections that need the most time to compare prices. Save light purchases for the end so you are not carrying bags all day.',
          items: ['Jalan Tun Fuad Stephens', 'Free admission', '1.5 – 2 hours'],
          note: 'RM50 – RM300 for early shopping, depending on your souvenir budget.',
        },
        {
          heading: '11:30 – 13:00 · Lunch: Food Court or the Seafront',
          body: 'The food court on the market’s ground floor serves Sabah nasi campur, Sabah laksa and kolok mee at very reasonable prices. For seafood, walk about 400 m to the seafront strip — grilled fish and grilled crab are cooked right in front of you.',
          items: ['Nasi campur & Sabah laksa', 'Grilled fish / grilled crab', 'Iced teh tarik'],
          note: 'RM10 – RM40 per person for lunch.',
        },
        {
          heading: '13:00 – 16:00 · Two Options: Islands or the City',
          body: 'For the islands, walk 200 m to Jesselton Point and take a ferry to Sapi, Manukan or Mamutik — the last boats usually return in the late afternoon. Staying in town? Continue to Gaya Street for colonial architecture and old coffee shops.',
          items: ['Ferry to Tunku Abdul Rahman Marine Park', 'Gaya Street & old kopitiams', 'Suria Sabah (if it rains)'],
          note: 'Island ferry around RM35 – RM90 per person including conservation fees; the city option is almost free.',
        },
        {
          heading: '16:30 – 18:30 · Sunset at Signal Hill or KK Waterfront',
          body: 'Kota Kinabalu is famous for its sunsets. From the market, Signal Hill Observatory is about a 15-minute uphill walk or a 5-minute drive; KK Waterfront is flatter and easier for families.',
          items: ['Signal Hill Observatory Platform', 'KK Waterfront', 'Seafront viewing square'],
          note: 'Free, or RM5 – RM20 for a drink while you wait for the sunset.',
        },
        {
          heading: '19:00 – 22:00 · Night Market & Seafront Dinner',
          body: 'The Anjung Kinabalu area opens rows of food and daily-goods stalls towards dusk — good for satay, popiah and local kuih. For a more comfortable dinner, the seafood restaurants along the Waterfront serve chilli crab and grilled giant prawns.',
          items: ['Satay & popiah', 'Chilli crab', 'Grilled giant prawns', 'Local kuih'],
          note: 'RM25 – RM120 per person depending on the restaurant.',
        },
        {
          heading: 'If It Rains · Indoor Alternatives',
          body: 'Rain in Kota Kinabalu usually arrives in the late afternoon and does not last long. In a heavy downpour, switch to Suria Sabah or Wisma Merdeka for indoor shopping, or head to the Sabah Museum about 10 – 15 minutes away by car.',
          items: ['Suria Sabah Shopping Mall', 'Wisma Merdeka', 'Sabah Museum'],
          note: 'RM10 – RM30 for transport and museum admission (if applicable).',
        },
      ],
      tipsTitle: '💡 Tips for Planning Your Day',
      tips: [
        'Start the market visit before 11:00 AM to avoid the heat and get the fullest selection of stalls.',
        'Drop heavy purchases at your hotel first — the market aisles get crowded in the afternoon.',
        'Carry a small umbrella: midday sun and an afternoon shower can happen on the same day.',
        'For island ferries, buy tickets early in the morning so you still catch the last boat back.',
        'Cash is still king at the night market — keep small notes for the food stalls.',
      ],
      faq: {
        eyebrow: 'FAQ',
        title: 'FAQ · One-day itinerary',
        intro: 'Six common questions about planning a day in the Kota Kinabalu city centre.',
        items: [
          {
            q: 'How long does this one-day plan take?',
            a: 'Around 8 – 10 hours if you follow every segment. You can shorten it to 4 – 5 hours by just visiting the market, having lunch and watching the sunset.',
          },
          {
            q: 'Can I combine the market visit with an island trip on the same day?',
            a: 'Yes — Jesselton Point is only 200 m from the market. Finish your shopping before noon, then take the ferry and make sure you catch the last boat back to the jetty in the late afternoon.',
          },
          {
            q: 'Is the Anjung Kinabalu night market open every day?',
            a: 'It usually opens from late afternoon into the evening, but the number of stalls varies by day and weather. Weekends are the liveliest; for certainty, check with the market management or local residents.',
          },
          {
            q: 'Where is the best place to watch the sunset in Kota Kinabalu?',
            a: 'Signal Hill Observatory gives you city-and-sea views from above, while KK Waterfront is flatter and easier to reach. Both are within a 15 – 20 minute walk of the Handicraft Market.',
          },
          {
            q: 'What is the estimated daily budget for this plan?',
            a: 'Without an island trip, around RM80 – RM150 per person including meals and light souvenirs. Add roughly RM35 – RM90 if you take the island ferry.',
          },
          {
            q: 'Is this plan suitable for children and seniors?',
            a: 'Yes — the main city-centre routes are flat and the Handicraft Market is wheelchair-friendly. For Signal Hill, take a vehicle instead of walking uphill.',
          },
        ],
      },
    },
  },
  header: {
    visitUs: 'Visit Us',
    navAria: 'Main navigation',
  },
  footer: {
    about:
      'An unofficial visitor guide to Pasar Kraftangan Kota Kinabalu, Sabah — opening hours, transport, dining and visiting tips to help you make the most of the largest handicraft market in Sabah.',
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
    title: '亚庇手工艺品市场旅游指南',
    description:
      '沙巴规模最大的手工艺品市场，位于亚庇市中心敦弗阿斯蒂芬路（Jalan Tun Fuad Stephens）——珍珠饰品、传统织布、木雕与纪念品一应俱全。每天 9:00–18:00 营业，附购物攻略、交通与停车指南。',
    htmlLang: 'zh',
    ogLocale: 'zh_CN',
  },
  hero: {
    badge: 'Kota Kinabalu · Sabah · Malaysia',
    h1: '亚庇手工艺品市场（菲律宾市场）',
    ctaProducts: '逛逛商品',
    ctaTransport: '交通指南',
    reviewsWord: '则评价',
    hoursNote: '9:00 – 18:00 · 每天营业',
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
  },
  keyInfo: [
    {
      icon: 'ticket',
      label: '免费入场',
      value: '无需门票',
      sub: '欢迎所有游客',
    },
    {
      icon: 'clock',
      label: '营业时间',
      value: '9:00 – 18:00',
      sub: '每天开放（含公共假期）',
    },
    {
      icon: 'stopwatch',
      label: '建议游览时长',
      value: '1.5 – 2 小时',
      sub: '足够逛遍所有摊位',
    },
    {
      icon: 'sun',
      label: '最佳到访时间',
      value: '10:00 – 15:00',
      sub: '摊位齐全、人潮较少',
    },
  ],
  products: {
    eyebrow: '沙巴手工艺品精选',
    title: '主要商品分类',
    intro:
      '上百个摊位汇集沙巴传统手工艺品——从原住民部落的传统织布，到南中国海海域的珍珠饰品，每一件都承载着自己的文化故事。',
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
        tagline: '南中国海珍珠',
        description:
          '来自沙巴与纳闽珍珠养殖场的天然珍珠，配以金银镶嵌——淡水珍珠与高品质海水珍珠皆有。',
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
      '市场每天营业，但某些时段的购物体验更舒适——人潮较少、摊位齐全，海风也更为凉爽。',
    cards: [
      {
        title: '上午时段',
        badge: '最佳 · ⭐⭐⭐⭐⭐',
        time: '10:00 – 13:00',
        points: ['所有摊位全面营业', '人少好议价', '太阳升高前气温凉爽'],
      },
      {
        title: '傍晚时段',
        badge: '不错 · ⭐⭐⭐⭐',
        time: '15:00 – 17:30',
        points: ['午后转凉，逛起来更舒适', '部分摊主提供收摊折扣', '适合逛完加雅街后前来'],
      },
      {
        title: '建议游览时长',
        badge: '合理时长 · ⭐⭐⭐⭐⭐',
        time: '轻松游览 1.5 – 2 小时',
        points: [
          '30 分钟：快速逛一圈、简单采购',
          '2 小时：细逛＋议价＋美食广场',
          '搭配哲斯顿码头：可安排一整天',
        ],
      },
    ],
    bestDayTitle: '📅 最适合到访的日子',
    dayRows: [
      { label: '周一至周四：', text: '游客较少，挑选空间更大。' },
      { label: '周五：', text: '上班族午休时段稍显拥挤。' },
      { label: '周六、周日与公共假期：', text: '最热闹，最能感受在地市集氛围。' },
    ],
    climateTitle: '🌤️ 亚庇气候',
    climateText:
      '全年气温介于 24°C – 32°C，湿度较高。雨季主要在 11 月至 2 月，但降雨多集中在午后。建议随身携带小伞，遮阳挡雨两相宜。',
  },
  parking: {
    eyebrow: '停车信息',
    title: '车该停在哪里？',
    intro:
      '敦弗阿斯蒂芬路沿线路边车位有限、很快客满。以下是手工艺品市场附近的最佳停车选择，供您参考。',
    rateLabel: '费率',
    capacityLabel: '车位数',
    spots: [
      {
        name: '敦弗阿斯蒂芬路路边停车',
        distance: '就在市场正前方',
        rate: 'RM2/小时（每日上限 RM8）',
        capacity: '车位有限（约 40 个）',
        notes: '距离最近，但 10:00–15:00 高峰时段很快客满。',
      },
      {
        name: 'Suria Sabah 购物中心停车场',
        distance: '350 米（步行 5 分钟）',
        rate: '首小时 RM3，之后每小时 RM2',
        capacity: '多层停车场、车位充足',
        notes: '路边停满时的最佳备选，逛完市场还可顺道购物。',
      },
      {
        name: 'Wisma Merdeka 停车场',
        distance: '450 米（步行 7 分钟）',
        rate: 'RM2/小时',
        capacity: '中等',
        notes: '较老旧的购物中心，通常比 Suria Sabah 空一些。',
      },
      {
        name: '哲斯顿码头停车场',
        distance: '200 米（步行 3 分钟）',
        rate: 'RM3/小时',
        capacity: '中等',
        notes: '适合计划逛完市场后搭船出海岛游玩的旅客。',
      },
    ],
  },
  transport: {
    eyebrow: '交通方式详解',
    title: '如何前往手工艺品市场',
    intro:
      '六种抵达亚庇手工艺品市场的方式——从机场、市中心到周边区域，附逐步路线、预估费用与所需时间。',
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
        id: 'airport',
        mode: 'kapal_terbang',
        title: '从亚庇国际机场（BKI）出发',
        duration: '15 – 20 分钟',
        cost: 'RM30 – RM45',
        steps: [
          '抵达亚庇机场，走出抵达大厅',
          '在出口左侧的官方出租车柜台叫车',
          '或使用 Grab 应用呼叫，车资固定',
          '告知司机 "Pasar Kraftangan" 或 "敦弗阿斯蒂芬路手工艺品市场"',
        ],
        tips: 'Grab 通常比普通出租车便宜，午后高峰时段车资会上浮。',
      },
      {
        id: 'bas-bandar',
        mode: 'bas',
        title: '市区巴士',
        duration: '25 – 40 分钟',
        cost: '每人 RM1 – RM2',
        steps: [
          '前往亚庇主要巴士站（Wawasan Plaza／独立广场）',
          '寻找途经敦弗阿斯蒂芬路的路线',
          '在手工艺品市场最近的站点下车',
          '步行 2–3 分钟即达市场入口',
        ],
        tips: '市区巴士运营时间为 6:30–20:00，周末班次较少。',
      },
      {
        id: 'teksi',
        mode: 'teksi',
        title: '市区出租车（自市中心出发）',
        duration: '5 – 10 分钟',
        cost: 'RM8 – RM15',
        steps: [
          '在指定的出租车候车点等候',
          '确认司机按表计费或事先谈好价格',
          '完整地址：敦弗阿斯蒂芬路 7 号，亚庇市中心',
          '市场面朝大海，邻近哲斯顿码头',
        ],
        tips: '亚庇多数出租车不打表，上车前请先确认价格。',
      },
      {
        id: 'grab',
        mode: 'grab',
        title: 'Grab 网约车',
        duration: '5 – 15 分钟',
        cost: 'RM5 – RM18',
        steps: [
          '在手机上打开 Grab 应用',
          '目的地设为 "Pasar Kraftangan Kota Kinabalu"',
          '选择 GrabCar 或 GrabTaxi',
          '可现金或应用内刷卡支付',
        ],
        tips: '最省心、最安全的选择。车资提前显示，无需议价。',
      },
      {
        id: 'berjalan',
        mode: 'berjalan',
        title: '从加雅街／独立广场步行',
        duration: '5 – 10 分钟',
        cost: '免费',
        steps: [
          '从加雅街朝海边（敦弗阿斯蒂芬路方向）步行',
          '沿 "Handicraft Market" 或 "Jesselton Point" 指示牌前进',
          '市场在前往哲斯顿码头岔路口前的左侧',
        ],
        tips: '适合天气不太热时前往。建议携带雨伞或帽子防晒。',
      },
      {
        id: 'kereta',
        mode: 'kereta',
        title: '自驾前往',
        duration: '视出发地而定',
        cost: '停车 RM2 – RM5/小时',
        steps: [
          '在 Waze／Google 地图搜索 "Pasar Kraftangan Kota Kinabalu"',
          '选择敦弗阿斯蒂芬路沿线停车位',
          '若路边停满，可改停附近购物中心停车场',
        ],
        tips: '高峰时段路边车位紧张。附近的 Suria Sabah 购物中心有多层停车场（步行 10 分钟）。',
      },
    ],
  },
  food: {
    eyebrow: '周边美食',
    title: '哪里吃饭？',
    intro:
      '从市场底层经济实惠的美食广场，到海滨高档海鲜餐厅——手工艺品市场 10 分钟步行范围内的六大用餐好去处。',
    distanceLabel: '与市场的距离',
    priceLabels: {
      murah: '经济',
      sederhana: '中档',
      mewah: '高档',
    },
    spots: [
      {
        id: 'kraf-food-court',
        name: '手工艺品市场美食广场',
        distance: '0 公里（市场底层）',
        specialty: ['沙巴杂饭', '沙巴叻沙', '哥罗面', '拉茶'],
        price: 'murah',
        note: '位于市场底层，价格非常亲民的本地美食，还有简单美味的海鲜小吃。',
      },
      {
        id: 'gaya-street',
        name: '加雅街周日市集美食摊',
        distance: '步行 300 米至加雅街',
        specialty: ['鸡肉沙嗲', '薄饼', '印度煎饼', '冰咖啡乌', '榴莲煎蕊'],
        price: 'murah',
        note: '仅周日早上营业，加雅街两旁排满美食摊位。建议中午前早来，选择最多。',
      },
      {
        id: 'seaside-market',
        name: '亚庇鱼市场／菲律宾市场',
        distance: '步行 400 米至海滨',
        specialty: ['炭烤鱼', '烤蟹', '炸花枝', '椰浆饭'],
        price: 'sederhana',
        note: '新鲜海鲜现点现烤现炸，是午餐或晚餐的热门去处。',
      },
      {
        id: 'the-little-italy',
        name: 'The Little Italy 意大利餐厅',
        distance: '步行 500 米至加雅街',
        specialty: ['海鲜意面', '海鲜披萨', '辣炒蛤蜊', '提拉米苏'],
        price: 'sederhana',
        note: '融合沙巴海鲜元素的意大利菜，市中心里氛围舒适的用餐选择。',
      },
      {
        id: 'village-park',
        name: 'Village Park 餐厅',
        distance: '步行 700 米至 Damai Plaza',
        specialty: ['蒸椰浆饭', '烧肉', '香料炸鸡', '冰美禄'],
        price: 'murah',
        note: '以蒸椰浆饭闻名的在地人气食堂，深受本地人喜爱。',
      },
      {
        id: 'oceanus-waterfront',
        name: 'Oceanus 海滨海鲜餐厅',
        distance: '步行 600 米至亚庇海滨',
        specialty: ['辣椒蟹', '烤大明虾', '咖喱鱼头', '蒸鱼'],
        price: 'mewah',
        note: '坐拥海景的高档海鲜餐厅，适合情侣或家庭晚餐。',
      },
    ],
  },
  nearby: {
    eyebrow: '周边景点',
    title: '串联周边行程',
    intro:
      '市场正位于市中心核心地带，善用这一地理优势，顺游周边六大景点——从跳岛行程到升旗山上的城市全景。',
    guideCta: '查看亚庇一日游行程安排',
    viewMapLabel: '查看地图',
    attractions: [
      {
        id: 'jesselton-point',
        name: '哲斯顿码头',
        distance: '200 米',
        duration: '2 – 6 小时',
        highlight: '前往曼奴干岛、马慕迪岛等东姑阿都拉曼海洋公园岛屿的渡轮主码头。',
        category: '跳岛与海滨',
      },
      {
        id: 'gaya-street',
        name: '加雅街',
        distance: '300 米',
        duration: '1 – 2 小时',
        highlight: '拥有英殖民时期建筑的历史老街，周日早晨的著名市集，商品与小吃琳琅满目。',
        category: '历史与购物',
      },
      {
        id: 'tunku-abdul-rahman',
        name: '东姑阿都拉曼海洋公园',
        distance: '乘船 15 – 20 分钟',
        duration: '一整天',
        highlight: '由 5 座岛屿组成的群岛，拥有白沙滩、浮潜与水上活动，是亚庇旅客的首选。',
        category: '海滩与自然',
      },
      {
        id: 'signal-hill',
        name: '升旗山观景台',
        distance: '1 公里（步行 15 分钟或车程 5 分钟）',
        duration: '30 – 45 分钟',
        highlight: '山丘上俯瞰亚庇市区与大海的绝佳视角，拍摄城市全景的首选地点。',
        category: '观景与摄影',
      },
      {
        id: 'sabah-museum',
        name: '沙巴博物馆',
        distance: '4 公里（车程约 10 – 15 分钟）',
        duration: '2 – 3 小时',
        highlight: '馆藏涵盖沙巴历史、文化与民族志，还有传统长屋与文化园区。',
        category: '博物馆与历史',
      },
      {
        id: 'masjid-bandaraya',
        name: '亚庇市立清真寺',
        distance: '5 公里（车程约 10 分钟）',
        duration: '30 – 60 分钟',
        highlight: '以现代建筑闻名的"水上清真寺"，日落时分最美的城市地标。',
        category: '宗教与建筑',
      },
    ],
  },
  map: {
    eyebrow: '位置地图',
    title: '在 Google 地图上找到我们',
    intro: '直接在 Google 地图应用中打开，即可从当前位置导航至沙巴亚庇手工艺品市场。',
    iframeTitle: '沙巴亚庇手工艺品市场地图',
    openMapsLabel: '在 Google 地图中打开',
  },
  faq: {
    eyebrow: '常见问题',
    title: 'FAQ · 游客常问的问题',
    intro: '整理游客在到访亚庇手工艺品市场前最常问的 15 个问题，并给出清晰解答。',
    items: [
      {
        q: '进入亚庇手工艺品市场需要门票吗？',
        a: '不需要。市场对所有游客免费开放，您只需为购买的商品付费。',
      },
      {
        q: '市场的营业时间是？',
        a: '每天营业（含周日与公共假期），时间为 9:00–18:00。部分摊位平日可能提前收摊。',
      },
      {
        q: '在市场里可以讨价还价吗？',
        a: '可以。这里砍价是常态，尤其是批量购买或购买手工艺品时。请保持礼貌、善意议价。',
      },
      {
        q: '摊位接受信用卡吗？',
        a: '多数摊位仅收现金。少数较大的店铺和珍珠商家可刷卡，附近也设有 ATM。',
      },
      {
        q: '市场是否无障碍、方便轮椅通行？',
        a: '是的，市场内通道平坦，主入口设有无障碍通道，也有公共厕所可用。',
      },
      {
        q: '市场内可以拍照吗？',
        a: '可以，个人用途拍照没有问题。若要拍摄摊主或工艺品用于商业用途，请先征得同意。',
      },
      {
        q: '可以携带大件行李进入吗？',
        a: '可以。走道还算宽敞，但高峰时段较拥挤，请留意保管随身贵重物品。',
      },
      {
        q: '市场内有公共厕所吗？',
        a: '有，位于底层美食广场附近，可能收取少量清洁维护费。',
      },
      {
        q: '什么时候去最好？',
        a: '10:00–15:00 最佳，摊位全开且不至于太拥挤。上午时段议价空间也较大。',
      },
      {
        q: '市场有寄存行李的服务吗？',
        a: '没有官方寄存服务。如有大件行李，建议寄存在酒店或使用交通枢纽的储物柜。',
      },
      {
        q: '市场附近有什么吃的？',
        a: '市场底层有供应本地美食的美食广场，步行 5–10 分钟的加雅街也有众多餐馆。',
      },
      {
        q: '市场内有免费 Wi-Fi 吗？',
        a: '没有官方免费 Wi-Fi，不过马来西亚主要电信商（Maxis、Celcom、Digi、U Mobile）的 4G 信号都很好。',
      },
      {
        q: '只能用马来西亚令吉付款吗？',
        a: '是的，马来西亚令吉（RM）是法定货币。部分大店或收外币，但汇率通常不划算。',
      },
      {
        q: '购买的商品有正品保证吗？',
        a: '多数手工艺品由本地匠人直接售卖。购买珍珠等贵重物品时，请索取收据并记下商家信息以便日后参考。',
      },
      {
        q: '批量购买有折扣吗？',
        a: '有。一次购买多件商品时，多数摊主会给予折扣，付款前可与摊主商量。',
      },
    ],
  },
  guides: {
    relatedTitle: '相关指南',
    backHomeLabel: '返回主指南',
    backHomeHint: '手工艺品市场完整指南：营业时间、停车、交通、美食与地图。',
    shopping: {
      meta: {
        title: '亚庇手工艺品市场必买清单 | 沙巴伴手礼与购物攻略',
        description:
          '亚庇手工艺品市场（菲律宾市场）最值得买的六类商品：沙巴珍珠、传统织布与宋吉、木雕、Sompoton 乐器、Amplang 鱼饼与伴手礼，附价格区间、杀价技巧与珍珠真伪辨别方法。',
      },
      eyebrow: '购物攻略',
      h1: '亚庇手工艺品市场必买清单',
      intro:
        '敦弗阿斯蒂芬路（Jalan Tun Fuad Stephens）的同一屋檐下聚集了上百个摊位。本攻略列出最值得下手的六大类商品、市场实际价格区间，以及如何挑选与议价，让你带回家的伴手礼真正物有所值。',
      noteLabel: '价格区间',
      blocks: [
        {
          heading: '沙巴珍珠饰品',
          body: '沙巴在山打根、拿笃与纳闽一带海域拥有自己的珍珠养殖场，市场里的珍珠摊位出售金、银镶嵌的项链、耳环与戒指。最简单的辨别方法：把珍珠在牙齿上轻轻摩擦——天然珍珠略有磨砂感，仿珠则光滑如玻璃。',
          items: ['珍珠项链', '珍珠耳环与手链', '珍珠戒指', '银镶珍珠套装'],
          note: '约 RM80 – RM800，视大小、光泽、形状与镶嵌材质而定。',
        },
        {
          heading: '传统织布、宋吉（Songket）与沙巴蜡染',
          body: '杜顺、卡达山、巴瑶与姆鲁特等族群的手织布以彩色纱线织出几何纹样与自然图腾；沙巴宋吉则掺入金线或银线织造，更适合作为体面礼品。手工织布通常比机器印染的蜡染布昂贵。',
          items: ['沙巴宋吉布', '杜顺手织布', '蜡染纱笼与披肩', '手织马来套装'],
          note: '约 RM45 – RM350；金线宋吉通常从 RM150 起。',
        },
        {
          heading: '木雕与传统乐器',
          body: '以本地硬木雕刻的工艺品有人像、面具、迷你盾牌与装饰木船。Sompoton 是卡达山-杜顺族的传统乐器，由干葫芦与竹管制成，轻巧独特，很适合塞进行李箱带回家。',
          items: ['Sompoton 乐器', '木雕人像与面具', '迷你木船', '雕花木盒'],
          note: 'Sompoton 约 RM40 – RM120；大型木雕约 RM80 – RM500，视尺寸与做工而定。',
        },
        {
          heading: '藤编、竹编与手织篮器',
          body: '藤编的篮子、手提袋、席子与花盆套多由沙巴乡村社区手工编织，轻便耐用，也很适合作为居家摆饰。挑选时留意编织结点——紧密均匀的作品通常更耐用。',
          items: ['藤编手提袋', '藤篮与托盘', '竹席', '藤编花盆套'],
          note: '约 RM25 – RM180，视尺寸与编织复杂度而定。',
        },
        {
          heading: '零食与可食用伴手礼',
          body: '这是游客最密集的区域——整排摊位售卖 Amplang（沙巴鱼饼）、传统糕点、本地咖啡与海产干货。Amplang 耐放又轻便，是最实用的可食用伴手礼。',
          items: ['Amplang 鱼饼', '传统糕点（kuih）', '沙巴咖啡与茶', '咸鱼、虾米'],
          note: 'Amplang 约 RM10 – RM25 一包；海产干货约 RM20 – RM80 一公斤。',
        },
        {
          heading: '小型纪念品与礼品',
          body: '需要一次买齐多份伴手礼时，纪念品摊位提供冰箱贴、明信片、串珠钥匙圈、沙巴 T 恤与小挂饰。适合分送同事，也不会增加行李负担。',
          items: ['冰箱贴', '明信片与卡片', '沙巴 T 恤', '串珠钥匙圈'],
          note: '约 RM5 – RM40；一次购买多件通常更便宜。',
        },
      ],
      tipsTitle: '💡 市场购物小贴士',
      tips: [
        '砍价是常态——可从开价的 50–60% 起谈，再逐步加价。',
        '备足现金，多数小摊不接受刷卡或电子钱包。',
        '购买珍珠等贵重物品前，先比较 2–3 个摊位。',
        '高价消费请索取注明商品与摊位名称的书面收据。',
        '建议 10:00–13:00 到访：摊位齐全、人潮较少，议价空间也更好谈。',
        '携带海产干货或食品回国前，请先确认目的地海关规定。',
      ],
      faq: {
        eyebrow: '常见问题',
        title: 'FAQ · 购物攻略',
        intro: '整理游客在手工艺品市场购物前最常问的六个问题。',
        items: [
          {
            q: '在手工艺品市场购物该准备多少预算？',
            a: '购买轻量伴手礼，RM50 – RM150 就已足够；若目标是珍珠或金线宋吉，建议准备 RM200 – RM800。多数摊位不接受刷卡，请额外预留现金。',
          },
          {
            q: '如何分辨天然珍珠与仿珠？',
            a: '把珍珠在牙齿上轻轻摩擦：天然珍珠略有磨砂感，仿珠则光滑。天然珍珠的光泽更深、手感更沉。购买高价商品时，请索取载有商家信息的收据。',
          },
          {
            q: '在市场里可以讨价还价吗？',
            a: '可以。砍价是这里的常态，一次购买多件时尤其常见。开价合理、态度友善，摊主通常更愿意给折扣。',
          },
          {
            q: '摊位接受信用卡、电子钱包或扫码支付吗？',
            a: '只有少数规模较大的店铺和珍珠商家接受刷卡与扫码支付，多数摊位仅收现金。附近购物中心设有 ATM。',
          },
          {
            q: '从沙巴带回国最实用的伴手礼是什么？',
            a: 'Amplang 鱼饼、沙巴咖啡、小幅手织布、Sompoton 乐器与串珠纪念品最实用——轻便耐放，也容易塞进行李箱。',
          },
          {
            q: '海产干货可以带回我的国家吗？',
            a: '许多国家对海产与肉类制品有进口限制。购买前请先确认目的地海关规定，或选择标签完整的工厂密封包装产品。',
          },
        ],
      },
    },
    itinerary: {
      meta: {
        title: '亚庇一日游行程 | 手工艺品市场、夜市与日落',
        description:
          '亚庇市中心一日行程安排：上午逛手工艺品市场、中午品尝海鲜、下午前往哲斯顿码头、入夜再到 Anjung Kinabalu 夜市。附时间安排、预算估算与实用贴士。',
      },
      eyebrow: '行程规划',
      h1: '亚庇手工艺品市场周边一日游行程',
      intro:
        '手工艺品市场、跳岛码头、观景山丘、夜市与海滨海鲜街，全都在步行约 15 分钟范围内。以下是一份实用的时间安排，并附上每人的预算估算。',
      noteLabel: '预算估算',
      blocks: [
        {
          heading: '09:00 – 11:30 · 从手工艺品市场开始',
          body: '早点抵达，摊铺刚开、可以慢慢挑选。先集中看珍珠、织布与木雕——这几区最需要时间比价。轻量采购留到最后，免得整天提着大包小包。',
          items: ['敦弗阿斯蒂芬路', '免费入场', '1.5 – 2 小时'],
          note: '首轮采购约 RM50 – RM300，视你的伴手礼预算而定。',
        },
        {
          heading: '11:30 – 13:00 · 午餐：美食广场或海滨',
          body: '市场底层的美食广场供应沙巴杂饭、沙巴叻沙与哥罗面，价格相当实惠。想吃海鲜则步行约 400 米到海滨摊区——炭烤鱼与烤蟹就在你面前现烤。',
          items: ['沙巴杂饭与叻沙', '炭烤鱼／烤蟹', '冰拉茶'],
          note: '午餐约 RM10 – RM40／人。',
        },
        {
          heading: '13:00 – 16:00 · 两种选择：跳岛或市区',
          body: '想跳岛就步行 200 米到哲斯顿码头，搭船前往沙比岛、马努干岛或马慕迪岛——末班船通常在傍晚返回。留在市区则可续走加雅街，看英殖民时期建筑与老咖啡店。',
          items: ['东姑阿都拉曼海洋公园渡轮', '加雅街与老咖啡店', 'Suria Sabah（下雨时）'],
          note: '跳岛船票约 RM35 – RM90／人（含保育费）；市区行程几乎零花费。',
        },
        {
          heading: '16:30 – 18:30 · 升旗山或海滨看日落',
          body: '亚庇的日落相当有名。从市场步行上坡约 15 分钟（或车程 5 分钟）可抵升旗山观景台；亚庇海滨（KK Waterfront）地势平坦，更适合带家人前往。',
          items: ['升旗山观景台', '亚庇海滨 KK Waterfront', '海滨观景广场'],
          note: '免费，或花 RM5 – RM20 买杯饮料等日落。',
        },
        {
          heading: '19:00 – 22:00 · 夜市与海滨晚餐',
          body: '入夜后 Anjung Kinabalu 一带摊贩陆续开市，适合品尝沙嗲、薄饼与本地糕点。想吃得更舒适，海滨一带的海鲜餐厅提供辣椒蟹与烤大明虾。',
          items: ['沙嗲与薄饼', '辣椒蟹', '烤大明虾', '本地糕点'],
          note: '晚餐约 RM25 – RM120／人，视餐厅选择而定。',
        },
        {
          heading: '遇到下雨 · 室内替代方案',
          body: '亚庇的雨多半下在傍晚且不会持续太久。若遇大雨，可改到 Suria Sabah 或 Wisma Merdeka 室内购物，或前往车程约 10 – 15 分钟的沙巴博物馆。',
          items: ['Suria Sabah 购物中心', 'Wisma Merdeka', '沙巴博物馆'],
          note: '交通与门票（若适用）约 RM10 – RM30。',
        },
      ],
      tipsTitle: '💡 行程安排小贴士',
      tips: [
        '尽量在 11:00 前进场，避开正午高温，摊位也最齐全。',
        '先把较重的战利品放回酒店——下午的市场走道会比较拥挤。',
        '随身带把小伞：正午烈日与午后阵雨可能在同一天出现。',
        '要搭船跳岛，建议早上先买票，确保赶得上末班回程船。',
        '夜市仍以现金为主，请准备小额钞票付摊贩。',
      ],
      faq: {
        eyebrow: '常见问题',
        title: 'FAQ · 一日游行程',
        intro: '整理规划亚庇市中心一日行程时最常见的六个问题。',
        items: [
          {
            q: '这一日行程大约需要多久？',
            a: '完整走完约 8 – 10 小时。若只想逛市场、吃午餐再看日落，可压缩到 4 – 5 小时。',
          },
          {
            q: '同一天可以既逛市场又跳岛吗？',
            a: '可以，哲斯顿码头距市场仅 200 米。建议中午前完成采购再搭船，并留意末班回程船的时间。',
          },
          {
            q: 'Anjung Kinabalu 夜市每天都开吗？',
            a: '通常在傍晚至夜间营业，但摊位数量会随日子与天气变化。周末最热闹；若需确认，可向市场管理方或当地居民询问。',
          },
          {
            q: '亚庇看日落的最佳地点在哪里？',
            a: '升旗山观景台可从高处俯瞰市区与海面，亚庇海滨则地势平坦、更好抵达。两处距手工艺品市场都在步行 15 – 20 分钟内。',
          },
          {
            q: '这条行程一天大约要花多少钱？',
            a: '不跳岛的话，含餐饮与轻量伴手礼约 RM80 – RM150／人；若要搭船跳岛，再加约 RM35 – RM90。',
          },
          {
            q: '行程适合儿童与长者吗？',
            a: '适合。市中心主要路段平坦，手工艺品市场也方便轮椅通行。前往升旗山建议乘车，不要徒步上坡。',
          },
        ],
      },
    },
  },
  header: {
    visitUs: '到访信息',
    navAria: '主导航',
  },
  footer: {
    about:
      '亚庇手工艺品市场（沙巴）非官方游客指南——汇总营业时间、交通、美食与游览贴士，带您轻松畅游沙巴规模最大的手工艺品市场。',
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
