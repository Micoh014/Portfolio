import { supabase } from "./supabaseClient.js";

// Minimal, privacy-respecting analytics: no cookies, no personal data, just
// an event type + path logged to Supabase's analytics_events table (see
// supabase/schema.sql). Fire-and-forget — never blocks the UI or throws.
export function logEvent(eventType, path, meta = null) {
  supabase
    .from("analytics_events")
    .insert({ event_type: eventType, path, meta })
    .then(({ error }) => {
      if (error) console.warn("analytics log failed:", error.message);
    });
}
