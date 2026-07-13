import Reveal from "./Reveal.jsx";
import { GoogleIcon } from "./icons/BrandIcons.jsx";
import AwsIcon from "./icons/AwsIcon.jsx";

export const certifications = [
  {
    name: "AWS Academy Graduate — Cloud Foundations",
    issuer: "Amazon Web Services",
    category: "Cloud",
    icon: "aws",
    verifyUrl:
      "https://www.credly.com/badges/bcc50845-73ae-4fe7-8425-9ac788525047/print",
  },
  {
    name: "Mastering React: React Crash Course with Mini Projects",
    issuer: "Udemy",
    category: "Web Development",
    icon: "https://cdn.simpleicons.org/udemy/A435F0",
    verifyUrl:
      "https://www.udemy.com/certificate/UC-ee80ca5d-bd33-4c21-b99f-8e929b7234f6/",
  },
  {
    name: "GIT, GitLab, GitHub: Fundamentals for Software Developers",
    issuer: "Udemy",
    category: "Web Development",
    icon: "https://cdn.simpleicons.org/udemy/A435F0",
    verifyUrl:
      "https://www.udemy.com/certificate/UC-37691223-6457-46f8-94bb-9023a653b615/",
  },
  {
    name: "CSS Fundamentals: Comprehensive Training for Web Developers",
    issuer: "Udemy",
    category: "Web Development",
    icon: "https://cdn.simpleicons.org/udemy/A435F0",
    verifyUrl:
      "https://www.udemy.com/certificate/UC-0e5b2b98-0344-499d-8dcb-db07ded83f6f/",
  },
  {
    name: "HTML - The Complete Guide to HTML for Beginners",
    issuer: "Udemy",
    category: "Web Development",
    icon: "https://cdn.simpleicons.org/udemy/A435F0",
    verifyUrl:
      "https://www.udemy.com/certificate/UC-db6d5f7b-f9a7-418b-be8b-d31ab0d6856a/",
  },
  {
    name: "JavaScript Mastery From Basics to Advanced 2025",
    issuer: "Udemy",
    category: "Web Development",
    icon: "https://cdn.simpleicons.org/udemy/A435F0",
    verifyUrl:
      "https://www.udemy.com/certificate/UC-3198e368-4d14-445b-994b-58a25a57dfa2/",
  },
  {
    name: "CSS - The Complete Guide to CSS for Beginners",
    issuer: "Udemy",
    category: "Web Development",
    icon: "https://cdn.simpleicons.org/udemy/A435F0",
    verifyUrl:
      "https://www.udemy.com/certificate/UC-aee670d0-5d60-4ad9-83e7-29b986e112e3/",
  },
];

function CertIcon({ cert }) {
  if (cert.icon === "aws")
    return <AwsIcon className="w-full h-full text-[#FF9900]" />;
  if (cert.icon === "google") return <GoogleIcon className="w-full h-full" />;
  return (
    <img
      src={cert.icon}
      alt={cert.issuer}
      className="w-full h-full object-contain"
    />
  );
}

export default function Certifications({ onOpenFull }) {
  const preview = certifications.slice(0, 3);

  return (
    <section
      id="certifications"
      className="py-[100px] sm:py-20 border-t border-ink/[0.07]"
    >
      <div className="max-w-content mx-auto px-8 sm:px-5">
        <div className="flex items-baseline justify-between gap-6 flex-wrap mb-12">
          <span className="font-mono text-[13px] text-inkDim">
            04 — certifications
          </span>
          <button
            onClick={onOpenFull}
            className="font-mono text-[12px] tracking-wide text-inkDim hover:text-accent uppercase transition-colors"
          >
            All certifications →
          </button>
        </div>

        <Reveal className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {preview.map((cert, i) => (
            <div
              key={i}
              className="border border-ink/[0.11] rounded-2xl p-6 bg-surface flex flex-col items-center text-center shadow-[0_2px_8px_-2px_rgba(0,0,0,0.04)] transition-all hover:border-accent/35 hover:-translate-y-1 hover:shadow-[0_8px_20px_-6px_rgba(108,76,255,0.15)]"
            >
              <div className="w-11 h-11 rounded-xl bg-bg border border-ink/[0.07] flex items-center justify-center p-2.5 mb-4">
                <CertIcon cert={cert} />
              </div>
              <div className="min-h-[56px] flex flex-col justify-start">
                <h3 className="text-ink font-semibold text-[15px] leading-snug mb-1.5">
                  {cert.name}
                </h3>
                <p className="font-mono text-[10.5px] text-inkDim uppercase tracking-wide">
                  {cert.issuer}
                </p>
              </div>
              <a
                href={cert.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[11px] text-inkMuted hover:text-accent transition-colors mt-3"
              >
                ‹ verify ›
              </a>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
