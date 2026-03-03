import SectionReveal from "./SectionReveal";
import WaitlistForm from "./WaitlistForm";

export default function FinalCTA() {
  return (
    <section className="bg-teal px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <SectionReveal>
          <h2 className="mb-4 font-serif text-3xl font-bold text-white sm:text-4xl">
            Your mission is too important
            <br />
            for grant paperwork to get in the way.
          </h2>
          <p className="mb-10 text-lg text-white/70">
            Join the waitlist. Your first Letter of Inquiry is on us.
          </p>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <div className="flex justify-center">
            <WaitlistForm variant="dark" source="final-cta" />
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
