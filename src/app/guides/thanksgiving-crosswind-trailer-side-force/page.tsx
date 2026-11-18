import type { Metadata } from "next";
import Link from "next/link";
import { FaqJsonLd, ArticleJsonLd, HowToJsonLd } from "@/components/seo/JsonLd";
import { DEFAULT_OG_IMAGES } from "@/lib/seo/default-og-image";

import AmazonAffiliate from "@/components/AmazonAffiliate";

export const metadata: Metadata = {
  title: "Thanksgiving Crosswind: 700 lb Pushing on Your Trailer",
  description:
    "A 30 mph crosswind puts 700 lb on the side of a 28-foot trailer and 1.4 times that on the rear axle. The force math for towing in crosswind, and where it bites.",
  keywords: [
    "towing in crosswind with a travel trailer",
    "how much wind is too much to tow an rv",
    "trailer sway in high wind",
    "side force on travel trailer",
    "thanksgiving travel wind forecast",
    "wind advisory towing",
    "trailer rollover wind",
  ],
  alternates: {
    canonical:
      "https://www.rvtowingcalc.com/guides/thanksgiving-crosswind-trailer-side-force",
  },
  openGraph: {
    title: "Thanksgiving Crosswind: 700 lb Pushing on Your Trailer",
    description:
      "A 28-foot trailer is 252 square feet of sail. What 30 mph of November wind does to the side force, the tire load, and the lane you thought you were holding.",
    url: "https://www.rvtowingcalc.com/guides/thanksgiving-crosswind-trailer-side-force",
    images: DEFAULT_OG_IMAGES,
  },
};

const FAQS = [
  {
    q: "How much wind is too much to tow a travel trailer?",
    a: "Twenty mph sustained is a correction you hold without thinking about it. At 25 mph the side force reaches 480 lb on a 28-foot trailer and a friction sway bar is doing real work. At 31 mph the National Weather Service issues a Wind Advisory, and that is 740 lb of side force on the same trailer, with gusts running higher than the sustained number. Above 30 mph sustained, the defensible answer is to wait out the front or take the route with a tailwind, because no hitch setting removes the force.",
  },
  {
    q: "Does a heavier truck make a crosswind safer?",
    a: "It helps with the part of the problem the truck can affect. A longer wheelbase and a wider rear track resist yaw better, and a dually puts more rubber and more load on the axle that carries the tongue weight. None of it changes the trailer's 252 square feet of sail area or the 697 lb the wind puts on it. A bigger truck buys you margin at the contact patch. It does not reduce the disturbance.",
  },
  {
    q: "Does a weight distribution hitch help in a crosswind?",
    a: "Not the way people expect. The bars do not touch the side force, which is set by wind speed and trailer area. What they do is return steer axle load after the tongue weight lifts the front, and that load is the grip you steer with. Integrated four-point hitches add yaw damping at the head, which is the part that fights a gust. A friction bar on the tongue is a different mechanism and a smaller effect.",
  },
  {
    q: "Why does my trailer move when a semi passes, not before?",
    a: "A tractor-trailer displaces a large volume of air ahead of it, and you feel the push a second or two before the cab reaches you. The worse moment is the exit. The truck blocks the crosswind while it is alongside, then releases it all at once when the trailer clears your front bumper, so your trailer gets the full wind load while your truck is already free of it. That asymmetry is what puts a yaw input into the hitch.",
  },
];

const FORCE_TABLE = [
  ["15 mph", "0.58 psf", "173 lb", "Correction you make without noticing"],
  ["20 mph", "1.02 psf", "307 lb", "Constant steering input, still comfortable"],
  ["25 mph", "1.60 psf", "480 lb", "Sway control is earning its price"],
  ["30 mph", "2.30 psf", "697 lb", "Gusts now outrun the trailer's damping"],
  ["31 mph", "2.46 psf", "740 lb", "Wind Advisory threshold"],
  ["40 mph", "4.10 psf", "1,229 lb", "High Wind Warning threshold"],
];

const SIZE_TABLE = [
  ["21 ft box", "189 sq ft", "523 lb"],
  ["24 ft box", "216 sq ft", "597 lb"],
  ["28 ft box", "252 sq ft", "697 lb"],
  ["32 ft box", "288 sq ft", "796 lb"],
  ["35 ft toy hauler", "315 sq ft", "871 lb"],
];

const LOAD_TABLE = [
  ["20 mph", "307 lb", "1,382 lb-ft", "173 lb"],
  ["25 mph", "480 lb", "2,160 lb-ft", "270 lb"],
  ["30 mph", "697 lb", "3,137 lb-ft", "392 lb"],
  ["40 mph", "1,229 lb", "5,531 lb-ft", "691 lb"],
];

const STEPS = [
  {
    name: "Read the gust line, not the average",
    text: "A forecast that says 15 mph is describing a mean. The number that moves a trailer is the gust, and gusts run 40 to 60 percent above sustained in a post-frontal wind field. Look at both, and treat a 35 mph gust as the working number rather than the footnote.",
  },
  {
    name: "Measure the trailer you actually own",
    text: "Box length times overall height, including the air conditioner shroud and anything on the roof. A 28-foot trailer standing 9 feet tall is 252 square feet of wall. Do not use the floor plan length, which usually excludes the tongue and the rear bumper overhang.",
  },
  {
    name: "Set sway control before the wind finds you",
    text: "A friction bar goes to the torque in its manual, not to hand tight, and it gets rechecked after the first fifty miles because the pads bed in. On an integrated four-point head, confirm the spring arms are seated on the L-brackets and the head angle matches the loaded coupler height.",
  },
  {
    name: "Load heavy and low, then re-measure tongue weight",
    text: "Side force acts about 4.5 feet off the pavement, so the higher the mass sits, the more of that force turns into roll rather than slide. Gear on the floor over the axles lowers the roll moment. Re-check tongue weight after loading, because the percentage that keeps a trailer stable on a calm day is the same one that helps in wind.",
  },
  {
    name: "Know the three places the forecast does not apply",
    text: "Bridge decks have no windbreak and a guardrail gap at each end. Road cuts between hills funnel and accelerate what crosses them. The exit from a semi's shadow releases the full wind load in about a second. Plan where those are on your route before you leave, not while you are in one.",
  },
  {
    name: "Write your pull-over rule down",
    text: "Pick the number now: a quarter turn of steady correction, or any trailer movement that continues after the gust passes, means the next exit. Deciding this at 60 mph with a trailer moving under you is how people talk themselves into the next forty miles.",
  },
];

export default function ThanksgivingCrosswindTrailerSideForcePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <ArticleJsonLd
        title="Thanksgiving Crosswind: 700 lb Pushing on Your Trailer"
        description="A 28-foot trailer is 252 square feet of sail. The dynamic pressure math behind crosswind side force, the roll moment that unloads the windward tires, and the wind speeds where a Thanksgiving tow stops being a good idea."
        url="https://www.rvtowingcalc.com/guides/thanksgiving-crosswind-trailer-side-force"
        datePublished="2026-11-18"
      />
      <FaqJsonLd
        faqs={FAQS}
        baseUrl="https://www.rvtowingcalc.com/guides/thanksgiving-crosswind-trailer-side-force"
      />
      <HowToJsonLd
        name="How to prepare a truck and trailer for a windy Thanksgiving drive"
        description="Read the gust forecast rather than the average, measure the trailer's side area, set sway control to spec, load heavy gear low and re-check tongue weight, identify bridge decks and road cuts on the route, and decide the pull-over rule before departure."
        steps={STEPS}
        totalTime="PT35M"
        url="https://www.rvtowingcalc.com/guides/thanksgiving-crosswind-trailer-side-force"
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
        <span className="text-gray-900">Thanksgiving Crosswind</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
        Thanksgiving Crosswind: What 30 mph Does to a 7,600 lb Trailer
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        A 28-foot travel trailer is 252 square feet of flat wall standing 9 feet
        tall. Turn it broadside to a 30 mph crosswind and the air is pushing on
        it with about 700 lb of force.
      </p>
      <p className="mt-3 text-lg text-gray-600">
        For comparison, the tongue weight holding that coupler down is 950 lb.
        The wind is running at three quarters of it, sideways, for as long as
        the front takes to pass.
      </p>

      <div className="mt-8 rounded-xl bg-brand-50 p-6">
        <h2 className="text-lg font-bold text-brand-800">The Short Answer</h2>
        <p className="mt-2 text-brand-700">
          Side force is dynamic pressure times area, and dynamic pressure is
          0.00256 times the square of wind speed in mph. At 30 mph that is 2.3
          pounds per square foot, which on 252 square feet of trailer comes to
          697 lb. Twenty mph is a correction you hold without thinking. Twenty
          five is where a sway bar starts earning its price. Thirty one is the
          National Weather Service Wind Advisory threshold and 740 lb on the
          same trailer. Above 30 sustained, waiting out the front beats any
          hitch setting, because slowing down does not reduce the push.
        </p>
      </div>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Why Wind Is a Squared Problem
      </h2>
      <p className="mt-3 text-gray-700">
        Moving air carries kinetic energy, and the pressure it exerts goes with
        the square of its speed. The engineering form is 0.00256 times velocity
        squared, which gives pounds per square foot directly when velocity is in
        mph. Fifteen mph produces 0.58 psf. Thirty produces 2.30. Double the
        wind and you quadruple the push.
      </p>
      <p className="mt-3 text-gray-700">
        That single relationship explains most of what feels wrong about a windy
        tow. A breeze you would call pleasant at a picnic is already 173 lb
        against the side of the trailer. The jump from 20 to 30 mph is not a 50
        percent increase in difficulty, it is 127 percent more force.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">
                Sustained wind
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Dynamic pressure
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Side force, 252 sq ft
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                What it feels like
              </th>
            </tr>
          </thead>
          <tbody>
            {FORCE_TABLE.map((row, i) => (
              <tr
                key={row[0]}
                className={row[0] === "30 mph" ? "bg-danger-50" : i % 2 === 1 ? "bg-gray-50" : ""}
              >
                <td className="border px-3 py-2 text-xs font-mono font-semibold">
                  {row[0]}
                </td>
                <td className="border px-3 py-2 text-xs font-mono">{row[1]}</td>
                <td className="border px-3 py-2 text-xs font-mono font-semibold">
                  {row[2]}
                </td>
                <td className="border px-3 py-2 text-xs">{row[3]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm text-gray-500">
        Side force computed as pressure times area times a 1.2 shape
        coefficient for a boxy trailer side. Wind speed thresholds from National
        Weather Service advisory and warning criteria.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Your Trailer&rsquo;s Side Area Sets Your Number
      </h2>
      <p className="mt-3 text-gray-700">
        Every trailer owner is running a different sail. Length is the obvious
        variable and height is the one people forget, because a lifted trailer
        with a roof-mounted air conditioner is carrying area well above the
        point where the wind does the most damage per square foot.
      </p>
      <p className="mt-3 text-gray-700">
        Measure box length and overall height with a tape, not from the spec
        sheet. Overall height includes the AC shroud, the antenna, and any
        vent covers. Then multiply. A 28 by 9 trailer is 252 square feet, and at
        30 mph that trailer takes 697 lb on the wall.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">
                Trailer
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Side area at 9 ft tall
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Side force at 30 mph
              </th>
            </tr>
          </thead>
          <tbody>
            {SIZE_TABLE.map((row, i) => (
              <tr key={row[0]} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                <td className="border px-3 py-2 text-xs font-semibold">
                  {row[0]}
                </td>
                <td className="border px-3 py-2 text-xs font-mono">{row[1]}</td>
                <td className="border px-3 py-2 text-xs font-mono font-semibold">
                  {row[2]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm text-gray-500">
        Rounded to the nearest square foot. A toy hauler with a ramp door and a
        raised roof line runs closer to 10 feet of overall height, which adds
        roughly 10 percent to every number in the last column.
      </p>

      <p className="mt-4 text-gray-700">
        This is also where trailer type changes the answer. A fifth wheel sits
        forward over the truck bed, so a share of its side area is ahead of the
        rear axle rather than 13 feet behind the coupler. The force is similar.
        The yaw arm is shorter, and that is why a fifth wheel handles the same
        wind with less drama. The{" "}
        <Link
          href="/guides/fifth-wheel-vs-travel-trailer"
          className="text-brand-600 hover:underline"
        >
          fifth wheel versus travel trailer comparison
        </Link>{" "}
        covers the geometry in more detail.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Where 700 lb Actually Lands
      </h2>
      <p className="mt-3 text-gray-700">
        Force on a wall does not push the trailer sideways as a block. It acts
        above the pavement, roughly 4.5 feet up on a trailer whose body starts
        at the frame and ends at the roof, and a force applied above the ground
        creates a roll moment about the tire contact patches.
      </p>
      <p className="mt-3 text-gray-700">
        Run the numbers at 30 mph. Seven hundred pounds acting 4.5 feet up is
        3,137 lb-ft of roll torque. Divide by an 8-foot track and the axle
        transfers 392 lb off the windward tires onto the leeward ones. Each
        windward tire gives up 196 lb of its load to the tire on the other side
        of the trailer.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">
                Wind
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Side force
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Roll moment at 4.5 ft
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Load off windward tires
              </th>
            </tr>
          </thead>
          <tbody>
            {LOAD_TABLE.map((row, i) => (
              <tr key={row[0]} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                <td className="border px-3 py-2 text-xs font-mono font-semibold">
                  {row[0]}
                </td>
                <td className="border px-3 py-2 text-xs font-mono">{row[1]}</td>
                <td className="border px-3 py-2 text-xs font-mono">{row[2]}</td>
                <td className="border px-3 py-2 text-xs font-mono font-semibold">
                  {row[3]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm text-gray-500">
        Calculated for a 252 sq ft trailer on an 8-foot track, assuming the
        resultant acts at mid-height. Load transfer is total across the axle,
        split between the two windward tires.
      </p>

      <p className="mt-4 text-gray-700">
        Now put that against a normal wheel position. A 7,600 lb trailer
        standing on two 3,500 lb axles carries about 1,550 lb per tire on a
        calm day. Losing 196 lb to the leeward side leaves 1,354 lb on the
        windward pair, which sounds survivable until the same gust meets a
        frost heave, a bridge expansion joint, or a patch of November gravel on
        the shoulder. The tire that was carrying 1,354 lb is the one that leaves
        the pavement first.
      </p>
      <p className="mt-3 text-gray-700">
        That is also why loading position matters more on a windy weekend than
        on a still one. Gear on the floor over the axles keeps the center of
        mass low, and every inch you lower it cuts the roll moment in
        proportion. The{" "}
        <Link href="/payload-calculator" className="text-brand-600 hover:underline">
          payload calculator
        </Link>{" "}
        gives you the per-axle numbers, and the{" "}
        <Link href="/guides/gawr-explained" className="text-brand-600 hover:underline">
          GAWR explainer
        </Link>{" "}
        covers what the axle rating means once the load moves.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Slowing Down Does Not Reduce the Push
      </h2>
      <p className="mt-3 text-gray-700">
        Nearly every wind article tells you to slow down because it reduces the
        wind&rsquo;s effect. It does not. A 30 mph crosswind puts 697 lb on a 28
        foot trailer whether you are running 45 or 70, because the force depends
        on the wind speed, not yours.
      </p>
      <p className="mt-3 text-gray-700">
        Slowing down works for a different reason. Trailer yaw response has a
        critical speed above which a disturbance grows instead of dying out,
        and that threshold is set by wheelbase, tire stiffness, and the distance
        from the ball to the axles. Below it, a gust produces a sway that decays.
        Above it, the same gust feeds itself. Speed is the variable you control
        that moves you toward the stable side of that line.
      </p>
      <p className="mt-3 text-gray-700">
        The other half is reaction distance. At 68 mph you cover 100 feet per
        second. At 55 you cover 81. A correction that takes a quarter second
        longer to make costs 25 feet of lane position at the higher speed and 20
        at the lower one, and 25 feet is most of a lane. That is the real trade,
        not a smaller force.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Three Places the Forecast Does Not Apply
      </h2>
      <p className="mt-3 text-gray-700">
        A regional wind number is an average over a landscape that is not
        uniform. Three features reliably produce more wind than the forecast for
        the county you are driving through.
      </p>
      <p className="mt-3 text-gray-700">
        <strong>Bridge decks.</strong> No trees, no buildings, no cut bank, and
        a guardrail that ends at each abutment. The deck is also where a
        crosswind meets a surface that can be colder than the road behind you,
        which is the other Thanksgiving problem covered in the{" "}
        <Link
          href="/guides/thanksgiving-rain-truck-hydroplanes-first"
          className="text-brand-600 hover:underline"
        >
          wet-pavement guide
        </Link>
        . Hold the wheel with both hands across every one of them.
      </p>
      <p className="mt-3 text-gray-700">
        <strong>Road cuts between hills.</strong> A gap in a ridge accelerates
        what crosses it the way a nozzle does, and the exit is worse than the
        entrance because the flow has had distance to organize. Eastern
        interstate routes through the Appalachians are full of these, and they
        arrive without warning because the tree line hides them until you are in
        one.
      </p>
      <p className="mt-3 text-gray-700">
        <strong>The exit from a semi&rsquo;s shadow.</strong> A tractor-trailer
        displaces a large volume of air ahead of itself, so you feel a push
        before the cab is alongside. The dangerous moment is when it clears your
        front bumper. The truck was blocking the crosswind, and it releases the
        full load onto your trailer in about a second while your own truck is
        already free of the blockage and no longer leaning. Truck and trailer
        are briefly in two different wind fields, and the hitch is what resolves
        the difference.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Six Checks Before the Drive
      </h2>
      <p className="mt-3 text-gray-700">
        None of this requires a part. It requires a forecast, a tape measure, and
        fifteen minutes with the trailer loaded.
      </p>

      <ol className="mt-4 space-y-3">
        {STEPS.map((step, i) => (
          <li key={step.name} className="flex gap-3">
            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-600 text-xs font-bold text-white">
              {i + 1}
            </span>
            <div>
              <p className="font-semibold text-gray-900">{step.name}</p>
              <p className="mt-1 text-sm text-gray-700">{step.text}</p>
            </div>
          </li>
        ))}
      </ol>

      <p className="mt-6 text-gray-700">
        One more calculation worth doing before the trip instead of during it.
        Side force scales with area, and area is the number you cannot change
        once the trailer is built. If your trailer comes out above 750 lb at 30
        mph, the wind plan is a routing decision rather than a driving
        technique: pick the day, pick the direction, and accept a longer line if
        it keeps the wall out of the wind.
      </p>

      <div className="mt-10 rounded-2xl bg-brand-600 p-8 text-center text-white">
        <h2 className="text-2xl font-bold">Know Your Margin Before the Wind Finds It</h2>
        <p className="mt-2 text-brand-100">
          Side force takes load off the windward tires. Payload and axle numbers
          tell you how much of that loss your rig can absorb.
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
            href="/tongue-weight-calculator"
            className="inline-block rounded-xl bg-white px-6 py-3 text-sm font-bold text-brand-700 shadow-lg transition-all hover:bg-brand-50 active:scale-[0.99]"
          >
            Tongue Weight Calculator
          </Link>
        </div>
      </div>

      <p className="mt-8 text-gray-700">
        The recommendation is a hard line at 25 mph sustained wind for a
        28-foot trailer, with any gust over 35 treated as a stop-and-wait
        event. Below that line, run 55 to 60, set the sway control to spec, and
        keep heavy gear on the floor. Above it, leave a day early or a day late.
        The trade-off is an afternoon and a rearranged schedule. The alternative
        is three hours of holding a quarter turn of correction while a 7,600 lb
        trailer decides how much of the lane you get.
      </p>

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

      <AmazonAffiliate categories={["sway-control", "weight-distribution"]} />

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Sources &amp; References
      </h2>
      <ul className="mt-3 space-y-1 text-sm text-gray-600">
        <li>
          <a
            href="https://www.weather.gov/safety/wind"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            National Weather Service: wind safety and high-profile vehicle
            handling
          </a>
        </li>
        <li>
          <a
            href="https://www.weather.gov/safety/wind-during"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            National Weather Service: Wind Advisory and High Wind Warning
            criteria
          </a>
        </li>
        <li>
          <a
            href="https://www.sae.org/standards/content/j2807_202001/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            SAE J2807: performance requirements for determining tow-vehicle
            gross combination weight rating
          </a>
        </li>
        <li>
          <a
            href="https://www.fhwa.dot.gov/publications/research/safety/04097/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            Federal Highway Administration: research on truck and high-profile
            vehicle stability in crosswind
          </a>
        </li>
      </ul>

      <div className="mt-10 rounded-xl border border-gray-200 bg-gray-50 p-6">
        <h3 className="font-bold text-gray-900">Related Guides</h3>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
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
              href="/guides/weight-distribution-hitch-setup"
              className="text-brand-600 hover:underline"
            >
              Weight Distribution Hitch Setup, Step by Step
            </Link>
          </li>
          <li>
            <Link
              href="/guides/trailer-length-vs-wheelbase-rule"
              className="text-brand-600 hover:underline"
            >
              Trailer Length vs Wheelbase Rule
            </Link>
          </li>
          <li>
            <Link
              href="/guides/thanksgiving-rain-truck-hydroplanes-first"
              className="text-brand-600 hover:underline"
            >
              Thanksgiving Rain: Your Truck Hydroplanes First
            </Link>
          </li>
          <li>
            <Link
              href="/guides/thanksgiving-night-towing-deer"
              className="text-brand-600 hover:underline"
            >
              Thanksgiving Drive Home After Dark
            </Link>
          </li>
          <li>
            <Link href="/guides/gawr-explained" className="text-brand-600 hover:underline">
              GAWR Explained
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
