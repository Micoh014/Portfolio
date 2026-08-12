import { Sun, Moon } from "lucide-react";

export default function ThemeToggle({ dark, onThemeChange }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={dark}
      aria-label="Toggle dark mode"
      onClick={(e) => onThemeChange(!dark, e)}
      className={`relative w-[52px] h-7 rounded-full border transition-colors shrink-0 ${
        dark ? "bg-ink border-ink" : "bg-surface2 border-ink/[0.15]"
      }`}
    >
      <span
        className={`absolute top-0.5 left-0.5 w-6 h-6 rounded-full bg-bg shadow-sm flex items-center justify-center transition-transform ${
          dark ? "translate-x-[24px]" : "translate-x-0"
        }`}
      >
        {dark ? (
          <Moon
            size={13}
            strokeWidth={2}
            className="text-ink"
            fill="currentColor"
          />
        ) : (
          <Sun size={13} strokeWidth={2} className="text-ink" />
        )}
      </span>
    </button>
  );
}
