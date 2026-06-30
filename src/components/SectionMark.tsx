"use client";

import { Reveal } from "./motion";

/* Editorial section header: "01 — Label ————————" */
export function SectionMark({
  index,
  label,
  tone = "dark",
}: {
  index: string;
  label: string;
  tone?: "dark" | "light";
}) {
  const color =
    tone === "light" ? "text-cream-soft" : "text-ink-faint";
  const rule = tone === "light" ? "bg-cream/20" : "bg-line";
  return (
    <Reveal>
      <div className={`section-mark ${color}`}>
        <span className="num">{index}</span>
        <span>{label}</span>
        <span className={`rule ${rule}`} />
      </div>
    </Reveal>
  );
}
