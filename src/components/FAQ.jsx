import Reveal from "./Reveal.jsx";

// Draft answers based on "solo full-stack/mobile developer working with
// startups and MSMEs in the Philippines" — TODO: review and rewrite in your
// own voice before publishing. Nothing here is a real quote, price, or
// commitment.
const faqs = [
  {
    q: "What's a typical project timeline?",
    a: "TODO — draft: small tools/MVPs usually run a few weeks; larger apps depend on scope. Replace with your real range.",
  },
  {
    q: "How do you approach a new project?",
    a: "TODO — draft: start with the actual workflow (e.g. shadowing a shop's process, as with the inventory system) before writing code, then ship a working version early and iterate.",
  },
  {
    q: "What tech do you specialize in?",
    a: "TODO — draft: React/React Native + Flutter for frontend/mobile, Node/Supabase for backend, comfortable going offline-first when a client needs it.",
  },
  {
    q: "How does pricing/engagement generally work?",
    a: "TODO — draft: project-based pricing scoped after an initial chat about what you need; replace with your real terms.",
  },
];

export default function FAQ() {
  return (
    <section
      id="faq"
      className="py-[100px] sm:py-20 border-t border-ink/[0.07]"
    >
      <div className="max-w-content mx-auto px-8 sm:px-5">
        <span className="font-mono text-[13px] text-inkDim block mb-12">
          06 — faq
        </span>

        <div className="divide-y divide-ink/[0.07] max-w-[680px]">
          {faqs.map((item, i) => (
            <Reveal key={item.q} delay={i * 0.08} className="py-6 first:pt-0">
              <h3 className="font-display text-base text-ink mb-2">{item.q}</h3>
              <p className="text-inkMuted text-sm">{item.a}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
