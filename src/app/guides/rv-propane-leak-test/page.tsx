import type { Metadata } from "next";
import Link from "next/link";
import { FaqJsonLd, ArticleJsonLd, HowToJsonLd } from "@/components/seo/JsonLd";
import { DEFAULT_OG_IMAGES } from "@/lib/seo/default-og-image";

import AmazonAffiliate from "@/components/AmazonAffiliate";

export const metadata: Metadata = {
  title: "RV Propane Leak Test: Why the Soap Bubbles Miss It",
  description:
    "An RV propane leak test with soap covers six fittings, not sixty feet of tubing. A 3-minute drop test at 8 in. w.c. finds the rest, and 74 lb rides the tongue.",
  keywords: [
    "rv propane leak test",
    "how to test for propane leaks in rv",
    "rv propane leak detector",
    "propane leak down test manometer",
    "rv propane regulator pressure",
    "inches of water column rv propane",
    "rv propane smell no leak found",
    "propane leak test 3 minutes 8 inches",
    "travel trailer propane leak",
  ],
  alternates: {
    canonical: "https://www.rvtowingcalc.com/guides/rv-propane-leak-test",
  },
  openGraph: {
    title: "RV Propane Leak Test: Why the Soap Bubbles Miss It",
    description:
      "Bubbles only prove the joint you can reach. The drop test at 8 inches of water column proves the whole run, and the cylinders themselves are 74 lb of tongue weight.",
    url: "https://www.rvtowingcalc.com/guides/rv-propane-leak-test",
    images: DEFAULT_OG_IMAGES,
  },
};

const FAQS = [
  {
    q: "How often should you do an RV propane leak test?",
    a: "Twice a year is the working interval: once in spring when the appliances come back into use, and once before the first trip that will run the furnace. Add a test any time a fitting is disturbed, an appliance is pulled for service, a pigtail is replaced, or a cylinder is swapped at an exchange cage. Rough pavement counts too. The system on a travel trailer rides on a frame that flexes for a living, and every flare nut on it is being worked by that flex a few thousand times a season.",
  },
  {
    q: "Can you use dish soap to check for propane leaks?",
    a: "Yes, diluted, and rinse it off afterward. Roughly one part soap to three or four parts water in a spray bottle, applied to a pressurized joint, and watch that spot for a full minute before moving on. Skip anything with chlorine or ammonia in it, since both attack brass and copper and will pit a flare nut you were trying to protect. The limit is coverage: soap proves the joint under the nozzle, not the system, which is why it belongs after a failed drop test rather than instead of one.",
  },
  {
    q: "Why does my propane detector alarm with no smell of gas?",
    a: "Three common causes, and only one is a leak. Low supply voltage makes most RV detectors chirp or alarm falsely, so check the battery and the converter output first. Aerosol sprays, cleaning solvents, and some new upholstery off-gas enough to trip the sensor for an hour. The third is real: propane is heavier than air, so it pools at floor level where the detector sits and your nose does not. A detector samples the air in one room. It cannot tell you whether the piping behind the refrigerator holds pressure.",
  },
  {
    q: "What does a shop charge for a propane leak test?",
    a: "One hour of labor, typically $100 to $200, and you should leave with a written gauge reading rather than a verbal all clear. Ask for the starting pressure, the ending pressure, and the hold time. A shop that cannot produce those three numbers did a bubble test and called it a leak test. The test itself is not the expensive part; the access is. Getting a manometer onto a stove manifold means pulling a burner cover, and on some floorplans that is most of the hour.",
  },
  {
    q: "Will a leak test catch a failing regulator?",
    a: "Sometimes, and never the way people expect. A regulator with a torn diaphragm vents gas through a screened port on the body, outdoors, so the interior alarm never sees it and no bubble will sit on a vent screen long enough to notice. What the drop test shows is a system that will not hold, with every fitting downstream still tight. A regulator that creeps upward past 14 inches of water column with all appliances off has a seat that is not closing, and regulators are replaced rather than repaired.",
  },
];

const METHOD_TABLE = [
  [
    "Nose",
    "That gas is escaping somewhere in this general area",
    "Leaks that pool under the floor, and any leak after the odorant fades in an old cylinder",
    "Instant",
    "$0",
  ],
  [
    "Soap bubbles",
    "This one joint, under this nozzle, is tight",
    "Everything behind a cabinet, inside the belly, and the regulator vent",
    "10 minutes",
    "$5",
  ],
  [
    "Electronic sniffer",
    "Gas is present within a few feet of the probe",
    "Whether the piping holds pressure; false alarms from solvents and aerosols",
    "15 minutes",
    "$30 to $60",
  ],
  [
    "Manometer drop test",
    "The whole run from pigtail to the last appliance valve holds, or does not",
    "Where the leak is. It tells you the system failed, not which fitting",
    "15 minutes",
    "$40 to $80",
  ],
  [
    "Shop test",
    "The same reading, plus a written record and someone else's liability",
    "Nothing, if they hand you the numbers",
    "1 hour",
    "$100 to $200",
  ],
];

const PRESSURE_TABLE = [
  [
    "11 in. w.c.",
    "Working pressure at the appliance inlet, gas flowing",
    "NFPA 1192 5.2.19.3.12",
    "Below 10 under full load means the regulator or the tubing is undersized",
  ],
  [
    "14 in. w.c.",
    "Ceiling on delivery pressure at the appliance connection",
    "NFPA 1192 5.2.19.3.12",
    "A regulator that will not settle under this has a dirty or worn seat",
  ],
  [
    "8 to 14 in. w.c.",
    "Test pressure band for the drop test with appliances connected",
    "NFPA 1192 5.3.20.1",
    "Charge, then bleed down to 8 before the clock starts",
  ],
  [
    "0.5 in. w.c.",
    "Maximum pressure drop to any appliance inlet, everything at full fire",
    "NFPA 1192 5.3.4.1",
    "This is the sizing limit, not a leak allowance. A leak is zero drop",
  ],
  [
    "3 min, zero drop",
    "Pass or fail window on the drop test",
    "NFPA 1192 5.3.20.2",
    "Any fall at all is a fail. There is no acceptable bleed rate",
  ],
  [
    "3 psi, 10 min",
    "Rough-in test on the piping before appliances are connected",
    "NFPA 1192 5.3.18.1",
    "What a builder does. You cannot reach this test with appliances fitted",
  ],
  [
    "About 10 psi",
    "First-stage outlet, between the two regulator stages",
    "Regulator service data",
    "Fixed by the first stage. Not adjustable at the appliance end",
  ],
];

const CYLINDER_TABLE = [
  ["20 lb, refilled", "20 lb", "17 lb", "37 lb", "74 lb", "71 lb"],
  ["20 lb, exchange", "15 lb", "17 lb", "32 lb", "64 lb", "62 lb"],
  ["30 lb, refilled", "30 lb", "25 lb", "55 lb", "110 lb", "106 lb"],
];

const TEST_STEPS = [
  {
    name: "Shut the cylinders, then burn the lines down",
    text: "Close both cylinder valves, then open one stove burner and let it burn out. That empties the lines instead of leaving them charged while you take a fitting apart. Confirm every appliance valve is off, including the refrigerator, which will call for gas on its own schedule and ruin a test you are not watching.",
  },
  {
    name: "Tee into the stove manifold, not the regulator",
    text: "Pull the burner cover, usually two Phillips screws, and fit a test spud to the manifold with a hose to the manometer. The manifold is downstream of the regulator, so it reads the entire distribution run: the tee at the water heater, the drop to the furnace, the line behind the refrigerator. Tee at the regulator outlet and you have tested the regulator and nothing else.",
  },
  {
    name: "Charge to 11, then bleed down to 8",
    text: "Open a cylinder for about five seconds and close it. Crack a burner valve and the needle climbs to 11 or 12 inches. Now bleed it slowly to exactly 8. That step is not cosmetic: at 8 the second-stage diaphragm is fully seated below its lockup point, so the regulator stops adding gas mid-test and the gauge is reading your piping instead of your regulator.",
  },
  {
    name: "Photograph the needle at zero and at three minutes",
    text: "A phone photo of the gauge is the only baseline you cannot misremember. Three minutes, no sun on the gauge, door closed, no appliances cycling. NFPA 1192 allows not less than 8 and not more than 14 inches for the test and calls any drop in the three-minute window a failure. Two or three runs is normal practice when the first one is ambiguous.",
  },
  {
    name: "Locate, repair, then run it again",
    text: "A drop means the system failed, not where. Bubble every joint you can reach, then take a sniffer behind the refrigerator, at the furnace, and along the regulator body. After the repair the system gets charged and tested again from zero. A repair that is not followed by a passing drop test is not a repair, it is a guess with a wrench.",
  },
];

export default function RvPropaneLeakTestPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <ArticleJsonLd
        title="RV Propane Leak Test: Why the Soap Bubbles Miss It"
        description="How to run a timed pressure drop test on an RV propane system: the 8 inch charge, the 3 minute window, the NFPA 1192 limits, and what two full cylinders weigh on the tongue."
        url="https://www.rvtowingcalc.com/guides/rv-propane-leak-test"
        datePublished="2026-10-31"
      />
      <FaqJsonLd
        faqs={FAQS}
        baseUrl="https://www.rvtowingcalc.com/guides/rv-propane-leak-test"
      />
      <HowToJsonLd
        name="How to run an RV propane leak test with a manometer"
        description="Shut the cylinders and burn the lines down, tee a manometer into the stove manifold, charge to 11 inches of water column and bleed to 8, hold for three minutes with a photo at each end, then locate and retest."
        steps={TEST_STEPS}
        totalTime="PT20M"
        url="https://www.rvtowingcalc.com/guides/rv-propane-leak-test"
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
        <span className="text-gray-900">Propane Leak Test</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
        RV Propane Leak Test
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        A 30-foot travel trailer carries somewhere near 60 feet of LP tubing, and
        a soap bubble test reaches about six inches of it.
      </p>
      <p className="mt-3 text-lg text-gray-600">
        Those six inches are the two pigtails and the regulator inlet, because
        they are the only joints you can see without pulling a cabinet apart. The
        other 59 feet run behind the refrigerator, under the shower, and down
        through the belly pan. Every one of those joints can leak for a season
        without a single bubble forming anywhere you were looking.
      </p>

      <div className="mt-8 rounded-xl bg-brand-50 p-6">
        <h2 className="text-lg font-bold text-brand-800">The Short Answer</h2>
        <p className="mt-2 text-brand-700">
          The test that covers the whole system is a <strong>timed pressure drop
          test</strong>: charge the lines to 11 inches of water column, bleed down
          to 8, and hold for three minutes with every appliance valve closed. Any
          drop at all is a failure. A $40 manometer and a test spud at the stove
          manifold get you there in about twenty minutes. Bubbles are for finding
          the leak after the drop test tells you one exists. Spending $100 to
          $200 at a shop buys the same reading plus a paper trail.
        </p>
      </div>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        The Soap Test Only Reaches Six Fittings
      </h2>
      <p className="mt-3 text-gray-700">
        Count them on your own trailer. Two at the pigtail-to-regulator
        connections, two at the cylinder OPD valves, one at the changeover knob,
        and one where the supply line leaves the regulator. That is the visible
        half of the system, and it is also the half that gets exercised every time
        you swap a cylinder, which makes it the half most likely to be
        re-tightened by hand and the least likely to be the problem.
      </p>
      <p className="mt-3 text-gray-700">
        The joints that fail are the ones nobody looks at. A flare nut at the
        furnace, worked loose over four seasons of frame flex. A compression
        fitting behind the refrigerator access panel that was never quite tight
        from the factory. The tee feeding the water heater, buried under the
        wardrobe floor. None of these will ever see a spray bottle, and all of
        them are downstream of the regulator, which means all of them are inside
        the volume a drop test measures.
      </p>
      <p className="mt-3 text-gray-700">
        There is a second blind spot that surprises people. A regulator with a
        torn diaphragm vents through a screened port on its own body, outside the
        coach. No interior alarm sees it, because the gas is outdoors. No bubble
        sits on a vent screen, because the screen is designed to pass gas. You can
        bubble every fitting on the A-frame twice and still be towing a propane
        leak that only shows up when the furnace calls for heat.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">Method</th>
              <th className="border px-3 py-2 text-left font-semibold">
                What it actually proves
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                What it cannot see
              </th>
              <th className="border px-3 py-2 text-left font-semibold">Time</th>
              <th className="border px-3 py-2 text-left font-semibold">Cost</th>
            </tr>
          </thead>
          <tbody>
            {METHOD_TABLE.map((row, i) => (
              <tr key={row[0]} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                <td className="border px-3 py-2 text-xs font-semibold">
                  {row[0]}
                </td>
                <td className="border px-3 py-2 text-xs">{row[1]}</td>
                <td className="border px-3 py-2 text-xs">{row[2]}</td>
                <td className="border px-3 py-2 text-xs font-mono">{row[3]}</td>
                <td className="border px-3 py-2 text-xs font-mono font-semibold text-brand-700">
                  {row[4]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm text-gray-500">
        The sniffer earns its place on the third row for one reason only: it finds
        gas where a bottle cannot reach. It cannot confirm a system is tight,
        because a tight system is a pressure claim, not a concentration claim.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Running the Drop Test
      </h2>
      <p className="mt-3 text-gray-700">
        Five steps, one gauge, and a phone. The order matters more than the tools,
        because two of the five failures in a DIY test come from starting the
        clock at the wrong pressure.
      </p>

      <ol className="mt-4 space-y-3">
        {TEST_STEPS.map((step, i) => (
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
        The charge-and-bleed sequence is the step people skip, and it produces
        more false failures than any real leak. Charge the system and start the
        clock at 12 inches, and the second-stage diaphragm is still above lockup:
        it keeps feeding gas into your test volume, the needle sits high and then
        falls as the regulator finally seats, and you spend an afternoon hunting a
        leak that does not exist. Bleed to 8 and the regulator is out of the
        conversation before the timer starts.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        What 8, 11, and 14 Inches Actually Mean
      </h2>
      <p className="mt-3 text-gray-700">
        RV propane runs at a pressure so low that it is measured in inches of
        water, not psi. One inch of water column is about 0.036 psi. The whole
        system operates on roughly 0.4 psi at the appliance, which is why a
        pressure gauge from the hardware store is useless here and why a
        manometer, a U-tube or a diaphragm cell calibrated in inches, is the only
        instrument that reads the numbers in the code.
      </p>
      <p className="mt-3 text-gray-700">
        The figure that matters most is not 11. It is the spread between 8 and 14,
        because that band is what NFPA 1192 sets for the test, and 14 is also the
        ceiling on delivery pressure at the appliance connection. A regulator that
        will not settle below 14 with everything off has a seat that is not
        closing. It is not adjustable back to health. It gets replaced.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">Reading</th>
              <th className="border px-3 py-2 text-left font-semibold">
                What it is
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Where it comes from
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                If you are outside it
              </th>
            </tr>
          </thead>
          <tbody>
            {PRESSURE_TABLE.map((row, i) => (
              <tr key={row[0]} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                <td className="border px-3 py-2 text-xs font-mono font-semibold">
                  {row[0]}
                </td>
                <td className="border px-3 py-2 text-xs">{row[1]}</td>
                <td className="border px-3 py-2 text-xs text-gray-500">
                  {row[2]}
                </td>
                <td className="border px-3 py-2 text-xs">{row[3]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm text-gray-500">
        Clause numbers are from NFPA 1192, the standard RV builders are inspected
        against. Your trailer was tested to these before it left the plant, which
        is why a failure four years later is almost always a fitting rather than a
        design.
      </p>

      <p className="mt-4 text-gray-700">
        One more number that wrecks tests: propane expands about 1.5% for every
        10&deg;F. On an 8-inch reading, a 20&deg;F swing between the start and the
        end of the test moves the needle roughly a quarter inch, which is enough
        to look like a slow leak on a gauge with no fine scale. NFPA 1192 requires
        the piping and the air to be at the same temperature before the test and
        held uniform through it. Practically: do not test a trailer whose copper
        run is in direct afternoon sun, and do not start at 80&deg;F and finish at
        60&deg;F.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Two Full Cylinders, 74 Pounds, All of It Forward
      </h2>
      <p className="mt-3 text-gray-700">
        This is the part that belongs on a towing site. The cylinders sit on the
        A-frame a few inches behind the coupler, which is the worst possible place
        for weight on a trailer: ahead of the axles, and at the end of the longest
        lever on the frame. Whatever the pair weighs lands on your ball almost
        undiminished.
      </p>
      <p className="mt-3 text-gray-700">
        The arithmetic is the same one that governs a water tank. The share that
        reaches the coupler is the distance from the axles to the load, divided by
        the distance from the axles to the coupler. Put the cylinders 6 inches aft
        of the coupler on a trailer with a 15-foot span and the arm is 174 of 180
        inches, so 97% of the weight goes to the tongue. A 74-lb pair adds 71 lb
        of tongue weight. Nothing else you own does that.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">
                Cylinder
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Propane in it
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Empty weight
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Full weight
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                A pair
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                On the tongue
              </th>
            </tr>
          </thead>
          <tbody>
            {CYLINDER_TABLE.map((row, i) => (
              <tr key={row[0]} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                <td className="border px-3 py-2 text-xs font-semibold">
                  {row[0]}
                </td>
                <td className="border px-3 py-2 text-xs font-mono">{row[1]}</td>
                <td className="border px-3 py-2 text-xs font-mono">{row[2]}</td>
                <td className="border px-3 py-2 text-xs font-mono">{row[3]}</td>
                <td className="border px-3 py-2 text-xs font-mono font-bold">
                  {row[4]}
                </td>
                <td className="border px-3 py-2 text-xs font-mono font-bold text-brand-700">
                  {row[5]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm text-gray-500">
        Empty weights are the tare stamped on the collar, 17 lb and 25 lb on the
        common steel cylinders. The last column applies the 174/180 lever ratio
        above. Aluminum cylinders cut 10 to 15 lb off the pair and are the one
        swap that improves the number.
      </p>

      <p className="mt-4 text-gray-700">
        The exchange cage deserves its own line. A 20-lb cylinder holds 4.7
        gallons of propane, and the OPD valve stops the fill at 80% of the water
        capacity, which is exactly where the 20 lb figure comes from. Exchange
        programs pre-fill to 15 lb, about 3.5 gallons, and the cylinder is the same
        size. So a swap does not change what fits in the rack, it changes what the
        rack weighs by 10 lb for a pair. You will not feel that on a 7,000-lb
        trailer. On a 3,500-lb single-axle trailer already sitting at 12% tongue
        weight, that is the difference between a stable rig and one that wants to
        wander.
      </p>
      <p className="mt-4 text-gray-700">
        Note that the cargo carrying capacity sticker already assumes both
        cylinders full, so none of this is a payload surprise you need to
        re-budget. What it changes is the reading on a tongue scale, which is a
        number you should know before you buy the trailer rather than after. Run
        the pair through the{" "}
        <Link href="/tongue-weight-calculator" className="text-brand-600 hover:underline">
          tongue weight calculator
        </Link>{" "}
        with and without a full fill and see what it does to your{" "}
        <Link href="/payload-calculator" className="text-brand-600 hover:underline">
          payload margin
        </Link>
        . If the answer is tight, the{" "}
        <Link href="/guides/cargo-carrying-capacity-ccc" className="text-brand-600 hover:underline">
          CCC breakdown
        </Link>{" "}
        shows where the rest of the weight went.
      </p>
      <p className="mt-4 text-gray-700">
        Buy a manometer and a test spud, test at the stove every spring and again
        before the first cold trip, and photograph the gauge both times. Twenty
        minutes twice a year is the whole cost, and it is the only maintenance on
        this trailer that can kill you by being skipped. The trade-off is that the
        gauge tells you the system failed without telling you where, so keep a
        bottle of leak detector in the same drawer for the day it does.
      </p>

      <div className="mt-10 rounded-2xl bg-brand-600 p-8 text-center text-white">
        <h2 className="text-2xl font-bold">Weight You Forgot You Were Carrying</h2>
        <p className="mt-2 text-brand-100">
          Two full cylinders are 74 lb on the ball before you load a single bag.
          Run your own numbers, free and independent.
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

      <AmazonAffiliate categories={["propane"]} />

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Sources &amp; References
      </h2>
      <ul className="mt-3 space-y-1 text-sm text-gray-600">
        <li>
          <a
            href="https://www.nfpa.org/codes-and-standards/nfpa-1192-standard-development/1192"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            NFPA 1192: Standard on Recreational Vehicles, including LP-gas piping
            test pressures and the three-minute hold
          </a>
        </li>
        <li>
          <a
            href="https://www.nfpa.org/codes-and-standards/nfpa-58-standard-development/58"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            NFPA 58: Liquefied Petroleum Gas Code, covering cylinder valves,
            overfill protection, and requalification
          </a>
        </li>
        <li>
          <a
            href="https://www.propane.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            Propane Education &amp; Research Council: cylinder capacities,
            weights, and safe handling guidance
          </a>
        </li>
        <li>
          <a
            href="https://www.rvia.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            RV Industry Association: LP-gas system and weight labeling standards
            for towable RVs
          </a>
        </li>
        <li>
          <a
            href="https://www.nhtsa.gov/vehicle-safety/rv"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            NHTSA: RV safety information and recall lookup by make and year
          </a>
        </li>
      </ul>

      <div className="mt-10 rounded-xl border border-gray-200 bg-gray-50 p-6">
        <h3 className="font-bold text-gray-900">Related Guides</h3>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          <li>
            <Link
              href="/guides/how-to-winterize-a-travel-trailer"
              className="text-brand-600 hover:underline"
            >
              How to Winterize a Travel Trailer
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
              href="/guides/cat-scale-weighing"
              className="text-brand-600 hover:underline"
            >
              How to Weigh Your Rig at a CAT Scale
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
              href="/guides/payload-capacity"
              className="text-brand-600 hover:underline"
            >
              Payload Capacity Explained
            </Link>
          </li>
          <li>
            <Link
              href="/guides/rv-black-tank-valve-replacement"
              className="text-brand-600 hover:underline"
            >
              RV Black Tank Valve Replacement
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
