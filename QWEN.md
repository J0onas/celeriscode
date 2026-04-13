# QWEN.md — Celeris Code Project Context

## Project Overview

**Celeris Code** is a modern digital agency website built with [Astro](https://astro.build/). It serves as a marketing and portfolio site showcasing the agency's services, case studies, blog content, and contact information. The agency specializes in landing pages, multipage websites, ecommerce platforms, and SaaS products with a strong focus on UI/UX and conversion optimization.

### Key Characteristics
- **Framework:** Astro 6.x (static site generation)
- **UI Integration:** React 19 (for interactive components)
- **Styling:** Tailwind CSS v4 with custom dark/light theme support
- **Language:** TypeScript (strict mode)
- **Content Management:** Astro Content Collections with Markdown-based content (services, cases, blog posts)
- **Design System:** Custom bento-card layout components, aurora gradient backgrounds, and glassmorphism effects

### Architecture

```
/
├── public/              # Static assets (images, favicon, etc.)
├── src/
│   ├── assets/          # Imported assets (images, etc.)
│   ├── components/      # UI components (sections/, ui/)
│   ├── content/         # Markdown content collections
│   │   ├── blog/        # Blog posts
│   │   ├── cases/       # Portfolio case studies
│   │   └── services/    # Service descriptions
│   ├── layouts/         # Page layouts (MainLayout.astro)
│   ├── pages/           # Route-based pages
│   │   ├── index.astro  # Homepage
│   │   ├── contacto.astro
│   │   ├── nosotros.astro
│   │   ├── blog/        # Blog listing + individual posts
│   │   ├── portafolio/  # Portfolio pages
│   │   └── servicios/   # Services pages
│   ├── styles/          # Global CSS (Tailwind + custom utilities)
│   └── content.config.ts # Content collection schemas
├── astro.config.mjs     # Astro configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Dependencies and scripts
```

## Building and Running

All commands are run from the project root in a terminal. **Requires Node.js >= 22.12.0.**

| Command                | Action                                            |
| :--------------------- | :------------------------------------------------ |
| `npm install`          | Install dependencies                              |
| `npm run dev`          | Start local dev server at `localhost:4321`        |
| `npm run build`        | Build production site to `./dist/`                |
| `npm run preview`      | Preview production build locally                  |
| `npm run astro ...`    | Run Astro CLI commands (e.g., `astro add`, `astro check`) |

## Content Collections

The site uses three content collections defined in `src/content.config.ts`:

### Services (`src/content/services/`)
Markdown files describing each service offering.
**Schema fields:** `title`, `description`, `icon`, `order`, `ctaText`, `highlight`, `deliverables`, `idealFor`, `pricingHint`, `duration`

### Cases (`src/content/cases/`)
Portfolio case studies with project details.
**Schema fields:** `title`, `client`, `industry`, `projectType` (landing-page | multipage | ecommerce | saas), `date`, `image`, `url`, `tags`, `summary`, `isFeatured`, `results`, `stack`

### Blog (`src/content/blog/`)
Blog articles about design, UX, and digital growth.
**Schema fields:** `title`, `excerpt`, `description`, `date`, `author`, `tags`, `cover`, `isFeatured`, `readingTime`

## Design System

### Color Palette (defined in `src/styles/global.css`)
- **Primary Deep:** `#0b1220` (dark background)
- **Primary Vibrant:** `#38bdf8` (sky blue accent)
- **Accent:** `#8b5cf6` (purple accent)
- **Success:** `#14b8a6` (teal)

### Theme Support
The site supports **dark mode (default)** and **light mode** via the `data-theme` attribute on `:root`. Theme toggling is handled through CSS custom properties and extensive override rules.

### Component Classes
- `.bento-card` — Glassmorphic card with backdrop blur, border, and hover effects
- `.bento-card-premium` — Elevated card variant with larger padding
- `.section-title` / `.section-subtitle` — Heading styles
- `.pill` — Rounded badge/chip component
- `.content-rich` — Rich text content styling (for rendered Markdown)
- `.gradient-text` — Gradient text effect (different gradients per theme)
- `.text-technical` — Monospace, uppercase, small text for labels
- `.aurora-blue/purple/teal` — Blurred radial gradient backgrounds
- `.float-slow` — Floating animation (7s ease-in-out)

### Typography
- **Sans-serif:** Geist Sans, Inter, system UI
- **Mono:** Geist Mono, JetBrains Mono

## Development Conventions

- **TypeScript strict mode** is enforced via `astro/tsconfigs/strict`
- **JSX configuration:** `react-jsx` with `react` import source (for React components within Astro)
- **Component structure:** Astro components (`.astro` files) for layouts and sections; React components can be used within Astro pages via the `@astrojs/react` integration
- **Content-driven pages:** Services, cases, and blog posts are stored as Markdown files in `src/content/` and loaded via Astro's content collections API with Zod schema validation
- **Styling approach:** Tailwind CSS v4 utility classes + custom CSS classes in `global.css` for design system primitives; CSS custom properties for theming
- **Page routing:** File-based routing in `src/pages/` — each `.astro` or `.md` file becomes a route based on its filename

## Key Files

| File | Purpose |
| :--- | :------ |
| `astro.config.mjs` | Astro configuration with React integration and Tailwind Vite plugin |
| `src/content.config.ts` | Content collection definitions with Zod schemas |
| `src/layouts/MainLayout.astro` | Primary layout wrapper for all pages |
| `src/pages/index.astro` | Homepage — aggregates services, portfolio, process, blog, and CTA |
| `src/styles/global.css` | Tailwind imports, theme variables, component classes, and dark/light overrides |
| `tsconfig.json` | TypeScript config extending Astro's strict preset |

## Notable Patterns

1. **Portfolio ordering:** The homepage uses a manual `portfolioOrder` array to curate the display order of case studies, separate from date-based sorting.
2. **Service icons:** Services use inline SVG icons mapped by icon name (`rocket`, `layers`, `cart`, `spark`) via an `iconByService` dictionary.
3. **Glassmorphism:** Cards use `backdrop-blur-xl`, semi-transparent backgrounds, and subtle inner shadows for a frosted glass effect.
4. **Background gradients:** The body background uses layered radial gradients for an aurora-like visual effect.
5. **Noise texture:** A subtle noise overlay is applied via `::before` pseudo-element for visual depth.
