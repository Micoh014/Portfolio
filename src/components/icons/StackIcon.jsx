import {
  siReact,
  siNextdotjs,
  siHtml5,
  siCss,
  siJavascript,
  siTypescript,
  siTailwindcss,
  siFramer,
  siShadcnui,
  siRadixui,
  siReactrouter,
  siReacthookform,
  siFlutter,
  siDart,
  siExpo,
  siNodedotjs,
  siFirebase,
  siSupabase,
  siExpress,
  siSqlite,
  siPostgresql,
  siGit,
  siGithub,
  siVite,
  siElectron,
  siPwa,
  siLeaflet,
  siVitest,
  siJest,
  siTestinglibrary,
} from "simple-icons";
import SimpleIcon from "./SimpleIcon.jsx";
import { VsCodeIcon, GenericTechIcon } from "./BrandIcons.jsx";

// Matching is substring-based so labels like "Supabase (PostgreSQL)" or
// "Git & GitHub" resolve without an exact-string entry for every variant.
// Real brand marks come from simple-icons (github.com/simple-icons/simple-icons,
// CC0) — the one exception is VS Code, which simple-icons doesn't ship
// (trademark reasons), so that one keeps the hand-drawn fallback.
const MATCHERS = [
  [/react native/i, siReact], // no dedicated RN mark upstream; reuses the React atom
  [/react hook form/i, siReacthookform],
  [/react router/i, siReactrouter],
  [/^react$/i, siReact],
  [/next\.js/i, siNextdotjs],
  [/html5?/i, siHtml5],
  [/css3?/i, siCss],
  [/typescript/i, siTypescript],
  [/javascript/i, siJavascript],
  [/tailwind/i, siTailwindcss],
  [/framer motion/i, siFramer],
  [/shadcn/i, siShadcnui],
  [/radix/i, siRadixui],
  [/flutter/i, siFlutter],
  [/dart/i, siDart],
  [/expo/i, siExpo],
  [/node\.js/i, siNodedotjs],
  [/firebase/i, siFirebase],
  [/supabase/i, siSupabase],
  [/express/i, siExpress],
  [/sqlite/i, siSqlite],
  [/postgresql/i, siPostgresql],
  [/git &|git & github/i, siGit],
  [/github/i, siGithub],
  [/vite/i, siVite],
  [/electron/i, siElectron],
  [/pwa/i, siPwa],
  [/leaflet/i, siLeaflet],
  [/vitest/i, siVitest],
  [/^jest$/i, siJest],
  [/testing library/i, siTestinglibrary],
];

export default function StackIcon({ label, className = "w-4 h-4" }) {
  if (/vs code/i.test(label)) {
    return <VsCodeIcon className={className} />;
  }

  const match = MATCHERS.find(([re]) => re.test(label));
  if (match) {
    return <SimpleIcon icon={match[1]} className={className} />;
  }

  return <GenericTechIcon label={label} className={className} />;
}
