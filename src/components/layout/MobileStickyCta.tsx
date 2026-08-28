"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const DISMISS_KEY = "rvtc-sticky-cta-dismissed";

/**
 * Mobile-only sticky bottom CTA shown on guide article pages.
 *
 * ~41% of site traffic is mobile. Guide articles are long (1200-1800 words);
 * on a phone the calculator CTA at the end of the article is many screens
 * away from the top. This bar keeps a one-tap path from any reading position
 * to the flagship calculator. Hidden on desktop, on print, and dismissible
 * for the rest of the browser session.
 */
export default function MobileStickyCta() {
  const pathname = usePathname();
  const [dismissed, setDismissed] = useState(true);

  // Article pages only: /guides/<slug>, not the /guides listing itself,
  // not calculators or utility pages (they already have their own CTAs).
  const isGuideArticle = /^\/guides\/[^/]+\/?$/.test(pathname ?? "");

  useEffect(() => {
    try {
      setDismissed(sessionStorage.getItem(DISMISS_KEY) === "1");
    } catch {
      // Private browsing / storage disabled: just show the bar.
      setDismissed(false);
    }
  }, []);

  if (!isGuideArticle || dismissed) return null;

  const dismiss = () => {
    setDismissed(true);
    try {
      sessionStorage.setItem(DISMISS_KEY, "1");
    } catch {
      // Ignore storage failures.
    }
  };

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-gray-200 bg-white/95 shadow-[0_-4px_16px_rgba(0,0,0,0.08)] backdrop-blur md:hidden print:hidden"
      role="complementary"
      aria-label="Calculator shortcut"
    >
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3">
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold text-gray-900">
            Can your truck tow it safely?
          </p>
          <p className="truncate text-xs text-gray-500">
            Free 2-minute safety check &middot; no sign-up
          </p>
        </div>
        <Link
          href="/towing-capacity-calculator"
          className="shrink-0 rounded-xl bg-brand-600 px-5 py-3 text-sm font-bold text-white shadow-md transition-colors hover:bg-brand-700 active:scale-[0.98]"
        >
          Check Now
        </Link>
        <button
          type="button"
          onClick={dismiss}
          aria-label="Dismiss"
          className="-mr-1 shrink-0 rounded-lg p-2 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
