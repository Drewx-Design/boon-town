"use client";

import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, Copy, Loader2 } from "lucide-react";
import type { WaitlistResult } from "@/lib/waitlist";
import { API_PATHS } from "@/lib/constants";

interface WaitlistFormProps {
  variant?: "light" | "dark";
  source?: string;
}

export default function WaitlistForm({
  variant = "light",
  source = "hero",
}: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [successData, setSuccessData] = useState<WaitlistResult | null>(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [copied, setCopied] = useState(false);

  const isDark = variant === "dark";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus("loading");
    setErrorMessage("");

    try {
      const params = new URLSearchParams(window.location.search);
      const ref = params.get("ref");

      const res = await fetch(API_PATHS.waitlist, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim(),
          referralCode: ref || undefined,
          source,
        }),
      });

      const data: WaitlistResult = await res.json();

      if (!res.ok) {
        throw new Error(
          (data as unknown as { error?: string }).error ||
            "Something went wrong"
        );
      }

      setSuccessData(data);
      setStatus("success");
    } catch (err) {
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong"
      );
      setStatus("error");
    }
  }

  async function copyReferralLink() {
    if (!successData) return;
    const link = `${window.location.origin}?ref=${successData.referralCode}`;
    try {
      await navigator.clipboard.writeText(link);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API not available in this context
    }
  }

  return (
    <div className="w-full max-w-lg">
      <AnimatePresence mode="wait">
        {status === "success" && successData ? (
          <m.div
            key="success"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", bounce: 0.15, duration: 0.6 }}
            className={`rounded-2xl border p-6 ${
              isDark
                ? "border-white/20 bg-white/10 text-white"
                : "border-teal/10 bg-white text-charcoal"
            }`}
          >
            <div className="mb-3 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-sage/20">
                <Check className="h-4 w-4 text-sage" strokeWidth={3} />
              </div>
              <p className="font-serif text-lg font-semibold">
                You&apos;re in!
              </p>
            </div>

            <p
              className={`mb-4 text-sm ${isDark ? "text-white/70" : "text-charcoal-light"}`}
            >
              You&apos;re #{successData.position.toLocaleString()} on the
              waitlist. Share your link to move up.
            </p>

            <button
              onClick={copyReferralLink}
              className={`flex w-full items-center justify-between rounded-xl border px-4 py-3 text-sm transition-colors ${
                isDark
                  ? "border-white/20 bg-white/5 hover:bg-white/10"
                  : "border-teal/10 bg-sage-light hover:bg-sage-light/70"
              }`}
            >
              <span className="truncate font-mono text-xs">
                boon.town?ref={successData.referralCode}
              </span>
              {copied ? (
                <Check className="h-4 w-4 shrink-0 text-sage" />
              ) : (
                <Copy
                  className={`h-4 w-4 shrink-0 ${isDark ? "text-white/50" : "text-charcoal-light"}`}
                />
              )}
            </button>

            <div
              className={`mt-4 space-y-1 text-xs ${isDark ? "text-white/50" : "text-charcoal-light"}`}
            >
              <p>1 referral &mdash; Move up 10 spots</p>
              <p>3 referrals &mdash; Unlock early access</p>
              <p>5 referrals &mdash; Free first LOI</p>
            </div>
          </m.div>
        ) : (
          <m.form
            key="form"
            onSubmit={handleSubmit}
            initial={false}
            className="w-full"
          >
            <div
              className={`flex flex-col gap-3 sm:flex-row sm:gap-0 sm:rounded-2xl sm:border sm:p-1.5 ${
                isDark
                  ? "sm:border-white/20 sm:bg-white/10"
                  : "sm:border-teal/10 sm:bg-white sm:shadow-lg sm:shadow-teal/5"
              }`}
            >
              <input
                type="email"
                inputMode="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@nonprofit.org"
                disabled={status === "loading"}
                className={`h-12 flex-1 rounded-xl px-4 text-base outline-none transition-colors sm:h-11 sm:rounded-l-xl sm:rounded-r-none sm:border-0 sm:bg-transparent ${
                  isDark
                    ? "border border-white/20 bg-white/10 text-white placeholder:text-white/40 focus:border-white/40"
                    : "border border-teal/10 bg-white text-charcoal placeholder:text-charcoal-light/50 focus:border-teal/30"
                } disabled:opacity-50`}
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="flex h-12 items-center justify-center gap-2 rounded-xl bg-terracotta px-6 font-medium text-white transition-all hover:bg-terracotta-hover active:scale-[0.98] disabled:opacity-70 sm:h-11 sm:rounded-l-none sm:rounded-r-xl"
              >
                {status === "loading" ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <>
                    Join Waitlist
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>
            </div>

            <AnimatePresence>
              {status === "error" && errorMessage && (
                <m.p
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-2 text-sm text-red-500"
                >
                  {errorMessage}
                </m.p>
              )}
            </AnimatePresence>
          </m.form>
        )}
      </AnimatePresence>
    </div>
  );
}
