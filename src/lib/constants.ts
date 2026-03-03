export const SECTION_IDS = {
  waitlist: "waitlist",
} as const;

export const API_PATHS = {
  waitlist: "/api/waitlist",
} as const;

/** Shared quality scores used in Hero badges and OutcomeShowcase scorecard */
export const QUALITY_SCORES = [
  { label: "NOFO Coverage", value: "98%", description: "Requirements addressed" },
  { label: "Budget Coherence", value: "PASS", description: "Numbers match narrative" },
  { label: "Voice Match", value: "94%", description: "Sounds like your org" },
  { label: "Compliance", value: "PASS", description: "Zero critical defects" },
  { label: "Funder Alignment", value: "87%", description: "Matches funder priorities" },
] as const;
