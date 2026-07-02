import type { Metadata } from "next";
import Link from "next/link";
import GvwrCalculator from "@/components/calculators/GvwrCalculator";
import { DEFAULT_OG_IMAGES } from "@/lib/seo/default-og-image";

export const metadata: Metadata = {
  title: "GVWR Calculator - Check Your Truck's Gross Vehicle Weight Rating",
  description:
    "Free GVWR calculator for RV towing. Is your loaded truck over its Gross Vehicle Weight Rating? Enter curb weight, passengers, cargo, and tongue weight to check.",
  alternates: { canonical: "https://rvtowingcalc.com/gvwr-calculator" },
  openGraph: {
    title: "GVWR Calculator - Is Your Truck Over Its Weight Rating?",
    description: "Check if your loaded truck weight exceeds the Gross Vehicle Weight Rating. Free, fast, SAE J2807 compliant.",
    url: "https://rvtowingcalc.com/gvwr-calculator",
    images: DEFAULT_OG_IMAGES,
  },
};

const FAQS = [
  { q: "What does GVWR mean?", a: "GVWR stands for Gross Vehicle Weight Rating. It's the maximum safe weight of your fully loaded truck, including the vehicle itself, all passengers, all cargo, and the tongue weight from your trailer. You'll find it on a sticker inside the driver's door jamb." },
  { q: "How is GVWR different from GCWR?", a: "GVWR is the max weight of your truck only. GCWR (Gross Combined Weight Rating) is the max weight of your truck AND trailer combined. You need to check both. It's possible to be under GVWR but over GCWR, or vice versa." },
  { q: "Does tongue weight count toward GVWR?", a: "Yes. Tongue weight (or pin weight for fifth wheels) is transferred from the trailer to your truck's frame and axles. It counts toward both your GVWR and your payload capacity. This is why a heavy trailer can overload your truck even if you're under the tow rating." },
  { q: "What happens if I exceed my GVWR?", a: "Exceeding GVWR can cause tire blowouts, brake failure, suspension damage, steering problems, and increased crash risk. It's also illegal and can result in fines, vehicle impoundment, and insurance claim denial if you're in an accident." },
  { q: "Where do I find my truck's GVWR?", a: "Check the yellow and white sticker on the inside of your driver's door jamb. It lists the GVWR and often the payload capacity. You can also find it in your owner's manual or the manufacturer's towing guide." },
];

export default function GvwrCalculatorPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
      <nav className="mb-4 text-sm text-gray-500">
        <Link href="/" className="hover:text-brand-600">Home</Link>
        <span className="mx-1">/</span>
        <span className="text-gray-900">GVWR Calculator</span>
      </nav>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">GVWR Calculator</h1>
        <p className="mt-3 max-w-3xl text-lg text-gray-600">
          Is your loaded truck over its Gross Vehicle Weight Rating? Enter your
          numbers below to find out. GVWR is the maximum safe weight of your
          truck including passengers, cargo, and tongue weight.
        </p>
      </div>

      <GvwrCalculator />

      <section className="mt-16 space-y-8">
        <div>
          <h2 className="mb-4 text-2xl font-bold text-gray-900">What is GVWR?</h2>
          <div className="space-y-4 text-gray-600">
            <p>
              GVWR (Gross Vehicle Weight Rating) is the maximum safe operating
              weight of your truck as determined by the manufacturer. This
              includes the weight of the vehicle itself (curb weight), plus
              everything you add to it: driver, passengers, cargo, fuel, and
              the tongue weight or pin weight from your trailer.
            </p>
            <p>
              The formula is:{" "}
              <strong className="text-gray-900">
                GVWR = Curb Weight + Payload Capacity
              </strong>
              . Your loaded truck weight should never exceed GVWR. Our
              calculator flags a warning at 90% of GVWR and danger at 100%.
            </p>
            <div className="rounded-xl border-l-4 border-warning-500 bg-warning-50 p-4">
              <p className="text-sm text-warning-700">
                <strong>Important:</strong> GVWR is different from GCWR (Gross
                Combined Weight Rating). GVWR only covers the truck. GCWR covers
                the truck + trailer combined. You need to check both limits
                separately. Use our{" "}
                <Link href="/gcwr-calculator" className="font-semibold underline">
                  GCWR Calculator
                </Link>{" "}
                for the combined check.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="mb-6 text-2xl font-bold text-gray-900">GVWR FAQ</h2>
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
              name: "GVWR Calculator",
              applicationCategory: "UtilityApplication",
              operatingSystem: "Any",
              offers: { "@type": "Offer", "price": "0", priceCurrency: "USD" },
              url: "https://rvtowingcalc.com/gvwr-calculator",
              description: "Check if your loaded truck weight exceeds the Gross Vehicle Weight Rating. Free, SAE J2807 compliant.",
            },
          ],
        }),
      }} />
    </div>
  );
}
