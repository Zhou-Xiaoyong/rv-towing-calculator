import type { Metadata } from "next";
import Link from "next/link";
import { FaqJsonLd, ArticleJsonLd, HowToJsonLd } from "@/components/seo/JsonLd";
import { DEFAULT_OG_IMAGES } from "@/lib/seo/default-og-image";

import AmazonAffiliate from "@/components/AmazonAffiliate";

export const metadata: Metadata = {
  title: "Truck Camper Payload: Why the Rear Axle Sees More Than the Camper Weighs",
  description:
    "Truck camper payload math: a 2,800-lb camper can put 3,200 lb on the rear axle. The formula, the real limits that matter, and the scale pass that proves it.",
  keywords: [
    "truck camper payload",
    "truck camper payload capacity",
    "what size truck camper can my truck carry",
    "half ton truck camper weight",
    "truck camper center of gravity",
    "slide in camper tie downs",
    "truck camper rear axle weight",
    "camper package payload",
  ],
  alternates: {
    canonical: "https://www.rvtowingcalc.com/guides/truck-camper-payload",
  },
  openGraph: {
    title: "Truck Camper Payload: Why the Rear Axle Sees More Than the Camper Weighs",
    description:
      "How a slide-in camper loads a truck, the moment formula behind the rear axle number, what a camper package does not buy, and the three scale passes that settle it.",
    url: "https://www.rvtowingcalc.com/guides/truck-camper-payload",
    images: DEFAULT_OG_IMAGES,
  },
};

const FAQS = [
  {
    q: "How much payload do I need for a truck camper?",
    a: "Start with the camper's wet weight, not the brochure number. A hard-side camper with a slide, a wet bath, and air conditioning typically lands 600 to 900 lb above its dry weight once water, propane, and a battery are in. Add 400 to 600 lb for gear and supplies, then add your passengers. A 2,200-lb dry camper realistically needs 3,400 to 3,700 lb of payload before anyone sits down. Most half-ton stickers read 1,400 to 1,900 lb.",
  },
  {
    q: "Can a half-ton truck carry a slide-in camper?",
    a: "A few can, with the right camper. The lightest hard-side units run 1,300 to 1,600 lb dry and are built for short-bed half-tons, but the wet weight plus two adults and gear usually puts a 1,700-lb payload sticker at or past its limit. Soft-side pop-ups at 1,000 to 1,400 lb dry are the realistic half-ton option. Check the payload sticker on your specific truck before you shop, because a crew-cab 4x4 with a sunroof and a spray-in liner can be 700 lb below the model's advertised maximum.",
  },
  {
    q: "Do airbags or a camper package increase payload?",
    a: "No. Airbags, helper springs, add-a-leafs, and the factory camper package change how the truck carries a load, not how much it is rated to carry. GVWR and GAWR are set by the manufacturer and printed on the door jamb; nothing you bolt on changes those two numbers. A camper package usually adds a rear stabilizer bar and heavier front springs, which cuts body roll and improves steering feel with a tall load. It does not raise the sticker. Only a truck with a higher GVWR gives you more legal payload.",
  },
  {
    q: "How do I find a camper's center of gravity?",
    a: "The camper manufacturer publishes a center-of-gravity figure measured from the front wall of the camper, and it is usually on a plate inside the door or in the owner's manual. Convert it to a distance from your rear axle by measuring from the axle centerline forward to the camper's front wall, then subtracting the COG figure. That distance is what goes into the axle math. The truck manufacturer's towing guide also lists a maximum COG distance for slide-in campers, and exceeding it is the most common way an otherwise legal load handles badly.",
  },
  {
    q: "Can I tow a trailer behind a truck camper?",
    a: "Yes, and the receiver is where it gets expensive. A camper that overhangs the bumper forces a hitch extension, and extensions de-rate the hitch quickly: a Class V receiver rated 10,000 lb can fall toward 5,000 lb by the time 12 inches of extension is added. The camper's weight also counts against GCWR, so the trailer has to be smaller than it would be behind an empty truck. Most extensions are not weight-distribution compatible, which puts the trailer's full tongue weight on the receiver. Check your state's combined-length limit too; 65 feet is the common cap.",
  },
];

const WEIGHT_STACK = [
  ["Dry weight, as printed on the camper tag", "2,180", "No water, empty propane, no battery, no dealer options"],
  ["Fresh water, 30 gallons at 8.34 lb/gal", "250", "The single largest hidden item on most campers"],
  ["Two 20-lb propane cylinders, full", "74", "20 lb of gas in a 17-lb steel bottle, so 37 lb each"],
  ["Group 27 battery, one", "62", "Two batteries is common on a camper with a compressor fridge"],
  ["Gear for two people, one week", "480", "Clothes, food, cookware, chairs, leveling blocks, tools"],
  ["Real traveling weight", "3,046", "This is the number that has to fit inside payload"],
];

const AXLE_TABLE = [
  ["2,800", "12 in", "160 in", "3,010", "210"],
  ["2,800", "24 in", "160 in", "3,220", "420"],
  ["2,800", "36 in", "148 in", "3,481", "681"],
  ["3,200", "24 in", "160 in", "3,680", "480"],
  ["3,200", "36 in", "148 in", "3,978", "778"],
];

const CAPACITY_TABLE = [
  [
    "Airbags",
    "Ride height and body roll with a tall load",
    "GVWR, GAWR, or the payload sticker",
  ],
  [
    "Helper spring or add-a-leaf",
    "Sag, and how the truck sits loaded",
    "Any published rating",
  ],
  [
    "Factory camper package",
    "Rear stabilizer bar, heavier front springs, camper certification",
    "Payload. The sticker still reads what it read before",
  ],
  [
    "Higher load range tires",
    "Tire capacity, which is a separate limit",
    "Axle rating or GVWR",
  ],
  [
    "Frame-mounted tie-downs",
    "How the camper is held to the truck",
    "Weight capacity. Nothing here adds any",
  ],
];

const SCALE_STEPS = [
  {
    name: "Pass one: truck only",
    text: "Full tank, you in the driver's seat, no camper, no trailer. Note the steer and drive axle readings. This is your curb weight per axle, and every later number is measured against it.",
  },
  {
    name: "Pass two: truck and loaded camper",
    text: "Camper loaded exactly as it travels: water in, propane full, fridge stocked, gear stowed. The drive axle reading against RAWR is the number that decides the trip.",
  },
  {
    name: "Pass three: add the trailer",
    text: "Only if you tow. Now the ticket shows three axle groups, and the total is your GCW. Compare that to GCWR and each axle to its own rating.",
  },
  {
    name: "Read the ticket in the right order",
    text: "Rear axle first, then GVWR, then front axle. A camper that passes GVWR can still fail RAWR, and a front axle that lost 600 lb will feel it in the steering before any scale does.",
  },
  {
    name: "Reweigh the same day",
    text: "A reweigh inside 24 hours costs a few dollars at most CAT locations. Use it: move 100 lb of gear from the camper's rear to the forward dinette and see what the drive axle actually gives back.",
  },
];

export default function TruckCamperPayloadPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <ArticleJsonLd
        title="Truck Camper Payload: Why the Rear Axle Sees More Than the Camper Weighs"
        description="Truck camper payload math: how a slide-in camper loads a truck, the moment formula that puts more weight on the rear axle than the camper weighs, the upgrades that do not add capacity, and the three CAT scale passes that settle it."
        url="https://www.rvtowingcalc.com/guides/truck-camper-payload"
        datePublished="2026-10-21"
      />
      <FaqJsonLd
        faqs={FAQS}
        baseUrl="https://www.rvtowingcalc.com/guides/truck-camper-payload"
      />
      <HowToJsonLd
        name="How to weigh a truck camper at a CAT scale"
        description="A three-pass scale procedure that separates curb weight, camper load, and trailer load so each axle can be checked against its own rating."
        steps={SCALE_STEPS}
        totalTime="PT1H"
        url="https://www.rvtowingcalc.com/guides/truck-camper-payload"
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
        <span className="text-gray-900">Truck Camper Payload</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
        Truck Camper Payload: Why the Rear Axle Sees More Than the Camper
        Weighs
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        A 2,860-lb slide-in camper on a crew-cab F-250 with a 2,940-lb payload
        sticker looks like 80 lb of margin. Load two adults, 30 gallons of fresh
        water, and a full cooler and that truck is over GVWR before the first
        mile, with a camper that never weighed more than the brochure promised.
      </p>
      <p className="mt-3 text-lg text-gray-600">
        The limit that decides the purchase is not dry weight and not tow rating.
        It is the payload sticker on the driver&apos;s door jamb, read alongside
        the rear axle rating, because a camper mounted behind the rear axle puts
        more weight on that axle than the camper itself weighs.
      </p>

      <div className="mt-8 rounded-xl bg-brand-50 p-6">
        <h2 className="text-lg font-bold text-brand-800">The Short Answer</h2>
        <p className="mt-2 text-brand-700">
          Payload limits the camper, not towing capacity. Take the number off the
          yellow door-jamb sticker, subtract every passenger, pet, tool, and
          aftermarket part you carry, and what is left has to cover the
          camper&apos;s wet weight plus water, propane, and gear. Then check the
          rear axle separately: with the camper&apos;s center of gravity 24
          inches behind the rear axle on a 160-inch wheelbase, a 2,800-lb camper
          adds <strong>3,220 lb</strong> to that axle and takes 420 lb off the
          front. If either number is over its rating, this is the wrong truck,
          and no set of airbags changes that.
        </p>
      </div>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        What the Yellow Sticker Is Actually Rating
      </h2>
      <p className="mt-3 text-gray-700">
        Payload is GVWR minus the truck&apos;s curb weight. Curb weight includes
        a full tank of fuel and every fluid, so the sticker already accounts for
        the gas you are about to pump. It does not account for you, your
        passengers, the hitch, the tie-downs, or the floor mat you added.
      </p>
      <p className="mt-3 text-gray-700">
        That is why the brochure number and the sticker disagree. The advertised
        maximum payload is measured on a base truck: regular cab, two-wheel
        drive, smallest available cab and box, no sunroof. A crew-cab 4x4 with a
        diesel, a panoramic roof, a spray-in liner, and the bigger fuel tank can
        sit 600 to 900 lb below that figure. Two trucks on the same lot, same
        trim name, different options, carry different campers.
      </p>
      <p className="mt-3 text-gray-700">
        The other half of the camper rating hides in the manufacturer&apos;s
        towing guide. Past the tow rating charts there is a slide-in camper
        table, and it lists a maximum camper weight plus a center-of-gravity
        limit measured from the rear axle. Most buyers never reach that page.
        It is the page that explains why a camper that fits the payload number
        can still handle badly. Read the label itself with the{" "}
        <Link
          href="/guides/how-to-read-tire-and-loading-label"
          className="text-brand-600 hover:underline"
        >
          tire and loading label guide
        </Link>
        , then put the numbers into the{" "}
        <Link href="/payload-calculator" className="text-brand-600 hover:underline">
          payload calculator
        </Link>
        .
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        The Rear Axle Carries More Than the Camper
      </h2>
      <p className="mt-3 text-gray-700">
        A slide-in camper is a lever bolted to the middle of a beam. Its weight
        lands mostly on the rear axle, and any part of it sitting behind the axle
        centerline adds extra load through the moment arm while lifting weight
        off the front. Two equations cover the whole thing:
      </p>
      <div className="mt-4 rounded-xl border border-gray-200 bg-gray-50 p-5">
        <p className="font-mono text-sm text-gray-800">
          added rear axle load = W x (1 + d / L)
        </p>
        <p className="mt-2 font-mono text-sm text-gray-800">
          load removed from front axle = W x (d / L)
        </p>
        <p className="mt-3 text-xs text-gray-500">
          W is camper weight, d is the distance from the rear axle centerline
          back to the camper&apos;s center of gravity, and L is the wheelbase.
          All three in the same unit. A negative d, meaning the COG sits ahead of
          the axle, subtracts from the rear axle instead.
        </p>
      </div>
      <p className="mt-4 text-gray-700">
        Run it on a 2,800-lb camper with 24 inches of COG offset and a 160-inch
        wheelbase and the rear axle gains 3,220 lb, 420 lb more than the camper
        weighs. Shorten the wheelbase and push the COG back and the same camper
        gains 3,481 lb.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">
                Camper weight
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                COG behind axle
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Wheelbase
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Added to rear axle
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Off the front
              </th>
            </tr>
          </thead>
          <tbody>
            {AXLE_TABLE.map((row, i) => (
              <tr key={row[0] + row[1] + row[2]} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                <td className="border px-3 py-2 text-xs font-mono font-semibold">
                  {row[0]} lb
                </td>
                <td className="border px-3 py-2 text-xs">{row[1]}</td>
                <td className="border px-3 py-2 text-xs">{row[2]}</td>
                <td className="border px-3 py-2 text-xs font-semibold text-brand-700">
                  {row[3]} lb
                </td>
                <td className="border px-3 py-2 text-xs">{row[4]} lb</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm text-gray-500">
        Long-bed trucks win here twice: more wheelbase, and the camper sits
        further forward. A short-bed half-ton with a camper hanging past the
        bumper is the worst case for both.
      </p>
      <p className="mt-4 text-gray-700">
        The front axle number is not academic. A crew-cab diesel might roll off
        the lot with 4,700 lb on a 5,600-lb front axle, so losing 420 lb leaves
        room. Add a heavy front bumper later and the margin is gone. You will
        notice it as light steering on a crowned road before you notice it on a
        ticket.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Building the Real Weight of a Camper
      </h2>
      <p className="mt-3 text-gray-700">
        Every camper tag reads dry. Dry means no water in the tank, empty
        propane, no battery, and none of the dealer-installed options, which on
        a slide-in often includes the awning, the air conditioner, and the
        electric jacks. The gap between dry and traveling weight is routinely 700
        to 900 lb on a hard-side unit.
      </p>
      <p className="mt-3 text-gray-700">
        Water is the item people underestimate. A gallon weighs 8.34 lb, so a 30
        gallon tank is a 250-lb decision and a 45 gallon tank is 375 lb. Propane
        fools people the other way: a cylinder marked 20 lb holds 20 lb of gas in
        a 17-lb steel bottle, so a full one weighs about 37 lb on a bathroom
        scale, not 20.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">Item</th>
              <th className="border px-3 py-2 text-left font-semibold">
                Pounds
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                What to know
              </th>
            </tr>
          </thead>
          <tbody>
            {WEIGHT_STACK.map((row, i) => (
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
      <p className="mt-3 text-sm text-gray-500">
        The last row is the number that belongs in the payload check. Everything
        above it is what the brochure left out.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        The Upgrades That Do Not Buy Capacity
      </h2>
      <p className="mt-3 text-gray-700">
        Airbags are the most common purchase after the first sagging trip, and
        they are worth the money for what they actually do. They level the truck,
        cut the headlight-in-the-trees look, and reduce the wallow on a winding
        road. They do not add a pound of legal capacity, because GVWR and GAWR
        are printed by the manufacturer and no bolt-on part amends them.
      </p>
      <p className="mt-3 text-gray-700">
        The factory camper package is the same story with better paperwork. It
        typically brings a rear stabilizer bar, heavier front springs, and a
        certification that the truck is approved for a slide-in, which matters
        for insurance and for how the truck feels with 3,000 lb sitting high.
        Payload does not move.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">
                What you add
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                What it does change
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                What it does not change
              </th>
            </tr>
          </thead>
          <tbody>
            {CAPACITY_TABLE.map((row, i) => (
              <tr key={row[0]} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                <td className="border px-3 py-2 text-xs font-semibold">
                  {row[0]}
                </td>
                <td className="border px-3 py-2 text-xs">{row[1]}</td>
                <td className="border px-3 py-2 text-xs text-danger-700">
                  {row[2]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 rounded-xl border-l-4 border-danger-500 bg-danger-50 p-4">
        <p className="text-sm text-danger-700">
          <strong>The one upgrade that works:</strong> a truck with a higher
          GVWR. Moving from a half-ton to a single-rear-wheel one-ton typically
          adds 1,500 to 2,000 lb of payload and 1,500 lb of rear axle rating.
          Nothing else in this table comes close.
        </p>
      </div>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Scale Day: Three Passes, One Ticket Each
      </h2>
      <p className="mt-3 text-gray-700">
        The door jamb tells you the limit. Only a scale tells you where you
        actually are, and a truck camper is the one RV where a single pass is not
        enough, because you need the bare truck weight to know what the camper
        added. The full CAT scale method is in the{" "}
        <Link href="/guides/cat-scale-weighing" className="text-brand-600 hover:underline">
          CAT scale guide
        </Link>
        ; the sequence below is the version for a camper.
      </p>
      <ol className="mt-4 space-y-3">
        {SCALE_STEPS.map((step, i) => (
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
        Weigh with the camper on the truck, not on the jacks. A camper sitting on
        its own legs in a driveway tells you nothing about how the load moves
        through the frame, and every number you need is an axle number. Compare
        the results against GVWR and the rear axle rating separately, which is
        the distinction the{" "}
        <Link href="/guides/gawr-explained" className="text-brand-600 hover:underline">
          GAWR guide
        </Link>{" "}
        covers in detail.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Towing Behind the Camper
      </h2>
      <p className="mt-3 text-gray-700">
        A camper that overhangs the bumper leaves no room for a standard
        receiver, so owners buy an extension. Every extension maker publishes a
        de-rating table, and the numbers fall faster than people expect: a Class
        V receiver rated 10,000 lb can drop toward 5,000 lb by the time 12 inches
        of extension is in the stack. Most extensions are also not
        weight-distribution compatible, which means the trailer&apos;s full
        tongue weight lands on the receiver with no help.
      </p>
      <p className="mt-3 text-gray-700">
        Two more numbers shrink the trailer. Camper weight counts toward GCWR, and
        a 3,000-lb camper eats that budget before the trailer is hitched. Then
        there is length: 65 feet combined is the most common state cap, and a
        long-bed crew cab with a 10-foot camper and a 24-foot trailer is already
        close. Check{" "}
        <Link href="/guides/rv-towing-speed-limits" className="text-brand-600 hover:underline">
          state towing limits
        </Link>{" "}
        before you assume the combination is legal where you are going.
      </p>

      <div className="mt-10 rounded-2xl bg-brand-600 p-8 text-center text-white">
        <h2 className="text-2xl font-bold">Camper Math, Before the Purchase</h2>
        <p className="mt-2 text-brand-100">
          Put your sticker payload, your passengers, and the camper&apos;s wet
          weight into one place and see what is left. Free, independent, no
          sign-up.
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

      <AmazonAffiliate categories={["camper"]} />

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Sources &amp; References
      </h2>
      <ul className="mt-3 space-y-1 text-sm text-gray-600">
        <li>
          <a
            href="https://www.ford.com/trucks/towing/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            Ford RV &amp; Trailer Towing Guide: payload charts and the slide-in
            camper section with camper weight and center-of-gravity limits
          </a>
        </li>
        <li>
          <a
            href="https://www.ramtrucks.com/towing-and-payload.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            Ram Trucks: payload and towing charts by cab, box, and drivetrain
          </a>
        </li>
        <li>
          <a
            href="https://www.torklift.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            Torklift International: frame-mounted tie-down ratings and hitch
            extension de-rating tables
          </a>
        </li>
        <li>
          <a
            href="https://www.rvia.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            RV Industry Association (RVIA): weight labeling and construction
            standards for towable and slide-in RVs
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
              href="/guides/gawr-explained"
              className="text-brand-600 hover:underline"
            >
              GAWR Explained
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
              href="/guides/how-to-read-tire-and-loading-label"
              className="text-brand-600 hover:underline"
            >
              How to Read the Tire and Loading Label
            </Link>
          </li>
          <li>
            <Link
              href="/guides/exceed-gvwr-dangers"
              className="text-brand-600 hover:underline"
            >
              What Happens If You Exceed GVWR
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
        </ul>
      </div>
    </div>
  );
}
