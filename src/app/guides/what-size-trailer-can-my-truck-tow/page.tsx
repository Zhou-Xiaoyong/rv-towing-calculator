import type { Metadata } from "next";
import Link from "next/link";
import { FaqJsonLd, ArticleJsonLd } from "@/components/seo/JsonLd";
import { DEFAULT_OG_IMAGES } from "@/lib/seo/default-og-image";

export const metadata: Metadata = {
  title:
    "What Size Travel Trailer Can My Truck Tow? A Right-Sizing Guide",
  description:
    "Learn how to match a travel trailer to your truck using the 80% rule, door-jamb payload, and tongue weight. A step-by-step worksheet to find the safe trailer size for any tow vehicle.",
  alternates: {
    canonical: "https://www.rvtowingcalc.com/guides/what-size-trailer-can-my-truck-tow",
  },
  openGraph: {
    title:
      "What Size Travel Trailer Can My Truck Tow? A Right-Sizing Guide",
    description:
      "A step-by-step worksheet to size your travel trailer to your truck's real payload and tongue weight, not just the brochure tow rating. Tow safe, tow smart.",
    url: "https://www.rvtowingcalc.com/guides/what-size-trailer-can-my-truck-tow",
    images: DEFAULT_OG_IMAGES,
  },
};

const FAQS = [
  {
    q: "How do I know what size trailer my truck can tow?",
    a: "Start with two numbers from your truck's driver's door-jamb label: the maximum tow rating and the payload capacity. Apply the 80% rule to the tow rating to get your safe loaded trailer weight (e.g., a 9,000 lb tow rating means a trailer no heavier than 7,200 lbs loaded). Then subtract the trailer's tongue weight (10-15% of loaded weight) from your payload, along with passengers and cargo. If the remaining payload is positive, the size fits. If not, the trailer is too big regardless of the tow rating.",
  },
  {
    q: "What does the 80% rule mean for towing?",
    a: "The 80% rule says your loaded trailer weight should not exceed 80% of your truck's maximum tow rating. This buffer leaves margin for wind, hills, emergency maneuvers, and the fact that real trailers weigh more than their factory dry-weight sticker. A truck rated for 10,000 lbs should tow a trailer that weighs no more than 8,000 lbs ready to camp. It is a safety guideline, not a legal limit, but it prevents most overloaded and unstable setups.",
  },
  {
    q: "Is payload or tow rating more important for sizing a trailer?",
    a: "Payload is almost always the limiting factor. Tow ratings describe what the engine and frame can pull; payload describes what the suspension and tires can carry. A travel trailer's tongue weight (often 12-15% of loaded weight) is payload on your truck, and it lands before you add a single passenger. Most families hit their payload limit with a trailer that is still well under the tow rating. Always size the trailer to the payload budget, then confirm the tow rating covers it.",
  },
  {
    q: "How much tongue weight does a travel trailer have?",
    a: "Proper tongue weight is 10% to 15% of the trailer's loaded weight, with 12-13% considered ideal for stability. A 6,000 lb loaded trailer carries about 720 to 900 lbs on the hitch. That tongue weight counts against your truck's payload and can consume more than half of a half-ton's available capacity once you add passengers and cargo. Smaller and lighter trailers have proportionately less tongue weight, which is why they are safer matches for midsize trucks and SUVs.",
  },
  {
    q: "Can I tow a 30 ft travel trailer with a half-ton truck?",
    a: "Usually no, and almost never safely. A 30 ft travel trailer typically has a loaded weight of 7,500 to 9,000 lbs, putting 900 to 1,350 lbs of tongue weight on the hitch. Most half-ton trucks have 1,500 to 2,100 lbs of payload, so the tongue weight alone eats more than half of it, leaving little for passengers and cargo. A few light, short 30-footers under 7,000 lbs loaded can work with a high-payload half-ton, but most 30-foot trailers need a 3/4 ton truck.",
  },
  {
    q: "What size trailer can a midsize truck tow?",
    a: "A properly equipped midsize truck (Chevy Colorado, Ford Ranger, Toyota Tacoma, Jeep Gladiator) with a max tow rating of 6,500 to 7,700 lbs can safely tow a loaded trailer of about 5,000 to 6,000 lbs under the 80% rule. That means small single-axle travel trailers (16-20 ft), teardrops, pop-ups, and hybrid trailers. Their low payload (1,100 to 1,800 lbs) is the real cap, so tongue weight from anything over 5,500 lbs loaded usually pushes them past payload.",
  },
];

const TRUCK_CLASS_TABLE = [
  {
    class: "Midsize Truck",
    maxTow: "5,000 - 7,700 lbs",
    safeLoaded80: "4,000 - 6,160 lbs",
    typicalTrailer: "Teardrop, pop-up, 16-20 ft single axle",
    tongueOnPayload: "480 - 900 lbs",
  },
  {
    class: "Half-Ton (1500)",
    maxTow: "8,000 - 14,000 lbs",
    safeLoaded80: "6,400 - 11,200 lbs",
    typicalTrailer: "18-28 ft travel trailer, light 5th wheel",
    tongueOnPayload: "800 - 1,680 lbs",
  },
  {
    class: "3/4 Ton (2500)",
    maxTow: "14,000 - 23,000 lbs",
    safeLoaded80: "11,200 - 18,400 lbs",
    typicalTrailer: "27-36 ft fifth wheel, large TT",
    tongueOnPayload: "2,000 - 4,000 lbs (pin)",
  },
  {
    class: "One-Ton (3500 DRW)",
    maxTow: "20,000 - 36,000 lbs",
    safeLoaded80: "16,000 - 28,800 lbs",
    typicalTrailer: "Large luxury / toy hauler fifth wheel",
    tongueOnPayload: "3,200 - 6,000 lbs (pin)",
  },
];

const WORKED_EXAMPLE = [
  {
    step: "1. Truck max tow rating (door jamb / brochure)",
    value: "11,000 lbs",
    note: "2024 half-ton, Max Tow package",
  },
  {
    step: "2. Apply 80% rule -> max loaded trailer",
    value: "8,800 lbs",
    note: "11,000 x 0.80",
  },
  {
    step: "3. Target trailer dry weight (loaded ~85% of GVWR)",
    value: "7,500 lbs dry / ~8,000 loaded",
    note: "Stay under 8,800 lb ceiling",
  },
  {
    step: "4. Tongue weight (12% of 8,000 lbs)",
    value: "960 lbs",
    note: "Counts as truck payload",
  },
  {
    step: "5. Payload budget remaining after tongue weight",
    value: "1,140 lbs (of 2,100 max)",
    note: "Covers 4 passengers + cargo",
  },
  {
    step: "6. Verdict",
    value: "FITS with margin",
    note: "Verify by CAT scale when loaded",
  },
];

export default function WhatSizeTrailerCanMyTruckTowPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
      <ArticleJsonLd
        title="What Size Travel Trailer Can My Truck Tow? A Right-Sizing Guide"
        description="Learn how to match a travel trailer to your truck using the 80% rule, door-jamb payload, and tongue weight. A step-by-step worksheet to find the safe trailer size for any tow vehicle."
        url="https://www.rvtowingcalc.com/guides/what-size-trailer-can-my-truck-tow"
        datePublished="2026-08-30"
      />
      <FaqJsonLd
        faqs={FAQS}
        baseUrl="https://www.rvtowingcalc.com/guides/what-size-trailer-can-my-truck-tow"
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
        <span className="text-gray-900">What Size Trailer Can My Truck Tow</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
        What Size Travel Trailer Can My Truck Tow? A Right-Sizing Guide
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        The single biggest towing mistake is buying the trailer first and
        checking the truck second. The brochure tow rating is not your real
        limit. This guide gives you a repeatable worksheet to size a travel
        trailer to your truck&rsquo;s actual payload and tongue weight, so you
        tow within every rating on the first trip.
      </p>

      <div className="mt-8 rounded-xl bg-yellow-50 p-6">
        <h2 className="text-lg font-bold text-yellow-800">
          The Golden Rule of Right-Sizing
        </h2>
        <p className="mt-2 text-yellow-700">
          Your truck&rsquo;s tow rating tells you what it can pull. Your
          payload capacity tells you what it can carry. The trailer&rsquo;s
          tongue weight is carried, not pulled, and it counts against payload
          before you load a single bag. Size the trailer to the payload budget,
          then confirm the tow rating covers it. Reverse that order and
          you will overload.
        </p>
      </div>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Step 1: Find Your Two Real Numbers
      </h2>
      <p className="mt-3 text-gray-700">
        Open the driver&rsquo;s door and read the yellow tire-and-loading
        information label. It lists your truck&rsquo;s exact GVWR, front and rear
        GAWR, and payload capacity for that specific configuration. Do not use a
        generic brochure number. Also note the maximum tow rating, usually in the
        owner&rsquo;s manual or the same label. These two figures are the ceiling
        for everything that follows.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Step 2: Apply the 80% Rule
      </h2>
      <p className="mt-3 text-gray-700">
        Multiply your maximum tow rating by 0.80. That is the heaviest
        <em> loaded</em> trailer you should ever pull. The buffer absorbs wind,
        grades, emergency maneuvers, and the gap between factory dry weight and
        your real camping weight.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">Truck Class</th>
              <th className="border px-3 py-2 text-left font-semibold">Max Tow</th>
              <th className="border px-3 py-2 text-left font-semibold">Safe Loaded (80%)</th>
              <th className="border px-3 py-2 text-left font-semibold">Typical Trailer</th>
              <th className="border px-3 py-2 text-left font-semibold">Tongue on Payload</th>
            </tr>
          </thead>
          <tbody>
            {TRUCK_CLASS_TABLE.map((row, i) => (
              <tr key={i} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                <td className="border px-3 py-2 font-medium">{row.class}</td>
                <td className="border px-3 py-2">{row.maxTow}</td>
                <td className="border px-3 py-2">{row.safeLoaded80}</td>
                <td className="border px-3 py-2">{row.typicalTrailer}</td>
                <td className="border px-3 py-2">{row.tongueOnPayload}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Step 3: Subtract Tongue Weight From Payload
      </h2>
      <p className="mt-3 text-gray-700">
        Take your truck&rsquo;s payload capacity and subtract, in order: tongue
        weight (12-13% of the trailer&rsquo;s loaded weight), every passenger,
        and all cargo in the bed and cab. If the number is still positive, the
        trailer fits. If it goes negative, the trailer is too big, no matter how
        impressive the tow rating looked.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Worked Example: A Half-Ton Truck
      </h2>
      <p className="mt-3 text-gray-700">
        Here is the full worksheet for a 2024 half-ton with the Max Tow package,
        11,000 lb tow rating, and 2,100 lb payload:
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">Step</th>
              <th className="border px-3 py-2 text-left font-semibold">Value</th>
              <th className="border px-3 py-2 text-left font-semibold">Note</th>
            </tr>
          </thead>
          <tbody>
            {WORKED_EXAMPLE.map((row, i) => (
              <tr key={i} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                <td className="border px-3 py-2 font-medium">{row.step}</td>
                <td className="border px-3 py-2">{row.value}</td>
                <td className="border px-3 py-2 text-gray-500">{row.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 rounded-lg bg-green-50 p-4">
        <p className="text-sm text-green-700">
          <strong>Result:</strong> This half-ton handles a ~8,000 lb loaded
          trailer with 1,140 lbs of payload to spare for the family. Move up to a
          9,000 lb loaded trailer (1,170 lb tongue) and the margin nearly
          disappears. That is the line where this truck stops being the right
          size.
        </p>
      </div>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Step 4: Verify With a Scale
      </h2>
      <p className="mt-3 text-gray-700">
        Math gets you close; a scale gets you certain. Once you own the trailer,
        weigh the loaded combination at a{" "}
        <Link href="/guides/cat-scale-weighing" className="text-brand-600 hover:underline">
          CAT scale
        </Link>{" "}
        to capture truck steer axle, truck drive axle, and trailer axle weights.
        Confirm drive-axle weight plus tongue weight stays under rear GAWR, and
        total truck weight stays under GVWR. This single weigh prevents most
        overload failures.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Red Flags You Bought Too Big
      </h2>
      <ul className="mt-3 list-disc space-y-2 pl-6 text-gray-700">
        <li>Rear of the truck sags visibly even with a weight distribution hitch</li>
        <li>Headlights point at the sky; oncoming drivers flash you</li>
        <li>Tongue weight exceeds 60% of your available payload</li>
        <li>Trailer GVWR is over 80% of your truck&rsquo;s tow rating</li>
        <li>You cannot add a single passenger without exceeding payload</li>
        <li>CAT scale shows rear GAWR or GVWR exceeded</li>
      </ul>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Sizing by Trailer Type
      </h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-gray-200 p-5">
          <h3 className="font-bold text-gray-900">Teardrop / Pop-Up</h3>
          <p className="mt-2 text-sm text-gray-700">
            1,200 to 3,800 lbs loaded. Safe for midsize trucks, SUVs, and even
            crossovers with factory tow ratings. Low tongue weight, usually no
            weight distribution hitch needed.
          </p>
        </div>
        <div className="rounded-xl border border-gray-200 p-5">
          <h3 className="font-bold text-gray-900">Small Travel Trailer (16-20 ft)</h3>
          <p className="mt-2 text-sm text-gray-700">
            3,500 to 5,500 lbs loaded. The sweet spot for midsize trucks and
            smaller SUVs. A weight distribution hitch is recommended above 4,000 lbs.
          </p>
        </div>
        <div className="rounded-xl border border-gray-200 p-5">
          <h3 className="font-bold text-gray-900">Mid Travel Trailer (21-28 ft)</h3>
          <p className="mt-2 text-sm text-gray-700">
            5,500 to 8,500 lbs loaded. Requires a half-ton with the Max Tow
            package and careful payload math. This is where most families
            discover payload is the real limit.
          </p>
        </div>
        <div className="rounded-xl border border-gray-200 p-5">
          <h3 className="font-bold text-gray-900">Large / Fifth Wheel (29+ ft)</h3>
          <p className="mt-2 text-sm text-gray-700">
            8,500 to 18,000+ lbs loaded. Needs a 3/4 ton or one-ton truck. Pin
          weight, not tow rating, governs the match. See our{" "}
            <Link href="/guides/three-quarter-ton-truck-towing" className="text-brand-600 hover:underline">
              3/4 ton guide
            </Link>.
          </p>
        </div>
      </div>

      <div className="mt-10 rounded-2xl bg-brand-600 p-8 text-center text-white">
        <h2 className="text-2xl font-bold">
          Size Your Trailer Before You Buy
        </h2>
        <p className="mt-2 text-brand-100">
          Plug your truck&rsquo;s real numbers into our free calculators and find
          a trailer that fits every rating, not just the brochure.
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
            href="https://www.rvia.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            RV Industry Association (RVIA) Towing Standards
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
        <li>
          <a
            href="https://www.fmcsa.dot.gov/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            Federal Motor Carrier Safety Administration
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
              href="/guides/dry-weight-vs-loaded-weight"
              className="text-brand-600 hover:underline"
            >
              Dry Weight vs Loaded Weight
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
              href="/guides/midsize-truck-rv-towing"
              className="text-brand-600 hover:underline"
            >
              Midsize Truck RV Towing
            </Link>
          </li>
          <li>
            <Link
              href="/guides/best-half-ton-trucks-8000-lbs"
              className="text-brand-600 hover:underline"
            >
              Best Half-Ton Trucks for 8,000 lbs
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
              href="/guides/can-suv-tow-small-travel-trailer"
              className="text-brand-600 hover:underline"
            >
              Can My SUV Tow a Small Travel Trailer?
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
