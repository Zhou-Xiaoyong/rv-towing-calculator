import type { Metadata } from "next";
import Link from "next/link";
import { FaqJsonLd, ArticleJsonLd, HowToJsonLd } from "@/components/seo/JsonLd";
import { DEFAULT_OG_IMAGES } from "@/lib/seo/default-og-image";

export const metadata: Metadata = {
  title: "How to Calculate Tongue Weight for a Travel Trailer: 4 Methods",
  description:
    "Learn how to calculate tongue weight for a travel trailer with 4 proven methods. Includes formulas, safe 10-15% ranges, common mistakes, and free calculator links.",
  alternates: {
    canonical: "https://www.rvtowingcalc.com/guides/calculate-tongue-weight-travel-trailer",
  },
  openGraph: {
    title: "How to Calculate Tongue Weight for a Travel Trailer: 4 Methods",
    description:
      "Master tongue weight calculation for travel trailers. Bathroom scale, CAT scale, tongue scale, and quick-estimate methods explained with safety ranges.",
    url: "https://www.rvtowingcalc.com/guides/calculate-tongue-weight-travel-trailer",
    images: DEFAULT_OG_IMAGES,
  },
};

const FAQS = [
  {
    q: "What should tongue weight be for a travel trailer?",
    a: "For bumper-pull travel trailers, tongue weight should be 10-15% of the trailer's loaded weight. Most experienced RVers aim for 12-14% for the best balance of stability and steering control. Below 10%, the trailer is prone to dangerous sway. Above 15%, you may overload your tow vehicle's payload or rear axle rating. Fifth wheels use a different rule of thumb: 15-25% pin weight.",
  },
  {
    q: "Can I calculate tongue weight without a scale?",
    a: "You can estimate tongue weight using the formula: Loaded Trailer Weight x 0.13 = Estimated Tongue Weight. For example, a 6,500 lb loaded trailer likely has 845 lbs of tongue weight. However, this is only an estimate. The actual tongue weight depends on how cargo is distributed inside the trailer. Always verify with a real scale before towing, especially if you are near your tow vehicle's payload or rear axle limits.",
  },
  {
    q: "How much does a tongue weight scale cost?",
    a: "A basic tongue weight scale costs $100-$150 and is accurate enough for most RV owners. Digital models with higher capacity (2,000 lb) run $150-$250. For occasional use, the bathroom scale method costs almost nothing if you already own a scale. A CAT scale weigh costs $16-$19 for both passes and gives you the most accurate real-world number along with axle weights and GVWR/GCWR data.",
  },
  {
    q: "Does a weight distribution hitch change tongue weight?",
    a: "A weight distribution hitch (WDH) does not reduce tongue weight. The total downward force on the hitch ball remains the same. What a WDH does is redistribute some of that load from the truck's rear axle to the front axle and the trailer axles, which helps the truck sit level and steer properly. For payload calculations, count the full tongue weight plus the WDH itself (80-120 lbs). For axle loading, a properly adjusted WDH shifts roughly 1/3 of the tongue weight to the front axle and 1/3 to the trailer axles.",
  },
  {
    q: "Why does my travel trailer sway even with 12% tongue weight?",
    a: "Tongue weight is the most important factor in sway control, but it is not the only one. Other common causes include tire pressure that is too high or too low, worn suspension, insufficient hitch ball tension, side winds, passing semis, improper loading (heavy items behind the axles), or a WDH that is not adjusted correctly. If you experience sway, slow down gradually without braking the truck, then redistribute cargo forward and check tire pressures.",
  },
  {
    q: "Should I weigh tongue weight with a full water tank?",
    a: "Yes, if you plan to travel with water in the tank. Water weighs 8.34 lbs per gallon, so a 40-gallon fresh tank adds over 330 lbs. If that tank is located behind the trailer axles, it can significantly reduce tongue weight and cause sway. If it is located forward of the axles, it can add too much tongue weight. Weigh in your typical travel configuration.",
  },
];

const METHOD_COMPARISON = [
  {
    method: "Bathroom Scale",
    accuracy: "Good",
    cost: "Free (if you own a scale)",
    capacity: "~300-400 lbs direct; higher with pipe lever",
    bestFor: "Home checks, small-to-mid trailers",
  },
  {
    method: "Tongue Weight Scale",
    accuracy: "Very Good",
    cost: "$100-$250",
    capacity: "Up to 2,000 lbs",
    bestFor: "Frequent use, quick checks",
  },
  {
    method: "CAT Scale (Two-Pass)",
    accuracy: "Excellent",
    cost: "$16-$19 total",
    capacity: "Any RV weight",
    bestFor: "Most accurate real-world number + axle weights",
  },
  {
    method: "Estimation Formula",
    accuracy: "Fair",
    cost: "Free",
    capacity: "Any",
    bestFor: "Initial shopping and rough planning",
  },
];

export default function CalculateTongueWeightGuidePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <FaqJsonLd
        faqs={FAQS}
        baseUrl="https://www.rvtowingcalc.com/guides/calculate-tongue-weight-travel-trailer"
      />
      <HowToJsonLd
        name="How to Calculate Tongue Weight for a Travel Trailer"
        description="Step-by-step methods for calculating travel trailer tongue weight using a bathroom scale, tongue weight scale, CAT scale, or estimation formula."
        totalTime="PT45M"
        url="https://www.rvtowingcalc.com/guides/calculate-tongue-weight-travel-trailer"
        steps={[
          {
            name: "Load the trailer realistically",
            text: "Load the trailer as you would for a normal trip: propane, battery, water at typical level, food, gear, and cargo in their usual places.",
          },
          {
            name: "Choose a measurement method",
            text: "Use a bathroom scale with a lever for home checks, a dedicated tongue weight scale for convenience, or a CAT scale for the most accurate real-world number.",
          },
          {
            name: "Measure the tongue weight",
            text: "For the bathroom scale method, place a pipe or pivot under the coupler and multiply the scale reading by the lever ratio. For CAT scale, subtract the truck-only drive axle weight from the hitched drive axle weight.",
          },
          {
            name: "Calculate tongue weight percentage",
            text: "Divide tongue weight by loaded trailer weight and multiply by 100. Verify it falls within the 10-15% safe range for travel trailers.",
          },
          {
            name: "Adjust cargo if needed",
            text: "If tongue weight is below 10%, move heavy items forward of the trailer axles. If above 15%, move weight rearward or remove cargo to protect payload.",
          },
        ]}
      />
      <ArticleJsonLd
        title="How to Calculate Tongue Weight for a Travel Trailer: 4 Methods"
        description="Master tongue weight calculation for travel trailers. Bathroom scale, CAT scale, tongue scale, and quick-estimate methods explained with safety ranges."
        url="https://www.rvtowingcalc.com/guides/calculate-tongue-weight-travel-trailer"
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
        <span className="text-gray-900">Calculate Tongue Weight</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
        How to Calculate Tongue Weight for a Travel Trailer: 4 Methods That Work
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        Tongue weight is the most overlooked number in RV towing, and it is also
        the most dangerous to get wrong. Too little tongue weight causes trailer
        sway. Too much overloads your truck's payload and rear axle. This guide
        shows you exactly how to calculate tongue weight for a travel trailer
        using four proven methods, from free home tricks to a certified scale.
      </p>

      {/* Why tongue weight matters */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          Why Tongue Weight Matters More Than Tow Rating
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            Towing capacity tells you the maximum a truck can pull. Tongue weight
            tells you how much of that trailer is pushing down on the hitch. It
            is the bridge between trailer stability and truck payload, and it is
            where most towing setups fail.
          </p>
          <p>Here is what happens at the extremes:</p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border-l-4 border-danger-500 bg-danger-50 p-5">
              <h3 className="font-semibold text-danger-700">Too Light (&lt;10%)</h3>
              <p className="mt-2 text-sm text-danger-700">
                The trailer wants to lift the rear of the truck. The result is
                dangerous sway, reduced steering traction on the front axle, and
                a higher risk of losing control on descents or in crosswinds.
              </p>
            </div>
            <div className="rounded-xl border-l-4 border-warning-500 bg-warning-50 p-5">
              <h3 className="font-semibold text-warning-700">Too Heavy (&gt;15%)</h3>
              <p className="mt-2 text-sm text-warning-700">
                Excessive tongue weight eats payload, overloads the rear axle,
                causes the front end to feel light, and accelerates tire and
                suspension wear.
              </p>
            </div>
          </div>
          <p>
            The goal is the sweet spot. For bumper-pull travel trailers, that is
            typically <strong>10-15% of loaded trailer weight</strong>, with many
            experienced RVers targeting 12-14% for the best stability.
          </p>
        </div>
      </section>

      {/* Method comparison */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          Tongue Weight Methods at a Glance
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            Choose the method that fits your budget, equipment, and accuracy
            needs. For initial shopping, estimation is fine. For your actual
            loaded rig, use a real scale.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-gray-300 bg-gray-50">
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Method
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Accuracy
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Cost
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Capacity
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Best For
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {METHOD_COMPARISON.map((row) => (
                  <tr key={row.method}>
                    <td className="px-4 py-3 font-medium text-gray-700">
                      {row.method}
                    </td>
                    <td className="px-4 py-3 text-gray-600">{row.accuracy}</td>
                    <td className="px-4 py-3 text-gray-600">{row.cost}</td>
                    <td className="px-4 py-3 text-gray-600">{row.capacity}</td>
                    <td className="px-4 py-3 text-gray-600">{row.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Method 1: Bathroom scale */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          Method 1: Bathroom Scale Method (Free at Home)
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            This classic DIY method uses a bathroom scale, a sturdy pipe or
            dowel, and a block of wood the same height as your scale. It works
            because the tongue jack acts as a lever.
          </p>
          <ol className="ml-6 list-decimal space-y-2">
            <li>
              Park your loaded trailer on level ground. Do not unhitch from the
              truck yet if you want a real-world number.
            </li>
            <li>
              Lower the trailer onto the tongue jack so the coupler is at normal
              towing height.
            </li>
            <li>
              Place the bathroom scale one foot from the coupler and a wood
              block of equal height two feet from the coupler.
            </li>
            <li>
              Slide a sturdy pipe under the coupler so it rests on the scale and
              the block, forming a 3-foot lever.
            </li>
            <li>
              Read the scale. Multiply by 3 to get actual tongue weight (the
              scale carries 1/3 of the load).
            </li>
          </ol>
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-5">
            <h3 className="font-semibold text-gray-900">Example</h3>
            <p className="mt-2 text-sm">
              Scale reads <strong>325 lbs</strong>. Tongue weight = 325 x 3 ={" "}
              <strong>975 lbs</strong>.
            </p>
          </div>
          <div className="rounded-xl border-l-4 border-warning-500 bg-warning-50 p-4">
            <p className="text-sm text-warning-700">
              <strong>Safety note:</strong> This method is only as stable as
              your setup. Use a pipe rated for the load, keep hands clear, and
              never crawl under the coupler. If your tongue weight exceeds your
              scale's capacity (usually 300-400 lbs), use the lever method or a
              dedicated tongue weight scale.
            </p>
          </div>
        </div>
      </section>

      {/* Method 2: CAT scale */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          Method 2: CAT Scale Method (Most Accurate)
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            A CAT Scale gives you the most accurate tongue weight number plus
            axle weights, GVWR, and GCWR data all at once. It requires two
            passes: one hitched, one unhitched.
          </p>
          <div className="rounded-lg border border-gray-200 p-5">
            <h3 className="font-semibold text-brand-700">The Calculation</h3>
            <p className="mt-2 text-sm">
              <strong>Tongue Weight = Drive Axle (hitched) &minus; Drive Axle (unhitched)</strong>
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
                    Pass 1: Hitched
                  </td>
                  <td className="px-4 py-3 text-right text-gray-600">3,420</td>
                  <td className="px-4 py-3 text-right text-gray-600">3,880</td>
                  <td className="px-4 py-3 text-right text-gray-600">5,700</td>
                  <td className="px-4 py-3 text-right text-gray-600">13,000</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-700">
                    Pass 2: Truck Only
                  </td>
                  <td className="px-4 py-3 text-right text-gray-600">3,380</td>
                  <td className="px-4 py-3 text-right text-gray-600">2,680</td>
                  <td className="px-4 py-3 text-right text-gray-600">0</td>
                  <td className="px-4 py-3 text-right text-gray-600">6,060</td>
                </tr>
                <tr className="border-t-2 border-gray-400 bg-brand-50">
                  <td className="px-4 py-3 font-bold text-brand-700">
                    Tongue Weight
                  </td>
                  <td className="px-4 py-3 text-right text-brand-700">—</td>
                  <td className="px-4 py-3 text-right font-bold text-brand-700">
                    1,200
                  </td>
                  <td className="px-4 py-3 text-right text-brand-700">—</td>
                  <td className="px-4 py-3 text-right text-brand-700">—</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            In this example, tongue weight is <strong>1,200 lbs</strong>. If the
            loaded trailer weighs 7,500 lbs, that is 16% tongue weight&mdash;on
            the high side. You may need to shift cargo rearward or verify your
            truck's payload capacity.
          </p>
          <p>
            See our complete{" "}
            <Link
              href="/guides/cat-scale-weighing"
              className="font-semibold text-brand-600 underline"
            >
              CAT Scale Weighing Guide
            </Link>{" "}
            for the full two-pass procedure.
          </p>
        </div>
      </section>

      {/* Method 3: Tongue weight scale */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          Method 3: Dedicated Tongue Weight Scale
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            A tongue weight scale is a compact hydraulic or digital scale
            designed to sit under the trailer coupler. It is the fastest way to
            check tongue weight at home or at the campground.
          </p>
          <ol className="ml-6 list-decimal space-y-2">
            <li>
              Place the scale on firm, level ground under the trailer coupler.
            </li>
            <li>
              Lower the tongue jack until the coupler rests fully on the scale.
            </li>
            <li>
              Read the scale. That number is your tongue weight.
            </li>
          </ol>
          <div className="rounded-xl border-l-4 border-brand-500 bg-brand-50 p-4">
            <p className="text-sm text-brand-700">
              <strong>Pro tip:</strong> Choose a scale rated for at least 50%
              more than your expected tongue weight. If your trailer weighs
              6,000 lbs loaded, expect up to 900 lbs of tongue weight, so a
              1,500 lb capacity scale gives you headroom.
            </p>
          </div>
        </div>
      </section>

      {/* Method 4: Estimation */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          Method 4: The Quick Estimation Formula
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            Use this formula when shopping for a trailer or doing initial
            planning. It is not accurate enough for final setup, but it gets you
            in the right ballpark.
          </p>
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-5 text-center">
            <p className="text-lg font-semibold text-gray-900">
              Estimated Tongue Weight = Loaded Trailer Weight x 0.13
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-gray-300 bg-gray-50">
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Loaded Trailer Weight
                  </th>
                  <th className="px-4 py-3 text-right font-semibold text-gray-900">
                    10% (Minimum)
                  </th>
                  <th className="px-4 py-3 text-right font-semibold text-gray-900">
                    13% (Target)
                  </th>
                  <th className="px-4 py-3 text-right font-semibold text-gray-900">
                    15% (Maximum)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-700">4,000 lbs</td>
                  <td className="px-4 py-3 text-right text-gray-600">400</td>
                  <td className="px-4 py-3 text-right text-gray-600">520</td>
                  <td className="px-4 py-3 text-right text-gray-600">600</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-700">6,000 lbs</td>
                  <td className="px-4 py-3 text-right text-gray-600">600</td>
                  <td className="px-4 py-3 text-right text-gray-600">780</td>
                  <td className="px-4 py-3 text-right text-gray-600">900</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-700">8,000 lbs</td>
                  <td className="px-4 py-3 text-right text-gray-600">800</td>
                  <td className="px-4 py-3 text-right text-gray-600">1,040</td>
                  <td className="px-4 py-3 text-right text-gray-600">1,200</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-700">10,000 lbs</td>
                  <td className="px-4 py-3 text-right text-gray-600">1,000</td>
                  <td className="px-4 py-3 text-right text-gray-600">1,300</td>
                  <td className="px-4 py-3 text-right text-gray-600">1,500</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            Remember, this table assumes the trailer is loaded to that weight.
            Dry weights from the dealer are meaningless for real-world towing.
          </p>
        </div>
      </section>

      {/* How to adjust */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          How to Adjust Tongue Weight
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            Tongue weight is determined by where cargo sits relative to the
            trailer axles. Move weight forward to increase tongue weight. Move
            weight back to decrease it.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border-2 border-brand-200 bg-white p-5">
              <h3 className="font-semibold text-brand-700">To Increase Tongue Weight</h3>
              <ul className="mt-2 ml-4 list-disc space-y-1 text-sm">
                <li>Move heavy items forward of the axles</li>
                <li>Place spare tires, batteries, and propane up front</li>
                <li>Fill the front fresh water tank if located forward</li>
                <li>Remove heavy items from the rear cargo area</li>
              </ul>
            </div>
            <div className="rounded-xl border-2 border-gray-200 bg-white p-5">
              <h3 className="font-semibold text-gray-900">To Decrease Tongue Weight</h3>
              <ul className="mt-2 ml-4 list-disc space-y-1 text-sm">
                <li>Move heavy items rearward of the axles</li>
                <li>Shift tools and camping gear toward the back</li>
                <li>Drain rear-mounted water tanks</li>
                <li>Check if cargo is accidentally loaded behind the axles</li>
              </ul>
            </div>
          </div>
          <div className="rounded-xl border-l-4 border-danger-500 bg-danger-50 p-4">
            <p className="text-sm text-danger-700">
              <strong>Never put heavy cargo behind the rear trailer axle.</strong>{" "}
              This is the most common cause of trailer sway. The trailer becomes
              tail-heavy, lifting the hitch and creating a pendulum effect that
              can escalate quickly at highway speeds.
            </p>
          </div>
        </div>
      </section>

      {/* Common mistakes */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          Common Tongue Weight Mistakes
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <ul className="ml-6 list-disc space-y-2">
            <li>
              <strong>Using dry weight:</strong> Dealer brochures use dry or UVW
              weights. Add 1,000-1,500 lbs for propane, battery, water, and
              cargo before calculating tongue weight.
            </li>
            <li>
              <strong>Ignoring the WDH:</strong> A weight distribution hitch
              weighs 80-120 lbs and counts toward payload. It does not reduce
              tongue weight.
            </li>
            <li>
              <strong>Weighing empty:</strong> The only useful tongue weight is
              one measured with the trailer loaded as you actually travel.
            </li>
            <li>
              <strong>Trusting the dealer:</strong> Sales staff often quote best-case
              numbers. Verify everything yourself with the door jamb sticker and a
              scale.
            </li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-12 rounded-2xl bg-brand-600 p-8 text-center text-white">
        <h2 className="text-2xl font-bold">Check Your Tongue Weight Now</h2>
        <p className="mt-2 text-brand-100">
          Use our free Tongue Weight Calculator to verify your setup against the
          10-15% safety range. No sign-up required.
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
              href="/guides/tongue-weight"
              className="text-brand-600 hover:underline"
            >
              Tongue Weight Guide: Optimal Ranges &amp; Sway Prevention
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
              href="/guides/weight-distribution-hitch-setup"
              className="text-brand-600 hover:underline"
            >
              Weight Distribution Hitch Setup: Step-by-Step Guide
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
        </ul>
      </section>

      {/* External references */}
      <section className="mt-12 border-t border-gray-200 pt-8">
        <h2 className="text-lg font-bold text-gray-900">Sources &amp; References</h2>
        <ul className="mt-3 space-y-1 text-sm text-gray-500">
          <li>
            <a
              href="https://www.etrailer.com/faq-determine-tongue-weight.aspx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 hover:underline"
            >
              How to Determine Trailer Tongue Weight
            </a>{" "}
            &mdash; etrailer.com
          </li>
          <li>
            <a
              href="https://www.curtgroup.com/tongue-weight"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 hover:underline"
            >
              What Is Tongue Weight and Why Is It Important?
            </a>{" "}
            &mdash; CURT Group
          </li>
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
