import type { Metadata } from "next";
import Link from "next/link";
import { FaqJsonLd, ArticleJsonLd } from "@/components/seo/JsonLd";
import { DEFAULT_OG_IMAGES } from "@/lib/seo/default-og-image";

export const metadata: Metadata = {
  title:
    "Travel Trailer Tire Safety: Load Range, Cold Pressure & Blowout Prevention",
  description:
    "Tire blowouts cause thousands of RV accidents every year. Learn how to choose the right trailer tire load range, calculate cold pressure, and prevent dangerous blowouts.",
  alternates: {
    canonical: "https://www.rvtowingcalc.com/guides/travel-trailer-tire-safety",
  },
  openGraph: {
    title: "Travel Trailer Tire Safety: The Complete Blowout Prevention Guide",
    description:
      "ST vs LT tires, load range E vs G, cold inflation pressure, DOT age codes, and emergency response. The safety guide every trailer owner must read.",
    url: "https://www.rvtowingcalc.com/guides/travel-trailer-tire-safety",
    images: DEFAULT_OG_IMAGES,
  },
};

const FAQS = [
  {
    q: "What tire load range is best for a travel trailer?",
    a: "Most travel trailers in the 4,000-8,000 lb GVWR range should run Load Range E tires, which carry 2,150-2,540 lbs per tire at maximum inflation. Larger trailers with 8,000+ lb GVWR often benefit from Load Range G tires, which carry 3,000-3,500 lbs per tire. Going from Load Range D to Load Range E increases capacity by roughly 25% and improves sidewall strength, which is the main cause of trailer tire blowouts. Never use Load Range C or D on a 6,000+ lb trailer because the sidewalls are too thin to handle the heat generated at sustained highway speeds.",
  },
  {
    q: "What is the right tire pressure for trailer tires?",
    a: "The right tire pressure is the one printed on the trailer's VIN/certification label, NOT the maximum pressure on the tire sidewall. Trailer manufacturers calculate cold inflation pressure based on the actual axle load per tire, the recommended tire size, and a 10% safety margin. A common rule of thumb for Load Range E ST tires is 65 psi cold for a 5,000-6,000 lb dual-axle trailer, but you should always verify against the yellow sticker inside the trailer door jamb or the manufacturer spec sheet. Under-inflation by even 10% can cut tire life in half and dramatically increase blowout risk.",
  },
  {
    q: "How long do travel trailer tires last?",
    a: "Travel trailer tires should be replaced every 5-7 years regardless of tread depth, and sooner if they show signs of cracking, sidewall damage, or dry rot. Trailer tires age faster than passenger vehicle tires because they typically sit unused for months, support heavy static loads when parked, and experience long periods of UV exposure. The DOT date code on the sidewall tells you the manufacture date: the last four digits are week and year (e.g., '1522' = week 15 of 2022). Many RV tire failures come from 8-10 year old tires that still look serviceable but have compromised internal structure.",
  },
  {
    q: "Should I buy ST or LT tires for my travel trailer?",
    a: "ST (Special Trailer) tires are designed specifically for trailer use, with stiffer sidewalls and higher load capacity at the expense of heat dissipation. They are the OEM choice on most travel trailers and are usually fine for typical use. LT (Light Truck) tires have more flexible sidewalls and better heat dissipation. LT tires are a popular upgrade for high-mileage towers who experience frequent ST blowouts. Both work safely when properly inflated to the load they carry. Many experienced RVers switch to LT tires when they burn through a set of STs in 2-3 years, especially in hot climates.",
  },
  {
    q: "What causes travel trailer tire blowouts?",
    a: "The most common causes, in order of frequency, are: (1) under-inflation generating excessive heat, (2) tire age beyond 5-7 years causing internal rubber degradation, (3) overloading the tire beyond its load range capacity, (4) over-inflation causing uneven wear and reduced traction, (5) road damage from potholes and debris, (6) improper tire balancing causing uneven wear, (7) curb scrubbing during sharp low-speed maneuvers, and (8) manufacturing defects. The good news is that the top three causes (under-inflation, age, overloading) are entirely preventable with proper maintenance, weighing, and replacement on schedule.",
  },
  {
    q: "Do I need a tire pressure monitoring system (TPMS) on my trailer?",
    a: "Yes, especially for dual-axle trailers where a single tire failure can quickly take out its mate. A TPMS warns you the moment a tire loses 10-15% pressure, giving you time to stop before the tire overheats and fails catastrophically. Aftermarket systems like TireMinder, TST, and PressurePro run $200-$400 for a 4-tire setup and can pay for themselves many times over by preventing a roadside blowout and possible rim/axle damage. Most systems also display high-temperature alerts, which catch bearing failures and brake-overheating events too.",
  },
];

const LOAD_RANGES = [
  {
    loadRange: "C (6 Ply)",
    plyRating: "6 PR",
    maxLoadSingle: "1,820 lbs @ 50 psi",
    maxLoadDual: "1,650 lbs @ 50 psi",
    typicalUse: "Small teardrop / 4,000-5,000 lb single-axle",
    speedRating: "Often L (75 mph)",
    costTier: "$80-$120/tire",
    safetyNote: "Marginal for anything above 5,000 lb GVWR; thin sidewalls run hot",
  },
  {
    loadRange: "D (8 Ply)",
    plyRating: "8 PR",
    maxLoadSingle: "2,200 lbs @ 65 psi",
    maxLoadDual: "2,000 lbs @ 65 psi",
    typicalUse: "Mid-size single or tandem axles up to 6,000 lb GVWR",
    speedRating: "Often L (75 mph)",
    costTier: "$110-$160/tire",
    safetyNote: "Common OEM range; adequate for moderate towing in cool climates",
  },
  {
    loadRange: "E (10 Ply)",
    plyRating: "10 PR",
    maxLoadSingle: "2,540 lbs @ 80 psi (ST); 2,830 lbs @ 80 psi (LT)",
    maxLoadDual: "2,300 lbs @ 80 psi (ST); 2,600 lbs @ 80 psi (LT)",
    typicalUse: "Most 5,000-8,000 lb dual-axle travel trailers (best all-around choice)",
    speedRating: "Often L (75 mph) or M (81 mph)",
    costTier: "$130-$200/tire",
    safetyNote: "Recommended minimum for any loaded 6,000+ lb trailer; best balance of cost and durability",
  },
  {
    loadRange: "F (12 Ply)",
    plyRating: "12 PR",
    maxLoadSingle: "3,040 lbs @ 95 psi",
    maxLoadDual: "2,760 lbs @ 95 psi",
    typicalUse: "Heavy 7,500-10,000 lb travel trailers and toy haulers",
    speedRating: "Often L (75 mph)",
    costTier: "$180-$260/tire",
    safetyNote: "Heavy-duty upgrade; reduces heat buildup on long mountain grades",
  },
  {
    loadRange: "G (14 Ply)",
    plyRating: "14 PR",
    maxLoadSingle: "3,500 lbs @ 110 psi",
    maxLoadDual: "3,190 lbs @ 110 psi",
    typicalUse: "8,000-12,000+ lb fifth wheels and triple-axle toy haulers",
    speedRating: "Often L (75 mph)",
    costTier: "$240-$360/tire",
    safetyNote: "Maximum load capacity; sidewalls stiff enough for full-time heavy hauling",
  },
];

const BLOWOUT_CAUSES = [
  {
    cause: "Under-inflation",
    percentage: "~50%",
    explanation: "Running 10-20% below recommended pressure causes the sidewalls to flex more per revolution, generating heat that breaks down rubber compounds. A 10% pressure loss increases sidewall flex by ~10% and heat generation by ~20%.",
    prevention: "Check cold pressure monthly and before every long trip. Use a TPMS for real-time alerts.",
  },
  {
    cause: "Age-related rubber degradation",
    percentage: "~20%",
    explanation: "Trailer tires age faster than car tires due to UV exposure, static loading, and long periods of disuse. Internal belts separate and rubber becomes brittle long before tread depth becomes critical.",
    prevention: "Replace tires every 5-7 years regardless of remaining tread. Check DOT date code on the sidewall.",
  },
  {
    cause: "Overloading the tire",
    percentage: "~15%",
    explanation: "Exceeding the load range capacity causes catastrophic sidewall failure, often at highway speed. Loaded trailer weights are usually higher than people realize.",
    prevention: "Weigh your loaded trailer at a CAT scale. Match load per tire to Load Range E or higher.",
  },
  {
    cause: "Improper storage",
    percentage: "~5%",
    explanation: "Tires stored under heavy load for months develop flat spots and sidewall decay. Tires in direct sunlight deteriorate 2-3 times faster than covered tires.",
    prevention: "Store trailer with weight off tires (use jack stands), cover tires, and rotate position seasonally.",
  },
  {
    cause: "Heat buildup from high-speed/long-distance travel",
    percentage: "~5%",
    explanation: "ST tires are speed-rated at 65-75 mph; sustained speeds above 65 mph generate heat that compounds with under-inflation. Heat is the primary failure accelerator for trailer tires.",
    prevention: "Stay at or below 65 mph with ST tires. Allow cool-down stops every 50-100 miles in extreme heat.",
  },
  {
    cause: "Road debris, potholes, curbs",
    percentage: "~5%",
    explanation: "Sharp impacts can damage internal belts and sidewalls even without visible exterior damage. Sidewall bulges are the warning sign.",
    prevention: "Maintain lane discipline, slow for known rough roads, and inspect tires after any significant impact.",
  },
];

const PRE_TRIP_CHECKLIST = [
  "Cold inflation pressure on all four (or six) trailer tires matches the trailer sticker (re-measure after tires cool for 3 hours)",
  "Cold inflation pressure on all tow vehicle tires set to the towing spec on the door jamb (typically 5-10 psi higher than the normal driving spec)",
  "Spare tire inflated, mounted, and accessible; check that the spare has air, not just sits under the trailer for years",
  "Tire tread depth above 4/32 inch (federal minimum is 2/32 inch but trailer tires should be replaced earlier)",
  "No visible sidewall cracks, bulges, or punctures on any tire",
  "DOT date code: all tires under 7 years from manufacture date",
  "Valve stems: rubber stems should be replaced with every tire change; metal stems recommended for higher pressures",
  "Lug nuts: torque to spec (typically 90-120 ft-lbs for trailers) with a calibrated wrench, not an impact",
  "Bearing hubs: dust caps secure, no grease leaking, hub temperature feels normal after a short test drive (warm is OK, hot is not)",
  "TPMS sensors: batteries fresh, sensors transmitting, monitor displaying normal pressure and temperature on each tire",
];

export default function TravelTrailerTireSafetyPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <FaqJsonLd
        faqs={FAQS}
        baseUrl="https://www.rvtowingcalc.com/guides/travel-trailer-tire-safety"
      />
      <ArticleJsonLd
        title="Travel Trailer Tire Safety: Load Range, Cold Pressure & Blowout Prevention"
        description="ST vs LT tires, load range E vs G, cold inflation pressure, DOT age codes, and emergency response. The safety guide every trailer owner must read."
        url="https://www.rvtowingcalc.com/guides/travel-trailer-tire-safety"
        datePublished="2026-08-13"
      />

      <nav className="mb-4 text-sm text-gray-500">
        <Link href="/" className="hover:text-brand-600">
          Home
        </Link>
        <span className="mx-1">/</span>
        <Link href="/guides" className="hover:text-brand-600">
          Guides
        </Link>
        <span className="mx-1">/</span>
        <span className="text-gray-900">Tire Safety</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
        Travel Trailer Tire Safety: Load Range, Cold Pressure, and Blowout
        Prevention
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        A trailer tire blowout is the single most common mechanical failure
        on the highway. It can happen without warning, take out a wheel well
        and trailer brake line in seconds, and send steel-belted debris into
        traffic behind you. Most blowouts are preventable. This guide covers
        the four numbers that matter (load range, cold pressure, tire age,
        and speed), the inspection routine that catches problems early, and
        what to do when a blowout happens anyway.
      </p>

      {/* Why tire safety is critical */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          Why Trailer Tires Fail Differently Than Car Tires
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            A travel trailer is one of the harshest environments a tire can
            face. Sustained high load. Long hours at highway speed. Heat
            buildup in dual-axle configurations where one tire&apos;s heat
            radiates into the inner sidewall of its mate. Months of disuse
            under static load between trips. Most trailer tires do not fail
            from wear; they fail from heat, age, or overload.
          </p>
          <p>Compare the tire environments:</p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border-l-4 border-brand-500 bg-brand-50 p-5">
              <h3 className="font-semibold text-brand-700">Passenger Car Tires</h3>
              <ul className="mt-2 ml-4 list-disc space-y-1 text-sm text-brand-700">
                <li>Low load per tire (under 1,200 lbs)</li>
                <li>Used daily or frequently</li>
                <li>Cool between trips</li>
                <li>Soft, responsive sidewalls</li>
                <li>Replaced at 4/32&quot; tread or 6 years</li>
              </ul>
            </div>
            <div className="rounded-xl border-l-4 border-warning-500 bg-warning-50 p-5">
              <h3 className="font-semibold text-warning-700">Travel Trailer Tires</h3>
              <ul className="mt-2 ml-4 list-disc space-y-1 text-sm text-warning-700">
                <li>High load per tire (1,800-2,800 lbs)</li>
                <li>Sit unused for weeks or months between trips</li>
                <li>Carry static load during storage</li>
                <li>Stiff sidewalls (especially ST type)</li>
                <li>Replaced at 4/32&quot; tread or 5-7 years (whichever comes first)</li>
              </ul>
            </div>
          </div>
          <p>
            Most trailer owners do not realize how different the rules are.
            Trailer tires can look perfectly serviceable on the outside while
            the internal belts are delaminating from age. A 7-year-old
            trailer tire with full tread can fail at any moment.
          </p>
        </div>
      </section>

      {/* Load range explained */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          Load Range Explained: C, D, E, F, G
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            Load range (formerly called ply rating) is the single most
            important spec on a trailer tire. Going up one load range
            typically increases tire capacity by 20-25% and dramatically
            improves sidewall strength. For most 6,000+ lb GVWR travel
            trailers, Load Range E is the recommended minimum.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-gray-300 bg-gray-50">
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Load Range
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Max Load (Single)
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Typical Use
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Speed Rating
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Approx. Cost
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {LOAD_RANGES.map((row) => (
                  <tr key={row.loadRange}>
                    <td className="px-4 py-3 font-medium text-gray-700">
                      {row.loadRange}
                    </td>
                    <td className="px-4 py-3 text-gray-600">
                      {row.maxLoadSingle}
                    </td>
                    <td className="px-4 py-3 text-gray-600">
                      {row.typicalUse}
                    </td>
                    <td className="px-4 py-3 text-gray-600">
                      {row.speedRating}
                    </td>
                    <td className="px-4 py-3 text-gray-600">
                      {row.costTier}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="rounded-xl border-l-4 border-success-500 bg-success-50 p-5">
            <h3 className="font-semibold text-success-700">
              The 80% Rule for Tires (Just Like Hitch Ratings)
            </h3>
            <p className="mt-2 text-sm text-success-700">
              The tire industry recommends running tires at no more than
              80% of their maximum load rating for sustained highway use.
              This means a Load Range E tire rated at 2,540 lbs single
              should not carry more than 2,030 lbs per tire. For a
              dual-axle 7,500 lb trailer (3,750 lbs per axle, 1,875 lbs
              per tire), you have exactly enough margin in Load Range E.
              For a heavier trailer, go up to Load Range F or G.
            </p>
          </div>
        </div>
      </section>

      {/* Cold inflation pressure */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          Cold Inflation Pressure: Use the Trailer Sticker, Not the Tire
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            The most common trailer tire mistake is over-inflating to the
            maximum pressure shown on the tire sidewall. That number is the
            maximum the tire can hold for short bursts, not the recommended
            pressure for your trailer.
          </p>
          <p>The correct pressure for your trailer tires is on one of three places:</p>
          <ul className="ml-6 list-disc space-y-2">
            <li>
              <strong>Yellow VIN sticker</strong> typically on the trailer
              door jamb or inside a cabinet
            </li>
            <li>
              <strong>Owner&apos;s manual</strong> spec sheet from the trailer
              manufacturer
            </li>
            <li>
              <strong>Yellow tire/loading label</strong> similar to the one
              on tow vehicles (some 5th wheels, fewer travel trailers)
            </li>
          </ul>
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-5">
            <h3 className="font-semibold text-gray-900">Pressure vs Load (Quick Reference)</h3>
            <div className="mt-3 space-y-2 text-sm">
              <p>
                <strong>ST205/75R15 Load Range C:</strong> 1,820 lbs @ 50 psi
                cold
              </p>
              <p>
                <strong>ST215/75R17.5 Load Range D:</strong> 2,540 lbs @ 65
                psi cold
              </p>
              <p>
                <strong>ST225/75R15 Load Range E:</strong> 2,830 lbs @ 80 psi
                cold
              </p>
              <p>
                <strong>ST235/80R16 Load Range E:</strong> 3,500 lbs @ 80 psi
                cold
              </p>
              <p>
                <strong>ST235/85R16 Load Range G:</strong> 4,080 lbs @ 110 psi
                cold
              </p>
              <p className="mt-3 text-xs text-gray-500">
                Source: Trailer tire manufacturer data (Goodyear Endurance,
                Carlisle, Westlake, Maxxis). Always verify against your
                specific tire&apos;s load curve.
              </p>
            </div>
          </div>
          <div className="rounded-xl border-l-4 border-warning-500 bg-warning-50 p-4">
            <p className="text-sm text-warning-700">
              <strong>Cold pressure matters:</strong> Always measure and
              adjust pressure when the tires are cold. Tires sitting for 3
              hours, or driven less than a mile at low speed, count as cold.
              A tire that has been driven 50 miles at highway speed can read
              5-10 psi higher than its true cold pressure, leading you to
              deflate it below the safe range.
            </p>
          </div>
        </div>
      </section>

      {/* Why blowouts happen */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          What Actually Causes Trailer Tire Blowouts
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            Tire industry data and post-failure teardowns consistently rank
            the causes of trailer blowouts in roughly this order. Most are
            preventable.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-gray-300 bg-gray-50">
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Cause
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Estimated Share
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    How It Happens
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Prevention
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {BLOWOUT_CAUSES.map((row) => (
                  <tr key={row.cause}>
                    <td className="px-4 py-3 font-medium text-gray-700">
                      {row.cause}
                    </td>
                    <td className="px-4 py-3 font-semibold text-danger-700">
                      {row.percentage}
                    </td>
                    <td className="px-4 py-3 text-xs text-gray-600">
                      {row.explanation}
                    </td>
                    <td className="px-4 py-3 text-xs text-gray-600">
                      {row.prevention}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            Notice that 70-80% of all blowouts come from three causes you can
            control: under-inflation, age, and overload. A disciplined
            maintenance routine eliminates the majority of trailer tire
            failures.
          </p>
        </div>
      </section>

      {/* Tire age + DOT code */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          Tire Age: The Hidden Threat
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            Every trailer tire has a DOT date code on its sidewall. Look for
            a four-digit number inside an oval marked &quot;DOT&quot; (typically on
            the outer sidewall). The first two digits are the week of
            manufacture, the last two are the year. A tire marked &quot;1522&quot;
            was made in week 15 of 2022 (April 2022).
          </p>
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-5">
            <h3 className="font-semibold text-gray-900">5-Year / 7-Year Rules</h3>
            <div className="mt-3 space-y-2 text-sm text-gray-700">
              <p>
                <strong>Industry consensus (RVIA, Tire Industry Association):</strong>{" "}
                Replace trailer tires after <strong>5 years of service</strong>{" "}
                or <strong>7 years from manufacture</strong>, whichever comes
                first. Heat, UV, and static load degrade rubber compounds
                long before tread depth becomes critical.
              </p>
              <p>
                <strong>Storage extends time to replacement:</strong> A 5-year-old
                tire that has sat in storage for 3 of those years may still
                have significant life. A 5-year-old tire that has towed
                30,000 miles is at the end of its safe life. Track
                mileage and storage time together.
              </p>
              <p>
                <strong>Climate matters:</strong> Trailer tires in hot, sunny
                climates (Arizona, Texas, Florida) age 2-3 times faster than
                tires in cool, shaded climates. Adjust replacement
                accordingly.
              </p>
            </div>
          </div>
          <div className="rounded-xl border-l-4 border-danger-500 bg-danger-50 p-4">
            <p className="text-sm text-danger-700">
              <strong>Red flag at dealerships:</strong> New travel trailers
              sometimes arrive with 12-18 month old tires that have been
              stored outdoors. Check the DOT date code on a new trailer.
              Anything older than 12 months from the date of purchase
              warrants a free tire replacement request; many dealers will
              accommodate this when you point out the date code.
            </p>
          </div>
        </div>
      </section>

      {/* Pre-trip checklist */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          Pre-Trip Tire Inspection Checklist
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            Run this checklist before every long trip. It takes 15-20
            minutes and catches 90% of tire problems before they become
            failures on the road.
          </p>
          <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
            <h3 className="font-semibold text-gray-900">
              Pre-Departure Inspection (15 minutes)
            </h3>
            <ul className="mt-3 space-y-2 text-sm">
              {PRE_TRIP_CHECKLIST.map((item, i) => (
                <li key={i} className="flex gap-3">
                  <input
                    type="checkbox"
                    className="mt-1 h-4 w-4 rounded border-gray-300"
                    readOnly
                    aria-label={`Inspection item ${i + 1}`}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <p>
            After the first 50 miles of any trip, pull into a rest area and
            feel each hub with your hand (not your palm). Warm is OK; hot is
            not. Hot hubs suggest bearing problems or brake drag that can
            cook the inner dual tire. Catch this early and you save the
            tire.
          </p>
        </div>
      </section>

      {/* TPMS section */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          Why You Need a Tire Pressure Monitoring System
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            You cannot watch four or six tire pressures while driving. A
            TPMS does it for you, alerting you the moment any tire drops
            10-15% below target. The marginal cost is small compared to
            the cost of a single blowout event.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-gray-300 bg-gray-50">
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    System
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Price Range
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Highlights
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-700">
                    TireMinder A1A
                  </td>
                  <td className="px-4 py-3 text-gray-600">$250-$330</td>
                  <td className="px-4 py-3 text-gray-600">
                    4-sensor kit, replaceable CR123A batteries, color display,
                    pressure and temperature alerts
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-700">
                    TST 507 (Internal/External)
                  </td>
                  <td className="px-4 py-3 text-gray-600">$300-$420</td>
                  <td className="px-4 py-3 text-gray-600">
                    Wireless sensors, user-replaceable batteries, multiple
                    trailer memory
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-700">
                    PressurePro Pulse
                  </td>
                  <td className="px-4 py-3 text-gray-600">$280-$360</td>
                  <td className="px-4 py-3 text-gray-600">
                    External strap-on sensors (no need to break down tire to
                    install), smartphone pairing
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-700">
                    EEZTire 6-Sensor
                  </td>
                  <td className="px-4 py-3 text-gray-600">$230-$320</td>
                  <td className="px-4 py-3 text-gray-600">
                    Budget-friendly, 6 sensors for triple-axle toy haulers,
                    solar charging option
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            Internal sensors (mounted inside the wheel with the valve stem)
            are more accurate and theft-resistant but require tire
            dismounting for installation. External sensors strap onto the
            valve stem and take 10 minutes per tire to install. Both work;
            internal is preferred for full-time towers.
          </p>
        </div>
      </section>

      {/* What to do when a blowout happens */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          What to Do When a Blowout Happens
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            Even with perfect maintenance, blowouts can happen. Knowing the
            right response keeps the rig on the road and out of the ditch.
          </p>
          <ol className="ml-6 list-decimal space-y-3">
            <li>
              <strong>Hold the steering wheel firmly.</strong> A sudden blowout
              on a single dual-tire setup pulls the trailer toward the failed
              tire. Do not slam the brakes; do not overcorrect.
            </li>
            <li>
              <strong>Gently ease off the accelerator.</strong> Let the tow
              vehicle slow naturally. Tap the trailer brake controller briefly
              to slow the trailer without locking the wheels.
            </li>
            <li>
              <strong>Steer toward the side of the road at low speed.</strong>{" "}
              Pull over once you are below 25-30 mph. Pulling off at speed
              risks trailer sway or jackknifing.
            </li>
            <li>
              <strong>Turn on hazard lights immediately.</strong> Other drivers
              need to see your stopped rig. Place reflective triangles if you
              have them.
            </li>
            <li>
              <strong>Inspect the failed tire carefully.</strong> Find the
              cause. A sidewall blowout points to under-inflation or age; a
              tread separation points to overload or manufacturing defect.
            </li>
            <li>
              <strong>Check the inner dual tire.</strong> If you lost a single
              outer dual tire, the inner tire almost always needs replacement
              too (it was likely heated by being right next to the failed
              tire).
            </li>
            <li>
              <strong>Use the spare carefully.</strong> If you do not have a
              matching spare, road service to a tire shop is the safer call,
              especially on a dual axle.
            </li>
          </ol>
          <div className="rounded-xl border-l-4 border-danger-500 bg-danger-50 p-4">
            <p className="text-sm text-danger-700">
              <strong>Critical warning:</strong> Never replace just one tire
              on a dual axle. Always replace duals in matched pairs on the
              same axle. Mismatched tire diameters (even 1/4 inch) on a dual
              axle force one tire to carry much more load than the other,
              accelerating wear and inviting a second failure.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-12 rounded-2xl bg-brand-600 p-8 text-center text-white">
        <h2 className="text-2xl font-bold">Check Your Trailer Payload</h2>
        <p className="mt-2 text-brand-100">
          Overloaded tires are a leading cause of blowouts. Verify your
          trailer is within its GVWR before your next trip. Free, no
          sign-up.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link
            href="/gvwr-calculator"
            className="inline-block rounded-xl bg-white px-6 py-3 text-sm font-bold text-brand-700 shadow-lg transition-all hover:bg-brand-50 active:scale-[0.99]"
          >
            GVWR Calculator
          </Link>
          <Link
            href="/payload-calculator"
            className="inline-block rounded-xl bg-white px-6 py-3 text-sm font-bold text-brand-700 shadow-lg transition-all hover:bg-brand-50 active:scale-[0.99]"
          >
            Payload Calculator
          </Link>
          <Link
            href="/gcwr-calculator"
            className="inline-block rounded-xl bg-white px-6 py-3 text-sm font-bold text-brand-700 shadow-lg transition-all hover:bg-brand-50 active:scale-[0.99]"
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
              href="/guides/how-to-read-tire-and-loading-label"
              className="text-brand-600 hover:underline"
            >
              How to Read Your Truck&apos;s Tire and Loading Label
            </Link>
          </li>
          <li>
            <Link
              href="/guides/cat-scale-weighing"
              className="text-brand-600 hover:underline"
            >
              How to Weigh Your RV at a CAT Scale
            </Link>
          </li>
          <li>
            <Link
              href="/guides/exceed-gvwr-dangers"
              className="text-brand-600 hover:underline"
            >
              What Happens If You Exceed GVWR
            </Link>
          </li>
          <li>
            <Link
              href="/guides/spring-checklist"
              className="text-brand-600 hover:underline"
            >
              Spring RV Safety Checklist
            </Link>
          </li>
          <li>
            <Link
              href="/guides/winter-storage"
              className="text-brand-600 hover:underline"
            >
              How to Winterize &amp; Store Your RV
            </Link>
          </li>
        </ul>
      </section>

      {/* External references */}
      <section className="mt-12 border-t border-gray-200 pt-8">
        <h2 className="text-lg font-bold text-gray-900">
          Sources &amp; References
        </h2>
        <ul className="mt-3 space-y-1 text-sm text-gray-500">
          <li>
            <a
              href="https://www.rvia.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 hover:underline"
            >
              RV Industry Association (RVIA)
            </a>{" "}
            &mdash; rvia.org
          </li>
          <li>
            <a
              href="https://www.nhtsa.gov/equipment/tires"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 hover:underline"
            >
              NHTSA Tire Safety &amp; Recalls
            </a>{" "}
            &mdash; nhtsa.gov
          </li>
          <li>
            <a
              href="https://www.tireindustry.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 hover:underline"
            >
              Tire Industry Association (TIA)
            </a>{" "}
            &mdash; tireindustry.org
          </li>
          <li>
            <a
              href="https://www.goodyear.com/en_US/tire-care/tire-safety/tire-aging"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 hover:underline"
            >
              Goodyear Tire Aging &amp; Replacement Guide
            </a>{" "}
            &mdash; goodyear.com
          </li>
          <li>
            <a
              href="https://www.tirerack.com/tires/tiretech/techpage.jsp?techid=139"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 hover:underline"
            >
              Tire Rack: Trailer Tire Load Inflation Tables
            </a>{" "}
            &mdash; tirerack.com
          </li>
          <li>
            <a
              href="https://www.etrailer.com/faq-tire-aging.aspx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 hover:underline"
            >
              Trailer Tire Aging and Replacement
            </a>{" "}
            &mdash; etrailer.com
          </li>
          <li>
            <a
              href="https://www.fmcsa.dot.gov/regulations/title49/section/393.75"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 hover:underline"
            >
              FMCSA 49 CFR 393.75 Tires
            </a>{" "}
            &mdash; fmcsa.dot.gov
          </li>
        </ul>
      </section>
    </div>
  );
}
