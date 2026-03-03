import { Calendar, Target, BarChart3 } from "lucide-react";
import SectionReveal from "./SectionReveal";

const signals = [
  { icon: Calendar, label: "Deadlines" },
  { icon: Target, label: "Alignment" },
  { icon: BarChart3, label: "Progress" },
];

export default function PortfolioView() {
  return (
    <section className="px-6 py-14 sm:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <SectionReveal>
          <h2 className="mb-4 font-serif text-2xl font-bold text-teal sm:text-3xl">
            Every grant. Every deadline. One&nbsp;place.
          </h2>
          <p className="mx-auto mb-6 max-w-lg text-charcoal-light">
            Soon: a single view of your entire funding strategy &mdash; active
            grants, upcoming deadlines, and alignment between what you promised
            and what you&rsquo;ve delivered.
          </p>

          {/* Minimal visual — three signal icons */}
          <div className="mb-4 flex items-center justify-center gap-6">
            {signals.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.label} className="flex flex-col items-center gap-1">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal/6">
                    <Icon className="h-4 w-4 text-teal/50" />
                  </div>
                  <span className="text-[10px] font-medium text-charcoal-light/40">
                    {s.label}
                  </span>
                </div>
              );
            })}
          </div>

          <p className="text-xs italic text-charcoal-light/40">
            On the roadmap
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}
