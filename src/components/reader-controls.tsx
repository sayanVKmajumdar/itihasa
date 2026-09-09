"use client";

import { Bookmark, BookmarkCheck, CheckCircle2, CircleDashed } from "lucide-react";
import { useReaderState } from "@/lib/use-reader-state";

export function ReaderControls({ slug, accent }: { slug: string; accent: string }) {
  const {
    hydrated,
    isBookmarked,
    isCompleted,
    toggleBookmark,
    toggleComplete,
  } = useReaderState();
  const saved = hydrated && isBookmarked(slug);
  const done = hydrated && isCompleted(slug);

  return (
    <div className="flex flex-wrap items-center gap-2.5">
      <button
        onClick={() => toggleBookmark(slug)}
        className={`flex items-center gap-2 rounded-full border px-4 py-2 font-sans text-[13px] font-medium transition-all ${
          saved
            ? "border-transparent text-paper"
            : "border-ink/25 text-ink hover:border-ink/50"
        }`}
        style={saved ? { backgroundColor: accent } : undefined}
      >
        {saved ? (
          <BookmarkCheck className="h-4 w-4" />
        ) : (
          <Bookmark className="h-4 w-4" />
        )}
        {saved ? "Bookmarked" : "Bookmark"}
      </button>
      <button
        onClick={() => toggleComplete(slug)}
        className={`flex items-center gap-2 rounded-full border px-4 py-2 font-sans text-[13px] font-medium transition-all ${
          done
            ? "border-green-900/30 bg-green-900/10 text-green-900"
            : "border-ink/25 text-ink hover:border-ink/50"
        }`}
      >
        {done ? (
          <CheckCircle2 className="h-4 w-4" />
        ) : (
          <CircleDashed className="h-4 w-4" />
        )}
        {done ? "Chapter read" : "Mark as read"}
      </button>
    </div>
  );
}
