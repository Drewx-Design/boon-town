import { NextRequest, NextResponse } from "next/server";
import { addToWaitlist, getWaitlistCount } from "@/lib/waitlist";

// In-memory rate limiter — replace with Vercel KV for production
const rateLimit = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW = 60_000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimit.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimit.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW });
    return false;
  }
  entry.count++;
  return entry.count > RATE_LIMIT_MAX;
}

function getClientIp(request: NextRequest): string {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  );
}

const REFERRAL_CODE_REGEX = /^[a-zA-Z0-9_-]+$/;

export async function GET() {
  const count = await getWaitlistCount();
  return NextResponse.json({ totalCount: count });
}

export async function POST(request: NextRequest) {
  const ip = getClientIp(request);
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later.", code: "RATE_LIMITED" },
      { status: 429 }
    );
  }

  try {
    const body: unknown = await request.json();

    if (
      typeof body !== "object" ||
      body === null ||
      !("email" in body) ||
      typeof (body as Record<string, unknown>).email !== "string"
    ) {
      return NextResponse.json(
        { error: "Email is required", code: "MISSING_EMAIL" },
        { status: 400 }
      );
    }

    const {
      email,
      referralCode,
      source,
    } = body as { email: string; referralCode?: string; source?: string };

    if (typeof email !== "string" || email.length > 254) {
      return NextResponse.json(
        { error: "Please enter a valid email address", code: "INVALID_EMAIL" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address", code: "INVALID_EMAIL" },
        { status: 400 }
      );
    }

    // Validate referral code format if provided
    if (referralCode !== undefined) {
      if (
        typeof referralCode !== "string" ||
        referralCode.length > 20 ||
        !REFERRAL_CODE_REGEX.test(referralCode)
      ) {
        return NextResponse.json(
          { error: "Invalid referral code", code: "INVALID_REFERRAL" },
          { status: 400 }
        );
      }
    }

    const result = await addToWaitlist(
      email,
      referralCode,
      typeof source === "string" ? source : undefined
    );

    // TODO: Send confirmation email via Resend when configured

    return NextResponse.json(result);
  } catch (err) {
    const message =
      err instanceof Error && err.message === "WAITLIST_FULL"
        ? "Waitlist is currently full."
        : "Something went wrong. Please try again.";
    const code =
      err instanceof Error && err.message === "WAITLIST_FULL"
        ? "WAITLIST_FULL"
        : "INTERNAL_ERROR";

    if (code === "INTERNAL_ERROR") {
      console.error("Waitlist API error:", err);
    }

    return NextResponse.json(
      { error: message, code },
      { status: code === "WAITLIST_FULL" ? 503 : 500 }
    );
  }
}
