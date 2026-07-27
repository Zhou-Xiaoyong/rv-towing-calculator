import type { Metadata } from "next";
import Link from "next/link";
import { ArticleJsonLd } from "@/components/seo/JsonLd";
import { DEFAULT_OG_IMAGES } from "@/lib/seo/default-og-image";

export const metadata: Metadata = {
  title: "Trailer Loading Position: Where to Place Cargo for Safe Towing",
  description:
    "Learn the correct way to load your travel trailer or fifth wheel for safe towing. Discover the 60/40 rule, tongue weight optimization, and how cargo placement affects stability and sway prevention.",
  alternates: {
    canonical: "https://rvtowingcalc.com/guides/trailer-loading-position",
  },
  openGraph: {
    title: "Trailer Loading Position Guide: Safe Cargo Placement",
    description:
      "Master trailer loading for safe towing. Learn the 60/40 rule, tongue weight optimization, and cargo distribution techniques.",
    url: "https://rvtowingcalc.com/guides/trailer-loading-position",
    images: DEFAULT_OG_IMAGES,
  },
};

const FAQS = [
  {
    q: "What is the 60/40 rule for trailer loading?",
    a: "The 60/40 rule is a simple guideline for loading travel trailers: place 60% of your cargo weight forward of the trailer's axle(s), and 40% behind the axle(s). This ensures proper tongue weight distribution. For fifth wheels, the rule is reversed: 60% of cargo should be ahead of the pin (in the front half of the trailer), which naturally creates the correct 20-25% pin weight.",
  },
  {
    q: "How does cargo position affect tongue weight?",
    a: "Cargo position directly impacts tongue weight. Moving cargo forward increases tongue weight; moving it backward decreases tongue weight. For travel trailers, the goal is 10-15% tongue weight, which is achieved by keeping most cargo ahead of the axle. For fifth wheels, 20-25% pin weight requires loading heavier items near the front of the trailer, over the pin box.",
  },
  {
    q: "Can loading position cause trailer sway?",
    a: "Yes. Improper loading is one of the leading causes of trailer sway. If too much weight is placed too far back, tongue weight drops below 10% for travel trailers, making the trailer dynamically unstable. Conversely, too much weight forward can overload the tow vehicle's rear axle. The ideal position keeps the center of gravity low and ahead of the trailer's center point.",
  },
  {
    q: "Should I load heavy items high or low?",
    a: "Always load heavy items low and forward. A high center of gravity makes the trailer top-heavy and prone to sway, especially in crosswinds or when passing other vehicles. Place heavy items like water tanks (when full), propane tanks, and coolers as low as possible, preferably near the front of the trailer. Lighter items like sleeping bags and clothing can go higher and toward the back.",
  },
  {
    q: "How do I adjust tongue weight with cargo placement?",
    a: "To increase tongue weight, shift cargo toward the front of the trailer. To decrease tongue weight, shift cargo toward the rear. Always re-measure tongue weight after making adjustments. If tongue weight is too low (causing sway), move heavy items forward or add weight to the front storage compartment. If too high (overloading the truck), move items backward or reduce cargo weight.",
  },
];

export default function TrailerLoadingPositionGuidePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <ArticleJsonLd
        title="Trailer Loading Position: Where to Place Cargo for Safe Towing"
        description="Learn the correct way to load your travel trailer or fifth wheel for safe towing."
        url="https://rvtowingcalc.com/guides/trailer-loading-position"
        datePublished="2026-07-20"
      />

      <nav className="mb-4 text-sm text-gray-500">
        <Link href="/" className="hover:text-brand-600">
          Home
        </Link>{" "}
        <span className="mx-1">/</span>{" "}
        <Link href="/guides" className="hover:text-brand-600">
          Guides
        </Link>{" "}
        <span className="mx-1">/</span>{" "}
        <span className="text-gray-900">Trailer Loading Position</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
        Trailer Loading Position: Where to Place Cargo for Safe Towing
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        Proper trailer loading is the unsung hero of safe towing. Even if your
        weight calculations are perfect, putting cargo in the wrong place can
        cause dangerous trailer sway, overload your truck, or make handling
        unpredictable. This guide explains the science of cargo placement and
        gives you actionable rules to follow.
      </p>

      {/* Hero image placeholder */}
      <div className="mt-8 rounded-2xl border border-gray-200 bg-gradient-to-br from-brand-50 to-amber-50 p-8 text-center">
        <svg
          className="mx-auto h-24 w-24 text-brand-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
        <h2 className="mt-4 text-xl font-bold text-gray-900">
          The 60/40 Rule: Your Loading Blueprint
        </h2>
        <p className="mt-2 text-gray-600">
          60% of cargo forward of the axle • 40% behind • Center of gravity low
        </p>
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          Why Loading Position Matters
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-100">
              <svg className="h-5 w-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h3 className="mt-3 font-semibold text-gray-900">Trailer Sway</h3>
            <p className="mt-2 text-sm text-gray-600">
              Too much weight at the back reduces tongue weight below 10%, making the trailer prone to dangerous oscillation.
            </p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100">
              <svg className="h-5 w-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="mt-3 font-semibold text-gray-900">Overloaded Axles</h3>
            <p className="mt-2 text-sm text-gray-600">
              Uneven weight distribution can overload individual axles, causing tire blowouts or suspension failure.
            </p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100">
              <svg className="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 className="mt-3 font-semibold text-gray-900">Handling Issues</h3>
            <p className="mt-2 text-sm text-gray-600">
              A high center of gravity makes the trailer unstable in crosswinds and during evasive maneuvers.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          The 60/40 Rule: Step-by-Step Guide
        </h2>
        <p className="mt-4 text-gray-600">
          Follow these steps to load your trailer correctly for safe towing:
        </p>

        <div className="mt-6 space-y-4">
          <div className="flex gap-4 rounded-xl border border-gray-200 bg-white p-6">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-brand-600 text-white">
              1
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Start with Heavy Items Forward</h3>
              <p className="mt-2 text-sm text-gray-600">
                Place the heaviest items first, positioned ahead of the trailer's axle(s). This includes water tanks (when full), propane tanks, batteries, and large coolers. Aim for 60% of your total cargo weight in the front half.
              </p>
            </div>
          </div>

          <div className="flex gap-4 rounded-xl border border-gray-200 bg-white p-6">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-brand-600 text-white">
              2
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Keep Weight Low</h3>
              <p className="mt-2 text-sm text-gray-600">
                Load heavy items as low as possible in the trailer. Avoid stacking heavy gear on upper shelves or overhead compartments. A lower center of gravity dramatically improves stability and reduces sway risk.
              </p>
            </div>
          </div>

          <div className="flex gap-4 rounded-xl border border-gray-200 bg-white p-6">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-brand-600 text-white">
              3
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Distribute Evenly Side-to-Side</h3>
              <p className="mt-2 text-sm text-gray-600">
                Balance weight equally on both sides of the trailer. Uneven loading causes the trailer to lean and can overload individual tires. Use the front and rear storage compartments to fine-tune side-to-side balance.
              </p>
            </div>
          </div>

          <div className="flex gap-4 rounded-xl border border-gray-200 bg-white p-6">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-brand-600 text-white">
              4
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Place Light Items Toward the Back</h3>
              <p className="mt-2 text-sm text-gray-600">
                Lighter items like clothing, sleeping bags, and personal gear can go in the rear half of the trailer. This keeps the 60/40 ratio intact while maximizing storage space.
              </p>
            </div>
          </div>

          <div className="flex gap-4 rounded-xl border border-gray-200 bg-white p-6">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-brand-600 text-white">
              5
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Secure Everything</h3>
              <p className="mt-2 text-sm text-gray-600">
                Use tie-downs, bungee cords, and cargo nets to secure all items. Loose cargo can shift during transit, changing your carefully balanced weight distribution. This is especially important for heavy items.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          Travel Trailer vs. Fifth Wheel: Key Differences
        </h2>
        <div className="mt-6 overflow-hidden rounded-xl border border-gray-200">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="w-1/3 px-6 py-4 text-left font-semibold text-gray-700">
                  Aspect
                </th>
                <th className="w-1/3 px-6 py-4 text-left font-semibold text-gray-700">
                  Travel Trailer
                </th>
                <th className="w-1/3 px-6 py-4 text-left font-semibold text-gray-700">
                  Fifth Wheel
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr>
                <td className="px-6 py-4 text-gray-900">Optimal Weight Distribution</td>
                <td className="px-6 py-4 text-gray-600">60% forward of axle, 40% behind</td>
                <td className="px-6 py-4 text-gray-600">60% ahead of pin, 40% behind</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-6 py-4 text-gray-900">Tongue/Pin Weight Target</td>
                <td className="px-6 py-4 text-gray-600">10-15% of loaded trailer weight</td>
                <td className="px-6 py-4 text-gray-600">20-25% of loaded trailer weight</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-gray-900">Heavy Item Placement</td>
                <td className="px-6 py-4 text-gray-600">Front storage compartment, near hitch</td>
                <td className="px-6 py-4 text-gray-600">Front half of trailer, over pin box</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-6 py-4 text-gray-900">Sway Risk Factor</td>
                <td className="px-6 py-4 text-gray-600">Higher — sensitive to rear-heavy loading</td>
                <td className="px-6 py-4 text-gray-600">Lower — pin weight naturally stabilizes</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-gray-900">Water Tank Strategy</td>
                <td className="px-6 py-4 text-gray-600">Fill only what you need for the trip</td>
                <td className="px-6 py-4 text-gray-600">Can carry full tanks (weight over axles)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          Common Loading Mistakes to Avoid
        </h2>
        <div className="mt-6 space-y-4">
          <div className="flex gap-4 rounded-xl border-l-4 border-red-500 bg-red-50 p-6">
            <svg className="flex h-6 w-6 flex-shrink-0 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <h3 className="font-semibold text-red-800">Loading Heavy Items at the Back</h3>
              <p className="mt-1 text-sm text-red-700">
                This is the #1 mistake that causes trailer sway. Always put heavy gear forward.
              </p>
            </div>
          </div>

          <div className="flex gap-4 rounded-xl border-l-4 border-red-500 bg-red-50 p-6">
            <svg className="flex h-6 w-6 flex-shrink-0 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 17l5-5m0 0l-5-5m5 5H3" />
            </svg>
            <div>
              <h3 className="font-semibold text-red-800">Stacking Weight High</h3>
              <p className="mt-1 text-sm text-red-700">
                A high center of gravity makes your trailer unstable in winds and during maneuvers. Keep heavy items low.
              </p>
            </div>
          </div>

          <div className="flex gap-4 rounded-xl border-l-4 border-red-500 bg-red-50 p-6">
            <svg className="flex h-6 w-6 flex-shrink-0 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
            </svg>
            <div>
              <h3 className="font-semibold text-red-800">Ignoring Side-to-Side Balance</h3>
              <p className="mt-1 text-sm text-red-700">
                Uneven loading causes tire wear, poor handling, and can lead to a blowout on the overloaded side.
              </p>
            </div>
          </div>

          <div className="flex gap-4 rounded-xl border-l-4 border-red-500 bg-red-50 p-6">
            <svg className="flex h-6 w-6 flex-shrink-0 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
            <div>
              <h3 className="font-semibold text-red-800">Overloading the Truck Bed</h3>
              <p className="mt-1 text-sm text-red-700">
                Remember that tongue weight counts toward your truck's payload. Don't overload the bed with heavy items that could push you over GVWR.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          Fine-Tuning: How to Adjust for Perfect Balance
        </h2>
        <p className="mt-4 text-gray-600">
          After loading, verify your setup and make adjustments if needed:
        </p>
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <h3 className="font-semibold text-gray-900">
              1. Measure Tongue/Pin Weight
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Use a tongue weight scale or CAT scale to verify your tongue weight is within the optimal range (10-15% for travel trailers, 20-25% for fifth wheels).
            </p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <h3 className="font-semibold text-gray-900">
              2. Check Visual Balance
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Step back and look at your trailer. It should sit level, not nose-down or tail-heavy. The hitch should be at the correct height.
            </p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <h3 className="font-semibold text-gray-900">
              3. Do a Test Drive
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Drive on a quiet road and test braking, turning, and highway speeds. If you feel sway or instability, stop and adjust your load.
            </p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <h3 className="font-semibold text-gray-900">
              4. Use a Weight Distribution Hitch
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              For travel trailers over 5,000 lbs, a WDH distributes tongue weight across all axles, improving handling and reducing sway.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mt-12">
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
      </section>

      {/* Call to Action */}
      <section className="mt-16 rounded-2xl bg-brand-600 p-8 text-center text-white">
        <h2 className="text-2xl font-bold">Ready to Check Your Setup?</h2>
        <p className="mt-2 text-brand-100">
          Run all six safety checks in under two minutes. Free, no sign-up.
        </p>
        <Link
          href="/towing-capacity-calculator"
          className="mt-6 inline-block rounded-xl bg-white px-8 py-4 text-base font-bold text-brand-700 shadow-lg transition-all hover:bg-brand-50 active:scale-[0.99]"
        >
          Open Towing Capacity Calculator
        </Link>
      </section>

      {/* Related Guides */}
      <section className="mt-12">
        <h2 className="mb-6 text-xl font-bold text-gray-900">Related Guides</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Link
            href="/guides/tongue-weight"
            className="group rounded-xl border border-gray-200 p-5 transition-all hover:border-brand-300 hover:shadow-md"
          >
            <h3 className="font-semibold text-gray-900 group-hover:text-brand-600">
              Tongue Weight Guide
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Learn optimal tongue weight percentages and how to measure and adjust yours.
            </p>
          </Link>
          <Link
            href="/guides/cat-scale-weighing"
            className="group rounded-xl border border-gray-200 p-5 transition-all hover:border-brand-300 hover:shadow-md"
          >
            <h3 className="font-semibold text-gray-900 group-hover:text-brand-600">
              How to Weigh Your RV at a CAT Scale
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Step-by-step guide to getting accurate weights for your towing setup.
            </p>
          </Link>
          <Link
            href="/guides/weight-distribution-hitch-setup"
            className="group rounded-xl border border-gray-200 p-5 transition-all hover:border-brand-300 hover:shadow-md"
          >
            <h3 className="font-semibold text-gray-900 group-hover:text-brand-600">
              Weight Distribution Hitch Setup Guide
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Complete installation and adjustment guide for WDH systems.
            </p>
          </Link>
          <Link
            href="/guides/exceed-gvwr-dangers"
            className="group rounded-xl border border-gray-200 p-5 transition-all hover:border-brand-300 hover:shadow-md"
          >
            <h3 className="font-semibold text-gray-900 group-hover:text-brand-600">
              What Happens If You Exceed GVWR
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Mechanical failures, legal liability, and real-world consequences of overloading.
            </p>
          </Link>
        </div>
      </section>
    </div>
  );
}
