import type { Metadata } from "next";
import Link from "next/link";
import { FaqJsonLd, ArticleJsonLd } from "@/components/seo/JsonLd";
import { DEFAULT_OG_IMAGES } from "@/lib/seo/default-og-image";

export const metadata: Metadata = {
  title:
    "RV Towing Mirrors: Legal Requirements, Types & Best Options for 2025",
  description:
    "Towing mirrors are required by law in most states. Learn which mirror types work best for RV towing, legal requirements by state, how to install and adjust towing mirrors, and top product picks.",
  alternates: {
    canonical: "https://rvtowingcalc.com/guides/rv-towing-mirrors-guide",
  },
  openGraph: {
    title:
      "RV Towing Mirrors: Legal Requirements, Types & Best Options for 2025",
    description:
      "Complete guide to RV towing mirrors. State-by-state legal requirements, mirror type comparison (clip-on, slip-on, full replacement), installation, adjustment, and top product recommendations.",
    url: "https://rvtowingcalc.com/guides/rv-towing-mirrors-guide",
    images: DEFAULT_OG_IMAGES,
  },
};

const FAQS = [
  {
    q: "Are towing mirrors required by law?",
    a: "Yes, in most U.S. states. While federal law does not mandate specific mirror sizes, virtually all states require that you can see 200 feet behind your vehicle (some states require 200 feet on each side). If your trailer is wider than your tow vehicle, your factory mirrors cannot satisfy this requirement, making extended towing mirrors legally required. Several states, including California, Texas, and Florida, explicitly require side mirrors on both sides when towing a trailer that obstructs rearward visibility. Driving without adequate mirrors when towing can also result in citations for 'obstructed view' or 'unsafe equipment.'",
  },
  {
    q: "What is the difference between clip-on, slip-on, and full replacement towing mirrors?",
    a: "Clip-on mirrors attach over your factory mirror glass with spring clips or straps. They are the cheapest option ($30-$80) and easy to install, but they vibrate and have limited adjustability. Slip-on mirrors slide over your entire factory mirror housing like a sleeve, offering better stability and a secondary mirror surface ($50-$150). Full replacement mirrors bolt onto your door in place of factory mirrors, providing the largest viewing area and OEM-like stability ($200-$600 per pair). Full replacements are the best option for frequent towers.",
  },
  {
    q: "Can I use camera-based towing mirrors instead of physical mirrors?",
    a: "Wireless backup camera systems (like the Furrion Vision S or RVS systems) are excellent supplements to physical mirrors but should not fully replace them. Cameras have latency (0.1-0.5 seconds), can fail in heavy rain or fog, and do not provide peripheral vision. The NHTSA does allow camera-based rear visibility systems to meet rear visibility standards under FMVSS 111 for certain applications, but for towing, physical extended mirrors on both sides remain the safest and most reliable option. Use cameras as a backup and for blind-spot coverage, not as your primary rearward visibility.",
  },
  {
    q: "How do I know what size towing mirrors I need?",
    a: "Your towing mirrors should allow you to see the full width of your trailer and at least 200 feet behind it. To check: park your tow vehicle and trailer straight on level ground. Stand at the rear corner of the trailer. You should be able to see yourself in the mirror. If you cannot see the full trailer width in your mirror, you need wider or longer extensions. For trailers 96 inches wide (standard travel trailer), mirrors that extend 4-7 inches beyond your factory mirrors are typically sufficient. For 102-inch-wide trailers (fifth wheels), look for 7-10 inch extensions.",
  },
  {
    q: "Do I need towing mirrors if my trailer is narrower than my tow vehicle?",
    a: "Even if your trailer is narrower than your truck, you still benefit from extended mirrors. A narrow trailer still blocks the lower rearward view, and the extended mirror gives you a better view of traffic behind and alongside the trailer. However, if the trailer is narrower than the tow vehicle and your factory mirrors provide clear rearward visibility of at least 200 feet, extended mirrors are not legally required in most states. That said, they remain a safety best practice for any towing scenario.",
  },
  {
    q: "What are the best towing mirrors for a half-ton truck?",
    a: "For half-ton trucks (F-150, RAM 1500, Silverado 1500), the top-rated options are: (1) CIPA Custom Towing Mirrors (slip-on, $50-$80 per pair) for occasional towers; (2) K Source Snap & Zap or Fit System slip-on mirrors ($40-$70 per pair) for budget users; (3) Trail Ridge full replacement mirrors ($250-$400 per pair) for frequent towers; and (4) OEM tow mirror packages from the dealer ($500-$900 per pair) for the best fit and finish. For most RV owners who tow 10+ times per year, full replacement mirrors from brands like Trail Ridge or 1A Auto are the best value.",
  },
];

const MIRROR_TYPES = [
  {
    type: "Clip-On Mirror",
    mechanism: "Spring clips or ratchet straps attach a secondary mirror over factory glass",
    priceRange: "$30 - $80 / pair",
    pros: "Cheapest option; no tools needed; universal fit; easy to remove when not towing",
    cons: "Vibrates at highway speed; limited adjustment range; can scratch factory mirror; falls off on rough roads",
    bestFor: "Occasional towing; budget-conscious; rental trucks; trailers under 26 ft",
    stability: "Fair",
  },
  {
    type: "Slip-On Mirror",
    mechanism: "Slides over entire factory mirror housing like a sleeve with secondary convex mirror",
    priceRange: "$50 - $150 / pair",
    pros: "More stable than clip-on; larger viewing surface; does not scratch glass; quick install",
    cons: "Vehicle-specific fit; adds bulk; can reduce power mirror function; not as adjustable",
    bestFor: "Weekend warriors; towing 5-15 trips/year; most half-ton truck owners",
    stability: "Good",
  },
  {
    type: "Full Replacement Mirror",
    mechanism: "Bolts to door in place of factory mirror; manual or power telescoping arm",
    priceRange: "$200 - $600 / pair",
    pros: "OEM-level stability; power adjust and heat; telescoping arm; largest viewing area; no vibration",
    cons: "Most expensive; vehicle-specific; requires basic tools to install; heavier",
    bestFor: "Frequent towers; full-time RVers; heavy trailers; anyone who tows 15+ times/year",
    stability: "Excellent",
  },
  {
    type: "OEM Tow Mirror Package",
    mechanism: "Factory-installed or dealer-ordered power telescoping mirrors with integrated turn signals",
    priceRange: "$500 - $900 / pair",
    pros: "Perfect fit; warranty-backed; best integration with vehicle electronics; power telescope",
    cons: "Highest cost; must be ordered with truck or installed by dealer; not transferable between vehicles",
    bestFor: "New truck buyers; full-time towers; maximum convenience and reliability",
    stability: "Excellent",
  },
];

const STATE_REQUIREMENTS = [
  { state: "California", requirement: "Two side mirrors required when towing; 200 ft rear visibility", citation: "CVC 26709" },
  { state: "Texas", requirement: "Side mirrors on both sides if trailer blocks rear view; 200 ft visibility", citation: "TX Transp Code 547.602" },
  { state: "Florida", requirement: "Two side mirrors required when load obstructs rear view", citation: "FL Stat 316.295" },
  { state: "New York", requirement: "Side mirrors required when rear view is obstructed; 200 ft", citation: "NY VTL 375.8" },
  { state: "Pennsylvania", requirement: "Two side mirrors required when towing trailer", citation: "PA Title 75 4524" },
  { state: "Ohio", requirement: "Clear view 200 ft behind required; side mirrors if obstructed", citation: "OAC 4501-41-03" },
  { state: "Michigan", requirement: "Side mirrors on both sides when towing; 200 ft rear visibility", citation: "MCL 257.696" },
  { state: "Washington", requirement: "Two side mirrors required when rear view obstructed", citation: "RCW 46.37.400" },
  { state: "Oregon", requirement: "Side mirrors required when load obstructs rear view", citation: "ORS 815.180" },
  { state: "Arizona", requirement: "Mirrors reflecting 200 ft behind on both sides when towing", citation: "ARS 28-958" },
];

const TOP_PRODUCTS = [
  {
    product: "CIPA Custom Towing Mirror",
    type: "Slip-On",
    price: "$50-$80/pair",
    fit: "F-150, RAM 1500, Silverado 1500, Sierra 1500, Tundra, Titan",
    rating: "Good",
    note: "Best-selling slip-on; easy on/off; fits most half-ton trucks",
  },
  {
    product: "Fit System 80100",
    type: "Slip-On",
    price: "$40-$70/pair",
    fit: "Universal fit for most trucks with standard mirror housings",
    rating: "Good",
    note: "Budget pick; includes two mirror surfaces (flat + convex); some vibration at 70+ MPH",
  },
  {
    product: "Trail Ridge Telescoping",
    type: "Full Replacement",
    price: "$250-$400/pair",
    fit: "F-150 (2015+), RAM 1500 (2019+), Silverado 1500 (2019+)",
    rating: "Excellent",
    note: "Power telescoping; heat; turn signal; best value for frequent towers",
  },
  {
    product: "1A Auto Full Replacement",
    type: "Full Replacement",
    price: "$200-$350/pair",
    fit: "Multiple truck models; check fit guide",
    rating: "Very Good",
    note: "Manual telescoping; includes convex spotter mirror; good warranty",
  },
  {
    product: "Ford OEM Tow Mirrors",
    type: "OEM",
    price: "$600-$900/pair",
    fit: "F-150 (2015+), Super Duty (2017+)",
    rating: "Excellent",
    note: "Power telescope, heat, LED turn signals, memory; dealer-installed or self-install",
  },
  {
    product: "Furrion Vision S Camera",
    type: "Camera System",
    price: "$200-$400",
    fit: "Any trailer with standard marker light housing",
    rating: "Good",
    note: "Wireless backup camera with night vision; supplement to physical mirrors, not replacement",
  },
];

export default function TowingMirrorsGuidePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <FaqJsonLd
        faqs={FAQS}
        baseUrl="https://rvtowingcalc.com/guides/rv-towing-mirrors-guide"
      />
      <ArticleJsonLd
        title="RV Towing Mirrors: Legal Requirements, Types & Best Options for 2025"
        description="Complete guide to RV towing mirrors. State-by-state legal requirements, mirror type comparison, installation, adjustment, and top product recommendations."
        url="https://rvtowingcalc.com/guides/rv-towing-mirrors-guide"
        datePublished="2026-08-09"
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
        <span className="text-gray-900">RV Towing Mirrors Guide</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
        RV Towing Mirrors: Legal Requirements, Types &amp; Best Options
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        If your trailer is wider than your tow vehicle&mdash;and most travel
        trailers are&mdash;your factory mirrors are useless for seeing
        what is alongside and behind your rig. You are legally blind on both
        sides the moment you hook up. Extended towing mirrors are not an
        accessory; they are a safety requirement and, in most states, a legal
        one. This guide covers the law, the four mirror types, how to choose
        the right one for your truck, and how to install and adjust them for
        maximum visibility.
      </p>

      {/* Why you need towing mirrors */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          Why Standard Mirrors Are Not Enough
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            A typical half-ton truck is 80 inches wide (mirror-to-mirror).
            A standard travel trailer is 96 inches wide. That 16-inch
            difference means the trailer sticks out 8 inches on each side
            beyond your truck, completely blocking the rearward view in your
            factory mirrors. You cannot see cars merging alongside you, you
            cannot check if your trailer is tracking straight, and you
            cannot safely change lanes.
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-gray-200 p-5 text-center">
              <p className="text-3xl font-bold text-brand-600">80 in</p>
              <p className="mt-1 text-xs text-gray-500">
                Typical truck width (mirror to mirror)
              </p>
            </div>
            <div className="rounded-xl border border-warning-200 bg-warning-50 p-5 text-center">
              <p className="text-3xl font-bold text-warning-600">96 in</p>
              <p className="mt-1 text-xs text-gray-500">
                Standard travel trailer width
              </p>
            </div>
            <div className="rounded-xl border border-danger-200 bg-danger-50 p-5 text-center">
              <p className="text-3xl font-bold text-danger-600">0 ft</p>
              <p className="mt-1 text-xs text-gray-500">
                Rearward visibility with factory mirrors when towing
              </p>
            </div>
          </div>
          <p>
            The solution is extended towing mirrors that push your viewing
            surface outward beyond the trailer width. These come in four
            types, each with different price points, stability levels, and
            installation requirements.
          </p>
        </div>
      </section>

      {/* Mirror types compared */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          Towing Mirror Types Compared
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            Choosing the right mirror type depends on how often you tow, your
            budget, and whether you want permanent or removable solutions.
            Here is a head-to-head comparison:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-gray-300 bg-gray-50">
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Type
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Mechanism
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Price
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Best For
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Stability
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {MIRROR_TYPES.map((row) => (
                  <tr key={row.type}>
                    <td className="px-4 py-3 font-medium text-gray-700">
                      {row.type}
                    </td>
                    <td className="px-4 py-3 text-xs text-gray-600">
                      {row.mechanism}
                    </td>
                    <td className="px-4 py-3 text-gray-600">
                      {row.priceRange}
                    </td>
                    <td className="px-4 py-3 text-xs text-gray-600">
                      {row.bestFor}
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={
                          "inline-block rounded-full px-2 py-0.5 text-xs font-semibold " +
                          (row.stability === "Excellent"
                            ? "bg-safe-100 text-safe-700"
                            : row.stability === "Very Good"
                            ? "bg-brand-100 text-brand-700"
                            : row.stability === "Good"
                            ? "bg-warning-100 text-warning-700"
                            : "bg-gray-100 text-gray-600")
                        }
                      >
                        {row.stability}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="rounded-xl border-l-4 border-brand-500 bg-brand-50 p-4">
            <p className="text-sm text-brand-700">
              <strong>Our recommendation:</strong> If you tow more than 10
              times per year, invest in full replacement mirrors or order your
              truck with the OEM tow mirror package. The stability, viewing
              area, and power features are worth the premium over slip-on
              mirrors that vibrate and fog up. For occasional towers (5 or
              fewer trips per year), slip-on mirrors like the CIPA Custom are
              perfectly adequate.
            </p>
          </div>
        </div>
      </section>

      {/* Legal requirements */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          Towing Mirror Laws by State
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            While there is no single federal towing mirror law, virtually all
            states require 200 feet of rearward visibility. If your trailer
            blocks your factory mirrors, extended towing mirrors become legally
            required. Here are the specific statutes in the most common
            towing states:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-gray-300 bg-gray-50">
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    State
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Requirement
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Statute
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {STATE_REQUIREMENTS.map((row) => (
                  <tr key={row.state}>
                    <td className="px-4 py-3 font-medium text-gray-700">
                      {row.state}
                    </td>
                    <td className="px-4 py-3 text-xs text-gray-600">
                      {row.requirement}
                    </td>
                    <td className="px-4 py-3 text-xs text-gray-500">
                      {row.citation}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="rounded-xl border-l-4 border-danger-500 bg-danger-50 p-4">
            <p className="text-sm text-danger-700">
              <strong>Important:</strong> These laws apply to all vehicles
              towing trailers, not just commercial trucks. An RV owner without
              extended mirrors can be cited for &ldquo;unsafe equipment&rdquo;
              or &ldquo;obstructed view&rdquo; in any state listed above. The
              fine ranges from $75 to $250 depending on the state and whether
              it is a first offense. More importantly, if you are involved in
              a lane-change accident while towing without adequate mirrors,
              your insurance may deny coverage for negligence.
            </p>
          </div>
          <p>
            Even in states without explicit towing mirror statutes, the
            general requirement for 200 feet of rearward visibility applies
            through traffic safety regulations. If your trailer blocks your
            rear view and you do not have extended mirrors, you are operating
            with obstructed visibility&mdash;which is a citable offense in
            all 50 states under general vehicle safety codes.
          </p>
        </div>
      </section>

      {/* Installation & adjustment */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          How to Install and Adjust Towing Mirrors
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <h3 className="text-lg font-semibold text-gray-900">
            Slip-On / Clip-On Installation
          </h3>
          <ul className="ml-6 list-disc space-y-2">
            <li>
              <strong>Clean the factory mirror housing</strong> with isopropyl
              alcohol to ensure the slip-on grips securely and does not
              scratch the finish.
            </li>
            <li>
              <strong>Stretch the slip-on over the top of the mirror
              housing</strong>, aligning the secondary mirror surface to face
              the same direction as your factory mirror.
            </li>
            <li>
              <strong>Secure any straps or clamps</strong> tightly. Give the
              mirror a firm shake&mdash;if it moves, tighten further. A loose
              slip-on will vibrate at highway speed and can fly off on rough
              roads.
            </li>
            <li>
              <strong>Test before driving:</strong> Sit in the driver&apos;s
              seat and adjust the secondary convex mirror to show the side of
              your trailer and the lane beside it. You should see the trailer
              edge and the traffic lane simultaneously.
            </li>
          </ul>
          <h3 className="mt-6 text-lg font-semibold text-gray-900">
            Full Replacement Installation
          </h3>
          <ul className="ml-6 list-disc space-y-2">
            <li>
              <strong>Disconnect the battery</strong> before starting to
              avoid electrical shorts when disconnecting the factory mirror
              wiring harness.
            </li>
            <li>
              <strong>Remove the interior door panel</strong> (or access
              cover) to reach the mirror mounting bolts and wiring connector.
              Most trucks use 10mm or 13mm bolts.
            </li>
            <li>
              <strong>Disconnect the wiring harness</strong> and remove the
              three or four mounting nuts holding the factory mirror to the
              door.
            </li>
            <li>
              <strong>Position the replacement mirror</strong> and hand-tighten
              the mounting nuts. Reconnect the wiring harness before fully
              torquing the bolts.
            </li>
            <li>
              <strong>Torque to specification</strong> (typically 15-25
              ft-lbs) and reinstall the door panel. Reconnect the battery and
              test all mirror functions: power adjust, heat, turn signals,
              and telescoping arm.
            </li>
          </ul>
          <h3 className="mt-6 text-lg font-semibold text-gray-900">
            Proper Mirror Adjustment for Towing
          </h3>
          <p>
            Correct adjustment is just as important as having the right
            mirror. Here is how to set up towing mirrors for maximum
            visibility:
          </p>
          <div className="space-y-3">
            <div className="flex items-start gap-3 rounded-lg border border-gray-200 p-4">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500 text-xs font-bold text-white">
                1
              </span>
              <div>
                <strong className="text-gray-900">Park on level ground with the trailer attached</strong>
                <p className="mt-1 text-sm text-gray-600">
                  Adjust mirrors with the actual rig you will be driving. The
                  trailer changes your reference points. Sit in your normal
                  driving position.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg border border-gray-200 p-4">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500 text-xs font-bold text-white">
                2
              </span>
              <div>
                <strong className="text-gray-900">Set the main (flat) mirror</strong>
                <p className="mt-1 text-sm text-gray-600">
                  The flat portion should show a small sliver of your
                  trailer&apos;s side (about 1 inch) and the rest should show
                  the traffic lane beside you. This gives you a reference for
                  where the trailer is relative to traffic.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg border border-gray-200 p-4">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500 text-xs font-bold text-white">
                3
              </span>
              <div>
                <strong className="text-gray-900">Set the convex (curved) spotter mirror</strong>
                <p className="mt-1 text-sm text-gray-600">
                  The convex mirror should show the full width of the trailer
                  and the lane directly alongside and behind. It should cover
                  your blind spot&mdash;the area where a car would be if it
                  were hiding alongside the trailer.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg border border-gray-200 p-4">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500 text-xs font-bold text-white">
                4
              </span>
              <div>
                <strong className="text-gray-900">Extend telescoping mirrors fully</strong>
                <p className="mt-1 text-sm text-gray-600">
                  If your mirrors telescope, extend them outward until you can
                  see the full trailer width and 200+ feet behind. When not
                  towing, retract them for daily driving clearance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top product picks */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          Top Towing Mirror Products for 2025
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            Based on customer reviews, expert testing, and value for money,
            here are the top towing mirror products for popular truck models.
            Prices reflect approximate retail as of 2025:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-gray-300 bg-gray-50">
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Product
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Type
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Price
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Fit
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Rating
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {TOP_PRODUCTS.map((row) => (
                  <tr key={row.product}>
                    <td className="px-4 py-3 font-medium text-gray-700">
                      {row.product}
                    </td>
                    <td className="px-4 py-3 text-gray-600">
                      {row.type}
                    </td>
                    <td className="px-4 py-3 text-gray-600">
                      {row.price}
                    </td>
                    <td className="px-4 py-3 text-xs text-gray-600">
                      {row.fit}
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={
                          "inline-block rounded-full px-2 py-0.5 text-xs font-semibold " +
                          (row.rating === "Excellent"
                            ? "bg-safe-100 text-safe-700"
                            : row.rating === "Very Good"
                            ? "bg-brand-100 text-brand-700"
                            : "bg-warning-100 text-warning-700")
                        }
                      >
                        {row.rating}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {TOP_PRODUCTS.map((row) => (
            <div key={row.product} className="rounded-lg border border-gray-200 p-3 text-sm">
              <strong className="text-gray-900">{row.product}</strong>
              <span className="text-gray-600"> — {row.note}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Safety tips */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          Towing Mirror Safety Tips
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <ul className="ml-6 list-disc space-y-2">
            <li>
              <strong>Check mirrors every 8-10 seconds.</strong> When towing,
              you should scan all mirrors every 8-10 seconds, the same
              frequency professional truck drivers use. This is far more
              frequent than most car drivers, but the blind spots around a
              trailer are much larger.
            </li>
            <li>
              <strong>Signal early and change lanes slowly.</strong> Give
              other drivers time to react to your lane change. Signal for at
              least 5 seconds before moving over. Move slowly and watch your
              convex mirror for vehicles in your blind spot.
            </li>
            <li>
              <strong>Check for trailer tracking.</strong> Use your passenger
              side mirror to verify the trailer is tracking straight behind
              you. If the trailer is dog-tracking (crabbing), you may have an
              axle alignment issue or a bent spindle.
            </li>
            <li>
              <strong>Remove slip-on mirrors when not towing.</strong> They
              reduce fuel economy (by 0.5-1 MPG) and can attract theft.
              Clip-on mirrors are designed for temporary use, not permanent
              installation.
            </li>
            <li>
              <strong>Consider a backup camera supplement.</strong> Wireless
              trailer cameras like the Furrion Vision S provide rear and
              side views that mirrors cannot. They are especially useful for{" "}
              <Link
                href="/guides/how-to-back-up-travel-trailer"
                className="font-semibold text-brand-600 underline"
              >
                backing up your trailer
              </Link>{" "}
              and monitoring traffic in heavy rain.
            </li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-12 rounded-2xl bg-brand-600 p-8 text-center text-white">
        <h2 className="text-2xl font-bold">
          Is Your Tow Vehicle Ready for the Road?
        </h2>
        <p className="mt-2 text-brand-100">
          Mirrors are just one part of a safe towing setup. Verify your
          towing capacity, payload, and weight distribution before your next
          trip. All calculators are free.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link
            href="/towing-capacity-calculator"
            className="inline-block rounded-xl bg-white px-6 py-3 text-sm font-bold text-brand-700 shadow-lg transition-all hover:bg-brand-50 active:scale-[0.99]"
          >
            Towing Capacity Calculator
          </Link>
          <Link
            href="/payload-calculator"
            className="inline-block rounded-xl bg-white px-6 py-3 text-sm font-bold text-brand-700 shadow-lg transition-all hover:bg-brand-50 active:scale-[0.99]"
          >
            Payload Calculator
          </Link>
          <Link
            href="/gvwr-calculator"
            className="inline-block rounded-xl bg-white px-6 py-3 text-sm font-bold text-brand-700 shadow-lg transition-all hover:bg-brand-50 active:scale-[0.99]"
          >
            GVWR Calculator
          </Link>
        </div>
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
              href="/guides/how-to-back-up-travel-trailer"
              className="text-brand-600 hover:underline"
            >
              How to Back Up a Travel Trailer: Step-by-Step Guide
            </Link>
          </li>
          <li>
            <Link
              href="/guides/weight-distribution-hitch-setup"
              className="text-brand-600 hover:underline"
            >
              Weight Distribution Hitch Setup: Step-by-Step Guide
            </Link>
          </li>
          <li>
            <Link
              href="/guides/rv-trailer-sway-control"
              className="text-brand-600 hover:underline"
            >
              RV Trailer Sway Control: Causes, Prevention &amp; Devices
            </Link>
          </li>
          <li>
            <Link
              href="/guides/best-half-ton-trucks-8000-lbs"
              className="text-brand-600 hover:underline"
            >
              Best Half-Ton Trucks for Towing 8,000 lbs
            </Link>
          </li>
          <li>
            <Link
              href="/guides/can-suv-tow-small-travel-trailer"
              className="text-brand-600 hover:underline"
            >
              Can My SUV Tow a Small Travel Trailer?
            </Link>
          </li>
        </ul>
      </section>

      {/* External references */}
      <section className="mt-12 border-t border-gray-200 pt-8">
        <h2 className="text-lg font-bold text-gray-900">
          Sources &amp; References
        </h2>
        <ul className="mt-3 space-y-1 text-sm text-gray-500">
          <li>
            <a
              href="https://www.nhtsa.gov/equipment/towing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 hover:underline"
            >
              NHTSA Towing Safety Guidelines
            </a>{" "}
            &mdash; nhtsa.gov
          </li>
          <li>
            <a
              href="https://www.fmcsa.dot.gov/regulations/title49/part/393"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 hover:underline"
            >
              FMCSA 49 CFR 393: Rear Visibility &amp; Mirror Requirements
            </a>{" "}
            &mdash; fmcsa.dot.gov
          </li>
          <li>
            <a
              href="https://www.rvia.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 hover:underline"
            >
              RV Industry Association (RVIA) Safety Education
            </a>{" "}
            &mdash; rvia.org
          </li>
          <li>
            <a
              href="https://www.etrailer.com/faq-towingmirrors.aspx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 hover:underline"
            >
              etrailer Towing Mirror Buyer&apos;s Guide
            </a>{" "}
            &mdash; etrailer.com
          </li>
          <li>
            <a
              href="https://www.cipausa.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 hover:underline"
            >
              CIPA Custom Towing Mirrors
            </a>{" "}
            &mdash; cipausa.com
          </li>
          <li>
            <a
              href="https://www.furrion.com/products/vision-s"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 hover:underline"
            >
              Furrion Vision S Wireless Observation System
            </a>{" "}
            &mdash; furrion.com
          </li>
        </ul>
      </section>
    </div>
  );
}
