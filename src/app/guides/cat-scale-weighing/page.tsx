import type { Metadata } from "next";
import Link from "next/link";
import { FaqJsonLd, ArticleJsonLd, HowToJsonLd } from "@/components/seo/JsonLd";
import { DEFAULT_OG_IMAGES } from "@/lib/seo/default-og-image";

export const metadata: Metadata = {
  title: "How to Weigh Your RV at a CAT Scale: Step-by-Step Guide",
  description:
    "Complete step-by-step guide to weighing your RV at a CAT Scale. Learn how to get accurate axle weights, calculate tongue weight, verify GVWR and GCWR, and read your weigh ticket. Essential for safe towing.",
  alternates: {
    canonical: "https://rvtowingcalc.com/guides/cat-scale-weighing",
  },
  openGraph: {
    title: "How to Weigh Your RV at a CAT Scale: Step-by-Step Guide",
    description:
      "Learn how to weigh your RV at a CAT Scale, read your weigh ticket, and calculate tongue weight, GVWR, and GCWR from real axle weights.",
    url: "https://rvtowingcalc.com/guides/cat-scale-weighing",
    images: DEFAULT_OG_IMAGES,
  },
};

const FAQS = [
  {
    q: "How much does it cost to weigh at a CAT Scale?",
    a: "A single weigh at a CAT Scale typically costs $13-$15 (as of 2026). A re-weigh within 24 hours costs around $3-$4. If you need two passes (truck-only and truck-plus-trailer), budget about $16-$19 total. You can pay at the counter inside the truck stop or via the Weigh My Truck app. CAT Scale locations are found at most major truck stops including Love's, Pilot, Flying J, and TA Travel Centers.",
  },
  {
    q: "Do I need an appointment to use a CAT Scale?",
    a: "No appointment is needed. CAT Scales are first-come, first-served. However, avoid peak trucker hours (early morning and late afternoon) if possible. The scale is typically accessible 24/7 at major truck stops. Use the CAT Scale locator at catscale.com to find a scale near you, and call ahead to confirm the scale is operational if you are planning a special trip.",
  },
  {
    q: "What is the difference between a CAT Scale weigh and a public scale?",
    a: "CAT Scales provide per-axle weights (steer, drive, trailer) on a certified ticket, which is the gold standard for RV weighing. Public scales (like those at landfills or scrap yards) typically only give you a total weight, which is far less useful. Per-axle weights let you verify that no single axle is overloaded and let you calculate tongue weight by comparing drive axle weight with and without the trailer connected. CAT Scale also guarantees accuracy and will reimburse any overweight fine if their scale was incorrect.",
  },
  {
    q: "Can I weigh my RV at a CAT Scale if I am not a trucker?",
    a: "Yes, absolutely. CAT Scales serve all vehicles, not just commercial trucks. Many RV owners use CAT Scales regularly. Simply pull onto the scale like any other vehicle, press the call button to speak with the weighmaster, and tell them it is a private weigh. You do not need a DOT number or any special credentials. The weighmaster is used to RVers and will walk you through it if needed.",
  },
  {
    q: "How often should I weigh my RV?",
    a: "At a minimum, weigh your fully loaded rig once at the start of each camping season, especially if your cargo load changes from trip to trip. Ideally, weigh after any major change: new trailer, new tow vehicle, significant gear changes, or before a long cross-country trip. If you boondock or carry variable water loads, weigh with both full and empty tanks to understand your weight range. Regular weighing is cheap insurance against overload-related accidents and tire failures.",
  },
  {
    q: "What do I do if my CAT Scale ticket shows I am over weight?",
    a: "First, do not panic. Identify which limit you exceeded: GVWR (truck too heavy), GCWR (combined too heavy), GAWR (individual axle overloaded), or trailer GVWR. Then take action: remove unnecessary cargo, redistribute weight between axles, drain fresh/gray/black water tanks, or upgrade to a vehicle with higher ratings. Never drive knowingly overweight. Our calculators at rvtowingcalc.com can help you run what-if scenarios to find a safe configuration.",
  },
];

export default function CatScaleWeighingGuidePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <FaqJsonLd
        faqs={FAQS}
        baseUrl="https://rvtowingcalc.com/guides/cat-scale-weighing"
      />
      <HowToJsonLd
        name="How to Weigh Your RV at a CAT Scale"
        description="Step-by-step guide to weighing your RV at a CAT Scale to get accurate per-axle weights, calculate tongue weight, and verify GVWR and GCWR compliance."
        totalTime="PT30M"
        url="https://rvtowingcalc.com/guides/cat-scale-weighing"
        steps={[
          {
            name: "Prepare your rig",
            text: "Load your RV exactly as you would for a trip: full fuel tank, passengers on board, cargo in place, and fresh water at your typical level. The goal is to weigh in your heaviest realistic configuration.",
          },
          {
            name: "First pass - truck plus trailer connected",
            text: "Pull onto the scale with your trailer connected. Position your steer axle on Platform 1, drive axle on Platform 2, and trailer axle(s) on Platform 3. Press the call button, tell the weighmaster it is a private weigh, and wait for the horn or green light.",
          },
          {
            name: "Get your first ticket",
            text: "Go inside and pay at the counter, or use the Weigh My Truck app for a digital ticket. Tell the cashier you will be back for a re-weigh. Your ticket will show steer axle, drive axle, and trailer axle weights plus a gross combined weight.",
          },
          {
            name: "Second pass - truck only",
            text: "Find a safe place nearby to unhitch your trailer. Drop the trailer in a parking spot, then return to the scale with just your truck. Position your steer axle on Platform 1 and drive axle on Platform 2. Tell the weighmaster this is your re-weigh.",
          },
          {
            name: "Calculate your numbers",
            text: "With both tickets, calculate tongue weight by subtracting Pass 2 drive axle from Pass 1 drive axle. Calculate loaded trailer weight by subtracting Pass 2 gross from Pass 1 gross. Compare every value against the ratings on your door jamb sticker and towing guide.",
          },
        ]}
      />
      <ArticleJsonLd
        title="How to Weigh Your RV at a CAT Scale: Step-by-Step Guide"
        description="Complete step-by-step guide to weighing your RV at a CAT Scale. Learn how to get accurate axle weights, calculate tongue weight, verify GVWR and GCWR, and read your weigh ticket."
        url="https://rvtowingcalc.com/guides/cat-scale-weighing"
        datePublished="2026-06-22"
      />

      <nav className="mb-4 text-sm text-gray-500">
        <Link href="/" className="hover:text-brand-600">
          Home
        </Link>
        <span className="mx-1">/</span>
        <Link href="/guides/towing-capacity-explained" className="hover:text-brand-600">
          Guides
        </Link>
        <span className="mx-1">/</span>
        <span className="text-gray-900">CAT Scale Weighing Guide</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
        How to Weigh Your RV at a CAT Scale: The Complete Step-by-Step Guide
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        You have read the manuals, checked the door jamb sticker, and run the
        numbers through a calculator. But until you put your actual, loaded rig
        on a certified scale, you are guessing. A CAT Scale weigh is the single
        most important safety check every RV owner should perform&mdash;and it
        costs less than a tank of gas.
      </p>

      {/* Why weighing matters */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          Why Weighing Your RV Is Non-Negotiable
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            Most RV owners significantly underestimate their actual loaded
            weight. Manufacturer &quot;dry weight&quot; or &quot;unloaded vehicle
            weight&quot; (UVW) numbers exclude propane, battery, water, cargo,
            passengers, and optional equipment. The difference between dry weight
            and actual loaded weight can easily be 1,500&ndash;2,500 lbs.
          </p>
          <p>
            A CAT Scale weigh gives you three critical pieces of information
            that no calculator can estimate:
          </p>
          <ul className="ml-6 list-disc space-y-2">
            <li>
              <strong>Actual per-axle weights:</strong> Steer axle, drive axle,
              and trailer axle weights on a certified ticket.
            </li>
            <li>
              <strong>Actual tongue weight:</strong> Calculated by comparing
              drive axle weight with and without the trailer connected.
            </li>
            <li>
              <strong>Verification against all ratings:</strong> GVWR, GCWR,
              GAWR (front and rear), and trailer GVWR&mdash;all checked against
              real numbers, not estimates.
            </li>
          </ul>
          <div className="rounded-xl border-l-4 border-danger-500 bg-danger-50 p-5">
            <h3 className="font-semibold text-danger-700">
              The uncomfortable truth
            </h3>
            <p className="mt-2 text-sm text-danger-700">
              A 2023 RVIA survey found that over 50% of RVs on the road exceed
              at least one weight rating. The most common violation is exceeding
              payload capacity, followed by exceeding an individual axle rating.
              Both are invisible to the naked eye but catastrophic at highway
              speeds. A CAT Scale weigh is the only way to know for sure.
            </p>
          </div>
        </div>
      </section>

      {/* What is a CAT Scale */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          What Is a CAT Scale and Where Do You Find One?
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            CAT Scale is a network of certified truck scales located at over
            2,000 truck stops across the United States and Canada. Each scale
            has three separate weighing platforms that give you individual axle
            weights&mdash;steer axle, drive axle, and trailer axle&mdash;all on
            one ticket. This per-axle breakdown is what makes CAT Scales
            dramatically more useful than a basic single-platform scale.
          </p>
          <p>
            You can find a CAT Scale at most major truck stop chains:
          </p>
          <ul className="ml-6 list-disc space-y-2">
            <li>
              <strong>Love&apos;s Travel Stops</strong>&mdash;the most common
              CAT Scale host
            </li>
            <li>
              <strong>Pilot Flying J</strong>
            </li>
            <li>
              <strong>TA Travel Centers</strong>
            </li>
            <li>
              <strong>Petro Stopping Centers</strong>
            </li>
            <li>
              <strong>Independent truck stops</strong> across the US and Canada
            </li>
          </ul>
          <p>
            Use the official locator at{" "}
            <a
              href="https://catscale.com/cat-scale-locator/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-brand-600 underline"
            >
              catscale.com/cat-scale-locator
            </a>{" "}
            to find the nearest location. You can also download the{" "}
            <strong>Weigh My Truck</strong> app (iOS and Android) to pay and
            receive your ticket digitally without leaving your vehicle.
          </p>
        </div>
      </section>

      {/* Pricing table */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          CAT Scale Pricing: What to Expect
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            CAT Scale pricing is straightforward and affordable. Here is the
            breakdown as of 2026:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-gray-300 bg-gray-50">
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Service
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Approximate Cost
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Notes
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-700">
                    First Weigh
                  </td>
                  <td className="px-4 py-3 text-gray-600">$13.00&ndash;$15.00</td>
                  <td className="px-4 py-3 text-gray-600">
                    Pay at counter or via Weigh My Truck app
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-700">
                    Re-Weigh (same day)
                  </td>
                  <td className="px-4 py-3 text-gray-600">$3.00&ndash;$4.00</td>
                  <td className="px-4 py-3 text-gray-600">
                    Within 24 hours of first weigh; ideal for the second pass
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-700">
                    Total for Two-Pass RV Weigh
                  </td>
                  <td className="px-4 py-3 text-gray-600">$16.00&ndash;$19.00</td>
                  <td className="px-4 py-3 text-gray-600">
                    First weigh (truck+trailer) + re-weigh (truck only)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            For less than $20, you get a certified weight ticket with per-axle
            breakdown. Compare that to the cost of a blown tire on the highway,
            a transmission rebuild, or worse&mdash;it is the best safety
            investment you can make.
          </p>
        </div>
      </section>

      {/* Step-by-step */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          Step-by-Step: How to Weigh Your RV at a CAT Scale
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            The most useful RV weigh requires <strong>two passes</strong>: one
            with the trailer connected and one with the truck alone. This lets
            you calculate actual tongue weight. Here is the complete procedure:
          </p>

          <div className="space-y-6">
            <div className="rounded-lg border border-gray-200 p-5">
              <h3 className="font-semibold text-brand-700">
                Step 1: Prepare Your Rig
              </h3>
              <p className="mt-2 text-sm">
                Load your RV exactly as you would for a trip: full fuel tank,
                passengers on board, cargo in place, fresh water at your typical
                level. The goal is to weigh in your heaviest realistic
                configuration. If you usually travel with empty tanks, weigh
                with empty tanks. If you boondock with full water, weigh full.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-5">
              <h3 className="font-semibold text-brand-700">
                Step 2: First Pass&mdash;Truck + Trailer Connected
              </h3>
              <p className="mt-2 text-sm">
                Pull onto the scale with your trailer connected. Position your{" "}
                <strong>steer axle</strong> (front wheels) on Platform 1, your{" "}
                <strong>drive axle</strong> (rear wheels) on Platform 2, and
                your <strong>trailer axle(s)</strong> on Platform 3. For a
                travel trailer, this is straightforward. For a fifth wheel, the
                trailer axles go on Platform 3 while the truck sits on Platforms
                1 and 2. Press the call button, tell the weighmaster it is a
                private weigh, and wait for the horn or green light.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-5">
              <h3 className="font-semibold text-brand-700">
                Step 3: Get Your First Ticket
              </h3>
              <p className="mt-2 text-sm">
                Go inside and pay at the counter, or use the Weigh My Truck app
                for a digital ticket. Tell the cashier you will be back for a
                re-weigh. Your ticket will show three weights: steer axle,
                drive axle, and trailer axle, plus a gross combined weight.
                Keep this ticket&mdash;you will need it to compare.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-5">
              <h3 className="font-semibold text-brand-700">
                Step 4: Second Pass&mdash;Truck Only
              </h3>
              <p className="mt-2 text-sm">
                Find a safe place nearby to unhitch your trailer. Drop the
                trailer in a parking spot (most truck stops have room), then
                return to the scale with just your truck. Position your steer
                axle on Platform 1 and drive axle on Platform 2. Platform 3
                will be empty. Tell the weighmaster this is your re-weigh. The
                re-weigh rate ($3&ndash;$4) applies.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-5">
              <h3 className="font-semibold text-brand-700">
                Step 5: Calculate Your Numbers
              </h3>
              <p className="mt-2 text-sm">
                With both tickets in hand, you can now calculate everything that
                matters. See the next section for a detailed walkthrough of how
                to read your tickets and extract tongue weight, GVWR compliance,
                and more.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to read the ticket */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          How to Read Your CAT Scale Ticket
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            Your CAT Scale ticket has three weight values. Here is how to
            interpret them and calculate the key numbers:
          </p>

          <div className="rounded-lg border border-gray-200 bg-gray-50 p-5">
            <h3 className="font-semibold text-gray-900">
              Pass 1: Truck + Trailer (Connected)
            </h3>
            <pre className="mt-3 overflow-x-auto rounded bg-gray-900 p-4 text-sm text-green-400">
{`Steer Axle:   3,420 lbs   (Platform 1)
Drive Axle:   3,880 lbs   (Platform 2)
Trailer Axle: 5,700 lbs   (Platform 3)
Gross:       13,000 lbs   (Total combined weight)`}
            </pre>
          </div>

          <div className="rounded-lg border border-gray-200 bg-gray-50 p-5">
            <h3 className="font-semibold text-gray-900">
              Pass 2: Truck Only (No Trailer)
            </h3>
            <pre className="mt-3 overflow-x-auto rounded bg-gray-900 p-4 text-sm text-green-400">
{`Steer Axle:   3,380 lbs   (Platform 1)
Drive Axle:   2,680 lbs   (Platform 2)
Trailer Axle:      0 lbs   (Platform 3)
Gross:        6,060 lbs   (Total truck weight)`}
            </pre>
          </div>

          <div className="rounded-lg border-l-4 border-brand-500 bg-brand-50 p-5">
            <h3 className="font-semibold text-brand-700">
              Key Calculations from Your Two Tickets
            </h3>
            <div className="mt-3 space-y-2 text-sm text-brand-800">
              <p>
                <strong>Tongue Weight:</strong> Drive Axle (Pass 1) &minus;
                Drive Axle (Pass 2) = 3,880 &minus; 2,680 ={" "}
                <strong>1,200 lbs</strong>
              </p>
              <p>
                <strong>Loaded Trailer Weight:</strong> Gross (Pass 1) &minus;
                Gross (Pass 2) = 13,000 &minus; 6,060 ={" "}
                <strong>6,940 lbs</strong>
              </p>
              <p>
                <strong>Tongue Weight Percentage:</strong> Tongue Weight &divide;
                Loaded Trailer Weight = 1,200 &divide; 6,940 ={" "}
                <strong>17.3%</strong>
              </p>
              <p className="mt-2 pt-2 border-t border-brand-200">
                In this example, the tongue weight percentage is 17.3%&mdash;above
                the optimal 10&ndash;15% range for travel trailers. The owner
                should redistribute cargo to reduce tongue weight or check
                payload against this actual number.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to check */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          What to Verify Against Your Weight Ratings
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            Once you have your actual weights, compare them against every rating
            on your vehicle and trailer:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-gray-300 bg-gray-50">
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Check
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Your Actual Weight
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Rating to Compare
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Source
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-700">
                    Truck GVWR
                  </td>
                  <td className="px-4 py-3 text-gray-600">
                    Steer + Drive (Pass 1)
                  </td>
                  <td className="px-4 py-3 text-gray-600">GVWR on door jamb</td>
                  <td className="px-4 py-3 text-gray-600">Yellow sticker</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-700">
                    Front GAWR
                  </td>
                  <td className="px-4 py-3 text-gray-600">
                    Steer Axle (Pass 1)
                  </td>
                  <td className="px-4 py-3 text-gray-600">GAWR Front</td>
                  <td className="px-4 py-3 text-gray-600">Door jamb sticker</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-700">
                    Rear GAWR
                  </td>
                  <td className="px-4 py-3 text-gray-600">
                    Drive Axle (Pass 1)
                  </td>
                  <td className="px-4 py-3 text-gray-600">GAWR Rear</td>
                  <td className="px-4 py-3 text-gray-600">Door jamb sticker</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-700">
                    GCWR
                  </td>
                  <td className="px-4 py-3 text-gray-600">
                    Gross (Pass 1)
                  </td>
                  <td className="px-4 py-3 text-gray-600">GCWR from towing guide</td>
                  <td className="px-4 py-3 text-gray-600">
                    Manufacturer towing guide
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-700">
                    Trailer GVWR
                  </td>
                  <td className="px-4 py-3 text-gray-600">
                    Trailer Axle + Tongue Weight
                  </td>
                  <td className="px-4 py-3 text-gray-600">Trailer GVWR</td>
                  <td className="px-4 py-3 text-gray-600">
                    Trailer VIN sticker
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-700">
                    Payload
                  </td>
                  <td className="px-4 py-3 text-gray-600">
                    Truck Gross (Pass 1) &minus; Curb Weight
                  </td>
                  <td className="px-4 py-3 text-gray-600">Payload on door jamb</td>
                  <td className="px-4 py-3 text-gray-600">Yellow sticker</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="rounded-xl border-l-4 border-warning-500 bg-warning-50 p-4">
            <p className="text-sm text-warning-700">
              <strong>Pro tip:</strong> Write your ratings on the back of your
              weigh ticket before heading to the scale. Having them ready makes
              the comparison instant. You can also use our{" "}
              <Link
                href="/towing-capacity-calculator"
                className="font-semibold text-brand-600 underline"
              >
                Towing Capacity Calculator
              </Link>{" "}
              to pre-load your ratings and then plug in your actual CAT Scale
              numbers.
            </p>
          </div>
        </div>
      </section>

      {/* Common mistakes */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          Common Mistakes When Weighing at a CAT Scale
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border-l-4 border-danger-500 bg-danger-50 p-5">
              <h3 className="font-semibold text-danger-700">
                Weighing with empty tanks
              </h3>
              <p className="mt-2 text-sm text-danger-700">
                If you travel with water, weigh with water. A full fresh water
                tank can add 400&ndash;800 lbs. If you weigh empty and then
                travel full, your numbers are meaningless.
              </p>
            </div>
            <div className="rounded-xl border-l-4 border-danger-500 bg-danger-50 p-5">
              <h3 className="font-semibold text-danger-700">
                Skipping the second pass
              </h3>
              <p className="mt-2 text-sm text-danger-700">
                A single weigh (truck + trailer) tells you combined weight but
                not tongue weight. Without the truck-only weigh, you cannot
                calculate actual tongue weight, which is critical for payload
                and stability.
              </p>
            </div>
            <div className="rounded-xl border-l-4 border-warning-500 bg-warning-50 p-5">
              <h3 className="font-semibold text-warning-700">
                Not having passengers on board
              </h3>
              <p className="mt-2 text-sm text-warning-700">
                Your family and pets are part of the payload. Weigh with
                everyone in their normal seating positions. Four passengers can
                easily add 600&ndash;800 lbs.
              </p>
            </div>
            <div className="rounded-xl border-l-4 border-warning-500 bg-warning-50 p-5">
              <h3 className="font-semibold text-warning-700">
                Forgetting about the hitch
              </h3>
              <p className="mt-2 text-sm text-warning-700">
                Your weight distribution hitch itself weighs 80&ndash;120 lbs
                and counts toward payload. Make sure it is installed for the
                first weigh if you use one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Using the Weigh My Truck app */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          Using the Weigh My Truck App
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            The <strong>Weigh My Truck</strong> app (free on iOS and Android) is
            the easiest way to use a CAT Scale. Instead of going inside the
            truck stop twice, you handle everything from your phone:
          </p>
          <ol className="ml-6 list-decimal space-y-2">
            <li>
              Download the app and create a free account with your email and
              payment method.
            </li>
            <li>
              When you arrive at the scale, open the app and select the CAT
              Scale location (the app uses GPS to find nearby scales).
            </li>
            <li>
              Enter your truck or RV details (optional but helpful for record
              keeping).
            </li>
            <li>
              Press &quot;Start Weigh.&quot; The weighmaster processes your
              weigh remotely.
            </li>
            <li>
              Your digital ticket appears in the app within seconds. You can
              download it as a PDF, email it, or save it to your phone.
            </li>
            <li>
              For the re-weigh, simply start a new weigh in the app at the same
              location. The re-weigh discount applies automatically.
            </li>
          </ol>
          <p>
            The app stores your weigh history, making it easy to compare weights
            across trips and track changes over time. This is especially useful
            if you experiment with different cargo configurations.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-12 rounded-2xl bg-brand-600 p-8 text-center text-white">
        <h2 className="text-2xl font-bold">Got Your CAT Scale Numbers?</h2>
        <p className="mt-2 text-brand-100">
          Plug your actual axle weights into our calculators and verify every
          safety limit in under two minutes. Free, no sign-up.
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
              href="/guides/tongue-weight"
              className="text-brand-600 hover:underline"
            >
              Tongue Weight Guide: Optimal Ranges &amp; Sway Prevention
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
              href="https://catscale.com/cat-scale-locator/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 hover:underline"
            >
              CAT Scale Location Finder
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
              href="https://rvlife.com/how-to-weigh-your-rv/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 hover:underline"
            >
              How to Weigh Your RV Before a Trip
            </a>{" "}
            &mdash; RV Life
          </li>
        </ul>
      </section>
    </div>
  );
}
