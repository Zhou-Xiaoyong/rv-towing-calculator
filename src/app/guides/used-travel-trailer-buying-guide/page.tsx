import type { Metadata } from "next";
import Link from "next/link";
import { FaqJsonLd, ArticleJsonLd, HowToJsonLd } from "@/components/seo/JsonLd";
import { DEFAULT_OG_IMAGES } from "@/lib/seo/default-og-image";

import AmazonAffiliate from "@/components/AmazonAffiliate";

export const metadata: Metadata = {
  title: "Used Travel Trailer Buying Guide: Weigh It Before You Pay",
  description:
    "A used travel trailer buying guide built on the yellow cargo label: derive the as-built weight, catch post-factory additions, and scale it before you pay.",
  keywords: [
    "used travel trailer buying guide",
    "what to check when buying a used travel trailer",
    "used travel trailer inspection checklist",
    "travel trailer cargo carrying capacity label",
    "how to find unloaded vehicle weight",
    "used rv weight check",
    "trailer tongue weight scale",
    "how old are trailer tires",
  ],
  alternates: {
    canonical:
      "https://www.rvtowingcalc.com/guides/used-travel-trailer-buying-guide",
  },
  openGraph: {
    title: "Used Travel Trailer Buying Guide: Weigh It Before You Pay",
    description:
      "The yellow cargo label is the only weight figure that belongs to the trailer you are looking at. How to read it, derive the as-built weight, and screen a used trailer at a CAT scale.",
    url: "https://www.rvtowingcalc.com/guides/used-travel-trailer-buying-guide",
    images: DEFAULT_OG_IMAGES,
  },
};

const FAQS = [
  {
    q: "What should I check first when buying a used travel trailer?",
    a: "The weight paperwork, before the appliances. Find the certification label on the front left corner and the yellow cargo label inside the door, then derive the as-built weight: GVWR minus cargo capacity minus full fresh water minus full propane. Write the number down. A trailer that weighs 300 lb more than its own labels predict has been modified, repaired, or wet, and each of those is a negotiation point. An appliance can be replaced for a few hundred dollars. A waterlogged floor cannot.",
  },
  {
    q: "Where is the cargo carrying capacity label on a used travel trailer?",
    a: "Inside, usually screwed to the screen door, a cabinet jamb, or the wall beside the entry. It reads something like \"the weight of cargo should never exceed 1,180 lbs\" followed by the kilogram conversion. That figure belongs to that serial number, not to the model year. If the label is gone you can rebuild it from the GVWR on the certification label and a scale reading, but you are then trusting your own arithmetic instead of the builder's.",
  },
  {
    q: "Does a full water tank come out of the cargo rating?",
    a: "No, and this is where buyers double-count. The cargo figure already assumes a full fresh tank, water heater included, and full propane. A 26-footer with a 40-gallon system has already given up 334 lb before anyone reads the sticker. Towing dry returns that capacity, which is why a dry trailer can legally carry more than its label implies. The catch is a light tongue, so keep water forward or load gear over the axles when you travel empty.",
  },
  {
    q: "How old is too old for trailer tires?",
    a: "Six years, and tread depth does not enter into it. Trailer tires age from the inside while the sidewall still looks new, because an ST tire sits loaded and parked for months at a time. Read the last four digits of the DOT block on the sidewall: 2319 means the 23rd week of 2019. Price four new tires into any offer on a trailer with original rubber, and check the spare, which is usually older than the set on the ground.",
  },
  {
    q: "Can I weigh a travel trailer without a CAT scale?",
    a: "Yes, in two pieces. A tongue scale under the coupler reads in seconds and costs about $150, and it is the most useful single tool for a used-trailer inspection. For total weight, a public scale, gravel yard, or recycling facility will usually weigh a trailer for $10 or less. What you cannot do at home is check each axle separately, and an overloaded or unevenly loaded used trailer is exactly where that shows up.",
  },
];

const LABEL_TABLE = [
  [
    "GVWR",
    "Certification label, front left exterior corner",
    "The whole trailer, loaded, as it sits on the road",
    "How that weight splits between the two axles",
  ],
  [
    "GAWR, one per axle",
    "Same label",
    "What each axle and its tires may carry",
    "Side-to-side imbalance, where one tire runs over while the axle is legal",
  ],
  [
    "Cargo capacity",
    "Yellow label inside, often the screen door or a cabinet jamb",
    "Gear and everything added after the factory",
    "Parts bolted on after the label was printed, or water in the floor",
  ],
  [
    "Unloaded vehicle weight",
    "Nowhere on a towable. Derive it from the other three",
    "The trailer as it left the line",
    "Dealer options, a second battery, or a hitch added later",
  ],
];

const ADDITION_TABLE = [
  [
    "Second 13,500 BTU roof air conditioner",
    "90 to 100 lb",
    "Roof centerline, which raises the center of gravity",
  ],
  [
    "Slide topper over one slide",
    "40 to 50 lb",
    "Roof edge, forward of or behind the axles depending on floorplan",
  ],
  [
    "Second Group 27 battery",
    "60 lb",
    "A-frame, directly on the tongue",
  ],
  [
    "Rear receiver, bike rack, two bikes",
    "125 to 140 lb",
    "Behind the axles, which lifts the tongue and cuts your margin against sway",
  ],
  [
    "100-watt solar panel and controller",
    "25 to 30 lb",
    "Roof, plus the wire run down the wall",
  ],
  [
    "One season of roof leak in the floor",
    "150 to 400 lb",
    "Luan and foam across the frame, with no drain to get it back out",
  ],
];

const SCALE_TABLE = [
  [
    "1. Truck alone, full fuel, everyone aboard",
    "Steer axle and drive axle",
    "The baseline every other pass is measured against",
  ],
  [
    "2. Truck and trailer, spring bars engaged",
    "Steer, drive, and trailer axles",
    "Drive axle against RAWR, trailer axles against their GAWR",
  ],
  [
    "3. Same combination, bars released",
    "Steer and drive axle",
    "The gain over pass 1 is the tongue weight",
  ],
];

const PAPER_TABLE = [
  [
    "Tire date code",
    "Last four digits of the DOT block, week and year",
    "Codes older than six years, or four tires from different years",
  ],
  [
    "LP cylinder collar",
    "Stamped date on the collar ring",
    "No stamp, or pitting along the weld seam",
  ],
  [
    "VIN",
    "Certification label, frame stamp, and title",
    "Any mismatch between the three",
  ],
  [
    "Cargo label",
    "Inside, near the entry door",
    "Missing or painted over, which often means a replaced wall panel",
  ],
  [
    "Title brand",
    "The title itself, not the bill of sale",
    "Salvage, rebuilt, or flood branding",
  ],
];

const WEIGH_STEPS = [
  {
    name: "Meet at the scale, not the lot",
    text: "Ask the seller to bring the trailer to a CAT scale with the tanks drained and the gear out. You are measuring what the factory and the seller added, not what you plan to pack.",
  },
  {
    name: "Weigh your truck alone",
    text: "Full fuel, everyone who will ride with you, hitch head in the receiver. Write down the steer and drive axle figures separately, because the rear number is the one that fails first.",
  },
  {
    name: "Weigh the combination twice",
    text: "Once with the spring bars hooked up, once with them released. Releasing the bars moves weight back to the trailer axles, and the difference is your true tongue weight.",
  },
  {
    name: "Compare four numbers",
    text: "Trailer gross against trailer GVWR, tongue weight against 10 to 15 percent of gross, drive axle against RAWR, and calculated as-built weight against the scale ticket.",
  },
];

export default function UsedTravelTrailerBuyingGuidePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <ArticleJsonLd
        title="Used Travel Trailer Buying Guide: Weigh It Before You Pay"
        description="How to read the certification and cargo labels on a used travel trailer, derive the as-built weight, spot post-factory additions, and screen the trailer and your truck at a CAT scale before money changes hands."
        url="https://www.rvtowingcalc.com/guides/used-travel-trailer-buying-guide"
        datePublished="2026-10-24"
      />
      <FaqJsonLd
        faqs={FAQS}
        baseUrl="https://www.rvtowingcalc.com/guides/used-travel-trailer-buying-guide"
      />
      <HowToJsonLd
        name="How to weigh a used travel trailer before buying it"
        description="Meet the seller at a CAT scale, weigh the truck alone, weigh the combination with the spring bars engaged and then released, and compare four numbers against the trailer's labels."
        steps={WEIGH_STEPS}
        totalTime="PT2H"
        url="https://www.rvtowingcalc.com/guides/used-travel-trailer-buying-guide"
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
        <span className="text-gray-900">Buying a Used Travel Trailer</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
        Used Travel Trailer Buying Guide: Weigh It Before You Pay
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        A used 26-foot bunkhouse with a 1,180 lb cargo label looks like it has
        room for a family and a season of gear. That label was printed at the
        factory door. Everything bolted on afterward, from a second air
        conditioner to a rear bike hitch, came out of that number without anyone
        updating the paper. So did the water sitting in soaked floor structure
        after a roof leak.
      </p>
      <p className="mt-3 text-lg text-gray-600">
        There are two honest numbers on a used trailer and a dozen persuasive
        ones. The honest pair is the certification label riveted to the front
        left corner and the yellow cargo label inside the entry door. Every
        other figure a seller quotes, including the dry weight in the listing,
        traces back to a brochure written about a different trailer.
      </p>

      <div className="mt-8 rounded-xl bg-brand-50 p-6">
        <h2 className="text-lg font-bold text-brand-800">The Short Answer</h2>
        <p className="mt-2 text-brand-700">
          Derive the trailer&apos;s as-built weight before you trust anything:{" "}
          <strong>
            GVWR minus cargo capacity minus full fresh water minus full propane
          </strong>
          . On a 7,600 lb trailer with 1,180 lb of cargo, 40 gallons of water,
          and two 20 lb cylinders, that comes to 6,046 lb. Weigh the empty
          trailer. If the scale reads 6,350 lb, about 300 lb arrived after the
          factory and it comes straight out of the cargo you thought you had.
          Then run the three-pass CAT scale check with your own truck, because
          the trailer&apos;s GVWR is only half of the problem.
        </p>
      </div>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Four Numbers, and Only One Is Printed on the Trailer
      </h2>
      <p className="mt-3 text-gray-700">
        Three of the four ratings are printed, and they live in two places. The
        certification label is riveted to the front left exterior corner and
        carries GVWR plus a GAWR for each axle. The yellow label inside the door
        carries cargo capacity. The fourth number, unloaded vehicle weight, is
        not printed anywhere on a towable, which is why buyers fall back on the
        dry weight in the listing. That dry weight describes a prototype, not
        the unit in front of you.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">
                Number
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Where it lives
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                What it caps
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                What it does not tell you
              </th>
            </tr>
          </thead>
          <tbody>
            {LABEL_TABLE.map((row, i) => (
              <tr key={row[0]} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                <td className="border px-3 py-2 text-xs font-semibold">
                  {row[0]}
                </td>
                <td className="border px-3 py-2 text-xs">{row[1]}</td>
                <td className="border px-3 py-2 text-xs">{row[2]}</td>
                <td className="border px-3 py-2 text-xs text-danger-700">
                  {row[3]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm text-gray-500">
        Ratings are stamped in pounds and kilograms. Read the pounds line. The
        two are conversions of the same limit, not two separate limits, and
        rounding on a 7,600 lb trailer can move the number by a few pounds
        either way.
      </p>

      <p className="mt-4 text-gray-700">
        The missing figure is the one worth calculating, because it is what
        every used trailer gets judged against.
      </p>

      <div className="mt-6 rounded-xl bg-gray-50 p-6">
        <h3 className="font-bold text-gray-900">The As-Built Weight Formula</h3>
        <p className="mt-3 font-mono text-sm text-gray-800">
          UVW = GVWR &minus; cargo capacity &minus; fresh water &minus; propane
        </p>
        <p className="mt-3 text-sm text-gray-700">
          7,600 lb GVWR &minus; 1,180 lb cargo &minus; 334 lb water (40 gal at
          8.34) &minus; 40 lb propane (two full 20 lb cylinders) ={" "}
          <strong>6,046 lb</strong>
        </p>
        <p className="mt-2 text-sm text-gray-700">
          That figure is the trailer as built. A scale ticket for the same
          trailer, empty, should land within a couple hundred pounds of it.
        </p>
      </div>

      <p className="mt-4 text-gray-700">
        A 300 lb gap is not automatically a walk-away, but it is a question. On
        a ten-year-old trailer the answer is usually a second air conditioner,
        a heavier battery bank, or a receiver somebody welded on. On a trailer
        that sat outside through two winters it is often water. The{" "}
        <Link
          href="/guides/cargo-carrying-capacity-ccc"
          className="text-brand-600 hover:underline"
        >
          cargo carrying capacity guide
        </Link>{" "}
        has the full label arithmetic if you want to check the builder&apos;s own
        math before you accept it.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        What Got Bolted On After the Label Was Printed
      </h2>
      <p className="mt-3 text-gray-700">
        Factory options are already in the as-built weight, because the label is
        printed after the build. Dealer-installed and owner-installed parts are
        not. That distinction is the entire negotiation on a used trailer with a
        lot of accessories, and it is invisible unless you weigh the thing.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">
                Addition
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Typical weight
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Where it lands
              </th>
            </tr>
          </thead>
          <tbody>
            {ADDITION_TABLE.map((row, i) => (
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
      <p className="mt-3 text-sm text-gray-500">
        Weights are typical for the accessory class, not for one brand. A
        ducted 15,000 BTU unit runs heavier than the 13,500 BTU figure above.
      </p>

      <p className="mt-4 text-gray-700">
        Weight behind the axles does more damage than its own number suggests. A
        rear receiver with two bikes lifts the tongue by roughly the same amount
        it adds out back, and a tongue that drops below 10 percent of trailer
        weight is the start of a sway problem that no hitch adjustment fixes.
        Check the rear bumper rating while you are back there: most are stamped
        for the spare tire only, in the 100 to 150 lb range, not for a loaded
        rack bouncing over expansion joints.
      </p>
      <p className="mt-3 text-gray-700">
        The other weight nobody mentions is water that arrived through the roof
        and never left. Luan plywood and laminated foam hold it, and unlike a
        fresh tank there is no drain. A trailer that has been wet for two
        seasons can be carrying several hundred pounds of it, which is both
        cargo capacity and structure you are paying for. Press the floor
        around the entry door and under the dinette with a knuckle, and read
        the{" "}
        <Link
          href="/guides/trailer-frame-and-floor-inspection"
          className="text-brand-600 hover:underline"
        >
          frame and floor inspection guide
        </Link>{" "}
        before you write an offer.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Weigh It Before You Pay For It
      </h2>
      <p className="mt-3 text-gray-700">
        A CAT scale ticket costs $13 to $15 for the first weigh and $3 to $4 to
        reweigh within 24 hours, which means a complete three-pass check on a
        used trailer runs under $25. Ask the seller to meet you there. Anyone
        selling a trailer in good faith will; anyone who will not has told you
        something more useful than the listing did.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">
                Pass
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Scale reads
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                What you compare
              </th>
            </tr>
          </thead>
          <tbody>
            {SCALE_TABLE.map((row, i) => (
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
        Two tickets cover three passes. The reweigh is the cheap one, so take
        the combination weights first and the truck-alone weight second.
      </p>

      <ol className="mt-4 space-y-3">
        {WEIGH_STEPS.map((step, i) => (
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
        The arithmetic is short. Trailer gross weight is pass 2 total minus pass
        1 total. Tongue weight is the sum of the truck axles in pass 3 minus the
        same axles in pass 1, because releasing the spring bars puts the tongue
        load back where it came from. Divide tongue by gross and you have a
        percentage. Between 10 and 15 percent tows well; under 10 percent
        invites sway and over 15 percent starts lifting the front axle. The{" "}
        <Link
          href="/guides/cat-scale-weighing"
          className="text-brand-600 hover:underline"
        >
          CAT scale procedure
        </Link>{" "}
        covers the ticket layout line by line.
      </p>
      <p className="mt-3 text-gray-700">
        If the seller refuses the scale, spend $150 on a tongue scale instead.
        It slips under the coupler, reads in about ten seconds, and tells you
        whether the trailer in front of you is close to the balance its own
        label assumes. It will not give you total weight or axle loads, but it
        will catch the trailer that was loaded nose-heavy to hide a soft floor.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Date Codes, VIN, and the Papers That Follow the Trailer
      </h2>
      <p className="mt-3 text-gray-700">
        Tires fail this check more often than anything else on a used trailer.
        The DOT block on the sidewall ends in four digits, week then year, and
        that is the build date of the tire rather than the trailer. ST tires
        with 60 percent tread left and a 2017 date code are a $500 line item and
        a blowout risk on the first long trip, because the casing ages whether
        the trailer moves or not.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">
                Item
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Where to look
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Red flag
              </th>
            </tr>
          </thead>
          <tbody>
            {PAPER_TABLE.map((row, i) => (
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
      <p className="mt-3 text-sm text-gray-500">
        Cylinders are requalified on a fixed schedule after the manufacture date
        stamped on the collar, so a set that fails the visual check needs
        exchanging rather than refilling.
      </p>

      <p className="mt-4 text-gray-700">
        Then match the three VINs: certification label, frame stamp, and title.
        A trailer sold with a bill of sale and no title is a title problem you
        inherit, and a rebuilt or flood brand follows the frame no matter how
        clean the interior looks. A missing yellow label is the softer signal.
        Most of them peel after eight or ten years, and a few are gone because
        the wall panel behind them was replaced. Ask which one, and look at the
        fasteners around the entry door for the answer.
      </p>
      <p className="mt-3 text-gray-700">
        One purchase decision sits above all of this: the trailer has to fit the
        truck you already own, not the truck you might buy later. Pull your
        truck&apos;s payload sticker, subtract every passenger and the hitch, and
        see what tongue weight is left over. The{" "}
        <Link
          href="/guides/what-size-trailer-can-my-truck-tow"
          className="text-brand-600 hover:underline"
        >
          trailer size guide
        </Link>{" "}
        turns that leftover into a gross weight range before you start shopping,
        which is a better use of an afternoon than driving to look at a trailer
        your hitch cannot carry.
      </p>

      <div className="mt-10 rounded-2xl bg-brand-600 p-8 text-center text-white">
        <h2 className="text-2xl font-bold">Run the Numbers Before the Offer</h2>
        <p className="mt-2 text-brand-100">
          Trailer gross weight, tongue weight, and your truck&apos;s leftover
          payload decide whether a used trailer is a deal or a mistake. Free,
          independent, no sign-up.
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

      <AmazonAffiliate categories={["tongue-scale", "tools"]} />

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Sources &amp; References
      </h2>
      <ul className="mt-3 space-y-1 text-sm text-gray-600">
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
            href="https://www.nhtsa.gov/equipment/tires"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            NHTSA: tire identification numbers and how to read the DOT date code
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
        <li>
          <a
            href="https://www.rvsafety.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            RV Safety &amp; Education Foundation (RVSEF): individual wheel
            position weighing and side-to-side load imbalance
          </a>
        </li>
        <li>
          <a
            href="https://catscale.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            CAT Scale: location finder and the Weigh My Truck app
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
              href="/guides/dry-weight-vs-loaded-weight"
              className="text-brand-600 hover:underline"
            >
              Dry Weight vs Loaded Weight
            </Link>
          </li>
          <li>
            <Link
              href="/guides/cat-scale-weighing"
              className="text-brand-600 hover:underline"
            >
              Weighing Your RV at a CAT Scale
            </Link>
          </li>
          <li>
            <Link
              href="/guides/how-to-read-tire-and-loading-label"
              className="text-brand-600 hover:underline"
            >
              How to Read a Tire and Loading Label
            </Link>
          </li>
          <li>
            <Link
              href="/guides/trailer-frame-and-floor-inspection"
              className="text-brand-600 hover:underline"
            >
              Travel Trailer Frame and Floor Inspection
            </Link>
          </li>
          <li>
            <Link
              href="/guides/what-size-trailer-can-my-truck-tow"
              className="text-brand-600 hover:underline"
            >
              What Size Trailer Can My Truck Tow?
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
