import type { Metadata } from "next";
import Link from "next/link";
import { FaqJsonLd, ArticleJsonLd, HowToJsonLd } from "@/components/seo/JsonLd";
import { DEFAULT_OG_IMAGES } from "@/lib/seo/default-og-image";

import AmazonAffiliate from "@/components/AmazonAffiliate";

export const metadata: Metadata = {
  title: "Thanksgiving RV Rental: Is Your Truck Rated for It?",
  description:
    "A Thanksgiving rental trailer shows up 165 lb heavier on the tongue than the listing says. The receiver label, the payload ledger, and the yard walkaround.",
  keywords: [
    "thanksgiving rv rental",
    "towing a rental trailer",
    "can my truck tow a rental camper",
    "dry hitch weight vs loaded tongue weight",
    "weight carrying vs weight distributing rating",
    "rental trailer weight distribution hitch",
    "thanksgiving camping trip",
  ],
  alternates: {
    canonical:
      "https://www.rvtowingcalc.com/guides/thanksgiving-rv-rental-towing-check",
  },
  openGraph: {
    title: "Thanksgiving RV Rental: Is Your Truck Rated for It?",
    description:
      "The listing says 465 lb of hitch weight. The trailer on the lot puts 630 on your ball, and the receiver label has a 500 lb line almost nobody reads.",
    url: "https://www.rvtowingcalc.com/guides/thanksgiving-rv-rental-towing-check",
    images: DEFAULT_OG_IMAGES,
  },
};

const FAQS = [
  {
    q: "Can a half-ton truck tow a rental travel trailer for Thanksgiving?",
    a: "Usually yes, but not on the ball alone. A 22 ft rental bunkhouse loaded for a four day trip runs about 5,520 lb, and at 13 percent that is 718 lb of tongue weight. The receiver on a half-ton is typically rated 5,000 lb of trailer and 500 lb of tongue in weight carrying mode, so both numbers are exceeded before you leave the lot. With a weight distributing hitch the same receiver goes to 11,000 lb and 1,110 lb of tongue, which the rental fits under comfortably. The hitch decides the trip, not the tow rating.",
  },
  {
    q: "Does a rental travel trailer come with a weight distribution hitch?",
    a: "Rarely, and it is the first question to ask when you book. Most rental fleets hand over a ball mount and a coupler and nothing else, because a weight distributing head, shank and spring bars weigh close to 100 lb and renters lose them. If the yard offers one, take it and have them set it up with your truck loaded. If it does not, price the hitch before you commit to the trailer, because a 5,500 lb rental is not a ball mount trailer.",
  },
  {
    q: "Why is the hitch weight in the rental listing lower than what I measure?",
    a: "Because it was measured at the factory with empty propane cylinders and no battery. Two full 20 lb cylinders weigh about 110 lb with the steel, and a group 27 battery and box add roughly 55 lb. All of it sits on the A-frame ahead of the axles, so nearly every pound lands on the coupler. A 465 lb listing becomes 630 lb at the yard, and the tongue percentage jumps from 10.5 to 13.7 with nothing but propane and a battery added.",
  },
  {
    q: "What should I check at the rental yard before I drive away?",
    a: "Tire date codes on all four tires, the manufacture date stamped on the propane collar, the breakaway pin and battery, and all four lighting circuits through the seven pin. Then measure the coupler height on level ground, because a rental set up for a different truck will tow nose up and unload your front axle. Finish with a 15 mph manual brake application in the lot to confirm both drums grab evenly, and reset the controller gain before you reach a highway.",
  },
];

const LISTING_TABLE = [
  ["Hitch weight", "465 lb", "Empty cylinders, no battery", "630 lb", "+165"],
  ["Dry weight", "4,420 lb", "No propane, no battery, no water", "4,585 lb", "+165"],
  ["Cargo capacity", "1,380 lb", "GVWR minus dry weight", "1,215 lb", "-165"],
  ["Tongue percentage", "10.5%", "465 / 4,420", "13.7%", "+3.2 pts"],
  ["GVWR", "5,800 lb", "Certification label", "5,800 lb", "unchanged"],
];

const RECEIVER_TABLE = [
  ["Weight carrying", "5,000 lb", "500 lb", "5,520 / 718", "Over on both"],
  ["Weight distributing", "11,000 lb", "1,110 lb", "5,520 / 718", "Under on both"],
];

const PAYLOAD_TABLE = [
  ["Trailer tongue, loaded for the week", "718 lb", "718 lb", "1,062 lb"],
  ["Weight distributing hitch, head and bars", "95 lb", "813 lb", "967 lb"],
  ["Two adults and two kids", "515 lb", "1,328 lb", "452 lb"],
  ["Dog, crate and the gear that lives in the truck", "50 lb", "1,378 lb", "402 lb"],
  ["Cooler and duffels in the bed", "130 lb", "1,508 lb", "272 lb"],
];

const STEPS = [
  {
    name: "Ask for the weight ticket before you ask for the keys",
    text: "Some fleets keep a recent scale ticket for each unit and most do not. If there is one, photograph it. If there is not, the number you need is the tongue weight with the cylinders full, and the only way to get it is a tongue scale under the coupler in the lot. Ten minutes now replaces an argument with your own steering axle at 60 mph.",
  },
  {
    name: "Measure the coupler height on level ground",
    text: "Park the rental on flat pavement, drop the jack until the trailer is level, and measure from the pavement to the top of the coupler. A 22 ft bunkhouse usually wants 20 to 22 in. If your ball mount is set for a utility trailer at 16 in, the trailer tows nose up, the rear trailer axle carries more than its share, and the front of the truck gets light.",
  },
  {
    name: "Confirm the ball size and the latch, not just the fit",
    text: "Nearly every travel trailer uses a 2 5/16 in coupler. A 2 in ball will drop into it, the latch will close, and the trailer will follow you out of the yard. It will also come off under a hard stop. Read the stamp on the coupler, match it to the ball, and confirm the latch has a pin or a lock through it.",
  },
  {
    name: "Test the breakaway system with the wheels chocked",
    text: "Pull the pin and listen for the magnets to apply. A rental battery that sat at half charge in a cold yard will not hold the trailer, and the system is only checked when someone pulls the pin. Reinsert it fully and confirm the cable reaches the truck without being so short that a tight turn pulls it.",
  },
  {
    name: "Set the controller gain on the loaded trailer, in the lot",
    text: "Roll to 15 mph and apply the manual override. Both drums should grab evenly and the trailer should not pull to one side, which is what a rusted magnet face from a month of sitting does. Set the gain just below the point where a full manual application locks the tires, then back off one notch.",
  },
];

export default function ThanksgivingRentalTowingPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <ArticleJsonLd
        title="Thanksgiving RV Rental: Is Your Truck Rated for a 5,520-lb Trailer?"
        description="Why a rental trailer's published hitch weight is 165 lb light, where the receiver label separates weight carrying from weight distributing, and the payoff ledger for a four day Thanksgiving trip."
        url="https://www.rvtowingcalc.com/guides/thanksgiving-rv-rental-towing-check"
        datePublished="2026-11-06"
      />
      <FaqJsonLd
        faqs={FAQS}
        baseUrl="https://www.rvtowingcalc.com/guides/thanksgiving-rv-rental-towing-check"
      />
      <HowToJsonLd
        name="How to check a rental travel trailer before towing it home for Thanksgiving"
        description="Get the tongue weight with full cylinders, measure coupler height on level ground, match the ball to the coupler stamp, test the breakaway system with the wheels chocked, and set the brake controller gain on the loaded trailer."
        steps={STEPS}
        totalTime="PT45M"
        url="https://www.rvtowingcalc.com/guides/thanksgiving-rv-rental-towing-check"
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
        <span className="text-gray-900">Thanksgiving RV Rental</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
        Thanksgiving RV Rental: Is Your Truck Rated for a 5,520-lb Trailer?
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        The listing said 465 lb of hitch weight. By the time the trailer was
        sitting behind a 2021 F-150 on the Wednesday morning before Thanksgiving,
        the scale under the coupler read 630 lb, and the receiver under the bumper
        was rated for 500.
      </p>
      <p className="mt-3 text-lg text-gray-600">
        Nothing about that gap is the rental company being dishonest. It is the
        difference between a trailer weighed at the factory with empty cylinders
        and a trailer weighed with two full ones, a battery, and four days of
        family gear in it.
      </p>

      <div className="mt-8 rounded-xl bg-brand-50 p-6">
        <h2 className="text-lg font-bold text-brand-800">The Short Answer</h2>
        <p className="mt-2 text-brand-700">
          A 22 ft rental bunkhouse runs about <strong>5,520 lb loaded</strong>{" "}
          and hangs <strong>718 lb</strong> on the ball. The receiver label on a
          half-ton gives two sets of numbers: 5,000 lb of trailer and 500 lb of
          tongue in weight carrying mode, 11,000 and 1,110 once a weight
          distributing hitch is installed. The rental is over the first set and
          under the second. So the hitch, not the tow rating, decides whether you
          can leave the yard, and most rental fleets do not include one.
        </p>
      </div>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        The Hitch Weight in the Listing Was Measured Empty
      </h2>
      <p className="mt-3 text-gray-700">
        A 20 lb propane cylinder holds about 4.7 gallons, which is roughly 37 lb
        of propane, inside 18 lb of steel. Two of them come to 110 lb. They bolt
        to the A-frame a couple of feet ahead of the trailer's front wall, so
        almost all of that weight transfers straight to the coupler. A group 27
        battery in a box adds about 55 lb in the same place.
      </p>
      <p className="mt-3 text-gray-700">
        That is 165 lb that exists on every trip and on no listing. On a trailer
        this size it moves the tongue from 465 lb to 630 lb, and it moves the
        percentage from 10.5 to 13.7. The second number is the honest one, and it
        is the one that lands on your receiver.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">
                Spec
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Rental listing
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Measured with
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                At the yard
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Change
              </th>
            </tr>
          </thead>
          <tbody>
            {LISTING_TABLE.map((row, i) => (
              <tr key={row[0]} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                <td className="border px-3 py-2 text-xs font-semibold">
                  {row[0]}
                </td>
                <td className="border px-3 py-2 text-xs font-mono">{row[1]}</td>
                <td className="border px-3 py-2 text-xs">{row[2]}</td>
                <td className="border px-3 py-2 text-xs font-mono">{row[3]}</td>
                <td
                  className={
                    row[4].startsWith("+") && row[0] !== "GVWR"
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
        22 ft bunkhouse rental, 4,420 lb dry, 5,800 lb GVWR, 1,380 lb cargo
        capacity. Yard figures include two full 20 lb cylinders at 55 lb each and
        one group 27 battery at 55 lb, all mounted on the A-frame.
      </p>

      <p className="mt-4 text-gray-700">
        Load it for the trip and the tongue creeps up again. Bedding, cookware,
        chairs, a cooler and clothes for four days come to roughly 935 lb, most
        of it stacked in the bunks over the axles. The loaded trailer lands near
        5,520 lb, and the tongue at 718 lb, which is 13.0 percent. Everything
        forward of the axles, meaning the food, the cooler and the tool bag, adds
        tongue. Everything behind them takes it away, and taking it away is the
        move that produces a trailer that hunts in a crosswind.
      </p>
      <p className="mt-3 text-gray-700">
        Aim at the middle of the 10 to 15 percent band, not the bottom. A rental
        loaded to 12 percent because someone stacked the heavy stuff against the
        rear wall feels fine for two hours and then tells you about it on a
        bridge deck. Put the cooler over the axles and check the number with the{" "}
        <Link
          href="/tongue-weight-calculator"
          className="text-brand-600 hover:underline"
        >
          tongue weight calculator
        </Link>{" "}
        before the drive, not after.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        The Rating That Decides the Trip Is Under the Bumper
      </h2>
      <p className="mt-3 text-gray-700">
        Every half-ton receiver carries a label with two rows, and the second row
        is the one people read. On a current F-150 the weight carrying line is
        typically 5,000 lb of trailer and 500 lb of tongue. The weight
        distributing line below it reads 11,000 and 1,110. Chevrolet and Ram
        publish the same pair on the Silverado 1500 and the Ram 1500, with
        different numbers and the same structure.
      </p>
      <p className="mt-3 text-gray-700">
        The 5,520 lb rental is 520 lb past the first trailer number and 218 lb
        past the first tongue number. It is 5,480 lb under the second trailer
        number and 392 lb under the second tongue number. Both rows are true at
        the same time. Which one applies depends entirely on whether a spring bar
        hitch is bolted to the shank.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">
                Receiver mode
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Trailer limit
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Tongue limit
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                This rental, lb
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Verdict
              </th>
            </tr>
          </thead>
          <tbody>
            {RECEIVER_TABLE.map((row, i) => (
              <tr
                key={row[0]}
                className={row[4] === "Over on both" ? "bg-danger-50" : "bg-gray-50"}
              >
                <td className="border px-3 py-2 text-xs font-semibold">
                  {row[0]}
                </td>
                <td className="border px-3 py-2 text-xs font-mono">{row[1]}</td>
                <td className="border px-3 py-2 text-xs font-mono">{row[2]}</td>
                <td className="border px-3 py-2 text-xs font-mono">{row[3]}</td>
                <td
                  className={
                    row[4] === "Over on both"
                      ? "border px-3 py-2 text-xs font-bold text-danger-700"
                      : "border px-3 py-2 text-xs font-bold text-brand-700"
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
        Receiver ratings as published on a current half-ton crew cab 4x4. Check
        the label on your own receiver, since max tow packages and bumper
        configurations change both rows.
      </p>

      <p className="mt-4 text-gray-700">
        There is a second trap in the same area. Half-ton receivers are rated for
        500 lb of tongue in weight carrying mode, so at 13 percent the heaviest
        trailer you can legally pull on the ball is about 3,850 lb. That is a
        small single-axle camper, not a bunkhouse. Anyone renting a two-axle
        trailer and towing it home on a plain ball mount is over a printed limit
        before the first mile, and the truck will not tell them. Read the stamp on
        the coupler before you back under it, since a 2 in ball will drop into a
        2 5/16 in coupler and latch. The{" "}
        <Link
          href="/guides/hitch-ball-selection-guide"
          className="text-brand-600 hover:underline"
        >
          hitch ball selection guide
        </Link>{" "}
        has the sizes and the torque values.
      </p>
      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        What the Rental Costs You in Payload, Line by Line
      </h2>
      <p className="mt-3 text-gray-700">
        The trailer is the rental. The tongue weight is yours, and it comes out of
        a payload sticker that was set before the trailer existed. Same F-150,
        1,780 lb on the door jamb, family of four and a dog, gear for four days.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">
                Line item
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Weight
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Running total
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Left of 1,780 lb
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
                <td className="border px-3 py-2 text-xs font-mono">{row[2]}</td>
                <td className="border px-3 py-2 text-xs font-mono font-bold text-brand-700">
                  {row[3]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm text-gray-500">
        Payload sticker 1,780 lb, GVWR 7,050 lb, rear GAWR 3,800 lb, 145.4 in
        wheelbase. Passengers counted at 175, 165, 95 and 80 lb, plus a 50 lb dog
        and crate. Hitch weight is the dry 95 lb head and bars, not the 45 lb
        shank alone.
      </p>

      <p className="mt-4 text-gray-700">
        272 lb left over is not a comfortable margin on a trip that ends with
        leftovers, a case of something from a relative's garage, and four days of
        dirty laundry. It is workable if you spend it deliberately. It stops being
        workable the moment someone decides the firewood rides in the bed.
      </p>
      <p className="mt-3 text-gray-700">
        The rear axle deserves its own check, because the sticker total hides it.
        A 130 lb cooler and duffel bag sitting two feet behind the rear axle on a
        145.4 in wheelbase puts about 151 lb on that axle and takes 21 lb off the
        front. Stack it against the tailgate and the multiplier grows. The rear
        axle rating is 3,800 lb on this truck and the loaded rig lands near
        3,300, which is legal and close enough that a full water tank in the
        trailer or one more passenger changes the answer. The{" "}
        <Link href="/payload-calculator" className="text-brand-600 hover:underline">
          payload calculator
        </Link>{" "}
        runs the total and the axle at the same time.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Wednesday Morning at the Rental Yard
      </h2>
      <p className="mt-3 text-gray-700">
        The week of Thanksgiving is the busiest four days most rental fleets have
        all year. The unit you booked on Monday came back Sunday afternoon and was
        washed, dumped and turned around in about ninety minutes. Nobody at that
        pace has weighed the tongue, and the tires are whatever was on it in
        September.
      </p>
      <p className="mt-3 text-gray-700">
        Start with the four tires. Every DOT tire carries a four digit date code
        at the end of the serial, stamped as week and year, so 3223 means the
        32nd week of 2023. Rental fleets run tires longer than an owner would, and
        a trailer that sat in a yard for two seasons has been sitting in one place
        with the same contact patch flat spotted. Look at the inside shoulder of
        each tire for cupping, which is what an axle out of alignment does and
        what a rental inspection usually misses.
      </p>
      <p className="mt-3 text-gray-700">
        Then the propane. DOT cylinders need requalification 12 years after the
        manufacture date, and the date is stamped into the collar, not printed on
        a sticker. A yard that hands you a 2013 cylinder in 2026 is handing you a
        cylinder that a fill station is supposed to refuse.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Forty-Five Minutes in the Lot, Then the Road
      </h2>
      <p className="mt-3 text-gray-700">
        Everything on this list happens before the trailer leaves the property,
        because none of it can be fixed at 65 mph with the family in the truck.
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
        If the yard does not offer a weight distributing hitch, that is the
        decision point, and it happens before you sign rather than after. Two
        honest options. Downsize to a single-axle unit under about 3,850 lb and
        tow it on the ball mount you already own. Or buy a hitch rated for 10,000
        lb and 1,000 lb of tongue, spend the forty-five minutes setting it up
        loaded in the lot, and keep it for the next rental and the trailer you
        eventually buy.
      </p>
      <p className="mt-3 text-gray-700">
        The trade-off on the second option is real. A hundred pounds of steel that
        has to be lifted onto the shank, a slower hookup in the rain, and 95 lb
        gone from a payload sticker that only had 272 to spare. What it buys is
        the front axle staying loaded, which is the difference between steering a
        truck and aiming one.
      </p>
      <p className="mt-3 text-gray-700">
        My recommendation, if the truck is a half-ton and the rental is a
        two-axle bunkhouse: do not take the trailer without the hitch. Rent one
        from the fleet if they have it, buy one if they do not, and drive the
        first ten miles at 55 mph with the family following in the second car
        until you know how the combination behaves on a crown. It costs an hour
        and a few hundred dollars. Towing 5,520 lb on a 500 lb ball mount costs
        more than that the first time it goes wrong.
      </p>

      <div className="mt-10 rounded-2xl bg-brand-600 p-8 text-center text-white">
        <h2 className="text-2xl font-bold">Check the Rental Before You Book It</h2>
        <p className="mt-2 text-brand-100">
          Dry weights in a listing are not the weights you tow. Put the real
          numbers in before the deposit clears.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link
            href="/towing-capacity-calculator"
            className="inline-block rounded-xl bg-white px-6 py-3 text-sm font-bold text-brand-700 shadow-lg transition-all hover:bg-brand-50 active:scale-[0.99]"
          >
            Towing Capacity Calculator
          </Link>
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
        categories={["tongue-scale", "weight-distribution", "brake-controller"]}
      />

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
            href="https://www.ford.com/trucks/f150/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            Ford: F-150 payload and trailer ratings by cab, bed and axle
          </a>
        </li>
      </ul>

      <div className="mt-10 rounded-xl border border-gray-200 bg-gray-50 p-6">
        <h3 className="font-bold text-gray-900">Related Guides</h3>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          <li>
            <Link
              href="/guides/thanksgiving-rv-trip-weight-and-fuel-budget"
              className="text-brand-600 hover:underline"
            >
              Thanksgiving RV Trip: Payload and Fuel Budget
            </Link>
          </li>
          <li>
            <Link
              href="/guides/weight-distribution-hitch-setup"
              className="text-brand-600 hover:underline"
            >
              Weight Distribution Hitch Setup, Step by Step
            </Link>
          </li>
          <li>
            <Link
              href="/guides/tongue-weight"
              className="text-brand-600 hover:underline"
            >
              Tongue Weight: How to Measure It and What It Should Be
            </Link>
          </li>
          <li>
            <Link
              href="/guides/hitch-ball-mount-rise-drop-guide"
              className="text-brand-600 hover:underline"
            >
              Hitch Ball Mount Rise and Drop
            </Link>
          </li>
          <li>
            <Link
              href="/guides/trailer-brake-controller-setup"
              className="text-brand-600 hover:underline"
            >
              Trailer Brake Controller Setup and Gain
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
