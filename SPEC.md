# SPEC.md

What Estuary is and how it's built, not how to work on it (see `AGENTS.md`).

## Product Definition

Estuary is a static Astro e-reader website for Kartik to study, in a focused and structured way, ahead of starting **University of Greenwich course P12069, BSc (Hons) Computer Science** (Sandwich mode, 3 years, Year 0) on **14 September 2026**. It presents pre-course study material for the seven Year 0 modules as readable "chapters" — grouped by term — so Kartik has a basic working understanding of each subject before week one, without being overwhelmed.

## Course Context

- Course: P12069 BSc (Hons) Computer Science
- Mode of Study: Sandwich
- Course Duration: 3 years
- Course Year: 0
- Start date: 14 September 2026

| Module Code | Module Title | Term | Credits |
|---|---|---|---|
| COMP-1766 | Computer and Communication Systems | Term 1 (Sept–Dec) | 15 |
| COMP-1812 | Paradigms of Programming | Term 1 and 2 (Sept–April) | 30 |
| COMP-1820 | Algorithms and Data Structures | Term 2 (Jan–April) | 15 |
| COMP-1821 | Introduction to Compilers | Term 2 (Jan–April) | 15 |
| COMP-1822 | Principles of Software Engineering | Term 1 (Sept–Dec) | 15 |
| MATH-1180 | Mathematics for Computer Science | Term 1 (Sept–Dec) | 15 |
| MATH-1198 | Advanced Mathematics for Computer Science | Term 2 (Jan–April) | 15 |

## Goals / Non-Goals

**Goals:**

- Present each of the seven modules as a structured reading "chapter": overview, learning outcomes, key topics, terminology glossary, prerequisite knowledge, and recommended prep resources.
- Source every substantive claim from real research conducted per `docs/personal-research-guidelines.md` — authoritative, cross-referenced, cited in each chapter's `sources` list.
- Group chapters by term, matching the course structure above, so Kartik can sequence his own prep.
- Carry over the Nord palette and monospace visual language from `fjord/`'s "Nord Terminal" direction, reinterpreted as a book/chapter reading layout (top bar with course identity, a term-grouped table-of-contents sidebar, a reading pane, prev/next chapter navigation) rather than Fjord's file-browser panes.
- Follow Astro's architectural principles as demonstrated in `website-master` and `fjord` (content collections, static output, component-based layout, TypeScript) — same *style* of setup, deliberately different *scope and content model*.

**Non-goals:**

- No live `glob()` sourcing of files from elsewhere in the repo — unlike Fjord, Estuary's content is original research output, authored directly as markdown files in `estuary/src/content/modules/`.
- No interactivity beyond reading navigation this phase — no quizzes, flashcards, or progress tracking. Revisit only if Kartik asks once the reading content exists and is in use.
- No deployment/hosting configured yet. On hold (Kartik, 2026-08-29) until module content is complete; when it's time, follow Loopwire's actual live Cloudflare Workers setup (`docs/handoff.md`), not `website-master`'s own stale "Cloudflare Pages" docs.
- No content from `fjord/`, `website-master/`, or the other reference clones — Estuary's content is original module research, not a mirror of anything in this repo.
- No CMS, no server runtime, no database. Static output only.

## Architecture

- **Framework**: Astro, static output (`output: "static"`), TypeScript — matching `fjord` and `website-master`.
- **Content model**: an Astro content collection, `modules`, of real authored markdown files (one per module code) under `src/content/modules/`, validated by a Zod schema (`src/content.config.ts`) covering: `code`, `title`, `term`, `credits`, plus the chapter body itself (overview, learning outcomes, key topics, terminology, prerequisites, resources, sources — see Functional Requirements for exact shape).
- **Styling**: Nord palette carried over from Fjord's tokens (Polar Night `#2E3440`–`#3B4252`, Snow Storm `#D8DEE9`–`#ECEFF4`, Frost `#88C0D0`/`#81A1C1`/`#5E81AC`, Aurora `#EBCB8B`/`#A3BE8C`/`#BF616A`/`#B48EAD`), `JetBrains Mono` throughout, dark-only. Layout reinterprets the dwm-style top bar (course title + term progress instead of Fjord's group tabs) and swaps Fjord's three-pane file browser for a two-pane e-reader: a term-grouped table-of-contents sidebar, and a reading pane with prev/next chapter navigation at the foot.
- **Deployment**: none configured. Held open per Kartik's explicit hold (2026-08-29). Precedent when resumed: Cloudflare Workers + static assets (Loopwire's actual live setup), not Pages.

## Functional Requirements

- **Course index page**: lists all seven modules grouped by term, with module code, title, and credits; entry point into the reader.
- **Module chapter page**: renders one module's structured content — overview, learning outcomes, key topics, terminology glossary, prerequisites, recommended resources, and a sources/citations list — with consistent Nord Terminal-derived typography.
- **Navigation**: table-of-contents sidebar grouped by term (always visible), plus prev/next chapter links at the foot of each module page, sequenced by term then module code.
- **Theming**: Nord palette applied consistently across index and chapter pages — dark-only, monospace, matching Fjord's established tokens.

## Interfaces / Contracts

- **Content**: `src/content/modules/*.md`, one file per module code (e.g. `COMP-1766.md`), schema-validated.
- **No API, no backend.** Fully static output.
- **No config schema beyond `astro.config.mjs`** and the content-collection definition in `src/content.config.ts` (Astro 5 convention, same as Fjord).

## Testing & CI

Scoped down like Fjord's, since Estuary is a personal study tool, not a public production site yet:

- `astro check` for type/content-schema errors.
- A build smoke check (`npm run build`) confirming all seven module chapters render without error.
- Manual QA in the browser for visual/theme correctness and navigation.

No Playwright/Lighthouse/axe setup unless deployment later gets approved and a public-facing bar becomes relevant, matching Fjord's own stance.
