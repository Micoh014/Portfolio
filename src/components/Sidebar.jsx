import StatusBadge from "./StatusBadge.jsx";
import ThemeToggle from "./ThemeToggle.jsx";
import { useLanguage } from "../lib/LanguageContext.jsx";
import { Download, MessageCircle } from "lucide-react";

export default function Sidebar({
  onGoHome,
  activeSection,
  dark,
  onThemeChange,
  onOpenUses,
  onOpenBlog,
  onOpenContact,
}) {
  const { lang, toggleLang } = useLanguage();

  const sections = [
    { id: "projects", label: "Projects", href: "#projects" },
    { id: "experience", label: "Experience", href: "#experience" },
    { id: "stack", label: "Stack", href: "#stack" },
    { id: "certifications", label: "Certifications", href: "#certifications" },
  ];

  const handleNavClick = (e, id) => {
    e.preventDefault();
    onGoHome();
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    });
  };

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-bg border-r border-ink/[0.07] backdrop-blur-sm overflow-y-auto p-8 hidden md:flex flex-col">
      <button onClick={onGoHome} className="mb-2 text-left">
        <h1 className="font-mono text-sm font-bold text-ink hover:text-accent transition-colors">
          Micoh Angelo Ojenar
        </h1>
      </button>

      <StatusBadge className="mb-6" />

      <a
        href="/Ojenar_Micoh_Angelo_Resume.docx"
        download
        className="flex items-center gap-2 text-xs font-mono px-3 py-2 rounded-lg border border-ink/[0.11] text-ink hover:border-accent hover:text-accent transition-colors mb-8 w-fit"
      >
        <Download size={12} strokeWidth={2} />
        Download CV
      </a>

      <nav className="space-y-2 flex-1">
        {sections.map((s) => (
          <a
            key={s.id}
            href={s.href}
            onClick={(e) => handleNavClick(e, s.id)}
            className="flex items-center gap-1.5 px-0 py-1 rounded text-sm text-inkMuted hover:text-ink hover:bg-ink/[0.04]"
          >
            {activeSection === s.id && <span className="text-accent">→</span>}
            {s.label}
          </a>
        ))}
        <button
          onClick={onOpenBlog}
          className="flex items-center gap-1.5 w-full text-left px-0 py-1 rounded text-sm text-inkMuted hover:text-ink hover:bg-ink/[0.04]"
        >
          Write-ups
        </button>
        <button
          onClick={onOpenUses}
          className="flex items-center gap-1.5 w-full text-left px-0 py-1 rounded text-sm text-inkMuted hover:text-ink hover:bg-ink/[0.04]"
        >
          Uses
        </button>
      </nav>

      <div className="border-t border-ink/[0.07] pt-6 mt-6 space-y-5">
        <div className="flex items-center justify-between">
          <ThemeToggle dark={dark} onThemeChange={onThemeChange} />
          <button
            onClick={toggleLang}
            aria-label="Switch language"
            className="font-mono text-[11px] text-inkDim hover:text-accent border border-ink/[0.11] rounded-full px-2.5 py-1"
          >
            {lang === "en" ? "EN" : "FIL"}
          </button>
        </div>

        <div>
          <p className="text-xs text-inkMuted leading-relaxed mb-3">
            For work, collabs & everything else:
          </p>
          <button
            onClick={onOpenContact}
            className="flex items-center gap-2 text-xs text-ink hover:text-accent font-mono"
          >
            <MessageCircle size={13} strokeWidth={2} />
            message me →
          </button>
        </div>
      </div>
    </aside>
  );
}
