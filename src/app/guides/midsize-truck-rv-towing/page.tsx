import type { Metadata } from "next";
import Link from "next/link";
import { FaqJsonLd, ArticleJsonLd } from "@/components/seo/JsonLd";
import { DEFAULT_OG_IMAGES } from "@/lib/seo/default-og-image";

export const metadata: Metadata = {
  title:
    "Towing With a Midsize Truck: Colorado, Ranger, Tacoma RV Towing Guide",
  description:
    "Can a midsize truck tow a travel trailer? Complete towing guide for Chevy Colorado, Ford Ranger, Toyota Tacoma, Nissan Frontier, and Jeep Gladiator. Real specs, payload limits, and safe trailer matches.",
  alternates: {
    canonical: "https://www.rvtowingcalc.com/guides/midsize-truck-rv-towing",
  },
  openGraph: {
    title:
      "Towing With a Midsize Truck: Colorado, Ranger, Tacoma RV Towing Guide",
    description:
      "Real tow ratings and payload numbers for every midsize truck. Which Colorado, Ranger, Tacoma, Frontier, or Gladiator trim can safely tow your travel trailer.",
    url: "https://www.rvtowingcalc.com/guides/midsize-truck-rv-towing",
    images: DEFAULT_OG_IMAGES,
  },
};

const FAQS = [
  {
    q: "Can a midsize truck tow a travel trailer?",
    a: "Yes, but with strict limits. Most midsize trucks can tow 5,000 to 7,700 lbs depending on trim and options. That limits you to small travel trailers, pop-up campers, and teardrops in the 3,500 to 6,000 lb loaded weight range. You must also stay within payload capacity, which is typically 1,100 to 1,500 lbs on midsize trucks. Tongue weight from a 5,000 lb trailer consumes 600+ lbs of that payload, leaving minimal room for passengers and cargo.",
  },
  {
    q: "Which midsize truck has the highest tow rating?",
    a: "The Ford Ranger and Chevy Colorado tie for the highest max tow rating at 7,700 lbs when properly equipped. The Toyota Tacoma maxes out at 6,500 lbs, the Nissan Frontier at 6,720 lbs, and the Jeep Gladiator at 7,700 lbs. However, max tow ratings require specific engine, axle ratio, and tow package combinations. Base trims are often rated 2,000+ lbs lower. Always verify your specific VIN's rating rather than relying on brochure numbers.",
  },
  {
    q: "What size travel trailer can a Toyota Tacoma tow?",
    a: "A properly equipped Toyota Tacoma (V6 with tow package) can tow up to 6,500 lbs. In practice, that means a loaded travel trailer weighing no more than 5,200 lbs following the 80% rule. Suitable trailers include small single-axle travel trailers (16-20 ft), most pop-up campers, hybrid trailers, and teardrops. The Tacoma's payload capacity (1,095 to 1,685 lbs depending on trim) is the real constraint. A 5,000 lb trailer with 600 lb tongue weight leaves only 400-1,000 lbs for passengers and bed cargo.",
  },
  {
    q: "Is payload or tow rating the bigger problem on midsize trucks?",
    a: "Payload is almost always the limiting factor. Midsize trucks have tow ratings that sound adequate on paper, but their payload capacities are significantly lower than half-ton trucks. A 7,000 lb tow rating means nothing if a 700 lb tongue weight plus two passengers and a bed full of gear pushes you over payload. For midsize trucks, always calculate payload first. If the payload works, the tow rating usually follows. If payload fails, the tow rating is irrelevant.",
  },
  {
    q: "Can I tow a 5,000 lb trailer with a Jeep Gladiator?",
    a: "Yes. A properly equipped Jeep Gladiator (Max Tow Package with 4.10 axle ratio) is rated for 7,700 lbs and can safely tow a 5,000 lb loaded trailer with margin to spare. The Gladiator's payload ranges from 1,105 to 1,700 lbs depending on trim. A 5,000 lb trailer with 600 lb tongue weight leaves 500-1,100 lbs for passengers and cargo. However, the Gladiator's shorter wheelbase compared to a half-ton truck means trailer sway is more likely. A quality weight distribution hitch with integrated sway control is strongly recommended.",
  },
  {
    q: "Should I get a half-ton truck instead of a midsize for RV towing?",
    a: "If you plan to tow regularly or want a trailer over 6,000 lbs loaded, a half-ton truck is the safer choice. Half-ton trucks offer 50-100% more payload, longer wheelbases for stability, stronger frames, and better cooling systems. Midsize trucks work well for occasional towing of small trailers, but they are not designed for heavy or frequent RV use. The price difference between a loaded midsize and a base half-ton is often smaller than the cost of upgrading later when you realize your midsize is underpowered.",
  },
];

const TRUCK_SPECS_TABLE = [
  {
    truck: "Chevy Colorado (2024+)",
    engine: "2.7L Turbo (L3B)",
    maxTow: "7,700 lbs",
    payload: "1,151 - 1,684 lbs",
    wheelbase: "131.4 in (Crew Cab)",
    keyPackage: "Max Trailering Package + 3.42 axle",
  },
  {
    truck: "Ford Ranger (2024+)",
    engine: "2.3L EcoBoost",
    maxTow: "7,500 lbs",
    payload: "1,164 - 1,805 lbs",
    wheelbase: "128.7 in",
    keyPackage: "Trailer Tow Package + 3.73 axle",
  },
  {
    truck: "Toyota Tacoma (2024+)",
    engine: "2.4L Turbo i-FORCE",
    maxTow: "6,500 lbs",
    payload: "1,095 - 1,685 lbs",
    wheelbase: "127.4 - 145.1 in",
    keyPackage: "Tow Package + Integrated brake controller",
  },
  {
    truck: "Nissan Frontier (2024)",
    engine: "3.8L V6",
    maxTow: "6,720 lbs",
    payload: "1,230 - 1,610 lbs",
    wheelbase: "126.0 in",
    keyPackage: "Utili-Track + Class IV hitch standard on V6",
  },
  {
    truck: "Jeep Gladiator (2024)",
    engine: "3.6L V6 / 3.0L Diesel",
    maxTow: "7,700 lbs (gas) / 6,500 lbs (diesel)",
    payload: "1,105 - 1,700 lbs",
    wheelbase: "137.3 in",
    keyPackage: "Max Tow Package + 4.10 axle",
  },
];

const TRAILER_MATCH_TABLE = [
  {
    category: "Teardrop / Mini Trailer",
    dryWeight: "900 - 2,000 lbs",
    loadedWeight: "1,200 - 2,500 lbs",
    tongueWeight: "120 - 300 lbs",
    suitableFor: "All midsize trucks",
    notes: "No WDH needed; verify 7-pin wiring",
  },
  {
    category: "Pop-Up / Folding Camper",
    dryWeight: "1,500 - 3,000 lbs",
    loadedWeight: "2,000 - 3,800 lbs",
    tongueWeight: "200 - 450 lbs",
    suitableFor: "All midsize trucks",
    notes: "Low profile reduces wind drag",
  },
  {
    category: "Small Single-Axle Travel Trailer (16-20 ft)",
    dryWeight: "2,800 - 3,800 lbs",
    loadedWeight: "3,500 - 5,000 lbs",
    tongueWeight: "400 - 600 lbs",
    suitableFor: "Colorado, Ranger, Gladiator, Frontier",
    notes: "WDH recommended; check payload carefully",
  },
  {
    category: "Mid-Size Travel Trailer (21-24 ft)",
    dryWeight: "3,800 - 4,800 lbs",
    loadedWeight: "5,000 - 6,200 lbs",
    tongueWeight: "550 - 750 lbs",
    suitableFor: "Colorado, Ranger, Gladiator (max tow pkg)",
    notes: "At the limit; WDH mandatory; minimal payload left",
  },
  {
    category: "Large Travel Trailer (25+ ft)",
    dryWeight: "4,500+ lbs",
    loadedWeight: "6,500+ lbs",
    tongueWeight: "700+ lbs",
    suitableFor: "Not recommended for midsize",
    notes: "Requires half-ton or larger truck",
  },
];

const PAYLOAD_MATH_EXAMPLE = [
  {
    item: "Truck curb weight + fuel",
    weight: "Already in GVWR",
    runningTotal: "Baseline",
  },
  {
    item: "Driver + front passenger",
    weight: "350 lbs",
    runningTotal: "350 lbs",
  },
  {
    item: "Two rear passengers",
    weight: "300 lbs",
    runningTotal: "650 lbs",
  },
  {
    item: "Bed cargo (cooler, tools, chairs)",
    weight: "200 lbs",
    runningTotal: "850 lbs",
  },
  {
    item: "Tongue weight (12% of 5,500 lb trailer)",
    weight: "660 lbs",
    runningTotal: "1,510 lbs",
  },
  {
    item: "Weight distribution hitch",
    weight: "80 lbs",
    runningTotal: "1,590 lbs",
  },
];

export default function MidsizeTruckRvTowingPage() {
  const examplePayloadLimit = 1650;
  const exampleConsumed = 1590;
  const exampleRemaining = examplePayloadLimit - exampleConsumed;

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
      <ArticleJsonLd
        title="Towing With a Midsize Truck: Colorado, Ranger, Tacoma RV Towing Guide"
        description="Real tow ratings and payload numbers for Chevy Colorado, Ford Ranger, Toyota Tacoma, Nissan Frontier, and Jeep Gladiator. Which midsize truck can safely tow your travel trailer."
        url="https://www.rvtowingcalc.com/guides/midsize-truck-rv-towing"
        datePublished="2026-08-23"
      />
      <FaqJsonLd
        faqs={FAQS}
        baseUrl="https://www.rvtowingcalc.com/guides/midsize-truck-rv-towing"
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
        <span className="text-gray-900">Midsize Truck RV Towing</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
        Towing With a Midsize Truck: Colorado, Ranger, Tacoma RV Towing Guide
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        Midsize trucks are the fastest-growing segment in the US pickup market.
        But can a Colorado, Ranger, Tacoma, Frontier, or Gladiator actually tow
        a travel trailer safely? The answer is yes, with hard limits.
      </p>

      <div className="mt-8 rounded-xl bg-yellow-50 p-6">
        <h2 className="text-lg font-bold text-yellow-800">
          The Midsize Truck Reality Check
        </h2>
        <p className="mt-2 text-yellow-700">
          Midsize trucks can tow 5,000 to 7,700 lbs on paper. In practice, their
          payload capacities (1,100 to 1,800 lbs) are the real constraint. A
          6,000 lb travel trailer with 720 lb tongue weight consumes nearly half
          of a Tacoma's total payload before you add passengers or cargo. The
          tow rating gets the headline; the payload limit gets the veto.
        </p>
      </div>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Midsize Truck Towing Specs Compared
      </h2>
      <p className="mt-3 text-gray-700">
        Here are the 2024 model year maximum towing and payload numbers for
        every major midsize truck. These are the best-case figures with the
        required tow package and engine combination. Base trims are often rated
        significantly lower.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">Truck</th>
              <th className="border px-3 py-2 text-left font-semibold">Engine</th>
              <th className="border px-3 py-2 text-left font-semibold">Max Tow</th>
              <th className="border px-3 py-2 text-left font-semibold">Payload</th>
              <th className="border px-3 py-2 text-left font-semibold">Wheelbase</th>
              <th className="border px-3 py-2 text-left font-semibold">Required Package</th>
            </tr>
          </thead>
          <tbody>
            {TRUCK_SPECS_TABLE.map((row, i) => (
              <tr key={i} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                <td className="border px-3 py-2 font-medium">{row.truck}</td>
                <td className="border px-3 py-2">{row.engine}</td>
                <td className="border px-3 py-2">{row.maxTow}</td>
                <td className="border px-3 py-2">{row.payload}</td>
                <td className="border px-3 py-2">{row.wheelbase}</td>
                <td className="border px-3 py-2">{row.keyPackage}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-4 text-sm text-gray-500">
        Sources: Manufacturer 2024 towing guides (Chevrolet, Ford, Toyota,
        Nissan, Jeep). Always verify your specific VIN's rating with the
        manufacturer's tow rating lookup tool.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        What Can You Actually Tow?
      </h2>
      <p className="mt-3 text-gray-700">
        The 80% rule applies to midsize trucks just as it does to half-tons.
        Your loaded trailer weight should not exceed 80% of your truck's maximum
        tow rating. Here is what that looks like in practice:
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">Trailer Category</th>
              <th className="border px-3 py-2 text-left font-semibold">Dry Weight</th>
              <th className="border px-3 py-2 text-left font-semibold">Loaded Weight</th>
              <th className="border px-3 py-2 text-left font-semibold">Tongue Weight</th>
              <th className="border px-3 py-2 text-left font-semibold">Suitable For</th>
            </tr>
          </thead>
          <tbody>
            {TRAILER_MATCH_TABLE.map((row, i) => (
              <tr key={i} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                <td className="border px-3 py-2 font-medium">
                  {row.category}
                  <div className="text-xs text-gray-500">{row.notes}</div>
                </td>
                <td className="border px-3 py-2">{row.dryWeight}</td>
                <td className="border px-3 py-2">{row.loadedWeight}</td>
                <td className="border px-3 py-2">{row.tongueWeight}</td>
                <td className="border px-3 py-2">{row.suitableFor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        The Payload Math That Matters
      </h2>
      <p className="mt-3 text-gray-700">
        Tow rating tells you what the engine and frame can pull. Payload tells
        you what the suspension and tires can carry. On a midsize truck,
        payload runs out first. Here is a real-world example using a Chevy
        Colorado with 1,650 lbs payload (a strong configuration):
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">Item</th>
              <th className="border px-3 py-2 text-left font-semibold">Weight</th>
              <th className="border px-3 py-2 text-left font-semibold">Running Total</th>
            </tr>
          </thead>
          <tbody>
            {PAYLOAD_MATH_EXAMPLE.map((row, i) => (
              <tr key={i} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                <td className="border px-3 py-2">{row.item}</td>
                <td className="border px-3 py-2">{row.weight}</td>
                <td className="border px-3 py-2">{row.runningTotal}</td>
              </tr>
            ))}
            <tr className="bg-yellow-50 font-semibold">
              <td className="border px-3 py-2">Payload limit</td>
              <td className="border px-3 py-2">1,650 lbs</td>
              <td className="border px-3 py-2">
                Remaining: {exampleRemaining} lbs
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-4 rounded-lg bg-red-50 p-4">
        <p className="text-sm text-red-700">
          <strong>Result:</strong> This configuration leaves only{" "}
          {exampleRemaining} lbs of payload margin. Add a third passenger, a
          generator, or bikes in the bed and you are over payload. This is why
          midsize trucks struggle with mid-size travel trailers even when the
          tow rating says 7,700 lbs.
        </p>
      </div>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Midsize Truck Towing Limitations
      </h2>
      <p className="mt-3 text-gray-700">
        Beyond raw numbers, midsize trucks have design characteristics that
        affect towing safety:
      </p>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-gray-200 p-5">
          <h3 className="font-bold text-gray-900">Shorter Wheelbase</h3>
          <p className="mt-2 text-sm text-gray-700">
            Midsize trucks have wheelbases 10-20 inches shorter than half-tons.
            A shorter wheelbase reduces straight-line stability and makes
            trailer sway more likely, especially with longer trailers. The rule
            of thumb: your wheelbase in inches should be at least half your
            trailer length in feet. A 130-inch wheelbase (Colorado) paired with
            a 24-foot trailer is at the edge of stability.
          </p>
        </div>
        <div className="rounded-xl border border-gray-200 p-5">
          <h3 className="font-bold text-gray-900">Smaller Brakes</h3>
          <p className="mt-2 text-sm text-gray-700">
            Midsize trucks have smaller brake rotors and calipers than
            half-tons. Stopping a 5,000+ lb trailer requires a properly adjusted
            trailer brake controller and high-quality trailer brakes. Do not
            rely on the truck's brakes alone. A proportional brake controller
            is essential.
          </p>
        </div>
        <div className="rounded-xl border border-gray-200 p-5">
          <h3 className="font-bold text-gray-900">Cooling System</h3>
          <p className="mt-2 text-sm text-gray-700">
            Midsize trucks have smaller radiators and transmission coolers.
            Towing in mountains or summer heat pushes transmission fluid
            temperatures higher. Use tow/haul mode, monitor transmission temp
            if your truck has a gauge, and take breaks on long grades.
          </p>
        </div>
        <div className="rounded-xl border border-gray-200 p-5">
          <h3 className="font-bold text-gray-900">Frame &amp; Suspension</h3>
          <p className="mt-2 text-sm text-gray-700">
            Midsize frames are lighter-duty than half-ton frames. Rear sag is
            common with heavy tongue weights. A weight distribution hitch is
            strongly recommended for any trailer over 4,000 lbs. Airbag
            helpers or Timbren bump stops can level the truck but do not
            increase payload or GAWR.
          </p>
        </div>
      </div>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Essential Equipment for Midsize Truck Towing
      </h2>
      <p className="mt-3 text-gray-700">
        If you are towing with a midsize truck, these items are not optional:
      </p>
      <ul className="mt-3 list-disc space-y-2 pl-6 text-gray-700">
        <li>
          <strong>Weight distribution hitch with sway control:</strong>{" "}
          Mandatory for trailers over 4,000 lbs. The shorter wheelbase makes
          sway more likely. A WDH with integrated anti-sway (Equal-i-zer,
          Blue Ox SwayPro, or E2) is worth the investment.
        </li>
        <li>
          <strong>Proportional brake controller:</strong> Tekonsha P3 or
          Redarc Tow-Pro Elite. Time-delayed controllers are inadequate for
          midsize trucks with smaller brakes.
        </li>
        <li>
          <strong>Brake controller wiring:</strong> Most midsize trucks require
          an aftermarket wiring harness for the 7-pin connector. The tow
          package may include the hitch but not the brake controller wiring.
        </li>
        <li>
          <strong>Transmission temp monitoring:</strong> If your truck does not
          have a factory transmission temp gauge, add an aftermarket one.
          OBD-II Bluetooth adapters with apps like Torque Pro work well.
        </li>
        <li>
          <strong>LT-rated tires:</strong> Some midsize trucks come with P-rated
          passenger tires. For towing, upgrade to LT-rated light truck tires
          with a higher load index. Check the sidewall for the LT designation.
        </li>
      </ul>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        When to Step Up to a Half-Ton Truck
      </h2>
      <p className="mt-3 text-gray-700">
        Midsize trucks work for occasional towing of small trailers. But there
        are clear signals that you need a larger truck:
      </p>
      <div className="mt-4 rounded-xl border border-orange-200 bg-orange-50 p-6">
        <ul className="list-disc space-y-2 pl-6 text-orange-800">
          <li>
            Your loaded trailer exceeds 6,000 lbs (half-ton territory)
          </li>
          <li>
            You regularly carry 3+ passengers plus bed cargo while towing
          </li>
          <li>
            You tow in mountains, where engine and transmission strain is highest
          </li>
          <li>
            You plan to upgrade to a larger trailer within 2-3 years
          </li>
          <li>
            Your CAT scale weigh shows you are within 100 lbs of payload or RGAWR
          </li>
        </ul>
      </div>
      <p className="mt-4 text-gray-700">
        The cost difference between a loaded midsize truck ($40,000-50,000) and
        a base half-ton with the standard tow package ($45,000-55,000) is often
        smaller than the cost of trading up later. If RV towing is a primary
        use case, buy the truck that fits your future needs, not just today's
        trailer.
      </p>

      <div className="mt-10 rounded-2xl bg-brand-600 p-8 text-center text-white">
        <h2 className="text-2xl font-bold">
          Check Your Midsize Truck Before You Buy a Trailer
        </h2>
        <p className="mt-2 text-brand-100">
          Use our free calculators to verify payload, tongue weight, and towing
          capacity for your specific truck and trailer combination.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/towing-capacity-calculator"
            className="inline-block rounded-xl bg-white px-6 py-3 text-base font-bold text-brand-700 shadow-lg transition-all hover:bg-brand-50 active:scale-[0.99]"
          >
            Towing Capacity Calculator
          </Link>
          <Link
            href="/payload-calculator"
            className="inline-block rounded-xl bg-brand-700 px-6 py-3 text-base font-bold text-white shadow-lg ring-1 ring-white/30 transition-all hover:bg-brand-800 active:scale-[0.99]"
          >
            Payload Calculator
          </Link>
        </div>
      </div>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Sources &amp; References
      </h2>
      <ul className="mt-3 list-disc space-y-2 pl-6 text-sm text-gray-600">
        <li>
          <a
            href="https://www.chevrolet.com/trucks/colorado"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            Chevrolet Colorado Towing Guide (2024)
          </a>
        </li>
        <li>
          <a
            href="https://www.ford.com/trucks/ranger/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            Ford Ranger Towing Guide (2024)
          </a>
        </li>
        <li>
          <a
            href="https://www.toyota.com/tacoma/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            Toyota Tacoma Towing Guide (2024)
          </a>
        </li>
        <li>
          <a
            href="https://www.nissanusa.com/vehicles/trucks/frontier.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            Nissan Frontier Towing Guide (2024)
          </a>
        </li>
        <li>
          <a
            href="https://www.jeep.com/gladiator.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            Jeep Gladiator Towing Guide (2024)
          </a>
        </li>
        <li>
          <a
            href="https://www.sae.org/standards/content/j2807_202206/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            SAE J2807 Tow Rating Standard
          </a>
        </li>
        <li>
          <a
            href="https://www.nhtsa.gov/vehicle-safety/towing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            NHTSA Trailer Towing Safety
          </a>
        </li>
      </ul>

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

      <div className="mt-10 rounded-xl border border-gray-200 bg-gray-50 p-6">
        <h3 className="font-bold text-gray-900">Related Guides</h3>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          <li>
            <Link
              href="/guides/best-half-ton-trucks-8000-lbs"
              className="text-brand-600 hover:underline"
            >
              Best Half-Ton Trucks for Towing 8,000 lbs
            </Link>
          </li>
          <li>
            <Link
              href="/guides/can-suv-tow-small-travel-trailer"
              className="text-brand-600 hover:underline"
            >
              Can My SUV Tow a Small Travel Trailer?
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
              href="/guides/tongue-weight"
              className="text-brand-600 hover:underline"
            >
              Tongue Weight Guide
            </Link>
          </li>
          <li>
            <Link
              href="/guides/weight-distribution-hitch-setup"
              className="text-brand-600 hover:underline"
            >
              Weight Distribution Hitch Setup Guide
            </Link>
          </li>
          <li>
            <Link
              href="/guides/diesel-vs-gas-truck-rv-towing"
              className="text-brand-600 hover:underline"
            >
              Diesel vs Gas Truck for Towing RV
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
