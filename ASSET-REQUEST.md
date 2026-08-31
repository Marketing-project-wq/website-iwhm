# ASSET-REQUEST — IWHM 2026 (Jakarta Series)

> Aset yang dibutuhkan untuk produksi, dengan **dimensi & format persis**.
> **Status inventaris repo saat ini: KOSONG** — tidak ada logo, KV, font, foto, peta, maupun
> file PDF sumber di repo. Semua item di bawah masih dibutuhkan.
> Prioritas: 🔴 blocking device/identitas · 🟡 dibutuhkan sebelum rilis · 🟢 dapat menyusul.

---

## 1 — Logo & Identitas

| Aset | Format | Dimensi/spesifikasi | Prioritas | Catatan |
|---|---|---|---|---|
| Logo IWHM utama | **SVG (vektor)** — bukan raster | path bersih, 4 siluet I/W/H/M terpisah & dapat di-`id` | 🔴 | **Kritis untuk signature device kelopak §6.4.** Tanpa ini mask pakai `border-radius` placeholder |
| Logo monokrom terang | SVG | putih penuh (untuk latar violet/ink) | 🔴 | Header di latar gelap, footer |
| Logo monokrom gelap | SVG | ink `#1E0728` (untuk latar paper) | 🔴 | Header di latar terang |
| Favicon sumber | SVG | 1 master, area aman jelas | 🟡 | Diekspor ke PNG di bawah |
| Favicon PNG | PNG | 32×32, 180×180 (apple-touch), 512×512 (maskable) | 🟡 | Diturunkan dari SVG master |

## 2 — Key Visual & Foto

> ⚠️ Foto di deck bertanda *"Visuals are for illustration purposes only"* — **tidak dipakai
> sebagai aset produksi.** Situs memakai placeholder ber-dimensi sampai foto berlisensi diterima (Q22).

| Aset | Format | Dimensi | Prioritas | Catatan |
|---|---|---|---|---|
| Hero KV (landscape) | WebP + JPG fallback | 2560×1440 (16:9) | 🟡 | Masuk ke dalam mask kelopak di hero |
| Hero KV (mobile crop) | WebP + JPG | 1080×1350 (4:5) | 🟡 | Crop portrait untuk <768px |
| Foto kategori ×3 (HM/10K/5K) | WebP + JPG | 1200×1500 (4:5 portrait) | 🟡 | Di-mask kelopak berbeda per kategori |
| Foto About | WebP + JPG | 1600×1200 | 🟢 | Cerita tema / komunitas |
| Foto Road to IWHM (Sister Strides) | WebP + JPG | 1600×1000 | 🟢 | |
| Foto Race Pack / Shake Out Run | WebP + JPG | 1600×1000 ×2 | 🟢 | |
| Foto Race Village / Cheering Zone | WebP + JPG | 1600×1000 ×2 | 🟢 | |
| Galeri | WebP + JPG | 1200×800, min. 8–12 frame | 🟢 | Grid; sertakan bukti hak pakai |

## 3 — Peta & Grafik

| Aset | Format | Dimensi | Prioritas | Catatan |
|---|---|---|---|---|
| Peta rute per kategori | **SVG** (ideal) atau PNG | SVG scalable / PNG ≥2000px lebar | 🟡 | Rute belum ada di deck (Q17). Placeholder peta sampai verifikasi lintasan |
| Ikon sprite | SVG sprite | `assets/img/icons/sprite.svg` | 🟢 | Dibuat internal; konfirmasi bila ada ikon brand khusus |

## 4 — Mitra / Sponsor

| Aset | Format | Dimensi | Prioritas | Catatan |
|---|---|---|---|---|
| Logo mitra | **PNG transparan** | **800×320px** | 🟢 | Hanya setelah sponsorship dikonfirmasi (Q5). Dimasukkan via `data.js → PARTNERS`, bukan hardcode |

## 5 — SEO / Social

| Aset | Format | Dimensi | Prioritas | Catatan |
|---|---|---|---|---|
| Open Graph image | PNG/JPG | **1200×630** | 🟡 | Idealnya 1 per bahasa (ID/EN) |
| Twitter card image | PNG/JPG | 1200×630 (summary_large_image) | 🟢 | Boleh sama dengan OG |

## 6 — Font

| Aset | Format | Prioritas | Catatan |
|---|---|---|---|
| Barlow (400/500/600/700) | woff2 (self-host) atau Google Fonts | 🟡 | Tersedia di Google Fonts — dipakai persis |
| CyGrotesk Wide (Regular/Bold/Black) | woff2 self-host | 🟢 | **Butuh konfirmasi lisensi web (Q20).** Bila tidak ada → substitusi Archivo variable (Google Fonts), butuh approval desainer |

## 7 — Verifikasi / Dokumen

| Item | Prioritas | Catatan |
|---|---|---|
| Brand guideline resmi | 🟢 | Verifikasi hex palet §6.1 (saat ini hasil sampling piksel deck 150 DPI, bukan brand book) |
| File PDF sumber `SPORTFEST__JHR__IWHM_*.pdf` (suffix diredaksi §1.4) | 🟢 | Tidak ada di repo; berguna untuk cross-check bila ada revisi fakta |

---

### Blokir langsung ke desain bila aset belum ada
- **Logo SVG (item 1):** signature device kelopak — pembeda utama situs — belum bisa final. Interim `border-radius`.
- **Foto berlisensi (bagian 2):** semua area media memakai placeholder ber-dimensi + catatan hak pakai.
- **Font CyGrotesk (item 6):** display memakai Archivo sampai lisensi dikonfirmasi.
