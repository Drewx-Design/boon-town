---
title: Landing Page Copy & Conversion Polish
type: refactor
status: completed
date: 2026-03-11
---

# Landing Page Copy & Conversion Polish

## Overview

Five targeted copy and UX changes to improve conversion, ICP alignment, and messaging accuracy across the landing page. The changes span five components and focus on: pricing anchors, ICP-appropriate federal tier language, first-time seeker reassurance, timeline label clarity, and accurate integration framing.

## Changes

### 1. Pricing Section — Add Anchors + Promote Free LOI

**File:** `src/components/PricingPreview.tsx`

**Why:** "Pricing details coming soon" kills momentum. Visitors need *something* to budget against, even pre-launch. The free LOI line is the strongest conversion hook on the page and it's buried below the cards.

**Changes:**

- [x] **Replace the "coming soon" subtitle** (lines 57-60)
  - Current: `"Pricing details coming soon. Join the waitlist for founding member rates."`
  - New: `"LOIs under $200. Early access pricing for our first 100 organizations."`
  - Keep the `text-sm text-charcoal-light/60` styling and `max-w-md` container
  - Note: the exact dollar figure is a placeholder — swap in the real number when ready, but commit to *a* number. "Under $200" gives visitors something concrete to budget against. Vague comparisons ("less than a consultant") make them do math they can't do.

- [x] **Add a "First one free" badge on the LOI card** (inside the card body, inline with or just after the tier name)
  - Place it **after** `tier.name` (around line 84), either on the same line as the title or as a small tag directly below it
  - Use an inline badge style to differentiate from the "Most Common" absolute badge: `inline-flex rounded-full bg-sage/15 px-3 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-teal`
  - Text: `"First one free"`
  - Rationale: placing it *after* the name preserves natural reading order (name → qualifier → description). Placing it before the name creates an unusual hierarchy.

- [x] **Simplify the below-cards free LOI text** (lines 117-129)
  - Remove the free LOI line (it's now on the card)
  - Keep: `"You review and approve every deliverable. You only pay for outcomes, never for access."`

### 2. Federal Tier — Reframe for Community Nonprofits

**Files:** `src/components/PricingPreview.tsx` AND `src/components/OutcomeShowcase.tsx`

**Why:** "Research strategy" and "complex federal submissions" signal NIH/NSF academic grants. The ICP is community nonprofits pursuing HRSA, SAMHSA, DOJ OVW, AmeriCorps — they use "program narrative" and "project description."

**Changes in `PricingPreview.tsx`:**

- [x] **Update tier description** (line 32)
  - Current: `"Complex federal submissions with full compliance matrix"`
  - New: `"Federal grants for community-based organizations"`

- [x] **Update "research strategy" line item** (line 34)
  - Current: `"6–12 page research strategy"`
  - New: `"6–12 page program narrative"`

- [x] Keep `"Biosketches + facilities docs"`, `"Data management plan"`, and `"Complete compliance matrix"` as-is — these are universal federal requirements

**Changes in `OutcomeShowcase.tsx`** (mandatory for consistency):

- [x] **Update subtitle** (line 107)
  - Current: `"From simple inquiries to complex federal submissions"`
  - New: `"From letters of inquiry to full federal proposals"`

- [x] **Update Federal Proposal bullet item** in the `deliverables` array (line 23-27)
  - The deliverables array does not currently include "research strategy" — its items are `"Complete compliance matrix"`, `"Biosketches + facilities"`, `"Data management plan"`. These are fine as-is; no change needed here since the term "research strategy" only appears in `PricingPreview.tsx`.

### 3. Upload Step — Reassure First-Time Grant Seekers

**File:** `src/components/HowItWorks.tsx`

**Why:** "A past proposal" in the upload step reads like a prerequisite. First-time seekers — the exact ICP — will bounce before reaching the FAQ that answers this concern.

**Changes:**

- [x] **Add a reassurance note below the upload pill** (after line 50, before the flow connector)
  - Place it as a standalone centered `<p>` between the pill and the connector div
  - Copy: `"No past proposals? No problem — your 501(c)(3) and the opportunity are enough to get started."`
  - Style: `text-center text-xs text-charcoal-light/60 italic mt-2`
  - Keep the note *outside* the pill to preserve its compact design
  - Do NOT add fiscal sponsor language here — handle that in onboarding, not on the landing page

```tsx
{/* Reassurance for first-time seekers */}
<p className="mt-2 text-center text-xs italic text-charcoal-light/60">
  No past proposals? No problem — your 501(c)(3) and the
  opportunity are enough to get started.
</p>
```

### 4. Compounding Timeline — Fix "Foundation" Collision

**File:** `src/components/TheVault.tsx`

**Why:** "Foundation" does double duty as a timeline stage and a pricing tier name ("Foundation Proposal"), causing momentary confusion when scanning the page.

**Changes:**

- [x] **Update only the first label in `compoundingYears` array** (line 38)
  - `"Foundation"` → `"First Steps"`
  - Leave `"Momentum"` and `"Mastery"` unchanged — they have nice parallel structure and don't collide with anything

This is the minimal fix: solves the collision without touching what already works.

### 5. "Works With" Section — Reframe Heading

**File:** `src/components/SocialProof.tsx`

**Why:** "Works with" implies API integrations that don't exist. The heading should communicate output compatibility without overpromising.

**Changes:**

- [x] **Update heading** (line 54)
  - Current: `"Works with the grant systems you already use"`
  - New: `"Built for the grant systems and databases you rely on"`
  - This accommodates Foundation Directory (a research database, not a submission system) without implying integrations that don't exist
  - Keep Foundation Directory in the list — removing it leaves only two items, and swapping in Submittable/Fluxx implies integration partnerships that don't exist

## Acceptance Criteria

- [x] No instance of "Pricing details coming soon" remains on the page
- [x] Pricing subtitle includes a concrete dollar anchor (even a range like "under $200")
- [x] Free LOI message appears on the LOI pricing card as an inline badge, placed after the tier name
- [x] Federal tier says "program narrative" not "research strategy" in `PricingPreview.tsx`
- [x] Federal tier description says "community-based organizations" not "complex federal submissions" in `PricingPreview.tsx`
- [x] `OutcomeShowcase.tsx` subtitle says "letters of inquiry to full federal proposals"
- [x] Upload step has a reassurance note for first-time seekers, placed below the pill (not inside it)
- [x] Timeline label "Foundation" is renamed to "First Steps"; Momentum and Mastery unchanged
- [x] "Works with" heading reads "Built for the grant systems and databases you rely on"
- [x] All changes pass visual review on mobile (375px) and desktop (1280px)
- [x] No new Tailwind arbitrary values — all styles use design tokens

## Files Changed

| File | Changes |
|---|---|
| `src/components/PricingPreview.tsx` | Subtitle copy, free LOI badge on card, below-cards text, federal tier description + line item |
| `src/components/OutcomeShowcase.tsx` | Subtitle copy (line 107) |
| `src/components/HowItWorks.tsx` | Reassurance note below upload pill |
| `src/components/TheVault.tsx` | `compoundingYears` first state label only |
| `src/components/SocialProof.tsx` | Integration heading copy |

## Resolved Questions

1. **Foundation Directory** — Keep it. Use the broader heading "Built for the grant systems and databases you rely on" to accommodate it accurately.
2. **Fiscal sponsors** — Not on the landing page. Handle in onboarding. Adding it here creates a secondary question for the majority who don't need it.
3. **"Founding member"** — Either define it concretely ("early access pricing for our first 100 organizations") or drop the term. The updated subtitle uses the concrete version. Undefined scarcity language reads as manipulative to an ICP that's been burned by vague promises.

## Sources

- SpecFlow analysis identified the `OutcomeShowcase.tsx` consistency gap (line 107 must match `PricingPreview.tsx` federal tier language)
- CLAUDE.md design tokens and animation rules govern all styling choices
