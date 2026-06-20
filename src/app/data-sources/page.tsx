import type { Metadata } from "next";
import Link from "next/link";
import { DEFAULT_OG_IMAGES } from "@/lib/seo/default-og-image";

export const metadata: Metadata = {
  title: "Data Sources & Calculation Methodology",
  description:
    "Transparent documentation of every data source and calculation standard used by RV TowCalc, including SAE J2807, manufacturer towing guides, and safety thresholds.",
  alternates: { canonical: "https://rvtowingcalc.com/data-sources" },
  openGraph: {
    title: "Data Sources - RV TowCalc",
    description:
      "Full transparency on where our vehicle data comes from and how our calculations work. SAE J2807 compliant.",
    url: "https://rvtowingcalc.com/data-sources",
    images: DEFAULT_OG_IMAGES,
  },
};

export default function DataSourcesPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <nav className="mb-4 text-sm text-gray-500">
        <Link href="/" className="hover:text-brand-600">
          Home
        </Link>
        <span className="mx-1">/</span>
        <span className="text-gray-900">Data Sources</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
        Data Sources &amp; Calculation Methodology
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        Transparency is core to our mission. This page documents every data
        source, calculation standard, and safety threshold used by RV TowCalc.
        If you find an error, please{" "}
        <a
          href="mailto:contact@rvtowingcalc.com"
          className="font-semibold text-brand-600 underline"
        >
          let us know
        </a>
        .
      </p>

      {/* SAE J2807 */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          Calculation Standard: SAE J2807
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            Our calculation methodology follows{" "}
            <strong className="text-gray-900">
              SAE J2807&mdash;Performance Requirements for Determining
              Tow-Vehicle Gross Combination Weight Rating and Trailer Weight
              Rating
            </strong>
            . This is the voluntary standard developed by SAE International
            (formerly the Society of Automotive Engineers) that establishes
            consistent, repeatable test procedures for determining a
            vehicle&apos;s towing capacity.
          </p>
          <p>
            SAE J2807 was first published in 2010 and has been adopted by major
            manufacturers including Ford, General Motors, RAM, and Toyota. It
            defines tests for:
          </p>
          <ul className="ml-6 list-disc space-y-2">
            <li>Launch on grade (12% and 6% grades)</li>
            <li>Highway gradeability (maintaining speed on upgrades)</li>
            <li>Climbing performance</li>
            <li>Thermal performance (brake and transmission temperature)</li>
            <li>Handling and stability</li>
            <li>Structural integrity of hitch and frame</li>
          </ul>
          <p>
            Manufacturer tow ratings published under J2807 are more consistent
            and comparable across brands than pre-J2807 ratings, which used
            proprietary (and often less rigorous) methods.
          </p>
        </div>
      </section>

      {/* Vehicle data sources */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          Vehicle Specification Sources
        </h2>
        <p className="mt-4 text-gray-600">
          Vehicle specifications in our database are sourced from official
          manufacturer towing guides and specification sheets. We do not use
          third-party aggregators or user-submitted data. Each vehicle entry
          records its specific source document.
        </p>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b-2 border-gray-300 bg-gray-50">
                <th className="px-4 py-3 text-left font-semibold text-gray-900">
                  Manufacturer
                </th>
                <th className="px-4 py-3 text-left font-semibold text-gray-900">
                  Source Document
                </th>
                <th className="px-4 py-3 text-left font-semibold text-gray-900">
                  Model Year
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-3 text-gray-700">Ford</td>
                <td className="px-4 py-3 text-gray-600">
                  Ford 2024 F-150 Trailer Towing Guide; Ford 2024 Super Duty
                  Trailer Towing Guide
                </td>
                <td className="px-4 py-3 text-gray-600">2024</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-gray-700">RAM</td>
                <td className="px-4 py-3 text-gray-600">
                  Ram 2024 1500 Trailer Towing Chart; Ram 2024 2500 Trailer
                  Towing Chart
                </td>
                <td className="px-4 py-3 text-gray-600">2024</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-gray-700">Chevrolet</td>
                <td className="px-4 py-3 text-gray-600">
                  Chevrolet 2024 Silverado 1500 Trailering Guide; Chevrolet 2024
                  Silverado HD Trailering Guide
                </td>
                <td className="px-4 py-3 text-gray-600">2024</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-gray-700">Toyota</td>
                <td className="px-4 py-3 text-gray-600">
                  Toyota 2024 Tundra Trailer Towing Guide; Toyota 2024 Tacoma
                  Trailer Towing Guide
                </td>
                <td className="px-4 py-3 text-gray-600">2024</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-gray-700">GMC</td>
                <td className="px-4 py-3 text-gray-600">
                  GMC 2024 Sierra 1500 Trailering Guide
                </td>
                <td className="px-4 py-3 text-gray-600">2024</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-4 rounded-xl border-l-4 border-warning-500 bg-warning-50 p-4">
          <p className="text-sm text-warning-700">
            <strong>Important caveat:</strong> Manufacturer towing guides
            provide ratings for specific configurations (engine, cab, bed, axle
            ratio, drive type). A single model line can have dozens of
            configurations with widely varying tow ratings. Our database covers
            popular trim configurations, but your specific vehicle may differ.
            <strong>
              {" "}
              Always verify against the yellow-and-white sticker on your
              vehicle&apos;s driver door jamb
            </strong>
            , which lists the GVWR and payload capacity for your exact vehicle
            as it left the factory.
          </p>
        </div>
      </section>

      {/* Key weight definitions */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          Key Weight Definitions
        </h2>
        <p className="mt-4 text-gray-600">
          Our calculator uses the following standard definitions, consistent
          with SAE J2807 terminology:
        </p>

        <div className="mt-6 space-y-4">
          <div className="rounded-lg border border-gray-200 p-4">
            <h3 className="font-semibold text-gray-900">Curb Weight</h3>
            <p className="mt-1 text-sm text-gray-600">
              The weight of the vehicle as it sits empty&mdash;full tank of
              fuel, all standard equipment, no passengers, no cargo. This is the
              baseline from which payload is calculated.
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 p-4">
            <h3 className="font-semibold text-gray-900">
              GVWR (Gross Vehicle Weight Rating)
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              The maximum safe operating weight of the tow vehicle as set by the
              manufacturer. Includes curb weight plus all passengers, cargo,
              fuel, and tongue/pin weight from the trailer. Found on the door
              jamb sticker.
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 p-4">
            <h3 className="font-semibold text-gray-900">
              GCWR (Gross Combined Weight Rating)
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              The maximum safe operating weight of the tow vehicle and trailer
              combined. This includes the fully loaded truck plus the fully
              loaded trailer. Found in the manufacturer towing guide.
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 p-4">
            <h3 className="font-semibold text-gray-900">Payload Capacity</h3>
            <p className="mt-1 text-sm text-gray-600">
              The maximum weight the vehicle can carry&mdash;passengers, cargo,
              and tongue/pin weight. Calculated as:{" "}
              <code className="rounded bg-gray-100 px-1 py-0.5 text-xs">
                GVWR - Curb Weight
              </code>
              . Also listed on the door jamb sticker.
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 p-4">
            <h3 className="font-semibold text-gray-900">
              Tow Rating (Max Trailer Weight)
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              The manufacturer&apos;s maximum recommended trailer weight. This
              is derived from the GCWR minus the tow vehicle&apos;s weight. It
              assumes a properly equipped vehicle with the correct hitch,
              weight distribution, and no excess payload.
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 p-4">
            <h3 className="font-semibold text-gray-900">
              Tongue Weight / Pin Weight
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              The downward force the trailer exerts on the hitch. For
              conventional travel trailers, this is called tongue weight. For
              fifth wheels, it is called pin weight. Both count toward your
              vehicle&apos;s payload and GVWR.
            </p>
          </div>
        </div>
      </section>

      {/* Calculation formulas */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          Calculation Formulas
        </h2>
        <p className="mt-4 text-gray-600">
          Our engine performs six independent safety checks. Here is exactly
          how each is calculated:
        </p>

        <div className="mt-6 space-y-4">
          <div className="rounded-lg border border-gray-200 p-5">
            <h3 className="font-semibold text-gray-900">
              1. Loaded Trailer Weight
            </h3>
            <pre className="mt-2 overflow-x-auto rounded bg-gray-900 p-3 text-xs text-green-400">
{`Loaded Trailer = Dry Weight + Cargo + Water + Propane
  Water = Fresh Water Gallons x 8.34 lbs/gal
  Propane = Tank Count x Weight Per Tank
    20lb tank filled = 37 lbs
    30lb tank filled = 55 lbs
    40lb tank filled = 72 lbs`}
            </pre>
          </div>

          <div className="rounded-lg border border-gray-200 p-5">
            <h3 className="font-semibold text-gray-900">
              2. Tongue / Pin Weight
            </h3>
            <pre className="mt-2 overflow-x-auto rounded bg-gray-900 p-3 text-xs text-green-400">
{`Tongue Weight = Loaded Trailer Weight x Tongue Percentage

Default tongue percentages:
  Travel Trailer: 13% (optimal range 10-15%)
  Fifth Wheel:    22% (optimal range 20-25%)

Users can override with a custom percentage if known.`}
            </pre>
          </div>

          <div className="rounded-lg border border-gray-200 p-5">
            <h3 className="font-semibold text-gray-900">
              3. Loaded Truck Weight (GVWR Check)
            </h3>
            <pre className="mt-2 overflow-x-auto rounded bg-gray-900 p-3 text-xs text-green-400">
{`Loaded Truck = Curb Weight + Passenger Weight + Cargo Weight + Tongue Weight
Check: Loaded Truck <= GVWR`}
            </pre>
          </div>

          <div className="rounded-lg border border-gray-200 p-5">
            <h3 className="font-semibold text-gray-900">
              4. Combined Weight (GCWR Check)
            </h3>
            <pre className="mt-2 overflow-x-auto rounded bg-gray-900 p-3 text-xs text-green-400">
{`Combined Weight = Loaded Truck Weight + Trailer Axle Weight
  Trailer Axle Weight = Loaded Trailer Weight - Tongue Weight
Check: Combined Weight <= GCWR`}
            </pre>
          </div>

          <div className="rounded-lg border border-gray-200 p-5">
            <h3 className="font-semibold text-gray-900">
              5. Payload Check
            </h3>
            <pre className="mt-2 overflow-x-auto rounded bg-gray-900 p-3 text-xs text-green-400">
{`Used Payload = Passenger Weight + Cargo Weight + Tongue Weight
Check: Used Payload <= Payload Capacity`}
            </pre>
          </div>

          <div className="rounded-lg border border-gray-200 p-5">
            <h3 className="font-semibold text-gray-900">
              6. Trailer GVWR Check
            </h3>
            <pre className="mt-2 overflow-x-auto rounded bg-gray-900 p-3 text-xs text-green-400">
{`Check: Loaded Trailer Weight <= Trailer GVWR
(Only checked when trailer GVWR is provided)`}
            </pre>
          </div>
        </div>
      </section>

      {/* Safety thresholds */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">Safety Thresholds</h2>
        <p className="mt-4 text-gray-600">
          We use a traffic-light system (green / yellow / red) to communicate
          safety status. The thresholds are deliberately conservative to
          account for real-world variables that manufacturer ratings do not
          fully capture.
        </p>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b-2 border-gray-300 bg-gray-50">
                <th className="px-4 py-3 text-left font-semibold text-gray-900">
                  Check
                </th>
                <th className="px-4 py-3 text-left font-semibold text-safe-600">
                  Safe (Green)
                </th>
                <th className="px-4 py-3 text-left font-semibold text-warning-600">
                  Warning (Yellow)
                </th>
                <th className="px-4 py-3 text-left font-semibold text-danger-600">
                  Danger (Red)
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-3 text-gray-700">Towing Capacity</td>
                <td className="px-4 py-3 text-gray-600">&le; 80% of tow rating</td>
                <td className="px-4 py-3 text-gray-600">81&ndash;100%</td>
                <td className="px-4 py-3 text-gray-600">&gt; 100%</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-gray-700">Payload</td>
                <td className="px-4 py-3 text-gray-600">&le; 90% of capacity</td>
                <td className="px-4 py-3 text-gray-600">91&ndash;100%</td>
                <td className="px-4 py-3 text-gray-600">&gt; 100%</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-gray-700">GVWR</td>
                <td className="px-4 py-3 text-gray-600">&le; 90% of GVWR</td>
                <td className="px-4 py-3 text-gray-600">91&ndash;100%</td>
                <td className="px-4 py-3 text-gray-600">&gt; 100%</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-gray-700">GCWR</td>
                <td className="px-4 py-3 text-gray-600">&le; 90% of GCWR</td>
                <td className="px-4 py-3 text-gray-600">91&ndash;100%</td>
                <td className="px-4 py-3 text-gray-600">&gt; 100%</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-gray-700">Trailer GVWR</td>
                <td className="px-4 py-3 text-gray-600">&le; 90% of trailer GVWR</td>
                <td className="px-4 py-3 text-gray-600">91&ndash;100%</td>
                <td className="px-4 py-3 text-gray-600">&gt; 100%</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-gray-700">
                  Tongue Weight % (Travel Trailer)
                </td>
                <td className="px-4 py-3 text-gray-600">10&ndash;15%</td>
                <td className="px-4 py-3 text-gray-600">
                  10% floor / 15&ndash;17%
                </td>
                <td className="px-4 py-3 text-gray-600">
                  &lt; 10% or &gt; 17%
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-gray-700">
                  Pin Weight % (Fifth Wheel)
                </td>
                <td className="px-4 py-3 text-gray-600">20&ndash;25%</td>
                <td className="px-4 py-3 text-gray-600">
                  18&ndash;20% / 25&ndash;27%
                </td>
                <td className="px-4 py-3 text-gray-600">
                  &lt; 18% or &gt; 27%
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-4 space-y-3 text-sm text-gray-600">
          <p>
            <strong className="text-gray-900">
              Why 80% for towing capacity?
            </strong>{" "}
            Industry experts widely recommend keeping your loaded trailer weight
            at or below 80% of your tow rating. This buffer accounts for wind
            resistance, steep grades, altitude (which reduces engine power),
            emergency maneuvers, and the fact that most people underestimate
            their actual cargo weight.
          </p>
          <p>
            <strong className="text-gray-900">
              Why 90% for payload, GVWR, and GCWR?
            </strong>{" "}
            These are hard limits set by the manufacturer. We use 90% as the
            safe threshold to provide a reasonable buffer while acknowledging
            that payload is often the binding constraint and harder to reduce
            than trailer cargo. Hitting 95% of GVWR is not inherently
            dangerous, but it leaves no margin for error.
          </p>
        </div>
      </section>

      {/* Physical constants */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          Physical Constants Used
        </h2>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b-2 border-gray-300 bg-gray-50">
                <th className="px-4 py-3 text-left font-semibold text-gray-900">
                  Constant
                </th>
                <th className="px-4 py-3 text-left font-semibold text-gray-900">
                  Value
                </th>
                <th className="px-4 py-3 text-left font-semibold text-gray-900">
                  Basis
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-3 text-gray-700">Water weight</td>
                <td className="px-4 py-3 text-gray-600">8.34 lbs per gallon</td>
                <td className="px-4 py-3 text-gray-600">
                  Standard density of water at room temperature
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-gray-700">
                  Propane (20lb tank, filled)
                </td>
                <td className="px-4 py-3 text-gray-600">37 lbs total</td>
                <td className="px-4 py-3 text-gray-600">
                  20 lbs propane + ~17 lbs tank tare weight
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-gray-700">
                  Propane (30lb tank, filled)
                </td>
                <td className="px-4 py-3 text-gray-600">55 lbs total</td>
                <td className="px-4 py-3 text-gray-600">
                  30 lbs propane + ~25 lbs tank tare weight
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-gray-700">
                  Propane (40lb tank, filled)
                </td>
                <td className="px-4 py-3 text-gray-600">72 lbs total</td>
                <td className="px-4 py-3 text-gray-600">
                  40 lbs propane + ~32 lbs tank tare weight
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Data limitations */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          Known Data Limitations
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <div className="rounded-lg border border-gray-200 p-4">
            <p className="text-sm">
              <strong className="text-gray-900">
                Curb weight variability:
              </strong>{" "}
              Manufacturer curb weights are for a specific configuration. Real
              curb weight varies based on installed options (sunroof, tow
              package, running boards, etc.). We recommend weighing your actual
              vehicle at a CAT scale for maximum accuracy.
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 p-4">
            <p className="text-sm">
              <strong className="text-gray-900">
                Trim coverage:
              </strong>{" "}
              Our database covers 49 popular configurations across 8 brands
              (Ford, RAM, Chevrolet, GMC, Toyota, Nissan, Jeep, Honda) for the
              2024-2025 model years. Coverage spans light-duty trucks (1500/150
              class), heavy-duty trucks (2500/3500 class), midsize trucks, and
              tow-rated full-size SUVs. Not every trim, engine, cab, bed, and
              axle ratio combination is represented. We are expanding coverage
              over time.
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 p-4">
            <p className="text-sm">
              <strong className="text-gray-900">
                Tongue weight estimation:
              </strong>{" "}
              Our default tongue weight percentages (13% for travel trailers,
              22% for fifth wheels) are industry-standard midpoints. Actual
              tongue weight depends on trailer loading distribution and hitch
              setup. For best results, measure actual tongue weight with a
              scale.
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 p-4">
            <p className="text-sm">
              <strong className="text-gray-900">
                No account for modifications:
              </strong>{" "}
              Our calculator does not account for vehicle modifications
              (suspension upgrades, air bags, larger tires, gear ratio changes)
              that may alter actual towing capacity. Modified vehicles should
              be evaluated by a qualified professional.
            </p>
          </div>
        </div>
      </section>

      <div className="mt-12 rounded-xl border-l-4 border-brand-500 bg-brand-50 p-6">
        <p className="text-sm text-brand-700">
          <strong>Our commitment:</strong> When we find an error in our data or
          calculations, we fix it immediately and note the correction here. If
          you spot something wrong, email{" "}
          <a
            href="mailto:contact@rvtowingcalc.com"
            className="font-semibold underline"
          >
            contact@rvtowingcalc.com
          </a>{" "}
          and we will investigate within 48 hours.
        </p>
      </div>
    </div>
  );
}
