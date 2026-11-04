import type { Metadata } from "next";
import Link from "next/link";
import { FaqJsonLd, ArticleJsonLd } from "@/components/seo/JsonLd";
import { DEFAULT_OG_IMAGES } from "@/lib/seo/default-og-image";

import AmazonAffiliate from "@/components/AmazonAffiliate";

export const metadata: Metadata = {
  title: "Dually vs Single Rear Wheel: What the Second Pair Actually Buys",
  description:
    "Dually vs single rear wheel on the same one-ton: the second pair adds 2,670 lb of rear axle rating, not trailer rating. Where the extra payload actually goes.",
  keywords: [
    "dually vs single rear wheel",
    "srw vs drw towing",
    "do i need a dually to tow a fifth wheel",
    "one ton single rear wheel payload",
    "dually rear axle rating",
    "f350 srw vs drw payload",
    "can you convert srw to drw",
    "dually towing stability",
  ],
  alternates: {
    canonical:
      "https://www.rvtowingcalc.com/guides/dually-vs-single-rear-wheel-towing",
  },
  openGraph: {
    title: "Dually vs Single Rear Wheel: What the Second Pair Actually Buys",
    description:
      "Same engine, same 30,000 lb GCWR, 2,670 lb more rear axle rating. A dually buys payload and tire reserve, not trailer rating.",
    url: "https://www.rvtowingcalc.com/guides/dually-vs-single-rear-wheel-towing",
    images: DEFAULT_OG_IMAGES,
  },
};

const FAQS = [
  {
    q: "Is a dually better for towing a fifth wheel?",
    a: "Better at carrying one, which is the part that limits most setups. Four rear tires cut the load per tire roughly in half, add about 2,670 lb of rear axle rating, and keep the truck rolling after a rear tire failure. None of that raises the published trailer rating by more than a few hundred pounds. If your pin weight already fits a single rear wheel with room to spare, the second pair buys reserve and stability rather than capability.",
  },
  {
    q: "Do I need a dually to tow a 15,000 lb fifth wheel?",
    a: "Usually yes, once the trailer is loaded. A 15,000 lb fifth wheel carries 2,700 to 3,300 lb of pin weight at 18 to 22 percent, and a one-ton single rear wheel diesel typically stickers at 3,300 to 3,600 lb of payload. Subtract a 200 lb hitch, two adults, a toolbox and a generator, and the pin is at the limit before the black tank has anything in it. Weigh the trailer loaded, then compare pin weight to the door jamb sticker rather than to the towing guide.",
  },
  {
    q: "Should the inner and outer dual tires run the same pressure?",
    a: "Yes, always. They share one axle and one load, and a pressure split makes the pair fight each other, which shows up as irregular inner sidewall wear and heat you cannot see from the mirror. Set both to the pressure the load table calls for at your actual rear axle weight. On an empty dually that is often 50 to 55 psi rather than the 80 psi molded on the sidewall. A chalk test across the tread confirms the setting in about a mile.",
  },
  {
    q: "Can I convert a single rear wheel truck to duals?",
    a: "Not safely, and not legally in most states. The dual rear wheel truck uses a different rear axle housing and hubs, wider brakes on some models, a different spring pack, and frame mounting points in different places. Bolt-on adapters that widen the track load the bearings and studs in a direction they were never designed for, and the fender coverage rules that apply to duals will not be satisfied. Buy the truck you need instead of building it.",
  },
  {
    q: "Does a dually handle crosswinds better with a fifth wheel?",
    a: "Noticeably, and the reason is tire stiffness rather than weight. Four rear tires resist the lateral deflection that two cannot, so the truck moves less before the trailer starts to push it, and the trailer's yaw takes longer to reach the cab. A dually does not fix a light pin or a bad pin ratio, though. If the trailer still sways with four rear tires in front of it, the problem is loading, not the truck.",
  },
];

const TRUCK_TABLE = [
  ["F-250, single rear wheel", "10,000 lb", "7,900 lb", "2,100 lb", "6,340 lb"],
  ["F-350, single rear wheel", "11,500 lb", "8,100 lb", "3,400 lb", "7,230 lb"],
  ["F-350, dual rear wheel", "14,000 lb", "8,700 lb", "5,300 lb", "9,900 lb"],
  ["F-450, dual rear wheel", "14,000 lb", "8,900 lb", "5,100 lb", "9,900 lb"],
];

const TIRE_TABLE = [
  ["4,000 lb", "2,000 lb", "55%", "1,000 lb", "35%"],
  ["5,000 lb", "2,500 lb", "69%", "1,250 lb", "44%"],
  ["6,000 lb", "3,000 lb", "82%", "1,500 lb", "53%"],
  ["7,000 lb", "3,500 lb", "96%", "1,750 lb", "62%"],
  ["7,230 lb", "3,615 lb", "99%", "1,808 lb", "64%"],
];

const COST_TABLE = [
  ["Rear tires", "2", "4"],
  ["Tire size on a one-ton", "LT275/70R18 E", "LT235/80R17 E"],
  ["Width at the rear fenders", "80 in", "96 in"],
  ["Full set, mounted and balanced", "$1,400 to $1,700", "$2,000 to $2,400"],
  ["Rotation", "Front to rear, either side", "Same side only, front to rear"],
  ["Empty ride", "Firm", "Harsh, and it skips on wet pavement"],
  ["Reach over the bed rail", "Arm's length", "Fender and tire in the way"],
];

export default function DuallyVsSingleRearWheelPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <ArticleJsonLd
        title="Dually vs Single Rear Wheel: What the Second Pair Actually Buys"
        description="How dual rear wheels change payload, rear axle rating, per-tire load and tire failure behavior on a one-ton tow vehicle, with published ratings for both configurations."
        url="https://www.rvtowingcalc.com/guides/dually-vs-single-rear-wheel-towing"
        datePublished="2026-11-04"
      />
      <FaqJsonLd
        faqs={FAQS}
        baseUrl="https://www.rvtowingcalc.com/guides/dually-vs-single-rear-wheel-towing"
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
        <span className="text-gray-900">Dually vs Single Rear Wheel</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
        Dually vs Single Rear Wheel: What the Second Pair Actually Buys
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        A 2026 F-350 crew cab 4x4 with the 6.7L diesel and an 8-foot box weighs
        about 8,100 lb with a full tank, so the sticker on its driver door jamb
        reads 3,400 lb of payload. Order the identical truck with dual rear
        wheels and the same sticker reads about 5,300.
      </p>
      <p className="mt-3 text-lg text-gray-600">
        Nothing forward of the rear springs changed. Same engine, same
        transmission, same brakes, same 30,000 lb GCWR. The gain came from 2,500
        lb of GVWR minus 600 lb of wheels, tires, fenders and heavier springs
        hauling themselves around. The 1,900 lb that is left is the entire
        argument for a dually, and it lands on one axle.
      </p>

      <div className="mt-8 rounded-xl bg-brand-50 p-6">
        <h2 className="text-lg font-bold text-brand-800">The Short Answer</h2>
        <p className="mt-2 text-brand-700">
          A dually buys <strong>payload and tire reserve</strong>, not trailer
          rating. The published max trailer figure moves a few hundred pounds
          between a one-ton single rear wheel and its dual rear wheel twin, while
          the rear axle rating jumps about 2,670 lb. Buy the single rear wheel if
          loaded pin weight, the hitch and everyone in the cab still fit under
          the door jamb sticker. Buy the dually when that arithmetic comes up
          short, which in practice starts around a 2,600 lb pin, or when you want
          four rear tires at half stress under a 16,000 lb toy hauler. The bill
          is 600 lb of your own weight, six tires, and a truck 16 inches wider at
          the fenders.
        </p>
      </div>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        One Chassis, Two Rear Axles
      </h2>
      <p className="mt-3 text-gray-700">
        Ford publishes 7,230 lb of rear axle rating for the F-350 single rear
        wheel and 9,900 lb for the dually. Ram and GM sit in the same
        neighborhood, roughly 7,000 lb on a 3500 single rear wheel and 10,000 on
        the dual. That rear number, not the trailer rating in the brochure, is
        what a fifth wheel actually loads.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">Truck</th>
              <th className="border px-3 py-2 text-left font-semibold">GVWR</th>
              <th className="border px-3 py-2 text-left font-semibold">
                Curb weight
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Payload sticker
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Rear axle rating
              </th>
            </tr>
          </thead>
          <tbody>
            {TRUCK_TABLE.map((row, i) => (
              <tr
                key={row[0]}
                className={row[0].includes("dual") ? "bg-brand-50" : i % 2 === 1 ? "bg-gray-50" : ""}
              >
                <td className="border px-3 py-2 text-xs font-semibold">
                  {row[0]}
                </td>
                <td className="border px-3 py-2 text-xs font-mono">{row[1]}</td>
                <td className="border px-3 py-2 text-xs font-mono">{row[2]}</td>
                <td className="border px-3 py-2 text-xs font-mono">{row[3]}</td>
                <td className="border px-3 py-2 text-xs font-mono">{row[4]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm text-gray-500">
        Typical published figures for a crew cab 4x4 with the 6.7L diesel and an
        8-foot box. Trim, options and the fifth wheel prep package move these by
        hundreds of pounds in either direction. The sticker on the driver door
        jamb is the only number that decides anything.
      </p>

      <p className="mt-4 text-gray-700">
        Read the last two rows together. The F-450 pickup sits on the same
        14,000 lb GVWR as the F-350 dually and carries less payload, because
        19.5-inch wheels, larger brakes and a wider front axle are weight the
        truck hauls before you put a cooler in the bed. More truck, less cargo.
      </p>
      <p className="mt-3 text-gray-700">
        The middle two rows are the pattern that matters. Add 2,500 lb of GVWR,
        and 600 lb of it goes straight back into the truck. Roughly three
        quarters of what the second pair adds reaches you as payload. If you were
        expecting the full 2,500, that is where it went.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Why a Fifth Wheel Loads the Rear Axle Harder Than a Bumper Pull
      </h2>
      <p className="mt-3 text-gray-700">
        Hitch position decides which axle takes the weight. A weight distribution
        hitch on a bumper pull is a lever: the spring bars lift a share of the
        tongue weight off the ball and hand it forward to the truck&apos;s front
        axle and back to the trailer axles. A 900 lb tongue weight can end up as
        600 lb on the rear axle with the steering axle still planted, which is
        the entire reason the bars exist.
      </p>
      <p className="mt-3 text-gray-700">
        A fifth wheel has no such lever. Most install instructions place the
        kingpin 2 to 4 inches ahead of the rear axle center, and the pin comes
        down through the hitch legs onto that axle with only a few percent
        transferring forward. A 2,800 lb pin is 2,800 lb on the rear axle plus a
        200 lb hitch. Nothing moves it.
      </p>

      <div className="mt-6 rounded-xl bg-gray-50 p-6">
        <h3 className="font-bold text-gray-900">The Pin Budget, in One Line</h3>
        <p className="mt-3 font-mono text-sm text-gray-800">
          pin budget = payload sticker &minus; hitch &minus; people and gear in
          the truck
        </p>
        <p className="mt-2 font-mono text-sm text-gray-800">
          max trailer = pin budget &divide; 0.20
        </p>
        <p className="mt-3 text-sm text-gray-700">
          Single rear wheel: 3,400 &minus; 200 &minus; 600 = 2,600 lb of pin, and
          2,600 &divide; 0.20 is a 13,000 lb fifth wheel. Dual rear wheel: 5,300
          &minus; 200 &minus; 600 = 4,500 lb, and 4,500 &divide; 0.20 is 22,500
          lb, past the published 5th wheel rating. On the single rear wheel the
          sticker runs out first. On the dually the trailer rating runs out
          first.
        </p>
      </div>

      <p className="mt-4 text-gray-700">
        That reversal is the purchase decision in one sentence. A dually does not
        tow a heavier trailer because of its tires. It tows one because it can
        hold the pin weight of a heavier trailer, and once it can, the published
        trailer rating becomes the wall instead of the axle. Run your own numbers
        through the{" "}
        <Link href="/payload-calculator" className="text-brand-600 hover:underline">
          payload calculator
        </Link>{" "}
        before you shop trailers, and read the{" "}
        <Link
          href="/guides/fifth-wheel-pin-weight"
          className="text-brand-600 hover:underline"
        >
          pin weight guide
        </Link>{" "}
        if you are still working out what 20 percent looks like on a specific
        floor plan.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Four Tires at Half the Load
      </h2>
      <p className="mt-3 text-gray-700">
        Take a 6,000 lb rear axle. That is a 14,000 lb fifth wheel at 20 percent
        pin, plus a loaded bed and a full tank.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">
                Rear axle load
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Per tire, single rear wheel
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Of a 3,640 lb rating
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Per tire, dual rear wheel
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Of a 2,835 lb rating
              </th>
            </tr>
          </thead>
          <tbody>
            {TIRE_TABLE.map((row, i) => (
              <tr
                key={row[0]}
                className={row[0] === "6,000 lb" ? "bg-brand-50" : i % 2 === 1 ? "bg-gray-50" : ""}
              >
                <td className="border px-3 py-2 text-xs font-mono font-semibold">
                  {row[0]}
                </td>
                <td className="border px-3 py-2 text-xs font-mono">{row[1]}</td>
                <td className="border px-3 py-2 text-xs font-mono">{row[2]}</td>
                <td className="border px-3 py-2 text-xs font-mono">{row[3]}</td>
                <td className="border px-3 py-2 text-xs font-mono">{row[4]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm text-gray-500">
        A single rear wheel one-ton runs LT275/70R18 load range E, rated 3,640 lb
        at 80 psi. A dually runs LT235/80R17 load range E, rated 3,085 lb single
        and 2,835 lb in dual application. The lower of the two ratings applies
        whenever the tires are paired on one side.
      </p>

      <p className="mt-4 text-gray-700">
        Same load, half the stress per tire: 82 percent of rating against 53
        percent at 6,000 lb. That is why duals run cooler, age more slowly, and
        shrug off a 110 degree afternoon in Nevada that would have a single set
        of rear tires at the edge of their limit with nothing visibly wrong.
      </p>
      <p className="mt-3 text-gray-700">
        Then take one away. A dually that loses a rear tire puts 3,000 lb on the
        survivor, just inside its 3,085 lb single rating at 80 psi, and you can
        drive to the next exit. A single rear wheel that loses one puts 6,000 lb
        on a 3,640 lb tire, which means the rim is on the pavement before the
        pull registers in the steering wheel. That is the honest version of the
        stability argument. Four tires do not grip better in a straight line.
        They give a failure somewhere to go.
      </p>
      <p className="mt-3 text-gray-700">
        The trade is that you cannot see half of them. The inner dual sits under
        the bed with its valve stem facing the frame, and 20 psi missing there is
        invisible in the mirror, because the outer tire looks normal and the
        truck still sits level. Keep a dual-foot chuck and a 6-inch braided
        extension in the glovebox and check the inner pair with a gauge rather
        than a kick. A six sensor TPMS is the other way to find out before the
        sidewall does, and the{" "}
        <Link
          href="/guides/rv-tpms-buying-and-setup"
          className="text-brand-600 hover:underline"
        >
          TPMS setup guide
        </Link>{" "}
        covers the thresholds worth setting on a truck that runs two tires per
        side.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        What the Second Pair Costs After You Sign
      </h2>
      <p className="mt-3 text-gray-700">
        Start with width. Dual rear fenders put the truck at 96 inches, the legal
        maximum in every state without an overwidth permit. Lane discipline
        changes, because the right mirror now tracks the fender instead of the
        door. Drive-throughs, older bank lanes and the car wash at the end of the
        street are out, and so is reaching over the bed rail, since a tire now
        sits where your hip used to be.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">Item</th>
              <th className="border px-3 py-2 text-left font-semibold">
                Single rear wheel
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Dual rear wheel
              </th>
            </tr>
          </thead>
          <tbody>
            {COST_TABLE.map((row, i) => (
              <tr key={row[0]} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                <td className="border px-3 py-2 text-xs font-semibold">
                  {row[0]}
                </td>
                <td className="border px-3 py-2 text-xs">{row[1]}</td>
                <td className="border px-3 py-2 text-xs">{row[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-4 text-gray-700">
        Six tires is the line item people underestimate. A set of LT235/80R17
        load range E mounted and balanced runs $2,000 to $2,400, and a dually
        ages its rear tires out at six years before it wears them out, so the
        date code decides replacement, not the tread depth. Rotation is limited
        to same-side front to back because the wheels are not interchangeable
        left to right, which fixes the wear pattern for the life of the set. The
        front pair and the rear four also wear on separate clocks, since a front
        tire never moves to a rear position.
      </p>
      <p className="mt-3 text-gray-700">
        Empty, the truck is over-tired for its own weight. Four rear tires at 80
        psi carry 5,670 lb as a pair, and an unloaded rear axle is doing well to
        put 3,000 lb on them. The result is a truck that skips sideways on a
        washboard road and spins a rear tire from a stoplight on wet pavement.
        Chalk test the rear tread and drop the pressure to 50 or 55 psi when you
        are not towing. It costs nothing and it quiets the whole truck down.
      </p>
      <p className="mt-3 text-gray-700">
        The last cost is paperwork. A 14,000 lb truck with a 20,000 lb fifth
        wheel sits at 34,000 lb combined, past the 26,001 lb line that triggers
        non-commercial Class A licensing in most states, and several states
        register a 14,000 lb GVWR pickup in a heavier fee class than an 11,500 lb
        one. Neither is a reason to skip the dually. Both are reasons to price
        the truck after the trailer is chosen rather than before. The{" "}
        <Link
          href="/guides/cdl-requirements-rv-towing"
          className="text-brand-600 hover:underline"
        >
          license requirements by weight
        </Link>{" "}
        are worth reading before you assume a 26,000 lb threshold does not apply
        to a private RV.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        When the Single Rear Wheel Is the Right Truck
      </h2>
      <p className="mt-3 text-gray-700">
        For most buyers it is. A one-ton single rear wheel diesel carries 3,300
        to 3,600 lb of payload in a crew cab, which covers a 13,000 lb fifth
        wheel with a 2,600 lb pin and two adults in the front seats. It covers
        every travel trailer the truck is rated to pull, because a bumper pull
        hands part of the tongue weight forward through the bars. It fits a
        9-foot garage door, takes four tires instead of six, and needs no permit
        at 80 inches wide.
      </p>
      <p className="mt-3 text-gray-700">
        The two configurations are also closer on paper than the price suggests.
        Buy the single rear wheel if your loaded pin weight, hitch and passengers
        total less than the sticker with 300 lb left over. That leftover is not
        padding. It is the weight of the firewood, the generator and the friend
        who rides along once a year, and it is what keeps you legal on the way
        home with a full black tank.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        When the Pin Weight Says Dually
      </h2>
      <p className="mt-3 text-gray-700">
        Three cases earn it. A loaded pin over 2,600 lb, which covers most toy
        haulers above 16,000 lb gross and the front living room floor plans with
        three slides. A slide-in truck camper, where the load sits entirely over
        and ahead of the rear axle and a single pair of rear tires is the wrong
        shape for it. Or margin: a 15,500 lb fifth wheel towed 12,000 miles a
        year through the Rockies is inside a single rear wheel&apos;s payload on
        paper while its rear tires sit at 94 percent of rating on a July
        afternoon in Nevada. The dually puts that same load at 53 percent.
      </p>
      <p className="mt-3 text-gray-700">
        The camper case is the cleanest example, because it removes the trailer
        from the argument entirely. A 4,000 lb slide-in with a wet bath and full
        water puts close to 4,400 lb on the rear axle with nothing behind the
        bumper to share it. No set of two rear tires is rated for that, and no
        air bag changes the axle rating it sits on. The{" "}
        <Link
          href="/guides/truck-camper-payload"
          className="text-brand-600 hover:underline"
        >
          camper payload math
        </Link>{" "}
        runs the same numbers from the other direction.
      </p>
      <p className="mt-3 text-gray-700">
        Pay for the second pair when the arithmetic demands it, not when the
        truck looks better in a parking lot. A one-ton single rear wheel with 300
        lb of payload left after the hitch, the passengers and the firewood is
        the better truck for a 12,000 lb fifth wheel, and the $9,000 it saves
        buys a lot of diesel. A dually earns its keep at 2,600 lb of pin and
        above, and it charges six tires, a 96-inch width, and an empty-bed ride
        harsh enough that you feel every expansion joint between here and the
        interstate. The second pair is not a towing upgrade. It is a carrying
        upgrade, and it only pays when carrying is what stopped you.
      </p>

      <div className="mt-10 rounded-2xl bg-brand-600 p-8 text-center text-white">
        <h2 className="text-2xl font-bold">Weigh the Pin, Not the Brochure</h2>
        <p className="mt-2 text-brand-100">
          Payload, pin weight and rear axle load come from three numbers on two
          stickers. Run yours before you shop trucks.
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

      <AmazonAffiliate categories={["tire-care", "tpms"]} />

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Sources &amp; References
      </h2>
      <ul className="mt-3 space-y-1 text-sm text-gray-600">
        <li>
          <a
            href="https://www.ford.com/trucks/super-duty/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            Ford Super Duty: towing, payload and axle ratings by configuration
          </a>
        </li>
        <li>
          <a
            href="https://www.ramtrucks.com/ram-3500.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            Ram 3500: single and dual rear wheel payload and towing charts
          </a>
        </li>
        <li>
          <a
            href="https://www.nhtsa.gov/vehicle-safety/towing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            NHTSA: trailer towing safety, tire labeling and load limits
          </a>
        </li>
        <li>
          <a
            href="https://www.us-tra.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            Tire and Rim Association: load and inflation tables for light truck
            tires, including dual application ratings
          </a>
        </li>
        <li>
          <a
            href="https://www.rvia.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            RV Industry Association: weight labeling and certification standards
            for towable RVs
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
              Fifth Wheel Pin Weight
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
          <li>
            <Link
              href="/guides/three-quarter-ton-truck-towing"
              className="text-brand-600 hover:underline"
            >
              Three-Quarter-Ton Truck Towing
            </Link>
          </li>
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
              href="/guides/rv-tpms-buying-and-setup"
              className="text-brand-600 hover:underline"
            >
              RV TPMS Buying and Setup
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
        </ul>
      </div>
    </div>
  );
}
