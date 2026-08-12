import Reveal from "./Reveal.jsx";
import { getPostBySlug } from "./blogData.js";

export default function BlogPost({ slug, onBack }) {
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <div className="min-h-screen py-[100px]">
        <div className="max-w-content mx-auto px-8 sm:px-5">
          <button
            onClick={onBack}
            className="font-mono text-[12px] text-inkDim hover:text-accent mb-10 uppercase tracking-wide"
          >
            ← Back
          </button>
          <p className="text-inkMuted text-sm">Post not found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-[100px]">
      <div className="max-w-content mx-auto px-8 sm:px-5 max-w-[680px]">
        <button
          onClick={onBack}
          className="font-mono text-[12px] text-inkDim hover:text-accent mb-10 uppercase tracking-wide"
        >
          ← Back
        </button>

        <Reveal>
          <p className="font-mono text-[11px] text-inkDim uppercase tracking-wide mb-3">
            {post.date}
          </p>
          <h1 className="font-display text-[32px] sm:text-[38px] font-semibold tracking-tight mb-8">
            {post.title}
          </h1>
        </Reveal>

        <Reveal delay={0.08} className="space-y-4">
          {post.body.map((para, i) => (
            <p
              key={i}
              className="text-ink text-sm sm:text-base leading-relaxed"
            >
              {para}
            </p>
          ))}
        </Reveal>
      </div>
    </div>
  );
}
