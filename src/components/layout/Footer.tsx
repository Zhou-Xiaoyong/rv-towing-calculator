import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold text-brand-600">RV TowCalc</h3>
            <p className="mt-2 text-sm text-gray-600">
              The only RV towing calculator that combines real vehicle data
              with deep safety analysis. Independent. Accurate. Built for
              safety.
            </p>
          </div>

          {/* Calculators */}
          <div>
            <h4 className="text-sm font-semibold uppercase text-gray-900">
              Calculators
            </h4>
            <ul className="mt-3 space-y-2">
              <li>
                <Link
                  href="/towing-capacity-calculator"
                  className="inline-flex min-h-[44px] items-center text-sm text-gray-600 hover:text-brand-600 md:min-h-0"
                >
                  Towing Capacity
                </Link>
              </li>
              <li>
                <Link
                  href="/payload-calculator"
                  className="inline-flex min-h-[44px] items-center text-sm text-gray-600 hover:text-brand-600 md:min-h-0"
                >
                  Payload Calculator
                </Link>
              </li>
              <li>
                <Link
                  href="/gvwr-calculator"
                  className="inline-flex min-h-[44px] items-center text-sm text-gray-600 hover:text-brand-600 md:min-h-0"
                >
                  GVWR Calculator
                </Link>
              </li>
              <li>
                <Link
                  href="/tongue-weight-calculator"
                  className="inline-flex min-h-[44px] items-center text-sm text-gray-600 hover:text-brand-600 md:min-h-0"
                >
                  Tongue Weight Calculator
                </Link>
              </li>
              <li>
                <Link
                  href="/gcwr-calculator"
                  className="inline-flex min-h-[44px] items-center text-sm text-gray-600 hover:text-brand-600 md:min-h-0"
                >
                  GCWR Calculator
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold uppercase text-gray-900">
              Resources
            </h4>
            <ul className="mt-3 space-y-2">
              <li>
                <Link
                  href="/guides"
                  className="text-sm font-semibold text-gray-900 hover:text-brand-600"
                >
                  All Guides
                </Link>
              </li>
              <li>
                <Link
                  href="/guides/towing-capacity-explained"
                  className="inline-flex min-h-[44px] items-center text-sm text-gray-600 hover:text-brand-600 md:min-h-0"
                >
                  Towing Capacity Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/guides/gvwr-vs-gcwr"
                  className="inline-flex min-h-[44px] items-center text-sm text-gray-600 hover:text-brand-600 md:min-h-0"
                >
                  GVWR vs GCWR
                </Link>
              </li>
              <li>
                <Link
                  href="/guides/payload-capacity"
                  className="inline-flex min-h-[44px] items-center text-sm text-gray-600 hover:text-brand-600 md:min-h-0"
                >
                  Payload Explained
                </Link>
              </li>
              <li>
                <Link
                  href="/guides/tongue-weight"
                  className="inline-flex min-h-[44px] items-center text-sm text-gray-600 hover:text-brand-600 md:min-h-0"
                >
                  Tongue Weight Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/guides/weight-distribution-hitch-setup"
                  className="inline-flex min-h-[44px] items-center text-sm text-gray-600 hover:text-brand-600 md:min-h-0"
                >
                  WDH Setup Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/guides/cat-scale-weighing"
                  className="inline-flex min-h-[44px] items-center text-sm text-gray-600 hover:text-brand-600 md:min-h-0"
                >
                  CAT Scale Weighing
                </Link>
              </li>
              <li>
                <Link
                  href="/guides/fifth-wheel-pin-weight"
                  className="inline-flex min-h-[44px] items-center text-sm text-gray-600 hover:text-brand-600 md:min-h-0"
                >
                  5th Wheel Pin Weight
                </Link>
              </li>
              <li>
                <Link
                  href="/checklist"
                  className="inline-flex min-h-[44px] items-center text-sm text-gray-600 hover:text-brand-600 md:min-h-0"
                >
                  Safety Checklist PDF
                </Link>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="text-sm font-semibold uppercase text-gray-900">
              About
            </h4>
            <ul className="mt-3 space-y-2">
              <li>
                <Link
                  href="/about"
                  className="inline-flex min-h-[44px] items-center text-sm text-gray-600 hover:text-brand-600 md:min-h-0"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/data-sources"
                  className="inline-flex min-h-[44px] items-center text-sm text-gray-600 hover:text-brand-600 md:min-h-0"
                >
                  Data Sources
                </Link>
              </li>
              <li>
                <Link
                  href="/disclaimer"
                  className="inline-flex min-h-[44px] items-center text-sm text-gray-600 hover:text-brand-600 md:min-h-0"
                >
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="inline-flex min-h-[44px] items-center text-sm text-gray-600 hover:text-brand-600 md:min-h-0"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-6">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} RV TowCalc (rvtowingcalc.com).
            All calculations are based on SAE J2807 standards and manufacturer
            specifications. Always verify with your vehicle&apos;s door jamb
            sticker and consult a CAT scale for actual weights. This tool is
            for informational purposes only and does not constitute
            professional advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
