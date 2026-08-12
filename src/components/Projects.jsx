import Reveal from "./Reveal.jsx";
import { projects } from "./projectsData.js";
import { useLanguage } from "../lib/LanguageContext.jsx";
import { translations } from "../lib/translations.js";
import { FolderGit2, ArrowUpRight } from "lucide-react";

function ProjectIcon({ project }) {
  if (project.icon) {
    return (
      <img
        src={project.icon}
        alt={project.title}
        loading="lazy"
        className="w-12 h-12 rounded-xl object-cover shrink-0"
      />
    );
  }

  return (
    <div className="w-12 h-12 rounded-xl bg-accent/[0.12] text-accent shrink-0 flex items-center justify-center">
      <FolderGit2 size={22} strokeWidth={1.8} />
    </div>
  );
}

function ProjectCard({ project, delay = 0, onOpen }) {
  const { lang } = useLanguage();
  const description =
    translations.projectDescriptions[project.id]?.[lang] ?? project.description;

  return (
    <Reveal delay={delay} className="w-full">
      <div
        role="button"
        tabIndex={0}
        onClick={() => onOpen(project.id)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onOpen(project.id);
          }
        }}
        className="relative z-10 w-full h-full bg-surface border border-ink/[0.11] rounded-2xl p-6 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.25)] flex flex-col cursor-pointer transition-colors hover:border-accent/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      >
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

        <div className="flex items-center gap-4 mb-4">
          <ProjectIcon project={project} />
          <div>
            <h3 className="font-display text-lg text-ink leading-tight">
              {project.title}
            </h3>
            <p className="font-mono text-[10.5px] text-inkDim uppercase tracking-wide">
              {project.subtitle}
            </p>
          </div>
        </div>

        <p className="text-sm text-inkMuted">{description}</p>

        {project.metrics && project.metrics.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {project.metrics.map((m) => (
              <span
                key={m.label}
                className="font-mono text-[10.5px] text-accent bg-accent/[0.08] border border-accent/[0.18] rounded-full px-3 py-1"
              >
                {m.value} {m.label}
              </span>
            ))}
          </div>
        )}

        <div className="flex items-center justify-between mt-5 pt-5 border-t border-ink/[0.07]">
          <span className="font-mono text-[11px] text-inkDim uppercase tracking-wide">
            View case study →
          </span>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1 font-mono text-[11px] text-accent hover:underline uppercase tracking-wide"
            >
              Live <ArrowUpRight size={12} strokeWidth={2.2} />
            </a>
          )}
        </div>
      </div>
    </Reveal>
  );
}

export default function Projects({ onOpenProject }) {
  return (
    <section
      id="projects"
      className="py-[100px] sm:py-20 border-t border-ink/[0.07]"
    >
      <div className="max-w-content mx-auto px-8 sm:px-5">
        <div className="flex items-baseline justify-between gap-6 flex-wrap mb-12">
          <span className="font-mono text-[13px] text-inkDim">
            01 — projects
          </span>

          <a
            href="https://github.com/Micoh014"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[12px] tracking-wide text-inkDim hover:text-accent uppercase transition-colors"
          >
            GitHub →
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              delay={i * 0.1}
              onOpen={onOpenProject}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
