// Shimmer placeholder untuk next/image (efek blur/skeleton saat gambar lazy-load)
// Referensi pola: https://nextjs.org/docs/app/api-reference/components/image#placeholder

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#12151C" offset="20%" />
      <stop stop-color="#1c1f29" offset="50%" />
      <stop stop-color="#12151C" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#12151C" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1.4s" repeatCount="indefinite" />
</svg>`;

const toBase64 = (str: string) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

/** blurDataURL siap pakai untuk prop `placeholder="blur"` pada next/image */
export const shimmerBlurUrl = (w = 700, h = 475) =>
  `data:image/svg+xml;base64,${toBase64(shimmer(w, h))}`;
