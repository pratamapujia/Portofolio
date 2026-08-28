import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0A0C10",
          soft: "#12151C",
          deep: "#050609",
        },
        ivory: "#F4F2ED",
        muted: "#8B8F9C",
        gold: {
          DEFAULT: "#D4A574",
          soft: "#E8C99B",
        },
        teal: {
          DEFAULT: "#6FE7D3",
          soft: "#9FF0E2",
        },
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      backgroundImage: {
        "grain": "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.045) 1px, transparent 0)",
      },
      boxShadow: {
        glass: "0 8px 32px rgba(0,0,0,0.45)",
        "glass-lg": "0 20px 60px rgba(0,0,0,0.55)",
        glow: "0 0 60px rgba(212,165,116,0.18)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px) translateX(0px)" },
          "50%": { transform: "translateY(-24px) translateX(12px)" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0px)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        "modal-in": {
          "0%": { opacity: "0", transform: "scale(0.96) translateY(8px)" },
          "100%": { opacity: "1", transform: "scale(1) translateY(0px)" },
        },
        "backdrop-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float-slow 10s ease-in-out infinite",
        "spin-slow": "spin-slow 18s linear infinite",
        "fade-up": "fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        blink: "blink 1.1s step-end infinite",
        "modal-in": "modal-in 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "backdrop-in": "backdrop-in 0.2s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
