"use client";

import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SectionReveal from "./SectionReveal";

const faqs = [
  {
    q: "Will my proposal sound like it was written by AI?",
    a: "No \u2014 because Boon Town doesn\u2019t write from scratch. It writes from your documents. Your past proposals, your strategic plan, your impact language: that\u2019s the source material. The AI structures and assembles; your voice is the raw material. Funders will hear you, not a template.",
  },
  {
    q: "I\u2019ve never written a grant before \u2014 can I still use this?",
    a: "Yes. Boon Town handles the structural complexity \u2014 compliance requirements, budget formatting, funder alignment \u2014 so you can focus on what you already know: your organization\u2019s mission and impact. You don\u2019t need grant experience. You need your story.",
  },
  {
    q: "Is this just ChatGPT with a grant template?",
    a: "No. ChatGPT produces generic text. Boon Town produces compliance-checked, budget-coherent, voice-matched deliverables with quality scores you can verify before submitting. Every deliverable passes 6 diagnostic checks that no chatbot performs.",
  },
  {
    q: "Is my organizational data safe?",
    a: "Your documents are encrypted, never used for AI training, and never shared. You own your data. Period.",
  },
  {
    q: "What if I don\u2019t like the result?",
    a: "You review everything before paying. Technical issues get unlimited automated fixes. Voice and tone adjustments get two revision rounds. If you\u2019re still not satisfied, you receive a 50% service credit.",
  },
  {
    q: "How is this different from hiring a grant consultant?",
    a: "A consultant takes weeks and charges thousands per proposal. We deliver the compliance, budget, and structural work in days \u2014 with quality scores they can\u2019t match. You stay in control of the narrative. Many consultants are joining as partners to serve more clients at better margins.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-sage-light px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-2xl">
        <SectionReveal>
          <h2 className="mb-12 text-center font-serif text-3xl font-bold text-teal sm:text-4xl">
            Questions you&apos;re probably asking
          </h2>
        </SectionReveal>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <SectionReveal key={faq.q} delay={i * 0.05}>
              <div className="rounded-2xl border border-teal/6 bg-white transition-shadow hover:shadow-sm">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="flex w-full items-center justify-between p-5 text-left sm:p-6"
                >
                  <span className="pr-4 font-serif text-base font-semibold text-charcoal sm:text-lg">
                    {faq.q}
                  </span>
                  <m.span
                    animate={{ rotate: openIndex === i ? 180 : 0 }}
                    transition={{
                      type: "spring",
                      bounce: 0.2,
                      duration: 0.4,
                    }}
                    className="shrink-0"
                  >
                    <ChevronDown className="h-5 w-5 text-charcoal-light" />
                  </m.span>
                </button>

                <AnimatePresence initial={false}>
                  {openIndex === i && (
                    <m.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{
                        type: "spring",
                        bounce: 0,
                        duration: 0.35,
                      }}
                      className="faq-content"
                    >
                      <div className="px-5 pb-5 sm:px-6 sm:pb-6">
                        <p className="leading-relaxed text-charcoal-light">
                          {faq.a}
                        </p>
                      </div>
                    </m.div>
                  )}
                </AnimatePresence>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
