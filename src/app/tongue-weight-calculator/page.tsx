import type { Metadata } from "next";
import Link from "next/link";
import TongueWeightCalculator from "@/components/calculators/TongueWeightCalculator";
import { DEFAULT_OG_IMAGES } from "@/lib/seo/default-og-image";

export const metadata: Metadata = {
  title: "Tongue Weight Calculator - Find Your Optimal Tongue Weight",
  description:
    "Free tongue weight calculator for RV trailers. Calculate the correct tongue weight (travel trailer) or pin weight (fifth wheel) for safe towing. Too low causes sway, too high overloads your truck.",
  alternates: { canonical: "https://rvtowingcalc.com/tongue-weight-calculator" },
  openGraph: {
    title: "Tongue Weight Calculator - Prevent Trailer Sway",
    description: "Calculate your optimal tongue weight or pin weight. SAE J2807 compliant. Free, no sign-up.",
    url: "https://rvtowingcalc.com/tongue-weight-calculator",
    images: DEFAULT_OG_IMAGES,
  },
};

const FAQS = [
  { q: "What is tongue weight?", a: "Tongue weight is the downward force that the trailer coupler exerts on your truck's hitch ball. For travel trailers (bumper pull), it's called tongue weight. For fifth wheels (gooseneck), it's called pin weight. This weight is transferred from the trailer to your truck and counts against your payload capacity." },
  { q: "What should my tongue weight percentage be?", a: "For travel trailers, the optimal tongue weight is 10-15% of your loaded trailer weight. For fifth wheels, the optimal pin weight is 20-25% of loaded trailer weight. Below 10% (travel trailer) or 18% (fifth wheel) increases sway risk. Above 15% (travel trailer) or 27% (fifth wheel) risks overloading your truck." },
  { q: "What happens if tongue weight is too low?", a: "If your tongue weight is below 10% of your loaded trailer weight, the trailer is prone to sway, which is extremely dangerous. Trailer sway can lead to loss of control, jackknifing, and accidents. To fix this, redistribute cargo to put more weight toward the front of the trailer." },
  { q: "What happens if tongue weight is too high?", a: "Excessive tongue weight overloads your truck's rear axle, reducing steering control and potentially exceeding your payload capacity, GVWR, or hitch receiver rating. It can also cause your front wheels to lift, reducing braking effectiveness. Redistribute cargo toward the rear of the trailer to reduce tongue weight." },
  { q: "How do I measure my actual tongue weight?", a: "The most accurate method is a CAT scale (find one at truck stops). Weigh your truck without the trailer, then with the trailer connected. The difference in your truck's weight is your tongue weight. You can also use a specialized tongue weight scale or a bathroom scale with a lever system for lighter trailers." },
  { q: "Does tongue weight count against payload?", a: "Yes. Tongue weight (or pin weight) is transferred from the trailer to your truck and counts against your payload capacity. A 7,000 lb travel trailer at 13% tongue weight has 910 lbs of tongue weight. That's more than half the payload of many half-ton trucks. Always check payload after calculating tongue weight." },
];

export default function TongueWeightCalculatorPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
      <nav className="mb-4 text-sm text-gray-500">
        <Link href="/" className="hover:text-brand-600">Home</Link>
        <span className="mx-1">/</span>
        <span className="text-gray-900">Tongue Weight Calculator</span>
      </nav>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">Tongue Weight Calculator</h1>
        <p className="mt-3 max-w-3xl text-lg text-gray-600">
          Calculate your optimal tongue weight (travel trailer) or pin weight
          (fifth wheel). Too little causes dangerous trailer sway; too much
          overloads your truck. Find your safe range below.
        </p>
      </div>

      <TongueWeightCalculator />

      <section className="mt-16 space-y-8">
        <div>
          <h2 className="mb-4 text-2xl font-bold text-gray-900">Understanding Tongue Weight</h2>
          <div className="space-y-4 text-gray-600">
            <p>
              Tongue weight is the downward force the trailer exerts on your
              truck&apos;s hitch. It&apos;s a critical safety factor: too little
              and your trailer will sway dangerously; too much and you&apos;ll
              overload your truck&apos;s rear axle, payload, and GVWR.
            </p>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-gray-200 bg-white p-5">
                <h3 className="mb-2 font-bold text-gray-900">Travel Trailer</h3>
                <ul className="text-sm space-y-1">
                  <li>Optimal: 10-15% of loaded weight</li>
                  <li>Below 10%: sway risk (danger)</li>
                  <li>Above 15%: overload risk</li>
                  <li>Typical: 700-1,200 lbs</li>
                </ul>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-5">
                <h3 className="mb-2 font-bold text-gray-900">Fifth Wheel</h3>
                <ul className="text-sm space-y-1">
                  <li>Optimal: 20-25% of loaded weight</li>
                  <li>Below 18%: instability risk</li>
                  <li>Above 27%: overload risk</li>
                  <li>Typical: 1,500-3,000 lbs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="mb-6 text-2xl font-bold text-gray-900">Tongue Weight FAQ</h2>
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

      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "FAQPage",
              mainEntity: FAQS.map((faq) => ({
                "@type": "Question", name: faq.q,
                acceptedAnswer: { "@type": "Answer", text: faq.a },
              })),
            },
            {
              "@type": "WebApplication",
              name: "Tongue Weight Calculator",
              applicationCategory: "UtilityApplication",
              operatingSystem: "Any",
              offers: { "@type": "Offer", "price": "0", priceCurrency: "USD" },
              url: "https://rvtowingcalc.com/tongue-weight-calculator",
              description: "Calculate the correct tongue weight (travel trailer) or pin weight (fifth wheel) for safe towing.",
            },
          ],
        }),
      }} />
    </div>
  );
}
