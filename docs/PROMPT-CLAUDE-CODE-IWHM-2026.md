# PROMPT CLAUDE CODE — WEBSITE EVENT IWHM 2026 (JAKARTA SERIES)

**Versi:** 1.3
**Tanggal:** 31 Agustus 2026
**Deliverable:** Static multi-page bilingual website (ID/EN), siap deploy Railway
**Sumber fakta A:** `SPORTFEST__JHR__IWHM_BRI.pdf` (36 hal., Canva export, author: Marti Karina)
**Sumber fakta B:** Deskripsi resmi IWHM dari klien, disampaikan langsung 31 Agu 2026 (lihat §3.10)
**Sumber aset C:** `02_BRANDING_ASSETS` — paket aset brand resmi, diterima 31 Agu 2026. Hasil pemeriksaannya ada di `BRAND-AUDIT.md`; aset siap pakai ada di `assets/img/`.
**Benchmark:** PLN Mobile Electric 5K Series 2026 (arsitektur) + Borobudur Marathon (struktur navigasi & hierarki sponsor)

**Perubahan v1.1:** menambah §3.10 (deskripsi resmi) dan §9.3–9.5 (naskah storytelling ID/EN untuk Beranda, Tentang, dan Kategori).

**Perubahan v1.2:**
1. Tanggal & venue race day **dikonfirmasi klien**: Minggu, 29 November 2026 di Plaza Barat GBK Senayan. Status naik dari ⚠️ CONFLICT ke ✅ CONFIRMED. Badge "Menunggu konfirmasi" pada tanggal/venue dihapus, dan halaman 6 deck dinyatakan tidak berlaku.
2. **Road to Event dikeluarkan dari scope build.** Halaman `road-to-event.html`, menu "Program", teaser di Beranda, dan objek `ROAD_TO` di `data.js` dihapus. Situs turun dari 15 ke 14 halaman per bahasa.
3. Naskah Tentang turun dari lima ke empat bagian — bagian "Empat bulan sebelum pagi itu" bersandar sepenuhnya pada Road to Event, jadi ikut keluar. **Materinya tidak dibuang**, diparkir di Lampiran C supaya bisa dipasang kembali tanpa menulis ulang.
4. Menu navigasi disusun ulang; halaman `about.html` yang sebelumnya tidak ada di nav sekarang dimasukkan.

**Perubahan v1.3 — setelah menerima paket aset brand resmi:**
1. **Warna utama dikoreksi: `#A120EF` → `#8D39E5`.** Nilai lama adalah perkiraan dari deck; nilai baru dibaca langsung dari sumber vektor logo. §6.1 dan §6.2 ditulis ulang.
2. **Tipografi ditulis ulang.** Font brand asli ternyata Paris2024 + Comba Test Ultra Wide, bukan CyGrotesk seperti dugaan v1.2. Keduanya bermasalah lisensi — lihat §6.3.
3. **Signature device diganti.** Usulan "petal mask" di v1.2 dicabut; brand sudah punya sistem grafis sendiri. §6.4 ditulis ulang.
4. **Anti-pattern §6.5 nomor 1 dicabut** — larangan bentuk bersudut ternyata keliru.
5. §2.1 investigasi aset diperbarui: aset sudah ada, tidak perlu dicari lagi.
6. Pertanyaan ke klien bertambah (§13 no. 21–25), semuanya soal brand & lisensi.

> **Cara pakai:** copy seluruh file ini ke Claude Code sebagai instruksi awal sesi. Jangan potong bagian §1 dan §2 — dua bagian itu yang mencegah Claude Code mengarang data dan langsung menulis kode sebelum investigasi.

---

## §0 — PERAN & DELIVERABLE

Kamu adalah web designer + front-end developer yang membangun **website resmi Indonesia Women Half Marathon (IWHM) 2026 — Jakarta Series**, diselenggarakan oleh 20FIT | EVENT.

Yang dibangun: situs statis multi-halaman, dua bahasa (Indonesia + English), tanpa backend, tanpa database, tanpa form pembayaran. Fungsi situs: **memberi informasi dan mengarahkan ke pendaftaran eksternal.**

Yang **tidak** dibangun di fase ini: sistem registrasi, payment gateway, dashboard peserta, race result lookup, integrasi Supabase.

---

## §1 — HARD CONSTRAINTS (tidak boleh dilanggar)

1. **Jangan `git commit` atau `git push` otomatis.** Tunjukkan diff, tunggu approval eksplisit dari saya.
2. **Jangan deploy otomatis** ke Railway atau platform manapun. Deploy adalah keputusan manusia.
3. **Jangan mengarang fakta event.** Setiap angka, tanggal, harga, jarak, cut-off time, hadiah, dan nama venue **harus** berasal dari tabel §3. Kalau sebuah fakta tidak ada di §3 → render badge `TBC` + tulis komentar `<!-- TODO: konfirmasi ke klien — [fakta apa] -->`. **Tidak boleh diisi placeholder yang terlihat seperti fakta nyata** (mis. "IDR 350.000", "COT 3 jam", "Hadiah Rp10 juta"). Placeholder yang terlihat nyata lebih berbahaya daripada kolom kosong.
4. **Seluruh konten sponsor BRI DILARANG masuk ke situs.** Deck sumber adalah *pitch deck penawaran sponsorship ke BRI* — status kerja samanya belum dikonfirmasi. Halaman 11–17, 22, 27, 35, 36 seluruhnya adalah inventory benefit BRI. Jangan tulis "BRI", "BRImo", "Official Bank Partner", "BRI Virtual Account", "BRI Cheering Zone", atau logo BRI di file manapun — termasuk di komentar HTML, alt text, dan `data.js`.
5. **Jangan buat form yang mengumpulkan data pribadi.** Tombol "Daftar" adalah link keluar (`<a>`) ke URL pendaftaran resmi. Selama URL belum ada, tombol membuka modal berisi "Pendaftaran dibuka Agustus 2026" — bukan form email capture.
6. **Jangan pakai foto peserta dari deck** sebagai aset produksi. Semua foto di deck bertanda *"Visuals are for illustration purposes only"* dan status hak pakainya belum jelas. Gunakan placeholder ber-dimensi + daftar permintaan aset (§2 output 3).
7. **`data.js` adalah single source of truth.** Tidak boleh ada tanggal/harga/kuota yang di-hardcode di file HTML manapun.
8. **Parity ID/EN wajib.** Setiap halaman `/id/` punya pasangan `/en/` dengan struktur identik. Tidak boleh ada halaman yang hanya ada di satu bahasa.
9. **Jangan meniru desain benchmark secara visual.** Benchmark dipakai untuk *arsitektur* dan *struktur informasi*, bukan tampilan. Detail di §6.5.

---

## §2 — LANGKAH 0: INVESTIGATION GATE

**Belum boleh menulis satu baris kode.** Kerjakan dulu lima hal ini, lalu **BERHENTI** dan laporkan.

### 2.1 Inventarisasi
- Cek isi repo/folder kerja saat ini. Ada file existing? Ada `package.json`?
- **Aset brand sudah tersedia** di `assets/img/` (logo, graphics, bg) — hasil pengolahan dari paket resmi. **Jangan cari, jangan bikin ulang, jangan konversi ulang.** Baca `BRAND-AUDIT.md` untuk tahu isinya, batasannya, dan apa yang masih perlu dikonfirmasi.
- **Font:** jangan pasang Paris2024 atau Comba Test — keduanya bermasalah lisensi (§6.3). Pakai Fredoka + Barlow dari Google Fonts.
- Yang **belum** ada dan tetap harus masuk ASSET-REQUEST: foto hero & galeri berlisensi jelas, favicon `.ico`, OG image 1200×630, logo mitra, peta rute.

### 2.2 Baca benchmark
Pelajari **arsitektur** (bukan tampilan) dari:
- `https://website-pln-electric-5k-series-production.up.railway.app/en/index.html` — pola yang diadopsi: `data.js` sebagai single source of truth, `tokens.css` terpisah, header/footer di-inject via partials, komponen digerakkan atribut `data-*`, badge `TBC` untuk fakta belum final, mirror `/id/` + `/en/` dengan `hreflang`.
- `https://borobudurmarathon.com/id/` — pola yang diadopsi: pengelompokan nav (Lomba / Program / Media / Kontak), halaman Peraturan & Ketentuan dan Tanya Jawab yang berdiri sendiri, hierarki sponsor bertingkat dengan label peran ("Mitra Resmi Air Minum", "Co Sponsor", dst.), halaman Galeri dan Panduan Lomba.

### 2.3 Buat `FACT-LEDGER.md`
Salin tabel §3 ke file ini. Tambahkan kolom `Dipakai di halaman`. File ini yang jadi rujukan saat menulis konten — bukan ingatan.

### 2.4 Buat `DESIGN-PLAN.md`
Tulis rencana desain sebelum coding (maks. 1 halaman):
- Palet 5–6 hex bernama (ambil dari §6.1)
- Pasangan tipografi + alasan
- Konsep layout hero + 2 alternatif dalam ASCII wireframe
- Signature device dan di mana saja dipakai
- Satu paragraf: apa yang membuat situs ini **tidak** terlihat seperti template event running generik

Lalu kritik rencanamu sendiri terhadap daftar anti-pattern §6.5. Kalau ada bagian yang kena, revisi dan tulis apa yang diubah.

### 2.5 Buat `ASSET-REQUEST.md` dan `QUESTIONS.md`
- `ASSET-REQUEST.md`: daftar aset yang dibutuhkan dengan dimensi & format persis (logo SVG, KV hero, foto per halaman, logo sponsor 800×320px, peta rute).
- `QUESTIONS.md`: salin §13, urutkan blocking dulu.

### 🔴 GATE 0 — BERHENTI DI SINI
Laporkan kelima output. Tunggu approval sebelum lanjut ke §11 Tahap 1.

---

## §3 — TABEL FAKTA KANONIK

Status: ✅ `CONFIRMED-DECK` · ✅ `CONFIRMED-KLIEN` · 🟡 `TBC` · 🔴 `NOT-IN-DECK`

> Status ⚠️ `CONFLICT` sudah tidak ada lagi per v1.2 — satu-satunya konflik (tanggal & venue) sudah diselesaikan klien. Kalau kamu menemukan kontradiksi baru antar-sumber, laporkan ke saya, jangan pilih sendiri.

### 3.1 Identitas Event

| Fakta | Nilai | Sumber | Status |
|---|---|---|---|
| Nama resmi | Indonesia Women Half Marathon | hal. 1 | ✅ |
| Singkatan | IWHM | hal. 1 | ✅ |
| Tahun/edisi | 2026 | hal. 6 | ✅ |
| Series | Jakarta Series | hal. 9 | ✅ |
| Penyelenggara | 20FIT \| EVENT | semua hal. | ✅ |
| Tema | "Continuing the Movement, Redefining the Journey" | hal. 5 | ✅ |
| Hashtag utama | #UnstoppableHerJourney | hal. 5 | ✅ |
| Hashtag sekunder | #RiseWithEveryStride | hal. 19, 30 | ✅ |
| Nama domain | — | — | 🔴 |

### 3.2 Race Day

| Fakta | Nilai | Sumber | Status |
|---|---|---|---|
| Tanggal race day | **Minggu, 29 November 2026** | hal. 9 + 29, dikonfirmasi klien 31 Agu 2026 | ✅ |
| Venue race day | **Plaza Barat, GBK Senayan, Jakarta** | hal. 29, dikonfirmasi klien 31 Agu 2026 | ✅ |
| Jam operasional race day | 04.00 – 10.00 WIB | hal. 29 | ✅ |
| Jam start per kategori | — | — | 🔴 |
| Kuota peserta | 4.000 female runners | hal. 6 | ✅ |
| Segmen peserta | Female athletes, female runners, running community, student | hal. 6 | ✅ |
| Rentang usia | 17 – 45 tahun | hal. 6 | ✅ |
| Catatan venue | "Venue is subject to change" | hal. 6 | ✅ |

> **Konflik sudah selesai (v1.2).** Deck halaman 6 menulis "22 Nov 2026, Plaza Parkir Timur" — **halaman itu tidak berlaku**. Klien mengonfirmasi versi A pada 31 Agustus 2026. Tanggal dan venue sekarang boleh ditampilkan sebagai fakta pasti: **tanpa badge TBC, tanpa hedging, tanpa komentar konflik**. Kalau kamu menemukan sisa badge "Menunggu konfirmasi" pada tanggal atau venue, hapus.
>
> Yang **masih** dipertahankan: catatan "Venue is subject to change" dari deck boleh dicantumkan kecil di halaman Race Day sebagai disclaimer standar event — itu berbeda dari badge TBC, dan wajar untuk event yang masih tiga bulan lagi. Konfirmasikan ke klien apakah disclaimer ini masih perlu.

### 3.3 Kategori Lomba

| Kategori | Deskripsi (EN, hal. 7) | Jarak | Podium (hal. 34) |
|---|---|---|---|
| HM | "Designed for committed runners ready to go the distance. Experience the full journey of strength, focus, and accomplishment on a professionally measured route." | 🔴 tidak disebut | Open 1–3, Master 1–3 |
| 10K | "For runners seeking a balanced mix of endurance and speed. Push your limits and feel the thrill of personal progress on a vibrant and inspiring course." | 10 km (implisit) | Open 1–3, Master 1–3 |
| 5K | "A perfect start for first-time runners or those looking to enjoy a spirited run with friends. Celebrate movement, confidence, and community in a supportive environment." | 5 km (implisit) | Open 1–3, Master 1–3 |

🔴 **Tidak ada di deck:** jarak HM dalam angka (jangan tulis "21,0975 km" tanpa konfirmasi), cut-off time per kategori, batas usia kategori Master, nilai hadiah podium, kuota per kategori, elevation/rute.

### 3.4 Timeline

| Fase | Tanggal | Sumber | Status |
|---|---|---|---|
| Teaser / Kick Off (Press Conference) | Aug 2026 | hal. 9, 10 | ✅ |
| Open Registration | Aug 2026 | hal. 9 | ✅ |
| Race Pack Collection | 27 – 28 Nov 2026, 10.00 – 20.00 WIB | hal. 9, 24 | ✅ |
| Lokasi RPC | Menteng Prada, Jakarta Pusat | hal. 24 | ✅ |
| Shake Out Run | 28 Nov 2026, 05.30 – 08.00 WIB, Menteng Prada | hal. 26 | ✅ |
| Race Day | Minggu, 29 Nov 2026, 04.00 – 10.00 WIB, Plaza Barat GBK Senayan | hal. 9, 29 + klien | ✅ |

> Fase **Road to Event** (deck hal. 9, 19–22) sengaja **tidak dimasukkan** ke timeline v1.2 — lihat Lampiran C. Timeline di situs berjalan: Kick Off (Agu) → Open Registration (Agu) → Race Pack Collection (27–28 Nov) → Shake Out Run (28 Nov) → Race Day (29 Nov). Jangan tambahkan fase perantara sendiri untuk "mengisi" jarak Agustus–November di visual timeline; biarkan jaraknya terlihat apa adanya.

### 3.5 Harga & Fase Promo

| # | Nama fase | Diskon | Target | Sumber |
|---|---|---|---|---|
| 1 | *(fase pre-sale eksklusif partner)* | 40% | — | hal. 15 |
| 2 | Super Early Bird | 35% | Peserta IWHM 2025 | hal. 15 |
| 3 | Early Bird | 30% | Publik, periode terbatas | hal. 15 |
| 4 | General Sales | 0% | Publik, harga normal | hal. 15 |
| 5 | Partnership Program | 20% | Komunitas, influencer, media partner | hal. 15 |

🔴 **HARGA DASAR TIDAK ADA DI DECK.** Angka "Dari IDR 385K" hanya muncul di mockup aplikasi (hal. 14) yang diberi catatan *"Visuals are for illustration purposes only"* — **jangan dipakai sebagai harga**. Deck juga tidak menyebut tanggal mulai/berakhir tiap fase.

**Instruksi render halaman Tiket:** tampilkan 5 fase sebagai kartu dengan nama + persentase diskon + target audiens. Kolom harga dan kolom periode diisi `Segera diumumkan` / `To be announced` dengan badge `TBC`. Fase #1 di deck bernama "BRI Exclusive Pre-Sale" — karena aturan §1.4, render sebagai **"Partner Exclusive Pre-Sale"** dan beri komentar `<!-- Nama fase disamarkan: deck menyebut sponsor yang belum terkonfirmasi. Konfirmasi penamaan final ke klien. -->`. Kalau klien belum konfirmasi, pertimbangkan sembunyikan fase #1 sepenuhnya.

### 3.6 Road to IWHM — ⛔ DI LUAR SCOPE (v1.2)

Seluruh materi Road to Event (Sister Strides, Well & Wealthy, jadwal Jakarta/BSD/Bekasi) **dikeluarkan dari build ini** atas instruksi klien 31 Agustus 2026.

**Jangan bangun halamannya, jangan buat teasernya, jangan sebut namanya di navigasi, di timeline, atau di naskah manapun.**

Data dan naskahnya diarsipkan utuh di **Lampiran C** — jangan dihapus dari file ini. Kalau klien nanti memasukkannya kembali, materi itu bisa dipasang tanpa riset ulang.

Konsekuensi yang harus kamu perhatikan:
- Nomor halaman bergeser: situs jadi **14 halaman × 2 bahasa = 28 file**.
- Menu "Program" hilang seluruhnya dari navigasi.
- Naskah Tentang jadi **empat bagian**, bukan lima.
- Istilah *Sister Strides* dan *Well & Wealthy* keluar dari daftar istilah §9.1.
- Angka "45++ komunitas lari" **tetap dipakai** — itu fakta terpisah (§3.8) tentang jaringan mitra, bukan bagian dari program Road to Event.

### 3.7 Aktivasi & Fasilitas

| Area | Isi | Sumber |
|---|---|---|
| Race Pack Collection | Sports apparel & equipment pop-up store, culinary tenant, sports treatment, beauty treatment, photo spot, beauty pop-up corner | hal. 25 |
| Race Village | Sports apparel & equipment pop-up store, culinary tenant, entertainment, recovery area, interactive booth, photo spot | hal. 31 |
| Cheering Zone | Zona sorak berdedikasi di sepanjang rute | hal. 30 |

🔴 **Tidak ada di deck:** isi race pack (jersey, medali, BIB, goodie bag), desain medali/jersey, water station, medical support, baggage, penitipan anak.

### 3.8 Skala Komunitas & Sosial Media

| Metrik | Nilai | Sumber | Catatan |
|---|---|---|---|
| Komunitas lari mitra | 45++ | hal. 8 | ✅ |
| Jangkauan jaringan | 6.000++ orang | hal. 8 | ✅ |
| Account impressions | >4 juta | hal. 4 | periode Des 2024 – Mei 2025 |
| Account reached | >318.000 | hal. 4 | periode Des 2024 – Mei 2025 |
| Profile visit | >175.000 | hal. 4 | periode Des 2024 – Mei 2025 |
| Content interaction | >62.000 | hal. 4 | periode Des 2024 – Mei 2025 |

> **Penting:** angka sosmed adalah performa **kampanye edisi sebelumnya (Des 2024 – Mei 2025)**, bukan angka 2026. Kalau ditampilkan di situs publik, wajib diberi label periode. Rekomendasi: angka ini lebih cocok untuk halaman sponsor/partner ketimbang halaman utama.

### 3.9 Copy Tema (hal. 5) — RUSAK DI SUMBER

Teks di deck terpotong di awal: *"…ether in 2025, this year celebrates growth, courage, and the unstoppable spirit of women who keep moving forward. Because beyond the medals and miles, the Unstoppable Her Journey is about the strength, confidence, and sisterhood we build along the way — and the power within that makes us unstoppable."*

Kata pertama hilang (kemungkinan besar potongan dari "…brought thousands of women tog**ether** in 2025…"). **Jangan tebak dan tulis sebagai copy final.** Render mulai dari "This year celebrates growth…" dan tandai `<!-- TODO: minta kalimat pembuka lengkap ke klien — copy di deck hal.5 terpotong -->`.

### 3.10 Deskripsi Resmi IWHM — ✅ `CONFIRMED-KLIEN`

Sumber: disampaikan langsung oleh klien, 31 Agustus 2026. **Ini teks otoritatif** — bukan dari deck, dan tidak boleh diubah kata-katanya saat dikutip utuh.

> Indonesia Women Half Marathon (IWHM) is a women's running event that celebrates strength, resilience, and unity.
> With 5K, 10K, and Half Marathon categories, the event encourages women to challenge themselves, support each other, and grow together.

**Tiga pilar naratif yang diturunkan dari teks ini** — seluruh copy situs harus bisa dilacak balik ke salah satunya:

| Pilar | EN | ID | Turunan verba |
|---|---|---|---|
| 1 | Strength | Kekuatan | *challenge themselves* → menantang diri |
| 2 | Resilience | Ketangguhan | *grow together* → tumbuh bersama |
| 3 | Unity | Kebersamaan | *support each other* → saling menguatkan |

**Cara pakai:**
- Terjemahan resmi ID (dipakai di meta description dan halaman Tentang):
  *"Indonesia Women Half Marathon (IWHM) adalah event lari perempuan yang merayakan kekuatan, ketangguhan, dan kebersamaan. Dengan kategori 5K, 10K, dan Half Marathon, IWHM mengajak perempuan untuk menantang diri, saling menguatkan, dan tumbuh bersama."*
- Simpan sebagai `EVENT.description` di `data.js` supaya konsisten di meta tag, OG description, JSON-LD, dan halaman Tentang.
- Elaborasi naratifnya ada di §9.3–9.5. Elaborasi itu berstatus **DRAFT**, deskripsi di atas berstatus **final**.

---

## §4 — YANG DILARANG MASUK KE SITUS

Halaman deck berikut **tidak boleh** jadi konten publik:

| Hal. | Isi | Alasan |
|---|---|---|
| 11, 12 | Brand representative & BRI benefit press conference | Inventory sponsorship |
| 14, 16, 17 | BRImo, BRI VA, savings program, akuisisi nasabah | Inventory sponsorship |
| 22 | BRI Runners, BRI branding Road to Event | Inventory sponsorship |
| 27, 35, 36 | Booth BRI, QRIS/EDC, flag-off rep, Finisher Medal Monday | Inventory sponsorship |
| 32, 33 | "Dedicated spot for brand experience/branding" | Materi jualan ke sponsor |
| 4 | Statistik sosmed | Boleh, tapi hanya di halaman partner + label periode |

Kalau nanti sponsorship terkonfirmasi, penambahan logo/nama sponsor dilakukan lewat `data.js` bagian `PARTNERS` — bukan dengan menulis ulang halaman.

---

## §5 — ARSITEKTUR TEKNIS

### 5.1 Stack
Static HTML + CSS + vanilla JS. **Tanpa framework, tanpa build step, tanpa bundler.** Alasan: kontennya informasional, tidak ada state kompleks, dan ini menyamai arsitektur benchmark PLN yang sudah terbukti jalan di Railway.

> Kalau kamu menilai Next.js lebih tepat, **ajukan dulu argumennya di GATE 0** — jangan langsung ganti stack.

### 5.2 Struktur folder

```
/
├── index.html                  → redirect ke /id/
├── robots.txt
├── sitemap.xml
├── server.js                   → static server minimal untuk Railway
├── package.json
├── /assets
│   ├── /css
│   │   ├── tokens.css          → variabel desain
│   │   ├── base.css            → reset, tipografi, layout primitives
│   │   ├── components.css      → nav, card, badge, timeline, accordion
│   │   └── pages.css           → styling spesifik halaman
│   ├── /js
│   │   ├── data.js             → SINGLE SOURCE OF TRUTH
│   │   ├── main.js             → inject header/footer, nav, language switch, modal
│   │   ├── countdown.js
│   │   └── accordion.js
│   ├── /partials
│   │   ├── header-id.html   header-en.html
│   │   └── footer-id.html   footer-en.html
│   └── /img
│       ├── /logo        → 8 SVG (sudah ada)
│       ├── /graphics    → supergraphic + elemen gerak (sudah ada)
│       ├── /bg          → mesh WebP (sudah ada)
│       └── /hero  /partners  /gallery   → masih kosong, tunggu aset
│       └── /icons/sprite.svg
├── /id   → 14 halaman
└── /en   → 14 halaman (mirror)
```

### 5.3 Deployment
Railway, static server (`express` atau `serve`). Konfigurasikan tapi **jangan jalankan deploy**. Sertakan catatan branch/environment di `README.md`.

---

## §6 — DESIGN SYSTEM

### 6.1 Palet — dari aset brand resmi

Nilai di bawah dibaca **langsung dari sumber vektor** `LOGO IWHM2.ai` (`rgb(55.2948%, 22.3526%, 89.804077%)` → `#8D39E5`), konsisten di keenam file logo, seluruh supergraphic, dan background. Ini bukan lagi perkiraan.

| Token | Hex | Asal | Peran |
|---|---|---|---|
| `--violet` | `#8D39E5` | Sumber vektor logo | **Warna utama** |
| `--magenta` | `#C939E5` | Ujung awal gradasi background | Aksen kedua, gradasi |
| `--citrus` | `#EAFF52` | Ujung akhir gradasi background | Aksen sorot, angka besar |
| `--ink` | `#1E0728` | Teks judul deck | Latar gelap & teks utama |
| `--mauve` | `#C8A2C9` | Aset mesh | Latar lembut, panel, badge TBC |
| `--paper` | `#FFFFFF` | — | Latar terang |

**Gradasi resmi** (hasil sampling dari `BACKGROUNDIWHM2-02/03`, tidak perlu file gambar):

```css
--gradient-brand:  linear-gradient(90deg, #C939E5 0%, #CB45DC 25%, #D16AC1 50%, #E2D075 87%, #EAFF52 100%);
--gradient-violet: linear-gradient(90deg, #F262E5 0%, #AC46E5 25%, #933CE5 50%, #8D39E5 75%);
```

> ⚠️ **Ada dua sub-sistem warna dalam paket aset.** Logo/supergraphic/background memakai `#8D39E5`; sementara `IWHM 2026 ELEMENTS.png` dan mesh M1/M2 memakai `#A120EF` + `#C8A2C9`. Situs memakai `#8D39E5`. Kalau kamu menempatkan aset mesh berdampingan dengan warna solid `--violet`, selisihnya akan terlihat — pisahkan keduanya dengan jarak, jangan ditempel. Sudah masuk daftar pertanyaan §13 no. 21.

### 6.2 Kontras — sudah dihitung, patuhi ini

| Kombinasi | Rasio | Aturan |
|---|---|---|
| `#FFFFFF` di `#8D39E5` | 5.46:1 | ✅ AA semua ukuran |
| `#EAFF52` di `#8D39E5` | 4.72:1 | ✅ AA semua ukuran |
| `#8D39E5` di `#FFFFFF` | 5.46:1 | ✅ AA semua ukuran |
| `#1E0728` di `#C939E5` | 4.66:1 | ✅ AA — di atas magenta pakai teks **gelap** |
| `#FFFFFF` di `#C939E5` | 4.04:1 | ⚠️ teks besar saja (≥24px / ≥18.7px bold) |
| `#1E0728` di `#8D39E5` | 3.45:1 | ⚠️ teks besar saja |
| `#FFFFFF` di `#1E0728` | 18.81:1 | ✅ |
| `#1E0728` di `#C8A2C9` | 8.48:1 | ✅ |
| `#EAFF52` di `#FFFFFF` | 1.24:1 | 🚫 **jangan pernah** |

> Koreksi warna di v1.3 justru memperbaiki aksesibilitas: aksen terang di atas ungu sekarang lolos AA untuk teks normal, sebelumnya gagal tipis di 4.49:1.

### 6.3 Tipografi

Font brand asli adalah **Paris2024** (dipakai untuk wordmark logo) dan **Comba Test Bold Ultra Wide**. **Keduanya tidak boleh dipakai di situs** sampai status lisensinya jelas:

| Font | Temuan | Status |
|---|---|---|
| Comba Test Bold Ultra Wide | File lisensi dalam paket berbunyi `License: Demo / Trial` | 🔴 **Jangan pakai** |
| Paris2024 | Metadata: merek dagang Paris 2024 Olympic and Paralympic Games; `fsType 4` = preview & print, bukan editable embedding | 🔴 **Tunggu keputusan legal** |

**Wordmark logo tidak butuh font** — sudah tersedia sebagai vektor di `assets/img/logo/`. Jadi masalah lisensi hanya menyangkut heading dan body situs.

```css
--font-display: 'Fredoka', system-ui, sans-serif;   /* variable: wght 700, wdth 125 */
--font-body:    'Barlow', system-ui, sans-serif;
```

**Fredoka** dipilih setelah dirender berdampingan dengan Paris2024: sama-sama geometris dengan terminal membulat, dan punya sumbu lebar asli. Ini menggantikan rekomendasi Archivo di v1.2, yang dibuat sebelum font brand asli terlihat. Archivo terlalu tajam dan grotesk. **Tetap minta approval desainer** — kemiripan ini penilaian bentuk, bukan pencocokan metrik.

**Barlow** untuk body: font ini memang tertanam di deck asli, dan tersedia bebas di Google Fonts.

Dua family saja. Jangan tambah font ketiga untuk label kecil.

### 6.4 Signature device — sistem grafis brand

> **Koreksi v1.3.** Usulan "petal mask" di v1.2 **dicabut**. Saya menyusunnya dari logo saja, sebelum paket aset diterima. Brand ternyata sudah punya sistem grafis lengkap — pakai itu, jangan bikin sendiri.

Tiga keluarga grafis tersedia di `assets/img/graphics/`:

| Keluarga | File | Bentuk | Pakai untuk |
|---|---|---|---|
| **Elemen gerak** | `element-01…10.webp` | Chevron/burst bersudut dengan motion blur | **Signature utama** |
| **Loop** | `supergraphic-loop-*.svg/.webp` | Pita melingkar, blend garis, bergradasi | Momen besar: hero, penutup halaman |
| **Wave** | `supergraphic-wave-*.svg` | Gelombang sinus blend garis | Pemisah antar-section |

**Signature device = elemen gerak.** Bentuknya chevron berarah dengan motion blur — secara harfiah menggambarkan gerak maju, dan itu tepat untuk event lari. Pakai untuk: penanda section, bullet daftar, aksen di belakang angka besar, transisi hero.

Aturan pemakaian:
- **Satu keluarga per section.** Jangan menumpuk loop, wave, dan elemen dalam satu layar.
- **Elemen gerak jangan diskalakan di atas 480px** — sumbernya raster, akan pecah. Untuk ukuran besar pakai keluarga loop yang vektor.
- **Loop dan wave sudah bergradasi sendiri.** Jangan tambahkan gradasi CSS di atasnya.
- `supergraphic-13/14` (blob blur) sengaja tidak diekspor — bikin dengan CSS `radial-gradient`, lebih ringan.

> `element-02`, `-07`, dan `-09` masih membawa serpihan tipis dari elemen tetangga karena sheet sumbernya PNG datar tanpa vektor. Pakai ketiganya kecil-kecil saja, atau hindari, sampai file vektornya datang (§13 no. 22).

### 6.5 Anti-pattern — jangan lakukan

Situs ini akan tertangkap sebagai hasil template kalau muncul hal berikut:

1. ~~Jangan pakai bentuk bersudut~~ — **dicabut di v1.3.** Larangan ini keliru: brand IWHM justru punya sistem chevron bersudut. Pembeda dari situs PLN bukan bulat-versus-sudut, melainkan karakternya — PLN memakai pecahan kaca statis, IWHM memakai chevron berarah dengan blur gerak dan gradasi. **Yang tetap dilarang:** menyalin `clip-path: polygon(...)` bersudut tajam ala PLN sebagai motif utama.
2. **Jangan pakai eyebrow ALL-CAPS ter-*tracking* di atas setiap heading.** Sekali dua kali boleh, di setiap section tidak.
3. **Jangan pakai penanda `01 / 02 / 03`** kecuali kontennya benar-benar berurutan. Timeline race weekend boleh. Daftar fasilitas race village tidak.
4. **Jangan mewarnai satu kata di headline** untuk "penekanan".
5. **Jangan bikin semua konten jadi kartu rounded seragam** dengan satu radius dan satu shadow abu-abu.
6. **Jangan tempel `→` di akhir setiap teks tombol.**
7. **Jangan pakai animasi fade-up di setiap section.** Satu momen ter-orkestrasi (page load hero) lebih kuat dari efek tersebar.
8. **Jangan bikin gradasi ungu-ke-pink sendiri.** Gradasi resmi sudah ada di §6.1 — pakai itu.
9. **Jangan pakai visual "feminin" klise** — pink pastel, ikon bunga generik, font script. Nada brand ini atletik dan tegas.
10. **Jangan pakai poster di `05 POSTER SAMPLE` sebagai aset.** Ketiganya memuat co-brand event lain (Justisia Half Marathon) dan typo hashtag. Nilainya hanya sebagai referensi tata letak.

### 6.6 Motion
`prefers-reduced-motion: reduce` wajib dihormati. Transisi hanya sebagai respons aksi pengguna (buka accordion, buka menu, ganti bahasa). Countdown update tanpa animasi angka berputar.

---

## §7 — SITEMAP & SPESIFIKASI HALAMAN

**14 halaman × 2 bahasa = 28 file.**

### Navigasi (pola Borobudur Marathon)

```
Beranda
Tentang
Lomba ▾   → Kategori & Podium · Jadwal · Race Pack Collection · Race Day · Peraturan & Ketentuan
Info ▾    → Tanya Jawab · Berita · Galeri
Mitra
Kontak
[ID | EN]  [Daftar Sekarang]
```

> Menu "Program" dihapus di v1.2 karena satu-satunya isinya adalah Road to Event. Jangan buat dropdown kosong, dan jangan pindahkan halaman lain ke sana hanya agar strukturnya terlihat seimbang — enam item top-level sudah cukup.
>
> `about.html` sekarang top-level. Di v1.1 halaman ini tidak masuk navigasi sama sekali; itu kekeliruan, dan jadi makin penting untuk diperbaiki karena `about.html` adalah rumah utama naskah naratif.

### 7.1 `index.html` — Beranda
Hero (KV + headline §9.3 + countdown + CTA) · blok pengantar §9.3.2 · tiga kartu kategori (HM/10K/5K, masing-masing siluet kelopak berbeda, pakai one-liner §9.5) · strip fakta (4.000 pelari · 3 kategori · 45++ komunitas · usia 17–45) · ringkasan race weekend 3 kartu (RPC / Shake Out Run / Race Day) · preview fase tiket · logo mitra · 2 berita terbaru.

Tanggal dan venue di hero ditulis sebagai fakta pasti: **Minggu, 29 November 2026 · Plaza Barat, GBK Senayan** — tanpa badge TBC.

### 7.2 `about.html` — Tentang
Halaman naratif utama. Pakai naskah §9.4 secara berurutan (**empat bagian**), lalu: siapa pesertanya (segmen + usia) · jaringan 45++ komunitas · CTA ke kategori.

Struktur visual: **bukan** empat kartu seragam. Ganti ritme antar bagian — bagian 1 dan 4 di latar `--ink`, bagian 3 di latar `--violet`, bagian 2 di `--paper`. Naskah panjang di kolom `--container-narrow` (≤ 70 karakter per baris). Kutipan deskripsi resmi §3.10 ditampilkan sekali saja, di bagian 1, sebagai blok tersendiri.

### 7.3 `categories.html` — Kategori & Podium
Tiga kategori dengan deskripsi asli deck (§3.3) · tabel podium Open/Master 1–3 per kategori · semua kolom yang tidak ada di deck (jarak HM, COT, batas usia Master, hadiah) di-render `TBC`.

### 7.4 `schedule.html` — Jadwal
Timeline besar dari kick-off sampai race day (§3.4) · detail race weekend jam per jam · catatan "subject to change".

### 7.5 `tickets.html` — Registrasi & Harga
Lima fase promo sebagai kartu (§3.5) · kolom harga & periode `TBC` · langkah pendaftaran · CTA link keluar.

### 7.6 `race-pack.html` — Race Pack Collection
Tanggal, lokasi, jam · daftar yang ada di lokasi (§3.7) · Shake Out Run · isi race pack `TBC` · syarat pengambilan `TBC`.

### 7.7 `race-day.html` — Race Day
**Minggu, 29 November 2026 · 04.00 – 10.00 WIB · Plaza Barat, GBK Senayan, Jakarta** · isi Race Village · Cheering Zone · rute `TBC` (placeholder peta) · fasilitas `TBC`.

### 7.8 `rules.html` — Peraturan & Ketentuan
🔴 **Tidak ada satupun peraturan di deck.** Render struktur bab kosong (kelayakan peserta, verifikasi usia, transfer BIB, refund, larangan, diskualifikasi, force majeure) dengan badge `Menunggu naskah resmi` dan komentar TODO. **Jangan tulis peraturan karangan.**

### 7.9 `faq.html` — Tanya Jawab
Accordion. Boleh dijawab dari sumber: kategori apa saja, kapan & di mana (sekarang sudah pasti), siapa yang boleh ikut, kapan RPC. Sisanya `TBC`. **Jangan buat pertanyaan tentang Road to Event / sesi latihan mingguan.**

### 7.10 `news.html` · 7.11 `gallery.html` · 7.12 `partners.html` · 7.13 `contact.html` · 7.14 `privacy.html`
- News: driven dari `data.js`, 2 entri awal (press conference Agustus, pembukaan registrasi).
- Gallery: grid placeholder + catatan hak pakai foto.
- Partners: struktur tier bertingkat kosong (pola Borobudur) — **tanpa logo sponsor manapun** sampai dikonfirmasi.
- Contact: 🔴 email/WA/sosmed tidak ada di deck. Placeholder + TODO.
- Privacy: kerangka + TODO nama badan hukum penyelenggara.

---

## §8 — KOMPONEN

| Komponen | Perilaku |
|---|---|
| `data-countdown` | Hitung mundur ke `raceDayISO` (29 Nov 2026, 04.00 WIB). Tanggal sudah pasti — tampilkan lugas, tanpa label peringatan. |
| `data-category-cards` | Render dari `CATEGORIES`, siluet kelopak berbeda per kategori. |
| `data-ticket-tiers` | Render dari `TICKETS`. Harga `null` → "Segera diumumkan" + badge TBC. |
| `data-timeline` | Render dari `TIMELINE`. |
| `data-podium` | Tabel dari `PODIUM`. |
| `badge--tbc` | Chip netral (bukan merah/warning) bertuliskan "Menunggu konfirmasi" / "To be confirmed". |
| `data-register` | Kalau `REGISTRATION_URL` null → modal informasi, bukan form. |
| Language switch | Pindah `/id/↔/en/` mempertahankan path & hash. |

---

## §9 — COPYWRITING & NASKAH STORYTELLING

### 9.1 Aturan umum
- Nada: atletik, tegas, hangat. Bukan korporat, bukan melankolis.
- Bahasa Indonesia natural. Versi EN adalah **adaptasi**, bukan terjemahan harfiah — jangan "diperbaiki" agar sejajar kata per kata dengan versi ID.
- Istilah yang tidak diterjemahkan: *Race Pack Collection, Shake Out Run, Race Village, Cheering Zone, pace, finisher*.
- CTA menyebut apa yang terjadi: "Daftar Sekarang" / "Lihat Jadwal Lengkap" — bukan "Submit", bukan "Learn More".
- Kondisi kosong bukan permintaan maaf: "Rute akan diumumkan setelah verifikasi lintasan selesai." bukan "Maaf, informasi belum tersedia."

### 9.2 Guardrail naskah

> ⚠️ **Naskah di §9.3–9.5 berstatus `DRAFT-COPY`.** Deskripsi resmi §3.10 sudah final; elaborasi naratif di bawah ini belum disetujui klien. Tandai setiap blok dengan `<!-- DRAFT-COPY: menunggu approval klien -->` agar mudah dicari saat revisi.

Aturan keras:
1. **Naskah di bawah ini adalah satu-satunya narasi panjang yang boleh dipakai.** Jangan menulis paragraf marketing tambahan sendiri. Kalau sebuah halaman terasa kosong, isi dengan fakta dari §3 — bukan dengan copy karangan.
2. **Klaim terlarang** (jangan tulis di manapun, termasuk meta description): "event lari perempuan terbesar di Indonesia", "rute tersertifikasi AIMS/World Athletics", "diikuti pelari dari X negara", jumlah edisi ("edisi ke-2"), testimoni peserta, kutipan tokoh.
3. **Jangan menyebut jarak Half Marathon dalam angka** sampai §13 no. 9 dijawab. Tulis "Half Marathon", bukan "21K".
4. **Jangan menyebut jam start** dalam naskah. Deck hanya mengonfirmasi jam operasional 04.00–10.00 WIB, bukan gun time. Kalimat "sebelum matahari terbit" aman; "start pukul 05.00" tidak.
5. **Naskah panjang tinggal di HTML, bukan di `data.js`.** Yang masuk `data.js` hanya string pendek: `EVENT.description`, headline hero, one-liner kategori.
6. **Jangan menyebut Road to Event, Sister Strides, Well & Wealthy, atau sesi latihan mingguan** di naskah manapun (§3.6). Jangan pula menggantinya dengan program karangan seperti "training program" atau "komunitas latihan" — kalau programnya keluar dari scope, ceritanya juga keluar.

### 9.3 Beranda

**Hero — opsi utama**

| | ID | EN |
|---|---|---|
| H1 | Sebelum matahari terbit, Senayan sudah bergerak. | Before sunrise, Senayan is already moving. |
| Sub | Indonesia Women Half Marathon 2026 — 5K, 10K, dan Half Marathon. Sebuah perayaan kekuatan, ketangguhan, dan kebersamaan. | Indonesia Women Half Marathon 2026 — 5K, 10K, and Half Marathon. A celebration of strength, resilience, and unity. |

**Hero — opsi alternatif** (pakai kalau klien ingin naskah yang lebih literal ke deskripsi resmi)

| | ID | EN |
|---|---|---|
| H1 | Menantang diri. Saling menguatkan. Tumbuh bersama. | Challenge yourself. Lift each other. Grow together. |

> Ajukan kedua opsi ke klien di GATE 1 lewat screenshot, jangan pilih sendiri. Opsi utama lebih spesifik dan lebih sulit ditiru event lain; opsi alternatif lebih aman karena memakai kata-kata klien sendiri.

**9.3.2 — Blok pengantar di bawah hero**

*ID:*
> IWHM adalah event lari perempuan dengan tiga kategori — 5K, 10K, dan Half Marathon. Ketiganya berangkat dari premis yang sama: perjalanan seorang pelari dimulai jauh sebelum garis start, dan tidak pernah benar-benar ditempuh sendirian.

*EN:*
> IWHM is a women's running event with three categories — 5K, 10K, and Half Marathon. All three begin from the same premise: a runner's journey starts long before the start line, and is never really run alone.

CTA: `Baca cerita lengkapnya` / `Read the full story` → `about.html`

### 9.4 Halaman Tentang — naskah lima bagian

---

**Bagian 1 — `Lomba yang tidak dimulai di garis start` / `A race that doesn't begin at the start line`**

*ID:*
> Indonesia Women Half Marathon (IWHM) adalah event lari perempuan yang merayakan kekuatan, ketangguhan, dan kebersamaan. Dengan kategori 5K, 10K, dan Half Marathon, IWHM mengajak perempuan untuk menantang diri, saling menguatkan, dan tumbuh bersama.
>
> Tapi perjalanan seorang pelari jarang benar-benar dimulai di garis start. Ia dimulai berbulan-bulan sebelumnya — di Minggu pagi pertama yang terasa terlalu pagi, di kilometer ketiga yang terasa terlalu jauh, di keputusan kecil untuk tetap keluar rumah padahal tidak ada satu pun orang yang menuntutnya.

*EN:*
> Indonesia Women Half Marathon (IWHM) is a women's running event that celebrates strength, resilience, and unity. With 5K, 10K, and Half Marathon categories, the event encourages women to challenge themselves, support each other, and grow together.
>
> But a runner's journey rarely begins at the start line. It begins months earlier — on the first Sunday that felt too early, at the third kilometre that felt too far, in the small decision to head out the door when nobody was asking her to.

> Paragraf pertama adalah kutipan resmi §3.10. **Jangan diedit.** Render sebagai blok kutipan visual yang terpisah dari paragraf kedua.

---

**Bagian 2 — `Tiga jarak, satu pertanyaan yang sama` / `Three distances, one question`**

*ID:*
> 5K, 10K, dan Half Marathon bukan anak tangga yang harus dinaiki berurutan. Ketiganya adalah tiga cara berbeda untuk menanyakan hal yang sama pada diri sendiri: sejauh apa aku sanggup?
>
> Untuk sebagian orang, jawabannya adalah lima kilometer pertama dalam hidup mereka. Untuk yang lain, Half Marathon yang entah sudah ke berapa. Bobot pertanyaannya tidak berbeda. Keberanian yang dibutuhkan untuk mendaftar juga sama.

*EN:*
> 5K, 10K, and Half Marathon are not rungs on a ladder to be climbed in order. They are three different ways of asking yourself the same question: how far can I go?
>
> For some, the answer is the first five kilometres of their life. For others, it's another half marathon in a long line of them. The question weighs the same either way. So does the courage it takes to sign up.

---

**Bagian 3 — `Berlomba, tanpa saling mengalahkan` / `A race you don't win by beating anyone`**

*ID:*
> Ada podium di IWHM, dan ada pelari yang datang untuk memenanginya. Tapi di antara garis start dan garis finis, ada hal lain yang juga terjadi.
>
> Seseorang memperlambat langkah supaya pelari di sampingnya tidak tertinggal. Seseorang berteriak dari Cheering Zone untuk orang yang sama sekali tidak ia kenal. Seseorang sudah selesai berlari, tapi memilih tetap berdiri di dekat garis finis — bukan untuk medalinya, tapi untuk temannya yang belum sampai.
>
> Bagian ini tidak pernah muncul di catatan waktu.

*EN:*
> There is a podium at IWHM, and there are runners who come for it. But between the start and the finish, something else happens too.
>
> Someone slows down so the runner beside her doesn't fall behind. Someone shouts from the Cheering Zone for a complete stranger. Someone has already finished, and stays by the line anyway — not for the medal, but for a friend still out on the course.
>
> None of this ever shows up in the results.

> Bagian ini di latar `--violet`. Ini titik emosional halaman — beri ruang putih paling lega di sini, jangan ditumpuk foto.

---

**Bagian 4 — `Melanjutkan gerakan, memaknai ulang perjalanan` / `Continuing the movement, redefining the journey`**

*ID:*
> IWHM 2026 melanjutkan apa yang sudah dibangun di 2025 — dan menantang dirinya sendiri untuk melangkah lebih jauh. Bukan sekadar soal jarak yang lebih panjang atau peserta yang lebih banyak, tapi soal seberapa dalam sebuah lomba lari bisa berarti bagi orang-orang yang menjalaninya.
>
> Karena di luar medali dan kilometer, yang paling layak dirayakan adalah kekuatan, kepercayaan diri, dan kebersamaan yang tumbuh di sepanjang jalan. Itulah yang membuat perjalanan ini tidak bisa dihentikan.
>
> **#UnstoppableHerJourney**

*EN:*
> IWHM 2026 continues what was built in 2025 — and pushes itself further. Not only in distance or in numbers, but in how much a running event can actually mean to the people who live it.
>
> Because beyond the medals and the miles, what deserves celebrating is the strength, the confidence, and the sisterhood built along the way. That is what makes this journey unstoppable.
>
> **#UnstoppableHerJourney**

> Paragraf kedua adalah parafrase dari copy tema di deck hal. 5 — jadi tetap terlacak ke sumber. Judul bagian ini adalah terjemahan langsung dari tema resmi "Continuing the Movement, Redefining the Journey" (§3.1).

---

> **Catatan struktur (v1.2):** naskah ini semula lima bagian. Bagian keempat — "Empat bulan sebelum pagi itu" — bersandar sepenuhnya pada program Road to Event, jadi ikut keluar bersamanya. Naskahnya diarsipkan di Lampiran C.
>
> Alurnya tetap utuh tanpa bagian itu: **mulai dari sebelum garis start → tiga jarak satu pertanyaan → berlomba tanpa saling mengalahkan → melanjutkan gerakan.** Empat bagian, empat latar berbeda, satu busur cerita. **Jangan tambahkan bagian pengganti.** Halaman yang lebih pendek dan jujur lebih baik daripada halaman panjang yang diisi paragraf karangan.

---

### 9.5 One-liner kategori

Dipakai di atas deskripsi faktual dari deck (§3.3), bukan menggantikannya. Urutan tampil ikut deck: HM → 10K → 5K.

| Kategori | ID | EN |
|---|---|---|
| HM | Jarak yang menuntut kamu hadir jauh sebelum hari lombanya. | The distance that asks you to show up months before race day. |
| 10K | Cukup jauh untuk terasa, cukup dekat untuk dikejar. | Far enough to feel it. Close enough to chase. |
| 5K | Jarak pertama, atau jarak yang paling ramai. | The first distance — or the loudest one. |

---

## §10 — SEO, PERFORMA, AKSESIBILITAS

- `hreflang` id/en/x-default di setiap halaman; `sitemap.xml` lengkap.
- Open Graph + Twitter card; OG image 1200×630 (masuk ASSET-REQUEST).
- JSON-LD `SportsEvent` — sekarang **boleh dipasang penuh** karena tanggal dan venue sudah pasti. Isi `startDate` (`2026-11-29T04:00:00+07:00`), `location` (Plaza Barat, GBK Senayan, Jakarta), `name`, `description` (§3.10), `organizer`. **Jangan isi `offers.price`** sampai harga dikonfirmasi — kosongkan `offers` seluruhnya, jangan diisi `0`.
- Semua gambar `width`/`height` eksplisit + `loading="lazy"` selain hero.
- Font `display=swap`, `preconnect`.
- Target Lighthouse ≥90 Performance, ≥95 Accessibility.
- Fokus keyboard terlihat, skip-link, kontras sesuai §6.2, `lang` benar per halaman.

---

## §11 — TAHAPAN KERJA & GATE

| Tahap | Isi | Gate |
|---|---|---|
| **0** | Investigasi §2 | 🔴 approval |
| **1** | `tokens.css` + `base.css` + `data.js` + partials header/footer + halaman `/id/index.html` saja | 🔴 approval — kirim screenshot desktop & mobile |
| **2** | Sisa halaman `/id/` | 🔴 approval |
| **3** | Mirror `/en/` + language switch | 🔴 approval |
| **4** | SEO, sitemap, robots, JSON-LD, a11y audit | 🔴 approval |
| **5** | Konfigurasi Railway + README (**tanpa deploy**) | 🔴 approval |

Sebelum setiap gate: catat commit hash terakhir yang diketahui baik, supaya rollback jelas.

---

## §12 — ACCEPTANCE CRITERIA

Checklist ini dijalankan sebelum tahap 5 dinyatakan selesai:

- [ ] `grep -ri "bri\|brimo" --include="*.html" --include="*.js" --include="*.css" .` → **nol hasil**
- [ ] Tidak ada tanggal/harga/kuota di-hardcode di file HTML (`grep -rn "2026" id/ en/` hanya menemukan tahun di judul/copyright)
- [ ] Tidak ada harga karangan — `grep -rn "385\|IDR [0-9]" .` hanya menemukan `null` atau string "Segera diumumkan"
- [ ] Setiap fakta berstatus 🟡/🔴 di §3 punya badge TBC yang terlihat + komentar TODO
- [ ] **Tanggal & venue race day TIDAK memakai badge TBC** — `grep -rn "29 November\|Plaza Barat" id/ en/` tidak berdampingan dengan `badge--tbc`
- [ ] `grep -rin "road to\|sister strides\|well & wealthy\|22 November\|Parkir Timur"` → **nol hasil**
- [ ] Tidak ada file `road-to-event.html`, tidak ada menu "Program", tidak ada dropdown kosong di nav
- [ ] Halaman Tentang berisi **empat** bagian naratif, bukan lima
- [ ] 28 halaman ada semua; setiap `/id/x.html` punya `/en/x.html`
- [ ] `sitemap.xml` memuat 28 URL dengan `hreflang` lengkap
- [ ] Tidak ada `<form>` yang mengumpulkan data pribadi
- [ ] Semua kombinasi warna teks lolos §6.2 (cek kontras teks lime, ini yang paling rawan)
- [ ] Responsif di 375 / 768 / 1024 / 1440
- [ ] `prefers-reduced-motion` dihormati
- [ ] Tidak ada `console.error` saat load
- [ ] `DESIGN-PLAN.md` sudah dikritik terhadap §6.5 dan hasil revisinya tercatat
- [ ] Kutipan deskripsi resmi §3.10 muncul **persis** (tanpa edit) dan hanya sekali per bahasa
- [ ] Tidak ada narasi panjang di luar §9.3–9.5 — `grep -rn "DRAFT-COPY" id/ en/` menemukan semua blok naratif, dan tidak ada paragraf marketing tanpa marker itu
- [ ] `grep -rin "terbesar\|largest\|AIMS\|World Athletics\|edisi ke-\|21K\|21 km"` → **nol hasil**
- [ ] Panjang baris naskah panjang ≤ 70 karakter di viewport desktop
- [ ] `grep -rin "A120EF\|CyGrotesk\|Paris2024\|Comba\|petal-mask"` → **nol hasil**
- [ ] Tidak ada `@font-face` untuk Paris2024 atau Comba Test di CSS manapun
- [ ] Tidak ada file background gradasi — ketiganya CSS (§6.1)
- [ ] Tidak ada aset dari `05 POSTER SAMPLE` yang masuk repo
- [ ] Elemen chevron tidak dirender lebih besar dari 480px

---

## §13 — PERTANYAAN KE KLIEN

### ✅ Sudah terjawab (31 Agu 2026)
- ~~Race day: 22 atau 29 November?~~ → **29 November 2026**
- ~~Venue: Plaza Parkir Timur atau Plaza Barat?~~ → **Plaza Barat, GBK Senayan**
- ~~Road to Event masuk situs atau tidak?~~ → **tidak, dikeluarkan dari scope**

### 🔴 Blocking (situs tidak bisa dipublikasikan tanpa ini)
1. **Harga dasar per kategori** (HM / 10K / 5K) sebelum diskon.
2. **URL & platform pendaftaran** resmi.
3. **Status sponsorship** — apakah nama sponsor sudah boleh ditampilkan?
4. **Domain final** untuk canonical, sitemap, dan OG.
5. **Naskah Peraturan & Ketentuan** resmi.
6. **Kontak resmi**: email, WhatsApp, akun Instagram/TikTok.

### 🟡 Penting (bisa diisi TBC di rilis awal)
7. Jarak resmi HM dalam angka.
8. Cut-off time per kategori.
9. Batas usia kategori Master.
10. Nilai hadiah podium.
11. Kuota per kategori (total 4.000 dibagi bagaimana).
12. Jam start per kategori.
13. Tanggal mulai/akhir tiap fase promo.
14. Isi race pack & syarat pengambilan.
15. Peta rute.
16. Nama final fase pre-sale 40% (§3.5).
17. **Approval naskah storytelling §9.3–9.5** — termasuk memilih antara dua opsi headline hero (§9.3).
18. Konfirmasi bahwa IWHM 2025 boleh dirujuk secara terbuka di halaman Tentang (§9.4 bagian 4).
19. Apakah disclaimer "venue dapat berubah" masih perlu ditampilkan di halaman Race Day (§3.2)?
20. Apakah Road to Event akan dimasukkan di rilis berikutnya, atau ditiadakan sepenuhnya? Jawaban ini menentukan apakah Lampiran C dipertahankan.

### 🎨 Brand & lisensi (dari `BRAND-AUDIT.md`, 31 Agu 2026)
21. **Ungu resmi `#8D39E5` atau `#A120EF`?** Paket aset memuat dua sub-sistem warna berbeda.
22. **Sumber vektor/berlapis untuk 10 elemen chevron** — sekarang hanya ada sebagai PNG datar, tiga di antaranya membawa serpihan elemen tetangga.
23. **Bentuk resmi hashtag** — poster menulis `#risewtiheverystrides` (typo `wtih` + bentuk jamak), deck menulis `#RiseWithEveryStride`.
24. 🔴 **Status lisensi Paris2024 dan pengganti Comba Test.** Comba berlisensi Demo/Trial; Paris2024 mendeklarasikan diri sebagai merek dagang penyelenggara Olimpiade dengan `fsType 4`. **Perlu keputusan legal sebelum Tahap 1** — kandidat eskalasi ke Jeff.
25. **Brand guideline resmi**, kalau ada — untuk memverifikasi seluruh nilai warna di §6.1.

### ✅ Aset yang sudah beres (31 Agu 2026)
- ~~Logo format vektor~~ → 8 SVG di `assets/img/logo/`, termasuk versi reversed transparan dan mark-only
- ~~Sistem grafis~~ → 22 file di `assets/img/graphics/` + 8 mesh di `assets/img/bg/`
- ~~Nilai warna brand~~ → dibaca dari sumber vektor, §6.1

### 🟢 Aset yang masih dibutuhkan
26. Foto berlisensi jelas untuk hero, kategori, dan galeri. **Jangan pakai foto dari deck atau poster sample** — status hak pakainya tidak jelas.
27. Favicon `.ico` multi-ukuran + OG image 1200×630, dibuat dari `logo-mark.svg`.
28. Logo mitra 800×320px transparan.
29. Kalimat pembuka lengkap copy tema (§3.9).
30. Nama badan hukum penyelenggara untuk halaman privasi.
31. Peta rute per kategori.

---

## LAMPIRAN A — Kerangka `data.js`

```js
/* ============================================================
   data.js — SINGLE SOURCE OF TRUTH
   Semua angka event (tanggal, harga, kuota, hadiah) hidup di sini.
   JANGAN hardcode nilai-nilai ini di file HTML manapun.

   Sumber: SPORTFEST__JHR__IWHM_BRI.pdf (36 hal.)
   Nilai null = belum ada di sumber → UI render badge TBC.
   ============================================================ */
(function () {
  'use strict';

  var LANG = (location.pathname.indexOf('/en/') !== -1) ? 'en' : 'id';

  // ✅ Tanggal & venue DIKONFIRMASI klien 31 Agu 2026.
  // Deck hal.6 (22 Nov / Plaza Parkir Timur) TIDAK BERLAKU — jangan dipakai.
  var EVENT = {
    raceDayISO:     '2026-11-29T04:00:00+07:00',
    raceDayConfirmed: true,
    raceDay:  { id: 'Minggu, 29 November 2026', en: 'Sunday, 29 November 2026' },
    hours:    { id: '04.00 – 10.00 WIB',        en: '04:00 – 10:00 WIB' },
    venue:    { id: 'Plaza Barat, GBK Senayan, Jakarta',
                en: 'Plaza Barat, GBK Senayan, Jakarta' },
    venueConfirmed: true,
    quota: 4000,
    ageRange: '17–45',
    theme:    { id: null, en: 'Continuing the Movement, Redefining the Journey' },
    hashtag: '#UnstoppableHerJourney',

    // §3.10 — teks resmi dari klien (31 Agu 2026). FINAL, jangan diubah.
    // Dipakai untuk meta description, OG description, JSON-LD, dan halaman Tentang.
    description: {
      id: 'Indonesia Women Half Marathon (IWHM) adalah event lari perempuan yang merayakan kekuatan, ketangguhan, dan kebersamaan. Dengan kategori 5K, 10K, dan Half Marathon, IWHM mengajak perempuan untuk menantang diri, saling menguatkan, dan tumbuh bersama.',
      en: 'Indonesia Women Half Marathon (IWHM) is a women\'s running event that celebrates strength, resilience, and unity. With 5K, 10K, and Half Marathon categories, the event encourages women to challenge themselves, support each other, and grow together.'
    },

    // §9.3 — DRAFT, menunggu approval klien. Dua opsi, pilih salah satu.
    heroHeadline: {
      id: 'Sebelum matahari terbit, Senayan sudah bergerak.',
      en: 'Before sunrise, Senayan is already moving.'
    }
  };

  var REGISTRATION_URL  = null;               // TODO: URL pendaftaran resmi
  var REGISTRATION_OPEN = '2026-08-01';       // "AUG 2026" — tanggal persis belum ada

  // distanceKm HM = null sampai dikonfirmasi (§13 no.9). Jangan isi 21.0975.
  // tagline = §9.5, status DRAFT. desc = deskripsi faktual dari deck §3.3.
  var CATEGORIES = [
    { key: 'hm',  name: 'HM',  distanceKm: null, cot: null, petal: 'petal-i',
      tagline: { id: 'Jarak yang menuntut kamu hadir jauh sebelum hari lombanya.',
                 en: 'The distance that asks you to show up months before race day.' },
      desc: { id: null, en: 'Designed for committed runners ready to go the distance…' } },
    { key: '10k', name: '10K', distanceKm: 10,   cot: null, petal: 'petal-w',
      tagline: { id: 'Cukup jauh untuk terasa, cukup dekat untuk dikejar.',
                 en: 'Far enough to feel it. Close enough to chase.' },
      desc: { id: null, en: 'For runners seeking a balanced mix of endurance and speed…' } },
    { key: '5k',  name: '5K',  distanceKm: 5,    cot: null, petal: 'petal-h',
      tagline: { id: 'Jarak pertama, atau jarak yang paling ramai.',
                 en: 'The first distance — or the loudest one.' },
      desc: { id: null, en: 'A perfect start for first-time runners…' } }
  ];

  // Harga & periode TIDAK ADA di deck. price:null → render "Segera diumumkan".
  // "Dari IDR 385K" di hal.14 hanya mockup ilustrasi — JANGAN dipakai.
  var TICKETS = [
    { key: 'partner-presale', name: { id: 'Partner Exclusive Pre-Sale', en: 'Partner Exclusive Pre-Sale' },
      discount: 40, price: null, period: null, audience: { id: null, en: null }, hidden: true },
    { key: 'super-early',     name: { id: 'Super Early Bird', en: 'Super Early Bird' },
      discount: 35, price: null, period: null,
      audience: { id: 'Peserta IWHM 2025', en: 'IWHM 2025 participants' } },
    { key: 'early',           name: { id: 'Early Bird', en: 'Early Bird' },
      discount: 30, price: null, period: null,
      audience: { id: 'Publik, periode terbatas', en: 'Public, limited period' } },
    { key: 'general',         name: { id: 'General Sales', en: 'General Sales' },
      discount: 0,  price: null, period: null,
      audience: { id: 'Publik', en: 'Public' } },
    { key: 'partnership',     name: { id: 'Partnership Program', en: 'Partnership Program' },
      discount: 20, price: null, period: null,
      audience: { id: 'Komunitas, influencer, media partner', en: 'Communities, influencers, media partners' } }
  ];

  // Hadiah & batas usia Master TIDAK disebut di deck.
  var PODIUM = {
    tiers: ['open', 'master'],
    places: 3,
    masterAgeFrom: null,   // TODO
    prize: null            // TODO
  };

  // Timeline TANPA fase Road to Event (§3.6 — di luar scope v1.2).
  var TIMELINE = [ /* §3.4: Kick Off → Registration → RPC → Shake Out Run → Race Day */ ];
  var PARTNERS = [];       // kosong sampai sponsorship dikonfirmasi

  window.D = { LANG, EVENT, CATEGORIES, TICKETS, PODIUM, TIMELINE, PARTNERS,
               REGISTRATION_URL, REGISTRATION_OPEN };
})();
```

## LAMPIRAN B — Pola badge TBC

```html
<!-- Fakta terkonfirmasi -->
<p class="fact">27–28 November 2026</p>

<!-- Fakta belum final -->
<p class="fact">
  Segera diumumkan
  <span class="badge badge--tbc">Menunggu konfirmasi</span>
</p>
<!-- TODO: konfirmasi harga dasar HM ke klien -->

<!-- Fakta yang sudah dikonfirmasi klien: TANPA badge -->
<p class="fact">Minggu, 29 November 2026 · Plaza Barat, GBK Senayan</p>
```

Badge TBC dirancang **netral, bukan alarm** — warna `--mauve` dengan teks `--ink`, bukan merah. Tujuannya menjaga kejujuran informasi tanpa membuat situs terlihat rusak.

Per v1.2 **tidak ada lagi item berstatus CONFLICT**. Semua yang tersisa berstatus TBC (belum ada datanya) — bukan kontradiksi antar-sumber. Kalau nanti muncul konflik baru, pola komentarnya: `<!-- CONFLICT: [sumber A] vs [sumber B]. Default ke [pilihan]. Konfirmasi ke klien. -->`

---

## LAMPIRAN C — MATERI DIPARKIR: ROAD TO EVENT

> ⛔ **Bukan bagian dari build.** Jangan render apapun dari lampiran ini. Diarsipkan agar bisa dipasang kembali tanpa riset ulang kalau klien memasukkannya di rilis berikutnya (§13 no. 20).

### C.1 Data Road to IWHM (dari deck)

| Fakta | Nilai | Sumber |
|---|---|---|
| Nama program lari mingguan | Sister Strides (Sunday Run Session) | hal. 22 |
| Kota | Jakarta, BSD, Bekasi | hal. 19 |
| Frekuensi | Setiap Minggu | hal. 19 |
| Periode | Agustus – November 2026 (hal. 19) / Agustus – Oktober 2026 (hal. 9) — konflik ringan, belum diselesaikan | hal. 9, 19 |
| Catatan | "Dates and venues are subject to change" | hal. 19 |
| Program talk | Well & Wealthy | hal. 20 |
| Durasi sesi | ±65 menit | hal. 20 |
| Format | 45 mnt Body & Movement + 20 mnt Money & Mindset | hal. 20 |
| Tema opsi 1 | Start Strong — memulai rutin lari + dana darurat & kebiasaan menabung | hal. 20 |
| Tema opsi 2 | Pace Yourself — memahami pace & rest day + budgeting dan cash flow | hal. 20 |
| Tema opsi 3 | Fuel Right — nutrisi pelari + menumbuhkan uang | hal. 20 |

Catatan yang berlaku kalau materi ini diaktifkan kembali: tema masih berstatus "suggestion" di deck → badge `Draft program`. Bagian "Money & Mindset" di deck dipandu financial advisor sponsor — tulis netral sebagai "pembicara keuangan perempuan", jangan sebut nama bank (§1.4).

### C.2 Naskah Tentang — bagian yang dicabut

**`Empat bulan sebelum pagi itu` / `The four months before that morning`**

*ID:*
> Karena itu IWHM tidak berlangsung hanya satu pagi.
>
> Dari Agustus sampai November, Sister Strides berjalan setiap Minggu di Jakarta, BSD, dan Bekasi — terbuka untuk semua level, dari yang baru pertama kali lari sampai yang sedang mengejar personal best. Di sela-selanya ada Well & Wealthy, sesi 65 menit yang membagi waktunya antara melatih tubuh dan membicarakan hal yang jarang dibahas perempuan secara terbuka: uang, rencana, dan rasa aman jangka panjang.
>
> Lebih dari 45 komunitas lari bergerak bersama sepanjang rangkaian ini. Ketika akhir November akhirnya tiba di Senayan, banyak wajah di garis start bukan lagi wajah asing satu sama lain.

*EN:*
> That is why IWHM isn't a single morning.
>
> From August to November, Sister Strides runs every Sunday across Jakarta, BSD, and Bekasi — open to every level, from a first-ever run to a chase for a personal best. Alongside it sits Well & Wealthy, a 65-minute session that splits its time between training the body and working through what women are rarely invited to discuss out loud: money, plans, and long-term security.
>
> More than 45 running communities move through this stretch together. By the time late November arrives in Senayan, many of the faces on the start line are no longer strangers.

### C.3 Kalau materi ini diaktifkan kembali
1. Buat `road-to-event.html` (§7 lama, poin 7.6) — situs kembali jadi 15 halaman × 2 = 30 file.
2. Kembalikan menu **Program** ke navigasi, atau masukkan sebagai item di bawah **Lomba**.
3. Sisipkan naskah C.2 sebagai bagian keempat halaman Tentang, dan geser "Melanjutkan gerakan" jadi bagian kelima. Latar: bagian 1 & 5 `--ink`, bagian 3 `--violet`, bagian 2 & 4 `--paper`.
4. Kembalikan objek `ROAD_TO` ke `data.js` dan tambahkan fase Road to Event ke `TIMELINE`.
5. Kembalikan *Sister Strides* dan *Well & Wealthy* ke daftar istilah tak-diterjemahkan (§9.1), dan cabut larangan §9.2 poin 6.
6. Selesaikan dulu konflik periode Agu–Okt vs Agu–Nov di tabel C.1.
