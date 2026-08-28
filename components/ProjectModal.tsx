"use client";

import { useEffect } from "react";
import Image from "next/image";
import { shimmerBlurUrl } from "@/lib/shimmer";

export type ProjectDetail = {
  name: string;
  year: string;
  role: string;
  thumbnail?: string;
  desc: string;
  longDesc: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
};

export default function ProjectModal({
  project,
  onClose,
}: {
  project: ProjectDetail;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-[70] flex items-center justify-center px-4 sm:px-6"
    >
      <button
        aria-label="Tutup detail proyek"
        onClick={onClose}
        className="absolute inset-0 bg-ink/80 backdrop-blur-sm animate-backdrop-in"
      />

      <div className="relative w-full max-w-lg max-h-[85vh] overflow-y-auto glass-strong rounded-3xl shadow-glass-lg animate-modal-in">
        <button
          onClick={onClose}
          aria-label="Tutup"
          className="absolute top-4 right-4 z-10 flex h-9 w-9 items-center justify-center rounded-full glass-strong text-ivory/80 transition-colors duration-200 hover:bg-white/[0.15] hover:text-ivory"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M2 2l12 12M14 2L2 14"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        </button>

        {/* thumbnail */}
        <div className="relative aspect-video w-full overflow-hidden rounded-t-3xl bg-gradient-to-br from-ink-soft to-ink">
          {project.thumbnail ? (
            <Image
              src={project.thumbnail}
              alt={`Thumbnail ${project.name}`}
              fill
              sizes="(min-width: 640px) 32rem, 100vw"
              loading="eager"
              placeholder="blur"
              blurDataURL={shimmerBlurUrl(700, 394)}
              className="object-cover"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-mono text-sm text-white/20">{"</>"}</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-transparent" />
        </div>

        <div className="p-7 sm:p-9 pt-6">
          <p className="font-mono text-xs text-teal">{project.year}</p>
          <h3
            id="project-modal-title"
            className="mt-2 font-display text-2xl font-semibold text-ivory pr-10"
          >
            {project.name}
          </h3>
          <p className="mt-1 font-mono text-xs text-gold/80">{project.role}</p>

          <p className="mt-5 text-sm leading-relaxed text-muted">
            {project.longDesc}
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

          <div className="mt-8 flex flex-wrap gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-gradient-to-r from-gold to-gold-soft px-6 py-2.5 text-sm font-semibold text-ink shadow-glow transition-transform duration-300 hover:-translate-y-0.5"
              >
                Live Demo
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="glass rounded-full px-6 py-2.5 text-sm font-medium text-ivory transition-colors duration-300 hover:bg-white/[0.08]"
              >
                Source Code
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
