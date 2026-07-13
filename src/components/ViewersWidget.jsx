import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

export default function ViewersWidget() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    const channel = supabase.channel("portfolio-viewers", {
      config: { presence: { key: crypto.randomUUID() } },
    });

    channel
      .on("presence", { event: "sync" }, () => {
        const state = channel.presenceState();
        setCount(Object.keys(state).length);
      })
      .subscribe(async (status) => {
        if (status === "SUBSCRIBED") {
          await channel.track({ joined_at: new Date().toISOString() });
        }
      });

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  return (
    <p className="text-xs text-inkMuted">
      <span className="text-ink font-semibold">{count}</span>{" "}
      {count === 1 ? "person viewing now" : "people viewing now"}
    </p>
  );
}
