import Reveal from "./Reveal.jsx";

export const stackGroups = [
  {
    title: "Frontend",
    items: [
      "React",
      "Next.js",
      "HTML5",
      "CSS3",
      "JavaScript",
      "Tailwind CSS",
      "Framer Motion",
      "Responsive Design",
      "Shadcn/UI + Radix UI",
      "React Router",
      "Zustand",
      "React Hook Form",
    ],
  },
  {
    title: "Mobile",
    items: [
      "Flutter",
      "React Native",
      "Dart",
      "Expo",
      "NativeWind",
      "Moti (Reanimated)",
      "React Navigation",
      "Expo Router",
      "TypeScript",
    ],
  },
  {
    title: "Desktop",
    items: ["Electron", "electron-builder"],
  },
  {
    title: "Backend & Database",
    items: [
      "Node.js",
      "API Development",
      "Firebase",
      "Supabase (PostgreSQL)",
      "Express",
      "SQLite",
    ],
  },
  {
    title: "Tooling & Workflow",
    items: ["Git & GitHub", "VS Code", "Vite"],
  },
  {
    title: "Specialized",
    items: [
      "OCR (Tesseract.js)",
      "PWA",
      "Accessibility (WCAG AA)",
      "Offline-First Architecture",
      "Local Data Persistence",
      "Merged OCR to cover both Tesseract.js and ML Kit",
      "Leaflet",
      "React-leaflet",
    ],
  },
  {
    title: "Testing",
    items: ["Vitest", "Jest", "React Testing Library"],
  },
];

const preview = [
  "React",
  "Next.js",
  "JavaScript",
  "Tailwind CSS",
  "Node.js",
  "Flutter",
  "Firebase",
  "Git & GitHub",
  "Vite",
];

export default function Stack({ onOpenFull }) {
  return (
    <section
      id="stack"
      className="py-[100px] sm:py-20 border-t border-ink/[0.07]"
    >
      <div className="max-w-content mx-auto px-8 sm:px-5">
        <div className="flex items-baseline justify-between gap-6 flex-wrap mb-8">
          <span className="font-mono text-[13px] text-inkDim">03 — stack</span>
          <button
            onClick={onOpenFull}
            className="font-mono text-[12px] tracking-wide text-inkDim hover:text-accent uppercase transition-colors"
          >
            View all →
          </button>
        </div>

        <Reveal className="flex flex-wrap gap-2.5">
          {preview.map((item) => (
            <span
              key={item}
              className="text-[14.5px] px-[15px] py-[9px] border border-ink/[0.11] rounded-[9px] text-ink bg-surface transition-all hover:border-accent hover:bg-accent/[0.09] hover:-translate-y-0.5"
            >
              {item}
            </span>
          ))}
          <button
            onClick={onOpenFull}
            className="text-[14.5px] px-[15px] py-[9px] border border-dashed border-ink/[0.15] rounded-[9px] text-inkDim hover:text-accent hover:border-accent transition-all"
          >
            + more
          </button>
        </Reveal>
      </div>
    </section>
  );
}
