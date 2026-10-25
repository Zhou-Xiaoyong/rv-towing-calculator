import type { Metadata } from "next";
import Link from "next/link";
import { FaqJsonLd, ArticleJsonLd, HowToJsonLd } from "@/components/seo/JsonLd";
import { DEFAULT_OG_IMAGES } from "@/lib/seo/default-og-image";

import AmazonAffiliate from "@/components/AmazonAffiliate";

export const metadata: Metadata = {
  title: "What Does a Tow Package Include? The Parts That Set Your Rating",
  description:
    "Three F-150 tow package codes share one receiver yet are rated 2,700 lb apart. Here is what a tow package really adds, and the payload that hardware costs you.",
  keywords: [
    "what does a tow package include",
    "max trailer tow package",
    "trailer tow package vs max tow",
    "f150 53c max trailer tow package",
    "ram trailer tow group",
    "does my truck have a tow package",
    "factory tow package payload",
    "integrated trailer brake controller",
  ],
  alternates: {
    canonical:
      "https://www.rvtowingcalc.com/guides/truck-tow-package-whats-included",
  },
  openGraph: {
    title: "What Does a Tow Package Include? The Parts That Set Your Rating",
    description:
      "A receiver is not a tow package. What Ford 53B, 53A, and 53C actually contain, the Ram 1500 parts that are standard instead, and the payload cost of the hardware.",
    url: "https://www.rvtowingcalc.com/guides/truck-tow-package-whats-included",
    images: DEFAULT_OG_IMAGES,
  },
};

const FAQS = [
  {
    q: "How do I know if my truck has a factory tow package?",
    a: "Read the original window sticker, which a dealer can reprint from the VIN, and look for the package line: 53A, 53B, or 53C on an F-150, Trailer-Tow Group on a Ram. A receiver and a 7-pin connector are not proof, because both can be added afterward and both appear on trucks that never got the package. The dash is the honest test. If there is no gain dial or brake-controller screen beside the wheel, the truck was built without an integrated controller.",
  },
  {
    q: "Is a tow package the same as tow/haul mode?",
    a: "No. Tow/haul is a calibration in the transmission computer that holds gears longer and downshifts for engine braking on a grade. It adds zero pounds to any rating and changes no hardware. You can press the button on a truck with a bumper ball and it will still be limited to the bumper's rating. Packages are parts, and the parts are what the towing guide looks up.",
  },
  {
    q: "Can I add a tow package to a truck that does not have one?",
    a: "You can add most of it: receiver, 7-pin harness, brake controller, and on some models an auxiliary cooler, for roughly $700 to $1,200 in parts. What you cannot add economically is the axle ratio, and the axle ratio is often what separates the top row of the towing chart from the middle one. A dealer can change gears for $1,500 to $2,500, which is why buying the right truck costs less than building one.",
  },
  {
    q: "Does a tow package lower my payload rating?",
    a: "Yes, by roughly 150 to 230 lb on a half-ton, and the sticker already reflects it. Heavier rear bumper, locking axle, extra cooler and lines, and the larger fuel tank all count as curb weight, and payload is GVWR minus curb weight. A Max Trailer Tow F-150 commonly shows 100 to 200 lb less payload than a similarly trimmed truck without it, while carrying a rating 2,700 lb higher.",
  },
  {
    q: "Do I still need a weight distribution hitch with a tow package?",
    a: "Usually yes, above about 5,000 lb of trailer. Ram's own towing material recommends weight distribution over that threshold, and the receiver on your truck carries two separate numbers stamped on the tube: a weight-carrying limit and a weight-distributing limit. Most factory Class IV receivers read something like 5,000 lb carrying and 11,000 lb distributing. The package raises the second number, not the first.",
  },
];

const CODE_TABLE = [
  [
    "53B",
    "Class IV Trailer Hitch",
    "2-inch receiver, 4-pin and 7-pin connectors",
    "No auxiliary cooler, no brake controller, standard axle",
    "The lowest row in the guide for that build",
  ],
  [
    "53A",
    "Trailer Tow Package",
    "53B contents plus auxiliary transmission cooler, upgraded front stabilizer bar, engine oil cooler with the 3.5L",
    "Brake controller is a separate option on many builds",
    "Middle row, roughly 2,700 lb under 53C",
  ],
  [
    "53C",
    "Max Trailer Tow Package",
    "53A contents plus 3.55 electronic-locking rear axle, 36-gallon tank, upgraded rear bumper, integrated brake controller",
    "Requires the 3.5L EcoBoost to reach the top figure",
    "Top row: 11,100 lb becomes 13,200 lb",
  ],
  [
    "None",
    "Step bumper ball",
    "A ball mounted on the bumper",
    "No receiver, no wiring, no cooling",
    "5,000 lb conventional limit on most half-tons",
  ],
];

const PART_TABLE = [
  [
    "Class IV receiver",
    "Carries the tongue and spreads it into the frame rails",
    "Two-inch opening; sticker on the tube lists separate carrying and distributing limits",
  ],
  [
    "7-pin connector",
    "Adds the charge line and the electric brake signal the 4-pin cannot carry",
    "Count the pins under the bumper flap; four pins means no trailer brakes",
  ],
  [
    "Integrated brake controller",
    "Modulates trailer brakes with the pedal instead of a timed aftermarket box",
    "Gain dial or trailer-brake screen left of the steering column",
  ],
  [
    "Auxiliary transmission cooler",
    "Rejects the extra heat a loaded converter makes on a long grade",
    "A second small radiator stacked in front of the A/C condenser",
  ],
  [
    "Axle ratio",
    "The multiplier behind every rating row: 3.21 pulls less than 3.92 in the same truck",
    "Two- or three-character axle code on the door jamb tag, or the tag on the diff cover",
  ],
  [
    "Tow mirrors, trailer TPMS",
    "Convenience and visibility, no effect on any rating",
    "Wide glass, and a trailer screen in the cluster on late-model trucks",
  ],
];

const COST_TABLE = [
  ["36-gallon tank instead of 26", "61 lb of fuel", "10 gallons at about 6.1 lb per gallon"],
  ["Class IV receiver and frame brackets", "40 to 55 lb", "Bolted and welded steel under the rear rail"],
  ["3.55 locking axle, heavier rear bumper", "60 to 90 lb", "Rotating mass and a thicker bumper beam"],
  ["Auxiliary cooler, lines, and fluid", "15 to 25 lb", "Full of fluid, mounted ahead of the radiator"],
  ["Integrated brake controller and harness", "3 lb", "The one part that is nearly free in weight"],
];

const CHECK_STEPS = [
  {
    name: "Read the door jamb sticker",
    text: "Two numbers matter. GVWR is the ceiling for the whole truck, and the line that begins with \"the combined weight of occupants and cargo should never exceed\" is your payload for that specific truck, not for the model.",
  },
  {
    name: "Look at the receiver tube",
    text: "A sticker on the tube carries a weight-carrying and a weight-distributing limit. If the sticker is gone, measure the opening: two inches square is Class IV, and a 1.25-inch opening is a Class II rated near 3,500 lb.",
  },
  {
    name: "Count pins and find the controller",
    text: "Seven pins and no gain dial means the wiring is there and the brake controller is not. Budget $250 to $400 installed, or $120 to $200 for a plug-and-play unit on a truck with a factory harness.",
  },
  {
    name: "Decode the axle ratio",
    text: "The axle code on the jamb tag is two or three characters and it decides which rows of the towing chart apply. A Ram 1500 with a 3.21 axle and the same 5.7L as a 3.92 truck is rated well below it.",
  },
  {
    name: "Match your row in the towing guide",
    text: "Download the guide for your model year and find the line that matches cab, bed, drive, engine, axle, and package. Every number above that line describes a truck you do not own.",
  },
];

export default function TruckTowPackagePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <ArticleJsonLd
        title="What Does a Tow Package Include? The Parts That Set Your Rating"
        description="A tow package is drivetrain and chassis hardware, not the hitch. What Ford 53B, 53A, and 53C contain, what Ram includes as standard instead, and the payload the hardware takes off the sticker."
        url="https://www.rvtowingcalc.com/guides/truck-tow-package-whats-included"
        datePublished="2026-10-25"
      />
      <FaqJsonLd
        faqs={FAQS}
        baseUrl="https://www.rvtowingcalc.com/guides/truck-tow-package-whats-included"
      />
      <HowToJsonLd
        name="How to find out what tow package your truck has"
        description="Check the door jamb payload sticker, read the receiver tube limits, count the wiring pins, find the brake controller, decode the axle ratio, and match your configuration to the manufacturer towing guide."
        steps={CHECK_STEPS}
        totalTime="PT1H"
        url="https://www.rvtowingcalc.com/guides/truck-tow-package-whats-included"
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
        <span className="text-gray-900">Truck Tow Packages</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
        What Does a Tow Package Include? The Parts That Set Your Rating
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        A 2025 F-150 with the 3.5L EcoBoost and the 3.55 axle is listed at
        11,100 lb with the Trailer Tow Package. Order the same cab, the same
        bed, and the same engine with the Max Trailer Tow Package and the guide
        says 13,200 lb. The frame is the same part number. So is the engine.
      </p>
      <p className="mt-3 text-lg text-gray-600">
        The receiver on the back of both trucks looks identical, which is why
        buyers keep asking what a tow package includes and keep getting a
        brochure answer. The rating is not in the hitch. It lives in a cooler,
        an axle ratio, a brake controller, and a package code that was checked
        on the order sheet four years before you bought the truck.
      </p>

      <div className="mt-8 rounded-xl bg-brand-50 p-6">
        <h2 className="text-lg font-bold text-brand-800">The Short Answer</h2>
        <p className="mt-2 text-brand-700">
          A real tow package adds four things that change the rating:{" "}
          <strong>
            a 7-pin harness with an integrated brake controller, extra
            transmission and engine cooling, a numerically higher axle ratio,
            and a receiver rated for the load
          </strong>
          . Ford sells the first two of those as packages 53A and 53C, and sells
          53B, which is a Class IV hitch with wiring and nothing else, on trucks
          that still show a receiver in the photos. On a half-ton, the gap
          between 53B and 53C is about 2,700 lb of trailer. You can add a hitch
          and a controller in an afternoon. You cannot add the axle ratio.
        </p>
      </div>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Three Codes Wear the Same Badge
      </h2>
      <p className="mt-3 text-gray-700">
        Ford is the clearest example because the codes are printed on the window
        sticker and customers can look them up. All three codes mean a receiver
        exists. Only one of them puts the truck on the top row of the towing
        chart, and the difference is not cosmetic: 53C brings a 3.55
        electronic-locking rear axle (3.73 with the Heavy-Duty Payload Package),
        a 36-gallon tank, an upgraded rear bumper, and the integrated brake
        controller. 53A brings the cooler and the stabilizer bar. 53B brings the
        hitch.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">Code</th>
              <th className="border px-3 py-2 text-left font-semibold">
                Name on the sticker
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                What is in it
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                What is missing
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Effect on the rating
              </th>
            </tr>
          </thead>
          <tbody>
            {CODE_TABLE.map((row, i) => (
              <tr key={row[0]} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                <td className="border px-3 py-2 text-xs font-mono font-semibold">
                  {row[0]}
                </td>
                <td className="border px-3 py-2 text-xs font-semibold">
                  {row[1]}
                </td>
                <td className="border px-3 py-2 text-xs">{row[2]}</td>
                <td className="border px-3 py-2 text-xs">{row[3]}</td>
                <td className="border px-3 py-2 text-xs text-danger-700">
                  {row[4]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm text-gray-500">
        Codes and contents vary by model year. The pattern does not: a hitch and
        wiring can be bought separately from the package that carries the
        rating.
      </p>

      <p className="mt-4 text-gray-700">
        Wheel size is part of the package too, and it is the line nobody reads.
        Ford publishes the 13,200 lb figure for a truck on the 20-inch wheel and
        tire combination. Fit 17-inch wheels for a softer ride, or swap the
        factory tires for a taller all-terrain set, and you have stepped out of
        the configuration the guide measured. The cooler, the axle, and the
        controller are still on the truck. The paperwork no longer describes it.
      </p>

      <p className="mt-3 text-gray-700">
        One trap sits inside those codes. The brake controller is standard on
        53C and a stand-alone option on 53A and 53B, so a gain dial beside the
        wheel does not prove the truck is a Max Tow build, and its absence does
        not prove the truck is a base model. Read the code. The{" "}
        <Link
          href="/guides/towing-capacity-explained"
          className="text-brand-600 hover:underline"
        >
          towing capacity guide
        </Link>{" "}
        explains how the rest of the row is built, including the 80 percent
        practice most owners apply once they find their real number.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        What Is Actually Inside the Box
      </h2>
      <p className="mt-3 text-gray-700">
        Ram inverts the Ford logic, which is why brand folklore is unreliable.
        On the 2025 Ram 1500 the Class IV receiver and the 4-pin/7-pin connector
        are standard equipment across the lineup. The Trailer-Tow Group is what
        adds the integrated brake controller, the 7x11 tow mirrors, trailer tire
        pressure monitoring, trailer reverse steering, and trailer light check.
        So a Ram with a receiver and seven pins tells you nothing. Look for the
        controller on the dash.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">Part</th>
              <th className="border px-3 py-2 text-left font-semibold">
                What it does
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                How to confirm it on a used truck
              </th>
            </tr>
          </thead>
          <tbody>
            {PART_TABLE.map((row, i) => (
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
      <p className="mt-3 text-sm text-gray-500">
        Aftermarket parts cover the first four rows. Axle ratio is the row you
        have to live with, and it is why a used Max Tow truck sells for more
        than the option cost new.
      </p>

      <p className="mt-4 text-gray-700">
        The cooler matters more than its size suggests. A transmission pulling
        7,000 lb into a 6 percent grade at 55 mph is shedding heat through a
        converter that is always slipping, and the factory cooler is sized for
        the package the truck was ordered with. Buyers who add a receiver and a
        controller to a 53B truck and then tow 8,000 lb are relying on a cooling
        system that was never asked to do that work. If you are building a truck
        up instead of buying one built, price the cooler first.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        The Package Takes Payload Back
      </h2>
      <p className="mt-3 text-gray-700">
        Every part in that list is steel, fluid, or both, and none of it is
        weightless. Payload is GVWR minus curb weight, so hardware added at the
        factory comes straight off the yellow sticker before you load a single
        passenger. The package that raises your tow rating by 2,700 lb lowers
        your payload by 150 to 230 lb.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">
                Package item
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Weight
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Where it comes from
              </th>
            </tr>
          </thead>
          <tbody>
            {COST_TABLE.map((row, i) => (
              <tr key={row[0]} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                <td className="border px-3 py-2 text-xs font-semibold">
                  {row[0]}
                </td>
                <td className="border px-3 py-2 text-xs font-mono text-brand-700">
                  {row[1]}
                </td>
                <td className="border px-3 py-2 text-xs">{row[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-4 text-gray-700">
        Put a real trailer behind that truck and the arithmetic stops being
        abstract.
      </p>

      <div className="mt-6 rounded-xl bg-gray-50 p-6">
        <h3 className="font-bold text-gray-900">Payload Left for a 7,600 lb Trailer</h3>
        <p className="mt-3 font-mono text-sm text-gray-800">
          payload = GVWR &minus; curb weight
        </p>
        <p className="mt-3 text-sm text-gray-700">
          7,050 lb GVWR &minus; 5,300 lb curb = <strong>1,750 lb</strong> on the
          yellow sticker
        </p>
        <p className="mt-2 text-sm text-gray-700">
          1,750 &minus; 988 lb tongue (13 percent of 7,600) &minus; 80 lb hitch
          head &minus; 480 lb of people = <strong>202 lb</strong>
        </p>
        <p className="mt-2 text-sm text-gray-700">
          That is one cooler, one generator, and a full tank of firewood short
          of the family trip, on a truck rated to pull 11,000 lb.
        </p>
      </div>

      <p className="mt-4 text-gray-700">
        This is the part the tow rating conversation usually skips. The rating
        was never the binding constraint. The tongue weight of a trailer heavy
        enough to need the package is what runs out first, which is why the{" "}
        <Link
          href="/guides/payload-capacity"
          className="text-brand-600 hover:underline"
        >
          payload guide
        </Link>{" "}
        and the{" "}
        <Link
          href="/guides/cargo-carrying-capacity-ccc"
          className="text-brand-600 hover:underline"
        >
          cargo capacity arithmetic
        </Link>{" "}
        matter more than the headline number in the brochure. If you want the
        comparison across brands at a fixed trailer weight, the{" "}
        <Link
          href="/guides/best-half-ton-trucks-8000-lbs"
          className="text-brand-600 hover:underline"
        >
          half-ton ranking at 8,000 lb
        </Link>{" "}
        does that math with the stickers.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Read Your Own Truck in Ten Minutes
      </h2>
      <p className="mt-3 text-gray-700">
        Five checks, no tools beyond a flashlight, and they settle what your
        truck can actually do before you shop for a trailer that assumes
        something else.
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

      <p className="mt-4 text-gray-700">
        A dealer can print the original window sticker from the VIN for about
        nothing, and it lists the package codes, the axle ratio, and the tank
        size as line items. That single page ends most arguments about whether a
        truck has the tow package. It also explains why two identical-looking
        trucks are priced $2,000 apart.
      </p>
      <p className="mt-3 text-gray-700">
        One more number to keep separate: the weight-distributing threshold. Ram
        recommends weight distribution above 5,000 lb of trailer, and the
        receivers on most half-tons carry two ratings for that reason. A factory
        package raises the distributing limit far more than the carrying limit,
        so the same truck that handles a 6,000 lb flatbed on the ball needs bars
        under a 6,000 lb travel trailer with a tall frontal area. The{" "}
        <Link
          href="/guides/trailer-brake-laws-by-state"
          className="text-brand-600 hover:underline"
        >
          state brake requirements
        </Link>{" "}
        and{" "}
        <Link
          href="/guides/tow-haul-mode-explained"
          className="text-brand-600 hover:underline"
        >
          tow/haul mode
        </Link>{" "}
        are the other two settings that come up the first time you hook up.
      </p>
      <p className="mt-3 text-gray-700">
        A leveling kit changes the answer as well, because the package rating
        assumes the ride height the truck was built at. Raise the front an inch
        and a half and the same hitch now sits at a different angle under load,
        which is why the{" "}
        <Link
          href="/guides/lifted-truck-towing-capacity"
          className="text-brand-600 hover:underline"
        >
          lifted truck rating discussion
        </Link>{" "}
        starts with the receiver height rather than the springs.
      </p>

      <div className="mt-10 rounded-2xl bg-brand-600 p-8 text-center text-white">
        <h2 className="text-2xl font-bold">Check the Sticker, Not the Brochure</h2>
        <p className="mt-2 text-brand-100">
          Payload, tongue weight, and gross combined weight decide what your
          truck can tow. Free, independent, no sign-up.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
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

      <AmazonAffiliate categories={["brake-controller", "trailer-lights"]} />

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Sources &amp; References
      </h2>
      <ul className="mt-3 space-y-1 text-sm text-gray-600">
        <li>
          <a
            href="https://www.ford.com/trucks/f150/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            Ford: F-150 towing and payload specifications by configuration
          </a>
        </li>
        <li>
          <a
            href="https://www.ramtrucks.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            Ram Trucks: 1500 payload and towing brochures by model year
          </a>
        </li>
        <li>
          <a
            href="https://www.nhtsa.gov/vehicle-safety/rv"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            NHTSA: RV safety information and recall lookup by VIN
          </a>
        </li>
        <li>
          <a
            href="https://www.rvia.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            RV Industry Association: weight labeling standards for towable RVs
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
              Payload Capacity Explained
            </Link>
          </li>
          <li>
            <Link
              href="/guides/towing-capacity-explained"
              className="text-brand-600 hover:underline"
            >
              Towing Capacity Explained
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
              href="/guides/tow-haul-mode-explained"
              className="text-brand-600 hover:underline"
            >
              Tow/Haul Mode Explained
            </Link>
          </li>
          <li>
            <Link
              href="/guides/trailer-brake-laws-by-state"
              className="text-brand-600 hover:underline"
            >
              Trailer Brake Laws by State
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
        </ul>
      </div>
    </div>
  );
}
