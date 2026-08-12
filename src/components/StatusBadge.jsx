import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient.js";

// Reads the single current-status row from the `site_status` table so you can
// update it from the Supabase dashboard without redeploying. See
// supabase/schema.sql for the table definition + seed row.
//
// Expected row shape: { id: 1, label: "Open to work", color: "green" }
// color: "green" | "yellow" | "gray"

const DOT_COLORS = {
  green: "bg-emerald-500",
  yellow: "bg-amber-500",
  gray: "bg-inkDim",
};

export default function StatusBadge({ className = "" }) {
  const [status, setStatus] = useState(null);

  useEffect(() => {
    let active = true;

    supabase
      .from("site_status")
      .select("label, color")
      .eq("id", 1)
      .single()
      .then(({ data, error }) => {
        if (!active) return;
        if (!error && data) setStatus(data);
      });

    return () => {
      active = false;
    };
  }, []);

  // Nothing rendered until we have a real value — avoids a flash of a
  // possibly-stale default status.
  if (!status) return null;

  const dot = DOT_COLORS[status.color] ?? DOT_COLORS.gray;

  return (
    <div
      className={`flex items-center gap-2 text-xs text-inkMuted ${className}`}
    >
      <span className={`w-2 h-2 rounded-full ${dot} shrink-0`} />
      <span>{status.label}</span>
    </div>
  );
}
