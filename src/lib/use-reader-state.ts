"use client";

import { useCallback, useEffect, useState } from "react";

export interface ReaderState {
  completed: string[];
  bookmarks: string[];
}

const EMPTY: ReaderState = { completed: [], bookmarks: [] };
const STORAGE_KEY = "itihasa:reader-state:v1";

function readCache(): ReaderState {
  if (typeof window === "undefined") return EMPTY;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return EMPTY;
    const parsed = JSON.parse(raw) as Partial<ReaderState>;
    return {
      completed: Array.isArray(parsed.completed) ? parsed.completed : [],
      bookmarks: Array.isArray(parsed.bookmarks) ? parsed.bookmarks : [],
    };
  } catch {
    return EMPTY;
  }
}

function writeCache(state: ReaderState) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    /* ignore */
  }
}

let listeners: Array<(s: ReaderState) => void> = [];
let memoryState: ReaderState | null = null;

function setGlobal(next: ReaderState) {
  memoryState = next;
  writeCache(next);
  listeners.forEach((fn) => fn(next));
}

export function useReaderState() {
  const [state, setState] = useState<ReaderState>(memoryState ?? EMPTY);
  const [hydrated, setHydrated] = useState(memoryState !== null);

  useEffect(() => {
    // hydrate from cache immediately, then reconcile with the database
    const cached = memoryState ?? readCache();
    memoryState = cached;
    setState(cached);
    setHydrated(true);

    const listener = (s: ReaderState) => setState(s);
    listeners.push(listener);

    fetch("/api/reader-state")
      .then((r) => (r.ok ? r.json() : null))
      .then((server: ReaderState | null) => {
        if (!server) return;
        const merged: ReaderState = {
          completed: Array.from(
            new Set([...cached.completed, ...server.completed]),
          ),
          bookmarks: Array.from(
            new Set([...cached.bookmarks, ...server.bookmarks]),
          ),
        };
        setGlobal(merged);
      })
      .catch(() => {});

    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  }, []);

  const toggle = useCallback(
    (action: "complete" | "bookmark", slug: string) => {
      const current = memoryState ?? state;
      const key = action === "complete" ? "completed" : "bookmarks";
      const has = current[key].includes(slug);
      const next: ReaderState = {
        ...current,
        [key]: has
          ? current[key].filter((s) => s !== slug)
          : [...current[key], slug],
      };
      setGlobal(next);
      fetch("/api/reader-state", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action, slug, value: !has }),
      }).catch(() => {});
    },
    [state],
  );

  return {
    hydrated,
    completed: state.completed,
    bookmarks: state.bookmarks,
    isCompleted: (slug: string) => state.completed.includes(slug),
    isBookmarked: (slug: string) => state.bookmarks.includes(slug),
    toggleComplete: (slug: string) => toggle("complete", slug),
    toggleBookmark: (slug: string) => toggle("bookmark", slug),
  };
}
