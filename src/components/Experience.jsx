import Reveal from "./Reveal.jsx";
import { experiences } from "./ExperienceFull.jsx";

export default function Experience({ onOpenFull }) {
  return (
    <section
      id="experience"
      className="py-[100px] sm:py-20 border-t border-ink/[0.07]"
    >
      <div className="max-w-content mx-auto px-8 sm:px-5">
        <div className="flex items-baseline justify-between gap-6 flex-wrap mb-8">
          <span className="font-mono text-[13px] text-inkDim">
            02 — experience
          </span>
          <button
            onClick={onOpenFull}
            className="font-mono text-[12px] tracking-wide text-inkDim hover:text-accent uppercase transition-colors"
          >
            Full history →
          </button>
        </div>

        <div className="divide-y divide-ink/[0.07] border-t border-ink/[0.07]">
          {experiences.map((exp, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className="flex items-baseline justify-between gap-4 py-4">
                <div className="flex items-baseline gap-6">
                  <span className="font-mono text-xs text-inkDim w-10 shrink-0">
                    {exp.year}
                  </span>
                  <h3 className="font-medium text-ink text-[15px]">
                    {exp.role}
                  </h3>
                </div>
                <span className="text-inkMuted text-sm text-right">
                  {exp.org}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
