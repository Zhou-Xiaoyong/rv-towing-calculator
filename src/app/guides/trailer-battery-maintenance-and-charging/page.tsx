import type { Metadata } from "next";
import Link from "next/link";
import { FaqJsonLd, ArticleJsonLd, HowToJsonLd } from "@/components/seo/JsonLd";
import { DEFAULT_OG_IMAGES } from "@/lib/seo/default-og-image";

import AmazonAffiliate from "@/components/AmazonAffiliate";

export const metadata: Metadata = {
  title: "Trailer Battery Maintenance and Charging: A 12V Owner's Guide",
  description:
    "Trailer battery maintenance and charging: resting voltage state of charge, converter versus 7-pin versus solar amps, watering flooded cells, and storage.",
  keywords: [
    "trailer battery maintenance",
    "travel trailer battery charging",
    "rv battery state of charge chart",
    "how often to water rv battery",
    "7 pin trailer charge wire amps",
    "lifepo4 battery rv converter",
    "rv battery storage winter",
  ],
  alternates: {
    canonical:
      "https://www.rvtowingcalc.com/guides/trailer-battery-maintenance-and-charging",
  },
  openGraph: {
    title: "Trailer Battery Maintenance and Charging: A 12V Owner's Guide",
    description:
      "Why a travel trailer battery dies quietly, how many amps each charging source really delivers, and the monthly routine that doubles battery life.",
    url: "https://www.rvtowingcalc.com/guides/trailer-battery-maintenance-and-charging",
    images: DEFAULT_OG_IMAGES,
  },
};

const FAQS = [
  {
    q: "How often should I check the water in a travel trailer battery?",
    a: "Every 30 days during the camping season, and again before you put the trailer away. Heat and charging are what consume water, so a battery on shore power in July can go from full to exposed plates in six weeks. Check with the charger off and the caps off, and top up with distilled water to about one eighth of an inch below the bottom of the fill well. Never fill above the well, because the electrolyte expands as it charges and will overflow onto the tray.",
  },
  {
    q: "Can I leave my trailer plugged in all winter?",
    a: "Only if you know what your converter does. A modern three-stage converter drops to a float voltage around 13.2 to 13.6 volts and is safe for months. An older single-stage unit holds 13.6 volts or more continuously and will slowly boil a flooded battery dry. Check the water monthly either way, and if the trailer is stored where it freezes, do not charge a lithium bank below 32 F without a heated or low-temp-protected battery.",
  },
  {
    q: "Does the 7-pin connector charge the trailer battery while driving?",
    a: "It delivers a trickle, not a charge. The run from the truck alternator to the trailer battery is long and thin, so voltage drops along the way and a typical setup puts only two to eight amps into the battery at highway speed. That covers the refrigerator on 12V and the parasitic loads, and it may add a little, but it will not recover a deeply discharged bank in a day of driving. Treat the charge line as maintenance, and charge from shore power or solar before a trip.",
  },
  {
    q: "How long will a 100Ah battery run my travel trailer?",
    a: "Plan on about 50 usable amp hours from a 100Ah flooded or AGM battery, because you should not discharge below 50 percent. A trailer furnace draws roughly 3 to 8 amps through the blower, so a cold night can consume 30 to 50 amp hours by itself. That is one night, not a weekend. A 100Ah lithium battery gives you 80 to 90 usable amp hours in the same space and about half the weight, which is why so many owners switch after their first cold trip.",
  },
  {
    q: "Can I swap a flooded battery for lithium without changing anything else?",
    a: "The battery will work, but the charging will be wrong. A converter with a lead-acid profile charges to about 13.6 volts and stops, which leaves a lithium battery at maybe 70 percent and never balances the cells. You need a converter or charger with a lithium profile at 14.2 to 14.6 volts, plus a solar controller set the same way. Also confirm the battery can be charged below freezing, and check that your tow vehicle does not object to the higher resting voltage.",
  },
];

const TYPE_TABLE = [
  [
    "Flooded lead acid (FLA)",
    "50 percent",
    "3 to 5 years",
    "Any charger; needs 14.4 V absorption",
    "Loses capacity fast in cold",
    "Water monthly, clean terminals",
  ],
  [
    "AGM",
    "50 to 60 percent",
    "5 to 7 years",
    "14.4 to 14.7 V absorption, no equalize",
    "Better cold cranking, still suffers",
    "No watering; sensitive to overcharge",
  ],
  [
    "LiFePO4",
    "80 to 90 percent",
    "8 to 12 years",
    "14.2 to 14.6 V, lithium profile required",
    "Will not accept charge below 32 F",
    "No watering; needs low-temp cutoff",
  ],
];

const SOC_TABLE = [
  ["100 percent", "12.73 V", "Full; disconnect or float"],
  ["90 percent", "12.62 V", "Healthy"],
  ["80 percent", "12.50 V", "Recharge soon"],
  ["70 percent", "12.42 V", "Recharge"],
  ["60 percent", "12.32 V", "Recharge now"],
  ["50 percent", "12.20 V", "Floor for lead acid"],
  ["40 percent", "12.06 V", "Damage is accumulating"],
  ["30 percent", "11.90 V", "Sulfation likely"],
  ["20 percent", "11.75 V", "Capacity loss almost certain"],
  ["10 percent", "11.58 V", "Battery may not recover"],
];

const CHARGE_TABLE = [
  [
    "Converter on shore power",
    "30 to 55 A initially, tapering",
    "Bulk charge to about 90 percent, then hours of absorption",
    "Will not finish the last 10 percent quickly; check the water",
  ],
  [
    "7-pin charge line from the truck",
    "2 to 8 A at the trailer battery",
    "Holding level while driving, refrigerator on 12 V",
    "Long thin wire drops voltage; never a real recharge",
  ],
  [
    "100 W solar panel",
    "5 to 6 A peak, 25 to 35 Ah per good day",
    "Off-grid top-up and float",
    "Shade and panel angle cut output by half or more",
  ],
  [
    "Generator through the converter",
    "Same as the converter",
    "Bulk charge when there is no shore power",
    "Noise, fuel, and runtime limits at quiet hours",
  ],
  [
    "Portable smart charger",
    "5 to 20 A depending on model",
    "Recovering a deeply discharged battery, storage float",
    "Slower than a converter but gentler on a sulfated bank",
  ],
];

const FREEZE_TABLE = [
  ["100 percent", "About -75 F", "Safe outdoors in any normal climate"],
  ["75 percent", "About -35 F", "Safe in most of the lower 48"],
  ["50 percent", "About -10 F", "At risk in a hard freeze"],
  ["25 percent", "About +5 F", "Will freeze on a normal winter night"],
  ["Discharged", "About +20 F", "Freezes, cracks plates and case"],
];

const WATER_STEPS = [
  {
    name: "Put on eye protection and turn off the charger",
    text: "Battery acid is sulfuric acid. Work outdoors or in a ventilated space, keep flames and sparks away, and disconnect the charger before opening any cap so the cells are not gassing while you lean over them.",
  },
  {
    name: "Remove the caps and look at the plates",
    text: "The electrolyte should sit about one eighth of an inch below the bottom of the fill well. If the plates are exposed, the battery has already been over-discharged or overcharged, and capacity loss has started.",
  },
  {
    name: "Add distilled water only, one cell at a time",
    text: "Never use tap water, because the minerals stay behind and shorten life. Fill each cell to the same level, then stop. Overfilling is worse than underfilling, since the electrolyte expands during charging and pushes out past the caps.",
  },
  {
    name: "Clean and protect the terminals",
    text: "Disconnect the negative cable first and reconnect it last. Scrub the posts and clamps with a baking soda paste, rinse, dry, and coat them with a terminal protector. A loose or corroded clamp looks exactly like a dead battery from the inside of the trailer.",
  },
  {
    name: "Recharge fully, then record the resting voltage",
    text: "Charge until the converter drops to float, then let the battery rest two hours with no load and measure. A fully charged flooded battery reads about 12.7 volts. A reading that will not climb above 12.4 after a full charge is the first sign the battery is on its way out.",
  },
];

export default function TrailerBatteryMaintenancePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <ArticleJsonLd
        title="Trailer Battery Maintenance and Charging: A 12V Owner's Guide"
        description="Trailer battery maintenance and charging explained: resting voltage state of charge, converter versus 7-pin versus solar amps, watering flooded cells, storage, and the weight a battery bank adds to the tongue."
        url="https://www.rvtowingcalc.com/guides/trailer-battery-maintenance-and-charging"
        datePublished="2026-10-18"
      />
      <FaqJsonLd
        faqs={FAQS}
        baseUrl="https://www.rvtowingcalc.com/guides/trailer-battery-maintenance-and-charging"
      />
      <HowToJsonLd
        name="How to maintain a travel trailer battery"
        description="A five-step monthly routine for watering, cleaning and verifying a flooded travel trailer battery."
        steps={WATER_STEPS}
        totalTime="PT30M"
        url="https://www.rvtowingcalc.com/guides/trailer-battery-maintenance-and-charging"
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
        <span className="text-gray-900">Trailer Battery Maintenance</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
        Trailer Battery Maintenance and Charging: A 12V Owner&apos;s Guide
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        The 12V system is the only part of a travel trailer that has to work when
        everything else is off. No hookups, no generator, no sun for two days, and
        the furnace still has to run. It is also the system with the least
        feedback: there is no dash light for a battery that has lost a third of
        its capacity, and a bank that is half sulfated still runs the lights
        perfectly well in the driveway. This guide covers what actually shortens
        battery life, how many amps each charging source really delivers, and the
        short monthly routine that keeps a bank alive for its full service life.
      </p>

      <div className="mt-8 rounded-xl bg-brand-50 p-6">
        <h2 className="text-lg font-bold text-brand-800">The Short Answer</h2>
        <p className="mt-2 text-brand-700">
          Match the charger to the battery chemistry, not the other way around.
          Never take a flooded or AGM battery below <strong>50 percent</strong>,
          measured as 12.2 volts at rest. Expect{" "}
          <strong>2 to 8 amps</strong> from the 7-pin charge line and treat it as
          maintenance, not as a charger. Check the water every 30 days in season.
          Disconnect the negative cable for storage, or leave a maintainer on it,
          and never store a lead-acid battery below 12.4 volts. The single
          biggest killer is not age. It is a slow discharge over a winter that
          nobody noticed.
        </p>
      </div>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Why a Trailer Battery Fails Quietly
      </h2>
      <p className="mt-3 text-gray-700">
        A travel trailer is never truly off. The propane detector alone draws
        around 0.06 to 0.15 amps continuously, and it is wired directly to the
        battery so it cannot be switched off. Add the radio memory, the
        thermostat, the slide-out controller in standby mode and any inverter
        left energized, and a parked trailer can pull 2 to 4 amp hours a day
        without a single light being turned on. Three weeks in the storage lot is
        enough to take a healthy 100Ah battery from full to half.
      </p>
      <p className="mt-3 text-gray-700">
        What happens next is the part owners do not see. A lead-acid battery left
        at a partial state of charge begins to sulfate: lead sulfate hardens on
        the plates and stops returning to the electrolyte on recharge. The
        process starts below about 80 percent and accelerates below 50. By the
        time the battery will not run the furnace through a cold night, the
        damage is months old and no charger will undo it. There is no warning
        light for this, which is why the routine matters more than the hardware.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Battery Types: What You Are Actually Paying For
      </h2>
      <p className="mt-3 text-gray-700">
        Compare batteries on usable amp hours, not on the number printed on the
        label. A 100Ah flooded battery gives you 50 usable amp hours. A 100Ah
        lithium battery gives you 80 to 90 in roughly the same footprint at about
        half the weight. That is why the lithium unit that costs three times as
        much is often the cheaper bank once you size it correctly.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">
                Chemistry
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Usable capacity
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Typical life
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Charging requirement
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Cold behavior
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Care burden
              </th>
            </tr>
          </thead>
          <tbody>
            {TYPE_TABLE.map((row, i) => (
              <tr key={row[0]} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                <td className="border px-3 py-2 font-semibold">{row[0]}</td>
                <td className="border px-3 py-2 text-xs font-semibold text-brand-700">
                  {row[1]}
                </td>
                <td className="border px-3 py-2 text-xs">{row[2]}</td>
                <td className="border px-3 py-2 text-xs">{row[3]}</td>
                <td className="border px-3 py-2 text-xs">{row[4]}</td>
                <td className="border px-3 py-2 text-xs">{row[5]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-gray-700">
        Two warnings that do not appear on the box. First, a lithium battery
        should not be charged below 32 F, because plating on the anode during a
        cold charge permanently reduces capacity; a low-temperature cutoff is not
        an optional feature if you camp in shoulder season. Second, a lithium
        bank needs a converter with an actual lithium profile. Dropping a
        lithium battery into a trailer with a lead-acid converter works, but it
        will sit permanently at 70 percent and never balance. If your rig is
        stored through a hard freeze, read the{" "}
        <Link href="/guides/winter-storage" className="text-brand-600 hover:underline">
          winter storage guide
        </Link>{" "}
        before deciding whether to leave the battery in place.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Reading State of Charge Without a Hydrometer
      </h2>
      <p className="mt-3 text-gray-700">
        A voltage reading is the cheapest instrument you have, and it is accurate
        enough to make decisions if you take it correctly. The catch is that it
        must be a <strong>resting</strong> voltage: at least two hours after the
        charger is removed and with no load connected. Right after charging, the
        surface charge reads high by as much as a volt. Under load, the reading
        sags and tells you nothing about capacity. Measure at the battery posts,
        not at a 12V outlet inside the trailer.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">
                State of charge
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Resting voltage
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                What it means
              </th>
            </tr>
          </thead>
          <tbody>
            {SOC_TABLE.map((row, i) => (
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
      <p className="mt-3 text-gray-700">
        The 12.2 volt line is the one worth memorizing. It is 50 percent, and on
        a lead-acid battery it is the floor, not a target. A battery that rests
        at 12.5 volts after a full charge has already lost capacity and should be
        load tested before the next trip rather than carried into a season.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        The Charging Sources, Ranked by What They Deliver
      </h2>
      <p className="mt-3 text-gray-700">
        The most expensive mistake in this system is expecting one source to do
        the job of another. Amps at the battery are what matter, and they are
        almost always lower than the label suggests once wire length and voltage
        drop are included.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">
                Source
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Realistic amps at the battery
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                What it is good for
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Limit
              </th>
            </tr>
          </thead>
          <tbody>
            {CHARGE_TABLE.map((row, i) => (
              <tr key={row[0]} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                <td className="border px-3 py-2 text-xs font-semibold">
                  {row[0]}
                </td>
                <td className="border px-3 py-2 text-xs font-semibold text-brand-700">
                  {row[1]}
                </td>
                <td className="border px-3 py-2 text-xs">{row[2]}</td>
                <td className="border px-3 py-2 text-xs">{row[3]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-gray-700">
        The 7-pin charge line deserves its own paragraph, because so many owners
        plan around it. Pin 6 on the connector sends alternator current back to
        the trailer, but the wire is typically 10 or 12 gauge across 20 to 30
        feet, which produces a real voltage drop. By the time current reaches a
        discharged battery it is often under five amps, and a battery at 50
        percent needs something closer to 50 amp hours to recover. The charge
        line keeps a full battery full. The{" "}
        <Link
          href="/guides/trailer-wiring-harness-7-pin-troubleshooting"
          className="text-brand-600 hover:underline"
        >
          7-pin wiring guide
        </Link>{" "}
        covers the pinout and the diagnostics if that line is not working at all.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        The Five-Minute Monthly Routine
      </h2>
      <p className="mt-3 text-gray-700">
        Flooded batteries need water, clean connections and a full charge. AGM
        and lithium batteries skip the water and need the rest. Either way, the
        routine is short enough that there is no good reason to skip it.
      </p>
      <ol className="mt-4 space-y-3">
        {WATER_STEPS.map((step, i) => (
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

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Storage Is Where Batteries Die
      </h2>
      <p className="mt-3 text-gray-700">
        A battery left connected in a stored trailer will be flat within a month
        or two, and a flat battery in freezing weather is a cracked battery. The
        electrolyte in a discharged battery is mostly water, and water expands
        when it freezes hard enough to bend plates and split the case. A charged
        battery is a different object entirely, because the acid concentration
        depresses the freezing point.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">
                State of charge at storage
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Approx. freezing point
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                What that means outdoors
              </th>
            </tr>
          </thead>
          <tbody>
            {FREEZE_TABLE.map((row, i) => (
              <tr key={row[0]} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                <td className="border px-3 py-2 text-xs font-semibold">
                  {row[0]}
                </td>
                <td className="border px-3 py-2 text-xs font-semibold text-brand-700">
                  {row[1]}
                </td>
                <td className="border px-3 py-2 text-xs">{row[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm text-gray-500">
        Figures are typical for lead-acid and vary with specific gravity. Lithium
        batteries do not freeze at these temperatures, but most cannot be charged
        below 32 F.
      </p>
      <p className="mt-3 text-gray-700">
        The practical storage procedure is: charge to full, disconnect the
        negative cable so the detectors cannot drain it, and either leave a smart
        maintainer connected or recharge to full once a month. Do not store a
        lead-acid battery on a concrete floor argument &mdash; that one is a myth
        &mdash; but do keep it from sitting on a steel tray that stays wet.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        The Weight Nobody Counts
      </h2>
      <p className="mt-3 text-gray-700">
        Everything in this guide sits at the front of the trailer, and on most
        travel trailers that means it is tongue weight. Two 6V golf-cart
        batteries weigh about 130 pounds together. Two full 20-pound propane
        cylinders add roughly 75 pounds with the tanks. A weight distribution
        hitch head and bars add another 75 to 100. That is close to 300 pounds
        bolted to the A-frame before a single item goes inside the trailer, and
        every one of those pounds comes out of the tow vehicle&apos;s payload.
      </p>
      <p className="mt-3 text-gray-700">
        This is where a battery upgrade stops being an electrical decision. Moving
        from two flooded batteries to one lithium unit can remove 60 pounds from
        the tongue, and moving the bank inside the trailer over the axles changes
        the tongue weight again. Either way, re-measure the tongue weight after
        the change instead of assuming it stayed the same. Run the{" "}
        <Link href="/tongue-weight-calculator" className="text-brand-600 hover:underline">
          tongue weight calculator
        </Link>{" "}
        and the{" "}
        <Link href="/payload-calculator" className="text-brand-600 hover:underline">
          payload calculator
        </Link>{" "}
        with the new numbers, and check the result against the{" "}
        <Link href="/guides/payload-capacity" className="text-brand-600 hover:underline">
          payload capacity guide
        </Link>{" "}
        if the truck is already close to its limit.
      </p>

      <div className="mt-10 rounded-2xl bg-brand-600 p-8 text-center text-white">
        <h2 className="text-2xl font-bold">A Battery Swap Changes the Tongue Weight</h2>
        <p className="mt-2 text-brand-100">
          Removing 60 pounds from the A-frame is 60 pounds back in your payload.
          Verify the new tongue weight and payload before the next trip. Free,
          independent, no sign-up.
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

      <AmazonAffiliate categories={["battery"]} />

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Sources &amp; References
      </h2>
      <ul className="mt-3 space-y-1 text-sm text-gray-600">
        <li>
          <a
            href="https://batterycouncil.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            Battery Council International &mdash; lead-acid state of charge,
            freezing point and service life data
          </a>
        </li>
        <li>
          <a
            href="https://www.energy.gov/eere/vehicles/batteries"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            U.S. Department of Energy &mdash; battery chemistry and charging
            fundamentals
          </a>
        </li>
        <li>
          <a
            href="https://www.rvia.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            RV Industry Association (RVIA) &mdash; RV electrical system and
            weight labelling standards
          </a>
        </li>
        <li>
          <a
            href="https://www.nfpa.org/codes-and-standards/nfpa-1194-standard-development/1194"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            NFPA 1194 &mdash; standard for recreational vehicles, including
            battery installation and ventilation
          </a>
        </li>
        <li>
          <a
            href="https://www.rvsafety.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            RV Safety &amp; Education Foundation (RVSEF) &mdash; independent load
            and weight education
          </a>
        </li>
      </ul>

      <div className="mt-10 rounded-xl border border-gray-200 bg-gray-50 p-6">
        <h3 className="font-bold text-gray-900">Related Guides</h3>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          <li>
            <Link
              href="/guides/trailer-wiring-harness-7-pin-troubleshooting"
              className="text-brand-600 hover:underline"
            >
              7-Pin Trailer Wiring Troubleshooting
            </Link>
          </li>
          <li>
            <Link
              href="/guides/electric-trailer-tongue-jack-troubleshooting"
              className="text-brand-600 hover:underline"
            >
              Electric Tongue Jack Troubleshooting
            </Link>
          </li>
          <li>
            <Link href="/guides/winter-storage" className="text-brand-600 hover:underline">
              Winter Storage Checklist
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
            <Link href="/guides/payload-capacity" className="text-brand-600 hover:underline">
              Payload Capacity Explained
            </Link>
          </li>
          <li>
            <Link href="/guides/tongue-weight" className="text-brand-600 hover:underline">
              Tongue Weight Guide
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
