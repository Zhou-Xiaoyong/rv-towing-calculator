import type { Metadata } from "next";
import Link from "next/link";
import { FaqJsonLd, ArticleJsonLd, HowToJsonLd } from "@/components/seo/JsonLd";
import { DEFAULT_OG_IMAGES } from "@/lib/seo/default-og-image";

import AmazonAffiliate from "@/components/AmazonAffiliate";

export const metadata: Metadata = {
  title: "Towing a Travel Trailer in Winter: Cold Tires, Cold Propane",
  description:
    "Towing a travel trailer in winter cuts tire pressure 2 percent per 10°F and halves propane output. The eight numbers to reset before your first cold mile.",
  keywords: [
    "towing a travel trailer in winter",
    "trailer tire pressure cold weather",
    "tire pressure drops 2 percent per 10 degrees",
    "rv propane furnace cold weather",
    "winter rv towing tips",
    "trailer brakes after road salt",
    "can you tow a camper in snow",
    "rv tank heater cold weather",
  ],
  alternates: {
    canonical:
      "https://www.rvtowingcalc.com/guides/towing-a-travel-trailer-in-winter",
  },
  openGraph: {
    title: "Towing a Travel Trailer in Winter: Cold Tires, Cold Propane",
    description:
      "A tire set at 50 psi in a 70 degree shop reads 44 psi at 15 degrees, and its load capacity drops with it. What winter takes out of your rig before you leave.",
    url: "https://www.rvtowingcalc.com/guides/towing-a-travel-trailer-in-winter",
    images: DEFAULT_OG_IMAGES,
  },
};

const FAQS = [
  {
    q: "Do I need to add air to trailer tires in winter?",
    a: "Almost always, yes. Tire pressure falls about 2 percent for every 10 degrees of temperature drop, so a tire set to 50 psi at 70 degrees reads roughly 44 psi at 15 degrees. That is not a leak, it is physics, and it costs you about 7 percent of the tire's load capacity. Top up to the pressure on the certification label at the temperature you will actually drive in, and do it in the morning before the trailer has moved. Do not bleed air out of a hot tire in summer for the same reason in reverse.",
  },
  {
    q: "Can you tow a travel trailer in snow?",
    a: "The pulling part is rarely the problem. Traction and stopping are. Most ST trailer tires carry no three peak mountain snowflake rating, and their compound stiffens below about 20 degrees, so the trailer slides earlier than the truck does. Some mountain states require chains or an approved traction device on towed units above a set weight, and a few close passes to trailers outright in bad conditions. Check the state DOT road report before the pass, not at the chain-up area, and remember the trailer has no anti-lock braking.",
  },
  {
    q: "How do I keep the water system from freezing while traveling?",
    a: "Either drain it or keep the coach heated. A travel trailer furnace heats the living space, not the belly pan, so a full fresh tank sitting over an unheated axle bay will freeze on a long drive at 10 degrees. Tank heaters draw 5 to 10 amps each and only help if the battery is charged and the switch is on before the water gets cold. The other reliable option is to travel with empty tanks, carry drinking water in jugs, and use the trailer's water only after you are plugged in.",
  },
  {
    q: "Does towing in cold weather hurt fuel economy?",
    a: "It does, and more than most people expect. Cold air is denser, winter blend gasoline carries less energy per gallon, and the engine runs richer until it reaches temperature. Add longer warm-up idles and more rolling resistance from wet or slushy pavement, and a rig that returns 9 mpg in July often returns 7.5 to 8 in January. That matters on a route planned around 200 mile fuel stops. Plan the same spacing and accept that you will be buying more gallons for the same miles.",
  },
  {
    q: "What temperature is too cold to tow a travel trailer?",
    a: "There is no published cutoff, so the honest answer is a set of limits rather than a number. Below about 20 degrees, ST tire compounds stiffen and the trailer loses grip before the truck does. Below 10 degrees, propane vaporization struggles to feed a 30,000 BTU furnace. Below zero, any water left in the lines is a cracked fitting waiting for the thaw. The practical floor is usually the road, not the thermometer: a brined surface that refreezes at sundown is worse than dry pavement at 5 degrees.",
  },
];

const TIRE_TABLE = [
  ["70°F", "50.0 psi", "1,760 lb", "88%"],
  ["50°F", "48.0 psi", "1,716 lb", "90%"],
  ["30°F", "46.0 psi", "1,672 lb", "92%"],
  ["15°F", "44.5 psi", "1,639 lb", "94%"],
  ["0°F", "43.0 psi", "1,606 lb", "96%"],
  ["-10°F", "42.0 psi", "1,584 lb", "97%"],
];

const PROPANE_TABLE = [
  ["60°F", "90,000", "137,000", "Furnace, water heater and stove at the same time"],
  ["40°F", "64,000", "98,000", "Furnace plus water heater, nothing else"],
  ["20°F", "42,000", "64,000", "Furnace alone, with little to spare"],
  ["0°F", "25,000", "38,000", "Furnace alone, cylinder above half"],
  ["-10°F", "18,000", "27,000", "Not enough for a 30,000 BTU furnace"],
];

const TROUBLE_TABLE = [
  [
    "Furnace lights, runs ten minutes, quits",
    "Cylinder output below demand, regulator frosting over",
    "Switch to the full cylinder, look for frost on the regulator body",
  ],
  [
    "Trailer pulls to one side under braking",
    "One drum wet, or one magnet face rusted to the drum",
    "Three dry stops in an empty lot, then recheck",
  ],
  [
    "Marker lights dim or one circuit dead",
    "Brine in the seven pin, green pin",
    "Dielectric grease, reseat the plug, test all four circuits",
  ],
  [
    "One tire runs hotter than the rest",
    "It was set at 70 degrees and is now ten percent low",
    "Reset cold, then recheck the axle weight",
  ],
  [
    "Breakaway pin pulled, trailer does not hold",
    "Small battery at half capacity in the cold",
    "Charge or replace, retest with wheels chocked",
  ],
  [
    "Water pump runs and will not shut off",
    "Frozen line, or a fitting that cracked before it froze",
    "Heat the coach and find the leak before it thaws",
  ],
];

const STEPS = [
  {
    name: "Reset every tire at the temperature you will drive in",
    text: "Use the pressure on the certification label, not the number molded on the sidewall, and set it in the morning before the trailer moves. A trailer stored at 45 degrees overnight needs roughly 3 psi more than the same trailer in a heated shop, and the label pressure is a cold pressure at whatever ambient you are standing in.",
  },
  {
    name: "Load test the breakaway battery, not just the switch",
    text: "Chock the wheels, pull the pin, and confirm the trailer brakes apply and hold. A five amp hour battery at 0 degrees delivers about half the capacity it does at 70, so a switch that clicks proves nothing. Recharge it on shore power for a day, retest, and replace it if the hold is weak. Reinsert the pin fully afterward.",
  },
  {
    name: "Start with full cylinders and prove the furnace can carry the load",
    text: "A cylinder below a quarter full has less wetted surface, so it vaporizes less gas at the same temperature. Fill both before a cold trip, then run the furnace and the water heater together for twenty minutes with the trailer cold. If the flame gets lazy or the furnace short cycles, you are at the vaporization limit, not at a furnace fault.",
  },
  {
    name: "Decide the water question before you leave",
    text: "Either drain the fresh tank and the lines, or commit to a heated belly with the furnace running and the tank heaters on. Half measures are the worst option: forty gallons of 40 degree water in an unheated bay is 334 lb of ballast that freezes from the edges inward, and the dump valve is the lowest point in the system.",
  },
  {
    name: "Run the first mile brake test, then recheck at the first stop",
    text: "At 10 to 15 mph, squeeze the manual override on the controller and feel for even drag. Brine and condensation on the drums make the first stop of the morning long. At the first stop, put a hand on each hub and each tire: warm is normal, too hot to hold is not, and one corner that is hotter than its neighbours is the one to look at.",
  },
];

export default function WinterTowingPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <ArticleJsonLd
        title="Towing a Travel Trailer in Winter: Cold Tires, Cold Propane"
        description="How cold air changes tire pressure, load capacity, propane vaporization and brake response on a travel trailer, with the numbers to reset before a winter trip."
        url="https://www.rvtowingcalc.com/guides/towing-a-travel-trailer-in-winter"
        datePublished="2026-11-03"
      />
      <FaqJsonLd
        faqs={FAQS}
        baseUrl="https://www.rvtowingcalc.com/guides/towing-a-travel-trailer-in-winter"
      />
      <HowToJsonLd
        name="How to prepare a travel trailer for winter towing"
        description="Reset tire pressures at the ambient temperature, load test the breakaway battery, fill the cylinders and prove the furnace, settle the water question, then run a first mile brake test and check hub temperatures at the first stop."
        steps={STEPS}
        totalTime="PT90M"
        url="https://www.rvtowingcalc.com/guides/towing-a-travel-trailer-in-winter"
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
        <span className="text-gray-900">Winter Towing</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
        Towing a Travel Trailer in Winter: Cold Tires, Cold Propane
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        A trailer that left a heated shop at 65&deg;F with 50 psi in its tires
        reads 44 psi on the gauge at a 15&deg;F mountain pass. Nothing leaked.
        Nothing failed. The gauge is telling the truth about the air that went in
        two days ago.
      </p>
      <p className="mt-3 text-lg text-gray-600">
        The problem is that the tire did not change and the trailer did not
        change, but the load table did. At 44 psi an ST205/75R14 load range C
        carries about 1,630 lb instead of 1,760. The 1,540 lb sitting on that
        corner is suddenly using 94 percent of what the tire can take, on the
        coldest, hardest, least forgiving morning of the year.
      </p>

      <div className="mt-8 rounded-xl bg-brand-50 p-6">
        <h2 className="text-lg font-bold text-brand-800">The Short Answer</h2>
        <p className="mt-2 text-brand-700">
          Winter does not add weight to your trailer, it removes margin from
          everything that carries the weight. Tire pressure drops about{" "}
          <strong>2 percent for every 10&deg;F</strong>, and load capacity drops
          with it. A 20 lb propane cylinder delivers about a quarter of its
          summer output at 0&deg;F. Brake drums stay damp for the first mile after
          road brine. Reset pressures cold, fill both cylinders, charge the
          breakaway battery, and decide the water question before you hook up
          rather than at a pass at dusk.
        </p>
      </div>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Two Percent Per 10 Degrees, and Half Your Reserve
      </h2>
      <p className="mt-3 text-gray-700">
        Air pressure in a sealed tire tracks absolute temperature, which is why
        the rule of thumb holds across tire sizes: about 2 percent per 10&deg;F,
        or roughly 1 psi on a tire running near 50. NHTSA publishes the same
        relationship from the other direction, warning drivers that pressure
        falls about 1 psi for every 10&deg;F drop in ambient temperature.
      </p>
      <p className="mt-3 text-gray-700">
        Put that on a real trailer. A 7,000 lb tandem running 12 percent tongue
        weight puts 1,540 lb on each of four tires, which is the arithmetic in
        our{" "}
        <Link
          href="/guides/single-axle-vs-tandem-axle-travel-trailer"
          className="text-brand-600 hover:underline"
        >
          single axle versus tandem comparison
        </Link>
        . The tire is an ST205/75R14 load range C, rated 1,760 lb at 50 psi cold.
        In July that is 220 lb of headroom. In January, on the same trailer with
        the same gear, it is 110 lb.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">
                Ambient
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Gauge reads
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Capacity at that pressure
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Used by 1,540 lb
              </th>
            </tr>
          </thead>
          <tbody>
            {TIRE_TABLE.map((row, i) => (
              <tr
                key={row[0]}
                className={
                  row[0] === "15°F" ? "bg-brand-50" : i % 2 === 1 ? "bg-gray-50" : ""
                }
              >
                <td className="border px-3 py-2 text-xs font-mono font-semibold">
                  {row[0]}
                </td>
                <td
                  className={
                    row[0] === "15°F"
                      ? "border px-3 py-2 text-xs font-mono font-bold text-brand-700"
                      : "border px-3 py-2 text-xs font-mono"
                  }
                >
                  {row[1]}
                </td>
                <td className="border px-3 py-2 text-xs font-mono">{row[2]}</td>
                <td className="border px-3 py-2 text-xs font-mono">{row[3]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm text-gray-500">
        Tire set to 50 psi at 70&deg;F and not touched. Capacity figures
        interpolate the published ST load and inflation table, which steps down
        about 22 lb per psi below 50 in this size. The 1,540 lb load is a 7,000
        lb tandem at 12 percent tongue weight, spread over four tires.
      </p>

      <p className="mt-4 text-gray-700">
        Two things follow from that table, and both of them are easy to get
        backwards. The first is that the label pressure is a cold pressure at
        the ambient you are standing in, not a number that travels with the
        trailer. A rig parked at 20&deg;F overnight and driven at noon needs the
        label number at 20&deg;F, which means adding air in the morning, not
        subtracting it because the tire looked hard.
      </p>
      <p className="mt-3 text-gray-700">
        The second is the summer version of the same mistake. Inflate to 50 psi
        in a 70&deg;F garage, drive south into 95&deg;F, and the tire is running
        53 psi before the sun hits the south side of the trailer. That is why you
        never bleed a hot tire down to the sticker: it will be 6 psi low by the
        next cold morning. Check pressures cold, adjust cold, and let the hot
        reading be a diagnostic rather than a target. The{" "}
        <Link
          href="/guides/travel-trailer-tire-safety"
          className="text-brand-600 hover:underline"
        >
          tire load and inflation guide
        </Link>{" "}
        has the full table for each load range.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Propane Output Falls Off a Cliff Below 20 Degrees
      </h2>
      <p className="mt-3 text-gray-700">
        A propane cylinder does not deliver gas, it delivers vapor, and the rate
        depends on how much liquid surface is exposed and how warm that surface
        is. At 60&deg;F a full 20 lb cylinder vaporizes somewhere near 90,000
        BTU/hr. At 0&deg;F it manages about 25,000, which is less than a single
        30,000 BTU furnace running flat out.
      </p>
      <p className="mt-3 text-gray-700">
        That is the number behind the furnace that lights, runs ten minutes, and
        quits on the first cold night. Nothing is broken. The demand outran the
        supply, pressure in the line fell, and the burner dropped out on its own
        safety limit. Twenty minutes later it lights again because the cylinder
        warmed back up.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">
                Ambient
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                20 lb cylinder
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                30 lb cylinder
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                What it will run
              </th>
            </tr>
          </thead>
          <tbody>
            {PROPANE_TABLE.map((row, i) => (
              <tr key={row[0]} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                <td className="border px-3 py-2 text-xs font-mono font-semibold">
                  {row[0]}
                </td>
                <td className="border px-3 py-2 text-xs font-mono">{row[1]}</td>
                <td className="border px-3 py-2 text-xs font-mono">{row[2]}</td>
                <td className="border px-3 py-2 text-xs">{row[3]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm text-gray-500">
        BTU/hr figures are typical published vaporization rates for a cylinder at
        least a quarter full. Output falls as the liquid level drops, because a
        partly empty cylinder exposes less wetted steel to the liquid, which is
        why the second cylinder always seems to run the furnace better than the
        first one did.
      </p>

      <p className="mt-4 text-gray-700">
        Two workarounds, and only two. Carry 30 lb cylinders, which buy about 50
        percent more surface area and roughly the same increase in output, or run
        one appliance at a time and accept that the water heater waits while the
        furnace works. A pair of full 20 lb cylinders weighs about 74 lb on the
        tongue, and a pair of 30s adds roughly 40 lb to that, so the upgrade is
        also a{" "}
        <Link href="/tongue-weight-calculator" className="text-brand-600 hover:underline">
          tongue weight
        </Link>{" "}
        decision and not just a comfort one. The{" "}
        <Link
          href="/guides/rv-propane-leak-test"
          className="text-brand-600 hover:underline"
        >
          propane leak test procedure
        </Link>{" "}
        covers what to check at the regulator before you blame the cold.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Brine, Magnets, and the First Stop of the Day
      </h2>
      <p className="mt-3 text-gray-700">
        Electric drum brakes stop by pulling a magnet against the inside face of
        a rotating drum. Both surfaces are bare cast iron, and both of them spend
        the winter coated in whatever the plow trucks laid down. A trailer that
        sat for a week in a brined parking lot has a rust film on the magnet face
        and a damp drum, and the first stop of the morning is noticeably longer
        than the second.
      </p>
      <p className="mt-3 text-gray-700">
        The fix costs nothing. At 10 to 15 mph in an empty lot, squeeze the
        manual override on the controller and let the trailer drag the rig down
        three times, with a little distance between passes. You are burning the
        film off and warming the drums. Do it before you reach a highway, not on
        the ramp.
      </p>
      <p className="mt-3 text-gray-700">
        The same cold that slows the brakes also shrinks the breakaway battery.
        A lead acid pack rated 5 amp hours at 70&deg;F holds roughly half that at
        0&deg;F, and a breakaway switch that clicks is not the same as a breakaway
        system that holds. Chock the wheels, pull the pin, and watch whether the
        trailer actually resists a push. If it does not, the battery is the first
        suspect and the switch is the second. Details on the test and on what a
        cold battery does to a 12 volt system are in the{" "}
        <Link
          href="/guides/trailer-battery-maintenance-and-charging"
          className="text-brand-600 hover:underline"
        >
          trailer battery guide
        </Link>
        .
      </p>
      <p className="mt-3 text-gray-700">
        The seven pin connector deserves thirty seconds of the same walkaround.
        Brine gets past the boot, the pins go green, and one circuit quits
        quietly, usually the running lights, which you will not notice until
        someone flashes you at dusk. A dab of dielectric grease and a reseat
        solves it before it becomes a roadside diagnosis.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Water, Tanks, and What Freezes in Transit
      </h2>
      <p className="mt-3 text-gray-700">
        A travel trailer furnace heats the cabin. It does not heat the belly pan,
        the fresh tank, or the dump valves, and on most trailers the ductwork
        that passes near them is there to keep the floor warm rather than to
        protect plumbing. That distinction decides the water question: either the
        system is drained, or it is heated on purpose and watched.
      </p>
      <p className="mt-3 text-gray-700">
        Travelling with a full fresh tank in a hard freeze is the worst of the
        three options. Forty gallons is 334 lb of ballast, most of it over or
        near the axles, so the tongue weight barely moves and the{" "}
        <Link href="/payload-calculator" className="text-brand-600 hover:underline">
          payload
        </Link>{" "}
        takes the whole hit. Then the tank freezes from the edges inward, the
        tank straps take a load they were never rated for, and the gate valve,
        which is the lowest and most exposed part of the system, is the first
        thing to split.
      </p>
      <p className="mt-3 text-gray-700">
        If you plan to use water in the cold, turn the tank heaters on before the
        water gets cold rather than after, keep the furnace running while you
        drive, and leave the cabinet doors over the pump open so cabin air
        reaches the plumbing. Tank heaters draw 5 to 10 amps each, which is a
        real load on a pair of group 24 batteries over a long drive. If the
        battery bank is marginal, the heaters are the first thing to switch off,
        and draining the system is the better plan. Our{" "}
        <Link
          href="/guides/how-to-winterize-a-travel-trailer"
          className="text-brand-600 hover:underline"
        >
          winterizing walkthrough
        </Link>{" "}
        covers the drain points, including the two that people miss.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        The Five-Step Cold Departure
      </h2>
      <p className="mt-3 text-gray-700">
        None of this takes more than an hour, and most of it happens before the
        trailer moves.
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

      <p className="mt-4 text-gray-700">
        If something does go wrong on the road, the symptom usually points at the
        cause faster than a gauge does. Six of the common ones:
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">
                What you notice
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                What it usually is
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                First move
              </th>
            </tr>
          </thead>
          <tbody>
            {TROUBLE_TABLE.map((row, i) => (
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
        One more number worth carrying in your head: def fluid freezes at about
        12&deg;F, and that is normal and harmless because the tank is heated.
        Diesel fuel is the one to watch. Number 2 gel can plug a filter on a
        5&deg;F morning, so fill with winter blend where it is sold and carry a
        bottle of anti-gel rather than betting on the station you reach at
        midnight.
      </p>

      <div className="mt-10 rounded-2xl bg-brand-600 p-8 text-center text-white">
        <h2 className="text-2xl font-bold">Know Your Numbers Before the Cold Does</h2>
        <p className="mt-2 text-brand-100">
          Tongue weight, payload and per-tire load are the same three numbers in
          January as in July. Run yours free and independent.
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

      <AmazonAffiliate categories={["tpms", "battery"]} />

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Sources &amp; References
      </h2>
      <ul className="mt-3 space-y-1 text-sm text-gray-600">
        <li>
          <a
            href="https://www.nhtsa.gov/equipment/tires"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            NHTSA: tire pressure, temperature effects and load limits
          </a>
        </li>
        <li>
          <a
            href="https://www.rvia.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            RV Industry Association: weight labeling and certification standards
            for towable RVs
          </a>
        </li>
        <li>
          <a
            href="https://www.propane.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            Propane Education &amp; Research Council: cylinder vaporization rates
            by temperature and liquid level
          </a>
        </li>
        <li>
          <a
            href="https://www.codot.gov/travel"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            Colorado DOT: chain and traction requirements for towed vehicles on
            mountain passes
          </a>
        </li>
      </ul>

      <div className="mt-10 rounded-xl border border-gray-200 bg-gray-50 p-6">
        <h3 className="font-bold text-gray-900">Related Guides</h3>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          <li>
            <Link
              href="/guides/travel-trailer-tire-safety"
              className="text-brand-600 hover:underline"
            >
              Travel Trailer Tire Safety
            </Link>
          </li>
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
              href="/guides/rv-propane-leak-test"
              className="text-brand-600 hover:underline"
            >
              RV Propane Leak Test
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
              href="/guides/mountain-towing-transmission-gears"
              className="text-brand-600 hover:underline"
            >
              Mountain Towing: Gears and Transmission Temperature
            </Link>
          </li>
          <li>
            <Link
              href="/guides/rv-tpms-buying-and-setup"
              className="text-brand-600 hover:underline"
            >
              RV TPMS Buying and Setup
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
