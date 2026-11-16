import type { Metadata } from "next";
import Link from "next/link";
import { FaqJsonLd, ArticleJsonLd, HowToJsonLd } from "@/components/seo/JsonLd";
import { DEFAULT_OG_IMAGES } from "@/lib/seo/default-og-image";

import AmazonAffiliate from "@/components/AmazonAffiliate";

export const metadata: Metadata = {
  title: "Thanksgiving Trailer Sway: 400 lb in the Wrong Place",
  description:
    "400 lb of Thanksgiving gear behind the trailer axle pulls tongue weight from 12.5 to 9.8 percent. The lever math, the scale pass, and the 20-minute fix.",
  keywords: [
    "thanksgiving trailer sway",
    "trailer sway causes",
    "tail heavy trailer",
    "tongue weight percentage",
    "how to stop trailer sway",
    "crosswind towing travel trailer",
    "trailer loading position tongue weight",
  ],
  alternates: {
    canonical:
      "https://www.rvtowingcalc.com/guides/thanksgiving-trailer-sway-tail-heavy-load",
  },
  openGraph: {
    title: "Thanksgiving Trailer Sway: 400 lb in the Wrong Place",
    description:
      "Twelve and a half percent on Wednesday, 9.8 percent by Friday, and a cold front in between. Why a rear bunk full of family gear starts a sway event.",
    url: "https://www.rvtowingcalc.com/guides/thanksgiving-trailer-sway-tail-heavy-load",
    images: DEFAULT_OG_IMAGES,
  },
};

const FAQS = [
  {
    q: "How much tongue weight should a 7,500 lb travel trailer have?",
    a: "Between 750 and 1,125 lb, which is the 10 to 15 percent band, with 12.5 percent as the practical target. On a 7,500 lb trailer that is 938 lb on the ball. Below 750 lb the trailer starts steering the truck in a crosswind, and above 1,125 lb you are spending payload and rear axle capacity you probably do not have. The number you need is the measured one at the coupler, not the catalog figure, which ignores propane, the battery and whatever the dealer bolted to the A-frame.",
  },
  {
    q: "Will a sway control bar fix a trailer that is loaded tail heavy?",
    a: "No. A friction bar adds damping, which slows a sway cycle down, and damping does not change the load distribution that starts the cycle. Put a friction bar on a trailer at 9 percent tongue weight and you have a rig that feels steadier at 55 mph and still goes unstable at 68 in a gust. The integrated four-point sway control built into a good weight distribution head is more effective than a bolt-on friction bar, and neither one is a substitute for getting the weight forward.",
  },
  {
    q: "Why did my tongue weight drop after I loaded the trailer?",
    a: "Because weight behind the axle works as a lever against the coupler. A 24-ft trailer with 16.5 ft between the axle and the coupler multiplies anything you place 6.5 ft behind the axle by 23 divided by 16.5, so 400 lb back there adds 558 lb to the axles and takes 158 lb off the tongue. Nothing about the trailer changed except where the gear sits. The same 400 lb in the front pass-through would have added 182 lb to the tongue instead.",
  },
];

const TONGUE_TABLE = [
  ["7 percent", "525 lb", "Sways on a lane change", "Unsafe at any highway speed"],
  ["9 percent", "675 lb", "Stable in calm air, wanders in gusts", "Marginal, needs weight forward"],
  ["10 to 12 percent", "750 to 900 lb", "Settles after one correction", "Acceptable, watch crosswinds"],
  ["12 to 15 percent", "900 to 1,125 lb", "Tracks without input", "Target band"],
  ["16 percent and up", "1,200 lb and up", "Very stable, rear axle heavy", "Payload and RAWR problem"],
];

const LEVER_TABLE = [
  ["400 lb, rear bunk storage", "6.5 ft behind axle", "9.8 percent", "158 lb off the tongue"],
  ["400 lb, front pass-through", "7.5 ft ahead of axle", "14.3 percent", "182 lb onto the tongue"],
  ["200 lb rear, 200 lb front", "Split", "12.0 percent", "12 lb onto the tongue"],
  ["400 lb, truck bed over the axle", "Not on the trailer", "12.5 percent", "400 lb off payload instead"],
];

const SCALE_TABLE = [
  ["Wednesday, hitched", "3,420 lb", "3,180 lb", "6,220 lb", "890 lb tongue"],
  ["Wednesday, truck alone", "3,420 lb", "2,290 lb", "Trailer parked", "Baseline"],
  ["Friday, hitched", "3,400 lb", "3,022 lb", "6,778 lb", "732 lb tongue"],
];

const STEPS = [
  {
    name: "Hold the wheel still",
    text: "A sway event is a yaw oscillation, and steering into it adds a second input at the worst moment. Keep the wheel pointed where you want to go and let the trailer settle. Most single-lane sway events end in two or three cycles if nobody steers.",
  },
  {
    name: "Ease off the throttle, do not accelerate",
    text: "The advice to power out of a sway comes from people who have never measured one. Speed is what feeds the oscillation, so 5 mph less makes the next cycle smaller. Lift gently. A hard lift on a downhill grade can unload the rear tires, which is the other way to lose the rig.",
  },
  {
    name: "Squeeze the manual trailer brake lever",
    text: "Every brake controller has a manual slide or lever that applies trailer brakes only. Applied alone, the trailer brakes pull the trailer straight back behind the truck and stop the oscillation at the source. This is the single most useful control in the cab during a sway event, and most owners have never touched it.",
  },
  {
    name: "Do not stab the truck brakes",
    text: "Truck brakes compress the rig and let the trailer push the rear axle sideways, which is how a sway event becomes a jackknife. If you must slow down hard, use the manual trailer lever first and let the truck follow.",
  },
  {
    name: "Get off at the next exit and look at the load",
    text: "Sway at 9.8 percent is a symptom, and the fix is in the cargo bay. Pull over, open the rear storage, and move the dense items forward before you rejoin the highway. Driving the remaining 200 miles slowly with a known bad load is a decision that gets made once.",
  },
];

export default function ThanksgivingTrailerSwayTailHeavyLoadPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <ArticleJsonLd
        title="Thanksgiving Trailer Sway: 400 lb in the Wrong Place"
        description="A 24-ft bunkhouse leaves at 12.5 percent tongue weight and comes home at 9.8 percent after the family loads the rear bunk. The lever math, the CAT scale pass and the fix."
        url="https://www.rvtowingcalc.com/guides/thanksgiving-trailer-sway-tail-heavy-load"
        datePublished="2026-11-16"
      />
      <FaqJsonLd
        faqs={FAQS}
        baseUrl="https://www.rvtowingcalc.com/guides/thanksgiving-trailer-sway-tail-heavy-load"
      />
      <HowToJsonLd
        name="How to recover from a trailer sway event and fix a tail heavy load"
        description="Hold the wheel still, ease off the throttle, apply trailer brakes manually, avoid stabbing the truck brakes, then stop and move dense cargo forward of the axles."
        steps={STEPS}
        totalTime="PT30M"
        url="https://www.rvtowingcalc.com/guides/thanksgiving-trailer-sway-tail-heavy-load"
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
        <span className="text-gray-900">Thanksgiving Trailer Sway</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
        Thanksgiving Trailer Sway: Can 400 lb Behind the Axle Drop You Below 10
        Percent?
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        A 24-ft bunkhouse leaves the driveway Wednesday at 7,110 lb with 890 lb
        on the ball. That is 12.5 percent of trailer weight, right where a
        conventional trailer belongs.
      </p>
      <p className="mt-3 text-lg text-gray-600">
        It comes home Friday at 7,510 lb with 732 lb on the ball, which is 9.8
        percent. Nobody added a motorcycle. The family put 400 lb of gear into
        the rear bunk storage, 6.5 ft behind the axles, and that is the whole
        reason the rig starts hunting for a lane in a November crosswind.
      </p>

      <div className="mt-8 rounded-xl bg-brand-50 p-6">
        <h2 className="text-lg font-bold text-brand-800">The Short Answer</h2>
        <p className="mt-2 text-brand-700">
          Tongue weight has to stay between 10 and 15 percent of loaded trailer
          weight. On this rig, 400 lb placed 6.5 ft behind the axles costs 158
          lb of tongue weight, and that is enough to move a balanced trailer to
          9.8 percent. The fix is not a sway bar and not a heavier hitch: move
          the dense cargo forward of the axles, re-measure at the coupler, and
          confirm the number is back above 12 percent before you leave. The same
          400 lb in the front pass-through would have added 182 lb instead.
        </p>
      </div>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Where the Ten Percent Line Comes From
      </h2>
      <p className="mt-3 text-gray-700">
        A conventional travel trailer pivots around its axles. The coupler is a
        hinge, and the tongue weight sitting on that hinge is what keeps the
        trailer pointed the same direction as the truck. Take weight off the
        hinge and the trailer becomes a pendulum with a hinge at both ends, so
        the smallest steering input or gust starts it swinging.
      </p>
      <p className="mt-3 text-gray-700">
        Ten percent is the floor the industry settled on and 15 percent is the
        ceiling, where the load starts eating rear axle capacity. The{" "}
        <Link href="/tongue-weight-calculator" className="text-brand-600 hover:underline">
          tongue weight calculator
        </Link>{" "}
        returns the percentage and tells you which side of the band you landed
        on.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">
                Tongue weight
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                On 7,500 lb
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Behavior at 65 mph
              </th>
              <th className="border px-3 py-2 text-left font-semibold">Verdict</th>
            </tr>
          </thead>
          <tbody>
            {TONGUE_TABLE.map((row, i) => (
              <tr
                key={row[0]}
                className={
                  row[0] === "9 percent"
                    ? "bg-danger-50"
                    : i % 2 === 1
                      ? "bg-gray-50"
                      : ""
                }
              >
                <td className="border px-3 py-2 text-xs font-semibold">
                  {row[0]}
                </td>
                <td className="border px-3 py-2 text-xs font-mono">{row[1]}</td>
                <td className="border px-3 py-2 text-xs">{row[2]}</td>
                <td className="border px-3 py-2 text-xs font-bold">{row[3]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm text-gray-500">
        Percentages are tongue weight divided by loaded trailer weight, measured
        at the coupler with the trailer loaded for the trip. Catalog tongue
        weight is an empty, dry figure and is not the number to use.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        The Lever Math Nobody Does Before Loading
      </h2>
      <p className="mt-3 text-gray-700">
        A trailer is a beam with two supports: the axle and the coupler. Put a
        load between them and both supports share it. Put a load outside the
        axle, behind it, and the coupler gets a negative share, meaning the load
        lifts weight off the ball and adds even more to the axle.
      </p>
      <p className="mt-3 text-gray-700">
        The arithmetic is one line. Take the weight, multiply by its distance
        from the axle, divide by the axle-to-coupler distance. On this
        bunkhouse the axle sits 16.5 ft from the coupler, so a 400 lb crate 6.5
        ft behind the axle gives 400 times 6.5 divided by 16.5, which is 158 lb
        taken off the tongue. The axle picks up the other 242 lb plus the
        original 400, for 558 lb on the tires.
      </p>
      <p className="mt-3 text-gray-700">
        That last number matters as much as the first. The gear did not just
        make the trailer less stable. It also pushed 558 lb onto a pair of
        axles that were already carrying 6,220 lb against a 7,000 lb combined
        rating.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">
                400 lb placed
              </th>
              <th className="border px-3 py-2 text-left font-semibold">Position</th>
              <th className="border px-3 py-2 text-left font-semibold">Tongue</th>
              <th className="border px-3 py-2 text-left font-semibold">Effect</th>
            </tr>
          </thead>
          <tbody>
            {LEVER_TABLE.map((row, i) => (
              <tr key={row[0]} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                <td className="border px-3 py-2 text-xs font-semibold">
                  {row[0]}
                </td>
                <td className="border px-3 py-2 text-xs">{row[1]}</td>
                <td className="border px-3 py-2 text-xs font-mono">{row[2]}</td>
                <td className="border px-3 py-2 text-xs">{row[3]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm text-gray-500">
        All four rows are calculated against a 7,110 lb trailer with 890 lb of
        tongue weight and a 16.5 ft axle-to-coupler distance.
      </p>

      <p className="mt-4 text-gray-700">
        Read the third row, because it is the one that actually works. Splitting
        the load, 200 lb in the rear bunk and 200 lb in the front pass-through,
        lands at 12.0 percent. You do not have to give up the rear storage. You
        have to stop putting the cooler and the case of water in it. The{" "}
        <Link
          href="/guides/trailer-loading-position"
          className="text-brand-600 hover:underline"
        >
          trailer loading position guide
        </Link>{" "}
        covers the general rule, which is that dense items belong over or just
        ahead of the axles and light bulky items belong at the ends.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Two Scale Passes, Wednesday and Friday
      </h2>
      <p className="mt-3 text-gray-700">
        You cannot feel a two percent change in tongue weight from the driver
        seat, and a bathroom scale under the jack will get you within 20 lb on a
        good day. A CAT scale gets you within 20 lb on every day, for about $15
        the first pass and a few dollars for a reweigh inside 24 hours.
      </p>
      <p className="mt-3 text-gray-700">
        The procedure is three platforms and two passes. Roll the whole rig on
        first: front axle on pad one, drive axle on pad two, trailer axles on pad
        three. Then park the trailer in the apron, not on the scale, and weigh
        the truck alone. Subtract the solo drive axle from the hitched drive
        axle and you have tongue weight, because that is exactly the load the
        coupler dropped onto the rear springs.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">Ticket</th>
              <th className="border px-3 py-2 text-left font-semibold">
                Front axle
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Drive axle
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Trailer axles
              </th>
              <th className="border px-3 py-2 text-left font-semibold">Derived</th>
            </tr>
          </thead>
          <tbody>
            {SCALE_TABLE.map((row, i) => (
              <tr
                key={row[0]}
                className={
                  row[0] === "Friday, hitched"
                    ? "bg-danger-50"
                    : i % 2 === 1
                      ? "bg-gray-50"
                      : ""
                }
              >
                <td className="border px-3 py-2 text-xs font-semibold">
                  {row[0]}
                </td>
                <td className="border px-3 py-2 text-xs font-mono">{row[1]}</td>
                <td className="border px-3 py-2 text-xs font-mono">{row[2]}</td>
                <td className="border px-3 py-2 text-xs font-mono">{row[3]}</td>
                <td className="border px-3 py-2 text-xs font-bold text-danger-700">
                  {row[4]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm text-gray-500">
        Tongue weight is the hitched drive axle minus the solo drive axle. Friday
        reading: 3,022 minus 2,290 equals 732 lb, against 7,510 lb of trailer,
        or 9.8 percent.
      </p>

      <p className="mt-4 text-gray-700">
        Friday&rsquo;s ticket is the one that ends the argument. The truck total
        went down 178 lb because there was less tongue hanging off the receiver,
        the trailer axles went up 558 lb, and the trailer gained 400 lb of
        cargo. All three numbers move in the direction the lever math predicts,
        which is how you know the scale is telling the truth. The{" "}
        <Link href="/guides/cat-scale-weighing" className="text-brand-600 hover:underline">
          CAT scale weighing guide
        </Link>{" "}
        covers the pad layout and how to read a ticket for axle ratings.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        What a November Cold Front Does to a Rig at 9.8 Percent
      </h2>
      <p className="mt-3 text-gray-700">
        Thanksgiving week sits at the front edge of the season&rsquo;s first
        strong cold fronts, and those fronts arrive with wind. The National
        Weather Service issues a wind advisory at roughly 31 mph sustained or 46
        mph gusts, and a 24-ft trailer with 8 ft of sidewall presents about 192
        sq ft of panel to that wind. At highway speed the apparent wind is not a
        crosswind anymore, it is a diagonal push against the whole side of the
        box.
      </p>
      <p className="mt-3 text-gray-700">
        A rig at 12.5 percent absorbs that push with a small correction and
        settles. The same rig at 9.8 percent has less restoring force at the
        coupler, so the same gust produces a bigger yaw angle, which produces a
        bigger correction, which is how an oscillation starts. Nothing about the
        truck changed between Wednesday and Friday. The margin did.
      </p>
      <p className="mt-3 text-gray-700">
        This is also why the tow rating on the door jamb is not a warranty
        against sway. Ratings certified under SAE J2807 are established with a
        trailer loaded to the rating and a sway response maneuver at highway
        speed, and that trailer is loaded to spec. A trailer at 9.8 percent is
        not the trailer that was tested, so the rating does not describe the rig
        you are driving.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Recovering From a Sway Event Without Making It Worse
      </h2>
      <p className="mt-3 text-gray-700">
        The difference between a scary mile and a wreck is usually one control:
        the manual lever on the brake controller. It applies trailer brakes
        without touching the truck&rsquo;s, which pulls the trailer straight
        behind the truck instead of letting it push the rear axle around.
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

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        The Twenty-Minute Fix the Night Before
      </h2>
      <p className="mt-3 text-gray-700">
        Thanksgiving loading happens in the dark, in a driveway, with three
        people carrying bags and nobody holding a tape measure. That is the
        problem, and it is fixable in twenty minutes if you know which items
        weigh anything.
      </p>
      <p className="mt-3 text-gray-700">
        Dense cargo goes over the axles or into the front pass-through: the
        cooler, cases of drinks, canned goods, the cast iron, tools, the
        generator. Light bulky cargo goes into the rear bunk: sleeping bags,
        pillows, paper goods, chairs, the folding table. The front pass-through
        on most bunkhouses will take 150 to 200 lb before you start loading the
        A-frame, and staying under that keeps the hitch and the tongue in range.
      </p>
      <p className="mt-3 text-gray-700">
        Then measure. A tongue weight scale under the jack takes two minutes and
        costs less than the fuel for the first 150 miles of the trip, and it is
        the only way to know whether the loading plan worked before you are on
        the road with a trailer that wants to lead. If the reading comes back
        under 10 percent, move another 100 lb forward. On this trailer that is
        worth about 85 lb of tongue weight per hundred pounds moved, which is a
        number you can plan with.
      </p>
      <p className="mt-3 text-gray-700">
        The last check is the truck side. Moving cargo from the trailer into the
        truck bed is not free, because that 400 lb comes out of payload instead.
        Run the{" "}
        <Link href="/payload-calculator" className="text-brand-600 hover:underline">
          payload calculator
        </Link>{" "}
        after the load plan, not before, and put anything that goes in the bed
        ahead of the rear axle rather than behind it.
      </p>

      <div className="mt-10 rounded-2xl bg-brand-600 p-8 text-center text-white">
        <h2 className="text-2xl font-bold">Check the Percentage Before You Drive</h2>
        <p className="mt-2 text-brand-100">
          Tongue weight, payload and axle load all have to clear before a
          Thanksgiving trip. Four numbers, two minutes.
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
        The recommendation for this trip is unglamorous: re-load the trailer
        before Thursday, put the dense items forward of the axles, measure the
        coupler, and drive 60 mph instead of 68 if the forecast has gusts over
        30. The trade-off is real, because a trailer loaded to 12 percent
        handles differently than the one you have been towing for three years,
        and the first fifty miles will feel heavier at the hitch. That feeling
        is the weight sitting where it belongs.
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

      <AmazonAffiliate categories={["sway-control", "tongue-scale", "tpms"]} />

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Sources &amp; References
      </h2>
      <ul className="mt-3 space-y-1 text-sm text-gray-600">
        <li>
          <a
            href="https://www.nhtsa.gov/equipment/tires"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            NHTSA: tire load limits, cold inflation pressure and trailer
            stability
          </a>
        </li>
        <li>
          <a
            href="https://www.rvia.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            RV Industry Association: weight labeling, cargo carrying capacity
            and hitch rating standards
          </a>
        </li>
        <li>
          <a
            href="https://catscale.com/cat-scale-locator/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            CAT Scale: certified locations, three-platform layout and reweigh
            pricing
          </a>
        </li>
        <li>
          <a
            href="https://www.ford.com/support/towing-gooseneck/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            Ford RV and Trailer Towing Guide: weight distributing hitch
            requirements above 5,000 lb trailer weight
          </a>
        </li>
        <li>
          <a
            href="https://www.weather.gov/safety/wind"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            National Weather Service: wind advisory thresholds and
            high-profile-vehicle guidance
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
              Thanksgiving Towing: The Drive Home Drops Your Tongue Weight
            </Link>
          </li>
          <li>
            <Link
              href="/guides/rv-trailer-sway-control"
              className="text-brand-600 hover:underline"
            >
              RV Trailer Sway Control: What Works
            </Link>
          </li>
          <li>
            <Link
              href="/guides/trailer-loading-position"
              className="text-brand-600 hover:underline"
            >
              Trailer Loading Position and Tongue Weight
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
              href="/guides/tongue-weight"
              className="text-brand-600 hover:underline"
            >
              Tongue Weight: The 10 to 15 Percent Rule
            </Link>
          </li>
          <li>
            <Link
              href="/guides/thanksgiving-truck-bed-payload"
              className="text-brand-600 hover:underline"
            >
              Thanksgiving Towing: Firewood in the Truck Bed
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
