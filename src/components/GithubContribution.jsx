import Reveal from "./Reveal.jsx";

export default function GithubContribution() {
  return (
    <section
      id="github"
      className="py-[100px] sm:py-20 border-t border-ink/[0.07]"
    >
      <div className="max-w-content mx-auto px-8 sm:px-5">
        <div className="flex items-baseline justify-between gap-6 flex-wrap mb-12">
          <span className="font-mono text-[13px] text-inkDim">05 — github</span>

          <a
            href="https://github.com/Micoh014"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[12px] tracking-wide text-inkDim hover:text-accent uppercase transition-colors"
          >
            @micoh014 →
          </a>
        </div>

        <Reveal>
          <div className="border border-ink/[0.11] rounded-2xl p-6 sm:p-8 bg-surface overflow-x-auto">
            <img
              src="https://ghchart.rshah.org/C1571F/Micoh014"
              alt="Micoh014's GitHub contribution chart"
              className="w-full min-w-[600px]"
            />
          </div>
          <p className="font-mono text-xs text-inkDim uppercase tracking-wide mt-4">
            117 contributions in the last year
          </p>
        </Reveal>
      </div>
    </section>
  );
}
