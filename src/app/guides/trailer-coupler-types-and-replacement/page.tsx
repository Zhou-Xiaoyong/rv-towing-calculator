import type { Metadata } from "next";
import Link from "next/link";
import { FaqJsonLd, ArticleJsonLd, HowToJsonLd } from "@/components/seo/JsonLd";
import { DEFAULT_OG_IMAGES } from "@/lib/seo/default-og-image";

import AmazonAffiliate from "@/components/AmazonAffiliate";
export const metadata: Metadata = {
  title: "Trailer Coupler Types and How to Replace a Worn Coupler",
  description:
    "Compare trailer coupler types and ball sizes, learn the wear limits that mean replacement, and follow the step-by-step install with correct Grade 8 hardware and torque.",
  keywords: [
    "trailer coupler types",
    "how to replace a trailer coupler",
    "2 inch vs 2-5/16 ball",
    "worn trailer coupler",
    "trailer coupler replacement",
    "coupler latch adjustment",
  ],
  alternates: {
    canonical:
      "https://www.rvtowingcalc.com/guides/trailer-coupler-types-and-replacement",
  },
  openGraph: {
    title: "Trailer Coupler Types and How to Replace a Worn Coupler",
    description:
      "A-frame, straight and adjustable coupler types, ball and shank matching, the wear limits that condemn a coupler, and the step-by-step replacement procedure with torque specs.",
    url: "https://www.rvtowingcalc.com/guides/trailer-coupler-types-and-replacement",
    images: DEFAULT_OG_IMAGES,
  },
};

const FAQS = [
  {
    q: "What size coupler do I need for my travel trailer?",
    a: "Work it out from three measurements, and do it in this order. First, match your existing hitch ball diameter: most travel trailers use a 2 inch ball, and larger multi-axle trailers use 2-5/16 inch. Second, confirm the coupler's gross trailer weight rating exceeds your trailer's GVWR, not the empty weight. Third, match the mounting geometry: an A-frame coupler has to sit at the correct tongue angle, and a channel coupler has to be the right width for the tongue. If the coupler rating is lower than the trailer's axle capacity, you have chosen the wrong part, however well it fits.",
  },
  {
    q: "Can I use a 2 inch ball in a 2-5/16 inch coupler?",
    a: "No, and this is the single most dangerous mismatch in towing. A 2 inch ball inside a 2-5/16 inch coupler will not lock, because the latch closes on nothing. It may feel seated when the trailer is stationary and it will separate under braking, in a turn, or on the first expansion joint that bounces the tongue. The reverse combination does not even fit. Match the ball to the coupler by diameter exactly, verify the ball's own load rating is at or above your loaded tongue weight, and if you tow two trailers with different couplers, use two balls and check which one is in the mount every single time.",
  },
  {
    q: "How do I know if my trailer coupler is worn out?",
    a: "Clamp the coupler onto a new, matched ball and try to lift the tongue off. A healthy coupler locks positively with no vertical lift and only a light rotational rattle. If the tongue lifts, if the latch sits on top of the ball rather than beneath it, if the latch needs a hammer to close, or if the safety pin hole is wallowed out, the coupler is done. Inspect the welds and the mounting hardware at the same time: cracks at the weld toe, rust bleeding out of a weld, or elongated bolt holes are all condemning findings. Painting over them does not restore the part.",
  },
  {
    q: "Should I bolt or weld a replacement coupler?",
    a: "Bolt-on is the practical choice for almost every recreational trailer, and it is what most trailers leave the factory with. Grade 8 bolts through clean, correctly sized holes, with nylon insert lock nuts, hold just as well as a weld when they are torqued properly, and the joint can be inspected and retorqued. Welding is appropriate for heavy equipment trailers and for tongues too thin or too short to bolt. If you weld, the welds must be made by a qualified fabricator on a properly prepared joint, because a bad weld on a coupler fails without warning and there is no visible gap before it does.",
  },
  {
    q: "How often should a trailer coupler be replaced?",
    a: "There is no fixed interval, because a coupler in dry storage outlives three of them in coastal salt air. Inspect it before every trip and replace it when it fails a test rather than on a calendar. The practical triggers are vertical play on a new ball, a latch that no longer snaps shut under its own spring, cracks or deep rust scale at the welds, and any deformation of the socket mouth. In a salt-air or year-round towing environment, expect a coupler to need replacement somewhere in the five to ten year range; in a dry climate it may last the life of the trailer.",
  },
];

const COUPLER_TYPE_TABLE = [
  [
    "A-frame",
    "Travel trailers, boat trailers, utility and landscape trailers",
    "Bolts or welds at the apex of the two tongue legs",
    "Tongue angle (50 degrees is the common standard, 32 degrees appears on some builds), ball size, rated capacity",
  ],
  [
    "Straight channel",
    "Boat trailers and small utilities with a single-beam tongue",
    "Bolts to the flat top of the beam",
    "Channel width and the hole pattern; the frame has to be flat and sound",
  ],
  [
    "Adjustable channel",
    "Trailers that see more than one tow vehicle, or need height change",
    "Slides and locks on the tongue instead of being fixed",
    "The adjustment mechanism itself - a worn adjuster lets the whole head move under load",
  ],
  [
    "Cushioned A-frame",
    "Trailers that see rough roads and heavy surge loads",
    "Bolts or welds, with a rubber or spring element in the body",
    "Cushion condition; a collapsed cushion passes shock straight into the frame",
  ],
  [
    "Pintle and lunette ring",
    "Heavy equipment and military-pattern trailers",
    "Bolts or welds to a ring, not a ball",
    "Not a ball system at all - never mix pintle parts with a ball coupler",
  ],
];

const BALL_TABLE = [
  ["1-7/8 in", "3/4 in", "Up to about 2,000 lb", "Jet skis, tiny utilities, light folding trailers"],
  ["2 in", "3/4 in (to about 3,500 lb) or 1 in (to about 6,000 lb)", "3,500 - 6,000 lb", "Most utility, boat and small travel trailers"],
  ["2-5/16 in", "1 in or 1-1/4 in", "8,000 - 10,000 lb and up", "Large travel trailers, equipment and car trailers"],
  ["3 in", "1-1/4 in or 1-1/2 in", "Commercial", "Agriculture and industrial applications"],
];

const INSPECTION_TABLE = [
  [
    "Socket fit",
    "Clamp onto a new, matched ball and lift the tongue",
    "The tongue lifts free, or there is obvious vertical play",
  ],
  [
    "Latch closure",
    "Close the latch on the ball by hand and watch where it lands",
    "The latch sits on top of the ball instead of locking beneath it",
  ],
  [
    "Latch spring and trigger",
    "Operate it several times and watch for binding or slack",
    "It does not snap shut under its own spring, or needs force to close",
  ],
  [
    "Safety pin hole",
    "With the latch closed, seat the pin fully",
    "The hole is wallowed out, or the pin will not pass all the way through",
  ],
  [
    "Welds",
    "Look at every weld toe with a light; look for rust bleed",
    "Cracks, deep pitting, or a rust line running out of a weld",
  ],
  [
    "Mounting hardware",
    "Check every bolt head for grade markings",
    "Grade 5 or unmarked hardware, or elongated bolt holes",
  ],
  [
    "Ball condition",
    "Caliper the ball at three points and look for flat spots",
    "Out of round, flat spotted, pitted, or below nominal diameter",
  ],
  [
    "Coupler body",
    "Sight down the socket mouth and look for out-of-round",
    "A worn lip, visible deformation, or heavy rust scale",
  ],
];

const TORQUE_TABLE = [
  ["1-7/8 in", "3/4 in", "150 - 200 lb-ft"],
  ["2 in", "3/4 in or 1 in", "250 - 300 lb-ft"],
  ["2-5/16 in", "1 in or 1-1/4 in", "350 - 450 lb-ft"],
];

const HOWTO_STEPS = [
  {
    name: "Confirm the replacement rating and fit",
    text: "Match the new coupler to your existing ball diameter, confirm its gross trailer weight rating exceeds your trailer's GVWR, and confirm its tongue weight rating exceeds your expected loaded tongue weight. Match the mounting geometry: A-frame angle or channel width, bolt hole pattern, and whether the tongue is thick enough for the fasteners. A coupler rated below the trailer's axle capacity is the wrong part regardless of fit.",
  },
  {
    name: "Support the tongue and measure",
    text: "Chock the trailer wheels and support the tongue on a jack stand so the coupler is unloaded. Measure and photograph the existing coupler's position on the tongue before removing anything, including the distance from the coupler to the frame crossmember and the exact bolt hole locations. Measure the tongue width and thickness with a caliper rather than a tape measure.",
  },
  {
    name: "Remove the old coupler",
    text: "Disconnect the safety chains and breakaway cable, and remove the wiring from the coupler area. Unbolt the old coupler; if the fasteners are seized, use penetrating oil and heat rather than cutting the tongue. If the old coupler is welded on, have the welds cut by a qualified fabricator and dress the surface flat before fitting the replacement. Inspect the tongue underneath for cracks or deep corrosion while it is exposed.",
  },
  {
    name: "Fit the new coupler",
    text: "Set the new coupler on the tongue in the same position, check that it sits flat with no gap under the base, and confirm the latch opens and closes freely before you fasten anything. Never shim an oversized coupler with washers to take up a gap - a gapped joint puts shear load on the fasteners and will fail. If the fit is wrong, order the correct coupler.",
  },
  {
    name: "Fasten with Grade 8 hardware",
    text: "Use new SAE Grade 8 bolts, identifiable by six radial lines on the head, with hardened washers and nylon insert lock nuts. Do not reuse old bolts. Torque to the coupler manufacturer's specification with a calibrated torque wrench - half-inch Grade 8 hardware commonly lands in the 75 to 110 lb-ft range - and recheck every fastener after the first 50 miles of towing.",
  },
  {
    name: "Verify before the first trip",
    text: "Clamp the coupler onto a matched ball, close the latch, fit the safety pin, and try to lift the tongue by hand. There should be no vertical movement and only a light rotational rattle. Reconnect the safety chains crossed under the tongue and the breakaway cable, test the lights, and confirm the trailer sits level at your hitch height. Re-torque the mounting bolts and check for play again after the first 50 miles.",
  },
];

export default function TrailerCouplerTypesAndReplacementPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <ArticleJsonLd
        title="Trailer Coupler Types and How to Replace a Worn Coupler"
        description="Trailer coupler types explained, ball and shank matching, the wear limits that condemn a coupler, and a step-by-step replacement procedure with Grade 8 hardware and correct torque values."
        url="https://www.rvtowingcalc.com/guides/trailer-coupler-types-and-replacement"
        datePublished="2026-10-01"
      />
      <FaqJsonLd
        faqs={FAQS}
        baseUrl="https://www.rvtowingcalc.com/guides/trailer-coupler-types-and-replacement"
      />
      <HowToJsonLd
        name="How to Replace a Trailer Coupler"
        description="Step-by-step replacement of a worn trailer coupler, including rating checks, tongue measurement, Grade 8 hardware and post-install verification."
        steps={HOWTO_STEPS}
        totalTime="PT2H"
        url="https://www.rvtowingcalc.com/guides/trailer-coupler-types-and-replacement"
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
        <span className="text-gray-900">Trailer Couplers</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
        Trailer Coupler Types and Replacement: A Safety-Critical Guide
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        The trailer coupler is the one part that holds your entire trailer to
        your truck, and it is the part owners look at least. It wears gradually,
        it gives no warning before it fails, and a coupler that passes a walk
        around at the storage yard can still separate on the highway. This guide
        covers the coupler types you will actually encounter, how to match ball
        and coupler correctly, how to tell when a coupler is finished, and how to
        replace one properly.
      </p>

      <div className="mt-8 rounded-xl bg-brand-50 p-6">
        <h2 className="text-lg font-bold text-brand-800">The Short Answer</h2>
        <p className="mt-2 text-brand-700">
          Most travel trailers use an <strong>A-frame coupler</strong> on a{" "}
          <strong>2 inch</strong> ball, while larger multi-axle trailers move to{" "}
          <strong>2-5/16 inch</strong>. Match the ball to the coupler by
          diameter, exactly. A replacement coupler must be rated above your
          trailer&apos;s <strong>GVWR</strong>, not its empty weight, and must
          also clear your loaded <strong>tongue weight</strong> &mdash; a high
          gross trailer weight rating with a low tongue weight rating is a trap.
          Fasten with new <strong>Grade 8 bolts</strong> and lock nuts, torque
          them, and retorque after the first 50 miles.
        </p>
      </div>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        The Two Ratings a Coupler Has to Beat
      </h2>
      <p className="mt-3 text-gray-700">
        Couplers carry two separate ratings, and both are stamped or published
        somewhere on the part. The first is gross trailer weight, which is the
        total loaded weight of the trailer. The second is tongue weight, which is
        the vertical load the coupler carries at the ball. Buying on the first
        number and ignoring the second is the most common coupler mistake there
        is.
      </p>
      <p className="mt-3 text-gray-700">
        A coupler advertised at a very high gross trailer weight can still be
        useless to you if its tongue weight rating is low, because tongue weight
        is what actually pulls the socket down onto the ball and through your
        receiver. Check both against your real numbers rather than the
        brochure&apos;s: our{" "}
        <Link href="/tongue-weight-calculator" className="text-brand-600 hover:underline">
          tongue weight calculator
        </Link>{" "}
        will tell you what your loaded trailer actually applies, and the{" "}
        <Link href="/gvwr-calculator" className="text-brand-600 hover:underline">
          GVWR calculator
        </Link>{" "}
        gives you the ceiling the coupler has to clear. Where a coupler, a ball
        and a receiver disagree, the{" "}
        <Link
          href="/guides/trailer-hitch-classes-explained"
          className="text-brand-600 hover:underline"
        >
          weakest link governs
        </Link>
        .
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Coupler Types You Will Actually See
      </h2>
      <p className="mt-3 text-gray-700">
        Five families cover almost everything on the road in North America. The
        type you have is set by your trailer&apos;s tongue geometry, and a
        replacement has to match it rather than be adapted to it.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">Type</th>
              <th className="border px-3 py-2 text-left font-semibold">
                Where you see it
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                How it mounts
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                What to check
              </th>
            </tr>
          </thead>
          <tbody>
            {COUPLER_TYPE_TABLE.map((row, i) => (
              <tr key={row[0]} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                <td className="border px-3 py-2 font-semibold">{row[0]}</td>
                <td className="border px-3 py-2">{row[1]}</td>
                <td className="border px-3 py-2">{row[2]}</td>
                <td className="border px-3 py-2 text-xs">{row[3]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm text-gray-500">
        Sleeve-lock, trigger, posi-lock and yoke latch mechanisms appear across
        these types. Sleeve-lock gives the clearest visual confirmation of full
        engagement and is the safest choice for heavy trailers; trigger latches
        are faster for frequent hookups; yoke latches have no spring to fail but
        need more effort to close.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Ball Size: Where the Dangerous Mismatches Happen
      </h2>
      <p className="mt-3 text-gray-700">
        Ball diameter is not a suggestion. The coupler socket has to enclose the
        ball completely, and the latch has to close beneath it. Four diameters
        cover the whole market, and the ball shank has to match your ball mount
        as well as the diameter matching the coupler.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">
                Ball diameter
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Typical shank
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Typical trailer weight
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Used on
              </th>
            </tr>
          </thead>
          <tbody>
            {BALL_TABLE.map((row, i) => (
              <tr key={row[0]} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                <td className="border px-3 py-2 font-semibold">{row[0]}</td>
                <td className="border px-3 py-2">{row[1]}</td>
                <td className="border px-3 py-2">{row[2]}</td>
                <td className="border px-3 py-2 text-xs">{row[3]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm text-gray-500">
        The lower of the coupler rating and the ball rating always governs.
        Grades and capacities vary by manufacturer, so verify the stamp on the
        actual part rather than the packaging.
      </p>

      <p className="mt-4 text-gray-700">
        Ball size is also the easiest thing to verify and the easiest to get
        wrong, because a mismatched pair can feel correct when the trailer is
        stationary. The diagram below shows the difference between a coupler that
        is doing its job and one that has worn past the point where it can.
      </p>

      <svg
        viewBox="0 0 680 300"
        width="100%"
        role="img"
        aria-label="Two diagrams comparing a coupler in correct condition against a worn coupler. On the left, the socket shell wraps the ball and the latch closes directly against the underside of the ball with no gap. On the right, the socket is elongated and the latch sits low, leaving a vertical gap between the latch and the ball that allows the tongue to lift under load."
        className="mt-6 w-full rounded-xl border border-gray-200 bg-white"
      >
        <text x="0" y="20" fontSize="14" fontWeight="700" fill="#111827">
          Coupler fit: what a healthy part looks like
        </text>

        <rect x="10" y="40" width="320" height="230" rx="12" fill="#f9fafb" stroke="#e5e7eb" />
        <text x="170" y="66" fontSize="14" fontWeight="700" fill="#1e8e3e" textAnchor="middle">
          Correct fit
        </text>

        <circle cx="170" cy="150" r="36" fill="#e5e7eb" stroke="#4b5563" strokeWidth="2" />
        <text x="170" y="154" fontSize="10" fill="#6b7280" textAnchor="middle">
          ball
        </text>
        <path
          d="M 122 150 A 48 48 0 0 1 218 150"
          fill="none"
          stroke="#1f2937"
          strokeWidth="12"
          strokeLinecap="round"
        />
        <text x="170" y="112" fontSize="10" fill="#6b7280" textAnchor="middle">
          socket shell
        </text>
        <rect x="126" y="186" width="88" height="11" rx="3" fill="#1a73e8" />
        <text x="170" y="222" fontSize="11" fill="#374151" textAnchor="middle">
          Latch closes against the ball
        </text>
        <text x="170" y="244" fontSize="11" fontWeight="700" fill="#1e8e3e" textAnchor="middle">
          No vertical play
        </text>

        <rect x="350" y="40" width="320" height="230" rx="12" fill="#f9fafb" stroke="#e5e7eb" />
        <text x="510" y="66" fontSize="14" fontWeight="700" fill="#c5221f" textAnchor="middle">
          Worn fit
        </text>

        <circle cx="510" cy="150" r="36" fill="#e5e7eb" stroke="#4b5563" strokeWidth="2" />
        <text x="510" y="154" fontSize="10" fill="#6b7280" textAnchor="middle">
          ball
        </text>
        <path
          d="M 456 150 A 54 54 0 0 1 564 150"
          fill="none"
          stroke="#1f2937"
          strokeWidth="12"
          strokeLinecap="round"
        />
        <text x="510" y="92" fontSize="10" fill="#6b7280" textAnchor="middle">
          elongated socket
        </text>
        <rect x="466" y="200" width="88" height="11" rx="3" fill="#1a73e8" />
        <line x1="510" y1="190" x2="510" y2="198" stroke="#ea4335" strokeWidth="2" />
        <polygon points="505,191 515,191 510,186" fill="#ea4335" />
        <polygon points="505,197 515,197 510,202" fill="#ea4335" />
        <text x="510" y="228" fontSize="11" fontWeight="700" fill="#c5221f" textAnchor="middle">
          Gap of about 1/8 in under load
        </text>
        <text x="510" y="248" fontSize="11" fill="#374151" textAnchor="middle">
          Tongue lifts; the latch takes the shock
        </text>

        <text x="0" y="290" fontSize="12" fill="#6b7280">
          Test it yourself: clamp onto a new, matched ball and try to lift the tongue by hand.
        </text>
      </svg>

      <h3 className="mt-6 text-xl font-semibold text-gray-900">
        Why a loose coupler is worse than a broken one
      </h3>
      <p className="mt-2 text-gray-700">
        A coupler that has separated completely is obvious. A coupler with a
        sixteenth of an inch of vertical play is not, and it is doing continuous
        damage. Every expansion joint, every pothole and every braking event
        loads the latch and the pin in shear instead of in tension, which is the
        direction they were not designed to resist. That is why a coupler
        inspection is a hands-on test with a new ball and not a visual glance
        from standing height.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        How to Tell a Coupler Is Worn Out
      </h2>
      <p className="mt-3 text-gray-700">
        Run this checklist before every trip season and any time you buy a used
        trailer. Anything in the right hand column is a replacement, not an
        adjustment &mdash; a coupler is not a serviceable part once the socket or
        the latch geometry has moved.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">
                What to check
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                How to test it
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Replace if
              </th>
            </tr>
          </thead>
          <tbody>
            {INSPECTION_TABLE.map((row, i) => (
              <tr key={row[0]} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                <td className="border px-3 py-2 font-semibold">{row[0]}</td>
                <td className="border px-3 py-2">{row[1]}</td>
                <td className="border px-3 py-2 text-xs">{row[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm text-gray-500">
        Consumers can check safety recalls on trailer components through NHTSA
        before assuming a part is sound.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Replacing a Coupler Step by Step
      </h2>
      <p className="mt-3 text-gray-700">
        This is a two hour job with hand tools for a bolt-on coupler and a shop
        job for a welded one. Work through the steps in order; the measurement
        step is what keeps the replacement in the same position as the original.
      </p>

      {HOWTO_STEPS.map((step, i) => (
        <div key={step.name} className="mt-4">
          <h3 className="text-lg font-semibold text-gray-900">
            {i + 1}. {step.name}
          </h3>
          <p className="mt-1 text-gray-700">{step.text}</p>
        </div>
      ))}

      <h3 className="mt-6 text-xl font-semibold text-gray-900">
        Bolt-on versus weld-on
      </h3>
      <p className="mt-2 text-gray-700">
        Bolt-on couplers dominate recreational trailers and are the better choice
        for almost every owner, because the joint can be inspected, retorqued and
        reversed. Welding suits heavy equipment and tongues that are too thin or
        too short for fasteners. Two rules apply to bolts that owners get wrong:
        the holes must match the coupler&apos;s footprint with no slotting or
        washers to bridge a gap, and the hardware must be Grade 8 with nylon
        insert lock nuts. Grade 5 hardware and hardware bought loose from a
        hardware store bin are the usual cause of a coupler that comes loose
        season after season. If you weld, at minimum strip the paint, fit the
        joint tight, and have a qualified fabricator run the bead &mdash; and
        inspect the welds annually thereafter.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Hardware and Torque Specs
      </h2>
      <p className="mt-3 text-gray-700">
        Ball torque is set by ball diameter and shank size. Use the ball
        manufacturer&apos;s figure where you have it; these ranges are the
        common industry values.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">
                Ball diameter
              </th>
              <th className="border px-3 py-2 text-left font-semibold">Shank</th>
              <th className="border px-3 py-2 text-left font-semibold">
                Typical torque
              </th>
            </tr>
          </thead>
          <tbody>
            {TORQUE_TABLE.map((row, i) => (
              <tr key={row[0]} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                <td className="border px-3 py-2 font-semibold">{row[0]}</td>
                <td className="border px-3 py-2">{row[1]}</td>
                <td className="border px-3 py-2">{row[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm text-gray-500">
        Coupler mounting hardware should be Grade 8 with hardened washers and
        nylon insert lock nuts, torqued to the coupler manufacturer&apos;s
        specification &mdash; half-inch Grade 8 commonly lands between 75 and 110
        lb-ft. Retorque after the first 50 miles of towing. Our{" "}
        <Link
          href="/guides/hitch-ball-selection-guide"
          className="text-brand-600 hover:underline"
        >
          hitch ball selection guide
        </Link>{" "}
        covers ball ratings and shank matching in more detail.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Five Checks Before the First Tow
      </h2>
      <p className="mt-3 text-gray-700">
        A new coupler is not the end of the job. Before you take the trailer onto
        a highway, confirm all five of these.
      </p>
      <p className="mt-3 text-gray-700">
        Clamp onto a matched ball, close the latch, and fit the safety pin &mdash;
        then try to lift the tongue, and expect zero movement. Cross the safety
        chains under the tongue so they form a cradle, with enough slack to turn
        but not enough for the tongue to reach the ground. Connect the breakaway
        cable to the tow vehicle at a point that does not move with the hitch
        head, not to the ball mount. Test the lights and the{" "}
        <Link
          href="/guides/trailer-brake-controller-setup"
          className="text-brand-600 hover:underline"
        >
          brake controller
        </Link>{" "}
        with the trailer loaded. And confirm the trailer sits level at your hitch
        height &mdash; a nose-high trailer unloads the front trailer axle and
        tows badly, which is what{" "}
        <Link
          href="/guides/weight-distribution-hitch-setup"
          className="text-brand-600 hover:underline"
        >
          weight distribution setup
        </Link>{" "}
        is for. Finally, weigh the rig: the{" "}
        <Link
          href="/guides/cat-scale-weighing"
          className="text-brand-600 hover:underline"
        >
          CAT scale procedure
        </Link>{" "}
        gives you real tongue weight with the trailer loaded, and real tongue
        weight is what proves the coupler and the ball are correctly rated.
      </p>

      <div className="mt-10 rounded-2xl bg-brand-600 p-8 text-center text-white">
        <h2 className="text-2xl font-bold">
          Confirm Your Tongue Weight Before You Tow
        </h2>
        <p className="mt-2 text-brand-100">
          Enter your trailer and gear and see tongue weight, payload, GVWR and
          GCWR checked at once. Free, independent, no sign-up.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link
            href="/tongue-weight-calculator"
            className="inline-block rounded-xl bg-white px-6 py-3 text-sm font-bold text-brand-700 shadow-lg transition-all hover:bg-brand-50 active:scale-[0.99]"
          >
            Tongue Weight Calculator
          </Link>
          <Link
            href="/gvwr-calculator"
            className="inline-block rounded-xl bg-white px-6 py-3 text-sm font-bold text-brand-700 shadow-lg transition-all hover:bg-brand-50 active:scale-[0.99]"
          >
            GVWR Calculator
          </Link>
          <Link
            href="/towing-capacity-calculator"
            className="inline-block rounded-xl bg-white px-6 py-3 text-sm font-bold text-brand-700 shadow-lg transition-all hover:bg-brand-50 active:scale-[0.99]"
          >
            Towing Capacity Calculator
          </Link>
        </div>
      </div>

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

      <AmazonAffiliate />

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Sources &amp; References
      </h2>
      <ul className="mt-3 space-y-1 text-sm text-gray-600">
        <li>
          <a
            href="https://www.nhtsa.gov/equipment/tires"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            NHTSA &mdash; vehicle safety standards, load limits and recall
            lookups for towing equipment
          </a>
        </li>
        <li>
          <a
            href="https://www.fmcsa.dot.gov/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            FMCSA &mdash; coupling devices, safety chains and towing equipment
            requirements
          </a>
        </li>
        <li>
          <a
            href="https://www.sae.org/standards/content/j2807_202106/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            SAE J2807 &mdash; the tow rating test procedure that includes hitch
            and coupler loading
          </a>
        </li>
        <li>
          <a
            href="https://www.rvia.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            RV Industry Association (RVIA) &mdash; RV weight labelling and
            component standards
          </a>
        </li>
        <li>
          <a
            href="https://www.rvsafety.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            RV Safety &amp; Education Foundation (RVSEF) &mdash; independent RV
            weight and hitch education
          </a>
        </li>
      </ul>

      <div className="mt-10 rounded-xl border border-gray-200 bg-gray-50 p-6">
        <h3 className="font-bold text-gray-900">Related Guides</h3>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          <li>
            <Link
              href="/guides/hitch-ball-selection-guide"
              className="text-brand-600 hover:underline"
            >
              Hitch Ball Selection Guide
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
              href="/guides/how-to-hitch-up-a-travel-trailer"
              className="text-brand-600 hover:underline"
            >
              How to Hitch Up a Travel Trailer
            </Link>
          </li>
          <li>
            <Link href="/guides/tongue-weight" className="text-brand-600 hover:underline">
              Tongue Weight Guide
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
              href="/guides/travel-trailer-pre-trip-inspection"
              className="text-brand-600 hover:underline"
            >
              Travel Trailer Pre-Trip Inspection
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
