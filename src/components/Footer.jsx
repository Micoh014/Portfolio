export default function Footer() {
  return (
    <footer className="border-t border-ink/[0.07] py-8">
      <div className="max-w-content mx-auto px-8 sm:px-5 flex justify-between items-center flex-wrap gap-3 font-mono text-xs text-inkDim">
        <span>© {new Date().getFullYear()} Micoh Angelo B. Ojenar</span>
        <span>
          Built with React, Next.js-ready &amp; Framer Motion — Caloocan, PH
        </span>
      </div>
    </footer>
  );
}
