import type { Metadata } from "next";
import Link from "next/link";
import { FaqJsonLd, ArticleJsonLd, HowToJsonLd } from "@/components/seo/JsonLd";
import { DEFAULT_OG_IMAGES } from "@/lib/seo/default-og-image";

import AmazonAffiliate from "@/components/AmazonAffiliate";

export const metadata: Metadata = {
  title: "Thanksgiving Rain: Your Truck Hydroplanes First",
  description:
    "Truck tires at 35 psi float at 61 mph, trailer tires at 50 psi at 73. In Thanksgiving rain the steering axle loses grip first, and 7,500 lb keeps going.",
  keywords: [
    "thanksgiving rain towing",
    "trailer hydroplaning speed",
    "do trailer tires hydroplane",
    "towing in rain safety",
    "trailer tire pressure rain",
    "wet road stopping distance towing",
    "bridge deck freezing thanksgiving",
  ],
  alternates: {
    canonical:
      "https://www.rvtowingcalc.com/guides/thanksgiving-rain-truck-hydroplanes-first",
  },
  openGraph: {
    title: "Thanksgiving Rain: Your Truck Hydroplanes First",
    description:
      "The float speed of a tire is set by its pressure, and the truck runs 15 psi lower than the trailer. Why the steering axle lets go first on a wet interstate.",
    url: "https://www.rvtowingcalc.com/guides/thanksgiving-rain-truck-hydroplanes-first",
    images: DEFAULT_OG_IMAGES,
  },
};

const FAQS = [
  {
    q: "At what speed do trailer tires hydroplane?",
    a: "The engineering approximation is 10.35 times the square root of inflation pressure in psi. A trailer tire at 50 psi reaches full dynamic hydroplaning at about 73 mph, and at 65 psi it reaches it at 83 mph. Partial separation starts roughly 10 to 15 percent below those numbers, so a 50 psi trailer is already losing contact patch in the low 60s. Total weight barely enters the formula, which is why a heavy trailer does not hydroplane later than a light one.",
  },
  {
    q: "Should I lower trailer tire pressure in rain for more grip?",
    a: "No. Less pressure means a lower float speed and more sidewall flex, so the tire separates from the pavement sooner and runs hotter doing it. It is the opposite of what the tread needs. Trailer tires are also the one place where the sidewall number, not a comfort setting, is the correct cold pressure, because ST tires are rated against a load and inflation table rather than a vehicle placard.",
  },
  {
    q: "Does a weight distribution hitch help on wet pavement?",
    a: "It helps with the part of the problem that is axle load. Spring bars return roughly a quarter of the tongue weight to the steer axle, and that load is what gives the front tires their grip when the surface is slick. What the bars cannot do is raise the speed at which the tire separates from the water, because that number is set by pressure. A properly set hitch buys steering authority, not traction.",
  },
];

const FLOAT_TABLE = [
  ["28 psi", "55 mph", "Underinflated truck tire"],
  ["35 psi", "61 mph", "Typical half-ton placard"],
  ["44 psi", "69 mph", "Max on a P-metric"],
  ["50 psi", "73 mph", "Load Range C trailer tire"],
  ["65 psi", "83 mph", "Load Range D trailer tire"],
  ["80 psi", "93 mph", "Load Range E trailer tire"],
];

const PRESSURE_TABLE = [
  ["Truck steer tires", "Door jamb placard, often 35 psi", "61 mph", "Floats first"],
  ["Truck rear tires", "Placard plus load, 45 to 55 psi", "69 to 77 mph", "Floats second"],
  ["Trailer tires", "Sidewall maximum, 50 to 80 psi", "73 to 93 mph", "Floats last"],
];

const STEPS = [
  {
    name: "Set trailer tires to the sidewall number, cold",
    text: "An ST tire is rated against a load and inflation table, so the sidewall maximum is the working pressure, not a ceiling. A Load Range D at 65 psi floats at 83 mph. The same tire run at 50 psi because it rides softer floats at 73 and runs hotter doing it.",
  },
  {
    name: "Measure tread at 4/32 inch, not 2/32",
    text: "Two thirty-seconds is the legal minimum in most states and a poor target on a trailer. New ST tires are commonly 8/32 to 9/32, so 4/32 is half the original depth and the point where water evacuation falls off faster than the wear rate suggests. Replace there.",
  },
  {
    name: "Drop 10 mph before the rain starts",
    text: "Sixty-five in the dry is a normal towing speed. Fifty-five in standing water is not caution, it is arithmetic: 10 mph below the low end of the partial-hydroplaning band buys contact patch on every tire in the rig at once.",
  },
  {
    name: "Stretch the following distance to five seconds",
    text: "A three-second gap at 65 mph is 286 ft. Wet pavement cuts available friction by roughly a third, and a loaded trailer adds 20 to 40 percent to the stopping distance on top of that. Five seconds is the number that keeps both facts in the same sentence.",
  },
  {
    name: "Confirm the bars are returning load to the steer axle",
    text: "Measure the front fender height unhitched and hitched. It should come back to within half an inch of the solo reading after the bars are tensioned. If it sags, the front tires are carrying less than the truck was built for, and that is the axle that steers you out of a slide.",
  },
  {
    name: "Find the manual trailer brake lever before you need it",
    text: "In a slide the trailer brakes applied alone pull the trailer straight back behind the truck. That lever is the only control in the cab that acts on the trailer without disturbing the truck, and it is worth locating on dry pavement so you are not hunting for it in a downpour.",
  },
];

export default function ThanksgivingRainTruckHydroplanesFirstPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <ArticleJsonLd
        title="Thanksgiving Rain: Your Truck Hydroplanes First"
        description="Float speed is set by tire pressure, and the truck runs 15 psi below the trailer. Why the steering axle separates from the pavement first on a wet holiday drive, and the six settings that change the outcome."
        url="https://www.rvtowingcalc.com/guides/thanksgiving-rain-truck-hydroplanes-first"
        datePublished="2026-11-16"
      />
      <FaqJsonLd
        faqs={FAQS}
        baseUrl="https://www.rvtowingcalc.com/guides/thanksgiving-rain-truck-hydroplanes-first"
      />
      <HowToJsonLd
        name="How to set up a truck and trailer for a wet Thanksgiving drive"
        description="Set trailer tires to sidewall maximum cold, replace at 4/32 inch tread, drop 10 mph, stretch following distance to five seconds, confirm the weight distribution bars restore front fender height, and locate the manual trailer brake lever."
        steps={STEPS}
        totalTime="PT40M"
        url="https://www.rvtowingcalc.com/guides/thanksgiving-rain-truck-hydroplanes-first"
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
        <span className="text-gray-900">Thanksgiving Rain</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
        Thanksgiving Rain: Does Your Truck Hydroplane Before Your Trailer?
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        A trailer on tires at 50 psi will not fully separate from the pavement
        until 73 mph. The half-ton pulling it, on all-seasons at 35 psi, floats
        at 61.
      </p>
      <p className="mt-3 text-lg text-gray-600">
        That gap is the whole problem with towing in a November rainstorm. At 64
        mph the steering axle is already skating on a film of water while 7,500
        lb of trailer behind it still has grip. The trailer does not lose
        control. It keeps going straight and takes the truck with it.
      </p>

      <div className="mt-8 rounded-xl bg-brand-50 p-6">
        <h2 className="text-lg font-bold text-brand-800">The Short Answer</h2>
        <p className="mt-2 text-brand-700">
          Hydroplaning speed is set by tire pressure, not by weight, and the
          truck always runs lower pressure than the trailer. A 35 psi steer tire
          floats at 61 mph while a 50 psi trailer tire floats at 73, so the axle
          that steers you is the first one to let go. Run trailer tires at the
          sidewall maximum, replace them at 4/32 inch, slow to 55 in standing
          water, and make sure the weight distribution bars are putting load
          back on the front axle, because that load is the grip you have left.
        </p>
      </div>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        The Speed Where a Tire Stops Being a Tire
      </h2>
      <p className="mt-3 text-gray-700">
        Water on a road has to go somewhere. A rolling tire pushes it out
        through the tread grooves and away from the contact patch, and that
        works until the volume of water arriving at the tire exceeds what the
        grooves can move. Past that point the tire climbs onto the film and the
        contact patch shrinks toward nothing.
      </p>
      <p className="mt-3 text-gray-700">
        Engineers approximate the threshold with one line: 10.35 times the
        square root of inflation pressure in psi, in mph. Pressure is in the
        formula because it sets how hard the tire presses the water out of the
        way. Weight barely appears, which surprises people who assume a heavier
        rig cuts through rain better. It does not. A 9,000 lb trailer on 50 psi
        tires floats at the same speed as a 3,000 lb one.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">
                Cold pressure
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Full hydroplaning
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Where you find it
              </th>
            </tr>
          </thead>
          <tbody>
            {FLOAT_TABLE.map((row, i) => (
              <tr
                key={row[0]}
                className={row[0] === "35 psi" ? "bg-danger-50" : i % 2 === 1 ? "bg-gray-50" : ""}
              >
                <td className="border px-3 py-2 text-xs font-mono font-semibold">
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
        Thresholds use 10.35 times the square root of pressure, the standard
        approximation for dynamic hydroplaning. Partial separation begins 10 to
        15 percent below the figure in the middle column.
      </p>

      <p className="mt-4 text-gray-700">
        Read the highlighted row against the last one and the wet-road problem
        becomes a pressure problem. The steer axle of a typical half-ton is
        placarded around 35 psi, because that is what makes an empty truck ride
        like a sedan. The trailer in back carries Load Range D tires at 65. The
        trailer is 22 mph more resistant to floating than the tires doing the
        steering.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Why the Trailer Winning the Grip Race Is Bad News
      </h2>
      <p className="mt-3 text-gray-700">
        It sounds like an advantage. It is the mechanism behind the crash you
        see in every wet-weather RV pileup photo: a truck sideways in the median
        with the trailer still upright behind it.
      </p>
      <p className="mt-3 text-gray-700">
        When the front tires lose contact, steering input stops doing anything.
        The rear tires are still loaded and still gripping, so the truck&rsquo;s
        rear axle becomes a pivot. The trailer, with its own tires still in
        contact and 7,500 lb of momentum plus about 192 sq ft of side panel
        catching the crosswind, keeps pushing that pivot in the direction it was
        already traveling. The driver feels the wheel go light and the rig start
        to rotate, and the natural response is more steering, which does nothing
        at the front axle and asks more of the rear one.
      </p>
      <p className="mt-3 text-gray-700">
        This is also why a trailer that is loaded light on the tongue makes it
        worse. Under 10 percent tongue weight the trailer has less tendency to
        follow the truck and more to lead it, and the moment when the truck
        cannot steer is exactly the moment that tendency gets expressed. The{" "}
        <Link href="/tongue-weight-calculator" className="text-brand-600 hover:underline">
          tongue weight calculator
        </Link>{" "}
        returns the percentage before you leave, which is the number that decides
        how much authority you have when the front tires go quiet.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">Axle</th>
              <th className="border px-3 py-2 text-left font-semibold">
                Correct cold pressure
              </th>
              <th className="border px-3 py-2 text-left font-semibold">Float speed</th>
              <th className="border px-3 py-2 text-left font-semibold">Order of failure</th>
            </tr>
          </thead>
          <tbody>
            {PRESSURE_TABLE.map((row, i) => (
              <tr key={row[0]} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                <td className="border px-3 py-2 text-xs font-semibold">
                  {row[0]}
                </td>
                <td className="border px-3 py-2 text-xs">{row[1]}</td>
                <td className="border px-3 py-2 text-xs font-mono">{row[2]}</td>
                <td className="border px-3 py-2 text-xs font-bold">{row[3]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm text-gray-500">
        Trailer pressures are sidewall maximums from the load and inflation
        table; truck pressures are the door jamb placard, which assumes the truck
        is empty. Neither is a comfort setting.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        The 4/32 Rule for a Trailer Tire
      </h2>
      <p className="mt-3 text-gray-700">
        Two thirty-seconds of an inch is the legal minimum tread depth in most
        states, and it is a terrible number to use on a trailer. A new ST tire
        starts at 8/32 or 9/32, so at 2/32 you have a quarter of the original
        groove depth trying to move the same volume of water at the same speed.
        Water evacuation does not degrade linearly with depth, it falls off a
        cliff once the grooves stop being deep enough to channel.
      </p>
      <p className="mt-3 text-gray-700">
        Four thirty-seconds is the practical replacement point, and it usually
        arrives before the wear bars do. Trailer tires age out faster than they
        wear out, and a tire with decent depth and a hard, sun-cured compound
        grips wet pavement worse than the depth suggests. The{" "}
        <Link
          href="/guides/travel-trailer-tire-safety"
          className="text-brand-600 hover:underline"
        >
          travel trailer tire safety guide
        </Link>{" "}
        covers the five-to-seven-year clock that runs in parallel with tread
        depth, and both limits apply to the same four tires.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Thanksgiving Adds One More Surface: The Bridge
      </h2>
      <p className="mt-3 text-gray-700">
        A November front that arrives at 34 degrees brings rain, and rain at 34
        degrees is a different problem over water. A bridge deck radiates heat
        from its top and its underside, while pavement radiates from one
        surface, so the deck cools faster and can sit several degrees below the
        road on either side of it. Freezing rain hits bridges first, and the
        sign that says so is posted for a reason.
      </p>
      <p className="mt-3 text-gray-700">
        For a towing rig the bridge is worse than it is for a car, because the
        trailer brake controller was set on dry asphalt and has no idea the
        surface changed. A gain that produced clean stops at 60 mph will lock
        trailer wheels on ice, and a locked trailer wheel steps sideways
        instantly. The move is to be off the throttle before the expansion
        joint, not on the brake over it, and to cross a suspect deck with the
        wheel straight and no inputs at all. The{" "}
        <Link
          href="/guides/towing-a-travel-trailer-in-winter"
          className="text-brand-600 hover:underline"
        >
          winter towing guide
        </Link>{" "}
        covers what cold does to the rest of the rig, from tire pressure to
        propane output.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Six Settings Before a Wet Holiday Drive
      </h2>
      <p className="mt-3 text-gray-700">
        None of this requires a new part. It requires an hour in the driveway
        with a pressure gauge, a tread depth gauge, and a tape measure for the
        fender height.
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
        The front fender measurement is the one most owners skip, and it is the
        one that changes how the truck behaves when the rain starts. Measure
        from the ground to the top of the wheel arch with the trailer off, then
        hitch up, tension the bars, and measure again. A front end that comes
        back within half an inch of the solo number has its designed load on the
        steer tires. A front end that stays an inch low has given away grip it
        will need. The{" "}
        <Link
          href="/guides/weight-distribution-hitch-setup"
          className="text-brand-600 hover:underline"
        >
          weight distribution hitch setup guide
        </Link>{" "}
        walks the tensioning order, and the{" "}
        <Link href="/payload-calculator" className="text-brand-600 hover:underline">
          payload calculator
        </Link>{" "}
        confirms the hitch hardware itself did not eat the margin you needed for
        the luggage.
      </p>
      <p className="mt-3 text-gray-700">
        One more number worth knowing before the trip: wet pavement offers about
        a third less friction than dry, and a loaded trailer adds 20 to 40
        percent to stopping distance on top of that. A rig that stops in 210 ft
        from 65 mph on dry asphalt needs closer to 400 ft in heavy rain. That is
        not a reason to stay home for Thanksgiving. It is the reason the gap
        behind the car ahead of you has to be measured in seconds rather than
        car lengths.
      </p>

      <div className="mt-10 rounded-2xl bg-brand-600 p-8 text-center text-white">
        <h2 className="text-2xl font-bold">Check the Load Before the Weather</h2>
        <p className="mt-2 text-brand-100">
          Tongue weight, payload and front axle load decide how much steering
          authority you have when the pavement turns slick.
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
            href="/towing-capacity-calculator"
            className="inline-block rounded-xl bg-white px-6 py-3 text-sm font-bold text-brand-700 shadow-lg transition-all hover:bg-brand-50 active:scale-[0.99]"
          >
            Towing Capacity Calculator
          </Link>
        </div>
      </div>

      <p className="mt-8 text-gray-700">
        The recommendation is to run the trailer at the sidewall pressure, put
        fresh rubber on before the trip if the tread is at 4/32, and hold 55 mph
        in standing water regardless of what the traffic is doing. The trade-off
        is a slower drive and a stiffer-riding trailer on dry pavement for the
        first two days of the trip, which is the price of four tires that
        evacuate water instead of climbing onto it.
      </p>

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

      <AmazonAffiliate categories={["tpms", "weight-distribution"]} />

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
            NHTSA: tire inflation, tread depth minimums and wet traction
          </a>
        </li>
        <li>
          <a
            href="https://www.tireindustry.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            Tire Industry Association: load and inflation tables for ST tires
          </a>
        </li>
        <li>
          <a
            href="https://www.weather.gov/safety/winter-ice-frost"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            National Weather Service: bridge deck icing and freezing rain
          </a>
        </li>
        <li>
          <a
            href="https://www.fhwa.dot.gov/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            Federal Highway Administration: pavement friction and wet stopping
            distance research
          </a>
        </li>
        <li>
          <a
            href="https://www.ford.com/support/towing-gooseneck/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            Ford RV and Trailer Towing Guide: weight distributing hitch
            requirements and front axle load restoration
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
              Travel Trailer Tire Safety and Load Rating
            </Link>
          </li>
          <li>
            <Link
              href="/guides/towing-a-travel-trailer-in-winter"
              className="text-brand-600 hover:underline"
            >
              Towing a Travel Trailer in Winter
            </Link>
          </li>
          <li>
            <Link
              href="/guides/rv-towing-speed-limits"
              className="text-brand-600 hover:underline"
            >
              RV Towing Speed Limits and Stopping Distance
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
              href="/guides/thanksgiving-rv-trip-weight-and-fuel-budget"
              className="text-brand-600 hover:underline"
            >
              Thanksgiving Towing Check: Payload and Fuel
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
        </ul>
      </div>
    </div>
  );
}
