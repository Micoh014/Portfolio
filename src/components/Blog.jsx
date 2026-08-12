import Reveal from "./Reveal.jsx";
import { posts } from "./blogData.js";

export default function Blog({ onBack, onOpenPost }) {
  return (
    <div className="min-h-screen py-[100px]">
      <div className="max-w-content mx-auto px-8 sm:px-5">
        <button
          onClick={onBack}
          className="font-mono text-[12px] text-inkDim hover:text-accent mb-10 uppercase tracking-wide"
        >
          ← Back
        </button>

        <h1 className="font-display text-[36px] sm:text-[42px] font-semibold tracking-tight mb-14">
          Write-ups
        </h1>

        <div className="divide-y divide-ink/[0.07]">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.08}>
              <button
                onClick={() => onOpenPost(post.slug)}
                className="w-full text-left py-8 first:pt-0 group"
              >
                <p className="font-mono text-[11px] text-inkDim uppercase tracking-wide mb-2">
                  {post.date}
                </p>
                <h2 className="font-display text-xl text-ink group-hover:text-accent transition-colors">
                  {post.title}
                </h2>
                <p className="text-inkMuted text-sm mt-2">{post.excerpt}</p>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
