# ASSET-REQUEST — IWHM 2026

Status per 2 September 2026. Aset yang **sudah ada** ada di `assets/img/{logo,graphics,bg}/` (lihat `docs/BRAND-AUDIT.md`) — tidak diulang di sini. Daftar di bawah adalah yang **belum ada** dan dibutuhkan untuk build.

## 🔴 Foto hero Beranda (situs sudah jalan tanpa ini)

| Aset | Dimensi / format | Dipakai di | Catatan |
|---|---|---|---|
| Foto/KV hero Beranda | 1920×1080 min, WebP + JPEG fallback, crop aman untuk 375px & 1440px | index.html | Hero **sudah dibangun** dengan latar `--gradient-violet` + sistem grafis (loop/elemen gerak) sebagai fallback dan sudah tayang — foto ini akan menggantikan fallback tersebut begitu tersedia. **Jangan pakai foto dari deck/poster sample** — status hak pakai tidak jelas (§1.6, §6.5 no.10). |

## 🟡 Penting, bisa menyusul setelah Tahap 1

| Aset | Dimensi / format | Dipakai di | Catatan |
|---|---|---|---|
| Foto galeri | min. 6 foto, 1600px sisi panjang, WebP | gallery.html | Placeholder grid + catatan hak pakai sampai tersedia |
| Foto kategori (opsional) | 800×1000, WebP | categories.html, index (kartu kategori) | Bisa diganti sistem grafis kalau foto tidak tersedia |
| Favicon multi-ukuran | `.ico` (16/32/48), `apple-touch-icon.png` 180×180, `favicon-192.png`, `favicon-512.png` | semua halaman `<head>` | Dibuat dari `assets/img/logo/logo-mark.svg` — bisa dikerjakan sendiri di Tahap 4 begitu ukuran final logo mark disepakati |
| OG image | 1200×630, PNG/JPEG | semua halaman meta OG/Twitter | Dibuat dari komposisi logo + gradasi brand — bisa dikerjakan sendiri di Tahap 4 |
| Logo mitra/sponsor | 800×320px, PNG transparan atau SVG | partners.html | Kosong sampai sponsorship dikonfirmasi (§1.4, §13 no.3) |
| Peta rute per kategori | SVG atau PNG 1600px, per kategori (HM/10K/5K) | race-day.html | TBC sampai rute diverifikasi (§13 no.15) |

## 🎨 Brand — perlu dari desainer, bukan dari klien

| Aset | Kebutuhan | Alasan |
|---|---|---|
| File vektor/berlapis 10 elemen chevron | `.ai`/`.svg` per elemen, layer terpisah | `element-02/-07/-09` saat ini membawa serpihan elemen tetangga (BRAND-AUDIT §5.1); sheet sumber PNG datar tanpa vektor. Elemen gerak adalah signature device utama — perlu bersih sebelum dipakai besar |
| Brand guideline resmi (kalau ada) | PDF/dokumen | Verifikasi seluruh nilai hex di §6.1 — saat ini hasil sampling/pembacaan vektor, bukan dari guideline resmi |
| Konfirmasi sub-sistem warna | keputusan tim desain | `#8D39E5` (logo/supergraphic/background) vs `#A120EF` (mesh) — situs memakai `#8D39E5`, perlu konfirmasi apakah mesh diselaraskan |
| Sign-off font final | approval visual Fredoka+Barlow | Paris2024 & Comba Test tidak bisa dipakai produksi (lisensi). Fredoka (display) + Barlow (teks) sudah **di-self-host** sebagai WOFF2 latin dan dipakai di seluruh situs — perlu sign-off desainer sebelum dikunci sebagai final |

## Ringkasan yang SUDAH tersedia (tidak perlu diminta ulang)

- Logo: 8 SVG (`assets/img/logo/`) — horizontal/stacked/vertical/mark × positif/reversed
- Sistem grafis: 22 file (`assets/img/graphics/`) — elemen gerak, loop, wave
- Background: 8 mesh WebP (`assets/img/bg/`) + 3 gradasi CSS (§6.1, tidak perlu file)
- Nilai warna brand resmi: `#8D39E5` dkk., dibaca dari sumber vektor
- Font: Fredoka + Barlow di-self-host (WOFF2 latin, `assets/fonts/`) — tinggal sign-off desainer
