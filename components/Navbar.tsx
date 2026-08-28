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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(
      (el): el is HTMLElement => !!el
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-50 w-[92%] sm:w-auto">
      <nav
        className={`glass-strong flex items-center justify-between sm:justify-center gap-1 sm:gap-1.5 rounded-full px-2.5 py-2 shadow-glass transition-shadow duration-500 ${
          scrolled ? "shadow-glass-lg" : ""
        }`}
      >
        <span className="hidden sm:flex items-center gap-2 pl-3 pr-4 font-mono text-xs text-gold/90 border-r border-white/10 mr-1">
          <span className="h-1.5 w-1.5 rounded-full bg-teal animate-blink" />
          PPA
        </span>

        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => handleClick(item.id)}
            className={`relative rounded-full px-2.5 sm:px-4 py-1.5 text-[11px] sm:text-sm font-medium transition-colors duration-300 whitespace-nowrap ${
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
      </nav>
    </header>
  );
}
