"use client";

import Link from "next/link";
import { Bookmark, CheckCircle2 } from "lucide-react";
import { useReaderState } from "@/lib/use-reader-state";

interface Props {
  slug: string;
  chapter: number;
  title: string;
  subtitle: string;
  period: string;
  minutes: number;
  accent: string;
}

export function ChapterRow({
  slug,
  chapter,
  title,
  subtitle,
  period,
  minutes,
  accent,
}: Props) {
  const { hydrated, isCompleted, isBookmarked } = useReaderState();
  const done = hydrated && isCompleted(slug);
  const saved = hydrated && isBookmarked(slug);

  return (
    <Link
      href={`/read/${slug}`}
      className="group relative flex items-baseline gap-3.5 py-4 transition-colors sm:gap-5"
    >
      <span
        className="font-display text-sm font-semibold tabular-nums sm:text-base"
        style={{ color: accent }}
      >
        {String(chapter).padStart(2, "0")}
      </span>
      <span className="min-w-0 flex-1">
        <span className="flex flex-wrap items-baseline gap-x-3">
          <span
            className={`font-display text-lg font-semibold leading-snug transition-colors sm:text-xl ${
              done ? "text-ink/60" : "text-ink group-hover:text-accent"
            }`}
          >
            {title}
          </span>
        </span>
        <span className="mt-0.5 block truncate font-body text-sm italic text-ink-soft">
          {subtitle}
        </span>
      </span>
      <span className="leader-dots hidden flex-[0.4] sm:block" aria-hidden />
      <span className="flex shrink-0 items-center gap-3 font-sans text-[11.5px] tabular-nums text-ink-faint">
        {saved && (
          <Bookmark className="h-3.5 w-3.5 fill-accent text-accent" aria-label="Bookmarked" />
        )}
        {done && (
          <CheckCircle2 className="h-4 w-4 text-green-800" aria-label="Read" />
        )}
        <span className="hidden sm:inline">{period}</span>
        <span className="rounded-full border border-ink/15 px-2 py-0.5">
          {minutes} min
        </span>
      </span>
    </Link>
  );
}
