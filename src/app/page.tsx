import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import TheVault from "@/components/TheVault";
import OutcomeShowcase from "@/components/OutcomeShowcase";
import PortfolioView from "@/components/PortfolioView";
import HowItWorks from "@/components/HowItWorks";
import SocialProof from "@/components/SocialProof";
import PricingPreview from "@/components/PricingPreview";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import SectionDivider from "@/components/SectionDivider";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SectionDivider topBg="bg-cream" fillClass="fill-sage-light" />

        <ProblemSection />
        <SectionDivider topBg="bg-sage-light" fillClass="fill-cream" />

        <TheVault />
        <SectionDivider topBg="bg-cream" fillClass="fill-sage-light" />

        <OutcomeShowcase />
        <SectionDivider topBg="bg-sage-light" fillClass="fill-cream" />

        <PortfolioView />
        <SectionDivider topBg="bg-cream" fillClass="fill-sage-light" />

        <HowItWorks />
        <SectionDivider topBg="bg-sage-light" fillClass="fill-cream" />

        <SocialProof />
        <SectionDivider topBg="bg-cream" fillClass="fill-sage-light" />

        <PricingPreview />
        <SectionDivider topBg="bg-sage-light" fillClass="fill-cream" />

        <FAQ />
        <SectionDivider topBg="bg-cream" fillClass="fill-teal" />

        <FinalCTA />
        <SectionDivider topBg="bg-teal" fillClass="fill-charcoal" />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
