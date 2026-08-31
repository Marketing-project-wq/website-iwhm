# BRAND AUDIT — Aset IWHM 2026

**Tanggal:** 31 Agustus 2026
**Sumber:** `02_BRANDING_ASSETS-20260831T081251Z-1-001.zip` (45 file, 273 MB)
**Metode:** ekstraksi vektor dari file `.ai` (PDF-compatible) via `pdftocairo`, sampling piksel, pembacaan metadata font via `fontTools`.

Dokumen ini mencatat apa yang ditemukan, apa yang diubah, dan apa yang belum bisa diputuskan sendiri. Bagian **🔴 Perlu keputusan** adalah yang paling penting dibaca.

---

## 1. Ringkasan isi paket

| Folder | Isi | Catatan |
|---|---|---|
| `01 LOGO` | 1 `.ai` (6 artboard) + 6 PNG @8000px | ✅ Ada sumber vektor |
| `02 FONT` | Paris2024 (3 file) + Comba Test Ultra Wide | 🔴 Keduanya bermasalah lisensi |
| `03 GRAPHIC ASSETS` | 1 `.ai` (14 artboard) + 14 PNG + 1 sheet elemen | ⚠️ Sheet elemen tidak punya sumber vektor |
| `04 BACKGROUND` | 1 `.ai` (3 artboard) + 3 PNG + 4 JPEG mesh | ✅ |
| `05 POSTER SAMPLE` | 3 poster + 1 `.ai` 208 MB | ⚠️ Memuat co-brand event lain + typo hashtag |

---

## 2. 🔴 Perlu keputusan

### 2.1 Warna utama: `#8D39E5`, bukan `#A120EF`

Perkiraan saya sebelumnya (`#A120EF`) diambil dari deck PDF yang dirender. Aset resmi memberi nilai berbeda, dan nilai ini **dibaca langsung dari sumber vektor**, bukan diperkirakan:

```
fill="rgb(55.2948%, 22.3526%, 89.804077%)"  →  #8D39E5
```

Nilai ini konsisten di **keenam file logo, seluruh supergraphic, dan background** — jadi saya cukup yakin ini warna brand yang mengikat.

**Tapi ada dua sub-sistem warna di dalam satu paket:**

| Sub-sistem | Ungu | Pendamping | File |
|---|---|---|---|
| **A — Inti** | `#8D39E5` | `#C939E5` magenta, `#EAFF52` kuning-lime | Logo, supergraphic, background 01–03 |
| **B — Mesh** | `#A120EF` | `#C8A2C9` mauve | `IWHM 2026 ELEMENTS.png`, mesh M1/M2 |

Selisih `#8D39E5` vs `#A120EF` cukup terlihat berdampingan. Ini pola yang sama dengan masalah merah logo 20FIT yang sampai sekarang belum tuntas.

**Yang saya lakukan sementara:** semua SVG logo dinormalisasi ke `#8D39E5` (sub-sistem A), karena logo adalah artefak paling otoritatif. Aset mesh dibiarkan apa adanya.

**Yang perlu diputuskan tim desain:** apakah sub-sistem B diselaraskan ke A, atau memang sengaja dibedakan untuk konteks tertentu?

### 2.2 Kedua font brand tidak bisa dipakai produksi apa adanya

**Comba Test Bold Ultra Wide** — file lisensi yang ikut dalam paket berbunyi harfiah:

```
License: Demo / Trial
Link: https://befonts.com/comba-font.html
```

Nama fontnya sendiri mengandung kata "Test". Ini font percobaan. Memakainya di situs produksi adalah pelanggaran lisensi yang cukup jelas. Font inilah yang punya bentuk bunga di dalam huruf O — motif kelopak di logo kemungkinan berasal dari sini.

**Paris2024** — metadata font menyatakan:

```
Trademark : Paris 2024 is a trademark of Paris 2024 Olympic and Paralympic Games
Manufacturer: Ecobranding
fsType    : 4  (preview & print embedding — bukan editable embedding)
```

Font ini dipakai untuk wordmark "INDONESIA WOMEN HALF MARATHON" di logo. Saya belum bisa memastikan apakah rilis publiknya mengizinkan pemakaian komersial pihak ketiga — saya bukan ahli hukum dan tidak mau menebak. Yang bisa saya sampaikan sebagai fakta: fontnya mendeklarasikan diri sebagai merek dagang penyelenggara Olimpiade, dan `fsType 4` membatasi embedding.

**Rekomendasi:** eskalasi ke Jeff sebelum tahap 1 build dimulai. Ini keputusan legal, bukan keputusan desain.

**Kabar baiknya:** wordmark logo sudah dikonversi ke vektor SVG, jadi **font tidak dibutuhkan untuk menampilkan logo**. Yang perlu pengganti hanya heading dan body situs.

### 2.3 Typo hashtag di poster

Ketiga poster sample menulis:

```
#risewtiheverystrides
```

Dua persoalan: `wtih` seharusnya `with`, dan bentuk jamak `strides` sedangkan deck menulis tunggal `#RiseWithEveryStride`. Sudah saya perbesar dan verifikasi — memang tertulis begitu di file, bukan salah baca.

Perlu konfirmasi bentuk resmi sebelum dipakai di situs.

### 2.4 Poster sample memuat co-brand event lain

Ketiga poster memasang lockup **"PLN mobile × JUSTISIA HALF MARATHON 2025"** di kanan atas. Ini event yang berbeda. Poster-poster ini tampaknya template layout yang belum diganti co-brand-nya.

**Jangan pakai poster ini sebagai aset situs.** Nilainya hanya sebagai referensi tata letak dan penempatan supergraphic.

---

## 3. Sistem grafis — koreksi terhadap prompt v1.2

Di prompt v1.2 saya mengusulkan *signature device* berupa "petal mask" — clip-path dari bentuk kelopak logo. **Usulan itu saya buat sebelum melihat aset asli, dan sekarang perlu dicabut.**

Brand sudah punya sistem grafis jadi, terdiri dari tiga keluarga:

| Keluarga | Bentuk | Jumlah | Format hasil |
|---|---|---|---|
| **Loop** | Pita/torus melingkar dengan blend garis, gradasi ungu→magenta→emas | 8 | 4 SVG + 4 WebP |
| **Wave** | Gelombang sinus blend garis | 4 | 4 SVG |
| **Elemen gerak** | Chevron/burst bersudut dengan motion blur | 10 | 10 WebP |
| **Glow** | Blob radial blur | 2 | ❌ tidak diekspor — pakai CSS `radial-gradient` |

Keluarga **elemen gerak** adalah yang paling tepat jadi signature device: bentuknya chevron berarah dengan blur, secara harfiah menggambarkan gerak maju. Jauh lebih pas untuk event lari daripada ide kelopak saya.

**Konsekuensi ke §6.5 prompt:** anti-pattern nomor 1 yang melarang bentuk bersudut **harus dicabut** — saya menulisnya berdasarkan logo saja. Pembeda dari situs PLN bukan "bulat versus bersudut", melainkan karakternya: PLN memakai pecahan kaca statis, IWHM memakai chevron berarah dengan blur gerak dan gradasi.

---

## 4. Yang sudah dikerjakan

### 4.1 Logo — 8 SVG siap web

Diekstrak dari `LOGO IWHM2.ai` (6 artboard, Illustrator 29.8, dibuat 13 Nov 2025). Warna dinormalisasi dari notasi persen ke hex.

| File | Kegunaan |
|---|---|
| `logo-horizontal.svg` | Header di latar terang |
| `logo-horizontal-reversed.svg` | Header di latar gelap / di atas foto |
| `logo-stacked.svg` / `-reversed.svg` | Layout persegi, share image |
| `logo-vertical.svg` / `-reversed.svg` | Layout portrait, story |
| `logo-mark.svg` / `-reversed.svg` | Favicon, avatar, watermark |

**Pekerjaan tambahan pada versi reversed:** file asli (`-02/-04/-06`) berupa logo putih di atas **blok persegi ungu solid**, yang tidak bisa dipakai di atas foto. Blok latar itu saya lepas sehingga hasilnya transparan. Perlu dua metode karena strukturnya berbeda — pada logo horizontal & stacked latarnya `<rect>`, pada logo vertical latarnya `<path>` persegi.

`logo-mark.svg` dibuat dengan memotong `viewBox` ke area 4 kelopak saja (x 105–1355 dari 1920). Sudah diverifikasi tidak memotong huruf wordmark.

Semua sudah dicek visual di latar terang dan gelap.

### 4.2 Grafis — 16 file

Aturan yang saya pakai: SVG dipertahankan bila ≤160 KB, di atas itu diraster ke WebP karena blend Illustrator menghasilkan ratusan path.

| File | Semula | Jadi |
|---|---|---|
| `supergraphic-loop-03.webp` | 1.192 KB SVG | 181 KB |
| `supergraphic-loop-10.webp` | 548 KB SVG | 117 KB |
| `supergraphic-loop-07.webp` | 311 KB SVG | 110 KB |
| `supergraphic-loop-02.webp` | 645 KB SVG | 91 KB |
| 8 file lain | — | tetap SVG, 2–139 KB |

### 4.3 Background — jadi CSS, bukan file

Tiga background dasar tidak perlu file gambar sama sekali. Nilai berikut diambil dengan sampling dari PNG asli:

```css
/* BACKGROUNDIWHM2-01 — ungu solid */
background: #8D39E5;

/* BACKGROUNDIWHM2-02 — magenta ke kuning-lime */
background: linear-gradient(90deg,
  #C939E5 0%, #CB45DC 25%, #D16AC1 50%, #E2D075 87%, #EAFF52 100%);

/* BACKGROUNDIWHM2-03 — magenta ke ungu */
background: linear-gradient(90deg,
  #F262E5 0%, #AC46E5 25%, #933CE5 50%, #8D39E5 75%);
```

Menghemat sekitar 300 KB dan menjadikannya responsif tanpa media query.

Catatan menarik: gradasi BG-02 berakhir di `#EAFF52`. Jadi aksen kuning-lime **memang ada** di sistem brand resmi — hanya lebih kuning daripada `#C1FF72` yang saya ukur dari tipografi tanggal di deck.

Empat mesh background (M1/M2) diekspor sebagai WebP dua ukuran (1920px dan 960px), masing-masing hanya 3–13 KB.

### 4.4 Kontras — dihitung ulang dengan ungu resmi

| Kombinasi | Rasio | Putusan |
|---|---|---|
| `#FFFFFF` di `#8D39E5` | 5.46 | ✅ AA semua ukuran |
| `#C1FF72` di `#8D39E5` | 4.63 | ✅ AA — sebelumnya gagal di 4.49 dengan ungu perkiraan |
| `#8D39E5` di `#FFFFFF` | 5.46 | ✅ |
| `#1E0728` di `#8D39E5` | 3.45 | ⚠️ teks besar saja |
| `#FFFFFF` di `#C939E5` | 4.04 | ⚠️ teks besar saja |
| `#1E0728` di `#C939E5` | 4.66 | ✅ — pakai teks gelap di atas magenta, bukan putih |
| `#C1FF72` di `#FFFFFF` | 1.18 | 🚫 jangan pernah |

Koreksi ungu justru **memperbaiki** aksesibilitas: lime di atas ungu sekarang lolos AA untuk teks normal.

---

## 5. ⚠️ Keterbatasan hasil kerja ini

Hal-hal yang perlu Anda tahu sebelum memakai asetnya:

1. **Tiga elemen chevron (`element-02`, `-07`, `-09`) masih membawa serpihan tipis dari elemen tetangganya.** Sheet `IWHM 2026 ELEMENTS.png` adalah PNG datar tanpa sumber vektor, tata letaknya tidak persis grid, jadi pemotongan otomatis tidak sempurna. **Minta file vektor/berlapis ke desainer** kalau elemen ini akan dipakai besar-besar.

2. **Elemen chevron hanya tersedia raster.** Tidak ada di `SUPGRAPHIC.ai`. Kalau dipakai lebih besar dari 480px akan pecah.

3. **Warna hex hasil sampling adalah nilai sRGB dari file yang dirender**, bukan dari brand guideline resmi. Untuk logo saya membacanya dari sumber vektor sehingga akurat, tapi untuk gradasi background nilainya hasil sampling piksel. Kalau ada brand book, angka di sana yang menang.

4. **Belum ada favicon `.ico` dan OG image.** Perlu dibuat dari `logo-mark.svg` setelah ukuran final ditentukan.

5. **Belum ada foto untuk hero dan galeri.** Paket ini tidak memuat foto event selain yang tertanam di poster sample, dan status hak pakainya tidak jelas.

---

## 6. Yang perlu diminta ke desainer

| # | Item | Alasan |
|---|---|---|
| 1 | Konfirmasi ungu resmi: `#8D39E5` atau `#A120EF` | Dua sub-sistem berbeda dalam satu paket |
| 2 | Sumber vektor/berlapis untuk 10 elemen chevron | Hanya tersedia sebagai PNG datar |
| 3 | Bentuk resmi hashtag | Poster memuat typo `wtih` + jamak/tunggal berbeda dari deck |
| 4 | Status lisensi Paris2024 & pengganti Comba | Keduanya bermasalah untuk web |
| 5 | Brand guideline resmi (kalau ada) | Verifikasi semua nilai di dokumen ini |
| 6 | Foto berlisensi jelas untuk hero & galeri | Belum ada di paket |
| 7 | Poster dengan co-brand yang benar | Yang ada memakai lockup event lain |
