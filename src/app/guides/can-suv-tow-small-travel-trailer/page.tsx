import type { Metadata } from "next";
import Link from "next/link";
import { FaqJsonLd, ArticleJsonLd } from "@/components/seo/JsonLd";
import { DEFAULT_OG_IMAGES } from "@/lib/seo/default-og-image";

export const metadata: Metadata = {
  title: "Can My SUV Tow a Small Travel Trailer? Safety Check & SUV Guide",
  description:
    "Can your SUV tow a small travel trailer? Learn real tow limits, payload math, the best SUV models, and how to verify your setup before you buy.",
  alternates: {
    canonical: "https://www.rvtowingcalc.com/guides/can-suv-tow-small-travel-trailer",
  },
  openGraph: {
    title: "Can My SUV Tow a Small Travel Trailer? Safety Check & SUV Guide",
    description:
      "Find out if your SUV can safely tow a small travel trailer. Includes tow ratings by class, payload reality checks, and top SUV recommendations.",
    url: "https://www.rvtowingcalc.com/guides/can-suv-tow-small-travel-trailer",
    images: DEFAULT_OG_IMAGES,
  },
};

const FAQS = [
  {
    q: "Can a Honda CR-V tow a small travel trailer?",
    a: "The Honda CR-V is rated to tow 1,500 lbs. That is enough for a very small utility trailer or a lightweight teardrop camper, but not for most conventional travel trailers marketed as 'small.' A typical 17-foot travel trailer has a dry weight of 2,800-3,500 lbs and a loaded weight closer to 3,500-4,200 lbs, which exceeds the CR-V's rating. For anything larger than a teardrop or popup, you need a midsize SUV or larger.",
  },
  {
    q: "What is the best SUV for towing a small travel trailer?",
    a: "The best SUV depends on the trailer weight, but strong options include the Ford Expedition (9,300 lbs max tow), Chevrolet Tahoe/Suburban (8,400 lbs), Jeep Wagoneer (10,000 lbs), Toyota Sequoia (9,520 lbs), and Nissan Armada (8,500 lbs). For lighter trailers under 4,500 lbs, midsize SUVs like the Toyota 4Runner, Ford Explorer, Honda Passport, and Jeep Grand Cherokee are popular. Always check the specific trim and equipment for actual ratings.",
  },
  {
    q: "How do I know if my SUV can tow a specific trailer?",
    a: "Start with three numbers: your SUV's tow rating (from the owner's manual or door jamb sticker), payload capacity (yellow door jamb sticker), and the trailer's loaded weight (not dry weight). Then calculate tongue weight at 10-15% of loaded trailer weight and add passengers, cargo, and hitch weight. If the total stays within payload and the trailer weight stays within tow rating, the matchup is safe. Use our calculators to verify every number.",
  },
  {
    q: "Is an SUV better than a truck for towing a small travel trailer?",
    a: "SUVs offer enclosed cargo space, better passenger comfort, and easier daily driving than a truck. However, trucks generally have higher tow ratings, more payload, longer wheelbases for stability, and simpler leaf-spring rear suspensions. For trailers under 5,000 lbs, a capable SUV is often the better all-around choice. For trailers over 6,000 lbs or fifth wheels, a truck is the safer option.",
  },
  {
    q: "Do I need a weight distribution hitch with an SUV?",
    a: "It depends on the SUV and trailer. Many SUVs require a WDH for trailers above 5,000 lbs, and some manufacturers mandate one for trailers above a certain weight to maintain warranty coverage. Even if not required, a WDH improves stability and headlight aim on lighter SUVs. Check your owner's manual. If tongue weight exceeds 500 lbs or the trailer is over 4,000 lbs, a WDH is strongly recommended.",
  },
  {
    q: "What is the smallest travel trailer an SUV can tow?",
    a: "Even compact SUVs can tow lightweight teardrop campers (500-1,500 lbs) and some pop-up campers (1,200-2,500 lbs). Midsize SUVs can handle single-axle travel trailers in the 3,000-4,500 lb range. Full-size body-on-frame SUVs can tow conventional travel trailers up to 8,000-10,000 lbs when properly equipped.",
  },
];

const SUV_RATINGS = [
  {
    suv: "Honda CR-V",
    class: "Compact",
    maxTow: "1,500 lbs",
    payload: "~1,100 lbs",
    notes: "Teardrops and tiny utility trailers only",
  },
  {
    suv: "Subaru Outback",
    class: "Wagon/Crossover",
    maxTow: "3,500 lbs",
    payload: "~1,000-1,200 lbs",
    notes: "Good for small pop-ups and micro trailers",
  },
  {
    suv: "Toyota 4Runner",
    class: "Midsize Body-on-Frame",
    maxTow: "5,000 lbs",
    payload: "~1,500-1,700 lbs",
    notes: "Solid for sub-4,500 lb trailers",
  },
  {
    suv: "Ford Explorer",
    class: "Midsize Crossover",
    maxTow: "5,000-5,600 lbs",
    payload: "~1,400-1,700 lbs",
    notes: "Towing package required for max rating",
  },
  {
    suv: "Jeep Grand Cherokee",
    class: "Midsize SUV",
    maxTow: "6,200 lbs",
    payload: "~1,200-1,400 lbs",
    notes: "V6 models; V8 available on some trims",
  },
  {
    suv: "Honda Passport",
    class: "Midsize Crossover",
    maxTow: "5,000 lbs",
    payload: "~1,400-1,600 lbs",
    notes: "Strong for its class; good payload",
  },
  {
    suv: "Ford Expedition",
    class: "Full-Size SUV",
    maxTow: "9,300 lbs",
    payload: "~1,700-1,900 lbs",
    notes: "Max tow package required",
  },
  {
    suv: "Chevrolet Tahoe/Suburban",
    class: "Full-Size SUV",
    maxTow: "8,400 lbs",
    payload: "~1,700-1,900 lbs",
    notes: "Body-on-frame, very stable",
  },
  {
    suv: "Toyota Sequoia",
    class: "Full-Size SUV",
    maxTow: "9,520 lbs",
    payload: "~1,500-1,700 lbs",
    notes: "Hybrid V6 twin-turbo, strong torque",
  },
  {
    suv: "Jeep Wagoneer",
    class: "Full-Size SUV",
    maxTow: "10,000 lbs",
    payload: "~1,400-1,600 lbs",
    notes: "Highest SUV tow rating in class",
  },
];

const TRAILER_MATCHUPS = [
  {
    suvClass: "Compact SUV",
    examples: "Honda CR-V, Toyota RAV4, Mazda CX-5",
    trailerTypes: "Teardrop, bike trailer, tiny utility",
    maxLoadedWeight: "1,500 lbs",
  },
  {
    suvClass: "Midsize Crossover",
    examples: "Subaru Outback, Ford Explorer, Honda Passport",
    trailerTypes: "Pop-up, small hybrid, 13-17 ft travel trailer",
    maxLoadedWeight: "3,500-5,000 lbs",
  },
  {
    suvClass: "Midsize Body-on-Frame",
    examples: "Toyota 4Runner, Jeep Wrangler, Nissan Pathfinder",
    trailerTypes: "17-21 ft travel trailer, small toy hauler",
    maxLoadedWeight: "4,500-5,000 lbs",
  },
  {
    suvClass: "Full-Size SUV",
    examples: "Ford Expedition, Chevy Tahoe, Toyota Sequoia",
    trailerTypes: "21-26 ft travel trailer, small boat",
    maxLoadedWeight: "8,000-10,000 lbs",
  },
];

export default function CanSuvTowSmallTravelTrailerPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <FaqJsonLd
        faqs={FAQS}
        baseUrl="https://www.rvtowingcalc.com/guides/can-suv-tow-small-travel-trailer"
      />
      <ArticleJsonLd
        title="Can My SUV Tow a Small Travel Trailer? Safety Check & SUV Guide"
        description="Find out if your SUV can safely tow a small travel trailer. Includes tow ratings by class, payload reality checks, and top SUV recommendations."
        url="https://www.rvtowingcalc.com/guides/can-suv-tow-small-travel-trailer"
        datePublished="2026-07-27"
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
        <span className="text-gray-900">Can My SUV Tow a Small Travel Trailer?</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
        Can My SUV Tow a Small Travel Trailer? A Data-Driven Safety Check
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        SUVs are the family vehicle of choice for millions of Americans, and
        many RV owners want to know if their SUV can pull a small travel trailer
        without buying a truck. The answer is sometimes yes&mdash;but tow
        rating alone will not keep you safe. This guide walks you through the
        real numbers that determine whether your SUV is up to the job.
      </p>

      {/* Short answer */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">The Short Answer</h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            Many SUVs can tow a small travel trailer, but only if the trailer's
            loaded weight, tongue weight, and your SUV's payload capacity all
            line up. As a rough rule:
          </p>
          <ul className="ml-6 list-disc space-y-2">
            <li>
              <strong>Compact SUVs:</strong> Teardrops and tiny trailers only
              (under 1,500 lbs).
            </li>
            <li>
              <strong>Midsize SUVs/crossovers:</strong> Pop-ups and small travel
              trailers up to 3,500-5,000 lbs.
            </li>
            <li>
              <strong>Full-size body-on-frame SUVs:</strong> Larger travel
              trailers up to 8,000-10,000 lbs when properly equipped.
            </li>
          </ul>
          <div className="rounded-xl border-l-4 border-warning-500 bg-warning-50 p-4">
            <p className="text-sm text-warning-700">
              <strong>Important:</strong> Tow rating is the ceiling, not the
              target. Most RV safety experts recommend towing no more than 80%
              of your SUV's maximum tow rating. That leaves a margin for wind,
              hills, payload, and real-world surprises.
            </p>
          </div>
        </div>
      </section>

      {/* What small means */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          What Does "Small" Travel Trailer Actually Weigh?
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            Dealer websites advertise dry weight or UVW (unloaded vehicle
            weight). That number is almost useless for real-world towing. By the
            time you add propane, battery, water, food, clothes, and gear, a
            "small" trailer can be 1,000-1,500 lbs heavier than the brochure
            claims.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-gray-300 bg-gray-50">
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Trailer Type
                  </th>
                  <th className="px-4 py-3 text-right font-semibold text-gray-900">
                    Dry Weight
                  </th>
                  <th className="px-4 py-3 text-right font-semibold text-gray-900">
                    Loaded Weight
                  </th>
                  <th className="px-4 py-3 text-right font-semibold text-gray-900">
                    Est. Tongue Weight
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-700">
                    Teardrop camper
                  </td>
                  <td className="px-4 py-3 text-right text-gray-600">800-1,500</td>
                  <td className="px-4 py-3 text-right text-gray-600">1,000-2,000</td>
                  <td className="px-4 py-3 text-right text-gray-600">100-300</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-700">
                    Pop-up camper
                  </td>
                  <td className="px-4 py-3 text-right text-gray-600">1,200-2,500</td>
                  <td className="px-4 py-3 text-right text-gray-600">2,000-3,500</td>
                  <td className="px-4 py-3 text-right text-gray-600">200-525</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-700">
                    17-19 ft travel trailer
                  </td>
                  <td className="px-4 py-3 text-right text-gray-600">2,800-3,800</td>
                  <td className="px-4 py-3 text-right text-gray-600">3,500-4,800</td>
                  <td className="px-4 py-3 text-right text-gray-600">350-720</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-700">
                    20-23 ft travel trailer
                  </td>
                  <td className="px-4 py-3 text-right text-gray-600">3,500-4,800</td>
                  <td className="px-4 py-3 text-right text-gray-600">4,500-6,000</td>
                  <td className="px-4 py-3 text-right text-gray-600">450-900</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            Use the loaded weight column when evaluating your SUV. Dry weight is
            a fantasy that leaves no room for reality.
          </p>
        </div>
      </section>

      {/* SUV tow ratings */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          SUV Tow Ratings by Class
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            These are representative maximum tow ratings for properly equipped
            models. Your exact rating depends on engine, drivetrain, and tow
            package. Always verify with the owner's manual or the door jamb
            sticker.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-gray-300 bg-gray-50">
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    SUV
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Class
                  </th>
                  <th className="px-4 py-3 text-right font-semibold text-gray-900">
                    Max Tow
                  </th>
                  <th className="px-4 py-3 text-right font-semibold text-gray-900">
                    Payload
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Notes
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {SUV_RATINGS.map((row) => (
                  <tr key={row.suv}>
                    <td className="px-4 py-3 font-medium text-gray-700">
                      {row.suv}
                    </td>
                    <td className="px-4 py-3 text-gray-600">{row.class}</td>
                    <td className="px-4 py-3 text-right text-gray-600">
                      {row.maxTow}
                    </td>
                    <td className="px-4 py-3 text-right text-gray-600">
                      {row.payload}
                    </td>
                    <td className="px-4 py-3 text-gray-600">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="rounded-xl border-l-4 border-brand-500 bg-brand-50 p-4">
            <p className="text-sm text-brand-700">
              <strong>Key takeaway:</strong> Full-size SUVs can rival half-ton
              trucks for tow rating, but their payload is usually lower because
              the SUV body and interior features add weight. Payload is often
              the real constraint.
            </p>
          </div>
        </div>
      </section>

      {/* Payload reality */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          Payload: The Hidden Problem
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            Tow rating tells you how much the SUV can pull. Payload tells you
            how much weight the SUV can carry. Tongue weight counts as payload.
            So do passengers, cargo, pets, and the weight distribution hitch.
          </p>
          <p>Here is a realistic midsize SUV scenario:</p>
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
                    Tongue weight (4,500 lb trailer at 13%)
                  </td>
                  <td className="px-4 py-3 text-right text-gray-600">585</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-700">
                    Weight distribution hitch
                  </td>
                  <td className="px-4 py-3 text-right text-gray-600">100</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-700">
                    Two adults + two kids
                  </td>
                  <td className="px-4 py-3 text-right text-gray-600">550</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-700">
                    Cargo in SUV (cooler, bags, gear)
                  </td>
                  <td className="px-4 py-3 text-right text-gray-600">200</td>
                </tr>
                <tr className="border-t-2 border-gray-400 bg-gray-50">
                  <td className="px-4 py-3 font-bold text-gray-900">
                    Total Payload Required
                  </td>
                  <td className="px-4 py-3 text-right font-bold text-gray-900">
                    1,435
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            In this example, the SUV needs at least 1,435 lbs of payload. Many
            midsize SUVs have 1,200-1,500 lbs, which means this setup is at the
            limit or over. A compact SUV with 1,100 lbs of payload is completely
            out of the question.
          </p>
          <p>
            This is why so many SUV owners discover they are overloaded only
            after they buy the trailer. Always run your{" "}
            <Link
              href="/payload-calculator"
              className="font-semibold text-brand-600 underline"
            >
              payload numbers
            </Link>{" "}
            before purchasing.
          </p>
        </div>
      </section>

      {/* How to check your SUV */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          How to Check Your Specific SUV
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>Follow these four steps to know for sure:</p>
          <ol className="ml-6 list-decimal space-y-2">
            <li>
              <strong>Find tow rating:</strong> Check the owner's manual or the
              manufacturer's towing guide. Look for the specific engine, cab
              configuration, and tow package.
            </li>
            <li>
              <strong>Find payload:</strong> Look at the yellow and white Tire
              and Loading Information sticker on the driver's door jamb. It
              says, "The combined weight of occupants and cargo should never
              exceed X lbs."
            </li>
            <li>
              <strong>Estimate loaded trailer weight:</strong> Add 1,000-1,500
              lbs to the published dry weight for a realistic loaded weight.
            </li>
            <li>
              <strong>Calculate total payload:</strong> Add tongue weight
              (loaded trailer weight x 0.13), passengers, cargo, and hitch
              weight. Compare to the payload sticker.
            </li>
          </ol>
          <div className="rounded-xl border-l-4 border-danger-500 bg-danger-50 p-4">
            <p className="text-sm text-danger-700">
              <strong>Warning:</strong> Tow ratings advertised in commercials
              usually require the maximum tow package, specific axle ratio, and
              sometimes a stripped-down configuration. The SUV on the dealer lot
              may not have those options. Verify the window sticker.
            </p>
          </div>
        </div>
      </section>

      {/* Trailer matchups */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          Which Trailers Match Which SUVs?
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            Use this table to match your SUV class to realistic trailer options.
            Remember: loaded weight, not dry weight, is what matters.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-gray-300 bg-gray-50">
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    SUV Class
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Examples
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Trailer Types
                  </th>
                  <th className="px-4 py-3 text-right font-semibold text-gray-900">
                    Max Loaded Weight
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {TRAILER_MATCHUPS.map((row) => (
                  <tr key={row.suvClass}>
                    <td className="px-4 py-3 font-medium text-gray-700">
                      {row.suvClass}
                    </td>
                    <td className="px-4 py-3 text-gray-600">{row.examples}</td>
                    <td className="px-4 py-3 text-gray-600">
                      {row.trailerTypes}
                    </td>
                    <td className="px-4 py-3 text-right text-gray-600">
                      {row.maxLoadedWeight}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Safety tips */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          SUV Towing Safety Tips
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border-l-4 border-danger-500 bg-danger-50 p-5">
              <h3 className="font-semibold text-danger-700">
                Do not exceed receiver rating
              </h3>
              <p className="mt-2 text-sm text-danger-700">
                The hitch receiver on your SUV has its own weight rating, often
                lower than the SUV's tow rating. A Class III receiver is usually
                rated for 5,000 lbs; Class IV for 7,500-10,000 lbs. Check the
                receiver label.
              </p>
            </div>
            <div className="rounded-xl border-l-4 border-warning-500 bg-warning-50 p-5">
              <h3 className="font-semibold text-warning-700">
                Watch wheelbase
              </h3>
              <p className="mt-2 text-sm text-warning-700">
                Shorter wheelbases are less stable. A general rule: trailer
                length should not exceed roughly twice the SUV's wheelbase for
                safe handling. Long trailers behind short SUVs invite sway.
              </p>
            </div>
            <div className="rounded-xl border-l-4 border-warning-500 bg-warning-50 p-5">
              <h3 className="font-semibold text-warning-700">
                Use trailer brakes
              </h3>
              <p className="mt-2 text-sm text-warning-700">
                Most states require trailer brakes on trailers over 3,000 lbs.
                Even if not required, trailer brakes reduce stopping distance
                and reduce wear on your SUV's brakes.
              </p>
            </div>
            <div className="rounded-xl border-l-4 border-brand-500 bg-brand-50 p-5">
              <h3 className="font-semibold text-brand-700">
                Tow/haul mode is your friend
              </h3>
              <p className="mt-2 text-sm text-brand-700">
                Engage tow/haul mode to hold gears longer, reduce transmission
                hunting, and use engine braking on descents. It is especially
                important for crossover SUVs with CVTs or smaller engines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-12 rounded-2xl bg-brand-600 p-8 text-center text-white">
        <h2 className="text-2xl font-bold">Verify Your SUV Before You Buy</h2>
        <p className="mt-2 text-brand-100">
          Run all the numbers in under two minutes. Check towing capacity,
          payload, tongue weight, and GCWR for free.
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
          <li>
            <Link
              href="/guides/calculate-tongue-weight-travel-trailer"
              className="text-brand-600 hover:underline"
            >
              How to Calculate Tongue Weight for a Travel Trailer
            </Link>
          </li>
          <li>
            <Link
              href="/guides/best-half-ton-trucks-8000-lbs"
              className="text-brand-600 hover:underline"
            >
              Best Half-Ton Trucks for Towing 8,000 lbs
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
          <li>
            <a
              href="https://www.ford.com/suvs-crossovers/expedition/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 hover:underline"
            >
              Ford Expedition Towing Specifications
            </a>{" "}
            &mdash; ford.com
          </li>
          <li>
            <a
              href="https://www.toyota.com/sequoia/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 hover:underline"
            >
              Toyota Sequoia Towing Specifications
            </a>{" "}
            &mdash; toyota.com
          </li>
          <li>
            <a
              href="https://rvlife.com/small-travel-trailer-suv-towing/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 hover:underline"
            >
              Small Travel Trailers You Can Tow With an SUV
            </a>{" "}
            &mdash; RV Life
          </li>
        </ul>
      </section>
    </div>
  );
}
