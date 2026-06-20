import type { Metadata } from "next";
import Link from "next/link";
import { FaqJsonLd, ArticleJsonLd } from "@/components/seo/JsonLd";
import { DEFAULT_OG_IMAGES } from "@/lib/seo/default-og-image";

export const metadata: Metadata = {
  title: "GVWR vs GCWR: What's the Difference & Why It Matters",
  description:
    "GVWR and GCWR are two different weight ratings that are often confused. Learn what each means, how they are calculated, and why exceeding either is dangerous when towing.",
  alternates: {
    canonical: "https://rvtowingcalc.com/guides/gvwr-vs-gcwr",
  },
  openGraph: {
    title: "GVWR vs GCWR: What's the Difference & Why It Matters",
    description:
      "Learn the critical difference between GVWR and GCWR, how each is calculated, and why exceeding either is dangerous.",
    url: "https://rvtowingcalc.com/guides/gvwr-vs-gcwr",
    images: DEFAULT_OG_IMAGES,
  },
};

const FAQS = [
  {
    q: "What is the difference between GVWR and GCWR?",
    a: "GVWR (Gross Vehicle Weight Rating) is the maximum safe operating weight of your tow vehicle alone, including curb weight, passengers, cargo, and tongue weight. GCWR (Gross Combined Weight Rating) is the maximum safe operating weight of your tow vehicle and trailer combined. GVWR limits what your truck can carry; GCWR limits what your truck plus trailer can weigh together.",
  },
  {
    q: "Can I exceed GVWR if I'm under GCWR?",
    a: "No. GVWR and GCWR are independent limits. You must stay under both. It is entirely possible to be under GCWR but over GVWR. For example, your combined weight might be 18,000 lbs (under a 20,000 lb GCWR), but if your loaded truck weighs 7,500 lbs and your GVWR is 7,000 lbs, you are 500 lbs over GVWR. This can cause tire failure, brake issues, and suspension damage.",
  },
  {
    q: "Where do I find my GVWR and GCWR?",
    a: "GVWR is found on the yellow-and-white sticker on your vehicle's driver door jamb. GCWR is found in the manufacturer's towing guide or owner's manual, and it varies by vehicle configuration (engine, cab, axle ratio, etc.). Both are set by the manufacturer and cannot be increased through modifications.",
  },
  {
    q: "Does tongue weight count toward GVWR?",
    a: "Yes. Tongue weight (or pin weight for fifth wheels) is the downward force the trailer exerts on your hitch, and it is carried by your vehicle. It counts toward your GVWR and payload capacity. This is why a heavy trailer can push you over GVWR even if the trailer itself is under your tow rating. Your loaded truck weight = curb weight + passengers + cargo + tongue weight, and this total must be under GVWR.",
  },
  {
    q: "What happens if I exceed GVWR or GCWR?",
    a: "Exceeding GVWR can cause tire blowouts, suspension damage, brake failure, and frame stress. Exceeding GCWR strains your engine, transmission, and braking system, especially on hills. Both can void your warranty, lead to insurance claim denial in an accident, and result in traffic citations for operating an overweight vehicle (jurisdiction-dependent). Always stay within both limits.",
  },
  {
    q: "How are GVWR and GCWR related to towing capacity?",
    a: "Towing capacity is derived from the GCWR. It is calculated as: GCWR - tow vehicle weight = max trailer weight (towing capacity). However, manufacturers may set the tow rating lower than this calculated value based on other factors like hitch strength, cooling capacity, or stability testing. Towing capacity assumes a properly equipped vehicle with no excess payload. If your truck is loaded with passengers and cargo, your effective towing capacity is reduced.",
  },
];

export default function GvwrVsGcwrGuidePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <FaqJsonLd
        faqs={FAQS}
        baseUrl="https://rvtowingcalc.com/guides/gvwr-vs-gcwr"
      />
      <ArticleJsonLd
        title="GVWR vs GCWR: What's the Difference & Why It Matters"
        description="Learn the critical difference between GVWR and GCWR, how each is calculated, and why exceeding either is dangerous."
        url="https://rvtowingcalc.com/guides/gvwr-vs-gcwr"
        datePublished="2026-06-20"
      />

      <nav className="mb-4 text-sm text-gray-500">
        <Link href="/" className="hover:text-brand-600">
          Home
        </Link>
        <span className="mx-1">/</span>
        <span className="text-gray-900">GVWR vs GCWR</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
        GVWR vs GCWR: What&apos;s the Difference?
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        GVWR and GCWR are two of the most important weight ratings for towing,
        and they are also the most commonly confused. Mixing them up can lead to
        dangerous overloading. Here is what each means and how to use them.
      </p>

      {/* Quick comparison */}
      <section className="mt-8 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b-2 border-gray-300 bg-gray-50">
              <th className="px-4 py-3 text-left font-semibold text-gray-900">
              </th>
              <th className="px-4 py-3 text-left font-semibold text-brand-700">
                GVWR
              </th>
              <th className="px-4 py-3 text-left font-semibold text-brand-700">
                GCWR
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="px-4 py-3 font-medium text-gray-700">
                Full name
              </td>
              <td className="px-4 py-3 text-gray-600">
                Gross Vehicle Weight Rating
              </td>
              <td className="px-4 py-3 text-gray-600">
                Gross Combined Weight Rating
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium text-gray-700">
                What it limits
              </td>
              <td className="px-4 py-3 text-gray-600">
                Max weight of the tow vehicle alone
              </td>
              <td className="px-4 py-3 text-gray-600">
                Max weight of tow vehicle + trailer combined
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium text-gray-700">
                Includes
              </td>
              <td className="px-4 py-3 text-gray-600">
                Curb weight + passengers + cargo + tongue weight
              </td>
              <td className="px-4 py-3 text-gray-600">
                Everything: loaded truck + loaded trailer
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium text-gray-700">
                Where to find it
              </td>
              <td className="px-4 py-3 text-gray-600">
                Door jamb sticker
              </td>
              <td className="px-4 py-3 text-gray-600">
                Manufacturer towing guide
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium text-gray-700">
                Related to
              </td>
              <td className="px-4 py-3 text-gray-600">
                Payload capacity (GVWR - curb weight)
              </td>
              <td className="px-4 py-3 text-gray-600">
                Towing capacity (GCWR - tow vehicle weight)
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* GVWR section */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          GVWR: Gross Vehicle Weight Rating
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            GVWR is the maximum safe operating weight of your tow vehicle as
            set by the manufacturer. It includes everything on or in the
            vehicle:
          </p>
          <ul className="ml-6 list-disc space-y-2">
            <li>
              <strong>Curb weight:</strong> the weight of the vehicle as it
              sits empty (full fuel tank, all standard equipment, no passengers
              or cargo)
            </li>
            <li>
              <strong>Passengers:</strong> driver and all riders
            </li>
            <li>
              <strong>Cargo:</strong> everything in the bed or cabin (tools,
              firewood, coolers, gear)
            </li>
            <li>
              <strong>Tongue/pin weight:</strong> the downward force the
              trailer exerts on the hitch (yes, this counts toward GVWR)
            </li>
          </ul>
          <p>
            GVWR is found on the yellow-and-white Federal Motor Vehicle Safety
            Standards (FMVSS) sticker on your vehicle&apos;s driver door jamb.
            It is specific to your vehicle as it left the factory.
          </p>
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
            <p className="text-sm">
              <strong className="text-gray-900">Formula:</strong>{" "}
              <code className="rounded bg-white px-1 py-0.5">
                GVWR = Curb Weight + Payload Capacity
              </code>
            </p>
            <p className="mt-2 text-sm">
              <strong className="text-gray-900">Check:</strong> Loaded Truck
              Weight (curb + passengers + cargo + tongue) must be{" "}
              <strong>&le; GVWR</strong>
            </p>
          </div>
        </div>
      </section>

      {/* GCWR section */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          GCWR: Gross Combined Weight Rating
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            GCWR is the maximum safe operating weight of your tow vehicle and
            trailer combined. It includes the fully loaded truck plus the fully
            loaded trailer. GCWR is set by the manufacturer based on the
            vehicle&apos;s engine power, transmission, cooling capacity, and
            braking system.
          </p>
          <p>
            GCWR is found in the manufacturer&apos;s towing guide or
            owner&apos;s manual. Like towing capacity, it varies by vehicle
            configuration.
          </p>
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
            <p className="text-sm">
              <strong className="text-gray-900">Formula:</strong>{" "}
              <code className="rounded bg-white px-1 py-0.5">
                GCWR = Loaded Truck Weight + Trailer Axle Weight
              </code>
            </p>
            <p className="mt-2 text-sm">
              <strong className="text-gray-900">Note:</strong> Trailer axle
              weight = loaded trailer weight - tongue weight (because tongue
              weight is already counted in the loaded truck weight)
            </p>
            <p className="mt-2 text-sm">
              <strong className="text-gray-900">Check:</strong> Combined Weight
              must be <strong>&le; GCWR</strong>
            </p>
          </div>
        </div>
      </section>

      {/* The relationship */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          How GVWR, GCWR, and Towing Capacity Relate
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            These three ratings are interconnected. Towing capacity is actually
            derived from GCWR:
          </p>
          <pre className="overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-green-400">
{`Towing Capacity = GCWR - Tow Vehicle Weight

Payload Capacity = GVWR - Curb Weight

Loaded Truck Weight = Curb Weight + Passengers + Cargo + Tongue Weight

Combined Weight = Loaded Truck Weight + (Loaded Trailer Weight - Tongue Weight)`}
          </pre>
          <p>
            The key insight: <strong>towing capacity assumes an empty tow
            vehicle</strong>. If you add passengers and cargo to your truck,
            your effective towing capacity decreases because your truck weighs
            more, leaving less room before you hit GCWR. Similarly, if your
            tongue weight is high, it eats into your payload and GVWR.
          </p>
        </div>
      </section>

      {/* Common mistake */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          The Common Mistake: Under GVWR, Over GCWR (or Vice Versa)
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            GVWR and GCWR are <strong>independent limits</strong>. You must
            stay under both. It is entirely possible to be under one and over
            the other:
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border-l-4 border-danger-500 bg-danger-50 p-5">
              <h3 className="font-semibold text-danger-700">
                Under GCWR, Over GVWR
              </h3>
              <p className="mt-2 text-sm text-danger-700">
                Your truck + trailer combined is 18,000 lbs (under a 20,000 lb
                GCWR), but your loaded truck alone is 7,500 lbs with a 7,000 lb
                GVWR. You are over GVWR by 500 lbs. This stresses tires,
                suspension, and brakes on the tow vehicle.
              </p>
            </div>
            <div className="rounded-xl border-l-4 border-warning-500 bg-warning-50 p-5">
              <h3 className="font-semibold text-warning-700">
                Under GVWR, Over GCWR
              </h3>
              <p className="mt-2 text-sm text-warning-700">
                Your loaded truck is 6,500 lbs (under a 7,000 lb GVWR), but
                your combined weight is 21,000 lbs with a 20,000 lb GCWR. You
                are over GCWR by 1,000 lbs. This strains your engine,
                transmission, and brakes, especially on hills.
              </p>
            </div>
          </div>
          <p>
            This is why our{" "}
            <Link
              href="/towing-capacity-calculator"
              className="font-semibold text-brand-600 underline"
            >
              towing calculator
            </Link>{" "}
            checks GVWR and GCWR as separate, independent safety checks. Both
            must be green for a safe towing setup.
          </p>
        </div>
      </section>

      {/* How to verify */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          How to Verify Your Actual Weights
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            The only way to know your true GVWR and GCWR compliance is to weigh
            your rig at a certified scale. The best option is a{" "}
            <strong>CAT scale</strong>, found at most truck stops (Flying J,
            Pilot, Love&apos;s, TA, Petro). A CAT scale weigh typically costs
            $12&ndash;$15.
          </p>
          <p>To get a complete picture, weigh in two passes:</p>
          <ol className="ml-6 list-decimal space-y-2">
            <li>
              <strong>Pass 1: Truck + trailer connected.</strong> Position the
              truck front axle on platform 1, truck rear axle on platform 2,
              and trailer axles on platform 3. This gives you individual axle
              weights plus the combined total. Check combined weight against
              GCWR.
            </li>
            <li>
              <strong>Pass 2: Truck only (drop the trailer in the lot).</strong>
              {" "}Weigh the truck alone to get its loaded weight (front axle +
              rear axle). Compare against GVWR. The difference between Pass 1
              and Pass 2 rear axle weight is your tongue weight.
            </li>
          </ol>
          <p>
            If you cannot do two passes, a single combined weigh at least tells
            you if you are under GCWR. But without the truck-only weight, you
            cannot confirm GVWR compliance.
          </p>
        </div>
      </section>

      {/* Safety thresholds */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          Our Safety Thresholds
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            In our calculators, we use a traffic-light system for both GVWR and
            GCWR checks:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-gray-300 bg-gray-50">
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Status
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    GVWR
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    GCWR
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-safe-50">
                  <td className="px-4 py-3 font-medium text-safe-700">
                    Safe (Green)
                  </td>
                  <td className="px-4 py-3 text-gray-600">&le; 90% of GVWR</td>
                  <td className="px-4 py-3 text-gray-600">&le; 90% of GCWR</td>
                </tr>
                <tr className="bg-warning-50">
                  <td className="px-4 py-3 font-medium text-warning-700">
                    Warning (Yellow)
                  </td>
                  <td className="px-4 py-3 text-gray-600">91&ndash;100%</td>
                  <td className="px-4 py-3 text-gray-600">91&ndash;100%</td>
                </tr>
                <tr className="bg-danger-50">
                  <td className="px-4 py-3 font-medium text-danger-700">
                    Danger (Red)
                  </td>
                  <td className="px-4 py-3 text-gray-600">&gt; 100%</td>
                  <td className="px-4 py-3 text-gray-600">&gt; 100%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm">
            We use 90% (not 100%) as the safe threshold to provide a buffer.
            Hitting 95% of GVWR is not inherently dangerous, but it leaves no
            margin for error. See our{" "}
            <Link
              href="/data-sources"
              className="font-semibold text-brand-600 underline"
            >
              Data Sources page
            </Link>{" "}
            for the full methodology.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-12 rounded-2xl bg-brand-600 p-8 text-center text-white">
        <h2 className="text-2xl font-bold">Check Your GVWR &amp; GCWR</h2>
        <p className="mt-2 text-brand-100">
          Run both checks (plus three more) in under two minutes.
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/gvwr-calculator"
            className="w-full rounded-xl bg-white px-8 py-4 text-center text-base font-bold text-brand-700 shadow-lg transition-all hover:bg-brand-50 active:scale-[0.99] sm:w-auto"
          >
            GVWR Calculator
          </Link>
          <Link
            href="/gcwr-calculator"
            className="w-full rounded-xl border-2 border-white/30 bg-white/5 px-8 py-4 text-center text-base font-bold text-white backdrop-blur transition-all hover:bg-white/10 sm:w-auto"
          >
            GCWR Calculator
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          Frequently Asked Questions
        </h2>
        <div className="mt-6 space-y-4">
          {FAQS.map((faq) => (
            <details
              key={faq.q}
              className="group rounded-lg border border-gray-200 p-4"
            >
              <summary className="cursor-pointer font-semibold text-gray-900 marker:text-brand-600">
                {faq.q}
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* Related guides */}
      <section className="mt-12 rounded-xl bg-gray-50 p-6">
        <h2 className="text-lg font-bold text-gray-900">Related Guides</h2>
        <ul className="mt-3 space-y-2 text-sm">
          <li>
            <Link
              href="/guides/towing-capacity-explained"
              className="text-brand-600 hover:underline"
            >
              Towing Capacity Explained: The Complete Guide
            </Link>
          </li>
          <li>
            <Link
              href="/guides/payload-capacity"
              className="text-brand-600 hover:underline"
            >
              Payload Capacity Explained: The #1 Towing Blind Spot
            </Link>
          </li>
          <li>
            <Link
              href="/guides/tongue-weight"
              className="text-brand-600 hover:underline"
            >
              Tongue Weight Guide: Optimal Ranges &amp; Sway Prevention
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
}
