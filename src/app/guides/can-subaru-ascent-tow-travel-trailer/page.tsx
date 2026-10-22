import type { Metadata } from "next";
import Link from "next/link";
import { FaqJsonLd, ArticleJsonLd, HowToJsonLd } from "@/components/seo/JsonLd";
import { DEFAULT_OG_IMAGES } from "@/lib/seo/default-og-image";

import AmazonAffiliate from "@/components/AmazonAffiliate";

export const metadata: Metadata = {
  title: "Can a Subaru Ascent Tow a Travel Trailer? Read the CVT Code",
  description:
    "Can a Subaru Ascent tow a travel trailer? Only with the CVT cooler code, and the 500 lb tongue cap leaves less trailer than the 5,000 lb rating suggests.",
  keywords: [
    "can a subaru ascent tow a travel trailer",
    "subaru ascent towing capacity",
    "subaru ascent tongue weight",
    "subaru ascent payload",
    "subaru ascent 2000 lb towing",
    "truck cvt cooler towing",
    "subaru ascent travel trailer size",
    "three row suv towing",
  ],
  alternates: {
    canonical:
      "https://www.rvtowingcalc.com/guides/can-subaru-ascent-tow-travel-trailer",
  },
  openGraph: {
    title: "Can a Subaru Ascent Tow a Travel Trailer? Read the CVT Code",
    description:
      "Why the Ascent's tow rating is split by a transmission code rather than a trim badge, what the 500 lb tongue limit does to trailer size, and why Subaru's own hitch rules out weight distribution.",
    url: "https://www.rvtowingcalc.com/guides/can-subaru-ascent-tow-travel-trailer",
    images: DEFAULT_OG_IMAGES,
  },
};

const FAQS = [
  {
    q: "How much can a Subaru Ascent tow?",
    a: "Five thousand pounds, but only with the right hardware. Subaru's manual splits the figure by transmission type: TR690S, which has an air-cooled CVT fluid cooler, is rated 5,000 lb with a 500 lb tongue limit. TR690G, without the cooler, is rated 2,000 lb with a 200 lb tongue limit. The higher figure also assumes a Subaru Class III two-inch receiver and a working trailer light circuit. The Base trim carried the 2,000 lb rating through 2024 and was dropped for 2025.",
  },
  {
    q: "Does a Subaru Ascent need a weight distribution hitch?",
    a: "Not with Subaru's own hitch, because that hitch does not allow one. The manual states the supplied ball mount is weight-carrying only and must not be used with any weight distributing hitch. An aftermarket receiver may be rated for weight distribution, but the hardware change does not move the 500 lb tongue limit or the 6,000 lb GVWR behind it. This is the biggest setup difference between an Ascent and a Honda Pilot, which can use weight distribution to lift a sagging rear.",
  },
  {
    q: "What is the payload of a Subaru Ascent?",
    a: "Take the 6,000 lb GVWR and subtract curb weight, which runs 4,421 lb on a Base to 4,590 lb on a Touring. That leaves 1,410 to 1,579 lb, and the spread is not decoration: a Touring carries 169 lb less because of leather, a sunroof, a power liftgate, and larger wheels. The yellow door jamb sticker is the number that governs your vehicle. Never use the advertised maximum, and never use another trim's figure.",
  },
  {
    q: "Can a Subaru Ascent tow a 4,000 lb travel trailer?",
    a: "Yes, if the tongue stays at or under 500 lb, which means loading to 12 percent or less. Payload is the problem, not trailer weight. A Touring with two adults, 200 lb of gear, and a 480 lb tongue uses 1,120 lb of its 1,410 lb payload, leaving 290 lb. Put four adults in the same vehicle and the tongue load that was fine becomes 25 lb over the sticker. The trailer did not change. The headcount did.",
  },
  {
    q: "How do I know if my Ascent has the CVT fluid cooler?",
    a: "Check the transmission model code, not the trim badge. Subaru identifies the CVT as TR690S when the air-cooled cooler is fitted and TR690G when it is not, and the code appears on the transmission identification label and the underhood plate. A dealer can also pull it from the VIN. Do not assume a higher trim guarantees the cooler, and do not take a seller's word for a 5,000 lb rating without the code in front of you.",
  },
];

const CODE_TABLE = [
  [
    "TR690S",
    "Air-cooled CVT fluid cooler fitted",
    "5,000 lb",
    "500 lb",
    "Premium and above, properly equipped",
  ],
  [
    "TR690G",
    "No CVT fluid cooler",
    "2,000 lb",
    "200 lb",
    "Same trim, same body, lower rating",
  ],
  [
    "Base trim, 2019\u20132024",
    "Rated 2,000 lb in Subaru literature",
    "2,000 lb",
    "200 lb",
    "Trim discontinued for 2025",
  ],
];

const PAYLOAD_TABLE = [
  ["Premium, two adults", "1,567 lb", "340 + 200 + 100", "3,500 lb at 13%", "1,095 lb", "472 lb"],
  ["Touring, two adults", "1,410 lb", "340 + 200 + 100", "3,500 lb at 13%", "1,095 lb", "315 lb"],
  ["Touring, two adults, 4,500 lb trailer", "1,410 lb", "340 + 200 + 100", "4,500 lb at 13%", "1,225 lb", "185 lb"],
  ["Onyx, two adults and two children", "1,467 lb", "520 + 200 + 100", "4,000 lb at 12%", "1,300 lb", "167 lb"],
  ["Touring, four adults", "1,410 lb", "680 + 200 + 100", "3,500 lb at 13%", "1,435 lb", "25 lb over"],
];

const TONGUE_TABLE = [
  ["3,000 lb", "360 lb", "390 lb", "16.7%", "Plenty of margin"],
  ["3,500 lb", "420 lb", "455 lb", "14.3%", "The best fit for an Ascent"],
  ["4,000 lb", "480 lb", "520 lb", "12.5%", "Load light and forward"],
  ["4,500 lb", "540 lb", "585 lb", "11.1%", "Under-loaded tongue, sway risk"],
  ["5,000 lb", "600 lb", "650 lb", "10.0%", "Bottom edge of the stability band"],
];

const CHECK_TABLE = [
  [
    "Transmission code",
    "Decides whether the rating is 5,000 lb or 2,000 lb",
    "Identification label on the transmission; TR690S vs TR690G",
  ],
  [
    "Receiver",
    "Must be a Subaru Class III, two-inch, rated 5,000/500, and weight-carrying only",
    "Label on the hitch tube and the dealer accessory invoice",
  ],
  [
    "Seven-pin connector",
    "A four-pin plug has no brake circuit, so trailer brakes cannot work",
    "The plug on the bumper, tested with a meter",
  ],
  [
    "Payload sticker",
    "Trim changes it by 169 lb; options change it further",
    "Driver's door jamb",
  ],
  [
    "Tires",
    "245/60R18 105H is standard; 20-inch trims carry a shorter sidewall",
    "Tire sidewall and the door jamb pressure label",
  ],
];

const CHECK_STEPS = [
  {
    name: "Read the transmission code",
    text: "Find the identification label and confirm TR690S or TR690G. Everything else in this process assumes you know which one you have.",
  },
  {
    name: "Confirm the receiver and the wiring",
    text: "A two-inch Class III receiver with a 5,000/500 label and a seven-pin plug. A four-pin connector means no brake controller, which ends the discussion above 1,000 lb.",
  },
  {
    name: "Read the door jamb",
    text: "Note the payload figure and the front and rear GAWR. The trailer has to fit inside all three, not just the one on the brochure.",
  },
  {
    name: "Weigh the rig loaded",
    text: "Three passes at a CAT scale: Ascent alone, Ascent with passengers and gear, then the combination. The steer axle reading is the one that tells you whether the tongue load is stealing grip.",
  },
  {
    name: "Compare before you shop",
    text: "Take the tongue weight at 13 percent of the trailer's gross weight and subtract it from payload along with every passenger. If the result is negative, the trailer is too big regardless of its rating.",
  },
];

export default function CanSubaruAscentTowTravelTrailerPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <ArticleJsonLd
        title="Can a Subaru Ascent Tow a Travel Trailer? Read the CVT Code"
        description="Subaru splits the Ascent's 5,000 lb tow rating by transmission type, not by trim. What the cooler code means, what the 500 lb tongue limit leaves for trailer size, and why Subaru's own hitch rules out weight distribution."
        url="https://www.rvtowingcalc.com/guides/can-subaru-ascent-tow-travel-trailer"
        datePublished="2026-10-22"
      />
      <FaqJsonLd
        faqs={FAQS}
        baseUrl="https://www.rvtowingcalc.com/guides/can-subaru-ascent-tow-travel-trailer"
      />
      <HowToJsonLd
        name="How to confirm a Subaru Ascent's real towing limits"
        description="A five-step check of the transmission code, hitch hardware, wiring, door jamb ratings, and a loaded CAT scale pass."
        steps={CHECK_STEPS}
        totalTime="PT2H"
        url="https://www.rvtowingcalc.com/guides/can-subaru-ascent-tow-travel-trailer"
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
        <span className="text-gray-900">Subaru Ascent Towing</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
        Can a Subaru Ascent Tow a Travel Trailer?
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        A used 2021 Ascent Premium can be a 5,000 lb tow vehicle or a 2,000 lb
        one, and the tailgate badge reads the same either way. What separates
        them is a transmission code on a label under the hood: TR690S carries an
        air-cooled CVT fluid cooler and the full rating, TR690G does not and
        falls to 2,000 lb with a 200 lb tongue cap.
      </p>
      <p className="mt-3 text-lg text-gray-600">
        Most builders split a tow rating by driveline or by an optional tow
        package. Subaru splits it by a cooler, which is the one component a buyer
        never looks at. That single detail decides which trailer fits, whether
        trailer brakes are mandatory, and whether the number on the window
        sticker describes the car in your driveway.
      </p>

      <div className="mt-8 rounded-xl bg-brand-50 p-6">
        <h2 className="text-lg font-bold text-brand-800">The Short Answer</h2>
        <p className="mt-2 text-brand-700">
          An Ascent tows a travel trailer in the{" "}
          <strong>3,200 to 3,800 lb gross weight range</strong> comfortably, and
          it does that while carrying seven people. The 5,000 lb rating requires
          the cooler version of the CVT, a Subaru Class III two-inch receiver,
          and a working seven-pin circuit; without the cooler it is{" "}
          <strong>2,000 lb and a 200 lb tongue cap</strong>. Even at the full
          rating the tongue limit is{" "}
          <strong>500 lb, which is exactly 10 percent of 5,000</strong>, the
          bottom edge of the recommended band. Subaru&apos;s own hitch is
          weight-carrying only, so you cannot recover that lost margin with a
          weight distribution hitch. Work backwards from the tongue cap.
        </p>
      </div>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        The Rating Is Split by a Transmission Code, Not a Trim
      </h2>
      <p className="mt-3 text-gray-700">
        Subaru&apos;s trailer towing section does not print one number and a
        list of conditions. It prints two tables, headed by transmission type,
        and the two tables are 3,000 lb apart. The distinction is a small
        air-cooled heat exchanger for the continuously variable transmission
        fluid, which sheds heat the radiator cannot when the transmission is
        holding a load at low speed.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">
                CVT code
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Cooler
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Max trailer
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Max tongue
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Applies to
              </th>
            </tr>
          </thead>
          <tbody>
            {CODE_TABLE.map((row, i) => (
              <tr key={row[0]} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                <td className="border px-3 py-2 text-xs font-bold text-brand-700">
                  {row[0]}
                </td>
                <td className="border px-3 py-2 text-xs">{row[1]}</td>
                <td className="border px-3 py-2 font-semibold">{row[2]}</td>
                <td className="border px-3 py-2">{row[3]}</td>
                <td className="border px-3 py-2 text-xs">{row[4]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm text-gray-500">
        Figures from the Ascent owner&apos;s manual trailer towing section, which
        keys the tables to the transmission identification code. Confirm the code
        on your own vehicle before relying on either column.
      </p>

      <p className="mt-4 text-gray-700">
        In practice this means the first question about any Ascent is not
        &quot;Premium or Limited&quot; but &quot;which transmission is in
        it.&quot; The code sits on the transmission identification label and on
        the underhood plate, and a dealer can pull it from the VIN. A seller who
        claims a 5,000 lb rating without the code in hand is quoting a brochure,
        not a vehicle.
      </p>
      <p className="mt-3 text-gray-700">
        One more wrinkle in the same direction: the Base trim carried a 2,000 lb
        rating through 2024 regardless of cooler, and Subaru dropped the Base for
        2025. Every new Ascent is therefore a potential 5,000 lb vehicle, with the
        emphasis on potential. That is the{" "}
        <Link
          href="/towing-capacity-calculator"
          className="text-brand-600 hover:underline"
        >
          towing capacity calculator
        </Link>{" "}
        argument in one line: a rating is a claim about a configuration, and the
        configuration has to be verified.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        What 6,000 lb of GVWR Leaves Behind the Second Row
      </h2>
      <p className="mt-3 text-gray-700">
        The Ascent has a 6,000 lb GVWR on every trim, and a curb weight that runs
        from 4,421 lb on a Base to 4,590 lb on a Touring. Subtract one from the
        other and payload lands between 1,410 and 1,579 lb. The 169 lb spread is
        not trivia. It is leather, a sunroof, a power liftgate, and 20-inch
        wheels, and it is the difference between a 3,500 lb trailer with margin
        and the same trailer with none.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">Setup</th>
              <th className="border px-3 py-2 text-left font-semibold">
                Payload
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                People, gear, hitch
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Trailer and tongue
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Total used
              </th>
              <th className="border px-3 py-2 text-left font-semibold">Margin</th>
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
                <td className="border px-3 py-2 text-xs">{row[4]}</td>
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
        Passengers at 170 lb each, children at 90 lb, gear at 200 lb, hitch
        hardware at 100 lb. No roof box, no cooler, no bicycles. The{" "}
        <Link href="/payload-calculator" className="text-brand-600 hover:underline">
          payload calculator
        </Link>{" "}
        runs the same stack with your numbers.
      </p>

      <p className="mt-4 text-gray-700">
        The Touring loses 157 lb of margin against the Premium on an identical
        trip, purely from trim weight, and a family of four in a Touring runs out
        of payload on a trailer the vehicle is rated to pull. This is why{" "}
        <Link
          href="/guides/payload-capacity"
          className="text-brand-600 hover:underline"
        >
          payload
        </Link>{" "}
        decides the purchase more often than the tow rating does.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        500 lb Is 10 Percent of 5,000, and That Is the Whole Problem
      </h2>
      <p className="mt-3 text-gray-700">
        Travel trailers tow best with 10 to 15 percent of their gross weight on
        the ball. Subaru caps the Ascent at 500 lb, which is 10 percent of the
        5,000 lb rating. Use the full rating and you are towing at the absolute
        floor of the band, with the least resistance to a crosswind or a passing
        semi. Drop the trailer weight and the ratio improves, because the cap
        stays where it is.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">
                Trailer gross
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Tongue at 12%
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Tongue at 13%
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Highest ratio the cap allows
              </th>
              <th className="border px-3 py-2 text-left font-semibold">Verdict</th>
            </tr>
          </thead>
          <tbody>
            {TONGUE_TABLE.map((row, i) => (
              <tr key={row[0]} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                <td className="border px-3 py-2 text-xs font-semibold">
                  {row[0]}
                </td>
                <td className="border px-3 py-2 text-xs">{row[1]}</td>
                <td className="border px-3 py-2 text-xs">{row[2]}</td>
                <td className="border px-3 py-2 text-xs font-bold text-brand-700">
                  {row[3]}
                </td>
                <td className="border px-3 py-2 text-xs">{row[4]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm text-gray-500">
        The right-hand column is the one to take shopping. At 3,500 lb the cap
        leaves 14 percent, which is a stable rig. At 4,500 lb it leaves 11
        percent, which is a trailer that will feel loose in wind.
      </p>

      <p className="mt-4 text-gray-700">
        A practical rule for this vehicle: pick the trailer by its gross weight,
        then load it so the tongue lands at 13 percent, then check that the
        number is under 500. A 3,600 lb trailer at 13 percent puts 468 lb on the
        ball, inside the cap with a stable ratio. A 4,600 lb trailer tuned to 13
        percent needs 598 lb, which the vehicle does not have. The{" "}
        <Link
          href="/tongue-weight-calculator"
          className="text-brand-600 hover:underline"
        >
          tongue weight calculator
        </Link>{" "}
        and the{" "}
        <Link href="/guides/tongue-weight" className="text-brand-600 hover:underline">
          tongue weight guide
        </Link>{" "}
        cover the loading moves that change the ratio without changing the
        trailer.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Subaru&apos;s Hitch Is Weight-Carrying Only
      </h2>
      <p className="mt-3 text-gray-700">
        This is the part that separates the Ascent from every other 5,000 lb
        crossover in the class. The owner&apos;s manual is explicit: the supplied
        ball mount is a weight-carrying design and must not be used with any type
        of weight distributing hitch. Honda, Toyota, and Ford all permit weight
        distribution on their comparable vehicles, and it is the standard fix for
        a rear axle that sags under a loaded tongue.
      </p>
      <p className="mt-3 text-gray-700">
        On an Ascent the tongue load goes straight to the rear axle and the rear
        springs, with nothing to lever part of it back onto the front. You will
        see it as a headlight beam aimed at the trees and a steering wheel that
        feels light on a crowned road. An aftermarket receiver rated for weight
        distribution changes the hardware, not the 500 lb limit or the 6,000 lb
        GVWR that produced it, so the honest response is a smaller trailer rather
        than a more elaborate hitch.
      </p>
      <p className="mt-3 text-gray-700">
        Two more manual details matter at the hitch. Subaru prohibits drilling
        into the frame or underbody to mount a hitch, and it requires the
        standard bumper beam to go back on if the hitch is removed. With a hitch
        installed, the rear tow hook cannot be used. That is not marketing
        language; it is the difference between a vehicle that passes a body
        inspection and one with a hole in the floor above the rear differential.
        The{" "}
        <Link
          href="/guides/weight-distribution-hitch-setup"
          className="text-brand-600 hover:underline"
        >
          weight distribution setup guide
        </Link>{" "}
        is worth reading to understand what you are giving up, and worth ignoring
        if your hitch is the Subaru one.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        What Actually Fits, in Trailer Terms
      </h2>
      <p className="mt-3 text-gray-700">
        Working from the tongue cap rather than the tow rating produces a narrow,
        usable answer. A 2,000 to 3,000 lb teardrop or pop-up fits any Ascent,
        including a cooler-less one, and a 200 lb tongue cap is generous for that
        class. The target for a 5,000 lb vehicle is a single-axle trailer of
        3,200 to 3,800 lb gross and 16 to 20 feet, which puts the tongue between
        416 and 494 lb at 13 percent.
      </p>
      <p className="mt-3 text-gray-700">
        Four thousand pounds is reachable if the tongue is loaded to 12 percent
        and only two adults ride in front of it. Four thousand five hundred is
        where the arithmetic turns against you, and 5,000 lb is a number that
        exists on paper with a 10 percent tongue that no experienced tower would
        choose. If the trailer you want is 24 feet and 4,800 lb, this is the
        wrong vehicle, and the{" "}
        <Link
          href="/guides/can-suv-tow-small-travel-trailer"
          className="text-brand-600 hover:underline"
        >
          SUV towing guide
        </Link>{" "}
        explains what class of vehicle does fit that trailer.
      </p>
      <p className="mt-3 text-gray-700">
        Frontal area is the second constraint and it is invisible on a spec
        sheet. A 2.4 liter turbo making 277 lb-ft at 2,000 rpm pulls 3,500 lb of
        flatbed without strain. Hang a 20 foot trailer with an 8 foot flat front
        behind it and the engine is working against air at 65 mph. Subaru
        publishes no frontal area figure, so the practical test is a loaded test
        drive. The{" "}
        <Link
          href="/guides/trailer-length-vs-wheelbase-rule"
          className="text-brand-600 hover:underline"
        >
          trailer length and wheelbase guide
        </Link>{" "}
        covers the 113.8 inch wheelbase side of the same question.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Brakes, Transmission Heat, and Fuel Stops
      </h2>
      <p className="mt-3 text-gray-700">
        Subaru requires trailer brakes on anything over 1,000 lb. That threshold
        is far below the 3,000 lb figure most states use, and it means almost
        every travel trailer an Ascent can pull needs its own brakes and a
        proportional controller. A four-pin connector cannot run one, so the
        seven-pin plug is part of the towing equipment rather than an upgrade.
        The{" "}
        <Link
          href="/guides/trailer-brake-controller-setup"
          className="text-brand-600 hover:underline"
        >
          brake controller setup guide
        </Link>{" "}
        covers gain adjustment and the{" "}
        <Link
          href="/guides/trailer-wiring-harness-7-pin-troubleshooting"
          className="text-brand-600 hover:underline"
        >
          seven-pin wiring guide
        </Link>{" "}
        covers what to do when a pin goes dead.
      </p>
      <p className="mt-3 text-gray-700">
        Heat is the other half of the same story. The cooler that earns the 5,000
        lb rating is also the part under the most stress on a long grade, because
        a CVT holds engine speed high and slips less efficiently than a geared
        automatic. Watch transmission temperature on a climb and let the rig run
        at 55 mph in a lower range. The{" "}
        <Link
          href="/guides/mountain-towing-transmission-gears"
          className="text-brand-600 hover:underline"
        >
          mountain towing guide
        </Link>{" "}
        covers gear selection and descent control for a vehicle without an
        engine brake.
      </p>
      <p className="mt-3 text-gray-700">
        Fuel sets the daily rhythm. The tank holds 19.3 gallons, and a 3,500 lb
        trailer pulls consumption to roughly 9 to 11 mpg, which is 175 to 210
        miles between stops. That is short enough to matter in the West, where
        the gap between stations on a two-lane can be 80 miles. Regular 87 octane
        is all the engine asks for.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Before You Buy: Five Things to Check on the Car
      </h2>
      <p className="mt-3 text-gray-700">
        All of this is checkable in about twenty minutes with the vehicle in
        front of you, and none of it requires trusting a window sticker that was
        printed for a different build.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">Check</th>
              <th className="border px-3 py-2 text-left font-semibold">
                Why it decides the answer
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Where to look
              </th>
            </tr>
          </thead>
          <tbody>
            {CHECK_TABLE.map((row, i) => (
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
        Follow the sequence in order, because each step can end the process. A
        2,000 lb vehicle with a four-pin plug is not a travel trailer tow
        vehicle, and no amount of negotiation changes that. Once the hardware
        checks out, a{" "}
        <Link
          href="/guides/cat-scale-weighing"
          className="text-brand-600 hover:underline"
        >
          CAT scale pass
        </Link>{" "}
        turns the ratings into measured axle loads.
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
        <h2 className="text-2xl font-bold">Check the Rig Before the Trailer</h2>
        <p className="mt-2 text-brand-100">
          Your Ascent&apos;s payload, your passengers, and a trailer&apos;s
          tongue weight in one place. Free, independent, no sign-up.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link
            href="/towing-capacity-calculator"
            className="inline-block rounded-xl bg-white px-6 py-3 text-sm font-bold text-brand-700 shadow-lg transition-all hover:bg-brand-50 active:scale-[0.99]"
          >
            Towing Capacity Calculator
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

      <AmazonAffiliate
        categories={["brake-controller", "tongue-scale", "trailer-lights"]}
      />

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Sources &amp; References
      </h2>
      <ul className="mt-3 space-y-1 text-sm text-gray-600">
        <li>
          <a
            href="https://www.subaru.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            Subaru of America: Ascent owner&apos;s manual trailer towing section,
            accessory hitch specifications, and transmission identification codes
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
              href="/guides/can-honda-pilot-tow-travel-trailer"
              className="text-brand-600 hover:underline"
            >
              Can a Honda Pilot Tow a Travel Trailer?
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
              href="/guides/tongue-weight"
              className="text-brand-600 hover:underline"
            >
              Tongue Weight Guide
            </Link>
          </li>
          <li>
            <Link
              href="/guides/gvwr-vs-gcwr"
              className="text-brand-600 hover:underline"
            >
              GVWR vs GCWR
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
