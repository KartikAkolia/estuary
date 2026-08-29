# TASKS.md

Implementation detail for the active phase only. See `ROADMAP.md` for phase order.
Replace this file's contents when the phase completes, don't accumulate history.

## Active Phase: Phase 5 — Polish and the deployment decision

Deployment is done and verified live (2026-08-29):

- Repo: `KartikAkolia/estuary` on GitHub, public (Kartik made it public 2026-08-29,
  after initially setting it private to match this monorepo's own convention).
- Hosting: Cloudflare Workers + static assets, connected to Workers Builds for
  git-integrated auto-deploy on push to `main` — Kartik connected the repo and
  ran the first deploy himself.
- Live at both `https://estuary.kartikpassbolt.org` (custom domain, already
  attached) and the `https://estuary.neerajakolia006.workers.dev` fallback.
  Both verified directly via `curl`: `/`, `/modules/COMP-1812/`, and a sampled
  diagram all return `200`; the custom domain's `/` was confirmed to render
  the real page title, not a placeholder.

What's left in this phase is polish only, none of it requested yet:

- Accessibility/visual polish once Kartik's actually used the site for a
  while — nothing specific asked for so far, so this file won't invent tasks
  ahead of him.
- Whether the module-code discrepancy found during Phase 2 (see `ROADMAP.md`
  Phase 2 Completion Evidence) changes anything — e.g. if Kartik confirms
  different exact codes from his student portal, the affected content files'
  `code` frontmatter and sourcing-caveat text would need a follow-up pass.

## Phase Completion

1. Record delivered behavior here or in a changelog if one gets started.
2. Update `ROADMAP.md` status and evidence.
3. Replace this file with the next phase's tasks once there is one.
