"use client";

import { m, AnimatePresence } from "framer-motion";
import { useScrollY } from "@/hooks/useScrollY";
import { SECTION_IDS } from "@/lib/constants";

export default function StickyMobileCTA() {
  const y = useScrollY();
  const visible = y > 600;

  return (
    <AnimatePresence>
      {visible && (
        <m.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
          className="fixed right-0 bottom-0 left-0 z-40 border-t border-teal/5 bg-cream/95 backdrop-blur-sm md:hidden"
        >
          <div className="flex items-center justify-between px-4 py-3">
            <span className="font-serif text-sm font-semibold text-teal">
              Boon Town
            </span>
            <a
              href={`#${SECTION_IDS.waitlist}`}
              className="rounded-xl bg-terracotta px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-terracotta-hover"
            >
              Join Waitlist
            </a>
          </div>
        </m.div>
      )}
    </AnimatePresence>
  );
}
