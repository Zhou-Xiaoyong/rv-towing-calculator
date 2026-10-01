import type { Metadata } from "next";
import Link from "next/link";
import WaterWeightCalculator from "@/components/calculators/WaterWeightCalculator";
import { DEFAULT_OG_IMAGES } from "@/lib/seo/default-og-image";

export const metadata: Metadata = {
  title: "RV Water Weight Calculator - Gallons to Pounds",
  description:
    "Free water weight calculator for RV owners. Convert gallons to pounds instantly and see how much your fresh water tank adds to your cargo and tongue weight.",
  alternates: {
    canonical: "https://www.rvtowingcalc.com/water-weight-calculator",
  },
  openGraph: {
    title: "Water Weight Calculator for RVs - Gallons to Pounds",
    description:
      "Water is the heaviest thing most RVers carry. Convert gallons to pounds and see exactly how much your fresh water tank costs you in payload and tongue weight.",
    url: "https://www.rvtowingcalc.com/water-weight-calculator",
    images: DEFAULT_OG_IMAGES,
  },
};

const FAQS = [
  {
    q: "How much does a gallon of water weigh?",
    a: "One US gallon of water weighs 8.34 lbs (3.78 kg). This is the standard weight at room temperature. A 50-gallon RV fresh water tank therefore weighs approximately 417 lbs when full — roughly the weight of three average adults.",
  },
  {
    q: "Does water weight count against my CCC?",
    a: "Yes. The yellow RVIA CCC sticker already assumes a full water tank, so if your sticker says 1,500 lbs CCC, that includes the full water weight. But in the real world, the water you carry still adds to your trailer's total weight and counts against GVWR. Traveling with a half-full tank saves roughly 200 lbs.",
  },
  {
    q: "How does water affect tongue weight?",
    a: "Where your fresh water tank is located determines its impact on tongue weight. If the tank is in the front of the trailer (near the hitch), full water increases tongue weight. If it's in the rear, it decreases tongue weight. Most travel trailers have the fresh tank in the middle or rear, so water weight has a relatively neutral effect on tongue weight.",
  },
  {
    q: "Should I tow with a full water tank?",
    a: "Generally no. Water is heavy and most campgrounds have water hookups. Fill up when you arrive, not before you leave home. Towing with a full 50-gallon tank adds 417 lbs to your trailer — that's 54 lbs of tongue weight (at 13%) that counts against your truck's payload. The only exception is if you're boondocking with no water source at your destination.",
  },
  {
    q: "How much do gray and black water tanks weigh?",
    a: "Gray water (sinks, shower) and black water (toilet) weigh the same as fresh water: 8.34 lbs per gallon. A 30-gallon gray tank full adds 250 lbs, and a 30-gallon black tank adds another 250 lbs. That's 500 lbs of wastewater that many RVers forget about when calculating loaded weight. Always dump before a long tow.",
  },
];

export default function WaterWeightCalculatorPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
      <nav className="mb-4 text-sm text-gray-500">
        <Link href="/" className="hover:text-brand-600">Home</Link>
        <span className="mx-1">/</span>
        <span className="text-gray-900">Water Weight Calculator</span>
      </nav>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
          Water Weight Calculator
        </h1>
        <p className="mt-3 max-w-3xl text-lg text-gray-600">
          Water is the heaviest thing most RVers carry. A full 50-gallon tank
          adds 417 lbs — that&apos;s three adults worth of weight. Convert
          gallons to pounds and see the real impact on your cargo and payload.
        </p>
      </div>

      <WaterWeightCalculator />

      <section className="mt-16 space-y-8">
        <div>
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            Why Water Weight Matters for Towing
          </h2>
          <div className="space-y-4 text-gray-600">
            <p>
              Every gallon of water you tow weighs 8.34 lbs. That might not
              sound like much, but it adds up fast. A typical 50-gallon fresh
              water tank weighs 417 lbs when full. Add a 30-gallon gray tank
              (250 lbs) and a 30-gallon black tank (250 lbs), and you&apos;re
              carrying 917 lbs of water alone — before food, clothing, or
              tools.
            </p>
            <div className="rounded-xl border-l-4 border-blue-500 bg-blue-50 p-4">
              <p className="font-semibold text-blue-700">The 417-lb Secret</p>
              <p className="mt-1 text-sm text-blue-600">
                A full 50-gallon fresh water tank weighs 417 lbs. That&apos;s
                more than most families pack in food and clothing combined.
                If you&apos;re close to your payload or CCC limit, draining
                your water tank before towing is the single easiest way to
                lose weight.
              </p>
            </div>
            <p>
              Water weight also counts against your truck&apos;s payload
              capacity via tongue weight. A 417-lb full water tank in the
              middle of your trailer adds roughly 54 lbs of tongue weight
              (at 13%), which comes directly off your available payload.
            </p>
          </div>
        </div>

        <div>
          <h2 className="mb-6 text-2xl font-bold text-gray-900">Water Weight FAQ</h2>
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
                name: "RV Water Weight Calculator",
                applicationCategory: "UtilityApplication",
                operatingSystem: "Any",
                offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
                url: "https://www.rvtowingcalc.com/water-weight-calculator",
                description: "Convert gallons of water to pounds and see the impact on RV cargo capacity and tongue weight.",
              },
            ],
          }),
        }}
      />
    </div>
  );
}
