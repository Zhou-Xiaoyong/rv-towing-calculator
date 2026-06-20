import type { Metadata } from "next";
import Link from "next/link";
import GcwrCalculator from "@/components/calculators/GcwrCalculator";
import { DEFAULT_OG_IMAGES } from "@/lib/seo/default-og-image";

export const metadata: Metadata = {
  title: "GCWR Calculator - Check Your Gross Combined Weight Rating",
  description:
    "Free GCWR calculator for RV towing. Is your combined truck + trailer weight over the Gross Combined Weight Rating? Check your total combined load against the manufacturer's limit.",
  alternates: { canonical: "https://rvtowingcalc.com/gcwr-calculator" },
  openGraph: {
    title: "GCWR Calculator - Is Your Combined Weight Safe?",
    description: "Check if your truck + trailer combined weight exceeds the GCWR. Free, SAE J2807 compliant.",
    url: "https://rvtowingcalc.com/gcwr-calculator",
    images: DEFAULT_OG_IMAGES,
  },
};

const FAQS = [
  { q: "What does GCWR mean?", a: "GCWR stands for Gross Combined Weight Rating. It's the maximum safe combined weight of your truck and everything it's towing, including all passengers, cargo, and the fully loaded trailer. Exceeding GCWR strains your engine, transmission, and braking system." },
  { q: "How is GCWR different from tow rating?", a: "Tow rating (max tow capacity) is the maximum trailer weight your truck can pull. GCWR is the maximum combined weight of truck + trailer. Your actual towing capacity is limited by: GCWR minus your loaded truck weight. For example, if your GCWR is 17,100 lbs and your loaded truck weighs 7,500 lbs, your actual safe tow capacity is 9,600 lbs, not the advertised 13,000 lbs." },
  { q: "How is GCWR different from GVWR?", a: "GVWR is the max weight of your truck only. GCWR is the max weight of your truck plus trailer combined. You need to check both. You could be under GVWR (truck isn't overloaded) but over GCWR (truck + trailer together exceed the combined limit)." },
  { q: "Where do I find my truck's GCWR?", a: "GCWR is typically found in your owner's manual or the manufacturer's towing guide. It's not always on the door jamb sticker like GVWR. You can also search for '[Your Vehicle Year/Make/Model] towing guide' to find the GCWR for your specific trim, engine, and axle ratio." },
  { q: "Does GCWR include tongue weight twice?", a: "No. The combined weight is the total weight on the ground: curb weight + passengers + cargo in truck + loaded trailer weight. The tongue weight is part of the loaded trailer weight and is also transferred to the truck, but it doesn't add extra weight to the system. It's just distributed differently between the truck and trailer axles." },
];

export default function GcwrCalculatorPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
      <nav className="mb-4 text-sm text-gray-500">
        <Link href="/" className="hover:text-brand-600">Home</Link>
        <span className="mx-1">/</span>
        <span className="text-gray-900">GCWR Calculator</span>
      </nav>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">GCWR Calculator</h1>
        <p className="mt-3 max-w-3xl text-lg text-gray-600">
          Is your combined truck + trailer weight over the Gross Combined Weight
          Rating? Enter your numbers below to check. Exceeding GCWR strains
          your engine, transmission, and brakes.
        </p>
      </div>

      <GcwrCalculator />

      <section className="mt-16 space-y-8">
        <div>
          <h2 className="mb-4 text-2xl font-bold text-gray-900">Understanding GCWR</h2>
          <div className="space-y-4 text-gray-600">
            <p>
              GCWR (Gross Combined Weight Rating) is the maximum safe combined
              weight of your truck and trailer as determined by the
              manufacturer. It includes the weight of everything: the truck,
              all passengers, all cargo, and the fully loaded trailer.
            </p>
            <p>
              The critical insight many RV owners miss:{" "}
              <strong className="text-gray-900">
                your actual towing capacity is GCWR minus your loaded truck
                weight
              </strong>
              , not the advertised tow rating. If your GCWR is 17,100 lbs and
              your loaded truck weighs 7,500 lbs, your real towing capacity is
              9,600 lbs, not the 13,000 lbs on the brochure.
            </p>
            <div className="rounded-xl border-l-4 border-brand-500 bg-brand-50 p-4">
              <p className="text-sm text-brand-700">
                <strong>Pro Tip:</strong> Always check both GVWR and GCWR. Use
                our{" "}
                <Link href="/gvwr-calculator" className="font-semibold underline">
                  GVWR Calculator
                </Link>{" "}
                to check your truck weight, then come back here for the
                combined check. Or use the{" "}
                <Link href="/towing-capacity-calculator" className="font-semibold underline">
                  full Towing Capacity Calculator
                </Link>{" "}
                to check everything at once.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="mb-6 text-2xl font-bold text-gray-900">GCWR FAQ</h2>
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
          "@type": "FAQPage",
          mainEntity: FAQS.map((faq) => ({
            "@type": "Question", name: faq.q,
            acceptedAnswer: { "@type": "Answer", text: faq.a },
          })),
        }),
      }} />
    </div>
  );
}
