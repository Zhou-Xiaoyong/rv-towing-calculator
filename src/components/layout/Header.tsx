"use client";

import { useState } from "react";
import Link from "next/link";

const CALCULATOR_LINKS = [
  { href: "/towing-capacity-calculator", label: "Towing Capacity" },
  { href: "/payload-calculator", label: "Payload" },
  { href: "/gvwr-calculator", label: "GVWR" },
  { href: "/tongue-weight-calculator", label: "Tongue Weight" },
  { href: "/gcwr-calculator", label: "GCWR" },
];

const GUIDE_LINKS = [
  { href: "/guides/towing-capacity-explained", label: "Towing Capacity Guide" },
  { href: "/guides/gvwr-vs-gcwr", label: "GVWR vs GCWR" },
  { href: "/guides/payload-capacity", label: "Payload Explained" },
  { href: "/guides/tongue-weight", label: "Tongue Weight Guide" },
  { href: "/guides/cat-scale-weighing", label: "CAT Scale Weighing" },
  { href: "/guides/weight-distribution-hitch-setup", label: "WDH Setup Guide" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [guidesOpen, setGuidesOpen] = useState(false);

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
                  {GUIDE_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2 text-sm text-gray-600 hover:bg-brand-50 hover:text-brand-600"
                    >
                      {link.label}
                    </Link>
                  ))}
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
        <nav className="border-t border-gray-200 bg-white px-4 py-4 md:hidden">
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
            {GUIDE_LINKS.map((link) => (
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
        </nav>
      )}
    </header>
  );
}
