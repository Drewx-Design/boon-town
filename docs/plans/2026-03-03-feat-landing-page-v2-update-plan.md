---
title: "feat: Landing Page v2.0 — Vault, Portfolio Teaser, Copy Overhaul"
type: feat
status: completed
date: 2026-03-03
---

# Landing Page v2.0 — Vault, Portfolio Teaser, Copy Overhaul

## Overview

Evolve the boon.town landing page from a grant-writing tool pitch into a platform that speaks to the emotional reality of the Accidental Grant Writer — before, during, and after the grant writing moment. Based on live editorial review and user research with a nonprofit Executive Director.

**Positioning shift:**

| Current | Target |
|---|---|
| A grant writing tool that handles the 80% | The first grant platform built exclusively for the applicant — that learns your organization, eliminates the chaos, and gets smarter with every grant |

**Core insight:** The primary pain points are not about writing speed. They are about organizational chaos and strategic overwhelm — documents scattered across drives, no unified view of funding goals. The real pain sits *upstream* of the grant writing moment.

**Voice consistency note:** The hero personifies Boon Town as "someone" (a partner). This "partner" voice must be maintained throughout the page — The Vault, HowItWorks, and all copy should speak as a partner, not switch to pure tool/platform language. Either Boon Town is a partner throughout, or it's a platform throughout.

## Proposed Solution

### Phase 1: Copy & Content Updates (existing components)

Update hero, pain cards, pricing, FAQ, and social proof copy to reflect the new positioning. No new components needed.

### Phase 2: New Sections (1 full section + 1 teaser)

Add "The Vault" (organizational repository) as a full section and "Portfolio View" (funding dashboard) as a brief teaser. The Vault is the star; Portfolio View is a signal, not a showcase.

### Phase 3: Page Reorder

Restructure the section flow to match the updated information architecture. Key change: The Vault moves *immediately after* the Problem Section — Pain → Solution → Quality → Everything else.

---

## Implementation Plan

### Task 1: Hero Copy Update

**File:** `src/components/Hero.tsx`

| Element | Current | Updated |
|---|---|---|
| H1 | "The grant shouldn't be harder than the mission." | "Finally, someone to handle the grant chaos — so you can lead the mission." |
| Subhead | "We take on 80% of the grant work..." | "Boon Town learns your organization. It handles compliance, budgets, and requirements so you can focus on the narrative, the mission, and the voice — the 20% only you can write." |
| Eyebrow | "For nonprofit leaders who didn't sign up to be grant writers" | Keep as-is — still strong |

**Voice note:** "Someone" in the H1 personifies Boon Town as a partner. All downstream copy must match this register.

**File:** `src/app/layout.tsx`

| Element | Current | Updated |
|---|---|---|
| Page title | "Boon Town — Grant Relief for Small Nonprofits" | "Boon Town — Built for the Applicant" |
| OG title | Same | Same update |
| Twitter title | Same | Same update |

### Task 2: Add Fourth Pain Card — "The Archaeology Problem"

**File:** `src/components/ProblemSection.tsx`

Add a fourth quote block to the `problems` array:

```typescript
{
  quote: "Your program stats are in a 2022 email. Your last proposal is on someone's laptop. Your board list is three versions out of date. Every grant starts with two hours of archaeology before you write a single word.",
  highlight: "two hours of archaeology",
  label: "The Archaeology Problem",
  accent: "border-teal-dark",
}
```

This bridges the pain section to The Vault section that *immediately follows*.

### Task 3: Create "The Vault" Section (NEW)

**New file:** `src/components/TheVault.tsx`

The most important new section. Boon Town's primary moat (the organizational repository), core differentiator from generic AI, and direct answer to the biggest AI fear ("Will it make things up about us?").

**Placement: Immediately after Problem Section.** The emotional flow is: "Here's your pain" → "Here's the thing that solves it" → "Here's how we guarantee quality" → "Here's the rest." No gap between pain and resolution.

**Content:**

- **Heading:** "It gets smarter every time you use it."
- **Body:** Explains the Vault — a secure, private living institutional memory. Past proposals, impact stats, board rosters, financial data: all indexed, versioned, ready to pull from.
- **Key line:** "Every proposal drafted makes the next one more accurate, more specific, and more unmistakably yours."
- **Trust callout:** "The AI only pulls from documents you have verified and approved. It never guesses about your organization."
- **Control emphasis:** "You choose which documents the AI can access. You review every draft before it becomes a deliverable."

**Voice:** Partner register. "Boon Town remembers so you don't have to" not "The platform indexes documents."

**Design direction:** Use the `/frontend-design` skill. The Vault should feel secure, warm, and substantial — like a safe deposit box, not a file cabinet. Consider a dark teal card with document-type icons showing what gets stored. A visual showing "Year 1 → Year 2 → Year 3" getting progressively richer communicates the compounding value.

### Task 4: Create "Portfolio View" Teaser (NEW — MINIMAL)

**New file:** `src/components/PortfolioView.tsx`

**Keep this deliberately small.** "Coming Soon" on a pre-launch page risks undermining confidence. This should be a brief teaser — one short paragraph and a stylized visual — not a feature showcase. Earn trust with what exists before signaling what doesn't.

**Content:**

- **Heading:** "Every grant. Every deadline. One place." (shorter than original)
- **One paragraph:** "Soon: a single view of your entire funding strategy — active grants, upcoming deadlines, and alignment between what you promised and what you've delivered."
- **No "Coming Soon" badge.** Instead, a subtle "On the roadmap" note in smaller text.
- **Minimal visual footprint.** Smallest section on the page.

**Placement:** After The Vault, before How It Works.

### Task 5: Update How It Works Copy

**File:** `src/components/HowItWorks.tsx`

Update the 80% card description to include "learns your organization" language:

Current:
> "The compliance, the budget math, the requirement mapping, the funder alignment scoring — the heavy lifting that burns your nights and weekends."

Updated:
> "Compliance, budget construction, requirement mapping, funder alignment — and every document you approve makes the next deliverable sharper. Boon Town learns your organization."

**Voice:** Partner register — "Boon Town learns" not "The system indexes."

### Task 6: Replace Fabricated Testimonial with Honest Social Proof

**File:** `src/components/SocialProof.tsx`

**Remove the Maria Torres placeholder.** A fabricated testimonial on a live page contradicts the "honest about what the AI does" positioning. Replace with a format that doesn't require a real person:

**Option A (recommended): Design principle statement**
A quote-styled callout from the team that states a belief rather than fabricating an experience:
> "We built Boon Town because we watched talented nonprofit leaders spend more time on paperwork than on the mission that brought them here. The grant shouldn't be the hard part."
> — The Boon Town team

**Option B: Beta metric (when available)**
Once real data exists, replace with: "X proposals generated during beta · Y organizations onboarded"

The AI disclosure callout and integration logos remain as-is — both are strong.

### Task 7: Update FAQ

**File:** `src/components/FAQ.tsx`

**New question order (revised based on feedback):**

1. **"Will my proposal sound like it was written by AI?"** — #1 objection, address head-on
   > "No — because Boon Town doesn't write from scratch. It writes from your documents. Your past proposals, your strategic plan, your impact language: that's the source material. The AI structures and assembles; your voice is the raw material. Funders will hear you, not a template."

2. **"I've never written a grant before — can I still use this?"** — speaks to actual user anxiety (replaces "Does it replace my consultant?" which plants a concern for users who don't have one)
   > "Yes. Boon Town handles the structural complexity — compliance requirements, budget formatting, funder alignment — so you can focus on what you already know: your organization's mission and impact. You don't need grant experience. You need your story."

3. **"Is this just ChatGPT with a grant template?"** — keep existing strong answer

4. **"Is my organizational data safe?"** — keep existing

5. **"What if I don't like the result?"** — keep existing

6. **"How is this different from hiring a grant consultant?"** — keep existing, no specific prices

Remove: "Does Boon Town write the whole proposal for me?" (replaced by the augment-framing in #1 and #2)

### Task 8: Update Page Structure

**File:** `src/app/page.tsx`

Reorder sections — key change is **The Vault moves immediately after Problem Section**:

```
1.  Header
2.  Hero (updated copy)
3.  SectionDivider
4.  ProblemSection (4 cards now)
5.  SectionDivider
6.  TheVault (NEW — immediately after pain, before quality)
7.  SectionDivider
8.  OutcomeShowcase (Quality Certification)
9.  SectionDivider
10. PortfolioView (NEW — brief teaser)
11. SectionDivider
12. HowItWorks (updated copy)
13. SectionDivider
14. SocialProof (honest team statement, no fake testimonial)
15. SectionDivider
16. PricingPreview
17. SectionDivider
18. FAQ (updated ordering)
19. SectionDivider
20. FinalCTA
21. Footer
22. StickyMobileCTA
```

---

## Acceptance Criteria

### Content
- [x] Hero headline uses "grant chaos" + "someone" (partner voice)
- [x] Partner voice consistent throughout — no switching to pure tool language
- [x] Page title is "Boon Town — Built for the Applicant"
- [x] Fourth pain card ("The Archaeology Problem") present
- [x] The Vault section immediately follows Problem Section (pain → solution flow)
- [x] Portfolio View is a brief teaser — smallest section on the page, no "Coming Soon" badge
- [x] HowItWorks mentions "Boon Town learns your organization"
- [x] No fabricated testimonials — team design principle statement instead
- [x] FAQ leads with "Will it sound like AI?", second is "Never written a grant — can I use this?"
- [x] No TurboTax references anywhere on the page
- [x] "Handled" appears only in OutcomeShowcase heading

### Design
- [x] The Vault section uses `/frontend-design` skill for distinctive visual
- [x] Portfolio View is visually minimal — one paragraph + subtle visual
- [x] New sections have appropriate SectionDivider wave transitions
- [x] All new text passes WCAG AA contrast (use darkened terracotta #9A5330)
- [x] All uppercase content has tracking >= 0.03em

### Technical
- [x] Build passes with zero TypeScript errors
- [x] New components are Server Components where possible (no "use client" unless hooks needed)
- [x] The Vault and Portfolio View import SectionReveal for scroll animations
- [x] Page structure matches v2.0 section order

---

## Files Changed

| File | Action | Description |
|---|---|---|
| `src/components/Hero.tsx` | Edit | Update H1 ("grant chaos"), subhead ("learns your org") |
| `src/app/layout.tsx` | Edit | Update page title to "Built for the Applicant" |
| `src/components/ProblemSection.tsx` | Edit | Add 4th pain card (Archaeology Problem) |
| `src/components/TheVault.tsx` | **Create** | New section — organizational repository (immediately after pain) |
| `src/components/PortfolioView.tsx` | **Create** | New section — brief funding dashboard teaser |
| `src/components/HowItWorks.tsx` | Edit | Add "learns your org" to 80% card |
| `src/components/SocialProof.tsx` | Edit | Replace fake testimonial with team design principle |
| `src/components/FAQ.tsx` | Edit | New ordering, add "never written a grant" Q, remove old augment Q |
| `src/app/page.tsx` | Edit | Reorder: Vault after Pain, Portfolio teaser after Quality |

---

## The North Star Message

Every section of the page should serve one idea:

> *"Boon Town is the first grant platform built exclusively for the applicant. It learns your organization, handles the chaos, and puts you in control — so you can show up fully for the mission work that only you can do."*
