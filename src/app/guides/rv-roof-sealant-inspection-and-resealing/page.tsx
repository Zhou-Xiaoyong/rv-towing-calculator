import type { Metadata } from "next";
import Link from "next/link";
import { FaqJsonLd, ArticleJsonLd, HowToJsonLd } from "@/components/seo/JsonLd";
import { DEFAULT_OG_IMAGES } from "@/lib/seo/default-og-image";

import AmazonAffiliate from "@/components/AmazonAffiliate";
export const metadata: Metadata = {
  title: "RV Roof Sealant Inspection and Resealing: A Seasonal Guide",
  description:
    "Roof sealant is the cheapest insurance on an RV. Learn the inspection routine, self-leveling vs non-sag, membrane compatibility, and how to reseal a seam.",
  keywords: [
    "rv roof sealant",
    "rv roof resealing",
    "dicor self leveling lap sealant",
    "rv roof inspection",
    "self leveling vs non sag sealant",
    "rv roof leak prevention",
  ],
  alternates: {
    canonical:
      "https://www.rvtowingcalc.com/guides/rv-roof-sealant-inspection-and-resealing",
  },
  openGraph: {
    title: "RV Roof Sealant Inspection and Resealing: A Seasonal Guide",
    description:
      "How to identify your roof membrane, pick the right lap sealant, inspect the ten places leaks start, reseal a seam step by step, and avoid the products that ruin a roof.",
    url: "https://www.rvtowingcalc.com/guides/rv-roof-sealant-inspection-and-resealing",
    images: DEFAULT_OG_IMAGES,
  },
};

const FAQS = [
  {
    q: "How often should you reseal an RV roof?",
    a: "Inspect the roof and every seam at least twice a year, in spring before the season starts and in fall before storage, and after any long trip or hailstorm. Three months is the interval several manufacturers ask for. Touch up cracked lap sealant as you find it, which usually works out to once a year in a sunny climate and less often if the rig is stored under cover. A full membrane recoat is a different job and typically comes every five to ten years as the membrane chalks and thins.",
  },
  {
    q: "Can I use regular silicone caulk on an RV roof?",
    a: "No, and it is the single most common way owners make a small problem permanent. Household silicone does not bond reliably to EPDM or TPO membranes, and once it is there, nothing else will stick to that spot, including the correct lap sealant you will eventually need. You end up with a patch that peels and a surface you have to strip back to bare membrane before you can fix it properly. Use an RV lap sealant matched to your membrane. If you are repairing a high-movement vertical joint such as a sidewall seam, a purpose-made RV polyurethane sealant is the appropriate product rather than a hardware store silicone.",
  },
  {
    q: "What is the difference between self-leveling and non-sag lap sealant?",
    a: "Self-leveling lap sealant flows under gravity into a wide, flat bead, which is what you want on the horizontal roof deck, because there are no raised edges left to catch water. Non-sag lap sealant holds its shape instead and is used on vertical or steeply sloped joints such as front and rear caps and sidewall seams, where a self-leveling product would simply run off and leave a film too thin to seal. Using the wrong one for the orientation is the most common cause of a reseal that leaks again within a season.",
  },
  {
    q: "Do I have to remove all the old sealant before resealing?",
    a: "No. Remove what has lifted, cracked through, or peeled away from the membrane, and leave the rest. Digging out sound sealant risks slicing the membrane underneath, and a cut in a TPO or EPDM sheet is a much bigger problem than a cosmetic ridge of old sealant. Work a plastic scraper around the edge of the loose section until it lifts, avoid metal tools on the membrane, and warm the sealant with a hair dryer in cool weather to make it release. What matters is that the surface you are about to seal over is clean, dry and firmly attached.",
  },
  {
    q: "Can I walk on my RV roof to inspect it?",
    a: "On most travel trailers yes, but with two rules. Walk on the decking or on the structural seams, not between them, and lay down a sheet of plywood when you need to kneel or lean on a single spot, because a concentrated point load is what dents a soft roof deck. Wear soft-soled shoes and keep the roof dry. If the deck feels spongy underfoot anywhere, stop and treat that as evidence that water has already been getting in, not as something to work around.",
  },
];

const MEMBRANE_TABLE = [
  [
    "EPDM rubber",
    "Black or white rubber sheet, dull finish, slightly chalky when old",
    "Self-leveling lap sealant rated for EPDM",
    "Non-sag lap sealant rated for EPDM",
    "Petroleum distillates, mineral spirits and household silicone",
  ],
  [
    "TPO",
    "Bright white, lightly textured, sometimes with a subtle fabric grain",
    "Self-leveling lap sealant rated for TPO",
    "Non-sag lap sealant rated for TPO",
    "Solvent cleaners and silicone products",
  ],
  [
    "Fiberglass / Filon",
    "Hard, glossy or gel-coated panel, no rubber feel",
    "Self-leveling lap sealant or a fiberglass-rated RV sealant",
    "Non-sag RV sealant or polyurethane",
    "Miracle coatings applied over a wet joint",
  ],
  [
    "Aluminum",
    "Visible metal sheets and seams, common on older trailers",
    "Self-leveling lap sealant or butyl tape under trim",
    "Non-sag sealant plus butyl tape at the seam",
    "Mixing silicone and non-silicone sealants on one seam",
  ],
];

const INSPECTION_TABLE = [
  ["Front and rear cap seams", "Hairline cracks in the bead, bead lifting at the edge", "Clean, dry, reseal with non-sag"],
  ["Roof vents and plumbing vents", "Gaps at the flange base, sealant pulled away, cracked screw heads", "Scrape loose material, reseal with self-leveling"],
  ["Skylights", "Fine cracks radiating from the corners, a bead that has gone hard", "Reseal the flange; replace the lid if crazed"],
  ["Air conditioner gasket", "Condensation, sealant ring separated from the shroud base", "Reseal and check the gasket, not just the bead"],
  ["Antenna and cable entries", "Cable plate loose, sealant split where the cable moves", "Reseal and re-bed the plate"],
  ["Screw heads and drip rail", "Rust bleed around the head, a rust stain trail below it", "Remove the screw, reseal the hole, replace hardware"],
  ["Roof edge and trim rail", "Trim lifting, water tracks running back under the rail", "Reseal the rail and check for a loose fastener behind it"],
  ["Ladder and rack mounts", "Elongated sealant, cracks at the base of each leg", "Reseal each leg, check the backing inside"],
  ["Deck seams between panels", "A visible line where the membrane laps, sealant worn thin", "Reseal the lap or tape it permanently"],
  ["Overall membrane", "Heavy chalking, thin spots, a deck that feels soft underfoot", "Not a reseal. Investigate for water damage first"],
];

const HOWTO_STEPS = [
  {
    name: "Clean the area and let it dry",
    text: "Wash the roof with a mild detergent and water and a medium bristle brush, using only cleaners approved for your membrane. Rinse thoroughly and let the surface dry completely, which in cool weather means a full day. Sealant applied over damp membrane or damp old sealant will lift from underneath.",
  },
  {
    name: "Remove only what has failed",
    text: "With a plastic scraper or putty knife, lift the edges of any sealant that has separated from the membrane and pull away material that has cracked through. Warm stubborn sealant with a hair dryer in cool weather. Never use a metal scraper directly on an EPDM or TPO sheet, and stop as soon as you reach membrane that is still firmly bonded.",
  },
  {
    name: "Check what is underneath before you cover it",
    text: "With the failed sealant out of the way, inspect the fastener or the flange you are sealing. A rusted screw head, a loose vent flange, a cracked plastic base or a soft spot in the decking are all things a fresh bead would hide rather than fix. Replace the fastener or the flange now; resealing over a mechanical failure just postpones the leak by one season.",
  },
  {
    name: "Apply the right sealant for the orientation",
    text: "Use self-leveling lap sealant on horizontal surfaces and non-sag lap sealant on vertical and steeply sloped joints. Lay a bead that overlaps the existing sound sealant and the clean membrane on both sides by at least a quarter inch, so the new material bridges the joint instead of sitting on top of it. Work the sealant into the base of the joint rather than floating it above. Do not thin the bead to save product.",
  },
  {
    name: "Tool it and let it skin over",
    text: "On a flat surface, let self-leveling sealant flatten on its own; do not smooth it with a finger, which leaves ridges that hold water. On a vertical joint, tool the non-sag sealant into a concave fillet with a gloved finger or a spreader wetted with the approved cleaner. Leave the finished joint alone until it has skinned over, and keep the roof dry for the period stated on the product label before towing or washing.",
  },
  {
    name: "Record it and re-check after the first trip",
    text: "Note the date, the joints you touched and the product used, so the next inspection has a baseline. After the first trip following a reseal, or after the first heavy rain, look at every joint you worked on. A bead that has pulled away from the membrane on one side within a week is telling you the joint moves more than the sealant can accommodate, which is the point at which tape or a mechanical fix is the right answer rather than another bead.",
  },
];

export default function RvRoofSealantInspectionAndResealingPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <ArticleJsonLd
        title="RV Roof Sealant Inspection and Resealing: A Seasonal Guide"
        description="How to identify your RV roof membrane, choose between self-leveling and non-sag lap sealant, inspect the ten places leaks actually start, reseal a seam correctly, and avoid the products that ruin a roof."
        url="https://www.rvtowingcalc.com/guides/rv-roof-sealant-inspection-and-resealing"
        datePublished="2026-10-04"
      />
      <FaqJsonLd
        faqs={FAQS}
        baseUrl="https://www.rvtowingcalc.com/guides/rv-roof-sealant-inspection-and-resealing"
      />
      <HowToJsonLd
        name="How to Inspect and Reseal an RV Roof Seam"
        description="Step-by-step inspection and resealing of an RV roof joint, including surface preparation, removing failed sealant, choosing self-leveling versus non-sag product, and post-trip verification."
        steps={HOWTO_STEPS}
        totalTime="PT3H"
        url="https://www.rvtowingcalc.com/guides/rv-roof-sealant-inspection-and-resealing"
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
        <span className="text-gray-900">Roof Sealant</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
        RV Roof Sealant Inspection and Resealing
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        Roof sealant is the cheapest insurance on an RV and the least popular job
        to do. It is also the one maintenance item where ignoring it for a couple
        of seasons changes the cost of the repair by an order of magnitude, and
        where the failure mode is not a drip you notice but a soft deck you find
        years later. This guide covers which sealant belongs on which membrane,
        the inspection routine that catches failures while they are still a tube
        of caulk, and how to reseal a joint so it stays sealed.
      </p>

      <div className="mt-8 rounded-xl bg-brand-50 p-6">
        <h2 className="text-lg font-bold text-brand-800">The Short Answer</h2>
        <p className="mt-2 text-brand-700">
          Inspect the roof twice a year, in spring and before storage, and touch
          up cracked sealant as you find it. Use{" "}
          <strong>self-leveling lap sealant</strong> on horizontal surfaces and{" "}
          <strong>non-sag lap sealant</strong> on vertical and steeply sloped
          joints, matched to your membrane type &mdash; EPDM, TPO, fiberglass or
          aluminum. Clean the surface, remove only the sealant that has failed,
          check the fastener underneath, and overlap the sound material by at
          least a quarter inch on both sides. Never use household silicone, never
          use petroleum-based cleaners on a rubber membrane, and never put a
          pressure washer near a seam. A whole season&apos;s inspection takes
          under an hour; the repair it prevents runs into the thousands.
        </p>
      </div>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Sealant Failure Is a Weight Problem Before It Is a Leak Problem
      </h2>
      <p className="mt-3 text-gray-700">
        The usual framing for roof maintenance is water damage, mold and rot, and
        all of that is real. But for anyone towing, there is an earlier symptom
        that shows up on a scale: water intrusion adds weight, and it adds it in
        the worst possible place. A roof deck that has been absorbing water for
        two seasons can carry tens of pounds of trapped moisture in the
        insulation, and if the front cap or the forward decking is the affected
        area, that mass lands on the tongue. Owners chasing a tongue weight that
        crept up with no change in how they load the trailer are occasionally
        looking at a roof leak rather than a packing problem.
      </p>
      <p className="mt-3 text-gray-700">
        That matters because tongue weight is the number that puts you over a
        receiver limit, and because payload is the number that decides whether a
        half-ton truck can legally tow the trailer at all. If your{" "}
        <Link
          href="/tongue-weight-calculator"
          className="text-brand-600 hover:underline"
        >
          tongue weight
        </Link>{" "}
        or your{" "}
        <Link href="/payload-calculator" className="text-brand-600 hover:underline">
          payload
        </Link>{" "}
        has moved without an obvious cause, the{" "}
        <Link
          href="/water-weight-calculator"
          className="text-brand-600 hover:underline"
        >
          water weight calculator
        </Link>{" "}
        will put a number on how much water actually weighs, and a soft spot in
        the roof deck is the other half of the answer. Reseal the roof before you
        spend a weekend re-engineering how you pack.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Identify Your Membrane Before You Buy Anything
      </h2>
      <p className="mt-3 text-gray-700">
        Sealant is matched to membrane chemistry, and applying the wrong product
        can damage the sheet itself rather than just the joint. Look at the roof
        surface in daylight before you order anything, confirm the type against
        your owner&apos;s manual, and if you are unsure, buy from a supplier who
        can tell you what the membrane manufacturer approves. A TPO roof and an
        EPDM roof look similar from ten feet and behave differently under solvents
        and adhesives.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">
                Membrane
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                How to tell
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Horizontal joints
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Vertical joints
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Never use
              </th>
            </tr>
          </thead>
          <tbody>
            {MEMBRANE_TABLE.map((row, i) => (
              <tr key={row[0]} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                <td className="border px-3 py-2 font-semibold">{row[0]}</td>
                <td className="border px-3 py-2">{row[1]}</td>
                <td className="border px-3 py-2 text-xs">{row[2]}</td>
                <td className="border px-3 py-2 text-xs">{row[3]}</td>
                <td className="border px-3 py-2 text-xs text-red-700">
                  {row[4]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm text-gray-500">
        One rule cuts across the whole table: silicone does not adhere reliably to
        EPDM or TPO, and nothing else will bond over it afterwards.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Self-Leveling Versus Non-Sag: The Mistake Behind Most Repeat Leaks
      </h2>
      <p className="mt-3 text-gray-700">
        These two products look identical in the tube and behave completely
        differently once applied. Self-leveling lap sealant is designed to flow
        out flat under gravity, which seals a horizontal joint with no ridges
        left to catch water. Non-sag lap sealant is designed to stay where you put
        it, which is what a vertical surface needs. Swap them and one of two
        things happens: the self-leveling product runs down the wall and leaves a
        film too thin to seal, or the non-sag product sits in a lumpy ridge on the
        roof deck, and the water that pools against that ridge finds the gap
        underneath it.
      </p>

      <svg
        viewBox="0 0 680 290"
        width="100%"
        role="img"
        aria-label="Two cross-section diagrams. On the left, a horizontal roof deck with a vent flange sealed by a self-leveling lap sealant bead that has flowed out into a wide flat shape with no raised edge. On the right, a vertical front cap joint sealed by a non-sag bead that holds a tall rounded profile instead of running down the wall."
        className="mt-6 w-full rounded-xl border border-gray-200 bg-white"
      >
        <text x="0" y="20" fontSize="14" fontWeight="700" fill="#111827">
          Match the sealant to the orientation
        </text>

        <rect x="10" y="40" width="320" height="206" rx="12" fill="#f9fafb" stroke="#e5e7eb" />
        <text x="170" y="64" fontSize="12" fontWeight="700" fill="#1e8e3e" textAnchor="middle">
          Horizontal: self-leveling
        </text>
        <rect x="40" y="156" width="260" height="12" fill="#d1d5db" />
        <rect x="125" y="124" width="90" height="32" rx="3" fill="#bfdbfe" stroke="#60a5fa" />
        <path
          d="M 92 156 C 104 138, 118 134, 130 134 L 210 134 C 222 134, 236 138, 248 156 Z"
          fill="#f59e0b"
          fillOpacity="0.9"
        />
        <text x="170" y="192" fontSize="10" fill="#92400e" textAnchor="middle">
          flows out flat, no raised edge
        </text>
        <text x="170" y="210" fontSize="10" fill="#6b7280" textAnchor="middle">
          water sheds off the joint
        </text>
        <text x="170" y="230" fontSize="10" fontWeight="700" fill="#1a73e8" textAnchor="middle">
          Vents, skylights, roof deck, screw heads
        </text>

        <rect x="350" y="40" width="320" height="206" rx="12" fill="#f9fafb" stroke="#e5e7eb" />
        <text x="510" y="64" fontSize="12" fontWeight="700" fill="#1e8e3e" textAnchor="middle">
          Vertical: non-sag
        </text>
        <rect x="360" y="196" width="120" height="12" fill="#d1d5db" />
        <rect x="480" y="100" width="20" height="108" fill="#d1d5db" />
        <rect x="466" y="112" width="30" height="96" rx="15" fill="#f59e0b" fillOpacity="0.9" />
        <text x="580" y="140" fontSize="10" fill="#92400e" textAnchor="middle">
          holds its shape
        </text>
        <text x="580" y="158" fontSize="10" fill="#6b7280" textAnchor="middle">
          does not run down
        </text>
        <text x="510" y="230" fontSize="10" fontWeight="700" fill="#1a73e8" textAnchor="middle">
          Front and rear caps, sidewall seams, edge trim
        </text>

        <text x="0" y="282" fontSize="11" fill="#6b7280">
          Wrong product for the orientation is the most common reason a reseal leaks again in a season.
        </text>
      </svg>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        The Inspection: Ten Places Leaks Actually Start
      </h2>
      <p className="mt-3 text-gray-700">
        Walk the roof in spring and fall, and remember that the leak you find
        inside the trailer is almost never directly under the joint that failed.
        Water enters at the front cap, runs along a rib, and shows up as a stain
        three feet away, which is why a stain is a symptom and a roof inspection
        is the diagnosis.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">
                Where to look
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                What failure looks like
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                What to do
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
        Black streaks running down the sidewall are often read as dirt and are
        actually a signal: the streak traces the path water took out of a joint
        above it. Follow the streak up before you wash the trailer.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Resealing a Joint, Step by Step
      </h2>
      <p className="mt-3 text-gray-700">
        Three hours on a ladder with hand tools covers a whole roof with touch-up
        work. Work through the steps in order &mdash; preparation is what decides
        whether the new sealant lasts five years or one season.
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
        What not to use, and why
      </h3>
      <p className="mt-2 text-gray-700">
        Three products cause most of the avoidable damage.{" "}
        <strong>Household silicone</strong> does not adhere reliably to EPDM or
        TPO, and worse, nothing will bond over it afterwards, so a five minute fix
        becomes an hour of stripping.{" "}
        <strong>Petroleum-based cleaners and solvents</strong> attack rubber
        membranes, so use only the cleaner your membrane manufacturer approves for
        surface preparation.{" "}
        <strong>Pressure washers</strong> drive water under the very seams you are
        trying to protect and can lift a lap sealant bead clean off. A garden hose
        and a soft brush do the job. The same logic rules out spray-on rubbers and
        miracle sealers: a short-term patch in an emergency, not a repair.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        How Much Sealant You Need
      </h2>
      <p className="mt-3 text-gray-700">
        A single standard tube covers roughly 8 to 12 linear feet of bead, so a
        typical touch-up pass over the vents, caps and a couple of screw lines
        lands in the two to four tube range.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">Item</th>
              <th className="border px-3 py-2 text-left font-semibold">
                Coverage / quantity
              </th>
              <th className="border px-3 py-2 text-left font-semibold">Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-3 py-2 font-semibold">
                Self-leveling lap sealant
              </td>
              <td className="border px-3 py-2">About 8 to 12 linear ft per tube</td>
              <td className="border px-3 py-2 text-xs">
                Buy one extra tube; the last joint always takes more than expected
              </td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border px-3 py-2 font-semibold">
                Non-sag lap sealant
              </td>
              <td className="border px-3 py-2">About 10 to 14 linear ft per tube</td>
              <td className="border px-3 py-2 text-xs">
                Caps and sidewall seams only; do not substitute it on the deck
              </td>
            </tr>
            <tr>
              <td className="border px-3 py-2 font-semibold">
                Butyl putty tape
              </td>
              <td className="border px-3 py-2">One roll covers several re-beds</td>
              <td className="border px-3 py-2 text-xs">
                Goes under a flange or trim piece, not over an existing bead
              </td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border px-3 py-2 font-semibold">
                Roof repair tape
              </td>
              <td className="border px-3 py-2">One roll lasts years</td>
              <td className="border px-3 py-2 text-xs">
                For tears, holes and long lap seams where a bead has failed twice
              </td>
            </tr>
            <tr>
              <td className="border px-3 py-2 font-semibold">
                Caulk gun, plastic scraper, brush
              </td>
              <td className="border px-3 py-2">One of each</td>
              <td className="border px-3 py-2 text-xs">
                Plastic only on the membrane; no metal blades
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Touching Up a Bead vs Repairing a Tear
      </h2>
      <p className="mt-3 text-gray-700">
        Not every problem is a reseal, and using a lap sealant where tape belongs
        is why some joints get resealed every single year. Match the fix to the
        failure.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">
                What you are looking at
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Correct fix
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-3 py-2 font-semibold">
                A bead that is cracked or lifting at one edge
              </td>
              <td className="border px-3 py-2">
                Touch up with the correct lap sealant for that orientation
              </td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border px-3 py-2 font-semibold">
                A lap seam that has failed twice in two seasons
              </td>
              <td className="border px-3 py-2">
                Seal it with roof repair tape and stop resealing it annually
              </td>
            </tr>
            <tr>
              <td className="border px-3 py-2 font-semibold">
                A puncture, slit or hail nick in the membrane
              </td>
              <td className="border px-3 py-2">
                Clean, then tape with a patch that extends well past the damage
              </td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border px-3 py-2 font-semibold">
                A loose flange, vent or trim rail
              </td>
              <td className="border px-3 py-2">
                Re-bed on butyl tape and replace the fasteners, then seal
              </td>
            </tr>
            <tr>
              <td className="border px-3 py-2 font-semibold">
                Chalking, thinning and visible scuffing across the membrane
              </td>
              <td className="border px-3 py-2">
                A full recoat is a separate job from a seam reseal
              </td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border px-3 py-2 font-semibold">
                A deck that feels soft or spongy underfoot
              </td>
              <td className="border px-3 py-2">
                Stop. That is a structural repair, not a sealant job
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Two Other Places Water Gets In
      </h2>
      <p className="mt-3 text-gray-700">
        The roof gets the attention, but two more joints fail on the same
        schedule. <strong>Clearance and marker lights</strong> are mounted through
        the front and rear cap with a foam gasket behind them; the gasket dries
        out, water wicks down the wire into the wall, and the symptom is
        corroded lamp sockets and a stained interior panel rather than a wet
        floor. Pull each light, inspect the gasket and the hole, and re-seal with
        butyl behind the base. <strong>Sidewall and window seams</strong> move more
        than any roof joint and need a flexible non-sag sealant rather than a
        self-leveling one, checked at the same time as the roof.
      </p>
      <p className="mt-3 text-gray-700">
        Once the trailer is watertight, maintenance moves to the parts that keep
        it on the road:{" "}
        <Link
          href="/guides/travel-trailer-tire-safety"
          className="text-brand-600 hover:underline"
        >
          trailer tire condition
        </Link>
        , the{" "}
        <Link
          href="/guides/trailer-wheel-bearing-maintenance"
          className="text-brand-600 hover:underline"
        >
          wheel bearing service interval
        </Link>
        , and the{" "}
        <Link
          href="/guides/travel-trailer-pre-trip-inspection"
          className="text-brand-600 hover:underline"
        >
          pre-trip inspection routine
        </Link>{" "}
        that catches all of it before you leave the driveway. The{" "}
        <Link
          href="/checklist"
          className="text-brand-600 hover:underline"
        >
          printable checklist
        </Link>{" "}
        covers the full sequence.
      </p>

      <div className="mt-10 rounded-2xl bg-brand-600 p-8 text-center text-white">
        <h2 className="text-2xl font-bold">
          Is Your Trailer Gaining Weight It Should Not?
        </h2>
        <p className="mt-2 text-brand-100">
          Check tongue weight, payload, GVWR and GCWR in one pass. Free,
          independent, no sign-up.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link
            href="/tongue-weight-calculator"
            className="inline-block rounded-xl bg-white px-6 py-3 text-sm font-bold text-brand-700 shadow-lg transition-all hover:bg-brand-50 active:scale-[0.99]"
          >
            Tongue Weight Calculator
          </Link>
          <Link
            href="/water-weight-calculator"
            className="inline-block rounded-xl bg-white px-6 py-3 text-sm font-bold text-brand-700 shadow-lg transition-all hover:bg-brand-50 active:scale-[0.99]"
          >
            Water Weight Calculator
          </Link>
          <Link
            href="/gvwr-calculator"
            className="inline-block rounded-xl bg-white px-6 py-3 text-sm font-bold text-brand-700 shadow-lg transition-all hover:bg-brand-50 active:scale-[0.99]"
          >
            GVWR Calculator
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

      <AmazonAffiliate categories={["tpms", "trailer-lights"]} />

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Sources &amp; References
      </h2>
      <ul className="mt-3 space-y-1 text-sm text-gray-600">
        <li>
          <a
            href="https://www.rvia.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            RV Industry Association (RVIA) &mdash; RV component, labelling and
            installation standards
          </a>
        </li>
        <li>
          <a
            href="https://www.nhtsa.gov/recalls"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            NHTSA &mdash; safety recall lookups for RV roof, vent and sealing
            components
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
            weight and maintenance education
          </a>
        </li>
        <li>
          <a
            href="https://www.astm.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            ASTM International &mdash; standards referenced by sealant and
            membrane manufacturers for adhesion and weathering test methods
          </a>
        </li>
        <li>
          <a
            href="https://www.osha.gov/fall-protection"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            OSHA &mdash; fall protection guidance worth reading before working on
            any RV roof
          </a>
        </li>
      </ul>

      <div className="mt-10 rounded-xl border border-gray-200 bg-gray-50 p-6">
        <h3 className="font-bold text-gray-900">Related Guides</h3>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          <li>
            <Link
              href="/guides/spring-checklist"
              className="text-brand-600 hover:underline"
            >
              Spring De-Winterizing Checklist
            </Link>
          </li>
          <li>
            <Link
              href="/guides/winter-storage"
              className="text-brand-600 hover:underline"
            >
              Winter Storage Guide
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
          <li>
            <Link
              href="/guides/trailer-wheel-bearing-maintenance"
              className="text-brand-600 hover:underline"
            >
              Trailer Wheel Bearing Maintenance
            </Link>
          </li>
          <li>
            <Link
              href="/guides/travel-trailer-tire-safety"
              className="text-brand-600 hover:underline"
            >
              Travel Trailer Tire Safety
            </Link>
          </li>
          <li>
            <Link
              href="/guides/cargo-carrying-capacity-ccc"
              className="text-brand-600 hover:underline"
            >
              Trailer Cargo Carrying Capacity
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
