import type { Metadata } from "next";
import Link from "next/link";
import { FaqJsonLd, ArticleJsonLd } from "@/components/seo/JsonLd";
import { DEFAULT_OG_IMAGES } from "@/lib/seo/default-og-image";

export const metadata: Metadata = {
  title: "Diesel vs Gas Truck for Towing RV: Which Is Better in 2026?",
  description:
    "Diesel vs gas truck for towing RV: compare torque, fuel economy, maintenance costs, payload, real-world mountain performance, and total cost of ownership to pick the right engine for your trailer.",
  alternates: {
    canonical: "https://rvtowingcalc.com/guides/diesel-vs-gas-truck-rv-towing",
  },
  openGraph: {
    title: "Diesel vs Gas Truck for Towing RV: Which Is Better in 2026?",
    description:
      "Head-to-head comparison of diesel and gas trucks for RV towing. Torque curves, fuel economy, maintenance, payload trade-offs, and which powertrain wins for your trailer weight.",
    url: "https://rvtowingcalc.com/guides/diesel-vs-gas-truck-rv-towing",
    images: DEFAULT_OG_IMAGES,
  },
};

const FAQS = [
  {
    q: "Is a diesel truck better than gas for towing an RV?",
    a: "It depends on what and where you tow. Diesel engines produce more torque at low RPM, use an exhaust brake for safer mountain descents, and get better fuel economy while towing heavy loads. Gas engines cost less up front, have lower maintenance costs, and carry more payload because the engine itself is lighter. For travel trailers under 8,000 lbs towed mostly on flat terrain, gas is often the smarter financial choice. For trailers over 10,000 lbs, frequent mountain towing, or fifth wheels, diesel's advantages become decisive.",
  },
  {
    q: "How much more does a diesel truck cost than a gas truck?",
    a: "The diesel engine option typically costs $8,000-$12,000 more than the base gas engine on a new heavy-duty truck. On half-ton trucks (RAM 1500 EcoDiesel, Silverado 1500 Duramax), the premium is $3,000-$5,000. Used diesel trucks hold their value better, so you recover roughly half the premium at resale. Beyond the purchase price, diesel maintenance costs $300-$500 more per year on average, and diesel fuel typically costs $0.50-$1.00 more per gallon than regular gasoline.",
  },
  {
    q: "Do diesel trucks have less payload than gas trucks?",
    a: "Yes. The diesel engine and its supporting systems (intercooler, DEF tank, heavier transmission, dual batteries) weigh 500-800 lbs more than the equivalent gas powertrain. Since GVWR stays the same within a truck class, every pound of engine weight comes directly out of payload capacity. A 2025 RAM 2500 Big Horn Crew Cab 4x4 with the 6.4L Hemi gas engine has roughly 500 lbs more payload than the same truck with the 6.7L Cummins diesel. For half-ton trucks, this diesel payload penalty can make the difference between safely towing a travel trailer and exceeding GVWR.",
  },
  {
    q: "What is diesel exhaust brake and why does it matter for RV towing?",
    a: "An exhaust brake is a butterfly valve in the exhaust system that creates backpressure, using engine compression to slow the vehicle without the service brakes. It is standard on modern diesel trucks and is the single biggest safety advantage of diesel over gas for mountain towing. It allows you to descend steep grades without riding the brakes, preventing brake fade and runaway truck scenarios. Gas trucks rely on engine braking through downshifting, which is less effective on long, steep grades. Some newer gas HD trucks now offer transmission-based descent control, but it is still not as powerful as a true diesel exhaust brake.",
  },
  {
    q: "Is diesel or gas cheaper to maintain for an RV tow vehicle?",
    a: "Gas is cheaper to maintain. Diesel engines require more expensive oil changes ($100-$150 vs $40-$60 for gas), fuel filter replacements every 15,000-20,000 miles, DEF fluid refills ($10-$30 per 2.5 gallons, used at roughly 2-3% of fuel consumption), and eventual maintenance on the DPF (diesel particulate filter) and EGR (exhaust gas recirculation) systems. A modern diesel's emissions system is its most expensive potential failure point, with DPF replacement costing $2,000-$4,000 if it fails outside warranty. Gas engines have none of these systems. Annual maintenance cost difference is typically $300-$600 in favor of gas.",
  },
  {
    q: "Can a gas truck tow a fifth wheel?",
    a: "Yes, many gas HD trucks can tow fifth wheels within certain weight ranges. A RAM 2500 with the 6.4L Hemi can tow up to 17,540 lbs conventionally, and gas-powered F-250 and Silverado 2500HD models handle fifth wheels up to 15,000-16,000 lbs. The limitation is usually payload, not pulling power. Fifth wheel pin weight (15-25% of trailer weight) consumes a large portion of payload, so the gas engine's lighter weight actually gives you more fifth wheel pin weight capacity. However, if your fifth wheel exceeds 15,000 lbs loaded or you tow in the mountains regularly, the diesel's exhaust brake and low-RPM torque become significant safety advantages.",
  },
];

const ENGINE_COMPARISON = [
  {
    engine: "Ford 7.3L Godzilla V8 (Gas)",
    horsepower: "430 hp @ 5,500 RPM",
    torque: "485 lb-ft @ 4,000 RPM",
    maxTow: "Up to 22,000 lbs (F-350 DRW)",
    fuelEcon: "12-15 MPG unloaded / 7-9 towing",
    payloadAdvantage: "+500-700 lbs vs diesel",
  },
  {
    engine: "Ford 6.7L Power Stroke V8 (Diesel)",
    horsepower: "500 hp @ 2,600 RPM",
    torque: "1,200 lb-ft @ 1,600 RPM",
    maxTow: "Up to 40,000 lbs (F-450)",
    fuelEcon: "16-20 MPG unloaded / 10-13 towing",
    payloadAdvantage: "Baseline (heavy engine)",
  },
  {
    engine: "RAM 6.4L Hemi V8 (Gas)",
    horsepower: "410 hp @ 5,600 RPM",
    torque: "429 lb-ft @ 4,000 RPM",
    maxTow: "Up to 18,210 lbs (2500)",
    fuelEcon: "11-14 MPG unloaded / 6-8 towing",
    payloadAdvantage: "+500-600 lbs vs diesel",
  },
  {
    engine: "RAM 6.7L Cummins I6 (Diesel)",
    horsepower: "420 hp @ 2,800 RPM",
    torque: "1,075 lb-ft @ 1,800 RPM",
    maxTow: "Up to 37,090 lbs (3500 DRW)",
    fuelEcon: "15-19 MPG unloaded / 9-12 towing",
    payloadAdvantage: "Baseline (heavy engine)",
  },
  {
    engine: "GM 6.6L L8T V8 (Gas)",
    horsepower: "401 hp @ 5,200 RPM",
    torque: "464 lb-ft @ 4,000 RPM",
    maxTow: "Up to 17,200 lbs (2500HD)",
    fuelEcon: "12-15 MPG unloaded / 7-9 towing",
    payloadAdvantage: "+550-750 lbs vs diesel",
  },
  {
    engine: "GM 6.6L Duramax V8 (Diesel)",
    horsepower: "470 hp @ 2,800 RPM",
    torque: "975 lb-ft @ 1,600 RPM",
    maxTow: "Up to 36,000 lbs (3500HD DRW)",
    fuelEcon: "16-21 MPG unloaded / 10-13 towing",
    payloadAdvantage: "Baseline (heavy engine)",
  },
];

const COST_BREAKDOWN = [
  {
    category: "Engine option premium",
    gas: "$0 (included)",
    diesel: "$8,000 - $12,000",
  },
  {
    category: "Oil change (DIY)",
    gas: "$40 - $60 (7 quarts conventional/synthetic blend)",
    diesel: "$100 - $150 (12-15 quarts full synthetic + filter)",
  },
  {
    category: "Fuel filter replacement",
    gas: "Not required annually",
    diesel: "$50 - $120 every 15,000-20,000 miles",
  },
  {
    category: "DEF fluid (annual, 15,000 miles)",
    gas: "Not applicable",
    diesel: "$120 - $200",
  },
  {
    category: "DPF/SCR maintenance (long-term)",
    gas: "Not applicable",
    diesel: "$2,000 - $4,000 if DPF fails outside warranty",
  },
  {
    category: "Fuel cost (15,000 miles, $3.50 gas / $4.00 diesel)",
    gas: "$3,500 - $4,375 (12-15 MPG unloaded)",
    diesel: "$3,000 - $3,750 (16-20 MPG unloaded)",
  },
];

export default function DieselVsGasTruckGuidePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <FaqJsonLd
        faqs={FAQS}
        baseUrl="https://rvtowingcalc.com/guides/diesel-vs-gas-truck-rv-towing"
      />
      <ArticleJsonLd
        title="Diesel vs Gas Truck for Towing RV: Which Is Better in 2026?"
        description="Head-to-head comparison of diesel and gas trucks for RV towing. Torque curves, fuel economy, maintenance, payload trade-offs, and which powertrain wins for your trailer weight."
        url="https://rvtowingcalc.com/guides/diesel-vs-gas-truck-rv-towing"
        datePublished="2026-08-02"
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
        <span className="text-gray-900">Diesel vs Gas for RV Towing</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
        Diesel vs Gas Truck for Towing RV: Which Is Better in 2026?
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        Walk into any RV forum or campground and you will find the debate raging:
        diesel versus gas. Every owner has a strong opinion. But the real
        answer is not about which engine is &ldquo;better&rdquo;&mdash;it is
        about which engine matches <em>your</em> trailer weight, your typical
        terrain, and your budget. This guide breaks down every factor so you
        can make the right call.
      </p>

      {/* Quick Answer */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          The Short Answer
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border-l-4 border-brand-600 bg-brand-50 p-5">
              <h3 className="font-semibold text-brand-700">Choose Diesel If:</h3>
              <ul className="mt-2 ml-4 list-disc space-y-1 text-sm">
                <li>Your loaded trailer exceeds 10,000 lbs</li>
                <li>You tow a fifth wheel with 2,000+ lb pin weight</li>
                <li>You tow frequently in mountains or the western U.S.</li>
                <li>You tow more than 10,000 miles per year</li>
                <li>You plan to keep the truck 150,000+ miles</li>
              </ul>
            </div>
            <div className="rounded-xl border-l-4 border-safe-500 bg-safe-50 p-5">
              <h3 className="font-semibold text-safe-700">Choose Gas If:</h3>
              <ul className="mt-2 ml-4 list-disc space-y-1 text-sm">
                <li>Your loaded trailer is under 8,000 lbs</li>
                <li>You need maximum payload for a heavy tongue weight</li>
                <li>You tow mostly on flat terrain or short trips</li>
                <li>You tow fewer than 5,000 miles per year</li>
                <li>Lower purchase price and maintenance costs matter more</li>
              </ul>
            </div>
          </div>
          <p>
            If you fall between 8,000 and 10,000 lbs, the decision gets harder.
            Keep reading for the full analysis.
          </p>
        </div>
      </section>

      {/* Torque and towing feel */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          Torque: The Real Difference You Feel Behind the Wheel
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            Horsepower sells trucks. Torque tows trailers. And the way diesel
            and gas engines deliver torque is fundamentally different&mdash;it
            is the single biggest factor in how each truck feels when hitched.
          </p>
          <p>
            A diesel engine produces peak torque at low RPM, typically
            1,600-1,800 RPM. That means full pulling power is available almost
            at idle&mdash;exactly where you need it when starting from a stop
            on a grade or merging onto a highway with a heavy trailer. The
            engine does not need to rev to make power. It just pulls.
          </p>
          <p>
            A gas engine needs RPM. Peak torque arrives at 4,000 RPM or higher.
            To access full pulling power, the transmission must downshift
            aggressively and the engine must rev. This is not a defect&mdash;it
            is simply how gasoline combustion works. The engine is more than
            capable of pulling the weight, but it is louder, busier, and feels
            more strained doing it.
          </p>
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-5">
            <h3 className="font-semibold text-brand-700">Real-World Example</h3>
            <p className="mt-2 text-sm">
              Climbing a 6% grade at 60 MPH with a 9,500 lb travel trailer: a
              diesel holds 6th gear at 1,700 RPM, quiet and relaxed. A gas
              truck downshifts to 4th gear at 3,800 RPM, the engine audibly
              working hard. Both climb the grade safely. The diesel driver
              arrives less fatigued. Whether that matters enough to justify
              $10,000 is your call.
            </p>
          </div>
        </div>
      </section>

      {/* Engine comparison table */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          2025-2026 HD Truck Engine Comparison
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            These are the current heavy-duty powertrain options from the Big
            Three. Half-ton diesels (EcoDiesel, 3.0L Duramax) are included
            separately in the section below.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-gray-300 bg-gray-50">
                  <th className="px-3 py-3 text-left font-semibold text-gray-900">
                    Engine
                  </th>
                  <th className="px-3 py-3 text-right font-semibold text-gray-900">
                    HP
                  </th>
                  <th className="px-3 py-3 text-right font-semibold text-gray-900">
                    Torque
                  </th>
                  <th className="px-3 py-3 text-right font-semibold text-gray-900">
                    Max Tow
                  </th>
                  <th className="px-3 py-3 text-right font-semibold text-gray-900">
                    Fuel (Towing)
                  </th>
                  <th className="px-3 py-3 text-left font-semibold text-gray-900">
                    Payload vs Diesel
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {ENGINE_COMPARISON.map((row) => (
                  <tr
                    key={row.engine}
                    className={
                      row.engine.includes("Diesel")
                        ? "bg-gray-50"
                        : ""
                    }
                  >
                    <td className="px-3 py-3 font-medium text-gray-700">
                      {row.engine}
                    </td>
                    <td className="px-3 py-3 text-right text-gray-600">
                      {row.horsepower}
                    </td>
                    <td className="px-3 py-3 text-right text-gray-600">
                      {row.torque}
                    </td>
                    <td className="px-3 py-3 text-right text-gray-600">
                      {row.maxTow}
                    </td>
                    <td className="px-3 py-3 text-right text-gray-600">
                      {row.fuelEcon}
                    </td>
                    <td className="px-3 py-3 text-sm text-gray-600">
                      {row.payloadAdvantage}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400">
            Max tow ratings are for optimally configured trucks. Your actual
            capacity depends on your specific trim, options, and payload. Always
            check the door jamb sticker.
          </p>
        </div>
      </section>

      {/* Payload penalty */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          The Diesel Payload Penalty: Why It Matters
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            This is the most overlooked factor in the diesel-vs-gas debate. A
            diesel powertrain weighs 500-800 lbs more than the gas equivalent.
            That weight comes directly out of your payload capacity, because
            GVWR stays the same.
          </p>
          <div className="rounded-lg border border-gray-200 p-5">
            <h3 className="font-semibold text-gray-900">
              Example: RAM 2500 Big Horn Crew Cab 4x4
            </h3>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <div className="rounded-lg bg-safe-50 p-4">
                <p className="text-sm font-semibold text-safe-700">6.4L Hemi (Gas)</p>
                <p className="mt-1 text-2xl font-bold text-safe-600">~3,050 lbs</p>
                <p className="text-xs text-safe-600">Payload Capacity</p>
              </div>
              <div className="rounded-lg bg-warning-50 p-4">
                <p className="text-sm font-semibold text-warning-700">6.7L Cummins (Diesel)</p>
                <p className="mt-1 text-2xl font-bold text-warning-600">~2,530 lbs</p>
                <p className="text-xs text-warning-600">Payload Capacity</p>
              </div>
            </div>
            <p className="mt-3 text-sm text-gray-600">
              That 520 lb payload difference is roughly the tongue weight of a
              4,000 lb trailer at 13%. In other words, choosing diesel on a
              2500 means you lose the capacity to carry the tongue weight of a
              small-to-medium travel trailer compared to the gas version of
              the same truck.
            </p>
          </div>
          <p>
            For half-ton trucks, the diesel payload penalty is often the
            deciding factor. A RAM 1500 Limited with the 3.0L EcoDiesel may
            have only 1,100-1,200 lbs of payload&mdash;barely enough for a
            family of four plus the tongue weight of a mid-size trailer. The
            gas 5.7L Hemi version of the same truck might have 1,500-1,600 lbs.
            That is the difference between a safe setup and an overloaded one.
          </p>
          <p>
            Use our{" "}
            <Link
              href="/payload-calculator"
              className="font-semibold text-brand-600 underline"
            >
              Payload Calculator
            </Link>{" "}
            to model both scenarios for your specific truck and trailer.
          </p>
        </div>
      </section>

      {/* Full cost comparison */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          Total Cost of Ownership: Diesel vs Gas Over 5 Years
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            Everyone focuses on the purchase price, but the real difference is in
            the five-year cost. Here is the math for a typical 15,000-mile-per-year
            owner (a mix of daily driving and RV trips):
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-gray-300 bg-gray-50">
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Cost Category
                  </th>
                  <th className="px-4 py-3 text-right font-semibold text-gray-900">
                    Gas Truck
                  </th>
                  <th className="px-4 py-3 text-right font-semibold text-gray-900">
                    Diesel Truck
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {COST_BREAKDOWN.map((row) => (
                  <tr key={row.category}>
                    <td className="px-4 py-3 font-medium text-gray-700">
                      {row.category}
                    </td>
                    <td className="px-4 py-3 text-right text-gray-600">
                      {row.gas}
                    </td>
                    <td className="px-4 py-3 text-right text-gray-600">
                      {row.diesel}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="rounded-xl border-l-4 border-brand-500 bg-brand-50 p-4">
            <p className="text-sm text-brand-700">
              <strong>Bottom line:</strong> Over 75,000 miles (5 years at
              15,000/year), a diesel truck costs roughly $12,000-$16,000 more
              to buy and maintain, offset by $2,000-$3,000 in fuel savings. Net
              premium: approximately $9,000-$14,000. Whether that is worth it
              depends on how much you value the towing experience and safety
              advantages. For full-time RVers towing heavy, the diesel premium
              is easily justified. For weekend campers with a 6,000 lb trailer,
              gas is the financially smarter choice.
            </p>
          </div>
        </div>
      </section>

      {/* Mountain towing */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          Mountain Towing: Where Diesel Pulls Ahead
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            If your RV travels include Colorado passes, the Sierra Nevada, the
            Appalachians, or any sustained 6-8% grades, the diesel&apos;s
            advantages become operational, not just comfort-related. Two
            features matter most:
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-gray-200 p-5">
              <h3 className="font-semibold text-brand-700">
                Exhaust Brake
              </h3>
              <p className="mt-2 text-sm">
                Holds speed on descents without touching the service brakes.
                On a 6% downgrade with a 10,000 lb trailer, the exhaust brake
                alone can maintain 55-60 MPH. This prevents brake fade, which
                is the leading cause of runaway accidents on mountain passes.
                Gas trucks must rely on downshifting, which provides less
                retarding force and requires more frequent service brake
                application.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 p-5">
              <h3 className="font-semibold text-brand-700">
                Low-RPM Torque at Altitude
              </h3>
              <p className="mt-2 text-sm">
                Turbocharged diesel engines lose almost no power at altitude
                because the turbo compensates for thinner air. A naturally
                aspirated gas engine loses roughly 3-4% of its power per
                1,000 feet of elevation. At 10,000 feet (Eisenhower Tunnel on
                I-70), a gas engine may be down 30-40% on power. Turbocharged
                gas engines (Ford EcoBoost) fare better but still work harder.
              </p>
            </div>
          </div>
          <p>
            For more on mountain towing techniques, read our{" "}
            <Link
              href="/guides/mountain-towing-transmission-gears"
              className="font-semibold text-brand-600 underline"
            >
              Mountain Towing: Transmission Temp &amp; Gear Selection
            </Link>{" "}
            guide.
          </p>
        </div>
      </section>

      {/* Half-ton diesels */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          What About Half-Ton Diesels (EcoDiesel, 3.0L Duramax)?
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            Half-ton diesel engines occupy an awkward middle ground for RV
            towing. They offer diesel refinement and better unloaded fuel
            economy, but their towing advantages are limited by the half-ton
            platform&apos;s payload constraints:
          </p>
          <ul className="ml-6 list-disc space-y-2">
            <li>
              <strong>RAM 3.0L EcoDiesel:</strong> 480 lb-ft of torque, up to
              12,560 lbs max tow. But payload is often only 1,200-1,500 lbs,
              which limits real-world trailer weight to roughly 6,000-7,000 lbs
              for a family of four. Discontinued for 2024+ model years.
            </li>
            <li>
              <strong>GM 3.0L Duramax (Silverado/Sierra 1500):</strong> 495 lb-ft
              of torque, up to 13,300 lbs max tow. Payload typically 1,400-1,800
              lbs depending on trim. The best half-ton diesel option currently,
              with excellent unloaded fuel economy (24-28 MPG highway).
            </li>
          </ul>
          <p>
            For most RV towers, a half-ton diesel makes the most sense if you
            tow a lightweight trailer (under 6,500 lbs loaded) and also use the
            truck as a daily driver where the fuel economy benefit compounds.
            If your trailer is heavier, the payload math almost always pushes
            you toward a gas 3/4-ton, which costs about the same as a loaded
            half-ton diesel.
          </p>
        </div>
      </section>

      {/* Decision framework */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          How to Decide: A Decision Framework
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            Work through these questions in order. Your answers will point you
            to the right powertrain:
          </p>
          <div className="space-y-3">
            <div className="flex items-start gap-3 rounded-lg border border-gray-200 p-4">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-100 text-xs font-bold text-brand-700">
                1
              </span>
              <div>
                <strong className="text-gray-900">
                  What is your loaded trailer weight?
                </strong>
                <p className="mt-1 text-sm">
                  Under 8,000 lbs: gas is the practical choice. 8,000-10,000
                  lbs: either works; consider terrain. Over 10,000 lbs: diesel
                  advantages become significant.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg border border-gray-200 p-4">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-100 text-xs font-bold text-brand-700">
                2
              </span>
              <div>
                <strong className="text-gray-900">
                  Where do you tow?
                </strong>
                <p className="mt-1 text-sm">
                  Flat Midwest or Southeast: gas is fine. Mountain West,
                  Colorado, Pacific Northwest: diesel exhaust brake and altitude
                  performance are genuine safety advantages.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg border border-gray-200 p-4">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-100 text-xs font-bold text-brand-700">
                3
              </span>
              <div>
                <strong className="text-gray-900">
                  How many miles per year do you tow?
                </strong>
                <p className="mt-1 text-sm">
                  Under 5,000 miles: gas is the obvious financial choice. Over
                  10,000 miles: diesel fuel savings and fatigue reduction start
                  to offset the upfront premium.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg border border-gray-200 p-4">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-100 text-xs font-bold text-brand-700">
                4
              </span>
              <div>
                <strong className="text-gray-900">
                  Is payload the binding constraint?
                </strong>
                <p className="mt-1 text-sm">
                  Run your payload math. If you are close to GVWR with a gas
                  truck, diesel will push you over. Use our{" "}
                  <Link
                    href="/gvwr-calculator"
                    className="font-semibold text-brand-600 underline"
                  >
                    GVWR Calculator
                  </Link>{" "}
                  to check.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg border border-gray-200 p-4">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-100 text-xs font-bold text-brand-700">
                5
              </span>
              <div>
                <strong className="text-gray-900">
                  How long will you keep the truck?
                </strong>
                <p className="mt-1 text-sm">
                  Under 100,000 miles: gas maintenance savings dominate. Over
                  150,000 miles: diesel longevity and resale value start to
                  offset the higher costs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-12 rounded-2xl bg-brand-600 p-8 text-center text-white">
        <h2 className="text-2xl font-bold">
          Pick the Right Truck for Your Trailer
        </h2>
        <p className="mt-2 text-brand-100">
          Use our free Towing Capacity Calculator to match your trailer to
          the right truck engine and configuration. Payload, tongue weight,
          GVWR, and GCWR&mdash;all checked in under two minutes.
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
            href="/gvwr-calculator"
            className="inline-block rounded-xl bg-white px-6 py-3 text-sm font-bold text-brand-700 shadow-lg transition-all hover:bg-brand-50 active:scale-[0.99]"
          >
            GVWR Calculator
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
              href="/guides/ram-1500-vs-f150-towing"
              className="text-brand-600 hover:underline"
            >
              RAM 1500 vs Ford F-150 Towing Comparison
            </Link>
          </li>
          <li>
            <Link
              href="/guides/mountain-towing-transmission-gears"
              className="text-brand-600 hover:underline"
            >
              Mountain Towing: Transmission Temp &amp; Gear Selection
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
              href="https://www.ford.com/towing-guides/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 hover:underline"
            >
              Ford Towing Guides &amp; Specifications
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
              RAM Truck Towing &amp; Payload Guide
            </a>{" "}
            &mdash; ramtrucks.com
          </li>
          <li>
            <a
              href="https://www.chevrolet.com/towing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 hover:underline"
            >
              Chevrolet Towing Capacity Guide
            </a>{" "}
            &mdash; chevrolet.com
          </li>
          <li>
            <a
              href="https://www.sae.org/standards/content/j2807_202002/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 hover:underline"
            >
              SAE J2807 Towing Standard
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
              NHTSA Towing Safety
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
