export type EraId = "ancient" | "medieval" | "modern";

export interface Era {
  id: EraId;
  numeral: string;
  title: string;
  tagline: string;
  span: string;
  description: string;
  image: string;
  accent: string;
  accentSoft: string;
}

export interface BookSection {
  heading?: string;
  paragraphs: string[];
}

export interface Topic {
  slug: string;
  era: EraId;
  chapter: number;
  title: string;
  subtitle: string;
  period: string;
  /** The standfirst — a single luminous sentence that opens the chapter. */
  intro: string;
  sections: BookSection[];
  keyPoints: string[];
  dates: { year: string; event: string }[];
}

/**
 * Inline markup used inside prose strings:
 *  ==text==  → highlighted key line (rendered as a pen highlight)
 *  **text**  → strong emphasis (rendered bold)
 * A single "*" bullet may also appear inside keyPoints.
 */
