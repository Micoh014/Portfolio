const STATUS_LABEL = "Open to work";
const LOCATION_LABEL = "Caloocan, PH";

export function StatusRail() {
  return (
    <aside className="hidden xl:flex fixed right-7 top-1/2 -translate-y-1/2 z-[850] flex-col gap-3.5 font-mono text-[11px] text-inkDim">
      <div className="[writing-mode:vertical-rl] py-3.5 opacity-75">
        {LOCATION_LABEL.toUpperCase()}
      </div>
      <div className="w-px h-[60px] bg-ink/[0.11] mx-auto" />
      <div className="[writing-mode:vertical-rl] py-3.5 opacity-75">
        {STATUS_LABEL.toUpperCase()}
      </div>
    </aside>
  );
}

export function StatusBarMobile() {
  return (
    <div className="flex xl:hidden fixed bottom-0 left-0 right-0 z-[850] bg-bg/90 backdrop-blur-md border-t border-ink/[0.07] font-mono text-[10.5px] text-inkDim px-4 py-[9px] justify-between items-center">
      <span className="flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-accent2 inline-block shadow-[0_0_8px_theme(colors.accent2)] pulse-dot" />
        {STATUS_LABEL}
      </span>
      <span>{LOCATION_LABEL}</span>
    </div>
  );
}
