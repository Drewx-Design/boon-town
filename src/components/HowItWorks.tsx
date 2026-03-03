import { Upload, ArrowRight } from "lucide-react";
import SectionReveal from "./SectionReveal";

const weHandle = [
  "Compliance parsing",
  "Budget construction",
  "Requirement mapping",
  "Funder alignment",
  "Quality scoring",
  "Document formatting",
];

const youOwn = [
  "Mission narrative",
  "Organizational voice",
  "Strategic vision",
  "Your story",
];

export default function HowItWorks() {
  return (
    <section className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <SectionReveal>
          <h2 className="mb-4 text-center font-serif text-3xl font-bold text-teal sm:text-4xl">
            Three steps. No grant writing degree required.
          </h2>
          <p className="mx-auto mb-14 max-w-lg text-center text-charcoal-light">
            You provide the context. We handle the heavy lifting. You own the
            result.
          </p>
        </SectionReveal>

        {/* Step 1: Upload — lightweight pill shape */}
        <SectionReveal delay={0.05}>
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-4 rounded-2xl border border-teal/8 bg-white px-6 py-4 shadow-sm">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal/8">
                <Upload className="h-5 w-5 text-teal" />
              </div>
              <div>
                <h3 className="font-serif text-base font-semibold text-teal">
                  Upload your documents
                </h3>
                <p className="text-sm text-charcoal-light">
                  501(c)(3) letter, a past proposal, your target opportunity
                </p>
              </div>
            </div>
          </div>
        </SectionReveal>

        {/* Flow connector */}
        <div className="flex flex-col items-center gap-0 py-5" aria-hidden="true">
          <div className="h-6 w-px bg-teal/12" />
          <div className="h-1.5 w-1.5 rounded-full bg-teal/20" />
          <div className="h-6 w-px bg-teal/12" />
        </div>

        {/* The Split: 80/20 */}
        <SectionReveal delay={0.15}>
          <div className="grid gap-4 md:grid-cols-5">
            {/* 80% — the heavy side */}
            <div className="relative overflow-hidden rounded-2xl bg-teal p-7 sm:p-9 md:col-span-3">
              {/* Watermark percentage */}
              <div
                className="pointer-events-none absolute -right-3 -bottom-6 select-none font-serif text-[140px] font-bold leading-none tracking-wider text-white/[0.05] sm:text-[180px]"
                aria-hidden="true"
              >
                80%
              </div>

              <div className="relative">
                <p className="mb-1 text-[11px] font-medium uppercase tracking-[0.2em] text-white/40">
                  We handle
                </p>
                <h3 className="mb-4 font-serif text-2xl font-bold text-white sm:text-3xl">
                  the 80%
                </h3>
                <p className="mb-6 max-w-sm leading-relaxed text-white/65">
                  Compliance, budget construction, requirement mapping, funder
                  alignment &mdash; and every document you approve makes the
                  next deliverable sharper. Boon Town learns your organization.
                </p>

                <div className="flex flex-wrap gap-2">
                  {weHandle.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg bg-white/10 px-3 py-1.5 text-xs font-medium text-white/70"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* 20% — the precious side */}
            <div className="relative overflow-hidden rounded-2xl border-2 border-terracotta/15 bg-white p-7 sm:p-9 md:col-span-2">
              {/* Watermark percentage */}
              <div
                className="pointer-events-none absolute -right-2 -bottom-5 select-none font-serif text-[120px] font-bold leading-none tracking-wider text-terracotta/[0.06] sm:text-[150px]"
                aria-hidden="true"
              >
                20%
              </div>

              <div className="relative">
                <p className="mb-1 text-[11px] font-medium uppercase tracking-[0.2em] text-terracotta/50">
                  You own
                </p>
                <h3 className="mb-4 font-serif text-2xl font-bold text-teal sm:text-3xl">
                  the 20%
                  <span className="block text-lg font-semibold text-charcoal-light sm:text-xl">
                    that matters
                  </span>
                </h3>
                <p className="mb-6 leading-relaxed text-charcoal-light">
                  The mission narrative, the organizational voice, the strategic
                  vision &mdash; the part only you can write.
                </p>

                <div className="flex flex-wrap gap-2">
                  {youOwn.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg bg-terracotta/8 px-3 py-1.5 text-xs font-medium text-terracotta"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Subtle arrow reinforcing "this is yours" */}
              <div className="mt-6 flex items-center gap-2 text-xs font-medium text-terracotta/60">
                <ArrowRight className="h-3 w-3" />
                <span>What makes you, you</span>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
