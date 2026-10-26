import type { Metadata } from "next";
import Link from "next/link";
import { FaqJsonLd, ArticleJsonLd, HowToJsonLd } from "@/components/seo/JsonLd";
import { DEFAULT_OG_IMAGES } from "@/lib/seo/default-og-image";

import AmazonAffiliate from "@/components/AmazonAffiliate";

export const metadata: Metadata = {
  title: "Can a Ford Maverick Tow a Travel Trailer? The 40 Sq Ft Limit",
  description:
    "A Ford Maverick is rated 4,000 lb with the 4K Tow Package, but Ford caps trailer frontal area at 40 sq ft. What that rules out, and which campers still fit.",
  keywords: [
    "can a ford maverick tow a travel trailer",
    "ford maverick towing capacity",
    "ford maverick 4k tow package",
    "ford maverick tongue weight",
    "ford maverick payload",
    "maverick frontal area limit",
    "maverick hybrid towing",
    "small truck travel trailer",
  ],
  alternates: {
    canonical:
      "https://www.rvtowingcalc.com/guides/can-ford-maverick-tow-travel-trailer",
  },
  openGraph: {
    title: "Can a Ford Maverick Tow a Travel Trailer? The 40 Sq Ft Limit",
    description:
      "The 4,000 lb rating gets the attention. The 40 square foot frontal area cap in Ford's own towing guide is what decides whether a travel trailer fits.",
    url: "https://www.rvtowingcalc.com/guides/can-ford-maverick-tow-travel-trailer",
    images: DEFAULT_OG_IMAGES,
  },
};

const FAQS = [
  {
    q: "Can a Ford Maverick tow a travel trailer?",
    a: "Yes, but the honest ceiling is a folding camper rather than a full-height trailer. Ford rates the truck at 4,000 lb with all-wheel drive and the 4K Tow Package, and the same guide caps trailer frontal area at 40 square feet with that package. A 7-foot-wide trailer with 8 feet of overall height projects roughly 56 square feet, so it exceeds the limit at 3,400 lb even though the scale says the truck can pull it.",
  },
  {
    q: "How much can a Ford Maverick tow without the 4K package?",
    a: "Two thousand pounds, and the frontal area cap drops to 29 square feet. Ford's guide requires the 2K hitch receiver, option 60B, for anything up to that weight, and states the new vehicle warranty may be voided if you tow without the required equipment. Twenty-nine square feet is a 5-foot-wide, 6-foot-tall box once you allow for fenders, which leaves teardrops and small utility trailers.",
  },
  {
    q: "Can the Maverick hybrid tow 4,000 lb?",
    a: "Only from 2025 on, and only in all-wheel drive. Through 2024 the 2.5L hybrid was front-wheel drive only and capped at 2,000 lb. Ford added hybrid all-wheel drive for 2025 and opened the 4K Tow Package to it, which put the hybrid on the 8,315 lb GCWR line and the 4,000 lb rating. The front-wheel-drive hybrid stays at 2,000 lb in every model year.",
  },
  {
    q: "What is the tongue weight limit on a Ford Maverick?",
    a: "Four hundred pounds with the 4K receiver and 200 lb with the 2K receiver. Ford prints both figures on the hitch capacity chart, and 400 is exactly 10 percent of 4,000, the floor of the stable towing band. Load a trailer to 13 percent and the cap runs out at 3,077 lb of trailer, which is well under the advertised rating and the number to shop with.",
  },
  {
    q: "Do I need a weight distribution hitch on a Maverick?",
    a: "Ford's guide lists the Maverick receiver as a weight-carrying rating of 4,000 lb with a 400 lb tongue load and prints no weight-distributing column, unlike the F-150 chart. Whether a specific aftermarket receiver accepts bars is a question for the hitch manufacturer. Neither answer moves the 400 lb cap or the 40 square foot frontal limit, because both come from the vehicle rather than the hardware.",
  },
];

const RATING_TABLE = [
  [
    "2.5L I4 Hybrid",
    "3.37",
    "6,090 lb",
    "2,000 lb",
    "2,000 lb",
    "4,000 lb with 53Q",
  ],
  [
    "2.0L EcoBoost I4",
    "3.81",
    "6,130 lb",
    "2,000 lb",
    "2,000 lb",
    "4,000 lb with 53Q",
  ],
];

const FIT_TABLE = [
  [
    "Teardrop, 5 by 8 ft",
    "1,800 lb",
    "26 sq ft",
    "234 lb",
    "Fits a 2K truck",
    "ok",
  ],
  [
    "Pop-up, closed",
    "2,200 lb",
    "28 sq ft",
    "286 lb",
    "Fits, needs 53Q above 2,000 lb",
    "ok",
  ],
  [
    "A-frame folding camper",
    "2,800 lb",
    "32 sq ft",
    "364 lb",
    "The sweet spot for this truck",
    "ok",
  ],
  [
    "6 by 12 enclosed cargo",
    "3,000 lb",
    "36 sq ft",
    "390 lb",
    "Inside both limits by a hair",
    "ok",
  ],
  [
    "16 ft travel trailer, 7 ft wide",
    "3,400 lb",
    "56 sq ft",
    "442 lb",
    "Over on area and on tongue",
    "no",
  ],
  [
    "19 ft travel trailer, 8 ft wide",
    "4,200 lb",
    "64 sq ft",
    "546 lb",
    "Far past every limit at once",
    "no",
  ],
];

const GCWR_TABLE = [
  ["3,000 lb", "4,190 lb", "7,190 lb", "940 lb"],
  ["3,500 lb", "4,190 lb", "7,690 lb", "440 lb"],
  ["4,000 lb", "4,190 lb", "8,190 lb", "60 lb over"],
];

const PAYLOAD_TABLE = [
  ["4K EcoBoost AWD, two adults", "1,500 lb", "340 lb", "390 lb", "770 lb"],
  ["4K EcoBoost AWD, two adults and gear", "1,500 lb", "540 lb", "390 lb", "570 lb"],
  ["4K EcoBoost AWD, family of four", "1,500 lb", "680 lb", "390 lb", "430 lb"],
  ["4K EcoBoost AWD, four adults, 3,500 lb trailer", "1,500 lb", "680 lb", "455 lb", "365 lb"],
];

const CHECK_STEPS = [
  {
    name: "Read the window sticker for 53Q",
    text: "Not the receiver, not the seven-pin plug. Option code 53Q is what puts the truck on the 4,000 lb row, and a dealer can reprint the sticker from the VIN.",
  },
  {
    name: "Measure the trailer front",
    text: "Width times overall height, including the roof air conditioner. Forty square feet is the cap with 53Q; anything above it is outside Ford's published limit no matter what the trailer weighs.",
  },
  {
    name: "Divide the gross weight by 0.13",
    text: "That gives the tongue weight at the middle of the stable band. If the answer is over 400 lb, the trailer is too heavy for this hitch, and moving cargo is the only fix that does not involve a different truck.",
  },
  {
    name: "Add the truck, the people, and the trailer",
    text: "The total has to stay under 8,130 lb on an EcoBoost 4K build. A 4,000 lb trailer leaves about 430 lb for people and gear, which is where the headline rating quietly stops being usable.",
  },
  {
    name: "Weigh it loaded",
    text: "Three passes at a CAT scale: truck alone, truck loaded for the trip, then the combination. The steer axle reading tells you whether the tongue load is lifting weight off the front tires.",
  },
];

export default function CanFordMaverickTowTravelTrailerPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <ArticleJsonLd
        title="Can a Ford Maverick Tow a Travel Trailer? The 40 Sq Ft Limit"
        description="Ford's 2025 Maverick towing guide caps trailer frontal area at 40 square feet with the 4K Tow Package. What that rules out for travel trailers, and the tongue and GCWR math behind the 4,000 lb rating."
        url="https://www.rvtowingcalc.com/guides/can-ford-maverick-tow-travel-trailer"
        datePublished="2026-10-26"
      />
      <FaqJsonLd
        faqs={FAQS}
        baseUrl="https://www.rvtowingcalc.com/guides/can-ford-maverick-tow-travel-trailer"
      />
      <HowToJsonLd
        name="How to check whether a Ford Maverick can tow a specific travel trailer"
        description="Confirm option 53Q on the window sticker, measure the trailer frontal area against Ford's cap, compute tongue weight at 13 percent, add up gross combined weight, and weigh the rig at a CAT scale."
        steps={CHECK_STEPS}
        totalTime="PT2H"
        url="https://www.rvtowingcalc.com/guides/can-ford-maverick-tow-travel-trailer"
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
        <span className="text-gray-900">Ford Maverick Towing</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
        Can a Ford Maverick Tow a Travel Trailer?
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        Ford&apos;s 2025 Maverick towing guide sets a trailer frontal area cap of
        40 square feet on any truck with the 4K Tow Package, and 29 square feet
        without it. A 7-foot-wide travel trailer with 8 feet of overall height
        projects about 56. The truck is rated 4,000 lb and the trailer that
        rating was written for is 3,200 lb and shaped like a pop-up.
      </p>
      <p className="mt-3 text-lg text-gray-600">
        Nobody quotes the square footage in a dealer conversation, which is how
        people end up towing a 3,400 lb trailer that the truck pulls without
        complaint and that Ford&apos;s own document says is outside the limit.
        The weight ratings are the easy half of this question.
      </p>

      <div className="mt-8 rounded-xl bg-brand-50 p-6">
        <h2 className="text-lg font-bold text-brand-800">The Short Answer</h2>
        <p className="mt-2 text-brand-700">
          A Maverick tows a{" "}
          <strong>2,800 to 3,200 lb folding camper comfortably</strong>, and that
          is a real camping setup rather than a compromise. Reaching{" "}
          <strong>4,000 lb requires all-wheel drive and option 53Q</strong>, puts
          the truck on an 8,130 lb gross combined limit, and leaves 400 lb of
          tongue capacity, which is exactly 10 percent of the advertised
          number. A full-height travel trailer fails on frontal area before it
          fails on weight. Buy a pop-up, an A-frame, or a teardrop, and treat
          anything with an 8-foot wall as a different truck&apos;s job.
        </p>
      </div>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Two Ratings, One Option Box Between Them
      </h2>
      <p className="mt-3 text-gray-700">
        Ford prints one chart for the Maverick and it has three lines per
        engine. The 2,000 lb truck and the 4,000 lb truck share a block, a
        transmission, and a badge. What separates them is the gross combined
        weight rating, which jumps from roughly 6,100 lb to 8,130 lb when the
        equipment is right, and the equipment is listed in the required
        equipment note directly under the chart.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">Engine</th>
              <th className="border px-3 py-2 text-left font-semibold">Axle</th>
              <th className="border px-3 py-2 text-left font-semibold">GCWR</th>
              <th className="border px-3 py-2 text-left font-semibold">
                FWD trailer
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                AWD trailer
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                AWD with 53Q
              </th>
            </tr>
          </thead>
          <tbody>
            {RATING_TABLE.map((row, i) => (
              <tr key={row[0]} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                <td className="border px-3 py-2 text-xs font-semibold">
                  {row[0]}
                </td>
                <td className="border px-3 py-2 text-xs font-mono text-gray-600">
                  {row[1]}
                </td>
                <td className="border px-3 py-2 text-xs">{row[2]}</td>
                <td className="border px-3 py-2 text-xs">{row[3]}</td>
                <td className="border px-3 py-2 text-xs">{row[4]}</td>
                <td className="border px-3 py-2 text-xs font-bold text-brand-700">
                  {row[5]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm text-gray-500">
        Figures from the 2025 Ford Maverick trailer towing selector, SAE J2807
        method. The GCWR column shows the FWD and AWD baseline; the 53Q line
        moves to 8,130 lb on EcoBoost and 8,315 lb on hybrid.
      </p>

      <p className="mt-4 text-gray-700">
        Read the required equipment note closely, because it is a warranty
        statement rather than a suggestion. Ford requires the 2K hitch receiver,
        option 60B, for trailers up to 2,000 lb, and the 4K Tow Package, option
        53Q, for anything above that, then adds that the new vehicle limited
        warranty may be voided if you tow without them. A base Maverick with an
        aftermarket receiver bolted on by a previous owner has the hardware and
        not the coverage.
      </p>
      <p className="mt-3 text-gray-700">
        What 53Q actually contains is worth reading once. Ford&apos;s own package
        chart lists eleven lines, and five of them are marked S for standard
        equipment rather than package content: tow/haul mode, trailer sway
        control, and the camera and assist features. The package&apos;s real
        contribution is the 4-pin and 7-pin connector, the receiver, an auxiliary
        transmission oil cooler, a radiator upgrade on the gas engine, a stronger
        cooling fan, and the integrated trailer brake controller. If you are
        building a used truck up instead of buying one built, the{" "}
        <Link
          href="/guides/truck-tow-package-whats-included"
          className="text-brand-600 hover:underline"
        >
          tow package breakdown
        </Link>{" "}
        covers which of those pieces can be added afterward and which cannot.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Forty Square Feet Is the Number Nobody Quotes
      </h2>
      <p className="mt-3 text-gray-700">
        Frontal area is the projected silhouette of the trailer as it meets the
        air, and Ford is one of the few makers that publishes a cap for it. On
        the Maverick the cap is 29 square feet without 53Q and 40 square feet
        with it, and the guide warns that exceeding it may significantly reduce
        the performance of the towing vehicle. Forty square feet is smaller than
        it sounds.
      </p>
      <p className="mt-3 text-gray-700">
        Work it backwards. A box 8 feet wide and 5 feet tall is 40 square feet.
        A travel trailer 7 feet wide with an 8-foot overall height, which is
        ordinary for anything with a roof air conditioner and a walkable
        interior, is 56. The cap is not a rounding error on a full-height
        trailer. It is a category exclusion.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">
                Trailer type
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Typical gross
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Frontal area
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Tongue at 13%
              </th>
              <th className="border px-3 py-2 text-left font-semibold">Verdict</th>
            </tr>
          </thead>
          <tbody>
            {FIT_TABLE.map((row, i) => (
              <tr key={row[0]} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                <td className="border px-3 py-2 text-xs font-semibold">
                  {row[0]}
                </td>
                <td className="border px-3 py-2 text-xs">{row[1]}</td>
                <td className="border px-3 py-2 text-xs font-mono">{row[2]}</td>
                <td className="border px-3 py-2 text-xs font-mono">{row[3]}</td>
                <td
                  className={
                    row[5] === "no"
                      ? "border px-3 py-2 text-xs font-bold text-red-700"
                      : "border px-3 py-2 text-xs font-bold text-green-700"
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
        Frontal area is width times overall height, roof air conditioner
        included. Tongue at 13 percent of gross, the middle of the recommended
        10 to 15 percent band. Both columns have to pass, and on this truck the
        area column fails first.
      </p>

      <p className="mt-4 text-gray-700">
        That ordering matters when you are standing on a lot. A salesperson will
        happily point out that a 3,400 lb trailer is 600 lb under the rating,
        and be arithmetically correct. The same trailer is 16 square feet over
        the area limit, needs 442 lb of tongue against a 400 lb cap, and was
        never in the envelope. The{" "}
        <Link
          href="/towing-capacity-calculator"
          className="text-brand-600 hover:underline"
        >
          towing capacity calculator
        </Link>{" "}
        runs the weight side of that comparison with your own numbers.
      </p>
      <p className="mt-3 text-gray-700">
        Wheelbase gives you a second, looser ceiling. The Maverick measures
        121.1 inches between the axles, and the common rule of 20 feet of trailer
        for the first 110 inches plus 1 foot per additional 4 inches lands near
        22 feet. The area cap bites long before the length rule does, which is
        why the{" "}
        <Link
          href="/guides/trailer-length-vs-wheelbase-rule"
          className="text-brand-600 hover:underline"
        >
          wheelbase and trailer length guide
        </Link>{" "}
        is a sanity check here rather than the deciding factor.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        The Tongue Cap Sets the Weight, the GCWR Sets the Trip
      </h2>
      <p className="mt-3 text-gray-700">
        Ford&apos;s hitch capacity chart for the Maverick lists a weight-carrying
        trailer capacity of 4,000 lb and a maximum tongue load of 400 lb. Those
        two numbers divide to 10 percent, the bottom of the range where a travel
        trailer tracks straight. Every pound of tongue you remove to stay under
        400 buys back sway margin at the same time, so the cap is not purely a
        restriction.
      </p>
      <p className="mt-3 text-gray-700">
        The useful inversion is this: divide 400 by 0.13 and you get 3,077 lb.
        That is the heaviest trailer that can carry a mid-band tongue weight on
        this hitch. Load a 3,500 lb trailer to 13 percent and you need 455 lb,
        which the truck does not have. Load it to 11 percent to squeeze under
        the cap and you are towing at the edge of the stability band with a
        short-wheelbase truck and a tall box behind you.
      </p>
      <p className="mt-3 text-gray-700">
        Gross combined weight is the quieter trap. An EcoBoost AWD SuperCrew 4K
        build has 8,130 lb to work with, and the truck itself accounts for about
        3,700 lb of that before anyone sits down. Two adults and 150 lb of gear
        put the loaded truck near 4,190 lb, which leaves the numbers below.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">
                Trailer gross
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Loaded truck
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Combined
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Margin against 8,130 lb
              </th>
            </tr>
          </thead>
          <tbody>
            {GCWR_TABLE.map((row, i) => (
              <tr key={row[0]} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                <td className="border px-3 py-2 text-xs font-semibold">
                  {row[0]}
                </td>
                <td className="border px-3 py-2 text-xs">{row[1]}</td>
                <td className="border px-3 py-2 text-xs font-mono">{row[2]}</td>
                <td
                  className={
                    row[3].includes("over")
                      ? "border px-3 py-2 text-xs font-bold text-red-700"
                      : "border px-3 py-2 text-xs font-bold text-green-700"
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
        Curb weight about 3,700 lb, two adults at 170 lb, 150 lb of gear in the
        cab and bed. The 4,000 lb row is the one worth staring at: the rating and
        the GCWR cannot both be used on the same trip. The{" "}
        <Link href="/gcwr-calculator" className="text-brand-600 hover:underline">
          GCWR calculator
        </Link>{" "}
        runs it with your own loading.
      </p>

      <p className="mt-4 text-gray-700">
        A 4,000 lb trailer behind a Maverick therefore requires a driver who
        weighs nothing and brings no passengers. That is what a 4,000 lb rating
        with an 8,130 lb combined limit means in practice, and it is the same
        arithmetic you will find on any{" "}
        <Link
          href="/guides/midsize-truck-rv-towing"
          className="text-brand-600 hover:underline"
        >
          midsize truck
        </Link>
        . The rating is a claim about one ideal configuration.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Payload, Brakes, and Five Checks Before You Hook Up
      </h2>
      <p className="mt-3 text-gray-700">
        Payload is the number that quietly decides family trips. Ford publishes a
        1,500 lb maximum for the Maverick, and the door jamb sticker on a
        specific truck is what governs it: all-wheel drive, the 4K package, and
        Lariat trim each take some of that back. Even at the full 1,500 lb, the
        tongue load and the people come out of the same bucket.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">Load</th>
              <th className="border px-3 py-2 text-left font-semibold">
                Payload
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                People and gear
              </th>
              <th className="border px-3 py-2 text-left font-semibold">Tongue</th>
              <th className="border px-3 py-2 text-left font-semibold">Left</th>
            </tr>
          </thead>
          <tbody>
            {PAYLOAD_TABLE.map((row, i) => (
              <tr key={row[0]} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                <td className="border px-3 py-2 text-xs font-semibold">
                  {row[0]}
                </td>
                <td className="border px-3 py-2 text-xs">{row[1]}</td>
                <td className="border px-3 py-2 text-xs">{row[2]}</td>
                <td className="border px-3 py-2 text-xs">{row[3]}</td>
                <td className="border px-3 py-2 text-xs font-bold text-green-700">
                  {row[4]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm text-gray-500">
        Adults at 170 lb, children at 90 lb, tongue computed at 13 percent of a
        3,000 lb trailer for the first three rows and a 3,500 lb trailer for the
        last. The{" "}
        <Link href="/payload-calculator" className="text-brand-600 hover:underline">
          payload calculator
        </Link>{" "}
        and the{" "}
        <Link
          href="/guides/tongue-weight"
          className="text-brand-600 hover:underline"
        >
          tongue weight guide
        </Link>{" "}
        cover the loading moves that buy back margin without changing trailers.
      </p>

      <p className="mt-4 text-gray-700">
        Payload is comfortable on this truck, which is the pleasant surprise.
        The 4K package includes an integrated trailer brake controller, and the
        seven-pin connector is part of the package rather than an add-on, so a
        properly ordered Maverick arrives ready to run electric trailer brakes.
        Buy one without 53Q and you inherit a four-pin plug, no controller, and a
        2,000 lb rating you cannot lift with aftermarket parts. The{" "}
        <Link
          href="/guides/trailer-brake-controller-setup"
          className="text-brand-600 hover:underline"
        >
          brake controller setup guide
        </Link>{" "}
        covers gain adjustment for the trailers that do fit.
      </p>

      <p className="mt-4 text-gray-700">
        Five checks settle it, and each one can end the process before you spend
        money on a trailer.
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
        <h2 className="text-2xl font-bold">Run the Numbers Before the Deal</h2>
        <p className="mt-2 text-brand-100">
          Payload, tongue weight, and gross combined weight decide what a
          Maverick can pull. Free, independent, no sign-up.
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

      <AmazonAffiliate categories={["brake-controller", "tongue-scale"]} />

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Sources &amp; References
      </h2>
      <ul className="mt-3 space-y-1 text-sm text-gray-600">
        <li>
          <a
            href="https://www.vdm.ford.com/content/dam/brand_ford/en_us/brand/towing/pdf/2025_Ford_Maverick_Towing_Info_fnl-Dec5.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            Ford: 2025 Maverick trailer towing selector, required equipment, and
            hitch receiver weight capacity
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
            RV Industry Association (RVIA): weight labeling standards for towable
            RVs
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
              href="/guides/can-suv-tow-small-travel-trailer"
              className="text-brand-600 hover:underline"
            >
              Can My SUV Tow a Small Travel Trailer?
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
              href="/guides/can-nissan-frontier-tow-travel-trailer"
              className="text-brand-600 hover:underline"
            >
              Can a Nissan Frontier Tow a Travel Trailer?
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
              href="/guides/cat-scale-weighing"
              className="text-brand-600 hover:underline"
            >
              How to Weigh Your Rig at a CAT Scale
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
        </ul>
      </div>
    </div>
  );
}
