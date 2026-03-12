import { Shield } from "lucide-react";
import SectionReveal from "./SectionReveal";

export default function SocialProof() {
  return (
    <section className="bg-sage-light px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl">
        <SectionReveal>
          <h2 className="mb-14 text-center font-serif text-3xl font-bold text-teal sm:text-4xl">
            Built for the mission-driven
          </h2>
        </SectionReveal>

        {/* Team design principle statement */}
        <SectionReveal className="mb-12">
          <div className="mx-auto max-w-2xl rounded-2xl border border-teal/6 bg-white p-8 shadow-sm">
            <p className="mb-5 font-serif text-lg leading-relaxed text-charcoal sm:text-xl">
              &ldquo;We built Boon Town because we watched talented nonprofit
              leaders spend more time on paperwork than on the mission that
              brought them here. The grant shouldn&apos;t be the hard
              part.&rdquo;
            </p>
            <p className="text-sm font-medium text-teal">
              &mdash; The Boon Town team
            </p>
          </div>
        </SectionReveal>

        {/* AI disclosure — promoted from FAQ */}
        <SectionReveal className="mb-12">
          <div className="mx-auto max-w-2xl rounded-2xl border-2 border-teal/10 bg-teal/[0.02] p-8">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-teal/8">
                <Shield className="h-4 w-4 text-teal" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-teal">
                &ldquo;Will funders know AI was involved?&rdquo;
              </h3>
            </div>
            <p className="leading-relaxed text-charcoal-light">
              We check every target funder&apos;s AI disclosure policy before
              producing your deliverable. If disclosure is required, we draft
              the language for you. Your authorship is preserved &mdash; you
              provide the mission context, review every section, and approve the
              final submission. We&apos;re the only platform that checks your
              proposal against the latest funder AI guidelines.
            </p>
          </div>
        </SectionReveal>

        {/* Integration logos */}
        <SectionReveal>
          <p className="mb-6 text-center text-xs font-medium uppercase tracking-widest text-charcoal-light/40">
            Built for the grant systems and databases you rely on
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {["Grants.gov", "SAM.gov", "Foundation Directory"].map((name) => (
              <span
                key={name}
                className="text-sm font-medium text-charcoal-light/30"
              >
                {name}
              </span>
            ))}
          </div>
        </SectionReveal>

        {/* AI scoring hook */}
        <SectionReveal className="mt-14">
          <div className="mx-auto max-w-2xl rounded-2xl border border-terracotta/10 bg-terracotta/[0.03] p-8 text-center">
            <p className="font-serif text-xl font-semibold leading-snug text-teal sm:text-2xl">
              &ldquo;Your proposal will be scored by AI before a human reads
              it.
              <br />
              Shouldn&apos;t you see that score first?&rdquo;
            </p>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
