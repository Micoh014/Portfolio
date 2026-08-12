import { useState } from "react";
import { supabase } from "../lib/supabaseClient.js";

const RATE_LIMIT_KEY = "contact_last_sent_at";
const RATE_LIMIT_MS = 60_000; // one submission per minute per browser

export default function ContactForm({ onClose }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  // Honeypot: real visitors never see or fill this field. Bots that
  // auto-fill every input on a form will, so a non-empty value here means
  // we quietly drop the submission without saying why.
  const [company, setCompany] = useState("");
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error | invalid

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (company.trim()) {
      // Silently "succeed" for bots so they don't learn to skip the field.
      setStatus("sent");
      return;
    }

    if (!name.trim() || !message.trim() || !/^\S+@\S+\.\S+$/.test(email)) {
      setStatus("invalid");
      return;
    }

    const lastSent = Number(localStorage.getItem(RATE_LIMIT_KEY) || 0);
    if (Date.now() - lastSent < RATE_LIMIT_MS) {
      setStatus("invalid");
      return;
    }

    setStatus("sending");
    const { error } = await supabase.from("contact_messages").insert({
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
    });

    if (error) {
      setStatus("error");
      return;
    }

    localStorage.setItem(RATE_LIMIT_KEY, String(Date.now()));
    setStatus("sent");
  };

  return (
    <div className="fixed inset-0 z-50 bg-bg/95 backdrop-blur-sm flex items-center justify-center p-6">
      <div className="w-full max-w-[440px] bg-surface border border-ink/[0.11] rounded-2xl p-8 relative">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-5 right-5 font-mono text-xs text-inkDim hover:text-accent uppercase"
        >
          ✕
        </button>

        <h2 className="font-display text-xl text-ink mb-1">Message me</h2>
        <p className="text-sm text-inkMuted mb-6">
          Send it straight from the site — no email client needed.
        </p>

        {status === "sent" ? (
          <p className="text-sm text-ink">
            Sent — thanks, I'll get back to you soon.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <div>
              <label htmlFor="cf-name" className="sr-only">
                Name
              </label>
              <input
                id="cf-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                autoComplete="name"
                className="w-full bg-bg border border-ink/[0.11] rounded-lg px-4 py-2.5 text-sm text-ink outline-none focus-visible:border-accent placeholder:text-inkDim"
              />
            </div>
            <div>
              <label htmlFor="cf-email" className="sr-only">
                Email
              </label>
              <input
                id="cf-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                autoComplete="email"
                className="w-full bg-bg border border-ink/[0.11] rounded-lg px-4 py-2.5 text-sm text-ink outline-none focus-visible:border-accent placeholder:text-inkDim"
              />
            </div>
            <div>
              <label htmlFor="cf-message" className="sr-only">
                Message
              </label>
              <textarea
                id="cf-message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="What's up?"
                rows={4}
                className="w-full bg-bg border border-ink/[0.11] rounded-lg px-4 py-2.5 text-sm text-ink outline-none focus-visible:border-accent placeholder:text-inkDim resize-none"
              />
            </div>

            {/* Honeypot — hidden from sighted users and off the tab order;
                aria-hidden + tabIndex -1 keep it invisible to screen readers too. */}
            <div className="absolute -left-[9999px]" aria-hidden="true">
              <input
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                name="company"
              />
            </div>

            {status === "invalid" && (
              <p className="text-xs text-red-500">
                Please fill in a valid name, email, and message.
              </p>
            )}
            {status === "error" && (
              <p className="text-xs text-red-500">
                Something went wrong — try again in a bit.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full font-mono text-xs uppercase tracking-wide bg-ink text-bg rounded-lg py-3 hover:bg-accent transition-colors disabled:opacity-60"
            >
              {status === "sending" ? "Sending…" : "Send"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
