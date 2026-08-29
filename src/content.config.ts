import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

// Estuary's content is original, authored research — unlike Fjord, there is
// no glob() pointed at files elsewhere in the repo (see AGENTS.md
// non-negotiable 1). Every chapter is driven off structured frontmatter
// fields rather than freeform markdown body, so all seven modules render
// with the same consistent e-reader sections regardless of how much prose
// any one section needs.
const modules = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/modules" }),
  schema: z.object({
    code: z.string(),
    title: z.string(),
    // Display label matching the module table in SPEC.md, e.g. "Term 1 (Sept-Dec)".
    term: z.string(),
    // Grouping key for the TOC sidebar and prev/next ordering.
    termGroup: z.enum(["term1", "term1-2", "term2"]),
    credits: z.number(),
    overview: z.string(),
    learningOutcomes: z.array(z.string()),
    keyTopics: z.array(z.string()),
    keyTerms: z.array(z.object({ term: z.string(), definition: z.string() })),
    prerequisites: z.array(z.string()),
    // GCSE-friendly explainer sections, added on top of the official module
    // framing above. Written in Estuary's own words — paraphrased and
    // synthesized from tutorial-tier sources, not reproduced from them, to
    // stay clear of both plagiarism and copyright concerns (see AGENTS.md
    // non-negotiable 3 and docs/personal-research-guidelines.md).
    indepth: z
      .array(z.object({ heading: z.string(), body: z.string() }))
      .default([]),
    // Original diagrams authored for this project — never sourced images,
    // to avoid reproducing anyone else's copyrighted visuals.
    visuals: z
      .array(z.object({ src: z.string(), alt: z.string(), caption: z.string() }))
      .default([]),
    resources: z.array(
      z.object({ title: z.string(), url: z.url(), note: z.string().optional() }),
    ),
    sources: z.array(
      z.object({ title: z.string(), url: z.url(), note: z.string().optional() }),
    ),
  }),
});

export const collections = { modules };
