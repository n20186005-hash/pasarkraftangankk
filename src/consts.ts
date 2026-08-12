export const SITE = {
  name: 'Pasar Kraftangan Kota Kinabalu',
  title: 'Pasar Kraftangan Kota Kinabalu — Panduan Pelawat',
  description:
    'Pasar kraftangan terbesar di Sabah, menjual barangan buatan tempatan, perhiasan mutiara, kain tenun, kraftangan Orang Asli Sabah, dan cenderamata di tengah bandar Kota Kinabalu.',
  language: 'ms',
  locale: 'ms_MY',
  ga4Id: 'G-HXM22WWPKP',
  address: '7, Jalan Tun Fuad Stephen, Pusat Bandar Kota Kinabalu, 88000 Kota Kinabalu, Sabah, Malaysia',
  coordinates: {
    lat: 5.981244,
    lng: 116.0670089,
  },
  ratingValue: 4.3,
  reviewCount: 2451,
  priceRange: 'RM',
} as const;

export const KEY_INFO = [
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
] as const;

export type ProductCategory = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  items: string[];
};

export const PRODUCT_CATEGORIES: ProductCategory[] = [
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
      'Bakul, bakul, beg, tikar, dan perabot kecil anyaman rotan dan buluh. Ringan, tahan lasak, dan seramai buatan tangan oleh komuniti kampung.',
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
];

export type FoodSpot = {
  id: string;
  name: string;
  distance: string;
  specialty: string[];
  price: 'murah' | 'sederhana' | 'mewah';
  note: string;
};

export const FOOD_SPOTS: FoodSpot[] = [
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
];

export type TransportOption = {
  id: string;
  mode: 'kapal_terbang' | 'bas' | 'teksi' | 'grab' | 'berjalan' | 'kereta';
  title: string;
  duration: string;
  cost: string;
  steps: string[];
  tips: string;
};

export const TRANSPORT: TransportOption[] = [
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
      'Pergi ke stesen bas utama Kota Kinabalu (Wawasan Plaza / Padang Merdeka',
      'Cari laluan bas yang melalui Jalan Tun Fuad Stephen',
      'Turun di perhentian berhampiran Pasar Kraftangan',
      'Berjalan 2–3 minit ke pintu masuk pasar',
    ],
    tips: 'Bas bandar beroperasi dari 6:30 AM hingga 8:00 PM. Perkhidmatan lebih jarang pada hujung minggu.',
  },
  {
    id: 'teksi',
    mode: 'teksi',
    title: 'Teksi Bandar (Dari Pusat Bandar',
    duration: '5 – 10 minit',
    cost: 'RM8 – RM15',
    steps: [
      'Tunggu di tempat menunggu teksi atau halte teksi yang ditetapkan',
      'Pastikan pemandu guna meter atau bincang tambang dahulu',
      'Alamat penuh: No.7, Jalan Tun Fuad Stephen, Pusat Bandar KK',
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
    tips: 'Sesuai jika cuaca tidak terlalu panas. Bawah payung atau topi untuk lindungan matahari.',
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
];

export type ParkingSpot = {
  id: string;
  name: string;
  distance: string;
  rate: string;
  capacity: string;
  notes: string;
};

export const PARKING: ParkingSpot[] = [
  {
    id: 'jalan-tun-fuad',
    name: 'Parkir Jalan Jalan Tun Fuad Stephen',
    distance: 'Tepat di depan pasar',
    rate: 'RM2/jam (maks RM8/hari)',
    capacity: 'Terhad (kira-kira 40 lot)',
    notes: 'Paling hampir tetapi cepat penuh pada waktu puncak 10:00 pagi – 3:00 petang.',
  },
  {
    id: 'suria-sabah',
    name: 'Parkir Suria Sabah Shopping Mall',
    distance: '350 meter (5 minit jalan kaki)',
    rate: 'RM3/jam pertama, RM2 setiap jam selepas',
    capacity: 'Bertingkat, banyak lot',
    notes: 'Pilihan terbaik jika parkir jalan penuh. Boleh membeli belah selepas melawat pasar.',
  },
  {
    id: 'wisma-merdeka',
    name: 'Parkir Wisma Merdeka',
    distance: '450 meter (7 minit jalan kaki)',
    rate: 'RM2/jam',
    capacity: 'Sederhana',
    notes: 'Pusat beli belah yang lebih lama, biasanya kurang sesak daripada Suria Sabah.',
  },
  {
    id: 'jesselton-point',
    name: 'Parkir Jesselton Point',
    distance: '200 meter (3 minit jalan kaki)',
    rate: 'RM3/jam',
    capacity: 'Sederhana',
    notes: 'Sesuai jika anda bercadang menaiki feri ke pulau selepas melawat pasar kraftangan.',
  },
];

export type NearbyAttraction = {
  id: string;
  name: string;
  distance: string;
  duration: string;
  highlight: string;
  category: string;
};

export const NEARBY_ATTRACTIONS: NearbyAttraction[] = [
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
    id: 'atur-tunku-abdul-rahman',
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
];

export type Faq = {
  q: string;
  a: string;
};

export const FAQS: Faq[] = [
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
    a: 'Kebanyakan gerai hanya menerima wang tunai. Terdapat beberapa kedai-kedai yang lebih besar dan kedai mutiara yang menerima kad kredit. Disediakan mesin ATM berhampiran.',
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
];

export type TicketInfo = {
  type: string;
  price: string;
  note: string;
};

export const TICKET_INFO: TicketInfo[] = [
  { type: 'Dewasa', price: 'Percuma', note: 'Tanpa had umur' },
  { type: 'Kanak-kanak', price: 'Percuma', note: 'Semua kanak-kanak dialu-alukan' },
  { type: 'Warga Emas', price: 'Percuma', note: 'Tiada caj khas' },
  { type: 'Pelancong Asing', price: 'Percuma', note: 'Sama seperti rakyat Malaysia' },
];

export const GALLERY: string[] = Array.from({ length: 20 }, (_, i) =>
  `/gallery/handicraft-market-${String(i + 1).padStart(2, '0')}.jpg`);
