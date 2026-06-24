# Codex Instructions

## Verification Policy

This is a lightweight docs/Next.js/Nextra app. Do not run a full build after every change by default.

Use judgment:

- Prose-only MDX/README edits: do not run `npm run build`.
- Small content/link edits: inspect the changed files and mention that no build was needed.
- Sidebar, route, frontmatter, import, layout, config, dependency, or `next.config` changes: run a targeted check, and run one build at the end only if risk warrants it.
- Base path, Nextra config, dependency resolution, or stale `.next` runtime errors: run `npm run build` and route checks.
- In final responses, say whether verification was skipped and why.
