import type { Metadata } from "next";
import Link from "next/link";
import { FaqJsonLd, ArticleJsonLd } from "@/components/seo/JsonLd";
import { DEFAULT_OG_IMAGES } from "@/lib/seo/default-og-image";

export const metadata: Metadata = {
  title:
    "Travel Trailer Dry Weight vs Loaded Weight: What Dealers Don't Tell You",
  description:
    "Dealers quote dry weight, but loaded weight is what matters for safe towing. Learn the real numbers, how to calculate your true travel-ready weight, and why the difference can exceed 2,000 lbs.",
  alternates: {
    canonical: "https://www.rvtowingcalc.com/guides/dry-weight-vs-loaded-weight",
  },
  openGraph: {
    title: "Travel Trailer Dry Weight vs Loaded Weight: The Hidden 2,000+ lb Difference",
    description:
      "Why dealer dry weight numbers are dangerously misleading. Learn how cargo, water, propane, and options add 1,500-2,500 lbs before you even pack a suitcase.",
    url: "https://www.rvtowingcalc.com/guides/dry-weight-vs-loaded-weight",
    images: DEFAULT_OG_IMAGES,
  },
};

const FAQS = [
  {
    q: "What is the difference between dry weight and loaded weight on a travel trailer?",
    a: "Dry weight (also called UVW or Unloaded Vehicle Weight) is the trailer as it leaves the factory with no water, propane, battery, or cargo. Loaded weight (also called GVW or Gross Vehicle Weight) is the trailer fully equipped for travel with all fluids, supplies, and personal gear. The gap between the two is typically 1,500-2,500 lbs for a mid-size travel trailer and can exceed 3,000 lbs on larger models with options.",
  },
  {
    q: "How much does a full tank of water add to trailer weight?",
    a: "Water weighs 8.34 lbs per gallon. A typical travel trailer has a 40-50 gallon fresh water tank, which adds 334-417 lbs when full. Gray and black tanks add another 200-400 lbs when half full. Many new RVers tow with full fresh tanks 'just in case,' adding 400+ lbs to tongue weight and total trailer weight without realizing it. The safe practice is to travel with minimal water and fill up at the campground.",
  },
  {
    q: "What does 'dry weight' include from the factory?",
    a: "Dry weight includes the trailer chassis, walls, roof, appliances, furniture, and standard equipment as built. It does NOT include: propane tanks, battery, water in any tank, dealer-installed options (awnings, solar, upgraded AC), cargo, food, clothing, or personal gear. Some manufacturers include the battery in dry weight; others do not. Always verify what is included by checking the yellow VIN sticker on the trailer door jamb rather than relying on the brochure number.",
  },
  {
    q: "Why do dealers quote dry weight instead of loaded weight?",
    a: "Dealers quote dry weight because it is the smallest, most impressive number. A 5,500 lb dry-weight trailer sounds towable by almost any half-ton truck. The same trailer at 7,800 lbs loaded is a very different proposition. Lower numbers make sales easier. This is why independent verification is essential: weigh the actual trailer at a CAT scale with your typical load before trusting any tow rating decision.",
  },
  {
    q: "How do I calculate my trailer's true loaded weight?",
    a: "The most accurate method is weighing your loaded trailer at a CAT scale. For a pre-purchase estimate, add these items to the manufacturer's dry weight: full propane tanks (30-60 lbs), battery (50-70 lbs), full fresh water (tank capacity x 8.34 lbs), half-full gray/black water (~200 lbs), food and kitchen supplies (~150-250 lbs), clothing and personal items (~100-200 lbs), outdoor gear (chairs, grill, bikes, ~100-300 lbs), and dealer options (solar, upgraded AC, ~50-200 lbs). Total added weight is typically 1,500-2,500 lbs.",
  },
  {
    q: "Can I tow a trailer that is close to my truck's max tow rating?",
    a: "No. The 80% rule is the industry standard for safe towing: your loaded trailer weight should not exceed 80% of your truck's maximum tow rating. This margin accounts for mountain grades, headwinds, payload consumed by passengers and cargo, and the fact that real-world towing conditions are harder than the flat, sea-level test track used for SAE J2807 certification. A truck rated for 10,000 lbs should not tow more than 8,000 lbs in practice.",
  },
];

const WEIGHT_ADDITIONS = [
  {
    item: "Full propane tanks (2 x 30 lb)",
    lowLbs: 55,
    highLbs: 65,
    notes: "Empty tanks ~18 lbs each; full ~33 lbs each",
  },
  {
    item: "Deep-cycle battery",
    lowLbs: 50,
    highLbs: 70,
    notes: "Single Group 24-27 battery; lithium upgrades are lighter",
  },
  {
    item: "Full fresh water tank (40-50 gal)",
    lowLbs: 334,
    highLbs: 417,
    notes: "8.34 lbs/gallon; some trailers have 60+ gallon tanks",
  },
  {
    item: "Gray / black water (half full)",
    lowLbs: 150,
    highLbs: 300,
    notes: "Dump before travel when possible",
  },
  {
    item: "Food, kitchen supplies, cookware",
    lowLbs: 150,
    highLbs: 250,
    notes: "Canned goods and cast iron add up fast",
  },
  {
    item: "Clothing, bedding, towels",
    lowLbs: 100,
    highLbs: 200,
    notes: "Family of 4 with seasonal gear = higher end",
  },
  {
    item: "Outdoor gear (chairs, grill, bikes, hoses)",
    lowLbs: 100,
    highLbs: 300,
    notes: "E-bikes or generator push this to the high end",
  },
  {
    item: "Dealer options (solar, upgraded AC, extra awnings)",
    lowLbs: 50,
    highLbs: 200,
    notes: "Factory options may already be in UVW; dealer add-ons usually are not",
  },
  {
    item: "Tool kit, spare parts, emergency supplies",
    lowLbs: 30,
    highLbs: 80,
    notes: "Jack, tire repair kit, wheel chocks, leveling blocks",
  },
  {
    item: "TOTAL ADDED WEIGHT",
    lowLbs: 1519,
    highLbs: 2482,
    notes: "Typical range for a mid-size travel trailer",
  },
];

const REAL_WORLD_EXAMPLES = [
  {
    trailer: "Jayco Jay Flight SLX 195RB",
    dryWeight: "3,365 lbs",
    loadedEstimate: "5,200-5,600 lbs",
    difference: "+1,835-2,235 lbs",
    towVehicle: "Mid-size SUV or half-ton truck",
  },
  {
    trailer: "Grand Design Imagine 2800BH",
    dryWeight: "6,495 lbs",
    loadedEstimate: "8,500-9,200 lbs",
    difference: "+2,005-2,705 lbs",
    towVehicle: "Half-ton truck (careful on payload)",
  },
  {
    trailer: "Keystone Cougar 34TSB",
    dryWeight: "8,945 lbs",
    loadedEstimate: "11,500-12,500 lbs",
    difference: "+2,555-3,555 lbs",
    towVehicle: "Heavy-duty truck (2500/250 series)",
  },
  {
    trailer: "Airstream Classic 30RB",
    dryWeight: "7,788 lbs",
    loadedEstimate: "9,800-10,500 lbs",
    difference: "+2,012-2,712 lbs",
    towVehicle: "Half-ton max tow or HD truck",
  },
];

const WARNING_SIGNS = [
  {
    sign: "Dealer quotes dry weight without mentioning loaded weight",
    risk: "You may buy a trailer your truck cannot safely tow when loaded",
    fix: "Ask for the yellow VIN sticker GVWR and calculate 80% of your truck's tow rating",
  },
  {
    sign: "Trailer GVWR is over 80% of your truck's max tow rating",
    risk: "Even empty, the trailer's legal maximum exceeds your safe towing capacity",
    fix: "Choose a lighter trailer or upgrade your tow vehicle",
  },
  {
    sign: "Tongue weight percentage drops below 10% when loaded",
    risk: "Trailer sway becomes likely; hitch weight drops as cargo shifts rearward",
    fix: "Load heavy items over or forward of the axles; weigh at a CAT scale",
  },
  {
    sign: "You plan to travel with full water tanks 'just in case'",
    risk: "400+ lbs of water consumes payload and increases tongue weight unpredictably",
    fix: "Travel with minimal water; fill at destination",
  },
];

export default function DryWeightVsLoadedWeightPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <FaqJsonLd
        faqs={FAQS}
        baseUrl="https://www.rvtowingcalc.com/guides/dry-weight-vs-loaded-weight"
      />
      <ArticleJsonLd
        title="Travel Trailer Dry Weight vs Loaded Weight: What Dealers Don't Tell You"
        description="Why dealer dry weight numbers are dangerously misleading. Learn how cargo, water, propane, and options add 1,500-2,500 lbs before you even pack a suitcase."
        url="https://www.rvtowingcalc.com/guides/dry-weight-vs-loaded-weight"
        datePublished="2026-08-16"
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
        <span className="text-gray-900">Dry Weight vs Loaded Weight</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
        Travel Trailer Dry Weight vs Loaded Weight: What Dealers
        Don&apos;t Tell You
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        The single most dangerous number in RV sales is dry weight. Dealers
        love it because it is small, impressive, and easy to sell. The
        problem: dry weight has almost nothing to do with the trailer you
        will actually tow. By the time you add water, propane, batteries,
        food, clothing, and outdoor gear, the real-world loaded weight can
        be 2,000+ lbs heavier than the brochure claims. This guide explains
        the difference, shows you the real numbers, and teaches you how to
        calculate your true travel-ready weight before you sign the
        purchase contract.
      </p>

      {/* What is dry weight */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          What Is Dry Weight (UVW)?
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            Dry weight, also called Unloaded Vehicle Weight (UVW), is the
            weight of the trailer as it leaves the factory with no fluids,
            no battery, no propane, and no cargo. It includes the chassis,
            walls, roof, standard appliances, and factory-installed
            furniture. What it does NOT include is everything that makes
            the trailer usable.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border-l-4 border-brand-500 bg-brand-50 p-5">
              <h3 className="font-semibold text-brand-700">Included in Dry Weight</h3>
              <ul className="mt-2 ml-4 list-disc space-y-1 text-sm text-brand-700">
                <li>Chassis, frame, and suspension</li>
                <li>Walls, roof, and floor structure</li>
                <li>Standard appliances (fridge, stove, AC)</li>
                <li>Factory-installed furniture and cabinets</li>
                <li>Standard windows and doors</li>
              </ul>
            </div>
            <div className="rounded-xl border-l-4 border-warning-500 bg-warning-50 p-5">
              <h3 className="font-semibold text-warning-700">NOT Included in Dry Weight</h3>
              <ul className="mt-2 ml-4 list-disc space-y-1 text-sm text-warning-700">
                <li>Propane tanks and fuel</li>
                <li>Battery (sometimes excluded)</li>
                <li>Water in any tank</li>
                <li>Dealer-installed options</li>
                <li>Cargo, food, clothing, gear</li>
              </ul>
            </div>
          </div>
          <p>
            Some manufacturers are more generous than others. A few include
            the battery in UVW; most do not. Some include a full propane
            tank; most do not. The only way to know exactly what is
            included is to check the yellow VIN certification sticker
            inside the trailer door jamb, not the marketing brochure.
          </p>
        </div>
      </section>

      {/* What adds weight */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          What Actually Adds Weight to Your Trailer
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            The gap between dry weight and loaded weight is not a rounding
            error. For a typical 6,000 lb dry-weight travel trailer, the
            loaded weight is usually 8,000-8,500 lbs. Here is where those
            extra pounds come from.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-gray-300 bg-gray-50">
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Item
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Low (lbs)
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    High (lbs)
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Notes
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {WEIGHT_ADDITIONS.map((row) => (
                  <tr
                    key={row.item}
                    className={
                      row.item.startsWith("TOTAL")
                        ? "bg-gray-50 font-semibold"
                        : ""
                    }
                  >
                    <td className="px-4 py-3 font-medium text-gray-700">
                      {row.item}
                    </td>
                    <td className="px-4 py-3 text-gray-600">{row.lowLbs}</td>
                    <td className="px-4 py-3 text-gray-600">{row.highLbs}</td>
                    <td className="px-4 py-3 text-gray-600">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="rounded-xl border-l-4 border-success-500 bg-success-50 p-5">
            <h3 className="font-semibold text-success-700">
              The Water Weight Surprise
            </h3>
            <p className="mt-2 text-sm text-success-700">
              Water is the heaviest single item most owners overlook. A
              50-gallon fresh tank holds 417 lbs of water. Add half-full
              gray and black tanks and you are carrying 600+ lbs of fluids
              alone. Many new RVers fill their fresh tank before departure
              &quot;just in case,&quot; not realizing this consumes nearly 10%
              of their trailer&apos;s cargo capacity and adds significant
              tongue weight. The smart approach: travel with 5-10 gallons
              for emergencies and fill up at the campground.
            </p>
          </div>
        </div>
      </section>

      {/* Real world examples */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          Real-World Examples: Dry vs Loaded
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            These examples use actual manufacturer dry weights and
            realistic loaded estimates based on typical owner packing
            habits. The difference is sobering.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-gray-300 bg-gray-50">
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Trailer Model
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Dry Weight
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Loaded Estimate
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Difference
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Suitable Tow Vehicle
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {REAL_WORLD_EXAMPLES.map((row) => (
                  <tr key={row.trailer}>
                    <td className="px-4 py-3 font-medium text-gray-700">
                      {row.trailer}
                    </td>
                    <td className="px-4 py-3 text-gray-600">
                      {row.dryWeight}
                    </td>
                    <td className="px-4 py-3 text-gray-600">
                      {row.loadedEstimate}
                    </td>
                    <td className="px-4 py-3 font-semibold text-danger-700">
                      {row.difference}
                    </td>
                    <td className="px-4 py-3 text-gray-600">
                      {row.towVehicle}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            Notice that even the small Jayco 195RB, with a dry weight under
            3,400 lbs, grows to over 5,500 lbs when loaded. That is the
            difference between a comfortable tow behind a mid-size SUV and
            a dangerously overloaded one.
          </p>
        </div>
      </section>

      {/* The 80% rule */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          The 80% Rule: Why You Need a Safety Margin
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            SAE J2807 tow ratings are measured on a flat test track at sea
            level with a single 150-lb driver and no cargo. Real-world
            towing involves mountain grades, headwinds, altitude power
            loss, passengers, cargo in the truck bed, and unpredictable
            weather. The 80% rule accounts for all of this.
          </p>
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-5">
            <h3 className="font-semibold text-gray-900">
              How to Apply the 80% Rule
            </h3>
            <ol className="mt-3 ml-6 list-decimal space-y-2 text-sm text-gray-700">
              <li>
                Find your truck&apos;s <strong>max tow rating</strong> on
                the door jamb sticker or manufacturer towing guide
              </li>
              <li>
                Multiply by <strong>0.80</strong> to get your safe maximum
                loaded trailer weight
              </li>
              <li>
                Find the trailer&apos;s <strong>GVWR</strong> (not dry
                weight) on the yellow VIN sticker
              </li>
              <li>
                Compare: trailer GVWR must be less than or equal to your
                80% safe maximum
              </li>
            </ol>
            <p className="mt-3 text-sm text-gray-700">
              <strong>Example:</strong> Ford F-150 with 3.5L EcoBoost and
              Max Tow Package = 14,000 lbs max tow rating. 80% = 11,200
              lbs. A trailer with 9,500 lb GVWR is safely within limits. A
              trailer with 12,000 lb GVWR is not, even though the raw
              rating says it is.
            </p>
          </div>
          <div className="rounded-xl border-l-4 border-danger-500 bg-danger-50 p-4">
            <p className="text-sm text-danger-700">
              <strong>Critical:</strong> Never use dry weight for towing
              capacity calculations. Always use GVWR or actual loaded
              weight from a CAT scale. Dry weight is a marketing number;
              GVWR is a safety number.
            </p>
          </div>
        </div>
      </section>

      {/* Warning signs */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          Warning Signs Your Setup Is Underestimating Weight
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            These red flags indicate that you or your dealer may be using
            dry weight instead of real-world loaded weight. Catch them
            before you are on the highway with an overloaded rig.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-gray-300 bg-gray-50">
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Warning Sign
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Risk
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Fix
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {WARNING_SIGNS.map((row) => (
                  <tr key={row.sign}>
                    <td className="px-4 py-3 font-medium text-gray-700">
                      {row.sign}
                    </td>
                    <td className="px-4 py-3 text-xs text-danger-700">
                      {row.risk}
                    </td>
                    <td className="px-4 py-3 text-xs text-gray-600">
                      {row.fix}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* How to weigh */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          The Only Way to Know for Sure: Weigh at a CAT Scale
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            Estimates are useful for shopping, but the only way to know
            your true loaded weight is to weigh the trailer at a CAT
            scale. This costs about $15 and takes 10 minutes. Bring the
            trailer loaded exactly as you would for a trip: full propane,
            typical water level, all your gear, all passengers in the
            truck.
          </p>
          <ol className="ml-6 list-decimal space-y-3">
            <li>
              <strong>Find a scale.</strong> Use the{" "}
              <a
                href="https://www.catscale.com/locations"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-600 hover:underline"
              >
                CAT Scale locator
              </a>{" "}
              to find a location near you. Most truck stops have one.
            </li>
            <li>
              <strong>First pass:</strong> Weigh the truck and trailer
              together with all axles on the scale platforms. Record the
              steering axle, drive axle, and trailer axle weights.
            </li>
            <li>
              <strong>Second pass:</strong> Drop the trailer and weigh the
              truck alone. Record the steering and drive axle weights.
            </li>
            <li>
              <strong>Calculate:</strong> Trailer weight = total first
              pass minus truck-only second pass. Tongue weight = truck
              drive axle (with trailer) minus truck drive axle (without
              trailer).
            </li>
          </ol>
          <p>
            Compare your actual weights to your truck&apos;s GVWR, GAWR,
            and GCWR on the door jamb sticker. If any rating is exceeded,
            you need to reduce cargo, move weight, or upgrade your tow
            vehicle.
          </p>
          <div className="rounded-xl border-l-4 border-brand-500 bg-brand-50 p-4">
            <p className="text-sm text-brand-700">
              <strong>Pro tip:</strong> Weigh your setup twice per year:
              once at the start of the season with your typical load, and
              once mid-season after you have added gear or supplies. Small
              changes add up, and it is easy to creep over limits without
              noticing.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-12 rounded-2xl bg-brand-600 p-8 text-center text-white">
        <h2 className="text-2xl font-bold">Check Your Numbers Before You Buy</h2>
        <p className="mt-2 text-brand-100">
          Use our calculators to verify your truck can handle the trailer's
          loaded weight, not just the dealer's dry weight number.
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
              href="/guides/cat-scale-weighing"
              className="text-brand-600 hover:underline"
            >
              How to Weigh Your RV at a CAT Scale
            </Link>
          </li>
          <li>
            <Link
              href="/guides/towing-capacity-explained"
              className="text-brand-600 hover:underline"
            >
              Towing Capacity Explained
            </Link>
          </li>
          <li>
            <Link
              href="/guides/payload-capacity"
              className="text-brand-600 hover:underline"
            >
              Payload Capacity Explained
            </Link>
          </li>
          <li>
            <Link
              href="/guides/trailer-loading-position"
              className="text-brand-600 hover:underline"
            >
              Trailer Loading Position Guide
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
              href="https://www.nhtsa.gov/road-safety/towing-and-road-safety"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 hover:underline"
            >
              NHTSA Towing and Road Safety
            </a>{" "}
            &mdash; nhtsa.gov
          </li>
          <li>
            <a
              href="https://www.sae.org/standards/content/j2807_202003/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 hover:underline"
            >
              SAE J2807 Tow Rating Test Procedure
            </a>{" "}
            &mdash; sae.org
          </li>
          <li>
            <a
              href="https://www.catscale.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 hover:underline"
            >
              CAT Scale Official Website
            </a>{" "}
            &mdash; catscale.com
          </li>
          <li>
            <a
              href="https://www.ford.com/support/how-tos/towing/towing-capacity/selecting-vehicle-trailer/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 hover:underline"
            >
              Ford Towing Guide: Selecting the Right Vehicle and Trailer
            </a>{" "}
            &mdash; ford.com
          </li>
          <li>
            <a
              href="https://www.etrailer.com/faq-dry-weight-vs-gvwr.aspx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 hover:underline"
            >
              etrailer: Dry Weight vs GVWR Explained
            </a>{" "}
            &mdash; etrailer.com
          </li>
        </ul>
      </section>
    </div>
  );
}
