"use client";

import { m } from "framer-motion";
import { useScrollY } from "@/hooks/useScrollY";
import { SECTION_IDS } from "@/lib/constants";

export default function Header() {
  const y = useScrollY();
  const scrolled = y > 40;

  return (
    <m.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", bounce: 0.1, duration: 0.6, delay: 0.1 }}
      className={`fixed top-0 right-0 left-0 z-40 transition-all duration-300 ${
        scrolled
          ? "border-b border-teal/5 bg-cream/95 backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="font-serif text-xl font-bold text-teal">
          Boon.Town
        </a>
        <a
          href={`#${SECTION_IDS.waitlist}`}
          className={`rounded-xl px-5 py-2.5 text-sm font-medium transition-all ${
            scrolled
              ? "bg-terracotta text-white hover:bg-terracotta-hover"
              : "text-teal hover:text-teal-dark"
          }`}
        >
          Join the Waitlist
        </a>
      </div>
    </m.header>
  );
}
