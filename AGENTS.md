# AGENTS.md

Read this before every task in `estuary/`. `SPEC.md` is the product contract; this file covers how to work here. This project follows the root repo's own `AGENTS.md` conventions (phased docs, explicit-ask on structural decisions) — read that first for the workspace-wide rules; this file only covers what's specific to Estuary.

## What Estuary Is

A static Astro e-reader site for Kartik to study ahead of University of Greenwich course **P12069, BSc (Hons) Computer Science** (Sandwich, 3 years, Year 0, starting **14 September 2026**). It presents pre-course study material for the seven Year 0 modules — overview, learning outcomes, key topics, terminology, prerequisites, recommended prep resources — as readable "chapters," organized by term, in the Nord palette carried over from Fjord's visual language. See `SPEC.md` for the full contract.

## Non-Negotiables (rules that override the rest)

1. **Estuary is a fork-by-inspiration of `fjord/`, not a copy of its code.** Fjord's live-doc-reading logic (content collections pointed at external repo paths via `glob()`) does not apply here — Estuary's module content is authored directly as real files inside `estuary/src/content/`, since it's original research output, not a live mirror of files living elsewhere. Only the Nord Terminal visual language (palette, JetBrains Mono, dwm-style chrome) carries over, reinterpreted for a book/chapter reading layout instead of Fjord's ranger-style file browser.
2. **Never hand-edit `fjord/` or `website-master/` while working on Estuary.** Both are read-only reference here: Fjord for design tokens/patterns, `website-master` for Astro/Cloudflare deployment conventions. Per root `AGENTS.md` non-negotiable 1.
3. **Module content must be real research, not fabricated.** Every claim in a module's chapter — topics, terminology, prerequisites — must trace to an authoritative source per `docs/personal-research-guidelines.md`, with sources recorded in that module's `sources` frontmatter. No invented syllabus detail standing in for a source that wasn't actually found.
4. **No deployment config until Kartik says so.** He's holding that decision (2026-08-29) until module content is built out. Don't add hosting config, a live URL, or a `deploy` script without his explicit go-ahead. When he does give it, `docs/handoff.md`'s record of Loopwire's actual live setup (Cloudflare Workers + static assets, `wrangler deploy`, native Git-integrated Workers Builds — not Pages, despite `website-master`'s own stale docs still saying Pages) is the precedent to follow, not `website-master`'s own docs.
5. Ask before a decision only Kartik can make (deployment target/domain, module content scope beyond the seven listed, any structural change to the module schema). Don't guess and proceed on those.

## Repository Map

- `SPEC.md`: what Estuary is, its architecture, functional requirements.
- `ROADMAP.md`: ordered phases for this sub-project.
- `TASKS.md`: active-phase detail only.
- `src/content/modules/`: one markdown file per Year 0 module, real authored content.
- `src/`, `astro.config.mjs`, `package.json`: the Astro project itself.

## Sources of Truth

- `SPEC.md`: update only when the actual goal changes.
- `ROADMAP.md` / `TASKS.md`: phase order and active-phase detail, same convention as the root repo and Fjord.
- The root repo's `AGENTS.md`: workspace-wide rules apply here too.
- `docs/personal-research-guidelines.md`: the sourcing/quality bar for every module content claim.

## Conventions

Astro + TypeScript, matching `website-master`'s and Fjord's stack choice. Markdown throughout for module content. No filler, no unverified claims about what's "done" — same standard as the root repo.

## Change Discipline

- Check what's already on disk in `estuary/` before writing.
- Small, targeted file writes, one reviewable phase at a time.
- Never touch `fjord/` or `website-master/` from this project's work.

## Validation

Confirm a write succeeded via the tool's own result. Once the Astro project exists, `npm run dev` booting without error and `astro check` clean is the baseline check before each phase is called done.

## Completion Criteria

Matches `SPEC.md`. Every claim about what's built, working, or researched is verified — a working build, or a real source — not assumed.

## Project Learnings

- Estuary forked from Fjord's halted state (2026-08-29): Fjord's `TASKS.md` explicitly recorded Kartik's intent to "fork this same structure for a separate, University-focused idea... starting fresh in a future session" — this project is that fork, started same-day once Kartik confirmed.
- Kartik picked the name "Estuary" himself (2026-08-29), continuing Fjord's geography-of-water naming without colliding with the Nord palette name.
- Six build/deploy approaches were presented (new directory vs. repurposing Fjord in place; Cloudflare Workers vs. Pages; shell-first vs. content-first build order); Kartik picked new directory + shell-first, deployment target implicitly leaning Workers (per Loopwire precedent) but the actual decision and domain are held open.
