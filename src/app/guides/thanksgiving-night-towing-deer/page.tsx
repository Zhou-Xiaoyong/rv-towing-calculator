import type { Metadata } from "next";
import Link from "next/link";
import { FaqJsonLd, ArticleJsonLd, HowToJsonLd } from "@/components/seo/JsonLd";
import { DEFAULT_OG_IMAGES } from "@/lib/seo/default-og-image";

import AmazonAffiliate from "@/components/AmazonAffiliate";

export const metadata: Metadata = {
  title: "Thanksgiving Night: Towing Home When the Deer Move",
  description:
    "Low beams reach 160 feet and a 14,000-lb rig needs 292 to stop from 45 mph. Why the Thanksgiving drive home after dark is the worst hour of the year to tow.",
  keywords: [
    "towing at night with a travel trailer",
    "thanksgiving night towing",
    "deer collision while towing",
    "how far do low beams reach",
    "headlight aim after hitching",
    "trailer running lights not working at night",
    "swerving to avoid a deer with a trailer",
  ],
  alternates: {
    canonical:
      "https://www.rvtowingcalc.com/guides/thanksgiving-night-towing-deer",
  },
  openGraph: {
    title: "Thanksgiving Night: Towing Home When the Deer Move",
    description:
      "Thanksgiving dinner ends at five, the sun is gone by five fifteen, and the rut is at its peak. The headlight-and-braking math for the drive home with a trailer.",
    url: "https://www.rvtowingcalc.com/guides/thanksgiving-night-towing-deer",
    images: DEFAULT_OG_IMAGES,
  },
};

const FAQS = [
  {
    q: "How far ahead do headlights actually light the road when towing?",
    a: "A low beam puts usable light on the pavement about 160 feet ahead, and a high beam about 350 feet. Those are practical numbers, not marketing ones: past the cutoff, a deer is a shape, not a target. At 55 mph a 14,000-lb rig covers 80.7 feet per second, so 160 feet of light is under two seconds of travel before you are in the dark again. That is why the useful question after dark is never whether your lights are bright enough, it is what speed your sight distance supports.",
  },
  {
    q: "Does hitching a trailer change where my headlights point?",
    a: "Yes, and more than most owners expect. Tongue weight squats the rear axle and lifts the nose, and the light beam is bolted to that nose. A typical half-ton with 950 lb of tongue weight drops about 2 inches at the rear and lifts about 0.75 at the front, which over a 145-inch wheelbase is 1.09 degrees of pitch. Headlights are aimed to drop 0.57 degrees, so the squat does not just cancel the aim, it reverses it. The fix is tension on the weight distribution bars, not a screwdriver on the lamp housing.",
  },
  {
    q: "Should I swerve to miss a deer when I am towing?",
    a: "No. Brake hard and stay straight. A swerve asks the trailer tires for lateral grip at the same moment the truck is transferring weight forward and unloading its own rear axle, and the trailer answers late and large. A 7,600-lb trailer that yaws 15 degrees behind the ball does not straighten itself in the distance you have left. A frontal hit on a deer is bodywork. A swerve with a trailer behind you is often a rollover or an oncoming lane.",
  },
  {
    q: "Why do my trailer running lights quit when I turn the headlights on?",
    a: "Because the running light circuit is the largest current draw on the 7-pin connector, so a marginal ground or a corroded pin shows up there before it shows up anywhere else. The trap is testing with the brake pedal. Brake lights and turn signals work off separate pins and will pass a check while the tail circuit is dead. Turn the headlight switch on, walk to the back of the trailer, and look at the marker lights on the roof line and the corners. If those are dark, you are a rectangle with no outline.",
  },
];

const SIGHT_TABLE = [
  ["45 mph", "99 ft", "193 ft", "292 ft"],
  ["55 mph", "121 ft", "289 ft", "410 ft"],
  ["65 mph", "143 ft", "403 ft", "546 ft"],
];

const AIM_TABLE = [
  ["25 ft", "5.7 in", "Oncoming traffic, near field"],
  ["100 ft", "1.9 ft", "Your own lane ahead"],
  ["200 ft", "3.8 ft", "Windshield height on a sedan"],
  ["350 ft", "6.6 ft", "Over the roof of a car"],
];

const STEPS = [
  {
    name: "Check the marker lights with the headlight switch on",
    text: "Brake lights and turn signals run on different pins and will pass a walk-around while the tail circuit is dead. Switch the headlights on, then walk the trailer and confirm the roof line markers and the four corner lights are lit. Running lights are the largest draw on the connector, so they fail first when a ground is marginal.",
  },
  {
    name: "Measure both fenders before you tension anything",
    text: "Ground to the top of the wheel arch, front and rear, with the trailer off. Write the numbers on your phone. This is the only baseline that tells you whether the bars are doing their job, and it takes two minutes in a driveway that is not yours.",
  },
  {
    name: "Bring the front arch back to within half an inch",
    text: "Hitch up, tension the bars, measure again. If the front is still an inch low, the steering axle is carrying less than the truck was designed for and the nose is still up. Both of those matter more after dark than in daylight, because the nose is what aims the lights.",
  },
  {
    name: "Set controller gain in daylight, then subtract for the road you are on",
    text: "The 20 mph dry-pavement test that sets gain produces clean stops on asphalt and locked trailer wheels on gravel or wet leaves. A locked trailer wheel steps sideways instantly. If the last mile is a gravel lane, drop the gain before you turn onto it, not after.",
  },
  {
    name: "Aim the beams with the trailer attached",
    text: "The spec most shops use is a low beam cutoff about 3 inches below the lamp center at 25 feet, measured on level ground. Measure it hitched, with the bars tensioned, because that is the attitude the truck spends the trip in. Aiming it solo is how a truck ends up with lights that are correct on the driveway and wrong on the road.",
  },
  {
    name: "Do not take a new route after dark",
    text: "Two-lane roads with no shoulder, mailboxes at the fog line, and a driveway you have never backed into are three separate problems stacked in the same ten minutes. Arrive while there is still light, or accept the driveway as a two-person job with a spotter and a flashlight.",
  },
];

export default function ThanksgivingNightTowingDeerPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <ArticleJsonLd
        title="Thanksgiving Night: Towing Home When the Deer Move"
        description="Thanksgiving dinner ends around five, the sun is gone shortly after, and the rut is at its annual peak. The headlight reach, stopping distance and tongue-weight pitch math behind the drive home with a trailer."
        url="https://www.rvtowingcalc.com/guides/thanksgiving-night-towing-deer"
        datePublished="2026-11-17"
      />
      <FaqJsonLd
        faqs={FAQS}
        baseUrl="https://www.rvtowingcalc.com/guides/thanksgiving-night-towing-deer"
      />
      <HowToJsonLd
        name="How to prepare a truck and trailer for a Thanksgiving drive home after dark"
        description="Check marker lights with the headlight switch on, measure both fender heights unhitched, restore front fender height with the weight distribution bars, set brake controller gain for the surface, aim the headlights with the trailer attached, and avoid unfamiliar routes after dark."
        steps={STEPS}
        totalTime="PT30M"
        url="https://www.rvtowingcalc.com/guides/thanksgiving-night-towing-deer"
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
        <span className="text-gray-900">Thanksgiving Night</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
        Thanksgiving Drive Home: Towing After Dark When the Deer Are Moving
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        A 7,600-lb trailer behind a 6,400-lb truck, dinner over at five, and a
        two-lane road home through farm country with no shoulder.
      </p>
      <p className="mt-3 text-lg text-gray-600">
        On Thanksgiving evening the sun is gone before most families finish the
        pie. In the upper Midwest it sets a little after 4:30. Across the South
        it holds until nearly 5:30. Either way, the drive home lands in the two
        hours when deer move most and headlights do least.
      </p>

      <div className="mt-8 rounded-xl bg-brand-50 p-6">
        <h2 className="text-lg font-bold text-brand-800">The Short Answer</h2>
        <p className="mt-2 text-brand-700">
          The limit is not your reflexes, it is your headlights. Low beams put
          usable light on the road about 160 feet ahead. A 14,000-lb rig
          decelerating at 0.35 g needs 193 feet to stop from 45 mph before you
          count the 1.5 seconds of reaction, which adds 99 more. At 55 mph the
          total is 410 feet against 160 feet of light, so you see the deer, react,
          and hit it at about 51 mph. High beams reach 350 feet, and that is the
          first setting where stopping from 45 is physically possible. Run them
          whenever the road is empty, hold 45 to 50 after dark, and get the
          headlight aim back where it belongs after the tongue weight pitches the
          nose up.
        </p>
      </div>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Why 5 p.m. on Thanksgiving Is the Worst Hour of the Year
      </h2>
      <p className="mt-3 text-gray-700">
        Deer are crepuscular. They move hardest in the half hour on either side
        of sunrise and sunset, and in November they are also in the middle of the
        rut, which is the one time of year a buck crosses a road without
        hesitating.
      </p>
      <p className="mt-3 text-gray-700">
        The insurance data lines up with that biology. The Highway Loss Data
        Institute analyzed animal-strike claims from 2013 through 2022 and found
        November at 13.6 claims per 1,000 insured vehicle years against 4.2 in
        August, more than twice the yearly average. The average November claim
        ran about $4,590, and almost nine out of ten animal-strike crashes are
        frontal impacts. Frontal is exactly the geometry you get when a deer
        steps off the fog line into a truck that has a trailer attached.
      </p>
      <p className="mt-3 text-gray-700">
        Then the holiday stacks three more variables on top of it. You leave at
        the worst hour by design, because dinner ends when the light goes. The
        trip is short enough that most owners skip the walk-around they would do
        before a summer vacation. And the road is unfamiliar: someone
        else&rsquo;s county, a two-lane with mailboxes at the edge of the lane,
        and a driveway you have never backed into.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        The Braking Math Behind a Deer You Cannot Miss
      </h2>
      <p className="mt-3 text-gray-700">
        Here is the whole problem in one line: sight distance is fixed by the
        lamp, stopping distance is fixed by speed, and the two only meet below
        about 31 mph on low beams.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">Speed</th>
              <th className="border px-3 py-2 text-left font-semibold">
                Reaction (1.5 s)
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Braking at 0.35 g
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Total to a stop
              </th>
            </tr>
          </thead>
          <tbody>
            {SIGHT_TABLE.map((row, i) => (
              <tr
                key={row[0]}
                className={row[0] === "55 mph" ? "bg-danger-50" : i % 2 === 1 ? "bg-gray-50" : ""}
              >
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
        Measured for a 14,000-lb combination on dry pavement with trailer brakes
        set correctly. Wet pavement adds roughly a third; a gain set too low adds
        more, because the trailer pushes instead of pulling itself down.
      </p>

      <p className="mt-4 text-gray-700">
        Now put low beams at 160 feet against those totals. The stopping
        distance formula for this rig is 2.2 times the speed plus 0.095 times the
        speed squared, in feet, and it equals 160 at 31 mph. That is the fastest
        you can travel and still stop inside your own light. Nobody tows home
        from Thanksgiving dinner at 31 mph, which is the point.
      </p>
      <p className="mt-3 text-gray-700">
        Run the same numbers with high beams at 350 feet and the ceiling moves to
        about 50 mph. That is the entire value of the high beam switch: not that
        you can see better, but that the speed at which physics permits a stop
        goes from 31 to 50.
      </p>
      <p className="mt-3 text-gray-700">
        And the arithmetic for a deer you see too late is worth doing once. At 55
        mph you cover 80.7 feet per second. A deer at the edge of your low beams
        is 160 feet away, which is 1.98 seconds of travel. Take out the 1.5
        seconds of reaction and you have 0.48 seconds of braking, worth about 3.7
        mph. You hit it at 51.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Your Tongue Weight Aimed Your Headlights at the Sky
      </h2>
      <p className="mt-3 text-gray-700">
        This is the part almost nobody measures, and it is worth more than a
        bulb upgrade. Headlight aim is set against the truck&rsquo;s attitude,
        and the truck&rsquo;s attitude changes the moment the trailer settles on
        the ball.
      </p>
      <p className="mt-3 text-gray-700">
        Take a typical half-ton with 950 lb of tongue weight and no tension on
        the bars: about 2 inches down at the rear axle, about 0.75 inches up at
        the front. That is 2.75 inches of pitch over a 145-inch wheelbase, or
        1.09 degrees. A factory low beam is aimed to drop roughly 3 inches at 25
        feet, which is 0.57 degrees of downward aim. The squat does not merely
        cancel that aim. It reverses it by half a degree, and the beam goes out
        above horizontal.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">
                Distance ahead
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Cutoff lifted by 1.09&deg;
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                What it lands on
              </th>
            </tr>
          </thead>
          <tbody>
            {AIM_TABLE.map((row, i) => (
              <tr key={row[0]} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                <td className="border px-3 py-2 text-xs font-mono font-semibold">
                  {row[0]}
                </td>
                <td className="border px-3 py-2 text-xs font-mono">{row[1]}</td>
                <td className="border px-3 py-2 text-xs">{row[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm text-gray-500">
        Rise calculated as distance times the tangent of 1.09 degrees. The same
        1.09 degrees also pulls light off the pavement in the first 25 feet,
        which is where the deer actually is when it steps out.
      </p>

      <p className="mt-4 text-gray-700">
        The correction is not a screwdriver. It is tension. Measure ground to the
        top of the front wheel arch with the trailer off, then again hitched with
        the bars set, and bring the front back to within half an inch of the solo
        reading. That restores the nose attitude, the aim, and the load on the
        steering axle in the same adjustment. The{" "}
        <Link
          href="/guides/weight-distribution-hitch-setup"
          className="text-brand-600 hover:underline"
        >
          weight distribution hitch setup guide
        </Link>{" "}
        walks the tensioning order, and the{" "}
        <Link href="/tongue-weight-calculator" className="text-brand-600 hover:underline">
          tongue weight calculator
        </Link>{" "}
        gives you the number the bars are working against.
      </p>
      <p className="mt-3 text-gray-700">
        Two caution notes. If the truck is already at its rear axle rating, more
        tension does not create capacity, it only moves load between axles. And
        if the front comes back to height but the rear is still far below solo,
        the answer is a lighter trailer or a bigger truck, not a stiffer bar. The{" "}
        <Link href="/payload-calculator" className="text-brand-600 hover:underline">
          payload calculator
        </Link>{" "}
        settles that before you spend anything.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        The Trailer Is an Unlit Rectangle Twelve Feet Behind You
      </h2>
      <p className="mt-3 text-gray-700">
        From the driver&rsquo;s seat you cannot see your own trailer lights. That
        is not a design flaw, it is geometry, and it means a dead circuit is
        invisible to the only person who could act on it.
      </p>
      <p className="mt-3 text-gray-700">
        Federal lighting rules require trailers 80 inches or wider to carry
        retroreflective sheeting, alternating red and white segments at least 2
        inches wide, along the sides and across the rear. It is there so a
        vehicle approaching from behind sees an outline before it sees
        taillights. On a ten-year-old trailer that sheeting is usually chalky,
        peeling, or gone, and the previous owner may have painted over it.
      </p>
      <p className="mt-3 text-gray-700">
        The electrical half of the problem is the running light pin, which only
        energizes when the headlight switch is on. Most owners test the connector
        with the brake pedal, watch the brake lights and turn signals work, and
        call it good. Those run on separate pins. Switch the headlights on and
        walk the trailer: roof line markers, four corners, license plate lamp. An{" "}
        <Link
          href="/guides/trailer-wiring-harness-7-pin-troubleshooting"
          className="text-brand-600 hover:underline"
        >
          7-pin wiring diagnosis
        </Link>{" "}
        starts at the ground, because a marginal ground kills the tail circuit
        first, since it is the largest draw on the plug.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Brake in a Straight Line, Not Around the Problem
      </h2>
      <p className="mt-3 text-gray-700">
        The instinct when a deer appears is to steer around it. With 7,600 lb
        hitched behind the ball, that instinct is the dangerous one.
      </p>
      <p className="mt-3 text-gray-700">
        A swerve loads the trailer tires laterally at the exact moment the truck
        is transferring weight forward and unloading its own rear axle. The
        trailer answers late, because its yaw response is delayed by the distance
        from ball to axles, and it answers large, because the trailer&rsquo;s
        rear overhang swings the opposite way. A trailer that reaches 15 degrees
        of yaw behind the truck does not recover in the road width you have left.
        Braking straight keeps the trailer&rsquo;s momentum behind the ball,
        where the hitch was designed to carry it.
      </p>
      <p className="mt-3 text-gray-700">
        Two controls are worth knowing before this happens. The manual trailer
        brake lever on the controller applies trailer brakes alone, with no truck
        brakes, which pulls the trailer straight back in line. And the gain
        setting you validated on dry asphalt is too high for gravel, wet leaves,
        or a frosty bridge deck: a locked trailer wheel steps sideways instantly.
        The{" "}
        <Link
          href="/guides/trailer-brake-controller-setup"
          className="text-brand-600 hover:underline"
        >
          brake controller setup guide
        </Link>{" "}
        covers the 20 mph test, and the{" "}
        <Link href="/guides/rv-trailer-sway-control" className="text-brand-600 hover:underline">
          sway control guide
        </Link>{" "}
        covers what to do once the trailer is already moving around.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Six Things Before the Drive Home
      </h2>
      <p className="mt-3 text-gray-700">
        None of this needs a part. It needs a tape measure, a flashlight, and
        fifteen minutes in a driveway that is not yours.
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
        One more number to carry into the dark. Nine out of ten animal strikes
        are frontal, and a frontal hit at 50 mph on a truck with a frame and a
        bumper is bodywork. The same hit delivered through a swerve arrives at
        the trailer&rsquo;s sidewall at an angle, and the trailer is the part of
        the rig with the least crush structure and the most weight above the
        axle. That is the trade being decided in half a second.
      </p>

      <div className="mt-10 rounded-2xl bg-brand-600 p-8 text-center text-white">
        <h2 className="text-2xl font-bold">Fix the Aim Before the Drive</h2>
        <p className="mt-2 text-brand-100">
          Tongue weight sets the nose attitude, and the nose attitude sets where
          the beams land. Run the numbers before it gets dark.
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

      <p className="mt-8 text-gray-700">
        The recommendation is 45 mph on a two-lane after dark with high beams on
        whenever the road ahead is clear, because 45 is the fastest speed where a
        stop inside 350 feet of light is still possible. Tension the bars until
        the front fender returns to its solo height, and check the marker lights
        with the headlight switch rather than the brake pedal. The trade-off is
        real: fifteen extra minutes on a two-hour drive, and high beams you have
        to dim every time a car appears. That is cheaper than a $4,590
        comprehensive claim.
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

      <AmazonAffiliate categories={["trailer-lights", "brake-controller", "sway-control"]} />

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Sources &amp; References
      </h2>
      <ul className="mt-3 space-y-1 text-sm text-gray-600">
        <li>
          <a
            href="https://www.iihs.org/news/detail/deer-season-means-animal-strike-season-on-the-roads"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            IIHS: deer season and the November peak in animal-strike claims
          </a>
        </li>
        <li>
          <a
            href="https://www.iihs.org/media/14f1ab2f-1b55-4a5f-b589-aab09616c7ec/YKecMg/HLDI%20Research/Bulletins/hldi_bulletin_40.5.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            HLDI Bulletin 40.5: animal-strike claim frequency and severity by
            month, 2013 to 2022
          </a>
        </li>
        <li>
          <a
            href="https://www.nhtsa.gov/equipment/lighting"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            NHTSA: vehicle lighting equipment and headlamp requirements
          </a>
        </li>
        <li>
          <a
            href="https://www.ecfr.gov/current/title-49/subtitle-B/chapter-V/part-571/subpart-B/section-571.108"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            49 CFR 571.108, FMVSS 108: trailer conspicuity and retroreflective
            sheeting
          </a>
        </li>
        <li>
          <a
            href="https://www.fhwa.dot.gov/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            Federal Highway Administration: pavement friction and stopping
            distance research
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
              Weight Distribution Hitch Setup, Step by Step
            </Link>
          </li>
          <li>
            <Link
              href="/guides/trailer-brake-controller-setup"
              className="text-brand-600 hover:underline"
            >
              Trailer Brake Controller Setup and Gain
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
              href="/guides/trailer-wiring-harness-7-pin-troubleshooting"
              className="text-brand-600 hover:underline"
            >
              7-Pin Trailer Wiring Troubleshooting
            </Link>
          </li>
          <li>
            <Link
              href="/guides/rv-towing-speed-limits"
              className="text-brand-600 hover:underline"
            >
              RV Towing Speed Limits and Stopping Distance
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
        </ul>
      </div>
    </div>
  );
}
