# Boon Town Landing Page

## Stack
- Next.js 16.x (App Router)
- Tailwind CSS 4.x with CSS custom properties via @theme
- TypeScript (strict mode)
- Framer Motion 12.x for animations
- Lucide React for icons

## Design Tokens (defined in globals.css @theme)
- Colors: teal, teal-dark, cream, sage, sage-light, terracotta, terracotta-hover, charcoal, charcoal-light, gold, white
- Font families: font-serif (Literata), font-sans (DM Sans)
- Never use arbitrary Tailwind values — always reference design tokens

## Component Patterns
- One component per file in src/components/
- "use client" directive on any component using hooks, events, or framer-motion
- Props interfaces defined in same file
- Use SectionReveal wrapper for scroll-triggered animations
- Use StaggerContainer + StaggerItem for staggered reveals

## Animation Rules
- Framer Motion springs only — never linear or ease
- bounce: 0.1-0.15 (gentle, settling)
- duration: 0.6-0.8s for reveals
- stagger: 80ms between children
- NO parallax, NO 3D transforms, NO particle effects, NO typewriter

## Brand
- Archetype: "Wise Caregiver" — warm + trustworthy
- Tone: editorial warmth, not corporate
- Headlines: serif (Literata), body: sans (DM Sans)
- Primary CTA color: terracotta
- Page background: cream (#FFF8F0), not white
