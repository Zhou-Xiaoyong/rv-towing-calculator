import type { Metadata } from "next";
import Link from "next/link";
import { FaqJsonLd, ArticleJsonLd } from "@/components/seo/JsonLd";
import { DEFAULT_OG_IMAGES } from "@/lib/seo/default-og-image";

export const metadata: Metadata = {
  title:
    "Trailer Hitch Classes Explained (Class I–V): Which Receiver Does Your RV Need?",
  description:
    "Trailer hitch classes explained with a Class I-V weight rating chart, receiver tube sizes, weight distribution limits, and how to pick the right hitch.",
  alternates: {
    canonical:
      "https://www.rvtowingcalc.com/guides/trailer-hitch-classes-explained",
  },
  openGraph: {
    title:
      "Trailer Hitch Classes Explained (Class I–V): Which Receiver Does Your RV Need?",
    description:
      "Class I through V hitch ratings, receiver tube sizes, weight distribution gains, and why your vehicle's tow rating — not the hitch — is the real ceiling.",
    url: "https://www.rvtowingcalc.com/guides/trailer-hitch-classes-explained",
    images: DEFAULT_OG_IMAGES,
  },
};

const FAQS = [
  {
    q: "What are the 5 classes of trailer hitches?",
    a: "Trailer hitch receivers are grouped into five classes by gross trailer weight (GTW) and tongue weight (TW) capacity. Class I handles up to 2,000 lbs GTW and 200 lbs TW on a 1-1/4 inch receiver. Class II goes to 3,500 lbs GTW and 350 lbs TW, also on a 1-1/4 inch receiver. Class III moves to a 2 inch receiver with 8,000 lbs GTW and 800 lbs TW. Class IV keeps the 2 inch tube at 10,000 lbs GTW and 1,000 lbs TW. Class V covers 16,000 to 20,000 lbs GTW on 2 inch, 2-1/2 inch, or 3 inch tubes for heavy-duty trucks.",
  },
  {
    q: "What class hitch do I need for a travel trailer?",
    a: "Almost every travel trailer requires a Class III, Class IV, or Class V hitch. A Class III (2 inch receiver, 8,000 lbs GTW) covers most trailers up to about 25 feet and 7,000 lbs loaded. Once your loaded trailer exceeds roughly 8,000 lbs, or your tongue weight exceeds 800 lbs, you need a Class IV. Heavy travel trailers over 30 feet and large toy haulers typically land on Class V hardware. Remember the hitch rating must exceed the trailer's GVWR, not its dry weight.",
  },
  {
    q: "Does a weight distribution hitch increase my hitch capacity?",
    a: "Yes, on some receivers. Many Class III hitches are rated 8,000 lbs GTW and 800 lbs TW for conventional towing, but 12,000 lbs GTW and 1,200 lbs TW when used with a weight distribution hitch. However, this only applies if the manufacturer explicitly publishes a weight-distribution rating for that specific part number. Never assume the increase applies — check the hitch's stamped label or the manufacturer's spec sheet. The ball mount and hitch ball must also be rated for the higher load.",
  },
  {
    q: "Is a Class III hitch enough for a 7,000 lb travel trailer?",
    a: "Usually yes, but with two caveats. First, the trailer's GVWR matters more than its dry weight: a trailer with a 5,800 lb dry weight often carries a 7,600 lb GVWR, which leaves very little margin under an 8,000 lb Class III rating. Second, tongue weight is frequently the binding limit — a 7,000 lb loaded trailer at 13 percent tongue weight puts 910 lbs on the hitch, which already exceeds a Class III's 800 lb conventional rating. In that case you need either a weight distribution hitch with a published WD rating, or a Class IV receiver.",
  },
  {
    q: "Can I put a Class III hitch on a small SUV and tow 8,000 lbs?",
    a: "No. The hitch class describes the capability of the receiver hardware only, not the vehicle. A Class III receiver bolted to a compact crossover does not raise that vehicle's tow rating. Your vehicle's manufacturer tow rating, GVWR, and payload capacity are the real limits, and they are almost always lower than the hitch rating. Installing a bigger hitch on an under-rated vehicle does not make it a tow vehicle; it just moves the failure point from the hitch to the frame, transmission, or brakes.",
  },
  {
    q: "What size receiver tube do I have?",
    a: "Measure the inside dimension of the square opening on your hitch. The three standard sizes are 1-1/4 inch (Class I and II), 2 inch (Class III, IV, and most Class V consumer hitches), and 2-1/2 inch or 3 inch (Class V commercial duty on heavy-duty trucks). The receiver size determines which ball mount shank will fit, and a shank that is too small for the tube will rattle and wear. Never use a reducer sleeve to step a smaller shank down in a way the hitch manufacturer does not approve.",
  },
];

const HITCH_CLASSES = [
  {
    cls: "Class I",
    receiver: "1-1/4″",
    gtw: "2,000 lbs",
    tw: "200 lbs",
    wd: "Not rated for WD",
    vehicle: "Cars, small crossovers",
    use: "Bike racks, small utility trailers",
  },
  {
    cls: "Class II",
    receiver: "1-1/4″",
    gtw: "3,500 lbs",
    tw: "350 lbs",
    wd: "Not rated for WD",
    vehicle: "Sedans, minivans, small SUVs",
    use: "Pop-up campers, small boats",
  },
  {
    cls: "Class III",
    receiver: "2″",
    gtw: "8,000 lbs",
    tw: "800 lbs",
    wd: "Up to 12,000 / 1,200 lbs",
    vehicle: "Midsize trucks, full-size SUVs, half-ton trucks",
    use: "Most travel trailers to ~25 ft",
  },
  {
    cls: "Class IV",
    receiver: "2″",
    gtw: "10,000 lbs",
    tw: "1,000 lbs",
    wd: "Up to 12,000 / 1,200 lbs",
    vehicle: "Half-ton and 3/4-ton trucks",
    use: "Large travel trailers 25–30 ft",
  },
  {
    cls: "Class V (Xtra Duty)",
    receiver: "2″",
    gtw: "16,000–17,000 lbs",
    tw: "2,400–2,550 lbs",
    wd: "Up to 17,000 lbs",
    vehicle: "3/4-ton and 1-ton trucks",
    use: "Heavy travel trailers, equipment",
  },
  {
    cls: "Class V (Commercial)",
    receiver: "2-1/2″ or 3″",
    gtw: "18,000–20,000 lbs",
    tw: "Up to 2,700 lbs",
    wd: "18,000–20,000 lbs",
    vehicle: "Dually and chassis-cab trucks",
    use: "Commercial, agricultural, heavy RV",
  },
];

const RECEIVER_SIZES = [
  {
    size: "1-1/4″",
    classes: "Class I, Class II",
    maxGtw: "3,500 lbs",
    note: "Light duty only. Never used for travel trailers.",
  },
  {
    size: "2″",
    classes: "Class III, IV, and V Xtra Duty",
    maxGtw: "17,000 lbs",
    note: "The RV standard. Widest accessory selection.",
  },
  {
    size: "2-1/2″",
    classes: "Class V Commercial",
    maxGtw: "20,000 lbs",
    note: "HD pickups. Requires matching shank or approved reducer.",
  },
  {
    size: "3″",
    classes: "Class V Commercial",
    maxGtw: "21,000+ lbs",
    note: "Chassis cabs and commercial applications.",
  },
];

const BALL_RATINGS = [
  { ball: "1-7/8″", typical: "Up to 2,000–3,500 lbs", use: "Light utility, small campers" },
  { ball: "2″", typical: "6,000–8,000 lbs", use: "Most travel trailers to ~28 ft" },
  { ball: "2-5/16″", typical: "10,000–30,000 lbs", use: "Large travel trailers, 5th wheel kingpins" },
];

export default function TrailerHitchClassesPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
      <ArticleJsonLd
        title="Trailer Hitch Classes Explained (Class I–V): Which Receiver Does Your RV Need?"
        description="Trailer hitch classes explained with a Class I-V weight rating chart, receiver tube sizes, weight distribution limits, and how to pick the right hitch."
        url="https://www.rvtowingcalc.com/guides/trailer-hitch-classes-explained"
        datePublished="2026-09-03"
      />
      <FaqJsonLd
        faqs={FAQS}
        baseUrl="https://www.rvtowingcalc.com/guides/trailer-hitch-classes-explained"
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
        <span className="text-gray-900">Trailer Hitch Classes</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
        Trailer Hitch Classes Explained (Class I–V): Which Receiver Does Your RV
        Need?
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        Hitch classes are the rating system that tells you how much a receiver
        can carry before it becomes the weakest link in your rig. But the class
        label is only one of four independent limits, and confusing them is one
        of the most common towing mistakes. Here is the full breakdown.
      </p>

      <div className="mt-8 rounded-xl bg-yellow-50 p-6">
        <h2 className="text-lg font-bold text-yellow-800">
          The Weakest-Link Rule
        </h2>
        <p className="mt-2 text-yellow-700">
          Your towing system is only as strong as its lowest-rated component.
          Four separate numbers apply: the vehicle&rsquo;s manufacturer tow
          rating, the hitch receiver rating, the ball mount rating, and the hitch
          ball rating. A Class V receiver on a half-ton truck does not mean you
          can tow 17,000 lbs, and a 10,000 lb ball in a 6,000 lb ball mount buys
          you nothing. Always work from the smallest number.
        </p>
      </div>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Hitch Class Comparison Chart
      </h2>
      <p className="mt-3 text-gray-700">
        Classes are defined by two numbers: gross trailer weight (GTW), the total
        weight of the loaded trailer, and tongue weight (TW), the downward force
        the trailer applies to the hitch. Tongue weight typically runs 10 to 15
        percent of trailer weight for travel trailers and 20 to 25 percent for
        fifth wheels.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">Class</th>
              <th className="border px-3 py-2 text-left font-semibold">
                Receiver
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Max GTW
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Max TW
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                With Weight Distribution
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Typical Vehicle
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Common Use
              </th>
            </tr>
          </thead>
          <tbody>
            {HITCH_CLASSES.map((row, i) => (
              <tr key={i} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                <td className="border px-3 py-2 font-semibold">{row.cls}</td>
                <td className="border px-3 py-2">{row.receiver}</td>
                <td className="border px-3 py-2">{row.gtw}</td>
                <td className="border px-3 py-2">{row.tw}</td>
                <td className="border px-3 py-2">{row.wd}</td>
                <td className="border px-3 py-2">{row.vehicle}</td>
                <td className="border px-3 py-2">{row.use}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-4 text-sm text-gray-500">
        Ratings reflect widely published North American receiver classifications.
        Individual part numbers vary — always read the stamped rating label on
        your own receiver before towing.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Class by Class: What Each One Is Really For
      </h2>

      <h3 className="mt-6 text-xl font-bold text-gray-900">
        Class I and II — Not RV Hitches
      </h3>
      <p className="mt-2 text-gray-700">
        These use a 1-1/4 inch receiver and cap out at 2,000 and 3,500 lbs
        respectively. They exist for bike racks, cargo carriers, small utility
        trailers, and a handful of very light teardrop or pop-up campers. Neither
        class is rated for weight distribution. If you are towing a travel
        trailer with any real GVWR, skip straight past these.
      </p>

      <h3 className="mt-6 text-xl font-bold text-gray-900">
        Class III — The RV Sweet Spot
      </h3>
      <p className="mt-2 text-gray-700">
        The 2 inch receiver is the standard for a reason. Class III covers 8,000
        lbs GTW and 800 lbs TW, which handles most travel trailers up to about 25
        feet. Many Class III receivers also publish a weight-distribution rating
        around 12,000 lbs GTW and 1,200 lbs TW — but only if the manufacturer
        publishes it for that specific part number. This is also the highest
        class you will typically find factory-installed on a half-ton truck,
        which tells you something about where the real limits sit.
      </p>

      <h3 className="mt-6 text-xl font-bold text-gray-900">
        Class IV — For Heavier Travel Trailers
      </h3>
      <p className="mt-2 text-gray-700">
        Same 2 inch receiver as Class III, but thicker steel, heavier welds, and
        stronger mounting hardware: 10,000 lbs GTW and 1,000 lbs TW. Class IV is
        the right choice once your loaded trailer passes roughly 8,000 lbs or
        your tongue weight passes 800 lbs. Many large 30 foot travel trailers
        land squarely here.
      </p>

      <h3 className="mt-6 text-xl font-bold text-gray-900">
        Class V — Heavy Duty and Commercial
      </h3>
      <p className="mt-2 text-gray-700">
        Class V splits into two tiers. The consumer &ldquo;Xtra Duty&rdquo;
        version uses a 2 inch tube at 16,000 to 17,000 lbs. The commercial
        version moves to a 2-1/2 inch or 3 inch tube for 18,000 to 20,000 lbs.
        Even at these ratings, a receiver-mounted Class V hitch is still the
        wrong tool for a heavy fifth wheel — that requires a bed-mounted fifth
        wheel hitch or a gooseneck ball.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Receiver Tube Sizes
      </h2>
      <p className="mt-3 text-gray-700">
        Receiver size determines which ball mount shank fits. This is a purely
        mechanical compatibility question, separate from the weight rating.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">
                Receiver Size
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Associated Classes
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Max GTW
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Notes
              </th>
            </tr>
          </thead>
          <tbody>
            {RECEIVER_SIZES.map((row, i) => (
              <tr key={i} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                <td className="border px-3 py-2 font-semibold">{row.size}</td>
                <td className="border px-3 py-2">{row.classes}</td>
                <td className="border px-3 py-2">{row.maxGtw}</td>
                <td className="border px-3 py-2">{row.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 rounded-lg bg-red-50 p-4">
        <p className="text-sm text-red-700">
          <strong>Do not ignore tube size.</strong> A 2 inch ball mount shank in
          a 2-1/2 inch receiver will rattle, wear the tube, and put the load on a
          small contact area. Use a correctly sized shank or a reducer sleeve
          explicitly approved by the hitch manufacturer for towing.
        </p>
      </div>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Don&rsquo;t Forget the Ball and Ball Mount
      </h2>
      <p className="mt-3 text-gray-700">
        The receiver is only the receiving device. The ball mount that slides
        into it and the ball that the coupler rides on carry their own separate
        ratings, and both are frequently lower than the receiver.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">
                Ball Diameter
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Typical Rating
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Common Application
              </th>
            </tr>
          </thead>
          <tbody>
            {BALL_RATINGS.map((row, i) => (
              <tr key={i} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                <td className="border px-3 py-2 font-semibold">{row.ball}</td>
                <td className="border px-3 py-2">{row.typical}</td>
                <td className="border px-3 py-2">{row.use}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-4 text-gray-700">
        Your trailer&rsquo;s coupler is stamped with the ball diameter it
        requires — match it exactly. A 2 inch ball in a 2-5/16 inch coupler can
        separate under load. For full detail on shank diameter, drop versus rise,
        and torque specs, see our{" "}
        <Link
          href="/guides/hitch-ball-selection-guide"
          className="text-brand-600 hover:underline"
        >
          hitch ball selection guide
        </Link>
        .
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        How Weight Distribution Changes the Math
      </h2>
      <p className="mt-3 text-gray-700">
        A weight distribution hitch uses spring bars to transfer a portion of the
        tongue weight from the truck&rsquo;s rear axle forward to the front axle
        and back onto the trailer axles. Many manufacturers publish a second,
        higher rating for their receivers when a WDH is used — commonly 12,000
        lbs GTW and 1,200 lbs TW for a Class III or IV receiver.
      </p>
      <p className="mt-3 text-gray-700">
        Two rules apply. First, the increase is only valid if the manufacturer
        publishes it for your exact hitch part number; never assume it. Second,
        the WDH itself has a rating, and the spring bars must match your actual
        tongue weight. An under-rated WDH does not distribute properly, and an
        over-rated one rides harshly and can damage the trailer frame. Our{" "}
        <Link
          href="/guides/weight-distribution-hitch-setup"
          className="text-brand-600 hover:underline"
        >
          weight distribution hitch setup guide
        </Link>{" "}
        covers the measurement procedure.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Safety Checklist Before You Buy a Hitch
      </h2>
      <ul className="mt-3 list-disc space-y-2 pl-6 text-gray-700">
        <li>
          <strong>Start from the trailer&rsquo;s GVWR, not its dry weight.</strong>{" "}
          The hitch must be rated above the maximum the trailer can weigh when
          loaded.
        </li>
        <li>
          <strong>Calculate tongue weight at 13 percent.</strong> A 7,500 lb
          loaded travel trailer puts roughly 975 lbs on the hitch — already past
          a Class III conventional rating.
        </li>
        <li>
          <strong>Confirm the vehicle tow rating is the real ceiling.</strong>{" "}
          Check the manufacturer&rsquo;s towing guide for your exact VIN, cab,
          bed, axle ratio, and engine.
        </li>
        <li>
          <strong>Match receiver, ball mount, and ball ratings.</strong> The
          lowest of the three governs the whole setup.
        </li>
        <li>
          <strong>Verify tube size compatibility</strong> and use a shank that
          fits without adapters unless the hitch maker approves one.
        </li>
        <li>
          <strong>Inspect the hitch before every trip.</strong> Look for cracked
          welds, elongated pin holes, rust scaling, and loose mounting bolts.
        </li>
        <li>
          <strong>Confirm the trailer&rsquo;s own limits.</strong> A bigger
          hitch does not raise the trailer&rsquo;s GVWR — see our{" "}
          <Link
            href="/guides/cargo-carrying-capacity-ccc"
            className="text-brand-600 hover:underline"
          >
            cargo carrying capacity guide
          </Link>
          .
        </li>
      </ul>

      <div className="mt-10 rounded-2xl bg-brand-600 p-8 text-center text-white">
        <h2 className="text-2xl font-bold">
          Size Your Hitch to Your Real Setup
        </h2>
        <p className="mt-2 text-brand-100">
          Enter your truck and trailer numbers to confirm tongue weight, payload
          headroom, and whether your hitch class has enough margin.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/tongue-weight-calculator"
            className="inline-block rounded-xl bg-white px-6 py-3 text-base font-bold text-brand-700 shadow-lg transition-all hover:bg-brand-50 active:scale-[0.99]"
          >
            Tongue Weight Calculator
          </Link>
          <Link
            href="/towing-capacity-calculator"
            className="inline-block rounded-xl bg-brand-700 px-6 py-3 text-base font-bold text-white shadow-lg ring-1 ring-white/30 transition-all hover:bg-brand-800 active:scale-[0.99]"
          >
            Towing Capacity Calculator
          </Link>
        </div>
      </div>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Sources &amp; References
      </h2>
      <ul className="mt-3 list-disc space-y-2 pl-6 text-sm text-gray-600">
        <li>
          <a
            href="https://www.sae.org/standards/content/j684/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            SAE J684 — Trailer Couplings and Hitches
          </a>
        </li>
        <li>
          <a
            href="https://www.sae.org/standards/content/j2807_202206/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            SAE J2807 Tow Rating Standard
          </a>
        </li>
        <li>
          <a
            href="https://www.nhtsa.gov/vehicle-safety/towing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            NHTSA Trailer Towing Safety
          </a>
        </li>
        <li>
          <a
            href="https://www.rvia.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            RV Industry Association (RVIA)
          </a>
        </li>
        <li>
          <a
            href="https://www.ford.com/trucks/f150/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            Ford F-150 Towing Guide
          </a>
        </li>
        <li>
          <a
            href="https://www.ramtrucks.com/1500/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            Ram 1500 Towing Guide
          </a>
        </li>
      </ul>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          Frequently Asked Questions
        </h2>
        <div className="mt-6 space-y-4">
          {FAQS.map((faq, i) => (
            <div key={i} className="rounded-xl border border-gray-200 p-5">
              <h3 className="font-semibold text-gray-900">{faq.q}</h3>
              <p className="mt-2 text-gray-700">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-10 rounded-xl border border-gray-200 bg-gray-50 p-6">
        <h3 className="font-bold text-gray-900">Related Guides</h3>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          <li>
            <Link
              href="/guides/hitch-ball-selection-guide"
              className="text-brand-600 hover:underline"
            >
              How to Choose the Right Hitch Ball
            </Link>
          </li>
          <li>
            <Link
              href="/guides/weight-distribution-hitch-setup"
              className="text-brand-600 hover:underline"
            >
              Weight Distribution Hitch Setup
            </Link>
          </li>
          <li>
            <Link
              href="/guides/tongue-weight"
              className="text-brand-600 hover:underline"
            >
              Tongue Weight Guide
            </Link>
          </li>
          <li>
            <Link
              href="/guides/fifth-wheel-vs-travel-trailer"
              className="text-brand-600 hover:underline"
            >
              5th Wheel vs Travel Trailer
            </Link>
          </li>
          <li>
            <Link
              href="/guides/cargo-carrying-capacity-ccc"
              className="text-brand-600 hover:underline"
            >
              Cargo Carrying Capacity (CCC)
            </Link>
          </li>
          <li>
            <Link
              href="/guides/rv-trailer-sway-control"
              className="text-brand-600 hover:underline"
            >
              RV Trailer Sway Control
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
