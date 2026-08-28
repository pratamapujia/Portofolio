const EXPERIENCE = [
  {
    role: "Freelance Web Developer",
    company: "Mandiri Solution Technology",
    period: "2022 — Sekarang",
    desc: "Membuat aplikasi berbasis web untuk keperluan bisnis, corporate, sekolah dan personal.",
    tags: ["Next.js", "PHP", "Tailwind", "MySQL", "Git", "Bootstrap"],
  },
  {
    role: "Internship Web Developer",
    company: "UPN Veteran Jawa Timur",
    period: "2022 — 2023",
    desc: "Mengembangkan aplikasi Sistem Informasi Eksekutif menggunakan framework CodeIgniter dan Bootstrap.",
    tags: ["CodeIgniter", "PHP", "Bootstrap", "MySQL", "Git"],
  },
  {
    role: "Staff IT",
    company: "SMK Senopati Sedati",
    period: "2024 — Sekarang",
    desc: "Membantu tim IT dalam membangun aplikasi berbasis web untuk keperluan sekolah, mengatur jaringan internet, dan troubleshooting.",
    tags: ["Network Engineer", "Web Developer", "Git", "Bootstrap", "Tailwind", "Laravel"],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative px-6 sm:px-10 lg:px-20 py-28 sm:py-32"
    >
      <div className="pointer-events-none absolute top-0 left-0 h-[360px] w-[360px] rounded-full bg-gold/10 blur-[120px]" />

      <div className="relative mx-auto max-w-4xl">
        <p className="section-eyebrow text-center lg:text-left">02 · Journey</p>
        <h2 className="mt-4 font-display text-3xl sm:text-4xl font-semibold text-ivory text-center lg:text-left">
          Experience
        </h2>

        <div className="mt-14 relative">
          {/* vertical timeline line */}
          <div className="absolute left-[7px] sm:left-[9px] top-2 bottom-2 w-px bg-gradient-to-b from-gold/60 via-white/10 to-transparent" />

          <ol className="space-y-10">
            {EXPERIENCE.map((item) => (
              <li
                key={`${item.company}-${item.period}`}
                className="relative pl-8 sm:pl-10"
              >
                <span className="absolute left-0 top-2 h-[15px] w-[15px] sm:h-[19px] sm:w-[19px] rounded-full glass-strong flex items-center justify-center shadow-glass">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                </span>

                <div className="glass rounded-2xl p-6 sm:p-7 shadow-glass transition-colors duration-300 hover:bg-white/[0.06]">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-lg font-semibold text-ivory">
                      {item.role}{" "}
                      <span className="text-muted font-body font-normal">
                        · {item.company}
                      </span>
                    </h3>
                    <span className="font-mono text-xs text-teal whitespace-nowrap">
                      {item.period}
                    </span>
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {item.desc}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-white/[0.06] px-3 py-1 font-mono text-[11px] text-ivory/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
