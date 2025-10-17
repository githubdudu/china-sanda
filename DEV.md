# Sanda Club Website - Development Roadmap

## Project Overview
Building a modern, SEO-optimized website for a Sanda Club using Next.js and Vercel, with plans to integrate Sanity.io CMS for dynamic content management. The site will showcase coaches, classes, pricing, and gallery content.

## Tech Stack
- **Frontend Framework**: Next.js 14+
- **Styling**: Tailwind CSS
- **Hosting**: Vercel
- **CMS (Future)**: Sanity.io
- **Package Manager**: npm/yarn/pnpm

## Project Goals
- Create a professional, responsive website for the Sanda Club
- Showcase coaches and their expertise
- Display classes and schedule information
- Present pricing plans clearly
- Feature photo gallery
- Implement SEO best practices
- Prepare architecture for future CMS integration with Sanity.io
- Enable easy content updates without code changes (post-Sanity integration)

---

## Development Phases

### Phase 1: Quick Deploy (Init & Immediate Deployment)
**Goal**: Get a live site deployed to Vercel immediately for testing and continuous deployment

- [ ] Initialize Next.js project with App Router
- [ ] Setup Tailwind CSS configuration
- [ ] Create basic project folder structure
- [ ] Create basic layout wrapper (Header, Footer, Navigation placeholder)
- [ ] Create placeholder home page
- [ ] Initialize Git repository and push to GitHub
- [ ] Connect repository to Vercel
- [ ] Deploy to Vercel (get live URL)
- [ ] Configure custom domain (if ready)
- [ ] Setup environment variables in Vercel

### Phase 2: Foundation & Setup
**Goal**: Establish solid project infrastructure and structure

- [ ] Setup ESLint and Prettier
- [ ] Optimize folder structure (components, data, lib, public organization)
- [ ] Create Header/Navigation component (functional)
- [ ] Create Footer component (functional)
- [ ] Setup static data files structure

### Phase 3: Core Pages & Components
**Goal**: Build the main page structure and reusable components

**Pages to Create**:
- [ ] Home page with hero section
- [ ] Coaches page with coach cards
- [ ] Classes page with schedule
- [ ] Pricing page with pricing plans
- [ ] Gallery page with photo grid
- [ ] Contact page with form

**Components to Build**:
- [ ] CoachCard component
- [ ] ClassSchedule component
- [ ] PricingTable component
- [ ] GalleryGrid component
- [ ] ContactForm component
- [ ] Hero section
- [ ] Navigation menu (full implementation)
- [ ] Footer with links

### Phase 4: Content & Static Data
**Goal**: Populate the site with static content data files

**Content Structure** (Static for now):
- [ ] Create data files for coaches (coaches.ts with TypeScript constants)
- [ ] Create data files for classes (classes.ts with schedule data)
- [ ] Create data files for pricing (pricing.ts with pricing plans)
- [ ] Create data files for gallery (gallery.ts with gallery items metadata)
- [ ] Connect components to static data

### Phase 5: Features & Optimization
**Goal**: Implement interactive features and optimize for performance and SEO

**SEO Optimization**:
- [ ] Add meta tags (title, description, og:image, etc.)
- [ ] Implement JSON-LD structured data
- [ ] Create sitemap.xml
- [ ] Add robots.txt
- [ ] Setup next-seo package (optional but recommended)

**Forms & Interactivity**:
- [ ] Build contact form with validation
- [ ] Setup email service (Nodemailer, SendGrid, or Vercel functions)
- [ ] Add form error handling and success messages
- [ ] Implement responsive mobile navigation

**Performance**:
- [ ] Optimize images with next/image
- [ ] Implement lazy loading
- [ ] Add performance monitoring
- [ ] Optimize bundle size

### Phase 6: CMS Integration (Sanity.io)
**Goal**: Integrate Sanity.io for dynamic content management

**Sanity Setup**:
- [ ] Create Sanity project
- [ ] Design and implement content schemas
- [ ] Setup Sanity client configuration in Next.js
- [ ] Setup environment variables for Sanity API

**Content Schema Design**:
- [ ] Coach schema (name, bio, photo, specialties, experience)
- [ ] Class schema (name, description, schedule, level, capacity)
- [ ] Pricing schema (plan name, price, features, duration)
- [ ] Gallery schema (image, title, description, category)

**Integration**:
- [ ] Replace static data with Sanity queries
- [ ] Implement incremental static regeneration (ISR)
- [ ] Setup draft preview mode
- [ ] Migrate existing content to Sanity
- [ ] Test all data fetching

---

## Detailed Todo List

### Phase 1: Quick Deploy (Priority 1 - Get Live URL First)
- [ ] Initialize Next.js project with App Router
- [ ] Setup Tailwind CSS configuration
- [ ] Create basic folder structure (app, components, data, lib, public)
- [ ] Create basic layout.tsx with placeholder Header/Footer/Navigation
- [ ] Create placeholder home page (`app/page.tsx`)
- [ ] Initialize Git repository locally
- [ ] Push to GitHub repository
- [ ] Connect GitHub repo to Vercel
- [ ] Deploy to Vercel (obtain live URL)
- [ ] Test live deployment works
- [ ] Configure custom domain in Vercel (if ready)
- [ ] Setup environment variables in Vercel dashboard

### Phase 2: Foundation & Setup
- [ ] Configure ESLint and Prettier
- [ ] Create proper folder structure (organize components, data, lib, public)
- [ ] Build functional Header/Navigation component
- [ ] Build functional Footer component
- [ ] Setup basic layout styling with Tailwind

### Phase 3: Core Pages & Components Development
**Pages**:
- [ ] Build Home page (`app/page.tsx`) with hero section
- [ ] Build Coaches page (`app/coaches/page.tsx`)
- [ ] Build Classes page (`app/classes/page.tsx`)
- [ ] Build Pricing page (`app/pricing/page.tsx`)
- [ ] Build Gallery page (`app/gallery/page.tsx`)
- [ ] Build Contact page (`app/contact/page.tsx`)

**Components**:
- [ ] CoachCard component - Display individual coach info
- [ ] ClassSchedule component - Display class schedule grid
- [ ] PricingTable component - Display pricing tiers
- [ ] PricingCard component - Individual price cards
- [ ] GalleryGrid component - Display photo gallery
- [ ] GalleryImage component - Individual gallery items
- [ ] ContactForm component - Contact form with validation
- [ ] Hero section component - Landing page hero

### Phase 4: Content & Static Data Population
- [ ] Create `lib/data/coaches.ts` with coach information (TypeScript constants)
- [ ] Create `lib/data/classes.ts` with class schedules and data
- [ ] Create `lib/data/pricing.ts` with pricing plans
- [ ] Create `lib/data/gallery.ts` with gallery items metadata
- [ ] Connect Coaches page to coaches data
- [ ] Connect Classes page to classes data
- [ ] Connect Pricing page to pricing data
- [ ] Connect Gallery page to gallery data

### Phase 5: Features & Optimization
**SEO Optimization**:
- [ ] Configure metadata for all pages (title, description, og tags)
- [ ] Add open graph images for social sharing
- [ ] Implement JSON-LD structured data (Organization, Article, BreadcrumbList)
- [ ] Create sitemap.xml
- [ ] Create robots.txt
- [ ] Setup next-seo package (optional but recommended)

**Forms & Interactivity**:
- [ ] Implement contact form with client-side validation
- [ ] Create API route for email sending (`app/api/contact/route.ts`)
- [ ] Setup email service (Nodemailer, SendGrid, or Vercel Functions)
- [ ] Add form success/error states and messages
- [ ] Add loading states to form submission
- [ ] Implement responsive mobile navigation

**Performance**:
- [ ] Optimize images with next/image component
- [ ] Implement lazy loading for images
- [ ] Setup Web Vitals monitoring
- [ ] Run Lighthouse audits and optimize
- [ ] Optimize bundle size

### Phase 6: CMS Integration (Sanity.io)
**Sanity Setup**:
- [ ] Create Sanity project
- [ ] Design and implement content schemas
- [ ] Setup Sanity CLI locally
- [ ] Configure Sanity client in Next.js
- [ ] Setup environment variables for Sanity API keys
- [ ] Configure CORS for Sanity API

**Content Schemas**:
- [ ] Create Coach schema
- [ ] Create Class schema
- [ ] Create Pricing schema
- [ ] Create Gallery schema
- [ ] Create Settings schema (optional - for global config)

**CMS Integration**:
- [ ] Replace coaches data with Sanity queries
- [ ] Replace classes data with Sanity queries
- [ ] Replace pricing data with Sanity queries
- [ ] Replace gallery data with Sanity queries
- [ ] Implement incremental static regeneration (ISR)
- [ ] Setup Sanity draft preview mode
- [ ] Migrate all existing static content to Sanity
- [ ] Test all data fetching from Sanity
- [ ] Update deployment with Sanity webhooks for auto-revalidation

### Testing & Final Tasks
- [ ] Complete testing and QA
- [ ] Final performance optimization
- [ ] Verify SEO implementation
- [ ] Domain configuration finalization
- [ ] Setup monitoring and error tracking
- [ ] Create deployment documentation
- [ ] Final launch checklist

---

## Sanity.io Content Schema (Preliminary Plan)

### Coach Schema
```
{
  name: string
  bio: string
  photo: image
  specialties: string[]
  experience: number (years)
  email?: string
  phone?: string
}
```

### Class Schema
```
{
  name: string
  description: string
  schedule: {
    day: string
    time: string
    duration: number (minutes)
  }[]
  level: enum ['beginner', 'intermediate', 'advanced']
  capacity: number
  instructor: reference (Coach)
}
```

### Pricing Schema
```
{
  planName: string
  price: number
  currency: string
  duration: string (e.g., 'monthly', 'yearly')
  features: string[]
  highlighted: boolean
}
```

### Gallery Schema
```
{
  image: image
  title: string
  description?: string
  category: string (e.g., 'training', 'event', 'team')
  date: datetime
}
```

---

## Architecture Decisions & Notes

### Why This Approach?
1. **Static First**: Start with static content to get the site live quickly
2. **Scalable to CMS**: Structure data files to make Sanity migration straightforward
3. **SEO Ready**: Build with SEO best practices from the start
4. **Performance**: Use Next.js 14 App Router for optimal performance

### Important Considerations
- Ensure component names are descriptive for Sanity schema mapping later
- Keep data structure consistent between static files and planned Sanity schema
- Design components to accept data from both static files and dynamic CMS queries
- Plan page routes to remain consistent through CMS integration

### File Structure Preview
```
chinasanda/
├── app/
│   ├── layout.tsx
│   ├── page.tsx (Home)
│   ├── coaches/page.tsx
│   ├── classes/page.tsx
│   ├── pricing/page.tsx
│   ├── gallery/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── CoachCard.tsx
│   ├── ClassSchedule.tsx
│   ├── PricingTable.tsx
│   ├── GalleryGrid.tsx
│   └── ContactForm.tsx
├── data/
│   ├── coaches.ts
│   ├── classes.ts
│   ├── pricing.ts
│   └── gallery.ts
├── lib/
│   └── (utility functions)
├── public/
│   └── (images, assets)
├── DEV.md (this file)
└── package.json
```

---

## Progress Tracking

- [ ] **Phase 1**: Quick Deploy (Live URL obtained) completed
- [ ] **Phase 2**: Foundation & Setup completed
- [ ] **Phase 3**: Core Pages & Components completed
- [ ] **Phase 4**: Content & Static Data populated
- [ ] **Phase 5**: Features & Optimization completed
- [ ] **Phase 6**: Sanity.io CMS Integration completed
- [ ] **Testing & Final**: Launch checklist completed

---

## Resources & Documentation
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vercel Deployment Guide](https://vercel.com/docs)
- [Sanity.io Documentation](https://www.sanity.io/docs)
- [SEO Best Practices for Next.js](https://nextjs.org/learn/seo/introduction-to-seo)

---

**Last Updated**: 2025-10-17
**Project Status**: Planning Phase
