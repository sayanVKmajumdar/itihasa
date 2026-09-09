"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowUpRight, BookMarked, Search, X } from "lucide-react";
import { chapterLabel, eras, getEra, topics } from "@/content";
import type { Topic } from "@/content/types";

interface Hit {
  topic: Topic;
  excerpt: string;
}

function buildExcerpt(topic: Topic, q: string): string {
  const hay = [
    topic.intro,
    ...topic.sections.flatMap((s) => s.paragraphs),
    ...topic.keyPoints,
  ];
  const lower = q.toLowerCase();
  const flat = hay.join(" ").toLowerCase();
  const idx = flat.indexOf(lower);
  const strip = (s: string) => s.replace(/==|\*\*/g, "");
  if (idx === -1) return strip(topic.intro).slice(0, 160) + "…";
  const full = hay.join(" ");
  const start = Math.max(0, idx - 60);
  return (
    (start > 0 ? "…" : "") + strip(full.slice(start, start + 160)).trim() + "…"
  );
}

export function SearchDialog({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setQuery("");
      requestAnimationFrame(() => inputRef.current?.focus());
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const results = useMemo<Hit[]>(() => {
    const q = query.trim().toLowerCase();
    if (q.length < 2) return [];
    return topics
      .filter((t) => {
        const hay = [
          t.title,
          t.subtitle,
          t.intro,
          t.period,
          ...t.keyPoints,
          ...t.sections.flatMap((s) => [s.heading ?? "", ...s.paragraphs]),
        ]
          .join(" ")
          .toLowerCase();
        return q.split(/\s+/).every((w) => hay.includes(w));
      })
      .slice(0, 9)
      .map((topic) => ({ topic, excerpt: buildExcerpt(topic, q) }));
  }, [query]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center px-4 pt-24">
      <button
        aria-label="Close search"
        onClick={onClose}
        className="absolute inset-0 bg-ink/45 backdrop-blur-sm"
      />
      <div className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-ink/15 bg-paper shadow-[0_40px_90px_-20px_rgba(34,26,16,0.5)]">
        <div className="flex items-center gap-3 border-b border-ink/10 px-5 py-4">
          <Search className="h-4.5 w-4.5 text-ink-faint" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search any chapter, event, idea — try “Ashoka”, “drain of wealth”, “bhakti”…"
            className="w-full bg-transparent font-body text-lg text-ink outline-none placeholder:text-ink-faint/70"
          />
          <button
            onClick={onClose}
            className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-ink/15 text-ink-soft hover:bg-ink/5"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="max-h-[55vh] overflow-y-auto">
          {query.trim().length < 2 ? (
            <div className="px-6 py-10 text-center">
              <p className="font-display text-2xl text-ink/80">
                The whole chronicle, at your fingertips
              </p>
              <p className="mt-2 font-sans text-sm text-ink-faint">
                Search across all {topics.length} chapters — {eras.length} volumes,
                five thousand years.
              </p>
            </div>
          ) : results.length === 0 ? (
            <div className="px-6 py-10 text-center font-body text-ink-soft">
              No passage in the chronicle matches “{query}”.
            </div>
          ) : (
            <ul className="divide-y divide-ink/8">
              {results.map(({ topic, excerpt }) => {
                const era = getEra(topic.era)!;
                return (
                  <li key={topic.slug}>
                    <Link
                      href={`/read/${topic.slug}`}
                      onClick={onClose}
                      className="group flex gap-4 px-5 py-4 transition-colors hover:bg-paper-deep/60"
                    >
                      <span
                        className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full font-display text-sm font-semibold text-paper"
                        style={{ backgroundColor: era.accent }}
                      >
                        {chapterLabel(topic)}
                      </span>
                      <span className="min-w-0">
                        <span className="flex items-center gap-2">
                          <span className="truncate font-display text-base font-semibold text-ink">
                            {topic.title}
                          </span>
                          <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-ink-faint transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </span>
                        <span className="mt-0.5 block font-sans text-[11px] uppercase tracking-[0.16em] text-ink-faint">
                          {era.title} · {topic.period}
                        </span>
                        <span className="mt-1.5 line-clamp-2 block font-body text-sm leading-relaxed text-ink-soft">
                          {excerpt}
                        </span>
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        <div className="flex items-center gap-2 border-t border-ink/10 bg-paper-deep/50 px-5 py-2.5 font-sans text-[11px] text-ink-faint">
          <BookMarked className="h-3.5 w-3.5" />
          Press <kbd className="rounded border border-ink/20 px-1">Esc</kbd> to
          close · results open the chapter directly
        </div>
      </div>
    </div>
  );
}
