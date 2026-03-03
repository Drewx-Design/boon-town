// Multi-wave curvy border — consistent across all section transitions
const wavePath =
  "M0,32 C120,58 240,6 360,32 C480,58 600,6 720,32 C840,58 960,6 1080,32 C1200,58 1320,6 1440,32 L1440,64 L0,64 Z";

interface SectionDividerProps {
  /** Tailwind bg class matching the section ABOVE */
  topBg: string;
  /** Tailwind fill class matching the section BELOW */
  fillClass: string;
}

export default function SectionDivider({
  topBg,
  fillClass,
}: SectionDividerProps) {
  return (
    <div className={`${topBg} -mb-px`} aria-hidden="true">
      <svg
        viewBox="0 0 1440 64"
        preserveAspectRatio="none"
        className="block h-[32px] w-full sm:h-[48px] lg:h-[64px]"
      >
        <path d={wavePath} className={fillClass} />
      </svg>
    </div>
  );
}
