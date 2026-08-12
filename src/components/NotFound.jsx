export default function NotFound({ onGoHome }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <span className="font-mono text-[13px] text-inkDim mb-4">404</span>
      <h1 className="font-display text-3xl sm:text-4xl text-ink mb-3">
        Nothing here.
      </h1>
      <p className="text-inkMuted text-sm mb-8 max-w-[380px]">
        This page doesn't exist — probably a bad link, not a bad decision.
      </p>
      <button
        onClick={onGoHome}
        className="font-mono text-xs uppercase tracking-wide bg-ink text-bg rounded-lg px-5 py-3 hover:bg-accent transition-colors"
      >
        Back to homepage
      </button>
    </div>
  );
}
