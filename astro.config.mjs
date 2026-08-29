import { defineConfig } from "astro/config";

// Estuary: pre-course study e-reader, forked from fjord's Nord Terminal
// visual language. Kartik authorized public deployment via Cloudflare Workers
// and confirmed the subdomain on 2026-08-29 (see estuary/TASKS.md).
export default defineConfig({
  site: "https://estuary.kartikpassbolt.org",
  output: "static",
  outDir: "./dist",
  markdown: {
    shikiConfig: {
      theme: "nord",
      wrap: true,
    },
  },
});
