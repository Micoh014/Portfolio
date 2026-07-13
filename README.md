# Micoh Angelo Ojenar — Portfolio

Built with **React + Vite + Tailwind CSS + Framer Motion** (the frontend tools from your stack list).

## Run it locally

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
```

Output goes to `dist/` — deploy that folder to Vercel, Netlify, GitHub Pages, or any static host.
(This is a Vite + React project. If you'd rather run it inside Next.js, the components in
`src/components` drop into a Next.js `app/` directory with only minor tweaks — ask me and I'll convert it.)

## Project structure

```
src/
  components/
    Nav.jsx           – top navigation bar
    StatusBars.jsx     – desktop status rail + mobile status bar
    Hero.jsx           – hero section with headline reveal animation
    About.jsx          – about section + status card
    Stack.jsx          – tech stack grid, grouped by category
    Projects.jsx       – project cards (currently placeholder slots)
    Contact.jsx        – contact / CTA section
    Footer.jsx         – footer
    Reveal.jsx         – reusable scroll-reveal animation wrapper
    ScrollProgress.jsx – top scroll progress bar
  App.jsx              – assembles all sections
  main.jsx             – React entry point
  index.css            – Tailwind + global styles
```

## Where to edit content

- **Hero text / role** → `src/components/Hero.jsx`
- **About copy** → `src/components/About.jsx`
- **Tech stack items** → the `groups` array at the top of `src/components/Stack.jsx`
- **Projects** → the placeholder cards in `src/components/Projects.jsx`. Replace the title,
  description, and `stack` / `link` tags once you have real projects, and swap the plain
  `<span>` for a real `<a>` when you add links.
- **Contact links (GitHub / LinkedIn / Resume)** → `src/components/Contact.jsx`

## Design tokens

Colors, fonts, and spacing live in `tailwind.config.js` under `theme.extend`. Main accent color
is `#6C4CFF` (violet), secondary is `#14A876` (used for the "available" status pulse).
