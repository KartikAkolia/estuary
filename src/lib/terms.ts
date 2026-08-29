import type { CollectionEntry } from "astro:content";

// Term-group display order for the TOC sidebar and prev/next sequencing,
// matching the course structure in SPEC.md (Term 1 -> Term 1&2 -> Term 2).
export const TERM_GROUPS = [
  { key: "term1", label: "Term 1 (Sept–Dec)" },
  { key: "term1-2", label: "Term 1 and 2 (Sept–April)" },
  { key: "term2", label: "Term 2 (Jan–April)" },
] as const;

export type TermKey = (typeof TERM_GROUPS)[number]["key"];

// Sequences all modules by term group, then module code, for prev/next
// navigation and the TOC sidebar's listing order within each group.
export function sortModules(entries: CollectionEntry<"modules">[]) {
  const order = TERM_GROUPS.map((g) => g.key);
  return [...entries].sort((a, b) => {
    const termDiff = order.indexOf(a.data.termGroup) - order.indexOf(b.data.termGroup);
    if (termDiff !== 0) return termDiff;
    return a.data.code.localeCompare(b.data.code);
  });
}
