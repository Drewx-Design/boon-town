"use client";

import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SectionReveal from "./SectionReveal";

const faqs = [
  {
    q: "Does Boon Town write the whole proposal for me?",
    a: "No \u2014 and that\u2019s by design. We handle the 80% that burns your time: compliance parsing, budget construction, requirement mapping, funder alignment. You own the 20% that matters most: your mission story, your organizational voice, your strategic vision. We guarantee the structure. You guarantee the soul.",
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
  {
    q: "What about post-award compliance?",
    a: "After you win, we help you stay compliant \u2014 progress reports, financial reporting alerts, and audit-ready documentation so you never miss a deadline.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="px-6 py-20 sm:py-28">
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
