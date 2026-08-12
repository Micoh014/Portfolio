import Reveal from "./Reveal.jsx";
import { experiences } from "./experienceData.js";

// Milestones derived from experienceData.js where possible. The two marked
// TODO are placeholders — confirm or replace the year/line yourself.
const milestones = [
  { year: "TODO", label: "Started coding — TODO: confirm year & context" },
  {
    year: "TODO",
    label: "First hackathon / personal project — TODO: confirm",
  },
  ...experiences.map((exp) => ({
    year: exp.year ?? exp.period,
    label: `${exp.role} — ${exp.org}`,
  })),
];

export default function Timeline() {
  return (
    <section className="py-[100px] sm:py-20 border-t border-ink/[0.07]">
      <div className="max-w-content mx-auto px-8 sm:px-5">
        <span className="font-mono text-[13px] text-inkDim block mb-12">
          timeline
        </span>

        <div className="flex overflow-x-auto sm:flex-col sm:overflow-visible gap-8 sm:gap-0 sm:divide-y sm:divide-ink/[0.07]">
          {milestones.map((m, i) => (
            <Reveal
              key={i}
              delay={i * 0.06}
              className="min-w-[180px] sm:min-w-0 sm:py-5 sm:first:pt-0 flex sm:items-baseline gap-3 sm:gap-6 flex-col sm:flex-row"
            >
              <span className="font-mono text-[11px] text-inkDim uppercase tracking-wide shrink-0 sm:w-20">
                {m.year}
              </span>
              <span className="text-ink text-sm">{m.label}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
