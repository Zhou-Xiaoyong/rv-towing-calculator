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
                  className="text-sm text-gray-600 hover:text-brand-600"
                >
                  Towing Capacity
                </Link>
              </li>
              <li>
                <Link
                  href="/payload-calculator"
                  className="text-sm text-gray-600 hover:text-brand-600"
                >
                  Payload Calculator
                </Link>
              </li>
              <li>
                <Link
                  href="/gvwr-calculator"
                  className="text-sm text-gray-600 hover:text-brand-600"
                >
                  GVWR Calculator
                </Link>
              </li>
              <li>
                <Link
                  href="/tongue-weight-calculator"
                  className="text-sm text-gray-600 hover:text-brand-600"
                >
                  Tongue Weight Calculator
                </Link>
              </li>
              <li>
                <Link
                  href="/gcwr-calculator"
                  className="text-sm text-gray-600 hover:text-brand-600"
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
                  href="/guides/towing-capacity-explained"
                  className="text-sm text-gray-600 hover:text-brand-600"
                >
                  Towing Capacity Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/guides/gvwr-vs-gcwr"
                  className="text-sm text-gray-600 hover:text-brand-600"
                >
                  GVWR vs GCWR
                </Link>
              </li>
              <li>
                <Link
                  href="/guides/payload-capacity"
                  className="text-sm text-gray-600 hover:text-brand-600"
                >
                  Payload Explained
                </Link>
              </li>
              <li>
                <Link
                  href="/guides/tongue-weight"
                  className="text-sm text-gray-600 hover:text-brand-600"
                >
                  Tongue Weight Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/guides/cat-scale-weighing"
                  className="text-sm text-gray-600 hover:text-brand-600"
                >
                  CAT Scale Weighing
                </Link>
              </li>
              <li>
                <Link
                  href="/guides/weight-distribution-hitch-setup"
                  className="text-sm text-gray-600 hover:text-brand-600"
                >
                  WDH Setup Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/guides/exceed-gvwr-dangers"
                  className="text-sm text-gray-600 hover:text-brand-600"
                >
                  Exceed GVWR Dangers
                </Link>
              </li>
              <li>
                <Link
                  href="/guides/best-half-ton-trucks-8000-lbs"
                  className="text-sm text-gray-600 hover:text-brand-600"
                >
                  Best Half-Ton Trucks
                </Link>
              </li>
              <li>
                <Link
                  href="/guides/fifth-wheel-vs-travel-trailer"
                  className="text-sm text-gray-600 hover:text-brand-600"
                >
                  5th Wheel vs Travel Trailer
                </Link>
              </li>
              <li>
                <Link
                  href="/guides/electric-trucks-rv-towing"
                  className="text-sm text-gray-600 hover:text-brand-600"
                >
                  EV Trucks for Towing
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
                  className="text-sm text-gray-600 hover:text-brand-600"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/data-sources"
                  className="text-sm text-gray-600 hover:text-brand-600"
                >
                  Data Sources
                </Link>
              </li>
              <li>
                <Link
                  href="/disclaimer"
                  className="text-sm text-gray-600 hover:text-brand-600"
                >
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-gray-600 hover:text-brand-600"
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
