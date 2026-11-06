import type { Metadata } from "next";
import Link from "next/link";
import { FaqJsonLd, ArticleJsonLd, HowToJsonLd } from "@/components/seo/JsonLd";
import { DEFAULT_OG_IMAGES } from "@/lib/seo/default-og-image";

import AmazonAffiliate from "@/components/AmazonAffiliate";

export const metadata: Metadata = {
  title: "Thanksgiving RV Trip: Can Your Half-Ton Carry Everyone?",
  description:
    "A 1,575-lb payload sticker, 871 lb of tongue weight and two grandparents in the back seat. The Thanksgiving payload math, and what 780 miles of towing costs.",
  keywords: [
    "thanksgiving rv trip",
    "towing a travel trailer for thanksgiving",
    "rv payload with passengers",
    "thanksgiving road trip fuel cost",
    "travel trailer tongue weight loaded",
    "can my half ton tow a travel trailer",
    "thanksgiving camping checklist",
    "rv trip fuel cost calculator",
  ],
  alternates: {
    canonical:
      "https://www.rvtowingcalc.com/guides/thanksgiving-rv-trip-weight-and-fuel-budget",
  },
  openGraph: {
    title: "Thanksgiving RV Trip: Can Your Half-Ton Carry Everyone?",
    description:
      "Thanksgiving is the one trip where the passenger count changes, and payload is the only rating that notices. The math, plus 780 miles of fuel.",
    url: "https://www.rvtowingcalc.com/guides/thanksgiving-rv-trip-weight-and-fuel-budget",
    images: DEFAULT_OG_IMAGES,
  },
};

const FAQS = [
  {
    q: "How much does it cost to tow an RV for Thanksgiving?",
    a: "Take the round trip distance, divide by the mpg you actually get at 65 mph, and multiply by the price at the pump. A 780 mile round trip in a half-ton pulling a 6,700 lb trailer returns about 9.4 mpg, which is 83 gallons and roughly $266 at $3.20 a gallon. That is 34 cents a mile just in fuel. Dropping to 60 mph cuts the bill by about $26 and costs you an hour of driving. Climbing a pass and idling in holiday traffic both come out of the same tank.",
  },
  {
    q: "Can I put the Thanksgiving groceries and coolers in the trailer instead of the truck?",
    a: "Usually yes, and it is often the better choice, but the trailer has its own cargo carrying capacity printed on its certification label and it is smaller than people expect. A 6,700 lb bunkhouse typically allows 1,000 to 1,400 lb of cargo, which sounds generous until you add water, propane accessories and the family's duffels. Put heavy items directly over the axles. A 290 lb cooler and table set placed five feet behind the axles pulls about 91 lb off the tongue, which sounds helpful and quietly costs you 1.4 points of tongue weight percentage.",
  },
  {
    q: "Is it safe to tow a travel trailer over a mountain pass in late November?",
    a: "It can be, on the right day. The limits are traction, not power. Many passes require chains or an approved traction device on towed units above a set weight, and some close to trailers outright during a storm. Check the state DOT road report the morning you leave, not the night before. Mechanically, the descent is the risk: a 6 percent grade pushes a 6,700 lb trailer into the truck, so the controller gain set on flat ground will overheat the drums. Test the manual override at 15 mph before the summit and use tow/haul so the transmission holds a gear.",
  },
  {
    q: "Do I need a weight distribution hitch for a 6,700 lb trailer?",
    a: "Check the receiver first, because that decides it. Most half-ton receivers are rated around 5,000 lb in weight-carrying mode and 11,000 lb with a weight distributing hitch, and towing 6,700 lb on the ball puts you past the first number. Above roughly 500 lb of tongue weight, and certainly at 871 lb, the hitch is not optional equipment. It also moves load back to the front axle, which is what keeps the steering planted when the bed is full of family luggage. Set it up loaded, not empty.",
  },
  {
    q: "What should I check before a 400 mile Thanksgiving tow?",
    a: "Four things in this order: the door jamb payload sticker, the tongue weight with the trailer loaded as it will actually travel, the cold tire pressures at the morning temperature, and the brake controller gain. Add the campground's late arrival instructions, because on the Wednesday before Thanksgiving you will probably pull in after the office closes. Everything else on the pre-trip list can wait until morning. These four decide whether the truck is legal and whether it stops.",
  },
];

const PAYLOAD_TABLE = [
  ["Two of you, no holiday cargo", "971 lb", "460 lb", "1,431 lb", "144 lb left"],
  ["Add two grandparents", "971 lb", "800 lb", "1,771 lb", "196 lb over"],
  ["Same four, cooler and tables in the bed", "971 lb", "1,090 lb", "2,061 lb", "486 lb over"],
  ["Holiday cargo moved into the trailer", "971 lb", "800 lb", "1,771 lb", "196 lb over"],
  ["Grandparents drive, cargo over the axles", "971 lb", "460 lb", "1,431 lb", "144 lb left"],
];

const FUEL_TABLE = [
  ["60 mph", "10.4 mpg", "75.0 gal", "$240", "6 h 30 m"],
  ["65 mph", "9.4 mpg", "83.0 gal", "$266", "6 h 00 m"],
  ["70 mph", "8.5 mpg", "91.8 gal", "$294", "5 h 34 m"],
  ["75 mph", "7.7 mpg", "101.3 gal", "$324", "5 h 12 m"],
];

const CHECK_TABLE = [
  ["Payload sticker, driver door jamb", "1,575 lb", "The only rating passengers touch"],
  ["Tongue plus WDH at the scale", "971 lb", "62 percent of payload before anyone sits down"],
  ["Rear axle weight against RAWR", "3,400 of 4,000 lb", "Bed cargo behind the axle gains 16 percent"],
  ["Brake controller gain", "Set loaded, tested at 15 mph", "A 6 percent descent at 20 degrees"],
  ["Tire pressure, cold", "50 psi at the morning temp", "About 2 percent per 10 degrees"],
  ["Site number and gate code", "Confirm before 4 pm", "The office is shut when you arrive"],
];

const STEPS = [
  {
    name: "Weigh the truck as the family will actually ride in it",
    text: "Load the people, the cooler and the duffels first, then drive to a CAT scale and take the steer and drive axle weights with the trailer attached. The difference between that ticket and the door jamb sticker is your real remaining payload, which is usually smaller than the number people carry in their heads. Do it before the second trip to the grocery store, not after.",
  },
  {
    name: "Decide who rides in what before anyone packs",
    text: "Passengers are the one load you cannot redistribute. Two extra adults at 170 lb each is 340 lb on the rear axle and none of it comes off by moving a cooler. If the arithmetic does not close, the answer is a second vehicle or a lighter trailer, and both decisions are cheaper made at the kitchen table than at a scale on Wednesday afternoon.",
  },
  {
    name: "Put the holiday cargo over the trailer axles",
    text: "A cooler, folding tables and a stack of chairs belong over the axles or slightly ahead of them, not against the rear ramp door. Weight over the axles changes neither tongue weight nor payload. Weight behind the axles lightens the tongue, which feels like a fix and removes the margin that keeps the trailer from wagging at 65 mph.",
  },
  {
    name: "Reset the controller gain on the loaded trailer",
    text: "Gain set for an empty trailer will be too high for a loaded one and too low for a cold morning. On a flat empty lot, set it to the point just below where a full manual application locks the trailer tires, then back off a notch. Do a 15 mph manual stop and feel for even drag before you reach a highway.",
  },
  {
    name: "Call the campground before four o'clock",
    text: "Ask for the site number, the gate code and whether the site is a back-in with a tree on the door side. Arriving at 9 pm on the Wednesday before Thanksgiving means no spotter, no office, and headlights washing out the depth cues you need. A five minute call in the afternoon replaces twenty minutes of guessing in the dark.",
  },
];

export default function ThanksgivingTowingPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <ArticleJsonLd
        title="Thanksgiving Towing Check: Can Your Half-Ton Carry the Family and the Trailer?"
        description="How a Thanksgiving trip changes a half-ton truck's payload math, where holiday cargo should ride in the trailer, and what 780 miles of towing costs in fuel."
        url="https://www.rvtowingcalc.com/guides/thanksgiving-rv-trip-weight-and-fuel-budget"
        datePublished="2026-11-05"
      />
      <FaqJsonLd
        faqs={FAQS}
        baseUrl="https://www.rvtowingcalc.com/guides/thanksgiving-rv-trip-weight-and-fuel-budget"
      />
      <HowToJsonLd
        name="How to load a travel trailer and truck for a Thanksgiving trip"
        description="Weigh the loaded truck at a CAT scale, settle the passenger question before packing, put holiday cargo over the trailer axles, reset the brake controller gain on the loaded trailer, and confirm the campsite before the office closes."
        steps={STEPS}
        totalTime="PT2H"
        url="https://www.rvtowingcalc.com/guides/thanksgiving-rv-trip-weight-and-fuel-budget"
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
        <span className="text-gray-900">Thanksgiving Towing</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
        Thanksgiving Towing Check: Can Your Half-Ton Carry the Family and the
        Trailer?
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        A 2024 Tundra SR5 CrewMax leaves the driveway with 1,575 lb of payload on
        the door jamb sticker. The 6,700 lb bunkhouse behind it hangs 871 lb of
        tongue weight on the ball, and the weight distribution hitch adds another
        100. That is 971 lb spoken for before the first grandparent opens the
        tailgate.
      </p>
      <p className="mt-3 text-lg text-gray-600">
        Two more adults at 170 lb each puts the truck 196 lb over its own GVWR.
        Not over a trailer rating in a brochure. Over the sticker the
        manufacturer put on the door, on a truck whose published trailer rating
        is more than twice the weight of the trailer it is pulling.
      </p>

      <div className="mt-8 rounded-xl bg-brand-50 p-6">
        <h2 className="text-lg font-bold text-brand-800">The Short Answer</h2>
        <p className="mt-2 text-brand-700">
          Thanksgiving is the one trip of the year where the passenger count
          changes, and <strong>payload is the only rating that notices</strong>.
          On a half-ton with 1,575 lb of payload and a 6,700 lb trailer, roughly
          971 lb is gone before anyone climbs in, which leaves room for two
          adults and 144 lb of luggage. Two extra adults breaks it. You cannot
          load your way out of that with a cooler, because moving 290 lb into the
          trailer does not remove a passenger. The fix is a second vehicle, a
          lighter trailer, or a bigger truck, and the cheapest of those three by
          a wide margin is the second vehicle.
        </p>
      </div>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        One Rating Notices When the Family Shows Up
      </h2>
      <p className="mt-3 text-gray-700">
        Towing capacity is a number about pulling. It says nothing about what the
        truck can carry, and a 1,575 lb payload rating is the number that
        actually runs out first. The arithmetic is not complicated, which is
        exactly why it gets skipped: tongue weight plus hitch plus people plus
        cargo has to land under the sticker.
      </p>
      <p className="mt-3 text-gray-700">
        Tongue weight comes from the trailer's loaded gross weight, not its dry
        weight. A 6,700 lb bunkhouse at 13 percent is 871 lb. The hitch is
        another 100 lb, because the head, the bars and the shank are all steel
        bolted to the truck. Both of those arrive on day one and never change,
        while the people and the coolers arrive on the day before Thanksgiving.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">
                Loading case
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Tongue and WDH
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Cab and bed
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Payload used
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Against 1,575 lb
              </th>
            </tr>
          </thead>
          <tbody>
            {PAYLOAD_TABLE.map((row, i) => (
              <tr
                key={row[0]}
                className={
                  row[4].includes("over")
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
                <td
                  className={
                    row[4].includes("over")
                      ? "border px-3 py-2 text-xs font-mono font-bold text-danger-700"
                      : "border px-3 py-2 text-xs font-mono font-bold text-brand-700"
                  }
                >
                  {row[4]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm text-gray-500">
        Half-ton crew cab 4x4, 1,575 lb payload sticker, 6,700 lb trailer at 13
        percent tongue weight, 100 lb weight distributing hitch. Adults counted
        at 170 lb each, base truck cargo at 120 lb for chairs, blocks and tools,
        holiday cargo at 290 lb for a loaded 120 qt cooler, two folding tables
        and a stack of chairs.
      </p>

      <p className="mt-4 text-gray-700">
        Read the last two rows together, because they are the whole argument. In
        row four the cooler moved to the trailer and the truck is still 196 lb
        over. In row five the grandparents moved to their own car and the truck
        is legal with 144 lb to spare. Loading decisions are cheap and seating
        decisions are decisive, and the order people usually try them in is
        exactly backwards.
      </p>
      <p className="mt-3 text-gray-700">
        There is a second axle number hiding in this that the sticker does not
        show. Two hundred ninety pounds in the bed, sitting two feet behind the
        rear axle, is not 290 lb on that axle. On a 145.7 in wheelbase it is
        about 338 lb, and it takes about 48 lb off the front at the same time.
        The rear axle rating on a half-ton crew cab is usually around 4,000 lb,
        so the{" "}
        <Link href="/guides/gawr-explained" className="text-brand-600 hover:underline">
          rear axle
        </Link>{" "}
        can go critical while the payload total still looks acceptable. The{" "}
        <Link href="/payload-calculator" className="text-brand-600 hover:underline">
          payload calculator
        </Link>{" "}
        runs both checks at once.
      </p>
      <p className="mt-3 text-gray-700">
        One myth worth killing before the family arrives. A weight distribution
        hitch does not give you payload back. It moves load from the rear axle to
        the front axle and to the trailer's axles by levering against the
        receiver, which is why it keeps the steering planted and the headlights
        out of the trees. Every pound it moves is still being carried by the
        truck's frame, and the number on the door jamb does not care where on the
        frame it sits. Buy the hitch for stability and front axle grip. Do not
        count it as capacity at the kitchen table.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        The Cooler Goes in the Trailer, and the Tongue Follows It
      </h2>
      <p className="mt-3 text-gray-700">
        Moving cargo out of the bed and into the trailer is the first thing most
        people try, and it is the right instinct applied to the wrong column. It
        does nothing for payload if the weight was already over. What it does do
        is change the tongue, and the change follows one line of arithmetic:
      </p>
      <p className="mt-3 rounded-lg bg-gray-50 px-4 py-3 font-mono text-sm text-gray-800">
        tongue change = weight x distance from axle / axle to coupler
      </p>
      <p className="mt-3 text-gray-700">
        Take a 16 ft bunkhouse with 192 in from the axle centerline to the
        coupler. Set the 290 lb cooler and table stack on the floor five feet
        behind the axles. That is 290 x 60 / 192, or 91 lb off the tongue, which
        sounds like a win until you divide by the trailer's gross weight. Tongue
        percentage falls from 13.0 to 11.6, and 11.6 percent is where a
        single-axle-behind-a-half-ton starts to wander in a crosswind on the
        bridge. The{" "}
        <Link
          href="/guides/trailer-loading-position"
          className="text-brand-600 hover:underline"
        >
          loading position guide
        </Link>{" "}
        covers the full band.
      </p>
      <p className="mt-3 text-gray-700">
        Put the same 290 lb directly over the axles and the tongue does not move
        at all, which is the point. The trailer carries it, the truck does not,
        and the sway margin stays where the manufacturer set it. The limit is the
        trailer's own cargo capacity, printed on its certification label next to
        the GVWR. A 6,700 lb bunkhouse usually allows somewhere between 1,000 and
        1,400 lb, and that has to cover water, the duffels, the cooler and
        anything else the family decides to send along. Empty the fresh tank
        before you load the cooler. Forty gallons is 334 lb and it is the
        easiest 334 lb you will ever leave at home. The{" "}
        <Link
          href="/guides/cargo-carrying-capacity-ccc"
          className="text-brand-600 hover:underline"
        >
          cargo carrying capacity guide
        </Link>{" "}
        explains why that number is smaller than the GVWR minus the dry weight.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        780 Miles at 9 MPG: What Thanksgiving Week Actually Costs
      </h2>
      <p className="mt-3 text-gray-700">
        Thanksgiving is the longest tow most families do all year, usually 350 to
        450 miles each way to a house that has a driveway but no hookups. Fuel is
        the one line item you can still change on the morning you leave, and it
        is not the price at the pump. It is the speed you hold.
      </p>
      <p className="mt-3 text-gray-700">
        A travel trailer is a box 8 ft wide and close to 11 ft tall, which is
        about 88 sq ft of frontal area. Aerodynamic drag rises with the square of
        speed, so the last 10 mph costs far more than the first 10. Below is a
        780 mile round trip behind the same 6,700 lb trailer, priced at $3.20 a
        gallon.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">
                Cruise speed
              </th>
              <th className="border px-3 py-2 text-left font-semibold">MPG</th>
              <th className="border px-3 py-2 text-left font-semibold">
                Gallons, 780 mi
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Fuel bill
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Drive time, 390 mi
              </th>
            </tr>
          </thead>
          <tbody>
            {FUEL_TABLE.map((row, i) => (
              <tr
                key={row[0]}
                className={
                  row[0] === "65 mph" ? "bg-brand-50" : i % 2 === 1 ? "bg-gray-50" : ""
                }
              >
                <td className="border px-3 py-2 text-xs font-mono font-semibold">
                  {row[0]}
                </td>
                <td
                  className={
                    row[0] === "65 mph"
                      ? "border px-3 py-2 text-xs font-mono font-bold text-brand-700"
                      : "border px-3 py-2 text-xs font-mono"
                  }
                >
                  {row[1]}
                </td>
                <td className="border px-3 py-2 text-xs font-mono">{row[2]}</td>
                <td className="border px-3 py-2 text-xs font-mono">{row[3]}</td>
                <td className="border px-3 py-2 text-xs font-mono">{row[4]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm text-gray-500">
        Fuel priced at $3.20 a gallon, which is the one input worth replacing
        with the number on the sign where you fill up. MPG figures assume a
        half-ton gas truck, level highway, no headwind and the trailer loaded as
        described above. A headwind at 70 mph is worth roughly 2 mpg on its own.
      </p>

      <p className="mt-4 text-gray-700">
        The table says something honest and slightly annoying: running 60 instead
        of 70 saves $54 across the round trip and costs you 96 minutes. Most
        people take the speed. The number worth acting on is the 75 mph row,
        because it is both the most expensive and the one where a 6,700 lb
        trailer behind a half-ton is least stable in a crosswind.         Pick 65, and
        spend the savings on the fuel you will burn idling through the backup at
        the interchange outside the city everyone is driving to. The{" "}
        <Link href="/fuel-cost-calculator" className="text-brand-600 hover:underline">
          fuel cost calculator
        </Link>{" "}
        takes your own distance, mpg and price rather than these four columns.
      </p>
      <p className="mt-3 text-gray-700">
        Two Thanksgiving-specific fuel habits. Fill the night before at a station
        you know has pull-through lanes, because the interstate exits on the
        Wednesday before Thanksgiving are the worst possible place to discover
        that the only diesel pump is behind a car that will not move. And top off
        before the last climb rather than in the resort town at the top, where
        the price carries a captive-audience premium.
      </p>
      <p className="mt-3 text-gray-700">
        Range matters as much as price on this run. A half-ton with a 36 gallon
        tank returning 9.4 mpg holds 338 miles of towing, and 390 miles each way
        does not fit in one fill. Plan the stop at 270 miles, which leaves you
        arriving at the pump with a quarter tank instead of coasting in on
        fumes. On a normal week that is easy. On this Wednesday the station you
        counted on may have four trucks stacked at the only diesel island, so
        pick the second choice in advance rather than at 3/8 of a tank in the
        rain.
      </p>
      <p className="mt-3 text-gray-700">
        Cold air takes another bite. Denser air means more drag and a richer
        mixture until the engine warms, and a rig that returns 9.4 mpg in
        September often returns 8.5 in late November. The{" "}
        <Link
          href="/guides/towing-a-travel-trailer-in-winter"
          className="text-brand-600 hover:underline"
        >
          winter towing guide
        </Link>{" "}
        has the temperature math, including what it does to your tire pressures
        on the morning you leave.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Leaving at Five, Arriving at Ten, Backing In Without a Spotter
      </h2>
      <p className="mt-3 text-gray-700">
        Almost every Thanksgiving tow ends the same way: you leave after work on
        Wednesday, the traffic eats the daylight you planned on, and you reach
        the campground after the office has closed. That is not a disaster, but
        it changes what you need to know before you pull in.
      </p>
      <p className="mt-3 text-gray-700">
        Call before four o'clock and ask for three things: the site number, the
        gate code, and whether the site is a back-in with an obstacle on the door
        side. Most parks tape a late arrival board to the office door, and the
        site number on it is worth more than the map on your phone. Ask about the
        turn into the loop as well. A 21 ft trailer needs a wide swing, and the
        interior roads in older parks were laid out for 24 ft motorhomes with a
        different turning geometry.
      </p>
      <p className="mt-3 text-gray-700">
        Backing in the dark has one specific failure mode: your own headlights
        reflect off the trailer's front wall and destroy your depth perception in
        the mirror. Turn the truck's lights off, use the trailer's reverse lamps
        and a flashlight held low by whoever is spotting, and put the spotter on
        the driver's side rear quarter where you can see them. Never behind the
        trailer. If nobody can spot, get out and walk the site twice before you
        commit to an angle.
      </p>
      <p className="mt-3 text-gray-700">
        Level matters more than it looks in the dark. A site that reads flat at
        dusk can be out by four inches across the trailer's width, and a
        two-door refrigerator wants to be within about 3 degrees. Chock before
        you unhitch, because a trailer that rolls off a tongue jack on a slope
        goes down fast and there is nothing to stop it. Nine out of ten of these
        trips also involve the first hard freeze of the season at the campsite,
        which is a separate problem with its own numbers.
      </p>
      <p className="mt-3 text-gray-700">
        The drive home is heavier than the drive out, and nobody weighs it. Four
        days of leftovers, gifts that were handed across the table, a case of
        something from a relative's garage, and a black tank with four days in
        it. The truck gains a hundred pounds of that and shrugs. The trailer
        gains the rest, and thirty gallons of waste in a tank behind the axles
        pulls tongue weight down in exactly the way the cooler did, only now it
        happens with the trailer's cargo capacity already spoken for. Dump before
        you hook up, not at the station off the interstate with a line behind
        you.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        The Five-Step Thanksgiving Departure
      </h2>
      <p className="mt-3 text-gray-700">
        Two hours of work, most of it at a scale and a kitchen table, replaces
        the guessing that usually happens in a driveway at dusk.
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
        The six numbers worth writing on an index card and taping inside the
        glovebox door:
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">
                What to check
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                The number
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Why this week
              </th>
            </tr>
          </thead>
          <tbody>
            {CHECK_TABLE.map((row, i) => (
              <tr key={row[0]} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                <td className="border px-3 py-2 text-xs font-semibold">
                  {row[0]}
                </td>
                <td className="border px-3 py-2 text-xs font-mono">{row[1]}</td>
                <td className="border px-3 py-2 text-xs">{row[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-4 text-gray-700">
        One more thing that has nothing to do with the truck. A cooler riding in
        a trailer in 25 degree weather is a refrigerator, which is fine, and a
        cooler riding in a heated cab is not. The USDA guidance is to keep
        perishables at 40 degrees or below, so the cooler belongs in the trailer
        or the bed with ice, not next to the rear seat heater. That is also where
        it belongs for payload reasons, which is a rare case of the two answers
        agreeing.
      </p>

      <div className="mt-10 rounded-2xl bg-brand-600 p-8 text-center text-white">
        <h2 className="text-2xl font-bold">Run the Numbers Before You Load the Cooler</h2>
        <p className="mt-2 text-brand-100">
          Payload, tongue weight and trailer capacity are three separate limits.
          Check all three against your own sticker, free and independent.
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

      <AmazonAffiliate categories={["tongue-scale", "wdh", "tire-pressure"]} />

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Sources &amp; References
      </h2>
      <ul className="mt-3 space-y-1 text-sm text-gray-600">
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
            href="https://www.rvia.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            RV Industry Association: weight labeling and cargo carrying capacity
            standards for towable RVs
          </a>
        </li>
        <li>
          <a
            href="https://www.sae.org/standards/content/j2807_202002/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            SAE J2807: the towing capacity test procedure manufacturers certify
            against
          </a>
        </li>
        <li>
          <a
            href="https://www.nhtsa.gov/equipment/tires"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            NHTSA: tire load limits, inflation and the vehicle placard
          </a>
        </li>
        <li>
          <a
            href="https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/refrigeration"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            USDA Food Safety and Inspection Service: holding perishables at 40
            degrees or below
          </a>
        </li>
      </ul>

      <div className="mt-10 rounded-xl border border-gray-200 bg-gray-50 p-6">
        <h3 className="font-bold text-gray-900">Related Guides</h3>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          <li>
            <Link
              href="/guides/payload-capacity"
              className="text-brand-600 hover:underline"
            >
              Payload Capacity: What the Sticker Really Says
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
              href="/guides/travel-trailer-pre-trip-inspection"
              className="text-brand-600 hover:underline"
            >
              Travel Trailer Pre-Trip Inspection
            </Link>
          </li>
          <li>
            <Link
              href="/guides/towing-a-travel-trailer-in-winter"
              className="text-brand-600 hover:underline"
            >
              Towing a Travel Trailer in Winter
            </Link>
          </li>
          <li>
            <Link
              href="/guides/mountain-towing-transmission-gears"
              className="text-brand-600 hover:underline"
            >
              Mountain Towing: Gears and Transmission Temperature
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
