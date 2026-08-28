const SKILLS = [
  { group: "Frontend", items: ["React", "Next.js", "Bootstrap", "Tailwind CSS"] },
  { group: "Backend", items: ["Node.js", "PHP", "REST API", "PostgreSQL","MySQL"] },
  { group: "Tools", items: ["Git", "Docker", "Figma", "Vercel"] },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative px-6 sm:px-10 lg:px-20 py-28 sm:py-32"
    >
      <div className="pointer-events-none absolute inset-0 noise-bg opacity-30" />

      <div className="relative mx-auto max-w-6xl">
        <p className="section-eyebrow text-center lg:text-left">01 · About</p>
        <h2 className="mt-4 font-display text-3xl sm:text-4xl font-semibold text-ivory text-center lg:text-left">
          Tentang Saya
        </h2>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-[1fr_0.9fr] gap-10 items-start">
          <div className="glass-strong rounded-3xl p-8 sm:p-10 shadow-glass">
            <p className="text-muted leading-relaxed">
              Saya seorang{" "}
              <span className="text-ivory font-medium">web developer</span>{" "}
              yang senang mengubah ide menjadi produk web yang nyata —
              mulai dari merancang komponen antarmuka, menyusun struktur
              kode yang mudah dirawat, sampai memastikan setiap halaman
              terasa cepat dan responsif di berbagai perangkat.
            </p>
            <p className="mt-5 text-muted leading-relaxed">
              Saya percaya detail kecil membuat perbedaan besar: transisi
              yang halus, tipografi yang rapi, dan performa yang tidak
              dikorbankan demi tampilan. Saat ini saya terbuka untuk
              proyek freelance maupun kolaborasi jangka panjang.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 font-mono text-xs text-muted">
              <span className="glass rounded-full px-3 py-1.5">3+ tahun ngoding</span>
              <span className="glass rounded-full px-3 py-1.5">Berbasis di Indonesia</span>
              <span className="glass rounded-full px-3 py-1.5">Remote-friendly</span>
            </div>
          </div>

          <div className="grid gap-5">
            {SKILLS.map((skill) => (
              <div
                key={skill.group}
                className="glass rounded-2xl p-6 shadow-glass transition-colors duration-300 hover:bg-white/[0.06]"
              >
                <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-gold/80">
                  {skill.group}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-white/[0.06] px-3 py-1 text-xs text-ivory/90"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
