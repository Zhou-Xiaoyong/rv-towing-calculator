import type { Metadata } from "next";
import Link from "next/link";
import { FaqJsonLd, ArticleJsonLd } from "@/components/seo/JsonLd";
import { DEFAULT_OG_IMAGES } from "@/lib/seo/default-og-image";

export const metadata: Metadata = {
  title: "Can a Half-Ton Truck Tow a Fifth Wheel? The Payload Math",
  description:
    "Half-ton trucks advertise 12,000 lb fifth wheel tow ratings, but most fifth wheels overload them on pin weight alone. Here is the payload math that decides.",
  alternates: {
    canonical:
      "https://www.rvtowingcalc.com/guides/half-ton-truck-fifth-wheel-towing",
  },
  openGraph: {
    title: "Can a Half-Ton Truck Tow a Fifth Wheel? The Payload Math",
    description:
      "Why the advertised tow rating is the wrong number for fifth wheel shopping, how to work out your real pin weight budget, and which \u201chalf-ton towable\u201d fifth wheels actually fit.",
    url: "https://www.rvtowingcalc.com/guides/half-ton-truck-fifth-wheel-towing",
    images: DEFAULT_OG_IMAGES,
  },
};

const FAQS = [
  {
    q: "Can any half-ton truck tow a fifth wheel?",
    a: "Yes, but only a narrow category of purpose-built lightweight fifth wheels, and only when the truck's real payload leaves enough margin. The trailer has to land in roughly the 7,000 to 9,000 lb GVWR range with a loaded pin weight under about 1,200 to 1,300 lbs. A crew-cab four-wheel-drive half-ton carrying a family of four usually has only 600 to 1,000 lbs of payload left after passengers, cargo, and the fifth wheel hitch, which works out to a 3,000 to 5,000 lb trailer. That is smaller than any fifth wheel sold in North America.",
  },
  {
    q: "Why is payload the limit instead of the tow rating?",
    a: "Because a fifth wheel puts 15 to 25 percent of its total weight directly onto the truck through the kingpin, and every pound of that pin weight is payload. Tow ratings are published for a specific configuration under SAE J2807 with a 150 lb driver and one 150 lb passenger aboard \u2014 no family, no gear, no hitch. A 12,000 lb fifth wheel tow rating is mathematically achievable and practically unusable at the same time, because the pin weight of a 12,000 lb trailer is 2,300 to 2,800 lbs and almost no half-ton has that much payload.",
  },
  {
    q: "Do airbags or helper springs increase my payload?",
    a: "No. Airbags and helper springs change the ride height and reduce rear sag, which improves steering feel and headlight aim. They do not change the truck's GVWR, GAWR, tire load rating, or the payload number on the door jamb sticker. The structural limits of the frame, rear axle, wheel bearings, and tires are certified by the manufacturer and cannot be raised by adding suspension components after the fact.",
  },
  {
    q: "Do I need a sliding hitch to tow a fifth wheel with a short bed?",
    a: "If your half-ton has a 5.5 ft or 5.8 ft bed, you almost certainly need either an automatic sliding hitch or a fifth wheel equipped with a rotating pin box such as a Sidewinder or Revolution. A standard kingpin sits 4 to 6 inches forward of the rear axle, so a tight turn swings the trailer's nose toward the cab. A slider moves the pivot point rearward when you turn, and adds roughly 100 to 150 lbs of hitch weight \u2014 which comes out of the same payload you are already short on.",
  },
  {
    q: "Is a fifth wheel safer than a travel trailer on a half-ton truck?",
    a: "A fifth wheel is inherently more stable because the pin weight sits over the rear axle instead of behind it, and it is far less prone to sway. But that stability advantage assumes the payload budget works. An overloaded half-ton towing a fifth wheel is worse than a properly matched bumper-pull setup, because the excess weight is concentrated directly over the rear axle and tires that are already at their limit.",
  },
];

const PAYLOAD_MODELS = [
  [
    "Ford F-150",
    "1,400 - 1,800 lbs",
    "Up to ~2,300 lbs (regular cab, 2WD, HD Payload Package)",
    "Up to ~13,200 lbs",
  ],
  [
    "Chevrolet Silverado 1500",
    "1,500 - 1,900 lbs",
    "Up to ~2,300 lbs (regular cab, 2WD, Max Trailering)",
    "Up to ~13,000 lbs",
  ],
  [
    "GMC Sierra 1500",
    "1,500 - 1,900 lbs",
    "Up to ~2,200 lbs (regular cab, 2WD, Max Trailering)",
    "Up to ~13,000 lbs",
  ],
  [
    "RAM 1500",
    "1,300 - 1,900 lbs",
    "Up to ~2,300 lbs (quad cab, 2WD, Max Tow)",
    "Up to ~12,750 lbs",
  ],
  [
    "Toyota Tundra",
    "1,400 - 1,700 lbs",
    "Up to ~1,940 lbs",
    "Up to ~12,000 lbs",
  ],
];

const LIGHT_FIFTH_WHEELS = [
  ["Grand Design Reflection 150 Series 226RK", "~8,995 lbs", "~1,300 lbs"],
  ["Keystone Cougar Half-Ton 24RDS", "~8,600 lbs", "~1,300 lbs"],
  ["Forest River Rockwood Ultra Lite 2441WS", "~9,000 lbs", "~1,300 lbs"],
  ["Alliance Avenue 26RD", "~9,995 lbs", "~1,500 lbs"],
  ["Grand Design Reflection 150 Series 260RD", "~9,995 lbs", "~1,600 lbs"],
];

export default function HalfTonFifthWheelPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <ArticleJsonLd
        title="Can a Half-Ton Truck Tow a Fifth Wheel? The Payload Math"
        description="Why the advertised tow rating is the wrong number for fifth wheel shopping, how to calculate your real pin weight budget, and which lightweight fifth wheels actually fit a half-ton truck."
        url="https://www.rvtowingcalc.com/guides/half-ton-truck-fifth-wheel-towing"
        datePublished="2026-09-13"
      />
      <FaqJsonLd
        faqs={FAQS}
        baseUrl="https://www.rvtowingcalc.com/guides/half-ton-truck-fifth-wheel-towing"
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
        <span className="text-gray-900">
          Half-Ton Fifth Wheel Towing
        </span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
        Can a Half-Ton Truck Tow a Fifth Wheel? The Payload Math
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        Yes &mdash; and no. A half-ton pickup can tow some fifth wheels, but the
        category is far narrower than the marketing suggests. The reason is not
        horsepower, gearing, or cooling. It is payload, and the arithmetic is
        unforgiving: a fifth wheel drops 15 to 25 percent of its total weight
        straight onto the truck through the kingpin, and every pound of it
        counts against the same payload budget that already holds your family,
        your gear, and the hitch itself.
      </p>

      <div className="mt-8 rounded-xl bg-brand-50 p-6">
        <h2 className="text-lg font-bold text-brand-800">The Short Answer</h2>
        <p className="mt-2 text-brand-700">
          A half-ton can safely tow a fifth wheel only when the trailer is
          purpose-built for it &mdash; roughly <strong>7,000 to 9,000 lbs
          GVWR</strong> with a loaded pin weight under about <strong>1,300
          lbs</strong> &mdash; and only when your door-jamb payload still has
          that much room after passengers, bed cargo, and a 150 to 250 lb hitch.
          On a crew-cab 4x4 with a family aboard, that usually leaves room for a
          3,000 to 5,000 lb trailer. Since no such fifth wheel is sold, the
          honest answer for most half-ton owners is{" "}
          <strong>no, step up to a 3/4-ton</strong>. The exception is a
          lightly loaded truck with one or two people and a genuine lightweight
          fifth wheel designed for the class.
        </p>
      </div>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Why the Tow Rating Is the Wrong Number
      </h2>
      <p className="mt-3 text-gray-700">
        Walk into a dealership and you will be shown a half-ton with a
        &ldquo;up to 13,000 lbs&rdquo; fifth wheel tow rating. That number is
        real, and it is also irrelevant to your situation. Three things have to
        be true at once: it applies to one specific build, it was measured with
        almost nothing in the truck, and it does not account for the
        concentrated load a fifth wheel puts over the rear axle.
      </p>
      <p className="mt-3 text-gray-700">
        Under{" "}
        <a
          href="https://www.sae.org/standards/content/j2807_202005/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-600 hover:underline"
        >
          SAE J2807
        </a>
        , the towing standard the domestic manufacturers agreed to follow, a tow
        rating is established with a 150 lb driver and one 150 lb passenger
        aboard. That is it. No children, no cooler in the bed, no toolbox, no
        fifth wheel hitch. It also does not require the trailer&apos;s pin
        weight to fit inside the truck&apos;s payload. A manufacturer can
        legally and honestly advertise a 13,000 lb fifth wheel rating on a truck
        whose payload is 1,500 lbs &mdash; because the two numbers were never
        required to agree.
      </p>
      <p className="mt-3 text-gray-700">
        The other half of the problem is configuration. The headline tow rating
        belongs to a regular cab, two-wheel-drive, base trim truck with the
        heavy-duty payload package, the tallest axle ratio, and the largest
        cooling package. A crew-cab 4x4 with a panoramic roof, a diesel or
        hybrid powertrain, and a luxury trim can easily carry 700 to 900 lbs
        less payload than that truck while showing the same badge. See our{" "}
        <Link
          href="/guides/payload-capacity"
          className="text-brand-600 hover:underline"
        >
          payload capacity guide
        </Link>{" "}
        for the full breakdown of how options eat into the number.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        The Three Numbers That Actually Decide It
      </h2>
      <p className="mt-3 text-gray-700">
        Ignore the brochure. Three figures on your own truck and trailer settle
        the question.
      </p>
      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-gray-200 p-5">
          <h3 className="font-semibold text-gray-900">
            1. Real payload
          </h3>
          <p className="mt-2 text-sm text-gray-700">
            The yellow sticker inside the driver door jamb. Not the brochure,
            not the website configurator. This number already reflects every
            option installed on your specific truck.
          </p>
        </div>
        <div className="rounded-xl border border-gray-200 p-5">
          <h3 className="font-semibold text-gray-900">
            2. Loaded pin weight
          </h3>
          <p className="mt-2 text-sm text-gray-700">
            Plan on 20 percent of the trailer&apos;s GVWR as a working estimate,
            then verify with a scale. Published dry pin weights are measured on
            an empty trailer with no water, no propane, and no options.
          </p>
        </div>
        <div className="rounded-xl border border-gray-200 p-5">
          <h3 className="font-semibold text-gray-900">
            3. Hitch weight
          </h3>
          <p className="mt-2 text-sm text-gray-700">
            A fifth wheel hitch, rails, and mounting hardware run 150 to 250 lbs.
            An automatic slider adds another 100 to 150 lbs. All of it is
            payload, and it is permanent.
          </p>
        </div>
      </div>

      <h3 className="mt-8 text-xl font-bold text-gray-900">
        The Payload Budget Worksheet
      </h3>
      <p className="mt-3 text-gray-700">
        Here is the calculation that matters, run on a typical crew-cab 4x4
        half-ton with a 1,540 lb payload sticker. The formula is simple:
      </p>
      <p className="mt-3 rounded-lg bg-gray-100 p-4 font-mono text-sm text-gray-800">
        Max trailer GVWR = (Payload &minus; People &minus; Cargo &minus; Hitch)
        &divide; 0.20
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">
                Line item
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Weight
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Running payload remaining
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-3 py-2 font-semibold">
                Door-jamb payload
              </td>
              <td className="border px-3 py-2">1,540 lbs</td>
              <td className="border px-3 py-2 font-semibold">1,540 lbs</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border px-3 py-2">
                Two adults, two children
              </td>
              <td className="border px-3 py-2">&minus; 560 lbs</td>
              <td className="border px-3 py-2">980 lbs</td>
            </tr>
            <tr>
              <td className="border px-3 py-2">
                Bed cargo: cooler, firewood, tools, dog
              </td>
              <td className="border px-3 py-2">&minus; 150 lbs</td>
              <td className="border px-3 py-2">830 lbs</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border px-3 py-2">
                Fifth wheel hitch, rails, hardware
              </td>
              <td className="border px-3 py-2">&minus; 200 lbs</td>
              <td className="border px-3 py-2 font-semibold">630 lbs</td>
            </tr>
            <tr>
              <td className="border px-3 py-2">
                Maximum trailer GVWR at 20% pin weight
              </td>
              <td className="border px-3 py-2">630 &divide; 0.20</td>
              <td className="border px-3 py-2 font-semibold text-danger-700">
                3,150 lbs
              </td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border px-3 py-2">
                Maximum trailer GVWR at 22% pin weight
              </td>
              <td className="border px-3 py-2">630 &divide; 0.22</td>
              <td className="border px-3 py-2 font-semibold text-danger-700">
                2,864 lbs
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm text-gray-500">
        A truck with a 13,000 lb fifth wheel tow rating has just 630 lbs of
        payload left for pin weight, which supports a trailer roughly four times
        lighter than the rating. This is the gap that catches half-ton buyers.
      </p>

      <p className="mt-4 text-gray-700">
        Run the same math for a solo traveler with a light aluminum hitch and the
        picture changes: 1,540 lbs &minus; 200 lbs driver &minus; 180 lbs hitch
        &minus; 100 lbs cargo leaves 1,060 lbs for pin weight, which is a 5,300
        lb trailer at 20 percent. Better, but still below every fifth wheel on
        the market. Put your own numbers through our{" "}
        <Link href="/payload-calculator" className="text-brand-600 hover:underline">
          payload calculator
        </Link>{" "}
        rather than trusting this example.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Half-Ton Payload Reality by Model
      </h2>
      <p className="mt-3 text-gray-700">
        These are approximate ranges for crew-cab four-wheel-drive trucks as
        commonly equipped. The spread inside a single model is enormous, which
        is why the door sticker is the only number worth trusting. Subtract
        1,400 to 1,600 lbs from the advertised figure to get close to a real
        retail truck.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">
                Model
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Typical crew-cab 4x4 payload
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Advertised maximum payload
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Advertised max 5th wheel rating
              </th>
            </tr>
          </thead>
          <tbody>
            {PAYLOAD_MODELS.map((row, i) => (
              <tr key={row[0]} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                <td className="border px-3 py-2 font-semibold">{row[0]}</td>
                <td className="border px-3 py-2">{row[1]}</td>
                <td className="border px-3 py-2 text-xs">{row[2]}</td>
                <td className="border px-3 py-2">{row[3]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm text-gray-500">
        Ranges compiled from manufacturer trailering guides. Verify the specific
        truck you are buying by reading its door-jamb sticker, and confirm pin
        weight with a{" "}
        <Link href="/guides/cat-scale-weighing" className="text-brand-600 hover:underline">
          CAT scale
        </Link>
        .
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        What a True Half-Ton Fifth Wheel Looks Like
      </h2>
      <p className="mt-3 text-gray-700">
        There is a real market segment of lightweight fifth wheels marketed as
        half-ton compatible. They are shorter, often single-slide, aluminum
        framed, and deliberately built to keep pin weight down. Here is roughly
        what they look like &mdash; and notice that even the lightest ones ask
        for more pin weight than the worksheet above allows.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">
                Model
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Approx. GVWR
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Approx. loaded pin weight
              </th>
            </tr>
          </thead>
          <tbody>
            {LIGHT_FIFTH_WHEELS.map((row, i) => (
              <tr key={row[0]} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                <td className="border px-3 py-2 font-semibold">{row[0]}</td>
                <td className="border px-3 py-2">{row[1]}</td>
                <td className="border px-3 py-2">{row[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm text-gray-500">
        Approximate figures for comparison only. Weights vary by model year and
        options &mdash; always read the specific unit&apos;s federal weight
        label and confirm the loaded pin weight on a scale. Learn how in our{" "}
        <Link href="/guides/fifth-wheel-pin-weight" className="text-brand-600 hover:underline">
          5th wheel pin weight guide
        </Link>
        .
      </p>

      <p className="mt-4 text-gray-700">
        The pattern is uncomfortable: a &ldquo;half-ton towable&rdquo; fifth
        wheel still puts 1,300 to 1,600 lbs on the pin. That fits a
        lightly-optioned half-ton with one or two people and minimal gear. It
        does not fit a loaded crew cab with a family. If you are shopping this
        segment and own a well-equipped 4x4, the trailer you can actually tow is
        smaller than the ones marketed to you.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Short Beds, Slider Hitches, and Cab Clearance
      </h2>
      <p className="mt-3 text-gray-700">
        Most half-tons sold today have a 5.5 ft or 5.8 ft bed, and that creates
        a second problem unrelated to weight. A fifth wheel kingpin sits about 4
        to 6 inches forward of the rear axle, so when you turn sharply the
        trailer&apos;s overhang sweeps toward the cab. On a short bed, a tight
        turn can put the trailer&apos;s nose through the rear window.
      </p>
      <p className="mt-3 text-gray-700">
        Two solutions exist. An automatic sliding hitch moves the pivot point
        rearward as you turn, and adds 100 to 150 lbs &mdash; payload you already
        do not have. A rotating pin box such as a Sidewinder or Revolution lets
        the trailer pivot at the pin box instead of the kingpin, and weighs
        nothing extra. Both cost money, and both are non-negotiable if you want
        to maneuver into a campsite without bodywork. See our{" "}
        <Link href="/guides/gooseneck-vs-fifth-wheel" className="text-brand-600 hover:underline">
          gooseneck vs fifth wheel comparison
        </Link>{" "}
        for how the alternatives behave.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        What Airbags and Max Tow Packages Cannot Do
      </h2>
      <p className="mt-3 text-gray-700">
        This is the most common and most expensive misunderstanding in the
        category.
      </p>
      <ul className="mt-3 ml-6 list-disc space-y-2 text-gray-700">
        <li>
          <strong>Airbags and helper springs</strong> level the truck and reduce
          sag. They do not change GVWR, GAWR, tire ratings, axle bearing limits,
          or your payload sticker. The manufacturer certifies those, and no
          aftermarket part can raise them.
        </li>
        <li>
          <strong>A Max Tow or Max Trailering package</strong> adds cooling,
          gearing, and sometimes a heavier frame. It raises the{" "}
          <em>tow</em> rating. It does not raise the payload enough to matter
          for a fifth wheel, and it often adds weight that reduces payload.
        </li>
        <li>
          <strong>Load range E tires</strong> are a genuine improvement and
          often necessary, but they still have to fit within the rear GAWR and
          the wheel rating.
        </li>
        <li>
          <strong>Sumo springs, timbrens, and overloads</strong> behave like
          airbags: ride quality and attitude only.
        </li>
      </ul>
      <p className="mt-3 text-gray-700">
        If your setup is over payload, the fix is a lighter trailer or a larger
        truck. There is no third option that a parts catalogue can sell you.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        The Real Cost of Getting This Wrong
      </h2>
      <p className="mt-3 text-gray-700">
        An overloaded half-ton fifth wheel setup concentrates excess weight
        directly over the rear axle and its tires, which is the worst possible
        place for it. Practically, that shows up as rear tire overheating and
        blowouts, accelerated axle bearing wear, a squatted rear end that
        unloads the front tires and lengthens stopping distances, and a truck
        that steers vaguely in crosswinds. Our{" "}
        <Link href="/guides/exceed-gvwr-dangers" className="text-brand-600 hover:underline">
          guide to exceeding GVWR
        </Link>{" "}
        walks through the mechanical and legal consequences in detail.
      </p>
      <p className="mt-3 text-gray-700">
        There is also a financial exposure that owners rarely consider. If you
        are over a published rating and you are involved in a crash, an insurer
        can point to the overload when evaluating the claim, and a plaintiff
        attorney will. Your powertrain warranty can also be affected, because
        towing beyond the rated capacity is explicitly outside the terms.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        When to Step Up to a 3/4-Ton
      </h2>
      <p className="mt-3 text-gray-700">
        Step up if any of these describe you: the fifth wheel is longer than
        about 28 ft, its GVWR is over 10,000 lbs, you travel with more than two
        people, you carry significant gear in the bed, or your payload
        worksheet leaves less than a few hundred pounds of margin. A
        2500-class truck carries 2,800 to 4,000 lbs of payload, which turns the
        same calculation from a hard no into comfortable headroom. Read our{" "}
        <Link
          href="/guides/three-quarter-ton-truck-towing"
          className="text-brand-600 hover:underline"
        >
          3/4-ton truck towing guide
        </Link>{" "}
        for model-by-model numbers, and if your trailer is genuinely in the
        half-ton class, our{" "}
        <Link
          href="/guides/fifth-wheel-vs-travel-trailer"
          className="text-brand-600 hover:underline"
        >
          fifth wheel vs travel trailer comparison
        </Link>{" "}
        explains what you give up by choosing a bumper-pull instead.
      </p>

      <div className="mt-10 rounded-2xl bg-brand-600 p-8 text-center text-white">
        <h2 className="text-2xl font-bold">
          Run Your Own Payload Audit
        </h2>
        <p className="mt-2 text-brand-100">
          Enter your door-sticker payload, your passengers, your hitch, and the
          trailer&apos;s GVWR. We will tell you whether the pin weight fits
          &mdash; in about ninety seconds, with no sign-up.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
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

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Sources &amp; References
      </h2>
      <ul className="mt-3 space-y-1 text-sm text-gray-600">
        <li>
          <a
            href="https://www.fleet.ford.com/towing-guides/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            Ford Towing Guides (official trailer towing specifications)
          </a>
        </li>
        <li>
          <a
            href="https://www.chevrolet.com/trucks/silverado-1500-pickup-truck"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            Chevrolet Silverado 1500 (official trailering information)
          </a>
        </li>
        <li>
          <a
            href="https://www.ramtrucks.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            RAM Trucks (official towing and payload specifications)
          </a>
        </li>
        <li>
          <a
            href="https://www.sae.org/standards/content/j2807_202005/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            SAE J2807 &mdash; Performance Requirements for Determining Tow-Vehicle
            Gross Combination Weight Rating
          </a>
        </li>
        <li>
          <a
            href="https://www.rvsafety.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            RV Safety &amp; Education Foundation (RVSEF) &mdash; independent
            weight and safety education
          </a>
        </li>
        <li>
          <a
            href="https://www.rvia.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            RV Industry Association (RVIA)
          </a>
        </li>
        <li>
          <a
            href="https://catscale.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            CAT Scale &mdash; certified public weigh stations
          </a>
        </li>
      </ul>

      <div className="mt-10 rounded-xl border border-gray-200 bg-gray-50 p-6">
        <h3 className="font-bold text-gray-900">Related Guides</h3>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          <li>
            <Link
              href="/guides/fifth-wheel-pin-weight"
              className="text-brand-600 hover:underline"
            >
              5th Wheel Pin Weight: How to Measure It
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
              href="/guides/three-quarter-ton-truck-towing"
              className="text-brand-600 hover:underline"
            >
              3/4 Ton Truck Towing Capacity Compared
            </Link>
          </li>
          <li>
            <Link
              href="/guides/fifth-wheel-vs-travel-trailer"
              className="text-brand-600 hover:underline"
            >
              5th Wheel vs Travel Trailer
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
              href="/guides/toy-hauler-towing-guide"
              className="text-brand-600 hover:underline"
            >
              Toy Hauler Towing Guide
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
