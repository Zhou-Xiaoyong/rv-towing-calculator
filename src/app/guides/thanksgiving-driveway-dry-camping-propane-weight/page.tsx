import type { Metadata } from "next";
import Link from "next/link";
import { FaqJsonLd, ArticleJsonLd, HowToJsonLd } from "@/components/seo/JsonLd";
import { DEFAULT_OG_IMAGES } from "@/lib/seo/default-og-image";

import AmazonAffiliate from "@/components/AmazonAffiliate";

export const metadata: Metadata = {
  title: "Thanksgiving Dry Camping: 47 lb of Propane in Four Cold Nights",
  description:
    "Thanksgiving dry camping burns 11 gallons in four nights: 47 lb of propane, 41 lb off the trailer ball, and 156 amp hours one battery cannot cover.",
  keywords: [
    "thanksgiving dry camping",
    "how much propane does an rv furnace use",
    "rv furnace propane per night",
    "propane weight tongue weight",
    "dry camping in a driveway",
    "rv battery amp hours furnace",
    "cold weather rv furnace",
  ],
  alternates: {
    canonical:
      "https://www.rvtowingcalc.com/guides/thanksgiving-driveway-dry-camping-propane-weight",
  },
  openGraph: {
    title: "Thanksgiving Dry Camping: 47 lb of Propane in Four Cold Nights",
    description:
      "Eleven gallons of propane, 41 lb off the coupler, and the 12 volt side of a furnace nobody budgets for. The four-night math before you park in the driveway.",
    url: "https://www.rvtowingcalc.com/guides/thanksgiving-driveway-dry-camping-propane-weight",
    images: DEFAULT_OG_IMAGES,
  },
};

const FAQS = [
  {
    q: "How much propane does an RV furnace use per night?",
    a: "A 30,000 BTU furnace at full fire burns 0.328 gallons an hour, because 30,000 divided by 91,500 BTU per gallon is 0.328. At a 35 percent duty cycle over a twelve hour night that is 1.4 gallons, or about 6 lb. At a 55 percent duty cycle it is 2.2 gallons and 9 lb. A 20 lb cylinder holds 4.7 gallons, so a cold night can take a fifth of it.",
  },
  {
    q: "Does the weight of propane count as tongue weight?",
    a: "About 87 percent of it on a typical travel trailer. The cylinders sit thirty inches behind the coupler on the A-frame, so on a 234 inch coupler-to-axle span, 204 divided by 234 of their weight reaches the ball and the rest goes down through the axles. Two full 30 lb cylinders weigh 112 lb with the steel, which puts 98 lb on the coupler.",
  },
  {
    q: "Can I run the furnace off a 15 amp outlet at a relative's house?",
    a: "The furnace burns propane, not electricity, so the outlet only powers the blower through the converter. A 15 amp circuit gives you roughly 12 amps continuous, which is about 30 amps of DC charging while nothing else in the trailer is running. That refills a night of furnace draw in about eighty minutes, and it trips the breaker the moment a garage freezer and the microwave join in.",
  },
  {
    q: "How long do two 30 lb propane tanks last in cold weather?",
    a: "At an average of 30 degrees, about five nights on a 30,000 BTU furnace at a 35 percent duty cycle. At 20 degrees the duty cycle climbs to 55 percent and the pair is dry before the fourth morning. At 10 degrees it is 70 percent and you are out during the third night. Vaporization makes it worse, because a cold cylinder cannot boil gas as fast as a warm one.",
  },
];

const BURN_TABLE = [
  {
    temp: "45\u00B0F",
    duty: "20%",
    gallons: "6.3 gal",
    pounds: "27 lb",
    left: "33 lb",
    dry: false,
  },
  {
    temp: "35\u00B0F",
    duty: "30%",
    gallons: "9.4 gal",
    pounds: "40 lb",
    left: "20 lb",
    dry: false,
  },
  {
    temp: "30\u00B0F",
    duty: "35%",
    gallons: "11.0 gal",
    pounds: "47 lb",
    left: "13 lb",
    dry: false,
  },
  {
    temp: "20\u00B0F",
    duty: "55%",
    gallons: "17.3 gal",
    pounds: "73 lb",
    left: "Dry before the fourth morning",
    dry: true,
  },
  {
    temp: "10\u00B0F",
    duty: "70%",
    gallons: "22.0 gal",
    pounds: "93 lb",
    left: "Dry during the third night",
    dry: true,
  },
];

const CYLINDER_TABLE = [
  {
    setup: "Two 20 lb, the trailer sticker pair",
    gas: "40 lb",
    full: "74 lb",
    ball: "65 lb",
    nights: "3.4 nights",
    dry: false,
  },
  {
    setup: "Two 30 lb",
    gas: "60 lb",
    full: "112 lb",
    ball: "98 lb",
    nights: "5.1 nights",
    dry: false,
  },
  {
    setup: "Two 30 lb plus a spare",
    gas: "90 lb",
    full: "168 lb",
    ball: "147 lb",
    nights: "7.7 nights",
    dry: false,
  },
  {
    setup: "Two 40 lb",
    gas: "80 lb",
    full: "144 lb",
    ball: "126 lb",
    nights: "6.8 nights",
    dry: false,
  },
];

const STEPS = [
  {
    name: "Read the furnace nameplate, not the thermostat",
    text: "The input rating is stamped on a plate behind the louver, usually 20,000 to 40,000 BTU. Add the water heater if you plan to shower, and leave the fridge out of it because the absorption flame is small. Whatever number you find is the full-fire rate for every appliance downstream of the regulator.",
  },
  {
    name: "Divide by 91,500, then multiply by the duty cycle",
    text: "A 30,000 BTU furnace is 0.328 gallons an hour at full fire. Your duty cycle is not on any label, but it tracks the overnight low: 20 percent in the forties, 35 percent around freezing, 55 percent in the low twenties, 70 percent below fifteen. Multiply the two and you have gallons an hour for planning.",
  },
  {
    name: "Check the manufacture date on the cylinder collar",
    text: "The date is stamped in the steel, not on a sticker. A DOT cylinder needs requalification twelve years after manufacture and every five years after that. A cylinder that fails that rule is not a spare, it is a cylinder the exchange counter will refuse, and you find out at the counter on Wednesday night.",
  },
  {
    name: "Weigh the tongue with the cylinders full",
    text: "Full is the state you leave in, so it is the number that matters. Two full 30 lb cylinders put 98 lb on the coupler on a 24 ft trailer, and the tank of water behind the axle has already taken some of that back. Put the loaded number in the tongue weight calculator rather than assuming the dry sticker still applies.",
  },
  {
    name: "Test the system for leaks before the trip, not after",
    text: "Propane manifold pressure should sit at 11 inches of water column, which is about 0.4 psi, and a manometer is the only gauge that reads in that unit. With the appliances off and one cylinder open, a falling column means a joint is passing gas. Four nights in someone's driveway is a bad time to learn that the flare at the furnace valve was never tight.",
  },
];

export default function ThanksgivingDrivewayDryCampingPropaneWeightPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <ArticleJsonLd
        title="Thanksgiving Dry Camping: 47 lb of Propane in Four Cold Nights"
        description="What four cold nights in a driveway cost in propane, what that weight does to the coupler, and the 12 volt side of the furnace that decides whether the battery survives."
        url="https://www.rvtowingcalc.com/guides/thanksgiving-driveway-dry-camping-propane-weight"
        datePublished="2026-11-12"
      />
      <FaqJsonLd
        faqs={FAQS}
        baseUrl="https://www.rvtowingcalc.com/guides/thanksgiving-driveway-dry-camping-propane-weight"
      />
      <HowToJsonLd
        name="How to plan propane and tongue weight for four nights of Thanksgiving dry camping"
        description="Read the furnace input rating, apply 91,500 BTU per gallon and a duty cycle, check the cylinder date, weigh the tongue with full cylinders, and leak test the system before leaving."
        steps={STEPS}
        totalTime="PT40M"
        url="https://www.rvtowingcalc.com/guides/thanksgiving-driveway-dry-camping-propane-weight"
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
        <span className="text-gray-900">Thanksgiving Dry Camping Propane Weight</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
        Thanksgiving Dry Camping: 47 lb of Propane in Four Cold Nights
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        Four nights in a relative&rsquo;s driveway at an average of 30 degrees
        burns 11 gallons of propane. That is 47 lb of gas, and 41 lb of it comes
        off the trailer ball, because the cylinders sit on the A-frame where 87
        percent of their weight reaches the coupler.
      </p>
      <p className="mt-3 text-lg text-gray-600">
        The propane is the arithmetic nobody argues about. The furnace blower is
        the part that ruins the trip: the same four nights pull 156 amp hours out
        of a battery that holds 45 usable ones, and whether that matters depends
        entirely on one question you should ask before you accept the invitation.
      </p>

      <div className="mt-8 rounded-xl bg-brand-50 p-6">
        <h2 className="text-lg font-bold text-brand-800">The Short Answer</h2>
        <p className="mt-2 text-brand-700">
          Furnace BTU divided by 91,500 gives gallons an hour at full fire. A
          30,000 BTU furnace is 0.328 gal/h, and at a 35 percent duty cycle over
          96 hours that is 11 gallons, or 47 lb at 4.24 lb per gallon. Two full
          30 lb cylinders hold 60 lb, so you leave with 112 lb of steel and gas
          on the A-frame and come home with 65 lb. Take{" "}
          <strong>the 30 lb pair</strong>, ask whether the driveway outlet is on
          its own circuit, and plan on 39 amp hours a night if it is not.
        </p>
      </div>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        91,500 BTU a Gallon, Then a Duty Cycle
      </h2>
      <p className="mt-3 text-gray-700">
        A gallon of liquid propane holds about 91,500 BTU, and it weighs 4.24 lb.
        Those two numbers turn any furnace nameplate into a fuel plan. A 30,000
        BTU furnace running flat out drinks 0.328 gallons an hour, which is 1.39
        lb, and it does that only on the coldest night of the year.
      </p>
      <p className="mt-3 text-gray-700">
        The rest of the time it cycles. Duty cycle is the share of the trip the
        burner is actually lit, and it moves faster than the thermometer does,
        because wind and a poorly sealed slideout matter as much as the outside
        temperature. Four nights is 96 hours, day and night, which is the honest
        denominator for a trip where the trailer sits parked the whole time.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">
                Average temp
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Duty cycle
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Over 96 hours
              </th>
              <th className="border px-3 py-2 text-left font-semibold">Weight</th>
              <th className="border px-3 py-2 text-left font-semibold">
                Left of 60 lb
              </th>
            </tr>
          </thead>
          <tbody>
            {BURN_TABLE.map((row, i) => (
              <tr
                key={row.temp}
                className={row.dry ? "bg-danger-50" : i % 2 === 1 ? "bg-gray-50" : ""}
              >
                <td className="border px-3 py-2 text-xs font-semibold">
                  {row.temp}
                </td>
                <td className="border px-3 py-2 text-xs font-mono">{row.duty}</td>
                <td className="border px-3 py-2 text-xs font-mono">{row.gallons}</td>
                <td className="border px-3 py-2 text-xs font-mono">{row.pounds}</td>
                <td
                  className={
                    row.dry
                      ? "border px-3 py-2 text-xs font-bold text-danger-700"
                      : "border px-3 py-2 text-xs font-mono font-bold text-brand-700"
                  }
                >
                  {row.left}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm text-gray-500">
        30,000 BTU input, 91,500 BTU per gallon, 4.24 lb per gallon, 96 hours of
        trip time, two 30 lb cylinders holding 60 lb of gas between them. Duty
        cycle is burner-on time as a share of total hours, not of night hours
        alone. Assumes a thermostat set near 65 degrees and no electric space
        heater running alongside.
      </p>

      <p className="mt-4 text-gray-700">
        Most Thanksgivings land on the 30 degree row, and 47 lb is 78 percent of
        a 60 lb pair. You pull out with full cylinders and come home with 13 lb.
        That is enough for the drive and nothing else, which is why the refill
        belongs on Wednesday&rsquo;s list and not Friday&rsquo;s.
      </p>
      <p className="mt-3 text-gray-700">
        Cold cylinders add a second problem the table cannot show. A cylinder
        that will feed a 100,000 BTU load at 60 degrees is down to roughly 35,000
        BTU an hour at 20 degrees, and under 25,000 near zero. A 30,000 BTU
        furnace running near continuous at that temperature is asking for more
        gas than one cold 30 lb cylinder can boil off, so the flame gets short
        and the burner drops out on low pressure before the tank is empty.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Two Full 30s Put 98 lb on the Ball
      </h2>
      <p className="mt-3 text-gray-700">
        A full 30 lb cylinder is 56 lb on a scale: 30 lb of gas and about 26 lb
        of steel. Two of them are 112 lb, and on a travel trailer that weight
        lives on the A-frame, ahead of the axle, where it does the most damage to
        your payload budget.
      </p>
      <p className="mt-3 text-gray-700">
        It is still a lever, and the lever is worth running. On this 24 ft
        trailer the coupler-to-axle span is 234 in, and the cylinder tray sits
        about 30 in behind the coupler, so the cylinders are 204 in ahead of the
        axle center. Their share of coupler load is 204 divided by 234, or{" "}
        <strong>87 percent</strong>. Two full 30 lb cylinders put 98 lb on the
        ball and 14 lb down through the axles.
      </p>
      <p className="mt-3 text-gray-700">
        Now the part almost nobody accounts for. RVIA shipping weight is figured
        with the propane cylinders full and the water tanks empty, so the pair
        the trailer shipped with is already inside the 818 lb dry tongue on the
        sticker. If it shipped with two 20 lb cylinders, that pair is 74 lb and
        65 lb of it is on the ball. Swapping to 30s adds 38 lb to the trailer and
        33 lb to the coupler, which moves tongue weight from 12.6 to about 13.0
        percent. Still inside the window. Still weight that came out of nothing.
      </p>
      <p className="mt-3 text-gray-700">
        A third cylinder for a cold week is 56 lb more, 49 lb of it on the ball,
        and now the tongue is at 13.8 percent with a full water tank behind the
        axle pulling it back down. That combination is how a trailer that towed
        fine in July starts to feel light on the front axle in November.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Cylinder Setups, Four Nights at 30&deg;F
      </h2>
      <p className="mt-3 text-gray-700">
        The cylinder choice is the only decision in this article that changes
        both the fuel plan and the coupler load at the same time, so it is worth
        putting four options side by side.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">Setup</th>
              <th className="border px-3 py-2 text-left font-semibold">Gas</th>
              <th className="border px-3 py-2 text-left font-semibold">
                Full weight
              </th>
              <th className="border px-3 py-2 text-left font-semibold">On the ball</th>
              <th className="border px-3 py-2 text-left font-semibold">
                At 30&deg;F
              </th>
            </tr>
          </thead>
          <tbody>
            {CYLINDER_TABLE.map((row, i) => (
              <tr
                key={row.setup}
                className={i === 0 ? "bg-danger-50" : i % 2 === 1 ? "bg-gray-50" : ""}
              >
                <td className="border px-3 py-2 text-xs font-semibold">
                  {row.setup}
                </td>
                <td className="border px-3 py-2 text-xs font-mono">{row.gas}</td>
                <td className="border px-3 py-2 text-xs font-mono">{row.full}</td>
                <td className="border px-3 py-2 text-xs font-mono font-bold text-brand-700">
                  {row.ball}
                </td>
                <td
                  className={
                    i === 0
                      ? "border px-3 py-2 text-xs font-bold text-danger-700"
                      : "border px-3 py-2 text-xs"
                  }
                >
                  {row.nights}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm text-gray-500">
        Gas weight is the propane alone; full weight adds the steel. Tare weights
        used here are 17 lb for a 20 lb cylinder, 26 lb for a 30 and 32 lb for a
        40. Your cylinder has its tare stamped on the collar as TW, and the
        stamped number beats this table. Coupler share is 204 divided by 234 of
        total cylinder weight. Nights are 12 hour nights at a 35 percent duty
        cycle.
      </p>

      <p className="mt-4 text-gray-700">
        The 20 lb pair does not finish four nights. It gets through three and
        part of a fourth, and the fourth is the night before the drive home, when
        the trailer is parked and nobody wants to move it. The 30 lb pair finishes
        with 13 lb, which is thin. The spare cylinder is the option that actually
        removes the risk, and it costs 49 lb of coupler load and a strap.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        One Extension Cord Decides the Battery Question
      </h2>
      <p className="mt-3 text-gray-700">
        The furnace is a 12 volt appliance with a propane flame. Its blower pulls
        about 7.5 amps while it runs, and at a 35 percent duty cycle across a
        twelve hour night that is 31 amp hours, plus another 8 for lights, the
        control board and the fridge board. Call it 39 amp hours a night and 156
        for the trip.
      </p>
      <p className="mt-3 text-gray-700">
        A single group 27 flooded battery is 90 amp hours, and you can spend half
        of that without shortening its life, so 45 usable. That is one night and
        part of a second. A pair of 6 volt golf cart batteries in series is 215
        amp hours and 107 usable, which gets you to the middle of night three. If
        the driveway has no live outlet, this is the constraint that ends the
        trip early, not the propane.
      </p>
      <p className="mt-3 text-gray-700">
        If the outlet is live, the math flips. A 15 amp household circuit gives
        you about 12 amps continuous, so a 55 amp converter can push roughly 30
        amps of DC into the battery as long as nothing else is drawing. That
        replaces a night of furnace draw in about eighty minutes. Ask two
        questions when you accept the invitation: is there an outdoor outlet, and
        is anything else on that circuit. A garage freezer that cycles at 2 a.m.
        plus a converter at full output is a tripped breaker and a cold trailer.
      </p>
      <p className="mt-3 text-gray-700">
        Without an outlet, the fallback is a generator in the truck bed at about
        95 lb, which counts against payload in both directions and sits behind
        the rear axle where a half-ton feels it most. Against a 1,480 lb payload
        sticker that is 6.4 percent before a single passenger gets in. The other
        fallback is a roof panel, and late November at 40 degrees north gives you
        roughly two equivalent sun hours, so 200 watts returns about 30 amp
        hours a day. That holds the line. It does not recover a deficit.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        What Comes Back on the Ball
      </h2>
      <p className="mt-3 text-gray-700">
        The drive home is 41 lb lighter at the coupler than the drive out,
        because the gas that boiled off the A-frame is gone and the steel stayed.
        That sounds like good news and it is not quite. The gray tank is the
        counterweight: four nights of dishes, showers and coffee is 30 gallons,
        or 250 lb, and where it sits decides whether the 41 lb you lost matters.
      </p>
      <p className="mt-3 text-gray-700">
        On a rear-bath floorplan the gray tank is behind the axles, so 250 lb back
        there takes 43 lb off the ball. Add that to the 41 lb of burned propane
        and a trailer that left at 12.6 percent comes home near 11.6, with the
        water still sloshing. The{" "}
        <Link
          href="/guides/thanksgiving-return-trip-tongue-weight"
          className="text-brand-600 hover:underline"
        >
          return leg tongue weight guide
        </Link>{" "}
        covers that side of the trip, and it is the reason to dump the gray tank
        at the other end rather than haul it home.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        The Five Checks Before You Hitch
      </h2>
      <p className="mt-3 text-gray-700">
        Four of these take ten minutes. The fifth one is the reason a trailer
        arrives at Thanksgiving with a full cylinder and a dead battery.
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
        One more item for the Wednesday run: exchange or refill the cylinders
        before the holiday, not during it. Most exchange cages are unattended on
        Thanksgiving Day, the hardware stores that do refills open late on Black
        Friday, and a propane run on Thursday morning costs you the only quiet
        hour of the weekend. The{" "}
        <Link href="/guides/towing-a-trailer-in-winter" className="text-brand-600 hover:underline">
          cold weather towing guide
        </Link>{" "}
        covers what else changes below freezing, and the{" "}
        <Link href="/guides/how-to-winterize-a-travel-trailer" className="text-brand-600 hover:underline">
          winterizing walkthrough
        </Link>{" "}
        is the follow-on if this is the last trip of the season.
      </p>

      <div className="mt-10 rounded-2xl bg-brand-600 p-8 text-center text-white">
        <h2 className="text-2xl font-bold">Put the Cylinders on the Scale First</h2>
        <p className="mt-2 text-brand-100">
          Cylinder weight, coupler share, and what is left of your payload once
          the gear is loaded. Three calculators, one driveway.
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
            href="/water-weight-calculator"
            className="inline-block rounded-xl bg-white px-6 py-3 text-sm font-bold text-brand-700 shadow-lg transition-all hover:bg-brand-50 active:scale-[0.99]"
          >
            Water Weight Calculator
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

      <AmazonAffiliate categories={["propane", "battery"]} />

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Sources &amp; References
      </h2>
      <ul className="mt-3 space-y-1 text-sm text-gray-600">
        <li>
          <a
            href="https://www.propane.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            Propane Education &amp; Research Council: energy content, cylinder
            sizing and cold weather vaporization
          </a>
        </li>
        <li>
          <a
            href="https://www.nfpa.org/codes-and-standards/nfpa-1192-standard-development/1192"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            NFPA 1192: recreational vehicle plumbing, propane systems and
            appliance venting
          </a>
        </li>
        <li>
          <a
            href="https://www.phmsa.dot.gov/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            PHMSA: DOT cylinder qualification and requalification intervals
          </a>
        </li>
        <li>
          <a
            href="https://www.rvia.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            RV Industry Association: shipping weight, cargo carrying capacity and
            propane in the weight label
          </a>
        </li>
        <li>
          <a
            href="https://www.weather.gov/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            National Weather Service: overnight low and wind forecasts for
            furnace duty cycle planning
          </a>
        </li>
      </ul>

      <div className="mt-10 rounded-xl border border-gray-200 bg-gray-50 p-6">
        <h3 className="font-bold text-gray-900">Related Guides</h3>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          <li>
            <Link
              href="/guides/thanksgiving-full-water-tank-towing-weight"
              className="text-brand-600 hover:underline"
            >
              Thanksgiving Towing: Is a Full Water Tank Worth 384 lb?
            </Link>
          </li>
          <li>
            <Link
              href="/guides/thanksgiving-return-trip-tongue-weight"
              className="text-brand-600 hover:underline"
            >
              Thanksgiving Towing: The Drive Home Drops Tongue Weight
            </Link>
          </li>
          <li>
            <Link
              href="/guides/thanksgiving-truck-bed-payload"
              className="text-brand-600 hover:underline"
            >
              Thanksgiving Towing: Firewood in the Truck Bed Is Payload
            </Link>
          </li>
          <li>
            <Link
              href="/guides/towing-a-trailer-in-winter"
              className="text-brand-600 hover:underline"
            >
              Towing a Travel Trailer in Winter
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
            <Link href="/guides/tongue-weight" className="text-brand-600 hover:underline">
              Tongue Weight Guide
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
