# DESIGN-PLAN — IWHM 2026 (Jakarta Series)

> Rencana desain sebelum coding. Dikritik terhadap anti-pattern §6.5 di bagian akhir.

## 1 — Palet (6 token, terukur dari deck §6.1)

| Token | Hex | Peran |
|---|---|---|
| `--violet` | `#A120EF` | Warna utama — field solid, panel, aksen kuat |
| `--lime` | `#C1FF72` | **Aksen data**: angka besar, countdown, highlight — hanya di `--ink`/besar (kontras!) |
| `--ink` | `#1E0728` | Latar gelap & teks utama |
| `--mauve` | `#C8A2C9` | Latar lembut, panel tenang, **warna badge TBC** (netral, bukan alarm) |
| `--periwinkle` | `#8B71D5` | Teks sekunder di latar terang (teks besar saja — kontras 3.87:1) |
| `--paper` | `#FFFFFF` | Latar terang |

Aturan kontras dipatuhi ketat (§6.2): lime **tidak pernah** di atas paper (1.18:1); lime di violet
hanya untuk teks ≥24px / ≥18.7px bold; teks normal di violet selalu paper putih (5.29:1).

## 2 — Tipografi (2 family, alasan)

- `--font-display: 'Archivo'` (sumbu `wdth` 112–125, ~font-stretch 118%). **Alasan:** substitusi
  terdekat untuk CyGrotesk Wide di Google Fonts — grotesk geometris dengan sumbu lebar **asli**,
  bukan diregangkan CSS. *Pending:* konfirmasi lisensi CyGrotesk (Q20); bila ada → self-host & swap.
- `--font-body: 'Barlow'` (400/500/600/700). **Alasan:** persis dipakai deck, tersedia di Google Fonts.
- Dua family saja — tidak ada font ketiga untuk label kecil.

## 3 — Layout Hero — konsep utama + 2 alternatif

**Konsep utama — "Poster type-forward" (dipilih).** Type dominan agar hero tetap kuat **sebelum**
foto berlisensi tersedia (foto = blocker, §6/§7). Foto masuk ke dalam mask kelopak, bisa diganti
placeholder tanpa merusak komposisi.
```
┌───────────────────────────────────────────────┐
│ [logo]                        nav        ID|EN │
│                                                │
│  INDONESIA WOMEN            ╭─────────────╮     │
│  HALF MARATHON             (  foto/KV di   )    │  ← foto dalam mask
│  ‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑           (  MASK KELOPAK )    │    kelopak "M"
│  Continuing the Movement,   ╰────┬────────╯     │
│  Redefining the Journey          │ 29 NOV 2026  │  ← chip lime + badge
│                                  │ [Mnggu knfrm]│    "Menunggu konfirmasi"
│  [ 90 : 12 : 44 : 08 ]  ← countdown (lime/ink)  │
│  [ Daftar Sekarang ]  [ Lihat Jadwal ]          │
└───────────────────────────────────────────────┘
   Latar: paper putih + satu blok violet solid (bukan gradasi).
```

**Alternatif A — "Full-bleed masked".** Foto ber-mask kelopak jadi latar penuh + scrim `--ink`,
teks overlay kiri-tengah, countdown sebagai bar bawah. *Risiko:* bergantung foto (belum ada) → jadi cadangan.
```
┌───────────────────────────────┐
│▓▓▓ foto masked + scrim ink ▓▓▓│
│  UNSTOPPABLE HER JOURNEY      │
│  Continuing the Movement…     │
│──────────────────────────────│
│ 29 NOV • GBK • [90:12:44:08]  │
└───────────────────────────────┘
```

**Alternatif B — "Editorial split 60/40".** Kiri field violet dengan angka tanggal lime raksasa;
kanan paper dengan tema + CTA + countdown. Type-forward, foto opsional kecil di sudut.
```
┌──────────────┬────────────────┐
│  violet      │ paper          │
│  29          │ Continuing the │
│  NOV         │ Movement…      │
│  2026 (lime) │ [countdown]    │
│ [Mnggu knfrm]│ [Daftar][Jdwl] │
└──────────────┴────────────────┘
```

## 4 — Signature device: mask kelopak (petal)

Logo IWHM = **4 siluet organik berbeda** (I/W/H/M). Dipakai sebagai perangkat visual utama:
- `clip-path`/mask untuk foto hero + **3 kartu kategori dengan siluet berbeda** (HM/10K/5K, bukan satu bentuk diulang).
- Bentuk badge status & node penomoran timeline.
- Pemisah antar-section = **tepi lengkung organik** (bukan garis lurus, bukan diagonal menyudut).

🔴 **BLOCKER:** logo vektor belum ada di repo (inventaris kosong). Per §6.4, **tidak membuat siluet
tebakan.** Interim: `border-radius` multi-nilai organik (mis. `42% 58% 63% 37% / 45% 38% 62% 55%`)
sebagai *placeholder yang jelas placeholder* — 3 konfigurasi berbeda untuk 3 kategori. Ganti dengan
path asli begitu SVG diterima (Q19). Dicatat di `ASSET-REQUEST.md`.

## 5 — Paragraf pembeda

Situs ini menolak tampil sebagai template event lari karena tiga keputusan: **(1)** sistem
"poster type-forward" — display Archivo lebar sebagai arsitektur, bukan hiasan, sehingga halaman kuat
tanpa bergantung stok foto; **(2)** geometri **organik-kelopak** yang diturunkan langsung dari empat
siluet logo IWHM — pembeda yang belum pernah dipakai brand ini dan tak bisa ditiru template mana pun;
**(3)** disiplin warna: violet `#A120EF` berdiri solid tanpa gradasi ungu-pink, dan **lime hanya
untuk data** (angka, countdown) sehingga terbaca sebagai sistem informasi atletik — tegas, bukan
"feminin" klise. Keberanian desain dihabiskan di satu tempat (kelopak); grid, tabel, FAQ tetap tenang.

## 6 — Kritik-diri terhadap anti-pattern §6.5 (+ revisi)

| # | Anti-pattern | Status rencana | Revisi yang diterapkan |
|---|---|---|---|
| 1 | Shard/polygon menyudut (bahasa PLN) | Aman | Semua bentuk organik membulat; pemisah section lengkung, **bukan** `polygon()` diagonal |
| 2 | Eyebrow ALL-CAPS tracking di tiap heading | **Kena** (awalnya eyebrow di tiap section) | **Dibatasi** ke maks. 1–2 tempat (kicker hero); heading lain tanpa eyebrow |
| 3 | Penanda `01/02/03` non-sekuensial | Berisiko | Hanya untuk timeline race weekend (sekuensial). Fasilitas Race Village = daftar biasa |
| 4 | Warnai satu kata di headline | **Kena** (awalnya lime-highlight 1 kata) | **Dihapus** — lime dipakai untuk angka/data saja, bukan penekanan kata di headline |
| 5 | Semua kartu rounded seragam + 1 shadow abu | **Kena** (kartu kategori seragam) | Treatment divariasikan: panel violet flat, kartu paper ber-border ink, media ber-mask kelopak — bukan satu radius |
| 6 | `→` di tiap tombol | Aman | Label kata kerja polos ("Daftar Sekarang", "Lihat Jadwal") tanpa panah tempel |
| 7 | Fade-up di tiap section | **Kena** (awalnya animasi tersebar) | **Satu** momen ter-orkestrasi saat load hero; section lain statis. `prefers-reduced-motion` dihormati |
| 8 | Gradasi ungu→pink dekoratif | Aman | Violet solid; tidak ada gradient dekoratif |
| 9 | Visual "feminin" klise (pink pastel, bunga, script) | Aman | Register atletik violet+lime; tanpa pink pastel/ikon bunga generik/font script |

**Perubahan tercatat:** anti-pattern #2, #4, #5, #7 semula berisiko kena → rencana direvisi seperti kolom kanan.
