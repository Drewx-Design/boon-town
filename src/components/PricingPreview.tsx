import { FileText, BookOpen, ScrollText, Check } from "lucide-react";
import SectionReveal from "./SectionReveal";
import { StaggerContainer, StaggerItem } from "./SectionReveal";
import { SECTION_IDS } from "@/lib/constants";

const tiers = [
  {
    name: "Letter of Inquiry",
    icon: FileText,
    free: true,
    description: "1\u20132 page LOI with funder alignment mapping and quality scores",
    includes: [
      "Funder alignment mapping",
      "Compliance verification",
      "Quality scores before you submit",
    ],
  },
  {
    name: "Foundation Proposal",
    icon: BookOpen,
    popular: true,
    description: "Complete proposal package with narrative, budget, and org profile",
    includes: [
      "3\u20135 page narrative",
      "Itemized budget construction",
      "Cover letter + org profile",
      "Full quality certification",
    ],
  },
  {
    name: "Federal Proposal",
    icon: ScrollText,
    description: "Federal grants for community-based organizations",
    includes: [
      "6\u201312 page program narrative",
      "Biosketches + facilities docs",
      "Data management plan",
      "Complete compliance matrix",
    ],
  },
];

export default function PricingPreview() {
  return (
    <section className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionReveal>
          <h2 className="mb-3 text-center font-serif text-3xl font-bold text-teal sm:text-4xl">
            Pay for the outcome.
            <br />
            Not the tool.
          </h2>
          <p className="mx-auto mb-6 max-w-xl text-center text-charcoal-light">
            You pay when the work is done &mdash; per completed deliverable,
            not for a monthly subscription to a blank page. A fraction of what
            a grant consultant charges.
          </p>
          <p className="mx-auto mb-14 max-w-md text-center text-sm text-charcoal-light/60">
            LOIs under $200. Early access pricing for our first 100
            organizations.
          </p>
        </SectionReveal>

        <StaggerContainer className="grid gap-6 sm:grid-cols-3">
          {tiers.map((tier) => (
            <StaggerItem key={tier.name}>
              <div
                className={`relative flex h-full flex-col rounded-2xl border bg-white p-6 transition-shadow sm:p-8 ${
                  tier.popular
                    ? "border-teal/20 shadow-xl shadow-teal/8 sm:-translate-y-2"
                    : "border-teal/6 hover:shadow-lg hover:shadow-teal/5"
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-terracotta px-4 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
                    Most Common
                  </div>
                )}

                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-teal/8">
                  <tier.icon className="h-6 w-6 text-teal" />
                </div>

                <h3 className="mb-2 font-serif text-lg font-semibold text-teal">
                  {tier.name}
                </h3>

                {tier.free && (
                  <p className="mb-2 inline-flex rounded-full bg-sage/15 px-3 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-teal">
                    First one free
                  </p>
                )}

                <p className="mb-6 text-sm leading-relaxed text-charcoal-light">
                  {tier.description}
                </p>

                <ul className="mb-8 flex-1 space-y-3">
                  {tier.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-sage" />
                      <span className="text-sm text-charcoal-light">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href={`#${SECTION_IDS.waitlist}`}
                  className={`block rounded-xl py-3 text-center text-sm font-medium transition-colors ${
                    tier.popular
                      ? "bg-terracotta text-white hover:bg-terracotta-hover"
                      : "border border-teal/10 text-teal hover:bg-teal/5"
                  }`}
                >
                  Join Waitlist
                </a>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <SectionReveal className="mt-10">
          <p className="text-center text-sm text-charcoal-light">
            You review and approve every deliverable. You only pay for
            outcomes, never for access.
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}
