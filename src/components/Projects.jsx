import Reveal from "./Reveal.jsx";

const projects = [
  {
    title: "Pet Village",
    subtitle: "Loyalty, Deals & Rewards App",
    description:
      "A native Android companion app for loyalty points, deals, and rewards — checkout hands off to the brand's existing WooCommerce store.",
    icon: "/petvillage-icon.png",
    tags: ["SOLO DEVELOPER", "MADE IN THE PHILIPPINES", "FLUTTER + FIREBASE"],
  },
  {
    title: "School Supplies Inventory System",
    subtitle: "Offline POS & Inventory Desktop App",
    description:
      "A point-of-sale and inventory management desktop app for a small school-supplies shop. Runs entirely offline on the owner's own computer — no cloud, no subscription, with FEFO batch/expiry tracking, purchase orders, credit (utang) tracking, and role-based staff access.",
    icon: null,
    tags: ["SOLO DEVELOPER", "MADE IN THE PHILIPPINES", "ELECTRON + REACT"],
  },
];

function ProjectIcon({ project }) {
  if (project.icon) {
    return (
      <img
        src={project.icon}
        alt={project.title}
        className="w-12 h-12 rounded-xl object-cover shrink-0"
      />
    );
  }

  return (
    <div className="w-12 h-12 rounded-xl bg-accent/[0.12] text-accent shrink-0 flex items-center justify-center">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 7.5 12 3l9 4.5-9 4.5-9-4.5Z" />
        <path d="M3 7.5v9L12 21l9-4.5v-9" />
        <path d="M12 12v9" />
      </svg>
    </div>
  );
}

function ProjectCard({ project, delay = 0 }) {
  return (
    <Reveal delay={delay} className="w-full">
      <div className="relative z-10 w-full h-full bg-surface border border-ink/[0.11] rounded-2xl p-6 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.25)] flex flex-col">
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

        <p className="text-sm text-inkMuted">{project.description}</p>
      </div>
    </Reveal>
  );
}

export default function Projects() {
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
            All projects →
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              delay={i * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
