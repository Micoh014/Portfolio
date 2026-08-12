import Reveal from "./Reveal.jsx";

// Edit these lists directly — plain data, no external content source needed
// for a page this small.
const groups = [
  {
    label: "Hardware",
    items: [
      "TODO — laptop model",
      "TODO — monitor",
      "TODO — keyboard/mouse (optional)",
    ],
  },
  {
    label: "Editor",
    items: [
      "VS Code",
      "TODO — key extensions (e.g. Tailwind CSS IntelliSense, Prettier, ESLint)",
    ],
  },
  {
    label: "Favorite libraries & tools",
    items: [
      "React + Vite",
      "Tailwind CSS",
      "Framer Motion",
      "Supabase",
      "TODO — anything else you reach for often",
    ],
  },
];

export default function Uses({ onBack }) {
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
          Uses
        </h1>
        <p className="text-inkMuted text-base sm:text-lg max-w-[600px] mb-14">
          What I build with, day to day.
        </p>

        <div className="space-y-10">
          {groups.map((group, i) => (
            <Reveal key={group.label} delay={i * 0.08}>
              <span className="font-mono text-[11px] text-inkDim uppercase tracking-wide">
                {group.label}
              </span>
              <ul className="mt-3 space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="text-ink text-sm sm:text-base">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
