import type { Metadata } from "next";
import Link from "next/link";
import { FaqJsonLd, ArticleJsonLd } from "@/components/seo/JsonLd";
import { DEFAULT_OG_IMAGES } from "@/lib/seo/default-og-image";

export const metadata: Metadata = {
  title: "GAWR Explained: Gross Axle Weight Rating for RV Towing",
  description:
    "What is GAWR and why it matters for RV towing. Learn how Gross Axle Weight Rating works, how tongue weight loads your rear axle, and how to stay within safe axle limits.",
  alternates: {
    canonical: "https://www.rvtowingcalc.com/guides/gawr-explained",
  },
  openGraph: {
    title: "GAWR Explained: Gross Axle Weight Rating for RV Towing",
    description:
      "Why GAWR is the most overlooked towing limit. Learn how tongue weight loads your rear axle, how to measure axle weights at a CAT scale, and how to fix an overloaded axle.",
    url: "https://www.rvtowingcalc.com/guides/gawr-explained",
    images: DEFAULT_OG_IMAGES,
  },
};

const FAQS = [
  {
    q: "What is the difference between GVWR and GAWR?",
    a: "GVWR (Gross Vehicle Weight Rating) is the maximum total weight of your vehicle including all cargo, passengers, fluids, and tongue weight. GAWR (Gross Axle Weight Rating) is the maximum weight each individual axle can safely carry. Your truck has two GAWR values: one for the front axle (FGAWR) and one for the rear axle (RGAWR). You can be under GVWR but over RGAWR if too much weight sits on the rear axle, which is exactly what happens when tongue weight is excessive.",
  },
  {
    q: "How does tongue weight affect rear axle weight?",
    a: "Tongue weight from a bumper-pull trailer transfers directly onto the tow vehicle's rear axle through the hitch receiver. For every 100 lbs of tongue weight, approximately 85-95 lbs is added to the rear axle. The remaining 5-15 lbs is transferred off the front axle due to leverage. This means a 900 lb tongue weight adds roughly 800 lbs to your rear axle. On a half-ton truck with a 4,000 lb RGAWR, that single load can consume 20% of your rear axle capacity before you add passengers, cargo, or a weight distribution hitch.",
  },
  {
    q: "Where do I find my truck's GAWR?",
    a: "Your truck's GAWR is printed on the yellow Tire and Loading Information label on the driver's side door jamb. It lists FGAWR (Front Gross Axle Weight Rating) and RGAWR (Rear Gross Axle Weight Rating) separately. You can also find it in your owner's manual under the specifications section. Do not confuse GAWR with GVWR or max tow rating. All three are independent limits, and you must stay within all of them simultaneously.",
  },
  {
    q: "Can I exceed GAWR if I am still under GVWR?",
    a: "No. GAWR is an absolute limit for each axle, regardless of your total vehicle weight. Exceeding RGAWR overloads your rear springs, shocks, bearings, and tires. The result is premature wear, unstable handling, reduced braking performance, and increased blowout risk. Insurance companies may deny claims if an accident involves an overloaded axle. Manufacturers can void powertrain warranties for axle overload, even when GVWR is within spec.",
  },
  {
    q: "How do I measure my actual axle weights?",
    a: "The most accurate method is a CAT scale weigh. Drive your fully loaded truck and trailer onto the scale so the front axle is on the first platform, the rear axle on the second, and the trailer axles on the third. The scale ticket shows actual front and rear axle weights. Compare these to your FGAWR and RGAWR. If your rear axle is over RGAWR, reduce tongue weight, redistribute cargo in the trailer, or upgrade to a truck with higher RGAWR.",
  },
  {
    q: "Does a weight distribution hitch help with GAWR?",
    a: "A weight distribution hitch redistributes tongue weight from the rear axle back to the front axle and to the trailer axles. A properly adjusted WDH can shift 200-400 lbs from the rear axle to the front axle, helping you stay within RGAWR. However, a WDH does not reduce total weight. The tongue weight still exists; it is just spread across more axles. If your rear axle is severely overloaded, a WDH alone may not be enough. You may need to reduce trailer cargo or upgrade your tow vehicle.",
  },
];

const AXLE_LIMITS_TABLE = [
  {
    spec: "GVWR",
    meaning: "Total vehicle weight limit (all axles + everything onboard)",
    whereToFind: "Door jamb yellow label, owner's manual",
    whyItMatters: "Prevents total vehicle overload",
  },
  {
    spec: "GAWR (Front)",
    meaning: "Maximum weight the front axle can carry",
    whereToFind: "Door jamb yellow label (FGAWR)",
    whyItMatters: "Ensures steering and braking stability",
  },
  {
    spec: "GAWR (Rear)",
    meaning: "Maximum weight the rear axle can carry",
    whereToFind: "Door jamb yellow label (RGAWR)",
    whyItMatters: "Tongue weight loads this axle directly",
  },
  {
    spec: "GCWR",
    meaning: "Maximum combined weight of truck + trailer + all cargo",
    whereToFind: "Owner's manual, manufacturer towing guide",
    whyItMatters: "Limits total mass the drivetrain can move",
  },
  {
    spec: "Payload",
    meaning: "Max cargo/people/tongue weight the truck can carry",
    whereToFind: "Door jamb yellow label",
    whyItMatters: "Tongue weight + passengers + cargo must fit here",
  },
];

const REAR_AXLE_IMPACT_TABLE = [
  {
    trailerWeight: "4,000 lbs",
    tongueWeightAt12pct: "480 lbs",
    approxRearAxleLoad: "~430 lbs",
    riskLevel: "Low",
  },
  {
    trailerWeight: "6,000 lbs",
    tongueWeightAt12pct: "720 lbs",
    approxRearAxleLoad: "~650 lbs",
    riskLevel: "Low to Moderate",
  },
  {
    trailerWeight: "8,000 lbs",
    tongueWeightAt12pct: "960 lbs",
    approxRearAxleLoad: "~860 lbs",
    riskLevel: "Moderate",
  },
  {
    trailerWeight: "10,000 lbs",
    tongueWeightAt12pct: "1,200 lbs",
    approxRearAxleLoad: "~1,080 lbs",
    riskLevel: "High",
  },
  {
    trailerWeight: "12,000 lbs",
    tongueWeightAt12pct: "1,440 lbs",
    approxRearAxleLoad: "~1,300 lbs",
    riskLevel: "Very High",
  },
];

const HALF_TON_RGAWR_TABLE = [
  {
    truck: "Ford F-150 (varies by trim)",
    rgawr: "3,800 - 4,800 lbs",
    typicalRearCapacityAfterTongue: "~3,000 - 3,900 lbs",
    note: "Heavy-Duty Payload Package raises RGAWR significantly",
  },
  {
    truck: "RAM 1500",
    rgawr: "3,900 - 4,750 lbs",
    typicalRearCapacityAfterTongue: "~3,100 - 3,850 lbs",
    note: "Rear air suspension on some trims helps level but does not raise GAWR",
  },
  {
    truck: "Chevy Silverado 1500 / GMC Sierra 1500",
    rgawr: "3,800 - 4,700 lbs",
    typicalRearCapacityAfterTongue: "~3,000 - 3,800 lbs",
    note: "Max Trailering Package includes upgraded rear springs",
  },
  {
    truck: "Toyota Tundra",
    rgawr: "4,100 - 4,300 lbs",
    typicalRearCapacityAfterTongue: "~3,200 - 3,500 lbs",
    note: "i-FORCE MAX hybrid has high torque but similar RGAWR to gas",
  },
];

export default function GawrExplainedPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
      <ArticleJsonLd
        title="GAWR Explained: Gross Axle Weight Rating for RV Towing"
        description="Learn what GAWR means, how tongue weight loads your rear axle, and how to measure and stay within safe axle weight limits."
        url="https://www.rvtowingcalc.com/guides/gawr-explained"
        datePublished="2026-08-23"
      />
      <FaqJsonLd
        faqs={FAQS}
        baseUrl="https://www.rvtowingcalc.com/guides/gawr-explained"
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
        <span className="text-gray-900">GAWR Explained</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
        GAWR Explained: Gross Axle Weight Rating for RV Towing
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        Most RV owners check GVWR, payload, and tow rating. Almost everyone
        ignores GAWR. That is a mistake that can cost you your suspension, your
        tires, and your safety.
      </p>

      <div className="mt-8 rounded-xl bg-red-50 p-6">
        <h2 className="text-lg font-bold text-red-800">
          The GAWR Blind Spot
        </h2>
        <p className="mt-2 text-red-700">
          You can be legally and technically under GVWR and still overload your
          rear axle by 500+ lbs. Tongue weight from a travel trailer transfers
          almost entirely to the rear axle. If your rear axle rating is 4,000
          lbs and your loaded rear axle weighs 4,600 lbs, you are overloaded
          regardless of what your GVWR sticker says.
        </p>
      </div>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        What Is GAWR?
      </h2>
      <p className="mt-3 text-gray-700">
        GAWR stands for{" "}
        <strong>Gross Axle Weight Rating</strong>. It is the maximum weight each
        axle on your vehicle is engineered to safely carry, as determined by the
        manufacturer. Your truck has two GAWR values:
      </p>
      <ul className="mt-3 list-disc space-y-2 pl-6 text-gray-700">
        <li>
          <strong>FGAWR</strong> — Front Gross Axle Weight Rating
        </li>
        <li>
          <strong>RGAWR</strong> — Rear Gross Axle Weight Rating
        </li>
      </ul>
      <p className="mt-3 text-gray-700">
        GAWR accounts for the axle itself, the springs or air suspension, the
        shocks, wheel bearings, brake components, and tires. When you exceed
        GAWR, you are overloading every one of those components simultaneously.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        GAWR vs. GVWR vs. GCWR vs. Payload
      </h2>
      <p className="mt-3 text-gray-700">
        These four ratings are independent. You must stay within all of them at
        the same time. Being under three limits does not excuse exceeding the
        fourth.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">Spec</th>
              <th className="border px-3 py-2 text-left font-semibold">What It Means</th>
              <th className="border px-3 py-2 text-left font-semibold">Where to Find It</th>
              <th className="border px-3 py-2 text-left font-semibold">Why It Matters</th>
            </tr>
          </thead>
          <tbody>
            {AXLE_LIMITS_TABLE.map((row, i) => (
              <tr key={i} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                <td className="border px-3 py-2 font-medium">{row.spec}</td>
                <td className="border px-3 py-2">{row.meaning}</td>
                <td className="border px-3 py-2">{row.whereToFind}</td>
                <td className="border px-3 py-2">{row.whyItMatters}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        How Tongue Weight Loads Your Rear Axle
      </h2>
      <p className="mt-3 text-gray-700">
        When you hook a bumper-pull travel trailer to your truck, the tongue
        weight pushes down on the hitch receiver. That force travels through the
        frame and applies load to the rear axle. Due to the lever arm between
        the hitch and the axle, roughly 85-95% of tongue weight ends up on the
        rear axle.
      </p>
      <p className="mt-3 text-gray-700">
        The table below shows how tongue weight at 12% of trailer weight
        translates to rear axle load:
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">Trailer Weight</th>
              <th className="border px-3 py-2 text-left font-semibold">Tongue Weight (12%)</th>
              <th className="border px-3 py-2 text-left font-semibold">Approx. Rear Axle Load</th>
              <th className="border px-3 py-2 text-left font-semibold">Risk Level</th>
            </tr>
          </thead>
          <tbody>
            {REAR_AXLE_IMPACT_TABLE.map((row, i) => (
              <tr key={i} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                <td className="border px-3 py-2">{row.trailerWeight}</td>
                <td className="border px-3 py-2">{row.tongueWeightAt12pct}</td>
                <td className="border px-3 py-2">{row.approxRearAxleLoad}</td>
                <td className="border px-3 py-2">
                  <span
                    className={`inline-block rounded-full px-2 py-0.5 text-xs font-medium ${
                      row.riskLevel === "Low"
                        ? "bg-green-100 text-green-800"
                        : row.riskLevel === "Low to Moderate"
                        ? "bg-green-100 text-green-800"
                        : row.riskLevel === "Moderate"
                        ? "bg-yellow-100 text-yellow-800"
                        : row.riskLevel === "High"
                        ? "bg-orange-100 text-orange-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {row.riskLevel}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-4 text-sm text-gray-500">
        Note: Risk levels assume a typical half-ton truck RGAWR of 4,000-4,500
        lbs with two passengers and normal cargo. Actual risk depends on your
        specific truck configuration.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Half-Ton Truck RGAWR Reality
      </h2>
      <p className="mt-3 text-gray-700">
        Not all half-ton trucks have the same rear axle capacity. Trim level,
        engine choice, and option packages can swing RGAWR by 1,000 lbs or more.
        Here is what you are actually working with:
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">Truck</th>
              <th className="border px-3 py-2 text-left font-semibold">RGAWR Range</th>
              <th className="border px-3 py-2 text-left font-semibold">Typical Rear Capacity After Tongue</th>
              <th className="border px-3 py-2 text-left font-semibold">Notes</th>
            </tr>
          </thead>
          <tbody>
            {HALF_TON_RGAWR_TABLE.map((row, i) => (
              <tr key={i} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                <td className="border px-3 py-2 font-medium">{row.truck}</td>
                <td className="border px-3 py-2">{row.rgawr}</td>
                <td className="border px-3 py-2">{row.typicalRearCapacityAfterTongue}</td>
                <td className="border px-3 py-2">{row.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-4 text-gray-700">
        The "typical rear capacity after tongue" column shows how much RGAWR
        remains after a moderate 800 lb tongue weight, before adding passengers,
        cargo, or a WDH. If you carry four adults and bed cargo, that remaining
        margin evaporates quickly.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        How to Measure Your Actual Axle Weights
      </h2>
      <p className="mt-3 text-gray-700">
        The only way to know if you are within GAWR is to weigh your actual
        axles. A CAT scale three-pass weigh gives you exact numbers:
      </p>
      <ol className="mt-3 list-decimal space-y-2 pl-6 text-gray-700">
        <li>
          <strong>Pass 1:</strong> Weigh truck only (front axle on platform 1,
          rear axle on platform 2). Record front and rear axle weights.
        </li>
        <li>
          <strong>Pass 2:</strong> Weigh truck + trailer hooked up but WITH the
          WDH bars disengaged. Record all three axle weights.
        </li>
        <li>
          <strong>Pass 3:</strong> Weigh truck + trailer hooked up WITH the WDH
          bars engaged. Compare rear axle weight to Pass 2 to see how much the
          WDH shifted.
        </li>
      </ol>
      <p className="mt-3 text-gray-700">
        Compare your Pass 3 rear axle weight to your RGAWR. If it is over, you
        need to reduce load. See our{" "}
        <Link
          href="/guides/cat-scale-weighing"
          className="text-brand-600 hover:underline"
        >
          CAT scale weighing guide
        </Link>{" "}
        for the full procedure.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        What Happens When You Exceed RGAWR
      </h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-red-200 bg-red-50 p-4">
          <h3 className="font-bold text-red-800">Mechanical Failures</h3>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-red-700">
            <li>Rear leaf spring sag or breakage</li>
            <li>Shock absorber blowout and loss of damping</li>
            <li>Rear wheel bearing overheating</li>
            <li>Brake rotor warping from excess heat</li>
            <li>Tire blowout from overload</li>
          </ul>
        </div>
        <div className="rounded-xl border border-orange-200 bg-orange-50 p-4">
          <h3 className="font-bold text-orange-800">Handling &amp; Safety</h3>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-orange-700">
            <li>Reduced front axle weight hurts steering response</li>
            <li>Headlight aim rises, blinding oncoming traffic</li>
            <li>Increased stopping distance</li>
            <li>Trailer sway from unlevel truck</li>
            <li>Reduced traction in wet conditions</li>
          </ul>
        </div>
      </div>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        How to Fix an Overloaded Rear Axle
      </h2>
      <p className="mt-3 text-gray-700">
        If your CAT scale ticket shows a rear axle overload, here are your
        options, ranked from easiest to most expensive:
      </p>
      <ol className="mt-3 list-decimal space-y-3 pl-6 text-gray-700">
        <li>
          <strong>Reduce trailer cargo:</strong> Move heavy items to the rear of
          the trailer (behind the axle) to reduce tongue weight. Target 10-12%
          tongue weight instead of 15%.
        </li>
        <li>
          <strong>Travel with empty tanks:</strong> Water, propane, and waste
          tanks add hundreds of pounds near the front of most trailers. Dump and
          travel light, then fill at the campground.
        </li>
        <li>
          <strong>Remove truck bed cargo:</strong> Tools, generators, and heavy
          gear in the truck bed all load the rear axle. Move them to the
          trailer, keeping the 60/40 loading rule in mind.
        </li>
        <li>
          <strong>Adjust or upgrade your WDH:</strong> A properly set WDH can
          shift 200-400 lbs to the front axle. If your current WDH is too light
          for your tongue weight, upgrade to a heavier-rated model.
        </li>
        <li>
          <strong>Upgrade the tow vehicle:</strong> If you are consistently over
          RGAWR, you need a truck with a higher rating. For heavy trailers, a
          3/4-ton truck with 6,000+ lb RGAWR is the safe choice.
        </li>
      </ol>

      <div className="mt-10 rounded-2xl bg-brand-600 p-8 text-center text-white">
        <h2 className="text-2xl font-bold">
          Check Your Numbers Before You Tow
        </h2>
        <p className="mt-2 text-brand-100">
          Run our free towing calculators to verify payload, tongue weight, and
          GVWR in under two minutes.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/payload-calculator"
            className="inline-block rounded-xl bg-white px-6 py-3 text-base font-bold text-brand-700 shadow-lg transition-all hover:bg-brand-50 active:scale-[0.99]"
          >
            Payload Calculator
          </Link>
          <Link
            href="/tongue-weight-calculator"
            className="inline-block rounded-xl bg-brand-700 px-6 py-3 text-base font-bold text-white shadow-lg ring-1 ring-white/30 transition-all hover:bg-brand-800 active:scale-[0.99]"
          >
            Tongue Weight Calculator
          </Link>
        </div>
      </div>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Sources &amp; References
      </h2>
      <ul className="mt-3 list-disc space-y-2 pl-6 text-sm text-gray-600">
        <li>
          <a
            href="https://www.nhtsa.gov/vehicle-safety/tires"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            NHTSA Tire Safety Guidelines
          </a>
        </li>
        <li>
          <a
            href="https://www.rvia.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            RV Industry Association (RVIA) Weight Standards
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
            href="https://www.ford.com/trucks/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            Ford Truck Towing Guides
          </a>
        </li>
        <li>
          <a
            href="https://www.ramtrucks.com/towing-guide.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            RAM Truck Towing Guides
          </a>
        </li>
        <li>
          <a
            href="https://www.catscale.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            CAT Scale Locator &amp; Weighing Procedure
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
              href="/guides/gvwr-vs-gcwr"
              className="text-brand-600 hover:underline"
            >
              GVWR vs GCWR: What&apos;s the Difference?
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
              href="/guides/cat-scale-weighing"
              className="text-brand-600 hover:underline"
            >
              How to Weigh Your RV at a CAT Scale
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
              href="/guides/dry-weight-vs-loaded-weight"
              className="text-brand-600 hover:underline"
            >
              Dry Weight vs Loaded Weight
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
