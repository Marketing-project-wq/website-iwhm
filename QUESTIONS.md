# QUESTIONS — Pertanyaan ke Klien (IWHM 2026)

> Diurutkan: **🔴 Blocking** dulu (situs tidak bisa dipublikasikan tanpa ini),
> lalu 🟡 Penting (boleh rilis awal dengan badge TBC), lalu 🟢 Aset.
> Sumber: §13 brief. Jawaban masuk ke `data.js` / `FACT-LEDGER.md`, bukan hardcode di HTML.

---

## 🔴 Blocking — publikasi tertahan sampai terjawab

1. **Race day: 22 atau 29 November 2026?** Deck menyebut keduanya (hal. 6 vs hal. 9+29).
   *Default sementara: 29 Nov 2026 (badge "Menunggu konfirmasi").*
2. **Venue: Plaza Parkir Timur atau Plaza Barat GBK Senayan?** Deck menyebut keduanya (hal. 6 vs hal. 29).
   *Default sementara: Plaza Barat.*
3. **Harga dasar per kategori** (HM / 10K / 5K) sebelum diskon. Deck tidak memuat harga apa pun.
4. **URL & platform pendaftaran resmi.** Sampai ada, tombol "Daftar" membuka modal info, bukan form.
5. **Status sponsorship** — apakah nama sponsor sudah boleh ditampilkan? (Menentukan penamaan fase
   pre-sale 40% dan isi halaman Mitra.)
6. **Domain final** untuk canonical, sitemap, dan Open Graph.
7. **Naskah Peraturan & Ketentuan resmi.** Tidak ada satu pun peraturan di deck — halaman dirender
   sebagai kerangka bab kosong sampai naskah tersedia.
8. **Kontak resmi:** email, WhatsApp, akun Instagram/TikTok. Tidak ada di deck.

## 🟡 Penting — boleh diisi TBC di rilis awal

9. Jarak resmi HM dalam angka (jangan diasumsikan 21,0975 km tanpa konfirmasi).
10. Cut-off time (COT) per kategori.
11. Batas usia kategori Master.
12. Nilai hadiah podium (Open & Master, juara 1–3).
13. Kuota per kategori (total 4.000 dibagi bagaimana antar HM/10K/5K).
14. Jam start per kategori pada race day.
15. Tanggal mulai/akhir tiap fase promo (5 fase).
16. Isi race pack (jersey, medali, BIB, goodie bag) & syarat pengambilan.
17. Peta rute (per kategori) + elevation.
18. Nama final fase pre-sale 40% (§3.5) — apakah tetap disamarkan "Partner Exclusive Pre-Sale"
    atau memakai nama sponsor bila kerja sama sudah pasti?

## 🟢 Aset — dibutuhkan untuk produksi (detail di `ASSET-REQUEST.md`)

19. **Logo IWHM format vektor (SVG/AI/EPS)** — kritis untuk *signature device* kelopak (§6.4).
    Sampai tersedia, kartu & mask memakai `border-radius` sementara, bukan siluet tebakan.
20. Lisensi web font **CyGrotesk Wide** (ada/tidak). Bila tidak → substitusi Archivo (butuh approval desainer).
21. Brand guideline resmi untuk verifikasi hex palet (§6.1 saat ini hasil sampling piksel dari deck).
22. Foto berlisensi jelas untuk hero, kartu kategori, dan galeri (foto di deck bertanda "for
    illustration purposes only" — tidak dipakai sebagai aset produksi).
23. Logo mitra **800×320px, PNG transparan**.
24. Kalimat pembuka lengkap copy tema (deck hal. 5 terpotong).
25. Nama badan hukum penyelenggara untuk halaman Privasi.

---

### Ringkasan dampak bila belum terjawab
- **Tanpa #1–#2:** tanggal & venue tampil dengan badge konflik di 3 halaman.
- **Tanpa #3:** semua kartu tiket menampilkan "Segera diumumkan".
- **Tanpa #4:** tidak ada alur pendaftaran keluar — hanya modal informasi.
- **Tanpa #5:** halaman Mitra kosong (kerangka tier), fase #1 disamarkan/disembunyikan.
- **Tanpa #6:** canonical/sitemap/OG memakai placeholder domain (badge TBC di config SEO).
- **Tanpa #19:** signature device kelopak belum bisa final — situs kehilangan pembeda utamanya.
