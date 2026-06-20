import type { Metadata } from "next";
import Link from "next/link";
import TowingCalculator from "@/components/calculators/TowingCalculator";
import { DEFAULT_OG_IMAGES } from "@/lib/seo/default-og-image";

export const metadata: Metadata = {
  title: "Towing Capacity Calculator - Can My Truck Tow This Trailer?",
  description:
    "Free RV towing capacity calculator. Enter your truck and trailer specs to get a clear safe/warning/danger result across all six safety checks: towing capacity, payload, GVWR, GCWR, tongue weight, and trailer GVWR. SAE J2807 compliant.",
  alternates: {
    canonical: "https://rvtowingcalc.com/towing-capacity-calculator",
  },
  openGraph: {
    title: "Towing Capacity Calculator - Can My Truck Tow This Trailer?",
    description:
      "Get a clear yes/no answer with safety margin analysis. Checks towing capacity, payload, GVWR, GCWR, and tongue weight.",
    url: "https://rvtowingcalc.com/towing-capacity-calculator",
    images: DEFAULT_OG_IMAGES,
  },
};

const FAQS = [
  {
    q: "How is towing capacity calculated?",
    a: "Towing capacity is set by the vehicle manufacturer based on the SAE J2807 standard. It represents the maximum weight your vehicle can safely pull. However, towing capacity alone is misleading. You also need to check payload capacity, GVWR, GCWR, tongue weight, and trailer GVWR. Our calculator checks all six simultaneously.",
  },
  {
    q: "What is the 80% rule for towing?",
    a: "The 80% rule is an industry best practice that recommends keeping your loaded trailer weight at or below 80% of your vehicle's maximum tow rating. This leaves a 20% safety buffer for wind, hills, emergency maneuvers, and weight estimation errors. Our calculator flags a warning when you exceed 80% of your tow rating.",
  },
  {
    q: "Why is payload more important than towing capacity?",
    a: "Payload capacity is often the first limit you'll exceed. Your truck's payload includes passengers, cargo, and tongue weight (or pin weight for fifth wheels). A half-ton truck with a 12,000 lb tow rating might only have 1,500 lbs of payload. Add 4 passengers (700 lbs), some firewood (200 lbs), and an 800 lb tongue weight, and you're over payload before you even start towing. This is the #1 mistake RV owners make.",
  },
  {
    q: "Where do I find my vehicle's towing specs?",
    a: "Check the sticker inside your driver's door jamb for GVWR and payload capacity. Your owner's manual or the manufacturer's towing guide has GCWR and tow rating by trim/engine/axle ratio configuration. You can also select your vehicle from our database to auto-fill these specs.",
  },
  {
    q: "What's the difference between dry weight and loaded weight?",
    a: "Dry weight (also called UVW or Unloaded Vehicle Weight) is the trailer's weight as it leaves the factory, without water, propane, battery, or cargo. Loaded weight adds all of these. A trailer with a 6,000 lb dry weight can easily weigh 9,000+ lbs when fully loaded. Always calculate using loaded weight, not dry weight.",
  },
  {
    q: "Do I need a weight distribution hitch (WDH)?",
    a: "Generally, if your trailer weighs more than 5,000 lbs or your tongue weight exceeds 500 lbs, a weight distribution hitch is recommended. A WDH distributes tongue weight across all axles of the tow vehicle and trailer, improving stability and steering control. Some manufacturers require a WDH above certain trailer weights to maintain the tow rating.",
  },
];

export default function TowingCapacityCalculatorPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <nav className="mb-4 text-sm text-gray-500">
        <Link href="/" className="hover:text-brand-600">
          Home
        </Link>{" "}
        <span className="mx-1">/</span>{" "}
        <span className="text-gray-900">Towing Capacity Calculator</span>
      </nav>

      {/* Page header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
          Towing Capacity Calculator
        </h1>
        <p className="mt-3 max-w-3xl text-lg text-gray-600">
          Can your truck safely tow this trailer? Enter your vehicle and
          trailer specs below to get a clear safe/warning/danger result across
          all six critical safety checks. No sign-up required.
        </p>
      </div>

      {/* The calculator */}
      <TowingCalculator />

      {/* Educational content */}
      <section className="mt-16 space-y-8">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-gray-900">
            How This Towing Capacity Calculator Works
          </h2>
          <p className="text-gray-600">
            This calculator performs six independent safety checks based on
            SAE J2807 standards. Each check examines a different weight limit
            that could be exceeded when towing. Here&apos;s what each check
            means:
          </p>

          <div className="not-prose my-6 grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-white p-5">
              <h3 className="mb-2 font-bold text-gray-900">
                1. Towing Capacity Check
              </h3>
              <p className="text-sm text-gray-600">
                Compares your loaded trailer weight against the
                manufacturer&apos;s maximum tow rating. Green at 80% or below,
                yellow from 80-100%, red above 100%.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-5">
              <h3 className="mb-2 font-bold text-gray-900">
                2. Payload Capacity Check
              </h3>
              <p className="text-sm text-gray-600">
                Adds up passengers, cargo, and tongue/pin weight and compares
                against your truck&apos;s payload rating. This is the most
                commonly exceeded limit and the #1 cause of towing accidents.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-5">
              <h3 className="mb-2 font-bold text-gray-900">
                3. GVWR Check
              </h3>
              <p className="text-sm text-gray-600">
                Compares your loaded truck weight (curb weight + passengers +
                cargo + tongue weight) against the Gross Vehicle Weight Rating.
                Exceeding GVWR risks tire failure and brake issues.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-5">
              <h3 className="mb-2 font-bold text-gray-900">
                4. GCWR Check
              </h3>
              <p className="text-sm text-gray-600">
                Compares the combined weight of your loaded truck and loaded
                trailer against the Gross Combined Weight Rating. Exceeding GCWR
                strains your engine, transmission, and braking system.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-5 md:col-span-2">
              <h3 className="mb-2 font-bold text-gray-900">
                5. Tongue Weight Ratio Check
              </h3>
              <p className="text-sm text-gray-600">
                Verifies your tongue weight (travel trailer) or pin weight
                (fifth wheel) is within the optimal percentage range. Too low
                causes dangerous trailer sway; too much overloads your rear
                axle. Also checks against your hitch receiver rating.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-5 md:col-span-2">
              <h3 className="mb-2 font-bold text-gray-900">
                6. Trailer GVWR Check
              </h3>
              <p className="text-sm text-gray-600">
                Compares your loaded trailer weight against the trailer&apos;s
                own GVWR (found on the trailer&apos;s VIN sticker). Overloading
                the trailer risks tire blowouts, axle failure, and frame damage.
                This check only appears if you enter a trailer GVWR.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div>
          <h2 className="mb-6 text-2xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <details
                key={idx}
                className="group rounded-xl border border-gray-200 bg-white p-5"
              >
                <summary className="flex cursor-pointer items-center justify-between font-semibold text-gray-900">
                  {faq.q}
                  <svg
                    className="h-5 w-5 text-gray-400 transition-transform group-open:rotate-180"
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
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* JSON-LD FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQS.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.a,
              },
            })),
          }),
        }}
      />
      {/* JSON-LD WebApplication Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "RV Towing Capacity Calculator",
            url: "https://rvtowingcalc.com/towing-capacity-calculator",
            applicationCategory: "AutomotiveApplication",
            operatingSystem: "Web Browser",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
            description:
              "Free RV towing capacity calculator. Checks towing capacity, payload, GVWR, GCWR, and tongue weight. SAE J2807 compliant.",
          }),
        }}
      />
    </div>
  );
}
