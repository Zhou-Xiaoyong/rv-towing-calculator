import type { Metadata } from "next";
import Link from "next/link";
import { FaqJsonLd, ArticleJsonLd } from "@/components/seo/JsonLd";
import { DEFAULT_OG_IMAGES } from "@/lib/seo/default-og-image";

export const metadata: Metadata = {
  title: "Weight Distribution Hitch Setup: Step-by-Step Guide",
  description:
    "Complete step-by-step guide to setting up a weight distribution hitch (WDH). Learn how to install, adjust, and tune your WDH for safe towing. Includes measurement worksheets, common mistakes, and when a WDH is required.",
  alternates: {
    canonical: "https://rvtowingcalc.com/guides/weight-distribution-hitch-setup",
  },
  openGraph: {
    title: "Weight Distribution Hitch Setup: Step-by-Step Guide",
    description:
      "Learn how to install, adjust, and tune your weight distribution hitch. Step-by-step instructions with measurement worksheets and safety checks.",
    url: "https://rvtowingcalc.com/guides/weight-distribution-hitch-setup",
    images: DEFAULT_OG_IMAGES,
  },
};

const FAQS = [
  {
    q: "Do I really need a weight distribution hitch?",
    a: "Most manufacturers recommend a WDH when the trailer weight exceeds 5,000 lbs or tongue weight exceeds 500 lbs. Many half-ton truck manuals require a WDH above 5,000 lbs trailer weight. Even if not legally required, a properly set up WDH dramatically improves steering control, braking stability, and headlight aim by distributing tongue weight across all axles instead of concentrating it on the rear axle. If your rear end sags noticeably when hitched, or your headlights point upward at night, you need a WDH.",
  },
  {
    q: "Does a weight distribution hitch reduce tongue weight?",
    a: "No. This is a common misconception. A WDH does not reduce total tongue weight or your payload usage. The tongue weight remains the same; the WDH redistributes that weight across the steer axle, drive axle, and trailer axles so that no single axle bears the full load. You still must stay within payload capacity, GVWR, and GCWR limits. Think of a WDH as spreading the load, not reducing it.",
  },
  {
    q: "Can I install a weight distribution hitch myself?",
    a: "Yes, most WD hitches are designed for DIY installation with basic hand tools. The process takes 1-2 hours for a first-timer and requires a torque wrench, measuring tape, and a level surface. However, if you are not comfortable with the setup or if your measurements do not come within spec, many RV dealers and hitch shops offer professional installation for $150-$300. An improperly adjusted WDH can be worse than no WDH at all.",
  },
  {
    q: "What size weight distribution hitch do I need?",
    a: "WD hitches are rated by tongue weight capacity, not trailer weight. Choose a WDH whose tongue weight rating covers your actual loaded tongue weight with some margin. Common ratings are 600 lbs, 800 lbs, 1,000 lbs, 1,200 lbs, and 1,400 lbs. If your loaded tongue weight is 900 lbs, get a 1,000 or 1,200 lb WDH&mdash;not an 800 lb model. Going too heavy (e.g., a 1,400 lb WDH for a 600 lb tongue) can make the ride harsh and reduce the hitch's ability to flex. Use our Tongue Weight Calculator to estimate your tongue weight before shopping.",
  },
  {
    q: "Do I need sway control with my weight distribution hitch?",
    a: "Many modern WDH systems include integrated sway control (like the Equal-i-zer, Blue Ox SwayPro, or CURT TruTrack). If your WDH does not include sway control, you can add a separate friction sway control bar. Sway control is strongly recommended for travel trailers over 5,000 lbs or trailers longer than 25 feet. However, sway control should never substitute for proper tongue weight (10-15% of trailer weight). If your trailer sways, check tongue weight first.",
  },
  {
    q: "How do I know if my weight distribution hitch is adjusted correctly?",
    a: "The key measurement is the front fender height. Measure from the ground to the top of the front wheel well opening before hitching. After hitching and engaging the WDH, the front fender should return to within 1/2 inch of its unhitched height. If the front is still more than 1/2 inch higher than unhitched, you need more weight distribution (increase spring bar tension or tilt the head). If the front is lower than unhitched, you have too much distribution. The rear will always squat some; the goal is to restore the front, not eliminate all rear squat.",
  },
];

export default function WeightDistributionHitchGuidePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <FaqJsonLd
        faqs={FAQS}
        baseUrl="https://rvtowingcalc.com/guides/weight-distribution-hitch-setup"
      />
      <ArticleJsonLd
        title="Weight Distribution Hitch Setup: Step-by-Step Guide"
        description="Complete step-by-step guide to setting up a weight distribution hitch (WDH). Learn how to install, adjust, and tune your WDH for safe towing."
        url="https://rvtowingcalc.com/guides/weight-distribution-hitch-setup"
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
        <span className="text-gray-900">Weight Distribution Hitch Setup</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
        Weight Distribution Hitch Setup: The Complete Step-by-Step Guide
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        A weight distribution hitch is one of the most important pieces of
        towing equipment you will own&mdash;and one of the most commonly
        misadjusted. When set up correctly, it transforms your towing
        experience. When set up wrong, it can make handling worse than no hitch
        at all. This guide walks you through every step.
      </p>

      {/* What is a WDH */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          What Is a Weight Distribution Hitch and Why Do You Need One?
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            When you hitch a travel trailer to your truck, the tongue weight
            pushes down on the hitch ball&mdash;which is behind the rear axle.
            This creates a lever effect: the rear of the truck goes down, the
            front goes up. This means less weight on the front (steering) axle,
            which reduces steering control, braking effectiveness, and
            headlight aim.
          </p>
          <p>
            A weight distribution hitch (WDH) uses spring bars to transfer some
            of that tongue weight forward to the truck&apos;s front axle and
            rearward to the trailer axles. The result:
          </p>
          <ul className="ml-6 list-disc space-y-2">
            <li>
              <strong>Restored front axle weight</strong>&mdash;better steering
              and braking
            </li>
            <li>
              <strong>Level truck and trailer</strong>&mdash;proper headlight
              aim and suspension geometry
            </li>
            <li>
              <strong>Reduced rear axle overload</strong>&mdash;less stress on
              rear tires, springs, and axle bearings
            </li>
            <li>
              <strong>Improved sway resistance</strong>&mdash;especially with
              integrated sway control models
            </li>
          </ul>
          <div className="rounded-xl border-l-4 border-warning-500 bg-warning-50 p-4">
            <p className="text-sm text-warning-700">
              <strong>Important:</strong> A WDH does NOT reduce your total
              tongue weight or your payload consumption. The tongue weight is
              the same; it is just distributed differently. You still must stay
              within all weight ratings. Use our{" "}
              <Link
                href="/payload-calculator"
                className="font-semibold text-brand-600 underline"
              >
                Payload Calculator
              </Link>{" "}
              to verify your numbers with or without a WDH.
            </p>
          </div>
        </div>
      </section>

      {/* When WDH is required */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          When Is a Weight Distribution Hitch Required?
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            There is no single federal law requiring a WDH, but the requirement
            comes from multiple directions:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-gray-300 bg-gray-50">
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Authority
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    WDH Requirement
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-700">
                    Ford
                  </td>
                  <td className="px-4 py-3 text-gray-600">
                    Required above 5,000 lbs trailer weight or 500 lbs tongue
                    weight for most F-150 configurations
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-700">
                    GM (Chevrolet/GMC)
                  </td>
                  <td className="px-4 py-3 text-gray-600">
                    Required above 7,000 lbs trailer weight for half-ton trucks
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-700">
                    RAM
                  </td>
                  <td className="px-4 py-3 text-gray-600">
                    Required above 5,000 lbs trailer weight for 1500 models
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-700">
                    Toyota
                  </td>
                  <td className="px-4 py-3 text-gray-600">
                    Required above 5,000 lbs for Tundra
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-700">
                    Hitch Receiver Label
                  </td>
                  <td className="px-4 py-3 text-gray-600">
                    Most receivers show two ratings: &quot;weight-carrying&quot;
                    (without WDH) and &quot;weight-distributing&quot; (with
                    WDH). The weight-distributing rating is typically much
                    higher.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            Beyond official requirements, a WDH is a good idea whenever you
            notice rear squat, headlight misalignment, or vague steering when
            towing. These symptoms mean weight is being lifted off your front
            axle&mdash;exactly what a WDH corrects.
          </p>
        </div>
      </section>

      {/* Choosing the right WDH */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          Choosing the Right Weight Distribution Hitch
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            WD hitches are rated by <strong>tongue weight capacity</strong>, not
            trailer weight. Match the hitch to your actual loaded tongue weight:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-gray-300 bg-gray-50">
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    WDH Tongue Rating
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Suitable For Tongue Weight
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Typical Trailer Size
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-700">
                    600 lbs
                  </td>
                  <td className="px-4 py-3 text-gray-600">400&ndash;600 lbs</td>
                  <td className="px-4 py-3 text-gray-600">
                    Small travel trailers (3,000&ndash;5,000 lbs)
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-700">
                    800 lbs
                  </td>
                  <td className="px-4 py-3 text-gray-600">600&ndash;800 lbs</td>
                  <td className="px-4 py-3 text-gray-600">
                    Mid-size trailers (5,000&ndash;6,500 lbs)
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-700">
                    1,000 lbs
                  </td>
                  <td className="px-4 py-3 text-gray-600">800&ndash;1,000 lbs</td>
                  <td className="px-4 py-3 text-gray-600">
                    Larger travel trailers (6,500&ndash;8,000 lbs)
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-700">
                    1,200&ndash;1,400 lbs
                  </td>
                  <td className="px-4 py-3 text-gray-600">
                    1,000&ndash;1,400 lbs
                  </td>
                  <td className="px-4 py-3 text-gray-600">
                    Large travel trailers (8,000&ndash;11,000 lbs)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            Do not guess your tongue weight. Use our{" "}
            <Link
              href="/tongue-weight-calculator"
              className="font-semibold text-brand-600 underline"
            >
              Tongue Weight Calculator
            </Link>{" "}
            to estimate it, then verify at a CAT Scale after loading. If your
            actual tongue weight falls between two hitch ratings, round up. A
            hitch rated too low will be ineffective; one rated too high will
            ride harshly and may not flex enough over uneven terrain.
          </p>
        </div>
      </section>

      {/* Step-by-step setup */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          Step-by-Step WDH Installation and Setup
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            The following procedure applies to most modern WDH systems
            (Equal-i-zer, Blue Ox SwayPro, CURT, Husky, Reese, Fastway E2).
            Always consult your specific hitch manual for model-specific
            instructions and torque values.
          </p>

          <div className="space-y-6">
            <div className="rounded-lg border border-gray-200 p-5">
              <h3 className="font-semibold text-brand-700">
                Step 1: Measure Baseline Heights (Before Hitching)
              </h3>
              <p className="mt-2 text-sm">
                Park on a level surface. Measure and record these distances from
                the ground:
              </p>
              <ul className="mt-2 ml-6 list-disc space-y-1 text-sm">
                <li>
                  <strong>Front fender height:</strong> Ground to the top of the
                  front wheel well opening (not the fender lip).
                </li>
                <li>
                  <strong>Rear fender height:</strong> Ground to the top of the
                  rear wheel well opening.
                </li>
                <li>
                  <strong>Trailer coupler height:</strong> Ground to the top of
                  the coupler (with trailer level).
                </li>
              </ul>
              <p className="mt-2 text-sm">
                Write these down. They are your target numbers for adjustment.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-5">
              <h3 className="font-semibold text-brand-700">
                Step 2: Install the Shank and Hitch Head
              </h3>
              <p className="mt-2 text-sm">
                Insert the WDH shank into your receiver tube and secure it with
                the hitch pin and clip. Mount the hitch head onto the shank.
                The top of the trailer ball should be{" "}
                <strong>1 to 3 inches higher</strong> than the coupler height
                you measured. This extra height compensates for the rear squat
                that will occur when you hitch up. Start with the head tilted
                slightly back (toward the trailer)&mdash;you will fine-tune this
                angle later with adjustment washers or the tilt mechanism.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-5">
              <h3 className="font-semibold text-brand-700">
                Step 3: Set the Hitch Head Angle
              </h3>
              <p className="mt-2 text-sm">
                The head angle determines how much weight distribution you get.
                Most hitches use washers on an adjustment rod (e.g., Equal-i-zer)
                or a tilt screw mechanism. Start with the manufacturer&apos;s
                recommended number of washers (typically 4&ndash;6 for
                Equal-i-zer). More washers = more head tilt = more weight
                transferred to the front axle. Insert the bolts through the head
                and shank but do not fully torque them yet&mdash;you may need to
                adjust the angle after your first test.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-5">
              <h3 className="font-semibold text-brand-700">
                Step 4: Mount the Spring Bars and Couple the Trailer
              </h3>
              <p className="mt-2 text-sm">
                Attach the spring bars to the hitch head per your model&apos;s
                instructions. For chain-style hitches, attach the chains to the
                spring bars first, then mount the bars. Raise the trailer
                coupler with the tongue jack, back your truck up, and lower the
                coupler onto the ball. Latch the coupler securely and insert the
                safety pin or lock.{" "}
                <strong>Do not engage the spring bars yet.</strong>
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-5">
              <h3 className="font-semibold text-brand-700">
                Step 5: Raise the Trailer Jack to Load the Bars
              </h3>
              <p className="mt-2 text-sm">
                With the trailer coupled, use the tongue jack to raise the
                truck and trailer together. Raise it about{" "}
                <strong>3 inches above level</strong>. This takes weight off the
                spring bars so you can connect them without fighting the tension.
                The higher you raise the jack, the easier it is to engage the
                bars&mdash;but do not lift the truck&apos;s rear wheels off the
                ground.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-5">
              <h3 className="font-semibold text-brand-700">
                Step 6: Install Hookup Brackets and Connect Spring Bars
              </h3>
              <p className="mt-2 text-sm">
                Position the L-brackets or hookup brackets on the trailer frame
                at the point where the spring bar chains hang naturally. Mount
                them securely using the provided bolts. Then attach the spring
                bar chains to the brackets. For chain-style hitches, start with
                the same number of links showing on both sides. There must be a{" "}
                <strong>minimum of 5 chain links</strong> between the spring bar
                and the bracket. Use the lift handle (or a pry bar for some
                models) to snap the brackets into the locked position.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-5">
              <h3 className="font-semibold text-brand-700">
                Step 7: Lower the Jack and Measure
              </h3>
              <p className="mt-2 text-sm">
                Slowly retract the tongue jack until the full weight rests on
                the hitch. Now re-measure your front fender height. The goal:{" "}
                <strong>
                  front fender should return to within 1/2 inch of its unhitched
                  height
                </strong>
                .
              </p>
              <div className="mt-3 grid gap-3 sm:grid-cols-3">
                <div className="rounded-lg border border-safe-200 bg-safe-50 p-3 text-center">
                  <p className="text-xs font-semibold text-safe-700">
                    Front Fender = Unhitched
                  </p>
                  <p className="mt-1 text-xs text-safe-600">
                    Perfect. Your WDH is dialed in.
                  </p>
                </div>
                <div className="rounded-lg border border-warning-200 bg-warning-50 p-3 text-center">
                  <p className="text-xs font-semibold text-warning-700">
                    Front Fender Higher by &gt;1/2&quot;
                  </p>
                  <p className="mt-1 text-xs text-warning-600">
                    Increase tension: add washers or take up another chain link.
                  </p>
                </div>
                <div className="rounded-lg border border-danger-200 bg-danger-50 p-3 text-center">
                  <p className="text-xs font-semibold text-danger-700">
                    Front Fender Lower than Unhitched
                  </p>
                  <p className="mt-1 text-xs text-danger-600">
                    Too much tension: remove washers or loosen chain by one link.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-gray-200 p-5">
              <h3 className="font-semibold text-brand-700">
                Step 8: Final Torque and Road Test
              </h3>
              <p className="mt-2 text-sm">
                Once your measurements are within spec, uncouple the trailer and
                torque all bolts to the manufacturer&apos;s specified values
                (typically 60&ndash;80 ft-lbs for bracket bolts, higher for the
                ball nut). Take a short test drive on a quiet road. Listen for
                unusual noises, check that the rig tracks straight, and perform a
                moderate brake test. After 50&ndash;100 miles of towing,
                re-check all bolt torques&mdash;they can loosen as components
                settle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Measurement worksheet */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          WDH Measurement Worksheet
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            Print or copy this worksheet before you start. Fill in each blank
            as you go:
          </p>
          <div className="overflow-x-auto rounded-lg border border-gray-200 bg-gray-50 p-6">
            <pre className="text-sm leading-relaxed text-gray-700">
{`MEASUREMENT                              UNHITCHED    HITCHED (WDH ENGAGED)
─────────────────────────────────────────────────────────────────────
Front fender height (ground to top)       _____ in     _____ in
Rear fender height (ground to top)        _____ in     _____ in
Trailer coupler height (level)            _____ in     N/A

TARGET: Front fender hitched = unhitched ± 0.5"

ADJUSTMENT NOTES
─────────────────────────────────────────────────────────────────────
Shank position (holes from top):          _____
Number of washers on adjustment rod:      _____
Chain links showing (per side):           _____
Head angle (tilt):                        _____° (toward / away from trailer)

FINAL CHECK (after test drive)
─────────────────────────────────────────────────────────────────────
Front fender height:                      _____ in (pass/fail)
Rear squat from unhitched:                _____ in
Tows straight at 55 mph:                  Yes / No
Noise from hitch:                         Normal / Excessive
All bolts torqued to spec:                Yes / No`}
            </pre>
          </div>
        </div>
      </section>

      {/* Common mistakes */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          Common WDH Setup Mistakes and How to Fix Them
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <div className="space-y-4">
            <div className="rounded-xl border-l-4 border-danger-500 bg-danger-50 p-5">
              <h3 className="font-semibold text-danger-700">
                Mistake 1: Not enough weight distribution
              </h3>
              <p className="mt-2 text-sm text-danger-700">
                <strong>Symptom:</strong> Front fender is more than 1/2 inch
                higher than unhitched. Steering feels light or vague.{" "}
                <strong>Fix:</strong> Add washers to increase head angle, or
                take up one more chain link (shorter chain = more tension).
                Re-measure after each adjustment.
              </p>
            </div>

            <div className="rounded-xl border-l-4 border-danger-500 bg-danger-50 p-5">
              <h3 className="font-semibold text-danger-700">
                Mistake 2: Too much weight distribution
              </h3>
              <p className="mt-2 text-sm text-danger-700">
                <strong>Symptom:</strong> Front fender is lower than unhitched.
                Ride feels harsh, hitch pops and groans over bumps.{" "}
                <strong>Fix:</strong> Remove washers or let out one chain link
                (longer chain = less tension). Too much distribution can
                actually reduce rear axle traction on wet or loose surfaces.
              </p>
            </div>

            <div className="rounded-xl border-l-4 border-warning-500 bg-warning-50 p-5">
              <h3 className="font-semibold text-warning-700">
                Mistake 3: Uneven chain tension (left vs right)
              </h3>
              <p className="mt-2 text-sm text-warning-700">
                <strong>Symptom:</strong> Trailer pulls to one side, uneven tire
                wear. <strong>Fix:</strong> Both chains must have the same
                number of links between the spring bar and bracket. Count
                carefully. Even one link difference can create a noticeable
                pull.
              </p>
            </div>

            <div className="rounded-xl border-l-4 border-warning-500 bg-warning-50 p-5">
              <h3 className="font-semibold text-warning-700">
                Mistake 4: Not re-torquing after break-in
              </h3>
              <p className="mt-2 text-sm text-warning-700">
                <strong>Symptom:</strong> Clunking noises develop after a few
                trips. <strong>Fix:</strong> All WDH manufacturers recommend
                re-torquing bracket bolts after the first 50&ndash;100 miles of
                towing. Bolts settle and can lose 20&ndash;30% of their initial
                torque. Make this a habit.
              </p>
            </div>

            <div className="rounded-xl border-l-4 border-warning-500 bg-warning-50 p-5">
              <h3 className="font-semibold text-warning-700">
                Mistake 5: Not re-checking after loading
              </h3>
              <p className="mt-2 text-sm text-warning-700">
                <strong>Symptom:</strong> WDH was perfect when set up, but
                handling degrades on trips. <strong>Fix:</strong> Cargo changes
                tongue weight. If you add a generator, firewood, or extra water,
                your tongue weight changes, and your WDH may need re-adjustment.
                Re-measure front fender height at the start of each trip.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WDH and payload */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          Weight Distribution and Payload: What Actually Changes
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            This is the most misunderstood aspect of weight distribution. Here
            is what a WDH does and does not change:
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border-2 border-safe-200 bg-safe-50 p-5">
              <h3 className="font-semibold text-safe-700">
                What a WDH Does
              </h3>
              <ul className="mt-3 ml-6 list-disc space-y-2 text-sm text-safe-700">
                <li>Transfers weight from rear axle to front axle</li>
                <li>Transfers some weight back to trailer axles</li>
                <li>Levels the truck for proper steering geometry</li>
                <li>Improves headlight aim</li>
                <li>Reduces porpoising (bouncing) on uneven roads</li>
              </ul>
            </div>
            <div className="rounded-xl border-2 border-danger-200 bg-danger-50 p-5">
              <h3 className="font-semibold text-danger-700">
                What a WDH Does NOT Do
              </h3>
              <ul className="mt-3 ml-6 list-disc space-y-2 text-sm text-danger-700">
                <li>Reduce total tongue weight</li>
                <li>Reduce payload consumption</li>
                <li>Increase GVWR or GCWR</li>
                <li>Increase your tow rating</li>
                <li>Fix improper tongue weight percentage</li>
              </ul>
            </div>
          </div>
          <p>
            Think of it this way: a 900 lb tongue weight is still 900 lbs on
            your truck. The WDH just spreads it across all axles instead of
            concentrating it on the rear. You must still verify that your
            payload, GVWR, and GCWR are within limits using our{" "}
            <Link
              href="/towing-capacity-calculator"
              className="font-semibold text-brand-600 underline"
            >
              Towing Capacity Calculator
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Popular WDH models */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          Popular Weight Distribution Hitch Models Compared
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            Here is a quick comparison of the most popular WDH systems on the
            market. All are solid choices; the best one depends on your trailer
            size, tongue weight, and whether you want integrated sway control.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-gray-300 bg-gray-50">
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Model
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Tongue Rating Range
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Integrated Sway Control
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Approx. Price
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-700">
                    Equal-i-zer 4-Point
                  </td>
                  <td className="px-4 py-3 text-gray-600">
                    600&ndash;1,400 lbs
                  </td>
                  <td className="px-4 py-3">
                    <span className="text-safe-600 font-semibold">Yes</span>
                  </td>
                  <td className="px-4 py-3 text-gray-600">$600&ndash;$900</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-700">
                    Blue Ox SwayPro
                  </td>
                  <td className="px-4 py-3 text-gray-600">
                    550&ndash;1,500 lbs
                  </td>
                  <td className="px-4 py-3">
                    <span className="text-safe-600 font-semibold">Yes</span>
                  </td>
                  <td className="px-4 py-3 text-gray-600">$650&ndash;$1,000</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-700">
                    CURT TruTrack
                  </td>
                  <td className="px-4 py-3 text-gray-600">
                    600&ndash;1,200 lbs
                  </td>
                  <td className="px-4 py-3">
                    <span className="text-safe-600 font-semibold">Yes</span>
                  </td>
                  <td className="px-4 py-3 text-gray-600">$500&ndash;$800</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-700">
                    Fastway E2
                  </td>
                  <td className="px-4 py-3 text-gray-600">
                    600&ndash;1,200 lbs
                  </td>
                  <td className="px-4 py-3">
                    <span className="text-safe-600 font-semibold">Yes</span>
                  </td>
                  <td className="px-4 py-3 text-gray-600">$450&ndash;$700</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-700">
                    Reese Steadi-Flex
                  </td>
                  <td className="px-4 py-3 text-gray-600">
                    600&ndash;1,200 lbs
                  </td>
                  <td className="px-4 py-3">
                    <span className="text-safe-600 font-semibold">Yes</span>
                  </td>
                  <td className="px-4 py-3 text-gray-600">$500&ndash;$800</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-700">
                    Husky Center Line TS
                  </td>
                  <td className="px-4 py-3 text-gray-600">
                    600&ndash;1,200 lbs
                  </td>
                  <td className="px-4 py-3">
                    <span className="text-safe-600 font-semibold">Yes</span>
                  </td>
                  <td className="px-4 py-3 text-gray-600">$400&ndash;$700</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500">
            Prices are approximate as of 2026 and vary by retailer. All models
            listed include integrated sway control. For lighter trailers
            (under 5,000 lbs), a basic chain-style WDH with a separate friction
            sway control bar may be sufficient and more affordable.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-12 rounded-2xl bg-brand-600 p-8 text-center text-white">
        <h2 className="text-2xl font-bold">Get Your Numbers Right First</h2>
        <p className="mt-2 text-brand-100">
          Before you buy or adjust a WDH, know your tongue weight and payload.
          Our free calculators make it easy.
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
            Full Towing Calculator
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
              href="/guides/payload-capacity"
              className="text-brand-600 hover:underline"
            >
              Payload Capacity Explained: The #1 Towing Blind Spot
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
              href="/guides/towing-capacity-explained"
              className="text-brand-600 hover:underline"
            >
              Towing Capacity Explained: The Complete Guide
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
        </ul>
      </section>

      {/* External references */}
      <section className="mt-12 border-t border-gray-200 pt-8">
        <h2 className="text-lg font-bold text-gray-900">Sources &amp; References</h2>
        <ul className="mt-3 space-y-1 text-sm text-gray-500">
          <li>
            <a
              href="https://www.curtmfg.com/weight-distribution/hitches/learn-more"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 hover:underline"
            >
              CURT Weight Distribution Hitch Setup Guide
            </a>{" "}
            &mdash; curtmfg.com
          </li>
          <li>
            <a
              href="https://www.equalizerhitch.com/support/installation-instructions"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 hover:underline"
            >
              Equal-i-zer Hitch Installation Instructions
            </a>{" "}
            &mdash; equalizerhitch.com
          </li>
          <li>
            <a
              href="https://www.etrailer.com/faq-how-to-install-weight-distribution.aspx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 hover:underline"
            >
              etrailer WDH Installation Guide
            </a>{" "}
            &mdash; etrailer.com
          </li>
          <li>
            <a
              href="https://www.weigh-safe.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 hover:underline"
            >
              Weigh Safe WDH Manual
            </a>{" "}
            &mdash; weigh-safe.com
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
