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

  // ✅ Tanggal & venue DIKONFIRMASI klien 31 Agu 2026 — tanpa badge TBC.
  var EVENT = {
    raceDayISO:       '2026-11-29T04:00:00+07:00',
    raceDayConfirmed: true,
    raceDay:  { id: 'Minggu, 29 November 2026', en: 'Sunday, 29 November 2026' },
    hours:    { id: '04.00 – 10.00 WIB',        en: '04:00 – 10:00 WIB' },
    venue:    { id: 'Plaza Barat, GBK Senayan, Jakarta',
                en: 'Plaza Barat, GBK Senayan, Jakarta' },
    venueConfirmed: true,
    venueNote: { id: 'Venue dapat berubah.', en: 'Venue is subject to change.' },
    quota: 4000,
    quotaLabel: { id: '4.000', en: '4,000' },
    ageRange: '17–45',
    communities: '45++',
    theme:    { id: null, en: 'Continuing the Movement, Redefining the Journey' },
    hashtag:  '#UnstoppableHerJourney',

    // §3.10 — teks resmi dari klien (31 Agu 2026). FINAL, jangan diubah.
    description: {
      id: 'Indonesia Women Half Marathon (IWHM) adalah event lari perempuan yang merayakan kekuatan, ketangguhan, dan kebersamaan. Dengan kategori 5K, 10K, dan Half Marathon, IWHM mengajak perempuan untuk menantang diri, saling menguatkan, dan tumbuh bersama.',
      en: 'Indonesia Women Half Marathon (IWHM) is a women\'s running event that celebrates strength, resilience, and unity. With 5K, 10K, and Half Marathon categories, the event encourages women to challenge themselves, support each other, and grow together.'
    },

    // §9.3 — DRAFT-COPY, menunggu approval klien (opsi utama dipakai; opsi
    // alternatif ada di QUESTIONS.md §13 no.17).
    heroHeadline: {
      id: 'Sebelum matahari terbit, Senayan sudah bergerak.',
      en: 'Before sunrise, Senayan is already moving.'
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

  var REGISTRATION_URL  = null;               // TODO: URL pendaftaran resmi (§13 no.2)
  var REGISTRATION_OPEN = '2026-08';          // "Agu 2026" — tanggal persis belum ada
  var REGISTRATION_OPEN_LABEL = { id: 'Agustus 2026', en: 'August 2026' };

  // distanceKm HM = null sampai dikonfirmasi (§13 no.7). Jangan isi 21.0975.
  // tagline = §9.5 (DRAFT-COPY). desc = deskripsi faktual deck §3.3, diterjemahkan
  // apa adanya ke ID untuk paritas bahasa — bukan fakta baru, hanya lokalisasi.
  var CATEGORIES = [
    { key: 'hm', name: 'HM', fullName: { id: 'Half Marathon', en: 'Half Marathon' },
      distanceKm: null, cot: null, accent: 'violet',
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

  // Timeline race weekend (§3.4). Road to Event TIDAK disertakan (§3.6, luar scope).
  var TIMELINE = [
    { key: 'kickoff', date: { id: 'Agustus 2026', en: 'August 2026' },
      title: { id: 'Kick Off & Press Conference', en: 'Kick Off & Press Conference' } },
    { key: 'registration', date: { id: 'Agustus 2026', en: 'August 2026' },
      title: { id: 'Open Registration', en: 'Open Registration' } },
    { key: 'rpc', date: { id: '27–28 November 2026', en: '27–28 November 2026' },
      title: { id: 'Race Pack Collection', en: 'Race Pack Collection' },
      place: { id: 'Menteng Prada, Jakarta Pusat', en: 'Menteng Prada, Central Jakarta' } },
    { key: 'shakeout', date: { id: '28 November 2026', en: '28 November 2026' },
      title: { id: 'Shake Out Run', en: 'Shake Out Run' },
      place: { id: 'Menteng Prada, Jakarta Pusat', en: 'Menteng Prada, Central Jakarta' } },
    { key: 'raceday', date: { id: '29 November 2026', en: '29 November 2026' },
      title: { id: 'Race Day', en: 'Race Day' },
      place: { id: 'Plaza Barat, GBK Senayan', en: 'Plaza Barat, GBK Senayan' } }
  ];

  // Ringkasan race weekend untuk kartu di Beranda (subset dari TIMELINE).
  var WEEKEND = [
    { key: 'rpc', title: { id: 'Race Pack Collection', en: 'Race Pack Collection' },
      when: { id: '27–28 Nov · 10.00–20.00 WIB', en: '27–28 Nov · 10:00–20:00 WIB' },
      where: { id: 'Menteng Prada, Jakarta Pusat', en: 'Menteng Prada, Central Jakarta' } },
    { key: 'shakeout', title: { id: 'Shake Out Run', en: 'Shake Out Run' },
      when: { id: '28 Nov · 05.30–08.00 WIB', en: '28 Nov · 05:30–08:00 WIB' },
      where: { id: 'Menteng Prada, Jakarta Pusat', en: 'Menteng Prada, Central Jakarta' } },
    { key: 'raceday', title: { id: 'Race Day', en: 'Race Day' },
      when: { id: '29 Nov · 04.00–10.00 WIB', en: '29 Nov · 04:00–10:00 WIB' },
      where: { id: 'Plaza Barat, GBK Senayan', en: 'Plaza Barat, GBK Senayan' } }
  ];

  // Berita — fakta ringkas dari §3.4, bukan narasi panjang (§9.2).
  var NEWS = [
    { key: 'kickoff-2026', date: '2026-08-01',
      title: { id: 'IWHM 2026 resmi diumumkan lewat Kick Off & Press Conference',
               en: 'IWHM 2026 officially announced at Kick Off & Press Conference' },
      excerpt: { id: 'Rangkaian Jakarta Series dibuka Agustus 2026, menuju race day 29 November di Plaza Barat GBK Senayan.',
                 en: 'The Jakarta Series kicks off in August 2026, heading toward race day on 29 November at Plaza Barat, GBK Senayan.' } },
    { key: 'registration-open', date: '2026-08-15',
      title: { id: 'Pendaftaran IWHM 2026 dibuka', en: 'IWHM 2026 registration opens' },
      excerpt: { id: 'Lima fase harga tersedia mulai Partner Exclusive Pre-Sale hingga General Sales. Detail harga menyusul.',
                 en: 'Five pricing phases are available, from Partner Exclusive Pre-Sale to General Sales. Pricing details to follow.' } }
  ];

  var PARTNERS = [];       // kosong sampai sponsorship dikonfirmasi (§13 no.3)

  window.D = {
    LANG: LANG, EVENT: EVENT, CATEGORIES: CATEGORIES, TICKETS: TICKETS,
    TIMELINE: TIMELINE, WEEKEND: WEEKEND, NEWS: NEWS, PARTNERS: PARTNERS,
    REGISTRATION_URL: REGISTRATION_URL, REGISTRATION_OPEN: REGISTRATION_OPEN,
    REGISTRATION_OPEN_LABEL: REGISTRATION_OPEN_LABEL
  };
})();
