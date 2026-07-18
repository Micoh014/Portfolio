import { useState, useEffect, useRef } from "react";
import { supabase } from "../lib/supabaseClient";

function timeAgo(dateStr) {
  const diff = Math.floor((Date.now() - new Date(dateStr).getTime()) / 1000);
  if (diff < 60) return "just now";
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
  return `${Math.floor(diff / 86400)}d ago`;
}

export default function CommunityChat({ onClose }) {
  const [name, setName] = useState("");
  const [joined, setJoined] = useState(false);
  const [messages, setMessages] = useState([]);
  const [draft, setDraft] = useState("");
  const [loading, setLoading] = useState(true);
  const scrollRef = useRef(null);

  useEffect(() => {
    let channel;

    async function load() {
      const { data } = await supabase
        .from("chat_messages")
        .select("*")
        .order("created_at", { ascending: true })
        .limit(200);
      setMessages(data || []);
      setLoading(false);

      channel = supabase
        .channel("chat_messages_realtime")
        .on(
          "postgres_changes",
          { event: "INSERT", schema: "public", table: "chat_messages" },
          (payload) => {
            setMessages((prev) => [...prev, payload.new]);
          },
        )
        .subscribe();
    }

    load();
    return () => {
      if (channel) supabase.removeChannel(channel);
    };
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [messages]);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!draft.trim()) return;
    const text = draft.trim();
    setDraft("");
    await supabase.from("chat_messages").insert({
      name,
      text,
      location: null,
    });
  };

  return (
    <div className="fixed inset-0 z-50 bg-bg flex flex-col">
      <button
        onClick={onClose}
        className="absolute top-6 right-6 font-mono text-xs text-inkDim hover:text-accent uppercase"
      >
        ✕ Close
      </button>

      <div className="max-w-[520px] w-full mx-auto flex-1 flex flex-col py-16 px-6 min-h-0">
        <p className="font-mono text-xs text-inkDim mb-6">
          💬 {messages.length} messages
        </p>

        <div ref={scrollRef} className="flex-1 overflow-y-auto space-y-4 mb-6">
          {loading && <p className="font-mono text-xs text-inkDim">loading…</p>}
          {!loading && messages.length === 0 && (
            <p className="font-mono text-xs text-inkDim">
              No messages yet — be the first to say hi.
            </p>
          )}
          {messages.map((m) => (
            <div key={m.id}>
              <p className="font-mono text-[11px] text-inkDim mb-1">
                {m.name} · {timeAgo(m.created_at)}
              </p>
              <div className="inline-block bg-surface border border-ink/[0.07] rounded-xl px-4 py-2 text-sm text-ink">
                {m.text}
              </div>
            </div>
          ))}
        </div>

        {!joined ? (
          <div>
            <p className="text-sm text-inkMuted mb-3">what's your name?</p>
            <p className="font-mono text-[11px] text-inkDim mb-4">
              Names aren't verified — anyone can type any name here.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (name.trim()) setJoined(true);
              }}
              className="flex items-center gap-3 border-t border-ink/[0.07] pt-3"
            >
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                maxLength={40}
                placeholder="your name"
                className="flex-1 bg-transparent text-sm text-ink font-mono outline-none placeholder:text-inkDim"
              />
              <button
                type="submit"
                className="font-mono text-xs text-inkMuted hover:text-accent"
              >
                next ↵
              </button>
            </form>
          </div>
        ) : (
          <form
            onSubmit={sendMessage}
            className="flex items-center gap-3 border-t border-ink/[0.07] pt-3"
          >
            <input
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              maxLength={500}
              placeholder="say something…"
              className="flex-1 bg-transparent text-sm text-ink font-mono outline-none placeholder:text-inkDim"
            />
            <button
              type="submit"
              className="font-mono text-xs text-inkMuted hover:text-accent"
            >
              send ↵
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
