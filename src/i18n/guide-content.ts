import type { GuideKey, Locale } from './config';

export interface GuideBlock {
  heading: string;
  body: string;
  items: string[];
  note: string;
}

export interface GuideFaqItem {
  q: string;
  a: string;
}

export interface GuideFaq {
  eyebrow: string;
  title: string;
  intro: string;
  items: GuideFaqItem[];
}

export interface GuideContent {
  meta: { title: string; description: string };
  eyebrow: string;
  h1: string;
  intro: string;
  noteLabel: string;
  blocks: GuideBlock[];
  tipsTitle: string;
  tips: string[];
  faq: GuideFaq;
}

export const GUIDE_CONTENT: Record<GuideKey, Record<Locale, GuideContent>> = {
  // ───────────────────────────── SHOPPING (migrated) ─────────────────────────────
  shopping: {
    ms: {
      meta: {
        title: 'Apa Yang Boleh Dibeli di Pasar Kraftangan KK? | Panduan Belian Sabah',
        description:
          "Apa nak beli di Pasar Kraftangan KK: sarung, mutiara, ukiran dan cenderamata. Tips membandingkan bahan, asal, harga dan resit sebelum membeli.",
      },
      eyebrow: 'Panduan Membeli-Belah',
      h1: 'Apa Yang Boleh Dibeli di Pasar Kraftangan Kota Kinabalu?',
      intro:
        "Panduan memilih cenderamata di Pasar Kraftangan: bahan, asal, kemasan dan harga perlu disahkan dengan penjual. Harga semasa tidak disahkan untuk panduan ini.",
      noteLabel: "Semak dengan penjual",
      blocks: [
        {
          heading: "Perhiasan mutiara",
          body: "Tanya jenis mutiara dan bahan tetapan. Minta resit dan butiran bertulis; jangan gunakan ujian menggosok pada gigi untuk mengesahkan barang.",
          items: ["Mutiara", "Resit bertulis"],
          note: "Semak dengan penjual",
        },
        {
          heading: "Sarung, pareo & kain",
          body: "Bandingkan sarung, pareo dan kain mengikut bahan, saiz, kaedah pembuatan dan label asal.",
          items: ["Bahan", "Label asal"],
          note: "Semak dengan penjual",
        },
        {
          heading: "Ukiran & alat muzik",
          body: "Sabah Tourism menyebut sompoton dan barangan ukiran sebagai pilihan cenderamata. Periksa kemasan dan minta penjual menjelaskan bahan serta asalnya.",
          items: ["Sompoton", "Ukiran kayu"],
          note: "Semak dengan penjual",
        },
      ],
      tipsTitle: '💡 Tips Beli-Belah di Pasar Kraftangan',
      tips: [
        "Bandingkan bahan dan harga di beberapa gerai.",
        "Tawar secara sopan tanpa menganggap diskaun tertentu dijamin.",
        "Sahkan kaedah bayaran dan polisi pulangan sebelum membayar.",
        "Minta resit untuk pembelian bernilai tinggi.",
      ],
      faq: {
        eyebrow: 'Soalan Lazim',
        title: 'FAQ · Panduan belian',
        intro: "Jawapan tentang nama tempat, waktu, lokasi dan belian.",
        items: [
          {
            q: "Apa yang boleh dibeli?",
            a: "Cari sarung atau pareo, perhiasan mutiara, ukiran kayu, sompoton dan cenderamata. Stok, bahan, asal dan harga berbeza mengikut penjual.",
          },
          {
            q: "Bolehkah menawar harga?",
            a: "Sabah Tourism mencadangkan tawar-menawar. Bandingkan beberapa gerai dan tawar secara sopan; tiada peratus diskaun yang dijamin.",
          },
          {
            q: "Adakah mutiara dijamin asli?",
            a: "Tidak semua barang boleh disahkan melalui pemerhatian. Minta butiran bertulis tentang jenis, rawatan dan bahan tetapan serta resit. Untuk belian bernilai tinggi, dapatkan pengesahan pakar yang bebas.",
          },
          {
            q: "Bagaimana dengan bayaran dan kemudahan?",
            a: "Sahkan kaedah bayaran, tandas, akses tanpa tangga dan tempat letak kereta di lokasi. Jangan anggap semua gerai menerima kad atau semua lorong sesuai untuk kerusi roda.",
          },
        ],
      },
    },
    en: {
      meta: {
        title: 'What to Buy at Kota Kinabalu Handicraft Market | Sabah Shopping Guide',
        description:
          "What to buy at Kota Kinabalu Handicraft Market: sarongs, pearls, carvings and souvenirs. Compare materials, origin, prices and receipts before buying.",
      },
      eyebrow: 'Shopping Guide',
      h1: 'What to Buy at the Kota Kinabalu Handicraft Market',
      intro:
        "Choose market souvenirs by checking materials, origin, finish and price with the seller. Current prices have not been verified for this guide.",
      noteLabel: "Confirm with the seller",
      blocks: [
        {
          heading: "Pearl jewellery",
          body: "Ask about the pearl type and setting materials. Request a receipt and written details; rubbing a pearl against your teeth is not a reliable way to certify the item.",
          items: ["Pearls", "Written receipt"],
          note: "Confirm with the seller",
        },
        {
          heading: "Sarongs, pareos & textiles",
          body: "Compare sarongs, pareos and textiles by material, dimensions, production method and origin labels.",
          items: ["Material", "Origin label"],
          note: "Confirm with the seller",
        },
        {
          heading: "Carvings & instruments",
          body: "Sabah Tourism mentions sompoton and carved items as souvenir choices. Check the finish and ask the seller about materials and origin.",
          items: ["Sompoton", "Wood carving"],
          note: "Confirm with the seller",
        },
      ],
      tipsTitle: '💡 Shopping Tips for the Market',
      tips: [
        "Compare materials and prices at several stalls.",
        "Bargain politely without expecting a guaranteed discount.",
        "Confirm payment methods and return terms before paying.",
        "Ask for a receipt for expensive purchases.",
      ],
      faq: {
        eyebrow: 'FAQ',
        title: 'FAQ · Shopping guide',
        intro: "Answers about names, hours, location and shopping.",
        items: [
          {
            q: "What can I buy?",
            a: "Look for sarongs or pareos, pearl jewellery, wooden carvings, sompoton and small souvenirs. Stock, materials, origin and prices vary between sellers.",
          },
          {
            q: "Can I bargain?",
            a: "Sabah Tourism recommends bargaining. Compare stalls and negotiate politely; no fixed discount is guaranteed.",
          },
          {
            q: "Are the pearls guaranteed genuine?",
            a: "Appearance alone cannot confirm every item. Ask for written details of type, treatment and setting, plus a receipt. Consider independent expert verification for expensive purchases.",
          },
          {
            q: "What payment and facilities are available?",
            a: "Confirm payment methods, toilets, step-free access and parking locally. Do not assume every stall takes cards or every aisle is suitable for a wheelchair.",
          },
        ],
      },
    },
    zh: {
      meta: {
        title: '亚庇手工艺品市场必买清单 | 沙巴伴手礼与购物攻略',
        description:
          "亚庇手工艺品市场买什么：沙笼、珍珠饰品、木雕与纪念品。比较材质、产地和价格，购买前确认收据与退换条件。",
      },
      eyebrow: '购物攻略',
      h1: '亚庇手工艺品市场必买清单',
      intro:
        "选购纪念品时向卖家核对材质、产地、做工和价格。本指南尚未核实当前商品报价。",
      noteLabel: "向卖家确认",
      blocks: [
        {
          heading: "珍珠饰品",
          body: "询问珍珠类别和镶嵌材质，索取收据及书面说明。用牙齿摩擦不能可靠地为商品真伪提供证明。",
          items: ["珍珠", "书面收据"],
          note: "向卖家确认",
        },
        {
          heading: "沙笼、披布与织物",
          body: "比较沙笼、披布和织物的材质、尺寸、制作方法和产地标签。",
          items: ["材质", "产地标签"],
          note: "向卖家确认",
        },
        {
          heading: "雕刻与传统乐器",
          body: "沙巴旅游局提到 sompoton 传统乐器与雕刻品等纪念品选择。检查做工，并向卖家确认材料和产地。",
          items: ["sompoton 乐器", "木雕"],
          note: "向卖家确认",
        },
      ],
      tipsTitle: '💡 市场购物小贴士',
      tips: [
        "比较多家摊位的材质和价格。",
        "礼貌议价，不预设一定能获得某个折扣。",
        "付款前确认支付方式和退换条件。",
        "高价商品索取收据。",
      ],
      faq: {
        eyebrow: '常见问题',
        title: 'FAQ · 购物攻略',
        intro: "关于名称、营业时间、位置和购物的常见问题。",
        items: [
          {
            q: "可以买什么？",
            a: "可寻找沙笼、披布、珍珠饰品、木雕、sompoton传统乐器和小纪念品。库存、材质、产地和价格因卖家而异。",
          },
          {
            q: "可以议价吗？",
            a: "沙巴旅游局建议议价。先比较不同摊位，再礼貌沟通；没有保证能获得的固定折扣。",
          },
          {
            q: "珍珠都保证是真的吗？",
            a: "不能仅凭外观确认每件商品。购买前索取类别、处理方式、镶嵌材质等书面信息及收据；高价商品可考虑独立专业鉴定。",
          },
          {
            q: "支付和设施有什么注意事项？",
            a: "现场核对支付方式、厕所、无台阶通道和停车位置。不要默认每个摊位支持刷卡，也不要默认全部通道都适合轮椅。",
          },
        ],
      },
    },
  },

  // ───────────────────────────── ITINERARY (migrated) ─────────────────────────────
  itinerary: {
    ms: {
      meta: {
        title: 'Rancangan Satu Hari di Kota Kinabalu | Pasar Kraftangan, Pasar Malam & Senja',
        description:
          "Rancang lawatan Pasar Kraftangan Kota Kinabalu, gerai makanan dan kawasan waterfront dengan masa fleksibel serta pautan peta dan sumber rasmi.",
      },
      eyebrow: 'Rancangan Perjalanan',
      h1: 'Rancangan Satu Hari di Sekitar Pasar Kraftangan Kota Kinabalu',
      intro:
        "Cadangan susunan lawatan bandar yang fleksibel. Sahkan waktu gerai, cuaca dan laluan pada hari perjalanan; aktiviti pulau memerlukan rancangan berasingan.",
      noteLabel: "Nota perancangan",
      blocks: [
        {
          heading: "Mula dengan gerai kraftangan",
          body: "Pilih waktu yang sesuai dengan gerai yang hendak dilawati. Bandingkan barang sebelum membeli dan simpan belian besar di tempat penginapan.",
          items: ["Banding dulu", "Simpan di hotel"],
          note: "Cadangan fleksibel; semak keadaan semasa",
        },
        {
          heading: "Rehat makan di kawasan pasar",
          body: "Cari gerai yang sedang beroperasi. Sahkan menu, harga dan caj masakan sebelum memesan.",
          items: ["Sahkan harga", "Caj masakan"],
          note: "Cadangan fleksibel; semak keadaan semasa",
        },
        {
          heading: "Sambung ke bandar atau waterfront",
          body: "Gunakan laluan peta ke Gaya Street atau kawasan waterfront yang boleh diakses. Semak cuaca dan waktu matahari terbenam untuk tarikh anda.",
          items: ["Gaya Street", "Waterfront"],
          note: "Cadangan fleksibel; semak keadaan semasa",
        },
        {
          heading: "Jika mahu ke pulau",
          body: "Rancang perjalanan berasingan melalui Jesselton Point. Sahkan tiket, yuran, masa perjalanan dan bot terakhir sebelum memilih aktiviti lain.",
          items: ["Jesselton Point", "Bot terakhir"],
          note: "Cadangan fleksibel; semak keadaan semasa",
        },
      ],
      tipsTitle: '💡 Tips Menyusun Hari Anda',
      tips: [
        "Jangan anggap Jesselton Point hanya 200 meter dari pasar. Gunakan laluan sebenar.",
        "Simpan masa untuk perjalanan pulang dan rehat.",
        "Waktu senarai pasar tidak sama dengan waktu setiap gerai atau bot.",
      ],
      faq: {
        eyebrow: 'Soalan Lazim',
        title: 'FAQ · Rancangan satu hari',
        intro: "Jawapan tentang nama tempat, waktu, lokasi dan belian.",
        items: [
          {
            q: "Apakah nama lain Pasar Kraftangan Kota Kinabalu?",
            a: "Pasar Kraftangan juga dicari sebagai Handicraft Market atau Filipino Market. Pautan peta laman ini kini memaparkan Pasar Kraftangan / Filipino Market. Sabah Tourism menerbitkan panduan pasarnya di bawah tajuk Anjung Kinabalu; nama boleh merujuk kawasan pasar yang berdekatan, jadi ikut pin dan alamat.",
          },
          {
            q: "Bilakah waktu operasi pasar?",
            a: "Google Maps menyenaraikan 08:00–22:00 setiap hari pada 19 Oktober 2026. Waktu ini merujuk senarai tempat; gerai kraftangan, makanan dan kedai individu boleh mempunyai waktu berlainan.",
          },
          {
            q: "Di manakah lokasi Pasar Kraftangan?",
            a: "7, Jalan Tun Fuad Stephen, Pusat Bandar Kota Kinabalu, 88000 Kota Kinabalu, Sabah. Gunakan pautan peta untuk laluan dari lokasi sebenar anda.",
          },
        ],
      },
    },
    en: {
      meta: {
        title: 'One Day in Kota Kinabalu Itinerary | Handicraft Market, Night Market & Sunset',
        description:
          "Plan Kota Kinabalu Handicraft Market, food stalls and waterfront stops with flexible timing, map links and official references.",
      },
      eyebrow: 'Itinerary',
      h1: 'One Day Around the Kota Kinabalu Handicraft Market',
      intro:
        "A flexible order for a city visit. Check stall hours, weather and routes on the day; island activities need separate planning.",
      noteLabel: "Planning note",
      blocks: [
        {
          heading: "Start with handicraft stalls",
          body: "Choose a time that suits the stalls you want to visit. Compare goods before buying and leave bulky purchases at your accommodation.",
          items: ["Compare first", "Store at hotel"],
          note: "Flexible suggestion; check current conditions",
        },
        {
          heading: "Take a meal break nearby",
          body: "Choose a stall that is operating. Confirm the menu, prices and cooking charges before ordering.",
          items: ["Confirm price", "Cooking charge"],
          note: "Flexible suggestion; check current conditions",
        },
        {
          heading: "Continue into town or along the waterfront",
          body: "Use directions to Gaya Street or accessible waterfront areas. Check weather and sunset time for your travel date.",
          items: ["Gaya Street", "Waterfront"],
          note: "Flexible suggestion; check current conditions",
        },
        {
          heading: "If you want an island trip",
          body: "Plan separately through Jesselton Point. Confirm tickets, fees, travel time and the last return boat before fitting in other activities.",
          items: ["Jesselton Point", "Last boat"],
          note: "Flexible suggestion; check current conditions",
        },
      ],
      tipsTitle: '💡 Tips for Planning Your Day',
      tips: [
        "Do not assume Jesselton Point is only 200 metres from this market; use current directions.",
        "Allow time for breaks and the return journey.",
        "Market listing hours do not describe every stall or boat service.",
      ],
      faq: {
        eyebrow: 'FAQ',
        title: 'FAQ · One-day itinerary',
        intro: "Answers about names, hours, location and shopping.",
        items: [
          {
            q: "Is this the Filipino Market?",
            a: "Pasar Kraftangan is also searched as Handicraft Market or Filipino Market. The map linked here currently shows Pasar Kraftangan / Filipino Market. Sabah Tourism publishes its market guide under Anjung Kinabalu; names can cover neighbouring market areas, so follow the pin and street address.",
          },
          {
            q: "What are the opening hours?",
            a: "Google Maps listed 08:00–22:00 daily when checked on 19 October 2026. These are listing hours, not a promise that every handicraft shop or food stall operates throughout that period.",
          },
          {
            q: "Where is the market?",
            a: "7, Jalan Tun Fuad Stephen, Pusat Bandar Kota Kinabalu, 88000 Kota Kinabalu, Sabah. Open the map link for directions from your actual starting point.",
          },
        ],
      },
    },
    zh: {
      meta: {
        title: '亚庇一日游行程 | 手工艺品市场、夜市与日落',
        description:
          "安排亚庇手工艺品市场、餐饮摊位和海滨散步，提供灵活时间建议、地图与官方参考来源。",
      },
      eyebrow: '行程规划',
      h1: '亚庇手工艺品市场周边一日游行程',
      intro:
        "灵活安排市区游览顺序。出发当天核对摊位时间、天气与路线；跳岛活动应另行规划。",
      noteLabel: "规划提醒",
      blocks: [
        {
          heading: "先逛手工艺摊位",
          body: "根据目标摊位选择到访时间，比较商品后再购买，大件物品可先送回住宿处。",
          items: ["先比较", "寄存住宿"],
          note: "灵活建议；以当天情况为准",
        },
        {
          heading: "在市场周边休息用餐",
          body: "选择正在营业的摊位，点餐前确认菜单、单价和加工费。",
          items: ["确认价格", "加工费"],
          note: "灵活建议；以当天情况为准",
        },
        {
          heading: "继续市区或海滨游览",
          body: "使用地图前往 Gaya Street 或开放的海滨区域，并查询出行当天的天气和日落时间。",
          items: ["Gaya Street", "海滨"],
          note: "灵活建议；以当天情况为准",
        },
        {
          heading: "如需安排跳岛",
          body: "另行规划经 Jesselton Point 出发的船程。确认船票、费用、路程和末班返程船，再安排其他活动。",
          items: ["Jesselton Point", "末班船"],
          note: "灵活建议；以当天情况为准",
        },
      ],
      tipsTitle: '💡 行程安排小贴士',
      tips: [
        "不要假设 Jesselton Point 距市场仅200米，请按实际路线规划。",
        "预留休息及返程时间。",
        "市场地点所列时间不代表各摊位或船班时刻。",
      ],
      faq: {
        eyebrow: '常见问题',
        title: 'FAQ · 一日游行程',
        intro: "关于名称、营业时间、位置和购物的常见问题。",
        items: [
          {
            q: "这里是菲律宾市场吗？",
            a: "Pasar Kraftangan 也常被搜索为 Handicraft Market 或 Filipino Market。本站链接的地图目前显示菲律宾夜市／Pasar Kraftangan。沙巴旅游局以 Anjung Kinabalu 为标题介绍该市场；不同名称可能涵盖相邻市场区域，请以定位和街道地址核对。",
          },
          {
            q: "市场几点营业？",
            a: "2026年10月19日核对时，Google 地图显示每天08:00–22:00。这是地点列表的营业时间，并不保证每个手工艺摊、商店或餐饮摊全时段开放。",
          },
          {
            q: "具体位置在哪里？",
            a: "7, Jalan Tun Fuad Stephen, Pusat Bandar Kota Kinabalu, 88000 Kota Kinabalu, Sabah。请打开地图，从实际出发地点规划路线。",
          },
        ],
      },
    },
  },

  // ───────────────────────────── NEW GUIDE 1 · BEST TIME ─────────────────────────────
  'best-time': {
    ms: {
      meta: {
        title: 'Masa Terbaik & Waktu Lawatan Pasar Kraftangan KK | Panduan Cuaca',
        description:
          'Bila nak ke Pasar Kraftangan Kota Kinabalu: senarai peta 08:00–22:00, gerai berbeza, elak cuaca panas dan hujan, serta petua musim.',
      },
      eyebrow: 'Masa & Cuaca',
      h1: 'Masa Terbaik & Waktu Lawatan ke Pasar Kraftangan Kota Kinabalu',
      intro:
        'Panduan masa lawatan: senarai peta menyenaraikan 08:00–22:00, tetapi waktu gerai kraftangan dan makanan berbeza. Rancang mengikut cuaca, orang ramai dan gerai sasaran; sahkan keadaan semasa sebelum pergi.',
      noteLabel: 'Semak dengan penjual / sumber rasmi',
      blocks: [
        {
          heading: 'Waktu senarai peta vs waktu gerai',
          body: 'Google Maps menyenaraikan 08:00–22:00 harian (disemak 19 Okt 2026). Ini merujuk senarai tempat; gerai kraftangan, makanan dan kedai individu mungkin mempunyai waktu berlainan. Jangan anggap semua gerai buka sepanjang tempoh itu.',
          items: ['08:00–22:00', 'Senarai peta'],
          note: 'Waktu berbeza mengikut gerai',
        },
        {
          heading: 'Sepanjang hari: sejuk, panas, berangin',
          body: 'Pagi lebih sejuk dan sesuai untuk berjalan serta fotografi, tetapi beberapa gerai mungkin belum buka sepenuhnya. Tengah hari (12:00–15:00) paling panas dan terik; pilih kawasan berlindung. Petang (selepas 17:00) lebih nyaman dengan cahaya lembut, namun mendekati hujung waktu operasi.',
          items: ['Pagi sejuk', 'Tengah hari panas'],
          note: 'Sesuaikan dengan gerai sasaran',
        },
        {
          heading: 'Musim hujan (Okt–Mac) vs musim kering (Apr–Sep)',
          body: 'Musim hujan membawa ribut petir pada tengah hari; bawa payung dan rancang laluan berlindung. Musim kering lebih stabil untuk berjalan kaki, tetapi biasanya lebih ramai pelancong.',
          items: ['Okt–Mac hujan', 'Apr–Sep kering'],
          note: 'Semak ramalan cuaca harian',
        },
        {
          heading: 'Hari yang kurang sesak',
          body: 'Hari bekerja biasanya lebih longgar berbanding hujung minggu atau cuti. Pasar Ahad di Gaya Street menarik sebahagian pengunjung ke kawasan lain; kedua-duanya adalah aktiviti berbeza.',
          items: ['Hari bekerja', 'Gaya Street Ahad'],
          note: 'Tiada jaminan orang ramai',
        },
      ],
      tipsTitle: '💡 Petua Masa Lawatan',
      tips: [
        'Semak ramalan cuaca dan masa matahari terbenam sebelum pergi.',
        'Simpan barang besar di penginapan sebelum meneruskan lawatan.',
        'Jangan anggap waktu senarai sebagai jaminan setiap gerai.',
        'Waktu petang sesuai untuk cahaya foto yang lembut.',
      ],
      faq: {
        eyebrow: 'Soalan Lazim',
        title: 'FAQ · Masa terbaik',
        intro: 'Jawapan tentang waktu, musim dan keadaan lawatan.',
        items: [
          {
            q: 'Pukul berapa pasar buka?',
            a: 'Google Maps menyenaraikan 08:00–22:00 harian (19 Okt 2026). Ini waktu senarai tempat; waktu gerai kraftangan dan makanan mungkin berbeza, jadi sahkan dengan penjual atau semasa lawatan.',
          },
          {
            q: 'Buka pada hari Ahad?',
            a: 'Kawasan pasar ini beroperasi setiap hari mengikut senarai, tetapi gerai individu mungkin tutup. Pasar Ahad di Gaya Street adalah aktiviti berasingan berdekatan.',
          },
          {
            q: 'Boleh ke sini masa hujan?',
            a: 'Boleh, tetapi bawa payung; laluan tepi laut mungkin basah. Sebahagian kawasan berlindung, bukan sepenuhnya tertutup.',
          },
          {
            q: 'Waktu paling kurang sesak?',
            a: 'Hari bekerja awal selalunya lebih tenang. Petang juga selesa untuk berjalan, namun beberapa gerai mungkin mula tutup.',
          },
          {
            q: 'Berbaloi ke sini waktu malam?',
            a: 'Waktu senarai hingga 22:00; petang hingga lewat malam biasanya masih dalam waktu operasi, baik untuk cuaca lebih nyaman dan cahaya senja.',
          },
        ],
      },
    },
    en: {
      meta: {
        title: 'Best Time to Visit KK Handicraft Market | Hours, Crowd & Weather',
        description:
          'When to visit Kota Kinabalu Handicraft Market: Google Maps lists 08:00–22:00, but stall hours vary. Compare early, midday and evening, plus wet/dry season tips.',
      },
      eyebrow: 'Timing & Weather',
      h1: 'Best Time to Visit the Kota Kinabalu Handicraft Market',
      intro:
        'A timing guide: the map listing shows 08:00–22:00, but handicraft and food stall hours differ. Plan around weather, crowds and the stalls you want; verify current conditions before you go.',
      noteLabel: 'Confirm with the seller / official source',
      blocks: [
        {
          heading: 'Listed hours vs actual stall hours',
          body: 'Google Maps lists 08:00–22:00 daily (checked 19 Oct 2026). This is the place listing; individual handicraft, food and shops may keep different hours. Do not assume every stall is open across that whole window.',
          items: ['08:00–22:00', 'Map listing'],
          note: 'Hours vary by stall',
        },
        {
          heading: 'Time of day: cool, hot, breezy',
          body: 'Mornings are cooler and good for walking and photos, though some stalls may not be fully open. Midday (12:00–15:00) is hottest and brightest; use shaded areas. Evenings after 17:00 are more comfortable with soft light, but approach closing time.',
          items: ['Cool mornings', 'Hot midday'],
          note: 'Match it to your target stalls',
        },
        {
          heading: 'Wet season (Oct–Mar) vs dry season (Apr–Sep)',
          body: 'The wet season brings midday thunderstorms; bring an umbrella and plan covered routes. The dry season is more stable for walking but usually busier with tourists.',
          items: ['Oct–Mar wet', 'Apr–Sep dry'],
          note: 'Check the daily forecast',
        },
        {
          heading: 'Which day is less crowded',
          body: 'Weekdays are generally looser than weekends or public holidays. The Sunday market on Gaya Street pulls some visitors to a nearby area; the two are separate activities.',
          items: ['Weekdays', 'Gaya Street Sunday'],
          note: 'No guaranteed crowd level',
        },
      ],
      tipsTitle: '💡 Visit-Timing Tips',
      tips: [
        'Check the weather forecast and sunset time before you go.',
        'Leave bulky purchases at your accommodation before continuing.',
        'Do not treat the listing hours as a guarantee for every stall.',
        'Evenings give soft photographic light and cooler air.',
      ],
      faq: {
        eyebrow: 'FAQ',
        title: 'FAQ · Best time',
        intro: 'Answers about hours, season and visit conditions.',
        items: [
          {
            q: 'What time does the market open?',
            a: 'Google Maps lists 08:00–22:00 daily (19 Oct 2026). These are listing hours; handicraft and food stall hours may differ, so confirm with the seller or on the day.',
          },
          {
            q: 'Is it open on Sundays?',
            a: 'This market area runs daily per the listing, but individual stalls may close. The Sunday market on Gaya Street is a separate nearby activity.',
          },
          {
            q: 'Can I visit in the rain?',
            a: 'Yes, but bring an umbrella; waterfront paths can get wet. Some areas are sheltered, not fully enclosed.',
          },
          {
            q: 'When is it least crowded?',
            a: 'Early weekdays are usually calmer. Evenings are also pleasant to walk, though some stalls may start closing.',
          },
          {
            q: 'Is it worth going at night?',
            a: 'The listing runs to 22:00; late afternoon to night is typically still within operating hours and good for cooler weather and sunset light.',
          },
        ],
      },
    },
    zh: {
      meta: {
        title: '亚庇手工艺品市场最佳时间 | 营业时间与天气攻略',
        description:
          '亚庇手工艺品市场几点去最好：地图显示08:00–22:00，但摊位时间不同。比较清晨、正午与傍晚，并附雨季旱季建议。',
      },
      eyebrow: '时间与天气',
      h1: '亚庇手工艺品市场最佳到访时间与时段',
      intro:
        '时段指南：地图列表显示 08:00–22:00，但手工艺与餐饮摊位时间各异。请结合天气、人潮与目标摊位安排；出发前以当天实际情况为准。',
      noteLabel: '向卖家或官方来源确认',
      blocks: [
        {
          heading: '列表时间 vs 实际摊位时间',
          body: 'Google 地图于 2026年10月19日核对显示每天 08:00–22:00。这是地点列表时间；各个手工艺、餐饮与商店营业时间可能不同。请勿假设所有摊位整段时间内都开门。',
          items: ['08:00–22:00', '地图列表'],
          note: '各摊位时间不同',
        },
        {
          heading: '一天中的时段：凉爽、炎热、海风',
          body: '清晨较凉爽，适合散步与拍照，但部分摊位可能尚未全开。正午（12:00–15:00）最晒最热，请选择有遮蔽处。傍晚（17:00 后）较舒适、光线柔和，但接近打烊时段。',
          items: ['清晨凉爽', '正午炎热'],
          note: '配合目标摊位安排',
        },
        {
          heading: '雨季（10月–3月）vs 旱季（4月–9月）',
          body: '雨季午后有雷阵雨，请带伞并规划有遮蔽路线。旱季步行较稳定，但通常游客更多。',
          items: ['10–3月 雨季', '4–9月 旱季'],
          note: '每日查看天气预报',
        },
        {
          heading: '哪天人较少',
          body: '平日通常比周末或公共假日宽松。加雅街（Gaya Street）周日市集会把部分游客引向附近区域；两者是不同活动。',
          items: ['平日', '加雅街周日'],
          note: '人潮无法保证',
        },
      ],
      tipsTitle: '💡 到访时间小贴士',
      tips: [
        '出发前查看天气预报与日落时间。',
        '大件物品先放回住宿，再继续游览。',
        '不要把列表时间当成每个摊位的保证。',
        '傍晚光线柔和、气温舒适，适合拍照。',
      ],
      faq: {
        eyebrow: '常见问题',
        title: 'FAQ · 最佳时间',
        intro: '关于时间、季节与到访情况的常见问题。',
        items: [
          {
            q: '市场几点开门？',
            a: 'Google 地图于 2026年10月19日核对显示每天 08:00–22:00。这是列表时间；手工艺与餐饮摊位可能不同，请以卖家或当天为准。',
          },
          {
            q: '周日营业吗？',
            a: '该市场区域按列表每天营业，但个别摊位可能关闭。加雅街周日市集是邻近的独立活动。',
          },
          {
            q: '下雨能去吗？',
            a: '可以，但请带伞；海滨步道可能湿滑。部分区域有遮蔽，但不是全室内。',
          },
          {
            q: '什么时候人最少？',
            a: '工作日上午通常较安静。傍晚散步也舒服，但部分摊位可能开始打烊。',
          },
          {
            q: '晚上去值得吗？',
            a: '列表时间到 22:00；傍晚至晚间通常仍在营业时段内，天气舒适且可拍日落。',
          },
        ],
      },
    },
  },

  // ───────────────────────────── NEW GUIDE 2 · AIRPORT TO MARKET ─────────────────────────────
  'airport-to-market': {
    ms: {
      meta: {
        title: 'Dari Lapangan Terbang ke Pasar Kraftangan KK | Grab, Bas & Berjalan',
        description:
          'Cara ke Pasar Kraftangan Kota Kinabalu dari lapangan terbang: Grab, bas bandar dan memandu sendiri, dengan titik turun dan nota tambang.',
      },
      eyebrow: 'Pengangkutan',
      h1: 'Dari Lapangan Terbang ke Pasar Kraftangan Kota Kinabalu',
      intro:
        'Lapangan Terbang Kota Kinabalu (BKI) terletak di barat daya bandar. Ke pasar di pusat bandar mengambil masa kira-kira 20–40 minit bergantung trafik. Cara di bawah ialah pilihan; tambang dan jadual semasa sahkan di lokasi.',
      noteLabel: 'Semak dengan pemandu / kaunter rasmi',
      blocks: [
        {
          heading: 'Jarak & anggaran masa',
          body: 'Jarak dari BKI ke pusat bandar adalah beberapa puluh kilometer; dengan trafik biasa anggaran 20–40 minit. Jangan anggap nombor tetap kerana trafik berubah.',
          items: ['BKI', '20–40 minit'],
          note: 'Anggaran, bukan jaminan',
        },
        {
          heading: 'Grab / e-hailing',
          body: 'Guna aplikasi dengan titik mula (lapangan terbang) dan pilih pin Pasar Kraftangan di Jalan Tun Fuad Stephen. Sahkan tambang dalam apl dan titik turun; simpan titik untuk perjalanan balik.',
          items: ['Pin Jalan Tun Fuad Stephen', 'Sahkan tambang'],
          note: 'Semak di apl',
        },
        {
          heading: 'Bas lapangan terbang / bas bandar',
          body: 'Terdapat pilihan bas, tetapi laluan dan waktu terakhir perlu disahkan dengan pengendali. Jangan anggap jadual tetap tanpa semakan.',
          items: ['Sahkan pengendali', 'Waktu terakhir'],
          note: 'Semak dengan pengendali',
        },
        {
          heading: 'Memandu sendiri & letak kereta',
          body: 'Pemandu sendiri boleh menyambung ke panduan parkir. Ambil perhatian jalan sehala dan papan tanda parkir di pusat bandar.',
          items: ['Jalan sehala', 'Rujuk panduan parkir'],
          note: 'Semak di lokasi',
        },
      ],
      tipsTitle: '💡 Petua Perjalanan',
      tips: [
        'Pergi pada waktu luar puncak lebih lancar.',
        'Kawasan tepi laut sesak pada hujung minggu.',
        'Simpan masa untuk perjalanan balik.',
        'Guna peta untuk titik turun sebenar.',
      ],
      faq: {
        eyebrow: 'Soalan Lazim',
        title: 'FAQ · Dari lapangan terbang',
        intro: 'Jawapan tentang jarak, Grab, bas dan titik turun.',
        items: [
          {
            q: 'Berapa jauh lapangan terbang ke pasar?',
            a: 'Beberapa puluh kilometer ke pusat bandar; anggaran perjalanan 20–40 minit bergantung trafik. Sahkan dengan apl atau pemandu.',
          },
          {
            q: 'Berapakah tambang Grab?',
            a: 'Tambang berubah mengikut permintaan dan trafik; sahkan dalam apl sebelum menaiki. Tiada angka tetap diberikan dalam panduan ini.',
          },
          {
            q: 'Adakah bas tersedia?',
            a: 'Terdapat pilihan bas lapangan terbang atau bas bandar, tetapi laluan dan waktu terakhir mesti disahkan dengan pengendali. Jangan anggap jadual tetap.',
          },
          {
            q: 'Di manakah titik turun?',
            a: 'Pilih pin Pasar Kraftangan di Jalan Tun Fuad Stephen. Simpan lokasi untuk perjalanan balik ke lapangan terbang.',
          },
          {
            q: 'Ada teksi pada waktu lewat malam?',
            a: 'Perkhidmatan bergantung kepada ketersediaan; rancang lebih awal dan sahkan di kaunter rasmi atau apl.',
          },
        ],
      },
    },
    en: {
      meta: {
        title: 'Kota Kinabalu Airport to Handicraft Market | Grab, Bus & Walking',
        description:
          'How to get from KK Airport (BKI) to Pasar Kraftangan on Jalan Tun Fuad Stephen: Grab/e-hailing, city bus and self-drive, with drop-off and fare notes.',
      },
      eyebrow: 'Transport',
      h1: 'Getting from Kota Kinabalu Airport to the Handicraft Market',
      intro:
        'Kota Kinabalu International Airport (BKI) sits southwest of the city. The market in the city centre is roughly a 20–40 minute drive depending on traffic. The options below are possibilities; confirm fares and schedules on the day.',
      noteLabel: 'Confirm with the driver / official counter',
      blocks: [
        {
          heading: 'Distance & rough travel time',
          body: 'BKI is some tens of kilometres from the city centre; with normal traffic expect roughly 20–40 minutes. Do not treat this as a fixed number because traffic varies.',
          items: ['BKI', '20–40 minutes'],
          note: 'Estimate, not a guarantee',
        },
        {
          heading: 'Grab / e-hailing',
          body: 'Use the app from the airport to the Pasar Kraftangan pin on Jalan Tun Fuad Stephen. Confirm the fare in-app and the drop-off point; save the point for your return.',
          items: ['Jalan Tun Fuad Stephen pin', 'Confirm fare'],
          note: 'Confirm in the app',
        },
        {
          heading: 'Airport bus / city bus',
          body: 'Bus options exist, but routes and last departures must be confirmed with the operator. Do not assume a fixed schedule without checking.',
          items: ['Confirm operator', 'Last departure'],
          note: 'Check with the operator',
        },
        {
          heading: 'Self-drive & parking',
          body: 'Drivers can continue to the parking guide. Note one-way streets and parking signs in the city centre.',
          items: ['One-way streets', 'See parking guide'],
          note: 'Check on the ground',
        },
      ],
      tipsTitle: '💡 Travel Tips',
      tips: [
        'Travelling off-peak is smoother.',
        'The waterfront area gets busy on weekends.',
        'Allow time for the return trip.',
        'Use the map for the actual drop-off point.',
      ],
      faq: {
        eyebrow: 'FAQ',
        title: 'FAQ · From the airport',
        intro: 'Answers about distance, Grab, buses and drop-off.',
        items: [
          {
            q: 'How far is the airport from the market?',
            a: 'Some tens of kilometres to the city centre; travel is roughly 20–40 minutes depending on traffic. Confirm with the app or driver.',
          },
          {
            q: 'How much is Grab?',
            a: 'Fares vary with demand and traffic; confirm in the app before boarding. No fixed figure is given in this guide.',
          },
          {
            q: 'Is there a bus?',
            a: 'Airport or city bus options exist, but routes and last departures must be confirmed with the operator. Do not assume a fixed schedule.',
          },
          {
            q: 'Where should I get dropped off?',
            a: 'Pick the Pasar Kraftangan pin on Jalan Tun Fuad Stephen. Save the location for your return to the airport.',
          },
          {
            q: 'Are late-night taxis available?',
            a: 'Availability depends on the service; plan ahead and confirm at the official counter or the app.',
          },
        ],
      },
    },
    zh: {
      meta: {
        title: '亚庇机场到手工艺品市场 | Grab、巴士与步行',
        description:
          '亚庇机场（BKI）到手工艺品市场（Jalan Tun Fuad Stephen）怎么走：Grab、市区巴士与自驾，含下车点与车资提示。',
      },
      eyebrow: '交通方式',
      h1: '亚庇机场到手工艺品市场的交通方式',
      intro:
        '亚庇国际机场（BKI）位于市区西南。市中心的市场车程约 20–40 分钟，视交通而定。以下为可行方式；实际车资与班次请当天确认。',
      noteLabel: '向司机或官方柜台确认',
      blocks: [
        {
          heading: '距离与大致车程',
          body: 'BKI 距市中心数十公里；正常交通下约 20–40 分钟。交通会变化，请勿当作固定数字。',
          items: ['BKI', '20–40 分钟'],
          note: '仅为估算',
        },
        {
          heading: 'Grab / 网约车',
          body: '在机场用 App 选择 Jalan Tun Fuad Stephen 的 Pasar Kraftangan 定位。先在 App 内确认车资与下车点；保存定位以便返程。',
          items: ['Jalan Tun Fuad Stephen 定位', '确认车资'],
          note: '以 App 为准',
        },
        {
          heading: '机场巴士 / 市区巴士',
          body: '有巴士可选，但路线与末班须向营运方确认。不要假设固定时刻表。',
          items: ['向营运方确认', '末班车'],
          note: '请向营运方核对',
        },
        {
          heading: '自驾与停车',
          body: '自驾者可接续停车指南。注意市中心的单行道与停车标志。',
          items: ['单行道', '参考停车指南'],
          note: '现场确认',
        },
      ],
      tipsTitle: '💡 交通小贴士',
      tips: [
        '避开高峰出行更顺畅。',
        '海滨区域周末较拥挤。',
        '预留返程时间。',
        '用地图确认实际下车点。',
      ],
      faq: {
        eyebrow: '常见问题',
        title: 'FAQ · 机场到市场',
        intro: '关于距离、Grab、巴士与下车点的常见问题。',
        items: [
          {
            q: '机场离市场多远？',
            a: '距市中心数十公里；车程约 20–40 分钟，视交通而定。请以 App 或司机为准。',
          },
          {
            q: 'Grab 大概多少？',
            a: '车资随需求与交通变化；上车前在 App 内确认。本指南不给出固定数字。',
          },
          {
            q: '有巴士吗？',
            a: '有机场或市区巴士可选，但路线与末班须向营运方确认。不要假设固定时刻表。',
          },
          {
            q: '在哪里下车？',
            a: '选择 Jalan Tun Fuad Stephen 的 Pasar Kraftangan 定位，并保存该位置以便返回机场。',
          },
          {
            q: '深夜还有车吗？',
            a: '取决于运力；请提前规划并在官方柜台或 App 确认。',
          },
        ],
      },
    },
  },

  // ───────────────────────────── NEW GUIDE 3 · SEAFOOD NEAR MARKET ─────────────────────────────
  'seafood-near-market': {
    ms: {
      meta: {
        title: 'Makanan Laut Berdekatan Pasar Kraftangan KK | Pilih & Elak Overpaid',
        description:
          'Kawasan pasar tepi laut ada gerai makanan laut. Pelajari cara semak harga mengikut berat, caj masakan dan kesegaran sebelum memesan — tiada restoran dipromosi.',
      },
      eyebrow: 'Makanan & Minuman',
      h1: 'Makanan Laut Sekitar Pasar Kraftangan Kota Kinabalu',
      intro:
        'Kawasan pasar tepi laut mempunyai gerai makanan. Halaman ini mengajar cara memilih dan bertanya harga (bukan mengesyorkan restoran tertentu), dengan prinsip sahkan harga dan caj sebelum memesan.',
      noteLabel: 'Sahkan harga & caj di gerai',
      blocks: [
        {
          heading: 'Di mana gerai makanan',
          body: 'Kawasan pasar bersebelahan laut mempunyai lorong makanan dan gerai. Pilih gerai yang sedang beroperasi; jenis dan harga berbeza.',
          items: ['Kawasan tepi laut', 'Gerai beroperasi'],
          note: 'Tidak mempromosi restoran',
        },
        {
          heading: 'Harga mengikut berat: sahkan dahulu',
          body: 'Makanan laut sering dikenakan mengikut berat atau bahagian. Tanya harga seunit atau setiap bahagian, caj masakan dan minuman sebelum memesan supaya tiada pertikaian semasa bayar.',
          items: ['Harga seunit', 'Caj masakan'],
          note: 'Sahkan sebelum pesan',
        },
        {
          heading: 'Jenis laut biasa & musim',
          body: 'Jenis lazim termasuk ikan, udang, ketam dan kerang. Sesuaikan dengan musim; panduan ini tidak menuliskan bulan tertentu.',
          items: ['Ikan', 'Udang', 'Ketam', 'Kerang'],
          note: 'Ikut musim semasa',
        },
        {
          heading: 'Julat bajet (RM)',
          body: 'Halaman ini menerangkan julat harga secara umum (berpatutan / sederhana) dan bukannya sebut harga tepat. Sahkan di gerai.',
          items: ['Julat umum', 'Sahkan di gerai'],
          note: 'Bukan sebut harga tepat',
        },
      ],
      tipsTitle: '💡 Petua Makan Laut',
      tips: [
        'Banding beberapa gerai sebelum memesan.',
        'Sahkan sama ada caj perkhidmatan atau cukai termasuk.',
        'Minta resit untuk pesanan besar.',
        'Semak pilihan halal jika perlu (rujuk panduan halal).',
      ],
      faq: {
        eyebrow: 'Soalan Lazim',
        title: 'FAQ · Makanan laut',
        intro: 'Jawapan tentang jenis, harga dan pilihan.',
        items: [
          {
            q: 'Adakah makanan laut mahal?',
            a: 'Harga berbeza mengikut jenis, berat dan penyediaan. Banding gerai dan sahkan harga sebelum memesan.',
          },
          {
            q: 'Bagaimana tidak dikenakan lebih?',
            a: 'Tanya harga seunit atau bahagian, caj masakan dan minuman terlebih dahulu, dan minta resit. Jangan anggap harga tetap tanpa pengesahan.',
          },
          {
            q: 'Ada buah segar?',
            a: 'Gerai minuman dan pencuci mulut berdekatan; buah segar lazim di pasar awam berdekatan.',
          },
          {
            q: 'Ada pilihan vegetarian?',
            a: 'Sesetengah gerai menyediakan sayur atau mi; sahkan dengan gerai. Untuk pilihan khusus, rujuk panduan vegetarian.',
          },
          {
            q: 'Boleh tawar?',
            a: 'Sesetengah gerai fleksibel; banding dan tanya secara sopan. Tiada diskaun dijamin.',
          },
        ],
      },
    },
    en: {
      meta: {
        title: 'Seafood Near Pasar Kraftangan KK | How to Choose & Avoid Overpaying',
        description:
          'The waterfront market area has seafood stalls. Learn how to check per-weight price, cooking charges and freshness before ordering — no specific restaurant promoted.',
      },
      eyebrow: 'Food & Drink',
      h1: 'Eating Seafood Around the Kota Kinabalu Handicraft Market',
      intro:
        'The waterfront market area has food stalls. This page teaches how to choose and ask about price (not recommending any specific stall), following the principle of confirming price and charges before ordering.',
      noteLabel: 'Confirm price & charges at the stall',
      blocks: [
        {
          heading: 'Where the food stalls are',
          body: 'The market area by the sea has a food lane and stalls. Pick a stall that is operating; types and prices differ.',
          items: ['Waterfront area', 'Operating stall'],
          note: 'No restaurant promoted',
        },
        {
          heading: 'Price by weight: confirm before ordering',
          body: 'Seafood is often charged by weight or portion. Ask the unit or per-portion price, cooking charge and drinks before ordering so there is no dispute at payment.',
          items: ['Unit price', 'Cooking charge'],
          note: 'Confirm before ordering',
        },
        {
          heading: 'Common seafood types & season',
          body: 'Common types include fish, prawns, crab and shellfish. Match the season; this guide does not pin a specific month.',
          items: ['Fish', 'Prawns', 'Crab', 'Shellfish'],
          note: 'Follow the current season',
        },
        {
          heading: 'Budget expectations (RM)',
          body: 'This page describes a general price range (affordable / moderate) rather than an exact quote. Confirm at the stall.',
          items: ['General range', 'Confirm at stall'],
          note: 'Not an exact quote',
        },
      ],
      tipsTitle: '💡 Seafood Tips',
      tips: [
        'Compare a few stalls before ordering.',
        'Confirm whether service tax or charges are included.',
        'Ask for a receipt for larger orders.',
        'Check halal options if needed (see the halal guide).',
      ],
      faq: {
        eyebrow: 'FAQ',
        title: 'FAQ · Seafood',
        intro: 'Answers about types, price and options.',
        items: [
          {
            q: 'Is seafood expensive?',
            a: 'Prices vary by type, weight and preparation. Compare stalls and confirm before ordering.',
          },
          {
            q: 'How do I avoid overpaying?',
            a: 'Ask the unit or per-portion price, cooking charge and drinks first, then request a receipt. Do not assume a fixed price without confirmation.',
          },
          {
            q: 'Is fresh fruit available?',
            a: 'Nearby drinks and dessert stalls exist; fresh fruit is common at the neighbouring public market.',
          },
          {
            q: 'Are vegetarian options available?',
            a: 'Some stalls prepare vegetables or noodles; confirm with the stall. For specific needs, see the vegetarian guide.',
          },
          {
            q: 'Can I bargain?',
            a: 'Some stalls are flexible; compare and ask politely. No discount is guaranteed.',
          },
        ],
      },
    },
    zh: {
      meta: {
        title: '亚庇手工艺品市场周边海鲜 | 如何挑选与避免被宰',
        description:
          '海滨市场区有海鲜摊位。学会点餐前确认按重量计价、加工费与新鲜度——不推荐任何特定餐厅。',
      },
      eyebrow: '餐饮指南',
      h1: '亚庇手工艺品市场周边海鲜怎么吃',
      intro:
        '海滨市场区设有餐饮摊位。本页教你如何挑选与询价（不推荐任何特定摊位），遵循点餐前先确认价格与费用的原则。',
      noteLabel: '在摊位确认价格与费用',
      blocks: [
        {
          heading: '餐饮摊位在哪里',
          body: '临海的市场区域设有美食街与摊位。选择正在营业的摊位；种类与价格各异。',
          items: ['海滨区域', '营业中摊位'],
          note: '不推荐任何餐厅',
        },
        {
          heading: '按重量计价：点餐前先确认',
          body: '海鲜常按重量或份计价。点餐前询问单价或每份价格、加工费与饮品，避免结账时产生争议。',
          items: ['单价', '加工费'],
          note: '点餐前先确认',
        },
        {
          heading: '常见海鲜种类与季节',
          body: '常见种类包括鱼、虾、蟹与贝类。请配合当季；本指南不写死具体月份。',
          items: ['鱼', '虾', '蟹', '贝类'],
          note: '以当季为准',
        },
        {
          heading: '预算区间（RM）',
          body: '本页以概括价格区间（平价／中价）说明，而非精确报价。请以摊位为准。',
          items: ['概括区间', '以摊位为准'],
          note: '非精确报价',
        },
      ],
      tipsTitle: '💡 海鲜小贴士',
      tips: [
        '点餐前先比较几家摊位。',
        '确认是否已含服务费或税费。',
        '大额订单索取收据。',
        '如需清真选择，请查看清真指南。',
      ],
      faq: {
        eyebrow: '常见问题',
        title: 'FAQ · 海鲜',
        intro: '关于种类、价格与选择的常见问题。',
        items: [
          {
            q: '海鲜贵吗？',
            a: '价格随种类、重量与做法而异。请比较摊位并在点餐前确认。',
          },
          {
            q: '怎么避免被多收？',
            a: '先问清单价或每份价格、加工费与饮品，再索取收据。未经确认不要假定固定价格。',
          },
          {
            q: '有新鲜水果吗？',
            a: '附近有饮品与甜点摊位；新鲜水果常见于邻近的公立市场。',
          },
          {
            q: '有素食选择吗？',
            a: '部分摊位提供蔬菜或面食；请向摊位确认。特定需求可参考素食指南。',
          },
          {
            q: '可以议价吗？',
            a: '部分摊位较灵活；先比较再礼貌询问。不保证有折扣。',
          },
        ],
      },
    },
  },

  // ───────────────────────────── NEW GUIDE 4 · ATKINSON CLOCK TOWER ─────────────────────────────
  'atkinson-clock-tower': {
    ms: {
      meta: {
        title: 'Menara Jam Atkinson KK | Sejarah & Berjalan dari Pasar',
        description:
          'Menara Jam Atkinson: salah satu tinggalan era penjajah di Kota Kinabalu. Panduan sejarah dan berjalan kaki dari Pasar Kraftangan, dengan nota lawatan.',
      },
      eyebrow: 'Tempat Menarik',
      h1: 'Menara Jam Atkinson: Sejarah & Berjalan Kaki dari Pasar Kraftangan',
      intro:
        'Menara Jam Atkinson adalah antara tinggalan zaman British yang masih ada di Kota Kinabalu, dalam jarak berjalan kaki dari pasar. Halaman ini memberi latar belakang sejarah dan laluan tanpa panduan dalaman (hanya luaran).',
      noteLabel: 'Sahkan dengan sumber sejarah rasmi',
      blocks: [
        {
          heading: 'Apa ia & sedikit sejarah',
          body: 'Menara ini dibina pada awal abad ke-20 sebagai tanda peringatan; ia terselamat daripada Perang Dunia Kedua. Anggap butiran sebagai rujukan; sahkan dengan sumber sejarah rasmi.',
          items: ['Awal abad ke-20', 'Tinggalan British'],
          note: 'Rujuk sumber rasmi',
        },
        {
          heading: 'Lokasi & berjalan dari pasar',
          body: 'Jarak berjalan kaki dari pasar; laluan melalui tepi laut dan jalan lama. Sambung dengan panduan waterfront dan bangunan kolonial.',
          items: ['Berjalan kaki', 'Tepi laut'],
          note: 'Guna peta sebenar',
        },
        {
          heading: 'Nota lawatan',
          body: 'Ini biasanya kawasan terbuka atau taman; akses dalaman tidak dijamin. Bawa pakaian sesuai dan pelindung matahari.',
          items: ['Kawasan terbuka', 'Pelindung matahari'],
          note: 'Tidak dijamin akses dalaman',
        },
      ],
      tipsTitle: '💡 Petua Lawatan',
      tips: [
        'Pagi atau petang memberi cahaya foto yang baik.',
        'Gabung dengan Central Market dan waterfront untuk berjalan 1–2 jam.',
        'Semak cuaca sebelum berjalan jauh.',
        'Bawa air dan topi.',
      ],
      faq: {
        eyebrow: 'Soalan Lazim',
        title: 'FAQ · Menara Jam Atkinson',
        intro: 'Jawapan tentang lokasi, akses dan lawatan.',
        items: [
          {
            q: 'Di manakah lokasinya?',
            a: 'Dalam jarak berjalan kaki dari Pasar Kraftangan, melalui tepi laut dan jalan lama. Gunakan pautan peta untuk arah sebenar.',
          },
          {
            q: 'Berapa lama berjalan?',
            a: 'Beberapa minit dari pasar bergantung laluan; sahkan dengan peta.',
          },
          {
            q: 'Boleh masuk ke dalam?',
            a: 'Tidak dijamin; ini biasanya dilihat dari luar sebagai tinggalan atau taman. Jangan anggap akses dalaman dibuka.',
          },
          {
            q: 'Percuma?',
            a: 'Kawasan terbuka biasanya tiada bayaran, tetapi sahkan di lokasi.',
          },
          {
            q: 'Masa foto terbaik?',
            a: 'Pagi dan petang memberi cahaya lembut dan suhu lebih selesa.',
          },
        ],
      },
    },
    en: {
      meta: {
        title: 'Atkinson Clock Tower KK | History & Walk from the Market',
        description:
          'Atkinson Clock Tower: one of Kota Kinabalu’s surviving colonial-era relics. History and a walking route from the Handicraft Market, with visit notes.',
      },
      eyebrow: 'Nearby Attraction',
      h1: 'Atkinson Clock Tower: History & a Walk from the Handicraft Market',
      intro:
        'The Atkinson Clock Tower is among the British-era relics that survive in Kota Kinabalu, within walking distance of the market. This page gives historical background and a route, viewed from outside only.',
      noteLabel: 'Confirm with the official historical source',
      blocks: [
        {
          heading: 'What it is & brief history',
          body: 'The tower was built in the early 20th century as a memorial; it survived World War II. Treat details as references and confirm with the official historical source.',
          items: ['Early 20th century', 'British-era relic'],
          note: 'Cross-check official source',
        },
        {
          heading: 'Location & walk from the market',
          body: 'It is a walk from the market; the route passes the waterfront and old streets. Continue with the waterfront and colonial-buildings guides.',
          items: ['Walking distance', 'Via waterfront'],
          note: 'Use the actual map',
        },
        {
          heading: 'Visiting notes',
          body: 'This is usually an open-area or park setting; interior access is not guaranteed. Wear suitable clothing and sun protection.',
          items: ['Open area', 'Sun protection'],
          note: 'Interior not guaranteed',
        },
      ],
      tipsTitle: '💡 Visit Tips',
      tips: [
        'Mornings or evenings give good photo light.',
        'Combine with Central Market and the waterfront for a 1–2 hour walk.',
        'Check the weather before a long walk.',
        'Bring water and a hat.',
      ],
      faq: {
        eyebrow: 'FAQ',
        title: 'FAQ · Atkinson Clock Tower',
        intro: 'Answers about location, access and visiting.',
        items: [
          {
            q: 'Where is it?',
            a: 'Within walking distance of the Handicraft Market, via the waterfront and old streets. Use the map link for actual directions.',
          },
          {
            q: 'How long is the walk?',
            a: 'A few minutes from the market depending on the route; confirm with the map.',
          },
          {
            q: 'Can I go inside?',
            a: 'Not guaranteed; it is usually viewed from outside as a relic or park. Do not assume interior access is open.',
          },
          {
            q: 'Is it free?',
            a: 'Open-area sites usually have no fee, but confirm on the ground.',
          },
          {
            q: 'Best photo time?',
            a: 'Mornings and evenings give soft light and more comfortable temperatures.',
          },
        ],
      },
    },
    zh: {
      meta: {
        title: '艾京生钟楼 | 历史与从市场步行前往',
        description:
          '艾京生钟楼：亚庇少数幸存的英治时代遗迹。历史背景与从手工艺品市场步行的路线，含参观提示。',
      },
      eyebrow: '周边景点',
      h1: '艾京生钟楼：历史与从手工艺品市场步行',
      intro:
        '艾京生钟楼是亚庇少数幸存的英治时代遗迹，距市场步行可达。本页提供历史背景与路线，仅作外部观赏。',
      noteLabel: '以官方史料来源确认',
      blocks: [
        {
          heading: '简介与历史',
          body: '钟楼建于 20 世纪初，作为纪念；它在二战中幸存。细节仅供参考，请以官方史料确认。',
          items: ['20 世纪初', '英治遗迹'],
          note: '请核对官方来源',
        },
        {
          heading: '位置与从市场步行',
          body: '距市场步行可达，路线经过海滨与老街。可接续海滨与殖民地建筑指南。',
          items: ['步行可达', '经海滨'],
          note: '以实际地图为准',
        },
        {
          heading: '参观提示',
          body: '通常为开放区域或公园；内部是否开放无法保证。请穿着合适并防晒。',
          items: ['开放区域', '防晒'],
          note: '内部开放不保证',
        },
      ],
      tipsTitle: '💡 参观小贴士',
      tips: [
        '清晨或傍晚光线适合拍照。',
        '可与中央市场、海滨串联成 1–2 小时散步。',
        '长途步行前查看天气。',
        '带水与帽子。',
      ],
      faq: {
        eyebrow: '常见问题',
        title: 'FAQ · 艾京生钟楼',
        intro: '关于位置、进入与参观的常见问题。',
        items: [
          {
            q: '在哪里？',
            a: '距手工艺品市场步行可达，经海滨与老街。请用地图链接确认实际方向。',
          },
          {
            q: '步行多久？',
            a: '从市场步行约数分钟，视路线而定；请以地图确认。',
          },
          {
            q: '可以进入内部吗？',
            a: '不保证；通常作为遗迹或公园从外部观赏。不要假定内部开放。',
          },
          {
            q: '免费吗？',
            a: '开放区域通常无费用，但请在现场确认。',
          },
          {
            q: '最佳拍照时间？',
            a: '清晨与傍晚光线柔和、气温更舒适。',
          },
        ],
      },
    },
  },

  // ───────────────────────────── NEW GUIDE 5 · HALF-DAY ITINERARY ─────────────────────────────
  'half-day-itinerary': {
    ms: {
      meta: {
        title: 'Rancangan Separuh Hari KK | Pasar Kraftangan, Waterfront & Pasar',
        description:
          'Susunan 4 jam yang fleksibel: Pasar Kraftangan, laluan waterfront dan Central Market, dengan masa, pengangkutan dan pautan rasmi.',
      },
      eyebrow: 'Rancangan Perjalanan',
      h1: 'Rancangan Separuh Hari di Sekitar Pasar Kraftangan',
      intro:
        'Susunan 4 jam yang fleksibel untuk pelawat yang ketat masa. Sahkan waktu gerai, cuaca dan bot (jika ke Jesselton Point) pada hari perjalanan.',
      noteLabel: 'Semak keadaan semasa',
      blocks: [
        {
          heading: 'Susunan 4 jam',
          body: '① Pasar Kraftangan 1.5j (gerai sasaran dahulu) ② waterfront 0.5j (petang terbaik) ③ Central Market 1j (pagi paling meriah) ④ rehat/makan 1j.',
          items: ['Pasar 1.5j', 'Waterfront 0.5j', 'Central 1j'],
          note: 'Cadangan fleksibel',
        },
        {
          heading: 'Masa setiap hentian',
          body: 'Setiap hentian ada cadangan masa dan sebab susunan. Simpan barang besar di hotel sebelum meneruskan.',
          items: ['Susunan', 'Simpan di hotel'],
          note: 'Semak keadaan semasa',
        },
        {
          heading: 'Pengangkutan & pulang',
          body: 'Guna Grab/berjalan; simpan masa untuk perjalanan pulang. Jika ke pulau, rujuk Jesselton Point secara berasingan.',
          items: ['Grab/berjalan', 'Jesselton Point'],
          note: 'Semak keadaan semasa',
        },
      ],
      tipsTitle: '💡 Petua Separuh Hari',
      tips: [
        'Jangan anggap semua gerai buka serentak.',
        'Waktu petang sesuai foto senja.',
        'Simpan masa untuk rehat dan pulang.',
        'Jika hujan, rujuk panduan hari hujan.',
      ],
      faq: {
        eyebrow: 'Soalan Lazim',
        title: 'FAQ · Separuh hari',
        intro: 'Jawapan tentang masa, susunan dan cuaca.',
        items: [
          {
            q: 'Adakah 4 jam mencukupi?',
            a: 'Ya untuk gambaran umum; pelawat yang mahu membeli banyak mungkin perlu lebih masa.',
          },
          {
            q: 'Sesuai dengan kanak-kanak?',
            a: 'Ya, kawasan terbuka dan berdekatan laut sesuai; bawa air dan teduhan.',
          },
          {
            q: 'Bagaimana sambung Central Market?',
            a: 'Berjalan singkat dari pasar; sahkan waktu gerai awam.',
          },
          {
            q: 'Bagaimana jika hari Ahad?',
            a: 'Pasar Ahad di Gaya Street berdekatan; rancang mengikut minat.',
          },
          {
            q: 'Bagaimana jika hujan?',
            a: 'Rujuk panduan hari hujan untuk pilihan tertutup.',
          },
        ],
      },
    },
    en: {
      meta: {
        title: 'Kota Kinabalu Half-Day Itinerary | Handicraft Market + Waterfront',
        description:
          'A flexible 4-hour KK city plan: Handicraft Market, waterfront promenade and Central Market, with timing, transport and official references.',
      },
      eyebrow: 'Itinerary',
      h1: 'A Half-Day City Plan Around the Handicraft Market',
      intro:
        'A flexible 4-hour order for time-tight visitors. Check stall hours, weather and boats (if going to Jesselton Point) on the day.',
      noteLabel: 'Check current conditions',
      blocks: [
        {
          heading: 'Sample 4-hour order',
          body: '① Handicraft Market 1.5h (target stalls first) ② waterfront 0.5h (best late afternoon) ③ Central Market 1h (busiest in the morning) ④ rest/meal 1h.',
          items: ['Market 1.5h', 'Waterfront 0.5h', 'Central 1h'],
          note: 'Flexible suggestion',
        },
        {
          heading: 'Timing per stop',
          body: 'Each stop has a suggested duration and the reason for its place in the order. Leave bulky purchases at the hotel before continuing.',
          items: ['Order', 'Store at hotel'],
          note: 'Check current conditions',
        },
        {
          heading: 'Transport & return',
          body: 'Use Grab/walking; allow time for the return. If island-bound, see Jesselton Point separately.',
          items: ['Grab/walking', 'Jesselton Point'],
          note: 'Check current conditions',
        },
      ],
      tipsTitle: '💡 Half-Day Tips',
      tips: [
        'Do not assume every stall opens at once.',
        'Late afternoon suits sunset photos.',
        'Allow time for rests and the return.',
        'If it rains, see the rainy-day guide.',
      ],
      faq: {
        eyebrow: 'FAQ',
        title: 'FAQ · Half-day plan',
        intro: 'Answers about time, order and weather.',
        items: [
          {
            q: 'Is 4 hours enough?',
            a: 'Yes for an overview; visitors who want to buy a lot may need more time.',
          },
          {
            q: 'Good with kids?',
            a: 'Yes, the open area near the sea suits families; bring water and shade.',
          },
          {
            q: 'How do I connect to Central Market?',
            a: 'A short walk from the market; confirm public-stall hours.',
          },
          {
            q: 'What if it is Sunday?',
            a: 'The Gaya Street Sunday Market is nearby; plan by interest.',
          },
          {
            q: 'What if it rains?',
            a: 'See the rainy-day guide for covered options.',
          },
        ],
      },
    },
    zh: {
      meta: {
        title: '亚庇半日游行程 | 手工艺品市场 + 海滨',
        description:
          '弹性 4 小时市区方案：手工艺品市场、海滨步道与中央市场，含时间安排、交通与官方参考。',
      },
      eyebrow: '行程规划',
      h1: '手工艺品市场周边的半日游行程',
      intro:
        '为时间紧凑的旅客设计的弹性 4 小时顺序。出发当天请核对摊位时间、天气与船班（若前往 Jesselton Point）。',
      noteLabel: '以当天情况为准',
      blocks: [
        {
          heading: '示例 4 小时顺序',
          body: '① 手工艺品市场 1.5 小时（先逛目标摊位） ② 海滨 0.5 小时（傍晚最佳） ③ 中央市场 1 小时（清晨最旺） ④ 休息／用餐 1 小时。',
          items: ['市场 1.5h', '海滨 0.5h', '中央 1h'],
          note: '弹性建议',
        },
        {
          heading: '各站时间',
          body: '每站有建议时长与排序理由。大件物品先送回酒店再继续。',
          items: ['顺序', '寄存酒店'],
          note: '以当天情况为准',
        },
        {
          heading: '交通与返程',
          body: '使用 Grab／步行；预留返程时间。若要去离岛，请单独参考 Jesselton Point。',
          items: ['Grab／步行', 'Jesselton Point'],
          note: '以当天情况为准',
        },
      ],
      tipsTitle: '💡 半日游小贴士',
      tips: [
        '不要假设所有摊位同时开门。',
        '傍晚适合拍日落。',
        '预留休息与返程时间。',
        '若下雨，参阅雨天指南。',
      ],
      faq: {
        eyebrow: '常见问题',
        title: 'FAQ · 半日行程',
        intro: '关于时间、顺序与天气的常见问题。',
        items: [
          {
            q: '4 小时够吗？',
            a: '作为概览足够；想大量购物的人可能需要更多时间。',
          },
          {
            q: '适合带小孩吗？',
            a: '适合，临海开放区域适合家庭；请带水与遮阳。',
          },
          {
            q: '怎么串中央市场？',
            a: '从市场步行不远；请确认公立摊位时间。',
          },
          {
            q: '如果是周日呢？',
            a: '加雅街周日市集在附近；按兴趣安排。',
          },
          {
            q: '如果下雨？',
            a: '参阅雨天指南中的遮蔽选项。',
          },
        ],
      },
    },
  },
};
