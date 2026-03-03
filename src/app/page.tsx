import { ComponentType } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import TheVault from "@/components/TheVault";
import OutcomeShowcase from "@/components/OutcomeShowcase";
import HowItWorks from "@/components/HowItWorks";
import SocialProof from "@/components/SocialProof";
import PricingPreview from "@/components/PricingPreview";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import SectionDivider from "@/components/SectionDivider";

type SectionBg = "cream" | "sage-light" | "teal";

/** Full Tailwind class names so the scanner picks them up */
const bgClass: Record<SectionBg, string> = {
  cream: "bg-cream",
  "sage-light": "bg-sage-light",
  teal: "bg-teal",
};

const fillClass: Record<SectionBg | "charcoal", string> = {
  cream: "fill-cream",
  "sage-light": "fill-sage-light",
  teal: "fill-teal",
  charcoal: "fill-charcoal",
};

/**
 * Sections in display order. Backgrounds alternate cream / sage-light
 * automatically — add or remove entries without touching divider props.
 */
const sections: { Component: ComponentType; bg: SectionBg }[] = [
  { Component: Hero, bg: "cream" },
  { Component: ProblemSection, bg: "sage-light" },
  { Component: TheVault, bg: "cream" },
  { Component: OutcomeShowcase, bg: "sage-light" },
  { Component: HowItWorks, bg: "cream" },
  { Component: SocialProof, bg: "sage-light" },
  { Component: PricingPreview, bg: "cream" },
  { Component: FAQ, bg: "sage-light" },
  { Component: FinalCTA, bg: "teal" },
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {sections.map(({ Component, bg }, i) => {
          const next = sections[i + 1];
          return (
            <div key={Component.displayName || Component.name}>
              <Component />
              {next && (
                <SectionDivider
                  topBg={bgClass[bg]}
                  fillClass={fillClass[next.bg]}
                />
              )}
            </div>
          );
        })}
        <SectionDivider topBg={bgClass.teal} fillClass={fillClass.charcoal} />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
