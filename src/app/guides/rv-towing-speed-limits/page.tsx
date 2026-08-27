import type { Metadata } from "next";
import Link from "next/link";
import { FaqJsonLd, ArticleJsonLd } from "@/components/seo/JsonLd";
import { DEFAULT_OG_IMAGES } from "@/lib/seo/default-og-image";

export const metadata: Metadata = {
  title: "How Fast Can You Tow a Travel Trailer? Towing Speed Limits by State",
  description:
    "RV towing speed limits by state, plus the ST tire 65 mph rating that overrides the law. Learn the safe towing speed and where reduced limits apply by state.",
  keywords: [
    "towing speed limits by state",
    "how fast can you tow a travel trailer",
    "RV towing speed limit",
    "trailer tire speed rating",
    "safe towing speed",
    "California 55 mph towing law",
  ],
  alternates: {
    canonical: "https://www.rvtowingcalc.com/guides/rv-towing-speed-limits",
  },
  openGraph: {
    title: "How Fast Can You Tow a Travel Trailer? Towing Speed Limits by State",
    description:
      "Most states let you tow at the posted limit, but your trailer tires may not. The real speed limit when towing an RV, state laws, and stopping distance math.",
    url: "https://www.rvtowingcalc.com/guides/rv-towing-speed-limits",
    images: DEFAULT_OG_IMAGES,
  },
};

const FAQS = [
  {
    q: "How fast can you legally tow a travel trailer?",
    a: "In most U.S. states there is no separate towing speed limit, so your truck and trailer follow the same posted limit as any other vehicle, commonly 65-75 mph on interstates. Roughly a dozen states, concentrated in the West, post a lower limit specifically for vehicles towing trailers. California is the strictest, capping any vehicle towing another vehicle at 55 mph statewide under Vehicle Code section 22406, even on freeways posted at 70 mph. Washington limits trailer combinations to 60 mph on freeways under RCW 46.61.400. Because published sources frequently disagree on the other states, verify each state on your route with that state's DOT or driver manual before you leave.",
  },
  {
    q: "What is the speed rating on trailer tires?",
    a: "Standard ST (Special Trailer) tires are rated to a maximum of 65 mph under long-standing tire industry practice, regardless of what the road sign says. Some newer ST tires carry a 75 mph or 81 mph rating, but only if that rating is molded into the sidewall. Exceeding the tire's speed rating builds internal heat faster than the tire can shed it, and heat is the direct cause of most trailer tire blowouts. If your sidewall does not state a higher rating, treat 65 mph as a hard mechanical ceiling even in a state that legally allows 75 mph.",
  },
  {
    q: "What is the safest speed to tow an RV?",
    a: "For most bumper-pull travel trailers, 55-62 mph is the practical safe zone. Trailer sway tends to become difficult to control above 60-65 mph, aerodynamic drag rises with the square of speed, and stopping distance rises even faster. Dropping from 70 mph to 60 mph typically cuts your stopping distance by roughly 25 percent and dramatically reduces the energy any sway event has to work with. Many experienced RV owners settle at 60 mph as a compromise between trip time, fuel economy, and stability.",
  },
  {
    q: "Does towing speed affect fuel economy?",
    a: "Significantly. Aerodynamic drag increases with the square of speed, and a travel trailer presents a large, boxy frontal area. Real-world reports from RV owners commonly show a 1-2 mpg improvement when dropping from 70 mph to 60 mph while towing, which on a 500-mile travel day can mean skipping an entire fuel stop. The savings are largest with tall travel trailers and toy haulers, and smaller with low-profile teardrops.",
  },
  {
    q: "Can I be ticketed for towing too fast in another state?",
    a: "Yes. Speed limits are enforced by the state you are physically driving in, not your home state. This is the opposite of driver's license rules, where your home state's license class follows you. If you live in Texas where the posted limit applies and you drive into California, you are subject to California's 55 mph towing cap and can be cited for exceeding it. Washington State Patrol also enforces a separate rule barring trailer combinations from the far-left lane on freeways with three or more lanes in each direction.",
  },
  {
    q: "Why do posted trailer speed signs sometimes differ from state law?",
    a: "Posted signage always takes priority when it is more restrictive than the general state rule. Departments of transportation post trailer-specific or truck-specific limits on individual routes based on grade, curve radius, construction, or crash history. Mountain descents in particular often carry a posted limit for vehicles over a certain weight that is well below the general highway limit. When a trailer-specific sign is present, that number is the legal limit for you regardless of what the statewide rule says.",
  },
];

const REDUCED_LIMIT_STATES = [
  {
    state: "California",
    limit: "55 mph",
    scope: "Any vehicle towing another vehicle, all highways",
    citation: "CVC section 22406",
    severity: "Strictest",
  },
  {
    state: "Washington",
    limit: "60 mph (freeway) / 50 mph (other highways)",
    scope: "Vehicles towing a trailer; also barred from far-left lane on 3+ lane freeways",
    citation: "RCW 46.61.400",
    severity: "Strict",
  },
  {
    state: "Oregon",
    limit: "55 mph (situational)",
    scope: "Combinations over 10,000 lbs GCW on certain two-lane roads",
    citation: "ORS 811.105",
    severity: "Situational",
  },
  {
    state: "Michigan",
    limit: "55-65 mph (situational)",
    scope: "Route-dependent; certain non-freeway routes and heavy vehicle classes",
    citation: "Michigan Vehicle Code",
    severity: "Situational",
  },
  {
    state: "Indiana",
    limit: "65 mph",
    scope: "Trailer combinations where cars may run 70 mph",
    citation: "IC 9-21-5",
    severity: "Mild",
  },
  {
    state: "Arizona, Idaho, Illinois",
    limit: "Varies",
    scope: "Situational reductions by road class or combination weight",
    citation: "State DOT / driver manual",
    severity: "Situational",
  },
];

const SPEED_STOPPING_TABLE = [
  {
    speed: "55 mph",
    truckAlone: "~200 ft",
    withTrailer: "~290 ft",
    swayRisk: "Very Low",
  },
  {
    speed: "60 mph",
    truckAlone: "~235 ft",
    withTrailer: "~345 ft",
    swayRisk: "Low",
  },
  {
    speed: "65 mph",
    truckAlone: "~275 ft",
    withTrailer: "~405 ft",
    swayRisk: "Moderate",
  },
  {
    speed: "70 mph",
    truckAlone: "~320 ft",
    withTrailer: "~470 ft",
    swayRisk: "High",
  },
  {
    speed: "75 mph",
    truckAlone: "~365 ft",
    withTrailer: "~540 ft",
    swayRisk: "Very High",
  },
];

const TIRE_RATING_TABLE = [
  {
    marking: "ST tire, no speed symbol",
    maxSpeed: "65 mph",
    meaning: "Industry default for Special Trailer tires",
    action: "Treat 65 mph as an absolute ceiling",
  },
  {
    marking: 'ST tire marked "M"',
    maxSpeed: "81 mph",
    meaning: "Speed symbol M molded into sidewall",
    action: "Still drop 10 mph in heat or high load",
  },
  {
    marking: 'ST tire marked "L"',
    maxSpeed: "75 mph",
    meaning: "Speed symbol L molded into sidewall",
    action: "Legal limit usually governs first",
  },
  {
    marking: "LT tire on a trailer",
    maxSpeed: "Per sidewall rating",
    meaning: "Light Truck tire; higher rating but softer sidewall",
    action: "Verify load range still covers axle weight",
  },
];

export default function RvTowingSpeedLimitsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
      <ArticleJsonLd
        title="How Fast Can You Tow a Travel Trailer? Towing Speed Limits by State"
        description="RV towing speed limits by state, the ST tire 65 mph rating that overrides the law, safe towing speeds, and stopping distance math."
        url="https://www.rvtowingcalc.com/guides/rv-towing-speed-limits"
        datePublished="2026-08-27"
      />
      <FaqJsonLd
        faqs={FAQS}
        baseUrl="https://www.rvtowingcalc.com/guides/rv-towing-speed-limits"
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
        <span className="text-gray-900">RV Towing Speed Limits</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
        How Fast Can You Tow a Travel Trailer? Towing Speed Limits by State
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        There are two answers to this question, and they are almost never the
        same number. One is how fast the law allows. The other is how fast your
        tires, your hitch, and your brakes will actually tolerate. The second
        one is the one that hurts you.
      </p>

      <div className="mt-8 rounded-xl bg-red-50 p-6">
        <h2 className="text-lg font-bold text-red-800">
          The 65 MPH Rule Nobody Tells You About
        </h2>
        <p className="mt-2 text-red-700">
          Standard ST (Special Trailer) tires are rated to a maximum of{" "}
          <strong>65 mph</strong>. Not 70. Not 75. If you are cruising an
          Interstate posted at 75 mph with unrated ST tires under your trailer,
          you are exceeding a mechanical limit on every one of them, and heat
          buildup is doing cumulative damage you cannot see. The road sign is
          not permission from your tires.
        </p>
      </div>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        The Legal Picture: Most States Follow the Posted Limit
      </h2>
      <p className="mt-3 text-gray-700">
        Here is the honest version, which differs from what many towing blogs
        publish: <strong>most U.S. states do not set a separate statewide speed
        limit for a privately towed travel trailer.</strong> Your rig follows
        the posted limit like everyone else. On the majority of interstates that
        means 65 to 75 mph.
      </p>
      <p className="mt-3 text-gray-700">
        You will find tables online that assign a tidy 55 or 65 mph figure to
        all fifty states. Those tables are largely invented. The controlling
        number in most states comes from a combination of the posted sign,
        vehicle classification, combination weight, road type, and local
        ordinance, not from a single RV-specific statute. We are not going to
        publish a fake number for 50 states just to fill a table.
      </p>
      <p className="mt-3 text-gray-700">
        What <em>is</em> well documented is the shorter list of states with a
        genuine reduced limit or a specific restriction that catches
        out-of-state RV owners:
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">State</th>
              <th className="border px-3 py-2 text-left font-semibold">Towing Limit</th>
              <th className="border px-3 py-2 text-left font-semibold">Scope</th>
              <th className="border px-3 py-2 text-left font-semibold">Statute</th>
            </tr>
          </thead>
          <tbody>
            {REDUCED_LIMIT_STATES.map((row, i) => (
              <tr key={i} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                <td className="border px-3 py-2 font-medium">
                  {row.state}
                  <span
                    className={`ml-2 inline-block rounded-full px-2 py-0.5 text-xs font-medium ${
                      row.severity === "Strictest"
                        ? "bg-red-100 text-red-800"
                        : row.severity === "Strict"
                        ? "bg-orange-100 text-orange-800"
                        : row.severity === "Situational"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-green-100 text-green-800"
                    }`}
                  >
                    {row.severity}
                  </span>
                </td>
                <td className="border px-3 py-2">{row.limit}</td>
                <td className="border px-3 py-2">{row.scope}</td>
                <td className="border px-3 py-2 text-xs">{row.citation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-4 text-sm text-gray-500">
        This is general information, not legal advice. Towing statutes change
        and published summaries frequently disagree. Confirm the current rule
        with each state&apos;s DOT or driver manual for every state on your
        route, and always obey posted signage when it is more restrictive.
      </p>

      <h3 className="mt-8 text-xl font-bold text-gray-900">
        California: The One Everyone Runs Into
      </h3>
      <p className="mt-3 text-gray-700">
        California Vehicle Code section 22406 caps <strong>any vehicle towing
        another vehicle at 55 mph statewide</strong>, on every highway,
        including freeways posted at 70 mph. It applies to travel trailers,
        fifth wheels, and toads behind a motorhome. It is actively enforced,
        and it surprises a large share of first-time visitors from states where
        the posted limit governs.
      </p>
      <p className="mt-3 text-gray-700">
        California also restricts vehicles towing a trailer to the right-hand
        lanes on many multi-lane highways. Watch for the black-and-white
        &ldquo;Trucks and Vehicles With Trailers Right Two Lanes&rdquo; signs.
      </p>

      <h3 className="mt-8 text-xl font-bold text-gray-900">
        Washington: 60 MPH and a Lane Restriction
      </h3>
      <p className="mt-3 text-gray-700">
        Washington sets 60 mph on freeways and 50 mph on other highways for
        vehicles towing a trailer under RCW 46.61.400, even when the sign reads
        70. Separately, a vehicle towing a trailer may not use the far-left lane
        on any limited-access highway with three or more lanes in the same
        direction, except to prepare for a left exit. State Patrol writes
        tickets for both.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Your Trailer Tires Have Their Own Speed Limit
      </h2>
      <p className="mt-3 text-gray-700">
        This is the part that matters even in a state with a generous limit. ST
        tires are engineered with stiff sidewalls for vertical load, not for
        sustained high-speed heat cycling. The industry default rating is 65
        mph. Above that, internal temperature climbs faster than the carcass can
        dissipate it, the rubber-to-belt bond degrades, and the tire eventually
        fails, usually in the form of a tread separation at highway speed.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">Sidewall Marking</th>
              <th className="border px-3 py-2 text-left font-semibold">Max Speed</th>
              <th className="border px-3 py-2 text-left font-semibold">What It Means</th>
              <th className="border px-3 py-2 text-left font-semibold">Practical Action</th>
            </tr>
          </thead>
          <tbody>
            {TIRE_RATING_TABLE.map((row, i) => (
              <tr key={i} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                <td className="border px-3 py-2 font-medium">{row.marking}</td>
                <td className="border px-3 py-2">{row.maxSpeed}</td>
                <td className="border px-3 py-2">{row.meaning}</td>
                <td className="border px-3 py-2">{row.action}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-4 text-gray-700">
        Go read your own sidewalls before your next trip. If there is no speed
        symbol, 65 mph is your ceiling. For the full picture on load range, cold
        inflation pressure, and the DOT date code that determines when a tire
        ages out, see our{" "}
        <Link
          href="/guides/travel-trailer-tire-safety"
          className="text-brand-600 hover:underline"
        >
          travel trailer tire safety guide
        </Link>
        .
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        What Speed Does to Your Stopping Distance
      </h2>
      <p className="mt-3 text-gray-700">
        Kinetic energy rises with the square of speed. Going from 60 to 70 mph
        does not add 17 percent more energy for your brakes to absorb, it adds
        36 percent. Add 6,000 to 9,000 lbs of trailer behind you and the numbers
        get uncomfortable fast.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">Speed</th>
              <th className="border px-3 py-2 text-left font-semibold">Truck Alone</th>
              <th className="border px-3 py-2 text-left font-semibold">Truck + 7,000 lb Trailer</th>
              <th className="border px-3 py-2 text-left font-semibold">Sway Risk</th>
            </tr>
          </thead>
          <tbody>
            {SPEED_STOPPING_TABLE.map((row, i) => (
              <tr key={i} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                <td className="border px-3 py-2 font-medium">{row.speed}</td>
                <td className="border px-3 py-2">{row.truckAlone}</td>
                <td className="border px-3 py-2">{row.withTrailer}</td>
                <td className="border px-3 py-2">
                  <span
                    className={`inline-block rounded-full px-2 py-0.5 text-xs font-medium ${
                      row.swayRisk === "Very Low" || row.swayRisk === "Low"
                        ? "bg-green-100 text-green-800"
                        : row.swayRisk === "Moderate"
                        ? "bg-yellow-100 text-yellow-800"
                        : row.swayRisk === "High"
                        ? "bg-orange-100 text-orange-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {row.swayRisk}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-4 text-sm text-gray-500">
        Estimates assume dry pavement, functioning trailer brakes correctly
        adjusted, and total perception-reaction-braking distance. Wet pavement,
        a downgrade, or a poorly set brake controller gain can extend these
        figures by 30 to 50 percent.
      </p>

      <p className="mt-4 text-gray-700">
        Notice the jump between 65 and 75 mph: an extra 135 feet, roughly nine
        car lengths. That is the difference between stopping short of a stalled
        vehicle and hitting it. If your trailer brakes are not properly gained
        in, add more. Our{" "}
        <Link
          href="/guides/trailer-brake-controller-setup"
          className="text-brand-600 hover:underline"
        >
          brake controller setup guide
        </Link>{" "}
        walks through the gain procedure.
      </p>

      <div className="mt-10 rounded-2xl bg-brand-600 p-8 text-center text-white">
        <h2 className="text-2xl font-bold">Know Your Weights First</h2>
        <p className="mt-2 text-brand-100">
          Stopping distance scales with combined weight. Verify your GCWR and
          tongue weight before you worry about speed.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/gcwr-calculator"
            className="inline-block rounded-xl bg-white px-6 py-3 text-base font-bold text-brand-700 shadow-lg transition-all hover:bg-brand-50 active:scale-[0.99]"
          >
            GCWR Calculator
          </Link>
          <Link
            href="/tongue-weight-calculator"
            className="inline-block rounded-xl bg-brand-700 px-6 py-3 text-base font-bold text-white shadow-lg ring-1 ring-white/30 transition-all hover:bg-brand-800 active:scale-[0.99]"
          >
            Tongue Weight Calculator
          </Link>
        </div>
      </div>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        The Speed Where Sway Starts
      </h2>
      <p className="mt-3 text-gray-700">
        Trailer sway is a self-reinforcing oscillation. Below roughly 55 mph a
        disturbance damps itself out in a cycle or two. Above 60 to 65 mph the
        aerodynamic and inertial forces feeding the oscillation can exceed the
        damping available from your hitch and tires, and the wobble grows
        instead of settling.
      </p>
      <p className="mt-3 text-gray-700">
        This threshold is not a fixed number. It moves down when:
      </p>
      <ul className="mt-3 list-disc space-y-2 pl-6 text-gray-700">
        <li>Tongue weight is below 10 percent of loaded trailer weight</li>
        <li>Heavy cargo is loaded behind the trailer axles</li>
        <li>You have no weight distribution or anti-sway hardware</li>
        <li>Crosswinds exceed roughly 20 mph</li>
        <li>A semi passes and dumps a pressure wave down your side</li>
        <li>The road crown or rutting is pushing the trailer around</li>
      </ul>
      <p className="mt-3 text-gray-700">
        If you have ever felt the trailer start to hunt behind you, the correct
        response is to <strong>ease off the throttle and apply the trailer
        brakes only</strong> via the manual override lever. Do not steer against
        it and do not hit the truck brakes. Full detail in our{" "}
        <Link
          href="/guides/rv-trailer-sway-control"
          className="text-brand-600 hover:underline"
        >
          trailer sway control guide
        </Link>
        .
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Picking Your Number: A Practical Framework
      </h2>
      <p className="mt-3 text-gray-700">
        Take the <strong>lowest</strong> of these five values. That is your
        speed, full stop:
      </p>
      <ol className="mt-3 list-decimal space-y-3 pl-6 text-gray-700">
        <li>
          <strong>The posted limit</strong> on the road you are on right now,
          including any trailer-specific or truck-specific sign.
        </li>
        <li>
          <strong>The state statutory towing limit</strong> if the state you are
          in has one lower than the posted sign (California 55, Washington 60).
        </li>
        <li>
          <strong>Your trailer tire speed rating</strong> from the sidewall.
          Default to 65 mph if unmarked.
        </li>
        <li>
          <strong>Your hitch and WDH rating</strong> comfort zone. A marginal
          setup should not be run at the top of its envelope.
        </li>
        <li>
          <strong>Conditions</strong>. Subtract 10 mph for crosswinds, rain, or
          heavy traffic. Subtract more for a sustained downgrade.
        </li>
      </ol>

      <div className="mt-8 rounded-xl border border-green-200 bg-green-50 p-6">
        <h3 className="font-bold text-green-800">
          The 60 MPH Sweet Spot
        </h3>
        <p className="mt-2 text-green-700">
          For a typical half-ton or three-quarter-ton truck pulling a 6,000 to
          9,000 lb travel trailer, <strong>60 mph</strong> sits under the ST tire
          rating with margin, keeps you below the sway onset band, holds
          stopping distance manageable, and returns 1 to 2 mpg more than 70 mph.
          On a 400-mile day it costs you about 35 minutes. That is a cheap
          insurance premium.
        </p>
      </div>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Safety Tips for High-Speed Corridors
      </h2>
      <ul className="mt-3 list-disc space-y-2 pl-6 text-gray-700">
        <li>
          <strong>Stay right.</strong> Several states legally bar trailers from
          the left lane on multi-lane freeways. Even where it is legal, the
          right lanes give you an escape path.
        </li>
        <li>
          <strong>Check tire temperature at every stop.</strong> Use an infrared
          thermometer or the back of your hand on the sidewall. A tire notably
          hotter than its mate on the same side is telling you something.
        </li>
        <li>
          <strong>Install a TPMS.</strong> A slow leak at 65 mph becomes a
          blowout in minutes. Pressure monitoring buys you the warning.
        </li>
        <li>
          <strong>Increase following distance to 6 seconds.</strong> The standard
          3-second rule assumes a car. Your stopping distance is roughly 45
          percent longer.
        </li>
        <li>
          <strong>Slow before the grade, not on it.</strong> Descending, select
          a gear that holds your speed without service brakes. See our{" "}
          <Link
            href="/guides/mountain-towing-transmission-gears"
            className="text-brand-600 hover:underline"
          >
            mountain towing guide
          </Link>
          .
        </li>
        <li>
          <strong>Recheck lug nut torque.</strong> Trailer wheels loosen. Check
          at 50 miles after any wheel service, then every fuel stop on a long
          run.
        </li>
      </ul>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Sources &amp; References
      </h2>
      <ul className="mt-3 list-disc space-y-2 pl-6 text-sm text-gray-600">
        <li>
          <a
            href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=VEH&sectionNum=22406"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            California Vehicle Code section 22406 &mdash; 55 mph Towing Limit
          </a>
        </li>
        <li>
          <a
            href="https://app.leg.wa.gov/rcw/default.aspx?cite=46.61.400"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            Washington RCW 46.61.400 &mdash; Basic Rule and Maximum Limits
          </a>
        </li>
        <li>
          <a
            href="https://www.nhtsa.gov/vehicle-safety/tires"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            NHTSA Tire Safety &mdash; Load, Pressure, and Speed
          </a>
        </li>
        <li>
          <a
            href="https://www.tireindustry.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            Tire Industry Association &mdash; ST Tire Service Guidance
          </a>
        </li>
        <li>
          <a
            href="https://www.rvia.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            RV Industry Association (RVIA)
          </a>
        </li>
        <li>
          <a
            href="https://www.fmcsa.dot.gov/regulations/title/49/section/393.75"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            FMCSA 49 CFR 393.75 &mdash; Tire Load and Speed Requirements
          </a>
        </li>
      </ul>

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

      <div className="mt-10 rounded-xl border border-gray-200 bg-gray-50 p-6">
        <h3 className="font-bold text-gray-900">Related Guides</h3>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          <li>
            <Link
              href="/guides/travel-trailer-tire-safety"
              className="text-brand-600 hover:underline"
            >
              Travel Trailer Tire Safety &amp; Blowout Prevention
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
              href="/guides/trailer-brake-controller-setup"
              className="text-brand-600 hover:underline"
            >
              Trailer Brake Controller Setup
            </Link>
          </li>
          <li>
            <Link
              href="/guides/mountain-towing-transmission-gears"
              className="text-brand-600 hover:underline"
            >
              Mountain Towing: Transmission Temp &amp; Gears
            </Link>
          </li>
          <li>
            <Link
              href="/guides/cdl-requirements-rv-towing"
              className="text-brand-600 hover:underline"
            >
              Do You Need a CDL to Tow an RV?
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
        </ul>
      </div>
    </div>
  );
}
