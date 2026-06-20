import type { Metadata } from "next";
import Link from "next/link";
import { DEFAULT_OG_IMAGES } from "@/lib/seo/default-og-image";

export const metadata: Metadata = {
  title: "About Us - Independent RV Towing Safety Tool",
  description:
    "Learn about RV TowCalc, an independent RV towing calculator that combines real vehicle specification data with SAE J2807-compliant safety analysis to help you tow safely.",
  alternates: { canonical: "https://rvtowingcalc.com/about" },
  openGraph: {
    title: "About RV TowCalc",
    description:
      "Independent. Accurate. Built for safety. Learn why we built the only RV towing calculator that combines real vehicle data with deep safety analysis.",
    url: "https://rvtowingcalc.com/about",
    images: DEFAULT_OG_IMAGES,
  },
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <nav className="mb-4 text-sm text-gray-500">
        <Link href="/" className="hover:text-brand-600">
          Home
        </Link>
        <span className="mx-1">/</span>
        <span className="text-gray-900">About Us</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
        About RV TowCalc
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        We built the towing calculator we wished existed when we started
        RVing&mdash;one that does not just give you a single number, but shows
        you exactly where you stand on every critical safety dimension.
      </p>

      {/* Mission */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            Every year, thousands of RV owners hit the road without fully
            understanding whether their truck can safely handle their trailer.
            The result: white-knuckle driving, premature equipment wear,
            insurance claim denials, and in the worst cases, accidents.
          </p>
          <p>
            The problem is not that the information does not exist&mdash;it is
            that it is scattered across door jamb stickers, owner&apos;s
            manuals, manufacturer towing guides, and forum posts. And even when
            you find the numbers, figuring out what they mean for your specific
            setup is a math problem most people get wrong.
          </p>
          <p>
            RV TowCalc exists to solve that. We consolidate the key
            specifications&mdash;towing capacity, payload, GVWR, GCWR, and
            tongue weight&mdash;into one place, run the math for you, and give
            you a clear, honest safety assessment with a simple traffic-light
            system: green means go, yellow means pay attention, red means stop.
          </p>
        </div>
      </section>

      {/* What makes us different */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          What Makes Us Different
        </h2>
        <div className="mt-6 space-y-6">
          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <h3 className="text-lg font-semibold text-brand-700">
              Real vehicle data, not generic estimates
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Our vehicle database includes trim-level specifications sourced
              directly from manufacturer towing guides. A Ford F-150 XLT with
              the 3.5L EcoBoost has very different towing capabilities than an
              XL with the 2.7L&mdash;we reflect that. Most online calculators
              give you a single &quot;F-150 can tow 13,000 lbs&quot; number,
              which is misleading.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <h3 className="text-lg font-semibold text-brand-700">
              Six-dimensional safety analysis
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Towing capacity alone is not enough. We check all five critical
              dimensions: towing capacity, payload capacity, GVWR (truck
              weight), GCWR (combined weight), and tongue weight percentage.
              Payload is the #1 blind spot for RV owners&mdash;many trucks that
              &quot;can tow 13,000 lbs&quot; run out of payload at 8,000 lbs of
              trailer.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <h3 className="text-lg font-semibold text-brand-700">
              SAE J2807 compliant methodology
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Our calculations follow the SAE J2807 standard, which is the
              industry-accepted methodology for determining trailer weight
              ratings. We use conservative safety thresholds: 80% of tow rating
              for the &quot;safe&quot; zone on towing capacity, and 90% for
              payload, GVWR, and GCWR. These buffers account for real-world
              variables like wind, grades, and emergency maneuvers.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <h3 className="text-lg font-semibold text-brand-700">
              Independent and honest
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              We are not affiliated with any vehicle manufacturer, RV dealer, or
              towing equipment brand. We do not sell anything. If your numbers
              come back red, we tell you. We would rather lose a user to honesty
              than gain one through false confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Who we serve */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">Who We Serve</h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            RV TowCalc is built for anyone who tows a trailer behind a truck or
            SUV and wants to know&mdash;with confidence&mdash;that their setup
            is safe. That includes:
          </p>
          <ul className="ml-6 list-disc space-y-2">
            <li>
              <strong>First-time RV buyers</strong> trying to figure out if
              their current truck can handle the trailer they are considering.
            </li>
            <li>
              <strong>Experienced RVers</strong> who want to verify their
              numbers after adding gear, passengers, or upgrading to a heavier
              trailer.
            </li>
            <li>
              <strong>Truck shoppers</strong> comparing payload and towing
              specs across trim levels to find the right vehicle for their
              towing needs.
            </li>
            <li>
              <strong>Fifth wheel owners</strong> dealing with the more complex
              pin weight and payload calculations that conventional travel
              trailer calculators do not handle well.
            </li>
          </ul>
        </div>
      </section>

      {/* How we make money */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">How We Make Money</h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            RV TowCalc is a free tool. We plan to sustain the site through
            advertising (Google AdSense) and, in the future, affiliate
            partnerships with retailers of towing-related equipment. We will
            never accept payment from manufacturers to alter, inflate, or
            selectively present vehicle specifications.
          </p>
          <p>
            Advertising does not influence our calculations or safety
            assessments. The math is the math&mdash;it runs the same way
            whether you click an ad or not.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">Contact</h2>
        <p className="mt-4 text-gray-600">
          Found a bug? Have a suggestion for a vehicle we should add to the
          database? Want to report a data error? We want to hear from you.
        </p>
        <p className="mt-2 text-gray-600">
          Reach us at:{" "}
          <a
            href="mailto:contact@rvtowingcalc.com"
            className="font-semibold text-brand-600 underline"
          >
            contact@rvtowingcalc.com
          </a>
        </p>
      </section>

      <div className="mt-12 rounded-xl border-l-4 border-brand-500 bg-brand-50 p-6">
        <p className="text-sm text-brand-700">
          <strong>Important:</strong> RV TowCalc is an informational tool, not
          a substitute for professional advice. Always verify your numbers
          against your vehicle&apos;s door jamb sticker and confirm actual
          weights at a CAT scale. See our{" "}
          <Link href="/disclaimer" className="font-semibold underline">
            Disclaimer
          </Link>{" "}
          and{" "}
          <Link href="/data-sources" className="font-semibold underline">
            Data Sources
          </Link>{" "}
          pages for details.
        </p>
      </div>
    </div>
  );
}
