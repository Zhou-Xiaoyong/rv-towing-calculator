import type { Metadata } from "next";
import Link from "next/link";
import { FaqJsonLd, ArticleJsonLd } from "@/components/seo/JsonLd";
import { DEFAULT_OG_IMAGES } from "@/lib/seo/default-og-image";

export const metadata: Metadata = {
  title: "RAM 1500 vs Ford F-150 Towing Capacity Comparison (2025-2026)",
  description:
    "RAM 1500 vs Ford F-150 towing comparison: max tow rating, payload, engine torque, real-world payload math, and which truck is safer for your RV. Independent, data-driven analysis.",
  alternates: {
    canonical: "https://rvtowingcalc.com/guides/ram-1500-vs-f150-towing",
  },
  openGraph: {
    title: "RAM 1500 vs Ford F-150 Towing Capacity Comparison (2025-2026)",
    description:
      "RAM 1500 vs Ford F-150 head-to-head on towing capacity, payload, torque, and real-world RV towing safety. Independent comparison.",
    url: "https://rvtowingcalc.com/guides/ram-1500-vs-f150-towing",
    images: DEFAULT_OG_IMAGES,
  },
};

const FAQS = [
  {
    q: "Which truck tows more: RAM 1500 or Ford F-150?",
    a: "The Ford F-150 has a higher maximum tow rating (up to 14,000 lbs with the 3.5L EcoBoost and Max Tow Package) compared to the RAM 1500 (up to 12,750 lbs with the 5.7L Hemi eTorque). However, maximum tow rating only applies to a specific, stripped-down configuration. In the crew cab, 4x4, mid-trim configurations that most RV owners actually buy, the F-150 still holds the advantage on both tow rating and payload capacity, though the margin narrows significantly. The real answer depends on which specific trim and configuration you choose.",
  },
  {
    q: "Does the RAM 1500 have enough payload for an 8,000 lb travel trailer?",
    a: "It depends on the configuration. An 8,000 lb travel trailer at 13% tongue weight puts 1,040 lbs on the hitch. Add 550 lbs for a family of four, 100 lbs for a WDH, and 200 lbs for cargo, and you need at least 1,890 lbs of payload. A RAM 1500 Big Horn/Lone Star crew cab 4x4 with the 5.7L Hemi typically offers 1,550-1,800 lbs of payload. That means most RAM 1500 configurations will be tight or over payload for an 8,000 lb trailer with a family. The Rebel and higher trims have even less payload (1,400-1,600 lbs). If you tow 8,000 lbs regularly, you need to carefully check the door jamb sticker on the specific truck you are considering.",
  },
  {
    q: "Is the RAM 1500 coil spring suspension a problem for towing?",
    a: "RAM's coil-spring rear suspension provides a smoother ride when unloaded compared to the leaf springs used by Ford, but it does sag more under tongue weight. The available air suspension auto-levels and partially compensates for this, but air suspension adds cost and complexity. Leaf springs (Ford, GM, Toyota) are simpler and resist sag better under heavy tongue weight. For heavy towing, leaf springs have a practical advantage. For daily driving with occasional light towing, the RAM's coil springs are a genuine comfort benefit. It is a trade-off, not a defect.",
  },
  {
    q: "Which engine is better for towing: Ford 3.5L EcoBoost or RAM 5.7L Hemi?",
    a: "For towing, the Ford 3.5L EcoBoost has a clear advantage. It produces 500 lb-ft of torque at 3,100 RPM versus the Hemi's 410 lb-ft at 3,950 RPM. The EcoBoost's twin turbos deliver torque earlier and hold it flatter across the RPM range, which means fewer downshifts on grades and less transmission hunting. The Hemi is a naturally aspirated V8 that needs to rev higher to make peak torque, which increases noise, fuel consumption, and transmission wear while climbing. The Hemi has a satisfying sound and proven reliability record, but the EcoBoost is the more effective towing engine.",
  },
  {
    q: "Should I get the RAM 1500 EcoDiesel for towing?",
    a: "The RAM 1500's 3.0L EcoDiesel (now called Hurricane Twin-Turbo in 2025+) offers excellent fuel economy while towing (18-22 MPG vs 8-12 MPG for gas engines) and strong torque (495 lb-ft). However, it adds approximately $4,000-$5,000 to the purchase price, adds 200-300 lbs of engine weight (reducing payload capacity by a corresponding amount), and diesel maintenance costs are higher (DPF, DEF, turbo service). The EcoDiesel makes sense if you tow frequently and cover long distances. If you tow 5-10 weekends per year, the gas Hemi or EcoBoost is the better financial choice despite higher fuel costs.",
  },
  {
    q: "Can either truck tow a 10,000 lb fifth wheel?",
    a: "Neither a RAM 1500 nor an F-150 is well-suited for a 10,000 lb fifth wheel. A fifth wheel at that weight typically has 2,000+ lbs of pin weight, which exceeds the payload capacity of any half-ton configuration. Fifth wheels place all pin weight directly in the truck bed (no WDH to distribute it), making payload the hard constraint. Even the F-150 with the Heavy-Duty Payload Package (up to 2,600 lbs payload on a regular cab) would be at its limit. For a 10,000 lb fifth wheel, a three-quarter-ton truck (F-250, RAM 2500) is the appropriate choice. See our 5th Wheel vs Travel Trailer guide for more details.",
  },
];

const CONFIG_COMPARISON = [
  {
    spec: "Max Tow Rating",
    ram: "12,750 lbs",
    ford: "14,000 lbs",
    note: "Ford leads by 1,250 lbs on paper",
  },
  {
    spec: "Best Towing Engine",
    ram: "5.7L Hemi V8 eTorque",
    ford: "3.5L EcoBoost V6",
    note: "EcoBoost makes more torque at lower RPM",
  },
  {
    spec: "Peak Torque",
    ram: "410 lb-ft @ 3,950 RPM",
    ford: "500 lb-ft @ 3,100 RPM",
    note: "22% more torque, 850 RPM sooner",
  },
  {
    spec: "Payload (Crew Cab 4x4, Mid Trim)",
    ram: "1,550-1,800 lbs",
    ford: "1,700-2,100 lbs",
    note: "Ford typically 200-300 lbs more payload",
  },
  {
    spec: "Max Payload (Any Config)",
    ram: "2,300 lbs (Regular Cab, 4x2)",
    ford: "3,325 lbs (Regular Cab, HDPP, 4x2)",
    note: "Ford HDPP is in a different class",
  },
  {
    spec: "Rear Suspension",
    ram: "Coil springs (optional air)",
    ford: "Leaf springs",
    note: "Leaf resists sag; coil rides smoother",
  },
  {
    spec: "Fuel Tank (Max Tow)",
    ram: "26 gal (std) / 33 gal (optional)",
    ford: "36 gal (Max Tow Package)",
    note: "Ford's 36-gal tank gives 50% more range while towing",
  },
  {
    spec: "Towing MPG (Gas, Real-World)",
    ram: "7-11 MPG",
    ford: "8-12 MPG",
    note: "EcoBoost slightly more efficient under load",
  },
  {
    spec: "WDH Required Above",
    ram: "5,000 lbs",
    ford: "5,000 lbs",
    note: "Both require WDH for typical RV weights",
  },
  {
    spec: "Integrated Brake Controller",
    ram: "Available (trailer tow package)",
    ford: "Included (Max Tow Package)",
    note: "Ford includes it standard with tow package",
  },
  {
    spec: "Starting Price (Crew Cab 4x4, Tow-Ready)",
    ram: "~$47,000",
    ford: "~$48,500",
    note: "Pricing varies by region and incentives",
  },
];

export default function RamVsF150TowingGuidePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <FaqJsonLd
        faqs={FAQS}
        baseUrl="https://rvtowingcalc.com/guides/ram-1500-vs-f150-towing"
      />
      <ArticleJsonLd
        title="RAM 1500 vs Ford F-150 Towing Capacity Comparison (2025-2026)"
        description="RAM 1500 vs Ford F-150 head-to-head on towing capacity, payload, torque, and real-world RV towing safety. Independent comparison."
        url="https://rvtowingcalc.com/guides/ram-1500-vs-f150-towing"
        datePublished="2026-07-20"
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
        <span className="text-gray-900">RAM 1500 vs F-150 Towing</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
        RAM 1500 vs Ford F-150 Towing Capacity Comparison (2025&ndash;2026)
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        The Ford F-150 and RAM 1500 are the two best-selling half-ton trucks in
        America, and both are marketed aggressively to RV owners. But the
        brochure numbers tell only part of the story. This independent
        comparison cuts through the marketing to answer the question that
        actually matters: which truck is safer for towing your RV, and by how
        much?
      </p>

      {/* Head-to-head spec table */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          Head-to-Head: Key Towing Specifications
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            The table below compares the most important towing specifications
            for the configurations most RV owners actually buy: crew cab, 4x4,
            mid-trim with the towing engine and tow package.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-gray-300 bg-gray-50">
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Specification
                  </th>
                  <th className="px-4 py-3 text-center font-semibold text-gray-900">
                    RAM 1500
                  </th>
                  <th className="px-4 py-3 text-center font-semibold text-gray-900">
                    Ford F-150
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Edge
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {CONFIG_COMPARISON.map((row) => (
                  <tr key={row.spec}>
                    <td className="px-4 py-3 font-medium text-gray-700">
                      {row.spec}
                    </td>
                    <td className="px-4 py-3 text-center text-gray-600">
                      {row.ram}
                    </td>
                    <td className="px-4 py-3 text-center text-gray-600">
                      {row.ford}
                    </td>
                    <td className="px-4 py-3 text-xs text-gray-500">
                      {row.note}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="rounded-xl border-l-4 border-brand-500 bg-brand-50 p-4">
            <p className="text-sm text-brand-700">
              <strong>Important:</strong> These are representative ranges, not
              guarantees. Payload and tow ratings vary dramatically by trim,
              cab style, bed length, drive type, and option packages. The only
              number that matters is the payload sticker on the driver&apos;s
              door jamb of the specific truck you are buying. Use our{" "}
              <Link
                href="/payload-calculator"
                className="font-semibold text-brand-600 underline"
              >
                Payload Calculator
              </Link>{" "}
              to verify your setup before you tow.
            </p>
          </div>
        </div>
      </section>

      {/* Engine comparison */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          Engine Comparison: EcoBoost vs Hemi
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            The engine is the heart of any tow vehicle, and the contrast between
            Ford&apos;s twin-turbo EcoBoost and RAM&apos;s naturally aspirated
            Hemi V8 is one of the most debated topics in the truck world. Here
            is what the data says for towing:
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border-2 border-brand-200 bg-white p-5">
              <h3 className="font-bold text-gray-900">
                Ford 3.5L EcoBoost V6
              </h3>
              <p className="mt-2 text-sm">
                <strong>400 hp / 500 lb-ft @ 3,100 RPM</strong>
              </p>
              <ul className="mt-2 ml-4 list-disc space-y-1 text-sm">
                <li>
                  Twin turbos deliver peak torque 850 RPM sooner than the Hemi
                </li>
                <li>
                  Torque curve stays flat from 2,500-5,000 RPM&mdash;fewer
                  downshifts on grades
                </li>
                <li>
                  10-speed automatic is well-suited for towing with tight gear
                  ratios
                </li>
                <li>
                  Slightly better towing fuel economy (8-12 MPG vs 7-11 MPG)
                </li>
                <li>
                  Proven track record since 2011; turbo replacements are rare
                  but expensive ($2,500-$4,000 per turbo if needed)
                </li>
              </ul>
            </div>
            <div className="rounded-xl border-2 border-gray-200 bg-white p-5">
              <h3 className="font-bold text-gray-900">
                RAM 5.7L Hemi V8 eTorque
              </h3>
              <p className="mt-2 text-sm">
                <strong>395 hp / 410 lb-ft @ 3,950 RPM</strong>
              </p>
              <ul className="mt-2 ml-4 list-disc space-y-1 text-sm">
                <li>
                  Naturally aspirated V8 with proven durability over decades
                </li>
                <li>
                  eTorque mild-hybrid system adds 130 lb-ft of launch assist
                  for smooth starts
                </li>
                <li>
                  Needs to rev higher to reach peak torque&mdash;more
                  transmission hunting on steep grades
                </li>
                <li>
                  Classic V8 sound and linear power delivery that many drivers
                  prefer
                </li>
                <li>
                  Simpler engine (no turbos) means lower long-term maintenance
                  costs
                </li>
              </ul>
            </div>
          </div>

          <p>
            The bottom line for towing: the EcoBoost&apos;s 500 lb-ft of
            torque available at just 3,100 RPM is a meaningful advantage when
            you are pulling 8,000+ lbs up a 6% grade. The Hemi can do the
            work&mdash;it just needs to rev higher and shift more often to do
            it. On flat terrain, the difference is barely noticeable. In the
            mountains, the EcoBoost is noticeably more relaxed.
          </p>
        </div>
      </section>

      {/* Payload: the real constraint */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          Payload Comparison: Where the Rubber Meets the Road
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            Tow rating gets the headlines, but payload is what gets you in
            trouble. Here is a realistic scenario comparing both trucks with the
            same family and trailer:
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-gray-300 bg-gray-50">
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Weight Source
                  </th>
                  <th className="px-4 py-3 text-right font-semibold text-gray-900">
                    Weight (lbs)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-700">
                    Tongue weight (7,500 lb trailer at 13%)
                  </td>
                  <td className="px-4 py-3 text-right text-gray-600">975</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-700">
                    Two adults + two kids
                  </td>
                  <td className="px-4 py-3 text-right text-gray-600">550</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-700">
                    Bed cargo (cooler, chairs, generator)
                  </td>
                  <td className="px-4 py-3 text-right text-gray-600">250</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-700">
                    Weight distribution hitch
                  </td>
                  <td className="px-4 py-3 text-right text-gray-600">100</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-700">
                    Aftermarket accessories
                  </td>
                  <td className="px-4 py-3 text-right text-gray-600">80</td>
                </tr>
                <tr className="border-t-2 border-gray-400 bg-gray-50">
                  <td className="px-4 py-3 font-bold text-gray-900">
                    Total Payload Required
                  </td>
                  <td className="px-4 py-3 text-right font-bold text-gray-900">
                    1,955
                  </td>
                </tr>
                <tr className="bg-safe-50">
                  <td className="px-4 py-3 font-medium text-safe-700">
                    F-150 XLT SuperCrew 4x4 (3.5L EcoBoost + Max Tow) payload
                  </td>
                  <td className="px-4 py-3 text-right font-medium text-safe-700">
                    ~1,900-2,100
                  </td>
                </tr>
                <tr className="bg-warning-50">
                  <td className="px-4 py-3 font-medium text-warning-700">
                    RAM 1500 Big Horn Crew Cab 4x4 (5.7L Hemi) payload
                  </td>
                  <td className="px-4 py-3 text-right font-medium text-warning-700">
                    ~1,550-1,800
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="rounded-xl border-l-4 border-warning-500 bg-warning-50 p-4">
            <p className="text-sm text-warning-700">
              <strong>Result:</strong> The F-150 with Max Tow Package can
              handle this scenario&mdash;tight but within limits on most
              configurations. The RAM 1500 Big Horn is likely over payload in
              this same scenario, and higher trims (Laramie, Limited) are
              almost certainly over. This is not a knock on the RAM; it is a
              reminder that half-ton payload limits are unforgiving. Check your{" "}
              <Link
                href="/guides/payload-capacity"
                className="font-semibold text-brand-600 underline"
              >
                payload math
              </Link>{" "}
              before every trip.
            </p>
          </div>
        </div>
      </section>

      {/* Suspension comparison */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          Suspension &amp; Ride Quality: Coil Springs vs Leaf Springs
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            This is the most fundamental mechanical difference between the two
            trucks for towing:
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-gray-200 p-5">
              <h3 className="font-semibold text-gray-900">
                Ford F-150: Leaf Spring Rear
              </h3>
              <p className="mt-2 text-sm">
                Leaf springs are the traditional choice for trucks that tow.
                They resist sag under heavy tongue weight, are simple to
                maintain, and have a progressive spring rate that stiffens as
                load increases. The trade-off is a stiffer ride when the truck
                is empty&mdash;you feel every expansion joint. For dedicated
                tow rigs, leaf springs are the practical choice.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 p-5">
              <h3 className="font-semibold text-gray-900">
                RAM 1500: Coil Spring Rear (Optional Air)
              </h3>
              <p className="mt-2 text-sm">
                RAM&apos;s coil springs deliver the best unloaded ride quality
                in the half-ton class&mdash;car-like, even. But coils compress
                more under tongue weight. The optional air suspension
                auto-levels the rear end, which helps, but adds complexity and
                cost ($1,500-$2,000). If you tow heavy often, the air
                suspension is worth it. If you tow occasionally, the standard
                coils are fine with a properly set up WDH.
              </p>
            </div>
          </div>

          <p>
            The suspension difference is real but manageable. A properly
            configured WDH on either truck will level the rig. The Ford starts
            with a mechanical advantage; the RAM compensates with air
            suspension or a well-adjusted WDH. See our{" "}
            <Link
              href="/guides/weight-distribution-hitch-setup"
              className="font-semibold text-brand-600 underline"
            >
              WDH Setup Guide
            </Link>{" "}
            for step-by-step instructions.
          </p>
        </div>
      </section>

      {/* Feature comparison */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          Towing Technology &amp; Features
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            Both trucks offer advanced towing technology, but the details matter:
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-gray-300 bg-gray-50">
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Feature
                  </th>
                  <th className="px-4 py-3 text-center font-semibold text-gray-900">
                    RAM 1500
                  </th>
                  <th className="px-4 py-3 text-center font-semibold text-gray-900">
                    Ford F-150
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-700">
                    Integrated Brake Controller
                  </td>
                  <td className="px-4 py-3 text-center text-gray-600">
                    Available (tow package)
                  </td>
                  <td className="px-4 py-3 text-center text-gray-600">
                    Standard (Max Tow)
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-700">
                    Pro Trailer Backup Assist
                  </td>
                  <td className="px-4 py-3 text-center text-gray-600">No</td>
                  <td className="px-4 py-3 text-center text-gray-600">
                    Yes (knob-based)
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-700">
                    Trailer Sway Control
                  </td>
                  <td className="px-4 py-3 text-center text-gray-600">Yes</td>
                  <td className="px-4 py-3 text-center text-gray-600">Yes</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-700">
                    360-Degree Trailer Camera
                  </td>
                  <td className="px-4 py-3 text-center text-gray-600">
                    Available
                  </td>
                  <td className="px-4 py-3 text-center text-gray-600">
                    Available
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-700">
                    Onboard Scales / Payload Meter
                  </td>
                  <td className="px-4 py-3 text-center text-gray-600">No</td>
                  <td className="px-4 py-3 text-center text-gray-600">
                    Yes (2024+)
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-700">
                    Blind-Spot for Trailer
                  </td>
                  <td className="px-4 py-3 text-center text-gray-600">
                    Available
                  </td>
                  <td className="px-4 py-3 text-center text-gray-600">
                    Available
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-700">
                    Tailgate Step
                  </td>
                  <td className="px-4 py-3 text-center text-gray-600">No</td>
                  <td className="px-4 py-3 text-center text-gray-600">
                    Yes
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-700">
                    Box Side Step
                  </td>
                  <td className="px-4 py-3 text-center text-gray-600">
                    No
                  </td>
                  <td className="px-4 py-3 text-center text-gray-600">
                    Available
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            Ford&apos;s towing technology package is more comprehensive. The
            Pro Trailer Backup Assist (which lets you steer the trailer with a
            knob instead of the steering wheel) and the onboard payload scales
            are genuine innovations that no other manufacturer offers. The RAM
            has all the essential towing features but fewer of the advanced
            driver aids.
          </p>
        </div>
      </section>

      {/* Our verdict */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          Our Verdict: Which Truck for Which RV Owner
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            There is no universal winner. The better truck depends on what you
            tow and how you use it:
          </p>

          <div className="space-y-4">
            <div className="rounded-xl border-2 border-brand-200 bg-white p-6">
              <h3 className="font-bold text-brand-700">
                Choose the Ford F-150 If:
              </h3>
              <ul className="mt-3 ml-6 list-disc space-y-2 text-sm">
                <li>
                  You tow a travel trailer over 7,000 lbs regularly (payload
                  advantage is critical)
                </li>
                <li>
                  You drive in mountainous terrain (EcoBoost torque advantage
                  is significant on grades)
                </li>
                <li>
                  You want the maximum available payload and tow rating
                  headroom
                </li>
                <li>
                  Advanced towing technology (Pro Trailer Backup Assist, onboard
                  scales) matters to you
                </li>
                <li>
                  Range while towing matters&mdash;the 36-gallon tank means
                  fewer fuel stops
                </li>
              </ul>
            </div>

            <div className="rounded-xl border-2 border-gray-200 bg-white p-6">
              <h3 className="font-bold text-gray-900">
                Choose the RAM 1500 If:
              </h3>
              <ul className="mt-3 ml-6 list-disc space-y-2 text-sm">
                <li>
                  Your trailer is under 6,500 lbs and you want the best daily
                  ride quality
                </li>
                <li>
                  You prefer a naturally aspirated V8 for simplicity and sound
                </li>
                <li>
                  The truck is your daily driver and comfort matters more than
                  maximum towing
                </li>
                <li>
                  You value the air suspension for auto-leveling when hitched
                </li>
                <li>
                  Diesel fuel economy on long tows is important (with the
                  3.0L Hurricane)
                </li>
              </ul>
            </div>
          </div>

          <div className="rounded-xl border-l-4 border-danger-500 bg-danger-50 p-4">
            <p className="text-sm text-danger-700">
              <strong>Regardless of which truck you choose:</strong> Always
              verify the payload sticker on the specific truck you are buying.
              The difference between a truck that can safely tow your RV and
              one that cannot often comes down to 200 lbs of payload. Do not
              rely on brochure numbers. Read our{" "}
              <Link
                href="/guides/exceed-gvwr-dangers"
                className="font-semibold text-brand-600 underline"
              >
                guide on exceeding GVWR
              </Link>{" "}
              to understand what happens when payload is ignored.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-12 rounded-2xl bg-brand-600 p-8 text-center text-white">
        <h2 className="text-2xl font-bold">
          Run the Numbers Before You Choose
        </h2>
        <p className="mt-2 text-brand-100">
          Whether you pick Ford or RAM, verify your payload math with our free
          calculators. Two minutes could save you from a dangerous overweight
          setup.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link
            href="/towing-capacity-calculator"
            className="inline-block rounded-xl bg-white px-6 py-3 text-sm font-bold text-brand-700 shadow-lg transition-all hover:bg-brand-50 active:scale-[0.99]"
          >
            Towing Capacity Calculator
          </Link>
          <Link
            href="/payload-calculator"
            className="inline-block rounded-xl bg-white px-6 py-3 text-sm font-bold text-brand-700 shadow-lg transition-all hover:bg-brand-50 active:scale-[0.99]"
          >
            Payload Calculator
          </Link>
          <Link
            href="/tongue-weight-calculator"
            className="inline-block rounded-xl bg-white px-6 py-3 text-sm font-bold text-brand-700 shadow-lg transition-all hover:bg-brand-50 active:scale-[0.99]"
          >
            Tongue Weight Calculator
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
              href="/guides/best-half-ton-trucks-8000-lbs"
              className="text-brand-600 hover:underline"
            >
              Best Half-Ton Trucks for Towing 8,000 lbs
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
              href="/guides/towing-capacity-explained"
              className="text-brand-600 hover:underline"
            >
              Towing Capacity Explained: The Complete Guide
            </Link>
          </li>
          <li>
            <Link
              href="/guides/weight-distribution-hitch-setup"
              className="text-brand-600 hover:underline"
            >
              Weight Distribution Hitch Setup: Step-by-Step Guide
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
              href="/guides/fifth-wheel-vs-travel-trailer"
              className="text-brand-600 hover:underline"
            >
              5th Wheel vs Travel Trailer: Towing Compared
            </Link>
          </li>
        </ul>
      </section>

      {/* External references */}
      <section className="mt-12 border-t border-gray-200 pt-8">
        <h2 className="text-lg font-bold text-gray-900">Sources &amp; References</h2>
        <ul className="mt-3 space-y-1 text-sm text-gray-500">
          <li>
            <a
              href="https://www.ford.com/trucks/f150/features/towing/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 hover:underline"
            >
              Ford F-150 Towing Guide &amp; Payload Selector
            </a>{" "}
            &mdash; ford.com
          </li>
          <li>
            <a
              href="https://www.ramtrucks.com/towing-guide.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 hover:underline"
            >
              RAM 1500 Towing Guide
            </a>{" "}
            &mdash; ramtrucks.com
          </li>
          <li>
            <a
              href="https://www.sae.org/standards/content/j2807_202002/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 hover:underline"
            >
              SAE J2807: Performance Requirements for Determining Tow-Vehicle GCWR
            </a>{" "}
            &mdash; sae.org
          </li>
          <li>
            <a
              href="https://www.nhtsa.gov/equipment/towing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 hover:underline"
            >
              NHTSA Towing Safety Guidelines
            </a>{" "}
            &mdash; nhtsa.gov
          </li>
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
        </ul>
      </section>
    </div>
  );
}
