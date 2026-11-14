import type { Metadata } from "next";
import Link from "next/link";
import { FaqJsonLd, ArticleJsonLd, HowToJsonLd } from "@/components/seo/JsonLd";
import { DEFAULT_OG_IMAGES } from "@/lib/seo/default-og-image";

import AmazonAffiliate from "@/components/AmazonAffiliate";

export const metadata: Metadata = {
  title: "Thanksgiving at 11,158 Feet: Does Your Tow Rating Drop With the Air?",
  description:
    "Your tow rating never derates. The engine loses 29 percent of its air, the tire gauge reads 5 psi high, and the furnace loses 40 percent at 10,000 feet.",
  keywords: [
    "towing at high altitude",
    "rv towing mountain pass",
    "does towing capacity decrease at altitude",
    "turbo vs naturally aspirated towing",
    "tire pressure at altitude",
    "rv furnace at altitude",
    "thanksgiving rv trip mountains",
  ],
  alternates: {
    canonical:
      "https://www.rvtowingcalc.com/guides/thanksgiving-altitude-towing-power-loss",
  },
  openGraph: {
    title: "Thanksgiving at 11,158 Feet: Does Your Tow Rating Drop With the Air?",
    description:
      "Density ratio, power required by grade, gauge error and furnace derate, applied to a Thanksgiving crossing of an 11,000 foot pass.",
    url: "https://www.rvtowingcalc.com/guides/thanksgiving-altitude-towing-power-loss",
    images: DEFAULT_OG_IMAGES,
  },
};

const FAQS = [
  {
    q: "Does towing capacity decrease at high altitude?",
    a: "No. Towing capacity, GVWR, payload and every axle rating are weight limits, and mass does not change with elevation. Gravity at 11,158 feet is 9.796 ft/s\u00B2 against 9.807 at sea level, which moves a 7,600 lb trailer by 8 lb. What changes is the power available to move that weight: figure 3 percent per 1,000 feet for a gasoline engine, so a 375 hp V8 makes about 267 hp at the Eisenhower Tunnel. The rating was also demonstrated at 3,500 feet, not 11,000, because that is where the SAE J2807 gradeability test runs.",
  },
  {
    q: "Why does my truck downshift constantly on a mountain pass?",
    a: "Because it needs more rpm to make the same horsepower. Horsepower is torque times rpm, so a 375 hp engine that is down to 267 hp has to turn about 40 percent faster to deliver the same power at the wheels. That is the 4,000 rpm you hear in fourth gear where the same climb in Kansas ran at 1,800 rpm in eighth. It is normal, it is not damaging, and the transmission is happier there than it is lugging in a tall gear with the converter slipping.",
  },
  {
    q: "Should I add air to my trailer tires at altitude?",
    a: "No, and this is the mistake that altitude causes most often. A gauge reads pressure above ambient, and ambient pressure drops from 14.70 psi at sea level to 9.66 psi at 11,158 feet, so the same tire reads about 5 psi higher at the tunnel without a single pound of air being added. If you top it off there, you come home 5 psi over the placard. Set pressure cold at your home elevation and leave it alone until you are back.",
  },
  {
    q: "Can I run an RV furnace at 10,000 feet?",
    a: "Usually yes, with two caveats. Gas appliance sizing drops about 4 percent per 1,000 feet above sea level, so a 30,000 BTU furnace delivers roughly 18,000 BTU at 10,000 feet while burning close to the same amount of propane, because the regulator still holds 11 inches of water column at the orifice. The other caveat is the sail switch: a furnace that senses combustion air flow with a paddle in the airstream can fail to prove draft in thin air, and the unit short cycles or refuses to light. Test it the first cold night, not at 2 a.m. on the second, and keep a CO alarm working in the coach.",
  },
];

const ALTITUDE_TABLE = [
  {
    elevation: "0 ft",
    where: "Sea level",
    density: "100%",
    gas: "375 hp",
    diesel: "400 hp",
    gauge: "0.0 psi",
    hard: false,
  },
  {
    elevation: "5,280 ft",
    where: "Denver, I-25",
    density: "85%",
    gas: "320 hp",
    diesel: "368 hp",
    gauge: "+2.6 psi",
    hard: false,
  },
  {
    elevation: "7,000 ft",
    where: "Flagstaff, I-40",
    density: "81%",
    gas: "304 hp",
    diesel: "358 hp",
    gauge: "+3.4 psi",
    hard: false,
  },
  {
    elevation: "7,239 ft",
    where: "Donner Summit, I-80",
    density: "80%",
    gas: "302 hp",
    diesel: "357 hp",
    gauge: "+3.5 psi",
    hard: false,
  },
  {
    elevation: "7,834 ft",
    where: "Raton Pass, I-25",
    density: "79%",
    gas: "296 hp",
    diesel: "353 hp",
    gauge: "+3.7 psi",
    hard: false,
  },
  {
    elevation: "10,666 ft",
    where: "Vail Pass, I-70",
    density: "72%",
    gas: "271 hp",
    diesel: "336 hp",
    gauge: "+4.8 psi",
    hard: true,
  },
  {
    elevation: "11,158 ft",
    where: "Eisenhower Tunnel, I-70",
    density: "71%",
    gas: "267 hp",
    diesel: "333 hp",
    gauge: "+5.0 psi",
    hard: true,
  },
];

const CLIMB_TABLE = [
  {
    grade: "4%",
    at35: "78 hp",
    at45: "106 hp",
    at55: "137 hp",
    note: "Most Interstate grades west of the Mississippi.",
    hard: false,
  },
  {
    grade: "6%",
    at35: "104 hp",
    at45: "139 hp",
    at55: "178 hp",
    note: "The design maximum for rural Interstate in mountainous terrain.",
    hard: false,
  },
  {
    grade: "8%",
    at35: "130 hp",
    at45: "173 hp",
    at55: "219 hp",
    note: "A pass approach with a truck lane and a 45 mph advisory.",
    hard: false,
  },
  {
    grade: "10%",
    at35: "157 hp",
    at45: "207 hp",
    at55: "261 hp",
    note: "Two-lane mountain road. The 55 mph column uses 98 percent of the engine.",
    hard: true,
  },
];

const STEPS = [
  {
    name: "Weigh the rig at home, not at the pass",
    text: "Three passes at a CAT scale: truck alone with the trailer parked, then the whole rig with the spring bars tensioned, then the rig with the bars released. The ticket is the same at 11,000 feet as at 500, because a scale measures force and gravity barely moves. That is the point. The paper you printed in Kansas is still the correct baseline in Colorado, so stop looking for an altitude correction to your axle weights.",
  },
  {
    name: "Set tire pressure cold at home elevation",
    text: "Sixty-five psi at 70 degrees becomes about 64 psi at 30 degrees and 11,158 feet, because the altitude effect and the cold soak are almost the same size and point in opposite directions. Nothing needs adjusting. What you must not do is stop at the summit, see 70 psi on the gauge, and bleed air out, or see a low reading on the way home and add 5 psi you did not need.",
  },
  {
    name: "Run the gain check on flat ground",
    text: "Set the trailer brake controller at 20 mph on a level, empty road near home, which is the procedure in the brake controller guide, and do not touch it again on the trip. A proportional controller set correctly at low elevation is set correctly at altitude. Gain has nothing to do with air density and everything to do with trailer weight, which has not changed.",
  },
  {
    name: "Choose the gear before the grade starts",
    text: "Lock out the top two gears at the base of the climb, where you can still do it at 55 mph with both hands on the wheel. Waiting until the truck is already hunting between fourth and fifth on a switchback means taking a hand off the wheel at the worst moment. Four thousand rpm for ten minutes is easier on the transmission than 1,600 rpm with the converter slipping.",
  },
  {
    name: "Light the furnace the first cold night",
    text: "An RV furnace draws combustion air from outside through its vent, so thin air is thin air to the burner as well. Run it for twenty minutes the first evening, confirm the blower runs steady and the sail switch holds, and listen for a burner that lights and drops out. If it short cycles at 9,000 feet, the answer is more blankets or a lower campground, not a wider orifice on a holiday weekend.",
  },
];

export default function ThanksgivingAltitudeTowingPowerLossPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <ArticleJsonLd
        title="Thanksgiving at 11,158 Feet: Does Your Tow Rating Drop With the Air?"
        description="What 29 percent less air does to a 375 hp V8, a tire gauge, and a 30,000 BTU furnace, and why the weight sticker never changes."
        url="https://www.rvtowingcalc.com/guides/thanksgiving-altitude-towing-power-loss"
        datePublished="2026-11-14"
      />
      <FaqJsonLd
        faqs={FAQS}
        baseUrl="https://www.rvtowingcalc.com/guides/thanksgiving-altitude-towing-power-loss"
      />
      <HowToJsonLd
        name="How to prepare a truck and trailer for a high altitude Thanksgiving crossing"
        description="Weigh the rig at home, set tire pressure at home elevation, run the brake controller gain check on flat ground, lock out the top gears before the climb, and test the furnace the first cold night."
        steps={STEPS}
        totalTime="PT45M"
        url="https://www.rvtowingcalc.com/guides/thanksgiving-altitude-towing-power-loss"
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
        <span className="text-gray-900">Thanksgiving Altitude Towing</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
        Thanksgiving at 11,158 Feet: Does Your Tow Rating Drop With the Air?
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        The Eisenhower Tunnel sits at 11,158 feet, where the air is 29 percent
        thinner than at sea level. A 375 hp gasoline V8 makes about 267 hp there.
        Your 7,600 lb trailer still weighs 7,600 lb, the payload sticker still
        reads 1,480, and a scale ticket printed in Silverthorne reads exactly
        what the one from Kansas reads.
      </p>
      <p className="mt-3 text-lg text-gray-600">
        None of the weight ratings derate with elevation. That part is simple.
        The complication is that three things on the rig do change, and two of
        them are checked with a gauge you already own.
      </p>

      <div className="mt-8 rounded-xl bg-brand-50 p-6">
        <h2 className="text-lg font-bold text-brand-800">The Short Answer</h2>
        <p className="mt-2 text-brand-700">
          The sticker holds at any elevation. The engine does not: figure 3
          percent per 1,000 feet for a gasoline V8, which is 29 percent at the
          tunnel and takes 375 hp down to about 267. The tire gauge reads 5 psi
          high up there without a pound of air being added, and a 30,000 BTU
          furnace delivers roughly 18,000 BTU at 10,000 feet. Keep the weights
          where they are,{" "}
          <strong>plan on 45 mph up a 6 percent grade</strong>, and set tire
          pressure at home.
        </p>
      </div>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        The Rating Was Earned at 3,500 Feet
      </h2>
      <p className="mt-3 text-gray-700">
        The number on your door jamb comes from SAE J2807, and the part of that
        standard people never read is the gradeability test. It runs 11.4 miles
        up the Davis Dam grade from 1,000 feet to 3,500 feet at 100 degrees
        ambient, and the truck has to hold 40 mph with the test trailer attached
        for the whole climb. That is the demonstration. Three thousand five
        hundred feet in desert heat.
      </p>
      <p className="mt-3 text-gray-700">
        Above that elevation, no manufacturer publishes an altitude derate for a
        retail truck. The{" "}
        <Link
          href="/guides/towing-capacity-explained"
          className="text-brand-600 hover:underline"
        >
          towing capacity guide
        </Link>{" "}
        covers what the test does and does not prove, and the owner&rsquo;s
        manual handles the aerodynamic side with a frontal area limit rather
        than a power correction. The rating is silent above 3,500 feet, and
        silence is not the same as permission to ignore the physics.
      </p>
      <p className="mt-3 text-gray-700">
        What genuinely does not change is mass. Gravity at 11,158 feet is 9.796
        ft/s&sup2; against 9.807 at sea level, a tenth of a percent, so the
        trailer that scaled 7,600 lb in Kansas scales 7,592 in Summit County.
        GVWR, GAWR, payload and tongue weight all sit exactly where they sat at
        the start of the trip. If a dealer or a forum thread tells you to
        &ldquo;subtract 10 percent for altitude,&rdquo; they are subtracting from
        the wrong column.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        29 Percent Less Air, and Where That Number Comes From
      </h2>
      <p className="mt-3 text-gray-700">
        Air density falls off predictably with elevation: the density ratio is
        one minus 6.8756 times ten to the minus six times elevation in feet, all
        raised to the 4.2559 power. At 11,158 feet that works out to 0.712, or
        71 percent of sea level density. A naturally aspirated engine metered
        fuel to that air mass, so the power follows it down.
      </p>
      <p className="mt-3 text-gray-700">
        The shop rule of thumb is 3 percent per 1,000 feet, which predicts a 33
        percent loss at the tunnel. The density ratio predicts 29. Real dyno
        pulls usually land between the two, because intake tuning recovers a
        little of what the thin air took. Use 29 to 33 percent and you will be
        right about how the climb feels.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">
                Elevation
              </th>
              <th className="border px-3 py-2 text-left font-semibold">Where</th>
              <th className="border px-3 py-2 text-left font-semibold">
                Air density
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                375 hp gas
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                400 hp diesel
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Gauge reads
              </th>
            </tr>
          </thead>
          <tbody>
            {ALTITUDE_TABLE.map((row, i) => (
              <tr
                key={row.elevation}
                className={
                  row.hard ? "bg-danger-50" : i % 2 === 1 ? "bg-gray-50" : ""
                }
              >
                <td className="border px-3 py-2 text-xs font-semibold">
                  {row.elevation}
                </td>
                <td className="border px-3 py-2 text-xs">{row.where}</td>
                <td className="border px-3 py-2 text-xs font-mono">
                  {row.density}
                </td>
                <td className="border px-3 py-2 text-xs font-mono font-bold text-brand-700">
                  {row.gas}
                </td>
                <td className="border px-3 py-2 text-xs font-mono">
                  {row.diesel}
                </td>
                <td className="border px-3 py-2 text-xs font-mono">
                  {row.gauge}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm text-gray-500">
        Density ratio from the standard atmosphere, exponent 4.2559. Gasoline
        figures apply the density ratio directly to 375 hp. The diesel column
        assumes a turbocharged engine that gives back most of the loss at 1.5
        percent per 1,000 feet, which is why a 6.7 liter tow rig feels unchanged
        where a 5.3 liter does not. Gauge error is sea level atmospheric
        pressure minus local, and it is covered below.
      </p>

      <p className="mt-4 text-gray-700">
        A turbocharger compresses ambient air back toward sea level manifold
        pressure, which is why a 6.7 liter diesel feels almost unchanged on a
        pass where a 5.3 liter gas V8 is working for it.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        What a 6 Percent Climb Actually Asks For
      </h2>
      <p className="mt-3 text-gray-700">
        Required horsepower at the tire is weight times grade, plus rolling
        resistance at about 1.5 percent of weight, plus aerodynamic drag, all
        multiplied by speed in feet per second and divided by 550. On a 14,000 lb
        combination at 11,158 feet, with a combined drag area of roughly 30
        square feet for the truck and a 24 foot trailer, the table below is what
        comes out.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">Grade</th>
              <th className="border px-3 py-2 text-left font-semibold">
                At 35 mph
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                At 45 mph
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                At 55 mph
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                What it looks like
              </th>
            </tr>
          </thead>
          <tbody>
            {CLIMB_TABLE.map((row, i) => (
              <tr
                key={row.grade}
                className={
                  row.hard ? "bg-danger-50" : i % 2 === 1 ? "bg-gray-50" : ""
                }
              >
                <td className="border px-3 py-2 text-xs font-semibold">
                  {row.grade}
                </td>
                <td className="border px-3 py-2 text-xs font-mono">{row.at35}</td>
                <td className="border px-3 py-2 text-xs font-mono font-bold text-brand-700">
                  {row.at45}
                </td>
                <td className="border px-3 py-2 text-xs font-mono">{row.at55}</td>
                <td
                  className={
                    row.hard
                      ? "border px-3 py-2 text-xs font-bold text-danger-700"
                      : "border px-3 py-2 text-xs"
                  }
                >
                  {row.note}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm text-gray-500">
        14,000 lb combined weight, 7,600 lb trailer at GVWR behind a 6,400 lb
        crew cab. Rolling resistance is 1.5 percent of weight and drag uses the
        density ratio at 11,158 feet. Required power is force in pounds times
        speed in feet per second divided by 550.
      </p>

      <p className="mt-4 text-gray-700">
        Against 267 hp at the tunnel, the 6 percent column at 45 mph needs 139.
        The truck has nearly double what the climb asks for, which is why nobody
        gets stranded on I-70 by a shortage of power in a half-ton. The only
        cell that comes close to consuming the whole engine is 10 percent at 55
        mph, and no one tows 55 up a 10 percent grade because the sign says 45
        and the switchbacks say 35.
      </p>
      <p className="mt-3 text-gray-700">
        So altitude costs you speed and rpm, not capability. Where it does bite
        is heat rejection and gear selection, which the{" "}
        <Link
          href="/guides/mountain-towing-transmission-gears"
          className="text-brand-600 hover:underline"
        >
          mountain towing guide
        </Link>{" "}
        covers in detail. The short version for a November crossing: the radiator
        gets 29 percent less air mass at the same road speed, but the ambient
        temperature in the twenties hands back far more than that. A radiator
        rejecting heat against 25 degree air has a 175 degree difference to work
        with instead of 110 at 90 degrees, which is 59 percent more driving
        force. Multiply the two effects and a Thanksgiving crossing has about 13
        percent more cooling capacity than the same climb in July.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Your Gauge Reads 5 psi High at the Tunnel
      </h2>
      <p className="mt-3 text-gray-700">
        A tire gauge measures pressure above ambient, not absolute pressure.
        Atmospheric pressure is 14.70 psi at sea level and 9.66 psi at 11,158
        feet, so a tire holding 79.7 psi absolute shows 65.0 on the gauge at home
        and 70.0 at the tunnel. Five psi of pure indication, with no air added
        and no leak.
      </p>
      <p className="mt-3 text-gray-700">
        The cold soak on a Thanksgiving morning runs the other way and is almost
        exactly the same size. Sixty-five psi set at 70 degrees becomes 59 psi at
        30 degrees at sea level, a 6 psi drop, and 64 psi at 30 degrees and
        11,158 feet, because the altitude adds 5 back. The two errors nearly
        cancel, which is the useful part: a tire that reads 64 at the tunnel in
        November is correctly inflated, and a tire that reads 70 there is
        correctly inflated too, and neither number tells you anything until you
        know the temperature.
      </p>
      <p className="mt-3 text-gray-700">
        That is why the procedure is to set pressure cold at home and stop
        touching it. Bleed air at the summit and you drive home 5 psi under the
        placard on tires carrying the trailer&rsquo;s full axle load. Top off at
        the summit and you drive home 5 psi over, which is the condition that
        crowns the center tread and puts the sidewall under strain on the
        descent. A TPMS reads the same lie the gauge does, so use it to watch for
        one tire drifting away from the other three rather than to chase an
        absolute number.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        The Furnace Loses 40 Percent at 10,000 Feet
      </h2>
      <p className="mt-3 text-gray-700">
        Gas appliance sizing drops about 4 percent per 1,000 feet above sea
        level, and that rule applies to the furnace in the coach. A 30,000 BTU
        unit at 10,000 feet delivers roughly 18,000 BTU. It does not burn 40
        percent less propane getting there, because the regulator still holds 11
        inches of water column at the orifice and the gas flow is set by that
        pressure, not by the air around it. Less heat per gallon is the whole
        result.
      </p>
      <p className="mt-3 text-gray-700">
        Run that through the four-night math in the{" "}
        <Link
          href="/guides/thanksgiving-driveway-dry-camping-propane-weight"
          className="text-brand-600 hover:underline"
        >
          Thanksgiving propane guide
        </Link>{" "}
        and the margin disappears. Four cold nights at 30 degrees needed 11
        gallons, or 47 lb, at low elevation. At 10,000 feet the same warmth needs
        about 1.67 times the burn time, which is roughly 78 lb. Two 30 lb
        cylinders hold 60. A third cylinder is the trip, or a refill on Saturday,
        or a campground with power and a space heater that stays inside the
        trailer.
      </p>
      <p className="mt-3 text-gray-700">
        There is a second failure mode that has nothing to do with BTU. Many RV
        furnaces prove combustion airflow with a sail switch, a paddle in the
        blower stream that has to close before the gas valve opens. Thin air
        moves less mass across that paddle, and a furnace that worked at 800 feet
        can short cycle at 8,000. It is a common enough complaint at altitude
        campgrounds that the first-night test is worth the twenty minutes:
        blower steady, burner lit, warm air at the registers, no dropouts. If it
        fails, the answer that weekend is blankets, not a field adjustment to a
        gas appliance.
      </p>
      <p className="mt-3 text-gray-700">
        Whatever the furnace does, a CO alarm belongs in the coach and belongs
        with a fresh battery for the trip. Incomplete combustion at altitude
        produces carbon monoxide before it produces a smell, and a Thanksgiving
        trailer with four people sleeping in it is not the place to find out that
        the alarm was the thing you left in the garage.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Five Checks Before the Pass
      </h2>
      <p className="mt-3 text-gray-700">
        All of this happens at home, at low elevation, where the numbers are
        stable and the driveway is flat. None of it should happen at 9,000 feet
        with the family already in the truck.
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
        One more number for the trip down. The same 29 percent of air that the
        engine loses is air the engine cannot pump against on a closed throttle,
        so engine braking fades at altitude in a naturally aspirated truck. It
        is one more reason to set the trailer brake controller on flat ground at
        home, where the{" "}
        <Link
          href="/guides/trailer-brake-controller-setup"
          className="text-brand-600 hover:underline"
        >
          brake controller setup procedure
        </Link>{" "}
        actually works, and to enter a descent at 45 mph rather than discovering
        the limit at 65.
      </p>

      <div className="mt-10 rounded-2xl bg-brand-600 p-8 text-center text-white">
        <h2 className="text-2xl font-bold">Know the Weight Before the Grade</h2>
        <p className="mt-2 text-brand-100">
          Altitude does not change the sticker. It changes what the truck can do
          with it. Start with the combined weight and the payload margin.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link
            href="/gcwr-calculator"
            className="inline-block rounded-xl bg-white px-6 py-3 text-sm font-bold text-brand-700 shadow-lg transition-all hover:bg-brand-50 active:scale-[0.99]"
          >
            GCWR Calculator
          </Link>
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

      <AmazonAffiliate categories={["tpms", "brake-controller"]} />

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Sources &amp; References
      </h2>
      <ul className="mt-3 space-y-1 text-sm text-gray-600">
        <li>
          <a
            href="https://www.sae.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            SAE International: J2807 tow vehicle performance requirements,
            including the Davis Dam gradeability test
          </a>
        </li>
        <li>
          <a
            href="https://www.grc.nasa.gov/www/k-12/airplane/atmos.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            NASA Glenn Research Center: Earth atmosphere model, density and
            pressure by altitude
          </a>
        </li>
        <li>
          <a
            href="https://www.codot.gov/travel"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            Colorado Department of Transportation: I-70 mountain corridor
            elevations and pass conditions
          </a>
        </li>
        <li>
          <a
            href="https://www.nhtsa.gov/equipment/tires"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            NHTSA: tire load rating, inflation and vehicle placard requirements
          </a>
        </li>
        <li>
          <a
            href="https://www.ford.com/support/towing/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            Ford towing guides: frontal area limits and required equipment by
            configuration
          </a>
        </li>
        <li>
          <a
            href="https://www.rvia.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            RV Industry Association: weight labels, cargo carrying capacity and
            towing standards
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
              Thanksgiving Trip: Weight and Fuel Budget for 900 Miles
            </Link>
          </li>
          <li>
            <Link
              href="/guides/thanksgiving-driveway-dry-camping-propane-weight"
              className="text-brand-600 hover:underline"
            >
              Thanksgiving Dry Camping: 47 lb of Propane in Four Cold Nights
            </Link>
          </li>
          <li>
            <Link
              href="/guides/mountain-towing-transmission-gears"
              className="text-brand-600 hover:underline"
            >
              Mountain Towing: Transmission Temperature and Gears
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
              href="/guides/towing-capacity-explained"
              className="text-brand-600 hover:underline"
            >
              Towing Capacity Explained
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
        </ul>
      </div>
    </div>
  );
}
