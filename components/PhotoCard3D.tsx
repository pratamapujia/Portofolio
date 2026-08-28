"use client";

import { useRef, useState } from "react";
import Image from "next/image"; // aktifkan ini saat sudah punya foto asli

export default function PhotoCard3D() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -7;
    const rotateY = ((x - centerX) / centerX) * 7;
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => setRotate({ x: 0, y: 0 });

  return (
    <div className="relative mx-auto w-full max-w-sm [perspective:1200px]">
      {/* ambient glow behind the card */}
      <div className="absolute -inset-10 rounded-[2.5rem] bg-gradient-to-br from-gold/25 via-teal/10 to-transparent blur-3xl animate-float-slow" />

      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
          transformStyle: "preserve-3d",
        }}
        className="relative glass-strong rounded-[2rem] p-3 shadow-glass-lg transition-transform duration-300 ease-out will-change-transform"
      >
        {/* photo layer — swap the placeholder for your own photo at /public/profile.jpg */}
        <div
          style={{ transform: "translateZ(50px)" }}
          className="relative overflow-hidden rounded-[1.5rem] aspect-[4/5] bg-gradient-to-br from-ink-soft to-ink"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            {/* <svg
              width="72"
              height="72"
              viewBox="0 0 24 24"
              fill="none"
              className="text-white/10"
            >
              <circle
                cx="12"
                cy="8"
                r="4"
                stroke="currentColor"
                strokeWidth="1.4"
              />
              <path
                d="M4 20c1.6-3.6 4.8-5.5 8-5.5s6.4 1.9 8 5.5"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
            </svg> */}
            <Image
              src="/img/about.jpeg"
              alt="Foto kamu"
              fill
              className="object-cover"
            />
          </div>
          {/* Ganti dengan <Image src="/profile.jpg" alt="Foto kamu" fill className="object-cover" /> */}
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
          <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[1.5rem]" />
        </div>

        {/* parallax badge — status chip */}
        <div
          style={{ transform: "translateZ(80px)" }}
          className="absolute -bottom-5 -left-5 glass rounded-2xl px-4 py-3 shadow-glass"
        >
          <p className="font-mono text-[10px] tracking-wide text-teal">
            status
          </p>
          <p className="text-sm font-medium text-ivory whitespace-nowrap">
            Open to work
          </p>
        </div>

        {/* parallax badge — code chip */}
        <div
          style={{ transform: "translateZ(70px)" }}
          className="absolute -top-4 -right-4 glass rounded-full h-14 w-14 flex items-center justify-center shadow-glass"
        >
          <span className="font-mono text-xs text-gold">{"</>"}</span>
        </div>
      </div>
    </div>
  );
}
