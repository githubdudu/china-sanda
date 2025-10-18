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

- [x] Initialize Next.js project
  - [x] Setup Tailwind CSS configuration
- [x] Initialize Git repository and push to GitHub
- [x] Connect repository to Vercel
- [x] Deploy to Vercel (get live URL)

### Phase 2: Foundation & Setup
**Goal**: Establish solid project infrastructure and structure

- [x] Setup ESLint and Prettier
- [ ] Create Header/Navigation component (functional)
- [ ] Create Footer component (functional)

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
