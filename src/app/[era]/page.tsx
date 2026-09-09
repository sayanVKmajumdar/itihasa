import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, BookOpenText } from "lucide-react";
import { eras, getEra, readingMinutes, topicsByEra } from "@/content";
import type { EraId } from "@/content/types";
import { ChapterRow } from "@/components/chapter-row";
import { Reveal } from "@/components/reveal";

export function generateStaticParams() {
  return eras.map((e) => ({ era: e.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ era: string }>;
}) {
  const { era } = await params;
  const vol = getEra(era);
  if (!vol) return {};
  return {
    title: `Volume ${vol.numeral} — ${vol.title} | Itihāsa`,
    description: vol.description,
  };
}

export default async function EraPage({
  params,
}: {
  params: Promise<{ era: string }>;
}) {
  const { era } = await params;
  const vol = getEra(era);
  if (!vol) notFound();
  const chapters = topicsByEra(vol.id as EraId);
  const first = chapters[0];

  return (
    <main>
      {/* ------- volume cover ------- */}
      <section className="relative px-5 pt-28 md:pt-32">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 font-sans text-[13px] text-ink-soft hover:text-ink"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
            All volumes
          </Link>

          <div className="mt-6 grid items-stretch gap-8 md:grid-cols-[1.05fr_1fr]">
            <Reveal>
              <div className="flex h-full flex-col justify-between rounded-2xl border border-ink/15 bg-paper-deep/40 p-7 md:p-10">
                <div>
                  <p
                    className="font-sans text-[11px] font-medium uppercase tracking-[0.3em]"
                    style={{ color: vol.accent }}
                  >
                    The Itihāsa Chronicle · Volume {vol.numeral}
                  </p>
                  <h1 className="mt-4 font-display text-[clamp(2.4rem,5.5vw,4rem)] font-semibold leading-[1.03] tracking-tight text-ink">
                    {vol.title}
                  </h1>
                  <p className="mt-3 font-body text-lg italic text-ink-soft">
                    {vol.tagline}
                  </p>
                  <div className="rule-double mt-6 w-24" />
                  <p className="mt-6 max-w-lg font-body text-[16px] leading-relaxed text-ink-soft">
                    {vol.description}
                  </p>
                </div>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Link
                    href={`/read/${first.slug}`}
                    className="group inline-flex items-center gap-2.5 rounded-full px-6 py-3 font-sans text-sm font-medium text-paper transition-transform hover:scale-[1.03]"
                    style={{ backgroundColor: vol.accent }}
                  >
                    <BookOpenText className="h-4 w-4" />
                    Open Chapter {String(first.chapter).padStart(2, "0")}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <span className="font-sans text-[12px] uppercase tracking-[0.18em] text-ink-faint">
                    {vol.span}
                  </span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="relative h-64 overflow-hidden rounded-2xl border border-ink/20 md:h-full md:min-h-[380px]">
                <Image
                  src={vol.image}
                  alt={vol.title}
                  width={900}
                  height={700}
                  priority
                  className="h-full w-full object-cover"
                />
                <div
                  className="absolute inset-0 mix-blend-multiply opacity-50"
                  style={{ backgroundColor: vol.accent }}
                />
                <div className="absolute inset-3 rounded-xl border border-paper/50" aria-hidden />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ------- table of contents ------- */}
      <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <Reveal>
          <div className="flex items-baseline justify-between gap-4 border-b-2 border-ink/70 pb-4">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl">
              Contents of the volume
            </h2>
            <span className="font-sans text-[11px] uppercase tracking-[0.22em] text-ink-faint">
              {chapters.length} chapters
            </span>
          </div>
        </Reveal>
        <div className="divide-y divide-ink/10">
          {chapters.map((t) => (
            <ChapterRow
              key={t.slug}
              slug={t.slug}
              chapter={t.chapter}
              title={t.title}
              subtitle={t.subtitle}
              period={t.period}
              minutes={readingMinutes(t)}
              accent={vol.accent}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
