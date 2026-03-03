"use client";

import { m } from "framer-motion";
import WaitlistForm from "./WaitlistForm";
import { Shield, FileCheck, BarChart3 } from "lucide-react";
import { SECTION_IDS, QUALITY_SCORES } from "@/lib/constants";

const spring = { type: "spring" as const, bounce: 0.15, duration: 0.6 };

function DocumentMockup() {
  return (
    <m.div
      initial={{ opacity: 0, x: 30, rotate: 2 }}
      animate={{ opacity: 1, x: 0, rotate: 1 }}
      transition={{ ...spring, delay: 0.5 }}
      className="relative"
    >
      <div className="relative rounded-2xl border border-teal/8 bg-white p-6 shadow-2xl shadow-teal/8 sm:p-8">
        <div className="mb-5 border-b border-teal/6 pb-4">
          <div className="mb-1 text-[10px] font-medium uppercase tracking-widest text-teal/40">
            Grant Narrative
          </div>
          <div className="font-serif text-sm font-semibold text-teal">
            Community Youth Mentorship Program
          </div>
          <div className="mt-1 text-[10px] text-charcoal-light/50">
            Meyer Memorial Trust &middot; Due March 15, 2026
          </div>
        </div>

        <div className="space-y-2.5">
          <div className="doc-line w-full" />
          <div className="doc-line w-11/12" />
          <div className="doc-line w-full" />
          <div className="doc-line w-9/12" />
          <div className="mt-4 mb-1 h-2 w-24 rounded bg-teal/10" />
          <div className="doc-line w-full" />
          <div className="doc-line w-10/12" />
          <div className="doc-line w-full" />
          <div className="doc-line w-8/12" />
          <div className="doc-line w-full" />
          <div className="doc-line w-11/12" />
          <div className="mt-4 mb-1 h-2 w-28 rounded bg-teal/10" />
          <div className="doc-line w-full" />
          <div className="doc-line w-9/12" />
        </div>
      </div>

      <m.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ ...spring, delay: 0.8 }}
        className="absolute -right-3 top-12 flex flex-col gap-2 sm:-right-4"
      >
        {[
          { icon: <FileCheck className="h-3 w-3" />, index: 0 },
          { icon: <Shield className="h-3 w-3" />, index: 1 },
          { icon: <BarChart3 className="h-3 w-3" />, index: 2 },
        ].map((badge) => (
          <ScoreBadge
            key={QUALITY_SCORES[badge.index].label}
            icon={badge.icon}
            label={QUALITY_SCORES[badge.index].label}
            value={QUALITY_SCORES[badge.index].value}
            delay={0.9 + badge.index * 0.1}
          />
        ))}
      </m.div>
    </m.div>
  );
}

function ScoreBadge({
  icon,
  label,
  value,
  delay,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  delay: number;
}) {
  return (
    <m.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", bounce: 0.2, duration: 0.5, delay }}
      className="flex items-center gap-2 rounded-xl border border-sage/20 bg-white px-3 py-2 shadow-lg shadow-sage/8"
    >
      <span className="text-sage">{icon}</span>
      <div>
        <div className="text-[9px] font-medium uppercase tracking-wider text-charcoal-light/60">
          {label}
        </div>
        <div className="text-xs font-semibold tracking-wide text-sage">{value}</div>
      </div>
    </m.div>
  );
}

export default function Hero() {
  return (
    <section
      id={SECTION_IDS.waitlist}
      className="relative overflow-hidden px-6 pt-28 pb-16 sm:pt-36 sm:pb-24"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <m.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 0.1 }}
            className="mb-4 text-sm font-medium text-terracotta"
          >
            For nonprofit leaders who didn&apos;t sign up to be grant writers
          </m.p>

          <m.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 0.2 }}
            className="mb-6 font-serif text-4xl font-bold leading-[1.1] text-teal sm:text-5xl lg:text-[3.5rem]"
          >
            Finally, someone to handle
            <br />
            <span className="text-charcoal">
              the grant chaos &mdash; so you can lead the mission.
            </span>
          </m.h1>

          <m.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 0.3 }}
            className="mb-8 max-w-xl text-lg leading-relaxed text-charcoal-light"
          >
            Boon Town learns your organization. It handles compliance,
            budgets, and requirements so you can focus on the narrative, the
            mission, and the voice &mdash; the 20% only you can write.
          </m.p>

          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 0.4 }}
          >
            <WaitlistForm source="hero" />
          </m.div>

          <m.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="mt-4 text-xs text-charcoal-light/60"
          >
            Boon Town remembers so you don&apos;t have to. &middot; Your data
            stays yours
          </m.p>
        </div>

        <div className="hidden lg:block">
          <DocumentMockup />
        </div>
      </div>
    </section>
  );
}
