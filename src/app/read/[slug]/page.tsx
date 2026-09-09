import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  CalendarRange,
  Clock3,
  KeyRound,
} from "lucide-react";
import {
  chapterLabel,
  getEra,
  getTopic,
  nextPrev,
  readingMinutes,
  topics,
} from "@/content";
import { chapterMaps } from "@/content/maps";
import { MapPlate } from "@/components/map-plate";
import { RichText } from "@/components/rich-text";
import { ReaderControls } from "@/components/reader-controls";
import { ReadingProgress } from "@/components/reading-progress";
import { Reveal } from "@/components/reveal";

export function generateStaticParams() {
  return topics.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const topic = getTopic(slug);
  if (!topic) return {};
  return {
    title: `${topic.title} — Chapter ${chapterLabel(topic)} | Itihāsa`,
    description: topic.intro,
  };
}

export default async function ChapterPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const topic = getTopic(slug);
  if (!topic) notFound();
  const era = getEra(topic.era)!;
  const { prev, next } = nextPrev(topic);
  const minutes = readingMinutes(topic);

  return (
    <main className="relative">
      <ReadingProgress accent={era.accent} />

      {/* ------- chapter head ------- */}
      <header className="mx-auto max-w-3xl px-5 pt-28 text-center md:pt-32">
        <Reveal>
          <nav className="flex items-center justify-center gap-2 font-sans text-[11px] uppercase tracking-[0.22em] text-ink-faint">
            <Link href="/" className="hover:text-ink">
              Chronicle
            </Link>
            <span aria-hidden>/</span>
            <Link href={`/${era.id}`} className="hover:text-ink" style={{ color: era.accent }}>
              Vol. {era.numeral} — {era.title}
            </Link>
          </nav>
        </Reveal>
        <Reveal delay={0.06}>
          <p
            className="mt-8 font-display text-sm font-semibold uppercase tracking-[0.35em]"
            style={{ color: era.accent }}
          >
            Chapter {chapterLabel(topic)}
          </p>
          <h1 className="mt-4 font-display text-[clamp(2.2rem,5.6vw,4.2rem)] font-semibold leading-[1.05] tracking-tight text-ink">
            {topic.title}
          </h1>
          <p className="mt-4 font-body text-xl italic text-ink-soft md:text-2xl">
            {topic.subtitle}
          </p>
        </Reveal>
        <Reveal delay={0.12}>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 font-sans text-[12px] text-ink-faint">
            <span className="flex items-center gap-1.5">
              <CalendarRange className="h-3.5 w-3.5" />
              {topic.period}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock3 className="h-3.5 w-3.5" />
              {minutes} min read
            </span>
            <span className="flex items-center gap-1.5">
              <KeyRound className="h-3.5 w-3.5" />
              {topic.keyPoints.length} key passages
            </span>
          </div>
          <div className="mt-7 flex justify-center">
            <ReaderControls slug={topic.slug} accent={era.accent} />
          </div>
          <div className="rule-double mx-auto mt-10 w-40" aria-hidden />
        </Reveal>
      </header>

      {/* ------- body ------- */}
      <div className="mx-auto max-w-6xl px-5 pb-8 pt-12 md:pt-16">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_320px]">
          <article>
            {/* standfirst */}
            <Reveal>
              <p className="prose-book max-w-[68ch] border-l-[3px] pl-6 font-medium text-ink md:pl-8 [&>strong]:font-semibold" style={{ borderColor: era.accent }}>
                <RichText text={topic.intro} />
              </p>
            </Reveal>

            {/* map plate */}
            {chapterMaps[topic.slug] && (
              <Reveal delay={0.1}>
                <div className="mt-12">
                  <MapPlate
                    map={chapterMaps[topic.slug]}
                    accent={era.accent}
                    plateNumber={`${chapterLabel(topic)}·A`}
                  />
                </div>
              </Reveal>
            )}

            {topic.sections.map((section, si) => (
              <Reveal key={si} delay={0.04}>
                <section className="mt-14">
                  {section.heading && (
                    <h2 className="mb-6 flex items-center gap-4 font-display text-2xl font-semibold tracking-tight text-ink md:text-[1.7rem]">
                      <span
                        className="font-display text-sm font-semibold tabular-nums"
                        style={{ color: era.accent }}
                      >
                        §{si + 1}
                      </span>
                      {section.heading}
                    </h2>
                  )}
                  <div className="prose-book max-w-[68ch]">
                    {section.paragraphs.map((p, pi) => (
                      <p key={pi} className={si === 0 && pi === 0 ? "dropcap" : undefined}>
                        <RichText text={p} />
                      </p>
                    ))}
                  </div>
                </section>
              </Reveal>
            ))}

            {/* colophon */}
            <div className="mt-16 flex items-center justify-center gap-3 text-ink-faint" aria-hidden>
              <span className="h-px w-16 bg-ink/20" />
              <span className="font-display text-lg" style={{ color: era.accent }}>
                ❦
              </span>
              <span className="h-px w-16 bg-ink/20" />
            </div>
            <p className="mt-5 text-center font-sans text-[11px] uppercase tracking-[0.25em] text-ink-faint">
              End of Chapter {chapterLabel(topic)} · Volume {era.numeral}
            </p>
          </article>

          {/* ------- margin notes ------- */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-ink/15 bg-paper-deep/50 p-6">
              <p className="flex items-center gap-2 font-sans text-[11px] font-medium uppercase tracking-[0.24em] text-ink-soft">
                <KeyRound className="h-3.5 w-3.5" style={{ color: era.accent }} />
                In a nutshell
              </p>
              <ul className="mt-4 space-y-3">
                {topic.keyPoints.map((k, i) => (
                  <li key={i} className="flex gap-2.5 font-body text-[14.5px] leading-relaxed text-ink">
                    <span
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{ backgroundColor: era.accent }}
                    />
                    <span>
                      <RichText text={k} />
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-5 rounded-2xl border border-ink/15 p-6">
              <p className="flex items-center gap-2 font-sans text-[11px] font-medium uppercase tracking-[0.24em] text-ink-soft">
                <CalendarRange className="h-3.5 w-3.5" style={{ color: era.accent }} />
                Dates to remember
              </p>
              <ol className="mt-5 space-y-0">
                {topic.dates.map((d, i) => (
                  <li key={i} className="relative flex gap-4 pb-4 last:pb-0">
                    {i < topic.dates.length - 1 && (
                      <span className="absolute left-[3px] top-3 h-full w-px bg-ink/15" aria-hidden />
                    )}
                    <span
                      className="mt-1 h-[7px] w-[7px] shrink-0 rounded-full"
                      style={{ backgroundColor: era.accent }}
                    />
                    <div>
                      <p className="font-display text-sm font-semibold text-ink">
                        {d.year}
                      </p>
                      <p className="mt-0.5 font-body text-[13.5px] leading-snug text-ink-soft">
                        {d.event}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </aside>
        </div>
      </div>

      {/* ------- prev / next ------- */}
      <nav className="mx-auto max-w-6xl px-5 pb-24">
        <div className="grid gap-4 border-t-2 border-ink/70 pt-10 md:grid-cols-2">
          {prev ? (
            <Link
              href={`/read/${prev.slug}`}
              className="group rounded-2xl border border-ink/15 p-6 transition-colors hover:border-ink/40"
            >
              <span className="flex items-center gap-2 font-sans text-[11px] uppercase tracking-[0.22em] text-ink-faint">
                <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
                Previous chapter
              </span>
              <span className="mt-3 block font-display text-xl font-semibold text-ink">
                {chapterLabel(prev)} · {prev.title}
              </span>
              <span className="mt-1 block font-body text-sm italic text-ink-soft">
                {prev.subtitle}
              </span>
            </Link>
          ) : (
            <div className="hidden md:block" />
          )}
          {next ? (
            <Link
              href={`/read/${next.slug}`}
              className="group rounded-2xl border border-ink/15 p-6 text-left transition-colors hover:border-ink/40 md:text-right"
            >
              <span className="flex items-center gap-2 font-sans text-[11px] uppercase tracking-[0.22em] text-ink-faint md:justify-end">
                Next chapter
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </span>
              <span className="mt-3 block font-display text-xl font-semibold text-ink">
                {chapterLabel(next)} · {next.title}
              </span>
              <span className="mt-1 block font-body text-sm italic text-ink-soft">
                {next.subtitle}
              </span>
            </Link>
          ) : (
            <div className="hidden md:block" />
          )}
        </div>
        <div className="mt-8 text-center">
          <Link
            href={`/${era.id}`}
            className="font-sans text-[13px] font-medium text-ink-soft underline decoration-ink/30 underline-offset-4 hover:text-ink"
          >
            Return to the contents of Volume {era.numeral}
          </Link>
        </div>
      </nav>
    </main>
  );
}
