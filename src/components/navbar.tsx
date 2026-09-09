"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { BookOpenText, Clock3, Menu, Search, X } from "lucide-react";
import { SearchDialog } from "./search-dialog";

const links = [
  { href: "/ancient", label: "I · Ancient" },
  { href: "/medieval", label: "II · Medieval" },
  { href: "/modern", label: "III · Modern" },
  { href: "/timeline", label: "Timeline" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.key === "/" || ((e.metaKey || e.ctrlKey) && e.key === "k")) && !searchOpen) {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [searchOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
          scrolled
            ? "bg-paper/90 backdrop-blur-md shadow-[0_1px_0_rgba(34,26,16,0.12),0_10px_30px_-18px_rgba(34,26,16,0.35)]"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5">
          <Link href="/" className="group flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-ink text-paper transition-transform duration-500 group-hover:rotate-[12deg]">
              <BookOpenText className="h-4.5 w-4.5" strokeWidth={1.75} />
            </span>
            <span className="leading-none">
              <span className="block font-display text-xl font-semibold tracking-tight">
                Itihāsa
              </span>
              <span className="block font-sans text-[10px] uppercase tracking-[0.22em] text-ink-faint">
                Chronicle of Indian History
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {links.map((l) => {
              const active =
                l.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(l.href);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`rounded-full px-3.5 py-1.5 font-sans text-[13px] font-medium tracking-wide transition-colors ${
                    active
                      ? "bg-ink text-paper"
                      : "text-ink-soft hover:bg-ink/8 hover:text-ink"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setSearchOpen(true)}
              className="flex items-center gap-2 rounded-full border border-ink/20 bg-paper/60 px-3.5 py-1.5 font-sans text-[13px] text-ink-soft transition-colors hover:border-ink/40 hover:text-ink"
              aria-label="Search chapters"
            >
              <Search className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Search the chronicle</span>
              <kbd className="hidden rounded border border-ink/20 px-1 font-sans text-[10px] text-ink-faint sm:inline">
                /
              </kbd>
            </button>
            <button
              className="grid h-9 w-9 place-items-center rounded-full border border-ink/20 text-ink md:hidden"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Menu"
            >
              {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="border-t border-ink/10 bg-paper/95 px-5 pb-5 pt-3 backdrop-blur-md md:hidden">
            <div className="flex flex-col gap-1">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="flex items-center gap-3 rounded-lg px-3 py-2.5 font-display text-lg hover:bg-ink/5"
                >
                  {l.href === "/timeline" && (
                    <Clock3 className="h-4 w-4 text-ink-faint" />
                  )}
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>
      <SearchDialog open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
