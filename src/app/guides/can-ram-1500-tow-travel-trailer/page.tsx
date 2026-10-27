import type { Metadata } from "next";
import Link from "next/link";
import { FaqJsonLd, ArticleJsonLd, HowToJsonLd } from "@/components/seo/JsonLd";
import { DEFAULT_OG_IMAGES } from "@/lib/seo/default-og-image";

import AmazonAffiliate from "@/components/AmazonAffiliate";

export const metadata: Metadata = {
  title: "Can a Ram 1500 Tow a Travel Trailer? The Axle Ratio Decides",
  description:
    "A 2026 Ram 1500 tows 11,610 lb on the 3.92 axle and 8,100 lb on the 3.55. What the axle ratio, trim payload, and 1,100 lb receiver cap mean for a trailer.",
  keywords: [
    "can a ram 1500 tow a travel trailer",
    "ram 1500 towing capacity",
    "ram 1500 payload",
    "ram 1500 3.92 axle towing",
    "ram 1500 tongue weight",
    "ram 1500 hurricane towing",
    "ram 1500 weight distribution hitch",
    "half ton travel trailer",
  ],
  alternates: {
    canonical:
      "https://www.rvtowingcalc.com/guides/can-ram-1500-tow-travel-trailer",
  },
  openGraph: {
    title: "Can a Ram 1500 Tow a Travel Trailer? The Axle Ratio Decides",
    description:
      "The same 2026 Ram 1500 Crew Cab is rated 8,100 lb on the 3.55 axle and 11,200 lb on the 3.92. What the chart hides about payload, trim, and the receiver cap.",
    url: "https://www.rvtowingcalc.com/guides/can-ram-1500-tow-travel-trailer",
    images: DEFAULT_OG_IMAGES,
  },
};

const FAQS = [
  {
    q: "Can a Ram 1500 tow a travel trailer?",
    a: "Yes, and a 6,000 to 7,000 lb travel trailer is the sensible target. Ram rates the 2026 lineup as high as 11,610 lb, but that row is a two-wheel-drive Tradesman Quad Cab with the 3.92 axle. Put the same engine in a Crew Cab 4x4 and the chart says 11,200 lb. Payload, not the trailer rating, is what usually ends the conversation on this truck.",
  },
  {
    q: "How much can a 2026 Ram 1500 tow?",
    a: "The published maximum is 11,610 lb with the 3.0L Hurricane standard output, the 3.92 axle, and a Tradesman Quad Cab 4x2. The 5.7L HEMI peaks at 11,320 lb in a Crew Cab 4x2, and the Hurricane High Output tops out at 10,000 lb in a Limited Crew Cab with the 6-foot-4 bed. The V6 is rated 8,130 lb. Every one of those figures belongs to a specific row, and the axle ratio moves it further than the engine does.",
  },
  {
    q: "What is the tongue weight limit on a Ram 1500?",
    a: "Ram caps the Class IV receiver at 1,100 lb of tongue weight and recommends a weight-distributing hitch above 5,000 lb of trailer. Divide 1,100 by 0.13 and you get 8,462 lb, which is the heaviest trailer that can carry a mid-band tongue weight on this receiver. The 11,610 lb rating exceeds the receiver cap at Ram's own 10 percent assumption, so the hitch is the tighter of the two numbers.",
  },
  {
    q: "Does the 3.92 axle really add 3,000 lb of towing capacity?",
    a: "On paper, yes. A 2026 Tradesman Crew Cab 4x4 with the Hurricane standard output is listed at 8,100 lb on the 3.55 axle and 11,200 lb on the 3.92, and the gross combined rating rises from 13,900 to 17,000 lb at the same time. The taller gear multiplies torque at the wheels and lets the truck pull a heavier trailer on the same test grade. The cost is about 1 to 2 MPG unloaded and a slightly busier engine at highway speed.",
  },
  {
    q: "Do I still need a weight distribution hitch with air suspension?",
    a: "Yes, and Ram's manual has you disable the leveling to set one up. The procedure is to enter tire jack mode, measure front fender height unhitched, hitch the trailer without the bars, measure again, then tension the bars until the fender sits about a third of that difference above the unhitched height. Equal-i-zer measured a setup built at 50 percent reading 25 percent once four-corner leveling engaged.",
  },
];

const RATING_TABLE = [
  ["Tradesman", "Quad Cab 4x2", "3.0L Hurricane SO", "3.21", "13,900 lb", "8,510 lb", "1,930 lb"],
  ["Tradesman", "Quad Cab 4x2", "3.0L Hurricane SO", "3.92", "17,000 lb", "11,610 lb", "1,930 lb"],
  ["Tradesman", "Crew 5 ft 7 in 4x4", "3.0L Hurricane SO", "3.55", "13,900 lb", "8,100 lb", "1,840 lb"],
  ["Tradesman", "Crew 5 ft 7 in 4x4", "3.0L Hurricane SO", "3.92", "17,000 lb", "11,200 lb", "1,840 lb"],
  ["Tradesman", "Crew 5 ft 7 in 4x2", "5.7L HEMI eTorque", "3.92", "17,000 lb", "11,320 lb", "1,650 lb"],
  ["Tradesman", "Crew 5 ft 7 in 4x4", "5.7L HEMI eTorque", "3.92", "15,850 lb", "9,590 lb", "1,630 lb"],
  ["Limited", "Crew 5 ft 7 in 4x4", "3.0L Hurricane HO", "3.92", "15,420 lb", "9,240 lb", "1,450 lb"],
  ["Limited", "Crew 6 ft 4 in 4x4", "3.0L Hurricane HO", "3.92", "16,220 lb", "10,000 lb", "1,390 lb"],
];

const PAYLOAD_TABLE = [
  ["5,000 lb", "650 lb", "1,300 lb", "540 lb left", "150 lb left", "197 lb over"],
  ["6,500 lb", "845 lb", "1,495 lb", "345 lb left", "45 lb over", "392 lb over"],
  ["8,000 lb", "1,040 lb", "1,690 lb", "150 lb left", "240 lb over", "587 lb over"],
  ["9,500 lb", "1,235 lb", "1,885 lb", "45 lb over", "435 lb over", "782 lb over"],
];

const TONGUE_TABLE = [
  ["5,000 lb", "500 lb", "600 lb", "650 lb", "Inside", "ok"],
  ["7,000 lb", "700 lb", "840 lb", "910 lb", "Inside", "ok"],
  ["8,500 lb", "850 lb", "1,020 lb", "1,105 lb", "Over at 13%", "warn"],
  ["11,610 lb", "1,161 lb", "1,393 lb", "1,509 lb", "Over at every percentage", "no"],
];

const CHECK_STEPS = [
  {
    name: "Read the payload line on the door jamb",
    text: "The sticker beginning with \"the combined weight of occupants and cargo should never exceed\" describes your truck with its options fitted. Ram's chart describes a configuration. On a Limited that gap has been documented at 427 lb.",
  },
  {
    name: "Find the axle ratio",
    text: "Two or three characters on the door jamb tag, or the tag on the differential cover. 3.21, 3.55, and 3.92 are the Ram 1500 options, and the ratio picks which rows of the towing chart apply to you.",
  },
  {
    name: "Weigh the trailer loaded, then take 13 percent",
    text: "Use the gross weight on the certification label, not the dry weight in the brochure, and add water and propane. Multiply by 0.13 for a mid-band tongue estimate before you trust a hitch.",
  },
  {
    name: "Compare the tongue to the receiver, not the badge",
    text: "The Class IV receiver is capped at 1,100 lb. If 13 percent of the trailer lands above that, no amount of payload headroom fixes it.",
  },
  {
    name: "Run three passes at a CAT scale",
    text: "Truck alone, truck loaded for the trip, then the combination with the bars tensioned. The difference between the last two steer axle readings is whether your weight distribution is actually working.",
  },
];

export default function CanRam1500TowTravelTrailerPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <ArticleJsonLd
        title="Can a Ram 1500 Tow a Travel Trailer? The Axle Ratio Decides"
        description="Ram's 2026 towing chart rates the same 1500 Crew Cab 3,100 lb apart depending on axle ratio. What that means for travel trailer weight, payload by trim, and the 1,100 lb receiver cap."
        url="https://www.rvtowingcalc.com/guides/can-ram-1500-tow-travel-trailer"
        datePublished="2026-10-27"
      />
      <FaqJsonLd
        faqs={FAQS}
        baseUrl="https://www.rvtowingcalc.com/guides/can-ram-1500-tow-travel-trailer"
      />
      <HowToJsonLd
        name="How to check whether a Ram 1500 can tow a specific travel trailer"
        description="Read the door jamb payload sticker, decode the axle ratio, compute tongue weight at 13 percent of loaded trailer weight, compare it against the 1,100 lb receiver cap, and verify the rig at a CAT scale."
        steps={CHECK_STEPS}
        totalTime="PT2H"
        url="https://www.rvtowingcalc.com/guides/can-ram-1500-tow-travel-trailer"
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
        <span className="text-gray-900">Ram 1500 Towing</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
        Can a Ram 1500 Tow a Travel Trailer?
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        Two 2026 Ram 1500 Tradesman Crew Cabs, both four-wheel drive, both with
        the standard-output Hurricane inline-six, both listed at 1,840 lb of
        payload. One is rated to pull 8,100 lb. The other is rated 11,200 lb.
      </p>
      <p className="mt-3 text-lg text-gray-600">
        Nothing visible separates them on the lot. The difference is a
        three-character code on the build sheet, axle ratio 3.55 against 3.92,
        and it moves the gross combined rating from 13,900 lb to 17,000 lb. On
        this truck the rear gear decides more than the engine badge does.
      </p>

      <div className="mt-8 rounded-xl bg-brand-50 p-6">
        <h2 className="text-lg font-bold text-brand-800">The Short Answer</h2>
        <p className="mt-2 text-brand-700">
          A Ram 1500 tows a{" "}
          <strong>6,000 to 7,000 lb travel trailer comfortably</strong> in
          almost any Crew Cab build, and that is the honest ceiling for a
          half-ton with a family in it. The 11,610 lb headline requires a{" "}
          <strong>Tradesman Quad Cab 4x2 with the 3.92 axle</strong>, and the
          truck is rated on paper with only 300 lb of passengers aboard. Payload
          runs out first: the best chart figure is 1,930 lb on that same
          two-wheel-drive Quad Cab, and a Limited Crew Cab 4x4 is listed at
          1,390. Buy the 3.92 gear, then shop trailers against the door sticker
          rather than the brochure.
        </p>
      </div>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        One Axle Ratio, Three Thousand Pounds
      </h2>
      <p className="mt-3 text-gray-700">
        Ram publishes one chart per model year and it is built on the Tradesman,
        which is why luxury trims sit in a separate block with lower numbers. The
        chart has columns for GVWR, payload, base weight, both axle ratings,
        GCWR, and maximum trailer. Only the last column gets quoted in
        advertisements, and it is the one that depends most on gearing.
      </p>
      <p className="mt-3 text-gray-700">
        Read the HEMI rows closely if a V8 is the reason you are shopping. The
        11,320 lb figure belongs to a Crew Cab 4x2. The same cab and engine in
        four-wheel drive is listed at 9,590 lb on a 15,850 lb combined rating,
        because the transfer case and front axle add a few hundred pounds of
        truck and the chart deducts it twice, once from payload and once from
        the combined allowance.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">Trim</th>
              <th className="border px-3 py-2 text-left font-semibold">Cab and drive</th>
              <th className="border px-3 py-2 text-left font-semibold">Engine</th>
              <th className="border px-3 py-2 text-left font-semibold">Axle</th>
              <th className="border px-3 py-2 text-left font-semibold">GCWR</th>
              <th className="border px-3 py-2 text-left font-semibold">Max trailer</th>
              <th className="border px-3 py-2 text-left font-semibold">Payload</th>
            </tr>
          </thead>
          <tbody>
            {RATING_TABLE.map((row, i) => (
              <tr key={`${row[1]}-${row[2]}-${row[3]}`} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                <td className="border px-3 py-2 text-xs font-semibold">{row[0]}</td>
                <td className="border px-3 py-2 text-xs">{row[1]}</td>
                <td className="border px-3 py-2 text-xs">{row[2]}</td>
                <td className="border px-3 py-2 text-xs font-mono font-bold text-brand-700">
                  {row[3]}
                </td>
                <td className="border px-3 py-2 text-xs">{row[4]}</td>
                <td className="border px-3 py-2 text-xs font-bold">{row[5]}</td>
                <td className="border px-3 py-2 text-xs">{row[6]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm text-gray-500">
        Figures from Ram&apos;s 2026 trailer towing chart, SAE J2807 method.
        Trailer ratings are computed with 10 percent tongue weight and 300 lb of
        passengers, which is the assumption that matters most for a family.
      </p>

      <p className="mt-4 text-gray-700">
        A 3.21 axle appears only on the two-wheel-drive rows and drops the
        Hurricane to 8,510 lb. That is a 3,100 lb swing inside a single engine
        choice, larger than the gap between the Hurricane and the HEMI. If you
        are buying used, the{" "}
        <Link
          href="/guides/truck-tow-package-whats-included"
          className="text-brand-600 hover:underline"
        >
          tow package breakdown
        </Link>{" "}
        shows where the axle code is stamped and why a dealer cannot add it for
        the price of the option.
      </p>
      <p className="mt-3 text-gray-700">
        A model-year warning belongs here. Ram dropped the 5.7L HEMI for 2025
        and brought it back for 2026, so the two charts do not line up row for
        row. The same engine was rated as high as 12,750 lb from 2019 through
        2024 in a two-wheel-drive Crew Cab, which is 1,430 lb more than the
        current figure. A 2024 window sticker and a 2026 chart describe
        different trucks even when the badge and the cab match. Download the
        guide for the year on the door jamb label, not the year in the ad.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        The Chart Describes a Tradesman, Not the Truck on the Lot
      </h2>
      <p className="mt-3 text-gray-700">
        Ram&apos;s 1,930 lb payload belongs to a two-wheel-drive Quad Cab
        Tradesman with a 6-foot-4 bed. Step up to a Limited Crew Cab 4x4 with
        the high-output six and the chart itself drops to 1,390 lb, a loss of
        540 lb before anyone adds a floor mat. The chart figure also assumes
        options the truck does not have yet.
      </p>
      <p className="mt-3 text-gray-700">
        Owners report the sticker landing well below the chart. A documented
        Ram 1500 Limited Crew Cab 5-foot-7 4x4 with the 3.92 axle carried a
        chart figure of 1,530 lb and a door sticker of 1,103 lb, a gap of 427
        lb that came from air suspension hardware, the sunroof, and everything
        else fitted at the plant. Ram&apos;s manual is explicit that heavier
        axles or suspension fitted for durability do not necessarily raise
        GVWR. The sticker is the only number that describes your truck.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">Trailer gross</th>
              <th className="border px-3 py-2 text-left font-semibold">Tongue at 13%</th>
              <th className="border px-3 py-2 text-left font-semibold">Payload needed</th>
              <th className="border px-3 py-2 text-left font-semibold">1,840 lb</th>
              <th className="border px-3 py-2 text-left font-semibold">1,450 lb</th>
              <th className="border px-3 py-2 text-left font-semibold">1,103 lb</th>
            </tr>
          </thead>
          <tbody>
            {PAYLOAD_TABLE.map((row, i) => (
              <tr key={row[0]} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                <td className="border px-3 py-2 text-xs font-semibold">{row[0]}</td>
                <td className="border px-3 py-2 text-xs font-mono">{row[1]}</td>
                <td className="border px-3 py-2 text-xs font-mono font-bold">{row[2]}</td>
                {row.slice(3).map((cell, j) => (
                  <td
                    key={j}
                    className={
                      cell.includes("over")
                        ? "border px-3 py-2 text-xs font-bold text-red-700"
                        : "border px-3 py-2 text-xs font-bold text-green-700"
                    }
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm text-gray-500">
        Payload needed equals tongue weight plus 550 lb for two adults and two
        children plus 100 lb for the weight distribution hitch. Columns are the
        Tradesman Crew Cab 4x4 chart figure, the Limited chart figure, and a
        stickered Limited. Water and propane are assumed already in the trailer
        gross.
      </p>

      <p className="mt-4 text-gray-700">
        The numbers tell a story the tow rating cannot. A truck rated 11,200 lb
        runs out of payload at a 9,500 lb trailer, and the same trailer is 45 lb
        over on the last row. A Limited at 1,450 lb runs out somewhere just past
        6,000 lb, which is a 22-foot bunkhouse with full tanks. The{" "}
        <Link href="/payload-calculator" className="text-brand-600 hover:underline">
          payload calculator
        </Link>{" "}
        takes your own sticker figure and family before you start comparing
        floor plans.
      </p>
      <p className="mt-3 text-gray-700">
        Rear axle rating is the third ceiling and it almost never binds first.
        Most 2026 Ram 1500 rows carry a 4,100 lb rear GAWR. A Crew Cab 4x4 with
        a base weight of 5,261 lb puts roughly 2,200 lb of that on the rear axle
        empty, leaving about 1,900 lb for tongue load and bed cargo. A 1,040 lb
        tongue plus 300 lb of firewood and a generator lands near 3,540 lb,
        still well inside the rating. Payload runs out on this truck long before
        the axle does, which is the opposite of what happens on a{" "}
        <Link
          href="/guides/truck-camper-payload"
          className="text-brand-600 hover:underline"
        >
          slide-in camper
        </Link>
        .
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Ram Computes at 10 Percent, Your Trailer Loads at 13
      </h2>
      <p className="mt-3 text-gray-700">
        Every figure in that chart was calculated with 10 percent tongue weight
        and 300 lb of occupants. Ten percent is the floor of the stable band,
        not the middle. A travel trailer with forward holding tanks, a front
        bedroom, and a battery on the A-frame commonly lands between 12 and 15
        percent once it is packed, and that difference is where chart math meets
        a real tongue.
      </p>
      <p className="mt-3 text-gray-700">
        Ram caps the Class IV receiver at 1,100 lb of tongue load and recommends
        a weight-distributing hitch on anything above 5,000 lb. Divide 1,100 by
        0.13 and the answer is 8,462 lb. That is the heaviest trailer that can
        carry a mid-band tongue on this hitch, and it sits 3,148 lb under the
        advertised maximum.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">Trailer gross</th>
              <th className="border px-3 py-2 text-left font-semibold">10% (Ram&apos;s figure)</th>
              <th className="border px-3 py-2 text-left font-semibold">12%</th>
              <th className="border px-3 py-2 text-left font-semibold">13%</th>
              <th className="border px-3 py-2 text-left font-semibold">Against 1,100 lb</th>
            </tr>
          </thead>
          <tbody>
            {TONGUE_TABLE.map((row, i) => (
              <tr key={row[0]} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                <td className="border px-3 py-2 text-xs font-semibold">{row[0]}</td>
                <td className="border px-3 py-2 text-xs font-mono">{row[1]}</td>
                <td className="border px-3 py-2 text-xs font-mono">{row[2]}</td>
                <td className="border px-3 py-2 text-xs font-mono">{row[3]}</td>
                <td
                  className={
                    row[5] === "ok"
                      ? "border px-3 py-2 text-xs font-bold text-green-700"
                      : row[5] === "warn"
                        ? "border px-3 py-2 text-xs font-bold text-amber-700"
                        : "border px-3 py-2 text-xs font-bold text-red-700"
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
        Tongue weight as a percentage of loaded trailer gross. The bottom row is
        Ram&apos;s own advertised maximum, and it clears the receiver cap at 10
        percent, 12 percent, and 13 percent in turn.
      </p>

      <p className="mt-4 text-gray-700">
        That bottom row is the useful one. The 11,610 lb rating already asks
        1,161 lb of a receiver rated 1,100 lb at the percentage Ram assumed,
        which means the maximum number in the brochure is not achievable through
        the hitch the truck ships with. It is a clean example of two published
        specs that cannot both be true on the same trip, and it is why the{" "}
        <Link
          href="/tongue-weight-calculator"
          className="text-brand-600 hover:underline"
        >
          tongue weight calculator
        </Link>{" "}
        belongs in the conversation before the{" "}
        <Link
          href="/towing-capacity-calculator"
          className="text-brand-600 hover:underline"
        >
          towing capacity calculator
        </Link>
        .
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Weight Distribution Above 5,000 lb, and the Air Suspension Trap
      </h2>
      <p className="mt-3 text-gray-700">
        The receiver tube carries two ratings, one weight-carrying and one
        weight-distributing. Ram&apos;s threshold for requiring the second is
        5,000 lb of trailer, which is roughly where a single-axle camper ends
        and a tandem-axle travel trailer begins. Above it, the bars move part of
        the tongue load to the front axle and back to the trailer axles, and the
        front fender height is how you measure whether they did.
      </p>
      <p className="mt-3 text-gray-700">
        Air suspension complicates that measurement, and Ram&apos;s own manual
        says so. You enter tire jack mode, measure the front fender unhitched,
        hitch the trailer with the bars slack, measure again, then tension the
        bars until the fender sits about one third of that difference above the
        unhitched height. Skip the jack mode and the truck levels itself while
        you work. Equal-i-zer measured a hitch set up to 50 percent recovery
        reading 25 percent once four-corner leveling engaged, and now
        recommends 75 to 100 percent on trucks that level themselves. The{" "}
        <Link
          href="/guides/weight-distribution-hitch-setup"
          className="text-brand-600 hover:underline"
        >
          weight distribution setup guide
        </Link>{" "}
        walks the tape measure work in order.
      </p>
      <p className="mt-3 text-gray-700">
        Five checks settle whether a specific Ram and a specific trailer belong
        together.
      </p>

      <ol className="mt-4 space-y-3">
        {CHECK_STEPS.map((step, i) => (
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

      <div className="mt-10 rounded-2xl bg-brand-600 p-8 text-center text-white">
        <h2 className="text-2xl font-bold">Check the Sticker, Not the Chart</h2>
        <p className="mt-2 text-brand-100">
          Axle ratio, trim payload, and tongue weight decide what a Ram 1500 can
          pull. Free, independent, no sign-up.
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

      <AmazonAffiliate categories={["tongue-scale", "weight-distribution"]} />

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Sources &amp; References
      </h2>
      <ul className="mt-3 space-y-1 text-sm text-gray-600">
        <li>
          <a
            href="https://www.ramtrucks.com/towing-guide.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            Ram Trucks: 2026 Ram 1500 trailer towing chart, payload, and receiver
            ratings
          </a>
        </li>
        <li>
          <a
            href="https://www.sae.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            SAE International: J2807, the test procedure behind published tow
            ratings
          </a>
        </li>
        <li>
          <a
            href="https://www.nhtsa.gov/vehicle-safety/rv"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            NHTSA: RV and trailer towing safety information and recall lookup
          </a>
        </li>
        <li>
          <a
            href="https://www.rvia.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            RV Industry Association (RVIA): weight labeling standards for
            towable RVs
          </a>
        </li>
        <li>
          <a
            href="https://www.rvsafety.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            RV Safety &amp; Education Foundation (RVSEF): independent weight
            education and individual wheel position weighing
          </a>
        </li>
      </ul>

      <div className="mt-10 rounded-xl border border-gray-200 bg-gray-50 p-6">
        <h3 className="font-bold text-gray-900">Related Guides</h3>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          <li>
            <Link
              href="/guides/ram-1500-vs-f150-towing"
              className="text-brand-600 hover:underline"
            >
              Ram 1500 vs Ford F-150 Towing
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
              href="/guides/truck-tow-package-whats-included"
              className="text-brand-600 hover:underline"
            >
              What Does a Tow Package Include?
            </Link>
          </li>
          <li>
            <Link
              href="/guides/cat-scale-weighing"
              className="text-brand-600 hover:underline"
            >
              How to Weigh Your Rig at a CAT Scale
            </Link>
          </li>
          <li>
            <Link
              href="/guides/best-half-ton-trucks-8000-lbs"
              className="text-brand-600 hover:underline"
            >
              Best Half-Ton Trucks for 8,000 lb
            </Link>
          </li>
          <li>
            <Link
              href="/guides/can-ford-maverick-tow-travel-trailer"
              className="text-brand-600 hover:underline"
            >
              Can a Ford Maverick Tow a Travel Trailer?
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
