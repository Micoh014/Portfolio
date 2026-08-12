import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient.js";

const LOCATION_LABEL = "Caloocan, PH";
const FALLBACK_STATUS = "Open to work";

// Pulls the same site_status row as StatusBadge.jsx so this rail never
// contradicts the sidebar badge when you update your status in Supabase.
function useStatusLabel() {
  const [label, setLabel] = useState(FALLBACK_STATUS);
  useEffect(() => {
    let active = true;
    supabase
      .from("site_status")
      .select("label")
      .eq("id", 1)
      .single()
      .then(({ data, error }) => {
        if (active && !error && data) setLabel(data.label);
      });
    return () => {
      active = false;
    };
  }, []);
  return label;
}

export function StatusRail() {
  const status = useStatusLabel();
  return (
    <aside className="hidden xl:flex fixed right-7 top-1/2 -translate-y-1/2 z-[850] flex-col gap-3.5 font-mono text-[11px] text-inkDim">
      <div className="[writing-mode:vertical-rl] py-3.5 opacity-75">
        {LOCATION_LABEL.toUpperCase()}
      </div>
      <div className="w-px h-[60px] bg-ink/[0.11] mx-auto" />
      <div className="[writing-mode:vertical-rl] py-3.5 opacity-75">
        {status.toUpperCase()}
      </div>
    </aside>
  );
}

export function StatusBarMobile() {
  const status = useStatusLabel();
  return (
    <div className="flex xl:hidden fixed bottom-0 left-0 right-0 z-[850] bg-bg/90 backdrop-blur-md border-t border-ink/[0.07] font-mono text-[10.5px] text-inkDim px-4 py-[9px] justify-between items-center">
      <span className="flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-accent2 inline-block shadow-[0_0_8px_theme(colors.accent2)] pulse-dot" />
        {status}
      </span>
      <span>{LOCATION_LABEL}</span>
    </div>
  );
}
