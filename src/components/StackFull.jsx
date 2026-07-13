import Reveal from "./Reveal.jsx";
import { stackGroups } from "./Stack.jsx";

export default function StackFull({ onBack }) {
  return (
    <div className="min-h-screen py-[100px]">
      <div className="max-w-content mx-auto px-8 sm:px-5">
        <button
          onClick={onBack}
          className="font-mono text-[12px] text-inkDim hover:text-accent mb-10 uppercase tracking-wide"
        >
          ← Back
        </button>

        <h1 className="font-display text-[36px] sm:text-[42px] font-semibold tracking-tight mb-6">
          Tech Stack
        </h1>
        <p className="text-inkMuted text-base sm:text-lg max-w-[600px] mb-14">
          The tools, frameworks, and platforms I reach for — across frontend,
          mobile, and backend.
        </p>

        <div className="space-y-10">
          {stackGroups.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.05}>
              <h2 className="font-mono text-xs uppercase tracking-wider text-inkDim mb-4">
                {g.title}
              </h2>
              <div className="flex flex-wrap gap-2.5">
                {g.items.map((item) => (
                  <span
                    key={item}
                    className="text-[14.5px] px-[15px] py-[9px] border border-ink/[0.11] rounded-[9px] text-ink bg-surface transition-all hover:border-accent hover:bg-accent/[0.09] hover:-translate-y-0.5"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
