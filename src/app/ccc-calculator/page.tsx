import type { Metadata } from "next";
import Link from "next/link";
import CccCalculator from "@/components/calculators/CccCalculator";
import { DEFAULT_OG_IMAGES } from "@/lib/seo/default-og-image";

export const metadata: Metadata = {
  title: "RV Cargo Carrying Capacity (CCC) Calculator - How Much Gear Can You Pack?",
  description:
    "Free RV cargo carrying capacity calculator. Enter your trailer's GVWR, dry weight, water, propane, and planned cargo to see if you're over your CCC limit before you overload.",
  alternates: {
    canonical: "https://www.rvtowingcalc.com/ccc-calculator",
  },
  openGraph: {
    title: "Cargo Carrying Capacity (CCC) Calculator for RVs",
    description:
      "Water and propane eat up your cargo capacity fast. Calculate exactly how much gear you can safely pack in your travel trailer.",
    url: "https://www.rvtowingcalc.com/ccc-calculator",
    images: DEFAULT_OG_IMAGES,
  },
};

const FAQS = [
  {
    q: "What is Cargo Carrying Capacity (CCC)?",
    a: "Cargo carrying capacity is the maximum weight of everything you add to a travel trailer after it left the factory: gear, food, clothing, water, and propane. Per the RVIA standard, CCC equals the trailer's GVWR minus the unloaded vehicle weight (UVW), minus the weight of a full fresh water tank, and minus full LP gas. The result is printed on the yellow RVIA weight label inside the trailer.",
  },
  {
    q: "Does CCC include water and propane?",
    a: "Yes — and that's why so many owners overload. Under the RVIA definition, CCC is calculated after subtracting the weight of a full fresh water tank and full LP gas. Water weighs 8.34 lbs per gallon and a 50-gallon tank uses 417 lbs before you pack a single bag. Two 30-lb propane bottles add roughly 60 lbs of fuel.",
  },
  {
    q: "How is CCC different from payload?",
    a: "CCC is a trailer-side number — how much you can load into the travel trailer before exceeding its GVWR. Payload is a truck-side number — how much your truck can carry, including passengers, cargo, and the trailer's tongue weight. Both matter. Exceeding CCC risks trailer tire blowouts; exceeding payload degrades truck braking and steering.",
  },
  {
    q: "What happens if I exceed my CCC?",
    a: "Exceeding CCC means the trailer is over its GVWR, overloading the axles, tires, springs, and frame. Common consequences are trailer tire blowouts, bent axle spindles, accelerated suspension wear, and degraded braking. It can also push tongue weight out of the safe 10-15% range, increasing sway risk.",
  },
  {
    q: "How do I stay under my CCC?",
    a: "1) Travel with a half-full water tank when possible (saves ~200 lbs on a 50-gal tank). 2) Buy firewood and heavy supplies at your destination. 3) Pack only what you need — most RVers carry 50% more than they use. 4) Weigh your loaded trailer at a CAT scale before a long trip.",
  },
];

export default function CccCalculatorPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
      <nav className="mb-4 text-sm text-gray-500">
        <Link href="/" className="hover:text-brand-600">Home</Link>
        <span className="mx-1">/</span>
        <span className="text-gray-900">CCC Calculator</span>
      </nav>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
          Cargo Carrying Capacity Calculator
        </h1>
        <p className="mt-3 max-w-3xl text-lg text-gray-600">
          Water and propane silently eat your cargo capacity. A 50-gallon tank
          alone adds 417 lbs. Enter your trailer&apos;s numbers below to see
          exactly how much gear you can safely pack.
        </p>
      </div>

      <CccCalculator />

      <section className="mt-16 space-y-8">
        <div>
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            Understanding Cargo Carrying Capacity
          </h2>
          <div className="space-y-4 text-gray-600">
            <p>
              Your trailer&apos;s Cargo Carrying Capacity (CCC) is the weight
              budget for everything you add to it: food, clothing, tools,
              firewood, water, and propane. The formula is straightforward:
            </p>
            <div className="rounded-xl bg-gray-50 p-4 text-center font-mono text-lg font-bold text-gray-900">
              CCC = GVWR − UVW
            </div>
            <p>
              But here&apos;s the catch most RV owners miss: the yellow RVIA
              sticker&apos;s CCC number already assumes your water tank is full
              and your propane bottles are full. So when you see &quot;1,500
              lbs CCC,&quot; that&apos;s what&apos;s left <em>after</em> 417
              lbs of water and 60 lbs of propane. Your actual gear budget is
              only 1,500 lbs.
            </p>
            <div className="rounded-xl border-l-4 border-amber-500 bg-amber-50 p-4">
              <p className="font-semibold text-amber-700">The Water Trap</p>
              <p className="mt-1 text-sm text-amber-600">
                A full 50-gallon fresh water tank weighs 417 lbs — roughly the
                same as three adults. If you&apos;re close to your CCC limit,
                travel with a half-full tank and fill up at your destination.
                Most campgrounds have water hookups.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="mb-6 text-2xl font-bold text-gray-900">CCC Calculator FAQ</h2>
          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <details key={idx} className="group rounded-xl border border-gray-200 bg-white p-5">
                <summary className="flex cursor-pointer items-center justify-between font-semibold text-gray-900">
                  {faq.q}
                  <svg className="h-5 w-5 text-gray-400 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "FAQPage",
                mainEntity: FAQS.map((faq) => ({
                  "@type": "Question",
                  name: faq.q,
                  acceptedAnswer: { "@type": "Answer", text: faq.a },
                })),
              },
              {
                "@type": "WebApplication",
                name: "RV Cargo Carrying Capacity Calculator",
                applicationCategory: "UtilityApplication",
                operatingSystem: "Any",
                offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
                url: "https://www.rvtowingcalc.com/ccc-calculator",
                description: "Calculate how much cargo you can safely pack in your RV after accounting for water and propane weight.",
              },
            ],
          }),
        }}
      />
    </div>
  );
}
