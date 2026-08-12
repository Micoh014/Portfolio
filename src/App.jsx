import GithubContribution from "./components/GithubContribution.jsx";
import Sidebar from "./components/Sidebar.jsx";
import { StatusRail, StatusBarMobile } from "./components/StatusBars.jsx";
import Hero from "./components/Hero.jsx";
import Projects from "./components/Projects.jsx";
import Experience from "./components/Experience.jsx";
import Stack from "./components/Stack.jsx";
import Certifications from "./components/Certifications.jsx";
import Timeline from "./components/Timeline.jsx";
import MobileNav from "./components/Mobile_nav.jsx";
import Footer from "./components/Footer.jsx";
import ScrollProgress from "./components/ScrollProgress.jsx";
import FAQ from "./components/FAQ.jsx";
import ContactForm from "./components/ContactForm.jsx";
import NotFound from "./components/NotFound.jsx";
import { logEvent } from "./lib/analytics.js";

import { useState, useEffect } from "react";
import { flushSync } from "react-dom";
import { lazy, Suspense } from "react";

const ExperienceFull = lazy(() => import("./components/ExperienceFull.jsx"));
const StackFull = lazy(() => import("./components/StackFull.jsx"));
const CertificationsFull = lazy(
  () => import("./components/CertificationsFull.jsx"),
);
const ProjectFull = lazy(() => import("./components/ProjectFull.jsx"));
const Uses = lazy(() => import("./components/Uses.jsx"));
const Blog = lazy(() => import("./components/Blog.jsx"));
const BlogPost = lazy(() => import("./components/BlogPost.jsx"));

const SECTION_IDS = ["projects", "experience", "stack", "certifications"];
const PAGE_LOADING = (
  <div className="p-8 space-y-3 animate-pulse">
    <div className="h-4 w-24 bg-ink/[0.08] rounded" />
    <div className="h-8 w-64 bg-ink/[0.08] rounded" />
    <div className="h-4 w-full max-w-[500px] bg-ink/[0.06] rounded" />
    <div className="h-4 w-full max-w-[420px] bg-ink/[0.06] rounded" />
  </div>
);

export default function App() {
  const [page, setPage] = useState("home");
  const [activeSection, setActiveSection] = useState("");
  const [dark, setDark] = useState(false);
  const [lastSection, setLastSection] = useState(null);
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [selectedPostSlug, setSelectedPostSlug] = useState(null);
  const [contactOpen, setContactOpen] = useState(false);

  // This app routes entirely via the `page` state above rather than the
  // URL — there's only ever one real URL ("/"). If someone lands on any
  // other path (a stale bookmark, a typo'd link), show a 404 instead of a
  // blank/broken home page. vercel.json rewrites all paths to index.html
  // so this check — not server routing — is what decides the 404.
  const [unknownPath] = useState(
    () =>
      typeof window !== "undefined" &&
      window.location.pathname !== "/" &&
      window.location.pathname !== "/index.html",
  );

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

  // Basic pageview logging — one event per page change, no cookies/PII.
  useEffect(() => {
    logEvent("pageview", page);
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

  const openProject = (id) => {
    logEvent("project_click", "home", { projectId: id });
    setSelectedProjectId(id);
    setPage("project");
  };

  const openPost = (slug) => {
    setSelectedPostSlug(slug);
    setPage("blogpost");
  };

  if (unknownPath) {
    return (
      <NotFound
        onGoHome={() => {
          window.history.replaceState({}, "", "/");
          window.location.reload();
        }}
      />
    );
  }

  return (
    <div className="pb-[38px] xl:pb-0">
      <ScrollProgress />
      <Sidebar
        onGoHome={goHome}
        activeSection={activeSection}
        dark={dark}
        onThemeChange={handleThemeChange}
        onOpenUses={() => setPage("uses")}
        onOpenBlog={() => setPage("blog")}
        onOpenContact={() => setContactOpen(true)}
      />
      <MobileNav
        onGoHome={goHome}
        activeSection={activeSection}
        dark={dark}
        onThemeChange={handleThemeChange}
        onOpenUses={() => setPage("uses")}
        onOpenBlog={() => setPage("blog")}
        onOpenContact={() => setContactOpen(true)}
      />
      <StatusRail />
      <StatusBarMobile />

      <main className="md:ml-64">
        {page === "experience" && (
          <Suspense fallback={PAGE_LOADING}>
            <ExperienceFull onBack={goBack} />
          </Suspense>
        )}
        {page === "stack" && (
          <Suspense fallback={PAGE_LOADING}>
            <StackFull onBack={goBack} />
          </Suspense>
        )}
        {page === "certifications" && (
          <Suspense fallback={PAGE_LOADING}>
            <CertificationsFull onBack={goBack} />
          </Suspense>
        )}
        {page === "project" && (
          <Suspense fallback={PAGE_LOADING}>
            <ProjectFull projectId={selectedProjectId} onBack={goBack} />
          </Suspense>
        )}
        {page === "uses" && (
          <Suspense fallback={PAGE_LOADING}>
            <Uses onBack={goBack} />
          </Suspense>
        )}
        {page === "blog" && (
          <Suspense fallback={PAGE_LOADING}>
            <Blog onBack={goBack} onOpenPost={openPost} />
          </Suspense>
        )}
        {page === "blogpost" && (
          <Suspense fallback={PAGE_LOADING}>
            <BlogPost slug={selectedPostSlug} onBack={() => setPage("blog")} />
          </Suspense>
        )}
        {page === "home" && (
          <>
            <Hero onOpenContact={() => setContactOpen(true)} />
            <Projects onOpenProject={openProject} />
            <Experience onOpenFull={() => setPage("experience")} />
            <Stack onOpenFull={() => setPage("stack")} />
            <Certifications onOpenFull={() => setPage("certifications")} />
            <Timeline />
            <GithubContribution />
            <FAQ />
          </>
        )}
        <Footer />
      </main>

      {contactOpen && <ContactForm onClose={() => setContactOpen(false)} />}
    </div>
  );
}
