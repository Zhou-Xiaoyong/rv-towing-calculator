"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const CALCULATOR_LINKS = [
  { href: "/towing-capacity-calculator", label: "Towing Capacity" },
  { href: "/payload-calculator", label: "Payload" },
  { href: "/gvwr-calculator", label: "GVWR" },
  { href: "/tongue-weight-calculator", label: "Tongue Weight" },
  { href: "/gcwr-calculator", label: "GCWR" },
];

// Curated featured guides only. The full, ever-growing guide list lives on
// /guides (categorized hub page). New guides no longer require a Header change.
const FEATURED_GUIDES = [
  { href: "/guides/towing-capacity-explained", label: "Towing Capacity Guide" },
  { href: "/guides/gvwr-vs-gcwr", label: "GVWR vs GCWR" },
  { href: "/guides/payload-capacity", label: "Payload Explained" },
  { href: "/guides/tongue-weight", label: "Tongue Weight Guide" },
  { href: "/guides/weight-distribution-hitch-setup", label: "WDH Setup Guide" },
  { href: "/guides/cat-scale-weighing", label: "CAT Scale Weighing" },
  { href: "/guides/fifth-wheel-pin-weight", label: "5th Wheel Pin Weight" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [guidesOpen, setGuidesOpen] = useState(false);

  // Mobile UX: lock background scroll while the menu is open and allow
  // closing it with the Escape key (both standard mobile menu behaviors).
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [mobileMenuOpen]);

  // Close the mobile menu on route change so users never land on a new page
  // with a stale menu covering the content.
  const pathname = usePathname();
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-brand-600">RV TowCalc</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {CALCULATOR_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center px-2 py-2 text-sm font-medium text-gray-600 transition-colors hover:text-brand-600"
            >
              {link.label}
            </Link>
          ))}

          {/* Guides dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setGuidesOpen(true)}
            onMouseLeave={() => setGuidesOpen(false)}
          >
            <button
              className="flex items-center gap-1 px-2 py-2 text-sm font-medium text-gray-600 transition-colors hover:text-brand-600"
              type="button"
            >
              Guides
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {guidesOpen && (
              <div className="absolute left-0 top-full w-56 pt-1">
                <div className="rounded-lg border border-gray-200 bg-white py-2 shadow-lg">
                  {FEATURED_GUIDES.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2 text-sm text-gray-600 hover:bg-brand-50 hover:text-brand-600"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Link
                    href="/checklist"
                    className="block px-4 py-2 text-sm text-gray-600 hover:bg-brand-50 hover:text-brand-600"
                  >
                    Safety Checklist PDF
                  </Link>
                  <div className="my-2 border-t border-gray-100" />
                  <Link
                    href="/guides"
                    className="flex items-center justify-between px-4 py-2 text-sm font-semibold text-brand-600 hover:bg-brand-50"
                  >
                    View All Guides
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </nav>

        <button
          className="rounded-lg p-2 text-gray-600 transition-colors hover:bg-gray-100 hover:text-brand-600 md:hidden"
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileMenuOpen && (
        <nav
          className="border-t border-gray-200 bg-white px-4 py-4 md:hidden"
          aria-label="Mobile navigation"
        >
          <div className="max-h-[calc(100vh-8rem)] overflow-y-auto overscroll-contain">
          <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
            Calculators
          </div>
          <div className="grid grid-cols-1 gap-1">
            {CALCULATOR_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block rounded-lg px-4 py-3 text-base font-medium text-gray-700 transition-colors hover:bg-brand-50 hover:text-brand-600 active:bg-brand-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="mb-3 mt-6 text-xs font-semibold uppercase tracking-wider text-gray-400">
            Guides
          </div>
          <div className="grid grid-cols-1 gap-1">
            {FEATURED_GUIDES.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block rounded-lg px-4 py-3 text-base font-medium text-gray-700 transition-colors hover:bg-brand-50 hover:text-brand-600 active:bg-brand-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/checklist"
              className="block rounded-lg px-4 py-3 text-base font-medium text-gray-700 transition-colors hover:bg-brand-50 hover:text-brand-600 active:bg-brand-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Safety Checklist PDF
            </Link>
            <Link
              href="/guides"
              className="mt-2 block rounded-lg border border-brand-200 bg-brand-50 px-4 py-3 text-base font-semibold text-brand-700 transition-colors hover:bg-brand-100 active:bg-brand-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              View All Guides
            </Link>
          </div>
          </div>
        </nav>
      )}
    </header>
  );
}
