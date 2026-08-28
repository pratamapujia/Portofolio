"use client";

import { useState } from "react";
import Image from "next/image";
import ProjectModal, { ProjectDetail } from "./ProjectModal";
import { shimmerBlurUrl } from "@/lib/shimmer";

const PROJECTS: ProjectDetail[] = [
  {
    name: "Sistem Informasi Eksekutif",
    year: "2020",
    role: "Full Stack Developer",
    thumbnail: "/projects/1.png",
    desc: "Aplikasi ini dibangun untuk menginformasikan kinerja dan prestasi mahasiswa UPN Veteran Jawa Timur.",
    longDesc:
      "Aplikasi ini dibangun untuk menginformasikan kinerja dan prestasi mahasiswa UPN Veteran Jawa Timur. Aplikasi dibangun menggunakan framework CodeIgniter, Bootstrap dan database MySQL.",
    tags: ["PHP", "CodeIgniter", "Bootstrap", "MySQL"],
    liveUrl: "https://sie.upnjatim.ac.id/",
  },
  {
    name: "Catalog Project",
    year: "2021",
    role: "Full Stack Developer",
    thumbnail: "/projects/2.png",
    desc: "Aplikasi katalog penjualan berbasis web.",
    longDesc:
      "Aplikasi katalog penjualan berbasis web. Dibangun untuk perusahaan steel, dengan fitur pencarian, filter, dan detail produk. Aplikasi dibangun menggunakan framework CodeIgniter, PHP, dan Bootstrap.",
    tags: ["CodeIgniter", "PHP", "Bootstrap", "MySQL"],
    liveUrl: "https://www.ciptajayalestari.id/",
    repoUrl: "https://github.com/pratamapujia/CJLProject",
  },
  {
    name: "Combini Landing Page",
    year: "2022",
    role: "Frontend Developer",
    thumbnail: "/projects/3.png",
    desc: "Project yang saya kerjakan sebagai freelancer.",
    longDesc:
      "Project yang saya kerjakan sebagai freelancer. Saya membuat aplikasi ini untuk keperluan lomba akademik di Universitas Pembangunan Nasional Veteran Jawa Timur. Aplikasi ini adalah sebuah Frontend berbasis web. Saya menggunakan HTML, CSS, dan JavaScript untuk membangun antarmuka pengguna.",
    tags: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://combini.netlify.app/",
  },
  {
    name: "Online Voting System (OVO)",
    year: "2024 - 2025",
    role: "Full Stack Developer",
    thumbnail: "/projects/4.png",
    desc: "Aplikasi pemilihan calon ketua OSIS SMK Senopati Sedati",
    longDesc:
      "Aplikasi pemilihan calon ketua OSIS SMK Senopati Sedati. Aplikasi ini dibangun untuk mengganti sistem pemilihan calon ketua OSIS SMK Senopati Sedati menggunakan teknologi modern, seperti menggunakan aplikasi berbasis website ini. Aplikasi ini dibangun dengan Laravel, Bootstrap, dan database MySQL.",
    tags: ["Laravel", "Bootstrap", "MySQL"],
    liveUrl: "https://pilketos.smksenopati.sch.id/",
    repoUrl: "https://github.com/pratamapujia/ovo",
  },
  {
    name: "Sistem Penjadwalan Otomatis (SiPenO)",
    year: "2026",
    role: "Full Stack Developer",
    thumbnail: "/projects/5.png",
    desc: "Aplikasi pembuatan jadwal mengajar guru secara otomatis dengan menggunakan algoritma genetika.",
    longDesc:
      "Aplikasi ini dibuat untuk keperluan penjadwalan guru di sekolah yang masih menggunakan excel agar beralih menggunakan aplikasi berbasis website. Aplikasi ini dibangun menggunakan Laravel, Bootstrap, dan database MySQL.",
    tags: ["Laravel", "Bootstrap", "MySQL"],
    repoUrl: "https://github.com/pratamapujia/sipeno",
  },
  {
    name: "Landing Page SMK Senopati Sedati",
    year: "2026",
    role: "Full Stack Developer",
    thumbnail: "/projects/6.png",
    desc: "Membangun landing page SMK Senopati Sedati",
    longDesc:
      "Pembaharuan landing page sekolah SMK Senopati dengan menggunakan teknologi modern, seperti menggunakan Laravel, Tailwindcss, dan database MySQL.",
    tags: ["Laravel", "Tailwind", "MySQL"],
    liveUrl: "https://digilib.smksenopati.sch.id/",
  },
];

export default function Projects() {
  const [selected, setSelected] = useState<ProjectDetail | null>(null);

  return (
    <section
      id="projects"
      className="relative px-6 sm:px-10 lg:px-20 py-28 sm:py-32"
    >
      <div className="pointer-events-none absolute top-1/3 right-0 h-[360px] w-[360px] rounded-full bg-teal/10 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl">
        <p className="section-eyebrow text-center lg:text-left">03 · Work</p>
        <h2 className="mt-4 font-display text-3xl sm:text-4xl font-semibold text-ivory text-center lg:text-left">
          My Project
        </h2>
        <p className="mt-3 max-w-lg text-muted text-center lg:text-left mx-auto lg:mx-0">
          Beberapa proyek yang pernah saya kerjakan, dari studi kasus pribadi
          sampai produk yang dipakai pengguna nyata. Klik kartu untuk melihat
          detailnya.
        </p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {PROJECTS.map((project, index) => (
            <button
              key={project.name}
              onClick={() => setSelected(project)}
              className="group relative text-left glass rounded-3xl overflow-hidden shadow-glass transition-all duration-300 hover:-translate-y-1.5 hover:bg-white/[0.06] hover:shadow-glass-lg"
            >
              {/* thumbnail */}
              <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-ink-soft to-ink">
                {project.thumbnail ? (
                  <Image
                    src={project.thumbnail}
                    alt={`Thumbnail ${project.name}`}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL={shimmerBlurUrl(700, 394)}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-mono text-xs text-white/20">
                      {"</>"}
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
                <span className="absolute top-4 left-4 font-mono text-xs text-ivory/80">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="absolute top-4 right-4 font-mono text-xs text-gold opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                  detail →
                </span>
              </div>

              {/* content */}
              <div className="p-7 sm:p-8">
                <h3 className="font-display text-xl font-semibold text-ivory">
                  {project.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {project.desc}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white/[0.06] px-3 py-1 font-mono text-[11px] text-ivory/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
