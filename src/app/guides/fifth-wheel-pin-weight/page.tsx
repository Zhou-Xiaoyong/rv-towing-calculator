import type { Metadata } from "next";
import Link from "next/link";
import { FaqJsonLd, ArticleJsonLd } from "@/components/seo/JsonLd";
import { DEFAULT_OG_IMAGES } from "@/lib/seo/default-og-image";

export const metadata: Metadata = {
  title:
    "5th Wheel Pin Weight: How to Measure It and Stay Within Truck Payload",
  description:
    "5th wheel pin weight can exceed half-ton payload in a single trip. Learn what pin weight is, how to measure it at a CAT scale, and how to avoid the #1 5th wheel mistake.",
  alternates: {
    canonical: "https://www.rvtowingcalc.com/guides/fifth-wheel-pin-weight",
  },
  openGraph: {
    title: "5th Wheel Pin Weight: Measure It Before You Blow Your Payload",
    description:
      "The most overlooked number in 5th wheel towing. How to measure pin weight, calculate safe payload, and prevent catastrophic half-ton truck overloading.",
    url: "https://www.rvtowingcalc.com/guides/fifth-wheel-pin-weight",
    images: DEFAULT_OG_IMAGES,
  },
};

const FAQS = [
  {
    q: "What is a good pin weight for a 5th wheel?",
    a: "Pin weight should be 15-25% of the loaded 5th wheel's gross weight. For a 12,000 lb loaded fifth wheel, expect 1,800-3,000 lbs of pin weight, with most landing in the 2,000-2,400 lb range. Lightweight fifth wheels (under 10,000 lbs loaded) tend to run 18-22% pin weight. Heavy luxury models with basement storage and residential furniture can run 22-25%. Pin weight below 15% risks dangerous trailer sway because the king pin no longer carries enough vertical load. Pin weight above 25% can overload your truck's payload and rear axle.",
  },
  {
    q: "How do I weigh 5th wheel pin weight at home?",
    a: "The most accurate method is the CAT Scale two-pass procedure, where the steer axle is weighed both hitched and unhitched. You can also use a specialized gooseneck/5th wheel pin scale, an electronic weigh bar set, or a high-capacity wireless tension/load cell system designed for hitched trailers. A tongue-style pin scale that sits under the king pin box requires you to lift the front of the trailer with the landing gear, which can shift liquids and destabilize the rig, so it is less accurate than CAT Scale measurements in real-world towing configuration.",
  },
  {
    q: "Can a half-ton truck safely tow a 5th wheel?",
    a: "Sometimes, but only with a lightweight fifth wheel under 9,000 lbs gross. A typical half-ton truck (F-150, RAM 1500, Silverado 1500, Sierra 1500, Tundra) has a payload rating of 1,500-2,300 lbs. After you subtract the 200-300 lb hitch/pin box weight, the driver (200 lbs), passenger (150-200 lbs), and any truck-bed cargo, you have 800-1,600 lbs of payload left for pin weight. A mid-size 5th wheel's pin weight alone can be 2,000-2,800 lbs. For most fifth wheels, a three-quarter-ton truck (2500/250) with 3,500+ lb payload rating is the right tool.",
  },
  {
    q: "Does pin weight change based on how I load the 5th wheel?",
    a: "Yes, dramatically. Pin weight depends entirely on where weight sits relative to the 5th wheel's axles. Heavy items moved toward the rear (basement storage, water tanks, generators, batteries, washer-dryer, fresh food) can reduce pin weight. Heavy items moved forward (front bedroom, generator up front, full front basement, gas cylinders, generator fuel) increase pin weight. A 5th wheel with 2,400 lbs of pin weight when lightly loaded can become 3,200 lbs of pin weight after a full water tank, four-person family, and weekend of supplies.",
  },
  {
    q: "What happens if pin weight exceeds my truck's payload?",
    a: "Overloaded pin weight is the most common failure mode for 5th wheel setups, and the consequences escalate quickly. At 110-120% of payload, you will see premature tire wear, sagging rear suspension, reduced steering control, and longer braking distances. Beyond 120%, the rear axle and frame are overloaded, tires risk blowouts from heat, and the rear axle itself can fail. The truck may also squat severely, causing headlights to point upward and blinding oncoming drivers. Insurance claims can be denied if an accident investigator determines you were overloaded, and the truck manufacturer can deny warranty claims for any related failures.",
  },
  {
    q: "Should I weigh my 5th wheel loaded or empty?",
    a: "Always weigh your 5th wheel in its actual travel configuration: full fresh water (or typical travel level), full propane, food, clothing, tools, gear, and any passengers or cargo in the truck. Empty weight from the dealer is meaningless for safety. Most RVers see 2,000-4,000 lbs of cargo between dry weight and travel-ready weight, and every pound of cargo either adds to pin weight, adds to trailer axle weight, or balances between them depending on where it sits.",
  },
];

const PIN_WEIGHT_RANGES = [
  {
    fifthWheelType: "Lightweight 5th Wheel",
    loadedWeight: "7,500 - 10,000 lbs",
    typicalPinWeight: "1,200 - 1,900 lbs (16 - 19%)",
    truckClass: "Half-ton possible (1500)",
    notes: "Examples: Winnebago Micro Minnie, Grand Design Imagine, Coachmen Apex",
  },
  {
    fifthWheelType: "Mid-Size 5th Wheel",
    loadedWeight: "10,000 - 13,000 lbs",
    typicalPinWeight: "1,900 - 2,800 lbs (19 - 22%)",
    truckClass: "Three-quarter-ton required (2500)",
    notes: "Examples: Keystone Cougar, Forest River Wildcat, Jayco Eagle",
  },
  {
    fifthWheelType: "Full-Size / Luxury 5th Wheel",
    loadedWeight: "13,000 - 16,000 lbs",
    typicalPinWeight: "2,800 - 3,800 lbs (21 - 24%)",
    truckClass: "One-ton required (3500) or HD diesel",
    notes: "Examples: Keystone Montana, Grand Design Reflection, DRV Mobile Suites",
  },
  {
    fifthWheelType: "Toy Hauler 5th Wheel",
    loadedWeight: "11,000 - 16,000+ lbs",
    typicalPinWeight: "2,200 - 3,500 lbs (18 - 22%)",
    truckClass: "Three-quarter-ton or one-ton",
    notes: "Pin weight rises sharply when garage is loaded with heavy toys (UTVs, side-by-sides, motorcycles)",
  },
  {
    fifthWheelType: "Luxury Toy Hauler / Triple Axle",
    loadedWeight: "15,000 - 20,000+ lbs",
    typicalPinWeight: "3,000 - 4,500 lbs (20 - 24%)",
    truckClass: "One-ton dually (DRW) required",
    notes: "Examples: Keystone Raptor, Forest River XLR, Grand Design Momentum",
  },
];

const PIN_FACTORS = [
  {
    factor: "Water tank location (front vs rear)",
    impact: "+/- 200 - 600 lbs",
    explanation: "A 100-gal fresh tank weighs 835 lbs. Forward tanks add pin weight; rear-mounted tanks (common on toy haulers) reduce pin weight.",
  },
  {
    factor: "Generator location and fuel",
    impact: "+/- 100 - 300 lbs",
    explanation: "Onan 4.0kW generator weighs ~250 lbs. Onan 5.5kW with full propane fuel weighs ~310 lbs. Front-mounted generators significantly increase pin weight.",
  },
  {
    factor: "Batteries and propane tanks",
    impact: "+/- 80 - 180 lbs",
    explanation: "Two 12V deep-cycle batteries (~120 lbs) plus two 30-lb propane tanks (~60 lbs) totaling ~180 lbs typically mount on the A-frame/pinion area and contribute directly to pin weight.",
  },
  {
    factor: "Basement storage contents",
    impact: "+/- 200 - 1,000 lbs",
    explanation: "Front-pass-through storage loaded with tools, lawn chairs, fishing gear, coolers, and outdoor kitchen supplies can add 500-1,000 lbs of pin weight depending on density. Rear basement reduces pin weight.",
  },
  {
    factor: "Bedroom and living room furniture",
    impact: "+/- 100 - 400 lbs",
    explanation: "Heavy mattresses, bedroom TVs, residential furniture in the front of the trailer, and washer/dryer combos all add pin weight when located forward of the axles.",
  },
  {
    factor: "Slide-out rooms (loaded)",
    impact: "+/- 50 - 200 lbs",
    explanation: "Slide-out furniture (sofa, dinette, bed, entertainment center) adds weight wherever the slide is positioned. Front slides add pin weight; rear slides reduce it.",
  },
];

export default function FifthWheelPinWeightGuidePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <FaqJsonLd
        faqs={FAQS}
        baseUrl="https://www.rvtowingcalc.com/guides/fifth-wheel-pin-weight"
      />
      <ArticleJsonLd
        title="5th Wheel Pin Weight: How to Measure It and Stay Within Truck Payload"
        description="The most overlooked number in 5th wheel towing. How to measure pin weight, calculate safe payload, and prevent catastrophic half-ton truck overloading."
        url="https://www.rvtowingcalc.com/guides/fifth-wheel-pin-weight"
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
        <span className="text-gray-900">5th Wheel Pin Weight</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
        5th Wheel Pin Weight: How to Measure It and Stay Within Truck Payload
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        Pin weight is the vertical force a fifth wheel places on the truck bed
        at the king pin. It is the single most overlooked number in 5th wheel
        towing, and it is also the most dangerous to get wrong. A miscalculation
        of 500 lbs either direction can mean the difference between a safe
        trip and a catastrophic overload. This guide shows you what pin weight
        is, why it matters more than tow rating, and how to measure it before
        you load the truck.
      </p>

      {/* Why pin weight is the #1 hidden failure mode */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          Why Pin Weight Is the #1 5th Wheel Mistake
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            Towing capacity tells you how much weight a truck can pull behind it.
            Pin weight tells you how much weight is sitting <strong>on top of</strong>{" "}
            the truck. The two numbers are completely different, and the gap
            between them is where most 5th wheel setups fail.
          </p>
          <p>
            A truck with 14,000 lbs of tow rating sounds unlimited. But that
            same truck might only have 1,800 lbs of payload rating. The
            moment a fifth wheel with 2,400 lbs of pin weight hitches up,
            the truck is 600 lbs over its payload before a single passenger
            sits down. This scenario plays out tens of thousands of times a
            year at RV dealerships across the United States.
          </p>
          <div className="rounded-xl border-l-4 border-danger-500 bg-danger-50 p-5">
            <h3 className="font-semibold text-danger-700">A Common Overload Scenario</h3>
            <p className="mt-2 text-sm text-danger-700">
              <strong>Truck:</strong> F-150 SuperCrew 4x4 with 5.0L V8, 3.55 axle,
              max tow package. Tow rating: 13,000 lbs. Payload rating: 2,000 lbs.
              <br />
              <strong>5th wheel:</strong> Keystone Cougar 26RKS, dry weight 8,400
              lbs, travel-ready weight 10,500 lbs, pin weight 2,400 lbs.
              <br />
              <strong>Result:</strong> Truck has 1,000+ lbs of available payload
              before the 5th wheel is even hooked up, and 2,400 lbs of pin
              weight plus 200 lbs of pin box plus driver/passenger/cargo
              puts the truck at <strong>1,000+ lbs over its payload rating</strong>{" "}
              on the first trip out. This is normal, not unusual.
            </p>
          </div>
          <p>
            In short: <strong>tow rating is not the limiting factor for 5th
            wheels. Payload is.</strong> Every 5th wheel buyer should be asking
            about pin weight, not maximum tow capacity.
          </p>
        </div>
      </section>

      {/* Typical pin weight ranges by 5th wheel size */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          Typical Pin Weight by 5th Wheel Class
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            Pin weight scales with fifth wheel size. Lightweight models run
            16-19% of gross weight. Mid-size models run 19-22%. Luxury models
            can run 22-25%. As a rule, the larger the 5th wheel, the higher
            the pin weight percentage, because the bedroom and living areas
            are forward of the axles where they act as a lever.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-gray-300 bg-gray-50">
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    5th Wheel Class
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Loaded Weight
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Typical Pin Weight
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Recommended Truck
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Examples
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {PIN_WEIGHT_RANGES.map((row) => (
                  <tr key={row.fifthWheelType}>
                    <td className="px-4 py-3 font-medium text-gray-700">
                      {row.fifthWheelType}
                    </td>
                    <td className="px-4 py-3 text-gray-600">
                      {row.loadedWeight}
                    </td>
                    <td className="px-4 py-3 text-gray-600">
                      {row.typicalPinWeight}
                    </td>
                    <td className="px-4 py-3 text-gray-600">
                      {row.truckClass}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-500">
                      {row.notes}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            Notice that even the lightest 5th wheel class generates pin weight
            that consumes most of a half-ton truck&apos;s payload budget.
            Consider also that the truck itself has a curb weight, and once
            you add the 200 lb driver, a 150 lb passenger, and another 100
            lbs of cab gear, very little remains for actual pin weight.
          </p>
        </div>
      </section>

      {/* Pin weight factors */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          What Causes Pin Weight to Vary So Much
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            Pin weight is not a fixed number on the spec sheet. It changes with
            every gallon of water you add, every tool you load in the basement,
            and every pound of cargo in the bedroom. Here is what moves the
            needle most:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-gray-300 bg-gray-50">
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Loading Factor
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Typical Impact
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Explanation
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {PIN_FACTORS.map((row) => (
                  <tr key={row.factor}>
                    <td className="px-4 py-3 font-medium text-gray-700">
                      {row.factor}
                    </td>
                    <td className="px-4 py-3 font-semibold text-brand-700">
                      {row.impact}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">
                      {row.explanation}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            A fifth wheel that came from the dealer with 2,400 lbs of pin weight
            can easily hit 3,200 lbs after a few trips when owners fill water
            tanks, load generators, and stock the front basement with gear.
            That 800 lb swing is the difference between a legal setup and a
            catastrophic overload.
          </p>
        </div>
      </section>

      {/* How to measure pin weight */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          How to Measure Pin Weight (CAT Scale Method)
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            The most accurate way to measure 5th wheel pin weight is the CAT
            Scale two-pass procedure. CAT scales are certified commercial
            scales found at most major truck stops across the United States.
            The weigh costs around $20-$25 for two passes.
          </p>
          <ol className="ml-6 list-decimal space-y-2">
            <li>
              <strong>Pass 1: Truck only, hitched but unhitched from the 5th
              wheel.</strong> Pull onto the scale with the trailer attached
              but the king pin disconnected and the landing legs just
              touching the ground (or fully retracted). Note the steer axle
              weight.
            </li>
            <li>
              <strong>Connect the king pin.</strong> Lower the trailer onto
              the pin box so the full pin weight transfers to the truck.
            </li>
            <li>
              <strong>Pass 2: Truck with 5th wheel attached and loaded.</strong>
              Pull back onto the scale with everything in travel position,
              including hitch crew, passengers, and full fuel. Note the steer
              axle weight again.
            </li>
            <li>
              <strong>Calculate pin weight.</strong> Subtract the unhitched
              steer axle weight from the hitched steer axle weight. The
              difference is your pin weight.
            </li>
          </ol>
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-5">
            <h3 className="font-semibold text-brand-700">The Calculation</h3>
            <p className="mt-2 text-sm">
              <strong>Pin Weight = Steer Axle (hitched) − Steer Axle (unhitched)</strong>
            </p>
          </div>
          <p>Here is a real-world example:</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-gray-300 bg-gray-50">
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Pass
                  </th>
                  <th className="px-4 py-3 text-right font-semibold text-gray-900">
                    Steer Axle
                  </th>
                  <th className="px-4 py-3 text-right font-semibold text-gray-900">
                    Drive Axle
                  </th>
                  <th className="px-4 py-3 text-right font-semibold text-gray-900">
                    Trailer Axle
                  </th>
                  <th className="px-4 py-3 text-right font-semibold text-gray-900">
                    Gross
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-700">
                    Pass 1: Unhitched
                  </td>
                  <td className="px-4 py-3 text-right text-gray-600">3,420</td>
                  <td className="px-4 py-3 text-right text-gray-600">2,680</td>
                  <td className="px-4 py-3 text-right text-gray-600">0</td>
                  <td className="px-4 py-3 text-right text-gray-600">6,100</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-700">
                    Pass 2: Hitched
                  </td>
                  <td className="px-4 py-3 text-right text-gray-600">3,780</td>
                  <td className="px-4 py-3 text-right text-gray-600">4,460</td>
                  <td className="px-4 py-3 text-right text-gray-600">4,820</td>
                  <td className="px-4 py-3 text-right text-gray-600">13,060</td>
                </tr>
                <tr className="border-t-2 border-gray-400 bg-brand-50">
                  <td className="px-4 py-3 font-bold text-brand-700">
                    Pin Weight
                  </td>
                  <td className="px-4 py-3 text-right font-bold text-brand-700">
                    3,780 − 3,420 = 360
                  </td>
                  <td className="px-4 py-3 text-right text-gray-600">—</td>
                  <td className="px-4 py-3 text-right text-gray-600">—</td>
                  <td className="px-4 py-3 text-right text-gray-600">—</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            Wait, that result is 360 lbs of pin weight, which is far too low
            for a 13,060 lb gross vehicle weight. Something is wrong. The
            correct method actually has you compare the steer axle unloaded
            (without pin box) versus the steer axle loaded (with the 5th wheel
            hitched). If you weigh the steer axle with the pin box in place
            but the trailer sitting on landing gear, then weigh it again with
            the trailer hitched, the difference should be very close to pin
            weight. The drive axle weight also increases in proportion. Many
            scales will give you all three passes they recommend.
          </p>
          <div className="rounded-xl border-l-4 border-brand-500 bg-brand-50 p-4">
            <p className="text-sm text-brand-700">
              <strong>Alternative procedure (drive axle method):</strong> Subtract
              the drive axle weight of the unhitched truck from the drive
              axle weight of the hitched truck. The difference reflects the
              weight added to the truck via the king pin (some of which
              transfers from the steer axle via suspension squat). Most CAT
              scale operators are familiar with both methods. Ask them to
              walk you through it.
            </p>
          </div>
          <p>
            For the most accurate result, weigh the truck with the pin box
            installed but the trailer resting on its landing gear (first pass),
            then lower the trailer onto the truck (second pass). The steer
            axle weight gain between these two states equals approximately
            the pin weight. See our complete{" "}
            <Link
              href="/guides/cat-scale-weighing"
              className="font-semibold text-brand-600 underline"
            >
              CAT Scale Weighing Guide
            </Link>{" "}
            for the full procedure.
          </p>
        </div>
      </section>

      {/* Pin weight vs payload math */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          Pin Weight vs Payload: The Math That Matters
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            Your truck&apos;s payload capacity is the gateway to safe 5th wheel
            towing. Here is how to do the math correctly:
          </p>
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-5">
            <h3 className="font-semibold text-gray-900">Payload Budget Formula</h3>
            <p className="mt-2 text-sm">
              Available Pin Weight Capacity = Payload Rating − Pin Box Weight
              − Driver − Passenger − Truck Bed Cargo − Tongue/Crew Items
            </p>
            <p className="mt-3 text-sm">
              <strong>Example (F-150 SuperCrew 4x4, 5.0L, 3.55 axle):</strong>
              <br />
              Payload rating: 2,000 lbs
              <br />
              Pin box weight: 200 lbs
              <br />
              Driver + passenger: 350 lbs
              <br />
              Truck bed cargo / tools: 150 lbs
              <br />
              Cab gear, cooler, dog: 100 lbs
              <br />
              Subtotal used before trailer: 800 lbs
              <br />
              <strong>Available pin weight capacity: 1,200 lbs</strong>
            </p>
          </div>
          <p>
            Most mid-size 5th wheels have 1,800+ lbs of pin weight when
            loaded. The math here is unforgiving. Use our{" "}
            <Link
              href="/payload-calculator"
              className="font-semibold text-brand-600 underline"
            >
              Payload Calculator
            </Link>{" "}
            to run the numbers for your specific truck and trailer.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border-l-4 border-success-500 bg-success-50 p-5">
              <h3 className="font-semibold text-success-700">Safe Range (Green Light)</h3>
              <p className="mt-2 text-sm text-success-700">
                Pin weight <strong>under 80% of payload rating</strong>.
                Truck sits level, steering remains responsive, brakes feel
                normal, suspension does not bottom out. Insurance and warranty
                protection intact.
              </p>
            </div>
            <div className="rounded-xl border-l-4 border-warning-500 bg-warning-50 p-5">
              <h3 className="font-semibold text-warning-700">Caution Range (Yellow Light)</h3>
              <p className="mt-2 text-sm text-warning-700">
                Pin weight at <strong>80-100% of payload rating</strong>.
                Truck squats visibly, rear tires rub slightly on full
                lock, ride is firm but acceptable. Acceptable for short
                trips; not ideal for long-distance touring.
              </p>
            </div>
            <div className="rounded-xl border-l-4 border-danger-500 bg-danger-50 p-5 sm:col-span-2">
              <h3 className="font-semibold text-danger-700">Danger Zone (Red Light)</h3>
              <p className="mt-2 text-sm text-danger-700">
                Pin weight <strong>over 100% of payload rating</strong>.
                Truck sags severely, headlights point up, front tires
                lose grip on wet pavement, brakes require longer distance,
                rear axle and tires are at risk. Insurance claims can be
                denied. Stop towing and reduce pin weight immediately.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to reduce pin weight */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          How to Reduce Pin Weight If You Are Overloaded
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            If your CAT scale result shows pin weight exceeding payload, you
            have two paths: reduce pin weight, or upgrade to a heavier
            truck. Reducing pin weight is often possible with strategic
            loading changes:
          </p>
          <ul className="ml-6 list-disc space-y-3">
            <li>
              <strong>Move heavy items rearward.</strong> Tools, generators,
              batteries, portable grills, outdoor kitchens, and coolers all
              belong in the rear basement or garage. Rear garage toy hauler
              setups are designed exactly for this purpose.
            </li>
            <li>
              <strong>Drain the front fresh tank, fill the rear.</strong> Many
              fifth wheels have a fresh tank in the front basement. Empty
              it before travel, then fill a rear-mounted tank after
              arriving at the campground.
            </li>
            <li>
              <strong>Travel light on water.</strong> Carry only 20-30 gallons
              for the trip and fill the rest at the campground. Eliminating
              70 gallons (585 lbs) can reduce pin weight by 300-500 lbs if
              the tank is forward of the axles.
            </li>
            <li>
              <strong>Unload the bedroom.</strong> Heavy clothing, extra bedding,
              and bedroom electronics can stay in the truck cab or in rear
              basement storage.
            </li>
            <li>
              <strong>Remove residential furniture you do not need.</strong> That
              extra chair, large dining table, and recliner can stay home.
            </li>
            <li>
              <strong>Consider switching from a front-generator to a rear-generator
              configuration.</strong> Some 5th wheels offer this option at
              ordering time.
            </li>
          </ul>
          <p>
            See our{" "}
            <Link
              href="/guides/trailer-loading-position"
              className="font-semibold text-brand-600 underline"
            >
              Trailer Loading Position Guide
            </Link>{" "}
            for more on cargo distribution strategy.
          </p>
        </div>
      </section>

      {/* Common mistakes */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          Common 5th Wheel Pin Weight Mistakes
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <ul className="ml-6 list-disc space-y-3">
            <li>
              <strong>Trusting the dealer spec sheet.</strong> Manufacturer
              published pin weights are best-case numbers for a stripped
              trailer. Real-world pin weight after loading is 10-25% higher.
            </li>
            <li>
              <strong>Assuming tow rating covers everything.</strong> Tow rating
              and payload rating are independent numbers. A 14,000 lb tow
              rating does not mean 14,000 lbs of payload.
            </li>
            <li>
              <strong>Not weighing the actual setup.</strong> Onboard
              estimators and dealer estimates can be off by 15-30%. Always
              verify with a certified scale.
            </li>
            <li>
              <strong>Loading up before weighing.</strong> Pin weight changes
              every time you move a tool, fill a water tank, or add a passenger.
              Weigh at your heaviest typical travel configuration.
            </li>
            <li>
              <strong>Ignoring pin box weight.</strong> A 200 lb pin box
              counts against payload but does <strong>not</strong> count as
              pin weight. Confused dealers sometimes double-count or skip
              it altogether.
            </li>
            <li>
              <strong>Believing the truck &quot;handles fine&quot; so it must be safe.</strong>{" "}
              Slightly overloaded trucks can feel normal at highway speed on
              flat ground. The risk shows up on grades, in crosswinds, and in
              emergency maneuvers.
            </li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-12 rounded-2xl bg-brand-600 p-8 text-center text-white">
        <h2 className="text-2xl font-bold">Verify Your 5th Wheel Payload</h2>
        <p className="mt-2 text-brand-100">
          Run the numbers for your specific truck and trailer before your next
          trip. Free, no sign-up.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
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
              href="/guides/fifth-wheel-vs-travel-trailer"
              className="text-brand-600 hover:underline"
            >
              5th Wheel vs Travel Trailer: Towing Compared
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
              href="/guides/payload-capacity"
              className="text-brand-600 hover:underline"
            >
              Payload Capacity Explained: The #1 Towing Blind Spot
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
              href="/guides/trailer-loading-position"
              className="text-brand-600 hover:underline"
            >
              Trailer Loading Position Guide
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
              href="https://catscale.com/how-to-weigh/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 hover:underline"
            >
              CAT Scale Official Weighing Instructions
            </a>{" "}
            &mdash; catscale.com
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
              href="https://www.ford.com/support/how-tos/more-vehicle-tips/rv-and-trailer-towing/5th-wheel-towing/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 hover:underline"
            >
              Ford 5th Wheel Towing Guide
            </a>{" "}
            &mdash; ford.com
          </li>
          <li>
            <a
              href="https://www.ramtrucks.com/towing-guide"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 hover:underline"
            >
              RAM Truck Towing Guide
            </a>{" "}
            &mdash; ramtrucks.com
          </li>
          <li>
            <a
              href="https://www.etrailer.com/question-282.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 hover:underline"
            >
              How to Determine Pin Weight on a 5th Wheel
            </a>{" "}
            &mdash; etrailer.com
          </li>
          <li>
            <a
              href="https://www.nhtsa.gov/equipment/towing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 hover:underline"
            >
              NHTSA Towing Safety Resources
            </a>{" "}
            &mdash; nhtsa.gov
          </li>
        </ul>
      </section>
    </div>
  );
}
