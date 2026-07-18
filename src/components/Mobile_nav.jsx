import { useState, useEffect } from "react";
import { flushSync } from "react-dom";
import CommunityChat from "./CommunityChat.jsx";

export default function MobileNav({ onGoHome, activeSection }) {
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

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

  const handleThemeChange = (nextDark, e) => {
    const x = e.clientX;
    const y = e.clientY;
    document.documentElement.style.setProperty("--x", `${x}px`);
    document.documentElement.style.setProperty("--y", `${y}px`);

    if (!document.startViewTransition) {
      setDark(nextDark);
      return;
    }

    document.startViewTransition(() => {
      flushSync(() => {
        setDark(nextDark);
      });
    });
  };

  return (
    <>
      {/* Hamburger button (mobile only) */}
      <button
        onClick={() => setMenuOpen(true)}
        className="md:hidden fixed top-6 right-6 z-40 p-2 text-ink hover:text-accent transition-colors"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>

      {/* Menu overlay */}
      {menuOpen && (
        <div
          className="md:hidden fixed inset-0 z-50 bg-bg/95 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        >
          <div
            className="flex flex-col h-screen p-6 space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <div className="flex items-center justify-between">
              <h2 className="font-mono text-sm font-bold text-ink">Menu</h2>
              <button
                onClick={() => setMenuOpen(false)}
                className="p-2 text-ink hover:text-accent transition-colors"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Logo/Name */}
            <button onClick={onGoHome} className="text-left -mx-2">
              <h1 className="font-mono text-sm font-bold text-ink hover:text-accent transition-colors">
                Micoh Ojenar
              </h1>
            </button>

            {/* Download CV */}
            <a
              href="/Ojenar_Micoh_Angelo_Resume.docx"
              download
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2 text-xs font-mono px-3 py-2 rounded-lg border border-ink/[0.11] text-ink hover:border-accent hover:text-accent transition-colors w-fit"
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 3v12m0 0l-4-4m4 4l4-4M4 21h16" />
              </svg>
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
            </nav>

            {/* Chat */}
            <button
              onClick={() => {
                setChatOpen(true);
                setMenuOpen(false);
              }}
              className="flex items-center gap-2 text-xs text-inkMuted hover:text-ink py-2"
            >
              <span>💬</span>
              <span>community chat</span>
            </button>

            {/* Divider */}
            <div className="border-t border-ink/[0.07]" />

            {/* Dark mode */}
            <div className="flex items-center gap-2">
              <button
                onClick={(e) => handleThemeChange(false, e)}
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                  !dark
                    ? "bg-ink text-bg"
                    : "border border-ink/[0.15] text-inkDim hover:border-ink/[0.3]"
                }`}
              >
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
                </svg>
              </button>
              <button
                onClick={(e) => handleThemeChange(true, e)}
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                  dark
                    ? "bg-ink text-bg"
                    : "border border-ink/[0.15] text-inkDim hover:border-ink/[0.3]"
                }`}
              >
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79Z" />
                </svg>
              </button>
            </div>

            {/* Email */}
            <div className="pt-2">
              <p className="text-xs text-inkMuted leading-relaxed mb-2">
                For work, collabs & everything else:
              </p>
              <a
                href="mailto:micohangelo14@gmail.com"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-2 text-xs text-ink hover:text-accent"
              >
                <span className="font-mono">micohangelo14@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Chat modal */}
      {chatOpen && <CommunityChat onClose={() => setChatOpen(false)} />}
    </>
  );
}
