// Posts as plain JS objects — no markdown parser or Supabase table needed.
// Add a new post by adding an object here; `body` is an array of paragraphs.
// (Why not Markdown files or Supabase — see chat for the tradeoff.)

export const posts = [
  {
    slug: "hello-world",
    title: "Hello, world",
    date: "2026-08-12", // TODO: replace with your real publish date
    excerpt:
      "TODO — a one-sentence placeholder excerpt for your first real post.",
    body: [
      "TODO — replace this placeholder post with something real. This entry exists so the Blog list and post view have something to render.",
      "TODO — a second paragraph.",
    ],
  },
];

export function getPostBySlug(slug) {
  return posts.find((p) => p.slug === slug) ?? null;
}
