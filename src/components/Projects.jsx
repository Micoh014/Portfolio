import Reveal from "./Reveal.jsx";

const project = {
  title: "Pet Village",
  subtitle: "Loyalty, Deals & Rewards App",
  description:
    "A native Android companion app for loyalty points, deals, and rewards — checkout hands off to the brand's existing WooCommerce store.",
  icon: "/petvillage-icon.png",
  tags: ["SOLO DEVELOPER", "MADE IN THE PHILIPPINES", "FLUTTER + FIREBASE"],
};

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

        <Reveal className="relative flex justify-center py-10">
          {/* decorative back card — left */}
          <div
            className="absolute w-[340px] sm:w-[400px] h-[220px] rounded-2xl bg-surface border border-ink/[0.08] opacity-50"
            style={{ transform: "rotate(-7deg) translateX(-70px)" }}
          />
          {/* decorative back card — right */}
          <div
            className="absolute w-[340px] sm:w-[400px] h-[220px] rounded-2xl bg-surface border border-ink/[0.08] opacity-50"
            style={{ transform: "rotate(7deg) translateX(70px)" }}
          />

          {/* front card — the real project */}
          <div className="relative z-10 w-full max-w-[400px] bg-surface border border-ink/[0.11] rounded-2xl p-6 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.25)]">
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
              <img
                src={project.icon}
                alt={project.title}
                className="w-12 h-12 rounded-xl object-cover shrink-0"
              />
              <div>
                <h3 className="font-display text-lg text-ink leading-tight">
                  {project.title}
                </h3>
                <p className="font-mono text-[10.5px] text-inkDim uppercase tracking-wide">
                  {project.subtitle}
                </p>
              </div>
            </div>

            <p className="text-sm text-inkMuted mb-6">{project.description}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
