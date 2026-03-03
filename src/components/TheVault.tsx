import {
  FileText,
  BarChart3,
  Users,
  DollarSign,
  ShieldCheck,
  Lock,
  ChevronRight,
} from "lucide-react";
import SectionReveal from "./SectionReveal";
import { StaggerContainer, StaggerItem } from "./SectionReveal";

const documentTypes = [
  {
    icon: FileText,
    label: "Past Proposals",
    detail: "Language, structure, wins",
  },
  {
    icon: BarChart3,
    label: "Impact Data",
    detail: "Outcomes, metrics, proof",
  },
  {
    icon: Users,
    label: "Board & Staff",
    detail: "Bios, rosters, capacity",
  },
  {
    icon: DollarSign,
    label: "Financials",
    detail: "Budgets, audits, 990s",
  },
];

const compoundingYears = [
  {
    year: "Year 1",
    state: "Foundation",
    items: ["First proposals drafted", "Core docs indexed", "Voice calibrated"],
    depth: "w-1/3",
  },
  {
    year: "Year 2",
    state: "Momentum",
    items: [
      "Win patterns recognized",
      "Budget templates refined",
      "Funder preferences learned",
    ],
    depth: "w-2/3",
  },
  {
    year: "Year 3",
    state: "Mastery",
    items: [
      "Institutional memory complete",
      "Proposals drafted in minutes",
      "Your voice, unmistakably",
    ],
    depth: "w-full",
  },
];

export default function TheVault() {
  return (
    <section className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl">
        {/* Section lead-in */}
        <SectionReveal>
          <p className="mb-3 text-center text-[11px] font-medium uppercase tracking-[0.2em] text-teal/50">
            The Vault
          </p>
          <h2 className="mx-auto mb-5 max-w-xl text-center font-serif text-3xl font-bold leading-tight text-teal sm:text-4xl lg:text-[2.75rem]">
            It gets smarter every time you use&nbsp;it.
          </h2>
          <p className="mx-auto mb-14 max-w-2xl text-center text-lg leading-relaxed text-charcoal-light sm:text-xl">
            The Vault is your organization&rsquo;s secure, private living
            memory. Past proposals, impact stats, board rosters, financial
            data &mdash; all indexed, versioned, and ready to pull from the
            moment you need it.
          </p>
        </SectionReveal>

        {/* Main dark teal card — the Vault itself */}
        <SectionReveal delay={0.05}>
          <div className="relative overflow-hidden rounded-2xl bg-teal p-7 sm:p-10 lg:p-12">
            {/* Watermark */}
            <div
              className="pointer-events-none absolute right-4 bottom-4 select-none font-serif text-[120px] font-bold leading-none tracking-wider text-white/[0.025] sm:text-[180px]"
              aria-hidden="true"
            >
              VAULT
            </div>

            {/* Decorative vault door lines — subtle concentric arcs */}
            <div
              className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full border border-white/[0.04]"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -top-16 -left-16 h-48 w-48 rounded-full border border-white/[0.03]"
              aria-hidden="true"
            />

            <div className="relative">
              {/* Header with lock icon */}
              <div className="mb-8 flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/[0.08]">
                  <Lock className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/35">
                    Your Private Repository
                  </p>
                  <p className="mt-1 font-serif text-xl font-semibold text-white sm:text-2xl">
                    Boon Town remembers so you don&rsquo;t have&nbsp;to.
                  </p>
                </div>
              </div>

              {/* Document type grid */}
              <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {documentTypes.map((doc) => {
                  const Icon = doc.icon;
                  return (
                    <div
                      key={doc.label}
                      className="group rounded-xl bg-white/[0.07] p-4 transition-colors hover:bg-white/[0.11]"
                    >
                      <Icon className="mb-3 h-5 w-5 text-gold/70" />
                      <p className="text-sm font-semibold text-white">
                        {doc.label}
                      </p>
                      <p className="mt-0.5 text-[11px] text-white/40">
                        {doc.detail}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* The compounding value line */}
              <p className="font-serif text-base leading-relaxed text-white/70 sm:text-lg">
                Every proposal drafted makes the next one more accurate, more
                specific, and more unmistakably{" "}
                <span className="font-semibold italic text-white/90">
                  yours
                </span>
                .
              </p>
            </div>
          </div>
        </SectionReveal>

        {/* Compounding value timeline */}
        <SectionReveal delay={0.12}>
          <p className="mb-6 mt-14 text-center text-xs font-medium uppercase tracking-[0.2em] text-charcoal-light/40">
            Value compounds with every use
          </p>
        </SectionReveal>

        <StaggerContainer className="grid gap-4 sm:grid-cols-3">
          {compoundingYears.map((y, i) => (
            <StaggerItem key={y.year}>
              <div className="group relative flex h-full flex-col rounded-2xl border border-teal/6 bg-white p-6 transition-shadow hover:shadow-lg hover:shadow-teal/5">
                {/* Year badge */}
                <div className="mb-4 inline-flex items-center gap-2 self-start">
                  <span className="rounded-full bg-teal/8 px-3 py-1 text-xs font-semibold text-teal">
                    {y.year}
                  </span>
                  {i > 0 && (
                    <ChevronRight className="h-3 w-3 text-teal/25" />
                  )}
                </div>

                <h3 className="mb-1 font-serif text-lg font-semibold text-teal">
                  {y.state}
                </h3>

                <ul className="mt-3 flex-1 space-y-2">
                  {y.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-sage" />
                      <span className="text-sm text-charcoal-light">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Depth indicator bar */}
                <div className="mt-5" aria-hidden="true">
                  <div className="h-1 w-full rounded-full bg-teal/6">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r from-teal/30 to-sage/50 ${y.depth}`}
                    />
                  </div>
                </div>

                {/* Arrow connector between cards (hidden on last + mobile) */}
                {i < compoundingYears.length - 1 && (
                  <div className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 sm:block">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-cream">
                      <ChevronRight className="h-3 w-3 text-teal/30" />
                    </div>
                  </div>
                )}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Trust callout — visually distinct */}
        <SectionReveal delay={0.2}>
          <div className="mt-14 rounded-2xl border border-teal/8 bg-teal-light p-7 sm:p-9">
            <div className="flex gap-4 sm:gap-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal/8">
                <ShieldCheck className="h-5 w-5 text-teal" />
              </div>
              <div>
                <h3 className="mb-2 font-serif text-lg font-semibold text-teal">
                  Your data, your rules.
                </h3>
                <p className="mb-3 leading-relaxed text-charcoal-light">
                  The AI only pulls from documents you have verified and
                  approved. It never guesses about your organization.
                </p>
                <p className="text-sm leading-relaxed text-charcoal-light/70">
                  You choose which documents the AI can access. You review
                  every draft before it becomes a deliverable.
                </p>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
