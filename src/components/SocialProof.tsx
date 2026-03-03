"use client";

import { useEffect, useRef } from "react";
import SectionReveal from "./SectionReveal";

function AnimatedCounter({ target }: { target: number }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();
          const duration = 1500;
          const start = performance.now();

          function update(now: number) {
            if (!el) return;
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            el.textContent = Math.round(eased * target).toLocaleString();
            if (progress < 1) requestAnimationFrame(update);
          }

          requestAnimationFrame(update);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>0</span>;
}

export default function SocialProof() {
  return (
    <section className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl">
        <SectionReveal>
          <h2 className="mb-14 text-center font-serif text-3xl font-bold text-teal sm:text-4xl">
            Built for the mission-driven
          </h2>
        </SectionReveal>

        <SectionReveal className="mb-12">
          <div className="mx-auto max-w-2xl rounded-2xl border border-teal/6 bg-white p-8 text-center shadow-sm">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-teal/8">
              <span className="font-serif text-xl font-bold text-teal">
                BT
              </span>
            </div>
            <p className="mb-2 leading-relaxed text-charcoal-light">
              &ldquo;Built alongside grant professionals who told us the same
              thing: the compliance and paperwork burns people out, but the
              mission narrative is where the magic happens. So we built a
              system that handles the 80% &mdash; so you never lose the
              20% that matters.&rdquo;
            </p>
            <p className="text-sm font-medium text-teal">
              The Boon Town Team
            </p>
          </div>
        </SectionReveal>

        <SectionReveal className="mb-12">
          <div className="mx-auto max-w-md rounded-2xl border border-teal/8 bg-sage-light p-6 text-center">
            <p className="font-serif text-3xl font-bold text-teal">
              <AnimatedCounter target={1247} />
            </p>
            <p className="mt-1 text-sm text-charcoal-light">
              nonprofit leaders on the waitlist
            </p>
          </div>
        </SectionReveal>

        <SectionReveal>
          <p className="mb-6 text-center text-xs font-medium uppercase tracking-widest text-charcoal-light/40">
            Works with the grant systems you already use
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
