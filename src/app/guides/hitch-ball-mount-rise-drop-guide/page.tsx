import type { Metadata } from "next";
import Link from "next/link";
import { FaqJsonLd, ArticleJsonLd, HowToJsonLd } from "@/components/seo/JsonLd";
import { DEFAULT_OG_IMAGES } from "@/lib/seo/default-og-image";

import AmazonAffiliate from "@/components/AmazonAffiliate";

export const metadata: Metadata = {
  title: "Hitch Ball Mount Rise and Drop: How to Choose the Right One",
  description:
    "Measure receiver height and level coupler height, choose the ball mount drop or rise that keeps your trailer level, and read the rating stamps that set your real capacity.",
  keywords: [
    "hitch ball mount",
    "ball mount rise and drop",
    "what drop hitch do I need",
    "ball mount drop chart",
    "how to measure trailer hitch height",
    "adjustable ball mount",
  ],
  alternates: {
    canonical:
      "https://www.rvtowingcalc.com/guides/hitch-ball-mount-rise-drop-guide",
  },
  openGraph: {
    title: "Hitch Ball Mount Rise and Drop: How to Choose the Right One",
    description:
      "The two measurements that set your ball mount drop, the sag correction almost everyone skips, the rating stamps that cap the whole setup, and ball torque specs by shank size.",
    url: "https://www.rvtowingcalc.com/guides/hitch-ball-mount-rise-drop-guide",
    images: DEFAULT_OG_IMAGES,
  },
};

const FAQS = [
  {
    q: "What size drop hitch do I need?",
    a: "Park the tow vehicle loaded on level ground and measure from the ground to the top inside edge of the receiver opening. Then level the trailer with its tongue jack and measure from the ground to the underside of the coupler. Subtract the smaller number from the larger. If the receiver is taller, the difference is your drop. If the coupler is taller, the difference is your rise. A receiver at 21 inches with a coupler at 17 inches calls for a 4 inch drop. Buy the mount whose stamped drop is closest to that figure, and if you are between sizes, take the slightly larger drop and confirm with a level on the trailer frame.",
  },
  {
    q: "Can a ball mount be used upside down for rise?",
    a: "Most conventional ball mounts can be flipped, because the shank and the ball platform are symmetric around the pin hole. Flip it and the same stamp that gave you drop now gives you rise. Two conditions apply. First, check the label: a minority of mounts are rated for drop only and must never be inverted. Second, understand that on a weight distribution shank the hole pattern and the head angle are not symmetric, so those are almost never reversible and the manufacturer publishes separate rise and drop figures for each adjustment hole. Read the label rather than assuming.",
  },
  {
    q: "Should the trailer be perfectly level when towing?",
    a: "Level is the target, and a very slight nose-down attitude is acceptable and usually preferable to nose-high. Nose-high is the dangerous direction because it lifts weight off the tongue: the rear axle of the trailer takes more load, the tongue weight the hitch sees drops below the ten to fifteen percent range that keeps the pair stable, and sway risk goes up sharply. Nose-low overloads the coupler and the front trailer axle and pushes more weight onto the front of the tow vehicle. Get it level, and if you cannot, err toward a touch of nose-down.",
  },
  {
    q: "Do I set ball mount height before or after a weight distribution hitch?",
    a: "Height first, always. A weight distribution hitch is tuned by measuring how much the spring bars bring the front of the tow vehicle back down, and that measurement is meaningless if the trailer is not already sitting level behind the ball. So pick the shank and the drop or rise that makes the loaded trailer level, then install the weight distribution head, then tension the bars and re-measure the front fender height. Doing it in the other order means you will redo the bar adjustment as soon as you correct the height.",
  },
  {
    q: "What torque should a hitch ball nut be tightened to?",
    a: "Torque is set by the shank diameter, not the ball diameter, and the figures are far higher than most owners expect. A 3/4 inch shank takes about 160 ft-lb, a 1 inch shank about 250 ft-lb, and a 1-1/4 inch shank about 450 ft-lb. For context, a full-size truck lug nut is around 140 ft-lb, so a 1-1/4 inch ball nut is more than three times that and sits past the top of most half-inch-drive torque wrenches. Use the figure printed with your specific ball, re-check the torque after the first hundred miles, and again at the start of every season. An under-tightened ball does not snap, it works loose.",
  },
];

const DROP_CHART = [
  ["Small utility trailer", "13–16 in", "16–20 in", "2–4 in drop"],
  ["Pop-up camper", "14–17 in", "17–21 in", "2–5 in drop"],
  ["Travel trailer", "17–21 in", "19–24 in", "2–6 in drop"],
  ["Boat trailer", "16–20 in", "18–23 in", "2–5 in drop"],
  ["Lifted or off-road teardrop", "19–23 in", "18–26 in", "Rise to 6 in drop"],
];

const SAG_TABLE = [
  ["250 lb", "0.4–0.7 in", "0.8–1.3 in", "0.2–0.4 in"],
  ["500 lb", "0.8–1.4 in", "1.6–2.6 in", "0.4–0.8 in"],
  ["750 lb", "1.2–2.0 in", "2.4–3.8 in", "0.6–1.2 in"],
  ["1,000 lb", "1.6–2.7 in", "3.2–5.0 in", "0.8–1.6 in"],
];

const CLASS_TABLE = [
  [
    "I",
    "1-1/4 in",
    "2,000 lb",
    "200 lb",
    "Small cars, bike racks, light utility",
  ],
  ["II", "1-1/4 in", "3,500 lb", "350 lb", "Crossovers, minivans"],
  [
    "III",
    "2 in",
    "8,000 lb (12,000 lb with WD)",
    "800 lb (1,200 lb with WD)",
    "Mid-size trucks, SUVs, most travel trailers",
  ],
  [
    "IV",
    "2 in",
    "10,000–12,000 lb",
    "1,000–1,200 lb",
    "Full-size trucks, large trailers",
  ],
  [
    "V",
    "2 in or 2-1/2 in",
    "17,000 lb and up",
    "1,700 lb and up",
    "Commercial and heavy-duty",
  ],
];

const BALL_TABLE = [
  ["1-7/8 in", "Up to 3,500 lb", "3/4 in", "160 ft-lb"],
  [
    "2 in",
    "3,500–8,000 lb (specific parts to 12,000 lb)",
    "3/4 in or 1 in",
    "160 or 250 ft-lb",
  ],
  ["2-5/16 in", "6,000 lb and up", "1 in or 1-1/4 in", "250 or 450 ft-lb"],
];

const MISTAKE_TABLE = [
  [
    "Measured on a sloped driveway",
    "Level in the driveway, nose-high or nose-low on the road",
    "Re-measure on flat pavement",
  ],
  [
    "Trailer measured empty, towed loaded",
    "Sits high because the tongue weight sank the truck",
    "Measure with the trailer loaded",
  ],
  [
    "Ball mount reused from another trailer",
    "Wrong height and possibly the wrong ball diameter",
    "Take fresh measurements for every trailer",
  ],
];

const HOWTO_STEPS = [
  {
    name: "Load the tow vehicle and set the tire pressures",
    text: "Fill the tank, put the passengers and the cargo you normally carry in place, and set the vehicle and trailer tires to their placarded pressures. Tongue weight compresses the rear suspension, so a truck measured empty sits higher than the truck that actually tows. The number you measure now is the number the trailer will see.",
  },
  {
    name: "Measure the receiver height",
    text: "On level pavement, measure from the ground to the top inside edge of the receiver opening. Not to the bumper, not to the top of the receiver body, and not to a license plate bracket. The reference point is the top of the square tube the ball mount slides into, because that is the datum the drop is measured from.",
  },
  {
    name: "Level the trailer and measure the coupler height",
    text: "Unhook the trailer, use the tongue jack to bring the frame parallel to the ground, and confirm with a level on the main frame rail rather than by eye. Then measure from the ground to the underside of the coupler, which is the surface the ball contacts. If the trailer is not level when you measure, the coupler height you record is not the height that will exist on the road.",
  },
  {
    name: "Subtract and pick the closest mount",
    text: "Receiver height minus coupler height gives the drop you need; coupler height minus receiver height gives the rise. Choose the ball mount whose stamped drop or rise is closest to that figure, and add the sag correction from the tongue weight you expect. If you are between two sizes, going slightly deeper keeps the trailer from sitting nose-high, which is the direction that costs stability.",
  },
  {
    name: "Match ball diameter, shank diameter and rating",
    text: "Read the ball size stamped on the coupler and buy that ball, no substitutes. Check that the ball shank fits the hole in the mount, that the mount is rated for your trailer gross weight and tongue weight, and that the receiver is rated at least as high. The weakest of the four or five parts in the chain sets the capacity of the whole assembly.",
  },
  {
    name: "Torque the ball, install, and verify level",
    text: "Torque the ball nut to the specification for its shank diameter, slide the mount into the receiver, and secure it with the pin and a locking clip. Couple up, lower the jack fully, and sight along the trailer frame. Then re-check the ball nut after the first hundred miles and at the start of every towing season, because a ball that works loose gives no warning before it lets go.",
  },
];

export default function HitchBallMountRiseDropGuidePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <ArticleJsonLd
        title="Hitch Ball Mount Rise and Drop: How to Choose the Right One"
        description="How to measure receiver and coupler height, choose the ball mount drop or rise that keeps a trailer level, account for suspension sag, and read the rating stamps and torque specs that decide whether the setup is safe."
        url="https://www.rvtowingcalc.com/guides/hitch-ball-mount-rise-drop-guide"
        datePublished="2026-10-08"
      />
      <FaqJsonLd
        faqs={FAQS}
        baseUrl="https://www.rvtowingcalc.com/guides/hitch-ball-mount-rise-drop-guide"
      />
      <HowToJsonLd
        name="How to Measure and Set Trailer Hitch Ball Mount Drop or Rise"
        description="Measuring receiver height and level coupler height, calculating the required ball mount drop or rise, matching ball diameter, shank diameter and weight ratings, and torquing the ball to specification."
        steps={HOWTO_STEPS}
        totalTime="PT1H"
        url="https://www.rvtowingcalc.com/guides/hitch-ball-mount-rise-drop-guide"
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
        <span className="text-gray-900">Ball Mount Rise and Drop</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
        Hitch Ball Mount Rise and Drop
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        The ball mount is the least expensive part of a towing setup and the one
        that quietly decides how the whole combination behaves. Get the drop
        right and the trailer tracks behind you level, its axles carry the load
        the manufacturer intended, and its brakes work as designed. Get it wrong
        and you have a trailer pushing weight onto the wrong axle, wearing its
        tires unevenly, and hunting for its own lane at highway speed. The
        measurement takes ten minutes.
      </p>

      <div className="mt-8 rounded-xl bg-brand-50 p-6">
        <h2 className="text-lg font-bold text-brand-800">The Short Answer</h2>
        <p className="mt-2 text-brand-700">
          Measure from the ground to the{" "}
          <strong>top inside edge of the receiver opening</strong> with the truck
          loaded, then level the trailer and measure from the ground to the{" "}
          <strong>underside of the coupler</strong>. Subtract the smaller number
          from the larger. Receiver taller means you need{" "}
          <strong>drop</strong>; coupler taller means you need{" "}
          <strong>rise</strong>. Add roughly an inch of correction for the sag
          the tongue weight will cause, buy the mount whose stamped figure is
          closest, then verify by sighting along the trailer frame once the rig
          is loaded and coupled. Level is the target, and slightly nose-down is
          the safer way to miss.
        </p>
      </div>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Why Height Moves Weight, Not Just Looks
      </h2>
      <p className="mt-3 text-gray-700">
        A ball mount changes the angle of the trailer, and the angle of the
        trailer moves weight between axles. Point the trailer nose-high and its
        center of gravity shifts rearward, which takes load off the tongue. That
        is the same direction as packing your cargo behind the trailer axles, and
        it produces the same result: tongue weight falls out of the ten to
        fifteen percent band that keeps a bumper-pull trailer stable, and sway
        risk climbs. Point it nose-low and the front trailer axle and the
        coupler take more than their share while the rear of the tow vehicle
        gets pushed down harder, which unloads the front tires and dulls steering
        response exactly when you want it sharp.
      </p>
      <p className="mt-3 text-gray-700">
        So the level-trailer rule is not about cosmetics. It is a weight
        distribution instruction. If you have not already established your
        numbers, run the{" "}
        <Link
          href="/tongue-weight-calculator"
          className="text-brand-600 hover:underline"
        >
          tongue weight calculator
        </Link>{" "}
        and the{" "}
        <Link
          href="/payload-calculator"
          className="text-brand-600 hover:underline"
        >
          payload calculator
        </Link>{" "}
        first, so you know what your trailer is supposed to put on the ball and
        whether your truck can carry it. Then set the height to deliver those
        numbers.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        The Measurement: Two Numbers and One Subtraction
      </h2>
      <p className="mt-3 text-gray-700">
        There are only two readings, and both must be taken on level pavement.
        The first is the tow vehicle with the load it will actually carry: fuel,
        passengers, gear, everything. The second is the trailer sitting level on
        its own jack, with the frame parallel to the ground. If either
        measurement is taken with a slope under it, the error transfers straight
        into the drop you order.
      </p>
      <p className="mt-3 text-gray-700">
        <strong>Receiver height:</strong> ground to the top inside edge of the
        receiver tube. This is the datum that drop is defined from, so measuring
        to the bumper or the receiver body gives you a number that looks
        plausible and is wrong. <strong>Coupler height:</strong> ground to the
        underside of the coupler, the surface the ball will contact. Then do the
        subtraction: receiver minus coupler is drop, coupler minus receiver is
        rise.
      </p>

      <svg
        viewBox="0 0 680 300"
        width="100%"
        role="img"
        aria-label="Two side-view diagrams. On the left, a tow vehicle receiver sitting higher than the trailer coupler, with a dropped ball mount bringing the ball down to a level trailer. On the right, a receiver sitting lower than the coupler, with a raised ball mount lifting the ball up to a level trailer."
        className="mt-6 w-full rounded-xl border border-gray-200 bg-white"
      >
        <text x="0" y="20" fontSize="14" fontWeight="700" fill="#111827">
          Match the mount to the height difference
        </text>

        <rect x="10" y="40" width="320" height="232" rx="12" fill="#f9fafb" stroke="#e5e7eb" />
        <text x="170" y="64" fontSize="12" fontWeight="700" fill="#1a73e8" textAnchor="middle">
          Receiver higher: use drop
        </text>
        <line x1="34" y1="212" x2="306" y2="212" stroke="#9ca3af" strokeWidth="1.5" strokeDasharray="5 4" />
        <rect x="130" y="230" width="70" height="18" rx="3" fill="#d1d5db" />
        <text x="165" y="265" fontSize="10" fill="#6b7280" textAnchor="middle">
          tow vehicle
        </text>
        <rect x="150" y="176" width="34" height="38" rx="3" fill="#e5e7eb" stroke="#9ca3af" />
        <text x="200" y="170" fontSize="10" fill="#6b7280">
          receiver
        </text>
        <path d="M 158 176 L 158 200 L 176 200" stroke="#1a73e8" strokeWidth="9" fill="none" strokeLinecap="round" />
        <circle cx="176" cy="200" r="7" fill="#111827" />
        <rect x="196" y="190" width="110" height="10" fill="#d1d5db" />
        <circle cx="252" cy="216" r="8" fill="#6b7280" />
        <circle cx="288" cy="216" r="8" fill="#6b7280" />
        <text x="250" y="252" fontSize="10" fill="#6b7280" textAnchor="middle">
          frame sits parallel to ground
        </text>

        <rect x="350" y="40" width="320" height="232" rx="12" fill="#f9fafb" stroke="#e5e7eb" />
        <text x="510" y="64" fontSize="12" fontWeight="700" fill="#1e8e3e" textAnchor="middle">
          Coupler higher: use rise
        </text>
        <line x1="374" y1="212" x2="646" y2="212" stroke="#9ca3af" strokeWidth="1.5" strokeDasharray="5 4" />
        <rect x="380" y="238" width="70" height="16" rx="3" fill="#d1d5db" />
        <text x="415" y="272" fontSize="10" fill="#6b7280" textAnchor="middle">
          tow vehicle
        </text>
        <rect x="400" y="196" width="34" height="34" rx="3" fill="#e5e7eb" stroke="#9ca3af" />
        <path d="M 408 200 L 408 178 L 426 178" stroke="#1e8e3e" strokeWidth="9" fill="none" strokeLinecap="round" />
        <circle cx="426" cy="178" r="7" fill="#111827" />
        <rect x="446" y="172" width="110" height="10" fill="#d1d5db" />
        <circle cx="502" cy="198" r="8" fill="#6b7280" />
        <circle cx="538" cy="198" r="8" fill="#6b7280" />
        <text x="500" y="252" fontSize="10" fill="#6b7280" textAnchor="middle">
          ball raised to meet the coupler
        </text>
      </svg>

      <p className="mt-3 text-sm text-gray-500">
        Both panels end in the same place: the trailer frame parallel to the
        ground. Only the direction of the offset differs.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        The Drop Chart: What Each Size Normally Fits
      </h2>
      <p className="mt-3 text-gray-700">
        These are starting points, not answers. Every combination is different
        because a lifted truck with large tires and a tall trailer can end up
        needing less drop than a stock truck with a low trailer. Use the table to
        sanity-check the number you calculated, and if your result lands far
        outside the typical range for your trailer type, re-measure before you
        order.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">
                Trailer type
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Level coupler height
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Typical receiver height
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Usual ball mount
              </th>
            </tr>
          </thead>
          <tbody>
            {DROP_CHART.map((row, i) => (
              <tr key={row[0]} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                <td className="border px-3 py-2 font-semibold">{row[0]}</td>
                <td className="border px-3 py-2">{row[1]}</td>
                <td className="border px-3 py-2">{row[2]}</td>
                <td className="border px-3 py-2 text-brand-700">{row[3]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Sag: The Correction Almost Everyone Skips
      </h2>
      <p className="mt-3 text-gray-700">
        The truck you measured is not the truck that tows. Hitching up drops the
        rear suspension by an amount set by the tongue weight on the ball, and
        that drop raises the receiver relative to the ground. So a mount that
        measured perfectly level in the driveway can leave you nose-high after
        you load the trailer. The fix is to add roughly an inch of extra drop for
        a mid-weight bumper-pull setup, and more if you are near the top of your
        truck&apos;s tongue weight limit.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">
                Tongue weight
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Half-ton pickup
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Mid-size SUV or crossover
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Heavy-duty truck
              </th>
            </tr>
          </thead>
          <tbody>
            {SAG_TABLE.map((row, i) => (
              <tr key={row[0]} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                <td className="border px-3 py-2 font-semibold">{row[0]}</td>
                <td className="border px-3 py-2">{row[1]}</td>
                <td className="border px-3 py-2">{row[2]}</td>
                <td className="border px-3 py-2">{row[3]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm text-gray-500">
        Rear suspension sag from a static tongue load, in inches. These are
        representative figures; a load-leveling or weight distribution hitch
        reduces them substantially because the spring bars push the front of the
        truck back down. If your sag is much worse than the table suggests, read
        that as a payload signal, not a ball mount problem.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Height Is Half the Job: The Stamp Is the Other Half
      </h2>
      <p className="mt-3 text-gray-700">
        A ball mount that puts the trailer perfectly level can still be the wrong
        ball mount. Every part in the chain carries two ratings, gross trailer
        weight and tongue weight, and the assembly is only as strong as its
        weakest link. A Class IV receiver with a Class III mount and a
        light-duty ball is a Class III setup, no matter what the receiver says.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">Class</th>
              <th className="border px-3 py-2 text-left font-semibold">
                Receiver
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Max gross trailer weight
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Max tongue weight
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Typical use
              </th>
            </tr>
          </thead>
          <tbody>
            {CLASS_TABLE.map((row, i) => (
              <tr key={row[0]} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                <td className="border px-3 py-2 font-semibold">Class {row[0]}</td>
                <td className="border px-3 py-2">{row[1]}</td>
                <td className="border px-3 py-2 text-xs">{row[2]}</td>
                <td className="border px-3 py-2 text-xs">{row[3]}</td>
                <td className="border px-3 py-2 text-xs">{row[4]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm text-gray-500">
        Class is a sorting convention, not a single published standard, and
        individual products vary within a class. The stamped rating on the part
        in your hand is the specification. See the{" "}
        <Link
          href="/guides/trailer-hitch-classes-explained"
          className="text-brand-600 hover:underline"
        >
          hitch classes explained
        </Link>{" "}
        guide for how vehicles and trailers are matched by class.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Ball Diameter and Nut Torque: Two Checks That Decide Whether It Stays On
      </h2>
      <p className="mt-3 text-gray-700">
        The ball has to match the coupler exactly. The size is stamped on the
        coupler, and a 2 inch ball in a 2-5/16 inch coupler will let the trailer
        rock, chatter and eventually separate. The ball&apos;s threaded shank
        also has to fit the hole in the mount, and its rating has to meet or
        exceed your loaded tongue weight. Then comes the step most owners get
        wrong: torque.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">
                Ball diameter
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Typical trailer weight
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Shank diameter
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Nut torque
              </th>
            </tr>
          </thead>
          <tbody>
            {BALL_TABLE.map((row, i) => (
              <tr key={row[0]} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                <td className="border px-3 py-2 font-semibold">{row[0]}</td>
                <td className="border px-3 py-2 text-xs">{row[1]}</td>
                <td className="border px-3 py-2">{row[2]}</td>
                <td className="border px-3 py-2 font-semibold text-brand-700">
                  {row[3]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm text-gray-500">
        Torque follows the shank, not the ball. Published figures vary slightly
        between manufacturers, so use the number that ships with your ball.
      </p>
      <p className="mt-3 text-gray-700">
        For a sense of scale: a 1-1/4 inch shank at 450 ft-lb is more than three
        times the torque of a full-size truck lug nut, and past the top of most
        half-inch-drive torque wrenches. A ball nut that is hand-tight plus a
        quarter turn is not tight. It will not snap; it will rotate in the mount
        a little at a time over a few hundred miles, wear the hole, and let the
        coupler start working against it. Re-check it after the first hundred
        miles and again at the start of each season.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Fixed, Adjustable, or a Weight Distribution Shank?
      </h2>
      <p className="mt-3 text-gray-700">
        A <strong>fixed ball mount</strong> is one piece of steel with a single
        drop or rise. It is the cheapest, the strongest for its rating, and the
        right answer if you tow one trailer with one vehicle. An{" "}
        <strong>adjustable ball mount</strong> has a channel and a set of holes
        so the platform can be moved through a range, typically from a few inches
        of rise to eight or ten inches of drop. It costs more, it is heavier, and
        it is the correct purchase if you tow several trailers or want to
        fine-tune. Confirm the rating at the height you actually use, because
        adjustable mounts are often rated lower at their extremes. A{" "}
        <strong>multi-ball mount</strong> welds two or three balls onto one
        platform for convenience, but the rating that applies is the one for the
        specific ball you are using, and those are frequently the lowest figures
        in the catalogue.
      </p>
      <p className="mt-3 text-gray-700">
        Once your tongue weight or gross trailer weight crosses the point where
        your vehicle requires weight distribution, the ball mount is replaced by
        a weight distribution shank and head. That is a different assembly with
        its own rules: separate rise and drop figures for each hole, a head angle
        to set, and bars to tension. If you are heading that way, start with the{" "}
        <Link
          href="/guides/weight-distribution-hitch-setup"
          className="text-brand-600 hover:underline"
        >
          weight distribution hitch setup
        </Link>{" "}
        procedure and the comparison of an{" "}
        <Link
          href="/guides/equalizer-hitch-vs-weight-distribution-hitch"
          className="text-brand-600 hover:underline"
        >
          Equal-i-zer versus a chain-style WDH
        </Link>
        , then come back here for the height.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Four Ways to Get the Measurement Wrong
      </h2>
      <p className="mt-3 text-gray-700">
        The arithmetic is trivial; the measurement discipline is where setups go
        wrong. These four mistakes account for most of the bad ball mounts in
        service.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">
                The mistake
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                What it produces
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                The correction
              </th>
            </tr>
          </thead>
          <tbody>
            {MISTAKE_TABLE.map((row, i) => (
              <tr key={row[0]} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                <td className="border px-3 py-2 font-semibold">{row[0]}</td>
                <td className="border px-3 py-2 text-xs">{row[1]}</td>
                <td className="border px-3 py-2 text-xs">{row[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-10 rounded-2xl bg-brand-600 p-8 text-center text-white">
        <h2 className="text-2xl font-bold">
          Know Your Tongue Weight Before You Order a Mount
        </h2>
        <p className="mt-2 text-brand-100">
          Ball mount drop depends on the load you are carrying. Check tongue
          weight, payload, GVWR and GCWR in one pass. Free, independent, no
          sign-up.
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

      <AmazonAffiliate categories={["weight-distribution", "sway-control"]} />

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Sources &amp; References
      </h2>
      <ul className="mt-3 space-y-1 text-sm text-gray-600">
        <li>
          <a
            href="https://www.nhtsa.gov/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            NHTSA &mdash; trailer towing safety guidance and equipment
            requirements
          </a>
        </li>
        <li>
          <a
            href="https://www.sae.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            SAE International &mdash; J684, the standard covering trailer
            couplings, hitches and safety chains
          </a>
        </li>
        <li>
          <a
            href="https://www.draw-tite.com/products/hitch-balls"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            Draw-Tite &mdash; hitch ball torque specifications by shank diameter
          </a>
        </li>
        <li>
          <a
            href="https://www.rvia.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            RV Industry Association (RVIA) &mdash; RV towing and labelling
            standards
          </a>
        </li>
        <li>
          <a
            href="https://www.rvsafety.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            RV Safety &amp; Education Foundation (RVSEF) &mdash; independent RV
            weight education
          </a>
        </li>
      </ul>

      <div className="mt-10 rounded-xl border border-gray-200 bg-gray-50 p-6">
        <h3 className="font-bold text-gray-900">Related Guides</h3>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
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
              href="/guides/trailer-hitch-classes-explained"
              className="text-brand-600 hover:underline"
            >
              Trailer Hitch Classes Explained
            </Link>
          </li>
          <li>
            <Link
              href="/guides/trailer-coupler-types-and-replacement"
              className="text-brand-600 hover:underline"
            >
              Trailer Coupler Types and Replacement
            </Link>
          </li>
          <li>
            <Link
              href="/guides/how-to-hitch-up-a-travel-trailer"
              className="text-brand-600 hover:underline"
            >
              How to Hitch Up a Travel Trailer
            </Link>
          </li>
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
              href="/guides/tongue-weight"
              className="text-brand-600 hover:underline"
            >
              Tongue Weight Guide
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
