import type { Metadata } from "next";
import Link from "next/link";
import { FaqJsonLd, ArticleJsonLd, HowToJsonLd } from "@/components/seo/JsonLd";
import { DEFAULT_OG_IMAGES } from "@/lib/seo/default-og-image";

import AmazonAffiliate from "@/components/AmazonAffiliate";

export const metadata: Metadata = {
  title: "Can a Subaru Outback Tow a Travel Trailer? The 8 to 11 Percent Rule",
  description:
    "A Subaru Outback tows 3,500 lb with the turbo and 2,700 lb without, on tongue caps of 350 and 270 lb. Why its manual asks for 8 to 11 percent, not 15.",
  keywords: [
    "can a subaru outback tow a travel trailer",
    "subaru outback towing capacity",
    "subaru outback tongue weight",
    "subaru outback payload",
    "subaru outback 3500 lb towing",
    "subaru outback trailer brakes",
    "subaru outback weight distribution hitch",
    "outback wilderness towing",
  ],
  alternates: {
    canonical:
      "https://www.rvtowingcalc.com/guides/can-subaru-outback-tow-travel-trailer",
  },
  openGraph: {
    title: "Can a Subaru Outback Tow a Travel Trailer? The 8 to 11 Percent Rule",
    description:
      "Subaru's 350 and 270 lb tongue caps are exactly 10 percent of its tow ratings. Its own manual asks for 8 to 11 percent, which leaves no room at the top.",
    url: "https://www.rvtowingcalc.com/guides/can-subaru-outback-tow-travel-trailer",
    images: DEFAULT_OG_IMAGES,
  },
};

const FAQS = [
  {
    q: "Can a Subaru Outback tow a travel trailer?",
    a: "Yes, with a ceiling near 3,000 lb loaded for the turbo and about 2,400 lb for the 2.5L. Subaru rates the XT and Wilderness at 3,500 lb and the non-turbo at 2,700, with tongue caps of 350 and 270 lb. Both caps equal exactly 10 percent of the rating, so a trailer has to arrive at or under 10 percent tongue weight to use the full number. A 2,800 lb trailer with a measured 300 lb tongue is a comfortable Outback rig. A 3,300 lb trailer with a published 400 lb dry tongue is not.",
  },
  {
    q: "How much can a Subaru Outback tow?",
    a: "2,700 lb with the 2.5L and 3,500 lb with the 2.4L turbo in the XT and Wilderness, on 2025 and 2026 models. Both figures assume trailer brakes. Without brakes the manual rates every Outback at 1,000 lb of trailer and 100 lb of tongue weight, the same row for both engines, so the turbo adds 800 lb of usable capacity only above that line. Subaru prints the tongue figures in the owner's manual rather than on the window sticker, so the Maximum Load Limits table is the document to check before you sign for a trailer.",
  },
  {
    q: "What is the tongue weight limit on a Subaru Outback?",
    a: "350 lb with the turbo and 270 lb with the 2.5L. Subaru's manual also asks for 8 to 11 percent of loaded trailer weight, narrower than the 10 to 15 percent band most towing guides quote. Divide 350 by 0.11 and the answer is 3,182 lb, the heaviest trailer that stays inside the top of Subaru's own range. At 8 percent the trailer rating runs out first, at 4,375 lb. Because both caps are exactly 10 percent of the rating, a trailer loaded at 11 percent is over the hitch at any weight close to the maximum.",
  },
  {
    q: "Do I need a trailer brake controller on an Outback?",
    a: "Above 1,000 lb, yes, if the trailer has electric brakes. Subaru's hitch warning card, part L101SAN000, states that customers towing over 1,000 lb with a trailer that has electric brakes must buy and install a controller and harness, then adds that Subaru does not offer either. A seven-pin connector on the car does not include the controller. Budget the part and the wiring before you collect the trailer, and set the gain on gravel at low speed so you can feel the point where the trailer starts dragging the car.",
  },
  {
    q: "Can I use a weight distribution hitch on a Subaru Outback?",
    a: "No. The trailer hitch warning in the owner's manual is explicit: use the hitch only as a weight carrying hitch, and do not use it with any type of weight distributing hitch. That removes the usual fix for a heavy tongue on a soft rear suspension, because bars cannot transfer load back to the front axle. The substitutes are all loading moves. Keep heavy gear out of the front storage compartment, load up to the 40 percent Subaru allows behind the trailer axle, travel with the fresh tank empty, and buy a trailer whose measured tongue stays under 350 lb loaded.",
  },
];

const RATING_TABLE = [
  [
    "2.4L turbo (XT, Wilderness)",
    "With brakes",
    "3,500 lb",
    "350 lb",
    "10.0%",
  ],
  ["2.4L turbo (XT, Wilderness)", "No brakes", "1,000 lb", "100 lb", "10.0%"],
  ["2.5L (Base through Touring)", "With brakes", "2,700 lb", "270 lb", "10.0%"],
  ["2.5L (Base through Touring)", "No brakes", "1,000 lb", "100 lb", "10.0%"],
];

const TONGUE_TABLE = [
  ["2,000 lb", "160 lb", "200 lb", "220 lb", "Inside", "Inside", "ok"],
  ["2,500 lb", "200 lb", "250 lb", "275 lb", "Inside", "Over at 11%", "ok"],
  ["3,000 lb", "240 lb", "300 lb", "330 lb", "Inside", "Over at 10%", "warn"],
  ["3,500 lb", "280 lb", "350 lb", "385 lb", "At the cap at 10%", "Over at 8%", "no"],
  ["3,800 lb", "304 lb", "380 lb", "418 lb", "Over at 10%", "Over at 8%", "no"],
];

const PAYLOAD_TABLE = [
  ["2,500 lb at 10%, two adults", "250 lb", "390 lb", "100 lb", "740 lb", "355 lb left"],
  [
    "3,000 lb at 10%, two adults, two kids",
    "300 lb",
    "570 lb",
    "150 lb",
    "1,020 lb",
    "75 lb left",
  ],
  [
    "3,500 lb at 10%, two adults, two kids",
    "350 lb",
    "570 lb",
    "150 lb",
    "1,070 lb",
    "25 lb left",
  ],
  [
    "3,500 lb at 11%, two adults, two kids",
    "385 lb",
    "570 lb",
    "150 lb",
    "1,105 lb",
    "10 lb over",
  ],
];

const CHECK_STEPS = [
  {
    name: "Read the certification label, not the brochure",
    text: "GVWR and both axle ratings are on the driver's door pillar. The tongue cap is not printed anywhere on the car, so it comes from the Maximum Load Limits table in the manual: 350 lb with the turbo, 270 lb with the 2.5L.",
  },
  {
    name: "Weigh the tongue before you buy the trailer",
    text: "The manual describes the method. Chock the trailer, jack the coupler to towing height, and lower it onto a bathroom scale. Do it with the trailer loaded the way you will travel, because a dry tongue figure from a spec sheet describes empty tanks.",
  },
  {
    name: "Turn that number into a percentage",
    text: "Tongue divided by loaded gross weight. Below 8 percent the trailer will sway on a downhill; above 11 you are outside Subaru's band and probably over the cap. Aim for 9 to 10 percent, which is the only part of the range where both the rating and the hitch have margin.",
  },
  {
    name: "Add up everything the car has to carry",
    text: "Tongue, hitch, driver, passengers, and cargo all come out of GVWR minus curb weight. On a Limited XT that is 5,026 minus 3,931, or 1,095 lb. A family of four plus a 350 lb tongue leaves 25 lb.",
  },
  {
    name: "Confirm it on a CAT scale",
    text: "Three passes: car alone, car loaded for the trip, then the combination. Compare the steer axle reading between the last two. If the front axle unloads more than about 100 lb, the tongue is too heavy for a hitch that cannot distribute load.",
  },
];

export default function CanSubaruOutbackTowTravelTrailerPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <ArticleJsonLd
        title="Can a Subaru Outback Tow a Travel Trailer? The 8 to 11 Percent Rule"
        description="Subaru rates the Outback at 2,700 or 3,500 lb with tongue caps of 270 or 350 lb, and its manual asks for 8 to 11 percent tongue weight instead of the usual 10 to 15. What that band does to real trailer choices."
        url="https://www.rvtowingcalc.com/guides/can-subaru-outback-tow-travel-trailer"
        datePublished="2026-10-28"
      />
      <FaqJsonLd
        faqs={FAQS}
        baseUrl="https://www.rvtowingcalc.com/guides/can-subaru-outback-tow-travel-trailer"
      />
      <HowToJsonLd
        name="How to check whether a Subaru Outback can tow a specific travel trailer"
        description="Read the certification label, weigh the loaded tongue at towing height, convert it to a percentage of trailer gross weight, add tongue and passengers against GVWR minus curb weight, and confirm the rig at a CAT scale."
        steps={CHECK_STEPS}
        totalTime="PT2H"
        url="https://www.rvtowingcalc.com/guides/can-subaru-outback-tow-travel-trailer"
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
        <span className="text-gray-900">Subaru Outback Towing</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
        Can a Subaru Outback Tow a Travel Trailer?
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        Load a 3,500 lb travel trailer to 11 percent tongue weight and the ball
        carries 385 lb. The hitch Subaru sells for the Outback is rated 350. The
        car is inside its tow rating and the hitch is 35 lb past its limit at the
        same moment, on a trailer loaded inside the range Subaru&apos;s own
        manual asks for.
      </p>
      <p className="mt-3 text-lg text-gray-600">
        That is the knot in every Outback towing question. Subaru prints a
        3,500 lb rating and a 350 lb tongue cap, and those two numbers divide to
        exactly 10 percent. So does 2,700 and 270. The caps are not separate
        engineering limits, they are the rating multiplied by 0.10, which leaves
        no margin at the top of Subaru&apos;s recommended band.
      </p>

      <div className="mt-8 rounded-xl bg-brand-50 p-6">
        <h2 className="text-lg font-bold text-brand-800">The Short Answer</h2>
        <p className="mt-2 text-brand-700">
          An Outback tows a{" "}
          <strong>2,700 to 3,000 lb travel trailer</strong> with the turbo, and{" "}
          <strong>2,300 to 2,500 lb</strong> with the 2.5L, measured as loaded
          weight with water aboard. Subaru rates the XT and Wilderness at 3,500
          lb and everything else at 2,700, on tongue caps of 350 and 270 lb. Keep
          the loaded tongue at 9 to 10 percent, which is the only part of
          Subaru&apos;s 8 to 11 percent range where both the rating and the
          hitch have room. Skip the weight distribution hitch, because the manual
          prohibits one. Then check the trailer&apos;s published dry tongue
          before you fall for a floor plan, since that single figure rules out
          more trailers than the 3,500 lb number allows.
        </p>
      </div>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Two Engines, Four Rows, One Ratio
      </h2>
      <p className="mt-3 text-gray-700">
        Subaru puts the towing figures on its own specification sheet, which
        saves you from hunting a separate towing guide PDF. For 2025 it reads
        2,700 lb with 270 lb of tongue weight, and 3,500 lb with 350 lb on the XT
        and Wilderness. Same body, same 108.1-inch wheelbase. The difference is
        the 2.4L turbo and the high-torque version of the Lineartronic CVT behind
        it.
      </p>
      <p className="mt-3 text-gray-700">
        The fourth row is the one people miss. Without trailer brakes, every
        Outback is rated 1,000 lb of trailer and 100 lb of tongue, and the manual
        makes brakes a requirement rather than advice once the trailer and its
        cargo pass 1,000 lb. So the turbo&apos;s extra 800 lb exists only above
        that line.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">
                Powertrain
              </th>
              <th className="border px-3 py-2 text-left font-semibold">Brakes</th>
              <th className="border px-3 py-2 text-left font-semibold">
                Max trailer
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Max tongue
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Tongue as % of rating
              </th>
            </tr>
          </thead>
          <tbody>
            {RATING_TABLE.map((row, i) => (
              <tr
                key={`${row[0]}-${row[1]}`}
                className={i % 2 === 1 ? "bg-gray-50" : ""}
              >
                <td className="border px-3 py-2 text-xs font-semibold">
                  {row[0]}
                </td>
                <td className="border px-3 py-2 text-xs">{row[1]}</td>
                <td className="border px-3 py-2 text-xs font-bold">{row[2]}</td>
                <td className="border px-3 py-2 text-xs font-bold text-brand-700">
                  {row[3]}
                </td>
                <td className="border px-3 py-2 text-xs font-mono text-gray-600">
                  {row[4]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm text-gray-500">
        From Subaru&apos;s 2025 Outback specification sheet and the Maximum Load
        Limits table in the owner&apos;s manual. The 2026 Outback is a new
        generation and the same four rows apply.
      </p>

      <p className="mt-4 text-gray-700">
        Every row lands on 10.0 percent, which is a design assumption rather than
        a coincidence. It also means the tongue cap cannot be raised by buying a
        bigger hitch, because the cap describes the car. If the trailer is a 900
        lb utility trailer or a pair of jet skis, the turbo is money spent on
        acceleration, not capacity. Above 1,000 lb the 800 lb is real, and it
        arrives with a second purchase that Subaru does not sell.
      </p>
      <p className="mt-3 text-gray-700">
        Curb weight is worth a glance while you are in that table. The 2025
        lineup runs from 3,641 lb on the Base to 3,946 lb on the Touring XT, so
        the heaviest car carries 305 lb more of itself against the same gross
        vehicle rating. That difference comes straight out of what is left for
        people, cargo, and tongue.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Subaru Asks for 8 to 11 Percent, Not 10 to 15
      </h2>
      <p className="mt-3 text-gray-700">
        Most towing advice, including several guides on this site, quotes a
        stable band of 10 to 15 percent tongue weight. Subaru&apos;s manual for
        the Outback asks for something different: keep the tongue load between 8
        and 11 percent of total trailer weight, and never exceed the maximum. One
        point lower at the bottom, four points gone at the top.
      </p>
      <p className="mt-3 text-gray-700">
        That band has a consequence you can calculate in one line. Divide 350 by
        0.11 and you get 3,182 lb, the heaviest loaded trailer that can sit at the
        top of Subaru&apos;s range without breaking the cap. Divide 270 by 0.11
        and it is 2,455 lb. At 8 percent the trailer rating runs out first, at
        4,375 and 3,375 lb, so the tongue cap only becomes the binding number in
        the upper half of the band.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">
                Trailer gross
              </th>
              <th className="border px-3 py-2 text-left font-semibold">8%</th>
              <th className="border px-3 py-2 text-left font-semibold">10%</th>
              <th className="border px-3 py-2 text-left font-semibold">11%</th>
              <th className="border px-3 py-2 text-left font-semibold">
                Against 350 lb
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Against 270 lb
              </th>
            </tr>
          </thead>
          <tbody>
            {TONGUE_TABLE.map((row, i) => (
              <tr key={row[0]} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                <td className="border px-3 py-2 text-xs font-semibold">
                  {row[0]}
                </td>
                <td className="border px-3 py-2 text-xs font-mono">{row[1]}</td>
                <td className="border px-3 py-2 text-xs font-mono">{row[2]}</td>
                <td className="border px-3 py-2 text-xs font-mono">{row[3]}</td>
                <td
                  className={
                    row[6] === "no"
                      ? "border px-3 py-2 text-xs font-bold text-red-700"
                      : row[6] === "warn"
                        ? "border px-3 py-2 text-xs font-bold text-amber-700"
                        : "border px-3 py-2 text-xs font-bold text-green-700"
                  }
                >
                  {row[4]}
                </td>
                <td className="border px-3 py-2 text-xs">{row[5]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm text-gray-500">
        Tongue weight at three points in Subaru&apos;s recommended band, checked
        against both caps. The 3,500 lb row is the turbo&apos;s full rating and
        it clears the hitch only at 8 or 9 percent.
      </p>

      <p className="mt-4 text-gray-700">
        Two rows deserve a second look. At 3,500 lb, the 10 percent column is 350,
        which is the cap exactly, with nothing left for a full propane tank or a
        second battery on the A-frame. At 3,800 lb of loaded trailer, which is a
        20-foot bunkhouse with water and a weekend of gear, the 10 percent figure
        is 380 and the car still pulls it. The hitch is 30 lb outside its rating and nothing in
        the driver&apos;s seat will tell you.
      </p>
      <p className="mt-3 text-gray-700">
        Subaru&apos;s loading instruction explains why the band sits where it
        does. Roughly 60 percent of the trailer&apos;s cargo belongs ahead of the
        axle and 40 percent behind, balanced left to right. A front bedroom with
        a forward fresh tank pushes a trailer toward 11 or 12 percent. A teardrop
        with a rear galley and water behind the axle drifts down toward 8, which
        is where the sway starts. The{" "}
        <Link
          href="/guides/trailer-loading-position"
          className="text-brand-600 hover:underline"
        >
          trailer loading guide
        </Link>{" "}
        covers the moves that shift a tongue by 40 lb without touching the
        trailer.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        A Thousand Pounds of Payload and a Fifty Pound Hitch
      </h2>
      <p className="mt-3 text-gray-700">
        Subaru does not publish a payload figure for the Outback, and it does not
        publish a gross combined rating either. Both are real omissions, and both
        push you to the certification label on the driver&apos;s door pillar,
        which is the only authority anyway. A 2025 Limited XT carries a 5,026 lb
        GVWR against a 3,931 lb curb weight. The difference is 1,095 lb for the
        driver, passengers, cargo, the hitch, and the tongue.
      </p>
      <p className="mt-3 text-gray-700">
        The hitch counts, and Subaru says so. Its definition of gross vehicle
        weight includes the trailer hitch and the tongue load, so a genuine hitch
        and ball mount at roughly 50 lb comes out of the same 1,095 before the
        trailer is connected. Run a family of four through it and the margin
        disappears faster than the tow rating suggests.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">Load</th>
              <th className="border px-3 py-2 text-left font-semibold">Tongue</th>
              <th className="border px-3 py-2 text-left font-semibold">
                Hitch and people
              </th>
              <th className="border px-3 py-2 text-left font-semibold">Cargo</th>
              <th className="border px-3 py-2 text-left font-semibold">Total</th>
              <th className="border px-3 py-2 text-left font-semibold">
                Against 1,095 lb
              </th>
            </tr>
          </thead>
          <tbody>
            {PAYLOAD_TABLE.map((row, i) => (
              <tr key={row[0]} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                <td className="border px-3 py-2 text-xs font-semibold">
                  {row[0]}
                </td>
                <td className="border px-3 py-2 text-xs font-mono">{row[1]}</td>
                <td className="border px-3 py-2 text-xs">{row[2]}</td>
                <td className="border px-3 py-2 text-xs">{row[3]}</td>
                <td className="border px-3 py-2 text-xs font-mono font-bold">
                  {row[4]}
                </td>
                <td
                  className={
                    row[5].includes("over")
                      ? "border px-3 py-2 text-xs font-bold text-red-700"
                      : "border px-3 py-2 text-xs font-bold text-green-700"
                  }
                >
                  {row[5]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm text-gray-500">
        Adults at 170 lb, children at 90 lb, 50 lb of hitch and ball mount. GVWR
        of 5,026 lb minus 3,931 lb of curb weight on a 2025 Limited XT. The{" "}
        <Link href="/payload-calculator" className="text-brand-600 hover:underline">
          payload calculator
        </Link>{" "}
        takes your own door label rather than this one.
      </p>

      <p className="mt-4 text-gray-700">
        The bottom row is where this car stops being a family tow vehicle. A
        3,500 lb trailer at 11 percent is 385 lb of tongue, 35 lb over the cap,
        and the same trip is 10 lb over GVWR. Pull the tongue back to 10 percent
        and it fits with 25 lb to spare, which is not a cooler and a case of
        water. It is nothing. That is how little room exists between a legal
        Outback rig and an overloaded one. Cargo in the back also lands almost entirely on the rear
        axle, and the GAWR on that same pillar label is the number that catches it
        first.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        What the Hitch Card Says That the Brochure Does Not
      </h2>
      <p className="mt-3 text-gray-700">
        Every genuine Subaru trailer hitch ships with a warning card, part
        L101SAN000, meant to live in the glove box. Five lines on it are worth
        more than the sales conversation.
      </p>
      <p className="mt-3 text-gray-700">
        Towing over 1,000 lb with a trailer that has electric brakes requires a
        brake controller and harness, and the card states plainly that Subaru
        does not offer either. Blind spot detection and rear cross traffic alert
        have to be switched off while towing, because the radar sees the trailer.
        Reverse automatic braking needs a dealer conversation before you tow.
        After the first 600 miles, the hitch bolts go back to the dealer for a
        torque check. Remove the hitch and the bumper beam has to go back on, or
        rear crash performance changes.
      </p>
      <p className="mt-3 text-gray-700">
        The manual adds the two constraints that shape everything else. A new
        vehicle, or one with any new powertrain component, should not tow at all
        for the first 1,000 miles, which rules out collecting the trailer on the
        day you collect the car. And the receiver is weight carrying only: use
        the hitch only as a weight carrying hitch, and do not use it with any
        type of weight distributing hitch.
      </p>
      <p className="mt-3 text-gray-700">
        That last line removes the standard fix for a heavy tongue. Weight
        distribution bars move load back to the trailer axles and forward to the
        front axle, and on a wagon with a soft rear end they are exactly what you
        would want. They are not available here. What is left is loading, and a
        smaller trailer. The{" "}
        <Link
          href="/guides/tongue-weight"
          className="text-brand-600 hover:underline"
        >
          tongue weight guide
        </Link>{" "}
        covers the measurement, and the{" "}
        <Link
          href="/tongue-weight-calculator"
          className="text-brand-600 hover:underline"
        >
          tongue weight calculator
        </Link>{" "}
        turns a loaded trailer weight into the number the hitch will actually
        carry.
      </p>
      <p className="mt-3 text-gray-700">
        Five checks settle whether a specific Outback and a specific trailer
        belong together.
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
        <h2 className="text-2xl font-bold">Measure the Tongue First</h2>
        <p className="mt-2 text-brand-100">
          On an Outback the hitch rating decides before the tow rating does.
          Free, independent, no sign-up.
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

      <AmazonAffiliate categories={["tongue-scale", "brake-controller"]} />

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Sources &amp; References
      </h2>
      <ul className="mt-3 space-y-1 text-sm text-gray-600">
        <li>
          <a
            href="https://www.media.subaru.com/download.do?id=2232"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            Subaru of America: 2025 Outback specifications, towing capacity and
            trailer tongue weight by trim
          </a>
        </li>
        <li>
          <a
            href="https://techinfo.subaru.com/stis/doc/accInstallGuide/L101SAN000%20Tow%20Hitch%20-%20warning%20card%20-%20Issue%2002%20INS20477.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            Subaru: Outback trailer hitch warning card, part L101SAN000, brake
            controller and driver assist requirements
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
              href="/guides/can-subaru-ascent-tow-travel-trailer"
              className="text-brand-600 hover:underline"
            >
              Can a Subaru Ascent Tow a Travel Trailer?
            </Link>
          </li>
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
              href="/guides/tongue-weight"
              className="text-brand-600 hover:underline"
            >
              Tongue Weight Explained
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
              href="/guides/trailer-brake-controller-setup"
              className="text-brand-600 hover:underline"
            >
              Trailer Brake Controller Setup
            </Link>
          </li>
          <li>
            <Link
              href="/guides/can-honda-pilot-tow-travel-trailer"
              className="text-brand-600 hover:underline"
            >
              Can a Honda Pilot Tow a Travel Trailer?
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
