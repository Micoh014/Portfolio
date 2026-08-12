// Hand-drawn brand icons kept for cases simple-icons doesn't cover
// (Google/GSuite certs, VS Code — simple-icons omits VS Code for
// trademark reasons) plus the generic initials fallback used by
// StackIcon.jsx for anything unmatched.

export function GoogleIcon({ className }) {
  return (
    <svg viewBox="0 0 48 48" className={className}>
      <path
        fill="#FFC107"
        d="M43.6 20.5h-1.9V20.4H24v7.2h11.3c-1.6 4.7-6.1 8.1-11.3 8.1-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.1-5.1C34 6.5 29.3 4.5 24 4.5c-10.8 0-19.5 8.7-19.5 19.5S13.2 43.5 24 43.5 43.5 34.8 43.5 24c0-1.2-.1-2.4-.3-3.5z"
      />
      <path
        fill="#FF3D00"
        d="m6.3 14.7 5.9 4.3C13.8 15.6 18.5 12.5 24 12.5c3.1 0 5.9 1.2 8 3.1l5.1-5.1C34 6.5 29.3 4.5 24 4.5c-7.5 0-14 4.2-17.3 10.2z"
      />
      <path
        fill="#4CAF50"
        d="M24 43.5c5.2 0 9.9-2 13.4-5.2l-5.5-4.7c-2 1.5-4.6 2.4-7.9 2.4-5.2 0-9.6-3.4-11.2-8.1l-5.8 4.5C10 39.2 16.5 43.5 24 43.5z"
      />
      <path
        fill="#1976D2"
        d="M43.6 20.5h-1.9V20.4H24v7.2h11.3c-.8 2.3-2.2 4.2-4.1 5.6l5.5 4.7C39.8 35.4 43.5 30.3 43.5 24c0-1.2-.1-2.4-.3-3.5z"
      />
    </svg>
  );
}

export function VsCodeIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="#007ACC">
      <path d="M17 1.5 8.5 9.2 3.3 5.4 1 6.6v10.8l2.3 1.2 5.2-3.8 8.5 7.7L23 20.2V3.8L17 1.5Zm0 4.3v12.4L10.8 12 17 5.8ZM3 8.6l2.7 3.4L3 15.4V8.6Z" />
    </svg>
  );
}

// Generic fallback for anything not covered above — a rounded glyph using
// the item's initials so every pill still gets a consistent icon slot.
export function GenericTechIcon({ label, className }) {
  const initials = label
    .replace(/\(.*?\)/g, "")
    .trim()
    .split(/[\s.]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  return (
    <span
      className={`flex items-center justify-center font-mono font-semibold ${className}`}
      style={{ fontSize: "0.55em" }}
      aria-hidden="true"
    >
      {initials}
    </span>
  );
}
