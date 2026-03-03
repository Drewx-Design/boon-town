---
title: "feat: Boon Town Landing Page with Waitlist"
type: feat
status: active
date: 2026-03-02
---

# Boon Town Landing Page with Waitlist

## Overview

Build a high-converting, design-forward landing page for **boon.town** — an Outcome-as-a-Service platform that delivers submission-ready grant proposals to small U.S. nonprofits. The page targets the "Accidental Grant Writer" (Executive Directors at organizations with <$500K budgets who never wanted to write grants) and must communicate cognitive relief, not productivity. Includes a functional email waitlist with referral mechanics.

This is the **marketing landing page only** — not the product itself. The goal is to capture early interest, validate demand, and build a pre-launch audience before the Concierge MVP (Phase A).

## Problem Statement / Motivation

Boon Town needs a public-facing presence at boon.town to:
1. Capture waitlist signups from the target persona (Accidental Grant Writers)
2. Communicate the Outcome-as-a-Service positioning (selling completed grant deliverables, not tool access)
3. Differentiate against incumbents (Grantboost, Grantable, GrantedAI, Instrumentl) who all sell productivity
4. Anchor pricing against grant consultants ($3K-$15K) not SaaS tools ($24/month)
5. Build pre-launch social proof via waitlist momentum and referral mechanics

## Proposed Solution

A single-page, statically-generated landing page built with Next.js (App Router) + Tailwind CSS + TypeScript + Framer Motion. Email waitlist captured via API route with Resend for confirmation emails. Deployed to Vercel with custom domain boon.town.

## Technical Approach

### Tech Stack

| Layer | Technology | Rationale |
|---|---|---|
| Framework | Next.js 16.x (App Router, static export) | User's established stack (DrewX, Prompt_Theory_Landing). SSG for performance. |
| Styling | Tailwind CSS 4.x + CSS custom properties | Consistent with existing projects. Custom properties for design tokens. |
| Language | TypeScript (strict mode) | User's standard. |
| Animations | Framer Motion 11.x | Spring-based animations for "warm" feel. Already used in DrewX. |
| Icons | Lucide React | Consistent with user's projects. |
| Email | Resend | Simple transactional email for waitlist confirmations. Free tier sufficient for pre-launch. |
| Database | Vercel KV (Redis) or Supabase | Store waitlist emails + referral tracking. Lightweight, free tier. |
| Fonts | Literata (headlines) + DM Sans (body) | Self-hosted. Serif headlines = editorial authority. Sans body = modern approachability. |
| Deployment | Vercel | Custom domain support, edge CDN, analytics. |

### Project Structure

```
boon-town/
├── public/
│   ├── fonts/
│   │   ├── literata-v2-latin.woff2
│   │   └── dm-sans-v2-latin.woff2
│   ├── images/
│   │   ├── hero-deliverable-mockup.webp
│   │   ├── og-image.png (1200x630)
│   │   └── favicon.svg
│   └── robots.txt
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout, fonts, metadata
│   │   ├── page.tsx            # Landing page (all sections)
│   │   ├── globals.css         # Tailwind + CSS custom properties
│   │   └── api/
│   │       └── waitlist/
│   │           └── route.ts    # POST: email capture + Resend confirmation
│   ├── components/
│   │   ├── Hero.tsx
│   │   ├── ProblemSection.tsx
│   │   ├── OutcomeShowcase.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── SocialProof.tsx
│   │   ├── PricingPreview.tsx
│   │   ├── FAQ.tsx
│   │   ├── FinalCTA.tsx
│   │   ├── WaitlistForm.tsx    # Shared email capture component
│   │   ├── StickyMobileCTA.tsx # Mobile sticky bar
│   │   ├── SectionReveal.tsx   # Scroll-triggered animation wrapper
│   │   └── Header.tsx          # Minimal: logo + CTA button only
│   ├── lib/
│   │   ├── resend.ts           # Resend client config
│   │   └── waitlist.ts         # Waitlist logic (store, count, referral)
│   └── types/
│       └── index.ts            # Shared types
├── docs/
│   └── plans/
│       └── 2026-03-02-feat-landing-page-with-waitlist-plan.md
├── tailwind.config.ts
├── next.config.ts
├── tsconfig.json
├── package.json
├── .env.local.example
├── .gitignore
└── CLAUDE.md
```

### Architecture

The landing page is a single Next.js page (`page.tsx`) composed of 8 section components rendered in sequence. Each section is wrapped in a `SectionReveal` component that handles scroll-triggered entrance animations via Framer Motion's `whileInView`.

The waitlist API route (`/api/waitlist`) handles:
1. Email validation and duplicate checking
2. Storage to Vercel KV (or Supabase)
3. Referral code generation (nanoid, 8 chars)
4. Confirmation email via Resend
5. Returns current waitlist count for social proof display

No authentication, no user accounts, no database migrations. Minimal backend surface.

---

## Design System

### Color Palette

```
Deep Teal:      #1B6B6D   — Primary brand, headings, header
Warm Cream:     #FFF8F0   — Page background
Sage Green:     #7FB069   — Success states, positive outcomes
Terracotta:     #D4845A   — Primary CTA, accent, highlights
Soft Charcoal:  #2D3748   — Body text
Muted Gold:     #C9A96E   — Premium indicators
Cloud White:    #FFFFFF   — Cards, elevated surfaces
Light Sage:     #F0F7EC   — Alternating section backgrounds
```

Rationale: Cool colors (teal, sage) signal financial trust. Warm accents (terracotta, cream) prevent clinical feel. Maps to the "Wise Caregiver" archetype — Gusto's approach of warm backgrounds against professional layouts.

### Typography

- **Headlines**: Literata (serif), weight 600-700, 40-56px desktop / 28-32px mobile
- **Body**: DM Sans (sans-serif), weight 400, 17-18px, line-height 1.7
- **UI/Accent**: DM Sans weight 500-600

Self-hosted WOFF2 files, preloaded via `<link rel="preload">`. No Google Fonts CDN.

### Animation Language

Spring-based via Framer Motion. Warm, not playful:
- Entrance: `bounce: 0.15, duration: 0.6` (gentle, settling)
- Hover: `stiffness: 400, damping: 25` (responsive, no wobble)
- Scroll reveal: `bounce: 0.1, duration: 0.8` (graceful fade-up)
- Stagger children: `80ms` delay between siblings

**Avoid**: Parallax, aggressive bounce (>0.3), 3D transforms, particle effects, typewriter effects on headlines.

---

## Landing Page Sections (Content Spec)

### 1. Header (Sticky)

Minimal. No full navigation — it's a single-page pre-launch site.

- Logo: "Boon Town" wordmark in Literata (Deep Teal)
- Single CTA button: "Join the Waitlist" (Terracotta, scrolls to hero form or triggers modal)
- Background: transparent → Warm Cream on scroll (blur backdrop)

### 2. Hero Section

The most important viewport. Sells cognitive relief, not productivity.

```
[Eyebrow — small, DM Sans 500]
For nonprofit leaders who didn't sign up to be grant writers

[H1 — Literata 700, Deep Teal]
You lead the mission.
We handle the grant.

[Subheadline — DM Sans 400, Soft Charcoal]
Get submission-ready grant proposals, budgets, and compliance packages
delivered to you — so you can get back to the work that matters.

[WaitlistForm component]
┌──────────────────────────────────────────────┬─────────────────┐
│  your@nonprofit.org                          │ Join Waitlist → │
└──────────────────────────────────────────────┴─────────────────┘

[Micro-proof — small text below form]
"Join [count] nonprofit leaders already on the list"

[Trust signal — small text or badge]
"Built by former grant professionals"
```

**Hero visual**: Right side (desktop) or below form (mobile) — a stylized mockup of a completed grant deliverable with quality scores visible. Shows the OUTPUT, not a tool interface. Can be an angled card/document with subtle shadow and the Control Center scores overlaid.

**Animation**: H1 fades up with spring (0→1 opacity, 20→0 y), subheadline follows 200ms later, form follows 400ms later. Staggered entrance.

### 3. Problem Acknowledgment

Short. Empathic, not agitating. Three pain points that name the feeling:

```
[Section heading — Literata]
Sound familiar?

[Three cards/columns, each with icon + short text]

📋 "You became an ED to change lives — not to decode 47-page NOFOs
    at midnight."

💰 "Your budget is tight. A grant consultant costs $5,000.
    ChatGPT produces slop that funders spot immediately."

😰 "One compliance miss can cost you the entire award.
    And you're the one who has to catch it."
```

**Design**: Light Sage (#F0F7EC) background. Cards with subtle borders, icons in Deep Teal. Each card animates in with stagger on scroll.

### 4. Outcome Showcase — "This Is What Done Looks Like"

The critical OaAS positioning section. Shows completed deliverables, not features.

```
[Section heading — Literata]
This is what "handled" looks like

[Visual: Mockup of a completed grant package]
— A styled document card showing:
  - "Grant Narrative — Community Youth Mentorship Program"
  - Quality badges: "NOFO Coverage: 98%" "Budget Coherence: PASS"
  - "Voice Match: 94%"
  - Subtle green checkmarks

[Three deliverable types displayed as cards]

📄 Letters of Inquiry        📑 Foundation Proposals      📋 Federal Proposals
   1-2 pages                    3-5 pages                    6-12 pages
   Funder-aligned              Budget + narrative            Full compliance matrix
   Starting at $75             Starting at $200              Starting at $500

[Below cards]
"Every deliverable includes compliance verification, budget-narrative
 coherence checks, and voice authenticity scoring — before you submit."
```

**Design**: White background. The deliverable mockup is the hero visual of this section — large, detailed, showing what the user RECEIVES. Quality scores use Sage Green for passing metrics. Animate the scores counting up on scroll.

### 5. How It Works

Three steps. Simple. TurboTax framing — the system handles complexity, you provide context.

```
[Section heading — Literata]
Three steps. No grant writing degree required.

[Step 1 — icon: upload cloud]
Upload your documents
"Your 501(c)(3) letter, a past proposal, and the grant
 opportunity you're targeting. We build your organizational
 profile automatically."

[Step 2 — icon: sparkles/magic wand]
We produce the deliverable
"Our system drafts your narrative, builds the budget,
 maps every compliance requirement, and scores the
 result — all before you see it."

[Step 3 — icon: check circle]
Review, refine, submit
"You add your voice, verify alignment with your mission,
 and submit with confidence. Quality scores tell you
 exactly where you stand."
```

**Design**: Warm Cream background. Numbered steps (1, 2, 3) in large Literata numerals (Deep Teal, ~72px). Connected by a subtle dotted line or gentle curve. Each step animates sequentially on scroll.

### 6. Social Proof / Credibility

Pre-launch proof stack (no testimonials yet):

```
[Section heading — Literata]
Built for the mission-driven

[Founder credibility — photo + bio]
"Built by [Name], who spent [X] years in the nonprofit sector
 and watched talented leaders burn out on grant paperwork."

[Waitlist momentum — animated counter]
┌─────────────────────────────────────────────┐
│  🏛  [1,247] nonprofit leaders on the list  │
└─────────────────────────────────────────────┘

[Integration/ecosystem logos — grayscale, small]
"Works with the grant systems you already use"
Grants.gov | SAM.gov | Foundation Directory Online

[Methodology transparency]
"Your proposal will be scored by AI before a human reads it.
 Shouldn't you see that score first?"
```

**Design**: Light Sage background. Founder photo is circular, warm lighting. Counter uses animated number increment (spring-based). Logos are grayscale, muted, establishing credibility by association without overpromising.

### 7. Pricing Preview

Per-deliverable pricing anchored against consultant costs. Three tiers.

```
[Section heading — Literata]
Grant consultant quality. A fraction of the cost.

[Anchor text — small, above cards]
"Grant consultants charge $3,000–$15,000 per proposal."

[Three pricing cards]

┌─────────────────┐  ┌──────────────────────┐  ┌─────────────────┐
│ Letter of        │  │ Foundation Proposal   │  │ Federal Proposal │
│ Inquiry          │  │ ★ MOST POPULAR        │  │                  │
│                  │  │                        │  │                  │
│ $75–$150         │  │ $200–$400              │  │ $500–$1,000      │
│ per LOI          │  │ per proposal           │  │ per proposal     │
│                  │  │                        │  │                  │
│ ✓ 1-2 pages      │  │ ✓ 3-5 page narrative   │  │ ✓ 6-12 pages     │
│ ✓ Funder mapping │  │ ✓ Itemized budget      │  │ ✓ Full compliance│
│ ✓ Quality scores │  │ ✓ Cover letter         │  │ ✓ Biosketches    │
│                  │  │ ✓ Org profile          │  │ ✓ Data mgmt plan │
│                  │  │ ✓ All quality scores   │  │ ✓ All quality    │
│                  │  │                        │  │   scores         │
│ [Join Waitlist]  │  │ [Join Waitlist]        │  │ [Join Waitlist]  │
└─────────────────┘  └──────────────────────┘  └─────────────────┘

[Below cards — trust anchors]
"Your first Letter of Inquiry is free — see the quality before you pay."
"Review before you submit. Only pay for deliverables you approve."
```

**Design**: White background. Middle card elevated (slight translateY, larger shadow, Deep Teal border-top or "Most Popular" badge in Terracotta). Cards have generous whitespace. CTA buttons match main Terracotta style. Pricing cards animate with stagger on scroll. Mobile: stack vertically.

### 8. FAQ / Objection Handling

Accordion format. Address the top concerns for this persona:

```
[Section heading — Literata]
Questions you're probably asking

Q: "Is this just ChatGPT with a grant template?"
A: No. ChatGPT produces generic text. Boon Town produces compliance-checked,
   budget-coherent, voice-matched deliverables with quality scores you can
   verify before submitting. Every deliverable passes 6 diagnostic checks
   that no chatbot performs.

Q: "Will funders know AI was involved?"
A: We check every target funder's AI disclosure policy before producing your
   deliverable. If disclosure is required, we draft the language for you.
   Your authorship is preserved — you provide the mission context, review
   every section, and approve the final submission.

Q: "Is my organizational data safe?"
A: Your documents are encrypted, never used for AI training, and never shared.
   You own your data. Period.

Q: "What if I don't like the result?"
A: You review everything before paying. Technical issues get unlimited
   automated fixes. Voice and tone adjustments get two revision rounds.
   If you're still not satisfied, you receive a 50% service credit.

Q: "What about post-award compliance?"
A: After you win, we help you stay compliant — progress reports, financial
   reporting alerts, and audit-ready documentation starting at $150/month.

Q: "How is this different from hiring a grant consultant?"
A: A consultant charges $3,000-$15,000 per proposal and takes 4-6 weeks.
   We deliver the same quality in days for $200-$1,000, with quality scores
   they can't match. Many consultants are joining as partners to serve
   more clients at better margins.
```

**Design**: Light Sage background. Clean accordion with smooth Framer Motion height animation + chevron rotation. Only one item open at a time. Answers in Soft Charcoal, 16-17px.

### 9. Final CTA

Reinforced waitlist capture with strongest emotional hook:

```
[Section heading — Literata, centered]
Your mission is too important
for grant paperwork to get in the way.

[Subtext — DM Sans]
Join the waitlist. Your first Letter of Inquiry is on us.

[WaitlistForm component — same as hero]
┌──────────────────────────────────────────────┬─────────────────┐
│  your@nonprofit.org                          │ Join Waitlist → │
└──────────────────────────────────────────────┴─────────────────┘

[Micro-proof]
"Join [count] nonprofit leaders already on the list"
```

**Design**: Deep Teal background, white text. Creates visual contrast from the rest of the page. WaitlistForm input has white background. CTA button is Terracotta. Generous vertical padding (120px+ top and bottom).

### 10. Footer

Minimal:

```
© 2026 Boon Town · boon.town
Privacy Policy · Terms of Service
```

**Design**: Soft Charcoal background, muted text. No social links yet (pre-launch). Links to placeholder privacy/terms pages.

---

## Waitlist Implementation

### API Route: `/api/waitlist` (POST)

```typescript
// Request body
interface WaitlistRequest {
  email: string;
  referralCode?: string;  // If they came from a referral link
}

// Response
interface WaitlistResponse {
  success: boolean;
  position: number;        // Their position in the queue
  referralCode: string;    // Their unique referral code
  totalCount: number;      // Total signups (for social proof)
}
```

### Storage Schema (Vercel KV)

```
waitlist:emails          — SET of all emails (dedup)
waitlist:count           — INT counter
waitlist:entry:{email}   — HASH { email, referralCode, referredBy, joinedAt, position }
waitlist:referrals:{code} — INT count of referrals for this code
```

### Referral Mechanics

- Every signup generates a unique 8-char referral code (nanoid)
- Referral link format: `boon.town?ref={code}`
- Post-signup "thank you" state shows:
  - "You're #[position] on the list"
  - "Share your link to move up: boon.town?ref={code}"
  - Copy-to-clipboard button
- Referral rewards (displayed but not yet enforced):
  - 1 referral: "Move up 10 spots"
  - 3 referrals: "Unlock early access"
  - 5 referrals: "Free first LOI"

### Confirmation Email (via Resend)

Simple, warm, on-brand:
- Subject: "You're on the list, [First Name or "friend"]"
- Body: Welcome message + position + referral link + brief "why we're building this"
- From: hello@boon.town (requires DNS setup)

### WaitlistForm Component States

1. **Default**: Email input + submit button
2. **Loading**: Button shows spinner, input disabled
3. **Success**: Form transforms into "You're in!" confirmation with position + referral link + copy button
4. **Error**: Inline error message below input (red text, no alert)
5. **Duplicate**: "You're already on the list! Here's your referral link."

---

## Mobile-First Design Rules

- Base design at 375px, scale up
- Single column layout throughout on mobile
- Pricing cards stack vertically
- Hero form: full-width input, full-width button (stacked, not inline)
- CTA buttons: min 48px height, full-width on mobile
- Body text: 16px minimum (never 14px)
- Sticky mobile CTA bar appears after scrolling past hero (semi-transparent, logo + "Join Waitlist")
- Touch targets: 44x44px minimum, 8px spacing between tappable elements
- FAQ accordion: full-width, generous tap targets

### Breakpoints

```
sm:  640px   — Small tablets
md:  768px   — Tablets
lg:  1024px  — Laptops
xl:  1280px  — Desktops (max content width)
```

---

## Performance Targets

| Metric | Target |
|---|---|
| LCP (Largest Contentful Paint) | < 2.5s |
| INP (Interaction to Next Paint) | < 200ms |
| CLS (Cumulative Layout Shift) | < 0.1 |
| Total page weight | < 500KB (initial load) |
| Time to Interactive | < 3s on 4G |

### Implementation

- Static export (SSG) — no server-side rendering needed for landing page
- Preload hero image + both font files
- Self-host fonts (no Google Fonts CDN)
- WebP for all images with explicit width/height
- Lazy-load all images below the fold
- Inline critical CSS (Tailwind purge handles this)
- Code-split Framer Motion — only load when sections enter viewport
- `content-visibility: auto` on below-fold sections

---

## SEO & Open Graph

### Meta Tags

```html
<title>Boon Town — Grant Proposals, Handled</title>
<meta name="description" content="Submission-ready grant narratives, budgets,
  and compliance packages for small nonprofits. Starting at $75 per deliverable." />

<!-- Open Graph -->
<meta property="og:title" content="Boon Town — Grant Proposals, Handled" />
<meta property="og:description" content="Your mission is too important for
  grant paperwork. Get submission-ready proposals delivered to you." />
<meta property="og:image" content="https://boon.town/og-image.png" />
<meta property="og:url" content="https://boon.town" />
<meta property="og:type" content="website" />

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Boon Town — Grant Proposals, Handled" />
<meta name="twitter:image" content="https://boon.town/og-image.png" />
```

### Structured Data

```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Boon Town",
  "applicationCategory": "BusinessApplication",
  "description": "AI-powered grant proposal delivery for small nonprofits",
  "url": "https://boon.town",
  "offers": {
    "@type": "AggregateOffer",
    "lowPrice": "75",
    "highPrice": "1000",
    "priceCurrency": "USD"
  }
}
```

---

## Implementation Phases

### Phase 1: Foundation (scaffold + design system)

- Initialize Next.js project with TypeScript + Tailwind
- Set up design tokens (CSS custom properties for colors, typography, spacing)
- Configure self-hosted fonts (Literata + DM Sans)
- Create `SectionReveal` animation wrapper component
- Create `WaitlistForm` component (UI only, no backend)
- Create `Header` component
- Set up CLAUDE.md with project conventions
- **Files**: `layout.tsx`, `globals.css`, `tailwind.config.ts`, `Header.tsx`, `SectionReveal.tsx`, `WaitlistForm.tsx`, `CLAUDE.md`

### Phase 2: Sections (build all landing page sections)

- Hero section with mockup visual
- Problem Acknowledgment section
- Outcome Showcase section
- How It Works section
- Social Proof section
- Pricing Preview section
- FAQ section with accordion
- Final CTA section
- Footer
- Sticky mobile CTA bar
- Compose all sections in `page.tsx`
- **Files**: `Hero.tsx`, `ProblemSection.tsx`, `OutcomeShowcase.tsx`, `HowItWorks.tsx`, `SocialProof.tsx`, `PricingPreview.tsx`, `FAQ.tsx`, `FinalCTA.tsx`, `StickyMobileCTA.tsx`, `page.tsx`

### Phase 3: Waitlist Backend

- Set up Vercel KV (or Supabase) for email storage
- Implement `/api/waitlist` route (POST handler)
- Connect `WaitlistForm` to API
- Referral code generation + tracking
- Form success/error states with animations
- Set up Resend for confirmation emails
- Environment variables configuration
- **Files**: `api/waitlist/route.ts`, `lib/resend.ts`, `lib/waitlist.ts`, `.env.local.example`

### Phase 4: Polish & Deploy

- Responsive testing across breakpoints
- Performance audit (Lighthouse, WebPageTest)
- OG image creation
- Favicon + apple-touch-icon
- robots.txt + sitemap
- Deploy to Vercel
- Custom domain configuration (boon.town)
- DNS setup for Resend (email sending domain)
- Final Lighthouse score validation

---

## Acceptance Criteria

### Functional Requirements

- [ ] Landing page renders all 8 sections in correct order
- [ ] Waitlist form captures email and stores in database
- [ ] Duplicate emails handled gracefully (show existing referral code)
- [ ] Referral code generated per signup and displayed post-submission
- [ ] Copy-to-clipboard for referral link works
- [ ] Waitlist count displays and updates after each signup
- [ ] Confirmation email sent via Resend on successful signup
- [ ] FAQ accordion opens/closes smoothly (one at a time)
- [ ] Sticky mobile CTA appears after scrolling past hero
- [ ] All internal scroll links work (header CTA → form)

### Design Requirements

- [ ] Color palette matches spec (Deep Teal, Warm Cream, Terracotta, etc.)
- [ ] Typography uses Literata (headlines) + DM Sans (body), self-hosted
- [ ] Animations use spring physics (bounce: 0.1-0.15), not linear easing
- [ ] Scroll-triggered section reveals work on all sections
- [ ] Pricing cards highlight middle tier ("Most Popular")
- [ ] No stock photos, no generic AI illustrations
- [ ] Warm Cream (#FFF8F0) page background, not pure white

### Performance Requirements

- [ ] Lighthouse Performance score >= 95
- [ ] LCP < 2.5s
- [ ] CLS < 0.1
- [ ] INP < 200ms
- [ ] Total initial page weight < 500KB

### Mobile Requirements

- [ ] All sections render correctly at 375px width
- [ ] Touch targets >= 44x44px
- [ ] Body text >= 16px on mobile
- [ ] Pricing cards stack vertically on mobile
- [ ] Hero form stacks (input above button) on mobile
- [ ] Sticky CTA bar functional on mobile

### SEO Requirements

- [ ] Open Graph tags render correctly (test with ogimage.dev or similar)
- [ ] Structured data validates (schema.org validator)
- [ ] Meta description under 160 characters
- [ ] Semantic HTML (proper heading hierarchy, landmarks)

---

## Success Metrics

| Metric | Target | How to Measure |
|---|---|---|
| Waitlist signups (30 days) | 500+ | Vercel KV count |
| Referral rate | 20%+ signups via referral | referredBy field populated |
| Mobile conversion | Within 20% of desktop | Vercel Analytics |
| Page load time | < 2s on 4G | Lighthouse / WebPageTest |
| Bounce rate | < 50% | Vercel Analytics |

---

## Dependencies & Prerequisites

- **Vercel account** with custom domain support
- **boon.town domain** DNS access for pointing to Vercel + Resend
- **Resend account** (free tier: 3,000 emails/month — sufficient for pre-launch)
- **Vercel KV** (free tier: 256MB, 30K requests/day — sufficient)
- **Hero mockup asset**: Need a stylized image/illustration of a completed grant deliverable with quality scores. Options:
  - Design in Figma and export
  - Use CSS/HTML to create an in-page mockup (no external image needed)
  - Commission an illustration

---

## Risk Analysis & Mitigation

| Risk | Impact | Mitigation |
|---|---|---|
| boon.town DNS not configured | Blocks deployment | Verify domain ownership + DNS access early |
| Resend email delivery issues | Signups without confirmation | Implement fallback: show success even if email fails; retry via queue |
| Low waitlist conversion | Fails to validate demand | A/B test hero copy; add urgency ("Limited early access spots") |
| Font loading causes CLS | Poor performance scores | Preload fonts, use font-display: swap, set explicit fallback sizes |
| Mobile sticky CTA annoys users | Higher bounce on mobile | Only show after 500px scroll; easy dismiss; small and unobtrusive |

---

## CLAUDE.md Conventions (for the new project)

```markdown
# Boon Town Landing Page

## Stack
- Next.js 16.x (App Router, static export where possible)
- Tailwind CSS 4.x with CSS custom properties
- TypeScript (strict mode)
- Framer Motion for animations

## Design Tokens
- Always use CSS custom properties, never arbitrary Tailwind values
- Color names: teal, cream, sage, terracotta, charcoal, gold
- Font families: font-serif (Literata), font-sans (DM Sans)

## Component Patterns
- One component per file
- Props interfaces defined in same file
- Use SectionReveal wrapper for scroll animations
- Framer Motion springs only — no linear/ease animations

## Animation Rules
- bounce: 0.1-0.15 (gentle, settling)
- duration: 0.6-0.8s
- stagger: 80ms between children
- NO parallax, NO 3D transforms, NO particle effects

## Performance
- Self-hosted fonts only (no CDN)
- WebP images with explicit dimensions
- Lazy-load below fold
- Target: Lighthouse 95+
```

---

## Sources & References

### Design Inspiration
- Gusto brand system (Wise Caregiver archetype precedent)
- Stripe landing page (clean per-unit pricing presentation)
- Linear.app (animation quality benchmark)

### Research
- Bessemer Venture Partners AI Pricing Playbook (outcome-based positioning)
- SaaS Hero B2B Landing Page Best Practices (section structure)
- Waitlister Optimization Guide (referral mechanics)
- Motion.dev documentation (spring animation parameters)

### User's Existing Projects (pattern reference)
- `C:/Users/mrdre/codeprojects/DrewX/` — Advanced Next.js + Tailwind + Framer Motion patterns
- `C:/Users/mrdre/codeprojects/Prompt_Theory_Landing/` — Simpler landing page patterns
