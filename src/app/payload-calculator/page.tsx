import type { Metadata } from "next";
import Link from "next/link";
import PayloadCalculator from "@/components/calculators/PayloadCalculator";
import { DEFAULT_OG_IMAGES } from "@/lib/seo/default-og-image";

export const metadata: Metadata = {
  title: "Payload Calculator for Truck Towing - Check Your Real Payload",
  description:
    "Free payload capacity calculator for RV towing. Most RV owners don't know their payload is exceeded. Enter your passengers, cargo, and tongue weight to check if you're within safe limits.",
  alternates: {
    canonical: "https://rvtowingcalc.com/payload-calculator",
  },
  openGraph: {
    title: "Payload Calculator - Is Your Truck Overloaded?",
    description:
      "Payload is the #1 blind spot for RV owners. Check if passengers, cargo, and tongue weight exceed your truck's payload capacity.",
    url: "https://rvtowingcalc.com/payload-calculator",
    images: DEFAULT_OG_IMAGES,
  },
};

const FAQS = [
  {
    q: "What is payload capacity?",
    a: "Payload capacity is the maximum weight your truck can carry, including passengers, cargo in the truck bed or cabin, and tongue weight (or pin weight for fifth wheels). It's calculated as GVWR minus curb weight. You'll find the official number on the yellow sticker inside your driver's door jamb.",
  },
  {
    q: "How is payload different from towing capacity?",
    a: "Towing capacity is how much weight you can pull behind you. Payload is how much weight you can carry on/in the truck. A truck might have a 12,000 lb tow rating but only 1,500 lbs of payload. Since tongue weight counts against payload, a heavy trailer can exceed your payload limit even when well within your tow rating. This is the most common and dangerous towing mistake.",
  },
  {
    q: "Does tongue weight count against payload?",
    a: "Yes. Tongue weight (for travel trailers) or pin weight (for fifth wheels) is transferred from the trailer to your truck and counts against your payload capacity. A travel trailer with 8,000 lbs loaded weight has approximately 1,040 lbs of tongue weight (at 13%). That's a significant chunk of a half-ton truck's 1,500-2,000 lb payload.",
  },
  {
    q: "How do I increase my payload capacity?",
    a: "You can't increase your truck's official payload rating, it's set by the manufacturer. But you can: 1) Remove unnecessary cargo from the truck, 2) Use a weight distribution hitch to spread tongue weight across all axles, 3) Travel with fewer passengers, 4) Tow with an empty truck bed, or 5) Upgrade to a truck with higher payload (3/4-ton or 1-ton).",
  },
  {
    q: "What happens if I exceed my payload capacity?",
    a: "Exceeding payload can cause: tire blowouts, brake failure, suspension damage, loss of steering control, and trailer sway. It's also illegal in many states and can result in fines. If you're in an accident while overloaded, your insurance company may deny your claim. Always stay within your payload limit.",
  },
];

export default function PayloadCalculatorPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
      <nav className="mb-4 text-sm text-gray-500">
        <Link href="/" className="hover:text-brand-600">Home</Link>
        <span className="mx-1">/</span>
        <span className="text-gray-900">Payload Calculator</span>
      </nav>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
          Payload Calculator
        </h1>
        <p className="mt-3 max-w-3xl text-lg text-gray-600">
          Payload is the #1 blind spot for RV owners. Most people check towing
          capacity and miss that their truck is overloaded. Enter your numbers
          below to find out if your payload is safe.
        </p>
      </div>

      <PayloadCalculator />

      {/* Educational content */}
      <section className="mt-16 space-y-8">
        <div>
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            Understanding Payload Capacity
          </h2>
          <div className="space-y-4 text-gray-600">
            <p>
              Payload capacity is the maximum weight your truck can safely
              carry. This includes everything inside and on the truck: driver,
              passengers, cargo, tools, firewood, coolers, and crucially, the
              tongue weight or pin weight from your trailer.
            </p>
            <p>
              The formula is simple:{" "}
              <strong className="text-gray-900">
                Payload Capacity = GVWR - Curb Weight
              </strong>
              . But the mistake most RV owners make is forgetting that tongue
              weight counts against payload. A 7,000 lb travel trailer has
              roughly 910 lbs of tongue weight (at 13%). Add four passengers
              (700 lbs) and some firewood (300 lbs), and you&apos;ve used 1,910
              lbs of payload, which exceeds many half-ton trucks.
            </p>
            <div className="rounded-xl border-l-4 border-danger-500 bg-danger-50 p-4">
              <p className="font-semibold text-danger-700">
                The Dealer&apos;s Dirty Secret
              </p>
              <p className="mt-1 text-sm text-danger-600">
                Salespeople love to quote towing capacity (&quot;This F-150 can
                tow 13,000 lbs!&quot;) but rarely mention payload. They&apos;ll
                show you a trailer&apos;s dry weight and say it&apos;s fine.
                But by the time you add water, propane, and gear, that
                &quot;6,000 lb&quot; trailer weighs 9,000 lbs with 1,170 lbs of
                tongue weight. Check payload yourself, don&apos;t trust the
                dealer.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div>
          <h2 className="mb-6 text-2xl font-bold text-gray-900">
            Payload Calculator FAQ
          </h2>
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
                name: "Payload Capacity Calculator",
                applicationCategory: "UtilityApplication",
                operatingSystem: "Any",
                offers: { "@type": "Offer", "price": "0", priceCurrency: "USD" },
                url: "https://rvtowingcalc.com/payload-calculator",
                description: "Calculate your truck's remaining payload capacity for RV towing. Enter passengers, cargo, and tongue weight to check if you're within safe limits.",
              },
            ],
          }),
        }}
      />
    </div>
  );
}
