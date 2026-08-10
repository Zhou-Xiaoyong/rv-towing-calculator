import type { Metadata } from "next";
import Link from "next/link";
import { FaqJsonLd, ArticleJsonLd } from "@/components/seo/JsonLd";
import { DEFAULT_OG_IMAGES } from "@/lib/seo/default-og-image";

export const metadata: Metadata = {
  title: "Pickup Truck Axle Ratio Explained: Which Gear Ratio Is Best for Towing",
  description:
    "Axle ratio is the hidden number that can change your towing capacity by 4,000+ lbs. Learn what 3.31 vs 3.73 vs 4.10 means, how to find your ratio, and which gear ratio is best for towing your RV.",
  alternates: {
    canonical: "https://www.rvtowingcalc.com/guides/axle-ratio-for-towing",
  },
  openGraph: {
    title: "Pickup Truck Axle Ratio Explained: Which Gear Ratio Is Best for Towing",
    description:
      "Understand how axle ratio affects towing capacity, fuel economy, and payload. Compare 3.31, 3.55, 3.73, and 4.10 ratios with real truck examples and learn how to find yours.",
    url: "https://www.rvtowingcalc.com/guides/axle-ratio-for-towing",
    images: DEFAULT_OG_IMAGES,
  },
};

const FAQS = [
  {
    q: "What does axle ratio mean on a truck?",
    a: "Axle ratio is the number of times the driveshaft rotates for each full rotation of the axle (and therefore the wheels). A 3.73 ratio means the driveshaft turns 3.73 times for every one turn of the wheels. Lower numerical ratios (3.21, 3.31) are 'taller' gears that favor fuel economy at highway speed. Higher numerical ratios (4.10, 4.30) are 'shorter' gears that multiply torque at the wheels, increasing towing capacity at the cost of fuel economy and engine RPM at cruise. The ratio is determined by the number of teeth on the ring gear divided by the number of teeth on the pinion gear inside the differential.",
  },
  {
    q: "Does axle ratio change towing capacity?",
    a: "Yes, dramatically. On the same truck model, changing from a 3.31 to a 4.30 axle ratio can increase the GCWR (Gross Combined Weight Rating) by 3,000-5,000 lbs. For example, a 2025 Ford F-150 SuperCrew 4x4 with the 3.5L EcoBoost has a max tow rating of about 11,000 lbs with a 3.31 axle, but up to 14,000 lbs with a 4.10 axle and the Max Tow Package. The engine produces the same horsepower and torque either way, but the higher ratio multiplies that torque more at the wheels, allowing the truck to start and pull heavier loads from a stop and climb grades more effectively.",
  },
  {
    q: "What axle ratio is best for towing a travel trailer?",
    a: "For most travel trailers in the 5,000-8,000 lb range, a 3.55 or 3.73 axle ratio is the sweet spot for half-ton trucks. It provides enough torque multiplication for confident towing while maintaining acceptable unloaded fuel economy. For trailers over 8,000 lbs, or if you tow in mountains frequently, a 4.10 ratio is preferable. For heavy-duty trucks towing fifth wheels over 12,000 lbs, 3.73 to 4.30 ratios are standard. If you tow only occasionally and mostly drive unloaded, a 3.31 ratio saves fuel but limits your towing ceiling.",
  },
  {
    q: "How do I find my truck's axle ratio?",
    a: "Three methods: (1) Check the sticker inside the driver's door jamb, which lists the axle code. Cross-reference this code with the manufacturer's chart (Ford uses a letter code, RAM and GM use numeric codes). (2) Look for a metal tag bolted to the differential cover, which stamps the ratio directly. (3) Jack up the rear axle, mark the tire and driveshaft with chalk, rotate the tire exactly one full turn, and count the driveshaft rotations. If the driveshaft turns about 3.5 times, you have a 3.55 ratio. 3-3/4 turns = 3.73, 4-1/10 turns = 4.10.",
  },
  {
    q: "Is a higher axle ratio bad for fuel economy?",
    a: "Yes, but the impact is smaller than most people think. A truck with a 4.10 ratio runs about 200-400 RPM higher at 65 MPH than the same truck with a 3.31 ratio. In unloaded daily driving, expect a 1-3 MPG penalty. For example, a RAM 1500 with the 5.7L Hemi might get 19 MPG highway with a 3.21 ratio and 17 MPG with a 3.92 ratio. When towing, the difference shrinks to less than 1 MPG because the engine is working hard regardless of ratio. For towing-focused trucks, the fuel economy trade-off is almost always worth the increased capacity.",
  },
  {
    q: "Can I change my axle ratio after buying the truck?",
    a: "Yes, but it is expensive. A professional gear swap costs $1,500-$3,000 per axle (multiply by 2 for 4WD trucks), plus you must recalibrate the speedometer and transmission shift points. Aftermarket gear changes also void the factory powertrain warranty on affected components. For this reason, it is almost always cheaper to order the truck with the right ratio from the factory or find a used truck with the ratio you need. If you are buying used and the ratio is too low for your trailer, keep looking rather than swapping gears.",
  },
];

const RATIO_COMPARISON = [
  {
    ratio: "3.21 / 3.31",
    classification: "Tall (Economy)",
    towCapacity: "Lower (~10,000-12,000 lbs max)",
    fuelEconomy: "Best unloaded (19-23 MPG highway)",
    engineRpm: "1,600-1,800 RPM at 65 MPH",
    bestFor: "Daily drivers; light towing under 6,000 lbs; flat terrain",
  },
  {
    ratio: "3.55 / 3.73",
    classification: "Medium (Balanced)",
    towCapacity: "Good (~12,000-14,000 lbs max)",
    fuelEconomy: "Good (17-21 MPG highway)",
    engineRpm: "1,800-2,000 RPM at 65 MPH",
    bestFor: "Travel trailers 5,000-8,000 lbs; mixed daily and towing use",
  },
  {
    ratio: "3.92 / 4.10",
    classification: "Short (Towing)",
    towCapacity: "High (~13,000-17,000 lbs max)",
    fuelEconomy: "Moderate (15-19 MPG highway)",
    engineRpm: "2,000-2,200 RPM at 65 MPH",
    bestFor: "Heavy trailers 8,000+ lbs; mountain towing; frequent towing",
  },
  {
    ratio: "4.30 / 4.56",
    classification: "Very Short (Max Tow)",
    towCapacity: "Highest (~15,000-20,000+ lbs)",
    fuelEconomy: "Lowest (13-17 MPG highway)",
    engineRpm: "2,200-2,500 RPM at 65 MPH",
    bestFor: "HD trucks with fifth wheels; commercial towing; steepest grades",
  },
];

const REAL_WORLD_EXAMPLES = [
  {
    truck: "2025 Ford F-150 SuperCrew 4x4 (3.5L EcoBoost)",
    ratio331: "11,000 lbs",
    ratio355: "13,000 lbs",
    ratio373: "13,500 lbs",
    ratio410: "14,000 lbs",
    note: "Max Tow Package required for 14,000 lb rating",
  },
  {
    truck: "2025 RAM 1500 Crew Cab 4x4 (5.7L Hemi)",
    ratio321: "11,210 lbs",
    ratio392: "12,750 lbs",
    note: "RAM does not offer intermediate ratios on the 1500; it's 3.21 or 3.92",
  },
  {
    truck: "2025 Chevy Silverado 1500 Crew Cab 4x4 (5.3L V8)",
    ratio308: "9,300 lbs",
    ratio342: "11,000 lbs",
    ratio373: "11,500 lbs",
    note: "Max Trailering Package adds 3.23 ratio and upgrades cooling",
  },
  {
    truck: "2025 Ford F-250 Super Duty 4x4 (7.3L Gas)",
    ratio373: "19,300 lbs (conventional)",
    ratio430: "22,000 lbs (conventional)",
    note: "5th wheel ratings are higher; payload is often the real limit",
  },
  {
    truck: "2025 RAM 2500 Mega Cab 4x4 (6.7L Cummins)",
    ratio373: "18,900 lbs (conventional)",
    ratio410: "19,040 lbs (conventional)",
    note: "Diesel torque is so high that ratio has less impact on max tow",
  },
];

export default function AxleRatioGuidePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <FaqJsonLd
        faqs={FAQS}
        baseUrl="https://www.rvtowingcalc.com/guides/axle-ratio-for-towing"
      />
      <ArticleJsonLd
        title="Pickup Truck Axle Ratio Explained: Which Gear Ratio Is Best for Towing"
        description="Axle ratio is the hidden number that can change your towing capacity by 4,000+ lbs. Learn what 3.31 vs 3.73 vs 4.10 means, how to find your ratio, and which gear ratio is best for towing your RV."
        url="https://www.rvtowingcalc.com/guides/axle-ratio-for-towing"
        datePublished="2026-08-06"
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
        <span className="text-gray-900">Axle Ratio for Towing</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
        Pickup Truck Axle Ratio Explained: Which Gear Ratio Is Best for Towing
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        Two identical trucks roll off the same assembly line, same engine, same
        cab, same bed. One can tow 11,000 lbs. The other can tow 14,000 lbs.
        The difference? A number stamped on a metal tag inside the
        differential: the axle ratio. It is the single most overlooked spec
        when buying a tow vehicle, and it can make or break your RV setup.
        Here is what every RV owner needs to know.
      </p>

      {/* What is axle ratio */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          What Is Axle Ratio?
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            Inside your truck&apos;s rear differential, a ring gear and a pinion
            gear work together to transfer power from the driveshaft to the
            axles. The <strong>axle ratio</strong> is the number of teeth on
            the ring gear divided by the number of teeth on the pinion gear.
            Equivalently, it is how many times the driveshaft rotates for every
            one full rotation of the rear wheels.
          </p>
          <p>
            A <strong>3.73:1</strong> ratio means the driveshaft spins 3.73
            times for each wheel revolution. A <strong>4.10:1</strong> ratio
            means it spins 4.10 times. The higher the number, the more the
            torque from the engine is multiplied before it reaches the
            wheels&mdash;but the faster the engine spins at any given road
            speed.
          </p>
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-5">
            <h3 className="font-semibold text-gray-900">
              Think of It Like a Bicycle
            </h3>
            <p className="mt-2 text-sm">
              On a bicycle, the small front chainring (higher ratio) makes
              pedaling easier to start and climb hills, but you spin out at
              high speed. The large chainring (lower ratio) is harder to start
              but cruises efficiently at speed. Your truck&apos;s axle ratio
              works the same way: higher numerical ratios (4.10) are like the
              small chainring&mdash;great for pulling, worse for highway
              cruising. Lower numerical ratios (3.31) are the large
              chainring&mdash;efficient cruising but less pulling power.
            </p>
          </div>
        </div>
      </section>

      {/* How it affects towing */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          How Axle Ratio Affects Towing Capacity
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            The relationship between axle ratio and towing capacity is
            straightforward physics: a higher numerical ratio multiplies engine
            torque more at the wheels. More torque at the wheels means the
            truck can start a heavier load from a stop, climb steeper grades
            without downshifting, and maintain speed under load.
          </p>
          <p>
            Manufacturers certify each axle ratio combination to specific GCWR
            (Gross Combined Weight Rating) limits based on SAE J2807 testing,
            which includes acceleration, grade-climbing, and thermal stability
            tests. A higher ratio passes these tests at higher combined weights,
            so the manufacturer assigns a higher tow rating.
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-gray-200 p-5 text-center">
              <p className="text-3xl font-bold text-brand-600">3.31</p>
              <p className="mt-1 text-xs text-gray-500">
                Taller ratio: lower RPM, better MPG, less tow capacity
              </p>
            </div>
            <div className="rounded-xl border-2 border-brand-300 bg-brand-50 p-5 text-center">
              <p className="text-3xl font-bold text-brand-600">3.73</p>
              <p className="mt-1 text-xs text-gray-500">
                Balanced: the sweet spot for most RV towing
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 p-5 text-center">
              <p className="text-3xl font-bold text-brand-600">4.10</p>
              <p className="mt-1 text-xs text-gray-500">
                Shorter ratio: higher RPM, worse MPG, max tow capacity
              </p>
            </div>
          </div>
          <div className="rounded-xl border-l-4 border-brand-500 bg-brand-50 p-4">
            <p className="text-sm text-brand-700">
              <strong>Key insight:</strong> The engine produces the same
              horsepower and torque regardless of axle ratio. The ratio
              determines how that power is delivered to the ground. A 3.31
              ratio delivers power efficiently at highway speed but struggles
              to multiply torque for starting heavy loads. A 4.10 ratio
              sacrifices highway efficiency but gives you maximum pulling force
              exactly where you need it: from a dead stop and on steep grades.
            </p>
          </div>
        </div>
      </section>

      {/* Ratio comparison table */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          Axle Ratio Comparison: Which Is Right for You?
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            Here is how the four common ratio ranges compare across the factors
            that matter for RV towing:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-gray-300 bg-gray-50">
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Ratio Range
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Type
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Tow Capacity
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Fuel Economy
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    RPM @ 65 MPH
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Best For
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {RATIO_COMPARISON.map((row) => (
                  <tr key={row.ratio}>
                    <td className="px-4 py-3 font-medium text-gray-700">
                      {row.ratio}
                    </td>
                    <td className="px-4 py-3 text-gray-600">
                      {row.classification}
                    </td>
                    <td className="px-4 py-3 text-gray-600">
                      {row.towCapacity}
                    </td>
                    <td className="px-4 py-3 text-gray-600">
                      {row.fuelEconomy}
                    </td>
                    <td className="px-4 py-3 text-gray-600">
                      {row.engineRpm}
                    </td>
                    <td className="px-4 py-3 text-xs text-gray-600">
                      {row.bestFor}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Real-world examples */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          Real-World Tow Ratings by Axle Ratio
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            These are 2025 model year examples showing how axle ratio changes
            the max conventional tow rating on popular RV tow vehicles. Always
            verify against the manufacturer&apos;s towing guide for your
            specific trim and configuration:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-gray-300 bg-gray-50">
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Truck
                  </th>
                  <th className="px-4 py-3 text-right font-semibold text-gray-900">
                    Low Ratio
                  </th>
                  <th className="px-4 py-3 text-right font-semibold text-gray-900">
                    Mid Ratio
                  </th>
                  <th className="px-4 py-3 text-right font-semibold text-gray-900">
                    High Ratio
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Notes
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {REAL_WORLD_EXAMPLES.map((row) => (
                  <tr key={row.truck}>
                    <td className="px-4 py-3 font-medium text-gray-700">
                      {row.truck}
                    </td>
                    <td className="px-4 py-3 text-right text-gray-600">
                      {row.ratio331 || row.ratio321 || row.ratio308 || row.ratio373}
                    </td>
                    <td className="px-4 py-3 text-right text-gray-600">
                      {row.ratio355 || row.ratio342 || row.ratio392 || row.ratio430 || row.ratio410}
                    </td>
                    <td className="px-4 py-3 text-right text-gray-600">
                      {row.ratio373 || row.ratio410 || row.ratio430 || "&mdash;"}
                    </td>
                    <td className="px-4 py-3 text-xs text-gray-500">
                      {row.note}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400">
            Tow ratings shown are maximum conventional (bumper pull) ratings
            for optimally configured trucks. Your actual capacity depends on
            trim, options, payload, and GCWR. Always consult the
            manufacturer&apos;s towing guide and your door jamb sticker.
          </p>
          <p>
            Check your specific numbers with our{" "}
            <Link
              href="/towing-capacity-calculator"
              className="font-semibold text-brand-600 underline"
            >
              Towing Capacity Calculator
            </Link>{" "}
            and verify combined weight with our{" "}
            <Link
              href="/gcwr-calculator"
              className="font-semibold text-brand-600 underline"
            >
              GCWR Calculator
            </Link>
            .
          </p>
        </div>
      </section>

      {/* How to find your ratio */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          How to Find Your Truck&apos;s Axle Ratio
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            Before buying a used truck or verifying your current setup, confirm
            the actual axle ratio. Do not trust the seller or the
            listing&mdash;verify it yourself:
          </p>
          <div className="space-y-3">
            <div className="flex items-start gap-3 rounded-lg border border-gray-200 p-4">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-100 text-xs font-bold text-brand-700">
                1
              </span>
              <div>
                <strong className="text-gray-900">
                  Check the door jamb sticker
                </strong>
                <p className="mt-1 text-sm">
                  Open the driver&apos;s door and look for the Tire and Loading
                  Information sticker. It lists an axle code (Ford uses letters
                  like &ldquo;19&rdquo; or &ldquo;H9&rdquo;; RAM uses codes like
                  &ldquo;DMH&rdquo;; GM uses codes like &ldquo;GU4&rdquo; or
                  &ldquo;GT4&rdquo;). Cross-reference this code with the
                  manufacturer&apos;s axle code chart, available in the owner&apos;s
                  manual or online. For more on decoding this sticker, see our{" "}
                  <Link
                    href="/guides/how-to-read-tire-and-loading-label"
                    className="font-semibold text-brand-600 underline"
                  >
                    guide to reading your truck&apos;s Tire and Loading label
                  </Link>
                  .
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg border border-gray-200 p-4">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-100 text-xs font-bold text-brand-700">
                2
              </span>
              <div>
                <strong className="text-gray-900">
                  Look for the differential tag
                </strong>
                <p className="mt-1 text-sm">
                  Most trucks have a small metal tag bolted to one of the
                  differential cover bolts. The tag stamps the ratio directly
                  (e.g., &ldquo;3 73 8 8&rdquo; means 3.73 ratio with an 8.8-inch
                  ring gear). If the tag is missing or painted over, move to
                  method 3.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg border border-gray-200 p-4">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-100 text-xs font-bold text-brand-700">
                3
              </span>
              <div>
                <strong className="text-gray-900">
                  The chalk test (jack-up method)
                </strong>
                <p className="mt-1 text-sm">
                  Jack up the rear axle safely on level ground with the
                  transmission in neutral and parking brake off. Mark the tire
                  and the driveshaft with chalk. Rotate the tire exactly one
                  full revolution while counting driveshaft rotations. Roughly
                  3-1/3 turns = 3.31, 3-1/2 turns = 3.55, 3-3/4 turns = 3.73,
                  4 turns = 4.10, 4-1/3 turns = 4.30. This is the most reliable
                  method when documentation is missing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trade-offs */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          The Trade-Off: Fuel Economy vs Towing Capacity
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            Choosing an axle ratio is fundamentally a trade-off between
            unloaded fuel economy and towing capability. Here is the math for
            a typical half-ton truck driven 15,000 miles per year, with 5,000
            of those miles towing:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-gray-300 bg-gray-50">
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Metric
                  </th>
                  <th className="px-4 py-3 text-right font-semibold text-gray-900">
                    3.31 Ratio
                  </th>
                  <th className="px-4 py-3 text-right font-semibold text-gray-900">
                    3.73 Ratio
                  </th>
                  <th className="px-4 py-3 text-right font-semibold text-gray-900">
                    4.10 Ratio
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-700">
                    Highway MPG (unloaded)
                  </td>
                  <td className="px-4 py-3 text-right text-gray-600">21</td>
                  <td className="px-4 py-3 text-right text-gray-600">19</td>
                  <td className="px-4 py-3 text-right text-gray-600">17</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-700">
                    Towing MPG (7,000 lb trailer)
                  </td>
                  <td className="px-4 py-3 text-right text-gray-600">8.5</td>
                  <td className="px-4 py-3 text-right text-gray-600">8.0</td>
                  <td className="px-4 py-3 text-right text-gray-600">7.5</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-700">
                    Annual fuel cost ($3.75/gal)
                  </td>
                  <td className="px-4 py-3 text-right text-gray-600">$2,940</td>
                  <td className="px-4 py-3 text-right text-gray-600">$3,210</td>
                  <td className="px-4 py-3 text-right text-gray-600">$3,530</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-700">
                    Max tow rating
                  </td>
                  <td className="px-4 py-3 text-right text-gray-600">11,000 lbs</td>
                  <td className="px-4 py-3 text-right text-gray-600">13,500 lbs</td>
                  <td className="px-4 py-3 text-right text-gray-600">14,000 lbs</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400">
            Estimates based on a 2025 half-ton V8 truck. Actual results vary by
            engine, transmission, driving style, and terrain.
          </p>
          <div className="rounded-xl border-l-4 border-brand-500 bg-brand-50 p-4">
            <p className="text-sm text-brand-700">
              <strong>The verdict:</strong> Over 5 years, the 4.10 ratio costs
              roughly $2,950 more in fuel than the 3.31 ratio. But it gives you
              3,000 lbs of additional towing capacity. If you tow a trailer
              that exceeds the 3.31 ratio&apos;s limit, the fuel savings are
              irrelevant&mdash;you simply cannot tow safely. Choose the ratio
              that meets your towing needs first, then accept the fuel cost.
            </p>
          </div>
        </div>
      </section>

      {/* Which ratio for your trailer */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          Which Axle Ratio for Your Trailer Weight?
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            Use this chart as a starting point, then verify with your
            truck&apos;s specific tow rating:
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border-2 border-safe-200 bg-safe-50 p-5">
              <h3 className="font-semibold text-safe-700">
                Trailers Under 6,000 lbs
              </h3>
              <p className="mt-2 text-sm">
                A <strong>3.31 or 3.55</strong> ratio is sufficient. These
                trailers are light enough that any modern half-ton truck can
                handle them, and the fuel economy benefit of the taller ratio
                compounds over many unloaded miles. Prioritize payload and
                tongue weight over axle ratio at this weight.
              </p>
            </div>
            <div className="rounded-xl border-2 border-brand-200 bg-brand-50 p-5">
              <h3 className="font-semibold text-brand-700">
                Trailers 6,000-8,000 lbs
              </h3>
              <p className="mt-2 text-sm">
                A <strong>3.55 or 3.73</strong> ratio is ideal. This is the
                sweet spot for most travel trailer owners. You get enough torque
                multiplication for confident highway towing and mountain
                grades, without giving up too much unloaded fuel economy.
              </p>
            </div>
            <div className="rounded-xl border-2 border-warning-200 bg-warning-50 p-5">
              <h3 className="font-semibold text-warning-700">
                Trailers 8,000-12,000 lbs
              </h3>
              <p className="mt-2 text-sm">
                A <strong>3.73 or 4.10</strong> ratio is strongly recommended.
                At these weights, the truck needs maximum torque multiplication
                for safe starting, grade climbing, and braking. Consider a 3/4-ton
                truck, where these ratios are standard.
              </p>
            </div>
            <div className="rounded-xl border-2 border-danger-200 bg-danger-50 p-5">
              <h3 className="font-semibold text-danger-700">
                Trailers Over 12,000 lbs
              </h3>
              <p className="mt-2 text-sm">
                A <strong>4.10 or 4.30</strong> ratio on a heavy-duty truck is
                necessary. At this weight you are in fifth wheel territory,
                where pin weight, GCWR, and axle ratio all work together. Diesel
                engines with high torque can tolerate slightly taller ratios
                (3.73), but gas engines need the shorter ratios.
              </p>
            </div>
          </div>
          <p>
            For more help matching your truck to your trailer, use our{" "}
            <Link
              href="/towing-capacity-calculator"
              className="font-semibold text-brand-600 underline"
            >
              Towing Capacity Calculator
            </Link>{" "}
            and read our{" "}
            <Link
              href="/guides/towing-capacity-explained"
              className="font-semibold text-brand-600 underline"
            >
              Towing Capacity Explained
            </Link>{" "}
            guide.
          </p>
        </div>
      </section>

      {/* Axle ratio and payload */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          Does Axle Ratio Affect Payload?
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            Yes, but indirectly. Payload is determined by GVWR minus the
            truck&apos;s curb weight. The axle ratio itself does not change
            GVWR, but the components that come with a higher ratio often add
            weight:
          </p>
          <ul className="ml-6 list-disc space-y-2">
            <li>
              <strong>Heavier-duty axle housing:</strong> Trucks with 4.10+
              ratios often come with larger ring gears (10.5-inch vs 8.8-inch),
              thicker axle tubes, and upgraded bearings. This adds 50-100 lbs.
            </li>
            <li>
              <strong>Max Tow Package:</strong> Higher ratios are usually
              bundled with upgraded radiators, transmission coolers, and
              alternators. These add 80-150 lbs.
            </li>
            <li>
              <strong>Heavier springs:</strong> Some manufacturers pair higher
              ratios with upgraded rear suspensions, adding another 30-50 lbs.
            </li>
          </ul>
          <p>
            The net effect: a truck with a 4.10 ratio may carry 150-300 lbs
            less payload than the same truck with a 3.31 ratio, because the
            heavier components increase curb weight. For trailers with high
              tongue weight, this payload reduction can offset some of the
              towing capacity gain. Always run both{" "}
            <Link
              href="/payload-calculator"
              className="font-semibold text-brand-600 underline"
            >
              payload
            </Link>{" "}
            and{" "}
            <Link
              href="/gvwr-calculator"
              className="font-semibold text-brand-600 underline"
            >
              GVWR
            </Link>{" "}
            calculations to find the real binding constraint.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-12 rounded-2xl bg-brand-600 p-8 text-center text-white">
        <h2 className="text-2xl font-bold">
          Find Your Real Towing Capacity
        </h2>
        <p className="mt-2 text-brand-100">
          Axle ratio is just one piece of the puzzle. Check your complete towing
          setup&mdash;capacity, payload, tongue weight, and GCWR&mdash;in under
          two minutes, free.
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
              href="/guides/gvwr-vs-gcwr"
              className="text-brand-600 hover:underline"
            >
              GVWR vs GCWR: What&apos;s the Difference?
            </Link>
          </li>
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
              href="/guides/diesel-vs-gas-truck-rv-towing"
              className="text-brand-600 hover:underline"
            >
              Diesel vs Gas Truck for Towing RV: Which Is Better?
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
              Ford Towing Guides &amp; Axle Ratio Charts
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
              Chevrolet Towing Capacity &amp; Axle Code Guide
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
