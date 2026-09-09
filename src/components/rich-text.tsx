import type { ReactNode } from "react";
import { parseRich } from "@/lib/rich-text";

export function RichText({ text }: { text: string }) {
  const segments = parseRich(text);
  const nodes: ReactNode[] = segments.map((seg, i) => {
    if (seg.kind === "mark") {
      return (
        <mark key={i} className="mark-key">
          {seg.value}
        </mark>
      );
    }
    if (seg.kind === "strong") {
      return (
        <strong key={i} className="font-semibold text-ink">
          {seg.value}
        </strong>
      );
    }
    return <span key={i}>{seg.value}</span>;
  });
  return <>{nodes}</>;
}
