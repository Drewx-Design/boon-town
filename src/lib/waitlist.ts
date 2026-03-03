import { nanoid } from "nanoid";

// In-memory store for development.
// Replace with Vercel KV or Supabase for production.
const MAX_STORE_SIZE = 10_000;

const store = new Map<
  string,
  {
    email: string;
    referralCode: string;
    referredBy: string | null;
    source: string | null;
    joinedAt: string;
    position: number;
  }
>();

let counter = 0;
const referralCounts = new Map<string, number>();

export interface WaitlistResult {
  success: boolean;
  position: number;
  referralCode: string;
}

export async function addToWaitlist(
  email: string,
  referredByCode?: string,
  source?: string
): Promise<WaitlistResult> {
  const normalized = email.toLowerCase().trim();

  // Check for duplicate
  const existing = store.get(normalized);
  if (existing) {
    return {
      success: true,
      position: existing.position,
      referralCode: existing.referralCode,
    };
  }

  if (store.size >= MAX_STORE_SIZE) {
    throw new Error("WAITLIST_FULL");
  }

  counter++;
  const referralCode = nanoid(8);

  store.set(normalized, {
    email: normalized,
    referralCode,
    referredBy: referredByCode || null,
    source: source || null,
    joinedAt: new Date().toISOString(),
    position: counter,
  });

  // Track referral credit only for valid existing referral codes
  if (referredByCode) {
    const referrerExists = [...store.values()].some(
      (e) => e.referralCode === referredByCode
    );
    if (referrerExists) {
      const current = referralCounts.get(referredByCode) || 0;
      referralCounts.set(referredByCode, current + 1);
    }
  }

  return {
    success: true,
    position: counter,
    referralCode,
  };
}

export async function getWaitlistCount(): Promise<number> {
  return counter;
}
