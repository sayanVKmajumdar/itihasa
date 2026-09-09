import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpenText,
  Feather,
  Highlighter,
  ListChecks,
  ScrollText,
} from "lucide-react";
import { eras, getEra, readingMinutes, stats, topics } from "@/content";
import { Reveal } from "@/components/reveal";
import { ChapterRow } from "@/components/chapter-row";

const quotes = [
  "Swaraj is my birthright and I shall have it — Bal Gangadhar Tilak",
  "Give me blood, and I will give you freedom — Subhas Chandra Bose",
  "At the stroke of the midnight hour, when the world sleeps, India will awake to life and freedom — Jawaharlal Nehru",
  "They may kill me, but they cannot kill my ideas — Bhagat Singh (attrib.)",
  "In a gentle way, you can shake the world — M. K. Gandhi",
  "Cultivation of mind should be the ultimate aim of human existence — B. R. Ambedkar",
];

const featuredSlugs = [
  "indus-valley-civilization",
  "buddhism-and-jainism",
  "mauryan-empire",
  "mughal-empire",
  "revolt-of-1857",
  "gandhian-movements",
];

export default function HomePage() {
  const featured = featuredSlugs
    .map((s) => topics.find((t) => t.slug === s)!)
    .filter(Boolean);

  return (
    <main>
      {/* ---------------- HERO ---------------- */}
      <section className="relative overflow-hidden px-5 pt-32 md:pt-40">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 left-1/2 h-[540px] w-[860px] -translate-x-1/2 rounded-[100%] bg-[radial-gradient(closest-side,rgba(180,83,42,0.15),transparent)] blur-2xl"
        />
        <div className="relative mx-auto max-w-6xl text-center">
          <Reveal>
            <p className="font-sans text-[11px] font-medium uppercase tracking-[0.32em] text-ink-soft">
              A One-Stop Chronicle · Three Volumes · Twenty-Six Chapters
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mx-auto mt-6 max-w-4xl font-display text-[clamp(2.6rem,7.4vw,5.6rem)] font-semibold leading-[1.02] tracking-tight text-ink">
              Indian history, from the{" "}
              <em className="font-light italic text-accent">first stone tool</em>{" "}
              to the <em className="font-light italic text-accent">Republic</em>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mx-auto mt-7 max-w-2xl font-body text-lg leading-relaxed text-ink-soft md:text-xl">
              Not an exam capsule — a whole library distilled into one book.
              Every era explained in clear, brief, professional prose, with{" "}
              <span className="mark-key">the lines worth remembering</span>{" "}
              already underlined for you.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3.5">
              <Link
                href={`/read/${topics[0].slug}`}
                className="group flex items-center gap-2.5 rounded-full bg-ink px-7 py-3.5 font-sans text-sm font-medium text-paper transition-transform hover:scale-[1.03]"
              >
                <BookOpenText className="h-4 w-4" />
                Begin at Chapter One
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/timeline"
                className="flex items-center gap-2.5 rounded-full border border-ink/25 px-7 py-3.5 font-sans text-sm font-medium text-ink transition-colors hover:border-ink/60"
              >
                <ScrollText className="h-4 w-4" />
                See the Long Timeline
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.3} y={36}>
            <figure className="relative mx-auto mt-16 max-w-5xl">
              <div className="absolute -inset-3 rounded-[28px] border border-ink/15 md:-inset-5" aria-hidden />
              <div className="relative overflow-hidden rounded-[20px] border-4 border-ink/80 shadow-[0_50px_100px_-40px_rgba(34,26,16,0.55)]">
                <Image
                  src="/images/hero.jpg"
                  alt="A mural timeline of Indian history from the Indus seals to the freedom movement"
                  width={1600}
                  height={900}
                  priority
                  className="h-64 w-full object-cover md:h-[440px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent" />
                <figcaption className="absolute bottom-4 left-5 right-5 flex items-end justify-between gap-4 text-left">
                  <span className="font-display text-sm italic text-paper/95 md:text-base">
                    Plate I — The March of the Ages, from Harappa to 1947
                  </span>
                  <span className="hidden font-sans text-[10px] uppercase tracking-[0.25em] text-paper/70 md:block">
                    The Itihāsa Chronicle
                  </span>
                </figcaption>
              </div>
            </figure>
          </Reveal>

          {/* Stats */}
          <Reveal delay={0.1}>
            <dl className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-y-8 border-y border-ink/15 py-8 md:grid-cols-4">
              {[
                { k: "Volumes", v: "III" },
                { k: "Chapters", v: String(stats.topics) },
                { k: "Key passages", v: `${stats.keyFacts}+` },
                { k: "Dated events", v: `${stats.datedEvents}+` },
              ].map((s) => (
                <div key={s.k}>
                  <dt className="order-2 mt-1 font-sans text-[11px] uppercase tracking-[0.2em] text-ink-faint">
                    {s.k}
                  </dt>
                  <dd className="font-display text-4xl font-semibold text-ink md:text-5xl">
                    {s.v}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* ---------------- MARQUEE ---------------- */}
      <section className="mt-16 overflow-hidden border-y-2 border-ink/70 bg-ink py-3.5 text-paper">
        <div className="animate-marquee flex w-max gap-14 whitespace-nowrap">
          {[...quotes, ...quotes].map((q, i) => (
            <span
              key={i}
              className="flex items-center gap-14 font-body text-sm italic tracking-wide text-paper/85"
            >
              {q}
              <span className="font-display not-italic text-accent">✦</span>
            </span>
          ))}
        </div>
      </section>

      {/* ---------------- THE THREE VOLUMES ---------------- */}
      <section className="mx-auto max-w-6xl px-5 py-24">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="font-sans text-[11px] font-medium uppercase tracking-[0.3em] text-accent">
                The Architecture
              </p>
              <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl">
                Three volumes, one civilisation
              </h2>
            </div>
            <p className="max-w-md font-body text-[15px] leading-relaxed text-ink-soft">
              Read them in order to watch one continuous story, or open any
              volume like a reference work — each chapter stands on its own.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {eras.map((era, i) => (
            <Reveal key={era.id} delay={i * 0.1} className="h-full">
              <Link
                href={`/${era.id}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-ink/15 bg-paper-deep/40 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_35px_70px_-35px_rgba(34,26,16,0.5)]"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={era.image}
                    alt={era.title}
                    width={800}
                    height={520}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 mix-blend-multiply opacity-60"
                    style={{ backgroundColor: era.accent }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-paper/90 px-3 py-1 font-display text-xs font-semibold text-ink">
                    Volume {era.numeral}
                  </span>
                  <span className="absolute bottom-4 left-5 font-sans text-[11px] uppercase tracking-[0.22em] text-paper/90">
                    {era.span}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-2xl font-semibold text-ink">
                    {era.title}
                  </h3>
                  <p className="mt-1 font-body text-sm italic text-ink-soft">
                    {era.tagline}
                  </p>
                  <p className="mt-4 flex-1 font-body text-[15px] leading-relaxed text-ink-soft">
                    {era.description}
                  </p>
                  <div className="mt-6 flex items-center justify-between border-t border-ink/15 pt-4">
                    <span className="font-sans text-[12px] uppercase tracking-[0.16em] text-ink-faint">
                      {era.id === "ancient" ? "9 chapters" : era.id === "medieval" ? "8 chapters" : "9 chapters"}
                    </span>
                    <span
                      className="flex items-center gap-1.5 font-sans text-[13px] font-medium"
                      style={{ color: era.accent }}
                    >
                      Open the volume
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------------- HOW THIS BOOK WORKS ---------------- */}
      <section className="border-y border-ink/15 bg-paper-deep/50">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <Reveal>
            <h2 className="text-center font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              How this book works
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {[
              {
                icon: Feather,
                title: "Written like a real book",
                body: "Each chapter opens with a standfirst, flows in short sections, and closes with the facts and dates — the way a good historian would tell it, not the way a dump of notes would.",
              },
              {
                icon: Highlighter,
                title: "Key lines already highlighted",
                body: "The sentences examiners, essay-writers and dinner-table historians actually quote are marked in the text — the important line of every paragraph is impossible to miss.",
              },
              {
                icon: ListChecks,
                title: "Your progress is kept",
                body: "Bookmark chapters, mark them read, and pick up where you left off. The chronicle remembers your margin-marks for you.",
              },
            ].map((f, i) => (
              <Reveal key={f.title} delay={i * 0.1}>
                <div className="text-center md:text-left">
                  <span className="mx-auto grid h-12 w-12 place-items-center rounded-full border border-ink/25 bg-paper text-accent md:mx-0">
                    <f.icon className="h-5 w-5" strokeWidth={1.6} />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-semibold text-ink">
                    {f.title}
                  </h3>
                  <p className="mt-2.5 font-body text-[15px] leading-relaxed text-ink-soft">
                    {f.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- FEATURED CHAPTERS ---------------- */}
      <section className="mx-auto max-w-6xl px-5 py-24">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="font-sans text-[11px] font-medium uppercase tracking-[0.3em] text-accent">
                Begin Anywhere
              </p>
              <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl">
                Six chapters everyone should read first
              </h2>
            </div>
            <Link
              href="/ancient"
              className="group flex items-center gap-2 font-sans text-sm font-medium text-ink-soft hover:text-ink"
            >
              See all {stats.topics} chapters
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
        <div className="mt-10 grid gap-x-12 md:grid-cols-2">
          {featured.map((t) => {
            const era = getEra(t.era)!;
            return (
              <div key={t.slug} className="border-b border-ink/10">
                <ChapterRow
                  slug={t.slug}
                  chapter={t.chapter}
                  title={t.title}
                  subtitle={t.subtitle}
                  period={t.period}
                  minutes={readingMinutes(t)}
                  accent={era.accent}
                />
              </div>
            );
          })}
        </div>
      </section>

      {/* ---------------- TIMELINE TEASER ---------------- */}
      <section className="border-t border-ink/15 bg-ink text-paper">
        <div className="mx-auto max-w-6xl px-5 py-24 text-center">
          <Reveal>
            <p className="font-sans text-[11px] font-medium uppercase tracking-[0.3em] text-paper/50">
              From Mehrgarh to the midnight hour
            </p>
            <h2 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              Five thousand years, told on one line
            </h2>
            <p className="mx-auto mt-5 max-w-xl font-body text-lg leading-relaxed text-paper/70">
              Every dated event in the chronicle, laid end to end — the
              quickest way to see how the story fits together.
            </p>
            <Link
              href="/timeline"
              className="mt-9 inline-flex items-center gap-2.5 rounded-full bg-paper px-7 py-3.5 font-sans text-sm font-medium text-ink transition-transform hover:scale-[1.03]"
            >
              Walk the timeline
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
