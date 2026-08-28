const CHANNELS = [
  {
    label: "Email",
    value: "pujiistiani123@gmail.com",
    href: "mailto:pujiistiani123@gmail.com",
  },
  {
    label: "GitHub",
    value: "github.com/pratamapujia",
    href: "https://github.com/pratamapujia",
  },
  {
    label: "Instagram",
    value: "@pratamapuji.a",
    href: "https://instagram.com/pratamapuji.a",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative px-6 sm:px-10 lg:px-20 py-28 sm:py-36"
    >
      <div className="pointer-events-none absolute -bottom-20 left-1/2 -translate-x-1/2 h-[420px] w-[600px] rounded-full bg-gold/10 blur-[130px]" />

      <div className="relative mx-auto max-w-3xl text-center">
        <p className="section-eyebrow">04 · Contact</p>
        <h2 className="mt-4 font-display text-3xl sm:text-4xl font-semibold text-ivory">
          Mari Berkolaborasi
        </h2>
        <p className="mt-4 text-muted max-w-lg mx-auto">
          Punya proyek atau ide yang ingin diwujudkan? Kirim pesan, dan mari
          kita diskusikan langkah selanjutnya.
        </p>

        <div className="mt-12 glass-strong rounded-3xl p-8 sm:p-10 shadow-glass-lg">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {CHANNELS.map((channel) => (
              <a
                key={channel.label}
                href={channel.href}
                target={channel.label !== "Email" ? "_blank" : undefined}
                rel="noreferrer"
                className="glass rounded-2xl p-5 text-left transition-colors duration-300 hover:bg-white/[0.08]"
              >
                <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-gold/80">
                  {channel.label}
                </p>
                <p className="mt-2 text-sm text-ivory/90 break-all">
                  {channel.value}
                </p>
              </a>
            ))}
          </div>

          <a
            href="mailto:nama@email.com"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-gold to-gold-soft px-8 py-3 text-sm font-semibold text-ink shadow-glow transition-transform duration-300 hover:-translate-y-0.5"
          >
            Kirim Email
          </a>
        </div>

        <p className="mt-14 font-mono text-xs text-muted">
          © {new Date().getFullYear()} PPA. Dibuat dengan Next.js &amp;
          Tailwind CSS.
        </p>
      </div>
    </section>
  );
}
