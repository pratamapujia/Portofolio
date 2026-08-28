"use client";

import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "My Project" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) =>
      document.getElementById(item.id),
    ).filter((el): el is HTMLElement => !!el);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <header className="fixed top-4 sm:top-6 inset-x-0 mx-auto z-50 w-[92%] sm:w-fit max-w-full px-2 sm:px-0">
      {/* Container utama Navbar */}
      <nav
        className={`glass-strong flex items-center justify-between sm:justify-center gap-1 sm:gap-1.5 rounded-full px-4 sm:px-2.5 py-2 shadow-glass transition-shadow duration-500 w-full ${
          scrolled ? "shadow-glass-lg" : ""
        }`}
      >
        {/* Logo / Singkatan */}
        <span className="flex items-center gap-2 font-mono text-xs text-gold/90 sm:border-r sm:border-white/10 sm:pr-4 sm:mr-1">
          <span className="h-1.5 w-1.5 rounded-full bg-teal animate-blink" />
          PPA
        </span>

        {/* Menu Desktop */}
        <div className="hidden sm:flex items-center gap-1 sm:gap-1.5">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              className={`relative rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-300 whitespace-nowrap ${
                active === item.id
                  ? "text-ink"
                  : "text-ivory/70 hover:text-ivory"
              }`}
            >
              {active === item.id && (
                <span className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-gold to-gold-soft" />
              )}
              {item.label}
            </button>
          ))}
        </div>

        {/* Tombol Hamburger untuk Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden p-1.5 text-ivory/70 hover:text-ivory focus:outline-none transition-colors"
          aria-label="Toggle Menu"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Dropdown Menu Mobile - Diubah posisinya agar tetap terikat dalam boundary container */}
      <div
        className={`absolute top-full left-0 right-0 mt-2 transition-all duration-300 sm:hidden origin-top ${
          isOpen
            ? "opacity-100 scale-y-100"
            : "opacity-0 scale-y-0 pointer-events-none"
        }`}
      >
        <div className="glass-strong flex flex-col gap-1 rounded-2xl p-2 shadow-glass-lg w-full">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              className={`relative rounded-xl px-4 py-3 text-sm font-medium text-left transition-colors duration-300 ${
                active === item.id
                  ? "text-ink bg-gradient-to-r from-gold to-gold-soft"
                  : "text-ivory/70 hover:text-ivory hover:bg-white/5"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
