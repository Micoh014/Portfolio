import { useState } from "react";
import StatusBadge from "./StatusBadge.jsx";
import ThemeToggle from "./ThemeToggle.jsx";
import { useLanguage } from "../lib/LanguageContext.jsx";
import { Menu, X, Download, MessageCircle } from "lucide-react";

export default function MobileNav({
  onGoHome,
  activeSection,
  dark,
  onThemeChange,
  onOpenUses,
  onOpenBlog,
  onOpenContact,
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, toggleLang } = useLanguage();

  const sections = [
    { id: "projects", label: "Projects", href: "#projects" },
    { id: "experience", label: "Experience", href: "#experience" },
    { id: "stack", label: "Stack", href: "#stack" },
    { id: "certifications", label: "Certifications", href: "#certifications" },
  ];

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setMenuOpen(false);
    onGoHome();
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    });
  };

  return (
    <>
      {/* Hamburger button (mobile only) */}
      <button
        onClick={() => setMenuOpen(true)}
        className="md:hidden fixed top-6 right-6 z-40 p-2 text-ink hover:text-accent transition-colors"
      >
        <Menu size={20} strokeWidth={2} />
      </button>

      {/* Menu overlay */}
      {menuOpen && (
        <div
          className="md:hidden fixed inset-0 z-50 bg-bg/95 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        >
          <div
            className="flex flex-col h-screen p-6 space-y-6 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <div className="flex items-center justify-between">
              <h2 className="font-mono text-sm font-bold text-ink">Menu</h2>
              <button
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                className="p-2 text-ink hover:text-accent transition-colors"
              >
                <X size={20} strokeWidth={2} />
              </button>
            </div>

            {/* Logo/Name */}
            <button onClick={onGoHome} className="text-left -mx-2">
              <h1 className="font-mono text-sm font-bold text-ink hover:text-accent transition-colors">
                Micoh Angelo Ojenar
              </h1>
            </button>

            <StatusBadge />

            {/* Download CV */}
            <a
              href="/Ojenar_Micoh_Angelo_Resume.docx"
              download
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2 text-xs font-mono px-3 py-2 rounded-lg border border-ink/[0.11] text-ink hover:border-accent hover:text-accent transition-colors w-fit"
            >
              <Download size={12} strokeWidth={2} />
              Download CV
            </a>

            {/* Navigation */}
            <nav className="space-y-2 flex-1">
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={s.href}
                  onClick={(e) => handleNavClick(e, s.id)}
                  className="block px-0 py-2 rounded text-sm text-inkMuted hover:text-ink hover:bg-ink/[0.04]"
                >
                  {s.label}
                </a>
              ))}
              <button
                onClick={() => {
                  setMenuOpen(false);
                  onOpenBlog();
                }}
                className="block w-full text-left px-0 py-2 rounded text-sm text-inkMuted hover:text-ink hover:bg-ink/[0.04]"
              >
                Write-ups
              </button>
              <button
                onClick={() => {
                  setMenuOpen(false);
                  onOpenUses();
                }}
                className="block w-full text-left px-0 py-2 rounded text-sm text-inkMuted hover:text-ink hover:bg-ink/[0.04]"
              >
                Uses
              </button>
            </nav>

            {/* Divider */}
            <div className="border-t border-ink/[0.07]" />

            {/* Theme + language */}
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

            {/* Contact */}
            <div className="pt-2">
              <p className="text-xs text-inkMuted leading-relaxed mb-2">
                For work, collabs & everything else:
              </p>
              <button
                onClick={() => {
                  setMenuOpen(false);
                  onOpenContact();
                }}
                className="flex items-center gap-2 text-xs text-ink hover:text-accent font-mono"
              >
                <MessageCircle size={13} strokeWidth={2} />
                message me →
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
