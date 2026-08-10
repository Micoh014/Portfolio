import GithubContribution from "./components/GithubContribution.jsx";
import Sidebar from "./components/Sidebar.jsx";
import { StatusRail, StatusBarMobile } from "./components/StatusBars.jsx";
import Hero from "./components/Hero.jsx";
import Projects from "./components/Projects.jsx";
import Experience from "./components/Experience.jsx";
import Stack from "./components/Stack.jsx";
import Certifications from "./components/Certifications.jsx";
import MobileNav from "./components/Mobile_nav.jsx";
import Footer from "./components/Footer.jsx";
import ScrollProgress from "./components/ScrollProgress.jsx";

import { useState, useEffect, useRef } from "react";
import { flushSync } from "react-dom";
import { lazy, Suspense } from "react";

const ExperienceFull = lazy(() => import("./components/ExperienceFull.jsx"));
const StackFull = lazy(() => import("./components/StackFull.jsx"));
const CertificationsFull = lazy(
  () => import("./components/CertificationsFull.jsx"),
);

const SECTION_IDS = ["projects", "experience", "stack", "certifications"];

export default function App() {
  const [page, setPage] = useState("home");
  const [activeSection, setActiveSection] = useState("");
  const [dark, setDark] = useState(false);
  const [lastSection, setLastSection] = useState(null);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

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

  useEffect(() => {
    if (page === "home") {
      if (lastSection) {
        requestAnimationFrame(() => {
          document
            .getElementById(lastSection)
            ?.scrollIntoView({ behavior: "instant" });
        });
      } else {
        window.scrollTo(0, 0);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [page]);

  useEffect(() => {
    if (page !== "home") return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveSection(visible[0].target.id);
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [page]);

  const goHome = () => {
    setLastSection(null);
    setPage("home");
  };

  const goBack = () => {
    setLastSection(page); // remembers "certifications", "stack", or "experience"
    setPage("home");
  };

  return (
    <div className="pb-[38px] xl:pb-0">
      <ScrollProgress />
      <Sidebar
        onGoHome={goHome}
        activeSection={activeSection}
        dark={dark}
        onThemeChange={handleThemeChange}
      />
      <MobileNav
        onGoHome={goHome}
        activeSection={activeSection}
        dark={dark}
        onThemeChange={handleThemeChange}
      />
      <StatusRail />
      <StatusBarMobile />

      <main className="md:ml-64">
        {page === "experience" && (
          <Suspense
            fallback={
              <div className="p-8 text-inkMuted text-sm">Loading...</div>
            }
          >
            <ExperienceFull onBack={goBack} />
          </Suspense>
        )}
        {page === "stack" && (
          <Suspense
            fallback={
              <div className="p-8 text-inkMuted text-sm">Loading...</div>
            }
          >
            <StackFull onBack={goBack} />
          </Suspense>
        )}
        {page === "certifications" && (
          <Suspense
            fallback={
              <div className="p-8 text-inkMuted text-sm">Loading...</div>
            }
          >
            <CertificationsFull onBack={goBack} />
          </Suspense>
        )}
        {page === "home" && (
          <>
            <Hero />
            <Projects />
            <Experience onOpenFull={() => setPage("experience")} />
            <Stack onOpenFull={() => setPage("stack")} />
            <Certifications onOpenFull={() => setPage("certifications")} />
            <GithubContribution />
          </>
        )}
        <Footer />
      </main>
    </div>
  );
}
