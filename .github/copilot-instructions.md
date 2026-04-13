# Copilot Instructions for Celeris Code

## Build, check, and preview commands
- `npm install` - Install dependencies (required before any Astro command).
- `npm run dev` - Start the Astro dev server.
- `npm run build` - Build production output into `dist/`.
- `npm run preview` - Serve the built site locally.
- `npm run astro -- check` - Run Astro/TypeScript/content diagnostics.
- Node.js `>=22.12.0` is required (`package.json` engines).
- There are currently no dedicated `test` or `lint` scripts in `package.json`.
- Single-test execution is not available yet because no test runner is configured in this repository.

## High-level architecture
- This is an Astro multipage site with shared framing in `src/layouts/MainLayout.astro`. The layout imports `src/styles/global.css`, renders `Header`, and centralizes SEO defaults via `title`, `description`, and optional `image`.
- Routes mix static Astro pages (`index`, `contacto`, `nosotros`, `servicios/index`, `portafolio/index`, `blog/index`) with dynamic content routes: `src/pages/servicios/[slug].astro` and `src/pages/blog/[slug].astro`.
- Content-driven pages come from Astro Content Collections in `src/content.config.ts` (`services`, `cases`, `blog`) backed by markdown in `src/content/services/*.md`, `src/content/cases/*.md`, and `src/content/blog/*.md`.
- Listing pages use `getCollection(...)`, while dynamic detail pages use `getStaticPaths()` + `render(entry)`.
- `src/pages/index.astro` and `src/pages/portafolio/index.astro` both use a manual `portfolioOrder` array; case markdown file IDs are the join key, so slug changes must be reflected in both places.
- Service icon rendering is hardcoded via `iconByService` maps in `src/pages/index.astro`, `src/pages/servicios/index.astro`, and `src/pages/servicios/[slug].astro`; new icon keys in markdown frontmatter must be added to all maps.
- Theme behavior is split across layout/header scripts: `MainLayout` sets initial `data-theme` before paint, and `Header` toggles theme, swaps light/dark logo assets, and updates `meta[name="theme-color"]`.
- The workspace includes Playwright MCP config in `.vscode/mcp.json` for browser automation workflows in Copilot-enabled tools.
- Styling is Tailwind CSS v4 through Vite (`astro.config.mjs` + `@tailwindcss/vite`), with project tokens and custom utilities in `src/styles/global.css` (`@theme`, aurora utilities, bento card variants).
- Build output is static (`astro build` generates static routes into `dist/`), so avoid introducing server-only runtime dependencies unless project config is intentionally changed.
- React integration is enabled in Astro config and dependencies, but the current implementation is mostly `.astro` components.

## Key project conventions
- Keep Spanish copy by default (`<html lang="es">`), matching existing page content and labels.
- Keep brand voice consistent with existing docs/content: "Engineering Digital Dominance" and a conversion-focused narrative around high-performance digital assets.
- Keep the core offer taxonomy aligned with project content and brand docs: Landing Page, Multipage, Ecommerce, and SaaS.
- Use `MainLayout` for page-level consistency and always pass route-specific `title` and `description`; pass `image` when a page needs a non-default social card image (e.g., blog detail pages).
- Slugs are content-driven IDs:
  - Services: links use `/servicios/${service.id}`.
  - Blog: links use `/blog/${post.id}`.
  - Portfolio curation depends on `cases` IDs listed in `portfolioOrder`.
- Keep content frontmatter aligned with collection schemas in `src/content.config.ts` (for example: `cases.projectType` is enum-constrained, `cases.date`/`blog.date` are dates, and `services.ctaText` is expected in service CTAs).
- Preserve enum/label coupling used in pages: `cases.projectType` values (`landing-page`, `multipage`, `ecommerce`, `saas`) are mapped to UI labels in both home and portfolio routes.
- Preserve the conversion CTA pattern already used across sections: **"Impulsa tu Proyecto"** in key navigation/section endpoints.
- Follow the project component split from existing code and docs:
  - `src/components/sections/` for page sections/organisms.
  - `src/components/ui/` for smaller reusable UI atoms.
- Reuse established design tokens/utilities (`primary-deep`, `primary-vibrant`, `accent`, `aurora-*`, `bento-card`, `bento-card-premium`, `pill`, `section-title`) instead of introducing ad hoc style values.
