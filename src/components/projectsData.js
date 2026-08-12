// Central project data. Add new entries here — Projects.jsx and ProjectFull.jsx
// both read from this file, so new projects show up everywhere automatically.
//
// caseStudy, metrics, screenshots, and liveUrl are all optional — sections that
// rely on them (metrics badges, live link, case-study page) simply don't render
// if the field is missing.

export const projects = [
  {
    id: "pet-village",
    title: "Pet Village",
    subtitle: "Loyalty, Deals & Rewards App",
    description:
      "A native Android companion app for loyalty points, deals, and rewards — checkout hands off to the brand's existing WooCommerce store.",
    icon: "/petvillage-icon.png",
    tags: ["SOLO DEVELOPER", "MADE IN THE PHILIPPINES", "FLUTTER + FIREBASE"],
    liveUrl: null, // TODO: add Play Store / App Store link when published
    metrics: [
      // TODO: fill in real numbers, e.g. { label: "active users", value: "TODO" }
    ],
    screenshots: [
      // TODO: add screenshot paths, e.g. "/projects/pet-village/1.png"
    ],
    caseStudy: {
      problem:
        "TODO — describe the business problem Pet Village asked you to solve (e.g. no way to reward repeat customers, manual promo tracking, etc).",
      approach:
        "TODO — describe how you approached it: research, scoping, tech choices, working solo across the stack.",
      decisions: [
        "Used Flutter + Firebase for a fast, single-codebase Android build.",
        "Used Google Sheets + Apps Script as a zero-cost CMS so non-technical staff could update promos without a redeploy.",
        "Handed off checkout to the brand's existing WooCommerce store rather than building a parallel payments flow.",
      ],
      outcome:
        "TODO — real impact/outcome once you have it (e.g. adoption, staff time saved, feedback from the brand).",
    },
  },
  {
    id: "school-supplies-inventory",
    title: "School Supplies Inventory System",
    subtitle: "Offline POS & Inventory Desktop App",
    description:
      "A point-of-sale and inventory management desktop app for a small school-supplies shop. Runs entirely offline on the owner's own computer — no cloud, no subscription, with FEFO batch/expiry tracking, purchase orders, credit (utang) tracking, and role-based staff access.",
    icon: null,
    tags: ["SOLO DEVELOPER", "MADE IN THE PHILIPPINES", "ELECTRON + REACT"],
    liveUrl: null, // in active use by the shop, not publicly deployed
    metrics: [
      // TODO: e.g. { label: "daily transactions", value: "50+" }, { label: "staff using it", value: "3" }
    ],
    screenshots: [
      // TODO: add screenshot paths
    ],
    caseStudy: {
      problem:
        "TODO — describe the shop's original pain points (e.g. manual ledger, no expiry tracking, no visibility into stock).",
      approach:
        "TODO — describe how you scoped it with the shop owner, what offline-first meant for the design, and how you validated it with real staff.",
      decisions: [
        "Built offline-first with Electron + React so the shop isn't dependent on internet access or a subscription.",
        "Added FEFO (first-expired-first-out) batch tracking to reduce spoilage/waste on perishable-ish stock.",
        "Added role-based staff access and credit (utang) tracking to match how the shop actually operates.",
      ],
      outcome:
        "TODO — real impact/outcome once you have it (e.g. reduced stock discrepancies, time saved per shift).",
    },
  },
];

export function getProjectById(id) {
  return projects.find((p) => p.id === id) ?? null;
}
