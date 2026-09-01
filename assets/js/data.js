/* ============================================================
   data.js — SINGLE SOURCE OF TRUTH · IWHM 2026 (Jakarta Series)
   Semua angka event (tanggal, harga, kuota, hadiah) hidup di sini.
   JANGAN hardcode nilai-nilai ini di file HTML manapun (§1.7).

   Sumber A: deck sponsorship IWHM (36 hal., nama file diredaksi — §1.4)
   Sumber B: konfirmasi langsung klien, 31 Agustus 2026
   Nilai null = belum ada di sumber → UI render badge TBC.
   Lihat FACT-LEDGER.md untuk pemetaan tiap fakta ke halaman.
   ============================================================ */
(function () {
  'use strict';

  var LANG = (location.pathname.indexOf('/en/') !== -1) ? 'en' : 'id';

  // ✅ Tanggal & venue DIKONFIRMASI klien — koreksi terbaru menggantikan
  // konfirmasi 31 Agu 2026 (yang sempat menyebut 29 Nov/Plaza Barat, kini
  // TIDAK BERLAKU). Race day final: 22 November 2026, Plaza Parkir Timur.
  var EVENT = {
    raceDayISO:       '2026-11-22T04:00:00+07:00',
    raceDayConfirmed: true,
    raceDay:  { id: 'Minggu, 22 November 2026', en: 'Sunday, 22 November 2026' },
    hours:    { id: '04.00 – 10.00 WIB',        en: '04:00 – 10:00 WIB' },
    venue:    { id: 'Plaza Parkir Timur, GBK Senayan, Jakarta',
                en: 'Plaza Parkir Timur, GBK Senayan, Jakarta' },
    venueConfirmed: true,
    venueNote: { id: 'Venue dapat berubah.', en: 'Venue is subject to change.' },
    quota: 4000,
    quotaLabel: { id: '4.000', en: '4,000' },
    ageRange: '17–45',
    communities: '45++',
    networkReach: { id: '6.000++ orang', en: '6,000++ people' }, // §3.8, halaman partner saja
    theme:    { id: null, en: 'Continuing the Movement, Redefining the Journey' },
    hashtag:  '#UnstoppableHerJourney',

    // §3.10 — teks resmi dari klien (31 Agu 2026). FINAL, jangan diubah.
    description: {
      id: 'Indonesia Women Half Marathon (IWHM) adalah event lari perempuan yang merayakan kekuatan, ketangguhan, dan kebersamaan. Dengan kategori 5K, 10K, dan Half Marathon, IWHM mengajak perempuan untuk menantang diri, saling menguatkan, dan tumbuh bersama.',
      en: 'Indonesia Women Half Marathon (IWHM) is a women\'s running event that celebrates strength, resilience, and unity. With 5K, 10K, and Half Marathon categories, the event encourages women to challenge themselves, support each other, and grow together.'
    },

    // §9.3 — DRAFT-COPY, menunggu approval klien (opsi utama dipakai; opsi
    // alternatif ada di QUESTIONS.md §13 no.17).
    // Disimpan sebagai array baris agar pemenggalan baris dikontrol dari data,
    // bukan dari <br> di HTML. Tiap elemen dirender jadi <span> blok via
    // textContent (lihat bindData di main.js). Titik potong EN mengikuti alur
    // kalimat Inggris, bukan meniru posisi potong ID.
    heroHeadline: {
      id: ['Sebelum matahari terbit,', 'Senayan sudah bergerak.'],
      en: ['Before sunrise,', 'Senayan is already moving.']
    },
    heroSub: {
      id: 'Indonesia Women Half Marathon 2026 — 5K, 10K, dan Half Marathon. Sebuah perayaan kekuatan, ketangguhan, dan kebersamaan.',
      en: 'Indonesia Women Half Marathon 2026 — 5K, 10K, and Half Marathon. A celebration of strength, resilience, and unity.'
    },
    introText: {
      id: 'IWHM adalah event lari perempuan dengan tiga kategori — 5K, 10K, dan Half Marathon. Ketiganya berangkat dari premis yang sama: perjalanan seorang pelari dimulai jauh sebelum garis start, dan tidak pernah benar-benar ditempuh sendirian.',
      en: 'IWHM is a women\'s running event with three categories — 5K, 10K, and Half Marathon. All three begin from the same premise: a runner\'s journey starts long before the start line, and is never really run alone.'
    }
  };

  // Domain final BELUM ada (§13 no.4, blocking). Dipakai untuk hreflang & JSON-LD
  // sementara — GANTI begitu domain kustom tersedia.
  var SITE_URL = 'https://website-iwhm-production.up.railway.app';

  var REGISTRATION_URL  = null;               // TODO: URL pendaftaran resmi (§13 no.2)
  // Tanggal pembukaan registrasi BELUM ditentukan — jangan isi tebakan apa pun
  // (klien mengoreksi klaim "Agustus 2026" sebelumnya, itu salah).

  // Link unduh aplikasi 20FIT — KANDIDAT, BELUM DIKONFIRMASI klien. Listing
  // App Store menyebut merek lain, kemungkinan app lama/berbeda dari 20FIT.
  // JANGAN publikasikan sebagai final tanpa verifikasi klien.
  var APP_LINKS = {
    googlePlay: 'https://play.google.com/store/apps/details?id=com.twentyfit.indonesia',
    appStore: 'https://apps.apple.com/app/id1475504793'
  };

  // distanceKm: Half Marathon = 21 KM menurut definisi (21,0975 km, dibulatkan
  // "21 KM" untuk konsisten dengan 10K/5K). Yang masih TBC adalah RUTE dan
  // CUT-OFF TIME, bukan jaraknya (§13 no.7 = cut-off, bukan jarak).
  // tagline = §9.5 (DRAFT-COPY). desc = deskripsi faktual deck §3.3, diterjemahkan
  // apa adanya ke ID untuk paritas bahasa — bukan fakta baru, hanya lokalisasi.
  var CATEGORIES = [
    { key: 'hm', name: 'HM', fullName: { id: 'Half Marathon', en: 'Half Marathon' },
      distanceKm: 21, cot: null, accent: 'violet',
      tagline: { id: 'Jarak yang menuntut kamu hadir jauh sebelum hari lombanya.',
                 en: 'The distance that asks you to show up months before race day.' },
      desc: {
        id: 'Dirancang untuk pelari yang siap menempuh jarak penuh. Rasakan perjalanan lengkap dari kekuatan, fokus, dan pencapaian di rute yang terukur secara profesional.',
        en: 'Designed for committed runners ready to go the distance. Experience the full journey of strength, focus, and accomplishment on a professionally measured route.'
      } },
    { key: '10k', name: '10K', fullName: { id: '10K', en: '10K' },
      distanceKm: 10, cot: null, accent: 'magenta',
      tagline: { id: 'Cukup jauh untuk terasa, cukup dekat untuk dikejar.',
                 en: 'Far enough to feel it. Close enough to chase.' },
      desc: {
        id: 'Untuk pelari yang mencari perpaduan seimbang antara daya tahan dan kecepatan. Uji batasmu dan rasakan sensasi kemajuan pribadi di rute yang hidup dan menginspirasi.',
        en: 'For runners seeking a balanced mix of endurance and speed. Push your limits and feel the thrill of personal progress on a vibrant and inspiring course.'
      } },
    { key: '5k', name: '5K', fullName: { id: '5K', en: '5K' },
      distanceKm: 5, cot: null, accent: 'citrus',
      tagline: { id: 'Jarak pertama, atau jarak yang paling ramai.',
                 en: 'The first distance — or the loudest one.' },
      desc: {
        id: 'Awal yang pas untuk pelari pemula atau siapa pun yang ingin menikmati lari penuh semangat bersama teman. Rayakan gerak, kepercayaan diri, dan kebersamaan dalam suasana yang suportif.',
        en: 'A perfect start for first-time runners or those looking to enjoy a spirited run with friends. Celebrate movement, confidence, and community in a supportive environment.'
      } }
  ];

  // Harga & periode TIDAK ADA di deck (§13 no.1, no.13). price:null → "Segera diumumkan".
  var TICKETS = [
    { key: 'partner-presale', name: { id: 'Partner Exclusive Pre-Sale', en: 'Partner Exclusive Pre-Sale' },
      discount: 40, price: null, period: null, hidden: true },
    { key: 'super-early', name: { id: 'Super Early Bird', en: 'Super Early Bird' },
      discount: 35, price: null, period: null,
      audience: { id: 'Peserta IWHM 2025', en: 'IWHM 2025 participants' } },
    { key: 'early', name: { id: 'Early Bird', en: 'Early Bird' },
      discount: 30, price: null, period: null,
      audience: { id: 'Publik, periode terbatas', en: 'Public, limited period' } },
    { key: 'general', name: { id: 'General Sales', en: 'General Sales' },
      discount: 0, price: null, period: null,
      audience: { id: 'Publik', en: 'Public' } },
    { key: 'partnership', name: { id: 'Partnership Program', en: 'Partnership Program' },
      discount: 20, price: null, period: null,
      audience: { id: 'Komunitas, influencer, media partner', en: 'Communities, influencers, media partners' } }
  ];

  // CATATAN — Section "Timeline perjalanan event" DIHAPUS (lihat PR).
  //  • Entri "Agustus 2026 · Kick Off & Press Conference" adalah kemunculan
  //    ke-3 klaim tanggal Agustus 2026 (setelah modal CTA & kartu berita).
  //  • Tanggal buka registrasi BELUM ditentukan — jangan tambahkan entri
  //    "Open Registration" bertanggal apa pun.
  // Jadwal race weekend yang nyata/terkonfirmasi ada di WEEKEND di bawah,
  // dipakai baik di Beranda maupun halaman Jadwal.

  // Ringkasan race weekend (dipakai di Beranda & halaman Jadwal).
  // confirmed:false → render badge TBC, jam/tanggal RPC & Shake Out Run belum final.
  var WEEKEND = [
    { key: 'rpc', title: { id: 'Race Pack Collection', en: 'Race Pack Collection' },
      when: { id: '20–21 Nov 2026 (jam menyusul)', en: '20–21 Nov 2026 (time TBC)' }, confirmed: false,
      where: { id: 'Menteng Prada, Jakarta Pusat', en: 'Menteng Prada, Central Jakarta' } },
    { key: 'shakeout', title: { id: 'Shake Out Run', en: 'Shake Out Run' },
      when: { id: '21 Nov 2026 (jam menyusul)', en: '21 Nov 2026 (time TBC)' }, confirmed: false,
      where: { id: 'Menteng Prada, Jakarta Pusat', en: 'Menteng Prada, Central Jakarta' } },
    { key: 'raceday', title: { id: 'Race Day', en: 'Race Day' },
      when: { id: '22 Nov · 04.00–10.00 WIB', en: '22 Nov · 04:00–10:00 WIB' }, confirmed: true,
      where: { id: 'Plaza Parkir Timur, GBK Senayan', en: 'Plaza Parkir Timur, GBK Senayan' } }
  ];

  // Berita — KOSONG. Dua kartu sebelumnya adalah placeholder fiktif dengan
  // tanggal karangan; salah satunya menjanjikan tanggal buka registrasi yang
  // belum ditentukan. Dihapus, bukan diganti berita fiktif lain.
  // Isi lagi hanya kalau ada berita resmi yang benar-benar bisa diklaim.
  var NEWS = [];
  var NEWS_EMPTY = { id: 'Belum ada berita.', en: 'No news yet.' };

  var PARTNERS = [];       // kosong sampai sponsorship dikonfirmasi (§13 no.3)

  // Podium — sama untuk ketiga kategori, deck tidak membedakan (hal.34).
  var PODIUM = {
    tiers: ['open', 'master'],
    tierLabel: { open: { id: 'Open', en: 'Open' }, master: { id: 'Master', en: 'Master' } },
    places: 3,
    masterAgeFrom: null,   // TODO §13 no.9
    prize: null            // TODO §13 no.10
  };

  // Race Pack Collection & Race Village (§3.7, hal.25/31).
  var FACILITIES = {
    rpc: [
      { id: 'Sports apparel & equipment pop-up store', en: 'Sports apparel & equipment pop-up store' },
      { id: 'Culinary tenant', en: 'Culinary tenant' },
      { id: 'Sports treatment', en: 'Sports treatment' },
      { id: 'Beauty treatment', en: 'Beauty treatment' },
      { id: 'Photo spot', en: 'Photo spot' },
      { id: 'Beauty pop-up corner', en: 'Beauty pop-up corner' }
    ],
    village: [
      { id: 'Sports apparel & equipment pop-up store', en: 'Sports apparel & equipment pop-up store' },
      { id: 'Culinary tenant', en: 'Culinary tenant' },
      { id: 'Entertainment', en: 'Entertainment' },
      { id: 'Recovery area', en: 'Recovery area' },
      { id: 'Interactive booth', en: 'Interactive booth' },
      { id: 'Photo spot', en: 'Photo spot' }
    ]
  };

  // Peraturan & Ketentuan — TIDAK ADA satupun teks resmi di deck (§7.8).
  // Render judul bab saja + badge "Menunggu naskah resmi". Jangan isi badan teks.
  var RULES_SECTIONS = [
    { key: 'eligibility', title: { id: 'Kelayakan Peserta', en: 'Participant Eligibility' } },
    { key: 'age-verification', title: { id: 'Verifikasi Usia', en: 'Age Verification' } },
    { key: 'bib-transfer', title: { id: 'Transfer BIB', en: 'BIB Transfer' } },
    { key: 'refund', title: { id: 'Kebijakan Refund', en: 'Refund Policy' } },
    { key: 'prohibited', title: { id: 'Larangan', en: 'Prohibited Actions' } },
    { key: 'disqualification', title: { id: 'Diskualifikasi', en: 'Disqualification' } },
    { key: 'force-majeure', title: { id: 'Force Majeure', en: 'Force Majeure' } }
  ];

  // Kontak resmi — TIDAK ADA di deck (§13 no.6). Semua null → render TBC.
  var CONTACT = {
    email: null,
    whatsapp: null,
    instagram: null,
    tiktok: null
  };

  // Nama badan hukum penyelenggara — TIDAK ADA di deck (§13 no.30).
  var LEGAL_ENTITY_NAME = null;

  // Struktur tier mitra (pola Borobudur, §7.12) — label generik, kosong sampai
  // sponsorship terkonfirmasi (§4). Isi nama/logo lewat PARTNERS, bukan di sini.
  var PARTNER_TIERS = [
    { key: 'presenting', label: { id: 'Presenting Partner', en: 'Presenting Partner' } },
    { key: 'bank', label: { id: 'Mitra Bank Resmi', en: 'Official Bank Partner' } },
    { key: 'official', label: { id: 'Mitra Resmi', en: 'Official Partner' } },
    { key: 'community', label: { id: 'Mitra Komunitas', en: 'Community Partner' } },
    { key: 'media', label: { id: 'Mitra Media', en: 'Media Partner' } }
  ];

  // Kerangka bab privasi — deck tidak memuat naskah privasi apa pun (§7.14).
  var PRIVACY_SECTIONS = [
    { key: 'data-collected', title: { id: 'Data yang Dikumpulkan', en: 'Data We Collect' } },
    { key: 'data-use', title: { id: 'Penggunaan Data', en: 'How We Use Data' } },
    { key: 'data-sharing', title: { id: 'Pembagian Data ke Pihak Ketiga', en: 'Third-Party Data Sharing' } },
    { key: 'data-retention', title: { id: 'Penyimpanan Data', en: 'Data Retention' } },
    { key: 'user-rights', title: { id: 'Hak Pengguna', en: 'User Rights' } },
    { key: 'contact', title: { id: 'Kontak Terkait Privasi', en: 'Privacy Contact' } }
  ];

  // FAQ — hanya pertanyaan yang bisa dijawab dari fakta terkonfirmasi (§7.9).
  // Jangan tambah pertanyaan Road to Event / sesi latihan mingguan (§3.6).
  var FAQ = [
    { key: 'categories',
      q: { id: 'Kategori apa saja yang tersedia di IWHM 2026?', en: 'What categories are available at IWHM 2026?' },
      a: { id: 'Ada tiga kategori: Half Marathon, 10K, dan 5K.', en: 'There are three categories: Half Marathon, 10K, and 5K.' } },
    { key: 'when-where',
      q: { id: 'Kapan dan di mana race day berlangsung?', en: 'When and where does race day take place?' },
      a: { id: 'Race day berlangsung ' + EVENT.raceDay.id + ', pukul ' + EVENT.hours.id + ', di ' + EVENT.venue.id + '.',
           en: 'Race day takes place on ' + EVENT.raceDay.en + ', ' + EVENT.hours.en + ', at ' + EVENT.venue.en + '.' } },
    { key: 'who',
      q: { id: 'Siapa saja yang boleh mengikuti IWHM 2026?', en: 'Who can join IWHM 2026?' },
      a: { id: 'IWHM terbuka untuk perempuan berusia ' + EVENT.ageRange + ' tahun — mulai dari atlet, pelari, komunitas lari, hingga mahasiswi.',
           en: 'IWHM is open to women aged ' + EVENT.ageRange + ' — from athletes and runners to running communities and students.' } },
    { key: 'rpc',
      q: { id: 'Kapan Race Pack Collection berlangsung?', en: 'When is Race Pack Collection?' },
      a: { id: WEEKEND[0].when.id + ', ' + WEEKEND[0].where.id + '.',
           en: WEEKEND[0].when.en + ', ' + WEEKEND[0].where.en + '.' } }
  ];

  window.D = {
    LANG: LANG, EVENT: EVENT, CATEGORIES: CATEGORIES, TICKETS: TICKETS,
    WEEKEND: WEEKEND, NEWS: NEWS, NEWS_EMPTY: NEWS_EMPTY, PARTNERS: PARTNERS,
    PODIUM: PODIUM, FACILITIES: FACILITIES, RULES_SECTIONS: RULES_SECTIONS,
    CONTACT: CONTACT, LEGAL_ENTITY_NAME: LEGAL_ENTITY_NAME, FAQ: FAQ,
    PARTNER_TIERS: PARTNER_TIERS, PRIVACY_SECTIONS: PRIVACY_SECTIONS,
    REGISTRATION_URL: REGISTRATION_URL, APP_LINKS: APP_LINKS, SITE_URL: SITE_URL
  };
})();
