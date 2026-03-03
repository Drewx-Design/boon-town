import SectionReveal from "./SectionReveal";

const problems = [
  {
    quote:
      "You became an ED to change lives \u2014 not to decode 47-page NOFOs at midnight.",
    highlight: "decode 47-page NOFOs at midnight",
    label: "The Midnight NOFO",
    accent: "border-teal",
  },
  {
    quote:
      "Your budget is tight. A grant consultant costs $5,000. ChatGPT produces generic slop that funders spot immediately. You need something in between.",
    highlight: "You need something in between",
    label: "The Budget Trap",
    accent: "border-gold",
  },
  {
    quote:
      "One compliance miss can cost you the entire award. And you\u2019re the one who has to catch it.",
    highlight: "you\u2019re the one who has to catch it",
    label: "The Compliance Cliff",
    accent: "border-terracotta",
  },
  {
    quote:
      "Your program stats are in a 2022 email. Your last proposal is on someone\u2019s laptop. Your board list is three versions out of date. Every grant starts with two hours of archaeology before you write a single word.",
    highlight: "two hours of archaeology",
    label: "The Archaeology Problem",
    accent: "border-teal-dark",
  },
];

function highlightPhrase(text: string, phrase: string) {
  const index = text.indexOf(phrase);
  if (index === -1) return <>{text}</>;

  return (
    <>
      {text.slice(0, index)}
      <span className="bg-terracotta/8 px-1 text-terracotta-hover decoration-terracotta/30">
        {phrase}
      </span>
      {text.slice(index + phrase.length)}
    </>
  );
}

export default function ProblemSection() {
  return (
    <section className="bg-sage-light px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-2xl">
        <SectionReveal>
          <h2 className="mb-14 text-center font-serif text-3xl font-bold text-teal sm:text-4xl">
            Sound familiar?
          </h2>
        </SectionReveal>

        <div className="space-y-10 sm:space-y-12">
          {problems.map((problem, i) => (
            <SectionReveal key={problem.label} delay={i * 0.08}>
              <div
                className={`relative border-l-2 ${problem.accent} py-1 pl-7 sm:pl-9`}
              >
                {/* Decorative opening quote */}
                <span
                  className="absolute -top-4 left-3 font-serif text-5xl leading-none text-teal/10 sm:left-4 sm:text-6xl"
                  aria-hidden="true"
                >
                  &ldquo;
                </span>

                <p className="font-serif text-lg leading-relaxed text-charcoal sm:text-xl">
                  {highlightPhrase(problem.quote, problem.highlight)}
                </p>

                {/* Attribution label */}
                <div className="mt-4 flex items-center gap-3">
                  <div className="h-px flex-1 max-w-8 bg-charcoal/10" />
                  <span className="text-xs font-medium italic tracking-wide text-charcoal-light/50">
                    {problem.label}
                  </span>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
