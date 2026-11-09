import type { Metadata } from "next";
import Link from "next/link";
import { FaqJsonLd, ArticleJsonLd, HowToJsonLd } from "@/components/seo/JsonLd";
import { DEFAULT_OG_IMAGES } from "@/lib/seo/default-og-image";

import AmazonAffiliate from "@/components/AmazonAffiliate";

export const metadata: Metadata = {
  title: "Thanksgiving Towing: Snow on the Roof Is 649 lb of Cargo",
  description:
    "Three inches of wet snow on a 26 ft roof is 649 lb, and it leaves 17 lb of a 7,600 lb trailer. Six inches of average snow weighs the same. The full math.",
  keywords: [
    "thanksgiving towing",
    "snow on trailer roof",
    "trailer roof snow load",
    "how much does snow weigh per square foot",
    "travel trailer cargo carrying capacity",
    "towing in snow",
    "winter rv towing",
  ],
  alternates: {
    canonical:
      "https://www.rvtowingcalc.com/guides/thanksgiving-trailer-roof-snow-load",
  },
  openGraph: {
    title: "Thanksgiving Towing: Snow on the Roof Is 649 lb of Cargo",
    description:
      "The load that shows up after you finish packing. Three inches of wet snow on a 208 sq ft roof, and the 316 lb of tire capacity it quietly takes with it.",
    url: "https://www.rvtowingcalc.com/guides/thanksgiving-trailer-roof-snow-load",
    images: DEFAULT_OG_IMAGES,
  },
};

const FAQS = [
  {
    q: "How much does snow weigh per square foot on a camper roof?",
    a: "It depends on the water in it. One inch of average snow at a 10 to 1 snow-to-liquid ratio weighs about 0.52 lb per square foot, because an inch of water over a square foot is 5.2 lb and that snow is a tenth water. Wet snow at 5 to 1 is 1.04 lb, dry powder at 15 to 1 is 0.35 lb, and an inch of solid ice is 4.77 lb. On a 208 sq ft roof, those four conditions run from 73 lb to 992 lb.",
  },
  {
    q: "Does snow on the roof count against my trailer's cargo carrying capacity?",
    a: "Yes. GVWR covers everything the trailer carries, including water, propane, gear and anything sitting on the membrane. Cargo carrying capacity is GVWR minus the shipping weight, and once you subtract 40 gallons of fresh water at 334 lb and 40 lb of propane, the number on the yellow sticker is already spoken for. Snow is the last thing added and the only thing nobody writes down.",
  },
  {
    q: "Can I tow with snow on the trailer roof?",
    a: "You can, and the stickers will often let you. That is the problem. On a 26 ft trailer loaded to 6,934 lb, three inches of wet snow leaves 17 lb under a 7,600 lb GVWR and 284 lb under the axle rating, while the four tires at 45 psi in 20 degree air are 316 lb past their capacity. The failure is not the rating you can read on the door jamb. It is the one you set in July.",
  },
  {
    q: "How do I clear snow off a travel trailer roof without damaging it?",
    a: "Use a foam-head roof rake from a ladder or from the ground, and stay off the membrane. The decking under an EPDM or TPO roof is a quarter inch thick and spans rafters on 16 in centers, so it carries a snow load across the whole span and a boot heel on one point. No metal shovel, no ice chopper, and nothing dragged across the membrane, because a gouge in the sheet is a leak you will find in April.",
  },
  {
    q: "Does snow on the roof change tongue weight?",
    a: "Only if it is not evenly spread. A uniform load sitting over the axle line moves the coupler weight by roughly nothing either way. Leave the front half of a 26 ft roof loaded while you clear the rest and 324 lb sits about 9 ft ahead of the axle center on a 19.5 ft lever, which adds roughly 150 lb to the coupler and takes it back off the trailer axles. Half-cleared is the one condition worth avoiding.",
  },
];

const SNOW_TABLE = [
  ["1 in dry snow, 15 to 1", "0.35 lb", "73 lb", "7,007 lb", "593 lb"],
  ["1 in average snow, 10 to 1", "0.52 lb", "108 lb", "7,042 lb", "558 lb"],
  ["1 in wet snow, 5 to 1", "1.04 lb", "216 lb", "7,150 lb", "450 lb"],
  ["3 in average snow", "1.56 lb", "324 lb", "7,258 lb", "342 lb"],
  ["3 in wet or 6 in average", "3.12 lb", "649 lb", "7,583 lb", "17 lb"],
  ["1 in of solid ice", "4.77 lb", "992 lb", "7,926 lb", "326 lb over"],
];

const LEDGER_TABLE = [
  ["Dry weight as shipped", "5,860 lb", "5,860 lb", "1,740 lb"],
  ["Fresh water, 40 gal at 8.34 lb", "334 lb", "6,194 lb", "1,406 lb"],
  ["Propane, 40 lb of gas in two cylinders", "40 lb", "6,234 lb", "1,366 lb"],
  ["Clothes and bedding, four people, four days", "240 lb", "6,474 lb", "1,126 lb"],
  ["Food, drinks, cooler", "220 lb", "6,694 lb", "906 lb"],
  ["Chairs, folding table, six bundles of wood", "240 lb", "6,934 lb", "666 lb"],
  ["Three inches of wet snow on the roof", "649 lb", "7,583 lb", "17 lb"],
];

const LIMIT_TABLE = [
  ["Trailer GVWR", "7,600 lb", "7,583 lb", "17 lb under"],
  ["Axles, two rated 3,500 lb", "7,000 lb", "6,716 lb", "284 lb under"],
  ["Tires at 50 psi, 70\u00B0F, as placarded", "7,040 lb", "6,716 lb", "324 lb under"],
  ["The same tires at 45 psi, 20\u00B0F", "6,400 lb", "6,716 lb", "316 lb over"],
];

const STEPS = [
  {
    name: "Measure the roof before you measure the snow",
    text: "Length times width, then subtract the penetrations. A 26 ft box is 208 sq ft of membrane, and the air conditioner, two roof vents and a skylight take about 8 sq ft out of it. At 3.12 lb per square foot that missing area is worth 25 lb, which does not change the decision but does tell you the number is yours rather than mine.",
  },
  {
    name: "Stay off the membrane",
    text: "The decking is a quarter inch of lauan spanning rafters on 16 in centers. It is designed to carry a distributed snow load across that span, not a 190 lb person concentrated on a boot heel between two rafters. Work from a step ladder at the side of the trailer with a long-handled foam-head rake, and keep the ladder off the skirt metal.",
  },
  {
    name: "Clear the whole roof, not the part you can reach",
    text: "A uniform roof load moves the coupler weight by almost nothing. Half a roof does the opposite. Three hundred pounds left on the front nine feet of a 26 ft trailer sits ahead of the axle center on a 19.5 ft lever and adds around 150 lb of tongue weight, which is a change no sticker predicted and no scale will explain to you at the campground.",
  },
  {
    name: "Start at the front, and push it off the curb side",
    text: "The front of the roof is where snow slides forward when you brake, so that is the end that has to be bare. Push each strip off the curb side rather than over the truck, and keep the rake head flat so the aluminum back of it never touches the sheet. Ice that has bonded to the membrane comes off with warm water, not with an edge.",
  },
  {
    name: "Clear the plastic and the fabric too",
    text: "The AC shroud, the vent lids, the skylight and the antenna are the parts that crack, and a wet awning rolled up and frozen solid is weight hanging on brackets designed for a fabric tube. Re-check cold tire pressures and the tongue weight once the roof is bare, because the last 649 lb came off the top and the four tires are the limit that was already tight.",
  },
];

export default function ThanksgivingTrailerRoofSnowLoadPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <ArticleJsonLd
        title="Thanksgiving Towing: Snow on the Roof Is 649 lb of Cargo"
        description="How three inches of wet snow on a 26 ft trailer roof becomes 649 lb against a 1,740 lb cargo rating, why six inches of average snow weighs the same, and which limit fails first."
        url="https://www.rvtowingcalc.com/guides/thanksgiving-trailer-roof-snow-load"
        datePublished="2026-11-09"
      />
      <FaqJsonLd
        faqs={FAQS}
        baseUrl="https://www.rvtowingcalc.com/guides/thanksgiving-trailer-roof-snow-load"
      />
      <HowToJsonLd
        name="How to clear snow from a travel trailer roof before towing"
        description="Measure the roof area, stay off the membrane, clear the entire roof rather than part of it, work from the front and push snow off the curb side, then clear the plastic and fabric and re-check cold pressures and tongue weight."
        steps={STEPS}
        totalTime="PT45M"
        url="https://www.rvtowingcalc.com/guides/thanksgiving-trailer-roof-snow-load"
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
        <span className="text-gray-900">Trailer Roof Snow Load</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
        Thanksgiving Towing: Snow on the Roof Is 649 lb of Cargo
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        Three inches of wet snow fell on the 26 ft bunkhouse while it sat in a
        relative&rsquo;s field from Wednesday to Sunday. The trailer had left home
        at 6,934 lb, which is 666 lb under its 7,600 lb GVWR and a comfortable
        margin by anyone&rsquo;s standard. It pulled onto the interstate at 7,583
        lb with nothing added inside.
      </p>
      <p className="mt-3 text-lg text-gray-600">
        The 649 lb difference was on the roof, above the awning, in plain sight,
        and nobody looked up.
      </p>

      <div className="mt-8 rounded-xl bg-brand-50 p-6">
        <h2 className="text-lg font-bold text-brand-800">The Short Answer</h2>
        <p className="mt-2 text-brand-700">
          Snow is water with air in it, and an inch of water over a square foot
          weighs 5.2 lb. Wet snow at a 5 to 1 ratio is one fifth water, so it
          weighs <strong>1.04 lb per square foot per inch</strong>, and a 26 ft
          roof is 208 sq ft. Three inches is <strong>649 lb</strong>. Six inches
          of average 10 to 1 snow is the same 649 lb, and one inch of solid ice
          is 992. Against a trailer that is already carrying 6,934 lb, that leaves{" "}
          <strong>17 lb</strong> of a 7,600 lb GVWR, 284 lb under the axle
          rating, and 316 lb past what four tires can carry at 45 psi in 20
          degree air. Every sticker still reads legal.
        </p>
      </div>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        One Inch of Snow Has a Weight, and It Is Not a Guess
      </h2>
      <p className="mt-3 text-gray-700">
        The conversion is short enough to do in your head once you have seen it.
        A square foot covered one inch deep is one twelfth of a cubic foot, and
        water runs 62.4 lb per cubic foot, so an inch of water over that square
        foot is 5.2 lb. Everything else is the snow-to-liquid ratio, which
        forecasters publish and most drivers never look up.
      </p>
      <p className="mt-3 text-gray-700">
        Average snow is 10 to 1, meaning ten inches of snow holds one inch of
        water, which puts it at 0.52 lb per square foot per inch of depth. Dry
        powder in cold air runs 15 to 1 or lighter, down around 0.35. The wet
        snow that falls at 32 degrees and packs into a slushy mess on the roof is
        5 to 1, and that is the one that matters, because it is twice the weight
        of the snow most people picture when they decide the roof looks fine.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">
                What is on the roof
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Per sq ft
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                On 208 sq ft
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Trailer total
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Left of 7,600 lb
              </th>
            </tr>
          </thead>
          <tbody>
            {SNOW_TABLE.map((row, i) => (
              <tr
                key={row[0]}
                className={row[4].includes("over") ? "bg-danger-50" : i % 2 === 1 ? "bg-gray-50" : ""}
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
        Roof measured at 26 ft by 8 ft, 208 sq ft before subtracting about 8 sq
        ft of vents, skylight and air conditioner. Trailer starts at 6,934 lb
        loaded for the trip. Ice at 57.2 lb per cubic foot, water at 62.4.
        Snow-to-liquid ratios of 15 to 1, 10 to 1 and 5 to 1.
      </p>

      <p className="mt-4 text-gray-700">
        Two rows in that table are worth reading twice. Three inches of wet snow
        and six inches of average snow both land on 649 lb, which is the kind of
        coincidence that gets people in trouble, because the six inch roof looks
        like twice the problem and the three inch one looks like nothing. Then
        the last row: an inch of ice is 992 lb, and ice is what a roof becomes
        after a day of melt and a night at 18 degrees. It is also the state you
        cannot rake off, which is why the decision has to be made before the
        freeze and not after it.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        The Roof Spends Capacity You Already Used
      </h2>
      <p className="mt-3 text-gray-700">
        Every towable sold in the US carries a yellow label listing cargo
        carrying capacity, and 1,740 lb on a 26 ft bunkhouse reads like a lot
        until you write down what fills it. Water and propane go in first because
        they are systems, not luggage, and both are counted against the same
        number.
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
                Left of 7,600 lb
              </th>
            </tr>
          </thead>
          <tbody>
            {LEDGER_TABLE.map((row, i) => (
              <tr
                key={row[0]}
                className={row[3] === "17 lb" ? "bg-danger-50" : i % 2 === 1 ? "bg-gray-50" : ""}
              >
                <td className="border px-3 py-2 text-xs font-semibold">
                  {row[0]}
                </td>
                <td className="border px-3 py-2 text-xs font-mono">{row[1]}</td>
                <td className="border px-3 py-2 text-xs font-mono">{row[2]}</td>
                <td
                  className={
                    row[3] === "17 lb"
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
        Trailer GVWR 7,600 lb, shipping weight 5,860 lb, cargo carrying capacity
        1,740 lb. Water at 40 gal and 8.34 lb per gallon. Tongue weight at 12.5
        percent of 6,934 lb is 867 lb, which leaves 6,067 lb on the axles before
        any snow.
      </p>

      <p className="mt-4 text-gray-700">
        Seventeen pounds is not a margin. It is a rounding error between a full
        fresh tank and a half one, or between six bundles of wood and seven. The
        family in this example did nothing wrong. They packed for four days, they
        carried water because the campground spigot would be shut off, and they
        left with more headroom than most rigs on the road. Then it snowed.
      </p>
      <p className="mt-3 text-gray-700">
        That is the part worth internalizing. Roof load is not a packing
        decision, so it never enters the budget conversation that happens in the
        driveway. The{" "}
        <Link
          href="/guides/cargo-carrying-capacity-ccc"
          className="text-brand-600 hover:underline"
        >
          cargo carrying capacity guide
        </Link>{" "}
        and the{" "}
        <Link href="/ccc-calculator" className="text-brand-600 hover:underline">
          CCC calculator
        </Link>{" "}
        both work from what you loaded, and neither of them asks what the weather
        did while the trailer sat.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        The Sticker Says Legal, the Tires Say No
      </h2>
      <p className="mt-3 text-gray-700">
        Run the same 649 lb against every limit on the rig and the order of
        failure stops being intuitive. GVWR has 17 lb left. The two 3,500 lb
        axles have 284. The tires are already past their capacity, and they were
        past it before the snow fell, because tire capacity is rated at the
        pressure you set in July.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">
                What the limit is
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Rated
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Actually carrying
              </th>
              <th className="border px-3 py-2 text-left font-semibold">Margin</th>
            </tr>
          </thead>
          <tbody>
            {LIMIT_TABLE.map((row, i) => (
              <tr
                key={row[0]}
                className={row[3].includes("over") ? "bg-danger-50" : i % 2 === 1 ? "bg-gray-50" : ""}
              >
                <td className="border px-3 py-2 text-xs font-semibold">
                  {row[0]}
                </td>
                <td className="border px-3 py-2 text-xs font-mono">{row[1]}</td>
                <td className="border px-3 py-2 text-xs font-mono">{row[2]}</td>
                <td
                  className={
                    row[3].includes("over")
                      ? "border px-3 py-2 text-xs font-bold text-danger-700"
                      : "border px-3 py-2 text-xs font-bold text-brand-700"
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
        Four ST205/75R14 load range C tires at 1,760 lb each at 50 psi. Pressure
        set at 70&deg;F loses 2 percent for every 10&deg;F of drop, so 50 psi
        becomes 45 at 20&deg;F, about 6,400 lb of combined capacity. Axle load is
        trailer weight minus the 867 lb tongue.
      </p>

      <p className="mt-4 text-gray-700">
        The fourth row of that table is the one that catches people at the
        scale. The placard on the trailer was written at 70 degrees with 50 psi
        in the tires, and it is correct on the day it is printed. In the third
        week of November the same four tires are holding 45 psi, and the rating
        falls with the pressure, not with the temperature. The{" "}
        <Link
          href="/guides/travel-trailer-tire-safety"
          className="text-brand-600 hover:underline"
        >
          trailer tire guide
        </Link>{" "}
        covers the pressure tables, and a trailer TPMS is the only way to see
        what those four tires are doing while the rig is moving. The reading that
        decides the trip is still the one taken cold in the driveway, before the
        first mile warms them. The{" "}
        <Link
          href="/guides/towing-a-trailer-in-winter"
          className="text-brand-600 hover:underline"
        >
          cold weather towing guide
        </Link>{" "}
        covers what the rest of the rig does below freezing.
      </p>
      <p className="mt-3 text-gray-700">
        There is a geometry penalty too. A travel trailer&rsquo;s center of
        gravity sits around 42 in off the ground. Put 649 lb at roof height, call
        it 96 in, and the combined center of gravity moves up by{" "}
        <strong>649 &times; 54 &divide; 7,583</strong>, which is 4.6 in. Nothing
        in that calculation appears on a label, and 4.6 in is the difference
        between a rig that answers a crosswind and one that leans into it.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        What Comes Off the Roof at 60 MPH
      </h2>
      <p className="mt-3 text-gray-700">
        Snow that is not cleared does not stay put. It bonds into a slab on a
        smooth membrane, and the first hard brake on a downhill off-ramp sends it
        forward in one piece, over the front cap, and either onto the cab of your
        truck or into the windshield of whoever is following at 65. Ice is worse,
        because it leaves in plates.
      </p>
      <p className="mt-3 text-gray-700">
        Several states give police grounds to stop a vehicle carrying snow or ice
        that could come off at speed, Pennsylvania and New Jersey among them, and
        the enforcement question is the least of the reasons to clear it. A
        trailer that sheds a sheet of ice at highway speed is a hazard to every
        vehicle behind it, and the driver never sees it happen.
      </p>
      <p className="mt-3 text-gray-700">
        Thanksgiving week stacks the odds. Wednesday afternoon is the heaviest
        travel window of the fall, the sun is down before 5 pm across most of the
        country, deer are moving at dusk in the middle of their peak collision
        month, and the last fifty miles are usually two-lane road with a
        driveway at the end of it. A rig that is 17 lb under its GVWR and 316 lb
        over its tire capacity does not need a fourth problem, and the one thing
        you can remove in twenty minutes is the 649 lb on the roof.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Clearing the Roof Without Putting a Foot Through It
      </h2>
      <p className="mt-3 text-gray-700">
        Five steps, and the second one is the one that costs money when it is
        skipped.
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
        The rake costs less than a tank of fuel and lives in the pass-through
        year round. If the roof has been through a freeze and thaw cycle, walk
        the seams and the penetrations afterward with your hands, because
        meltwater finds every gap in the sealant and refreezes in it. The{" "}
        <Link
          href="/guides/rv-roof-sealant-inspection-and-resealing"
          className="text-brand-600 hover:underline"
        >
          roof sealant guide
        </Link>{" "}
        has the inspection order, and the{" "}
        <Link href="/payload-calculator" className="text-brand-600 hover:underline">
          payload calculator
        </Link>{" "}
        tells you what the truck side of the trip looks like once the trailer has
        a real number instead of an estimate.
      </p>
      <p className="mt-3 text-gray-700">
        For a large share of owners this is also the last trip of the season,
        which puts the drain and the antifreeze on the same weekend as the drive
        home. The first hard freeze lands within a couple of weeks of
        Thanksgiving across most of the country, and a trailer that goes back
        into the yard with water still in the lines is a trailer with a cracked
        fitting by December. Do the drain while the rake is still out, not after
        the first freeze makes it a repair.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Make the Call Before the Forecast Has a Number In It
      </h2>
      <p className="mt-3 text-gray-700">
        The recommendation is to clear the roof completely before every departure
        between November and March, including the short runs, and to treat a
        loaded trailer plus any accumulation as a revision of the whole weight
        budget rather than an inconvenience. If the roof cannot be cleared,
        the trailer stays where it is and the trip happens in the truck.
      </p>
      <p className="mt-3 text-gray-700">
        The trade-off is honest. Forty minutes on a ladder in 20 degree air, a
        soaked jacket, and a rake you have to store somewhere is a real cost for
        a load that most rigs will survive. What you are buying with it is the
        only limit on the rig that had no margin to begin with, and a roof that
        is bare when the first crosswind finds the side of a 26 ft box. Check the
        numbers on the{" "}
        <Link href="/gvwr-calculator" className="text-brand-600 hover:underline">
          GVWR calculator
        </Link>{" "}
        before the weather arrives, not in the driveway with the engine running.
      </p>

      <div className="mt-10 rounded-2xl bg-brand-600 p-8 text-center text-white">
        <h2 className="text-2xl font-bold">Run the Load With the Roof In It</h2>
        <p className="mt-2 text-brand-100">
          Water, propane, gear and whatever fell on the membrane all come out of
          the same number. Put yours in and see what is actually left.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link
            href="/ccc-calculator"
            className="inline-block rounded-xl bg-white px-6 py-3 text-sm font-bold text-brand-700 shadow-lg transition-all hover:bg-brand-50 active:scale-[0.99]"
          >
            CCC Calculator
          </Link>
          <Link
            href="/gvwr-calculator"
            className="inline-block rounded-xl bg-white px-6 py-3 text-sm font-bold text-brand-700 shadow-lg transition-all hover:bg-brand-50 active:scale-[0.99]"
          >
            GVWR Calculator
          </Link>
          <Link
            href="/payload-calculator"
            className="inline-block rounded-xl bg-white px-6 py-3 text-sm font-bold text-brand-700 shadow-lg transition-all hover:bg-brand-50 active:scale-[0.99]"
          >
            Payload Calculator
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

      <AmazonAffiliate categories={["tpms", "tongue-scale", "water-system"]} />

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Sources &amp; References
      </h2>
      <ul className="mt-3 space-y-1 text-sm text-gray-600">
        <li>
          <a
            href="https://www.weather.gov/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            National Weather Service: snow-to-liquid ratios and snow water
            equivalent reporting
          </a>
        </li>
        <li>
          <a
            href="https://www.nhtsa.gov/equipment/tires"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            NHTSA: tire load limits, cold inflation pressure and the vehicle
            placard
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
            href="https://www.penndot.pa.gov/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            PennDOT: snow and ice removal requirements for vehicles operating on
            public roads
          </a>
        </li>
        <li>
          <a
            href="https://www.fhwa.dot.gov/policyinformation/travel_monitoring/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            FHWA Office of Highway Policy Information: holiday traffic volume
            data
          </a>
        </li>
      </ul>

      <div className="mt-10 rounded-xl border border-gray-200 bg-gray-50 p-6">
        <h3 className="font-bold text-gray-900">Related Guides</h3>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
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
              href="/guides/thanksgiving-rv-trip-weight-and-fuel-budget"
              className="text-brand-600 hover:underline"
            >
              Thanksgiving Towing: Payload and Fuel Budget
            </Link>
          </li>
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
              href="/guides/towing-a-trailer-in-winter"
              className="text-brand-600 hover:underline"
            >
              Towing a Travel Trailer in Winter
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
              href="/guides/rv-roof-sealant-inspection-and-resealing"
              className="text-brand-600 hover:underline"
            >
              RV Roof Sealant Inspection and Resealing
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
