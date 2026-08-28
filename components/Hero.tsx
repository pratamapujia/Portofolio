import PhotoCard3D from "./PhotoCard3D";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-32 pb-20 px-6 sm:px-10 lg:px-20 overflow-hidden"
    >
      {/* ambient background orbs */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[420px] w-[420px] rounded-full bg-gold/10 blur-[110px] animate-float-slow" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[380px] w-[380px] rounded-full bg-teal/10 blur-[110px] animate-float" />
      <div className="pointer-events-none absolute inset-0 noise-bg opacity-40" />

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="animate-fade-up text-center lg:text-left">
          <p className="section-eyebrow inline-flex items-center gap-2 justify-center lg:justify-start">
            <span className="text-teal">$</span> whoami
            <span className="inline-block h-3 w-[2px] bg-gold animate-blink" />
          </p>

          <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.08] text-ivory">
            Halo, saya{" "}
            <span className="bg-gradient-to-r from-gold to-teal bg-clip-text text-transparent">
              Pratama Puji A.
            </span>
            <br className="hidden lg:block" /> — Web Developer & Network
            Engineer
          </h1>

          <p className="mt-6 max-w-xl text-base sm:text-lg text-muted mx-auto lg:mx-0">
            Saya seorang web developer yang senang mengubah ide menjadi produk
            web yang nyata — mulai dari merancang komponen antarmuka, menyusun
            struktur kode yang mudah dirawat, sampai memastikan setiap halaman
            terasa cepat dan responsif di berbagai perangkat.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <a
              href="#projects"
              className="w-full sm:w-auto rounded-full bg-gradient-to-r from-gold to-gold-soft px-7 py-3 text-sm font-semibold text-ink shadow-glow transition-transform duration-300 hover:-translate-y-0.5"
            >
              Lihat Proyek
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto glass rounded-full px-7 py-3 text-sm font-medium text-ivory transition-colors duration-300 hover:bg-white/[0.08]"
            >
              Hubungi Saya
            </a>
          </div>

          <div className="mt-10 flex items-center gap-6 justify-center lg:justify-start font-mono text-xs text-muted">
            <span>React</span>
            <span className="h-1 w-1 rounded-full bg-white/20" />
            <span>Next.js</span>
            <span className="h-1 w-1 rounded-full bg-white/20" />
            <span>PHP</span>
            <span className="h-1 w-1 rounded-full bg-white/20" />
            <span>Tailwind</span>
          </div>
        </div>

        <div className="animate-fade-up [animation-delay:150ms] opacity-0 [animation-fill-mode:forwards]">
          <PhotoCard3D />
        </div>
      </div>
    </section>
  );
}
