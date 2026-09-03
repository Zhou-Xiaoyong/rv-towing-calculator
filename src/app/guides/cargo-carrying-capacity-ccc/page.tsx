import type { Metadata } from "next";
import Link from "next/link";
import { FaqJsonLd, ArticleJsonLd } from "@/components/seo/JsonLd";
import { DEFAULT_OG_IMAGES } from "@/lib/seo/default-og-image";

export const metadata: Metadata = {
  title:
    "Travel Trailer Cargo Carrying Capacity (CCC): How Much Gear Can You Actually Pack?",
  description:
    "Travel trailer cargo carrying capacity explained: the exact RVIA formula, real CCC numbers by trailer size, water and propane weight, and how to load safely.",
  alternates: {
    canonical: "https://www.rvtowingcalc.com/guides/cargo-carrying-capacity-ccc",
  },
  openGraph: {
    title:
      "Travel Trailer Cargo Carrying Capacity (CCC): How Much Gear Can You Actually Pack?",
    description:
      "The CCC sticker is the most ignored number on your trailer. Learn the RVIA formula, real cargo budgets by trailer size, and how to stay under GVWR.",
    url: "https://www.rvtowingcalc.com/guides/cargo-carrying-capacity-ccc",
    images: DEFAULT_OG_IMAGES,
  },
};

const FAQS = [
  {
    q: "What is cargo carrying capacity (CCC) on a travel trailer?",
    a: "Cargo carrying capacity is the maximum weight of everything you add to a travel trailer after it left the factory: gear, food, clothing, water, propane, and options. Per the RVIA standard, CCC equals the trailer's GVWR minus the unloaded vehicle weight (UVW), minus the weight of a full fresh water tank including the water heater, minus full LP gas. Some manufacturers also subtract the sleeping capacity weight rating (154 lbs per designated sleeping position). The result is printed on the yellow RVIA weight label inside the trailer, usually on a cabinet door or near the entry.",
  },
  {
    q: "How much cargo can a typical travel trailer carry?",
    a: "Most travel trailers offer between 800 and 2,500 lbs of cargo carrying capacity. Small single-axle trailers under 20 feet often land near 700 to 1,200 lbs, mid-size 25 to 30 foot trailers typically 1,200 to 2,000 lbs, and large destination or toy hauler trailers 2,000 to 3,500 lbs. Crucially, those figures already assume full water and propane tanks, which on a 50 gallon fresh tank consumes roughly 415 lbs before you pack a single bag.",
  },
  {
    q: "Does CCC include water and propane?",
    a: "Yes, and that is exactly why so many owners overload. Under the RVIA definition, CCC is calculated after subtracting the weight of a full fresh (potable) water tank including the water heater, and full LP gas. Water weighs 8.3 lbs per gallon and propane about 4.2 lbs per gallon. A 50 gallon fresh tank uses 415 lbs and two 30 lb propane bottles add roughly 60 lbs of fuel, both of which come off your cargo budget. Gray and black tank contents are not subtracted in the sticker calculation but still count against GVWR in the real world.",
  },
  {
    q: "Is cargo carrying capacity the same as payload capacity?",
    a: "No. CCC is a trailer-side number that describes how much you can load into the travel trailer before exceeding its own GVWR. Payload capacity is a tow-vehicle-side number that describes how much weight your truck can carry, including passengers, cargo, and the trailer's tongue weight. Both matter, and exceeding either one is unsafe. Overloading the trailer reduces tongue weight control and risks tire failure; overloading the truck degrades braking and steering.",
  },
  {
    q: "How do I find my trailer's CCC?",
    a: "Look for the yellow RVIA weight label, usually inside a cabinet door, on the back of the entry door, or near the electrical panel. It lists GVWR, UVW, fresh water capacity, and the computed CCC. If the sticker is missing or illegible, you can compute an estimate yourself by subtracting the UVW from the GVWR and then subtracting your water and propane weights. For a definitive number, load the trailer exactly as you would for a trip and weigh it on a certified scale.",
  },
  {
    q: "What happens if I exceed my trailer's CCC?",
    a: "Exceeding CCC means the trailer is over its GVWR, which overloads the axles, tires, springs, and frame. The most common consequences are trailer tire blowouts from overloaded sidewalls, bent or cracked axle spindles, accelerated suspension wear, and degraded braking performance. It also tends to shift actual tongue weight away from the safe 10 to 15 percent range, which increases sway risk. In an accident investigation, an overweight trailer can be cited as a contributing factor, and insurers may contest a claim.",
  },
];

const CCC_BY_TRAILER = [
  {
    class: "Small single-axle (16–20 ft)",
    gvwr: "3,500–5,000 lbs",
    uvw: "2,800–4,000 lbs",
    ccc: "700–1,200 lbs",
    verdict: "Tight: weigh every bag",
  },
  {
    class: "Lightweight couple's trailer (21–24 ft)",
    gvwr: "5,000–6,500 lbs",
    uvw: "4,100–5,300 lbs",
    ccc: "900–1,500 lbs",
    verdict: "Workable for two",
  },
  {
    class: "Family bunkhouse (25–29 ft)",
    gvwr: "6,500–8,500 lbs",
    uvw: "5,300–7,000 lbs",
    ccc: "1,200–2,000 lbs",
    verdict: "Watch water and gear",
  },
  {
    class: "Large travel trailer (30–35 ft)",
    gvwr: "8,500–11,000 lbs",
    uvw: "7,000–9,200 lbs",
    ccc: "1,500–2,500 lbs",
    verdict: "Room, but options eat it",
  },
  {
    class: "Toy hauler / destination (36 ft+)",
    gvwr: "11,000–16,000 lbs",
    uvw: "9,000–13,500 lbs",
    ccc: "2,000–3,500 lbs",
    verdict: "Garage load is the risk",
  },
];

const WATER_WEIGHT = [
  { gallons: "20 gal", fresh: "166 lbs", note: "Small trailer / weekend" },
  { gallons: "30 gal", fresh: "249 lbs", note: "Couples trailer" },
  { gallons: "40 gal", fresh: "332 lbs", note: "Mid bunkhouse" },
  { gallons: "50 gal", fresh: "415 lbs", note: "Most common size" },
  { gallons: "60 gal", fresh: "498 lbs", note: "Large family trailer" },
  { gallons: "75 gal", fresh: "623 lbs", note: "Boondocking packages" },
  { gallons: "100 gal", fresh: "830 lbs", note: "Destination / toy hauler" },
];

const CARGO_BUDGET = [
  { item: "Food & drinks (7-day trip, family of 4)", weight: "90 lbs" },
  { item: "Clothing, bedding, towels", weight: "150 lbs" },
  { item: "Cookware, dishes, small appliances", weight: "70 lbs" },
  { item: "Camp chairs, grill, outdoor mat", weight: "110 lbs" },
  { item: "Tools, spare parts, leveling blocks", weight: "80 lbs" },
  { item: "Bikes on rear rack", weight: "110 lbs" },
  { item: "Portable generator + fuel", weight: "120 lbs" },
  { item: "Electronics, games, books, toys", weight: "60 lbs" },
  { item: "Fresh water (50 gal)", weight: "415 lbs" },
  { item: "Propane (two 30 lb bottles)", weight: "60 lbs" },
];

export default function CargoCarryingCapacityPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
      <ArticleJsonLd
        title="Travel Trailer Cargo Carrying Capacity (CCC): How Much Gear Can You Actually Pack?"
        description="Travel trailer cargo carrying capacity explained: the exact RVIA formula, real CCC numbers by trailer size, water and propane weight, and how to load safely."
        url="https://www.rvtowingcalc.com/guides/cargo-carrying-capacity-ccc"
        datePublished="2026-09-03"
      />
      <FaqJsonLd
        faqs={FAQS}
        baseUrl="https://www.rvtowingcalc.com/guides/cargo-carrying-capacity-ccc"
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
        <span className="text-gray-900">Cargo Carrying Capacity</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
        Travel Trailer Cargo Carrying Capacity (CCC): How Much Gear Can You
        Actually Pack?
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        Every travel trailer has a hard limit on how much you can put inside it,
        and it is printed on a yellow sticker almost nobody reads. That number is
        the Cargo Carrying Capacity (CCC), and it is usually far smaller than
        the storage space suggests. Here is how to find it, calculate it, and
        stay inside it.
      </p>

      <div className="mt-8 rounded-xl bg-yellow-50 p-6">
        <h2 className="text-lg font-bold text-yellow-800">
          Why CCC Is the Number Dealers Skip
        </h2>
        <p className="mt-2 text-yellow-700">
          Sales floors quote dry weight and tow rating because both sound
          generous. CCC is the honest number: it tells you how much real stuff
          you can load before the trailer exceeds its own GVWR. A 28 foot
          bunkhouse with 1,400 lbs of CCC is not an unusually small number — it
          is typical, and a family of four with a full fresh tank can burn
          through it before loading the camp chairs.
        </p>
      </div>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        What Cargo Carrying Capacity Actually Means
      </h2>
      <p className="mt-3 text-gray-700">
        CCC is the weight of everything added to the trailer after it left the
        factory: gear, food, clothing, water, propane, dealer-installed
        accessories, and factory options. It is a trailer-side limit, not a
        truck-side limit. The RV Industry Association standard defines the
        calculation as:
      </p>

      <div className="mt-6 rounded-xl bg-gray-50 p-6">
        <h3 className="font-bold text-gray-900">The RVIA CCC Formula</h3>
        <p className="mt-3 font-mono text-sm text-gray-800">
          CCC = GVWR &minus; UVW &minus; full fresh water (incl. water heater)
          &minus; full LP gas
        </p>
        <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-gray-700">
          <li>
            <strong>GVWR</strong> — the maximum the fully loaded trailer may
            weigh, set by the manufacturer and limited by the axles.
          </li>
          <li>
            <strong>UVW</strong> — unloaded vehicle weight, as built at the
            factory. Excludes cargo, water, propane, and dealer accessories.
          </li>
          <li>
            <strong>Fresh water</strong> — 8.3 lbs per gallon, including the
            water heater contents.
          </li>
          <li>
            <strong>LP gas</strong> — approximately 4.2 lbs per gallon.
          </li>
          <li>
            <strong>SCWR</strong> — some manufacturers also subtract 154 lbs per
            designated sleeping position.
          </li>
        </ul>
      </div>

      <p className="mt-4 text-gray-700">
        Note what is missing from the formula: gray water and black water. They
        are not subtracted on the sticker, but once you have camped for two days
        they are sitting in the tanks and absolutely count against GVWR on the
        road.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Real CCC by Trailer Class
      </h2>
      <p className="mt-3 text-gray-700">
        These are typical ranges across mainstream North American brands. Your
        specific unit will differ based on options, so treat this as a
        screening tool and confirm with the weight label.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">
                Trailer Class
              </th>
              <th className="border px-3 py-2 text-left font-semibold">GVWR</th>
              <th className="border px-3 py-2 text-left font-semibold">UVW</th>
              <th className="border px-3 py-2 text-left font-semibold">
                Typical CCC
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Reality
              </th>
            </tr>
          </thead>
          <tbody>
            {CCC_BY_TRAILER.map((row, i) => (
              <tr key={i} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                <td className="border px-3 py-2 font-medium">{row.class}</td>
                <td className="border px-3 py-2">{row.gvwr}</td>
                <td className="border px-3 py-2">{row.uvw}</td>
                <td className="border px-3 py-2 font-semibold">{row.ccc}</td>
                <td className="border px-3 py-2">{row.verdict}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Water Is the Silent Capacity Killer
      </h2>
      <p className="mt-3 text-gray-700">
        Water weighs 8.3 lbs per gallon, and most owners travel with the fresh
        tank full for boondock flexibility or campground convenience. That
        decision alone can consume a quarter of the entire cargo budget.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">
                Fresh Tank
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Water Weight
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Where You See It
              </th>
            </tr>
          </thead>
          <tbody>
            {WATER_WEIGHT.map((row, i) => (
              <tr key={i} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                <td className="border px-3 py-2 font-medium">{row.gallons}</td>
                <td className="border px-3 py-2">{row.fresh}</td>
                <td className="border px-3 py-2">{row.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 rounded-lg bg-blue-50 p-4">
        <p className="text-sm text-blue-800">
          <strong>Practical tip:</strong> If your route has reliable water at
          the destination, travel with 10 to 15 gallons instead of a full tank.
          On a 50 gallon tank that frees up roughly 290 lbs of cargo budget —
          more than the weight of a generator and a pair of bikes combined.
        </p>
      </div>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Build a Real Cargo Budget
      </h2>
      <p className="mt-3 text-gray-700">
        Here is a realistic load-out for a family of four on a seven-day trip in
        a mid-size bunkhouse trailer. Add your own lines and compare the total
        against your trailer&rsquo;s printed CCC.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">
                Item
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Weight
              </th>
            </tr>
          </thead>
          <tbody>
            {CARGO_BUDGET.map((row, i) => (
              <tr key={i} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                <td className="border px-3 py-2">{row.item}</td>
                <td className="border px-3 py-2 font-medium">{row.weight}</td>
              </tr>
            ))}
            <tr className="bg-gray-100">
              <td className="border px-3 py-2 font-bold">Total</td>
              <td className="border px-3 py-2 font-bold">1,265 lbs</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="mt-4 text-gray-700">
        Against a 1,400 lb CCC that leaves only 135 lbs of margin — and this
        budget does not include the passengers themselves, who ride in the truck
        and land on the truck&rsquo;s payload instead. It also assumes no
        factory options beyond the base UVW. Add a second air conditioner
        (roughly 100 lbs), a residential refrigerator, or a solar package, and
        you are over.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Where the Sticker Lies to You
      </h2>
      <p className="mt-3 text-gray-700">
        The CCC label is computed from the trailer as it was configured at the
        factory. Three things routinely make the real number lower:
      </p>
      <ul className="mt-3 list-disc space-y-2 pl-6 text-gray-700">
        <li>
          <strong>Factory options.</strong> Optional equipment such as a second
          A/C unit, washer/dryer prep, upgraded mattress, or solar package adds
          100 to 400 lbs after the base UVW was measured. None of it appears in
          the sticker&rsquo;s calculation.
        </li>
        <li>
          <strong>Dealer-installed accessories.</strong> Batteries, a TV, a
          power tongue jack, and a bike rack are commonly installed after the
          weight label was printed. Dealers may add a limited amount of weight
          without updating the label.
        </li>
        <li>
          <strong>Battery and propane upgrades.</strong> Swapping two Group 24
          batteries for lithium or adding a second pair changes both the weight
          and the tongue weight distribution.
        </li>
      </ul>
      <p className="mt-3 text-gray-700">
        The only way to know your true number is to load the trailer as you
        would travel and weigh it. Our{" "}
        <Link
          href="/guides/cat-scale-weighing"
          className="text-brand-600 hover:underline"
        >
          CAT scale guide
        </Link>{" "}
        walks through the three-pass method for getting trailer axle weight,
        truck axle weights, and true tongue weight in one visit.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        How CCC Connects to Tongue Weight and Sway
      </h2>
      <p className="mt-3 text-gray-700">
        CCC is not just a tire and axle problem. Where you put that cargo inside
        the trailer determines your tongue weight, and tongue weight determines
        whether the trailer tows straight or sways. Loading heavy items behind
        the trailer axles reduces tongue weight, sometimes below the safe 10
        percent floor, which is a classic cause of high-speed sway.
      </p>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-gray-200 p-5">
          <h3 className="font-bold text-gray-900">Load Forward</h3>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-gray-700">
            <li>Fresh water tank (usually forward of axle)</li>
            <li>Batteries and propane on the A-frame</li>
            <li>Heavy storage tubs in the front passthrough</li>
            <li>Keep 10–15% of trailer weight on the hitch</li>
          </ul>
        </div>
        <div className="rounded-xl border border-gray-200 p-5">
          <h3 className="font-bold text-gray-900">Avoid Aft Loading</h3>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-gray-700">
            <li>Generators and fuel in the rear bumper rack</li>
            <li>Bike racks hanging off the back wall</li>
            <li>Full gray tank at the rear on some floorplans</li>
            <li>Heavy gear stacked in the rear bedroom</li>
          </ul>
        </div>
      </div>
      <p className="mt-4 text-gray-700">
        For the full loading strategy, see our{" "}
        <Link
          href="/guides/trailer-loading-position"
          className="text-brand-600 hover:underline"
        >
          trailer loading position guide
        </Link>
        .
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Safety Checklist: Staying Inside Your CCC
      </h2>
      <ul className="mt-3 list-disc space-y-2 pl-6 text-gray-700">
        <li>
          <strong>Photograph the yellow RVIA weight label</strong> and keep it on
          your phone. Note the GVWR, UVW, and CCC before you shop for gear.
        </li>
        <li>
          <strong>Compute your water weight first.</strong> Gallons &times; 8.3
          lbs. Decide deliberately whether you need to travel with a full tank.
        </li>
        <li>
          <strong>Weigh a representative load-out once.</strong> Load the
          trailer for a real trip, hit a certified scale, and record the trailer
          axle weight. That single number settles the question permanently.
        </li>
        <li>
          <strong>Add options back in.</strong> If your trailer has a second
          A/C, solar, or a generator, subtract their weight from the printed CCC
          before budgeting gear.
        </li>
        <li>
          <strong>Re-check the axle rating, not just GVWR.</strong> A trailer can
          sit under GVWR and still overload one axle. See our{" "}
          <Link href="/guides/gawr-explained" className="text-brand-600 hover:underline">
            GAWR guide
          </Link>{" "}
          for why per-axle limits matter.
        </li>
        <li>
          <strong>Verify tongue weight after loading.</strong> Too little is just
          as dangerous as too much.
        </li>
      </ul>

      <div className="mt-10 rounded-2xl bg-brand-600 p-8 text-center text-white">
        <h2 className="text-2xl font-bold">
          Check Your Trailer Weight Before You Load
        </h2>
        <p className="mt-2 text-brand-100">
          Enter your trailer&rsquo;s GVWR, UVW, and cargo to see whether your
          setup stays inside safe limits — and what it means for tongue weight.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/tongue-weight-calculator"
            className="inline-block rounded-xl bg-white px-6 py-3 text-base font-bold text-brand-700 shadow-lg transition-all hover:bg-brand-50 active:scale-[0.99]"
          >
            Tongue Weight Calculator
          </Link>
          <Link
            href="/gvwr-calculator"
            className="inline-block rounded-xl bg-brand-700 px-6 py-3 text-base font-bold text-white shadow-lg ring-1 ring-white/30 transition-all hover:bg-brand-800 active:scale-[0.99]"
          >
            GVWR Calculator
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
            RV Industry Association (RVIA) — weight label and CCC standard
          </a>
        </li>
        <li>
          <a
            href="https://www.nhtsa.gov/equipment/tires"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            NHTSA — Tire loading and vehicle weight safety
          </a>
        </li>
        <li>
          <a
            href="https://www.rvsef.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            RV Safety &amp; Education Foundation (RVSEF) — weighing programs
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
            href="https://www.sae.org/standards/content/j2807_202206/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            SAE J2807 Tow Rating Standard
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
              href="/guides/cat-scale-weighing"
              className="text-brand-600 hover:underline"
            >
              How to Weigh Your RV at a CAT Scale
            </Link>
          </li>
          <li>
            <Link
              href="/guides/trailer-loading-position"
              className="text-brand-600 hover:underline"
            >
              Trailer Loading Position Guide
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
              href="/guides/travel-trailer-tire-safety"
              className="text-brand-600 hover:underline"
            >
              Travel Trailer Tire Safety
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
        </ul>
      </div>
    </div>
  );
}
