import type { Metadata } from "next";
import Link from "next/link";
import { FaqJsonLd, ArticleJsonLd, HowToJsonLd } from "@/components/seo/JsonLd";
import { DEFAULT_OG_IMAGES } from "@/lib/seo/default-og-image";

import AmazonAffiliate from "@/components/AmazonAffiliate";

export const metadata: Metadata = {
  title: "Thanksgiving Arrival: A 9% Driveway and a 7,600 lb Trailer",
  description:
    "Nine percent is 5.1 degrees: 1,470 lb of pull at the tire, 119 lb off the front axle, and 8 inches of tail drop at the gutter. The last 40 feet, measured.",
  keywords: [
    "steep driveway trailer",
    "towing up a steep grade",
    "backing trailer up driveway",
    "trailer tail drag",
    "rv refrigerator level tolerance",
    "trailer parking on a slope",
    "thanksgiving rv trip driveway",
  ],
  alternates: {
    canonical:
      "https://www.rvtowingcalc.com/guides/thanksgiving-steep-driveway-trailer-grade",
  },
  openGraph: {
    title: "Thanksgiving Arrival: A 9% Driveway and a 7,600 lb Trailer",
    description:
      "Grade resistance, front axle unload, tail drop and the refrigerator level spec, applied to the last 40 feet of a Thanksgiving trip.",
    url: "https://www.rvtowingcalc.com/guides/thanksgiving-steep-driveway-trailer-grade",
    images: DEFAULT_OG_IMAGES,
  },
};

const FAQS = [
  {
    q: "Can a half-ton truck pull a trailer up a 10% driveway?",
    a: "Almost always, because the engine is not the constraint. A 14,000 lb truck and trailer on a 10 percent grade needs about 1,610 lb of tractive force at 10 mph, which works out to 43 horsepower. The limit is traction on the drive axle and cooling at walking speed, not power. A two-wheel-drive truck with an open differential on wet leaves is the combination that fails, and it fails at 5 mph with the engine barely working.",
  },
  {
    q: "How steep a slope can an RV refrigerator sit on?",
    a: "Three degrees side to side and six degrees front to back, which is the tolerance in the Norcold and Dometic owner manuals. Nine percent is 5.1 degrees, so a trailer parked nose-up or nose-down on that grade is inside the front-to-back limit but outside the side-to-side one the moment you park across the fall line. Park parallel to the slope or move the trailer.",
  },
  {
    q: "Do surge brakes work when backing up a hill?",
    a: "No. A surge coupler applies the trailer brakes whenever the trailer pushes into the hitch, which is exactly what happens when you back up an incline. Trailers with surge brakes use a five-pin flat connector: the fifth pin carries the reverse light circuit to a solenoid that locks the coupler out. If your truck has a four-pin plug and the trailer has five, the solenoid never gets power and you are dragging locked brakes up the driveway.",
  },
  {
    q: "Is it better to drive up the driveway forward or back in?",
    a: "Forward if the pad is more than 40 feet long and you can turn around, because reverse is where the sight lines fail and the steering geometry fights you. Back in when the pad is short, when the trailer has to sit parallel to a fence, or when the only level spot is at the top corner. Either way, put a spotter at the rear corner and agree on hand signals before the truck moves.",
  },
];

const GRADE_TABLE = [
  {
    grade: "6%",
    angle: "3.4\u00B0",
    pull: "840 lb",
    total: "1,050 lb",
    hp: "28 hp",
    note: "A highway climb. Nothing to plan for.",
    hard: false,
  },
  {
    grade: "9%",
    angle: "5.1\u00B0",
    pull: "1,260 lb",
    total: "1,470 lb",
    hp: "39 hp",
    note: "A steep residential driveway. The tail is the problem, not the engine.",
    hard: false,
  },
  {
    grade: "12%",
    angle: "6.8\u00B0",
    pull: "1,680 lb",
    total: "1,890 lb",
    hp: "50 hp",
    note: "A driveway cut into a retaining wall. Past the fridge limit across the slope.",
    hard: false,
  },
  {
    grade: "15%",
    angle: "8.5\u00B0",
    pull: "2,100 lb",
    total: "2,310 lb",
    hp: "62 hp",
    note: "A short private lane. Traction decides whether you get up it.",
    hard: true,
  },
  {
    grade: "18%",
    angle: "10.2\u00B0",
    pull: "2,520 lb",
    total: "2,730 lb",
    hp: "73 hp",
    note: "Steep enough that the trailer should stay at the street.",
    hard: true,
  },
];

const PAD_TABLE = [
  {
    slope: "2%",
    angle: "1.1\u00B0",
    across: "Inside 3\u00B0",
    along: "Inside 6\u00B0",
    action: "Leveling blocks under one side, nothing else.",
    bad: false,
  },
  {
    slope: "4%",
    angle: "2.3\u00B0",
    across: "Inside 3\u00B0",
    along: "Inside 6\u00B0",
    action: "Chock the downhill side, stabilizers down.",
    bad: false,
  },
  {
    slope: "6%",
    angle: "3.4\u00B0",
    across: "Over 3\u00B0",
    along: "Inside 6\u00B0",
    action: "Park nose up or nose down. Never across the slope.",
    bad: false,
  },
  {
    slope: "9%",
    angle: "5.1\u00B0",
    across: "Over 3\u00B0",
    along: "Just inside 6\u00B0",
    action: "Chock both wheels, tongue jack on a pad, wheels straight.",
    bad: true,
  },
  {
    slope: "12%",
    angle: "6.8\u00B0",
    across: "Over 3\u00B0",
    along: "Over 6\u00B0",
    action: "Out of spec both ways. Leave the fridge off or move it.",
    bad: true,
  },
];

const STEPS = [
  {
    name: "Measure the grade, not the hill",
    text: "A phone level app on the bumper reads percent grade directly. Measure at three places: the apron at the street, the middle of the drive, and the pad where the trailer will sit. The apron is usually the steepest and it is the one that decides your tail clearance. Write the three numbers down before you commit.",
  },
  {
    name: "Convert the grade to degrees",
    text: "Nine percent is 5.1 degrees, twelve is 6.8, fifteen is 8.5. The conversion matters because the grade is a rise over run number for the engine, but degrees are what the refrigerator and the stabilizers care about. Anything over 3 degrees across the trailer is past the absorption fridge limit.",
  },
  {
    name: "Subtract the tail drop from your clearance",
    text: "Body behind the rear axle multiplied by the grade gives the dip at the transition from flat street to ramp. Ninety inches of overhang at 9 percent is 8.1 inches. Compare that against the lowest thing under the rear of your trailer, which is usually the sewer outlet or a stabilizer foot.",
  },
  {
    name: "Decide before the truck moves",
    text: "Forward up, back up, or drop at the street. Once the trailer is on the ramp with a car behind you and a relative waving, the decision gets made by whoever is least patient. Pick the option while you are still standing on the sidewalk with the engine off.",
  },
  {
    name: "Chock and level at the top, then unhitch",
    text: "Chock the downhill wheel on both sides before the tongue jack takes load. Lower the jack onto a block, not onto the pavement, and check the bubble level before you extend a slide. A trailer that sits 5 degrees across the slope will not drain, and the fridge will run hot all weekend.",
  },
];

export default function ThanksgivingSteepDrivewayTrailerGradePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <ArticleJsonLd
        title="Thanksgiving Arrival: A 9% Driveway and a 7,600 lb Trailer"
        description="What a 9 percent grade asks of a 14,000 lb truck and trailer, what it does to the front axle, the tail, and the refrigerator, and how to decide before the truck moves."
        url="https://www.rvtowingcalc.com/guides/thanksgiving-steep-driveway-trailer-grade"
        datePublished="2026-11-13"
      />
      <FaqJsonLd
        faqs={FAQS}
        baseUrl="https://www.rvtowingcalc.com/guides/thanksgiving-steep-driveway-trailer-grade"
      />
      <HowToJsonLd
        name="How to get a travel trailer up a steep driveway"
        description="Measure the grade at the apron, drive and pad, convert it to degrees, subtract the tail drop from ground clearance, choose forward or reverse before moving, then chock and level at the top."
        steps={STEPS}
        totalTime="PT30M"
        url="https://www.rvtowingcalc.com/guides/thanksgiving-steep-driveway-trailer-grade"
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
        <span className="text-gray-900">Thanksgiving Steep Driveway Grade</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
        Thanksgiving Arrival: A 9% Driveway and a 7,600 lb Trailer
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        The last forty feet of a Thanksgiving trip are the only forty feet with a
        9 percent grade, a gutter, and a relative standing in the driveway
        waving you forward. On a 14,000 lb truck and trailer that grade asks for
        about 1,470 lb of pull at the tire contact patch, which is 39
        horsepower at 10 mph. Your engine has ten times that.
      </p>
      <p className="mt-3 text-lg text-gray-600">
        So the climb is not the thing that goes wrong. The front axle, the rear
        overhang, and the refrigerator are, and none of the three show up on a
        tow rating.
      </p>

      <div className="mt-8 rounded-xl bg-brand-50 p-6">
        <h2 className="text-lg font-bold text-brand-800">The Short Answer</h2>
        <p className="mt-2 text-brand-700">
          A 9 percent grade is 5.1 degrees of pitch. It takes 8.1 inches off your
          tail clearance, because 90 inches of body behind the rear axle times
          9 percent is 8.1. It lifts 119 lb off the front axle, because 6,400 lb
          of truck times 30 inches of center-of-gravity height divided by a 145
          inch wheelbase times 9 percent is 119. And it parks the refrigerator
          5.1 degrees across the slope, past the 3 degree limit in the manual. If
          the pad is steeper than 6 percent,{" "}
          <strong>drop the trailer at the street and drive the truck up</strong>.
        </p>
      </div>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Nine Percent Is 5.1 Degrees
      </h2>
      <p className="mt-3 text-gray-700">
        Grade is rise over run, so 9 percent means nine feet of rise in a hundred
        feet of travel. The angle is the arctangent of 0.09, which is 5.14
        degrees. For context, Interstate highways in mountainous terrain top out
        at 6 percent, so a driveway that feels ordinary from the sidewalk can be
        half again as steep as the worst piece of road on your route.
      </p>
      <p className="mt-3 text-gray-700">
        That conversion is not trivia. Engines care about grade because grade
        sets the force. Refrigerators care about degrees because the absorption
        cooling unit inside them needs the boiler to sit close to level for the
        ammonia to circulate and the hydrogen to fall back. The Norcold and
        Dometic manuals both put the tolerance at 3 degrees side to side and 6
        degrees front to back, and those are not the same number, which is why
        the direction you park matters more than the steepness itself.
      </p>
      <p className="mt-3 text-gray-700">
        This is also where a driveway differs from a mountain pass. The{" "}
        <Link
          href="/guides/mountain-towing-transmission-gears"
          className="text-brand-600 hover:underline"
        >
          mountain towing guide
        </Link>{" "}
        covers sustained grades, fluid temperature and gear holding, because a
        pass runs for miles. A driveway runs for forty feet and fails for a
        different set of reasons.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        1,470 lb at the Contact Patch
      </h2>
      <p className="mt-3 text-gray-700">
        Grade resistance in pounds is the combined weight times the grade, with
        no correction needed at these angles. Fourteen thousand pounds on 9
        percent is 1,260 lb. Add rolling resistance at about 1.5 percent of
        weight, which is 210 lb on asphalt, and the tires have to deliver 1,470
        lb to hold speed. Divide by 550 and multiply by feet per second to get
        horsepower: at 10 mph that is 14.67 ft/s, so 39 hp.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">Grade</th>
              <th className="border px-3 py-2 text-left font-semibold">Angle</th>
              <th className="border px-3 py-2 text-left font-semibold">
                Grade pull
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                With rolling
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Power at 10 mph
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                What it looks like
              </th>
            </tr>
          </thead>
          <tbody>
            {GRADE_TABLE.map((row, i) => (
              <tr
                key={row.grade}
                className={row.hard ? "bg-danger-50" : i % 2 === 1 ? "bg-gray-50" : ""}
              >
                <td className="border px-3 py-2 text-xs font-semibold">
                  {row.grade}
                </td>
                <td className="border px-3 py-2 text-xs font-mono">{row.angle}</td>
                <td className="border px-3 py-2 text-xs font-mono">{row.pull}</td>
                <td className="border px-3 py-2 text-xs font-mono font-bold text-brand-700">
                  {row.total}
                </td>
                <td className="border px-3 py-2 text-xs font-mono">{row.hp}</td>
                <td
                  className={
                    row.hard
                      ? "border px-3 py-2 text-xs font-bold text-danger-700"
                      : "border px-3 py-2 text-xs"
                  }
                >
                  {row.note}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm text-gray-500">
        14,000 lb combined weight from a 6,400 lb crew cab and a 7,600 lb trailer
        at GVWR. Grade resistance is weight times grade; rolling resistance is
        1.5 percent of weight. Horsepower is force in pounds times speed in feet
        per second divided by 550. Aerodynamic drag is left out because nothing
        in this table happens above 15 mph.
      </p>

      <p className="mt-4 text-gray-700">
        The 18 percent row is the useful one, because 73 hp is still nothing
        against a 375 hp engine. If the truck cannot get up the driveway, the
        reason will be a spinning rear tire on wet leaves, a trailer brake
        controller set too high, or a transmission that will not hold first at
        walking speed. It will not be a shortage of torque, which is why buying a
        bigger truck to solve a driveway problem usually does not solve it.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Power Is Not the Limit. The Front Axle Is.
      </h2>
      <p className="mt-3 text-gray-700">
        Point a vehicle uphill and load moves rearward. The amount is the vehicle
        weight times center-of-gravity height over wheelbase, times the grade.
        This truck weighs 6,400 lb, its center of gravity sits about 30 inches
        up, and the wheelbase is 145 inches, so the front axle sheds 119 lb at 9
        percent and 158 lb at 12.
      </p>
      <p className="mt-3 text-gray-700">
        On dry pavement that is a curiosity. On a wet concrete apron with the
        trailer tongue already pulling 950 lb off the front tires, it is the
        difference between steering and sliding, because the front axle is doing
        the steering and most of the braking. It also matters when you stop
        halfway up to check a mirror: the front tires have less load, so the
        truck wants to plow straight on the wet half of the ramp.
      </p>
      <p className="mt-3 text-gray-700">
        Two things fix it, and neither is expensive. Put the truck in four-wheel
        drive before the tires reach the ramp, not after they spin, because the
        transfer case needs a moment and a rolling engagement is gentler than a
        shock load. And keep the wheel straight. Turning on a grade while the
        trailer pushes is how a driveway becomes a body shop invoice.
      </p>
      <p className="mt-3 text-gray-700">
        The rear axle is carrying the other side of that equation. With 950 lb of
        tongue weight on the ball and a weight distribution hitch tensioned for
        the road, the rear axle is near its rating before the grade adds
        anything. Loosening the bars to make the hitch easier to snap up on a
        slope puts that load back on the rear axle exactly when the front needs
        it. Set the bars where they belong and leave them there; if the truck
        will not climb with the hitch set correctly, the answer is the street,
        not a looser hitch.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Reverse Is a Gear, Not a Problem
      </h2>
      <p className="mt-3 text-gray-700">
        The ten-speed automatics in current half-tons run 4.87:1 in reverse
        against 4.70:1 in first, so backing up a grade is not a crawl ratio
        problem. Low range, where the truck has it, multiplies that again by
        roughly 2.6. The gearbox will happily walk a 7,600 lb trailer up a 9
        percent ramp at idle.
      </p>
      <p className="mt-3 text-gray-700">
        The brakes are the problem. If the trailer has surge brakes, the coupler
        applies them whenever the trailer pushes into the hitch, and backing up
        an incline is a continuous push. That is what the fifth pin on a five-pin
        flat connector is for: it carries the reverse light circuit to a solenoid
        that locks the coupler out. A four-pin plug on a five-pin trailer means
        the solenoid never sees power. The brakes stay applied, the truck works
        against them, and by the time the drums are hot enough to smell, the
        trailer is halfway up and cannot easily come back down.
      </p>
      <p className="mt-3 text-gray-700">
        Electric brakes have the opposite failure. They work in reverse, and a
        proportional controller set for highway speeds will grab hard the moment
        the truck changes direction and the deceleration signal spikes. Drop the
        gain two or three numbers before you back in, then set it back before you
        leave. On a trailer this size the controller is doing more work than most
        drivers realize: 7,600 lb behind a 6,400 lb truck is 54 percent of the
        combination, which is weight the truck&rsquo;s own brakes were never
        sized to stop alone.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Eight Inches of Tail Drop at the Gutter
      </h2>
      <p className="mt-3 text-gray-700">
        This trailer carries about 90 inches of body behind the rear axle. When
        the tongue starts up the ramp and the axles are still on the flat street,
        the body pitches and everything behind the axle swings down by the
        overhang times the grade. Ninety inches at 9 percent is 8.1 inches.
      </p>
      <p className="mt-3 text-gray-700">
        Eight inches comes straight off whatever clearance the tail had. On a
        typical 24 footer that is a sewer outlet hanging 14 inches off the
        pavement and a stabilizer foot hanging 12, so the outlet ends up around
        5 inches off the ground at the worst moment of the transition. Add a
        rolled curb and a gutter and the margin is gone. The same geometry bites
        at the front: the tongue jack sits below the coupler and is the first
        thing to find a crowned driveway.
      </p>
      <p className="mt-3 text-gray-700">
        The fix costs nothing and takes one walk. Look at the transition from
        street to ramp, find the lowest thing under the rear of the trailer, and
        compare. If the dip is larger than that clearance, the trailer does not go
        up that driveway with the truck attached. Angle the approach so one tire
        climbs first and the trailer rolls rather than pitches, which halves the
        effective dip.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        What the Pad Slope Does to the Fridge
      </h2>
      <p className="mt-3 text-gray-700">
        Getting up the driveway and parking on it are two separate problems, and
        the second one lasts four days. The pad is where the trailer actually
        sits, and the number that matters there is the slope across the trailer
        rather than up it.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">
                Pad slope
              </th>
              <th className="border px-3 py-2 text-left font-semibold">Angle</th>
              <th className="border px-3 py-2 text-left font-semibold">
                Parked across
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Parked nose up
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                What to do
              </th>
            </tr>
          </thead>
          <tbody>
            {PAD_TABLE.map((row, i) => (
              <tr
                key={row.slope}
                className={row.bad ? "bg-danger-50" : i % 2 === 1 ? "bg-gray-50" : ""}
              >
                <td className="border px-3 py-2 text-xs font-semibold">
                  {row.slope}
                </td>
                <td className="border px-3 py-2 text-xs font-mono">{row.angle}</td>
                <td className="border px-3 py-2 text-xs">{row.across}</td>
                <td className="border px-3 py-2 text-xs">{row.along}</td>
                <td
                  className={
                    row.bad
                      ? "border px-3 py-2 text-xs font-bold text-danger-700"
                      : "border px-3 py-2 text-xs"
                  }
                >
                  {row.action}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm text-gray-500">
        Limits are 3 degrees side to side and 6 degrees front to back from the
        Norcold and Dometic absorption refrigerator manuals. A trailer parked
        parallel to the fall line keeps its side-to-side tilt near zero, which is
        why the same 9 percent pad is acceptable nose up and out of spec across.
      </p>

      <p className="mt-4 text-gray-700">
        The 9 percent pad row is the one to remember. It is inside the
        front-to-back tolerance and outside the side-to-side one, so the trailer
        that arrived fine can be parked wrong by turning it 90 degrees. Park
        parallel to the slope, shim the low wheel with a leveling block, and
        check the bubble before the slides go out rather than after: a slide that
        runs out on a 5 degree cross slope strains the mechanism and dumps rain
        the wrong way.
      </p>
      <p className="mt-3 text-gray-700">
        The tongue jack deserves its own line. It holds the entire tongue weight
        of 950 lb on a single post, and on a grade the load is not vertical any
        more. Drop it onto a block or a pad, chock both wheels on the downhill
        side first, and never leave the trailer resting on the jack with the
        wheels free. Two chocks and a block cost less than the deductible.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Five Steps Before Wednesday
      </h2>
      <p className="mt-3 text-gray-700">
        All of this is sidewalk work. Do it before the truck is loaded, because
        the numbers change once 950 lb of tongue weight and four passengers are
        on the truck.
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
        One more item that has nothing to do with the grade. A driveway arrival
        usually means the trailer sits for four days without moving, which puts
        the tongue weight and the axle loads in a state nobody checks until the
        drive home. The{" "}
        <Link
          href="/guides/thanksgiving-return-trip-tongue-weight"
          className="text-brand-600 hover:underline"
        >
          return leg tongue weight guide
        </Link>{" "}
        covers what changes while it sits, and the{" "}
        <Link
          href="/guides/weight-distribution-hitch-setup"
          className="text-brand-600 hover:underline"
        >
          weight distribution hitch setup
        </Link>{" "}
        walkthrough is the one to read if the bars have to come off for the
        driveway and go back on for the road.
      </p>

      <div className="mt-10 rounded-2xl bg-brand-600 p-8 text-center text-white">
        <h2 className="text-2xl font-bold">Run the Numbers Before the Ramp</h2>
        <p className="mt-2 text-brand-100">
          Payload, tongue weight and the combined weight that grade resistance is
          calculated from. Three calculators, forty feet of driveway.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link
            href="/payload-calculator"
            className="inline-block rounded-xl bg-white px-6 py-3 text-sm font-bold text-brand-700 shadow-lg transition-all hover:bg-brand-50 active:scale-[0.99]"
          >
            Payload Calculator
          </Link>
          <Link
            href="/tongue-weight-calculator"
            className="inline-block rounded-xl bg-white px-6 py-3 text-sm font-bold text-brand-700 shadow-lg transition-all hover:bg-brand-50 active:scale-[0.99]"
          >
            Tongue Weight Calculator
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

      <AmazonAffiliate categories={["weight-distribution", "brake-controller", "tongue-scale"]} />

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Sources &amp; References
      </h2>
      <ul className="mt-3 space-y-1 text-sm text-gray-600">
        <li>
          <a
            href="https://www.fhwa.dot.gov/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            Federal Highway Administration: maximum grades on rural Interstate
            highways in mountainous terrain
          </a>
        </li>
        <li>
          <a
            href="https://www.norcold.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            Norcold: absorption refrigerator installation and leveling tolerance
          </a>
        </li>
        <li>
          <a
            href="https://www.dometic.com/en-us/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            Dometic: refrigerator operating limits and trailer installation
            guidance
          </a>
        </li>
        <li>
          <a
            href="https://www.nhtsa.gov/equipment/tires"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            NHTSA: tire load rating, inflation and vehicle placard requirements
          </a>
        </li>
        <li>
          <a
            href="https://www.rvia.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            RV Industry Association: weight labels, cargo carrying capacity and
            towing standards
          </a>
        </li>
        <li>
          <a
            href="https://www.ford.com/support/towing/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            Ford towing guides: axle ratings and required equipment by
            configuration
          </a>
        </li>
      </ul>

      <div className="mt-10 rounded-xl border border-gray-200 bg-gray-50 p-6">
        <h3 className="font-bold text-gray-900">Related Guides</h3>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          <li>
            <Link
              href="/guides/thanksgiving-return-trip-tongue-weight"
              className="text-brand-600 hover:underline"
            >
              Thanksgiving Towing: The Drive Home Drops Tongue Weight
            </Link>
          </li>
          <li>
            <Link
              href="/guides/thanksgiving-driveway-dry-camping-propane-weight"
              className="text-brand-600 hover:underline"
            >
              Thanksgiving Dry Camping: 47 lb of Propane in Four Cold Nights
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
              href="/guides/mountain-towing-transmission-gears"
              className="text-brand-600 hover:underline"
            >
              Mountain Towing: Transmission Temperature and Gears
            </Link>
          </li>
          <li>
            <Link
              href="/guides/towing-a-trailer-in-winter"
              className="text-brand-600 hover:underline"
            >
              Towing a Travel Trailer in Winter
            </Link>
          </li>
          <li>
            <Link href="/guides/tongue-weight" className="text-brand-600 hover:underline">
              Tongue Weight Guide
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
