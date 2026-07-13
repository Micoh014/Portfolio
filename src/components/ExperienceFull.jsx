import Reveal from "./Reveal.jsx";

export const experiences = [
  {
    org: "PV Venture Corp.",
    role: "App Developer",
    period: "JUNE 2026 — PRESENT",
    year: "2026",
    description:
      "Building mobile app features and functionality as part of the development team.",
    skills: ["Mobile Development", "Flutter", "Dart", "Firebase", "Git"],
  },
];

export default function ExperienceFull({ onBack }) {
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
          Experience
        </h1>
        <p className="text-inkMuted text-base sm:text-lg max-w-[600px] mb-14">
          Building across frontend and mobile development — from OJT frontend
          work to shipping features as an App Developer.
        </p>

        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <Reveal
              key={i}
              delay={i * 0.08}
              className="border border-ink/[0.11] rounded-2xl p-7 bg-surface flex gap-5"
            >
              <div className="w-11 h-11 rounded-xl bg-bg border border-ink/[0.07] flex items-center justify-center font-mono text-xs text-inkDim shrink-0">
                {exp.org
                  .split(" ")
                  .map((w) => w[0])
                  .slice(0, 2)
                  .join("")}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-ink text-base">{exp.org}</h3>
                <p className="text-inkMuted text-sm mb-3">{exp.role}</p>
                <p className="font-mono text-[11px] text-inkDim uppercase tracking-wide mb-3">
                  {exp.period}
                </p>
                <p className="text-inkMuted text-sm mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="font-mono text-[11px] text-inkDim border border-ink/[0.11] px-3 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
