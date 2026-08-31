# FACT-LEDGER — IWHM 2026

**Sumber:** `SPORTFEST__JHR__IWHM_BRI.pdf` (36 hal., Canva export) + konfirmasi langsung klien 31 Agustus 2026 (lihat 3.10).
**Status legend:** ✅ `CONFIRMED-DECK` · ✅ `CONFIRMED-KLIEN` · 🟡 `TBC` · 🔴 `NOT-IN-DECK`

Ini salinan §3 dari `PROMPT-CLAUDE-CODE-IWHM-2026.md`, dengan kolom tambahan **Dipakai di halaman** yang memetakan tiap fakta ke halaman `/id/` + `/en/` tempat ia dirender. Kolom ini yang jadi rujukan saat menulis HTML — bukan ingatan.

Per §1.3 (hard constraint): setiap baris berstatus 🟡/🔴 **wajib** dirender dengan badge `badge--tbc` + komentar `<!-- TODO: konfirmasi ... -->` saat dipakai. Tidak boleh diisi placeholder yang terlihat seperti fakta nyata.

---

## 1. Identitas Event

| Fakta | Nilai | Sumber | Status | Dipakai di halaman |
|---|---|---|---|---|
| Nama resmi | Indonesia Women Half Marathon | hal. 1 | ✅ | Semua halaman (title, header, footer, JSON-LD) |
| Singkatan | IWHM | hal. 1 | ✅ | Semua halaman |
| Tahun/edisi | 2026 | hal. 6 | ✅ | Semua halaman |
| Series | Jakarta Series | hal. 9 | ✅ | index, about, footer |
| Penyelenggara | 20FIT \| EVENT | semua hal. | ✅ | footer, contact, privacy, JSON-LD `organizer` |
| Tema | "Continuing the Movement, Redefining the Journey" | hal. 5 | ✅ | index (hero/intro), about (bagian 4 judul) |
| Hashtag utama | #UnstoppableHerJourney | hal. 5 | ✅ | index, about (penutup), footer, social share |
| Hashtag sekunder | #RiseWithEveryStride | hal. 19, 30 | ✅ | race-day (Cheering Zone), social share — **cek §13 no.23 dulu, bentuk resmi belum pasti** |
| Nama domain | — | — | 🔴 | canonical URL, sitemap.xml, OG url, robots.txt — **blocking, §13 no.4** |

## 2. Race Day

| Fakta | Nilai | Sumber | Status | Dipakai di halaman |
|---|---|---|---|---|
| Tanggal race day | Minggu, 29 November 2026 | hal. 9+29, konfirmasi klien 31 Agu 2026 | ✅ | index (hero+countdown), schedule, race-day, faq, JSON-LD `startDate` — **tanpa badge TBC** |
| Venue race day | Plaza Barat, GBK Senayan, Jakarta | hal. 29, konfirmasi klien | ✅ | index (hero), race-day, schedule, faq, JSON-LD `location` — **tanpa badge TBC** |
| Jam operasional race day | 04.00 – 10.00 WIB | hal. 29 | ✅ | race-day, schedule |
| Jam start per kategori | — | — | 🔴 | race-day, categories — TBC, §13 no.12 |
| Kuota peserta | 4.000 female runners | hal. 6 | ✅ | index (strip fakta), about |
| Segmen peserta | Female athletes, runners, running community, student | hal. 6 | ✅ | about, faq |
| Rentang usia | 17 – 45 tahun | hal. 6 | ✅ | index (strip fakta), about, faq |
| Catatan venue | "Venue is subject to change" | hal. 6 | ✅ | race-day (disclaimer kecil) — **konfirmasi masih perlu tidaknya, §13 no.19** |

## 3. Kategori Lomba

| Kategori | Deskripsi (EN, hal. 7) | Jarak | Podium (hal. 34) | Dipakai di halaman |
|---|---|---|---|---|
| HM | "Designed for committed runners ready to go the distance…" | 🔴 tidak disebut | Open 1–3, Master 1–3 | index (kartu kategori), categories |
| 10K | "For runners seeking a balanced mix of endurance and speed…" | 10 km (implisit) | Open 1–3, Master 1–3 | index (kartu kategori), categories |
| 5K | "A perfect start for first-time runners…" | 5 km (implisit) | Open 1–3, Master 1–3 | index (kartu kategori), categories |

🔴 Belum ada di deck (render TBC di `categories.html`): jarak HM dalam angka (§13 no.7), cut-off time (§13 no.8), batas usia Master (§13 no.9), hadiah podium (§13 no.10), kuota per kategori (§13 no.11), elevation/rute (§13 no.15).

## 4. Timeline

| Fase | Tanggal | Sumber | Status | Dipakai di halaman |
|---|---|---|---|---|
| Teaser / Kick Off (Press Conference) | Agu 2026 | hal. 9, 10 | ✅ | schedule, news |
| Open Registration | Agu 2026 | hal. 9 | ✅ | schedule, tickets, news |
| Race Pack Collection | 27–28 Nov 2026, 10.00–20.00 WIB, Menteng Prada Jakpus | hal. 9, 24 | ✅ | schedule, race-pack |
| Shake Out Run | 28 Nov 2026, 05.30–08.00 WIB, Menteng Prada | hal. 26 | ✅ | schedule, race-pack |
| Race Day | Minggu, 29 Nov 2026, 04.00–10.00 WIB, Plaza Barat GBK Senayan | hal. 9, 29 + klien | ✅ | schedule, race-day, index |

> Road to Event **tidak** masuk timeline (§3.6, di luar scope — lihat Lampiran C). Jangan sisipkan fase perantara karangan untuk mengisi jarak Agustus–November.

## 5. Harga & Fase Promo

| # | Nama fase | Diskon | Target | Sumber | Status | Dipakai di halaman |
|---|---|---|---|---|---|---|
| 1 | Partner Exclusive Pre-Sale *(disamarkan dari "BRI Exclusive Pre-Sale", §1.4)* | 40% | — | hal. 15 | 🟡 nama+harga TBC, `hidden:true` sampai klien konfirmasi | tickets (disembunyikan default) |
| 2 | Super Early Bird | 35% | Peserta IWHM 2025 | hal. 15 | 🟡 harga/periode TBC | tickets, index (preview) |
| 3 | Early Bird | 30% | Publik, periode terbatas | hal. 15 | 🟡 harga/periode TBC | tickets, index (preview) |
| 4 | General Sales | 0% | Publik, harga normal | hal. 15 | 🟡 harga/periode TBC | tickets |
| 5 | Partnership Program | 20% | Komunitas, influencer, media partner | hal. 15 | 🟡 harga/periode TBC | tickets |

🔴 Harga dasar (blocking, §13 no.1) dan tanggal mulai/akhir tiap fase (§13 no.13) tidak ada di deck. Kolom harga & periode = `null` → render "Segera diumumkan" / "To be announced" + badge TBC.

## 6. Road to IWHM — ⛔ DI LUAR SCOPE

Seluruh materi (Sister Strides, Well & Wealthy) dikeluarkan dari build ini (§3.6). **Tidak dirender di halaman manapun.** Diarsipkan di Lampiran C prompt, dipakai lagi hanya jika §13 no.20 dijawab "masuk lagi".

## 7. Aktivasi & Fasilitas

| Area | Isi | Sumber | Status | Dipakai di halaman |
|---|---|---|---|---|
| Race Pack Collection | Sports apparel & equipment pop-up, culinary tenant, sports treatment, beauty treatment, photo spot, beauty pop-up corner | hal. 25 | ✅ | race-pack |
| Race Village | Sports apparel & equipment pop-up, culinary tenant, entertainment, recovery area, interactive booth, photo spot | hal. 31 | ✅ | race-day |
| Cheering Zone | Zona sorak berdedikasi sepanjang rute | hal. 30 | ✅ | race-day |

🔴 Tidak ada di deck: isi race pack (§13 no.14), desain medali/jersey, water station, medical support, baggage, penitipan anak — semua TBC di `race-pack.html` / `race-day.html`.

## 8. Skala Komunitas & Sosial Media

| Metrik | Nilai | Sumber | Catatan | Dipakai di halaman |
|---|---|---|---|---|
| Komunitas lari mitra | 45++ | hal. 8 | ✅ — tetap dipakai, terpisah dari Road to Event | index (strip fakta), about, partners |
| Jangkauan jaringan | 6.000++ orang | hal. 8 | ✅ | partners |
| Account impressions | >4 juta | hal. 4 | periode Des 2024–Mei 2025, **wajib label periode** | partners saja |
| Account reached | >318.000 | hal. 4 | periode Des 2024–Mei 2025, **wajib label periode** | partners saja |
| Profile visit | >175.000 | hal. 4 | periode Des 2024–Mei 2025, **wajib label periode** | partners saja |
| Content interaction | >62.000 | hal. 4 | periode Des 2024–Mei 2025, **wajib label periode** | partners saja |

## 9. Copy Tema — rusak di sumber

Teks terpotong di awal (hal. 5). Render mulai "This year celebrates growth…", jangan menebak kata pembuka. `<!-- TODO: minta kalimat pembuka lengkap ke klien -->`. Dipakai di: about (bagian 4, parafrase saja, bukan kutipan utuh).

## 10. Deskripsi Resmi IWHM — ✅ CONFIRMED-KLIEN, FINAL

> ID: "Indonesia Women Half Marathon (IWHM) adalah event lari perempuan yang merayakan kekuatan, ketangguhan, dan kebersamaan. Dengan kategori 5K, 10K, dan Half Marathon, IWHM mengajak perempuan untuk menantang diri, saling menguatkan, dan tumbuh bersama."
> EN: "Indonesia Women Half Marathon (IWHM) is a women's running event that celebrates strength, resilience, and unity. With 5K, 10K, and Half Marathon categories, the event encourages women to challenge themselves, support each other, and grow together."

Disimpan sebagai `EVENT.description` di `data.js`. **Jangan diedit saat dikutip.** Dipakai di: meta description (semua halaman), OG description, JSON-LD `description`, about.html bagian 1 (kutipan blok, sekali per bahasa saja).

Tiga pilar naratif turunan (Strength/Kekuatan, Resilience/Ketangguhan, Unity/Kebersamaan) melandasi seluruh naskah §9.3–9.5 — dipakai di about.html sebagai struktur empat bagian.

---

## Brand & lisensi (dari BRAND-AUDIT.md — lihat `docs/BRAND-AUDIT.md`)

| Fakta | Nilai | Status |
|---|---|---|
| Warna utama | `#8D39E5` (dibaca dari vektor logo) | ✅ CONFIRMED-ASET, tapi ada sub-sistem kedua `#A120EF` di aset mesh — §13 no.21 |
| Font brand asli | Paris2024 (wordmark) + Comba Test Ultra Wide | 🔴 keduanya bermasalah lisensi, **tidak dipakai di situs** — §13 no.24 |
| Font situs pengganti | Fredoka (display) + Barlow (body), Google Fonts | ✅ keputusan sementara, tunggu approval desainer |
| Logo | 8 SVG siap pakai di `assets/img/logo/` | ✅ |
| Sistem grafis | 22 file di `assets/img/graphics/`, signature = elemen gerak (chevron) | ✅, 3 file (`element-02/07/09`) punya serpihan — §13 no.22 |
| Hashtag di poster sample | `#risewtiheverystrides` (typo) | 🔴 jangan pakai — §13 no.23 |
