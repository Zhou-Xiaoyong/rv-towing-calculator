import type { Metadata } from "next";
import Link from "next/link";
import { FaqJsonLd, ArticleJsonLd, HowToJsonLd } from "@/components/seo/JsonLd";
import { DEFAULT_OG_IMAGES } from "@/lib/seo/default-og-image";

import AmazonAffiliate from "@/components/AmazonAffiliate";

export const metadata: Metadata = {
  title: "Thanksgiving Towing: Is a Full Water Tank Worth 384 lb?",
  description:
    "A 46-gallon fresh tank is 384 lb and the water heater adds 50 more, which is 29 percent of a 1,520 lb cargo rating spent on water you can buy at the other end.",
  keywords: [
    "thanksgiving towing",
    "towing with full water tank",
    "travel trailer water tank weight",
    "should i travel with water in my rv",
    "rv fresh water tank weight",
    "water weight cargo carrying capacity",
    "winter rv water tank",
  ],
  alternates: {
    canonical:
      "https://www.rvtowingcalc.com/guides/thanksgiving-full-water-tank-towing-weight",
  },
  openGraph: {
    title: "Thanksgiving Towing: Is a Full Water Tank Worth 384 lb?",
    description:
      "Forty-six gallons is 384 lb, and where the tank sits decides whether the coupler or the axles pay for it. The Thanksgiving water decision, with the freeze math.",
    url: "https://www.rvtowingcalc.com/guides/thanksgiving-full-water-tank-towing-weight",
    images: DEFAULT_OG_IMAGES,
  },
};

const FAQS = [
  {
    q: "How much does a full water tank weigh on a travel trailer?",
    a: "One US gallon of water is 8.34 lb at room temperature, so a 46-gallon fresh tank is 384 lb. Add the six gallons sitting in the water heater and the trailer is carrying 434 lb before anyone opens a cupboard. The big toy hauler tanks go further: 100 gallons is 834 lb, which is more than the dry weight difference between a 24 ft and a 30 ft trailer.",
  },
  {
    q: "Does water in the fresh tank count against payload or cargo carrying capacity?",
    a: "Both, in different places. On the trailer it counts against GVWR and cargo carrying capacity, because the yellow label on a towable is built from the shipping weight with the tanks empty and the propane full, so every gallon you add is new weight. The tongue share of it, roughly 13 percent, counts against the truck's payload along with the hitch and the passengers. Nothing about water gets excluded from either budget.",
  },
  {
    q: "Should I tow with a full water tank in winter?",
    a: "Not if the trailer is going to sit unheated for days. Twelve gallons for the road is 100 lb and covers the toilet, a sink rinse and coffee. A full tank does not protect the plumbing anyway, since the parts that split are the pump head, the outdoor shower valve, the low-point drains and the water heater, and none of them care how much water is in the tank behind them.",
  },
  {
    q: "Does a full water tank make a trailer sway less?",
    a: "No, and the numbers say why. Weight directly over the axle line changes tongue weight by nothing and weight behind the axles takes tongue weight away, so a full tank is not ballast in the way a motorhome owner means it. What changes with fill level is how much mass is free to move inside the tank, and that is a mounting and fatigue question rather than a stability one.",
  },
  {
    q: "Can I fill up at the campground in November?",
    a: "Sometimes, and never on a holiday afternoon. Most northern state park systems and many private parks shut off site water between October 1 and the first hard freeze, then leave a frost-free hydrant or a winterized spigot at the office. Call before you leave and ask two questions: is the hydrant on, and is the office open when I arrive.",
  },
];

const GALLON_TABLE = [
  ["12 gal, the road load", "100 lb", "1,420 lb", "A full cooler and two camp chairs"],
  ["23 gal, half a tank", "192 lb", "1,328 lb", "Four days of clothes for two people"],
  ["46 gal, full tank", "384 lb", "1,136 lb", "The gifts you were bringing home"],
  ["52 gal, full tank plus heater", "434 lb", "1,086 lb", "Six bundles of firewood"],
  ["100 gal, toy hauler tank", "834 lb", "686 lb", "The margin on a second axle"],
];

const LOCATION_TABLE = [
  [
    "Over the axle line, most 24 ft couples trailers",
    "0 in",
    "0 lb",
    "384 lb",
  ],
  [
    "Ahead of the axles, front kitchen and some bunkhouses",
    "30 in ahead",
    "+49 lb",
    "335 lb",
  ],
  [
    "Behind the axles, rear bath and toy hauler garage",
    "48 in behind",
    "\u221279 lb",
    "463 lb",
  ],
];

const LEDGER_TABLE = [
  ["Shipping weight, as built", "5,480 lb", "5,480 lb", "1,520 lb"],
  ["Propane, 40 lb of gas in two cylinders", "40 lb", "5,520 lb", "1,480 lb"],
  ["Battery, group 24", "45 lb", "5,565 lb", "1,435 lb"],
  ["Clothes and bedding, two adults, four days", "140 lb", "5,705 lb", "1,295 lb"],
  ["Food, cooler, drinks for the dinner", "190 lb", "5,895 lb", "1,105 lb"],
  ["Chairs, table, grill, hoses, tools", "165 lb", "6,060 lb", "940 lb"],
  ["46 gal fresh water", "384 lb", "6,444 lb", "556 lb"],
  ["6 gal water heater", "50 lb", "6,494 lb", "506 lb"],
];

const STEPS = [
  {
    name: "Read the tank capacity off the fill door, not the brochure",
    text: "The advertised number is often the whole system, heater included. A trailer sold with 46 gallons of fresh water may have a 40-gallon tank and a 6-gallon heater behind it, and the fill door label or the owner's manual will separate them. Multiply by 8.34 and you have the number that goes on the weight sheet.",
  },
  {
    name: "Put twelve gallons in for the road",
    text: "One hundred pounds, enough for the toilet, a rinse at the sink and a pot of coffee at a rest stop. Twelve gallons in a 46-gallon tank is a shallow puddle against the bottom, which is exactly what you want: small mass, short runway, nothing to slosh. It also leaves the pump primed so you are not dry-starting it at the far end.",
  },
  {
    name: "Carry the drinking water in the truck",
    text: "Three one-gallon jugs weigh 25 lb and live in the cab, where they stay liquid and where nobody has to winterize them. Truck payload covers them, and 25 lb against a 1,400 lb payload rating is not a decision. The tank is for washing and flushing, not for drinking.",
  },
  {
    name: "Fill at the destination from the frost-free hydrant",
    text: "Ask the office when you book whether the hydrant is on after the first freeze and what hours someone is there. A holiday arrival after 4 pm on a Wednesday is the worst possible time to discover the spigot is capped, which is the entire reason to carry twelve gallons instead of none.",
  },
  {
    name: "Drain before the trailer sits below 28 degrees",
    text: "Open the low-point drains, open the two faucets, run the pump dry for fifteen seconds, and pull the heater plug or open the bypass. Water expands about 9 percent when it freezes, and the tank itself usually survives because polyethylene flexes. The pump head, the outdoor shower valve and the toilet valve do not.",
  },
];

export default function ThanksgivingFullWaterTankTowingWeightPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <ArticleJsonLd
        title="Thanksgiving Towing: Is a Full Water Tank Worth 384 lb?"
        description="What 46 gallons of fresh water costs in cargo carrying capacity and tongue weight, where the tank sits on the frame, and why the Thanksgiving forecast decides the fill level."
        url="https://www.rvtowingcalc.com/guides/thanksgiving-full-water-tank-towing-weight"
        datePublished="2026-11-10"
      />
      <FaqJsonLd
        faqs={FAQS}
        baseUrl="https://www.rvtowingcalc.com/guides/thanksgiving-full-water-tank-towing-weight"
      />
      <HowToJsonLd
        name="How to decide how much water to tow with on a Thanksgiving trip"
        description="Read the real tank capacity, carry twelve gallons for the road, keep drinking water in the truck, fill at a frost-free hydrant at the destination, and drain the system before the trailer sits below freezing."
        steps={STEPS}
        totalTime="PT30M"
        url="https://www.rvtowingcalc.com/guides/thanksgiving-full-water-tank-towing-weight"
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
        <span className="text-gray-900">Full Water Tank Towing Weight</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
        Thanksgiving Towing: Is a Full Water Tank Worth 384 lb?
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        A 46-gallon fresh tank is 384 lb of water. Add the six gallons sitting in
        the water heater and the trailer rolls out of the driveway carrying 434
        lb that was not in it the day it was built. On a 24 ft couples trailer
        with a 1,520 lb cargo rating, that is <strong>29 percent</strong> of
        everything you were allowed to bring, spent on water.
      </p>
      <p className="mt-3 text-lg text-gray-600">
        The answer should be obvious from that number. It is not, because in the
        northern half of the country the campground spigot is already shut off
        for the season, and the water you haul north in November will sit in an
        unheated trailer at 18 degrees for four days.
      </p>

      <div className="mt-8 rounded-xl bg-brand-50 p-6">
        <h2 className="text-lg font-bold text-brand-800">The Short Answer</h2>
        <p className="mt-2 text-brand-700">
          Water is 8.34 lb per gallon, and a full tank plus the heater is 434 lb
          on this trailer, or 6.7 percent of its loaded weight. Where the tank
          sits decides who pays: over the axle line it adds nothing to the
          coupler, 30 in ahead of it adds 49 lb, and 48 in behind takes 79 lb
          off. Carry <strong>twelve gallons</strong> for the road when the
          destination is below freezing, fill at a frost-free hydrant when you
          get there, and skip the half tank, because 192 lb of water with four
          feet of runway is the only load on the rig that moves after you have
          checked it.
        </p>
      </div>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        8.34 Pounds Is the Entire Calculation
      </h2>
      <p className="mt-3 text-gray-700">
        One US gallon of water weighs 8.34 lb at room temperature, and that is
        the only constant in this article. Forty-six gallons is 384 lb. The
        water heater holds six more, which is 50 lb, and it sits where the
        plumbing is rather than over the axles on most floorplans.
      </p>
      <p className="mt-3 text-gray-700">
        For scale, 26 gallons of gasoline is about 163 lb at 6.3 lb per gallon.
        Water is a third heavier per gallon than the fuel you are already
        counting, and a travel trailer carries more of it than most trucks carry
        fuel.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">
                Fill level
              </th>
              <th className="border px-3 py-2 text-left font-semibold">Weight</th>
              <th className="border px-3 py-2 text-left font-semibold">
                Left of 1,520 lb
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                What it costs you
              </th>
            </tr>
          </thead>
          <tbody>
            {GALLON_TABLE.map((row, i) => (
              <tr
                key={row[0]}
                className={row[0].includes("full tank plus") ? "bg-danger-50" : i % 2 === 1 ? "bg-gray-50" : ""}
              >
                <td className="border px-3 py-2 text-xs font-semibold">
                  {row[0]}
                </td>
                <td className="border px-3 py-2 text-xs font-mono">{row[1]}</td>
                <td className="border px-3 py-2 text-xs font-mono font-bold text-brand-700">
                  {row[2]}
                </td>
                <td className="border px-3 py-2 text-xs">{row[3]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm text-gray-500">
        Water at 8.34 lb per gallon, 70&deg;F. Cargo carrying capacity 1,520 lb
        on a trailer with a 7,000 lb GVWR and a 5,480 lb shipping weight. The
        100-gallon row belongs to a toy hauler, not this trailer, and is there
        to show what the same decision costs on a bigger tank.
      </p>

      <p className="mt-4 text-gray-700">
        The last column is the part worth arguing about. Four hundred and
        thirty-four pounds is a motorcycle, or six bundles of firewood, or the
        gifts the kids are bringing home on Sunday. The water is the one item on
        that list you can buy at the other end for the price of a bulk fill,
        which typically runs $10 to $15 at a park with a metered hydrant and
        nothing at all at a relative&rsquo;s hose bib.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Where the Tank Sits Decides What the Truck Feels
      </h2>
      <p className="mt-3 text-gray-700">
        Fresh tanks on towables are rotomolded polyethylene, strapped or bolted
        under the floor between the frame rails, and their position is a
        floorplan decision rather than a design one. A couples trailer with a
        front bedroom usually puts the tank just ahead of or across the axle
        line. A rear-bath bunkhouse puts it behind, under the wardrobe floor or
        the rear storage.
      </p>
      <p className="mt-3 text-gray-700">
        The transfer is a lever calculation. Weight added <em>d</em> inches from
        the axle center changes coupler load by <strong>W &times; d &divide; L</strong>,
        where L is the distance from coupler to axle center. On this 24 ft
        trailer that span is 234 in, so 384 lb sitting 30 in forward of the axle
        line adds 384 &times; 30 &divide; 234, or 49 lb, to the ball. The rest
        goes straight down through the axles.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">
                Tank position
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Off axle center
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Coupler change
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Load on axles
              </th>
            </tr>
          </thead>
          <tbody>
            {LOCATION_TABLE.map((row, i) => (
              <tr
                key={row[0]}
                className={row[2].includes("79") ? "bg-danger-50" : i % 2 === 1 ? "bg-gray-50" : ""}
              >
                <td className="border px-3 py-2 text-xs font-semibold">
                  {row[0]}
                </td>
                <td className="border px-3 py-2 text-xs">{row[1]}</td>
                <td
                  className={
                    row[2].includes("79")
                      ? "border px-3 py-2 text-xs font-mono font-bold text-danger-700"
                      : "border px-3 py-2 text-xs font-mono font-bold text-brand-700"
                  }
                >
                  {row[2]}
                </td>
                <td className="border px-3 py-2 text-xs font-mono">{row[3]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm text-gray-500">
        Full tank at 46 gal, 384 lb. Coupler to axle center 234 in. Coupler
        change is weight times distance divided by that span. Axle load is the
        remainder of the 384 lb.
      </p>

      <p className="mt-4 text-gray-700">
        The third row is the one nobody checks. A tank behind the axle line does
        not add ballast, it removes coupler weight, and 79 lb off an 818 lb
        tongue moves a trailer from 12.6 percent to 11.4 percent. That is still
        inside the window. But if the trailer was already light on the ball, a
        rear tank filled for boondocking is a second reason the same trailer
        starts to wander, and the tank is not the reason anyone suspects.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        What 434 Pounds Displaces on the Way Out
      </h2>
      <p className="mt-3 text-gray-700">
        Water never looks like the problem because it goes in before anything
        else does. The trailer gets loaded in the order things occur to you, and
        the hose is the first thing that occurs to you.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">
                Line item
              </th>
              <th className="border px-3 py-2 text-left font-semibold">Weight</th>
              <th className="border px-3 py-2 text-left font-semibold">
                Running total
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Left of 7,000 lb
              </th>
            </tr>
          </thead>
          <tbody>
            {LEDGER_TABLE.map((row, i) => (
              <tr
                key={row[0]}
                className={row[0].includes("water heater") ? "bg-danger-50" : i % 2 === 1 ? "bg-gray-50" : ""}
              >
                <td className="border px-3 py-2 text-xs font-semibold">
                  {row[0]}
                </td>
                <td className="border px-3 py-2 text-xs font-mono">{row[1]}</td>
                <td className="border px-3 py-2 text-xs font-mono">{row[2]}</td>
                <td
                  className={
                    row[0].includes("water heater")
                      ? "border px-3 py-2 text-xs font-mono font-bold text-danger-700"
                      : "border px-3 py-2 text-xs font-mono font-bold text-brand-700"
                  }
                >
                  {row[3]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm text-gray-500">
        Trailer GVWR 7,000 lb, shipping weight 5,480 lb, cargo carrying capacity
        1,520 lb, two 3,500 lb axles. Tongue at 12.6 percent of 6,494 lb is 818
        lb, leaving 5,676 lb on the axles before anyone fills the gray tank.
      </p>

      <p className="mt-4 text-gray-700">
        Nothing on that sheet is over a limit, and that is the honest version of
        this story. A 24 ft trailer with 1,520 lb of cargo rating absorbs a full
        tank without argument. What it does not absorb is the rest of the trip.
        Five hundred and six pounds is what is left for the gifts, the cooler
        refilled at the other end, the bag of dog food and the firewood you buy
        because the bundle at the camp store is cheaper than hauling oak across
        three states.
      </p>
      <p className="mt-3 text-gray-700">
        Then the load moves to the rear bunk because the front is full, and the{" "}
        <Link
          href="/guides/thanksgiving-return-trip-tongue-weight"
          className="text-brand-600 hover:underline"
        >
          return leg tongue weight guide
        </Link>{" "}
        picks up the story from there. The full tank is what starts that chain.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Thanksgiving Week Is When the Water Gets Shut Off
      </h2>
      <p className="mt-3 text-gray-700">
        Most northern state park systems and a large share of private parks turn
        off site water between October 1 and the first hard freeze, then leave a
        frost-free hydrant or a winterized spigot at the office. If you arrive
        with an empty tank, a capped spigot and a closed office on the Wednesday
        before Thanksgiving, you have a real problem and no good options.
      </p>
      <p className="mt-3 text-gray-700">
        That is the argument for carrying water, and it is an argument for
        twelve gallons rather than forty-six. Twelve gallons covers a night of
        flushing, a sink rinse and coffee. Forty-six gallons covers the same
        things and adds 284 lb you did not need, at the exact moment the trailer
        has the least margin to spare.
      </p>
      <p className="mt-3 text-gray-700">
        The freeze side is worse than the weight side. Water expands about 9
        percent when it freezes, the polyethylene tank flexes enough to survive
        that, and the parts that split are the ones with brass and plastic in
        them: the pump head, the outdoor shower valve, the toilet valve, the
        low-point drain caps and the water heater. A trailer parked in a
        relative&rsquo;s yard for four days with the furnace off and no shore
        power will see those parts at ambient temperature, and the lines running
        through the exterior wall go first.
      </p>
      <p className="mt-3 text-gray-700">
        There is no fill level that makes a trailer freeze-safe. Full is not
        safer than empty. Empty is the only setting where the question does not
        come up, which is why the drain belongs on the departure checklist and
        not on the spring one. The{" "}
        <Link
          href="/guides/how-to-winterize-a-travel-trailer"
          className="text-brand-600 hover:underline"
        >
          winterizing walkthrough
        </Link>{" "}
        covers the full sequence if this is the last trip of the season, and on
        a lot of rigs it is.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Half a Tank Is the One Level Nobody Can Defend
      </h2>
      <p className="mt-3 text-gray-700">
        The half-tank-for-stability advice comes from motorhomes and boats,
        where the tank is wide, the water is deep and the mass is large enough
        to matter. In a 46-gallon trailer tank, half full is 192 lb with roughly
        four feet of fore-and-aft runway. On a hard stop at 0.3 g that water
        arrives at the front wall of the tank as about 58 lb of surge against
        the mounting straps.
      </p>
      <p className="mt-3 text-gray-700">
        Fifty-eight pounds will not upset a 6,494 lb trailer, so this is not a
        stability warning. It is a maintenance one, and it is a decision one.
        Half a tank buys nothing, because weight that sits over the axles
        changes no tongue percentage and weight behind them lowers it. And a
        half-full tank is the level most likely to still be in the trailer when
        the first freeze arrives, because nobody drains a tank that is only half
        full.
      </p>
      <p className="mt-3 text-gray-700">
        The scale changes on a toy hauler. A 100-gallon tank at half is 417 lb
        with six feet of runway, and the surge at 0.3 g is 125 lb against a tank
        hung under a garage floor behind the axles. That is the one configuration
        where fill level is worth a real decision rather than a rule.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        The Road Load: Twelve Gallons and Three Jugs
      </h2>
      <p className="mt-3 text-gray-700">
        Five steps, and the first one is the only one that requires reading
        anything.
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
        One caveat on the drain. If you add antifreeze, use the pink
        propylene-glycol product sold for potable water systems and not the
        automotive coolant, and pour it into the traps and the toilet rather
        than into the fresh tank. A fresh tank full of antifreeze is a tank you
        will be flushing in April. The{" "}
        <Link
          href="/guides/towing-a-trailer-in-winter"
          className="text-brand-600 hover:underline"
        >
          cold weather towing guide
        </Link>{" "}
        covers what else changes below freezing, from tire pressure to propane
        draw.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        What the Truck Actually Feels
      </h2>
      <p className="mt-3 text-gray-700">
        Almost nothing, on the tongue. Forty-nine pounds at most, against a
        payload rating north of 1,400 lb, is a rounding error next to the
        passengers and the hitch head. Anyone who tells you a full tank will
        overload their half-ton is describing a different problem.
      </p>
      <p className="mt-3 text-gray-700">
        The truck feels the 6.7 percent. A 6,494 lb trailer behind a half-ton
        costs about 1 mpg more than a 6,060 lb one on the same route, and the
        fuel bill for a 780-mile round trip is already the largest single line
        on the{" "}
        <Link
          href="/guides/thanksgiving-rv-trip-weight-and-fuel-budget"
          className="text-brand-600 hover:underline"
        >
          Thanksgiving fuel budget
        </Link>
        . The bigger cost is the 434 lb of cargo capacity that is gone before
        the first suitcase goes in.
      </p>
      <p className="mt-3 text-gray-700">
        Run the tongue number on the{" "}
        <Link
          href="/water-weight-calculator"
          className="text-brand-600 hover:underline"
        >
          water weight calculator
        </Link>{" "}
        if the tank position is a guess, and confirm the cargo side on the{" "}
        <Link href="/payload-calculator" className="text-brand-600 hover:underline">
          payload calculator
        </Link>
        . Both take less time than filling the tank.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        The Decision, and What It Costs
      </h2>
      <p className="mt-3 text-gray-700">
        Carry twelve gallons, fill at the other end, drain before you park. Do
        that on every Thanksgiving trip where the destination forecast has a
        night below 28 degrees, which is most of the country north of I-40 in
        the last week of November.
      </p>
      <p className="mt-3 text-gray-700">
        The trade-off is real. Twenty minutes at a frost-free hydrant in a 25
        degree wind, with the family already inside and a hose you have to coil
        wet, is not a pleasant way to start a holiday. Skip it and you get 334
        lb of margin back for the drive home, on the leg where the trailer is
        heaviest and the tongue weight is lowest. That is the trade. The water
        is not worth 384 lb on the way out. The margin is worth 334 lb on the
        way back.
      </p>

      <div className="mt-10 rounded-2xl bg-brand-600 p-8 text-center text-white">
        <h2 className="text-2xl font-bold">Weigh the Tank Before You Fill It</h2>
        <p className="mt-2 text-brand-100">
          Gallons to pounds, pounds to tongue weight, and the cargo capacity it
          comes out of. Three calculators, one trip.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link
            href="/water-weight-calculator"
            className="inline-block rounded-xl bg-white px-6 py-3 text-sm font-bold text-brand-700 shadow-lg transition-all hover:bg-brand-50 active:scale-[0.99]"
          >
            Water Weight Calculator
          </Link>
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

      <AmazonAffiliate categories={["water-system", "tongue-scale"]} />

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
            RV Industry Association: weight labeling standards and cargo carrying
            capacity for towable RVs
          </a>
        </li>
        <li>
          <a
            href="https://www.usgs.gov/special-topics/water-science-school/science/water-density"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            USGS Water Science School: water density and the weight of a gallon
          </a>
        </li>
        <li>
          <a
            href="https://www.weather.gov/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            National Weather Service: freeze warnings and overnight low forecasts
          </a>
        </li>
        <li>
          <a
            href="https://www.nhtsa.gov/equipment/tires"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            NHTSA: vehicle placards, load limits and tire inflation pressure
          </a>
        </li>
        <li>
          <a
            href="https://catscale.com/cat-scale-locator/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            CAT Scale: certified platform locations and the three-pass weighing
            procedure
          </a>
        </li>
        <li>
          <a
            href="https://www.fhwa.dot.gov/policyinformation/travel_monitoring/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            FHWA Office of Highway Policy Information: holiday traffic volume data
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
              href="/guides/thanksgiving-rv-trip-weight-and-fuel-budget"
              className="text-brand-600 hover:underline"
            >
              Thanksgiving Towing: Payload and Fuel Budget
            </Link>
          </li>
          <li>
            <Link
              href="/guides/thanksgiving-trailer-roof-snow-load"
              className="text-brand-600 hover:underline"
            >
              Thanksgiving Towing: Snow on the Roof Is 649 lb of Cargo
            </Link>
          </li>
          <li>
            <Link
              href="/guides/cargo-carrying-capacity-ccc"
              className="text-brand-600 hover:underline"
            >
              Cargo Carrying Capacity Explained
            </Link>
          </li>
          <li>
            <Link
              href="/guides/how-to-winterize-a-travel-trailer"
              className="text-brand-600 hover:underline"
            >
              How to Winterize a Travel Trailer
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
        </ul>
      </div>
    </div>
  );
}
