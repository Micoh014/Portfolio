import Reveal from "./Reveal.jsx";
import AwsIcon from "./icons/AwsIcon.jsx";
import { GoogleIcon } from "./icons/BrandIcons.jsx";
import { certifications } from "./Certifications.jsx";

function CertIcon({ cert }) {
  if (cert.icon === "aws") {
    return <AwsIcon className="w-full h-full text-[#FF9900]" />;
  }
  if (cert.icon === "google") {
    return <GoogleIcon className="w-full h-full" />;
  }
  return (
    <img
      src={cert.icon}
      alt={cert.issuer}
      className="w-full h-full object-contain"
    />
  );
}

export default function CertificationsFull({ onBack }) {
  const categories = [...new Set(certifications.map((c) => c.category))];

  return (
    <div className="min-h-screen py-[100px]">
      <div className="max-w-content mx-auto px-8 sm:px-5">
        <button
          onClick={onBack}
          className="font-mono text-[12px] text-inkDim hover:text-accent mb-10 uppercase tracking-wide"
        >
          ← Back
        </button>

        <h1 className="font-display text-[36px] sm:text-[42px] font-semibold tracking-tight mb-6">
          Certifications
        </h1>
        <p className="text-inkMuted text-base sm:text-lg max-w-[600px] mb-14">
          Credentials across cloud, AI, data, and web development — each
          verifiable at its source.
        </p>

        <div className="space-y-14">
          {categories.map((cat) => (
            <div key={cat}>
              <h2 className="font-mono text-xs uppercase tracking-wider text-inkDim mb-5">
                {cat}
              </h2>
              <Reveal className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {certifications
                  .filter((c) => c.category === cat)
                  .map((cert, i) => (
                    <div
                      key={i}
                      className="border border-ink/[0.11] rounded-2xl p-6 bg-surface flex flex-col items-center text-center shadow-[0_2px_8px_-2px_rgba(0,0,0,0.04)] transition-all hover:border-accent/35 hover:-translate-y-1"
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
          ))}
        </div>
      </div>
    </div>
  );
}
