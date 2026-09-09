import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { chapterLabel, eras, getTopic, topicsByEra } from "@/content";
import type { EraId } from "@/content/types";
import { Reveal } from "@/components/reveal";

export const metadata = {
  title: "The Long Timeline | Itihāsa",
  description:
    "Every dated event of the chronicle of Indian history, laid end to end — from the first farming at Mehrgarh to the birth of the Republic.",
};

export default function TimelinePage() {
  const groups = eras.map((era) => {
    const entries = topicsByEra(era.id as EraId).flatMap((t) =>
      t.dates.map((d) => ({
        year: d.year,
        event: d.event,
        slug: t.slug,
        chapter: t.chapter,
        title: t.title,
      })),
    );
    return { era, entries };
  });

  return (
    <main className="mx-auto max-w-4xl px-5 pb-28 pt-28 md:pt-36">
      <header className="text-center">
        <Reveal>
          <p className="font-sans text-[11px] font-medium uppercase tracking-[0.32em] text-ink-soft">
            The Itihāsa Chronicle
          </p>
          <h1 className="mt-5 font-display text-[clamp(2.4rem,6vw,4.5rem)] font-semibold leading-[1.03] tracking-tight text-ink">
            The Long Timeline
          </h1>
          <p className="mx-auto mt-6 max-w-xl font-body text-lg leading-relaxed text-ink-soft">
            Every dated event in the book, laid end to end — walk it slowly and
            the whole story of the subcontinent falls into place.
          </p>
          <div className="rule-double mx-auto mt-9 w-40" aria-hidden />
        </Reveal>
      </header>

      <div className="mt-20 space-y-24">
        {groups.map(({ era, entries }, gi) => (
          <section key={era.id}>
            <Reveal>
              <div className="flex items-center gap-5">
                <span
                  className="grid h-12 w-12 shrink-0 place-items-center rounded-full font-display text-lg font-semibold text-paper"
                  style={{ backgroundColor: era.accent }}
                >
                  {era.numeral}
                </span>
                <div>
                  <h2 className="font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl">
                    {era.title}
                  </h2>
                  <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-ink-faint">
                    {era.span}
                  </p>
                </div>
              </div>
            </Reveal>

            <ol className="relative ml-4 mt-10 space-y-0 border-l-2 border-ink/15 sm:ml-8">
              {entries.map((e, i) => (
                <Reveal key={`${e.slug}-${i}`} delay={Math.min(i * 0.02, 0.15)}>
                  <li className="group relative pb-9 pl-8 last:pb-0">
                    <span
                      className="absolute -left-[7px] top-2 h-3 w-3 rounded-full border-[3px] border-paper transition-transform group-hover:scale-125"
                      style={{ backgroundColor: era.accent }}
                      aria-hidden
                    />
                    <span className="block font-display text-lg font-semibold tabular-nums text-ink">
                      {e.year}
                    </span>
                    <div className="mt-1 min-w-0">
                      <p className="max-w-xl font-body text-[16px] leading-relaxed text-ink">
                        {e.event}
                      </p>
                      <Link
                        href={`/read/${e.slug}`}
                        className="mt-1.5 inline-flex items-center gap-1.5 font-sans text-[11.5px] font-medium uppercase tracking-[0.14em] opacity-80 transition-opacity hover:opacity-100"
                        style={{ color: era.accent }}
                      >
                        Ch. {chapterLabel(getTopic(e.slug)!)} · {e.title}
                        <ArrowUpRight className="h-3 w-3" />
                      </Link>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </section>
        ))}
      </div>

      <Reveal>
        <div className="mt-28 rounded-2xl border border-ink/15 bg-paper-deep/50 p-10 text-center">
          <p className="font-display text-2xl font-semibold text-ink md:text-3xl">
            The chronicle continues
          </p>
          <p className="mx-auto mt-3 max-w-lg font-body text-[16px] leading-relaxed text-ink-soft">
            On 26 January 1950 the story turns a page — from the history of
            India to the history Indians write themselves.
          </p>
        </div>
      </Reveal>
    </main>
  );
}
