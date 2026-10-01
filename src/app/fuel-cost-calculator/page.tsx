import type { Metadata } from "next";
import Link from "next/link";
import FuelCostCalculator from "@/components/calculators/FuelCostCalculator";
import { DEFAULT_OG_IMAGES } from "@/lib/seo/default-og-image";

export const metadata: Metadata = {
  title: "Towing Fuel Cost Calculator - RV Trip Gas Budget",
  description:
    "Free towing fuel cost calculator. Enter your trip distance, truck MPG, and fuel price to estimate how much gas your RV trip will cost with and without the trailer.",
  alternates: {
    canonical: "https://www.rvtowingcalc.com/fuel-cost-calculator",
  },
  openGraph: {
    title: "Towing Fuel Cost Calculator for RV Trips",
    description:
      "Towing cuts your MPG by 25-50%. Calculate exactly how much extra fuel your RV trip will cost and how to save on gas.",
    url: "https://www.rvtowingcalc.com/fuel-cost-calculator",
    images: DEFAULT_OG_IMAGES,
  },
};

const FAQS = [
  {
    q: "How much does towing a trailer reduce MPG?",
    a: "Towing a travel trailer typically reduces fuel economy by 25-40%. A truck that gets 18 MPG empty might get 11-14 MPG towing. The exact drop depends on trailer weight, aerodynamics, speed, terrain, and wind. Fifth wheels and large trailers cause bigger drops than small lightweight trailers.",
  },
  {
    q: "What is the most fuel-efficient speed for towing?",
    a: "55-60 mph is the sweet spot for towing fuel economy. Every 5 mph above 60 mph costs you roughly 1 MPG. Aerodynamic drag increases exponentially with speed, so slowing down is the single biggest thing you can do to save fuel while towing.",
  },
  {
    q: "Does a weight distribution hitch improve MPG?",
    a: "Not directly. A weight distribution hitch (WDH) redistributes tongue weight across all axles for better handling and braking, but it doesn't change aerodynamics or reduce fuel consumption. However, by keeping the trailer level, a WDH can prevent poor aerodynamic angles that would otherwise hurt MPG.",
  },
  {
    q: "How can I improve my towing MPG?",
    a: "1) Slow down — 60 mph saves significantly over 70. 2) Keep tires properly inflated (truck and trailer). 3) Pack light — every 100 lbs costs 1-2% MPG. 4) Use tow/haul mode to avoid excessive downshifting. 5) Plan routes with fewer steep grades. 6) Keep windows closed at highway speed to reduce drag.",
  },
  {
    q: "Does diesel get better MPG than gas when towing?",
    a: "Yes. Diesel engines produce more torque at low RPM, which is ideal for towing. A diesel truck typically gets 2-4 MPG better than a comparable gas truck when towing, and the gap widens with heavier loads. However, diesel fuel costs more per gallon, so calculate the actual cost difference before choosing.",
  },
];

export default function FuelCostCalculatorPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
      <nav className="mb-4 text-sm text-gray-500">
        <Link href="/" className="hover:text-brand-600">Home</Link>
        <span className="mx-1">/</span>
        <span className="text-gray-900">Fuel Cost Calculator</span>
      </nav>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
          Towing Fuel Cost Calculator
        </h1>
        <p className="mt-3 max-w-3xl text-lg text-gray-600">
          Towing cuts your truck&apos;s MPG by 25-50%. Budget your trip
          correctly by calculating the real fuel cost with and without your
          trailer attached.
        </p>
      </div>

      <FuelCostCalculator />

      <section className="mt-16 space-y-8">
        <div>
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            Why Towing Kills Your MPG
          </h2>
          <div className="space-y-4 text-gray-600">
            <p>
              A truck that gets 18 MPG on the highway might only get 11 MPG
              towing a travel trailer. That&apos;s a 39% drop — and it hits
              your wallet hard on a long trip. The three biggest factors are
              aerodynamic drag, weight, and rolling resistance.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-200 text-left text-xs uppercase text-gray-500">
                    <th className="pb-2 pr-4">Setup</th>
                    <th className="pb-2 pr-4">Typical MPG</th>
                    <th className="pb-2 pr-4">500-mi Fuel</th>
                    <th className="pb-2 pr-4">Cost @ $3.89/gal</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="py-2 pr-4 font-medium text-gray-700">Empty truck</td>
                    <td className="py-2 pr-4">18 MPG</td>
                    <td className="py-2 pr-4">27.8 gal</td>
                    <td className="py-2 pr-4">$108.19</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-medium text-gray-700">Small trailer</td>
                    <td className="py-2 pr-4">14 MPG (−22%)</td>
                    <td className="py-2 pr-4">35.7 gal</td>
                    <td className="py-2 pr-4">$138.87</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-medium text-gray-700">Large trailer</td>
                    <td className="py-2 pr-4">11 MPG (−39%)</td>
                    <td className="py-2 pr-4">45.5 gal</td>
                    <td className="py-2 pr-4">$176.99</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500">
              Example figures for illustration. Your actual MPG depends on
              truck, trailer, speed, terrain, and weather.
            </p>
          </div>
        </div>

        <div>
          <h2 className="mb-6 text-2xl font-bold text-gray-900">Towing Fuel Cost FAQ</h2>
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
                name: "Towing Fuel Cost Calculator",
                applicationCategory: "FinanceApplication",
                operatingSystem: "Any",
                offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
                url: "https://www.rvtowingcalc.com/fuel-cost-calculator",
                description: "Estimate fuel cost for an RV towing trip by comparing MPG with and without the trailer.",
              },
            ],
          }),
        }}
      />
    </div>
  );
}
