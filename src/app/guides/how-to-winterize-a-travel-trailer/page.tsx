import type { Metadata } from "next";
import Link from "next/link";
import { FaqJsonLd, ArticleJsonLd, HowToJsonLd } from "@/components/seo/JsonLd";
import { DEFAULT_OG_IMAGES } from "@/lib/seo/default-og-image";

import AmazonAffiliate from "@/components/AmazonAffiliate";

export const metadata: Metadata = {
  title: "How to Winterize a Travel Trailer: Water System, Step by Step",
  description:
    "How to winterize a travel trailer without wasting antifreeze: the heater bypass, the two low-point drains, air versus pink, and the fittings that crack first.",
  keywords: [
    "how to winterize a travel trailer",
    "rv winterizing steps",
    "how much rv antifreeze do i need",
    "rv water heater bypass",
    "blow out rv water lines with air",
    "rv antifreeze -50",
    "sanitize rv fresh water tank",
    "travel trailer winterizing kit",
  ],
  alternates: {
    canonical:
      "https://www.rvtowingcalc.com/guides/how-to-winterize-a-travel-trailer",
  },
  openGraph: {
    title: "How to Winterize a Travel Trailer: Water System, Step by Step",
    description:
      "The five fittings that crack first, why a water heater bypass saves six gallons of antifreeze, and how much fresh water weight sits on your tongue before you drain it.",
    url: "https://www.rvtowingcalc.com/guides/how-to-winterize-a-travel-trailer",
    images: DEFAULT_OG_IMAGES,
  },
};

const FAQS = [
  {
    q: "How much RV antifreeze do I need to winterize a travel trailer?",
    a: "Two gallons covers most 20 to 26 foot trailers when the water heater is bypassed, and three gallons covers a 30 footer with two sinks, a shower, and an outside kitchen. Without a bypass, add the water heater tank: six gallons on most units, ten on some. That is the entire reason a $30 bypass kit exists. Installing one pays for itself the first season if you buy antifreeze at $5 a gallon.",
  },
  {
    q: "Can I skip antifreeze if I blow the lines out with air?",
    a: "You still need it in the drains. Compressed air clears the supply lines, but the P-traps, the toilet bowl seal, and the waste tank valves hold water that air never reaches. Pour a cup of propylene glycol into each trap and a splash into the toilet, and the air method is complete. Some owners also leave the low-point drains open all winter, which works until a valve seat dries out and drips in spring.",
  },
  {
    q: "Can I pour antifreeze into the fresh water tank?",
    a: "You can, and you will spend an hour flushing it out in spring. The tank itself drains almost completely through the low-point drain, and the small amount left has room to expand. The better method is a winterizing kit at the pump inlet, which draws antifreeze from a jug and pushes it through the lines without ever entering the fresh tank. If you do use the tank, fill it only after draining, and plan on two full rinses.",
  },
  {
    q: "Does the water heater have to be drained?",
    a: "Yes, and it has to be drained before you add antifreeze, not after. Pull the anode rod or drain plug with the pressure relief valve open so air can enter, or the tank will glug and drain slowly. Never put antifreeze in the heater tank: propylene glycol in a 6-gallon tank is 6 gallons you paid for and six gallons you have to flush out. Bypass the tank, drain it dry, and leave the plug out until spring.",
  },
  {
    q: "When should I winterize a travel trailer?",
    a: "Before the first night that stays below about 24°F for four hours. A single morning at 30°F will not split PEX, which handles short dips well because the pipe flexes. Sustained cold in the low twenties is what cracks the rigid fittings, and the forecast that matters is the overnight low, not the daytime high. If you are unsure, winterize early: the job costs about $15 in materials and an hour of your time.",
  },
];

const FAILURE_TABLE = [
  [
    "City water inlet check valve",
    "A spring-loaded plunger traps a teaspoon behind the screen",
    "$12 to $20",
    "Cracked housing sprays inside the wall on the first pressurized hookup",
  ],
  [
    "Toilet vacuum breaker",
    "Sits above the bowl, holds water after every flush",
    "$25 to $45",
    "Runs down the outside of the bowl and rots the floor flange",
  ],
  [
    "Water pump strainer bowl",
    "Clear plastic cup under the pump, water sits below the outlet",
    "$10 to $18",
    "Cracks, then the pump pulls air and never builds pressure again",
  ],
  [
    "Water heater tank",
    "6 gallons of water against a steel or aluminum shell",
    "N/A",
    "$400 to $900 for a replacement tank or whole unit",
  ],
  [
    "Outside shower faucet",
    "Vertical body holds water with the handle closed",
    "$20 to $35",
    "Split body leaks behind the sidewall where nobody looks until spring",
  ],
];

const ANTIFREEZE_TABLE = [
  ["16 to 20 ft, one sink", "Bypassed", "1 gallon", "$5"],
  ["22 to 26 ft, galley and shower", "Bypassed", "2 gallons", "$10"],
  ["28 to 32 ft, two sinks and outside kitchen", "Bypassed", "3 gallons", "$15"],
  ["Same 28 ft trailer", "No bypass, 6-gallon heater", "9 gallons", "$45"],
];

const METHOD_TABLE = [
  [
    "Air only",
    "Supply lines, if every low point is opened",
    "Any water held in a trap, valve, or pump head",
    "Mild winters, or a trailer stored where it never drops below 25°F",
  ],
  [
    "Antifreeze only",
    "Every line the pump can reach",
    "The fresh tank, if you skip it, and the heater, if you skip the bypass",
    "Most owners, most seasons",
  ],
  [
    "Air, then antifreeze",
    "Lines plus traps plus fixtures",
    "Nothing that was opened and filled correctly",
    "Cold climates, and any trailer stored above 5,000 ft",
  ],
];

const SANITIZE_TABLE = [
  ["20 gallons", "1/3 cup", "4 hours", "Roughly 50 ppm free chlorine"],
  ["30 gallons", "1/2 cup", "4 hours", "Roughly 50 ppm free chlorine"],
  ["40 gallons", "2/3 cup", "4 hours", "Roughly 50 ppm free chlorine"],
  ["60 gallons", "1 cup", "4 hours", "Roughly 50 ppm free chlorine"],
];

const WINTER_STEPS = [
  {
    name: "Drain everything first",
    text: "Open the fresh tank drain, the two low-point drains, and every faucet, hot and cold. Pull the heater plug with the relief valve open. Nothing goes in until the water is out, because antifreeze poured on top of water dilutes and stops protecting.",
  },
  {
    name: "Bypass the water heater",
    text: "Close the two valves at the heater inlet and outlet and open the bypass valve between them, or fit the single-kit version. Confirm the bypass with a hand on the tank: it should stay cold and empty while the pump runs.",
  },
  {
    name: "Push air through the lines",
    text: "Fit a blow-out plug at the city water inlet, set the compressor regulator to 40 psi, and open one faucet at a time until it sputters dry. Never exceed 50 psi, and never blow through the pump with the strainer bowl removed.",
  },
  {
    name: "Draw antifreeze through the pump",
    text: "Attach the winterizing kit to the pump inlet, drop the hose in a jug, and run the pump until pink reaches each fixture. Work cold then hot, farthest fixture first, and finish at the toilet and the outside shower.",
  },
  {
    name: "Protect what the lines do not reach",
    text: "A cup of propylene glycol down each drain, a splash in the toilet bowl to keep the seal wet, and a wipe of silicone on the bowl gasket. Leave the low-point drains open, and put the heater plug somewhere you will find it in April.",
  },
];

export default function HowToWinterizeATravelTrailerPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <ArticleJsonLd
        title="How to Winterize a Travel Trailer: Water System, Step by Step"
        description="A five-step winterizing procedure for a travel trailer water system: draining, the heater bypass, air versus propylene glycol, the fittings that crack first, and the fresh water weight that sits on your tongue before you drain it."
        url="https://www.rvtowingcalc.com/guides/how-to-winterize-a-travel-trailer"
        datePublished="2026-10-23"
      />
      <FaqJsonLd
        faqs={FAQS}
        baseUrl="https://www.rvtowingcalc.com/guides/how-to-winterize-a-travel-trailer"
      />
      <HowToJsonLd
        name="How to winterize a travel trailer water system"
        description="Drain the tanks and low points, bypass the water heater, blow the lines with air, draw antifreeze through the pump to every fixture, then protect the traps and seals."
        steps={WINTER_STEPS}
        totalTime="PT1H30M"
        url="https://www.rvtowingcalc.com/guides/how-to-winterize-a-travel-trailer"
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
        <span className="text-gray-900">Winterizing a Travel Trailer</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
        How to Winterize a Travel Trailer: Water System, Step by Step
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        The first hard freeze finds the same three parts every year: the plastic
        check valve inside the city water inlet, the toilet&apos;s vacuum
        breaker, and the clear strainer bowl under the pump. None of them holds
        more than a teaspoon of water. Together they cost under $60 in parts, and
        any one of them can put water under a floor that was never designed to
        get wet.
      </p>
      <p className="mt-3 text-lg text-gray-600">
        There is a towing reason to think about this before the plumbing reason.
        Fresh water weighs 8.34 lb per gallon, so a 40-gallon tank is 334 lb of
        payload, and on most trailers that tank sits forward of the axles where
        part of it lands on the tongue. Draining for winter is also the cheapest
        way to find out what your rig weighs empty.
      </p>

      <div className="mt-8 rounded-xl bg-brand-50 p-6">
        <h2 className="text-lg font-bold text-brand-800">The Short Answer</h2>
        <p className="mt-2 text-brand-700">
          Winterizing is three jobs: get the water out, bypass the heater, then
          fill every line and trap with{" "}
          <strong>propylene glycol rated for -50°F</strong>. A 25-foot trailer
          with the heater bypassed takes about{" "}
          <strong>two gallons</strong>. The same trailer without a bypass takes
          nine, because a 6-gallon heater tank drinks antifreeze. Do the work
          before a night in the low twenties, not after the first cold morning,
          and do not rely on compressed air alone unless you also pour pink down
          every drain.
        </p>
      </div>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        What Cracks First, and What It Costs
      </h2>
      <p className="mt-3 text-gray-700">
        PEX tubing survives a freeze better than almost anything else in the
        system. It expands and recovers. The failures happen at the ends of the
        runs, in rigid plastic bodies and check valves that hold a pocket of
        water no drain can reach. That is why a trailer can have perfect PEX and
        still leak from three places in April.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">
                Part
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Why it traps water
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Part cost
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                What it does when it splits
              </th>
            </tr>
          </thead>
          <tbody>
            {FAILURE_TABLE.map((row, i) => (
              <tr key={row[0]} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                <td className="border px-3 py-2 text-xs font-semibold">
                  {row[0]}
                </td>
                <td className="border px-3 py-2 text-xs">{row[1]}</td>
                <td className="border px-3 py-2 text-xs font-mono text-brand-700">
                  {row[2]}
                </td>
                <td className="border px-3 py-2 text-xs">{row[3]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm text-gray-500">
        Part prices are typical retail for the replacement component. Repair
        costs assume the damage is found before the floor is wet for a season,
        which is the optimistic case.
      </p>

      <p className="mt-4 text-gray-700">
        The city water inlet deserves its own paragraph. Press the screen in
        with a fingernail and you will feel a small spring-loaded plunger. That
        plunger seals the line when the hose is off, and the cup behind it holds
        water after every trip. Blowing air through the city inlet with a
        blow-out plug does clear it, which is the strongest argument for owning
        the plug. Skip that step and the housing is the part that splits, and it
        splits on the inside of the wall.
      </p>
      <p className="mt-3 text-gray-700">
        Water damage is where the money goes. A split inlet leaking inside a
        wall cavity for a season is the same failure path described in the{" "}
        <Link
          href="/guides/trailer-frame-and-floor-inspection"
          className="text-brand-600 hover:underline"
        >
          frame and floor inspection guide
        </Link>
        , where a soft spot in the floor turns out to be the last symptom of a
        leak that started a year earlier.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        The Bypass, the Drains, and Two Gallons of Pink
      </h2>
      <p className="mt-3 text-gray-700">
        The water heater is the single biggest line item in this job. A
        six-gallon tank, drained and bypassed, costs nothing to protect. Left in
        the circuit, it takes six gallons of antifreeze before the first faucet
        sees any, and that is the difference between a $10 season and a $45 one.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">
                Trailer
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Heater
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Antifreeze
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Cost at $5/gal
              </th>
            </tr>
          </thead>
          <tbody>
            {ANTIFREEZE_TABLE.map((row, i) => (
              <tr key={row[0] + row[1]} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                <td className="border px-3 py-2 text-xs font-semibold">
                  {row[0]}
                </td>
                <td className="border px-3 py-2 text-xs">{row[1]}</td>
                <td className="border px-3 py-2 text-xs font-bold text-brand-700">
                  {row[2]}
                </td>
                <td className="border px-3 py-2 text-xs font-mono">{row[3]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm text-gray-500">
        Quantities assume the fresh tank is drained rather than filled with
        antifreeze and that the outside shower is included. Add half a gallon
        for a washer-dryer prep or an ice maker line.
      </p>

      <p className="mt-4 text-gray-700">
        The two low-point drains sit under the trailer, usually behind a
        removable panel near the water heater or just forward of the axles.
        There is one for hot and one for cold, and they are the fastest way to
        empty the system before anything else happens. Open both, open every
        faucet, and let gravity do the first half of the job.
      </p>

      <ol className="mt-4 space-y-3">
        {WINTER_STEPS.map((step, i) => (
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
        One habit prevents most of the spring surprises: leave the heater plug
        and the anode rod in a zip bag taped inside the heater access door. An
        anode rod that goes missing over the winter gets replaced in June by
        whoever forgot it, and a heater run without one for a season is a heater
        with a corroded tank.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Air, Pink, or Both
      </h2>
      <p className="mt-3 text-gray-700">
        The air method is faster and leaves no flushing to do in spring. It is
        also the method most likely to leave a pocket of water behind, because
        air follows the path of least resistance and a closed valve is a wall. A
        compressor with a small tank also pushes moisture, which is not a
        problem in the lines but is one more reason to follow with antifreeze.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">
                Method
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                What it protects
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Where it fails
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Best for
              </th>
            </tr>
          </thead>
          <tbody>
            {METHOD_TABLE.map((row, i) => (
              <tr key={row[0]} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                <td className="border px-3 py-2 text-xs font-semibold">
                  {row[0]}
                </td>
                <td className="border px-3 py-2 text-xs">{row[1]}</td>
                <td className="border px-3 py-2 text-xs text-danger-700">
                  {row[2]}
                </td>
                <td className="border px-3 py-2 text-xs">{row[3]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm text-gray-500">
        Air pressure at the city inlet should stay at or under 40 psi. Trailer
        plumbing is rated higher, but the fittings and the pump head are not
        rated for a shop compressor at full line pressure.
      </p>

      <p className="mt-4 text-gray-700">
        Read the jug before you buy it. The number on the label, whether it says
        -50 or -100, is a burst protection rating, not the temperature at which
        the liquid stops turning to slush. Propylene glycol at -50 strength will
        look like a cup of crushed ice at 0°F and that is normal. What matters
        is that it does not expand enough to split a fitting. Automotive
        antifreeze containing ethylene glycol does not belong in a trailer:
        it is toxic, and the taste carries into the first tank of spring water.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Spring: Sanitizing Before the First Trip
      </h2>
      <p className="mt-3 text-gray-700">
        The fresh tank sat with a little water in it for five months. Even
        drained and stored well, the tank and the lines need a sanitizing pass
        before anyone drinks from them. Use plain unscented household bleach at
        5.25 to 8.25 percent sodium hypochlorite. Splashless, scented, and
        outdoor formulas are not the same product and should not go in a
        potable water tank.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">
                Tank size
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Bleach
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Contact time
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Result
              </th>
            </tr>
          </thead>
          <tbody>
            {SANITIZE_TABLE.map((row, i) => (
              <tr key={row[0]} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                <td className="border px-3 py-2 text-xs font-semibold">
                  {row[0]}
                </td>
                <td className="border px-3 py-2 text-xs font-bold text-brand-700">
                  {row[1]}
                </td>
                <td className="border px-3 py-2 text-xs">{row[2]}</td>
                <td className="border px-3 py-2 text-xs">{row[3]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm text-gray-500">
        The ratio works out to a quarter cup of bleach per 15 gallons, which is
        the standard dilution most trailer manufacturers publish. Double the
        bleach does not sanitize twice as well; it just takes longer to rinse
        out.
      </p>

      <p className="mt-4 text-gray-700">
        Fill the tank, run every faucet until you smell chlorine, and let it
        sit. Four hours is the usual spec, overnight is common and harmless.
        Drain, refill, and flush until the smell is gone. A carbon filter in the
        galley line handles the last of the taste, and a new filter element
        every season is cheaper than bottling water for a summer.
      </p>
      <p className="mt-3 text-gray-700">
        Then weigh the rig before the first trip, because a full tank changes
        the numbers you set up the hitch around. Forty gallons is 334 lb, and if
        the tank sits ahead of the axles a share of that lands on the ball. On a
        half-ton with a thin payload margin, towing with a full tank and towing
        with a quarter tank are two different setups. The{" "}
        <Link
          href="/tongue-weight-calculator"
          className="text-brand-600 hover:underline"
        >
          tongue weight calculator
        </Link>{" "}
        and the{" "}
        <Link
          href="/guides/cat-scale-weighing"
          className="text-brand-600 hover:underline"
        >
          CAT scale procedure
        </Link>{" "}
        settle it in one trip; the{" "}
        <Link href="/payload-calculator" className="text-brand-600 hover:underline">
          payload calculator
        </Link>{" "}
        tells you what the water costs before you leave.
      </p>

      <div className="mt-10 rounded-2xl bg-brand-600 p-8 text-center text-white">
        <h2 className="text-2xl font-bold">Know What the Water Weighs</h2>
        <p className="mt-2 text-brand-100">
          A full fresh tank is payload, and part of it is tongue weight. Run
          your numbers before the season starts. Free, independent, no sign-up.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link
            href="/water-weight-calculator"
            className="inline-block rounded-xl bg-white px-6 py-3 text-sm font-bold text-brand-700 shadow-lg transition-all hover:bg-brand-50 active:scale-[0.99]"
          >
            Water Weight Calculator
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

      <AmazonAffiliate categories={["water-system"]} />

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Sources &amp; References
      </h2>
      <ul className="mt-3 space-y-1 text-sm text-gray-600">
        <li>
          <a
            href="https://www.rvia.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            RV Industry Association (RVIA): plumbing system standards and
            winterizing guidance for towable RVs
          </a>
        </li>
        <li>
          <a
            href="https://www.epa.gov/ground-water-and-drinking-water"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            US Environmental Protection Agency: emergency disinfection guidance
            and the chlorine dilution ratios behind tank sanitizing
          </a>
        </li>
        <li>
          <a
            href="https://www.cdc.gov/healthywater/drinking/private/wells/maintenance.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            CDC: shock chlorination and flush procedure for stored potable water
          </a>
        </li>
        <li>
          <a
            href="https://www.rvsafety.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            RV Safety &amp; Education Foundation (RVSEF): water weight and
            individual wheel position weighing
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
            <Link href="/guides/winter-storage" className="text-brand-600 hover:underline">
              Winter Storage Options Compared
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
              href="/guides/trailer-battery-maintenance-and-charging"
              className="text-brand-600 hover:underline"
            >
              Trailer Battery Maintenance and Charging
            </Link>
          </li>
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
              href="/guides/spring-checklist"
              className="text-brand-600 hover:underline"
            >
              Spring Prep Checklist
            </Link>
          </li>
          <li>
            <Link
              href="/guides/travel-trailer-pre-trip-inspection"
              className="text-brand-600 hover:underline"
            >
              Pre-Trip Inspection Walkaround
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
