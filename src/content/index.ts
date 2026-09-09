import { ancientTopics } from "./ancient";
import { medievalTopics } from "./medieval";
import { modernTopics } from "./modern";
import type { Era, EraId, Topic } from "./types";

export const eras: Era[] = [
  {
    id: "ancient",
    numeral: "I",
    title: "Ancient India",
    tagline: "From the first stone tools to the dawn of regional kingdoms",
    span: "c. 2,000,000 BCE – 750 CE",
    description:
      "The deep foundation: prehistoric cultures, the Harappan cities, the Vedic canon, the first empires of the Mauryas and Guptas, and the classical age of Indian science, art and philosophy.",
    image: "/images/era-ancient.jpg",
    accent: "#B4532A",
    accentSoft: "rgba(180, 83, 42, 0.12)",
  },
  {
    id: "medieval",
    numeral: "II",
    title: "Medieval India",
    tagline: "Sultanates, Bhakti saints, Mughals and Marathas",
    span: "c. 750 – 1757 CE",
    description:
      "The age of encounter: temple empires and Turkish conquests, the Delhi Sultanate and Vijayanagara, the devotional revolutions of Bhakti and Sufi, and the splendour and fall of Mughal Hindustan.",
    image: "/images/era-medieval.jpg",
    accent: "#31517D",
    accentSoft: "rgba(49, 81, 125, 0.12)",
  },
  {
    id: "modern",
    numeral: "III",
    title: "Modern India",
    tagline: "Company Raj, the freedom struggle and a republic reborn",
    span: "1498 – 1950 CE",
    description:
      "The colonial century and its answer: the East India Company's conquest, the Revolt of 1857, the reformers and nationalists, the Gandhian mass movements, the revolutionaries, and the hard-won Republic.",
    image: "/images/era-modern.jpg",
    accent: "#38684F",
    accentSoft: "rgba(56, 104, 79, 0.12)",
  },
];

export const topics: Topic[] = [
  ...ancientTopics,
  ...medievalTopics,
  ...modernTopics,
];

export function getEra(id: string): Era | undefined {
  return eras.find((e) => e.id === id);
}

export function topicsByEra(eraId: EraId): Topic[] {
  return topics
    .filter((t) => t.era === eraId)
    .sort((a, b) => a.chapter - b.chapter);
}

export function getTopic(slug: string): Topic | undefined {
  return topics.find((t) => t.slug === slug);
}

export function chapterLabel(topic: Topic): string {
  return String(topic.chapter).padStart(2, "0");
}

export function nextPrev(topic: Topic): {
  prev?: Topic;
  next?: Topic;
} {
  const idx = topics.findIndex((t) => t.slug === topic.slug);
  return {
    prev: idx > 0 ? topics[idx - 1] : undefined,
    next: idx >= 0 && idx < topics.length - 1 ? topics[idx + 1] : undefined,
  };
}

export function readingMinutes(topic: Topic): number {
  const words = [
    topic.intro,
    ...topic.sections.flatMap((s) => s.paragraphs),
    ...topic.keyPoints,
  ]
    .join(" ")
    .split(/\s+/).length;
  return Math.max(2, Math.round(words / 180));
}

export const stats = {
  topics: topics.length,
  chapters: topics.length,
  years: "4 millennia",
  periodStart: "c. 2,000,000 BCE",
  periodEnd: "1950 CE",
  keyFacts: topics.reduce((n, t) => n + t.keyPoints.length, 0),
  datedEvents: topics.reduce((n, t) => n + t.dates.length, 0),
};
