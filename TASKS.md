# TASKS.md

Implementation detail for the active phase only. See `ROADMAP.md` for phase order.
Replace this file's contents when the phase completes, don't accumulate history.

## Active Phase: Phase 5 — Polish and the deployment decision

Phases 0-4 are complete: all seven Year 0 modules have real, sourced content
(both the concise official-module framing and a deeper, GCSE-friendly "In
Depth" section with an original diagram each), and the site builds and
renders clean (`astro check` 0/0/0, `npm run build` 8 pages, preview-server
spot-checks all 200 including every diagram).

Kartik gave the go-ahead to deploy via Cloudflare Workers on 2026-08-29
(citing Loopwire's low real public traffic as his risk tolerance). Deployment
prep is underway; the remaining blockers are on Kartik, not on implementation:

- Deploy config prepared and validated: `wrangler.jsonc` (Workers + static
  assets, no `main` — matches Loopwire's precedent), `package.json`'s `deploy`
  script (`astro build && wrangler deploy`). `npx wrangler deploy --dry-run`
  confirmed clean (26 files read from `dist/`, no errors) after fixing one
  invalid option (`assets.binding` only applies when a Worker script accesses
  assets programmatically; a pure static site can't declare it).
- **Blocked on Kartik — subdomain confirmation.** Proposed default:
  `estuary.kartikpassbolt.org`, matching the existing loopwire/search/trilium/
  vault/adguardhome convention on the same zone (`docs/cloudflare-zone-settings.md`).
  Not assumed or written into `astro.config.mjs`'s `site` field yet.
- **Blocked on Kartik — repo structure.** Unclear whether Estuary deploys from
  this monorepo (Workers Builds root directory = `estuary/`) or needs its own
  repo, matching however Loopwire (`personal-website`) actually is set up —
  that project isn't present in this local checkout to check directly.
- **Blocked on Kartik — `wrangler` authentication.** `wrangler whoami` confirms
  this shell isn't logged in. Either Kartik runs `wrangler login` himself in
  his own terminal, supplies a `CLOUDFLARE_API_TOKEN`, or runs
  `npm run deploy` himself following a short runbook.
- Custom domain attachment (Workers & Pages → estuary → Settings → Domains &
  Routes) is dashboard-only; per the precedent already recorded for this same
  Cloudflare account (2FA, Hotlink Protection, HSTS preload all left to
  Kartik), this should be his action too, not attempted via browser automation.
- Whether the module-code discrepancy found during Phase 2 (see `ROADMAP.md`
  Phase 2 Completion Evidence) changes anything — e.g. if Kartik confirms
  different exact codes from his student portal, the affected content files'
  `code` frontmatter and sourcing-caveat text would need a follow-up pass.
- Any accessibility/visual polish, which Kartik hasn't asked for yet and this
  file won't invent ahead of him actually using the site.

## Phase Completion

1. Record delivered behavior here or in a changelog if one gets started.
2. Update `ROADMAP.md` status and evidence.
3. Replace this file with the next phase's tasks once there is one.
