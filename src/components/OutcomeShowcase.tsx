import { ArrowRight, Check } from "lucide-react";
import SectionReveal from "./SectionReveal";
import { StaggerContainer, StaggerItem } from "./SectionReveal";

const scores = [
  { label: "NOFO Coverage", value: "98%", description: "Requirements addressed" },
  { label: "Budget Coherence", value: "PASS", description: "Numbers match narrative" },
  { label: "Voice Match", value: "94%", description: "Sounds like your org" },
  { label: "Compliance", value: "PASS", description: "Zero critical defects" },
  { label: "Funder Alignment", value: "87%", description: "Matches funder priorities" },
];

const deliverables = [
  {
    title: "Letter of Inquiry",
    pages: "1\u20132 pages",
    items: ["Funder alignment mapping", "Compliance check", "Quality scores"],
  },
  {
    title: "Foundation Proposal",
    pages: "3\u20135 pages",
    items: [
      "Full narrative framework",
      "Itemized budget",
      "Org profile + cover letter",
    ],
  },
  {
    title: "Federal Proposal",
    pages: "6\u201312 pages",
    items: [
      "Complete compliance matrix",
      "Biosketches + facilities",
      "Data management plan",
    ],
  },
];

export default function OutcomeShowcase() {
  return (
    <section className="bg-sage-light px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <SectionReveal>
          <h2 className="mb-4 text-center font-serif text-3xl font-bold text-teal sm:text-4xl">
            This is what &ldquo;handled&rdquo; looks like
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-charcoal-light">
            Every deliverable comes with a quality certification you can verify
            before you submit. Not a vibe check &mdash; real scores.
          </p>
        </SectionReveal>

        {/* The Control Center — quality scorecard */}
        <SectionReveal>
          <div className="relative overflow-hidden rounded-2xl bg-teal p-6 sm:p-10">
            {/* Watermark */}
            <div
              className="pointer-events-none absolute right-4 bottom-2 select-none font-serif text-[100px] font-bold leading-none tracking-wider text-white/[0.03] sm:text-[140px]"
              aria-hidden="true"
            >
              CERTIFIED
            </div>

            <div className="relative">
              {/* Header */}
              <div className="mb-8 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/35">
                    Quality Certification
                  </p>
                  <p className="mt-1 font-serif text-lg font-semibold text-white sm:text-xl">
                    Community Youth Mentorship Program
                  </p>
                </div>
                <p className="text-xs text-white/30">
                  Meyer Memorial Trust &middot; 2026
                </p>
              </div>

              {/* Score grid */}
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
                {scores.map((score) => (
                  <div
                    key={score.label}
                    className="rounded-xl bg-white/[0.07] p-4"
                  >
                    <div className="mb-2 flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-sage" />
                      <span className="text-[9px] font-medium uppercase tracking-wider text-white/40">
                        {score.label}
                      </span>
                    </div>
                    <p className="font-serif text-2xl font-bold tracking-wide text-white sm:text-3xl">
                      {score.value}
                    </p>
                    <p className="mt-1 text-[11px] text-white/35">
                      {score.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Tagline */}
              <p className="mt-6 text-center text-sm text-white/40">
                Every metric verified automatically before the deliverable
                reaches you.
              </p>
            </div>
          </div>
        </SectionReveal>

        {/* Deliverable progression */}
        <SectionReveal delay={0.1}>
          <p className="mb-6 mt-14 text-center text-xs font-medium uppercase tracking-[0.2em] text-charcoal-light/40">
            From simple inquiries to complex federal submissions
          </p>
        </SectionReveal>

        <StaggerContainer className="grid gap-4 sm:grid-cols-3">
          {deliverables.map((d, i) => (
            <StaggerItem key={d.title}>
              <div className="group relative flex h-full flex-col rounded-2xl border border-teal/6 bg-white p-6 transition-shadow hover:shadow-lg hover:shadow-teal/5">
                {/* Page count badge */}
                <div className="mb-4 inline-flex self-start rounded-full bg-teal/6 px-3 py-1">
                  <span className="text-xs font-semibold text-teal">
                    {d.pages}
                  </span>
                </div>

                <h3 className="mb-4 font-serif text-lg font-semibold text-teal">
                  {d.title}
                </h3>

                <ul className="flex-1 space-y-2">
                  {d.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-sage" />
                      <span className="text-sm text-charcoal-light">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Arrow connector between cards (hidden on last + mobile) */}
                {i < deliverables.length - 1 && (
                  <div className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 sm:block">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-cream">
                      <ArrowRight className="h-3 w-3 text-teal/30" />
                    </div>
                  </div>
                )}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
