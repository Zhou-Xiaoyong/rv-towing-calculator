import type { Metadata } from "next";
import Link from "next/link";
import {
  FaqJsonLd,
  ArticleJsonLd,
  HowToJsonLd,
} from "@/components/seo/JsonLd";
import { DEFAULT_OG_IMAGES } from "@/lib/seo/default-og-image";

export const metadata: Metadata = {
  title: "Trailer Wheel Bearing Maintenance: How Often to Repack Bearings",
  description:
    "Trailer wheel bearing maintenance on a 12-month or 12,000-mile schedule: the four failure signs, hub temperature checks, repack steps, torque specs and real costs.",
  alternates: {
    canonical:
      "https://www.rvtowingcalc.com/guides/trailer-wheel-bearing-maintenance",
  },
  openGraph: {
    title: "Trailer Wheel Bearing Maintenance: How Often to Repack Bearings",
    description:
      "The 12 month / 12,000 mile repack rule, the four warning signs that catch a bearing before it seizes, the spindle nut adjustment, and what a DIY or shop repack really costs.",
    url: "https://www.rvtowingcalc.com/guides/trailer-wheel-bearing-maintenance",
    images: DEFAULT_OG_IMAGES,
  },
};

const FAQS = [
  {
    q: "How often should I repack my trailer wheel bearings?",
    a: "Every 12 months or 12,000 miles, whichever comes first. Both halves matter: grease oxidizes and separates while the trailer sits, so a trailer that only rolled 3,000 miles this year is still due. Drop to 6 months or 6,000 miles if you tow frequently, tow near GVWR, run long grades, drive in road salt, store outdoors, or ever submerge the hubs. A trailer that has been in water deep enough to reach the hubs needs a repack immediately, not at the next interval.",
  },
  {
    q: "Do E-Z Lube hubs replace a repack?",
    a: "No. E-Z Lube and similar greasable spindle designs push fresh grease through the hub without disassembly, which is useful between services and after brief water exposure. But they do not clean out the old grease, do not flush metallic particles and moisture pockets, and do not let anyone inspect the bearings and races for pitting. The full disassembly, clean, inspect and repack is still required at the 12 month / 12,000 mile mark.",
  },
  {
    q: "How hot is too hot for a trailer hub?",
    a: "Warm is normal. After a highway run every hub should feel roughly the same, and you should be able to hold your hand against one for a few seconds. The signal that matters is the difference between hubs, not the absolute number, because ambient temperature, sun side and brake use all move it. A hub running more than about 25 to 40 degrees hotter than its neighbours, or too hot to touch briefly, or throwing grease, warrants immediate attention. These are field thresholds, not a manufacturer specification \u2014 check your axle maker's literature for their own numbers.",
  },
  {
    q: "Can I repack trailer wheel bearings myself?",
    a: "Yes, if you are comfortable raising and properly supporting a trailer, working with a torque wrench and following a published procedure. It is messy rather than difficult: about 45 to 90 minutes per axle the first time, faster after that. You need a jack rated for the axle load, jack stands, a seal driver, a torque wrench, solvent, high-temperature wheel bearing grease, and a bearing and seal kit. Parts are inexpensive enough that most owners replace bearings and races rather than reusing them when there is any doubt.",
  },
  {
    q: "Should I replace bearings or just repack them?",
    a: "Repack when the bearings and races are clean, smooth and unmarked. Replace the whole set \u2014 bearing and race together, never one without the other \u2014 if you find pitting, spalling, blue or purple discolouration from heat, galling, or rollers that feel rough when you spin them. A kit with both bearings, both races and the seal typically costs less than the fuel for one long towing day, so the decision is usually about labour rather than parts.",
  },
];

const INTERVAL_TABLE = [
  ["Standard use", "12 months or 12,000 miles", "The industry baseline. The calendar applies even if you barely towed."],
  ["Frequent or heavy use", "6 months or 6,000 miles", "Monthly towing, running near GVWR, or long mountain grades."],
  ["Light use, indoor storage", "12 months, never beyond 24", "Grease still degrades while parked. Do not stretch past two years."],
  ["After any hub submersion", "Immediately", "Boat launches, flooded roads, deep crossings. Rust starts in hours."],
  ["New or newly purchased trailer", "Within the first few hundred miles", "Verifies the factory pack and seal seating before you rely on it."],
];

const HUB_TYPE_TABLE = [
  [
    "Standard grease-packed",
    "Hand-packed grease, dust cap",
    "Full disassembly at every interval",
    "Most travel trailers and fifth wheels",
  ],
  [
    "E-Z Lube / greasable spindle",
    "Zerk fitting at the spindle end",
    "Grease-through between services, full repack at the interval",
    "Many late-model trailers from the major axle builders",
  ],
  [
    "Oil bath",
    "Oil reservoir behind a clear cap",
    "Visual oil level plus periodic oil change, per spec",
    "Some larger fifth wheels and commercial trailers",
  ],
];

const TEMP_TABLE = [
  ["All hubs within a few degrees of each other", "Normal", "Keep towing, log the reading"],
  ["One hub 25-40\u00b0F hotter than the rest", "Friction is rising", "Repack before the next trip; check brake drag too"],
  ["Hub too hot to touch briefly, or smoking", "Bearing is failing", "Stop safely, do not continue"],
  ["Grease thrown onto the rim or fender", "Seal has failed", "Stop safely; the bearing is running dry"],
];

const TORQUE_TABLE = [
  ["Spindle nut, seat the bearings", "50 ft-lb while rotating", "Seats races and rollers before final adjustment"],
  ["Spindle nut, final", "Back off fully, then snug by hand", "Align to the nearest cotter pin hole; do not preload"],
  ["Lug nuts, 1/2 in studs", "90-120 ft-lb", "Confirm against your wheel manufacturer's spec"],
  ["Lug nut recheck", "After 25, 50 and 100 miles", "Then before every trip"],
];

const COST_TABLE = [
  ["Bearing, race and seal kit", "$25 - $45 per axle", "Both bearings, both races, two seals"],
  ["High-temperature bearing grease", "$10 - $18", "Enough for several axles"],
  ["Seal driver or adaptor", "$15 - $30", "One-time purchase"],
  ["Shop repack, per axle", "$150 - $350", "Labour only; parts extra"],
  ["Roadside failure repair", "$600 - $1,500+", "Spindle, hub, brake assembly, tow, lost trip"],
];

const HOWTO_STEPS = [
  {
    name: "Raise and support the trailer safely",
    text: "Chock the wheels that stay on the ground, loosen the lug nuts a turn before lifting, then raise the axle with a jack rated above the axle load and lower it onto jack stands. Never work under a trailer held only by a jack.",
  },
  {
    name: "Remove the wheel and dust cap",
    text: "Take the wheel off, then prise out the dust cap. Note the cap type before removing it so an E-Z Lube or oil bath cap goes back correctly.",
  },
  {
    name: "Extract the spindle nut and outer bearing",
    text: "Remove the cotter pin and spindle nut, then slide the outer bearing and thrust washer out. Keep the nut and washer together and note the bearing orientation.",
  },
  {
    name: "Pull the hub and drive out the old seal",
    text: "Slide the hub off the spindle in a straight line to avoid nicking it. Drive the old seal out from the back of the hub and lift out the inner bearing and race.",
  },
  {
    name: "Clean and inspect every surface",
    text: "Wash bearings, races and the hub cavity in solvent and dry them. Inspect for pitting, spalling, bluing from heat or a rough feel when spun. Any of those means replacing the bearing and its matching race together.",
  },
  {
    name: "Pack the bearings with fresh grease",
    text: "Work high-temperature wheel bearing grease through the rollers by hand or with a packer until it emerges from the far side, then coat the hub cavity and races lightly. Never mix grease chemistries.",
  },
  {
    name: "Reassemble with a new seal",
    text: "Fit the inner bearing, install a new seal square to the hub, slide the hub back onto the spindle and refit the outer bearing and washer. Never reuse a seal that has been removed.",
  },
  {
    name: "Adjust the spindle nut and fit a new cotter pin",
    text: "Torque the nut to about 50 ft-lb while spinning the hub to seat everything, back it off, then snug it by hand until it aligns with the nearest cotter pin hole. The wheel should spin freely with no detectable play.",
  },
  {
    name: "Torque the lug nuts and recheck",
    text: "Refit the wheel and torque the lug nuts to your wheel manufacturer's spec, then recheck after 25, 50 and 100 miles. Drive a short loop and feel each hub temperature before the next long trip.",
  },
];

export default function TrailerWheelBearingMaintenancePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <ArticleJsonLd
        title="Trailer Wheel Bearing Maintenance: How Often to Repack Bearings"
        description="Why trailer bearings fail faster than car bearings, the 12 month or 12,000 mile repack interval, the four warning signs, spindle nut adjustment, and real DIY versus shop costs."
        url="https://www.rvtowingcalc.com/guides/trailer-wheel-bearing-maintenance"
        datePublished="2026-09-17"
      />
      <FaqJsonLd
        faqs={FAQS}
        baseUrl="https://www.rvtowingcalc.com/guides/trailer-wheel-bearing-maintenance"
      />
      <HowToJsonLd
        name="How to Repack a Trailer Wheel Bearing"
        description="A step-by-step trailer wheel bearing repack: safe lifting, disassembly, inspection, packing with fresh grease, seal replacement and spindle nut adjustment."
        url="https://www.rvtowingcalc.com/guides/trailer-wheel-bearing-maintenance"
        totalTime="PT2H"
        steps={HOWTO_STEPS}
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
        <span className="text-gray-900">Wheel Bearing Maintenance</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
        Trailer Wheel Bearing Maintenance: How Often to Repack Bearings
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        Your trailer&apos;s wheel bearings are the only thing standing between a
        loaded rig and an axle on fire at 65 mph. They are also the most
        neglected item on a travel trailer, because unlike tires or lights they
        stay invisible until they fail. This guide covers the repack interval,
        the four signs that catch a bearing before it seizes, the spindle nut
        adjustment almost everyone gets wrong, and what the job actually costs.
      </p>

      <div className="mt-8 rounded-xl bg-brand-50 p-6">
        <h2 className="text-lg font-bold text-brand-800">The Short Answer</h2>
        <p className="mt-2 text-brand-700">
          Repack trailer wheel bearings every{" "}
          <strong>12 months or 12,000 miles</strong>, whichever comes first. The
          calendar half is the half owners forget: grease oxidizes and separates
          while the trailer sits, so a trailer that covered 3,000 miles this
          year is still due. Shorten the interval to{" "}
          <strong>6 months or 6,000 miles</strong> for frequent towing, heavy
          loads, mountain grades, road salt or outdoor storage &mdash; and
          repack immediately after any water deep enough to reach the hubs.
          E-Z Lube fittings do not replace a repack; they only bridge the gap
          between them.
        </p>
      </div>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Why Trailer Bearings Fail Faster Than Car Bearings
      </h2>
      <p className="mt-3 text-gray-700">
        A passenger car runs sealed, pre-loaded hub assemblies designed to
        outlive the vehicle. Almost every travel trailer runs the opposite: two
        tapered roller bearings per hub, hand-packed with grease, held by a
        spindle nut and a cotter pin, with a single lip seal keeping
        contaminants out. It is an old design that works extremely well &mdash;
        if somebody services it.
      </p>

      <h3 className="mt-6 text-xl font-semibold text-gray-900">
        Not sealed, and parked for months at a time
      </h3>
      <p className="mt-2 text-gray-700">
        One rubber lip seal and a dust cap is the entire defence, and every
        puddle, gravel road and winter of road salt works on it. Long idle
        periods make it worse: the oil in the grease separates from its
        thickener and drains away from the rollers, and temperature cycling
        pulls condensation into the hub. When the trailer finally moves, those
        dry surfaces generate immediate heat.
      </p>

      <h3 className="mt-6 text-xl font-semibold text-gray-900">
        Heat is what actually kills them
      </h3>
      <p className="mt-2 text-gray-700">
        Run a hub 50&deg;F hotter than normal and the base oil oxidizes, the
        remaining film loses load capacity, friction rises further, and failure
        accelerates. This is why overload matters: a trailer running at or above
        its GVWR keeps its bearings hotter on every trip, not just one bad day.
        Our{" "}
        <Link href="/guides/gawr-explained" className="text-brand-600 hover:underline">
          GAWR explainer
        </Link>{" "}
        and{" "}
        <Link
          href="/guides/dry-weight-vs-loaded-weight"
          className="text-brand-600 hover:underline"
        >
          dry weight vs loaded weight guide
        </Link>{" "}
        cover the load side of that equation.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        How Often to Repack Trailer Wheel Bearings
      </h2>
      <p className="mt-3 text-gray-700">
        The baseline is standard across the major axle manufacturers. What
        changes is everything surrounding your use case.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">
                Use pattern
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Repack interval
              </th>
              <th className="border px-3 py-2 text-left font-semibold">Note</th>
            </tr>
          </thead>
          <tbody>
            {INTERVAL_TABLE.map((row, i) => (
              <tr key={row[0]} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                <td className="border px-3 py-2 font-semibold">{row[0]}</td>
                <td className="border px-3 py-2">{row[1]}</td>
                <td className="border px-3 py-2 text-xs">{row[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm text-gray-500">
        Intervals reflect the general industry baseline published by axle
        manufacturers. Your trailer, axle and component manuals control the
        actual schedule &mdash; check them before relying on any generic figure,
        including these.
      </p>

      <h3 className="mt-6 text-xl font-semibold text-gray-900">
        What shortens the interval
      </h3>
      <ul className="mt-2 ml-6 list-disc space-y-2 text-gray-700">
        <li>
          <strong>Water exposure.</strong> A hot hub entering cool water draws
          moisture past the seal as it contracts. Repack after, not at the next
          interval.
        </li>
        <li>
          <strong>Towing near GVWR.</strong> More load means more heat on every
          mile. Check your real loaded weight with our{" "}
          <Link href="/gcwr-calculator" className="text-brand-600 hover:underline">
            GCWR calculator
          </Link>{" "}
          before assuming you have margin.
        </li>
        <li>
          <strong>Long grades and sustained highway speeds.</strong> A{" "}
          <Link
            href="/guides/mountain-towing-transmission-gears"
            className="text-brand-600 hover:underline"
          >
            mountain descent
          </Link>{" "}
          puts far more heat into the hubs than the same miles on flat ground.
        </li>
        <li>
          <strong>Road salt, coastal air and outdoor storage.</strong> Corrosion
          starts inside the hub, where you cannot see it.
        </li>
      </ul>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Know Which Hub You Have
      </h2>
      <p className="mt-3 text-gray-700">
        The maintenance routine follows the hub design, and the three common
        designs are not interchangeable.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">Type</th>
              <th className="border px-3 py-2 text-left font-semibold">
                How it is lubricated
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Service routine
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Usually found on
              </th>
            </tr>
          </thead>
          <tbody>
            {HUB_TYPE_TABLE.map((row, i) => (
              <tr key={row[0]} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                <td className="border px-3 py-2 font-semibold">{row[0]}</td>
                <td className="border px-3 py-2">{row[1]}</td>
                <td className="border px-3 py-2">{row[2]}</td>
                <td className="border px-3 py-2 text-xs">{row[3]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-gray-700">
        The most common misunderstanding in trailer maintenance is treating a
        greasable spindle as a substitute for the interval. Pushing grease
        through cannot clean out the old grease, flush metallic particles out of
        the rollers, or let anyone look at the bearing and race surfaces.
        Inspection is half the point &mdash; catching a pitted race is what
        prevents the roadside failure. Use the fitting as a supplement and still
        disassemble at the interval.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Four Warning Signs You Can Check in Five Minutes
      </h2>
      <p className="mt-3 text-gray-700">
        You do not need to wait for the annual service to find trouble. These
        four checks take less time than fuelling up.
      </p>

      <h3 className="mt-6 text-xl font-semibold text-gray-900">
        1. Hub temperature
      </h3>
      <p className="mt-2 text-gray-700">
        At every fuel stop, walk the trailer with an infrared thermometer or the
        back of your hand and compare the hubs to each other. The absolute
        number is not very informative &mdash; ambient temperature, sun side and
        brake use all move it. The <em>difference</em> is informative.
      </p>

      <svg
        viewBox="0 0 680 200"
        width="100%"
        role="img"
        aria-label="Diagram comparing four trailer hub temperature readings, where three hubs read between 118 and 124 degrees Fahrenheit and one hub reads 176 degrees, indicating a bearing problem"
        className="mt-6 w-full rounded-xl border border-gray-200 bg-white"
      >
        <title>
          Comparing hub temperatures across a tandem axle trailer
        </title>
        <rect x="0" y="0" width="680" height="200" fill="#ffffff" />
        <text
          x="24"
          y="34"
          fill="#111827"
          fontSize="15"
          fontWeight="700"
          fontFamily="system-ui, sans-serif"
        >
          Compare hubs to each other, not to a number
        </text>
        <text
          x="24"
          y="56"
          fill="#6b7280"
          fontSize="12"
          fontFamily="system-ui, sans-serif"
        >
          Same trailer, same stop, ambient 82&#176;F
        </text>

        {[
          { x: 60, temp: "121\u00b0F", hot: false },
          { x: 190, temp: "118\u00b0F", hot: false },
          { x: 320, temp: "176\u00b0F", hot: true },
          { x: 450, temp: "124\u00b0F", hot: false },
        ].map((hub) => (
          <g key={hub.x}>
            <rect
              x={hub.x}
              y="86"
              width="110"
              height="62"
              rx="10"
              fill={hub.hot ? "#fee2e2" : "#f3f4f6"}
              stroke={hub.hot ? "#dc2626" : "#9ca3af"}
              strokeWidth="2"
            />
            <circle
              cx={hub.x + 55}
              cy="108"
              r="10"
              fill={hub.hot ? "#dc2626" : "#9ca3af"}
            />
            <text
              x={hub.x + 55}
              y="136"
              fill={hub.hot ? "#b91c1c" : "#374151"}
              fontSize="15"
              fontWeight="700"
              textAnchor="middle"
              fontFamily="system-ui, sans-serif"
            >
              {hub.temp}
            </text>
          </g>
        ))}

        <text
          x="375"
          y="176"
          fill="#b91c1c"
          fontSize="13"
          fontWeight="700"
          textAnchor="middle"
          fontFamily="system-ui, sans-serif"
        >
          58&#176;F hotter than the others &mdash; repack before the next trip
        </text>
        <text
          x="115"
          y="176"
          fill="#6b7280"
          fontSize="12"
          textAnchor="middle"
          fontFamily="system-ui, sans-serif"
        >
          Normal
        </text>
        <text
          x="505"
          y="176"
          fill="#6b7280"
          fontSize="12"
          textAnchor="middle"
          fontFamily="system-ui, sans-serif"
        >
          Normal
        </text>
      </svg>
      <p className="mt-3 text-sm text-gray-500">
        Field thresholds, not manufacturer specifications. Confirm your axle
        maker&apos;s guidance before acting on any specific temperature.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">
                What you observe
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                What it means
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                What to do
              </th>
            </tr>
          </thead>
          <tbody>
            {TEMP_TABLE.map((row, i) => (
              <tr key={row[0]} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                <td className="border px-3 py-2 font-semibold">{row[0]}</td>
                <td className="border px-3 py-2">{row[1]}</td>
                <td className="border px-3 py-2">{row[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-gray-700">
        A hot hub is not always a bearing. A dragging brake, over-adjusted shoes
        or a sticking breakaway cable will heat a hub just as effectively. Check
        brake adjustment before you blame the bearing &mdash; our{" "}
        <Link
          href="/guides/trailer-brake-controller-setup"
          className="text-brand-600 hover:underline"
        >
          brake controller setup guide
        </Link>{" "}
        covers gain and drag checks.
      </p>

      <h3 className="mt-6 text-xl font-semibold text-gray-900">
        2. The 12-and-6 play test
      </h3>
      <p className="mt-2 text-gray-700">
        Raise the wheel off the ground, grab the tire at the 12 and 6
        o&apos;clock positions and try to rock it top to bottom. Repeat at 3 and
        9 o&apos;clock. There should be essentially no movement.
      </p>

      <svg
        viewBox="0 0 680 260"
        width="100%"
        role="img"
        aria-label="Diagram of a trailer wheel showing arrows at the twelve and six o'clock positions and at the three and nine o'clock positions, for testing wheel bearing play"
        className="mt-6 w-full rounded-xl border border-gray-200 bg-white"
      >
        <title>Testing wheel bearing play at 12 and 6 o&apos;clock</title>
        <rect x="0" y="0" width="680" height="260" fill="#ffffff" />
        <text
          x="24"
          y="32"
          fill="#111827"
          fontSize="15"
          fontWeight="700"
          fontFamily="system-ui, sans-serif"
        >
          The 12-and-6 play test
        </text>

        <circle
          cx="340"
          cy="140"
          r="86"
          fill="#f3f4f6"
          stroke="#374151"
          strokeWidth="8"
        />
        <circle
          cx="340"
          cy="140"
          r="50"
          fill="#ffffff"
          stroke="#9ca3af"
          strokeWidth="2"
        />
        <circle cx="340" cy="140" r="12" fill="#6b7280" />

        <line x1="340" y1="24" x2="340" y2="48" stroke="#2563eb" strokeWidth="3" />
        <polygon points="340,52 334,40 346,40" fill="#2563eb" />
        <line x1="340" y1="256" x2="340" y2="232" stroke="#2563eb" strokeWidth="3" />
        <polygon points="340,228 334,240 346,240" fill="#2563eb" />

        <line x1="232" y1="140" x2="256" y2="140" stroke="#2563eb" strokeWidth="3" />
        <polygon points="260,140 248,134 248,146" fill="#2563eb" />
        <line x1="448" y1="140" x2="424" y2="140" stroke="#2563eb" strokeWidth="3" />
        <polygon points="420,140 432,134 432,146" fill="#2563eb" />

        <text
          x="340"
          y="106"
          fill="#374151"
          fontSize="12"
          fontWeight="700"
          textAnchor="middle"
          fontFamily="system-ui, sans-serif"
        >
          12
        </text>
        <text
          x="340"
          y="186"
          fill="#374151"
          fontSize="12"
          fontWeight="700"
          textAnchor="middle"
          fontFamily="system-ui, sans-serif"
        >
          6
        </text>

        <text
          x="24"
          y="132"
          fill="#374151"
          fontSize="12"
          fontFamily="system-ui, sans-serif"
        >
          Rock top to bottom,
        </text>
        <text
          x="24"
          y="150"
          fill="#374151"
          fontSize="12"
          fontFamily="system-ui, sans-serif"
        >
          then side to side.
        </text>
        <text
          x="24"
          y="168"
          fill="#374151"
          fontSize="12"
          fontFamily="system-ui, sans-serif"
        >
          The wheel must be
        </text>
        <text
          x="24"
          y="186"
          fill="#374151"
          fontSize="12"
          fontFamily="system-ui, sans-serif"
        >
          off the ground.
        </text>

        <text
          x="466"
          y="120"
          fill="#047857"
          fontSize="12"
          fontWeight="700"
          fontFamily="system-ui, sans-serif"
        >
          No play = healthy
        </text>
        <text
          x="466"
          y="142"
          fill="#b91c1c"
          fontSize="12"
          fontWeight="700"
          fontFamily="system-ui, sans-serif"
        >
          Any clunk = worn
        </text>
        <text
          x="466"
          y="164"
          fill="#b91c1c"
          fontSize="12"
          fontFamily="system-ui, sans-serif"
        >
          bearing, or a loose
        </text>
        <text
          x="466"
          y="186"
          fill="#b91c1c"
          fontSize="12"
          fontFamily="system-ui, sans-serif"
        >
          spindle nut
        </text>
      </svg>
      <p className="mt-3 text-sm text-gray-500">
        Movement top to bottom points at bearing wear or adjustment. Movement
        side to side usually points at a worn spindle or a failing hub. Both are
        grounded conditions.
      </p>

      <h3 className="mt-6 text-xl font-semibold text-gray-900">
        3. Noise that tracks speed, not rpm
      </h3>
      <p className="mt-2 text-gray-700">
        A failing bearing hums, growls or grinds in proportion to road speed,
        not engine rpm. Turning gently left and right shifts load across the
        axle and often changes the noise &mdash; a strong bearing signal. A
        trailer has no cabin between you and the wheel, so any new rotational
        noise deserves a stop and a hub check.
      </p>

      <h3 className="mt-6 text-xl font-semibold text-gray-900">
        4. Grease where grease should not be
      </h3>
      <p className="mt-2 text-gray-700">
        A dark, oily film sprayed across the rim or streaked out from behind the
        hub means the seal has failed and grease is being pushed out. Where
        grease escapes, water and grit get in. Treat any grease throw as a
        scheduled repack that just became immediate.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Overload Is a Bearing Problem, Not Just a Payload Problem
      </h2>
      <p className="mt-3 text-gray-700">
        Bearing life is a function of load and heat, and trailer weight pushes
        both. Owners who add a toolbox, a second battery bank, a generator or a
        full fresh water tank rarely think of it as taking years off the
        bearings, but that is what happens, silently. Confirm what the trailer
        actually weighs loaded and how much of its{" "}
        <Link
          href="/guides/cargo-carrying-capacity-ccc"
          className="text-brand-600 hover:underline"
        >
          cargo carrying capacity
        </Link>{" "}
        you have consumed, then run the figures through the{" "}
        <Link href="/gvwr-calculator" className="text-brand-600 hover:underline">
          GVWR calculator
        </Link>{" "}
        and the{" "}
        <Link href="/payload-calculator" className="text-brand-600 hover:underline">
          payload calculator
        </Link>
        .
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        How to Repack a Trailer Wheel Bearing
      </h2>
      <p className="mt-3 text-gray-700">
        A repack is dirty work rather than skilled work, but two parts of it are
        unforgiving: inspecting the races properly, and adjusting the spindle
        nut.
      </p>
      <ol className="mt-3 ml-6 list-decimal space-y-3 text-gray-700">
        <li>
          <strong>Raise and support the trailer safely.</strong> Chock the
          wheels staying on the ground and loosen the lug nuts a turn before
          lifting. Use a jack rated above the axle load and lower the trailer
          onto jack stands. Never work under a trailer held only by a jack.
        </li>
        <li>
          <strong>Remove the wheel and dust cap,</strong> noting the cap type
          before you remove it so an E-Z Lube or oil bath cap goes back
          correctly.
        </li>
        <li>
          <strong>Extract the cotter pin, spindle nut and outer bearing,</strong>{" "}
          then pull the hub and drive out the old seal, sliding the hub off in a
          straight line to avoid nicking the spindle. Keep the nut and washer
          together and note bearing orientation.
        </li>
        <li>
          <strong>Clean and inspect everything.</strong> This is the step that
          justifies the whole job. Look for pitting, spalling, bluing or a rough
          feel when the bearing spins. If the cone is damaged, the matching race
          is too &mdash; replace them as a pair.
        </li>
        <li>
          <strong>Pack with fresh high-temperature bearing grease</strong> and
          reassemble with a new seal. Work the grease through the rollers until
          it emerges from the small end, coat the races and hub cavity lightly,
          and do not mix grease chemistries. New seals are cheap; reused seals
          are the most common cause of a repeat failure.
        </li>
        <li>
          <strong>Adjust the spindle nut and fit a new cotter pin.</strong>{" "}
          Torque to about 50 ft-lb while spinning the hub to seat the bearings,
          back the nut off completely, then snug it by hand to the nearest
          cotter pin hole. The wheel must spin freely with no play.
        </li>
        <li>
          <strong>Torque the lug nuts and recheck</strong> after 25, 50 and 100
          miles, then before every trip.
        </li>
      </ol>
      <p className="mt-3 text-gray-700">
        Whichever axle you have, follow its published procedure. Pair the
        inspection with the rest of your walk-around &mdash; our{" "}
        <Link
          href="/guides/travel-trailer-pre-trip-inspection"
          className="text-brand-600 hover:underline"
        >
          pre-trip inspection checklist
        </Link>{" "}
        and{" "}
        <Link
          href="/guides/travel-trailer-tire-safety"
          className="text-brand-600 hover:underline"
        >
          trailer tire safety guide
        </Link>{" "}
        cover the other wheel-end items you will already be looking at, and
        bearing service slots naturally into the{" "}
        <Link href="/guides/spring-checklist" className="text-brand-600 hover:underline">
          spring checklist
        </Link>
        .
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Torque Specs and What the Job Costs
      </h2>
      <p className="mt-3 text-gray-700">
        Over-tightening a spindle nut is the classic DIY error. Preloading a
        tapered roller bearing removes the running clearance it needs, and the
        bearing destroys itself within a few hundred miles &mdash; usually on
        the first long trip. Tighten to seat, then back off and adjust so the
        wheel turns freely.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">
                Fastener
              </th>
              <th className="border px-3 py-2 text-left font-semibold">Spec</th>
              <th className="border px-3 py-2 text-left font-semibold">Note</th>
            </tr>
          </thead>
          <tbody>
            {TORQUE_TABLE.map((row, i) => (
              <tr key={row[0]} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                <td className="border px-3 py-2 font-semibold">{row[0]}</td>
                <td className="border px-3 py-2">{row[1]}</td>
                <td className="border px-3 py-2 text-xs">{row[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm text-gray-500">
        Commonly published values, shown for orientation only. Your axle and
        wheel manufacturer&apos;s figures always take precedence.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">Item</th>
              <th className="border px-3 py-2 text-left font-semibold">
                Typical cost
              </th>
              <th className="border px-3 py-2 text-left font-semibold">Note</th>
            </tr>
          </thead>
          <tbody>
            {COST_TABLE.map((row, i) => (
              <tr key={row[0]} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                <td className="border px-3 py-2 font-semibold">{row[0]}</td>
                <td className="border px-3 py-2">{row[1]}</td>
                <td className="border px-3 py-2 text-xs">{row[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm text-gray-500">
        Representative US ranges for planning. Labour rates and axle sizes vary
        widely by region.
      </p>

      <div className="mt-10 rounded-2xl bg-brand-600 p-8 text-center text-white">
        <h2 className="text-2xl font-bold">
          Is Your Trailer Loaded Heavier Than You Think?
        </h2>
        <p className="mt-2 text-brand-100">
          Bearing heat starts with weight. Check your trailer weight, tongue
          weight and payload in under two minutes &mdash; free, no sign-up.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link
            href="/gvwr-calculator"
            className="inline-block rounded-xl bg-white px-6 py-3 text-sm font-bold text-brand-700 shadow-lg transition-all hover:bg-brand-50 active:scale-[0.99]"
          >
            GVWR Calculator
          </Link>
          <Link
            href="/tongue-weight-calculator"
            className="inline-block rounded-xl bg-white px-6 py-3 text-sm font-bold text-brand-700 shadow-lg transition-all hover:bg-brand-50 active:scale-[0.99]"
          >
            Tongue Weight Calculator
          </Link>
          <Link
            href="/checklist"
            className="inline-block rounded-xl bg-white px-6 py-3 text-sm font-bold text-brand-700 shadow-lg transition-all hover:bg-brand-50 active:scale-[0.99]"
          >
            Printable Checklist
          </Link>
        </div>
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          Frequently Asked Questions
        </h2>
        <div className="mt-6 space-y-4">
          {FAQS.map((faq, i) => (
            <div key={i} className="rounded-xl border border-gray-200 p-5">
              <h3 className="font-semibold text-gray-900">{faq.q}</h3>
              <p className="mt-2 text-gray-700">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Sources &amp; References
      </h2>
      <ul className="mt-3 space-y-1 text-sm text-gray-600">
        <li>
          <a
            href="https://www.dexteraxle.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            Dexter Axle &mdash; operation and maintenance service manuals,
            bearing and brake service schedules
          </a>
        </li>
        <li>
          <a
            href="https://www.lci1.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            Lippert Components &mdash; axle, suspension and wheel-end service
            documentation
          </a>
        </li>
        <li>
          <a
            href="https://www.rvia.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            RV Industry Association (RVIA) &mdash; trailer weight labelling and
            maintenance standards
          </a>
        </li>
        <li>
          <a
            href="https://www.nhtsa.gov/equipment/tires"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            NHTSA &mdash; tire safety, load rating and inspection guidance
          </a>
        </li>
        <li>
          <a
            href="https://www.rvsafety.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            RV Safety &amp; Education Foundation (RVSEF) &mdash; independent
            weighing and load distribution education
          </a>
        </li>
        <li>
          <a
            href="https://catscale.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            CAT Scale &mdash; certified public weigh stations
          </a>
        </li>
      </ul>

      <div className="mt-10 rounded-xl border border-gray-200 bg-gray-50 p-6">
        <h3 className="font-bold text-gray-900">Related Guides</h3>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          <li>
            <Link
              href="/guides/travel-trailer-tire-safety"
              className="text-brand-600 hover:underline"
            >
              Travel Trailer Tire Safety
            </Link>
          </li>
          <li>
            <Link
              href="/guides/travel-trailer-pre-trip-inspection"
              className="text-brand-600 hover:underline"
            >
              Pre-Trip Inspection Checklist
            </Link>
          </li>
          <li>
            <Link
              href="/guides/gawr-explained"
              className="text-brand-600 hover:underline"
            >
              GAWR Explained
            </Link>
          </li>
          <li>
            <Link
              href="/guides/trailer-brake-controller-setup"
              className="text-brand-600 hover:underline"
            >
              Trailer Brake Controller Setup
            </Link>
          </li>
          <li>
            <Link
              href="/guides/dry-weight-vs-loaded-weight"
              className="text-brand-600 hover:underline"
            >
              Dry Weight vs Loaded Weight
            </Link>
          </li>
          <li>
            <Link href="/guides/winter-storage" className="text-brand-600 hover:underline">
              Winter RV Storage Guide
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
