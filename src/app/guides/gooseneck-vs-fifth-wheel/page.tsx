import type { Metadata } from "next";
import Link from "next/link";
import { FaqJsonLd, ArticleJsonLd } from "@/components/seo/JsonLd";
import { DEFAULT_OG_IMAGES } from "@/lib/seo/default-og-image";

export const metadata: Metadata = {
  title:
    "Gooseneck vs 5th Wheel Hitch: Which Is Better for Towing?",
  description:
    "Gooseneck vs 5th wheel hitch compared: towing stability, payload impact, bed space, installation, cost, and which one to choose for your truck and trailer. Includes data tables and FAQs.",
  alternates: {
    canonical: "https://www.rvtowingcalc.com/guides/gooseneck-vs-fifth-wheel",
  },
  openGraph: {
    title: "Gooseneck vs 5th Wheel Hitch: Which Is Better for Towing?",
    description:
      "A clear, independent comparison of gooseneck and 5th wheel hitches. Stability, payload, bed usability, install cost, and which setup fits your tow vehicle.",
    url: "https://www.rvtowingcalc.com/guides/gooseneck-vs-fifth-wheel",
    images: DEFAULT_OG_IMAGES,
  },
};

const FAQS = [
  {
    q: "Is a gooseneck safer than a 5th wheel?",
    a: "Both are safer than a bumper-pull travel trailer. In independent sway testing (SAE stability protocols), goosenecks and 5th wheels score within 5% of each other on rearward amplification, which measures how much the trailer swings the tow vehicle during evasive maneuvers. The gooseneck has a slight mechanical advantage because the ball-and-coupler joint tolerates more vertical articulation, but in everyday towing the difference is negligible. Both are far safer than a travel trailer with a bumper hitch.",
  },
  {
    q: "Can you tow a 5th wheel with a gooseneck hitch?",
    a: "Yes, with an adapter. A gooseneck-to-5th-wheel adapter (also called a gooseneck adapter or conversion plate) bolts to the gooseneck ball and provides a kingpin-style receiver. Most 5th wheel RV manufacturers do not recommend using adapters for permanent installations because they add 4 to 8 inches of height and 50 to 80 lbs of weight, which can change pin weight and hitch height. But for occasional towing or for owners switching trailer types, an adapter is a practical solution.",
  },
  {
    q: "Which is easier to install — gooseneck or 5th wheel?",
    a: "Gooseneck is easier. A gooseneck hitch requires drilling a 4-inch hole in the truck bed to mount the ball, plus four bolt points. Total installation time is 2 to 4 hours for a DIYer with basic tools. A 5th wheel hitch installation requires either a bed-mounted rail kit or a custom under-bed mount (for OEM prep packages), plus the hitch itself, which weighs 100 to 200 lbs. Installation time is 3 to 6 hours plus the rail kit cost, which can run $200 to $500 on top of the hitch.",
  },
  {
    q: "Do goosenecks have higher tow ratings than 5th wheels?",
    a: "Yes, slightly. Industry ratings put gooseneck hitches at 30,000 to 36,000 lbs gross trailer weight and 7,500 to 8,000 lbs vertical load, while 5th wheel hitches cap at 24,000 to 26,000 lbs and 6,000 to 6,250 lbs. The gooseneck has more raw capacity because the ball-and-coupler joint is mechanically simpler than the kingpin-and-jaw design. In practice, both ratings vastly exceed the payload and tow ratings of consumer pickup trucks, which typically cap at 20,000 lbs tow rating for the largest one-ton dually configurations.",
  },
  {
    q: "Do you lose bed space with a 5th wheel hitch?",
    a: "Yes. A traditional 5th wheel hitch sits in the truck bed, mounted on rails or an under-bed system. It uses 14 to 22 inches of bed length and stands 12 to 16 inches tall, blocking the use of the bed for cargo. A gooseneck ball is flush-mounted when not in use and uses almost no bed space — you can put plywood, motorcycles, or cargo boxes in the bed without removing the hitch. If you use your truck for both towing and hauling cargo, gooseneck wins on bed usability.",
  },
  {
    q: "Can a gooseneck and 5th wheel hitch fit in the same truck?",
    a: "Yes, but only with a specific setup. An under-bed gooseneck ball and an under-bed 5th wheel hitch cannot occupy the same mounting points, so you typically choose one. Some owners install both by using a gooseneck ball mounted in the front of the bed and a removable 5th wheel rail system mounted in the rear, but this is uncommon. Most pickup truck owners choose one system and stick with it for the life of the truck.",
  },
];

const COMPARISON = [
  {
    feature: "Hitch mechanism",
    gooseneck: "Ball-and-tube coupler. Ball mounted in bed, coupler wraps over ball.",
    fifthWheel: "Kingpin-and-jaw. Pin on trailer, jaw on hitch in bed.",
  },
  {
    feature: "Pivot point",
    gooseneck: "Over rear axle of truck",
    fifthWheel: "Over rear axle of truck",
  },
  {
    feature: "Common tow vehicle",
    gooseneck: "Heavy-duty pickup trucks (2500/3500)",
    fifthWheel: "Any pickup with 5th wheel prep package or aftermarket rails",
  },
  {
    feature: "Maximum GTW rating",
    gooseneck: "30,000–36,000 lbs",
    fifthWheel: "24,000–26,000 lbs",
  },
  {
    feature: "Maximum vertical load (pin/tube)",
    gooseneck: "7,500–8,000 lbs",
    fifthWheel: "6,000–6,250 lbs",
  },
  {
    feature: "Bed space when hitched",
    gooseneck: "Minimal — ball sits flush, small clearance around it",
    fifthWheel: "Reduced — 14–22 inches of bed used; 12–16 inches of height blocked",
  },
  {
    feature: "Bed space when NOT hitched",
    gooseneck: "Nearly full bed — ball cover plate is flush",
    fifthWheel: "Lost — hitch sits on rails or under-bed pucks",
  },
  {
    feature: "Stability in emergency maneuvers",
    gooseneck: "Excellent (slightly higher tolerance for vertical articulation)",
    fifthWheel: "Excellent (industry standard, well-documented in SAE studies)",
  },
  {
    feature: "Turning radius (sharp turns)",
    gooseneck: "Tighter — ball and coupler allow more angle",
    fifthWheel: "Wider — jaw mechanism has mechanical stops; short-bed trucks need slider hitch",
  },
  {
    feature: "Trailer compatibility",
    gooseneck: "Gooseneck trailers (horse, flatbed, RGN), some 5th wheels with adapter",
    fifthWheel: "5th wheel RVs, car haulers, toy haulers (industry standard for RVs)",
  },
  {
    feature: "DIY install time",
    gooseneck: "2–4 hours",
    fifthWheel: "3–6 hours plus rail kit",
  },
  {
    feature: "Installed cost (hitch + install kit)",
    gooseneck: "$400–$900",
    fifthWheel: "$700–$2,500",
  },
  {
    feature: "Typical RV users",
    gooseneck: "Livestock, agriculture, dual-purpose truck owners",
    fifthWheel: "Recreational RVers (industry standard for 5th wheel trailers)",
  },
];

const PROS_CONS = [
  {
    setup: "Gooseneck Hitch",
    pros: [
      "Higher raw tow rating (30,000+ lbs)",
      "Flush ball when not in use — full bed access",
      "Easier and faster hookup — drop coupler over ball and lock",
      "Tighter turning radius than 5th wheel jaw",
      "Lower cost ($400–$900 installed)",
      "Compatible with adapters for 5th wheel trailers",
    ],
    cons: [
      "Drilling required — 4-inch hole in truck bed",
      "Less common for RV trailers (5th wheel is industry standard)",
      "Trailer selection more limited unless you use an adapter",
      "Adapter adds 4–8 inches of hitch height (5th wheels not designed for it)",
      "Coupler is heavier than a 5th wheel jaw — slight impact on hitch weight",
    ],
  },
  {
    setup: "5th Wheel Hitch",
    pros: [
      "Industry standard for 5th wheel RVs — every 5th wheel fits",
      "Strong jaw-and-pin lock with visual confirmation of engagement",
      "OEM prep packages available on most heavy-duty trucks",
      "Wide variety of hitch models (slider, fixed, rotating pin box)",
      "Documented sway performance — SAE J2807 testing standard",
      "Pin weight typically 20–25% of trailer weight (within safe payload)",
    ],
    cons: [
      "Hitch occupies 14–22 inches of bed when installed",
      "12–16 inches of bed height blocked when hitched",
      "Hitch weight 100–200 lbs — must be removed to use full bed",
      "Short-bed trucks (under 6 ft) require slider or rotating pin box",
      "Higher cost ($700–$2,500 with rails)",
      "Larger turning radius — kingpin clearance issue on tight turns",
    ],
  },
];

const HITCH_BRANDS = [
  {
    brand: "B&W",
    gooseneckModel: "B&W Companion (5th wheel gooseneck adapter)",
    fifthWheelModel: "B&W Companion OEM",
    note: "Gooseneck-friendly 5th wheel hitches. The Companion drops into a gooseneck ball — no rails. Popular with farmers and dual-purpose owners.",
  },
  {
    brand: "Curt",
    gooseneckModel: "Curt X5",
    fifthWheelModel: "Curt A20 / Q20",
    note: "Wide range. Curt gooseneck balls are common OEM replacements. Curt 5th wheel hitches offer good value with locking jaw mechanisms.",
  },
  {
    brand: "Reese",
    gooseneckModel: "Reese Goose Box",
    fifthWheelModel: "Reese M5 / Elite Series",
    note: "Reese is the legacy 5th wheel brand. The Goose Box replaces the kingpin and adapts a 5th wheel trailer to a gooseneck ball.",
  },
  {
    brand: "Draw-Tite",
    gooseneckModel: "Draw-Tite Hide-A-Goose",
    fifthWheelModel: "Draw-Tite 5th wheel hitches",
    note: "Hide-A-Goose is a popular under-bed gooseneck mount. 5th wheel offerings are value-tier, best for occasional use.",
  },
];

export default function GooseneckVsFifthWheelPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <ArticleJsonLd
        title="Gooseneck vs 5th Wheel Hitch: Which Is Better for Towing?"
        description="Independent comparison of gooseneck and 5th wheel hitches. Stability, payload impact, bed usability, cost, and which setup fits your tow vehicle."
        url="https://www.rvtowingcalc.com/guides/gooseneck-vs-fifth-wheel"
        datePublished="2026-09-06"
      />
      <FaqJsonLd
        faqs={FAQS}
        baseUrl="https://www.rvtowingcalc.com/guides/gooseneck-vs-fifth-wheel"
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
        <span className="text-gray-900">Gooseneck vs 5th Wheel</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
        Gooseneck vs 5th Wheel Hitch: Which Is Better for Towing?
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        Both hitches pivot over the rear axle of the tow vehicle, both deliver
        the same fundamental stability advantage over a bumper-pull trailer,
        and both can be safe when properly matched to the trailer. The
        differences show up in bed space, install complexity, trailer
        compatibility, and cost. If you are buying a 5th wheel RV, the
        decision is essentially made for you — the 5th wheel hitch is the
        industry standard. But if you tow a mix of trailers, or you want to
        keep your truck bed usable, the gooseneck has real advantages.
      </p>

      <div className="mt-8 rounded-xl bg-brand-50 p-6">
        <h2 className="text-lg font-bold text-brand-800">The Short Answer</h2>
        <p className="mt-2 text-brand-700">
          Buy a 5th wheel hitch if you tow 5th wheel RVs. Buy a gooseneck if
          you tow livestock trailers, flatbeds, equipment trailers, or want
          your truck bed to remain usable. The performance difference is
          negligible. The choice is about your use case, your trailer, and how
          you want your truck to work when the trailer is not hooked up.
        </p>
      </div>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Head-to-Head Comparison
      </h2>
      <p className="mt-3 text-gray-700">
        Here is the full picture. Both hitches pivot over the rear axle and
        put the trailer weight on the truck&apos;s chassis. Differences emerge
        in tow ratings, bed usability, cost, and trailer compatibility.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">
                Feature
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Gooseneck Hitch
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                5th Wheel Hitch
              </th>
            </tr>
          </thead>
          <tbody>
            {COMPARISON.map((row, i) => (
              <tr key={row.feature} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                <td className="border px-3 py-2 font-semibold">{row.feature}</td>
                <td className="border px-3 py-2 text-xs">{row.gooseneck}</td>
                <td className="border px-3 py-2 text-xs">{row.fifthWheel}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Pros and Cons of Each Setup
      </h2>

      <h3 className="mt-6 text-xl font-bold text-gray-900">Gooseneck Hitch</h3>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border-l-4 border-safe-500 bg-safe-50 p-5">
          <h4 className="font-semibold text-safe-700">Pros</h4>
          <ul className="mt-2 ml-4 list-disc space-y-1 text-sm text-safe-700">
            {PROS_CONS[0].pros.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border-l-4 border-danger-500 bg-danger-50 p-5">
          <h4 className="font-semibold text-danger-700">Cons</h4>
          <ul className="mt-2 ml-4 list-disc space-y-1 text-sm text-danger-700">
            {PROS_CONS[0].cons.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </div>

      <h3 className="mt-8 text-xl font-bold text-gray-900">
        5th Wheel Hitch
      </h3>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border-l-4 border-safe-500 bg-safe-50 p-5">
          <h4 className="font-semibold text-safe-700">Pros</h4>
          <ul className="mt-2 ml-4 list-disc space-y-1 text-sm text-safe-700">
            {PROS_CONS[1].pros.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border-l-4 border-danger-500 bg-danger-50 p-5">
          <h4 className="font-semibold text-danger-700">Cons</h4>
          <ul className="mt-2 ml-4 list-disc space-y-1 text-sm text-danger-700">
            {PROS_CONS[1].cons.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </div>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        How Each Hitch Affects Payload
      </h2>
      <p className="mt-3 text-gray-700">
        Both hitches concentrate the trailer&apos;s pin/tube weight directly
        over the rear axle of the tow vehicle. That payload is what makes
        5th wheel towing feel stable, but it also pushes half-ton trucks past
        their payload limits.
      </p>
      <p className="mt-3 text-gray-700">
        Pin weight on a 5th wheel RV is typically 20 to 25% of the loaded
        trailer weight. A 14,000 lb 5th wheel puts 2,800 to 3,500 lbs of pin
        weight on the hitch. Add a gooseneck tube coupler (about 80 lbs more
        than a 5th wheel pin) and the difference is negligible. The hitch
        itself (gooseneck ball vs. 5th wheel hitch) weighs between 100 and
        200 lbs and counts toward payload.
      </p>
      <p className="mt-3 text-gray-700">
        Before choosing either system, run the numbers through our{" "}
        <Link
          href="/payload-calculator"
          className="text-brand-600 hover:underline"
        >
          Payload Calculator
        </Link>{" "}
        to make sure your truck can handle the loaded trailer. Our{" "}
        <Link
          href="/guides/fifth-wheel-pin-weight"
          className="text-brand-600 hover:underline"
        >
          5th wheel pin weight guide
        </Link>{" "}
        covers the detailed measurement procedure.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">
                Hitch Type
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Typical Pin/Tube Weight
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Hitch Hardware Weight
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Total Payload Used (14k trailer)
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-50">
              <td className="border px-3 py-2 font-semibold">Gooseneck</td>
              <td className="border px-3 py-2">2,800–3,500 lbs (22%)</td>
              <td className="border px-3 py-2">~50–80 lbs (ball)</td>
              <td className="border px-3 py-2 font-semibold">2,850–3,580 lbs</td>
            </tr>
            <tr>
              <td className="border px-3 py-2 font-semibold">5th Wheel</td>
              <td className="border px-3 py-2">2,800–3,500 lbs (22%)</td>
              <td className="border px-3 py-2">~100–200 lbs (hitch)</td>
              <td className="border px-3 py-2 font-semibold">2,900–3,700 lbs</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm text-gray-500">
        A typical half-ton truck has 1,800 to 2,300 lbs of payload capacity.
        A typical 3/4-ton truck has 3,500 to 4,500 lbs. A typical one-ton
        dually has 5,500 to 7,500 lbs. The hitch choice rarely changes which
        truck class you need — the trailer weight does.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Popular Hitch Brands and Models
      </h2>
      <p className="mt-3 text-gray-700">
        Four brands dominate the heavy-duty towing market. Each offers both
        gooseneck and 5th wheel products. Specific model selection depends
        on your trailer weight and tow vehicle, but here are the headline
        product lines:
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">
                Brand
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Gooseneck Line
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                5th Wheel Line
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Best For
              </th>
            </tr>
          </thead>
          <tbody>
            {HITCH_BRANDS.map((row, i) => (
              <tr key={row.brand} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                <td className="border px-3 py-2 font-semibold">{row.brand}</td>
                <td className="border px-3 py-2 text-xs">{row.gooseneckModel}</td>
                <td className="border px-3 py-2 text-xs">{row.fifthWheelModel}</td>
                <td className="border px-3 py-2 text-xs">{row.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Installation: What Is Involved
      </h2>

      <h3 className="mt-6 text-xl font-bold text-gray-900">
        Gooseneck Installation
      </h3>
      <ul className="mt-3 ml-6 list-disc space-y-2 text-gray-700">
        <li>
          Mark the centerline of the truck bed, typically 1 to 2 inches
          forward of the rear axle centerline.
        </li>
        <li>
          Drill a 4-inch hole through the bed, plus four 0.5-inch bolt holes
          for the mounting plate.
        </li>
        <li>
          Drop the mounting hardware through the hole and bolt it from below
          (frame-mounted crossmembers are usually pre-drilled or marked).
        </li>
        <li>
          Bolt the ball and cover plate from above the bed. Total time: 2 to
          4 hours.
        </li>
        <li>
          Cost: $250 to $500 for the hitch kit, $150 to $400 for
          professional installation.
        </li>
      </ul>

      <h3 className="mt-6 text-xl font-bold text-gray-900">
        5th Wheel Installation
      </h3>
      <ul className="mt-3 ml-6 list-disc space-y-2 text-gray-700">
        <li>
          If your truck has the OEM 5th wheel prep package, the pucks are
          already mounted. Skip to step 2.
        </li>
        <li>
          Otherwise, install a rail kit: four rails bolted to the bed, plus
          a crossmember system that ties the rails to the frame.
        </li>
        <li>
          Drop the 5th wheel hitch into the pucks (or bolt it to the rails).
          The hitch itself weighs 100 to 200 lbs.
        </li>
        <li>
          For sliding hitches (required for short-bed trucks), add 1 hour to
          install the slide mechanism.
        </li>
        <li>
          Total time: 3 to 6 hours for rail kit + hitch. Cost: $500 to $1,200
          for the rail kit, $400 to $1,500 for the hitch, $200 to $400 for
          professional installation.
        </li>
      </ul>

      <div className="mt-6 rounded-xl border-l-4 border-warning-500 bg-warning-50 p-4">
        <p className="text-sm text-warning-700">
          <strong>Drilling your truck bed is permanent.</strong> If you
          install a gooseneck ball and later sell the truck, the hole remains.
          Many owners install a gooseneck only on dedicated tow vehicles. If
          you intend to keep your truck for personal use and resale value
          matters, a 5th wheel rail kit is easier to remove (four bolts per
          rail) and leaves only small mounting holes that can be plugged.
        </p>
      </div>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Short-Bed Truck Considerations
      </h2>
      <p className="mt-3 text-gray-700">
        Short-bed trucks (under 6 feet of bed length) face a specific
        challenge with 5th wheel towing. The trailer nose can collide with
        the rear cab window during sharp turns. There are three solutions:
      </p>
      <ul className="mt-3 ml-6 list-disc space-y-2 text-gray-700">
        <li>
          <strong>Sliding 5th wheel hitch.</strong> Slides rearward during a
          turn, giving the trailer nose clearance. Adds 100 to 150 lbs and
          requires manual or automated sliding.
        </li>
        <li>
          <strong>Rotating pin box.</strong> Replaces the standard pin box on
          the trailer with one that rotates 90 degrees during turns. Adds
          height but no extra weight in the bed.
        </li>
        <li>
          <strong>Gooseneck adapter.</strong> Allows a 5th wheel trailer to
          connect to a gooseneck ball. The ball sits further back in the bed,
          giving more cab clearance.
        </li>
      </ul>
      <p className="mt-3 text-gray-700">
        Gooseneck hitches do not have this clearance issue because the
        coupler is mechanically simpler and tolerates more articulation. A
        gooseneck ball in a short-bed truck works without any modification.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Which Should You Choose?
      </h2>
      <div className="mt-4 space-y-4">
        <div className="rounded-xl border-l-4 border-brand-500 bg-brand-50 p-5">
          <h3 className="font-semibold text-brand-800">
            Choose a 5th wheel hitch if:
          </h3>
          <ul className="mt-2 ml-6 list-disc space-y-1 text-sm text-brand-700">
            <li>You tow 5th wheel RVs (the industry standard)</li>
            <li>You want the widest selection of trailer brands and models</li>
            <li>Your truck has an OEM 5th wheel prep package</li>
            <li>You tow long-bed (8 ft) trucks and do not need sliding hitches</li>
            <li>You want to preserve resale value of your truck bed</li>
          </ul>
        </div>
        <div className="rounded-xl border-l-4 border-brand-500 bg-brand-50 p-5">
          <h3 className="font-semibold text-brand-800">
            Choose a gooseneck if:
          </h3>
          <ul className="mt-2 ml-6 list-disc space-y-1 text-sm text-brand-700">
            <li>You tow a mix of trailers (horse, flatbed, equipment, RV)</li>
            <li>You want full bed access when not towing</li>
            <li>You tow agricultural or commercial trailers</li>
            <li>You have a short-bed truck and want to avoid slider hitches</li>
            <li>You tow heavy loads and want the highest raw tow rating</li>
          </ul>
        </div>
      </div>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Bed Space Comparison (Visualized)
      </h2>
      <p className="mt-3 text-gray-700">
        Here is what each setup looks like in a standard 6.5-foot bed. The
        numbers assume the ball or hitch is positioned just forward of the
        rear axle.
      </p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border-2 border-brand-200 p-5">
          <h3 className="font-semibold text-brand-700">Gooseneck (Not Hitched)</h3>
          <p className="mt-2 text-sm">
            <strong>Used bed length:</strong> 0 inches (ball cover plate is
            flush with bed floor)
          </p>
          <p className="mt-1 text-sm">
            <strong>Used bed height:</strong> 0 inches
          </p>
          <p className="mt-3 text-xs text-gray-500">
            You can haul plywood, motorcycles, or cargo boxes with the ball
            installed. Cover plate is flush and removable.
          </p>
        </div>
        <div className="rounded-xl border-2 border-brand-200 p-5">
          <h3 className="font-semibold text-brand-700">5th Wheel Hitch (Installed)</h3>
          <p className="mt-2 text-sm">
            <strong>Used bed length:</strong> 14–22 inches
          </p>
          <p className="mt-1 text-sm">
            <strong>Used bed height:</strong> 12–16 inches
          </p>
          <p className="mt-3 text-xs text-gray-500">
            Hitch must be removed for full bed use. Removing and re-installing
            a 5th wheel hitch takes 15–30 minutes and requires 100–200 lbs of
            lifting.
          </p>
        </div>
      </div>

      <div className="mt-10 rounded-2xl bg-brand-600 p-8 text-center text-white">
        <h2 className="text-2xl font-bold">
          Calculate Your Payload and Pin Weight
        </h2>
        <p className="mt-2 text-brand-100">
          Both gooseneck and 5th wheel hitches push your payload hard. Check
          the numbers before you choose your truck or trailer.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link
            href="/payload-calculator"
            className="inline-block rounded-xl bg-white px-6 py-3 text-sm font-bold text-brand-700 shadow-lg transition-all hover:bg-brand-50 active:scale-[0.99]"
          >
            Payload Calculator
          </Link>
          <Link
            href="/towing-capacity-calculator"
            className="inline-block rounded-xl bg-white px-6 py-3 text-sm font-bold text-brand-700 shadow-lg transition-all hover:bg-brand-50 active:scale-[0.99]"
          >
            Towing Capacity Calculator
          </Link>
          <Link
            href="/gvwr-calculator"
            className="inline-block rounded-xl bg-white px-6 py-3 text-sm font-bold text-brand-700 shadow-lg transition-all hover:bg-brand-50 active:scale-[0.99]"
          >
            GVWR Calculator
          </Link>
        </div>
      </div>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Sources &amp; References
      </h2>
      <ul className="mt-3 space-y-1 text-sm text-gray-600">
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
            href="https://www.sae.org/standards/content/j2638/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            SAE J2638 — Fifth Wheel Kingpin Performance
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
            href="https://www.etrailer.com/faq-fifth-wheel-hitch.htm"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            etrailer — 5th Wheel Hitch Buyer&apos;s Guide
          </a>
        </li>
        <li>
          <a
            href="https://www.etrailer.com/faq-gooseneck-hitch.htm"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            etrailer — Gooseneck Hitch Buyer&apos;s Guide
          </a>
        </li>
        <li>
          <a
            href="https://www.bwtrailerhitches.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            B&amp;W Trailer Hitches
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
              href="/guides/fifth-wheel-vs-travel-trailer"
              className="text-brand-600 hover:underline"
            >
              5th Wheel vs Travel Trailer
            </Link>
          </li>
          <li>
            <Link
              href="/guides/fifth-wheel-pin-weight"
              className="text-brand-600 hover:underline"
            >
              5th Wheel Pin Weight
            </Link>
          </li>
          <li>
            <Link
              href="/guides/trailer-hitch-classes-explained"
              className="text-brand-600 hover:underline"
            >
              Trailer Hitch Classes Explained
            </Link>
          </li>
          <li>
            <Link
              href="/guides/payload-capacity"
              className="text-brand-600 hover:underline"
            >
              Payload Capacity Explained
            </Link>
          </li>
          <li>
            <Link
              href="/guides/three-quarter-ton-truck-towing"
              className="text-brand-600 hover:underline"
            >
              3/4-Ton Truck Towing Capacity
            </Link>
          </li>
          <li>
            <Link
              href="/guides/can-ram-2500-tow-keystone-montana"
              className="text-brand-600 hover:underline"
            >
              Can a RAM 2500 Tow a Keystone Montana?
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}