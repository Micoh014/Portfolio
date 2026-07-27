import GithubContribution from "./components/GithubContribution.jsx";
import Sidebar from "./components/Sidebar.jsx";
import { StatusRail, StatusBarMobile } from "./components/StatusBars.jsx";
import Hero from "./components/Hero.jsx";
import Projects from "./components/Projects.jsx";
import Experience from "./components/Experience.jsx";
import Stack from "./components/Stack.jsx";
import Certifications from "./components/Certifications.jsx";
import MobileNav from "./components/Mobile_nav.jsx";

import { useState, useEffect } from "react";
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

  useEffect(() => {
    if (page !== "home") return;
    const onScroll = () => {
      let current = "";
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < window.innerHeight * 0.4) {
          current = id;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [page]);

  const goHome = () => setPage("home");

  return (
    <div className="pb-[38px] md:pb-0">
      <Sidebar onGoHome={goHome} activeSection={activeSection} />
      <MobileNav onGoHome={goHome} activeSection={activeSection} />
      <StatusRail />
      <StatusBarMobile />

      <main className="md:ml-64">
        {page === "experience" && (
          <Suspense
            fallback={
              <div className="p-8 text-inkMuted text-sm">Loading...</div>
            }
          >
            <ExperienceFull onBack={goHome} />
          </Suspense>
        )}
        {page === "stack" && (
          <Suspense
            fallback={
              <div className="p-8 text-inkMuted text-sm">Loading...</div>
            }
          >
            <StackFull onBack={goHome} />
          </Suspense>
        )}
        {page === "certifications" && (
          <Suspense
            fallback={
              <div className="p-8 text-inkMuted text-sm">Loading...</div>
            }
          >
            <CertificationsFull onBack={goHome} />
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
      </main>
    </div>
  );
}
