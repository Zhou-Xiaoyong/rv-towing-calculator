import type { Metadata } from "next";
import Link from "next/link";
import { FaqJsonLd, ArticleJsonLd } from "@/components/seo/JsonLd";
import { DEFAULT_OG_IMAGES } from "@/lib/seo/default-og-image";

export const metadata: Metadata = {
  title: "How to Choose the Right Hitch Ball for Towing: Sizes, Ratings & Drop",
  description:
    "Learn how to choose the right hitch ball for towing. Covers 1-7/8\", 2\", and 2-5/16\" ball diameters, weight ratings, drop vs rise, and how to match your ball mount to your trailer and tow vehicle.",
  alternates: {
    canonical: "https://www.rvtowingcalc.com/guides/hitch-ball-selection-guide",
  },
  openGraph: {
    title: "How to Choose the Right Hitch Ball for Towing: Sizes, Ratings & Drop",
    description:
      "Complete hitch ball selection guide: ball diameter chart, weight rating by trailer class, drop vs rise calculation, and safety inspection steps.",
    url: "https://www.rvtowingcalc.com/guides/hitch-ball-selection-guide",
    images: DEFAULT_OG_IMAGES,
  },
};

const FAQS = [
  {
    q: "What size hitch ball do I need for my trailer?",
    a: "Hitch ball diameter is determined by your trailer's coupler, not by your tow vehicle. Most travel trailers use a 2\" ball. Small utility trailers and pop-up campers use 1-7/8\". Heavy travel trailers and small goosenecks use 2-5/16\". Check your coupler specification stamped on the side, or measure the ball socket diameter. Never guess. A 2\" ball in a 2-5/16\" coupler will fall off, and a 2-5/16\" ball will not fit in a 2\" coupler.",
  },
  {
    q: "What weight rating does my hitch ball need?",
    a: "Your hitch ball must be rated for AT LEAST the gross trailer weight (GTW) of your loaded trailer. So if your loaded trailer weighs 7,500 lbs, you need a ball rated 7,500 lbs or higher. Common ratings are 2,000 lbs (1-7/8\"), 3,500 lbs (2\"), 6,000 lbs (2\"), and up to 30,000 lbs (2-5/16\"). Always round up: a heavier-rated ball costs almost the same and provides a margin of safety.",
  },
  {
    q: "What is the difference between a hitch ball and a ball mount?",
    a: "A hitch ball is the round steel sphere that fits inside the trailer coupler. A ball mount (also called a hitch bar or drawbar) is the square shank that slides into your truck's hitch receiver, with a platform on top that holds the ball. The ball mount provides the drop or rise needed to level the trailer. You will need to buy both, and the ball mount's drop/rise must be matched to your specific truck and trailer height combination.",
  },
  {
    q: "How do I know if I need a drop or rise hitch ball mount?",
    a: "Measure from the ground to the top of your truck's hitch receiver opening. Then measure from the ground to the bottom of your trailer coupler when the trailer is level. The difference is your drop or rise. If the coupler is lower than the receiver, you need a drop. If higher, you need a rise. Hitches are commonly available in 2\", 4\", 6\", 8\", and 10\" drops. Most half-ton trucks towing standard travel trailers need a 4\" to 6\" drop.",
  },
  {
    q: "Can I use a 2\" ball on a 5th wheel trailer?",
    a: "No. Fifth wheel trailers connect to a gooseneck ball mounted in the truck bed, not to a bumper receiver. Fifth wheels use either a 2-5/16\" gooseneck ball (most common) or a pin box that latches into a 5th wheel hitch installed in the bed. A 2\" bumper-pull ball is not rated for typical 5th wheel pin weights (1,500 to 3,500 lbs) and the geometry is wrong for the higher, forward placement required.",
  },
  {
    q: "How often should I replace a hitch ball?",
    a: "Inspect the ball before every tow. Replace it immediately if you see any of these: surface rust that has pitted the metal, cracks, flat spots on the ball surface, deep gouges, a loose or wobbly fit on the ball mount shank, or any thread damage on the mounting stud. For typical use, a chrome or stainless steel hitch ball will last 5-10 years. Off-road or salty-environment use shortens life. Many owners replace annually as cheap insurance.",
  },
];

const BALL_DIAMETER_TABLE = [
  {
    diameter: '1-7/8"',
    commonUse: "Light utility trailers, small popup campers",
    typicalGTW: "Up to 2,000 lbs",
    ballRating: "2,000 lbs",
    examples: "Small teardrop, utility trailer, jet ski",
  },
  {
    diameter: '2"',
    commonUse: "Most travel trailers and mid-size campers",
    typicalGTW: "3,500 - 6,000 lbs (standard rating)",
    ballRating: "3,500 or 6,000 lbs",
    examples: "Travel trailer, horse trailer, car hauler",
  },
  {
    diameter: '2-5/16"',
    commonUse: "Large travel trailers and goosenecks",
    typicalGTW: "6,000 - 30,000 lbs",
    ballRating: "6,000 - 30,000 lbs",
    examples: "Heavy travel trailer, gooseneck, dump trailer",
  },
];

const RECEIVER_CLASS_TABLE = [
  {
    class: "Class I",
    receiverSize: "1-1/4\"",
    maxGTW: "2,000 lbs",
    maxTongueWeight: "200 lbs",
    typicalUse: "Small cars, crossovers, light utility trailers",
    ballDiameters: "1-7/8\"",
  },
  {
    class: "Class II",
    receiverSize: "1-1/4\"",
    maxGTW: "3,500 lbs",
    maxTongueWeight: "300 lbs",
    typicalUse: "Mid-size SUVs, minivans",
    ballDiameters: "1-7/8\" or 2\"",
  },
  {
    class: "Class III",
    receiverSize: "2\"",
    maxGTW: "6,000 - 8,000 lbs",
    maxTongueWeight: "600 - 800 lbs",
    typicalUse: "Half-ton trucks, full-size SUVs",
    ballDiameters: "2\" or 2-5/16\"",
  },
  {
    class: "Class IV",
    receiverSize: "2\"",
    maxGTW: "10,000 - 12,000 lbs",
    maxTongueWeight: "1,000 - 1,200 lbs",
    typicalUse: "Heavy half-ton, 3/4-ton trucks",
    ballDiameters: "2-5/16\"",
  },
  {
    class: "Class V",
    receiverSize: "2-1/2\"",
    maxGTW: "15,000 - 25,000 lbs",
    maxTongueWeight: "1,500 - 2,500 lbs",
    typicalUse: "1-ton trucks, dually pickups",
    ballDiameters: "2-5/16\"",
  },
];

const BALL_MOUNT_DROP_TABLE = [
  {
    truckReceiverHeight: '20" - 22"',
    trailerCouplerHeight: '24" - 26"',
    dropNeeded: "2\" drop",
    typicalRig: "Small travel trailer with mid-size SUV",
  },
  {
    truckReceiverHeight: '20" - 22"',
    trailerCouplerHeight: '26" - 28"',
    dropNeeded: "4\" drop",
    typicalRig: "Standard travel trailer with half-ton truck",
  },
  {
    truckReceiverHeight: '20" - 22"',
    trailerCouplerHeight: '28" - 30"',
    dropNeeded: "6\" drop",
    typicalRig: "Larger travel trailer with half-ton truck",
  },
  {
    truckReceiverHeight: '20" - 22"',
    trailerCouplerHeight: '30" - 32"',
    dropNeeded: "8\" drop",
    typicalRig: "Tall travel trailer with low-slung truck",
  },
  {
    truckReceiverHeight: '24" - 26"',
    trailerCouplerHeight: '24" - 26"',
    dropNeeded: "0\" (level)",
    typicalRig: "Lifted truck with standard trailer",
  },
];

export default function HitchBallSelectionGuidePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <FaqJsonLd
        faqs={FAQS}
        baseUrl="https://www.rvtowingcalc.com/guides/hitch-ball-selection-guide"
      />
      <ArticleJsonLd
        title="How to Choose the Right Hitch Ball for Towing: Sizes, Ratings & Drop"
        description="Complete hitch ball selection guide: ball diameter chart, weight rating by trailer class, drop vs rise calculation, and safety inspection steps."
        url="https://www.rvtowingcalc.com/guides/hitch-ball-selection-guide"
        datePublished="2026-08-20"
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
        <span className="text-gray-900">Hitch Ball Selection</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
        How to Choose the Right Hitch Ball for Towing: The Complete Selection Guide
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        A hitch ball is the single most important connection between your tow
        vehicle and your trailer. Get it wrong and the trailer disconnects. Get
        it right and you never think about it. This guide walks you through
        every choice: ball diameter, weight rating, drop vs rise, materials,
        and how to inspect your setup before every trip.
      </p>

      {/* Why hitch ball selection matters */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          Why Hitch Ball Selection Is Not Optional
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
              Every year, NHTSA receives hundreds of reports of trailer
              separations at the coupler. The most common cause is a hitch
              ball mismatch: wrong diameter, insufficient weight rating, or a
              worn ball that no longer holds the coupler latch securely. Unlike
              many towing failures that build up gradually, a ball mismatch
              fails catastrophically and instantly.
            </p>
          <p>
              The good news: choosing the right hitch ball is straightforward.
              You only need to answer three questions:
            </p>
          <ul className="ml-6 list-disc space-y-2">
            <li>
                <strong>What diameter does my trailer coupler require?</strong>
                {" "}This is fixed by the coupler manufacturer and is stamped
                on the side of the coupler.
              </li>
            <li>
                <strong>What is my loaded trailer&apos;s gross trailer weight
                (GTW)?</strong>{" "}Your hitch ball must be rated for at least
                that weight.
              </li>
            <li>
                <strong>What drop or rise do I need?</strong> This is the
                height adjustment required to keep your trailer level when
                hitched.
              </li>
          </ul>
          <div className="rounded-xl border-l-4 border-danger-500 bg-danger-50 p-4">
            <p className="text-sm text-danger-700">
              <strong>Safety warning:</strong> Never use a hitch ball that is
              even slightly mismatched in diameter, even if the coupler latch
              appears to engage. The ball must fit the coupler with zero
              slop. A 2&quot; ball in a 2-5/16&quot; coupler will pop out on
              the first bump. A 2-5/16&quot; ball will not fit at all in a
              2&quot; coupler.
            </p>
          </div>
        </div>
      </section>

      {/* Step 1: Ball diameter */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          Step 1: Match the Ball Diameter to Your Coupler
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
              The trailer coupler is the female socket on the front of the
              trailer that clamps around the hitch ball. Couplers are made in
              three standard sizes for light and medium-duty towing:
            </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-gray-300 bg-gray-50">
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Ball Diameter
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Common Use
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Typical GTW Range
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Typical Ball Rating
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {BALL_DIAMETER_TABLE.map((row) => (
                  <tr key={row.diameter}>
                    <td className="px-4 py-3 font-medium text-gray-700">
                      {row.diameter}
                    </td>
                    <td className="px-4 py-3 text-gray-600">
                      {row.commonUse}
                    </td>
                    <td className="px-4 py-3 text-gray-600">
                      {row.typicalGTW}
                    </td>
                    <td className="px-4 py-3 text-gray-600">
                      {row.ballRating}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
              How to find your coupler&apos;s diameter:
            </p>
          <ol className="ml-6 list-decimal space-y-2">
            <li>
                Look for a stamp or label on the coupler body. Most couplers
                have the size cast into the metal or printed on a sticker.
              </li>
            <li>
                Measure the inside opening of the coupler with calipers.
                Measure the diameter of the circular socket.
              </li>
            <li>
                Check your trailer&apos;s owner manual or manufacturer
                specification sheet.
              </li>
            <li>
                When in doubt, ask the dealer who sold you the trailer.
              </li>
          </ol>
          <div className="rounded-xl border-l-4 border-brand-500 bg-brand-50 p-4">
            <p className="text-sm text-brand-700">
              <strong>Pro tip:</strong> Take a photo of your coupler stamp
              and keep it on your phone. When you walk into a hitch shop, you
              will know exactly what size to ask for. This prevents the most
              common mistake: the dealer sells you whatever 2&quot; ball they
              have in stock without checking the coupler.
            </p>
          </div>
        </div>
      </section>

      {/* Step 2: Weight rating */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          Step 2: Match the Ball Rating to Your Trailer&apos;s Loaded Weight
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
              Hitch balls are rated for maximum gross trailer weight. The
              ball rating must equal or exceed the heaviest weight you will
              ever tow. For an RV, that means the loaded weight of the
              trailer, not the dry weight.
            </p>
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-5">
            <h3 className="font-semibold text-gray-900">Real-World Example</h3>
            <p className="mt-2 text-sm">
              A travel trailer with a dry weight of 5,800 lbs typically
              weighs 7,000 to 7,500 lbs when fully loaded with water, propane,
              gear, and food. Add another 500 lbs for a generator, bikes, and
              firewood. Your hitch ball must be rated for at least 8,000 lbs.
              {" "}<strong>A 6,000 lb ball is undersized and unsafe.</strong>
            </p>
          </div>
          <p>
              The ball rating is stamped on the top of the ball or printed on
              the packaging. Look for a number followed by &quot;LB&quot; or
              &quot;lbs.&quot; If you cannot find a rating, do not use the
              ball. Replace it.
            </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-gray-300 bg-gray-50">
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Hitch Class
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Receiver Size
                  </th>
                  <th className="px-4 py-3 text-right font-semibold text-gray-900">
                    Max GTW
                  </th>
                  <th className="px-4 py-3 text-right font-semibold text-gray-900">
                    Max Tongue
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Typical Ball Sizes
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {RECEIVER_CLASS_TABLE.map((row) => (
                  <tr key={row.class}>
                    <td className="px-4 py-3 font-medium text-gray-700">
                      {row.class}
                    </td>
                    <td className="px-4 py-3 text-gray-600">
                      {row.receiverSize}
                    </td>
                    <td className="px-4 py-3 text-right text-gray-600">
                      {row.maxGTW}
                    </td>
                    <td className="px-4 py-3 text-right text-gray-600">
                      {row.maxTongueWeight}
                    </td>
                    <td className="px-4 py-3 text-gray-600">
                      {row.ballDiameters}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
              Your ball must be rated for at least the same GTW as your
              hitch receiver. So a Class III receiver rated 6,000 lbs GTW
              requires a 6,000+ lb ball. Going with a smaller ball is the
              most dangerous undersizing mistake.
            </p>
        </div>
      </section>

      {/* Step 3: Drop or rise */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          Step 3: Choose the Right Drop or Rise
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
              A ball mount is the square bar that slides into your hitch
              receiver. It holds the hitch ball at the correct height so your
              trailer rides level when hitched. An unlevel trailer tows
              poorly and can cause tire wear, suspension problems, and
              trailer sway.
            </p>
          <p>
              To find your drop or rise, you need two measurements:
            </p>
          <ol className="ml-6 list-decimal space-y-2">
            <li>
                <strong>Hitch height:</strong> With the truck parked on
                level ground, measure from the ground to the top inside
                surface of the hitch receiver opening.
              </li>
            <li>
                <strong>Coupler height:</strong> With the trailer parked on
                level ground (not hitched), measure from the ground to the
                bottom of the coupler when the trailer is level.
              </li>
          </ol>
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-5">
            <h3 className="font-semibold text-gray-900">The Formula</h3>
            <p className="mt-2 text-sm">
              <strong>Drop = Coupler Height - Hitch Height</strong>{" "}
              (when coupler is higher than receiver).
            </p>
            <p className="mt-2 text-sm">
              If the answer is positive, you need a drop ball mount. If the
              coupler is lower than the receiver, you need a rise ball
              mount.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-gray-300 bg-gray-50">
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Truck Receiver Height
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Trailer Coupler Height
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Drop Needed
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Typical Rig
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {BALL_MOUNT_DROP_TABLE.map((row) => (
                  <tr key={`${row.truckReceiverHeight}-${row.trailerCouplerHeight}`}>
                    <td className="px-4 py-3 text-gray-600">
                      {row.truckReceiverHeight}
                    </td>
                    <td className="px-4 py-3 text-gray-600">
                      {row.trailerCouplerHeight}
                    </td>
                    <td className="px-4 py-3 font-medium text-gray-700">
                      {row.dropNeeded}
                    </td>
                    <td className="px-4 py-3 text-gray-600">
                      {row.typicalRig}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
              Common ball mount drops are 2&quot;, 4&quot;, 6&quot;, 8&quot;,
              and 10&quot;. If your calculation falls between sizes, round up.
              An adjustable ball mount lets you fine-tune height with a
              series of holes or a sliding mechanism. Adjustable mounts cost
              more ($80 to $200) but eliminate the need to buy multiple fixed
              drops if you tow different trailers.
            </p>
        </div>
      </section>

      {/* Step 4: Materials and construction */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          Step 4: Choose the Right Material and Finish
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
              Hitch balls are made from forged steel with a chrome, stainless
              steel, or zinc-plated finish. For most RV owners, the choice is
              straightforward:
            </p>
          <ul className="ml-6 list-disc space-y-2">
            <li>
                <strong>Chrome-plated steel:</strong> The most common and
                least expensive. Resistant to rust in normal conditions. Will
                pit and corrode if used in salty environments (beach,
                winter road salt) without regular cleaning.
              </li>
            <li>
                <strong>Stainless steel:</strong> More expensive ($30 to $80)
                but corrosion-resistant. Best for coastal or salt-belt
                regions. Stainless steel is softer than chrome steel, so it
                wears faster with heavy use.
              </li>
            <li>
                <strong>Nickel-plated steel:</strong> A middle-ground option
                with better corrosion resistance than chrome at a similar
                price point.
              </li>
          </ul>
          <p>
              For ball mounts, forged steel is the standard. Avoid cast
              metal ball mounts for heavy towing: cast parts can crack under
              shock loads.
            </p>
        </div>
      </section>

      {/* Pre-tow inspection */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          Pre-Tow Hitch Ball Inspection Checklist
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
              Inspect the hitch ball and ball mount before every trip. The
              check takes 60 seconds and can prevent a tow-away incident.
          </p>
          <div className="space-y-3">
            <div className="rounded-lg border border-gray-200 p-4">
              <h3 className="font-semibold text-brand-700">
                1. Visual Inspection of the Ball
              </h3>
              <p className="mt-2 text-sm">
                Look for pitting, cracks, flat spots, or deep gouges on the
                ball surface. A pitted or rusted ball can prevent the coupler
                latch from seating fully. Replace if any surface damage is
                visible.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 p-4">
              <h3 className="font-semibold text-brand-700">
                2. Check Ball Mount Tightness
              </h3>
              <p className="mt-2 text-sm">
                Grab the ball and try to twist or rock it on the mount. Any
                movement means the nut is loose or the threads are stripped.
                Torque the nut to manufacturer spec (typically 200-450 ft-lbs
                depending on size).
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 p-4">
              <h3 className="font-semibold text-brand-700">
                3. Verify Hitch Pin and Clip
              </h3>
              <p className="mt-2 text-sm">
                The ball mount must be locked into the receiver with a hitch
                pin. A clip or padlock must secure the pin so it cannot
                vibrate out. Never rely on the pin alone without a clip.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 p-4">
              <h3 className="font-semibold text-brand-700">
                4. Confirm Coupler Latch Engagement
              </h3>
              <p className="mt-2 text-sm">
                After lowering the trailer onto the ball, the coupler latch
                must snap closed with an audible click. Insert the safety
                pin or lock through the latch. Then raise the trailer with
                the tongue jack to verify the trailer cannot fall off the
                ball.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 p-4">
              <h3 className="font-semibold text-brand-700">
                5. Re-torque After 50 Miles
              </h3>
              <p className="mt-2 text-sm">
                New installations and any time you change the ball, stop
                after 50 miles and re-torque the ball nut. Settling and
                vibration can loosen the nut on the first trip.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Common mistakes */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          Common Hitch Ball Mistakes and How to Avoid Them
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <div className="rounded-xl border-l-4 border-danger-500 bg-danger-50 p-5">
            <h3 className="font-semibold text-danger-700">
              Mistake 1: Using a Ball That is Just Barely Rated
            </h3>
            <p className="mt-2 text-sm text-danger-700">
              <strong>Symptom:</strong> A 6,000 lb ball on a 5,800 lb
              loaded trailer. <strong>Problem:</strong> Shock loads from
              bumps, expansion joints, and emergency braking can exceed
              6,000 lbs momentarily. <strong>Fix:</strong> Choose a ball
              rated at least 25% above your loaded trailer weight for a
              safety margin.
            </p>
          </div>
          <div className="rounded-xl border-l-4 border-danger-500 bg-danger-50 p-5">
            <h3 className="font-semibold text-danger-700">
              Mistake 2: Mixing Up the Ball Size
            </h3>
            <p className="mt-2 text-sm text-danger-700">
              <strong>Symptom:</strong> Swapping trailers without checking
              the coupler size. A 2&quot; ball in a 2-5/16&quot; coupler will
              fall off. <strong>Fix:</strong> Mark your ball mount with the
              diameter, or carry color-coded balls (e.g., red for 2&quot;,
              blue for 2-5/16&quot;). Always check before hitching.
            </p>
          </div>
          <div className="rounded-xl border-l-4 border-warning-500 bg-warning-50 p-5">
            <h3 className="font-semibold text-warning-700">
              Mistake 3: Undersized Drop
            </h3>
            <p className="mt-2 text-sm text-warning-700">
              <strong>Symptom:</strong> Trailer nose points upward when
              hitched. <strong>Problem:</strong> Concentrates tongue weight
              on the rear of the trailer, causes sway and instability.{" "}
              <strong>Fix:</strong> Measure carefully and choose the next
              larger drop size. Adjustable mounts solve the problem
              permanently.
            </p>
          </div>
          <div className="rounded-xl border-l-4 border-warning-500 bg-warning-50 p-5">
            <h3 className="font-semibold text-warning-700">
              Mistake 4: Ignoring Rust and Pitting
            </h3>
            <p className="mt-2 text-sm text-warning-700">
              <strong>Symptom:</strong> Ball surface has visible orange rust,
              flaky chrome, or pitting. <strong>Problem:</strong> A pitted
              ball prevents the coupler latch from closing properly, and the
              surface roughness can wear the coupler.{" "}
              <strong>Fix:</strong> Replace the ball. Cost is $20 to $60.
              Not worth the risk.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-12 rounded-2xl bg-brand-600 p-8 text-center text-white">
        <h2 className="text-2xl font-bold">
          Verify Your Full Towing Setup
        </h2>
        <p className="mt-2 text-brand-100">
          The right hitch ball is one part of safe towing. Run your full
          setup through our free calculators to make sure every number
          checks out.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link
            href="/tongue-weight-calculator"
            className="inline-block rounded-xl bg-white px-6 py-3 text-sm font-bold text-brand-700 shadow-lg transition-all hover:bg-brand-50 active:scale-[0.99]"
          >
            Tongue Weight Calculator
          </Link>
          <Link
            href="/payload-calculator"
            className="inline-block rounded-xl bg-white px-6 py-3 text-sm font-bold text-brand-700 shadow-lg transition-all hover:bg-brand-50 active:scale-[0.99]"
          >
            Payload Calculator
          </Link>
          <Link
            href="/towing-capacity-calculator"
            className="inline-block rounded-xl bg-white px-6 py-3 text-sm font-bold text-brand-700 shadow-lg transition-all hover:bg-brand-50 active:scale-[0.99]"
          >
            Towing Capacity Calculator
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
              href="/guides/weight-distribution-hitch-setup"
              className="text-brand-600 hover:underline"
            >
              Weight Distribution Hitch Setup: Step-by-Step Guide
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
              href="/guides/trailer-brake-controller-setup"
              className="text-brand-600 hover:underline"
            >
              Trailer Brake Controller Setup: Installation &amp; Adjustment
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
              href="https://www.etrailer.com/faq-hitch-ball-sizing.aspx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 hover:underline"
            >
              How to Determine the Correct Hitch Ball Size
            </a>{" "}
            &mdash; etrailer.com
          </li>
          <li>
            <a
              href="https://www.curtgroup.com/hitch-balls"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 hover:underline"
            >
              CURT Hitch Ball Selection Guide
            </a>{" "}
            &mdash; curtgroup.com
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
          <li>
            <a
              href="https://www.ford.com/support/towing-calculator/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 hover:underline"
            >
              Ford Towing Guide
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
              RAM Towing Guide
            </a>{" "}
            &mdash; ramtrucks.com
          </li>
        </ul>
      </section>
    </div>
  );
}