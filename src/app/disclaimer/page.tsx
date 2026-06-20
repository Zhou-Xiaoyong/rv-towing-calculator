import type { Metadata } from "next";
import Link from "next/link";
import { DEFAULT_OG_IMAGES } from "@/lib/seo/default-og-image";

export const metadata: Metadata = {
  title: "Disclaimer - Informational Use Only",
  description:
    "RV TowCalc is an informational tool, not a substitute for professional advice. Read our full disclaimer regarding calculation accuracy, liability, and limitations.",
  alternates: { canonical: "https://rvtowingcalc.com/disclaimer" },
  openGraph: {
    title: "Disclaimer - RV TowCalc",
    description:
      "Important limitations and liability information for users of RV TowCalc. Always verify with actual weights at a CAT scale.",
    url: "https://rvtowingcalc.com/disclaimer",
    images: DEFAULT_OG_IMAGES,
  },
};

export default function DisclaimerPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <nav className="mb-4 text-sm text-gray-500">
        <Link href="/" className="hover:text-brand-600">
          Home
        </Link>
        <span className="mx-1">/</span>
        <span className="text-gray-900">Disclaimer</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
        Disclaimer
      </h1>
      <p className="mt-2 text-sm text-gray-500">
        Last updated: June 20, 2026
      </p>

      <div className="mt-8 rounded-xl border-l-4 border-danger-500 bg-danger-50 p-6">
        <p className="text-sm font-semibold text-danger-700">
          The short version: RV TowCalc is a free informational tool. Our
          calculations are based on manufacturer specifications and industry
          standards, but they are estimates. We are not liable for any damages
          resulting from reliance on this tool. Always verify your actual
          weights at a certified scale and consult your vehicle&apos;s door
          jamb sticker.
        </p>
      </div>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-gray-900">
          1. No Professional Advice
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            All content and calculations provided by RV TowCalc
            (rvtowingcalc.com) are for general informational purposes only. This
            tool is not a substitute for professional automotive advice, RV
            dealer consultation, or official manufacturer specifications.
          </p>
          <p>
            Nothing on this website constitutes engineering, safety, legal, or
            insurance advice. You should not act or refrain from acting based on
            any information provided here without first consulting qualified
            professionals and your vehicle&apos;s official documentation.
          </p>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-gray-900">
          2. Accuracy Limitations
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            While we make every effort to ensure our vehicle database and
            calculations are accurate, we cannot guarantee completeness or
            correctness. Specific limitations include:
          </p>
          <ul className="ml-6 list-disc space-y-2">
            <li>
              <strong>Manufacturer data changes:</strong> Vehicle specifications
              are updated by manufacturers mid-year and between model years. Our
              database may not reflect the latest revisions.
            </li>
            <li>
              <strong>Configuration variability:</strong> Towing capacity varies
              significantly based on engine, cab type, bed length, axle ratio,
              drive type, and installed options. Our database covers specific
              popular configurations, not every possible combination.
            </li>
            <li>
              <strong>Real-world curb weight:</strong> Actual vehicle weight
              differs from published curb weight due to installed options, fuel
              level, and modifications. Our calculations use manufacturer
              published curb weights.
            </li>
            <li>
              <strong>Tongue weight estimation:</strong> Default tongue weight
              percentages are industry-standard estimates. Actual tongue weight
              depends on trailer loading distribution and must be measured for
              precise results.
            </li>
            <li>
              <strong>User input accuracy:</strong> Calculations are only as
              accurate as the data you enter. If you estimate your cargo weight
              or passenger weight incorrectly, the results will be incorrect.
            </li>
          </ul>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-gray-900">
          3. Always Verify with Actual Weights
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            We strongly recommend that you verify your towing setup using these
            authoritative sources before hitting the road:
          </p>
          <ul className="ml-6 list-disc space-y-2">
            <li>
              <strong>Door jamb sticker:</strong> The yellow-and-white sticker
              on your vehicle&apos;s driver door jamb lists the GVWR and payload
              capacity specific to your vehicle as built. This is the most
              authoritative source for your vehicle.
            </li>
            <li>
              <strong>CAT scale:</strong> Weigh your fully loaded tow vehicle
              and trailer at a certified CAT scale (found at most truck stops).
              This gives you real, actual weights&mdash;not estimates. Cost is
              typically $12&ndash;$15 for the first weigh.
            </li>
            <li>
              <strong>Manufacturer towing guide:</strong> Download the official
              towing guide for your vehicle&apos;s year, make, and model from
              the manufacturer&apos;s website for the full specification chart.
            </li>
            <li>
              <strong>Trailer VIN sticker:</strong> Your trailer has a Federal
              Weight Label sticker (usually on the exterior near the door) that
              lists the UVW (dry weight) and GVWR.
            </li>
          </ul>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-gray-900">
          4. Safety Warnings
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            Exceeding manufacturer weight ratings can result in serious
            consequences, including but not limited to:
          </p>
          <ul className="ml-6 list-disc space-y-2">
            <li>Tire blowouts and loss of vehicle control</li>
            <li>Brake failure or significantly increased stopping distance</li>
            <li>Suspension, axle, frame, or hitch damage</li>
            <li>Transmission and engine overheating</li>
            <li>Increased risk of accidents, injury, or death</li>
            <li>
              Voided vehicle warranty and insurance claim denial in the event of
              an accident
            </li>
            <li>
              Traffic citations, fines, or vehicle impoundment for operating an
              overweight vehicle (jurisdiction-dependent)
            </li>
          </ul>
          <p>
            If our calculator returns a yellow (warning) or red (danger) result
            on any safety check, do not ignore it. Reduce your load, upgrade
            your tow vehicle, or consult a towing specialist before towing.
          </p>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-gray-900">
          5. Limitation of Liability
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            To the fullest extent permitted by applicable law, RV TowCalc and
            its operators shall not be liable for any direct, indirect,
            incidental, consequential, special, or exemplary damages arising out
            of or in connection with your use of this website or reliance on any
            information or calculations provided herein.
          </p>
          <p>
            This includes, but is not limited to, damages for property damage,
            personal injury, loss of life, loss of use, cost of repairs,
            insurance penalties, traffic citations, or any other damages
            resulting from towing decisions made based on information from this
            website.
          </p>
          <p>
            You assume full responsibility for any decisions made based on
            information from this website. The ultimate responsibility for safe
            towing rests solely with the vehicle operator.
          </p>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-gray-900">
          6. No Affiliation with Manufacturers
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            RV TowCalc is an independent website. We are not affiliated with,
            endorsed by, sponsored by, or connected to any vehicle manufacturer
            (including but not limited to Ford, RAM/Stellantis, Chevrolet/GM,
            Toyota, and GMC), RV manufacturer, towing equipment manufacturer, or
            dealer.
          </p>
          <p>
            All manufacturer names, model names, and trademarks are the property
            of their respective owners and are referenced here solely for
            identification purposes.
          </p>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-gray-900">
          7. Third-Party Links &amp; Advertising
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            This website may display advertisements and contain links to
            third-party websites. We do not control and are not responsible for
            the content, products, services, or practices of any third-party
            sites or advertisers. The inclusion of any link or advertisement
            does not imply endorsement.
          </p>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-gray-900">
          8. Changes to This Disclaimer
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            We reserve the right to update or modify this disclaimer at any time
            without prior notice. Changes take effect immediately upon posting
            to this page. The &quot;Last updated&quot; date at the top reflects
            the most recent revision. Your continued use of the website after
            any changes constitutes acceptance of the updated disclaimer.
          </p>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-gray-900">9. Contact</h2>
        <p className="mt-4 text-gray-600">
          Questions about this disclaimer? Email us at{" "}
          <a
            href="mailto:contact@rvtowingcalc.com"
            className="font-semibold text-brand-600 underline"
          >
            contact@rvtowingcalc.com
          </a>
          .
        </p>
      </section>
    </div>
  );
}
