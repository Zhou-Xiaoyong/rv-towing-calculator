import Link from "next/link";
import { WebAppJsonLd } from "@/components/seo/JsonLd";

const CALCULATORS = [
  {
    href: "/towing-capacity-calculator",
    title: "Towing Capacity Calculator",
    description:
      "Can your truck safely tow this trailer? Get a yes/no answer with safety margin analysis across all six critical checks.",
    icon: "M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0zM13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1",
    badge: "Most Popular",
    badgeColor: "bg-brand-100 text-brand-700",
  },
  {
    href: "/payload-calculator",
    title: "Payload Calculator",
    description:
      "Payload is the #1 blind spot for RV owners. Don't discover you're overloaded on the road. Calculate your real payload usage.",
    icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
    badge: "Critical Check",
    badgeColor: "bg-danger-100 text-danger-700",
  },
  {
    href: "/gvwr-calculator",
    title: "GVWR Calculator",
    description:
      "Is your truck over its Gross Vehicle Weight Rating? Check if passengers, cargo, and tongue weight push you past the limit.",
    icon: "M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0zM13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9",
    badge: null,
    badgeColor: "",
  },
  {
    href: "/tongue-weight-calculator",
    title: "Tongue Weight Calculator",
    description:
      "Too little tongue weight causes trailer sway. Too much overloads your truck. Find your optimal tongue weight percentage.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    badge: null,
    badgeColor: "",
  },
  {
    href: "/gcwr-calculator",
    title: "GCWR Calculator",
    description:
      "Your truck + trailer combined weight must stay under the Gross Combined Weight Rating. Check your total combined load.",
    icon: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3",
    badge: null,
    badgeColor: "",
  },
];

const DIFFERENTIATORS = [
  {
    title: "Real Vehicle Data + Manual Input",
    description:
      "Select your truck from our trim-level database to auto-fill specs, or enter them manually. No other calculator does both.",
    icon: "M5 13l4 4L19 7",
  },
  {
    title: "Six-Point Safety Analysis",
    description:
      "Most calculators check one thing. We check all six: towing capacity, payload, GVWR, GCWR, tongue weight, and trailer GVWR. Red, yellow, green.",
    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Independent & Unbiased",
    description:
      "We don't sell RVs. We don't get commissions. Our only job is to tell you if your setup is safe or not. No dealer pressure.",
    icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
  },
  {
    title: "SAE J2807 Compliant",
    description:
      "Our calculations follow the Society of Automotive Engineers J2807 standard, the same standard used by vehicle manufacturers.",
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  },
];

export default function HomePage() {
  return (
    <>
      <WebAppJsonLd />
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-600 via-brand-700 to-brand-800 text-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAzNGgtMnYtNGgydjR6bTAtNmgtMnYtNGgydjR6bS04IDZoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0eiIgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIuMDUiLz48L2c+PC9zdmc+')] opacity-10" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium backdrop-blur">
              <span className="flex h-2 w-2 rounded-full bg-safe-400" />
              SAE J2807 Compliant
            </div>
            <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Can My Truck Tow This?
            </h1>
            <p className="mt-4 text-lg text-brand-100 md:text-xl">
              The only RV towing calculator that combines real vehicle data
              with deep safety analysis. Independent. Accurate. Built for
              safety, not for selling you an RV.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/towing-capacity-calculator"
                className="w-full rounded-xl bg-white px-8 py-4 text-center text-base font-bold text-brand-700 shadow-lg transition-all hover:bg-brand-50 active:scale-[0.99] sm:w-auto"
              >
                Start Towing Check
              </Link>
              <Link
                href="/payload-calculator"
                className="w-full rounded-xl border-2 border-white/30 bg-white/5 px-8 py-4 text-center text-base font-bold text-white backdrop-blur transition-all hover:bg-white/10 sm:w-auto"
              >
                Check Payload First
              </Link>
            </div>
            <p className="mt-6 text-sm text-brand-200">
              Free. No sign-up. 49 vehicles across 8 brands in database.
            </p>
          </div>
        </div>
      </section>

      {/* Calculators Grid */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Six Safety Checks, One Tool
          </h2>
          <p className="mt-3 text-lg text-gray-600">
            Most calculators check one number. We check all six that matter.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CALCULATORS.map((calc) => (
            <Link
              key={calc.href}
              href={calc.href}
              className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-brand-300 hover:shadow-lg"
            >
              {calc.badge && (
                <span
                  className={`absolute right-4 top-4 rounded-full px-3 py-1 text-xs font-medium ${calc.badgeColor}`}
                >
                  {calc.badge}
                </span>
              )}
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50">
                <svg
                  className="h-6 w-6 text-brand-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d={calc.icon}
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-bold text-gray-900 group-hover:text-brand-600">
                {calc.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-600">
                {calc.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-600">
                Open calculator
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </span>
            </Link>
          ))}

          {/* Info card */}
          <div className="flex flex-col justify-center rounded-2xl border-2 border-dashed border-gray-300 bg-gray-50 p-6 text-center">
            <h3 className="mb-2 font-bold text-gray-900">
              Not sure where to start?
            </h3>
            <p className="mb-4 text-sm text-gray-600">
              Start with the Towing Capacity Calculator. It runs all six
              safety checks at once.
            </p>
            <Link
              href="/towing-capacity-calculator"
              className="text-sm font-semibold text-brand-600 hover:text-brand-700"
            >
              Start here &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Why We're Different */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              Why RV TowCalc is Different
            </h2>
            <p className="mt-3 text-lg text-gray-600">
              The only towing calculator built by RV owners, for RV owners.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {DIFFERENTIATORS.map((item, idx) => (
              <div
                key={idx}
                className="flex gap-4 rounded-2xl border border-gray-200 bg-gray-50 p-6"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-brand-600">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={item.icon}
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="mb-1 font-bold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900">
            Safety Isn&apos;t Optional
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            Overloading your truck is the #1 cause of RV accidents. Tire
            blowouts, brake failure, loss of control, insurance claim denial,
            and legal liability. Yet 90% of new RV owners only check towing
            capacity and miss the real bottleneck: payload.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-xl bg-danger-50 p-6">
              <div className="text-3xl font-bold text-danger-600">90%</div>
              <div className="mt-1 text-sm text-gray-600">
                of new RV owners don&apos;t know their payload limit
              </div>
            </div>
            <div className="rounded-xl bg-warning-50 p-6">
              <div className="text-3xl font-bold text-warning-600">3,000+</div>
              <div className="mt-1 text-sm text-gray-600">
                lbs added to dry weight with water, propane, and cargo
              </div>
            </div>
            <div className="rounded-xl bg-safe-50 p-6">
              <div className="text-3xl font-bold text-safe-600">6</div>
              <div className="mt-1 text-sm text-gray-600">
                safety checks you need before every trip
              </div>
            </div>
          </div>

          <div className="mt-8">
            <Link
              href="/towing-capacity-calculator"
              className="inline-block rounded-xl bg-brand-600 px-8 py-4 text-base font-bold text-white shadow-lg shadow-brand-600/25 transition-all hover:bg-brand-700 hover:shadow-brand-600/40 active:scale-[0.99]"
            >
              Run My Safety Check Now
            </Link>
          </div>
        </div>
      </section>

      {/* Educational teaser */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h3 className="mb-3 font-bold text-gray-900">
              What is GVWR vs GCWR?
            </h3>
            <p className="text-sm leading-relaxed text-gray-600">
              GVWR is the max weight your truck can carry. GCWR is the max
              combined weight of truck + trailer. Confusing them is dangerous.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h3 className="mb-3 font-bold text-gray-900">
              Payload vs Towing Capacity
            </h3>
            <p className="text-sm leading-relaxed text-gray-600">
              Towing capacity is how much you can pull. Payload is how much you
              can carry. Payload usually fails first, and it&apos;s the one
              dealers never mention.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h3 className="mb-3 font-bold text-gray-900">
              The 80% Rule Explained
            </h3>
            <p className="text-sm leading-relaxed text-gray-600">
              Industry experts recommend staying at or below 80% of your tow
              rating. This leaves a safety buffer for wind, hills, and
              emergency maneuvers.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
