import Reveal from "./Reveal.jsx";

const slots = [1, 2, 3];

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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[22px]">
          {slots.map((n, i) => (
            <Reveal key={n} delay={i * 0.08}>
              <div className="relative bg-surface border border-ink/[0.11] rounded-2xl p-[30px] min-h-[270px] flex flex-col justify-between overflow-hidden transition-all hover:border-accent/35 hover:-translate-y-1">
                <span className="absolute top-6 right-6 w-[30px] h-[30px] rounded-full border border-dashed border-ink/[0.11] flex items-center justify-center text-inkDim text-sm">
                  +
                </span>
                <div>
                  <span className="font-mono text-xs text-inkDim">
                    PROJECT — {String(n).padStart(2, "0")}
                  </span>
                  <div className="font-display text-[21px] my-4 text-ink">
                    Add your project title
                  </div>
                  <div className="text-sm text-inkMuted mb-5">
                    Short description of the problem this project solves and
                    your role in building it.
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="font-mono text-[11px] text-inkDim border border-ink/[0.07] px-[9px] py-1 rounded-md">
                    stack
                  </span>
                  <span className="font-mono text-[11px] text-inkDim border border-ink/[0.07] px-[9px] py-1 rounded-md">
                    link
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
