import type { Metadata } from "next";
import Link from "next/link";
import { FaqJsonLd, ArticleJsonLd, HowToJsonLd } from "@/components/seo/JsonLd";
import { DEFAULT_OG_IMAGES } from "@/lib/seo/default-og-image";

export const metadata: Metadata = {
  title: "How to Hitch Up a Travel Trailer: Step-by-Step Safe Procedure",
  description:
    "Hitch up a travel trailer safely in 9 steps: ball match and torque, the latch test, crossed safety chains, breakaway cable, 7-pin light test and pre-tow checks.",
  alternates: {
    canonical:
      "https://www.rvtowingcalc.com/guides/how-to-hitch-up-a-travel-trailer",
  },
  openGraph: {
    title: "How to Hitch Up a Travel Trailer: Step-by-Step Safe Procedure",
    description:
      "The nine-step travel trailer hitching procedure, including the latch test and breakaway cable check that most owners skip, plus the eight mistakes that cause drop-offs.",
    url: "https://www.rvtowingcalc.com/guides/how-to-hitch-up-a-travel-trailer",
    images: DEFAULT_OG_IMAGES,
  },
};

const FAQS = [
  {
    q: "How long does it take to hitch up a travel trailer?",
    a: "Once you know the sequence, three to five minutes on flat ground with no assistance. First-timers should budget 15 to 20 minutes and expect to get out and look several times. The parts that take the longest are reversing the ball under the coupler accurately and connecting the weight distribution bars if you run them. Never let speed become the goal: the latch test and light test are the two steps that get skipped when people hurry, and both exist to catch a failure before it happens on the highway.",
  },
  {
    q: "Do safety chains really need to be crossed?",
    a: "Crossing the chains under the tongue is the near-universal trailer industry practice and is required by some state laws, and the geometry is the reason: if the coupler separates from the ball, crossed chains form a cradle that suspends the tongue above the pavement instead of letting it drop, dig in and pivot the trailer. The federal coupling rule for commercially towed vehicles, 49 CFR 393.70(d), requires two chains or cables attached to the frame at points as far apart as the frame permits, with the strength to hold the towed vehicle and no more slack than needed to turn. Note that this regulation applies to commercial motor vehicles and their towed units, not to a private travel trailer, so your state law and the trailer manufacturer's instructions are the direct authority for your rig.",
  },
  {
    q: "Where does the breakaway cable attach?",
    a: "To a separate, fixed point on the tow vehicle's frame or hitch structure, never looped through or around the safety chains. The cable has to be shorter than the safety chains, so that if the trailer separates it pulls the breakaway pin before the chains go taut. If the cable is longer than the chains, the chains take the load first and the trailer brakes may never activate - you have a battery and a switch doing nothing.",
  },
  {
    q: "What is the latch test and why does it matter?",
    a: "After you close the coupler latch, crank the tongue jack up. If the coupler is genuinely locked onto the ball, the trailer will lift, or the tow vehicle will start to rise with it. If the coupler lifts off the ball, the latch never engaged - open it, re-seat the coupler on the ball and try again. Couplers that look closed but never locked are one of the most common causes of a trailer coming unhitched, and the test takes about ten seconds.",
  },
  {
    q: "How often should I test the breakaway switch?",
    a: "Check the battery charge indicator before every trip, and pull-test the switch about once a month. To test, chock the trailer wheels and disconnect the seven-way plug so the breakaway system has to run on its own battery, then pull the pin and listen for the trailer brakes engaging. Reinsert the pin immediately afterwards, because the switch drains the battery quickly while it is actuated. Replace the breakaway battery if it will not hold a charge - a dead battery means the emergency braking system is decorative.",
  },
];

const BALL_TABLE = [
  [
    "1-7/8 in",
    "Class I - II light trailers",
    "About 2,000 lb",
    "Not for travel trailers. Common on utility and boat trailers only",
  ],
  [
    "2 in",
    "Class II - III",
    "3,500 - 8,000 lb",
    "The most common coupler on small and mid-size travel trailers",
  ],
  [
    "2-5/16 in",
    "Class III - V",
    "6,000 - 14,000 lb+",
    "Required for heavier travel trailers and nearly all fifth wheel adapters",
  ],
];

const BALL_TORQUE_TABLE = [
  ["3/4 in shank", "160 ft-lb", "Typically 1-7/8 in and 2 in balls"],
  ["1 in shank", "250 ft-lb", "The common 2-5/16 in ball on a class III or IV mount"],
  ["1-1/4 in shank", "450 ft-lb", "Heavy class V balls up to about 14,000 lb"],
];

const CHAIN_TABLE = [
  [
    "Number of chains",
    "Two separate chains, or a single chain in a bridle to two frame points",
  ],
  [
    "Attachment points",
    "The tow vehicle frame or the hitch's own chain loops - never the ball, the ball mount shank or a safety-chain-to-chain link",
  ],
  [
    "Strength",
    "Ultimate strength not less than the gross weight of the trailer being towed",
  ],
  [
    "Routing",
    "Crossed in an X under the tongue, hooks facing down or outward so vibration cannot open them",
  ],
  [
    "Slack",
    "Enough to allow a full turn without binding, not enough to drag, scrape or reach the running lights. Roughly 3-5 in of ground clearance",
  ],
  [
    "Twist",
    "Never twist the chains to shorten them - use a properly rated quick link instead",
  ],
];

const BREAKAWAY_TABLE = [
  [
    "Attachment point",
    "A separate fixed point on the tow vehicle, independent of the chains",
    "Never loop or wrap the cable around a chain",
  ],
  [
    "Length",
    "Shorter than the safety chains",
    "So the pin pulls before the chains take the load",
  ],
  [
    "Routing",
    "Straight, no sharp bends, no contact with the coupler latch",
    "A cable that binds may never pull",
  ],
  [
    "Battery charge",
    "Check the indicator before every trip",
    "A dead battery disables the whole system",
  ],
  [
    "Switch test",
    "Pull-test about monthly, pin out with the trailer chocked",
    "Reinsert the pin immediately after testing",
  ],
];

const MISTAKE_TABLE = [
  [
    "Latch closed but never engaged, no latch test",
    "Coupler lifts off the ball under load",
    "Crank the jack up and confirm the coupler holds before you pull out",
  ],
  [
    "No pin or lock through the latch",
    "Latch can be knocked open in transit",
    "Fit the latch pin or lock every single time",
  ],
  [
    "Safety chains connected straight across",
    "No cradle - the tongue drops to the pavement if the coupler fails",
    "Cross them in an X under the tongue",
  ],
  [
    "Breakaway cable looped through the chains",
    "The pin never pulls; emergency braking never happens",
    "Attach to its own fixed point, shorter than the chains",
  ],
  [
    "Tongue jack left in the down position",
    "Jack contacts the road at dips and railway crossings",
    "Crank it fully up to travel position and pin it",
  ],
  [
    "Wrong ball diameter for the coupler",
    "The coupler never seats properly and can pop off",
    "Match the ball to the coupler stamp and never improvise",
  ],
  [
    "Lights plugged in but never tested",
    "No brake lights or turn signals on the trailer",
    "Test all four circuits before every departure",
  ],
  [
    "Ball nut never checked after installation",
    "A loose ball works in the coupler and wears it oval",
    "Torque to spec and recheck after the first 50 miles",
  ],
];

const HOWTO_STEPS = [
  {
    name: "Set up safely on level ground",
    text: "Chock the trailer wheels, put the tow vehicle in Park with the parking brake on and the engine off, and keep hands and feet clear of the space between the ball and the coupler.",
  },
  {
    name: "Match the ball to the coupler and set the drop",
    text: "Confirm the ball diameter matches the coupler stamp, that the ball and mount ratings meet or exceed the trailer GVWR, and that the rise or drop makes the trailer sit level.",
  },
  {
    name: "Raise the coupler and reverse the ball underneath",
    text: "Crank the tongue jack until the coupler clears the ball by about an inch, then back the tow vehicle up squarely with the coupler latch open.",
  },
  {
    name: "Lower the coupler onto the ball and close the latch",
    text: "Lower the jack until the coupler seats fully on the ball with the skirt flush, close the latch completely and fit the latch pin or lock.",
  },
  {
    name: "Run the latch test",
    text: "Crank the jack up again. If the coupler is locked it will hold, or start to lift the tow vehicle. If the coupler lifts off the ball, the latch never engaged - re-seat it and try again.",
  },
  {
    name: "Raise the jack to travel position",
    text: "Crank the jack fully up into its transport position and secure it with the pin or clip, so it cannot contact the road surface on dips or railway crossings.",
  },
  {
    name: "Cross and connect the safety chains",
    text: "Cross the chains in an X under the tongue, attach them to the tow vehicle's chain loops with the hooks facing down or outward, and leave enough slack to turn but not enough to drag.",
  },
  {
    name: "Attach the breakaway cable and check the battery",
    text: "Attach the breakaway cable to a separate fixed point on the tow vehicle, shorter than the chains and clear of the latch, then confirm the breakaway battery holds a charge.",
  },
  {
    name: "Plug in the seven-way and test all four circuits",
    text: "Seat the connector firmly, then test brake lights, left turn signal, right turn signal and running lights. Fix any dead circuit before the trailer moves.",
  },
  {
    name: "Do the final walk-around and rolling check",
    text: "Confirm the latch is pinned, the jack is up, the chains are crossed and secure, the plug is seated and cargo is restrained, then after about 100 feet of driving stop and recheck the connection and the lug nut torque.",
  },
];

export default function HowToHitchUpATravelTrailerPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <ArticleJsonLd
        title="How to Hitch Up a Travel Trailer: Step-by-Step Safe Procedure"
        description="The nine-step travel trailer hitching procedure, including the ball match, the latch test, crossed safety chains, the breakaway cable and the four-circuit light test."
        url="https://www.rvtowingcalc.com/guides/how-to-hitch-up-a-travel-trailer"
        datePublished="2026-09-20"
      />
      <FaqJsonLd
        faqs={FAQS}
        baseUrl="https://www.rvtowingcalc.com/guides/how-to-hitch-up-a-travel-trailer"
      />
      <HowToJsonLd
        name="How to Hitch Up a Travel Trailer"
        description="A step-by-step travel trailer hitching procedure: ball and coupler match, the latch test, safety chains crossed under the tongue, breakaway cable attachment, seven-way light test and final walk-around."
        url="https://www.rvtowingcalc.com/guides/how-to-hitch-up-a-travel-trailer"
        totalTime="PT20M"
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
        <span className="text-gray-900">Hitching Up</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
        How to Hitch Up a Travel Trailer: Step-by-Step Safe Procedure
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        Trailers rarely come unhitched because somebody skipped an exotic step.
        They come unhitched because the coupler looked closed but never locked,
        or because the safety chains were run straight across instead of
        crossed, or because the tongue jack was left down and hit a railway
        crossing at 55 mph. This guide walks through the full sequence in order,
        flags the two checks that catch almost every real problem, and lists the
        eight mistakes that account for the majority of drop-offs.
      </p>

      <div className="mt-8 rounded-xl bg-brand-50 p-6">
        <h2 className="text-lg font-bold text-brand-800">The Short Answer</h2>
        <p className="mt-2 text-brand-700">
          Hitching up is nine steps and about three to five minutes once you know
          them: match the ball, back under the coupler, latch it,{" "}
          <strong>run the latch test</strong>, raise the jack,{" "}
          <strong>cross the chains</strong>, attach the breakaway cable, plug in
          the seven-way and test all four light circuits, then walk around the
          rig. The latch test and the light test are the two that people skip
          under time pressure, and they are the two that catch a failure while
          you are still standing in the driveway instead of on the highway.
        </p>
      </div>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Step 1: Match the Ball, the Coupler and the Drop
      </h2>
      <p className="mt-3 text-gray-700">
        Everything downstream depends on the ball and coupler being a matched
        pair. The ball diameter is stamped near the coupler, and if it does not
        match, nothing else in this procedure can save you. A ball that is too
        small lets the coupler rock and eventually pop off; a ball that is too
        large stops the latch from closing at all.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">
                Ball diameter
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Typical hitch class
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Common capacity
              </th>
              <th className="border px-3 py-2 text-left font-semibold">Note</th>
            </tr>
          </thead>
          <tbody>
            {BALL_TABLE.map((row, i) => (
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
        Two rules matter more than the table. First, the ball and ball mount
        rating must{" "}
        <strong>meet or exceed the trailer&apos;s GVWR</strong>, not the weight
        you expect to load. Second, the ball nut has to be torqued with a
        wrench - a ball that has worked loose is a coupler that wears oval.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">
                Ball shank
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Torque spec
              </th>
              <th className="border px-3 py-2 text-left font-semibold">Note</th>
            </tr>
          </thead>
          <tbody>
            {BALL_TORQUE_TABLE.map((row, i) => (
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
        Torque values as published by hitch ball manufacturers. Confirm against
        the documentation for your own ball and mount before tightening, and
        recheck the ball nut after the first 50 miles.
      </p>

      <p className="mt-4 text-gray-700">
        Finally, set the drop. With the trailer level and the tow vehicle
        loaded, the trailer frame should sit level front to back &mdash; within
        about an inch over its length. Too much nose-up shifts{" "}
        <Link
          href="/guides/tongue-weight"
          className="text-brand-600 hover:underline"
        >
          tongue weight
        </Link>{" "}
        rearward and invites sway; too much nose-down loads the front trailer
        axle and the hitch. If your setup needs a different rise or drop, change
        the ball mount rather than accepting an unlevel trailer. Our{" "}
        <Link
          href="/guides/hitch-ball-selection-guide"
          className="text-brand-600 hover:underline"
        >
          hitch ball selection guide
        </Link>{" "}
        covers the measurement procedure in detail.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Step 2: Lower the Coupler Onto the Ball
      </h2>
      <p className="mt-3 text-gray-700">
        With the coupler latch <strong>open</strong>, crank the tongue jack until
        the coupler sits about an inch above the top of the ball. Back the tow
        vehicle up squarely &mdash; a rear camera or a spotter helps, but if you
        are alone, get out and look as many times as it takes. Getting it right
        on the first try is not the goal; not damaging the coupler or the ball is.
      </p>
      <p className="mt-3 text-gray-700">
        Then lower the jack slowly. You are looking for the coupler to drop fully
        over the ball with its skirt sitting flush, with no gap and no rocking
        when you push the tongue sideways. Close the latch completely &mdash; on
        most couplers the handle swings over-centre and should require real force
        to close. If it closes with no resistance, the coupler is not seated on
        the ball. Finish by fitting the latch pin or a coupler lock.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Step 3: Run the Latch Test
      </h2>
      <p className="mt-3 text-gray-700">
        This is the ten-second check that catches the classic drop-off. With the
        latch closed and pinned, crank the tongue jack <em>up</em>. A coupler
        that is genuinely locked onto the ball will hold the load, and if you
        keep cranking you will start to lift the rear of the tow vehicle. A
        coupler that was never engaged will simply rise off the ball.
      </p>

      <svg
        viewBox="0 0 680 250"
        width="100%"
        role="img"
        aria-label="Diagram showing the latch test: on the left a properly latched coupler holds when the tongue jack lifts, on the right a coupler that was never engaged lifts off the ball"
        className="mt-6 w-full rounded-xl border border-gray-200 bg-white"
      >
        <title>The latch test: lifting the tongue to confirm the coupler is locked</title>
        <rect x="0" y="0" width="680" height="250" fill="#ffffff" />

        <text
          x="24"
          y="30"
          fill="#111827"
          fontSize="15"
          fontWeight="700"
          fontFamily="system-ui, sans-serif"
        >
          Crank the jack up. The coupler must not move.
        </text>

        <rect
          x="30"
          y="56"
          width="290"
          height="160"
          rx="12"
          fill="#ecfdf5"
          stroke="#047857"
          strokeWidth="2"
        />
        <text
          x="175"
          y="84"
          fill="#047857"
          fontSize="13"
          fontWeight="700"
          textAnchor="middle"
          fontFamily="system-ui, sans-serif"
        >
          Latched correctly
        </text>
        <rect x="110" y="112" width="130" height="26" rx="6" fill="#ffffff" stroke="#047857" strokeWidth="2" />
        <circle cx="175" cy="150" r="12" fill="#047857" />
        <line x1="175" y1="162" x2="175" y2="196" stroke="#047857" strokeWidth="4" />
        <line x1="140" y1="196" x2="210" y2="196" stroke="#047857" strokeWidth="4" />
        <text
          x="175"
          y="212"
          fill="#374151"
          fontSize="11"
          textAnchor="middle"
          fontFamily="system-ui, sans-serif"
        >
          Coupler holds or the truck lifts
        </text>

        <rect
          x="360"
          y="56"
          width="290"
          height="160"
          rx="12"
          fill="#fef2f2"
          stroke="#dc2626"
          strokeWidth="2"
        />
        <text
          x="505"
          y="84"
          fill="#b91c1c"
          fontSize="13"
          fontWeight="700"
          textAnchor="middle"
          fontFamily="system-ui, sans-serif"
        >
          Latch never engaged
        </text>
        <rect x="440" y="104" width="130" height="26" rx="6" fill="#ffffff" stroke="#dc2626" strokeWidth="2" />
        <circle cx="505" cy="152" r="12" fill="#ffffff" stroke="#dc2626" strokeWidth="2" />
        <line x1="505" y1="128" x2="505" y2="140" stroke="#dc2626" strokeWidth="3" strokeDasharray="4 4" />
        <line x1="470" y1="176" x2="540" y2="176" stroke="#dc2626" strokeWidth="4" />
        <text
          x="505"
          y="212"
          fill="#b91c1c"
          fontSize="11"
          textAnchor="middle"
          fontFamily="system-ui, sans-serif"
        >
          Coupler rises off the ball - start again
        </text>
      </svg>
      <p className="mt-3 text-sm text-gray-500">
        Diagrammatic. On a very heavy trailer the coupler may not visibly lift
        the tow vehicle, but it must still hold the tongue load instead of
        sliding up the ball.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Step 4: Raise the Jack to Travel Position
      </h2>
      <p className="mt-3 text-gray-700">
        Crank the tongue jack fully up and secure it with its pin or clip. A jack
        left in the down position will contact the pavement the first time you
        cross a dip, a driveway apron or a railway crossing, and the impact can
        unseat the coupler or bend the jack. This is a small step that appears in
        accident reports more often than anyone expects.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Step 5: Cross and Connect the Safety Chains
      </h2>
      <p className="mt-3 text-gray-700">
        Safety chains are not there to tow the trailer. They are there to catch
        the tongue if the coupler ever separates from the ball. That is why the
        routing matters: crossed under the tongue, they form a cradle that
        suspends the tongue above the pavement. Run straight across, and the
        tongue drops to the road, digs in, and pivots the trailer sideways at
        speed.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">
                Requirement
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                What it means in practice
              </th>
            </tr>
          </thead>
          <tbody>
            {CHAIN_TABLE.map((row, i) => (
              <tr key={row[0]} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                <td className="border px-3 py-2 font-semibold">{row[0]}</td>
                <td className="border px-3 py-2">{row[1]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-gray-700">
        For context on where these standards come from: the US federal coupling
        rule for commercially towed vehicles,{" "}
        <a
          href="https://www.ecfr.gov/current/title-49/section-393.70"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-600 hover:underline"
        >
          49 CFR 393.70(d)
        </a>
        , requires two safety chains or cables attached to the frame at points as
        far apart as the configuration allows, with ultimate strength not less
        than the gross weight of the towed vehicle and no more slack than
        necessary to turn. It does not spell out crossing, which is why you will
        see that described as industry practice rather than federal law. A
        private travel trailer is not a commercial motor vehicle, so your state
        law and the trailer manufacturer&apos;s instructions are the direct
        authority &mdash; but the federal standard is a sensible floor, and the
        crossing geometry is what performs the job the chains exist for.
      </p>
      <p className="mt-3 text-gray-700">
        Our{" "}
        <Link
          href="/guides/trailer-brake-laws-by-state"
          className="text-brand-600 hover:underline"
        >
          trailer brake laws by state
        </Link>{" "}
        guide covers the related question of when a trailer must have brakes of
        its own, which is the other half of the emergency-stopping picture.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Step 6: Attach the Breakaway Cable and Check the Battery
      </h2>
      <p className="mt-3 text-gray-700">
        The breakaway system is the only thing that stops a trailer that is no
        longer connected to anything. Treat it as a separate system, not an
        accessory to the chains.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">Item</th>
              <th className="border px-3 py-2 text-left font-semibold">
                What to do
              </th>
              <th className="border px-3 py-2 text-left font-semibold">Why</th>
            </tr>
          </thead>
          <tbody>
            {BREAKAWAY_TABLE.map((row, i) => (
              <tr key={row[0]} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                <td className="border px-3 py-2 font-semibold">{row[0]}</td>
                <td className="border px-3 py-2">{row[1]}</td>
                <td className="border px-3 py-2 text-xs">{row[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-gray-700">
        The logic behind the length rule is worth stating plainly. If the cable
        is longer than the chains, then when the trailer separates the chains go
        taut first and hold it &mdash; and the pin never pulls, so the trailer
        brakes never apply. You have a fully charged battery, a working switch
        and no braking. Shorter than the chains means the pin pulls first and the
        trailer brakes itself to a stop in the cradle of the crossed chains.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Step 7: Plug In the Seven-Way and Test All Four Circuits
      </h2>
      <p className="mt-3 text-gray-700">
        Seat the connector firmly and check that it clicks or locks. Then test
        the four circuits that matter, every time: brake lights, left turn
        signal, right turn signal and running lights. If you are hitching up
        alone, back the trailer toward a garage door, a wall or a parked vehicle
        and watch the reflection in your mirror while you work the pedals and
        stalk. A loose connection is the most common cause of a dead circuit, so
        re-seat the plug before you go looking for a wiring fault.
      </p>
      <p className="mt-3 text-gray-700">
        If the trailer has electric brakes, this is also the moment to confirm
        the brake controller is set for the load. Our{" "}
        <Link
          href="/guides/trailer-brake-controller-setup"
          className="text-brand-600 hover:underline"
        >
          brake controller setup guide
        </Link>{" "}
        covers gain adjustment and the drag check.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Step 8: Weight Distribution Bars and Sway Control
      </h2>
      <p className="mt-3 text-gray-700">
        If you run a weight distribution hitch, fit the spring bars after the
        coupler is latched, with the tongue at the height you used when you set
        the system up. Count the chain links on the snap-up brackets and use the
        same count on both sides. Then stand back and look at the rig from the
        side: a properly set system returns the tow vehicle to near its
        unhitched ride height at the front and keeps the trailer level.
      </p>
      <p className="mt-3 text-gray-700">
        Two cautions. Never force a bar onto a bracket when the tongue is at the
        wrong height &mdash; that is how people get hurt and strip brackets. And
        never use the spring bars to fix a sagging rear end that is really a{" "}
        <Link
          href="/payload-calculator"
          className="text-brand-600 hover:underline"
        >
          payload problem
        </Link>{" "}
        &mdash; a weight distribution hitch moves load within the ratings, it
        does not raise them. The{" "}
        <Link
          href="/guides/weight-distribution-hitch-setup"
          className="text-brand-600 hover:underline"
        >
          weight distribution hitch setup guide
        </Link>{" "}
        has the full measurement procedure and the link-by-link adjustment.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Step 9: Final Walk-Around and the First 100 Feet
      </h2>
      <p className="mt-3 text-gray-700">
        Walk the whole rig once, doing a physical check rather than a visual one:
      </p>
      <ul className="mt-2 ml-6 list-disc space-y-2 text-gray-700">
        <li>Coupler latch closed <em>and</em> pinned, coupler seated flush.</li>
        <li>Tongue jack fully raised and secured.</li>
        <li>Chains crossed, hooks facing down or out, not dragging.</li>
        <li>Breakaway cable attached separately and shorter than the chains.</li>
        <li>Seven-way plug seated, all four light circuits confirmed.</li>
        <li>
          Cargo secured, water tank filled or empty to plan, and the trailer
          within its{" "}
          <Link
            href="/guides/cargo-carrying-capacity-ccc"
            className="text-brand-600 hover:underline"
          >
            cargo carrying capacity
          </Link>
          .
        </li>
        <li>Tires at cold pressure, and lug nuts torque-checked.</li>
      </ul>
      <p className="mt-3 text-gray-700">
        Then, after about 100 feet of driving, stop and recheck the coupler,
        chains and plug. Settling under load is normal, and the first 100 feet is
        where a marginal connection reveals itself while you are still somewhere
        safe. This is the same discipline the{" "}
        <Link
          href="/guides/travel-trailer-pre-trip-inspection"
          className="text-brand-600 hover:underline"
        >
          pre-trip inspection checklist
        </Link>{" "}
        builds into a repeatable routine, and the{" "}
        <Link href="/checklist" className="text-brand-600 hover:underline">
          printable checklist
        </Link>{" "}
        is worth keeping in the trailer.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        The Eight Mistakes That Cause Most Drop-Offs
      </h2>
      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">
                Mistake
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                What it causes
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                The fix
              </th>
            </tr>
          </thead>
          <tbody>
            {MISTAKE_TABLE.map((row, i) => (
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
        Unhitching Is the Same Sequence, Reversed
      </h2>
      <p className="mt-3 text-gray-700">
        Park on as level a spot as you can find, chock the trailer wheels on both
        sides, then apply the tow vehicle&apos;s parking brake. Disconnect the
        breakaway cable, the seven-way plug and then the chains, in that order
        &mdash; keeping the chains connected until nearly the end is a cheap
        insurance policy. Remove the weight distribution bars with the tongue
        under load, then crank the jack up until the coupler clears the ball.
        Open the latch <em>last</em>, once the ball is free of load, and drive
        the tow vehicle forward before you level and stabilise the trailer.
      </p>

      <div className="mt-10 rounded-2xl bg-brand-600 p-8 text-center text-white">
        <h2 className="text-2xl font-bold">
          Hitching Is Half the Job. Weight Is the Other Half.
        </h2>
        <p className="mt-2 text-brand-100">
          Confirm your tongue weight, payload and trailer weight in under two
          minutes. Free, independent, no sign-up.
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
            href="https://www.ecfr.gov/current/title-49/section-393.70"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            49 CFR 393.70 &mdash; Coupling devices and towing methods, including
            the federal safety device requirements in paragraph (d)
          </a>
        </li>
        <li>
          <a
            href="https://www.fmcsa.dot.gov/regulations/title49/section/393.70"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            FMCSA &mdash; guidance on coupling devices, safety chains and towing
            methods
          </a>
        </li>
        <li>
          <a
            href="https://www.nhtsa.gov/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            NHTSA &mdash; vehicle safety standards, trailer equipment and recall
            information
          </a>
        </li>
        <li>
          <a
            href="https://www.rvia.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            RV Industry Association (RVIA) &mdash; RV standards and weight
            labelling programs
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
            towing and weight safety education
          </a>
        </li>
        <li>
          <a
            href="https://www.reesetowpower.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            REESE Towpower &mdash; published hitch ball torque specifications by
            shank diameter
          </a>
        </li>
      </ul>

      <div className="mt-10 rounded-xl border border-gray-200 bg-gray-50 p-6">
        <h3 className="font-bold text-gray-900">Related Guides</h3>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          <li>
            <Link
              href="/guides/weight-distribution-hitch-setup"
              className="text-brand-600 hover:underline"
            >
              Weight Distribution Hitch Setup
            </Link>
          </li>
          <li>
            <Link
              href="/guides/hitch-ball-selection-guide"
              className="text-brand-600 hover:underline"
            >
              Hitch Ball Selection Guide
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
              href="/guides/travel-trailer-pre-trip-inspection"
              className="text-brand-600 hover:underline"
            >
              Pre-Trip Inspection Checklist
            </Link>
          </li>
          <li>
            <Link
              href="/guides/trailer-hitch-classes-explained"
              className="text-brand-600 hover:underline"
            >
              Trailer Hitch Classes Explained
            </Link>
          </li>
          <li>
            <Link
              href="/guides/trailer-suspension-leaf-spring-inspection"
              className="text-brand-600 hover:underline"
            >
              Trailer Suspension &amp; Leaf Spring Inspection
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
