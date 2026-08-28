# Portofolio — Web Developer

Website portofolio pribadi dengan Next.js 14 (App Router) + Tailwind CSS.
Tema: simple elegant dengan sentuhan glassmorphism, navbar melayang di tengah, dan photo card 3D di hero.

## Menjalankan di lokal

```bash
npm install
npm run dev
```

Buka `http://localhost:3000`.

## Struktur

```
app/
  layout.tsx     -> font (Space Grotesk, Inter, JetBrains Mono) & metadata
  page.tsx        -> menyusun semua section
  globals.css     -> utility glassmorphism (.glass, .glass-strong, dll)
components/
  Navbar.tsx       -> navbar melayang, rounded-full, glass, active-link tracking
  Hero.tsx         -> hero section + teks intro
  PhotoCard3D.tsx  -> photo card dengan efek tilt 3D mengikuti kursor
  About.tsx        -> tentang saya + skills
  Experience.tsx   -> timeline pengalaman kerja
  Projects.tsx     -> grid "My Project" (klik kartu untuk buka modal)
  ProjectModal.tsx -> popup modal detail proyek
  Contact.tsx      -> kontak & sosial media
```

## Yang perlu kamu ganti

1. **Nama & bio** — di `app/layout.tsx` (metadata) dan `components/Hero.tsx`, `About.tsx`.
2. **Foto profil** — buka `components/PhotoCard3D.tsx`, aktifkan baris `import Image from "next/image"`,
   lalu ganti div placeholder dengan:
   ```tsx
   <Image src="/profile.jpg" alt="Foto kamu" fill className="object-cover" />
   ```
   Taruh foto di `public/profile.jpg`.
3. **Data proyek & isi modal** — array `PROJECTS` di `components/Projects.tsx` (isi `liveUrl`/`repoUrl` dengan link asli; `longDesc` tampil di dalam popup).
4. **Thumbnail proyek** — taruh gambar screenshot tiap proyek di `public/projects/` (misalnya `ecommerce-dashboard.jpg`, rasio 16:9 lebih rapi), lalu sesuaikan path di field `thumbnail` pada `PROJECTS`. Kalau field `thumbnail` dikosongkan, kartu otomatis menampilkan placeholder. Gambar di-lazy-load otomatis oleh `next/image` dan menampilkan efek shimmer/blur (lihat `lib/shimmer.ts`) selagi dimuat.
5. **Data pengalaman kerja** — array `EXPERIENCE` di `components/Experience.tsx`.
6. **Kontak** — array `CHANNELS` dan alamat email di `components/Contact.tsx`.
7. **Warna aksen** — token warna ada di `tailwind.config.ts` (`gold`, `teal`, `ink`, `ivory`).

## Deploy

Push ke GitHub lalu import repo-nya ke [Vercel](https://vercel.com/new) — otomatis terdeteksi sebagai Next.js.
