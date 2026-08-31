# QUESTIONS — IWHM 2026

Salinan §13 dari `PROMPT-CLAUDE-CODE-IWHM-2026.md`, diurutkan blocking dulu. Ini daftar pertanyaan ke klien/desainer, bukan sesuatu yang dijawab sendiri oleh Claude Code.

## ✅ Sudah terjawab (31 Agustus 2026)

- ~~Race day: 22 atau 29 November?~~ → **29 November 2026**
- ~~Venue: Plaza Parkir Timur atau Plaza Barat?~~ → **Plaza Barat, GBK Senayan**
- ~~Road to Event masuk situs atau tidak?~~ → **Tidak, dikeluarkan dari scope**

## 🔴 Blocking — situs tidak bisa dipublikasikan tanpa ini

1. Harga dasar per kategori (HM / 10K / 5K) sebelum diskon.
2. URL & platform pendaftaran resmi.
3. Status sponsorship — apakah nama sponsor sudah boleh ditampilkan?
4. Domain final untuk canonical, sitemap, dan OG.
5. Naskah Peraturan & Ketentuan resmi.
6. Kontak resmi: email, WhatsApp, akun Instagram/TikTok.

## 🎨 Brand & lisensi — juga blocking sebelum Tahap 1 dimulai (no. 24 khususnya)

21. Ungu resmi `#8D39E5` atau `#A120EF`? Paket aset memuat dua sub-sistem warna berbeda.
22. Sumber vektor/berlapis untuk 10 elemen chevron — sekarang hanya PNG datar, tiga di antaranya membawa serpihan elemen tetangga.
23. Bentuk resmi hashtag — poster menulis `#risewtiheverystrides` (typo `wtih` + bentuk jamak), deck menulis `#RiseWithEveryStride`.
24. **Status lisensi Paris2024 dan pengganti Comba Test.** Comba berlisensi Demo/Trial; Paris2024 mendeklarasikan diri sebagai merek dagang penyelenggara Olimpiade dengan `fsType 4`. Kandidat eskalasi ke Jeff — ini keputusan legal, bukan keputusan desain.
25. Brand guideline resmi (kalau ada) — untuk memverifikasi seluruh nilai warna di §6.1.

## 🟡 Penting — bisa diisi TBC di rilis awal

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
17. Approval naskah storytelling §9.3–9.5 — termasuk memilih antara dua opsi headline hero.
18. Konfirmasi bahwa IWHM 2025 boleh dirujuk secara terbuka di halaman Tentang (§9.4 bagian 4).
19. Apakah disclaimer "venue dapat berubah" masih perlu ditampilkan di halaman Race Day?
20. Apakah Road to Event akan dimasukkan di rilis berikutnya, atau ditiadakan sepenuhnya? Menentukan apakah Lampiran C dipertahankan.

## 🟢 Aset yang masih dibutuhkan

26. Foto berlisensi jelas untuk hero, kategori, dan galeri. Jangan pakai foto dari deck atau poster sample.
27. Favicon `.ico` multi-ukuran + OG image 1200×630, dibuat dari `logo-mark.svg`.
28. Logo mitra 800×320px transparan.
29. Kalimat pembuka lengkap copy tema (§3.9).
30. Nama badan hukum penyelenggara untuk halaman privasi.
31. Peta rute per kategori.

## ⚠️ Ditemukan Claude Code, belum ada di §13 sumber

32. **Akses jaringan ke situs benchmark diblokir di lingkungan kerja ini** (egress proxy menolak koneksi ke `website-pln-electric-5k-series-production.up.railway.app` dan `borobudurmarathon.com` — HTTP 403 di level proxy, kebijakan organisasi). Pola arsitektur yang dipakai di §2.2/DESIGN-PLAN.md diambil dari deskripsi tertulis di prompt ini sendiri, **bukan dari pemeriksaan langsung situsnya**. Kalau ada detail struktural yang meleset dari benchmark asli (mis. urutan menu, nama kelas CSS spesifik), itu sebabnya. Kalau memungkinkan, minta admin membuka akses egress ke kedua domain tersebut untuk sesi berikutnya, atau kirimkan tangkapan layar/HTML mentah kedua situs secara langsung.
