import { useState, useEffect } from "react";
import { flushSync } from "react-dom";
import CommunityChat from "./CommunityChat.jsx";
import ViewersWidget from "./ViewersWidget.jsx";

export default function Sidebar({ onGoHome, activeSection }) {
  const [dark, setDark] = useState(false);
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
    <aside className="fixed left-0 top-0 h-screen w-64 bg-bg border-r border-ink/[0.07] backdrop-blur-sm overflow-y-auto p-8 hidden md:flex flex-col">
      <button onClick={onGoHome} className="mb-12 text-left">
        <h1 className="font-mono text-sm font-bold text-ink hover:text-accent transition-colors">
          Micoh Ojenar
        </h1>
      </button>

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
      </nav>

      <div className="space-y-4 pt-6">
        <ViewersWidget />
        <button
          onClick={() => setChatOpen(true)}
          className="flex items-center gap-2 text-xs text-inkMuted hover:text-ink"
        >
          <span>💬</span>
          <span>community chat</span>
        </button>
      </div>

      <div className="border-t border-ink/[0.07] pt-6 mt-6 space-y-4">
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
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79Z" />
            </svg>
          </button>
        </div>

        <div>
          <p className="text-xs text-inkMuted leading-relaxed">
            For work, collabs & everything else, reach me at
          </p>
          <a
            href="mailto:micohangelo14@gmail.com"
            className="flex items-center gap-2 text-xs text-ink hover:text-accent mt-3"
          >
            <span className="font-mono">micohangelo14@gmail.com</span>
          </a>
        </div>
      </div>

      {chatOpen && <CommunityChat onClose={() => setChatOpen(false)} />}
    </aside>
  );
}
