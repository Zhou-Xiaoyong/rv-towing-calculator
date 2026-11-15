import type { Metadata } from "next";
import Link from "next/link";
import { FaqJsonLd, ArticleJsonLd, HowToJsonLd } from "@/components/seo/JsonLd";
import { DEFAULT_OG_IMAGES } from "@/lib/seo/default-og-image";

import AmazonAffiliate from "@/components/AmazonAffiliate";

export const metadata: Metadata = {
  title: "Thanksgiving Cold Snap: 9 PSI of Trailer Tire Pressure, Gone",
  description:
    "A 50°F overnight drop pulls 9 psi out of an 80 psi trailer tire and the dash stays dark. What cold weather does to trailer tire pressure, and the number to set.",
  keywords: [
    "trailer tire pressure cold weather",
    "thanksgiving towing",
    "tire pressure drop temperature",
    "rv tire pressure 20 degrees",
    "trailer tire load inflation table",
    "how much does tire pressure drop in cold",
    "thanksgiving rv trip cold weather",
  ],
  alternates: {
    canonical:
      "https://www.rvtowingcalc.com/guides/thanksgiving-cold-snap-tire-pressure",
  },
  openGraph: {
    title: "Thanksgiving Cold Snap: 9 PSI of Trailer Tire Pressure, Gone",
    description:
      "80 psi in a 71°F driveway becomes 71 psi at 23°F with no leak. The cold-morning arithmetic, the load it costs, and the 25 percent warning that never fires.",
    url: "https://www.rvtowingcalc.com/guides/thanksgiving-cold-snap-tire-pressure",
    images: DEFAULT_OG_IMAGES,
  },
};

const FAQS = [
  {
    q: "How much does trailer tire pressure drop per 10 degrees?",
    a: "About 1.8 psi on an 80 psi trailer tire and 1.2 psi on a 50 psi one, and that step stays the same all the way down. The ratio of absolute pressure to absolute temperature is fixed for a given volume of air, so the drop per degree is constant: 94.7 psi absolute over 530.7 R works out to 0.179 psi per degree, or 1.8 psi per 10 degrees whether you are going from 70 to 60 or from zero to minus ten. Use 1 psi per 10°F as a quick estimate for a passenger car and 1.8 for a Load Range E trailer tire, then read the real number off a gauge at ambient.",
  },
  {
    q: "Should I inflate my trailer tires to the max pressure on the sidewall?",
    a: "Only if that is what the load table calls for at your actual axle weight. The sidewall figure is the maximum cold inflation at the tire's maximum rated load, so it is a ceiling for a fully loaded tire, not a target. On a 7,600 lb trailer carrying 6,200 lb on the axles, four ST225/75R15 tires rated 2,830 lb at 80 psi are carrying less than 60 percent of what they can hold. Most trailer manufacturers publish the recommended cold pressure on the certification label on the left front corner, and that number beats both the sidewall and a forum thread.",
  },
  {
    q: "Will my TPMS warn me about a cold-weather pressure loss?",
    a: "Almost certainly not. FMVSS 138 requires a vehicle's tire pressure monitor to illuminate at 25 percent below the recommended cold pressure. An 80 psi trailer tire that drops to 71 at 20°F is 11 percent low, which is less than half the threshold, so the light stays off and the system reports normal. Trailer TPMS is aftermarket in nearly every case anyway, and the cap sensors ship with alarm thresholds that default to the same loose setting. Set the low-pressure alarm manually, usually to 10 percent below your target, if the system allows it.",
  },
  {
    q: "Is it safe to tow with tires that are 9 psi low?",
    a: "For a short hop to a service station, yes. For 400 miles at 65 mph, no. The load rating falls with the pressure, and a tire running 11 percent under its spec flexes further on every revolution, which converts into heat in the sidewall and shoulder. That heat is what separates tread. The fix costs nothing at a truck stop air island and takes four minutes, which is a better use of the morning than a shredded fender skirt on the shoulder outside Waco.",
  },
];

const TEMP_TABLE = [
  ["71°F, the October driveway", "80.0 psi", "50.0 psi", "Set point"],
  ["60°F", "78.2 psi", "48.8 psi", "1.8 psi"],
  ["40°F", "74.6 psi", "46.3 psi", "5.4 psi"],
  ["20°F, a hard freeze", "71.1 psi", "43.9 psi", "8.9 psi"],
  ["0°F", "67.5 psi", "41.5 psi", "12.5 psi"],
  ["-15°F", "64.8 psi", "39.6 psi", "15.2 psi"],
];

const LOAD_TABLE = [
  [
    "24 ft tandem, 7,100 lb loaded",
    "ST225/75R15 E, 2,830 lb at 80 psi",
    "6,210 lb",
    "11,320 lb, 1.82x",
    "10,046 lb, 1.62x",
  ],
  [
    "18 ft single axle, 3,400 lb loaded",
    "ST205/75R14 C, 1,760 lb at 50 psi",
    "3,060 lb",
    "3,520 lb, 1.15x",
    "3,090 lb, 1.01x",
  ],
];

const STEPS = [
  {
    name: "Read the gauge before the sun hits the tires",
    text: "Cold means the tire has not been driven for three hours, which on a Thanksgiving morning means before you move the truck. A tire sitting in direct sun reads 3 to 5 psi higher than the shaded one on the other side of the trailer, and that difference is sunlight, not a fault. Check all four, write them down, and check the spare while you are under there.",
  },
  {
    name: "Look up the target in the load table, not on the sidewall",
    text: "Take your last CAT scale ticket, subtract the tongue weight from the trailer weight to get the axle load, divide by the number of tires, and find that load in the tire maker's inflation table. That is the pressure. If you have never weighed, the certification label on the left front corner of the trailer carries the manufacturer's cold pressure and it is a defensible starting point.",
  },
  {
    name: "Add air at ambient, never at the highway shoulder",
    text: "If the morning is 20°F and you are driving into a 55°F afternoon, inflate to the target for the temperature you will be towing in, not the one you are standing in. Air added at 20°F expands by roughly 3 psi per 30°F of warming. Air bled at a rest stop when the tire reads 93 psi comes out of a tire that is supposed to read 93.",
  },
  {
    name: "Confirm the valve caps and the stems",
    text: "A missing cap is a slow leak through the valve core, and a rubber stem that flexes at 80 psi is a failure waiting for a pothole. Braided extensions on duals and on recessed trailer wheels are worth the twelve dollars because they let you check pressure without lying on the ground in a campground.",
  },
  {
    name: "Re-check after the first hour, by hand as well as by gauge",
    text: "Pull over once, put a palm on each tire's shoulder and each hub. Warm is normal on both. A shoulder that is noticeably hotter than its neighbor, or a hub hot enough to pull your hand away, means a brake dragging, a bearing going, or a tire carrying more than its share. Pressure will not tell you any of that.",
  },
];

export default function ThanksgivingColdSnapTirePressurePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <ArticleJsonLd
        title="Thanksgiving Cold Snap: 9 PSI of Trailer Tire Pressure, Gone"
        description="Why a 47°F overnight drop removes 8.9 psi from an 80 psi trailer tire with no leak, what that costs in load rating on a tandem versus a single axle, and the FMVSS 138 threshold that keeps your dash dark."
        url="https://www.rvtowingcalc.com/guides/thanksgiving-cold-snap-tire-pressure"
        datePublished="2026-11-15"
      />
      <FaqJsonLd
        faqs={FAQS}
        baseUrl="https://www.rvtowingcalc.com/guides/thanksgiving-cold-snap-tire-pressure"
      />
      <HowToJsonLd
        name="How to check trailer tire pressure before a cold-weather Thanksgiving trip"
        description="Read pressure at ambient before driving, look up the target in the tire load table, add air for the temperature you will tow in, confirm caps and stems, and re-check by hand after the first hour."
        steps={STEPS}
        totalTime="PT25M"
        url="https://www.rvtowingcalc.com/guides/thanksgiving-cold-snap-tire-pressure"
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
        <span className="text-gray-900">Cold Snap Tire Pressure</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
        Thanksgiving Cold Snap: 9 PSI of Trailer Tire Pressure, Gone
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        The 24 ft bunkhouse sat in a 71&deg;F driveway all October at 80 psi. On
        Thanksgiving morning the driveway is 21&deg;F, the gauge reads 71, and
        there is nothing wrong with the tire. No nail, no leaking stem, no
        cracked bead. Only the weather.
      </p>
      <p className="mt-3 text-lg text-gray-600">
        That is 8.9 psi, 11 percent of the spec, gone overnight on a rig that has
        not moved a foot. The same 50-degree swing takes a single-axle trailer
        from 50 psi to 44 and leaves it thirty pounds from the edge of what its
        tires can legally carry.
      </p>

      <div className="mt-8 rounded-xl bg-brand-50 p-6">
        <h2 className="text-lg font-bold text-brand-800">The Short Answer</h2>
        <p className="mt-2 text-brand-700">
          Air pressure tracks absolute temperature, so an 80 psi tire loses{" "}
          <strong>8.9 psi across a 50&deg;F overnight drop</strong> and 12.5 by
          the time the morning hits zero. Nothing is leaking. The load rating
          goes with it: at 71 psi an ST225/75R15 rated 2,830 lb is good for
          2,512. On a tandem trailer that is a reserve and heat problem. On a
          single axle near its GVWR it is the last 30 lb of margin. Set pressure
          against the tire maker&rsquo;s load table, check it before the sun is
          on the wheels, and never bleed a hot tire back to its cold number.
        </p>
      </div>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Nine PSI Is Arithmetic, Not a Leak
      </h2>
      <p className="mt-3 text-gray-700">
        Trailer tires hold a fixed volume of air, so the pressure inside obeys
        the gas law at constant volume: pressure is proportional to temperature
        measured from absolute zero. A gauge reads the difference between that
        absolute pressure and the atmosphere, which is why the arithmetic has to
        add 14.7 psi and use Rankine instead of Fahrenheit. The formula is{" "}
        <strong>P&#8322; = P&#8321; &times; T&#8322; &divide; T&#8321;</strong>,
        with temperatures in Rankine and pressures absolute.
      </p>
      <p className="mt-3 text-gray-700">
        Take the bunkhouse tire. 80 psi gauge is 94.7 psi absolute. The set
        point was 71&deg;F, or 530.7 R. Thanksgiving morning is 21&deg;F, or
        480.7 R. Multiply 94.7 by 480.7 and divide by 530.7, and the tire is
        holding 85.8 psi absolute, which is 71.1 on the gauge. Round it to 71.
        The tire did exactly what the physics said it would, and no gauge, cap
        or valve had anything to do with it.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">
                Ambient, set at 71&deg;F
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                80 psi tire
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                50 psi tire
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Lost off 80 psi
              </th>
            </tr>
          </thead>
          <tbody>
            {TEMP_TABLE.map((row, i) => (
              <tr
                key={row[0]}
                className={
                  row[0].includes("20") ? "bg-danger-50" : i % 2 === 1 ? "bg-gray-50" : ""
                }
              >
                <td className="border px-3 py-2 text-xs font-semibold">
                  {row[0]}
                </td>
                <td className="border px-3 py-2 text-xs font-mono font-bold">
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
        Calculated with the constant-volume gas law, 14.7 psi atmosphere and
        temperatures in Rankine. Real tires gain a few psi from the sun on one
        side and lose a few on the shaded side, so a November driveway can show
        a 6 psi spread across four tires that are all correctly inflated.
      </p>

      <p className="mt-4 text-gray-700">
        The common shortcut says 1 psi per 10&deg;F, which is close enough at
        passenger-car pressures and badly understates a trailer tire. At 80 psi
        the number is 1.8 psi per 10 degrees, and it does not shrink near zero,
        because the ratio of absolute pressure to absolute temperature is what
        stays fixed. If a November cold front takes your county from 65 to 18 in
        one night, the shortcut says 4.7 psi. The tire gives up 8.4.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        The Load Rating Falls With the Pressure
      </h2>
      <p className="mt-3 text-gray-700">
        A trailer tire&rsquo;s sidewall carries two numbers, and they are one
        specification, not two. An ST225/75R15 in Load Range E is rated 2,830 lb
        at 80 psi, and that pair only means anything together. In the Tire and
        Rim Association load and inflation table the load limit rises in
        near-linear steps with pressure, so a tire with 9 psi missing has about
        11 percent less capacity than the number molded on its sidewall.
      </p>
      <p className="mt-3 text-gray-700">
        Whether that matters depends entirely on which trailer is sitting on it.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">
                Trailer
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Tire and rating
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                On the axles
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                At the set point
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Cold morning
              </th>
            </tr>
          </thead>
          <tbody>
            {LOAD_TABLE.map((row, i) => (
              <tr key={row[0]} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                <td className="border px-3 py-2 text-xs font-semibold">
                  {row[0]}
                </td>
                <td className="border px-3 py-2 text-xs">{row[1]}</td>
                <td className="border px-3 py-2 text-xs font-mono">{row[2]}</td>
                <td className="border px-3 py-2 text-xs font-mono">{row[3]}</td>
                <td className="border px-3 py-2 text-xs font-mono font-bold text-danger-700">
                  {row[4]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm text-gray-500">
        Load limits interpolated linearly between table rows, which is how the
        TRA table steps are read. Tandem trailer 7,100 lb loaded with 890 lb on
        the ball, leaving 6,210 on four tires. Single axle 3,400 lb loaded with
        340 on the ball, leaving 3,060 on two tires. Multiplier is total tire
        capacity divided by axle load.
      </p>

      <p className="mt-4 text-gray-700">
        The tandem is not overloaded at 71 psi and will not be at zero degrees
        either. It has 1.62 times the capacity it needs, which sounds like
        plenty until you remember that the load is never split evenly. One tire
        on the curb side of a crowned campground road carries more than its
        share, and the reserve is what absorbs that. The single-axle trailer is
        a different story: thirty pounds of margin on a tire that has to run
        four hours at highway speed is not a margin, it is a coin flip.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        A Hot Tire Reads 93 and Should
      </h2>
      <p className="mt-3 text-gray-700">
        The expensive mistake is not the morning check. It is the rest stop.
      </p>
      <p className="mt-3 text-gray-700">
        Set to 80 psi at 40&deg;F, a trailer tire running 65 mph for an hour
        will have air inside it near 110&deg;F. Run the same arithmetic forward
        and the gauge reads 93. Nothing has gone wrong. Tire makers expect
        roughly a 10 percent rise in service, and the maximum molded on the
        sidewall is a <em>cold</em> number precisely because the warm number is
        always higher.
      </p>
      <p className="mt-3 text-gray-700">
        Bleed that 93 back to 80 and you have set the tire to 68 psi cold,
        twelve pounds under spec, on a vehicle whose entire load rating depends
        on pressure. It will now run hotter than it did before you touched it.
        The same trap catches people at the air island: a tire that has been on
        the highway for two hours cannot be corrected to a cold number, because
        it is not cold and will not be for three hours.
      </p>
      <p className="mt-3 text-gray-700">
        The{" "}
        <Link
          href="/guides/how-to-read-tire-and-loading-label"
          className="text-brand-600 hover:underline"
        >
          tire and loading label guide
        </Link>{" "}
        covers which of the three competing numbers is the one to follow when
        the door jamb, the sidewall and the trailer certification label
        disagree. Short version: the certification label on the trailer wins for
        the trailer.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        The Dash Stays Dark at 11 Percent
      </h2>
      <p className="mt-3 text-gray-700">
        Federal rule FMVSS 138 requires a tire pressure monitor to warn the
        driver when a tire is 25 percent below the recommended cold pressure,
        and no sooner. Eleven percent is less than half of that. Your truck will
        say nothing about a trailer tire that lost 9 psi to a cold front, and if
        the trailer has its own aftermarket system with cap sensors, its alarm
        usually ships set the same way.
      </p>
      <p className="mt-3 text-gray-700">
        That threshold exists because 25 percent is roughly where a tire becomes
        a handling problem on a passenger car. It is a poor fit for a trailer,
        where the pressure <em>is</em> the load rating and the failure mode is a
        tread separation at 65 mph rather than a mushy steering feel. If the
        system in your truck or app lets you set a custom low threshold, set it
        10 percent under your target and treat the factory alarm as the last
        line rather than the first warning.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        The Morning You Leave
      </h2>
      <p className="mt-3 text-gray-700">
        Five minutes in a cold driveway beats an hour on a shoulder. In this
        order.
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
        If the trailer is new to you or the tires are older than five years, the{" "}
        <Link
          href="/guides/travel-trailer-tire-safety"
          className="text-brand-600 hover:underline"
        >
          travel trailer tire safety guide
        </Link>{" "}
        has the age and sidewall inspection checks that a pressure gauge cannot
        do. Most trailer tire makers call for replacement at five to six years
        regardless of tread depth, and a 2021 date code on a tire you are
        counting on for a 900-mile round trip is worth a hard look before the
        first freeze rather than after it.
      </p>

      <p className="mt-4 text-gray-700">
        One more number belongs in this conversation. Most ST tires on the road
        carry a 65 mph speed rating, and a tire that is 11 percent low on
        pressure and also being pushed to 75 on a downhill interstate is being
        asked to fail. Thanksgiving week puts more vehicles on I-35, I-81 and
        I-95 than any other four days of the year, and the closing speed
        difference between a 62 mph trailer and an 80 mph lane change is the
        whole reason the shoulder gets busy.
      </p>

      <p className="mt-4 text-gray-700">
        The recommendation is unglamorous. Buy a gauge and a 12-volt inflator,
        check all four tires and the spare before the sun is on them, and
        inflate to the load table number for the temperature you expect to tow
        in for the next three days. The trade-off is that you will be standing
        in a 22&deg;F driveway at 6:40 am with a flashlight, and you will
        probably add 4 psi to two tires and none to the others, which will feel
        like a waste of a holiday morning. The alternative is discovering the
        same 4 psi at 68 mph with a fender skirt in the mirror, which costs a
        great deal more than the morning did.
      </p>

      <div className="mt-10 rounded-2xl bg-brand-600 p-8 text-center text-white">
        <h2 className="text-2xl font-bold">Check the Load Before the Weather Does</h2>
        <p className="mt-2 text-brand-100">
          Tire capacity, axle load, payload and tongue weight all have to clear
          at the same time. Run the numbers on the rig you actually own.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link
            href="/towing-capacity-calculator"
            className="inline-block rounded-xl bg-white px-6 py-3 text-sm font-bold text-brand-700 shadow-lg transition-all hover:bg-brand-50 active:scale-[0.99]"
          >
            Towing Capacity Calculator
          </Link>
          <Link
            href="/gvwr-calculator"
            className="inline-block rounded-xl bg-white px-6 py-3 text-sm font-bold text-brand-700 shadow-lg transition-all hover:bg-brand-50 active:scale-[0.99]"
          >
            GVWR Calculator
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

      <AmazonAffiliate categories={["tpms", "tire-care"]} />

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
            NHTSA: tire inflation, load limits and the cold-pressure definition
          </a>
        </li>
        <li>
          <a
            href="https://www.ecfr.gov/current/title-49/subtitle-B/chapter-V/part-571/subpart-B/section-571.138"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            49 CFR 571.138: the 25 percent low-pressure warning requirement
          </a>
        </li>
        <li>
          <a
            href="https://www.tireindustry.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            Tire Industry Association: load and inflation tables and cold-set
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
            RV Industry Association: trailer certification labels and tire
            placard requirements
          </a>
        </li>
        <li>
          <a
            href="https://catscale.com/cat-scale-locator/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            CAT Scale: platform locations for the axle weights the load table
            needs
          </a>
        </li>
      </ul>

      <div className="mt-10 rounded-xl border border-gray-200 bg-gray-50 p-6">
        <h3 className="font-bold text-gray-900">Related Guides</h3>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          <li>
            <Link
              href="/guides/thanksgiving-altitude-towing-power-loss"
              className="text-brand-600 hover:underline"
            >
              Thanksgiving at 11,158 Feet: Power and Gauge Error
            </Link>
          </li>
          <li>
            <Link
              href="/guides/thanksgiving-trailer-roof-snow-load"
              className="text-brand-600 hover:underline"
            >
              Thanksgiving Towing: Snow on the Roof Is 649 lb
            </Link>
          </li>
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
              href="/guides/how-to-read-tire-and-loading-label"
              className="text-brand-600 hover:underline"
            >
              How to Read a Tire and Loading Label
            </Link>
          </li>
          <li>
            <Link
              href="/guides/rv-tpms-buying-and-setup"
              className="text-brand-600 hover:underline"
            >
              RV TPMS: Buying and Setup
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
        </ul>
      </div>
    </div>
  );
}
