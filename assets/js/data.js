/* ============================================================
   data.js — SINGLE SOURCE OF TRUTH · IWHM 2026 (Jakarta Series)
   Semua angka event (tanggal, harga, kuota, hadiah) hidup di sini.
   JANGAN hardcode nilai-nilai ini di file HTML manapun (§1.7).
   Sumber A: deck IWHM (36 hal.). Sumber B: konfirmasi klien 31 Agu 2026.
   Nilai null = belum ada di sumber → UI render badge TBC.
   ============================================================ */
(function () {
  'use strict';

  var LANG = (location.pathname.indexOf('/en/') !== -1) ? 'en' : 'id';

  /* ✅ Tanggal & venue DIKONFIRMASI klien 31 Agu 2026 (v1.2).
     Deck hal.6 (tanggal & venue versi lama) TIDAK BERLAKU — pakai versi konfirmasi klien. */
  var EVENT = {
    raceDayISO:       '2026-11-29T04:00:00+07:00',
    raceDayConfirmed: true,
    raceDay:  { id: 'Minggu, 29 November 2026', en: 'Sunday, 29 November 2026' },
    hours:    { id: '04.00 – 10.00 WIB',         en: '04:00 – 10:00 WIB' },
    venue:    { id: 'Plaza Barat, GBK Senayan, Jakarta',
                en: 'Plaza Barat, GBK Senayan, Jakarta' },
    venueConfirmed: true,
    quota: 4000,
    ageRange: '17–45',
    communities: '45++',   /* §3.8 — jaringan mitra (fakta terpisah, di luar scope pra-event v1.2) */
    theme:    { id: null, en: 'Continuing the Movement, Redefining the Journey' },
    hashtag: '#UnstoppableHerJourney',
    hashtagAlt: '#RiseWithEveryStride',

    /* §3.10 — teks resmi klien (31 Agu 2026). FINAL, jangan diubah.
       Dipakai untuk meta description, OG description, JSON-LD, dan halaman Tentang. */
    description: {
      id: 'Indonesia Women Half Marathon (IWHM) adalah event lari perempuan yang merayakan kekuatan, ketangguhan, dan kebersamaan. Dengan kategori 5K, 10K, dan Half Marathon, IWHM mengajak perempuan untuk menantang diri, saling menguatkan, dan tumbuh bersama.',
      en: 'Indonesia Women Half Marathon (IWHM) is a women’s running event that celebrates strength, resilience, and unity. With 5K, 10K, and Half Marathon categories, the event encourages women to challenge themselves, support each other, and grow together.'
    },

    /* §9.3 — DRAFT-COPY, menunggu approval klien. Opsi utama aktif;
       opsi alternatif diajukan lewat screenshot di GATE 1 (jangan pilih sendiri). */
    heroHeadline: {
      id: 'Sebelum matahari terbit, Senayan sudah bergerak.',
      en: 'Before sunrise, Senayan is already moving.'
    },
    heroHeadlineAlt: {
      id: 'Menantang diri. Saling menguatkan. Tumbuh bersama.',
      en: 'Challenge yourself. Lift each other. Grow together.'
    },
    heroSub: {
      id: 'Indonesia Women Half Marathon 2026 — 5K, 10K, dan Half Marathon. Sebuah perayaan kekuatan, ketangguhan, dan kebersamaan.',
      en: 'Indonesia Women Half Marathon 2026 — 5K, 10K, and Half Marathon. A celebration of strength, resilience, and unity.'
    }
  };

  var REGISTRATION_URL  = null;          // TODO: URL pendaftaran resmi (QUESTIONS B2)
  var REGISTRATION_OPEN = '2026-08-01';  // "AUG 2026" — tanggal persis belum ada

  /* distanceKm HM = null sampai dikonfirmasi (QUESTIONS P7). Jangan isi 21.0975.
     tagline = §9.5 (DRAFT-COPY). desc = deskripsi faktual dari deck §3.3 (EN).
     petal = kelopak berbeda per kategori (placeholder; ganti clip-path SVG, §6.4). */
  var CATEGORIES = [
    { key: 'hm',  name: 'HM',  distanceKm: null, cot: null, petal: 'petal--i',
      tagline: { id: 'Jarak yang menuntut kamu hadir jauh sebelum hari lombanya.',
                 en: 'The distance that asks you to show up months before race day.' },
      desc: { id: 'Untuk pelari yang siap menempuh jarak penuh — kekuatan, fokus, dan rasa tuntas di lintasan yang terukur secara profesional.',
              en: 'Designed for committed runners ready to go the distance. Experience the full journey of strength, focus, and accomplishment on a professionally measured route.' } },
    { key: '10k', name: '10K', distanceKm: 10,   cot: null, petal: 'petal--w',
      tagline: { id: 'Cukup jauh untuk terasa, cukup dekat untuk dikejar.',
                 en: 'Far enough to feel it. Close enough to chase.' },
      desc: { id: 'Untuk pelari yang mencari perpaduan daya tahan dan kecepatan. Dorong batasmu di lintasan yang hidup dan menginspirasi.',
              en: 'For runners seeking a balanced mix of endurance and speed. Push your limits and feel the thrill of personal progress on a vibrant and inspiring course.' } },
    { key: '5k',  name: '5K',  distanceKm: 5,    cot: null, petal: 'petal--h',
      tagline: { id: 'Jarak pertama, atau jarak yang paling ramai.',
                 en: 'The first distance — or the loudest one.' },
      desc: { id: 'Awal yang sempurna untuk pelari pertama kali atau yang ingin berlari seru bersama teman. Rayakan gerak, percaya diri, dan kebersamaan.',
              en: 'A perfect start for first-time runners or those looking to enjoy a spirited run with friends. Celebrate movement, confidence, and community in a supportive environment.' } }
  ];

  /* Harga & periode TIDAK ADA di deck. price:null → render "Segera diumumkan".
     Angka pada mockup aplikasi (hal.14) hanya ilustrasi — JANGAN dipakai sebagai harga. */
  var TICKETS = [
    { key: 'partner-presale', name: { id: 'Partner Exclusive Pre-Sale', en: 'Partner Exclusive Pre-Sale' },
      discount: 40, price: null, period: null, audience: { id: null, en: null }, hidden: true },
    /* Nama fase disamarkan: deck menyebut sponsor yang belum terkonfirmasi (§1.4).
       Konfirmasi penamaan final ke klien (QUESTIONS P16). */
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

  /* Hadiah & batas usia Master TIDAK disebut di deck (QUESTIONS P9, P10). */
  var PODIUM = {
    tiers: ['open', 'master'],
    places: 3,
    masterAgeFrom: null,   // TODO
    prize: null            // TODO
  };

  /* Timeline TANPA fase pra-event yang di luar scope (§3.6, v1.2).
     Urutan: Kick Off → Registration → RPC → Shake Out Run → Race Day. */
  var TIMELINE = [
    { key: 'kickoff', dateISO: '2026-08',
      when:  { id: 'Agustus 2026', en: 'August 2026' },
      title: { id: 'Kick Off & Press Conference', en: 'Kick Off & Press Conference' },
      place: { id: null, en: null }, hours: { id: null, en: null } },
    { key: 'registration', dateISO: '2026-08',
      when:  { id: 'Agustus 2026', en: 'August 2026' },
      title: { id: 'Pendaftaran Dibuka', en: 'Open Registration' },
      place: { id: null, en: null }, hours: { id: null, en: null } },
    { key: 'rpc', dateISO: '2026-11-27',
      when:  { id: '27–28 November 2026', en: '27–28 November 2026' },
      title: { id: 'Race Pack Collection', en: 'Race Pack Collection' },
      place: { id: 'Menteng Prada, Jakarta Pusat', en: 'Menteng Prada, Central Jakarta' },
      hours: { id: '10.00 – 20.00 WIB', en: '10:00 – 20:00 WIB' } },
    { key: 'shakeout', dateISO: '2026-11-28',
      when:  { id: '28 November 2026', en: '28 November 2026' },
      title: { id: 'Shake Out Run', en: 'Shake Out Run' },
      place: { id: 'Menteng Prada, Jakarta Pusat', en: 'Menteng Prada, Central Jakarta' },
      hours: { id: '05.30 – 08.00 WIB', en: '05:30 – 08:00 WIB' } },
    { key: 'raceday', dateISO: '2026-11-29', highlight: true,
      when:  { id: 'Minggu, 29 November 2026', en: 'Sunday, 29 November 2026' },
      title: { id: 'Race Day', en: 'Race Day' },
      place: { id: 'Plaza Barat, GBK Senayan, Jakarta', en: 'Plaza Barat, GBK Senayan, Jakarta' },
      hours: { id: '04.00 – 10.00 WIB', en: '04:00 – 10:00 WIB' } }
  ];

  /* Berita awal (§7.10). Isi faktual; tanggal persis belum ada.
     TODO: konfirmasi tanggal & isi berita ke klien. */
  var NEWS = [
    { key: 'kickoff-2026', dateISO: '2026-08',
      date:  { id: 'Agustus 2026', en: 'August 2026' },
      title: { id: 'Kick Off & Press Conference menandai dibukanya IWHM 2026',
               en: 'Kick Off & Press Conference mark the start of IWHM 2026' },
      excerpt: { id: 'Rangkaian Indonesia Women Half Marathon 2026 — Jakarta Series dibuka lewat Kick Off dan Press Conference pada Agustus 2026.',
                 en: 'The Indonesia Women Half Marathon 2026 — Jakarta Series opens with a Kick Off and Press Conference in August 2026.' },
      url: null },
    { key: 'registration-open', dateISO: '2026-08',
      date:  { id: 'Agustus 2026', en: 'August 2026' },
      title: { id: 'Pendaftaran IWHM 2026 dibuka mulai Agustus 2026',
               en: 'IWHM 2026 registration opens in August 2026' },
      excerpt: { id: 'Pendaftaran kategori 5K, 10K, dan Half Marathon dibuka mulai Agustus 2026. Detail harga dan tautan pendaftaran menyusul.',
                 en: 'Registration for the 5K, 10K, and Half Marathon categories opens in August 2026. Pricing and the registration link will follow.' },
      url: null }
  ];

  var PARTNERS = [];   // kosong sampai sponsorship dikonfirmasi (§4, QUESTIONS B3)

  /* Struktur navigasi (v1.2 — tanpa "Program", about.html top-level). */
  var NAV = [
    { key: 'home',  href: 'index.html',      label: { id: 'Beranda', en: 'Home' } },
    { key: 'about', href: 'about.html',      label: { id: 'Tentang', en: 'About' } },
    { key: 'race',  label: { id: 'Lomba', en: 'Race' }, children: [
      { href: 'categories.html', label: { id: 'Kategori & Podium', en: 'Categories & Podium' } },
      { href: 'schedule.html',   label: { id: 'Jadwal', en: 'Schedule' } },
      { href: 'race-pack.html',  label: { id: 'Race Pack Collection', en: 'Race Pack Collection' } },
      { href: 'race-day.html',   label: { id: 'Race Day', en: 'Race Day' } },
      { href: 'rules.html',      label: { id: 'Peraturan & Ketentuan', en: 'Rules & Regulations' } }
    ] },
    { key: 'info', label: { id: 'Info', en: 'Info' }, children: [
      { href: 'faq.html',     label: { id: 'Tanya Jawab', en: 'FAQ' } },
      { href: 'news.html',    label: { id: 'Berita', en: 'News' } },
      { href: 'gallery.html', label: { id: 'Galeri', en: 'Gallery' } }
    ] },
    { key: 'partners', href: 'partners.html', label: { id: 'Mitra', en: 'Partners' } },
    { key: 'contact',  href: 'contact.html',  label: { id: 'Kontak', en: 'Contact' } }
  ];

  window.D = {
    LANG: LANG, EVENT: EVENT, CATEGORIES: CATEGORIES, TICKETS: TICKETS,
    PODIUM: PODIUM, TIMELINE: TIMELINE, NEWS: NEWS, PARTNERS: PARTNERS, NAV: NAV,
    REGISTRATION_URL: REGISTRATION_URL, REGISTRATION_OPEN: REGISTRATION_OPEN
  };
})();
