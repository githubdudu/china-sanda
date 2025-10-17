# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15.5 website for China Sanda Club (世界一流的散打搏击俱乐部), a martial arts club. The project is currently in early development stages, following a phased approach from static content to dynamic CMS integration with Sanity.io.

## Development Commands

### Primary Development Workflow
- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Production build with Turbopack
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint checks
- `pnpm lint:fix` - Auto-fix ESLint issues
- `pnpm lint:strict` - Strict linting with zero warnings allowed

### Package Management
This project uses **pnpm** as the package manager.

## Code Style & Linting

### ESLint Configuration (eslint.config.mjs)
This project has strict linting rules. Key requirements:

**TypeScript:**
- Type checking is handled by the TypeScript compiler (via `tsconfig.json` strict mode)
- ESLint focuses on code style and best practices, not type safety

**Import Organization:**
- Imports MUST be ordered: react → next → external → internal → parent → sibling
- Alphabetized within groups
- Newlines between import groups required
- Default exports are discouraged (warned against)
- Prefer top-level type imports

**React & Component Standards:**
- Function components MUST use arrow functions: `const Component = (): JSX.Element => { ... }`
- No array index as key
- No `any` in prop types
- All accessibility rules enforced (jsx-a11y)

**Code Quality Constraints:**
- Max cyclomatic complexity: 10
- Max file length: 500 lines (excluding blanks/comments)
- Max function length: 100 lines
- Max parameters: 4
- Max line length: 100 characters
- Max nesting depth: 4
- No `console.log()` (only `console.warn()` and `console.error()` allowed)
- Double quotes required for strings
- 2-space indentation
- Semicolons required

**Important:** When creating or editing files, expect many ESLint violations initially. Run `pnpm lint:fix` frequently during development.

## Architecture

### Tech Stack
- **Framework:** Next.js 15.5 with App Router
- **React:** 19.1.0
- **Styling:** Tailwind CSS v4
- **TypeScript:** Strict mode enabled
- **Build Tool:** Turbopack (via `--turbopack` flag)
- **Font Loading:** next/font with Geist Sans & Geist Mono

### Project Structure (Planned per DEV.md)
```
chinasanda/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with fonts
│   ├── page.tsx           # Home page
│   ├── coaches/           # Planned: Coaches page
│   ├── classes/           # Planned: Classes/schedule page
│   ├── pricing/           # Planned: Pricing plans
│   ├── gallery/           # Planned: Photo gallery
│   └── contact/           # Planned: Contact form
├── components/            # Planned: Reusable React components
│   ├── Header.tsx        # Planned: Site header/nav
│   ├── Footer.tsx        # Planned: Site footer
│   ├── CoachCard.tsx     # Planned: Coach profile card
│   ├── ClassSchedule.tsx # Planned: Class schedule display
│   ├── PricingTable.tsx  # Planned: Pricing plans table
│   ├── GalleryGrid.tsx   # Planned: Gallery grid
│   └── ContactForm.tsx   # Planned: Contact form
├── data/                  # Planned: Static data files (pre-CMS)
│   ├── coaches.ts        # Planned: Coach data
│   ├── classes.ts        # Planned: Class/schedule data
│   ├── pricing.ts        # Planned: Pricing plans
│   └── gallery.ts        # Planned: Gallery metadata
├── lib/                   # Planned: Utility functions
└── public/               # Static assets (images, etc.)
```

### TypeScript Configuration
- Path alias: `@/*` maps to root directory
- Target: ES2017
- Strict mode enabled
- Module resolution: bundler

### Development Phases (from DEV.md)

**Current Status:** Phase 1 (Quick Deploy) - Initial deployment complete

**Upcoming Phases:**
1. **Phase 2:** Foundation & Setup (ESLint complete, components needed)
2. **Phase 3:** Core Pages & Components (build main structure)
3. **Phase 4:** Content & Static Data (populate with static data files)
4. **Phase 5:** Features & Optimization (SEO, forms, performance)
5. **Phase 6:** Sanity.io CMS Integration (dynamic content)

### Data Architecture Philosophy
- Start with **static TypeScript data files** in `data/` directory
- Structure data to match planned Sanity schemas for easy migration
- Components should accept data via props (works with both static and CMS data)
- Keep data structures consistent throughout migration phases

### Future CMS Integration (Sanity.io)
When implementing Sanity integration:
- Coach schema: name, bio, photo, specialties, experience
- Class schema: name, description, schedule, level, capacity, instructor
- Pricing schema: planName, price, currency, duration, features, highlighted
- Gallery schema: image, title, description, category, date

Use Incremental Static Regeneration (ISR) for CMS-backed pages.

## Key Guidelines

### Component Creation
- MUST use arrow function syntax for all components
- Follow strict import ordering rules
- Avoid default exports (use named exports where possible; Next.js pages excepted)
- TypeScript type annotations enforced by compiler (tsconfig.json strict mode)

### Working with Next.js App Router
- Page files (`page.tsx`) require default exports (Next.js requirement)
- Component files should prefer named exports
- Metadata exports for SEO in page files

### Accessibility
All JSX must meet strict a11y requirements:
- Images must have meaningful alt text
- Links must have content or aria-labels
- Interactive elements need keyboard handlers
- Form labels must be properly associated

### Development Workflow Tips
1. Make changes incrementally
2. Run `pnpm lint` frequently to catch style violations early
3. Use `pnpm lint:fix` to auto-fix formatting issues
4. Run `pnpm build` to catch TypeScript type errors
5. Test builds before committing major changes

## Git & Deployment

- **Main Branch:** master
- **Hosting:** Vercel
- **Build Command:** `pnpm build`
- **Development:** Continuous deployment from master branch
