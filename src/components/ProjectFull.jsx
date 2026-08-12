import Reveal from "./Reveal.jsx";
import { getProjectById } from "./projectsData.js";

export default function ProjectFull({ projectId, onBack }) {
  const project = getProjectById(projectId);

  if (!project) {
    return (
      <div className="min-h-screen py-[100px]">
        <div className="max-w-content mx-auto px-8 sm:px-5">
          <button
            onClick={onBack}
            className="font-mono text-[12px] text-inkDim hover:text-accent mb-10 uppercase tracking-wide"
          >
            ← Back
          </button>
          <p className="text-inkMuted text-sm">Project not found.</p>
        </div>
      </div>
    );
  }

  const { caseStudy } = project;

  return (
    <div className="min-h-screen py-[100px]">
      <div className="max-w-content mx-auto px-8 sm:px-5">
        <button
          onClick={onBack}
          className="font-mono text-[12px] text-inkDim hover:text-accent mb-10 uppercase tracking-wide"
        >
          ← Back
        </button>

        <Reveal>
          <div className="flex flex-wrap gap-2 mb-5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-[10px] text-inkDim border border-ink/[0.11] rounded-full px-3 py-1 uppercase tracking-wide"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="font-display text-[32px] sm:text-[42px] font-semibold tracking-tight mb-2">
            {project.title}
          </h1>
          <p className="font-mono text-[12px] text-inkDim uppercase tracking-wide mb-6">
            {project.subtitle}
          </p>
          <p className="text-inkMuted text-base sm:text-lg max-w-[640px] mb-6">
            {project.description}
          </p>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-mono text-[12px] text-accent hover:underline uppercase tracking-wide mb-4"
            >
              View live →
            </a>
          )}

          {project.metrics && project.metrics.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-2">
              {project.metrics.map((m) => (
                <span
                  key={m.label}
                  className="font-mono text-[11px] text-accent bg-accent/[0.08] border border-accent/[0.18] rounded-full px-3 py-1"
                >
                  {m.value} {m.label}
                </span>
              ))}
            </div>
          )}
        </Reveal>

        {project.screenshots && project.screenshots.length > 0 && (
          <Reveal
            delay={0.1}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-10"
          >
            {project.screenshots.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`${project.title} screenshot ${i + 1}`}
                loading="lazy"
                className="rounded-2xl border border-ink/[0.11] w-full object-cover"
              />
            ))}
          </Reveal>
        )}

        {caseStudy && (
          <div className="mt-14 space-y-12">
            <Reveal delay={0.05}>
              <span className="font-mono text-[11px] text-inkDim uppercase tracking-wide">
                Problem
              </span>
              <p className="text-ink text-sm sm:text-base mt-3 max-w-[680px]">
                {caseStudy.problem}
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <span className="font-mono text-[11px] text-inkDim uppercase tracking-wide">
                Approach
              </span>
              <p className="text-ink text-sm sm:text-base mt-3 max-w-[680px]">
                {caseStudy.approach}
              </p>
            </Reveal>

            {caseStudy.decisions && caseStudy.decisions.length > 0 && (
              <Reveal delay={0.15}>
                <span className="font-mono text-[11px] text-inkDim uppercase tracking-wide">
                  Key technical decisions
                </span>
                <ul className="mt-3 space-y-2 max-w-[680px]">
                  {caseStudy.decisions.map((d, i) => (
                    <li
                      key={i}
                      className="text-ink text-sm sm:text-base flex gap-2"
                    >
                      <span className="text-accent">—</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            )}

            <Reveal delay={0.2}>
              <span className="font-mono text-[11px] text-inkDim uppercase tracking-wide">
                Outcome
              </span>
              <p className="text-ink text-sm sm:text-base mt-3 max-w-[680px]">
                {caseStudy.outcome}
              </p>
            </Reveal>
          </div>
        )}
      </div>
    </div>
  );
}
