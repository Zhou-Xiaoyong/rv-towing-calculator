import type { Metadata } from "next";
import Link from "next/link";
import { FaqJsonLd, ArticleJsonLd, HowToJsonLd } from "@/components/seo/JsonLd";
import { DEFAULT_OG_IMAGES } from "@/lib/seo/default-og-image";

export const metadata: Metadata = {
  title: "How to Read Your Truck's Tire and Loading Label (Door Jamb Sticker)",
  description:
    "Step-by-step guide to reading the Tire and Loading label on your truck's door jamb. Learn what GVWR, GAWR, payload, and tire pressure numbers mean and how to use them to tow safely.",
  alternates: {
    canonical:
      "https://rvtowingcalc.com/guides/how-to-read-tire-and-loading-label",
  },
  openGraph: {
    title:
      "How to Read Your Truck's Tire and Loading Label (Door Jamb Sticker)",
    description:
      "Decode the yellow door jamb sticker on your truck. Learn what GVWR, GAWR, payload capacity, and tire pressure mean and how to use them for safe towing.",
    url: "https://rvtowingcalc.com/guides/how-to-read-tire-and-loading-label",
    images: DEFAULT_OG_IMAGES,
  },
};

const FAQS = [
  {
    q: "Where is the Tire and Loading label on my truck?",
    a: "The Tire and Loading label is a yellow or white sticker located on the driver's side door jamb (the B-pillar), visible when you open the driver's door. On some trucks it is on the rear edge of the driver's door itself. If the original label is missing or damaged, you can order a replacement from your dealer using your VIN, or find the same ratings in your owner's manual and the manufacturer's towing guide.",
  },
  {
    q: "What is the difference between GVWR and payload capacity?",
    a: "GVWR (Gross Vehicle Weight Rating) is the maximum your truck is allowed to weigh fully loaded, including the truck itself, passengers, cargo, and tongue or pin weight. Payload capacity is how much weight you can ADD to the truck: it equals GVWR minus the truck's curb weight. The door jamb label states payload as 'The combined weight of occupants and cargo should never exceed XXX lbs.' For towing, tongue or pin weight counts against payload.",
  },
  {
    q: "Is the payload number on the door jamb accurate for towing?",
    a: "Yes, the payload figure on the door jamb label is the official, truck-specific number certified by the manufacturer for that exact VIN. It accounts for your truck's installed options and trim, unlike generic brochures or website configurators which show best-case or base-model numbers. Always use the door jamb payload, not the brochure payload, when calculating towing safety.",
  },
  {
    q: "What is GAWR and why does it matter for towing?",
    a: "GAWR (Gross Axle Weight Rating) is the maximum weight a single axle can carry, listed separately for the front (steer) and rear (drive) axles on the door jamb label. When you hitch a trailer, tongue or pin weight is transferred mainly to the rear axle, which can overload it even when total GVWR is within limits. This is why you should weigh each axle at a CAT Scale rather than relying on total weight alone.",
  },
  {
    q: "Does the door jamb label show my towing capacity?",
    a: "No. The Tire and Loading label shows GVWR, GAWR (front and rear), tire size, recommended tire pressure, and payload, but it does NOT show tow rating or GCWR (Gross Combined Weight Rating). Tow rating and GCWR come from the manufacturer's trailering guide and depend on engine, axle ratio, cab style, and tow package. Our towing calculator combines both sources for a complete safety check.",
  },
  {
    q: "Why are the tire pressures on the door jamb different from the tire sidewall?",
    a: "The door jamb shows the recommended COLD tire pressure for your truck's original tires at maximum load. The number on the tire sidewall is the maximum pressure the tire can safely hold, not the recommended running pressure. Always follow the door jamb pressure for daily driving and towing. If you upgraded to load-range E (10-ply) tires, check the tire manufacturer's load/inflation table for the correct towing pressure.",
  },
];

export default function TireAndLoadingLabelGuidePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <FaqJsonLd
        faqs={FAQS}
        baseUrl="https://rvtowingcalc.com/guides/how-to-read-tire-and-loading-label"
      />
      <HowToJsonLd
        name="How to Read Your Truck's Tire and Loading Label"
        description="Step-by-step guide to locating and decoding the Tire and Loading label on your truck's door jamb to find GVWR, GAWR, payload capacity, and recommended tire pressure for safe towing."
        totalTime="PT10M"
        url="https://rvtowingcalc.com/guides/how-to-read-tire-and-loading-label"
        steps={[
          {
            name: "Locate the label",
            text: "Open the driver's side door and look at the door jamb (the B-pillar). The Tire and Loading label is a yellow or white sticker, roughly 4 by 6 inches, attached to the rear edge of the door opening or the door itself.",
          },
          {
            name: "Read the GVWR",
            text: "Find the line labeled 'GVWR' (Gross Vehicle Weight Rating). This is the maximum your truck is allowed to weigh fully loaded, including the truck, passengers, cargo, and tongue or pin weight. Compare this to your actual loaded truck weight from a CAT Scale.",
          },
          {
            name: "Read the GAWR for both axles",
            text: "Find 'GAWR FRT' (front axle) and 'GAWR RR' (rear axle). These are the maximum weights each axle can carry. The rear axle is the one most likely to be overloaded when towing because tongue and pin weight transfer there.",
          },
          {
            name: "Find the payload capacity statement",
            text: "Look for the sentence 'The combined weight of occupants and cargo should never exceed XXX lbs.' That number is your official payload capacity. Subtract tongue or pin weight, passenger weight, and cargo weight from it to find your remaining payload.",
          },
          {
            name: "Note the tire size and pressure",
            text: "The label lists the original tire size and the recommended cold tire pressure for front and rear tires. Use these pressures for towing unless you installed upgraded tires, in which case consult the tire manufacturer's load/inflation table.",
          },
          {
            name: "Compare to actual weights",
            text: "Weigh your fully loaded truck at a CAT Scale to get actual steer and drive axle weights. Compare each to the GAWR on the label and the total to the GVWR. If any value exceeds the label, you are overloaded and must reduce weight or redistribute it.",
          },
        ]}
      />
      <ArticleJsonLd
        title="How to Read Your Truck's Tire and Loading Label (Door Jamb Sticker)"
        description="Step-by-step guide to reading the Tire and Loading label on your truck's door jamb. Learn what GVWR, GAWR, payload, and tire pressure numbers mean."
        url="https://rvtowingcalc.com/guides/how-to-read-tire-and-loading-label"
        datePublished="2026-07-10"
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
        <span className="text-gray-900">Tire and Loading Label Guide</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
        How to Read Your Truck&apos;s Tire and Loading Label
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        That yellow sticker on your driver&apos;s door jamb is the single most
        important safety document on your truck. It carries the official,
        VIN-specific weight ratings that every towing calculation depends
        on&mdash;yet most owners never read past the tire pressure. Here is how
        to decode every field and use it to tow safely.
      </p>

      {/* What is the label */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          What Is the Tire and Loading Label?
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            The Tire and Loading label (sometimes called the Federal
            Certification label or FMVSS label) is a sticker required by federal
            regulation on every new vehicle sold in the United States. It is
            affixed by the manufacturer and contains the{" "}
            <strong>official, vehicle-specific</strong> weight ratings for your
            exact truck&mdash;not the generic brochure numbers you see online.
          </p>
          <p>
            This distinction matters. Two F-150s that look identical can have
            wildly different payload capacities because of installed options,
            trim level, cab configuration, and tow package. The door jamb label
            accounts for all of that. If you use a website configurator or
            brochure payload instead of the label, you may be off by 500 lbs or
            more.
          </p>
          <div className="rounded-xl border-l-4 border-brand-500 bg-brand-50 p-5">
            <h3 className="font-semibold text-brand-700">
              The bottom line
            </h3>
            <p className="mt-2 text-sm text-brand-800">
              The numbers on the door jamb label are the legal, certified
              ratings for your truck. They override anything a dealer, brochure,
              or website tells you. When in doubt, trust the sticker.
            </p>
          </div>
        </div>
      </section>

      {/* Where to find it */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          Where to Find the Label
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            On virtually all modern pickup trucks and SUVs, the Tire and Loading
            label is located on the <strong>driver&apos;s side door jamb</strong>
            &mdash;the vertical pillar you see when you open the driver&apos;s
            door. Specifically, look in one of these spots:
          </p>
          <ul className="ml-6 list-disc space-y-2">
            <li>
              The <strong>rear edge of the door opening</strong> (B-pillar),
              about waist height. This is the most common location on Ford and
              GM trucks.
            </li>
            <li>
              The <strong>driver&apos;s door itself</strong>, on the inner face
              near the latch. Common on some RAM and Toyota models.
            </li>
            <li>
              On SUVs, occasionally on the <strong>passenger side door
              jamb</strong> if the driver side is used for other equipment.
            </li>
          </ul>
          <p>
            The label is usually yellow with black text, or white with black
            text, and is roughly 4 by 6 inches. If your label is missing,
            faded, or painted over, you can order a replacement from your
            dealership using your VIN. The replacement is inexpensive (often
            under $30) and is the only way to get the certified numbers if the
            original is gone.
          </p>
        </div>
      </section>

      {/* Anatomy of the label */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          Anatomy of the Label: Every Field Explained
        </h2>
        <p className="mt-4 text-gray-600">
          The label contains six key pieces of information. Here is what each
          one means and how to use it for towing:
        </p>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b-2 border-gray-300 bg-gray-50">
                <th className="px-4 py-3 text-left font-semibold text-gray-900">
                  Field
                </th>
                <th className="px-4 py-3 text-left font-semibold text-gray-900">
                  What It Means
                </th>
                <th className="px-4 py-3 text-left font-semibold text-gray-900">
                  Towing Use
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-3 font-medium text-gray-700">GVWR</td>
                <td className="px-4 py-3 text-gray-600">
                  Gross Vehicle Weight Rating. The maximum your truck can weigh
                  fully loaded.
                </td>
                <td className="px-4 py-3 text-gray-600">
                  Compare to steer + drive axle weight from a CAT Scale.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-gray-700">
                  GAWR FRT
                </td>
                <td className="px-4 py-3 text-gray-600">
                  Gross Axle Weight Rating, front axle. Max weight on the steer
                  axle.
                </td>
                <td className="px-4 py-3 text-gray-600">
                  Compare to steer axle weight. A WDH can shift weight here.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-gray-700">
                  GAWR RR
                </td>
                <td className="px-4 py-3 text-gray-600">
                  Gross Axle Weight Rating, rear axle. Max weight on the drive
                  axle.
                </td>
                <td className="px-4 py-3 text-gray-600">
                  Most likely to be overloaded by tongue/pin weight. Check
                  carefully.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-gray-700">
                  Payload statement
                </td>
                <td className="px-4 py-3 text-gray-600">
                  &ldquo;The combined weight of occupants and cargo should never
                  exceed XXX lbs.&rdquo;
                </td>
                <td className="px-4 py-3 text-gray-600">
                  Your official payload. Subtract tongue/pin weight +
                  passengers + cargo.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-gray-700">
                  Tire size
                </td>
                <td className="px-4 py-3 text-gray-600">
                  Original equipment tire size (e.g., P275/65R18).
                </td>
                <td className="px-4 py-3 text-gray-600">
                  If you changed tire sizes, use the tire maker&apos;s
                  load/inflation table instead.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-gray-700">
                  Tire pressure
                </td>
                <td className="px-4 py-3 text-gray-600">
                  Recommended cold tire pressure for front and rear, at max
                  load.
                </td>
                <td className="px-4 py-3 text-gray-600">
                  Use these pressures when towing unless running upgraded tires.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Step-by-step */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          Step-by-Step: Reading the Label
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            Follow these steps every time you set up a new truck-and-trailer
            combination. The whole process takes about 10 minutes and could
            save you from a dangerous overload:
          </p>
          <div className="space-y-6">
            <div className="rounded-lg border border-gray-200 p-5">
              <h3 className="font-semibold text-brand-700">
                Step 1: Locate the Label
              </h3>
              <p className="mt-2 text-sm">
                Open the driver&apos;s door and find the yellow or white sticker
                on the door jamb. Make sure it is legible. If it is faded,
                order a replacement from your dealer using your VIN.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 p-5">
              <h3 className="font-semibold text-brand-700">
                Step 2: Read the GVWR
              </h3>
              <p className="mt-2 text-sm">
                Find the line labeled &ldquo;GVWR&rdquo; followed by a number in
                pounds (e.g., &ldquo;GVWR: 7,200 LBS&rdquo;). This is the
                maximum your truck can weigh fully loaded. Write it down.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 p-5">
              <h3 className="font-semibold text-brand-700">
                Step 3: Read the GAWR for Both Axles
              </h3>
              <p className="mt-2 text-sm">
                Find &ldquo;GAWR FRT&rdquo; (front axle) and &ldquo;GAWR
                RR&rdquo; (rear axle). These are the maximum weights each axle
                can carry. The rear axle rating is the one to watch when
                towing, because tongue and pin weight transfer there.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 p-5">
              <h3 className="font-semibold text-brand-700">
                Step 4: Find the Payload Statement
              </h3>
              <p className="mt-2 text-sm">
                Look for the sentence beginning with &ldquo;The combined weight
                of occupants and cargo should never exceed&hellip;&rdquo;
                followed by a number. That number is your official payload
                capacity. This is the single most important figure on the label
                for towing.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 p-5">
              <h3 className="font-semibold text-brand-700">
                Step 5: Note the Tire Size and Pressure
              </h3>
              <p className="mt-2 text-sm">
                Record the original tire size and the recommended cold tire
                pressure for front and rear. Use these pressures when towing.
                If you upgraded to load-range E (10-ply) tires, consult the
                tire manufacturer&apos;s load/inflation table for the correct
                towing pressure.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 p-5">
              <h3 className="font-semibold text-brand-700">
                Step 6: Compare to Actual Weights
              </h3>
              <p className="mt-2 text-sm">
                Weigh your fully loaded truck at a CAT Scale to get actual steer
                and drive axle weights. Compare each axle to the GAWR on the
                label, and the total to the GVWR. If any value exceeds the
                label, you are overloaded.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Payload calculation */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          How to Calculate Available Payload from the Label
        </h2>
        <p className="mt-4 text-gray-600">
          The payload statement on the label tells you how much weight you can
          add to the truck. Here is how to figure out how much payload you have
          left after hitching up:
        </p>
        <div className="mt-6 rounded-xl border border-gray-200 p-6">
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">
                Payload Capacity (from label)
              </span>
              <span className="font-semibold text-gray-900">2,050 lbs</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">
                Tongue or Pin Weight (loaded)
              </span>
              <span className="text-gray-900">&minus; 1,150 lbs</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Driver + Passengers</span>
              <span className="text-gray-900">&minus; 600 lbs</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Cargo in Truck Bed</span>
              <span className="text-gray-900">&minus; 200 lbs</span>
            </div>
            <div className="border-t border-gray-200 pt-3">
              <div className="flex justify-between">
                <span className="font-semibold text-gray-700">
                  Remaining Payload
                </span>
                <span className="font-bold text-warning-600">100 lbs</span>
              </div>
            </div>
          </div>
          <div className="mt-4 rounded-lg bg-warning-50 p-4">
            <p className="text-sm text-warning-700">
              <strong>Warning:</strong> Only 100 lbs of payload remains. That
              leaves almost no margin for a full tank of fuel (gasoline weighs
              about 6.3 lbs/gallon&mdash;a 30-gallon tank adds 189 lbs), a
              bed cover, or any additional gear. This setup is technically
              within limits but dangerously close to the edge.
            </p>
          </div>
        </div>
        <p className="mt-4 text-sm text-gray-600">
          Remember: fuel weight counts against payload. So does the weight of
          the hitch itself (a weight distribution hitch can weigh 80&ndash;120
          lbs). If your remaining payload is under 300 lbs after subtracting
          tongue weight and passengers, treat it as a warning sign.
        </p>
      </section>

      {/* Common mistakes */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          Common Mistakes When Reading the Label
        </h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border-l-4 border-danger-500 bg-danger-50 p-5">
            <h3 className="font-semibold text-danger-700">
              Using brochure payload instead of the label
            </h3>
            <p className="mt-2 text-sm text-danger-700">
              Brochures and website configurators often show best-case payload
              for a base-model truck with no options. The door jamb label
              reflects your actual truck. The difference can be 500 lbs or more.
            </p>
          </div>
          <div className="rounded-xl border-l-4 border-danger-500 bg-danger-50 p-5">
            <h3 className="font-semibold text-danger-700">
              Forgetting that tongue weight counts as payload
            </h3>
            <p className="mt-2 text-sm text-danger-700">
              Tongue or pin weight sits on the truck and consumes payload. Many
              owners check payload against passengers and cargo but forget to
              subtract the 800&ndash;3,000 lbs of tongue or pin weight.
            </p>
          </div>
          <div className="rounded-xl border-l-4 border-warning-500 bg-warning-50 p-5">
            <h3 className="font-semibold text-warning-700">
              Ignoring the rear GAWR
            </h3>
            <p className="mt-2 text-sm text-warning-700">
              You can be under GVWR but over the rear GAWR, because tongue
              weight concentrates on the drive axle. Always check axle weights
              at a CAT Scale, not just total weight.
            </p>
          </div>
          <div className="rounded-xl border-l-4 border-warning-500 bg-warning-50 p-5">
            <h3 className="font-semibold text-warning-700">
              Confusing tire sidewall pressure with label pressure
            </h3>
            <p className="mt-2 text-sm text-warning-700">
              The number on the tire sidewall is the maximum, not the
              recommendation. Use the door jamb pressure for your original
              tires, or the tire maker&apos;s load/inflation table for
              upgraded tires.
            </p>
          </div>
        </div>
      </section>

      {/* Label vs trailering guide */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          The Label vs. the Trailering Guide
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            A common source of confusion: the Tire and Loading label does{" "}
            <strong>not</strong> show your tow rating or GCWR. Those come from a
            separate document&mdash;the manufacturer&apos;s Trailering
            (or Towing) Guide. Here is how the two sources divide the work:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-gray-300 bg-gray-50">
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Rating
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Door Jamb Label
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Trailering Guide
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-700">GVWR</td>
                  <td className="px-4 py-3 text-safe-700">Yes</td>
                  <td className="px-4 py-3 text-gray-400">No</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-700">
                    GAWR (front/rear)
                  </td>
                  <td className="px-4 py-3 text-safe-700">Yes</td>
                  <td className="px-4 py-3 text-gray-400">No</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-700">
                    Payload
                  </td>
                  <td className="px-4 py-3 text-safe-700">Yes</td>
                  <td className="px-4 py-3 text-gray-400">No</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-700">
                    Tow Rating
                  </td>
                  <td className="px-4 py-3 text-gray-400">No</td>
                  <td className="px-4 py-3 text-safe-700">Yes</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-700">GCWR</td>
                  <td className="px-4 py-3 text-gray-400">No</td>
                  <td className="px-4 py-3 text-safe-700">Yes</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-700">
                    Hitch Rating
                  </td>
                  <td className="px-4 py-3 text-gray-400">No</td>
                  <td className="px-4 py-3 text-safe-700">Yes</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            Our <Link href="/towing-capacity-calculator" className="font-semibold text-brand-600 underline">Towing Capacity Calculator</Link>{" "}
            combines both sources. It pulls tow rating, GCWR, and hitch rating
            from our vehicle database (sourced from manufacturer trailering
            guides) and lets you input the GVWR and payload from your door jamb
            label to run all six safety checks at once.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-12 rounded-2xl bg-brand-600 p-8 text-center text-white">
        <h2 className="text-2xl font-bold">Got Your Label Numbers?</h2>
        <p className="mt-2 text-brand-100">
          Plug your door jamb GVWR, payload, and axle ratings into our
          calculator and run all six safety checks in under two minutes.
        </p>
        <Link
          href="/towing-capacity-calculator"
          className="mt-6 inline-block rounded-xl bg-white px-8 py-4 text-base font-bold text-brand-700 shadow-lg transition-all hover:bg-brand-50 active:scale-[0.99]"
        >
          Open Towing Capacity Calculator
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
              href="/guides/payload-capacity"
              className="text-brand-600 hover:underline"
            >
              Payload Capacity Explained: The #1 Towing Blind Spot
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
              href="/guides/cat-scale-weighing"
              className="text-brand-600 hover:underline"
            >
              How to Weigh Your RV at a CAT Scale
            </Link>
          </li>
          <li>
            <Link
              href="/guides/towing-capacity-explained"
              className="text-brand-600 hover:underline"
            >
              Towing Capacity Explained: The Complete Guide
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
}
