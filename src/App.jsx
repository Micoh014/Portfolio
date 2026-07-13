import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar.jsx";
import { StatusRail, StatusBarMobile } from "./components/StatusBars.jsx";
import Hero from "./components/Hero.jsx";
import Projects from "./components/Projects.jsx";
import Experience from "./components/Experience.jsx";
import ExperienceFull from "./components/ExperienceFull.jsx";
import Stack from "./components/Stack.jsx";
import StackFull from "./components/StackFull.jsx";
import Certifications from "./components/Certifications.jsx";
import CertificationsFull from "./components/CertificationsFull.jsx";
import GithubContribution from "./components/GithubContribution.jsx";

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
      <Sidebar
        onGoHome={goHome}
        activeSection={page === "home" ? activeSection : ""}
      />
      <StatusRail />
      <StatusBarMobile />

      <main className="md:ml-64">
        {page === "experience" && <ExperienceFull onBack={goHome} />}
        {page === "stack" && <StackFull onBack={goHome} />}
        {page === "certifications" && <CertificationsFull onBack={goHome} />}
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
