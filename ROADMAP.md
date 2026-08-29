# ROADMAP.md

`SPEC.md` is the durable contract; this defines ordered phases. `TASKS.md` holds active-phase detail only.

## Phase 0: Documentation and decisions

Status: complete (2026-08-29)

### Objective

Turn Kartik's fork request into a concrete, decided scope before any code exists — build/deploy approach, project name, content model, research sourcing standard — captured in this project's own `AGENTS.md`/`SPEC.md`/`ROADMAP.md`/`TASKS.md`, plus a pointer from the root repo's own docs and from `fjord/`'s halt note.

### Outcomes

`estuary/AGENTS.md`, `SPEC.md`, `ROADMAP.md`, `TASKS.md`, `CLAUDE.md`, `GEMINI.md` written. Root `AGENTS.md` Repository Map and root `ROADMAP.md`/`TASKS.md` updated with a pointer to this sub-project, matching the precedent set for `fjord` and `personal-website`/Loopwire.

### Exit Criteria

All open questions from Kartik's original request answered and recorded: six candidate approaches presented (new directory vs. repurposing `fjord/` in place; Cloudflare Workers vs. Pages as the eventual deploy target; shell-first vs. content-first build order), Kartik picked new directory (`estuary/`, his own naming), shell-first build order, deployment target left open but Workers noted as the likely precedent.

### Completion Evidence

This file and its siblings, on disk, cross-referenced from the root repo and from `fjord/TASKS.md`'s halt note.

## Phase 1: Astro scaffold (reading shell)

Status: complete (2026-08-29)

### Objective

Stand up the Astro project itself, shell-first per Kartik's chosen build order: `package.json`, `astro.config.mjs` (static output), the `modules` content collection schema, a base e-reader layout carrying over Fjord's Nord Terminal tokens, and placeholder/stub content for all seven modules so navigation and theming can be verified before real research content exists.

### Outcomes

`npm run dev` boots without error; the course index and all seven module chapter routes resolve with stub content; `astro check` clean.

### Exit Criteria

`npm run dev` runs; navigation (index → chapter, prev/next) works end to end with stub content; theme matches the Nord Terminal tokens carried over from Fjord.

### Completion Evidence

Built: `package.json`, `astro.config.mjs` (static output, Shiki `theme: "nord"`), `tsconfig.json` (matching Fjord's), `src/content.config.ts` (`modules` collection, Zod schema — code/title/term/termGroup/credits/overview/learningOutcomes/keyTopics/keyTerms/prerequisites/resources/sources), `src/lib/terms.ts` (term-group ordering), `src/components/CourseShell.astro` (shared shell: dwm-style top bar carried over from Fjord, term-grouped TOC sidebar, reading pane, prev/next chapter footer — Fjord's three-pane file browser reinterpreted as a two-pane e-reader per `SPEC.md`), `src/pages/index.astro` (course overview, modules grouped by term), `src/pages/modules/[code].astro` (chapter template with prev/next nav), and seven stub content files under `src/content/modules/` (real frontmatter, placeholder body) for all Year 0 modules.

Two Astro 6 deprecation hints caught and fixed via Context7-verified current API, not left as warnings: `z` import moved from `astro:content` to `astro/zod`; `.url()` moved from `z.string().url()` to the top-level `z.url()`.

Verified live, not assumed:

- `npx astro check` → 0 errors, 0 warnings, 0 hints (8 files).
- `npm run build` → 8 pages built clean (1 index + 7 module chapters).
- Dev server booted on a temporary port and spot-checked directly: `/`, `/modules/COMP-1812/`, `/modules/MATH-1198/` all `200`; a deliberately bad route (`/modules/DOES-NOT-EXIST/`) correctly `404`s.
- Course index HTML confirmed correct grouping and totals: 7 modules, 120 credits (45 + 30 + 45 across the three term groups, matching `SPEC.md`'s table), TOC sidebar ordered Term 1 → Term 1 and 2 → Term 2 with modules alphabetical by code within each group.

## Phase 2: Module content research

Status: complete (2026-08-29)

### Objective

Research all seven Year 0 modules per `docs/personal-research-guidelines.md` — authoritative sources only, cross-referenced, cited — covering for each module: what it actually teaches, prerequisite knowledge expected, key terminology, and recommended pre-reading, so Kartik has a real basic understanding before term starts.

### Outcomes

Research findings for each of the seven modules, with sources recorded, written directly into that module's chapter content (Phase 3 folded into the same pass — see below).

### Exit Criteria

Every module has researched overview, learning-outcome, key-topic, terminology, and prerequisite content, each claim traceable to at least one authoritative source; no fabricated syllabus detail.

### Completion Evidence

**Significant finding, surfaced to Kartik rather than papered over:** none of Kartik's supplied Year 0 codes (COMP-1766, COMP-1812, COMP-1820, COMP-1821, COMP-1822, MATH-1180) independently resolve on the University of Greenwich's public module catalog under that exact code. The closest verified matches, under identical titles, are consistently one code number lower on the standard pathway (COMP1765, COMP1811, COMP1819, COMP1820, COMP1821), MATH1179 stands in for MATH-1180 (MATH1180 itself belongs to an unrelated Year 2 module), and MATH-1198 could not be independently confirmed at all (one archived source described it as "code not yet assigned"). Every affected module's `overview` frontmatter field states this explicitly and names the closest verified source used, rather than presenting the content as if the codes matched cleanly. Kartik should confirm the exact Year 0 codes via his student portal or enrolment documents — that's the only fully authoritative source available, and it isn't one this project has access to.

Sources used per module (full citations in each file's `sources` frontmatter): Studocu-hosted Greenwich course/handbook pages for module descriptions and learning outcomes; Cisco Networking Academy and IETF RFC 1122 (COMP-1766); Python's official tutorial and MIT OCW 6.001/SICP (COMP-1812); MIT OCW 6.006 (COMP-1820); Stanford CS143 and MIT OCW 6.035 (COMP-1821); IEEE SWEBOK (COMP-1822); MIT OCW 6.042 (MATH-1180, MATH-1198); Greenwich's own module catalog page for the MATH1179/MATH1180/MATH1198 cross-reference.

## Phase 3: Populate chapter content

Status: complete (2026-08-29)

### Objective

Write Phase 2's research into each module's real content file (`src/content/modules/<code>.md`), replacing Phase 1's stub content.

### Outcomes

All seven chapters read as complete, structured study material — not placeholders. Written in the same pass as Phase 2's research rather than as a separate step, since each module's research was written straight into its content file as it was found.

### Exit Criteria

`npm run build` succeeds with all seven chapters populated; manual read-through confirms each chapter is coherent and useful as pre-course prep.

### Completion Evidence

All seven files under `src/content/modules/` (COMP-1766, COMP-1812, COMP-1820, COMP-1821, COMP-1822, MATH-1180, MATH-1198) populated with real overview, learning outcomes, key topics, key terms, prerequisites, resources, and sources — no stub content remaining.

Verified live, not assumed:

- `npx astro check` → 0 errors, 0 warnings, 0 hints (8 files).
- `npm run build` → 8 pages built clean (1 index + 7 module chapters).
- Dev server spot-checked directly: `/`, `/modules/COMP-1822`, `/modules/MATH-1180`, `/modules/MATH-1198` all `200`.
- `/modules/MATH-1180` HTML confirmed to render its `MATH1179` sourcing caveat; `/modules/COMP-1822` confirmed to render its `COMP1821` sourcing caveat.
- Course index confirmed still totalling 120 credits across all 7 modules after the content rewrite.

## Phase 4: Deep-dive content and original visualizations

Status: complete (2026-08-29)

### Objective

Kartik asked for more detail than Phase 2/3's concise, university-module-framed content — at a generic, GCSE-friendly tutorial level, matching the depth and accessibility of a site like GeeksforGeeks (his named example, its Programming Paradigms article specifically), plus embedded diagrams for visualization. Do this without the copyright/plagiarism exposure that literal scraping would carry: paraphrase and synthesize rather than reproduce source text, and author original diagrams rather than reuse anyone else's.

### Outcomes

Every module gained a new, additive "In Depth" section (existing official-module framing and sourcing caveats untouched) — several GCSE-friendly explainer sub-sections per module, written in Estuary's own words from cross-referenced tutorial-tier and academic research, each citing its sources with an explicit "paraphrased, not reproduced" note where relevant. Every module also gained one original SVG diagram, hand-authored for this project in the Nord Terminal palette, illustrating its core concept (OSI layers, paradigm tree, Big-O growth curves, compiler pipeline, SDLC cycle, set operations, a probability distribution).

### Exit Criteria

Content schema extended (`indepth`, `visuals`, optional `note` on `sources`) without breaking existing fields; all seven modules populated; `npm run build` succeeds; diagrams render as part of the static build; no source text reproduced verbatim from any cited site.

### Completion Evidence

Schema: `src/content.config.ts` — `indepth: {heading, body}[]` and `visuals: {src, alt, caption}[]` added, both defaulting to `[]`; `sources` gained an optional `note` field. Template: `src/pages/modules/[code].astro` renders an "In Depth" section (with an explicit paraphrase disclaimer) and a visuals block; `src/components/CourseShell.astro` gained matching Nord-palette CSS. Diagrams: seven original SVGs under `public/diagrams/`, one per module, each internally labelled "Original diagram for Estuary — not copied from any source." Content: all seven files under `src/content/modules/` gained 3-4 "In Depth" sub-sections each plus 2-3 additional cross-referenced tutorial-tier sources (Raspberry Pi Foundation's GCSE curriculum, GeeksforGeeks, freeCodeCamp, Tutorialspoint, Guru99, Atlassian, BMC, Cambridge/CMU/UW course notes — see each file's `sources` for the specific set).

Verified live, not assumed:

- `npx astro check` → 0 errors, 0 warnings, 0 hints (8 files).
- `npm run build` → 8 pages built clean; confirmed all 7 SVGs copied into `dist/diagrams/`.
- Preview server spot-checked directly: all 8 pages (`/` + 7 module chapters) and all 7 diagram URLs return `200`.
- HTML confirmed to contain the "In Depth" heading and the correct `<img>` reference for both a sampled COMP module (COMP-1812) and the networking module (COMP-1766); course index still totals 120 credits after the schema/content change.

## Phase 5: Polish and the deployment decision

Status: not started

### Objective

Accessibility/visual polish once the reading content is live and used for a while; revisit the deployment question Kartik is holding open (2026-08-29) — target (Cloudflare Workers, per the Loopwire precedent, unless Kartik says otherwise) and domain/subdomain.

### Outcomes

TBD — depends on what Phase 4 usage surfaces and Kartik's deployment call.

### Exit Criteria

TBD.

### Completion Evidence

TBD.
