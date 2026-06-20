import type { Metadata } from "next";
import Link from "next/link";
import { FaqJsonLd, ArticleJsonLd } from "@/components/seo/JsonLd";
import { DEFAULT_OG_IMAGES } from "@/lib/seo/default-og-image";

export const metadata: Metadata = {
  title: "Tongue Weight Guide: Optimal Ranges & Sway Prevention",
  description:
    "Complete guide to tongue weight and pin weight. Learn optimal percentages for travel trailers and fifth wheels, how to measure tongue weight, and how improper tongue weight causes trailer sway.",
  alternates: {
    canonical: "https://rvtowingcalc.com/guides/tongue-weight",
  },
  openGraph: {
    title: "Tongue Weight Guide: Optimal Ranges & Sway Prevention",
    description:
      "Learn optimal tongue weight percentages, how to measure tongue weight, and how it affects trailer sway and payload.",
    url: "https://rvtowingcalc.com/guides/tongue-weight",
    images: DEFAULT_OG_IMAGES,
  },
};

const FAQS = [
  {
    q: "What is tongue weight?",
    a: "Tongue weight is the downward force that a travel trailer exerts on the hitch ball of your tow vehicle. For fifth wheels, the equivalent is called pin weight, which is the downward force exerted on the fifth wheel hitch in the truck bed. Tongue weight is typically 10-15% of the loaded trailer weight for travel trailers, and pin weight is typically 20-25% for fifth wheels. This weight counts toward your vehicle's payload capacity and GVWR.",
  },
  {
    q: "What should my tongue weight percentage be?",
    a: "For travel trailers, the optimal tongue weight is 10-15% of the loaded trailer weight. We use 13% as a default midpoint. Below 10% increases the risk of trailer sway; above 15% unnecessarily loads your truck. For fifth wheels, the optimal pin weight is 20-25% of the loaded trailer weight. We use 22% as a default. Below 18% can cause instability; above 27% overloads the truck. Our calculator uses these ranges to flag safe, warning, and danger conditions.",
  },
  {
    q: "Can too little tongue weight cause trailer sway?",
    a: "Yes. Too little tongue weight is one of the leading causes of trailer sway. When tongue weight is below 10% for travel trailers, the trailer becomes dynamically unstable. Forces from wind, passing trucks, or road imperfections can cause the trailer to oscillate side-to-side with increasing amplitude. This is extremely dangerous and can lead to loss of control. If you experience sway, the first thing to check is your tongue weight percentage.",
  },
  {
    q: "How do I measure my actual tongue weight?",
    a: "There are three common methods: (1) Use a tongue weight scale (a purpose-built scale that sits under the jack, $50-150). (2) Use a bathroom scale with a lever arrangement for lighter tongues (under 500 lbs). (3) Weigh at a CAT scale: weigh the truck with and without the trailer connected, and the difference in rear axle weight is approximately your tongue weight. Method 3 is the most accurate but requires two passes.",
  },
  {
    q: "Does tongue weight count toward payload?",
    a: "Yes, absolutely. Tongue weight (or pin weight for fifth wheels) is weight carried by your vehicle, so it counts toward your payload capacity and GVWR. This is why payload is the #1 towing blind spot. A 10,000 lb travel trailer with 13% tongue weight puts 1,300 lbs on your hitch. Add passengers and cargo, and you can easily exceed a half-ton truck's payload capacity even though you are well under its tow rating.",
  },
  {
    q: "How do I adjust my tongue weight?",
    a: "To increase tongue weight, shift cargo forward in the trailer (toward the hitch). To decrease tongue weight, shift cargo rearward. However, never go below 10% for travel trailers or 18% for fifth wheels. Always re-weigh after adjusting cargo distribution. A weight distribution hitch can help distribute the tongue weight across all axles but does not change the total tongue weight or its effect on payload.",
  },
];

export default function TongueWeightGuidePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <FaqJsonLd
        faqs={FAQS}
        baseUrl="https://rvtowingcalc.com/guides/tongue-weight"
      />
      <ArticleJsonLd
        title="Tongue Weight Guide: Optimal Ranges & Sway Prevention"
        description="Learn optimal tongue weight percentages, how to measure tongue weight, and how it affects trailer sway and payload."
        url="https://rvtowingcalc.com/guides/tongue-weight"
        datePublished="2026-06-20"
      />

      <nav className="mb-4 text-sm text-gray-500">
        <Link href="/" className="hover:text-brand-600">
          Home
        </Link>
        <span className="mx-1">/</span>
        <span className="text-gray-900">Tongue Weight Guide</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
        Tongue Weight Guide: Optimal Ranges &amp; Sway Prevention
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        Tongue weight is the hidden force that connects your trailer to your
        truck. Get it right, and your rig tows smoothly and safely. Get it
        wrong, and you risk trailer sway, loss of control, and overloading your
        tow vehicle.
      </p>

      {/* What is tongue weight */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          What Is Tongue Weight?
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            Tongue weight is the downward force that a{" "}
            <strong>travel trailer</strong> exerts on the hitch ball of your
            tow vehicle. For <strong>fifth wheels</strong>, the equivalent is
            called <strong>pin weight</strong>&mdash;the downward force exerted
            on the fifth wheel hitch in the truck bed.
          </p>
          <p>
            In both cases, this weight is carried by your vehicle. It counts
            toward your payload capacity and GVWR. It is not extra weight; it
            is a portion of the trailer&apos;s total weight that rests on the
            tow vehicle rather than on the trailer&apos;s own axles.
          </p>
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
            <p className="text-sm">
              <strong className="text-gray-900">Key relationship:</strong>{" "}
              <code className="rounded bg-white px-1 py-0.5">
                Loaded Trailer Weight = Tongue Weight + Trailer Axle Weight
              </code>
            </p>
            <p className="mt-2 text-sm">
              The trailer axles carry the rest. If your loaded trailer weighs
              8,000 lbs and your tongue weight is 1,040 lbs (13%), the trailer
              axles carry 6,960 lbs.
            </p>
          </div>
        </div>
      </section>

      {/* Optimal ranges */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          Optimal Tongue Weight Percentages
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            The right tongue weight percentage depends on your trailer type:
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border-2 border-brand-200 p-5">
              <h3 className="font-semibold text-brand-700">
                Travel Trailers
              </h3>
              <div className="mt-3 space-y-2 text-sm">
                <p>
                  <span className="font-semibold text-safe-600">Optimal:</span>{" "}
                  10&ndash;15% of loaded trailer weight
                </p>
                <p>
                  <span className="font-semibold text-warning-600">Acceptable:</span>{" "}
                  10% floor, up to 17%
                </p>
                <p>
                  <span className="font-semibold text-danger-600">Danger:</span>{" "}
                  Below 10% (sway risk) or above 17% (overload)
                </p>
                <p className="pt-2 border-t border-gray-200">
                  <span className="font-semibold">Our default:</span> 13%
                  (midpoint of optimal range)
                </p>
              </div>
            </div>
            <div className="rounded-xl border-2 border-brand-200 p-5">
              <h3 className="font-semibold text-brand-700">
                Fifth Wheels
              </h3>
              <div className="mt-3 space-y-2 text-sm">
                <p>
                  <span className="font-semibold text-safe-600">Optimal:</span>{" "}
                  20&ndash;25% of loaded trailer weight
                </p>
                <p>
                  <span className="font-semibold text-warning-600">Acceptable:</span>{" "}
                  18&ndash;20% or 25&ndash;27%
                </p>
                <p>
                  <span className="font-semibold text-danger-600">Danger:</span>{" "}
                  Below 18% (instability) or above 27% (overload)
                </p>
                <p className="pt-2 border-t border-gray-200">
                  <span className="font-semibold">Our default:</span> 22%
                  (midpoint of optimal range)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why percentages matter */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          Why the Percentage Matters
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border-l-4 border-danger-500 bg-danger-50 p-5">
              <h3 className="font-semibold text-danger-700">
                Too Little Tongue Weight
              </h3>
              <p className="mt-2 text-sm text-danger-700">
                When tongue weight is below 10% (travel trailer) or 18% (fifth
                wheel), the trailer becomes dynamically unstable. The hitch
                acts as a pivot point, and forces from wind, passing trucks, or
                road imperfections can cause the trailer to sway side-to-side
                with increasing amplitude. This is the leading cause of trailer
                sway accidents.
              </p>
            </div>
            <div className="rounded-xl border-l-4 border-warning-500 bg-warning-50 p-5">
              <h3 className="font-semibold text-warning-700">
                Too Much Tongue Weight
              </h3>
              <p className="mt-2 text-sm text-warning-700">
                When tongue weight is above 17% (travel trailer) or 27% (fifth
                wheel), you are overloading the rear of your tow vehicle. This
                can exceed your payload capacity, GVWR, rear axle rating, or
                hitch receiver rating. Symptoms include sagging rear
                suspension, headlights pointing up, reduced steering control,
                and tire overload.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tongue weight and sway */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          Tongue Weight and Trailer Sway
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            Trailer sway is one of the most terrifying experiences a tower can
            have. The trailer begins oscillating side-to-side behind the tow
            vehicle, and if uncorrected, the oscillation can grow until the
            trailer swings the truck off the road or into oncoming traffic.
          </p>
          <p>
            The physics behind sway are straightforward: the hitch is a pivot
            point. If there is not enough downward force (tongue weight) on
            that pivot, the trailer is free to move side-to-side. Think of it
            like pushing a shopping cart with a light front end&mdash;it wants
            to wander.
          </p>
          <p>
            Low tongue weight is the primary cause of sway, but other factors
            contribute:
          </p>
          <ul className="ml-6 list-disc space-y-2">
            <li>
              <strong>Improper loading:</strong> Heavy items placed behind the
              trailer axles reduce tongue weight
            </li>
            <li>
              <strong>Crosswinds:</strong> Large trailers have significant
              side surface area
            </li>
            <li>
              <strong>Passing trucks:</strong> The bow wave from a semi can
              initiate sway
            </li>
            <li>
              <strong>Speed:</strong> Sway risk increases with speed; the
              faster you go, the less margin for recovery
            </li>
            <li>
              <strong>Worn suspension or tires:</strong> Worn components reduce
              stability
            </li>
          </ul>
          <div className="rounded-xl border-l-4 border-danger-500 bg-danger-50 p-4">
            <p className="text-sm text-danger-700">
              <strong>If you experience sway:</strong> Do not brake. Do not
              accelerate sharply. Hold the steering wheel steady, ease off the
              accelerator gradually to reduce speed, and pull over when safe.
              Then check your tongue weight and cargo distribution.
            </p>
          </div>
        </div>
      </section>

      {/* How to measure */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          How to Measure Your Actual Tongue Weight
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            Our calculator estimates tongue weight based on a percentage of
            loaded trailer weight. But for maximum safety, you should measure
            your actual tongue weight. Here are three methods:
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-gray-200 p-5">
              <h3 className="font-semibold text-gray-900">
                Method 1: Tongue Weight Scale (Easiest)
              </h3>
              <p className="mt-2 text-sm">
                A purpose-built tongue weight scale sits under your trailer
                jack. Crank the jack down until the tongue rests on the scale
                and read the weight directly. These cost $50&ndash;$150 and
                are accurate enough for most RV use. Brands include Sherline
                and CAMCO.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 p-5">
              <h3 className="font-semibold text-gray-900">
                Method 2: Bathroom Scale + Lever (Budget)
              </h3>
              <p className="mt-2 text-sm">
                For lighter tongues (under ~500 lbs), you can use a bathroom
                scale with a lever arrangement. Place a pipe on the scale and
                another on a support at the same height, then rest a beam
                across them with the trailer tongue on the beam. Multiply the
                scale reading by the lever ratio. This method is less accurate
                but works in a pinch.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 p-5">
              <h3 className="font-semibold text-gray-900">
                Method 3: CAT Scale (Most Accurate)
              </h3>
              <p className="mt-2 text-sm">
                Weigh your truck with the trailer connected (get axle weights:
                steer, drive, trailer). Then drop the trailer and weigh the
                truck alone. The difference in the drive axle weight is
                approximately your tongue weight. This is the most accurate
                method and also gives you GVWR and GCWR data. Cost:
                $12&ndash;$15 per pass.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tongue weight and payload */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          Tongue Weight and Payload: The Connection
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            Tongue weight is not just about trailer stability&mdash;it directly
            affects your truck&apos;s payload capacity. Remember:
          </p>
          <pre className="overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-green-400">
{`Used Payload = Passenger Weight + Cargo Weight + Tongue Weight
             must be <= Payload Capacity

Loaded Truck = Curb Weight + Passengers + Cargo + Tongue Weight
             must be <= GVWR

Tongue Weight must be <= Hitch Receiver Rating`}
          </pre>
          <p>
            This is why our{" "}
            <Link
              href="/towing-capacity-calculator"
              className="font-semibold text-brand-600 underline"
            >
              towing calculator
            </Link>{" "}
            checks tongue weight as one of five independent safety dimensions.
            A trailer that is under your tow rating can still push you over
            payload if the tongue weight is high enough. See our{" "}
            <Link
              href="/guides/payload-capacity"
              className="font-semibold text-brand-600 underline"
            >
              Payload Capacity Guide
            </Link>{" "}
            for a detailed breakdown.
          </p>
        </div>
      </section>

      {/* Weight distribution hitch */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          Weight Distribution Hitches (WDH)
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            A weight distribution hitch (WDH) uses spring bars to distribute
            tongue weight across all axles of the tow vehicle and trailer,
            rather than concentrating it on the rear axle. This improves
            handling, steering control, and braking.
          </p>
          <p>
            General guidelines for when a WDH is recommended:
          </p>
          <ul className="ml-6 list-disc space-y-2">
            <li>Trailer weight exceeds 5,000 lbs</li>
            <li>Tongue weight exceeds 500 lbs</li>
            <li>The rear of your tow vehicle sags noticeably when connected</li>
            <li>Your headlights point upward when hitched</li>
          </ul>
          <div className="rounded-lg border-l-4 border-warning-500 bg-warning-50 p-4">
            <p className="text-sm text-warning-700">
              <strong>Important:</strong> A WDH does not reduce your tongue
              weight or your payload usage. The total tongue weight is the
              same; it is just distributed differently across axles. You still
              need to stay within payload, GVWR, and GCWR limits.
            </p>
          </div>
          <p>
            Some WDH systems also include sway control, which applies friction
            or other forces to resist trailer sway. This is a valuable safety
            feature but should not be used as a substitute for proper tongue
            weight.
          </p>
        </div>
      </section>

      {/* How to adjust */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          How to Adjust Your Tongue Weight
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            If your tongue weight is too high or too low, you can adjust it by
            redistributing cargo inside the trailer:
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-gray-200 p-5">
              <h3 className="font-semibold text-brand-700">
                To Increase Tongue Weight
              </h3>
              <p className="mt-2 text-sm">
                Move heavy items (tools, batteries, canned goods, firewood)
                forward in the trailer, toward the hitch. This shifts weight
                onto the tongue. Re-weigh after adjusting.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 p-5">
              <h3 className="font-semibold text-brand-700">
                To Decrease Tongue Weight
              </h3>
              <p className="mt-2 text-sm">
                Move heavy items rearward, toward the back of the trailer. But
                never go below 10% for travel trailers or 18% for fifth wheels.
                Re-weigh after adjusting.
              </p>
            </div>
          </div>
          <p>
            Always measure tongue weight after redistributing cargo. Small
            changes in cargo position can have a significant effect on tongue
            weight percentage.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-12 rounded-2xl bg-brand-600 p-8 text-center text-white">
        <h2 className="text-2xl font-bold">Calculate Your Tongue Weight</h2>
        <p className="mt-2 text-brand-100">
          Get instant tongue weight estimates with optimal range analysis.
        </p>
        <Link
          href="/tongue-weight-calculator"
          className="mt-6 inline-block rounded-xl bg-white px-8 py-4 text-base font-bold text-brand-700 shadow-lg transition-all hover:bg-brand-50 active:scale-[0.99]"
        >
          Open Tongue Weight Calculator
        </Link>
      </section>

      {/* FAQ */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          Frequently Asked Questions
        </h2>
        <div className="mt-6 space-y-4">
          {FAQS.map((faq) => (
            <details
              key={faq.q}
              className="group rounded-lg border border-gray-200 p-4"
            >
              <summary className="cursor-pointer font-semibold text-gray-900 marker:text-brand-600">
                {faq.q}
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* Related guides */}
      <section className="mt-12 rounded-xl bg-gray-50 p-6">
        <h2 className="text-lg font-bold text-gray-900">Related Guides</h2>
        <ul className="mt-3 space-y-2 text-sm">
          <li>
            <Link
              href="/guides/towing-capacity-explained"
              className="text-brand-600 hover:underline"
            >
              Towing Capacity Explained: The Complete Guide
            </Link>
          </li>
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
              Payload Capacity Explained: The #1 Towing Blind Spot
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
}
