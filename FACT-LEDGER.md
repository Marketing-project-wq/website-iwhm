# FACT-LEDGER — IWHM 2026 (Jakarta Series)

> **Rujukan tunggal saat menulis konten.** Jangan menulis dari ingatan — setiap
> angka, tanggal, harga, jarak, dan nama venue di situs harus punya baris di sini.
> **Sumber fakta:** `SPORTFEST__JHR__IWHM_*.pdf` (36 hal.; suffix nama file diredaksi §1.4) — *catatan: file PDF
> TIDAK ada di repo; seluruh fakta di bawah disalin dari tabel §3 brief.*
>
> **Legenda status:** ✅ `CONFIRMED-DECK` · ⚠️ `CONFLICT` · 🟡 `TBC` · 🔴 `NOT-IN-DECK`
>
> **Aturan render:** status ✅ → tulis apa adanya. Status ⚠️/🟡/🔴 → render nilai
> default (jika ada) **+ badge `Menunggu konfirmasi`/`TBC` yang terlihat + komentar
> `<!-- TODO … -->`**. Jangan pernah isi placeholder yang terlihat seperti fakta nyata.
>
> **Redaksi sponsor (§1.4):** nama bank calon sponsor tidak ditulis di file manapun,
> termasuk ledger ini. Referensi ke sponsor memakai **nomor halaman deck** saja.

---

## 1 — Identitas Event

| Fakta | Nilai | Sumber | Status | Dipakai di halaman |
|---|---|---|---|---|
| Nama resmi | Indonesia Women Half Marathon | hal. 1 | ✅ | header, footer, index, about, SEO |
| Singkatan | IWHM | hal. 1 | ✅ | semua halaman |
| Tahun/edisi | 2026 | hal. 6 | ✅ | header, index, about, SEO |
| Series | Jakarta Series | hal. 9 | ✅ | index, about |
| Penyelenggara | 20FIT \| EVENT | semua hal. | ✅ | footer, about, contact |
| Tema | "Continuing the Movement, Redefining the Journey" | hal. 5 | ✅ | index (hero), about |
| Hashtag utama | #UnstoppableHerJourney | hal. 5 | ✅ | index, about, footer |
| Hashtag sekunder | #RiseWithEveryStride | hal. 19, 30 | ✅ | road-to-event, race-day |
| Nama domain | — | — | 🔴 | SEO/canonical/sitemap/OG (semua) |

---

## 2 — Race Day  ⚠️ berisi 2 konflik sumber

| Fakta | Nilai | Sumber | Status | Dipakai di halaman |
|---|---|---|---|---|
| Tanggal race day | **29 Nov 2026** (default) / 22 Nov 2026 (alt) | hal. 9+29 / hal. 6 | ⚠️ **CONFLICT** | index (hero+countdown), schedule, race-day |
| Venue race day | **Plaza Barat GBK Senayan** (default) / Plaza Parkir Timur GBK (alt) | hal. 29 / hal. 6 | ⚠️ **CONFLICT** | index, schedule, race-day |
| Jam operasional | 04.00 – 10.00 WIB | hal. 29 | ✅ | schedule, race-day |
| Jam start per kategori | — | — | 🔴 | categories, schedule, race-day |
| Kuota peserta | 4.000 female runners | hal. 6 | ✅ | index (fact strip), about, categories |
| Segmen peserta | Female athletes, runners, running community, student | hal. 6 | ✅ | about, categories |
| Rentang usia | 17 – 45 tahun | hal. 6 | ✅ | index (fact strip), about, categories |
| Catatan venue | "Venue is subject to change" | hal. 6 | ✅ | index, schedule, race-day |

**Penanganan konflik (wajib):** default **versi A — 29 Nov 2026, Plaza Barat** (konsisten
dengan RPC 27–28 Nov + Shake Out Run 28 Nov = satu race weekend). Semua tampilan tanggal &
venue diberi badge `Menunggu konfirmasi` + komentar:
`<!-- CONFLICT: deck hal.6 = 22 Nov / Plaza Parkir Timur; hal.9+29 = 29 Nov / Plaza Barat. Default 29 Nov. Konfirmasi ke klien. -->`
Catatan: 22 & 29 Nov 2026 sama-sama Minggu — label "SUNDAY" di deck tidak menyelesaikan konflik.

---

## 3 — Kategori Lomba

| Kategori | Deskripsi (EN, hal. 7) | Jarak | Podium (hal. 34) | Dipakai di halaman |
|---|---|---|---|---|
| HM | "Designed for committed runners ready to go the distance. Experience the full journey of strength, focus, and accomplishment on a professionally measured route." | 🔴 tidak disebut | Open 1–3, Master 1–3 | index (kartu), categories |
| 10K | "For runners seeking a balanced mix of endurance and speed. Push your limits and feel the thrill of personal progress on a vibrant and inspiring course." | 10 km (implisit) | Open 1–3, Master 1–3 | index (kartu), categories |
| 5K | "A perfect start for first-time runners or those looking to enjoy a spirited run with friends. Celebrate movement, confidence, and community in a supportive environment." | 5 km (implisit) | Open 1–3, Master 1–3 | index (kartu), categories |

🔴 **NOT-IN-DECK (render TBC di `categories`):** jarak HM dalam angka (JANGAN tulis "21,0975 km"),
cut-off time per kategori, batas usia Master, nilai hadiah podium, kuota per kategori, elevation/rute.
Deskripsi ID belum ada di deck → tulis versi ID natural lebih dulu (§9), bukan terjemahan harfiah.

---

## 4 — Timeline

| Fase | Tanggal | Sumber | Status | Dipakai di halaman |
|---|---|---|---|---|
| Teaser / Kick Off (Press Conference) | Agu 2026 | hal. 9, 10 | ✅ | schedule, index, news |
| Open Registration | Agu 2026 | hal. 9 | ✅ | schedule, tickets, index |
| Road to Event | **Agu – Nov 2026** (default) | hal. 9 (Agu–Okt) / hal. 19 (Agu–Nov) | ⚠️ CONFLICT ringan | schedule, road-to-event |
| Race Pack Collection | 27 – 28 Nov 2026, 10.00 – 20.00 WIB | hal. 9, 24 | ✅ | schedule, race-pack, index |
| Lokasi RPC | Menteng Prada, Jakarta Pusat | hal. 24 | ✅ | race-pack, schedule |
| Shake Out Run | 28 Nov 2026, 05.30 – 08.00 WIB, Menteng Prada | hal. 26 | ✅ | race-pack, schedule |
| Race Day | lihat §2 di atas | — | ⚠️ | schedule, race-day, index |

Konflik Road to Event → default **Agustus – November 2026** (rentang lebih panjang, konsisten
dengan race day akhir November) + komentar TODO.

---

## 5 — Harga & Fase Promo

| # | Nama fase (render) | Diskon | Target | Sumber | Status harga/periode |
|---|---|---|---|---|---|
| 1 | **Partner Exclusive Pre-Sale** *(disamarkan)* | 40% | — | hal. 15 | 🔴 harga & periode TBC — pertimbangkan **sembunyikan** (`hidden:true`) |
| 2 | Super Early Bird | 35% | Peserta IWHM 2025 | hal. 15 | 🔴 TBC |
| 3 | Early Bird | 30% | Publik, periode terbatas | hal. 15 | 🔴 TBC |
| 4 | General Sales | 0% | Publik, harga normal | hal. 15 | 🔴 TBC |
| 5 | Partnership Program | 20% | Komunitas, influencer, media partner | hal. 15 | 🔴 TBC |

**Dipakai di halaman:** tickets (5 kartu), index (preview fase).
🔴 **HARGA DASAR TIDAK ADA DI DECK.** Angka "Dari IDR 385K" (hal. 14) hanya mockup ilustrasi
(*"Visuals are for illustration purposes only"*) → **JANGAN dipakai sebagai harga.** Kolom harga &
periode = `Segera diumumkan` / `To be announced` + badge TBC.
Fase #1: deck menamainya dengan nama bank calon sponsor (hal. 15, belum terkonfirmasi) → render
"Partner Exclusive Pre-Sale" + komentar:
`<!-- Nama fase disamarkan: deck menyebut sponsor yang belum terkonfirmasi. Konfirmasi penamaan final ke klien. -->`

---

## 6 — Road to IWHM

| Fakta | Nilai | Sumber | Status | Dipakai di halaman |
|---|---|---|---|---|
| Program lari mingguan | Sister Strides (Sunday Run Session) | hal. 22 | ✅ | road-to-event |
| Kota | Jakarta, BSD, Bekasi | hal. 19 | ✅ | road-to-event |
| Frekuensi | Setiap Minggu | hal. 19 | ✅ | road-to-event |
| Periode | Agustus – November 2026 | hal. 19 | ✅ | road-to-event |
| Catatan | "Dates and venues are subject to change" | hal. 19 | ✅ | road-to-event |
| Program talk | Well & Wealthy | hal. 20 | ✅ | road-to-event |
| Durasi sesi | ±65 menit | hal. 20 | ✅ | road-to-event |
| Format | 45 mnt Body & Movement + 20 mnt Money & Mindset | hal. 20 | ✅ | road-to-event |
| Tema 1 | Start Strong — rutin lari + dana darurat & kebiasaan menabung | hal. 20 | 🟡 `Draft program` | road-to-event |
| Tema 2 | Pace Yourself — pace & rest day + budgeting & cash flow | hal. 20 | 🟡 `Draft program` | road-to-event |
| Tema 3 | Fuel Right — nutrisi pelari + menumbuhkan uang | hal. 20 | 🟡 `Draft program` | road-to-event |
| Jadwal sesi (tanggal/venue) | — | — | 🔴 | road-to-event (TBC) |

Bagian "Money & Mindset" di deck dipandu financial advisor sponsor → di situs tulis netral
**"pembicara keuangan perempuan"**. Jangan sebut nama bank.

---

## 7 — Aktivasi & Fasilitas

| Area | Isi (dari deck) | Sumber | Dipakai di halaman |
|---|---|---|---|
| Race Pack Collection | Sports apparel & equipment pop-up store, culinary tenant, sports treatment, beauty treatment, photo spot, beauty pop-up corner | hal. 25 | race-pack |
| Race Village | Sports apparel & equipment pop-up store, culinary tenant, entertainment, recovery area, interactive booth, photo spot | hal. 31 | race-day |
| Cheering Zone | Zona sorak berdedikasi di sepanjang rute | hal. 30 | race-day |

🔴 **NOT-IN-DECK (render TBC):** isi race pack (jersey, medali, BIB, goodie bag), desain
medali/jersey, water station, medical support, baggage, penitipan anak, syarat pengambilan RPC.

---

## 8 — Skala Komunitas & Sosial Media

| Metrik | Nilai | Sumber | Periode | Dipakai di halaman |
|---|---|---|---|---|
| Komunitas lari mitra | 45++ | hal. 8 | — | index (fact strip), about |
| Jangkauan jaringan | 6.000++ orang | hal. 8 | — | about |
| Account impressions | >4 juta | hal. 4 | Des 2024 – Mei 2025 | **partners saja** + label periode |
| Account reached | >318.000 | hal. 4 | Des 2024 – Mei 2025 | **partners saja** + label periode |
| Profile visit | >175.000 | hal. 4 | Des 2024 – Mei 2025 | **partners saja** + label periode |
| Content interaction | >62.000 | hal. 4 | Des 2024 – Mei 2025 | **partners saja** + label periode |

⚠️ Angka sosmed = performa **kampanye edisi sebelumnya (Des 2024 – Mei 2025)**, bukan 2026.
Jika ditampilkan publik **wajib** diberi label periode. Rekomendasi: taruh di halaman `partners`,
bukan `index`.

---

## 9 — Copy Tema (hal. 5) — RUSAK DI SUMBER

Teks deck terpotong di awal:
> *"…ether in 2025, this year celebrates growth, courage, and the unstoppable spirit of women who
> keep moving forward. Because beyond the medals and miles, the Unstoppable Her Journey is about the
> strength, confidence, and sisterhood we build along the way — and the power within that makes us
> unstoppable."*

Kata pertama hilang (kemungkinan "…brought thousands of women tog**ether** in 2025…").
**JANGAN tebak sebagai copy final.** Render mulai "This year celebrates growth…" + komentar:
`<!-- TODO: minta kalimat pembuka lengkap ke klien — copy deck hal.5 terpotong -->`
**Dipakai di halaman:** index (pengantar tema), about.

---

## 10 — DAFTAR LARANGAN (tidak boleh jadi konten publik)  §4

Halaman deck berikut **tidak boleh** masuk situs. Nama sponsor diredaksi (nomor halaman saja).

| Hal. deck | Isi (diredaksi) | Alasan |
|---|---|---|
| 11, 12 | Brand representative & benefit sponsor di press conference | Inventory sponsorship |
| 14, 16, 17 | Produk & program perbankan sponsor (aplikasi, metode pembayaran, tabungan, akuisisi nasabah) | Inventory sponsorship |
| 22 | Grup lari ber-branding sponsor; branding sponsor di Road to Event | Inventory sponsorship |
| 27, 35, 36 | Booth sponsor, QRIS/EDC, flag-off rep, Finisher Medal Monday | Inventory sponsorship |
| 32, 33 | "Dedicated spot for brand experience/branding" | Materi jualan ke sponsor |
| 4 | Statistik sosmed | Hanya di `partners` + label periode |

Penambahan sponsor (jika terkonfirmasi) dilakukan lewat `data.js → PARTNERS`, **bukan** menulis
ulang halaman.

---

## Register Konflik (ringkasan untuk QA)

| # | Konflik | Default dipakai | Badge | Halaman terdampak |
|---|---|---|---|---|
| C1 | Tanggal race day 22 vs 29 Nov | **29 Nov 2026** | Menunggu konfirmasi | index, schedule, race-day |
| C2 | Venue Plaza Barat vs Plaza Parkir Timur | **Plaza Barat GBK** | Menunggu konfirmasi | index, schedule, race-day |
| C3 | Road to Event Agu–Okt vs Agu–Nov | **Agu – Nov 2026** | (komentar TODO) | schedule, road-to-event |
