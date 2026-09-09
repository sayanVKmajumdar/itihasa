export type RichSegment =
  | { kind: "text"; value: string }
  | { kind: "mark"; value: string }
  | { kind: "strong"; value: string };

/**
 * Parses the light inline markup used across the chronicle:
 *   ==text==  highlighted key line
 *   **text**  strong emphasis
 * Everything else is plain text. Nesting is intentionally unsupported.
 */
export function parseRich(text: string): RichSegment[] {
  const out: RichSegment[] = [];
  const pattern = /==([\s\S]+?)==|\*\*([\s\S]+?)\*\*/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = pattern.exec(text)) !== null) {
    if (m.index > last) {
      out.push({ kind: "text", value: text.slice(last, m.index) });
    }
    if (m[1] !== undefined) out.push({ kind: "mark", value: m[1] });
    else out.push({ kind: "strong", value: m[2] });
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push({ kind: "text", value: text.slice(last) });
  return out;
}
