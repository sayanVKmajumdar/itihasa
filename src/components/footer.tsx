import Link from "next/link";
import { Landmark } from "lucide-react";
import { eras, stats, topics } from "@/content";

export function Footer() {
  return (
    <footer className="relative border-t-2 border-ink/70 bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <p className="font-display text-3xl font-semibold tracking-tight">
              Itihāsa
            </p>
            <p className="mt-1 font-sans text-[11px] uppercase tracking-[0.25em] text-paper/50">
              A Chronicle of Indian History
            </p>
            <p className="mt-5 font-body text-[15px] leading-relaxed text-paper/70">
              One book, three volumes, {stats.topics} chapters — every age of the
              subcontinent from the first stone tool to the first Republic, with
              the lines worth remembering already underlined.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <div>
              <p className="font-sans text-[11px] uppercase tracking-[0.22em] text-paper/45">
                Volumes
              </p>
              <ul className="mt-4 space-y-2.5">
                {eras.map((e) => (
                  <li key={e.id}>
                    <Link
                      href={`/${e.id}`}
                      className="font-body text-[15px] text-paper/80 transition-colors hover:text-paper"
                    >
                      {e.numeral}. {e.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-sans text-[11px] uppercase tracking-[0.22em] text-paper/45">
                Explore
              </p>
              <ul className="mt-4 space-y-2.5">
                <li>
                  <Link href="/timeline" className="font-body text-[15px] text-paper/80 hover:text-paper">
                    The Long Timeline
                  </Link>
                </li>
                <li>
                  <Link href={`/read/${topics[0].slug}`} className="font-body text-[15px] text-paper/80 hover:text-paper">
                    Begin at Chapter One
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-sans text-[11px] uppercase tracking-[0.22em] text-paper/45">
                The Record
              </p>
              <ul className="mt-4 space-y-2.5 font-body text-[15px] text-paper/80">
                <li>{stats.topics} chapters</li>
                <li>{stats.keyFacts} key passages</li>
                <li>{stats.datedEvents} dated events</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex items-center gap-3 border-t border-paper/15 pt-6">
          <Landmark className="h-4 w-4 text-paper/50" />
          <p className="font-sans text-[12px] text-paper/50">
            Compiled in the service of the curious — cross-checked against the
            standard historiography of Romila Thapar, R.S. Sharma, Satish Chandra,
            Bipan Chandra and the NCERT canon.
          </p>
        </div>
      </div>
    </footer>
  );
}
