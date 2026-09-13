import type { Metadata } from "next";
import Link from "next/link";
import { FaqJsonLd, ArticleJsonLd } from "@/components/seo/JsonLd";
import { DEFAULT_OG_IMAGES } from "@/lib/seo/default-og-image";

export const metadata: Metadata = {
  title:
    "Toy Hauler Towing Guide: Garage Weight and Tongue Weight Explained",
  description:
    "A toy hauler is a seesaw: garage cargo lifts tongue weight and invites sway. Learn the 10-15% rule, garage limits, hidden fluid weight, and safe loading.",
  alternates: {
    canonical: "https://www.rvtowingcalc.com/guides/toy-hauler-towing-guide",
  },
  openGraph: {
    title:
      "Toy Hauler Towing Guide: Garage Weight and Tongue Weight Explained",
    description:
      "Why a toy hauler can be unstable empty and unstable loaded, how garage cargo changes tongue weight, and the loading sequence that keeps you out of a sway event.",
    url: "https://www.rvtowingcalc.com/guides/toy-hauler-towing-guide",
    images: DEFAULT_OG_IMAGES,
  },
};

const FAQS = [
  {
    q: "Why does my toy hauler sway even though I am under the tow rating?",
    a: "Because tow rating and stability are different things. A toy hauler's garage sits behind the axles, so a heavy toy loaded in the back acts like a lever that lifts weight off the hitch. Your total weight can be well inside the rating while your tongue weight drops below 10 percent of the trailer's weight, and low tongue weight is the leading cause of trailer sway. Weigh the rig loaded and check the tongue weight percentage, not just the total.",
  },
  {
    q: "Does loading toys in the garage reduce tongue weight?",
    a: "Yes, substantially. Cargo placed behind the axles removes tongue weight rather than adding it. As a rough approximation, a load X lbs behind the axle removes about X times its distance behind the axle, divided by the distance from the axle to the coupler. A 1,400 lb side-by-side sitting 6 ft behind the axles on a trailer with a 19 ft axle-to-coupler distance pulls roughly 440 lbs off the hitch \u2014 while adding 1,400 lbs to the total weight. Both effects push the tongue weight percentage down.",
  },
  {
    q: "Can a half-ton truck tow a toy hauler?",
    a: "Only the smallest ones, and never at full capacity. A 21 to 25 ft travel-trailer toy hauler runs 7,000 to 9,500 lbs GVWR with a loaded tongue weight of 850 to 1,200 lbs. That is at the outer edge of a well-optioned half-ton's payload once you add the family, gear, and a weight distribution hitch, and it leaves no margin. Anything larger \u2014 most 28 ft and up toy haulers, and every fifth wheel toy hauler \u2014 belongs behind a 3/4-ton or one-ton truck.",
  },
  {
    q: "Do I need a weight distribution hitch for a toy hauler?",
    a: "Yes, in almost every case for a bumper-pull toy hauler. Toy haulers carry high tongue weights, and a weight distribution hitch with integrated sway control transfers part of that load forward to the truck's steering axle while resisting the sway that a rear-heavy trailer invites. Size the hitch to the loaded tongue weight, not the dry number, and re-check the setup after you change how the garage is loaded.",
  },
  {
    q: "Should I fill my fresh water tank to add tongue weight?",
    a: "Sometimes, and deliberately rather than by accident. If your water tank is mounted forward of the axles, filling it adds tongue weight and can rescue a rear-heavy toy hauler. If it is mounted behind the axles, filling it makes the problem worse. Find out where your tank sits before you use water as ballast, then weigh the rig to confirm the result. Water also consumes cargo carrying capacity at 8.3 lbs per gallon.",
  },
];

const WEIGHT_TABLE = [
  ["Fresh water, 60 gallons", "~500 lbs", "8.3 lbs per gallon"],
  ["Fuel station, 30 gallons", "~185 lbs", "Gasoline, ~6.1 lbs per gallon"],
  ["Fuel station, 60 gallons", "~370 lbs", "Common on larger toy haulers"],
  ["Propane, two full 20 lb tanks", "~74 lbs", "Tank weight plus gas"],
  ["Onboard generator, 5.5 kW", "~230 lbs", "If not included in dry weight"],
  ["Two-seat side-by-side", "1,400 - 1,800 lbs", "Garage cargo"],
  ["Full-size ATV", "600 - 800 lbs", "Garage cargo"],
  ["Dirt bike", "250 - 300 lbs", "Garage cargo"],
  ["Rear patio kit and railing", "150 - 250 lbs", "Adds leverage behind the axles"],
];

const VEHICLE_TABLE = [
  [
    "Travel-trailer toy hauler, 21-25 ft",
    "7,000 - 9,500 lbs",
    "850 - 1,200 lbs tongue",
    "Half-ton with HD payload package plus WDH",
  ],
  [
    "Travel-trailer toy hauler, 28-34 ft",
    "9,500 - 13,000 lbs",
    "1,200 - 1,700 lbs tongue",
    "3/4-ton",
  ],
  [
    "Fifth wheel toy hauler, 32-38 ft",
    "12,000 - 16,000 lbs",
    "2,400 - 3,200 lbs pin",
    "3/4-ton to 1-ton single rear wheel",
  ],
  [
    "Fifth wheel toy hauler, 38 ft and up",
    "16,000 - 21,000 lbs",
    "3,200 - 4,200 lbs pin",
    "1-ton dual rear wheel",
  ],
];

const BALANCE_TABLE = [
  ["Dry, garage empty, minimal fluids", "7,400 lbs", "~1,050 lbs", "14.2%", "safe"],
  [
    "Trip loaded, toy in garage, half tanks",
    "10,100 lbs",
    "~980 lbs",
    "9.7%",
    "danger",
  ],
  [
    "Same trip, water forward, gear shifted ahead of axles",
    "10,400 lbs",
    "~1,295 lbs",
    "12.5%",
    "safe",
  ],
];

export default function ToyHaulerTowingPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <ArticleJsonLd
        title="Toy Hauler Towing Guide: Garage Weight and Tongue Weight Explained"
        description="Why a toy hauler can be unstable empty and unstable loaded, how garage cargo changes tongue weight, hidden water and fuel weight, garage floor limits, and a safe loading sequence."
        url="https://www.rvtowingcalc.com/guides/toy-hauler-towing-guide"
        datePublished="2026-09-13"
      />
      <FaqJsonLd
        faqs={FAQS}
        baseUrl="https://www.rvtowingcalc.com/guides/toy-hauler-towing-guide"
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
        <span className="text-gray-900">Toy Hauler Towing Guide</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
        Toy Hauler Towing Guide: Garage Weight and Tongue Weight Explained
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        Toy haulers are the only RV class that can be dangerous to tow empty and
        dangerous to tow loaded, for opposite reasons. The garage sits behind the
        axles, so the toys you put in it behave like a lever: they add weight to
        the trailer while simultaneously lifting weight off your hitch. Get the
        balance wrong in either direction and you get sway, a light steering
        axle, or an overloaded hitch. Here is how the weight actually moves, and
        how to load so it moves in your favour.
      </p>

      <div className="mt-8 rounded-xl bg-brand-50 p-6">
        <h2 className="text-lg font-bold text-brand-800">The Short Answer</h2>
        <p className="mt-2 text-brand-700">
          Target <strong>10 to 15 percent</strong> of the loaded trailer&apos;s
          total weight on the tongue for a bumper-pull toy hauler, or{" "}
          <strong>15 to 25 percent</strong> pin weight for a fifth wheel toy
          hauler. The garage makes this hard because loading toys behind the
          axles <em>reduces</em> tongue weight while increasing total weight, so
          the percentage falls twice as fast as you expect. Plan the load
          forward: heaviest toys centred over or slightly ahead of the axles,
          then correct with forward-mounted fresh water and forward gear. Weigh
          the rig loaded every time your cargo changes.
        </p>
      </div>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Why Toy Haulers Break the Normal Weight Rules
      </h2>
      <p className="mt-3 text-gray-700">
        On a conventional travel trailer, cargo tends to sit forward of the
        axles, which means loading up usually improves tongue weight percentage.
        A toy hauler inverts that. The garage, ramp door, fuel station, and often
        the largest storage bay all sit behind the axles, so the trailer is
        designed to carry its heaviest cargo in the least helpful place.
      </p>
      <p className="mt-3 text-gray-700">
        Toy haulers also carry more equipment than a comparable travel trailer:
        a fuel station, a larger generator, a bigger fresh water tank, and on the
        larger models a rear patio system. All of it is weight, and most of it
        sits at the back. The result is a trailer whose center of gravity shifts
        dramatically depending on whether you are empty or loaded, and whether
        the tanks are full.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        The Seesaw Effect, Illustrated
      </h2>
      <p className="mt-3 text-gray-700">
        Think of the axles as a fulcrum and the trailer as a beam. Weight placed
        behind the fulcrum pushes the front of the beam up &mdash; which in
        towing terms means it lifts weight off your hitch ball or kingpin.
      </p>

      <svg
        viewBox="0 0 680 250"
        width="100%"
        role="img"
        aria-label="Diagram of a toy hauler shown as a seesaw with the axles as the fulcrum, showing that cargo loaded behind the axles lifts weight off the tongue"
        className="mt-6 w-full rounded-xl border border-gray-200 bg-white"
      >
        <title>
          How garage cargo behind the axles reduces tongue weight
        </title>
        <rect x="0" y="0" width="680" height="250" fill="#ffffff" />
        <text
          x="24"
          y="34"
          fill="#111827"
          fontSize="15"
          fontWeight="700"
          fontFamily="system-ui, sans-serif"
        >
          Cargo behind the axles lifts the tongue
        </text>

        {/* Trailer beam */}
        <rect
          x="60"
          y="120"
          width="540"
          height="26"
          rx="6"
          fill="#dbeafe"
          stroke="#2563eb"
          strokeWidth="2"
        />
        {/* Fulcrum at axles */}
        <polygon points="330,146 366,146 348,196" fill="#2563eb" />
        <text
          x="348"
          y="216"
          fill="#374151"
          fontSize="12"
          textAnchor="middle"
          fontFamily="system-ui, sans-serif"
        >
          Axles = fulcrum
        </text>
        {/* Wheels */}
        <circle cx="322" cy="168" r="14" fill="none" stroke="#374151" strokeWidth="3" />
        <circle cx="374" cy="168" r="14" fill="none" stroke="#374151" strokeWidth="3" />

        {/* Garage box at rear */}
        <rect
          x="470"
          y="76"
          width="130"
          height="44"
          rx="6"
          fill="#fee2e2"
          stroke="#dc2626"
          strokeWidth="2"
        />
        <text
          x="535"
          y="103"
          fill="#b91c1c"
          fontSize="12"
          fontWeight="700"
          textAnchor="middle"
          fontFamily="system-ui, sans-serif"
        >
          GARAGE
        </text>

        {/* Down arrow on garage */}
        <line x1="535" y1="60" x2="535" y2="74" stroke="#dc2626" strokeWidth="3" />
        <polygon points="535,76 529,64 541,64" fill="#dc2626" />
        <text
          x="535"
          y="52"
          fill="#b91c1c"
          fontSize="12"
          textAnchor="middle"
          fontFamily="system-ui, sans-serif"
        >
          1,400 lbs added
        </text>

        {/* Up arrow at tongue */}
        <line x1="120" y1="112" x2="120" y2="80" stroke="#059669" strokeWidth="3" />
        <polygon points="120,76 114,90 126,90" fill="#059669" />
        <text
          x="120"
          y="68"
          fill="#047857"
          fontSize="12"
          fontWeight="700"
          textAnchor="middle"
          fontFamily="system-ui, sans-serif"
        >
          Tongue weight
        </text>
        <text
          x="120"
          y="54"
          fill="#047857"
          fontSize="12"
          textAnchor="middle"
          fontFamily="system-ui, sans-serif"
        >
          DROPS ~400 lbs
        </text>

        {/* Coupler */}
        <circle cx="76" cy="133" r="10" fill="#2563eb" />
        <text
          x="76"
          y="164"
          fill="#374151"
          fontSize="12"
          textAnchor="middle"
          fontFamily="system-ui, sans-serif"
        >
          Coupler
        </text>

        {/* Pivot arc */}
        <path
          d="M 148 118 A 30 30 0 0 1 148 82"
          fill="none"
          stroke="#9ca3af"
          strokeWidth="2"
          strokeDasharray="4 3"
        />
      </svg>
      <p className="mt-3 text-sm text-gray-500">
        A 1,400 lb side-by-side centred 6 ft behind the axles pulls roughly 400
        lbs off the hitch on a trailer with a 19 ft axle-to-coupler distance
        &mdash; while adding 1,400 lbs to the total weight. Both effects drive
        the tongue weight percentage down.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        The Numbers, in Practice
      </h2>
      <p className="mt-3 text-gray-700">
        Here is the same 9,995 lb GVWR bumper-pull toy hauler in three states.
        The trailer is well within its ratings in every case. Only the
        distribution changes, and only the middle row is unsafe.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">
                Setup
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Trailer weight
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Tongue weight
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Percentage
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Verdict
              </th>
            </tr>
          </thead>
          <tbody>
            {BALANCE_TABLE.map((row, i) => (
              <tr key={row[0]} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                <td className="border px-3 py-2 font-semibold">{row[0]}</td>
                <td className="border px-3 py-2">{row[1]}</td>
                <td className="border px-3 py-2">{row[2]}</td>
                <td className="border px-3 py-2">{row[3]}</td>
                <td
                  className={
                    row[4] === "danger"
                      ? "border px-3 py-2 font-semibold text-danger-700"
                      : "border px-3 py-2 font-semibold text-safe-700"
                  }
                >
                  {row[4] === "danger" ? "Sway risk" : "Stable"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm text-gray-500">
        Illustrative figures. Percentages are tongue weight divided by total
        trailer weight. Anything under 10 percent is a genuine sway risk; the
        safe band is 10 to 15 percent for a bumper-pull trailer. See our{" "}
        <Link href="/guides/tongue-weight" className="text-brand-600 hover:underline">
          tongue weight guide
        </Link>{" "}
        for the full range guidance.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Two Limits Almost Nobody Reads
      </h2>
      <p className="mt-3 text-gray-700">
        Before you plan the load, find both of these numbers on the trailer.
        They are separate, and both are hard limits.
      </p>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-gray-200 p-5">
          <h3 className="font-semibold text-gray-900">
            Cargo carrying capacity (CCC)
          </h3>
          <p className="mt-2 text-sm text-gray-700">
            Everything you add to the trailer: toys, gear, food, water, and
            propane. Under the RVIA standard, water and propane are already
            deducted from the published CCC figure, so the number on the label
            is what is genuinely left for your belongings. Our{" "}
            <Link
              href="/guides/cargo-carrying-capacity-ccc"
              className="text-brand-600 hover:underline"
            >
              CCC guide
            </Link>{" "}
            explains the formula.
          </p>
        </div>
        <div className="rounded-xl border border-gray-200 p-5">
          <h3 className="font-semibold text-gray-900">
            Garage floor rating
          </h3>
          <p className="mt-2 text-sm text-gray-700">
            A separate structural limit, often 2,500 to 3,000 lbs on a standard
            toy hauler and higher with a reinforced garage package. It is a
            floor loading limit, not a point load limit &mdash; a heavy machine
            concentrated on four small contact patches is not the same as that
            weight spread across the floor.
          </p>
        </div>
      </div>
      <p className="mt-4 text-gray-700">
        A toy hauler can have 3,000 lbs of CCC and a 2,500 lb garage rating at
        the same time. Loading 2,800 lbs of toys into the garage satisfies one
        number and violates the other.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Hidden Weight That Eats Your Capacity First
      </h2>
      <p className="mt-3 text-gray-700">
        Fluids and equipment consume a surprising share of capacity before a
        single toy is loaded. These are typical figures &mdash; check your own
        tank sizes and labels.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">
                Item
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Weight
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Note
              </th>
            </tr>
          </thead>
          <tbody>
            {WEIGHT_TABLE.map((row, i) => (
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
        Water at 8.3 lbs per gallon is the most commonly underestimated item. A
        100 gallon fresh tank adds 830 lbs, and a full fuel station adds another
        180 to 370 lbs before you load anything into the garage.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Matching a Toy Hauler to a Tow Vehicle
      </h2>
      <p className="mt-3 text-gray-700">
        Toy haulers are heavy for their length, and the weight is badly placed.
        This is the practical vehicle mapping.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">
                Class
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Typical GVWR
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Loaded tongue or pin
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Realistic minimum truck
              </th>
            </tr>
          </thead>
          <tbody>
            {VEHICLE_TABLE.map((row, i) => (
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
        Approximate ranges for guidance only. Verify against the specific
        trailer&apos;s federal weight label and your truck&apos;s door-jamb
        payload sticker.
      </p>

      <p className="mt-4 text-gray-700">
        A half-ton is realistically limited to the smallest travel-trailer toy
        haulers, and only with a heavy-duty payload package, a properly sized
        weight distribution hitch, and a light crew. Anything in the 28 ft and
        up range needs a 3/4-ton. Fifth wheel toy haulers concentrate their pin
        weight over the rear axle, which is exactly the load a half-ton payload
        cannot absorb &mdash; see our{" "}
        <Link
          href="/guides/half-ton-truck-fifth-wheel-towing"
          className="text-brand-600 hover:underline"
        >
          half-ton fifth wheel analysis
        </Link>{" "}
        for that arithmetic.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        How to Load a Toy Hauler Safely
      </h2>
      <ol className="mt-3 ml-6 list-decimal space-y-3 text-gray-700">
        <li>
          <strong>Weigh the trailer empty first.</strong> Brochure tongue
          weights are measured on a stripped unit. Owner reports routinely show
          dry tongue weights 20 to 30 percent above the published figure once
          the generator, batteries, propane, and options are fitted. A{" "}
          <Link href="/guides/cat-scale-weighing" className="text-brand-600 hover:underline">
            CAT scale walkthrough
          </Link>{" "}
          tells you what you are actually starting from.
        </li>
        <li>
          <strong>Place the heaviest toy over or slightly ahead of the axles.</strong>{" "}
          Not against the rear ramp door, which is the instinct because it is
          easy to drive in. Every foot further back multiplies the leverage that
          lifts your hitch.
        </li>
        <li>
          <strong>Balance left to right as well as front to back.</strong> A
          trailer carrying 500 lbs more on one side pulls to that side and wears
          the tires unevenly. Use the axle line as your reference point.
        </li>
        <li>
          <strong>Use forward fluids as trim, deliberately.</strong> If the
          tongue is light after loading, a forward-mounted fresh water tank is
          the easiest ballast you have. Confirm the tank is actually ahead of
          the axles before relying on it, and remember that water also consumes
          CCC.
        </li>
        <li>
          <strong>Secure with a four-point pattern and compress the suspension.</strong>{" "}
          Compressing forks or shocks slightly lets the straps stay tensioned as
          the trailer moves. Recheck every tie-down after the first 15 to 20
          miles &mdash; vibration works straps loose and loads shift.
        </li>
        <li>
          <strong>Re-weigh loaded, and check all four limits.</strong> Total
          trailer weight against GVWR, tongue weight against 10 to 15 percent,
          truck payload against the door sticker, and rear axle weight against
          GAWR. Our{" "}
          <Link href="/guides/gawr-explained" className="text-brand-600 hover:underline">
            GAWR explainer
          </Link>{" "}
          covers the axle side of that check.
        </li>
      </ol>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Hitches, Sway Control, and Brakes
      </h2>
      <p className="mt-3 text-gray-700">
        A bumper-pull toy hauler almost always needs a weight distribution hitch
        with integrated sway control, sized to the{" "}
        <em>loaded</em> tongue weight rather than the empty number. On very large
        or short-wheelbase combinations, a pivot-projection style hitch that
        physically prevents sway is worth the cost. Our{" "}
        <Link
          href="/guides/weight-distribution-hitch-setup"
          className="text-brand-600 hover:underline"
        >
          weight distribution hitch setup guide
        </Link>{" "}
        walks through the measurement process, and the{" "}
        <Link href="/guides/rv-trailer-sway-control" className="text-brand-600 hover:underline">
          sway control guide
        </Link>{" "}
        covers what to do if it starts.
      </p>
      <p className="mt-3 text-gray-700">
        Brakes matter more here than on most trailers, because a loaded toy
        hauler is heavy and often towed to remote trailheads. Verify the
        controller gain against the loaded weight rather than the empty weight,
        and confirm the breakaway battery holds a charge. If you tow into colder
        states, check the state-by-state requirements in our{" "}
        <Link
          href="/guides/trailer-brake-laws-by-state"
          className="text-brand-600 hover:underline"
        >
          trailer brake laws guide
        </Link>
        .
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Toy Hauler Specific Pre-Trip Checks
      </h2>
      <p className="mt-3 text-gray-700">
        Beyond the standard walk-around, these items are unique to a garage
        trailer.
      </p>
      <ul className="mt-3 ml-6 list-disc space-y-2 text-gray-700">
        <li>Ramp door latches, gas struts, and the safety pin</li>
        <li>Tie-down anchors and D-rings for cracks or elongation</li>
        <li>Every strap or wheel chock, re-tensioned after the first stop</li>
        <li>Fuel station cap, pump, and nozzle stowed and dry</li>
        <li>Rear patio railing folded, locked, and its weight accounted for</li>
        <li>Garage floor tie-down plates and any soft spots in the floor</li>
        <li>
          Tire load range and cold pressure set for the loaded weight &mdash; see
          our{" "}
          <Link
            href="/guides/travel-trailer-tire-safety"
            className="text-brand-600 hover:underline"
          >
            trailer tire safety guide
          </Link>
        </li>
      </ul>
      <p className="mt-3 text-gray-700">
        Our printable{" "}
        <Link
          href="/guides/travel-trailer-pre-trip-inspection"
          className="text-brand-600 hover:underline"
        >
          pre-trip inspection checklist
        </Link>{" "}
        covers the rest of the walk-around in seven steps.
      </p>

      <div className="mt-10 rounded-2xl bg-brand-600 p-8 text-center text-white">
        <h2 className="text-2xl font-bold">
          Find Out What Your Tongue Weight Really Is
        </h2>
        <p className="mt-2 text-brand-100">
          Enter your trailer weight and your cargo layout. We will show you the
          tongue weight percentage, the safe band, and where your setup lands
          &mdash; free, no sign-up.
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
            href="https://www.rvia.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            RV Industry Association (RVIA) &mdash; cargo carrying capacity and
            weight labelling standards
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
        <li>
          <a
            href="https://www.nhtsa.gov/equipment/tires"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            NHTSA &mdash; tire safety and load rating information
          </a>
        </li>
        <li>
          <a
            href="https://www.nhtsa.gov/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            National Highway Traffic Safety Administration (NHTSA)
          </a>
        </li>
        <li>
          <a
            href="https://www.fmcsa.dot.gov/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            Federal Motor Carrier Safety Administration (FMCSA)
          </a>
        </li>
        <li>
          <a
            href="https://www.granddesignrv.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            Grand Design RV &mdash; Momentum toy hauler specifications
          </a>
        </li>
        <li>
          <a
            href="https://www.keystonerv.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            Keystone RV &mdash; Fuzion and Impact toy hauler specifications
          </a>
        </li>
      </ul>

      <div className="mt-10 rounded-xl border border-gray-200 bg-gray-50 p-6">
        <h3 className="font-bold text-gray-900">Related Guides</h3>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          <li>
            <Link
              href="/guides/tongue-weight"
              className="text-brand-600 hover:underline"
            >
              Tongue Weight Guide
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
              href="/guides/cargo-carrying-capacity-ccc"
              className="text-brand-600 hover:underline"
            >
              Cargo Carrying Capacity (CCC) Explained
            </Link>
          </li>
          <li>
            <Link
              href="/guides/rv-trailer-sway-control"
              className="text-brand-600 hover:underline"
            >
              RV Trailer Sway Control
            </Link>
          </li>
          <li>
            <Link
              href="/guides/fifth-wheel-pin-weight"
              className="text-brand-600 hover:underline"
            >
              5th Wheel Pin Weight
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
        </ul>
      </div>
    </div>
  );
}
