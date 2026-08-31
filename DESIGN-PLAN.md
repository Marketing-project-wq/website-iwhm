# DESIGN-PLAN — IWHM 2026

## Palet (§6.1, dari sumber vektor logo — sub-sistem A)

| Token | Hex | Peran |
|---|---|---|
| `--violet` | `#8D39E5` | Warna utama — hero, CTA, header |
| `--magenta` | `#C939E5` | Aksen kedua, ujung gradasi, latar section alternatif |
| `--citrus` | `#EAFF52` | Aksen sorot, angka besar (countdown, statistik) — **selalu di atas `--violet` atau `--ink`, tidak pernah di atas putih** (kontras 1.24:1, §6.2) |
| `--ink` | `#1E0728` | Teks utama, latar gelap (about bagian 1 & 4) |
| `--mauve` | `#C8A2C9` | Latar lembut, panel, badge TBC (netral, bukan alarm) |
| `--paper` | `#FFFFFF` | Latar terang, kartu |

Gradasi resmi dipakai apa adanya, tidak dibuat ulang: `--gradient-brand` (magenta→citrus) dan `--gradient-violet` (magenta→violet).

## Tipografi (§6.3)

`--font-display: 'Fredoka'` (700, wdth 125) untuk H1–H3, angka besar, label kategori.
`--font-body: 'Barlow'` untuk body copy, nav, tabel.

Alasan: Fredoka dipilih berdampingan dengan Paris2024 (wordmark logo) — sama-sama geometris dengan terminal membulat dan punya sumbu lebar asli, jadi headline terasa senapas dengan logo tanpa memakai font brand yang bermasalah lisensi. Barlow sudah tertanam di deck asli klien dan tersedia bebas di Google Fonts. Dua family saja — tidak ada font ketiga untuk label kecil (pakai Barlow all-caps kecil kalau perlu penekanan label).

**Catatan:** kemiripan Fredoka↔Paris2024 adalah penilaian bentuk visual, bukan pencocokan metrik font. Tetap butuh approval desainer (§13 no.17 area terkait) sebelum dikunci final.

## Konsep layout hero + 2 alternatif

**Opsi A — Split asimetris (direkomendasikan)**

```
┌──────────────────────────────────────────────────┐
│ [nav: logo-horizontal.svg]        ID|EN  [Daftar] │
├──────────────────────────────────────────────────┤
│                                    ┆                │
│  H1 (Fredoka, 2 baris)             ┆  element-04    │
│  Sub (Barlow, ≤70ch)               ┆  .webp besar   │
│                                    ┆  di-crop        │
│  [29 Nov 2026 · Plaza Barat GBK]   ┆  460px, blur    │
│  [Countdown: HH:MM:SS]             ┆  motion arah    │
│                                    ┆  kanan-atas     │
│  [Daftar Sekarang]  [Lihat Jadwal] ┆                │
│                                    ┆                │
│  supergraphic-loop-*.svg tipis di sudut kiri-bawah  │
└──────────────────────────────────────────────────┘
```
Latar `--violet` solid atau `--gradient-violet` halus. Teks putih. Elemen gerak sebagai motif kanan, bukan penuh layar — biar tidak pecah di >480px (loop SVG yang mengisi ruang besar, elemen webp cuma sebagai aksen kecil).

**Opsi B — Full-bleed dengan panel bawah**

```
┌──────────────────────────────────────────────────┐
│  latar --gradient-violet penuh layar               │
│  H1 di tengah-atas, besar, 1 baris kalau muat      │
│  loop svg besar transparan di belakang teks         │
├──────────────────────────────────────────────────┤
│  panel --paper: tanggal · venue · countdown · CTA   │
└──────────────────────────────────────────────────┘
```
Lebih dramatis, tapi kontras teks di atas gradasi butuh pengujian ketat per §6.2 (magenta area hanya aman untuk teks besar).

**Opsi C — Stacked mobile-first**

```
┌───────────────────────┐
│ nav (hamburger)        │
├───────────────────────┤
│ logo-mark kecil         │
│ H1                      │
│ Sub                     │
│ badge tanggal+venue     │
│ countdown (3 kolom)     │
│ CTA stack vertikal      │
│ element-01 kecil, sudut │
└───────────────────────┘
```
Ini bukan alternatif desktop, tapi acuan breakpoint 375px untuk Opsi A/B — disertakan supaya hero tidak didesain desktop-only lalu ditumpuk di mobile.

**Dipilih: Opsi A.** Alasan: memberi ruang teks penuh untuk H1 dua-opsi (§9.3) tanpa dipaksa satu baris, elemen gerak dipakai proporsional sesuai batas 480px, dan pola split ini beda dari kebanyakan poster event lari yang taruh headline di tengah atas foto penuh.

## Signature device (§6.4)

**Elemen gerak (chevron/burst dengan motion blur)** = signature utama. Dipakai untuk:
- Aksen di belakang angka besar (countdown, strip fakta 4.000/45++/dst.)
- Penanda transisi antar-section (kecil, di sudut, bukan garis pemisah generik)
- Bullet visual di daftar fasilitas Race Village / Race Pack
- Aksen hero (Opsi A di atas)

**Loop** (pita gradasi vektor) dipakai untuk momen besar: penutup halaman about, latar section CTA di footer setiap halaman, hero jika perlu elemen besar >480px (karena loop vektor, tidak pecah).

**Wave** dipakai sebagai pemisah antar-section pada halaman panjang (about, categories) — pengganti garis `<hr>` polos.

**Glow** (radial blur) dibuat CSS `radial-gradient(--violet/--magenta, transparent)`, tidak pakai file — dipakai di belakang kartu kategori dan panel statistik untuk kedalaman tanpa menambah berat halaman.

Satu keluarga per section — tidak ditumpuk.

## Yang membuat situs ini tidak terlihat seperti template event lari generik

Kebanyakan situs event lari menaruh KV foto pelari tersenyum di hero, badge lingkaran "REGISTER NOW" berkedip, dan grid sponsor besar di atas. IWHM tidak (belum) punya foto berlisensi jelas — jadi situs ini justru dipaksa bersandar pada tipografi besar dan sistem grafis chevron-bergradasi milik brand sendiri sebagai wajah utama, bukan foto stok generik; kombinasi Fredoka bulat-tebal + gradasi ungu-magenta-citrus + chevron berarah adalah kombinasi yang sejauh pengamatan tidak dipakai benchmark (PLN pakai pecahan kaca statis, Borobudur lebih fotografis-tradisional), dan naskah about.html empat-babak dengan pergantian latar `--ink`/`--paper`/`--violet` memberi ritme editorial yang jarang ada di situs event lari — kebanyakan hanya menumpuk fakta dalam list.

---

## Kritik terhadap anti-pattern §6.5

| # | Anti-pattern | Kena? | Catatan/revisi |
|---|---|---|---|
| 1 | Bentuk bersudut sebagai motif utama | Tidak — dicabut di v1.3, chevron memang signature resmi. Yang dihindari: `clip-path: polygon()` tajam ala PLN sebagai motif independen; elemen gerak dipakai sebagai gambar raster/svg brand, bukan bentuk CSS buatan sendiri. | Aman |
| 2 | Eyebrow ALL-CAPS tracking di atas tiap heading | Berisiko — draf awal saya sempat menaruh label kategori "HM / 10K / 5K" sebagai eyebrow di atas tiap kartu. | **Revisi:** eyebrow dipakai maksimal sekali (hero saja, kalau ada), label kategori jadi bagian dari heading kartu itu sendiri, bukan eyebrow terpisah. |
| 3 | Penanda 01/02/03 untuk konten non-urutan | Berisiko — rencana awal sempat menomori fasilitas Race Village. | **Revisi:** fasilitas Race Village/RPC jadi grid ikon tanpa nomor; nomor urut hanya dipakai di Timeline (memang berurutan) dan langkah pendaftaran di tickets.html. |
| 4 | Mewarnai satu kata di headline | Tidak direncanakan | Aman — H1 §9.3 tidak diberi span berwarna |
| 5 | Semua kartu rounded seragam, satu shadow abu-abu | Berisiko — kartu kategori, kartu tiket, dan kartu timeline awalnya dibayangkan satu radius. | **Revisi:** kartu kategori pakai radius besar + glow radial di belakang (§6.4); kartu tiket pakai border kiri tebal warna aksen, bukan shadow; kartu timeline jadi node-garis, bukan kartu sama sekali. |
| 6 | `→` di akhir tiap tombol | Tidak dipakai | Aman |
| 7 | Fade-up di setiap section | Berisiko — kebiasaan default. | **Revisi:** animasi hanya di hero saat page load (satu momen ter-orkestrasi: logo → H1 → sub → CTA), section lain statis. Dihormati `prefers-reduced-motion`. |
| 8 | Gradasi ungu-pink buatan sendiri | Tidak — pakai `--gradient-brand`/`--gradient-violet` resmi apa adanya | Aman |
| 9 | Visual feminin klise (pink pastel, bunga, font script) | Tidak — palet tetap ungu-magenta-citrus tegas, Fredoka bukan font script, tidak ada ikon bunga ditambahkan sendiri (motif kelopak logo sudah cukup, tidak diulang sebagai dekorasi lepas) | Aman |
| 10 | Pakai poster `05 POSTER SAMPLE` sebagai aset | Tidak — tidak direncanakan dipakai sama sekali, termasuk sebagai referensi visual di halaman manapun | Aman |

**Ringkasan revisi:** dua area (eyebrow, kartu seragam) dan satu kebiasaan default (fade-up per section) direvisi sebelum masuk ke Tahap 1. Hasil revisi sudah dimasukkan ke bagian "Signature device" dan "Layout hero" di atas.
