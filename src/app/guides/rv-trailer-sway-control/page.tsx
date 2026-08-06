import type { Metadata } from "next";
import Link from "next/link";
import { FaqJsonLd, ArticleJsonLd } from "@/components/seo/JsonLd";
import { DEFAULT_OG_IMAGES } from "@/lib/seo/default-og-image";

export const metadata: Metadata = {
  title: "RV Trailer Sway Control: Causes, Prevention & Best Anti-Sway Devices",
  description:
    "Trailer sway is the #1 cause of towing accidents. Learn what causes RV sway, how to prevent it with proper loading and tongue weight, and which anti-sway devices actually work. Free calculator links.",
  alternates: {
    canonical: "https://rvtowingcalc.com/guides/rv-trailer-sway-control",
  },
  openGraph: {
    title: "RV Trailer Sway Control: Causes, Prevention & Best Anti-Sway Devices",
    description:
      "Complete guide to trailer sway prevention. Understand sway causes, proper tongue weight, weight distribution, and compare friction bar vs dual-cam vs Equal-i-zer anti-sway systems.",
    url: "https://rvtowingcalc.com/guides/rv-trailer-sway-control",
    images: DEFAULT_OG_IMAGES,
  },
};

const FAQS = [
  {
    q: "What is the most common cause of trailer sway?",
    a: "Insufficient tongue weight is the single most common cause. When tongue weight falls below 10% of total trailer weight, the trailer becomes dynamically unstable and the hitch acts like a pendulum pivot instead of a stable connection. Other leading causes include rear-loading the trailer (too much weight behind the axles), driving too fast for conditions, and passing large vehicles like semi trucks at highway speed. Wind gusts alone rarely cause sustained sway in a properly loaded trailer with adequate tongue weight.",
  },
  {
    q: "What should I do if my trailer starts swaying?",
    a: "Do NOT hit the brakes. Braking shifts weight forward, reducing tongue weight and worsening the sway. Instead: (1) Keep the steering wheel straight and hold it firmly. (2) Take your foot off the accelerator and let the vehicle slow naturally. (3) If equipped, manually apply the trailer brake controller lever to pull the trailer straight behind the truck. (4) If speed does not decrease, gradually apply very light vehicle braking while maintaining a straight wheel. (5) Pull over safely once speed drops below 30 MPH and inspect your load distribution before continuing.",
  },
  {
    q: "Do I need an anti-sway device if I have a weight distribution hitch?",
    a: "It depends on your WDH type. Some modern weight distribution hatches have integrated sway control built in (Equal-i-zer 4-point, Blue Ox SwayPro, Husky Center Line). If your WDH is a basic round-bar system with no sway control, you should add a separate friction bar or dual-cam sway control. For trailers over 6,000 lbs loaded, integrated 4-point sway control is strongly recommended over add-on friction bars, which can be overwhelmed by larger trailers.",
  },
  {
    q: "What tongue weight percentage prevents sway?",
    a: "For travel trailers, aim for 10-15% of the total loaded trailer weight as tongue weight. Below 10%, sway risk increases dramatically. Above 15%, you risk exceeding the tow vehicle's payload capacity. For example, a 6,000 lb loaded trailer should have 600-900 lbs of tongue weight. Measure it with a Sherline tongue weight scale or at a CAT scale. Use our Tongue Weight Calculator to find the right range for your setup.",
  },
  {
    q: "Can a weight distribution hitch cause sway?",
    a: "A properly set up WDH reduces sway by distributing tongue weight to the front axle and trailer axles. However, an incorrectly adjusted WDH can make sway worse. Common mistakes include: over-tensioning the spring bars (lifting the rear too much, causing the hitch to pivot), under-tensioning (not enough front axle weight restored), or using a WDH rated for a much heavier trailer than yours. Always measure front and rear fender heights before and after WDH setup to verify proper weight distribution.",
  },
  {
    q: "Are friction sway control bars effective for large travel trailers?",
    a: "Friction bars work for trailers up to roughly 6,000 lbs loaded and in moderate conditions. They create friction resistance at the hitch pivot point. For heavier trailers (6,000-10,000 lbs), or for towing in windy conditions or mountainous terrain, friction bars can be overwhelmed and may not provide enough resistance. For these applications, a 4-point integrated sway control system (Equal-i-zer, Blue Ox SwayPro) or a dedicated dual-cam system (Reese Strait-Line) is significantly more effective because they resist sway through spring tension rather than friction alone.",
  },
];

const SWAY_DEVICES = [
  {
    type: "Friction Sway Bar",
    mechanism:
      "Single metal bar with friction pads clamped to a small ball mount on the hitch and A-frame",
    priceRange: "$50 - $150",
    bestFor: "Trailers under 6,000 lbs; occasional towing; flat terrain",
    limitations: "Must be removed for backing and tight turns; can be overwhelmed by heavy trailers; single point of resistance",
    rating: "Basic",
  },
  {
    type: "Dual-Cam Sway Control",
    mechanism:
      "Two cams engage spring bars, creating tension-based resistance that increases with sway angle",
    priceRange: "$250 - $400 (plus WDH)",
    bestFor: "Mid-to-large trailers 5,000-10,000 lbs; frequent highway towing",
    limitations: "Requires specific WDH compatible with dual-cam system; more complex setup; must be used with a weight distribution hitch",
    rating: "Very Good",
  },
  {
    type: "4-Point Integrated Sway Control",
    mechanism:
      "Built into the WDH head with 4 friction points (2 on the trunnion sockets, 2 on the spring bar ends)",
    priceRange: "$400 - $900",
    bestFor: "All travel trailers 3,500-12,000 lbs; the most popular choice for RV owners",
    limitations: "Spring bar tension must be matched to trailer weight; heavier than friction bar systems",
    rating: "Excellent",
  },
  {
    type: "Hitch Pin Stabilizer (Andersen)",
    mechanism:
      "Uses a brake-pad-style plate clamped between WDH head and receiver, with chains instead of spring bars",
    priceRange: "$400 - $600",
    bestFor: "Lightweight setups; owners who want easy hookup; trailers 3,000-8,000 lbs",
    limitations: "Less aggressive sway control than 4-point systems; chain tension needs frequent checking",
    rating: "Good",
  },
];

const SWAY_CAUSES = [
  {
    cause: "Insufficient tongue weight (<10%)",
    severity: "Critical",
    fix: "Redistribute cargo forward of the axle. Add heavy items (generator, batteries, tools) in the front of the trailer. Aim for 10-15% tongue weight.",
  },
  {
    cause: "Rear-loaded trailer (weight behind axles)",
    severity: "Critical",
    fix: "Move heavy items forward. The 60/40 rule: 60% of cargo weight should be forward of the trailer axle(s). Never load heavy items at the very rear.",
  },
  {
    cause: "Excessive speed (above 65 MPH)",
    severity: "High",
    fix: "Reduce speed to 60-63 MPH. Sway forces increase with the square of speed. At 70 MPH, sway forces are 36% higher than at 60 MPH.",
  },
  {
    cause: "Tire pressure mismatch (trailer or tow vehicle)",
    severity: "High",
    fix: "Check and match tire pressures to the tire placard values on both the truck and trailer before every trip. Underinflated tires create lateral flex that amplifies sway.",
  },
  {
    cause: "Worn or loose hitch components",
    severity: "Medium",
    fix: "Inspect ball mount, hitch ball, and receiver for wear. A worn hitch ball or loose ball mount creates play that allows initial sway movement. Replace worn parts immediately.",
  },
  {
    cause: "Crosswinds and passing vehicles",
    severity: "Medium",
    fix: "Install a 4-point sway control WDH. Slow down when passed by trucks. In sustained crosswinds over 25 MPH, consider pulling over and waiting it out.",
  },
  {
    cause: "Overloaded or under-loaded tow vehicle",
    severity: "Medium",
    fix: "Ensure your tow vehicle is within payload and GVWR limits. An overloaded rear axle reduces front axle grip, making the vehicle less able to resist trailer-induced steering inputs.",
  },
];

export default function RVSwayControlGuidePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <FaqJsonLd
        faqs={FAQS}
        baseUrl="https://rvtowingcalc.com/guides/rv-trailer-sway-control"
      />
      <ArticleJsonLd
        title="RV Trailer Sway Control: Causes, Prevention & Best Anti-Sway Devices"
        description="Complete guide to trailer sway prevention. Understand sway causes, proper tongue weight, weight distribution, and compare friction bar vs dual-cam vs Equal-i-zer anti-sway systems."
        url="https://rvtowingcalc.com/guides/rv-trailer-sway-control"
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
        <span className="text-gray-900">RV Trailer Sway Control</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
        RV Trailer Sway Control: Causes, Prevention &amp; Best Anti-Sway Devices
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        Trailer sway is the scariest thing that can happen to an RV owner at
        highway speed. One moment you are cruising at 65 MPH; the next, your
        trailer is wagging the truck like a dog shaking a toy. If it escalates
        into a &ldquo;trailer whip&rdquo; where the trailer oscillates wider
        and wider, the outcome is almost always a jackknife or rollover. The
        good news: sway is almost entirely preventable with the right loading
        technique, the right hitch equipment, and the right driving habits.
      </p>

      {/* What is sway */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          What Is Trailer Sway?
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            Trailer sway (also called &ldquo;fishtailing&rdquo;) is a lateral
            oscillation where the rear of the trailer swings side to side
            behind the hitch point. In mild cases, you feel a gentle wagging
            when a semi passes. In severe cases, the oscillation amplifies with
            each cycle until the trailer yanks the truck off the road.
          </p>
          <p>
            Physics makes this dangerous. A 6,000 lb trailer swinging 2 feet
            off-center applies a sideways force of 500-1,000 lbs at the hitch
            ball. That force is amplified through the hitch lever arm and can
            overcome the front tires&apos; grip, causing the tow vehicle to
            veer. At 65 MPH, you have less than one second to react before the
            second oscillation cycle begins.
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-gray-200 p-5 text-center">
              <p className="text-3xl font-bold text-warning-600">1-2 in</p>
              <p className="mt-1 text-xs text-gray-500">
                Normal sway when passed by a semi (self-correcting)
              </p>
            </div>
            <div className="rounded-xl border border-warning-200 bg-warning-50 p-5 text-center">
              <p className="text-3xl font-bold text-warning-600">6-12 in</p>
              <p className="mt-1 text-xs text-gray-500">
                Concerning sway (requires speed reduction)
              </p>
            </div>
            <div className="rounded-xl border border-danger-200 bg-danger-50 p-5 text-center">
              <p className="text-3xl font-bold text-danger-600">2+ ft</p>
              <p className="mt-1 text-xs text-gray-500">
                Dangerous sway (trailer whip imminent)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Causes */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          What Causes Trailer Sway?
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            Sway rarely has a single cause. It is usually a combination of
            factors that push the trailer past its stability threshold.
            Understanding each cause helps you diagnose and fix your setup:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-gray-300 bg-gray-50">
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Cause
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Severity
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    How to Fix
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {SWAY_CAUSES.map((row) => (
                  <tr key={row.cause}>
                    <td className="px-4 py-3 font-medium text-gray-700">
                      {row.cause}
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={
                          "inline-block rounded-full px-2 py-0.5 text-xs font-semibold " +
                          (row.severity === "Critical"
                            ? "bg-danger-100 text-danger-700"
                            : row.severity === "High"
                            ? "bg-warning-100 text-warning-700"
                            : "bg-gray-100 text-gray-600")
                        }
                      >
                        {row.severity}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-600">{row.fix}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="rounded-xl border-l-4 border-danger-500 bg-danger-50 p-4">
            <p className="text-sm text-danger-700">
              <strong>The #1 cause:</strong> Insufficient tongue weight. When
              tongue weight drops below 10% of trailer weight, the trailer
              becomes a pendulum. This is why loading technique matters more
              than any anti-sway device. No hitch can fully compensate for a
              badly loaded trailer.
            </p>
          </div>
        </div>
      </section>

      {/* Tongue weight */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          Tongue Weight: The Foundation of Sway Prevention
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            If you take only one thing from this guide, let it be this: proper
            tongue weight prevents more sway than any anti-sway device on the
            market. The hitch equipment is a backup for when loading and
            conditions are imperfect. It is not a substitute for correct
            loading.
          </p>
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-5">
            <h3 className="font-semibold text-gray-900">
              The 10-15% Rule for Travel Trailers
            </h3>
            <div className="mt-3 grid gap-3 sm:grid-cols-3">
              <div className="rounded-lg bg-danger-50 p-4 text-center">
                <p className="text-sm font-semibold text-danger-700">
                  Below 10%
                </p>
                <p className="mt-1 text-lg font-bold text-danger-600">
                  Sway Risk
                </p>
                <p className="mt-1 text-xs text-danger-600">
                  Unstable, pendulum effect
                </p>
              </div>
              <div className="rounded-lg bg-safe-50 p-4 text-center">
                <p className="text-sm font-semibold text-safe-700">
                  10-15%
                </p>
                <p className="mt-1 text-lg font-bold text-safe-600">
                  Sweet Spot
                </p>
                <p className="mt-1 text-xs text-safe-600">
                  Stable and self-correcting
                </p>
              </div>
              <div className="rounded-lg bg-warning-50 p-4 text-center">
                <p className="text-sm font-semibold text-warning-700">
                  Above 15%
                </p>
                <p className="mt-1 text-lg font-bold text-warning-600">
                  Overloaded
                </p>
                <p className="mt-1 text-xs text-warning-600">
                  Payload exceeded, rear sag
                </p>
              </div>
            </div>
            <p className="mt-3 text-sm text-gray-600">
              For a 6,500 lb loaded trailer, that means 650-975 lbs of tongue
              weight. For fifth wheels, the range is 15-25% due to the
              over-axle hitch position.
            </p>
          </div>
          <p>
            Measure your tongue weight before every major trip. A Sherline
            tongue weight scale ($150) is the most accurate home tool. You can
            also use a bathroom scale and a lever rig for trailers under 3,000
            lbs, or get a precise reading at a{" "}
            <Link
              href="/guides/cat-scale-weighing"
              className="font-semibold text-brand-600 underline"
            >
              CAT scale
            </Link>
            . Use our{" "}
            <Link
              href="/tongue-weight-calculator"
              className="font-semibold text-brand-600 underline"
            >
              Tongue Weight Calculator
            </Link>{" "}
            to find the right range for your specific trailer.
          </p>
          <p>
            For more detail on measuring and adjusting, see our{" "}
            <Link
              href="/guides/calculate-tongue-weight-travel-trailer"
              className="font-semibold text-brand-600 underline"
            >
              guide to calculating tongue weight
            </Link>{" "}
            and our{" "}
            <Link
              href="/guides/tongue-weight"
              className="font-semibold text-brand-600 underline"
            >
              complete tongue weight guide
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Loading technique */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          How to Load Your Trailer to Prevent Sway
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            Loading technique is the variable you control every single trip.
            Follow these rules to maintain stability:
          </p>
          <ul className="ml-6 list-disc space-y-2">
            <li>
              <strong>The 60/40 rule:</strong> Place 60% of your cargo weight
              forward of the trailer axle(s). Heavy items (generator, tools,
              canned goods, batteries) go in the front storage compartments.
            </li>
            <li>
              <strong>Low and centered:</strong> Store heavy items on the floor,
              not in overhead cabinets. Weight above the axle centerline
              increases the center of gravity and amplifies sway.
            </li>
            <li>
              <strong>Nothing at the very rear:</strong> Avoid loading bikes,
              firewood, or cargo carriers on the rear bumper. Rear weight acts
              as a lever that reduces effective tongue weight. A 100 lb item
              5 feet behind the axle can reduce tongue weight by 60-80 lbs.
            </li>
            <li>
              <strong>Secure everything:</strong> Shifting cargo during transit
              changes weight distribution dynamically. Use cargo nets, straps,
              and cabinet latches. A shifting load can turn a stable trailer
              into a swaying one mid-trip.
            </li>
            <li>
              <strong>Balance left-right:</strong> Keep side-to-side weight
              within 5% to prevent diagonal sway patterns. Check by weighing
              each side at a CAT scale if possible.
            </li>
          </ul>
          <p>
            For a deeper dive, read our{" "}
            <Link
              href="/guides/trailer-loading-position"
              className="font-semibold text-brand-600 underline"
            >
              Trailer Loading Position Guide
            </Link>{" "}
            with the complete 60/40 methodology and cargo distribution
            worksheet.
          </p>
        </div>
      </section>

      {/* Anti-sway devices */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          Anti-Sway Devices Compared
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            Anti-sway devices are categorized by how they resist the
            trailer&apos;s lateral movement. The four main types offer different
            levels of protection at different price points:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-gray-300 bg-gray-50">
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Type
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    How It Works
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Price
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Best For
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Rating
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {SWAY_DEVICES.map((row) => (
                  <tr key={row.type}>
                    <td className="px-4 py-3 font-medium text-gray-700">
                      {row.type}
                    </td>
                    <td className="px-4 py-3 text-xs text-gray-600">
                      {row.mechanism}
                    </td>
                    <td className="px-4 py-3 text-gray-600">
                      {row.priceRange}
                    </td>
                    <td className="px-4 py-3 text-xs text-gray-600">
                      {row.bestFor}
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={
                          "inline-block rounded-full px-2 py-0.5 text-xs font-semibold " +
                          (row.rating === "Excellent"
                            ? "bg-safe-100 text-safe-700"
                            : row.rating === "Very Good"
                            ? "bg-brand-100 text-brand-700"
                            : row.rating === "Good"
                            ? "bg-warning-100 text-warning-700"
                            : "bg-gray-100 text-gray-600")
                        }
                      >
                        {row.rating}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="rounded-xl border-l-4 border-brand-500 bg-brand-50 p-4">
            <p className="text-sm text-brand-700">
              <strong>Our recommendation:</strong> For most travel trailers in
              the 5,000-10,000 lb range, a 4-point integrated sway control WDH
              (Equal-i-zer, Blue Ox SwayPro, or Husky Center Line) offers the
              best combination of effectiveness, ease of use, and value. It
              eliminates the need for a separate friction bar and provides sway
              resistance that scales with the severity of the sway event.
            </p>
          </div>
          <p>
            For a complete WDH installation guide including tension
            adjustment, see our{" "}
            <Link
              href="/guides/weight-distribution-hitch-setup"
              className="font-semibold text-brand-600 underline"
            >
              Weight Distribution Hitch Setup Guide
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Emergency response */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          What to Do When Sway Happens
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            If you experience sustained sway, your response in the first 3
            seconds determines whether it resolves or escalates into a crash.
            Memorize this sequence:
          </p>
          <div className="space-y-3">
            <div className="flex items-start gap-3 rounded-lg border border-danger-200 bg-danger-50 p-4">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-danger-500 text-xs font-bold text-white">
                1
              </span>
              <div>
                <strong className="text-danger-800">
                  Hold the steering wheel straight
                </strong>
                <p className="mt-1 text-sm text-danger-700">
                  Do NOT counter-steer. Let the vehicle track straight. Counter-
                  steering amplifies the oscillation. Grip the wheel firmly with
                  both hands.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg border border-warning-200 bg-warning-50 p-4">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-warning-500 text-xs font-bold text-white">
                2
              </span>
              <div>
                <strong className="text-warning-800">
                  Do NOT hit the brakes
                </strong>
                <p className="mt-1 text-sm text-warning-700">
                  Braking shifts weight forward off the tongue, making sway
                  worse. Take your foot off the accelerator entirely. Let
                  aerodynamic drag and engine compression slow you naturally.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg border border-safe-200 bg-safe-50 p-4">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-safe-500 text-xs font-bold text-white">
                3
              </span>
              <div>
                <strong className="text-safe-800">
                  Apply the trailer brake manually
                </strong>
                <p className="mt-1 text-sm text-safe-700">
                  If you have a brake controller (you should), squeeze the
                  manual override lever. This pulls the trailer straight behind
                  the truck like an anchor. Hold it until the sway stops. This
                  is the single most effective emergency response.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg border border-gray-200 p-4">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-500 text-xs font-bold text-white">
                4
              </span>
              <div>
                <strong className="text-gray-900">
                  Pull over and inspect
                </strong>
                <p className="mt-1 text-sm text-gray-600">
                  Once speed drops below 30 MPH and sway has stopped, pull over
                  safely. Check your cargo distribution, tongue weight, WDH
                  tension, and tire pressures before continuing. Do not assume
                  it was &ldquo;just the wind.&rdquo;
                </p>
              </div>
            </div>
          </div>
          <p>
            For more on brake controllers and how to use the manual override
            effectively, see our{" "}
            <Link
              href="/guides/trailer-brake-controller-setup"
              className="font-semibold text-brand-600 underline"
            >
              Trailer Brake Controller Setup Guide
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Speed and driving habits */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          Speed and Driving Habits That Prevent Sway
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            Even a perfectly loaded trailer with the best hitch can sway if
            driven poorly. These habits keep you safe:
          </p>
          <ul className="ml-6 list-disc space-y-2">
            <li>
              <strong>Keep it under 65 MPH.</strong> Sway forces increase with
              the square of speed. At 70 MPH, aerodynamic and lateral forces are
              36% higher than at 60 MPH. Most trailer tires are rated for 65 MPH
              maximum sustained speed.
            </li>
            <li>
              <strong>Anticipate, don&apos;t react.</strong> Brake early and
              gradually. Hard braking destabilizes the trailer by shifting
              weight forward off the tongue. Use tow/haul mode to let engine
              braking handle deceleration.
            </li>
            <li>
              <strong>Watch for crosswind zones.</strong> Bridges, mountain
              passes, and open plains are crosswind hotspots. Check wind
              forecasts before trips. Sustained winds over 25 MPH warrant
              pulling over.
            </li>
            <li>
              <strong>Pass trucks smoothly.</strong> When overtaking or being
              overtaken by a semi, the pressure wave pushes the trailer
              sideways. Hold the wheel steady and do not brake. The sway should
              self-correct within one cycle if your setup is properly loaded.
            </li>
            <li>
              <strong>Use tow/haul mode.</strong> This adjusts shift points and
              engine braking to maintain stability on grades. See our{" "}
              <Link
                href="/guides/mountain-towing-transmission-gears"
                className="font-semibold text-brand-600 underline"
              >
                mountain towing gear guide
              </Link>{" "}
              for details.
            </li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-12 rounded-2xl bg-brand-600 p-8 text-center text-white">
        <h2 className="text-2xl font-bold">
          Is Your Setup Sway-Ready?
        </h2>
        <p className="mt-2 text-brand-100">
          Sway prevention starts with the numbers. Check your tongue weight,
          payload, and GVWR before your next trip&mdash;all free, all in under
          two minutes.
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
              href="/guides/trailer-loading-position"
              className="text-brand-600 hover:underline"
            >
              Trailer Loading Position Guide: The 60/40 Rule
            </Link>
          </li>
          <li>
            <Link
              href="/guides/trailer-brake-controller-setup"
              className="text-brand-600 hover:underline"
            >
              Trailer Brake Controller Setup: Installation &amp; Safety
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
              RV Industry Association (RVIA) Safety Standards
            </a>{" "}
            &mdash; rvia.org
          </li>
          <li>
            <a
              href="https://www.equalizerhitch.com/support/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 hover:underline"
            >
              Equal-i-zer Hitch Setup &amp; Sway Control Guide
            </a>{" "}
            &mdash; equalizerhitch.com
          </li>
          <li>
            <a
              href="https://www.etrailer.com/faq-swaycontrol.aspx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 hover:underline"
            >
              etrailer Sway Control FAQ
            </a>{" "}
            &mdash; etrailer.com
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
              href="https://www.fmcsa.dot.gov/regulations/title49/part/393"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 hover:underline"
            >
              FMCSA 49 CFR Part 393: Safe Operation Requirements
            </a>{" "}
            &mdash; fmcsa.dot.gov
          </li>
        </ul>
      </section>
    </div>
  );
}
