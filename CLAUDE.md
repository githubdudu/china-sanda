# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15.5 website for China Sanda Club (世界一流的散打搏击俱乐部), a martial arts club. The project is currently in early development stages, following a phased approach from static content to dynamic CMS integration with Sanity.io.

## Development Commands

### Primary Development Workflow
- `npm run dev` - Start development server with Turbopack
- `npm run build` - Production build with Turbopack
- `npm start` - Start production server
- `npm run lint` - Run ESLint checks
- `npm run lint:fix` - Auto-fix ESLint issues

### Package Management
This project uses **npm** as the package manager.

## Code Style & Linting

### ESLint Configuration (eslint.config.mjs)
This project uses a comprehensive ESLint setup with the following configurations:
- **eslint:recommended** - Core ESLint recommended rules
- **@stylistic/eslint-plugin** - Code style and formatting rules
- **next/core-web-vitals** - Next.js best practices
- **next/typescript** - TypeScript-specific Next.js rules

**TypeScript:**
- Type checking is handled by the TypeScript compiler (via `tsconfig.json` strict mode)
- ESLint focuses on code style and best practices, not type safety

**Stylistic Rules** (via @stylistic/eslint-plugin):
- Double quotes required for strings
- 2-space indentation
- Semicolons required
- JSX support enabled
- Arrow parentheses required

**Custom Rules** (eslint.config.mjs:36-39):
- `@stylistic/multiline-ternary`: "always-multiline" with `ignoreJSX: true` exception
  - Allows JSX ternaries on single line for better readability

**Important:** When creating or editing files, expect many ESLint violations initially. Run `npm run lint:fix` frequently during development.

## Architecture

### Tech Stack
- **Framework:** Next.js 15.5 with App Router
- **React:** 19.1.0
- **Styling:** Tailwind CSS v4
- **TypeScript:** Strict mode enabled
- **Build Tool:** Turbopack (via `--turbopack` flag)
- **Font Loading:** next/font with Geist Sans & Geist Mono
- **Theme Management:** next-themes v0.4.6 (dark/light mode with system preference support)

### Project Structure
```
chinasanda/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # ✅ Root layout with fonts, ThemeProvider, Header, Footer
│   ├── page.tsx           # ✅ Home page with Hero component
│   ├── globals.css        # ✅ Tailwind config + component layer styles
│   ├── coaches/           # Planned: Coaches page
│   ├── classes/           # Planned: Classes/schedule page
│   ├── pricing/           # Planned: Pricing plans
│   ├── gallery/           # Planned: Photo gallery
│   └── contact/           # Planned: Contact form
├── components/            # Reusable React components
│   ├── Header.tsx        # ✅ Responsive header with nav, mobile menu & active state
│   ├── Hero.tsx          # ✅ Hero section with background image & bilingual headings
│   ├── Footer.tsx        # ✅ Site footer with About, Quick Links, Contact info
│   ├── ThemeProvider.tsx # ✅ next-themes wrapper component
│   ├── ThemeToggle.tsx   # ✅ Dark/light theme toggle button
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
└── public/               # Static assets
    ├── logo.jpeg         # ✅ Club logo image
    └── hero-bg.png       # ✅ Hero section background image
```

### TypeScript Configuration
- Path alias: `@/*` maps to root directory
- Target: ES2017
- Strict mode enabled
- Module resolution: bundler

### Theme System (next-themes)

The project implements a comprehensive dark/light theme system:

**Components:**
- `ThemeProvider.tsx` - Wraps the app in `<ThemeProvider>` (in app/layout.tsx:34-37)
- `ThemeToggle.tsx` - Toggle button component for switching themes
- Uses `next-themes` library for seamless theme management

**Configuration:**
- Attribute: `class` (applies `.dark` class to `<html>` element)
- Default theme: `dark`
- System preference support: Enabled
- Hydration safe: Prevents flash of unstyled content

**CSS Variables (app/globals.css):**
- Light mode: Defined in `:root` selector
- Dark mode: Defined in `.dark` class and `@media (prefers-color-scheme: dark)`
- Custom properties: `--background`, `--foreground`, `--primary`, `--secondary`, etc.
- Tailwind integration: Custom properties mapped to Tailwind colors via `@theme inline`

**Usage in Components:**
```tsx
import { ThemeToggle } from "./ThemeToggle";

// Use the toggle button
<ThemeToggle />
```

### Development Phases (from DEV.md)

**Current Status:** Phase 2 (Foundation & Setup) - In Progress

**Completed:**
- Phase 1: Quick Deploy - Initial deployment complete
- ESLint configuration with @stylistic/eslint-plugin
- Header component with responsive navigation
- Dark/light theme system with next-themes
- Active navigation state with conditional underline styling
- Hero component with bilingual headings and background image
- Footer component with site navigation and contact information

**In Progress:**
- Additional core components (ContactForm, CoachCard, ClassSchedule, etc.)

**Upcoming Phases:**
1. **Phase 3:** Core Pages & Components (build main structure)
2. **Phase 4:** Content & Static Data (populate with static data files)
3. **Phase 5:** Features & Optimization (SEO, forms, performance)
4. **Phase 6:** Sanity.io CMS Integration (dynamic content)

### Data Architecture Philosophy
- Start with **static TypeScript data files** in `data/` directory
- Structure data to match planned Sanity schemas for easy migration
- Components should accept data via props (works with both static and CMS data)
- Keep data structures consistent throughout migration phases

### Tailwind CSS Customization

**Custom CSS Variables** (defined in app/globals.css:1-46):
- Traditional Chinese Red: `--primary` (#dc2626 light, #df3b3b dark)
- Gold Accent: `--secondary` (#f59e0b light, #fbbf24 dark)
- Background/Foreground colors with dark mode support
- Semantic colors: success, warning, error, info

**Component Layer Classes** (@layer components in app/globals.css:92-111):

Five reusable component classes have been created:

1. **`.nav-link`** - Navigation link styling
   - Medium font weight
   - Foreground text color
   - Hover: background changes to primary/80, text to background color
   - Rounded corners with smooth transitions

2. **`.nav-link-active`** - Active navigation link indicator
   - Underline decoration (2px thickness)
   - Underline offset of 4 units for better spacing
   - Primary color (Chinese red) for visual emphasis
   - Applied conditionally via `usePathname` hook in Header.tsx

3. **`.btn-primary`** - Primary button styling
   - Primary background with dark hover state
   - Background-colored text
   - Medium font weight, centered text
   - Shadow effects (md → lg on hover)

4. **`.btn-secondary`** - Secondary button styling
   - Transparent with foreground/50 border
   - Hover: subtle background (foreground/5)
   - Focus ring with primary color

5. **`.hero-overlay`** - Hero section background overlay
   - Gradient overlay for text readability over background images
   - Light mode: subtle white gradient (from transparent to semi-transparent)
   - Dark mode: darker black gradient for better contrast
   - Compatible with both manual toggle and system preference

**Usage:**
```tsx
<Link className="px-4 py-2 nav-link">Home</Link>
<Link className={`px-4 py-2 nav-link ${isActive ? "nav-link-active" : ""}`}>Active Page</Link>
<button className="px-6 py-2 btn-primary">Submit</button>
<button className="p-2 btn-secondary">Cancel</button>
<div className="hero-overlay" />
```

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

**Client Components:**
When creating interactive components that use React hooks or browser APIs:
- Add `"use client";` directive at the top of the file
- Required for: `useState`, `useEffect`, `useTheme` (next-themes), event handlers
- Examples: Header.tsx (uses `useState`), ThemeToggle.tsx (uses `useTheme`, `useEffect`)
- Not required for: Server components (default in Next.js App Router)

**Import Ordering:**
1. React imports (`"use client"` if needed, then `import`)
2. Third-party library imports
3. Next.js specific imports (next/link, next/image, etc.)
4. Local component imports
5. Type imports (if separated)

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
2. Run `npm run lint` frequently to catch style violations early
3. Use `npm run lint:fix` to auto-fix formatting issues
4. Run `npm run build` to catch TypeScript type errors
5. Test builds before committing major changes

## Git & Deployment

- **Main Branch:** master
- **Hosting:** Vercel
- **Build Command:** `npm run build`
- **Development:** Continuous deployment from master branch
