# FACT-LEDGER — IWHM 2026 (Jakarta Series) · brief v1.2

> **Rujukan tunggal saat menulis konten.** Jangan menulis dari ingatan — setiap
> angka, tanggal, harga, jarak, dan nama venue di situs harus punya baris di sini.
> **Sumber A:** `SPORTFEST__JHR__IWHM_*.pdf` (36 hal.; suffix nama file diredaksi §1.4) — *tidak ada di repo.*
> **Sumber B:** Deskripsi & konfirmasi resmi klien, 31 Agu 2026 (§3.2, §3.10).
>
> **Legenda:** ✅ `CONFIRMED-DECK` · ✅ `CONFIRMED-KLIEN` · 🟡 `TBC` · 🔴 `NOT-IN-DECK`
> Status ⚠️ `CONFLICT` **sudah tidak ada** per v1.2 (tanggal & venue diselesaikan klien).
>
> **Aturan render:** ✅ → tulis lugas tanpa hedging. 🟡/🔴 → nilai default (bila ada) **+ badge
> `Menunggu konfirmasi`/`TBC` + komentar `<!-- TODO … -->`**. Jangan isi placeholder yang terlihat nyata.
>
> **Redaksi sponsor (§1.4):** nama bank calon sponsor tidak ditulis di file mana pun — referensi memakai nomor halaman deck.
>
> **14 halaman × 2 bahasa = 28 file.** Slug: `index · about · categories · schedule · tickets ·
> race-pack · race-day · rules · faq · news · gallery · partners · contact · privacy`.

---

## 1 — Identitas Event

| Fakta | Nilai | Sumber | Status | Dipakai di halaman |
|---|---|---|---|---|
| Nama resmi | Indonesia Women Half Marathon | hal. 1 | ✅ deck | header, footer, index, about, SEO |
| Singkatan | IWHM | hal. 1 | ✅ deck | semua halaman |
| Tahun/edisi | 2026 | hal. 6 | ✅ deck | header, index, about, SEO |
| Series | Jakarta Series | hal. 9 | ✅ deck | index, about |
| Penyelenggara | 20FIT \| EVENT | semua hal. | ✅ deck | footer, about, contact |
| Tema | "Continuing the Movement, Redefining the Journey" | hal. 5 | ✅ deck | index (hero), about (judul bagian 4) |
| Hashtag utama | #UnstoppableHerJourney | hal. 5 | ✅ deck | index, about, footer |
| Hashtag sekunder | #RiseWithEveryStride | hal. 19, 30 | ✅ deck | race-day, footer |
| Nama domain | — | — | 🔴 | SEO/canonical/sitemap/OG (semua) |

## 2 — Race Day  ✅ dikonfirmasi klien (konflik selesai)

| Fakta | Nilai | Sumber | Status | Dipakai di halaman |
|---|---|---|---|---|
| Tanggal race day | **Minggu, 29 November 2026** | hal. 9+29 + **klien 31 Agu 2026** | ✅ klien | index (hero+countdown), schedule, race-day |
| Venue race day | **Plaza Barat, GBK Senayan, Jakarta** | hal. 29 + **klien 31 Agu 2026** | ✅ klien | index (hero), schedule, race-day |
| Jam operasional | 04.00 – 10.00 WIB | hal. 29 | ✅ deck | schedule, race-day |
| Jam start per kategori | — | — | 🔴 | categories, schedule, race-day (TBC) |
| Kuota peserta | 4.000 female runners | hal. 6 | ✅ deck | index (fact strip), about, categories |
| Segmen peserta | Female athletes, runners, running community, student | hal. 6 | ✅ deck | about, categories |
| Rentang usia | 17 – 45 tahun | hal. 6 | ✅ deck | index (fact strip), about, categories |
| Catatan venue | "Venue is subject to change" | hal. 6 | ✅ deck (opsional) | **race-day saja**, sebagai disclaimer kecil (bukan badge TBC) — konfirmasi apakah masih perlu |

> **Konflik SELESAI (v1.2):** deck hal. 6 ("22 Nov / Plaza Parkir Timur") **tidak berlaku** — klien
> konfirmasi versi A. Tanggal & venue tampil sebagai fakta pasti: **tanpa badge TBC, tanpa hedging,
> tanpa komentar konflik.** Jika ada sisa badge "Menunggu konfirmasi" pada tanggal/venue → hapus.
> "Venue is subject to change" boleh dicantumkan kecil di Race Day sebagai disclaimer standar
> (berbeda dari TBC) — pending konfirmasi klien (Q P13).

## 3 — Kategori Lomba

| Kategori | Deskripsi faktual (EN, hal. 7) | Jarak | Podium (hal. 34) | Dipakai di halaman |
|---|---|---|---|---|
| HM | "Designed for committed runners ready to go the distance. Experience the full journey of strength, focus, and accomplishment on a professionally measured route." | 🔴 tidak disebut | Open 1–3, Master 1–3 | index (kartu), categories |
| 10K | "For runners seeking a balanced mix of endurance and speed. Push your limits and feel the thrill of personal progress on a vibrant and inspiring course." | 10 km (implisit) | Open 1–3, Master 1–3 | index (kartu), categories |
| 5K | "A perfect start for first-time runners or those looking to enjoy a spirited run with friends. Celebrate movement, confidence, and community in a supportive environment." | 5 km (implisit) | Open 1–3, Master 1–3 | index (kartu), categories |

- **One-liner kategori (§9.5, status `DRAFT-COPY`)** dipakai **di atas** deskripsi faktual, tidak menggantikannya. Urutan tampil ikut deck: HM → 10K → 5K.
- 🔴 **NOT-IN-DECK (render TBC di `categories`):** jarak HM angka (JANGAN "21,0975 km"/"21K"), COT, batas usia Master, hadiah, kuota per kategori, elevation/rute.
- Deskripsi ID belum ada di deck → tulis ID natural (§9), bukan terjemahan harfiah.

## 3.10 — Deskripsi Resmi IWHM  ✅ `CONFIRMED-KLIEN` (FINAL, jangan diubah)

Teks otoritatif dari klien (31 Agu 2026). Disimpan sebagai `EVENT.description` di `data.js`; dipakai
di meta description, OG description, JSON-LD, dan **satu** blok kutipan di halaman About (persis, sekali per bahasa).

- **EN:** "Indonesia Women Half Marathon (IWHM) is a women's running event that celebrates strength,
  resilience, and unity. With 5K, 10K, and Half Marathon categories, the event encourages women to
  challenge themselves, support each other, and grow together."
- **ID:** "Indonesia Women Half Marathon (IWHM) adalah event lari perempuan yang merayakan kekuatan,
  ketangguhan, dan kebersamaan. Dengan kategori 5K, 10K, dan Half Marathon, IWHM mengajak perempuan
  untuk menantang diri, saling menguatkan, dan tumbuh bersama."

**Tiga pilar naratif** (semua copy harus terlacak ke salah satunya): **Strength/Kekuatan** (*challenge
themselves*) · **Resilience/Ketangguhan** (*grow together*) · **Unity/Kebersamaan** (*support each other*).

## 4 — Timeline (TANPA Road to Event)

| Fase | Tanggal | Sumber | Status | Dipakai di halaman |
|---|---|---|---|---|
| Teaser / Kick Off (Press Conference) | Agu 2026 | hal. 9, 10 | ✅ deck | schedule, index, news |
| Open Registration | Agu 2026 | hal. 9 | ✅ deck | schedule, tickets, index, news |
| Race Pack Collection | 27 – 28 Nov 2026, 10.00 – 20.00 WIB | hal. 9, 24 | ✅ deck | schedule, race-pack, index |
| Lokasi RPC | Menteng Prada, Jakarta Pusat | hal. 24 | ✅ deck | race-pack, schedule |
| Shake Out Run | 28 Nov 2026, 05.30 – 08.00 WIB, Menteng Prada | hal. 26 | ✅ deck | race-pack, schedule, index |
| Race Day | Minggu, 29 Nov 2026, 04.00–10.00 WIB, Plaza Barat GBK | hal. 9, 29 + klien | ✅ klien | schedule, race-day, index |

> Urutan situs: Kick Off (Agu) → Open Registration (Agu) → RPC (27–28 Nov) → Shake Out Run (28 Nov) →
> Race Day (29 Nov). **Jangan** tambahkan fase perantara untuk "mengisi" jarak Agu–Nov; biarkan apa adanya.

## 5 — Harga & Fase Promo

| # | Nama fase (render) | Diskon | Target | Sumber | Harga/periode |
|---|---|---|---|---|---|
| 1 | **Partner Exclusive Pre-Sale** *(disamarkan)* | 40% | — | hal. 15 | 🔴 TBC — `hidden:true`, pertimbangkan sembunyikan |
| 2 | Super Early Bird | 35% | Peserta IWHM 2025 | hal. 15 | 🔴 TBC |
| 3 | Early Bird | 30% | Publik, periode terbatas | hal. 15 | 🔴 TBC |
| 4 | General Sales | 0% | Publik, harga normal | hal. 15 | 🔴 TBC |
| 5 | Partnership Program | 20% | Komunitas, influencer, media partner | hal. 15 | 🔴 TBC |

**Dipakai di halaman:** tickets (kartu), index (preview).
🔴 **HARGA DASAR TIDAK ADA DI DECK.** "Dari IDR 385K" (hal. 14) hanya mockup ilustrasi → **JANGAN dipakai.**
Kolom harga/periode = `Segera diumumkan`/`To be announced` + badge TBC. Fase #1 deck menamai dengan bank
calon sponsor (hal. 15) → render "Partner Exclusive Pre-Sale" + komentar penyamaran.

## 6 — Road to IWHM  ⛔ DI LUAR SCOPE (v1.2)

**Jangan bangun halaman, teaser, menu, timeline, atau naskahnya.** Materi (Sister Strides, Well &
Wealthy, jadwal Jakarta/BSD/Bekasi) diarsipkan utuh di **Lampiran C brief** — jangan dihapus dari brief.
Konsekuensi: 14 halaman (bukan 15); menu "Program" hilang; About = 4 bagian; istilah *Sister Strides* &
*Well & Wealthy* keluar dari daftar istilah. Angka **45++ komunitas lari tetap dipakai** — itu fakta
jaringan mitra (§8), bukan bagian program Road to Event.

## 7 — Aktivasi & Fasilitas

| Area | Isi (dari deck) | Sumber | Dipakai di halaman |
|---|---|---|---|
| Race Pack Collection | Sports apparel & equipment pop-up store, culinary tenant, sports treatment, beauty treatment, photo spot, beauty pop-up corner | hal. 25 | race-pack |
| Race Village | Sports apparel & equipment pop-up store, culinary tenant, entertainment, recovery area, interactive booth, photo spot | hal. 31 | race-day |
| Cheering Zone | Zona sorak berdedikasi di sepanjang rute | hal. 30 | race-day |

🔴 **NOT-IN-DECK (render TBC):** isi race pack (jersey, medali, BIB, goodie bag), desain medali/jersey,
water station, medical support, baggage, penitipan anak, syarat pengambilan RPC.

## 8 — Skala Komunitas & Sosial Media

| Metrik | Nilai | Sumber | Periode | Dipakai di halaman |
|---|---|---|---|---|
| Komunitas lari mitra | 45++ | hal. 8 | — | index (fact strip), about |
| Jangkauan jaringan | 6.000++ orang | hal. 8 | — | about |
| Account impressions | >4 juta | hal. 4 | Des 2024 – Mei 2025 | **partners saja** + label periode |
| Account reached | >318.000 | hal. 4 | Des 2024 – Mei 2025 | **partners saja** + label periode |
| Profile visit | >175.000 | hal. 4 | Des 2024 – Mei 2025 | **partners saja** + label periode |
| Content interaction | >62.000 | hal. 4 | Des 2024 – Mei 2025 | **partners saja** + label periode |

⚠️ Angka sosmed = performa **kampanye edisi sebelumnya (Des 2024 – Mei 2025)**. Jika publik → **wajib**
label periode. Taruh di `partners`, bukan `index`.

## 9 — Copy Tema (hal. 5) — RUSAK DI SUMBER

Deck terpotong di awal; render mulai "This year celebrates growth…" + `<!-- TODO: minta kalimat pembuka
lengkap ke klien — copy deck hal.5 terpotong -->`. Dipakai (parafrase) di about bagian 4.
**Status naskah:** deskripsi §3.10 = **FINAL**; naskah storytelling §9.3–9.5 = **`DRAFT-COPY`** (tandai
tiap blok `<!-- DRAFT-COPY: menunggu approval klien -->`).

## 10 — DAFTAR LARANGAN (§4, nama sponsor diredaksi)

| Hal. deck | Isi (diredaksi) | Alasan |
|---|---|---|
| 11, 12 | Brand representative & benefit sponsor di press conference | Inventory sponsorship |
| 14, 16, 17 | Produk & program perbankan sponsor (aplikasi, metode pembayaran, tabungan, akuisisi nasabah) | Inventory sponsorship |
| 22 | Grup lari ber-branding sponsor; branding sponsor di Road to Event | Inventory sponsorship |
| 27, 35, 36 | Booth sponsor, QRIS/EDC, flag-off rep, Finisher Medal Monday | Inventory sponsorship |
| 32, 33 | "Dedicated spot for brand experience/branding" | Materi jualan ke sponsor |
| 4 | Statistik sosmed | Hanya di `partners` + label periode |

Sponsor (bila terkonfirmasi) masuk lewat `data.js → PARTNERS`, **bukan** menulis ulang halaman.

## Register Konflik (status v1.2)

| # | Konflik | Status | Catatan |
|---|---|---|---|
| C1 | Tanggal race day 22 vs 29 Nov | ✅ **SELESAI** | Klien konfirmasi 29 Nov 2026; deck hal.6 void |
| C2 | Venue Plaza Barat vs Plaza Parkir Timur | ✅ **SELESAI** | Klien konfirmasi Plaza Barat GBK; deck hal.6 void |
| C3 | Road to Event Agu–Okt vs Agu–Nov | ⏸️ **PARKIR** | Materi di luar scope (Lampiran C); selesaikan bila diaktifkan kembali |
