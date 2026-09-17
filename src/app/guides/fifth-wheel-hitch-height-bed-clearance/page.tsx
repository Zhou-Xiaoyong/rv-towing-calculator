import type { Metadata } from "next";
import Link from "next/link";
import {
  FaqJsonLd,
  ArticleJsonLd,
  HowToJsonLd,
} from "@/components/seo/JsonLd";
import { DEFAULT_OG_IMAGES } from "@/lib/seo/default-og-image";

export const metadata: Metadata = {
  title: "5th Wheel Hitch Height and Bed Clearance: The Setup Guide",
  description:
    "Set 5th wheel hitch height and bed rail clearance correctly: the measurement formula, the 5.5 to 6 inch rule, pin box adjustment, sliders and pin weight limits.",
  alternates: {
    canonical:
      "https://www.rvtowingcalc.com/guides/fifth-wheel-hitch-height-bed-clearance",
  },
  openGraph: {
    title: "5th Wheel Hitch Height and Bed Clearance: The Setup Guide",
    description:
      "How to measure kingpin and bed rail height, calculate the hitch height you need, hold the 5.5 to 6 inch clearance rule, and know when to adjust the pin box instead.",
    url: "https://www.rvtowingcalc.com/guides/fifth-wheel-hitch-height-bed-clearance",
    images: DEFAULT_OG_IMAGES,
  },
};

const FAQS = [
  {
    q: "How do I calculate the right 5th wheel hitch height?",
    a: "Measure from the ground to the underside of the kingpin plate with the trailer levelled on level ground \u2014 call it A. Measure from the ground to the top of your truck bed rails with the truck loaded as it will be when towing \u2014 call it B. Your starting hitch height is roughly A minus B, plus an allowance for suspension squat once the pin weight settles onto the rear axle. Published guidance from hitch makers puts that squat allowance anywhere from about 1 to 2 inches up to 5 inches depending on the truck and trailer, so treat the formula as a starting point, couple up, and measure again.",
  },
  {
    q: "How much bed rail clearance do I need for a fifth wheel?",
    a: "At least 5.5 inches, and 6 inches is a safer working target. CURT publishes 5.5 inches as the minimum clearance between the top of the pickup bed walls and the underside of the trailer overhang; other hitch manufacturers and installers commonly cite 6 inches. That gap has to survive bed flex, suspension travel, steep driveway angles, fuel-station aprons and potholes, all of which momentarily close it. Four inches or less is a genuine risk of a bed-rail strike, which does thousands of dollars of damage to the truck and often the trailer.",
  },
  {
    q: "What happens if my fifth wheel rides nose high?",
    a: "Two things, both bad. The trailer frame tilts back, shifting load onto the rear trailer axle and unloading the front one \u2014 uneven tire wear, a hotter rear axle, and less braking contribution from the axle now doing more of the work. And tipping the trailer up transfers weight rearward off the truck's rear axle, which lifts the truck's front end and lightens the steering axle. You feel it as vague steering and a floating front end. Level is the target; a small amount of nose-down is generally tolerated, nose-high is the one to fix.",
  },
  {
    q: "Do I need a slider hitch for a short bed truck?",
    a: "You need something that creates turning room: a sliding hitch, a Sidewinder-style rotating pin box, or a pin box extension, depending on your truck, hitch and trailer. Short beds of roughly 6.5 feet and under put the cab much closer to the trailer's front corner, and at low speed and full lock the trailer can contact the cab. A manual slider lets you lock the hitch rearward for maneuvering and forward for highway stability; an automatic slider does it without you leaving the cab. Either way, the slider solves cab clearance \u2014 it does not fix a hitch set too high or too low.",
  },
  {
    q: "Why is my fifth wheel still not level at the highest hitch setting?",
    a: "Because the hitch is only one of two height adjustments. When the hitch head runs out of travel in the direction you need, the pin box becomes the adjustment. Moving the pin box down on its mounting wings raises the trailer body relative to the hitch, which adds bed rail clearance and takes out a nose-high stance. Moving it up lowers the trailer body and takes out a nose-low stance. Check both before concluding your setup cannot be made level, and re-measure trailer level and rail clearance together after every change.",
  },
];

const FORMULA_TABLE = [
  ["A", "Ground to the bottom of the kingpin plate", "Trailer on level ground, levelled on its landing gear, uncoupled"],
  ["B", "Ground to the top of the truck bed rails", "Truck loaded as towed: fuel, passengers, cargo, hitch installed"],
  ["A \u2212 B", "Starting hitch height above the bed rails", "Add a squat allowance, then couple up and re-measure"],
  ["Squat", "1 in to 5 in depending on truck and trailer", "Some makers publish a 2 in estimate; verify by measuring after coupling"],
  ["Clearance", "5.5 in minimum, 6 in target", "Measured after coupling, on level ground"],
];

const STANCE_TABLE = [
  [
    "Nose high",
    "Trailer frame tilts up at the front",
    "Rear trailer axle overloaded, steer axle unloaded",
    "Lower the hitch head, or raise the pin box",
  ],
  [
    "Level",
    "Front and rear frame heights match",
    "Load shared across both trailer axles, full steering weight",
    "Target stance \u2014 re-check after every load change",
  ],
  [
    "Nose low",
    "Trailer frame tilts down at the front",
    "Front trailer axle overloaded, tail can drag on ramps",
    "Raise the hitch head, or lower the pin box",
  ],
];

const CLEARANCE_TABLE = [
  ["4 in or less", "Critical", "Do not tow. A dip or driveway will strike the bed rail."],
  ["5.5 in", "Minimum", "Published minimum from CURT. Workable if load and route are known."],
  ["6 - 7 in", "Optimal", "The working target. Enough travel without lifting the nose."],
  ["8 in or more", "Too much", "Usually means the trailer is nose high. Re-check trailer level."],
];

const PIN_WEIGHT_TABLE = [
  [
    "27 - 30 ft",
    "9,000 - 12,000 lbs",
    "1,800 - 2,400 lbs",
    "3/4-ton realistically; half-ton only at the very bottom of this range",
  ],
  ["30 - 34 ft", "12,000 - 14,500 lbs", "2,400 - 3,000 lbs", "3/4-ton"],
  [
    "34 - 38 ft",
    "14,500 - 17,000 lbs",
    "2,900 - 3,600 lbs",
    "3/4-ton single rear wheel at the bottom, 1-ton single rear wheel above",
  ],
  [
    "38 ft and up",
    "17,000 - 21,000 lbs",
    "3,400 - 4,400 lbs",
    "1-ton dual rear wheel",
  ],
];

const HOWTO_STEPS = [
  {
    name: "Load the truck before you measure anything",
    text: "Fill the fuel tank, leave the hitch and bed cargo in place, and put the normal passenger load in the cab. Suspension squat changes your bed rail height, and measuring an empty truck produces a hitch height that is wrong the moment you hook up.",
  },
  {
    name: "Level the trailer and measure the kingpin plate height",
    text: "With the trailer uncoupled on level ground, use the landing gear to level it side to side and front to back. Measure from the ground to the underside of the kingpin plate. Record it as A.",
  },
  {
    name: "Measure the loaded bed rail height",
    text: "Measure from the ground to the top of the bed rails at the point where the trailer overhang passes them, usually just forward of the wheel wells. Record it as B.",
  },
  {
    name: "Compute your starting hitch height",
    text: "Subtract B from A and add an allowance for suspension squat. That total is your starting hitch head height above the bed rails. Treat it as a starting point, not a finished number.",
  },
  {
    name: "Set the hitch head one increment at a time",
    text: "Uncouple, support the head, remove the vertical adjustment hardware, and move the head to the calculated position. Re-torque every bolt to the hitch manufacturer's specification with a torque wrench before coupling again.",
  },
  {
    name: "Couple up, then re-measure two things",
    text: "After hitching, measure both trailer level and bed rail clearance. Level is measured on the trailer frame, not the floor, which is often sloped for drainage. If either is wrong, change one increment and repeat.",
  },
  {
    name: "Adjust the pin box if the hitch is out of range",
    text: "If the hitch has run out of adjustment, move the pin box on its wings in the direction that fixes the stance, then start the measure-and-verify loop again. Every change moves both level and clearance.",
  },
  {
    name: "Confirm the finished setup at a scale",
    text: "Weigh the rig to verify that pin weight, truck payload, rear axle weight and trailer axle weights all sit inside their ratings. Height and clearance are geometry; the scale is the only way to confirm the loads themselves.",
  },
];

export default function FifthWheelHitchHeightBedClearancePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <ArticleJsonLd
        title="5th Wheel Hitch Height and Bed Clearance: The Setup Guide"
        description="How to measure kingpin and bed rail height, calculate the correct 5th wheel hitch height, hold the 5.5 to 6 inch bed rail clearance rule, and when to adjust the pin box instead."
        url="https://www.rvtowingcalc.com/guides/fifth-wheel-hitch-height-bed-clearance"
        datePublished="2026-09-17"
      />
      <FaqJsonLd
        faqs={FAQS}
        baseUrl="https://www.rvtowingcalc.com/guides/fifth-wheel-hitch-height-bed-clearance"
      />
      <HowToJsonLd
        name="How to Set Fifth Wheel Hitch Height and Bed Rail Clearance"
        description="A step-by-step process for measuring kingpin height and loaded bed rail height, calculating the starting hitch height, holding bed rail clearance, and verifying the finished setup at a scale."
        url="https://www.rvtowingcalc.com/guides/fifth-wheel-hitch-height-bed-clearance"
        totalTime="PT1H30M"
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
        <span className="text-gray-900">5th Wheel Hitch Height</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
        5th Wheel Hitch Height and Bed Clearance: The Setup Guide
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        Hitch height is the one fifth wheel setup dimension most owners guess
        at, and the one that quietly decides whether your trailer tracks straight
        or your truck&apos;s steering axle goes light at 70 mph. Two numbers
        matter: the height of the hitch head above the bed rails, and the gap
        that has to survive every driveway, dip and fuel-station apron you will
        ever cross. This is how to measure both, and how to know when the fix
        belongs on the trailer&apos;s pin box rather than the hitch.
      </p>

      <div className="mt-8 rounded-xl bg-brand-50 p-6">
        <h2 className="text-lg font-bold text-brand-800">The Short Answer</h2>
        <p className="mt-2 text-brand-700">
          Measure the height from the ground to the underside of the{" "}
          <strong>kingpin plate</strong> with the trailer level (A), and from
          the ground to the top of the{" "}
          <strong>loaded truck bed rails</strong> (B). Your starting hitch
          height is <strong>A &minus; B</strong> plus an allowance for
          suspension squat. Then couple up and hold two things at once:{" "}
          <strong>5.5 to 6 inches of bed rail clearance</strong> at minimum, and
          a trailer frame that is <strong>level</strong> &mdash; measured on the
          frame, not the floor. If the hitch runs out of adjustment, the pin box
          is your second lever. Change one increment at a time, re-torque, and
          re-measure both numbers.
        </p>
      </div>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Why Hitch Height Matters More Than It Looks
      </h2>
      <p className="mt-3 text-gray-700">
        A travel trailer hangs on a ball behind the truck, so getting the nose
        angle wrong mostly changes tongue weight distribution. A fifth wheel is
        different: the pin sits over the truck&apos;s rear axle and the trailer
        is a rigid beam pivoting at that point. Tilt that beam and you
        simultaneously move weight between the trailer&apos;s own axles and
        change how much load the truck&apos;s front axle carries.
      </p>
      <p className="mt-3 text-gray-700">
        A nose-high fifth wheel unloads the front trailer axle and overloads the
        rear one &mdash; the condition that eats trailer tires and reduces the
        braking contribution from the axle doing most of the work. The same tilt
        lifts the truck&apos;s front end, so the steering axle carries less
        weight and the truck feels vague precisely when you need confidence.
      </p>

      <svg
        viewBox="0 0 680 300"
        width="100%"
        role="img"
        aria-label="Diagram showing three fifth wheel trailer stances, nose high, level and nose low, each relative to a dashed level reference line, with the consequences of each"
        className="mt-6 w-full rounded-xl border border-gray-200 bg-white"
      >
        <title>Nose high, level and nose low fifth wheel stances</title>
        <rect x="0" y="0" width="680" height="300" fill="#ffffff" />
        <text
          x="24"
          y="32"
          fill="#111827"
          fontSize="15"
          fontWeight="700"
          fontFamily="system-ui, sans-serif"
        >
          Three stances, three sets of consequences
        </text>
        <text
          x="24"
          y="54"
          fill="#6b7280"
          fontSize="12"
          fontFamily="system-ui, sans-serif"
        >
          Trailer frame shown against a level reference. Front of trailer at
          left, trailer axles at right.
        </text>

        <line
          x1="24"
          y1="130"
          x2="656"
          y2="130"
          stroke="#d1d5db"
          strokeWidth="1.5"
          strokeDasharray="6 4"
        />

        {[
          { cx: 130, angle: 8, label: "Nose high", color: "#b91c1c" },
          { cx: 340, angle: 0, label: "Level", color: "#047857" },
          { cx: 550, angle: -8, label: "Nose low", color: "#b45309" },
        ].map((p) => (
          <g key={p.label}>
            <g transform={`rotate(${p.angle} ${p.cx} 130)`}>
              <rect
                x={p.cx - 76}
                y="122"
                width="152"
                height="13"
                rx="5"
                fill="#dbeafe"
                stroke="#2563eb"
                strokeWidth="2"
              />
              <circle cx={p.cx - 76} cy="128" r="8" fill="#1e40af" />
              <polygon
                points={`${p.cx + 24},137 ${p.cx + 40},137 ${p.cx + 32},158`}
                fill="#6b7280"
              />
            </g>
            <text
              x={p.cx}
              y="70"
              fill={p.color}
              fontSize="14"
              fontWeight="700"
              textAnchor="middle"
              fontFamily="system-ui, sans-serif"
            >
              {p.label}
            </text>
          </g>
        ))}

        <text
          x="130"
          y="196"
          fill="#b91c1c"
          fontSize="11"
          textAnchor="middle"
          fontFamily="system-ui, sans-serif"
        >
          Rear trailer axle
        </text>
        <text
          x="130"
          y="212"
          fill="#b91c1c"
          fontSize="11"
          textAnchor="middle"
          fontFamily="system-ui, sans-serif"
        >
          overloaded; steer
        </text>
        <text
          x="130"
          y="228"
          fill="#b91c1c"
          fontSize="11"
          textAnchor="middle"
          fontFamily="system-ui, sans-serif"
        >
          axle goes light
        </text>

        <text
          x="340"
          y="196"
          fill="#047857"
          fontSize="11"
          textAnchor="middle"
          fontFamily="system-ui, sans-serif"
        >
          Load shared across
        </text>
        <text
          x="340"
          y="212"
          fill="#047857"
          fontSize="11"
          textAnchor="middle"
          fontFamily="system-ui, sans-serif"
        >
          both trailer axles;
        </text>
        <text
          x="340"
          y="228"
          fill="#047857"
          fontSize="11"
          textAnchor="middle"
          fontFamily="system-ui, sans-serif"
        >
          full steering weight
        </text>

        <text
          x="550"
          y="196"
          fill="#b45309"
          fontSize="11"
          textAnchor="middle"
          fontFamily="system-ui, sans-serif"
        >
          Front trailer axle
        </text>
        <text
          x="550"
          y="212"
          fill="#b45309"
          fontSize="11"
          textAnchor="middle"
          fontFamily="system-ui, sans-serif"
        >
          overloaded; tail can
        </text>
        <text
          x="550"
          y="228"
          fill="#b45309"
          fontSize="11"
          textAnchor="middle"
          fontFamily="system-ui, sans-serif"
        >
          drag on ramps
        </text>

        <text
          x="340"
          y="272"
          fill="#374151"
          fontSize="12"
          textAnchor="middle"
          fontFamily="system-ui, sans-serif"
        >
          Dark marker at the left of each bar is the kingpin; the triangle is
          the trailer axle group.
        </text>
      </svg>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        The Three Measurements You Take First
      </h2>
      <p className="mt-3 text-gray-700">
        Everything else follows from these, and every one has a precondition.
        Get the preconditions wrong and the arithmetic is worthless.
      </p>

      <h3 className="mt-6 text-xl font-semibold text-gray-900">
        Kingpin plate height (A)
      </h3>
      <p className="mt-2 text-gray-700">
        With the trailer uncoupled and on level ground, level it on the landing
        gear &mdash; side to side and front to back &mdash; then measure from the
        ground to the underside of the kingpin plate. Measure both sides to
        catch any lean, and record which set of holes the pin box currently
        occupies.
      </p>

      <h3 className="mt-6 text-xl font-semibold text-gray-900">
        Loaded bed rail height (B)
      </h3>
      <p className="mt-2 text-gray-700">
        Measure from the ground to the top of the bed rails where the trailer
        overhang passes, usually just forward of the wheel wells. The truck must
        be loaded exactly as it will be when towing: fuel, hitch, passengers,
        bed cargo. Pin weight will squat the rear suspension once you hitch, and
        you are trying to predict the height <em>after</em> that squat. Measure
        an empty truck and you will set the hitch too high.
      </p>

      <h3 className="mt-6 text-xl font-semibold text-gray-900">
        Squat allowance
      </h3>
      <p className="mt-2 text-gray-700">
        This is the fudge factor, and the reason the formula is a starting point
        rather than an answer. Height varies with pin weight, spring rate, air
        bags or overload springs, and how far the hitch sits from the axle.
        Measure the rail height again after coupling and you will know your own
        truck&apos;s number precisely.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">
                Value
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                What it is
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                How to get it right
              </th>
            </tr>
          </thead>
          <tbody>
            {FORMULA_TABLE.map((row, i) => (
              <tr key={row[0]} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                <td className="border px-3 py-2 font-semibold">{row[0]}</td>
                <td className="border px-3 py-2">{row[1]}</td>
                <td className="border px-3 py-2 text-xs">{row[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Bed Rail Clearance: The Number That Wrecks Trucks
      </h2>
      <p className="mt-3 text-gray-700">
        This is the gap between the top of your bed walls and the underside of
        the trailer&apos;s front overhang. It decides whether a fuel-station
        exit costs you nothing or costs you a bodywork repair, and it has to
        absorb motion &mdash; because the gap you measure standing still is not
        the gap you have crossing a diagonal driveway with the suspension
        compressed.
      </p>

      <svg
        viewBox="0 0 680 300"
        width="100%"
        role="img"
        aria-label="Rear view diagram of a fifth wheel truck bed showing the trailer overhang above the bed rails and the clearance gap that must stay between 5.5 and 6 inches"
        className="mt-6 w-full rounded-xl border border-gray-200 bg-white"
      >
        <title>Measuring bed rail clearance</title>
        <rect x="0" y="0" width="680" height="300" fill="#ffffff" />
        <text
          x="24"
          y="32"
          fill="#111827"
          fontSize="15"
          fontWeight="700"
          fontFamily="system-ui, sans-serif"
        >
          The gap that must stay 5.5 to 6 inches
        </text>
        <text
          x="24"
          y="54"
          fill="#6b7280"
          fontSize="12"
          fontFamily="system-ui, sans-serif"
        >
          Viewed from behind the truck, on level ground, truck loaded as towed.
        </text>

        <rect
          x="90"
          y="112"
          width="500"
          height="38"
          rx="6"
          fill="#dbeafe"
          stroke="#2563eb"
          strokeWidth="2"
        />
        <text
          x="340"
          y="136"
          fill="#1e40af"
          fontSize="12"
          fontWeight="700"
          textAnchor="middle"
          fontFamily="system-ui, sans-serif"
        >
          Trailer overhang
        </text>

        <rect x="118" y="164" width="26" height="6" rx="2" fill="#6b7280" />
        <rect x="536" y="164" width="26" height="6" rx="2" fill="#6b7280" />
        <rect x="120" y="170" width="22" height="64" rx="3" fill="#9ca3af" />
        <rect x="538" y="170" width="22" height="64" rx="3" fill="#9ca3af" />
        <rect x="120" y="234" width="440" height="14" rx="3" fill="#d1d5db" />
        <text
          x="340"
          y="206"
          fill="#6b7280"
          fontSize="12"
          textAnchor="middle"
          fontFamily="system-ui, sans-serif"
        >
          Truck bed
        </text>

        <line
          x1="131"
          y1="153"
          x2="131"
          y2="162"
          stroke="#b45309"
          strokeWidth="2.5"
        />
        <polygon points="131,150 127,155 135,155" fill="#b45309" />
        <polygon points="131,165 127,160 135,160" fill="#b45309" />

        <line
          x1="549"
          y1="153"
          x2="549"
          y2="162"
          stroke="#b45309"
          strokeWidth="2.5"
        />
        <polygon points="549,150 545,155 553,155" fill="#b45309" />
        <polygon points="549,165 545,160 553,160" fill="#b45309" />

        <line
          x1="84"
          y1="157"
          x2="126"
          y2="157"
          stroke="#b45309"
          strokeWidth="1.5"
          strokeDasharray="4 3"
        />
        <text
          x="16"
          y="161"
          fill="#b45309"
          fontSize="13"
          fontWeight="700"
          fontFamily="system-ui, sans-serif"
        >
          5.5 - 6 in
        </text>

        <line
          x1="554"
          y1="157"
          x2="592"
          y2="157"
          stroke="#6b7280"
          strokeWidth="1.5"
          strokeDasharray="4 3"
        />
        <text
          x="596"
          y="161"
          fill="#6b7280"
          fontSize="12"
          fontFamily="system-ui, sans-serif"
        >
          both sides
        </text>

        <rect x="60" y="262" width="560" height="4" rx="2" fill="#9ca3af" />
        <text
          x="340"
          y="290"
          fill="#b91c1c"
          fontSize="12"
          fontWeight="600"
          textAnchor="middle"
          fontFamily="system-ui, sans-serif"
        >
          Under 5.5 in risks a bed rail strike on driveways, dips and steep
          aprons
        </text>
      </svg>

      <h3 className="mt-6 text-xl font-semibold text-gray-900">
        What the clearance numbers mean
      </h3>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">
                Clearance
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Verdict
              </th>
              <th className="border px-3 py-2 text-left font-semibold">Note</th>
            </tr>
          </thead>
          <tbody>
            {CLEARANCE_TABLE.map((row, i) => (
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
        CURT publishes 5.5 inches as the minimum; other hitch manufacturers and
        installers commonly cite 6 inches. Confirm against your own hitch and
        trailer documentation.
      </p>
      <p className="mt-3 text-gray-700">
        Raising the hitch to buy clearance lifts the trailer&apos;s nose with
        it, which is the failure mode above. If you need eight inches of
        clearance to feel safe, the answer is usually the pin box, a different
        pin box, or acknowledging that a lifted truck and a tall fifth wheel are
        a genuinely difficult combination &mdash; our{" "}
        <Link
          href="/guides/lifted-truck-towing-capacity"
          className="text-brand-600 hover:underline"
        >
          lifted truck towing guide
        </Link>{" "}
        covers that geometry problem.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Step by Step: Setting the Height
      </h2>
      <ol className="mt-3 ml-6 list-decimal space-y-3 text-gray-700">
        <li>
          <strong>Load the truck first.</strong> Fuel, passengers, hitch, bed
          cargo. Squat changes B, and measuring an empty truck sets the hitch
          too high.
        </li>
        <li>
          <strong>Level the trailer and measure A, then measure B.</strong> With
          the trailer uncoupled on level ground, level it on the landing gear
          and measure ground to the underside of the kingpin plate. Then measure
          ground to the top of the bed rails where the overhang crosses.
        </li>
        <li>
          <strong>Compute A &minus; B and add squat.</strong> That is your
          starting hitch height. Write it down.
        </li>
        <li>
          <strong>Move the head one increment.</strong> Uncouple, support the
          head, reseat it at the calculated height, and re-torque every bolt to
          the manufacturer&apos;s spec with a torque wrench. These are high-grade
          bolts under real shear load; guessing at torque is how they back out or
          shear.
        </li>
        <li>
          <strong>Couple up and measure both numbers.</strong> Trailer level,
          measured on the frame rather than the floor, and bed rail clearance. If
          either is wrong, change one increment and repeat.
        </li>
        <li>
          <strong>Move to the pin box if the hitch is out of range.</strong> One
          change fixes stance, the other fixes clearance, and each affects the
          other.
        </li>
        <li>
          <strong>Confirm at a scale.</strong> Geometry is now right; loads may
          still not be. See our{" "}
          <Link href="/guides/cat-scale-weighing" className="text-brand-600 hover:underline">
            CAT scale walkthrough
          </Link>{" "}
          for the three-pass weighing routine.
        </li>
      </ol>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        When the Hitch Runs Out of Adjustment: The Pin Box
      </h2>
      <p className="mt-3 text-gray-700">
        Most fifth wheel hitches offer vertical adjustment in one to two inch
        increments over a few inches of range. That is plenty for fine tuning
        and often not enough when a tall modern truck meets a trailer designed
        around an older one. The pin box is the second lever, and it works from
        the trailer side.
      </p>
      <ul className="mt-3 ml-6 list-disc space-y-2 text-gray-700">
        <li>
          <strong>Lower the pin box</strong> and the trailer body sits higher
          relative to the hitch. That adds bed rail clearance and takes out a
          nose-high stance &mdash; the fix for a truck that is too tall.
        </li>
        <li>
          <strong>Raise the pin box</strong> and the trailer body sits lower,
          taking out a nose-low stance.
        </li>
        <li>
          <strong>Support the trailer on its landing gear first</strong> and
          treat the pin box as a two-person job. It is heavy, and the mounting
          hardware carries the entire pin load.
        </li>
        <li>
          <strong>A rotating or extended pin box solves a different problem.</strong>{" "}
          Sidewinder-style and extended pin boxes exist to create cab clearance
          in short-bed trucks, not to correct ride height, although some change
          geometry as a side effect.
        </li>
      </ul>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Fore-Aft Position and Short-Bed Trucks
      </h2>
      <p className="mt-3 text-gray-700">
        Height is only one axis. Where the hitch sits front to back decides how
        much pin load lands on the truck&apos;s rear axle and how much turning
        room you have before the trailer&apos;s front corner meets the cab.
        Moving the pin forward over the axle centreline shares more load with the
        front axle and improves stability; the trade is turning clearance.
      </p>
      <p className="mt-3 text-gray-700">
        In a short bed &mdash; roughly 6.5 ft and under &mdash; the trailer can
        contact the cab at low speed and full lock. Sliding hitches solve this by
        letting you lock the hitch rearward for maneuvering and forward for
        highway stability. Either way, the slider is a turning-clearance device:
        it does not correct ride height and it does not change pin weight.
        Related: our{" "}
        <Link
          href="/guides/gooseneck-vs-fifth-wheel"
          className="text-brand-600 hover:underline"
        >
          gooseneck vs fifth wheel comparison
        </Link>{" "}
        covers alternative geometry, and{" "}
        <Link
          href="/guides/trailer-length-vs-wheelbase-rule"
          className="text-brand-600 hover:underline"
        >
          trailer length vs wheelbase
        </Link>{" "}
        covers how much trailer your truck can realistically handle.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Pin Weight: The Limit Height Cannot Fix
      </h2>
      <p className="mt-3 text-gray-700">
        A perfectly set hitch on an overloaded truck is still an overloaded
        truck. Fifth wheel pin weight typically runs around 15 to 25 percent of
        the trailer&apos;s loaded weight, and it lands almost directly on the
        rear axle, consuming payload roughly one pound for one pound. Add the
        hitch assembly&apos;s own 150 to 250 lbs, which most buyers forget counts
        against payload too.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">
                Trailer length
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Typical GVWR
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Loaded pin weight
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Realistic minimum truck
              </th>
            </tr>
          </thead>
          <tbody>
            {PIN_WEIGHT_TABLE.map((row, i) => (
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
      <p className="mt-3 text-sm text-gray-500">
        Approximate ranges for guidance only. Verify against the trailer&apos;s
        federal weight label and your truck&apos;s door-jamb payload sticker.
      </p>
      <p className="mt-3 text-gray-700">
        Run your own numbers before you buy anything: the{" "}
        <Link href="/payload-calculator" className="text-brand-600 hover:underline">
          payload calculator
        </Link>{" "}
        shows what pin weight does to your remaining capacity, and the{" "}
        <Link
          href="/guides/fifth-wheel-pin-weight"
          className="text-brand-600 hover:underline"
        >
          fifth wheel pin weight guide
        </Link>{" "}
        covers measuring rather than estimating it. If you are trying to make a
        half-ton work, our{" "}
        <Link
          href="/guides/half-ton-truck-fifth-wheel-towing"
          className="text-brand-600 hover:underline"
        >
          half-ton fifth wheel analysis
        </Link>{" "}
        lays out exactly where that arithmetic breaks.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Common Setup Mistakes
      </h2>
      <ul className="mt-3 ml-6 list-disc space-y-2 text-gray-700">
        <li>
          <strong>Measuring the truck empty.</strong> The most common cause of a
          hitch set too high. Squat is real and it is measurable.
        </li>
        <li>
          <strong>Setting clearance and forgetting level.</strong> Every
          adjustment moves both. Check both, every time.
        </li>
        <li>
          <strong>Reading trailer level off the interior floor.</strong> Floors
          are often sloped for drainage. Use the frame.
        </li>
        <li>
          <strong>Torquing adjustment bolts by feel.</strong> Use a torque
          wrench and the hardware the hitch came with, and re-check after the
          first trip.
        </li>
        <li>
          <strong>Ignoring the effect of loading.</strong> A generator, a second
          battery bank or a full fresh water tank changes pin weight, which
          changes squat, which changes your clearances. Re-verify after any
          significant load change.
        </li>
      </ul>

      <div className="mt-10 rounded-2xl bg-brand-600 p-8 text-center text-white">
        <h2 className="text-2xl font-bold">
          Check Your Pin Weight Before You Buy the Hitch
        </h2>
        <p className="mt-2 text-brand-100">
          Enter your truck and trailer figures and see your payload, pin weight
          and rear axle picture in under two minutes &mdash; free, no sign-up.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
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
          <Link
            href="/gcwr-calculator"
            className="inline-block rounded-xl bg-white px-6 py-3 text-sm font-bold text-brand-700 shadow-lg transition-all hover:bg-brand-50 active:scale-[0.99]"
          >
            GCWR Calculator
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
            href="https://www.curtmfg.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            CURT Manufacturing &mdash; fifth wheel hitch height measurement
            guidance and the 5.5 inch minimum bed rail clearance figure
          </a>
        </li>
        <li>
          <a
            href="https://www.reese-hitches.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            Reese &mdash; fifth wheel mounting and hitch height adjustment
            documentation
          </a>
        </li>
        <li>
          <a
            href="https://www.bwtrailerhitches.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            B&amp;W Trailer Hitches &mdash; hitch adjustment ranges and turning
            clearance guidance
          </a>
        </li>
        <li>
          <a
            href="https://www.lci1.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            Lippert Components &mdash; pin box, landing gear and frame
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
            towing standards
          </a>
        </li>
        <li>
          <a
            href="https://catscale.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            CAT Scale &mdash; certified public weigh stations for per-axle
            verification
          </a>
        </li>
      </ul>

      <div className="mt-10 rounded-xl border border-gray-200 bg-gray-50 p-6">
        <h3 className="font-bold text-gray-900">Related Guides</h3>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          <li>
            <Link
              href="/guides/fifth-wheel-pin-weight"
              className="text-brand-600 hover:underline"
            >
              5th Wheel Pin Weight Guide
            </Link>
          </li>
          <li>
            <Link
              href="/guides/gooseneck-vs-fifth-wheel"
              className="text-brand-600 hover:underline"
            >
              Gooseneck vs 5th Wheel Hitch
            </Link>
          </li>
          <li>
            <Link
              href="/guides/half-ton-truck-fifth-wheel-towing"
              className="text-brand-600 hover:underline"
            >
              Can a Half-Ton Truck Tow a Fifth Wheel?
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
              href="/guides/lifted-truck-towing-capacity"
              className="text-brand-600 hover:underline"
            >
              Lifted Truck Towing Capacity
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
        </ul>
      </div>
    </div>
  );
}
