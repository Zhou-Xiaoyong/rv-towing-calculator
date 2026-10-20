import type { Metadata } from "next";
import Link from "next/link";
import { FaqJsonLd, ArticleJsonLd, HowToJsonLd } from "@/components/seo/JsonLd";
import { DEFAULT_OG_IMAGES } from "@/lib/seo/default-og-image";

import AmazonAffiliate from "@/components/AmazonAffiliate";

export const metadata: Metadata = {
  title: "Travel Trailer Frame and Floor Inspection: Cracks and Soft Spots",
  description:
    "A travel trailer frame inspection finds cracks at the A-frame and spring hangers, plus the water path that turns a small floor soft spot into a $3,000 repair.",
  keywords: [
    "travel trailer frame inspection",
    "rv frame crack repair",
    "trailer frame rust",
    "rv floor soft spot",
    "travel trailer floor water damage",
    "rv moisture meter readings",
    "trailer spring hanger crack",
    "rv rear bumper weight limit",
  ],
  alternates: {
    canonical:
      "https://www.rvtowingcalc.com/guides/trailer-frame-and-floor-inspection",
  },
  openGraph: {
    title: "Travel Trailer Frame and Floor Inspection: Cracks and Soft Spots",
    description:
      "Where a travel trailer frame actually cracks, how to read a moisture meter, and why the soft spot you found is three feet from the leak.",
    url: "https://www.rvtowingcalc.com/guides/trailer-frame-and-floor-inspection",
    images: DEFAULT_OG_IMAGES,
  },
};

const FAQS = [
  {
    q: "How often should I inspect a travel trailer frame?",
    a: "Twice a year, once before the season and once before storage, plus a look after any tow over rough road or a curb strike. The underneath check takes about 45 minutes with a light and a wire brush. Cracks grow by fractions of an inch per trip, not per mile, so frequency beats depth. A trailer that only runs paved highways still needs the spring hanger welds checked, because those see the highest number of load cycles on the frame.",
  },
  {
    q: "Can a cracked travel trailer frame be repaired?",
    a: "Yes, if the crack has not reached the web of the beam and the steel around it is sound. The standard repair is to stop-drill the tip, then weld a fish plate that extends several inches past the crack at both ends. That is work for someone who repairs trailer frames, not a general welder. A crack that has crossed from flange into web, or a hanger torn off the rail, usually means the axle has shifted and needs realignment with the weld.",
  },
  {
    q: "Is a soft spot in an RV floor always water damage?",
    a: "No. A share of the soft spots owners report turn out to be a bent or broken outrigger, which drops the floor edge a quarter inch and feels identical underfoot. A pin-type moisture meter separates them: wet plywood reads 16 percent and up, while a floor sitting on a broken outrigger reads normal. Delamination is the third possibility, where the layers separate and feel spongy but stay dry. Check the meter first, because it rules out two of the three causes in a minute.",
  },
  {
    q: "How much weight does water damage add to a trailer?",
    a: "More than most owners expect. A 4 by 8 sheet of 5/8-inch plywood weighs roughly 60 lb dry and can pass 100 lb when saturated, and the foam core of a laminated floor holds water the same way. A 26-foot trailer with wet edges on both sides can carry 150 to 250 lb of water it did not have when it was built. That comes out of cargo carrying capacity, and if the wet area sits forward of the axles it adds to tongue weight too.",
  },
  {
    q: "Do I have to drop the underbelly to inspect the frame?",
    a: "Not for a routine check. On a trailer with a coroplast underbelly, the spring hangers still pass through it, the A-frame is fully exposed, and the rear crossmember is visible from behind, so the high-risk joints are reachable without cutting anything. Drop a section only when a meter flags the floor above it or rust is bleeding through the membrane. Cut a clean rectangle between crossmembers and re-seal it with butyl tape, not self-tapping screws into the rail.",
  },
];

const CRACK_TABLE = [
  [
    "A-frame to main rail junction",
    "Fine dark line crossing the weld bead into the base metal",
    "Tongue weight bending the A-frame up while the axles push down",
    "High. This is the joint that folds",
  ],
  [
    "Four spring hanger welds",
    "Crack at the weld toe, rust bleeding from behind the hanger",
    "Most load cycles on the trailer, worse loaded",
    "High. A torn hanger shifts the axle",
  ],
  [
    "Rear crossmember and bumper bolts",
    "Cracks radiating from the bolt holes, gap at the crossmember",
    "Long rear overhang acts as a lever with no axle to damp it",
    "Medium. Slow, then sudden",
  ],
  [
    "Outriggers under the sidewall",
    "Bent bracket, floor edge flexing when pushed up by hand",
    "Curb strikes; carries floor load, not trailer load",
    "Low. Feels like water damage but is not",
  ],
];

const WATER_TABLE = [
  [
    "Sidewall-to-floor joint, behind the lower trim rail",
    "Wicks into the exposed plywood edge and spreads inward",
    "Within 12 inches of the wall, along the longest wall",
  ],
  [
    "Fender skirt and wheel well fasteners",
    "Runs down the inside of the skirt onto the floor edge",
    "Directly above the wheel, outer 6 inches",
  ],
  [
    "Front lower corner and cap seam",
    "Tracks down the front wall into the floor edge",
    "Front of the bed, or the pass-through floor",
  ],
  [
    "Roof or sidewall seam higher up",
    "Falls inside the wall cavity, enters at the wall plate",
    "Middle of the floor, feet from any seam",
  ],
  [
    "Slide-out floor-to-wall joint",
    "Sits on the slide floor, works inward from the edge",
    "Outer edge of the slide floor, under the sofa",
  ],
];

const METER_TABLE = [
  ["6 to 10 percent", "Dry. Normal interior wood in a heated trailer", "Baseline. Record it and keep looking"],
  ["11 to 15 percent", "High for interior wood, common in humid climates", "Recheck in 30 days and find the source"],
  ["16 to 20 percent", "Active leak. Water is entering now", "Find the entry point before sealing anything"],
  ["21 to 28 percent", "Saturated plywood, delamination starting", "Plan on removing a section, not sealing"],
  ["Above 28 percent", "Water standing in the core", "Replacement, and check outriggers for rust"],
];

const COST_TABLE = [
  ["Crack at a weld toe, under 2 inches", "Stop-drill, fish plate, repaint", "$350 to $900"],
  ["Spring hanger torn from the rail", "Re-weld plus axle alignment check", "$400 to $1,200"],
  ["Soft spot under 12 inches, dry inside", "Epoxy injection from below", "$300 to $800"],
  ["Soft spot 12 to 36 inches", "Floor section replaced, vinyl patched", "$1,200 to $3,500"],
  ["Wet floor along an entire wall", "Wall and cabinet removal, full floor", "$4,000 to $9,000"],
];

const INSPECTION_STEPS = [
  {
    name: "Start at the coupler, trailer hitched",
    text: "Leave the trailer on the ball with the jack up, so the frame sits in the attitude it tows in. Check the weld where the coupler meets the A-frame nose, then walk both tongue rails back with the light raking along the flanges.",
  },
  {
    name: "Wire brush the four spring hangers",
    text: "Brush each hanger to bare metal and read the weld toe. Check shackle links and the equalizer for elongation. Then grab each tire at 12 and 6 o'clock and push-pull; movement means a worn bushing or a hanger starting to tear.",
  },
  {
    name: "Check the rear crossmember and bumper",
    text: "Look for cracks radiating from the bumper bolt holes and any gap between tube and crossmember. Confirm nothing but the spare is hanging on it.",
  },
  {
    name: "Push up on every outrigger",
    text: "Reach under the sidewall from outside, one hand on each outrigger, and lift. A solid one does not move. One that flexes is cracked at the rail or bent.",
  },
  {
    name: "Tap and meter the floor inside",
    text: "Work the perimeter in 12-inch steps with a knuckle, then meter every dull note. Finish with the slide floor, the bathroom, and the front corners.",
  },
  {
    name: "Open the underbelly only if flagged",
    text: "Above 15 percent anywhere, cut a clean rectangle of coroplast between two crossmembers and look at the plywood from below. Re-tape with butyl, not screws driven into the rail.",
  },
];

export default function TrailerFrameAndFloorInspectionPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <ArticleJsonLd
        title="Travel Trailer Frame and Floor Inspection: Cracks and Soft Spots"
        description="Travel trailer frame inspection and floor soft spot diagnosis: where frames crack, how water reaches the floor, moisture meter thresholds, repair costs, and the weight a wet floor adds."
        url="https://www.rvtowingcalc.com/guides/trailer-frame-and-floor-inspection"
        datePublished="2026-10-20"
      />
      <FaqJsonLd
        faqs={FAQS}
        baseUrl="https://www.rvtowingcalc.com/guides/trailer-frame-and-floor-inspection"
      />
      <HowToJsonLd
        name="How to inspect a travel trailer frame and floor"
        description="A six-step inspection covering the A-frame welds, spring hangers, rear crossmember, outriggers, and a moisture meter sweep of the floor."
        steps={INSPECTION_STEPS}
        totalTime="PT45M"
        url="https://www.rvtowingcalc.com/guides/trailer-frame-and-floor-inspection"
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
        <span className="text-gray-900">Frame and Floor Inspection</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
        Travel Trailer Frame and Floor Inspection: Cracks and Soft Spots
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        The A-frame on a 26-foot bunkhouse carries around 900 lb of tongue weight
        through two welds where the tongue rails meet the main frame. Four spring
        hangers hold up the other 5,000 lb. Those six joints keep the trailer
        behind the truck, and none of them appears on a maintenance schedule most
        owners follow.
      </p>
      <p className="mt-3 text-lg text-gray-600">
        Failures here do not announce themselves. A cracked weld looks like
        cracked paint, and a wet floor feels like a trim problem until a moisture
        meter puts it at 22 percent. Here is where to look underneath, and why the
        soft spot you found is usually three feet from the leak.
      </p>

      <div className="mt-8 rounded-xl bg-brand-50 p-6">
        <h2 className="text-lg font-bold text-brand-800">The Short Answer</h2>
        <p className="mt-2 text-brand-700">
          Get under the trailer twice a year with a bright light and check four
          things: the welds where the A-frame meets the main rails, the four
          spring hanger welds, the rear crossmember, and the outriggers under the
          sidewall. Then run a pin-type moisture meter along the inside edge of
          the floor. Interior wood below <strong>15 percent</strong> is normal. At
          16 percent and up, water is entering now and the soft spot is a report,
          not the problem. A crack that has reached the web, or a hanger torn off
          the rail, means the trailer does not move.
        </p>
      </div>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        What Is Actually Holding the Trailer
      </h2>
      <p className="mt-3 text-gray-700">
        Two main rails run the length of the trailer. Crossmembers tie them
        together and carry the floor, and outriggers cantilever outboard under the
        sidewalls. At the front the rails bend inward into the A-frame and meet at
        the coupler, while the spring hangers that locate the axles are welded to
        the outside face of each rail. Every pound the suspension does not absorb
        goes into a weld toe, often on a rail only 3/16 inch thick at the web.
      </p>
      <p className="mt-3 text-gray-700">
        Load reversal breaks it. Hit a pothole at 60 mph and the same joint sees
        the opposite direction within a fraction of a second. Steel tolerates that
        for years, then a hairline starts and grows a fraction of an inch per
        trip.
      </p>

      <div className="mt-6 overflow-x-auto">
        <svg
          viewBox="0 0 680 340"
          width="100%"
          role="img"
          aria-label="Plan view of a travel trailer frame showing four inspection points"
        >
          <text x="20" y="24" fontSize="13" fontWeight="600" fill="#374151">
            Frame plan view, looking up from the ground
          </text>

          <rect x="326" y="48" width="28" height="14" rx="2" fill="#e5e7eb" stroke="#9ca3af" strokeWidth="1.5" />
          <text x="394" y="59" fontSize="10" fill="#6b7280">
            coupler
          </text>

          <line x1="332" y1="62" x2="275" y2="130" stroke="#9ca3af" strokeWidth="7" />
          <line x1="348" y1="62" x2="405" y2="130" stroke="#9ca3af" strokeWidth="7" />

          <rect x="268" y="130" width="14" height="158" fill="#e5e7eb" stroke="#9ca3af" strokeWidth="1.5" />
          <rect x="398" y="130" width="14" height="158" fill="#e5e7eb" stroke="#9ca3af" strokeWidth="1.5" />

          <line x1="282" y1="165" x2="398" y2="165" stroke="#cbd5e1" strokeWidth="4" />
          <line x1="282" y1="200" x2="398" y2="200" stroke="#cbd5e1" strokeWidth="4" />
          <line x1="282" y1="235" x2="398" y2="235" stroke="#cbd5e1" strokeWidth="4" />
          <line x1="282" y1="268" x2="398" y2="268" stroke="#cbd5e1" strokeWidth="4" />

          <line x1="268" y1="150" x2="236" y2="150" stroke="#9ca3af" strokeWidth="6" />
          <line x1="268" y1="215" x2="236" y2="215" stroke="#9ca3af" strokeWidth="6" />
          <line x1="268" y1="262" x2="236" y2="262" stroke="#9ca3af" strokeWidth="6" />
          <line x1="412" y1="150" x2="444" y2="150" stroke="#9ca3af" strokeWidth="6" />
          <line x1="412" y1="215" x2="444" y2="215" stroke="#9ca3af" strokeWidth="6" />
          <line x1="412" y1="262" x2="444" y2="262" stroke="#9ca3af" strokeWidth="6" />

          <line x1="222" y1="186" x2="458" y2="186" stroke="#6b7280" strokeWidth="4" />
          <line x1="222" y1="232" x2="458" y2="232" stroke="#6b7280" strokeWidth="4" />
          <rect x="206" y="174" width="14" height="24" rx="3" fill="#4b5563" />
          <rect x="460" y="174" width="14" height="24" rx="3" fill="#4b5563" />
          <rect x="206" y="220" width="14" height="24" rx="3" fill="#4b5563" />
          <rect x="460" y="220" width="14" height="24" rx="3" fill="#4b5563" />

          <rect x="256" y="180" width="12" height="10" fill="#93c5fd" stroke="#2563eb" strokeWidth="1.5" />
          <rect x="412" y="180" width="12" height="10" fill="#93c5fd" stroke="#2563eb" strokeWidth="1.5" />
          <rect x="256" y="226" width="12" height="10" fill="#93c5fd" stroke="#2563eb" strokeWidth="1.5" />
          <rect x="412" y="226" width="12" height="10" fill="#93c5fd" stroke="#2563eb" strokeWidth="1.5" />

          <line x1="268" y1="288" x2="412" y2="288" stroke="#9ca3af" strokeWidth="6" />
          <rect x="278" y="296" width="124" height="9" rx="2" fill="#d1d5db" stroke="#9ca3af" strokeWidth="1" />
          <text x="410" y="304" fontSize="10" fill="#6b7280">
            bumper
          </text>

          <circle cx="270" cy="130" r="10" fill="#2563eb" />
          <text x="270" y="134" fontSize="11" fontWeight="700" fill="#ffffff" textAnchor="middle">1</text>
          <circle cx="244" cy="205" r="10" fill="#2563eb" />
          <text x="244" y="209" fontSize="11" fontWeight="700" fill="#ffffff" textAnchor="middle">2</text>
          <circle cx="256" cy="276" r="10" fill="#2563eb" />
          <text x="256" y="280" fontSize="11" fontWeight="700" fill="#ffffff" textAnchor="middle">3</text>
          <circle cx="238" cy="140" r="10" fill="#2563eb" />
          <text x="238" y="144" fontSize="11" fontWeight="700" fill="#ffffff" textAnchor="middle">4</text>

          <text x="30" y="330" fontSize="11" fill="#2563eb" fontWeight="700">1</text>
          <text x="42" y="330" fontSize="11" fill="#4b5563">A-frame joint</text>
          <text x="190" y="330" fontSize="11" fill="#2563eb" fontWeight="700">2</text>
          <text x="202" y="330" fontSize="11" fill="#4b5563">Spring hangers</text>
          <text x="360" y="330" fontSize="11" fill="#2563eb" fontWeight="700">3</text>
          <text x="372" y="330" fontSize="11" fill="#4b5563">Rear crossmember</text>
          <text x="530" y="330" fontSize="11" fill="#2563eb" fontWeight="700">4</text>
          <text x="542" y="330" fontSize="11" fill="#4b5563">Outriggers</text>
        </svg>
      </div>
      <p className="mt-3 text-sm text-gray-500">
        Trailer width is exaggerated. The dark bars are the axles; the blue
        rectangles on the rails are the spring hangers.
      </p>

      <p className="mt-4 text-gray-700">
        The one part that looks structural and is not is the bumper. On most
        travel trailers it is a 4-inch square tube sized for the spare tire,
        typically 100 to 150 lb. Welding a receiver to it loads the rear
        crossmember in a direction it was never designed for, and Lippert&apos;s
        frame warranty excludes attachments that were not in the original design.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Four Places a Trailer Frame Cracks
      </h2>

      <h3 className="mt-6 text-lg font-bold text-gray-900">
        Where the A-frame meets the main rails
      </h3>
      <p className="mt-2 text-gray-700">
        Tension up a weight distribution hitch and the A-frame is bent upward at
        the coupler while the trailer&apos;s weight pushes down behind the axles.
        Those junction welds sit in tension on every bump. Look at the flanges
        from a low angle with light raking across the paint. A crack is a fine
        dark line crossing the weld bead into the base metal.
      </p>

      <h3 className="mt-6 text-lg font-bold text-gray-900">
        The four spring hanger welds
      </h3>
      <p className="mt-2 text-gray-700">
        These see more load cycles than anything else on the trailer. Check them
        loaded and on the tires, not empty on the jack. An unloaded frame relaxes
        and closes a hairline that stands open at ride height, which is how owners
        conclude there is nothing wrong.
      </p>

      <h3 className="mt-6 text-lg font-bold text-gray-900">
        The rear crossmember and bumper mounts
      </h3>
      <p className="mt-2 text-gray-700">
        The tail flexes most because no axle sits behind it to damp anything.
        Cracks radiate from the bumper bolt holes first, then the tube separates
        from the crossmember.
      </p>

      <h3 className="mt-6 text-lg font-bold text-gray-900">
        Outriggers under the sidewall
      </h3>
      <p className="mt-2 text-gray-700">
        Short brackets that hold the floor up at the wall line. Bend one on a curb
        and the floor above it drops a quarter inch, which feels exactly like a
        leak. A meter reads normal above a bent outrigger, so meter first.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">
                Location
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                What you will see
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Why it fails there
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Urgency
              </th>
            </tr>
          </thead>
          <tbody>
            {CRACK_TABLE.map((row, i) => (
              <tr key={row[0]} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                <td className="border px-3 py-2 text-xs font-semibold">
                  {row[0]}
                </td>
                <td className="border px-3 py-2 text-xs">{row[1]}</td>
                <td className="border px-3 py-2 text-xs">{row[2]}</td>
                <td className="border px-3 py-2 text-xs font-semibold text-brand-700">
                  {row[3]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        What Is Rust and What Is a Crack
      </h2>
      <p className="mt-3 text-gray-700">
        Surface rust is mostly cosmetic. Cracks are not, and the two look alike
        under road grime. Wire brush to bare metal, wipe with solvent, and look
        under raking light. Rust blooms outward from a point. A crack is a line
        with a definite end, and the end is where it is still growing.
      </p>
      <p className="mt-3 text-gray-700">
        A quarter-inch line at a weld toe is a monitoring item: photograph it with
        a tape measure in frame and check again in 500 miles. A line that has
        crossed from the flange into the web, or one with rust staining along its
        length, is a stop-and-repair item. Do not bolt a plate over a crack. The
        correct repair is a fish plate extending past the crack at both ends, tip
        stop-drilled first.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        The Floor Is a Leak Report, Not a Wear Item
      </h2>
      <p className="mt-3 text-gray-700">
        Most floors are 5/8-inch plywood screwed to the outriggers and
        crossmembers, with vinyl over the top. Lighter trailers use a laminated
        sandwich of plywood skins over block foam, and the foam wicks water
        sideways: a leak at the front corner can travel four feet through the core
        and surface as a soft strip under the dinette. That is why the search
        starts at the perimeter. Water almost never enters through the floor. It
        enters above and runs down.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">
                Entry point
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                How water reaches the floor
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Where the soft spot appears
              </th>
            </tr>
          </thead>
          <tbody>
            {WATER_TABLE.map((row, i) => (
              <tr key={row[0]} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                <td className="border px-3 py-2 text-xs font-semibold">
                  {row[0]}
                </td>
                <td className="border px-3 py-2 text-xs">{row[1]}</td>
                <td className="border px-3 py-2 text-xs">{row[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm text-gray-500">
        A soft spot in the middle of a room with no seam above it usually means
        water came down inside a wall and traveled along a joist or the foam core.
      </p>
      <p className="mt-4 text-gray-700">
        The lower trim rail deserves its own mention. It is screwed through the
        sidewall into the floor edge, and the butyl behind it is the only thing
        keeping rain off the end grain. Once that dries out, water goes into the
        edge, and the edge is where plywood fails first. The{" "}
        <Link
          href="/guides/rv-slide-out-maintenance-and-seal-replacement"
          className="text-brand-600 hover:underline"
        >
          slide out seal guide
        </Link>{" "}
        covers the same failure on the slide, and the{" "}
        <Link
          href="/guides/rv-roof-sealant-inspection-and-resealing"
          className="text-brand-600 hover:underline"
        >
          roof sealant guide
        </Link>{" "}
        covers the entries highest up.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Finding a Soft Spot You Cannot See
      </h2>
      <p className="mt-3 text-gray-700">
        Vinyl hides everything. Walk the floor barefoot, then lay a 4-foot level
        across the suspect area in two directions. A dip of 1/8 inch over 4 feet
        is easy to feel and obvious against a straightedge. Then tap with a
        knuckle on a 12-inch grid: a sharp hard tap means bonded and dry, a dull
        thud means delamination or saturation.
      </p>
      <p className="mt-3 text-gray-700">
        The meter turns a hunch into a decision. A pinless unit reads through
        vinyl to roughly 3/4 inch and gets thrown off by the aluminum framing just
        under the surface, which is most of a trailer floor. A pin-type meter
        reads deeper, at the cost of two small holes. Put the pins in a seam or a
        corner where a hole will never show.
      </p>
      <p className="mt-3 text-gray-700">
        Read the number against a baseline, not the meter&apos;s manual. Heated
        wood in January sits at 6 to 10 percent; the same wood in coastal Georgia
        in August sits at 12 with nothing wrong with it. Eight points higher than
        a dry area two feet away is a leak, whatever the absolute number says.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">
                Pin meter reading
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                What it means
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                What to do
              </th>
            </tr>
          </thead>
          <tbody>
            {METER_TABLE.map((row, i) => (
              <tr key={row[0]} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                <td className="border px-3 py-2 text-xs font-mono font-semibold">
                  {row[0]}
                </td>
                <td className="border px-3 py-2 text-xs">{row[1]}</td>
                <td className="border px-3 py-2 text-xs">{row[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm text-gray-500">
        Ranges assume readings at room temperature. Resealing over anything above
        20 percent traps the water and guarantees the repair fails.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        The 45-Minute Inspection
      </h2>
      <p className="mt-3 text-gray-700">
        Do this with the trailer loaded the way it tows, on flat ground, with a
        second light. Frame first, floor second: a frame finding can end the day
        before you waste an hour on the interior.
      </p>
      <ol className="mt-4 space-y-3">
        {INSPECTION_STEPS.map((step, i) => (
          <li key={step.name} className="flex gap-3">
            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-600 text-xs font-bold text-white">
              {i + 1}
            </span>
            <div>
              <p className="font-semibold text-gray-900">{step.name}</p>
              <p className="mt-1 text-sm text-gray-700">{step.text}</p>
            </div>
          </li>
        ))}
      </ol>
      <p className="mt-4 text-gray-700">
        Photograph anything you find with a tape measure in frame. A service
        writer takes a measurement seriously and discounts a description. The{" "}
        <Link
          href="/guides/travel-trailer-pre-trip-inspection"
          className="text-brand-600 hover:underline"
        >
          pre-trip inspection checklist
        </Link>{" "}
        covers everything above the frame, and the{" "}
        <Link
          href="/guides/trailer-suspension-leaf-spring-inspection"
          className="text-brand-600 hover:underline"
        >
          leaf spring guide
        </Link>{" "}
        goes deeper on the hardware hanging off those hangers.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        What a Repair Actually Costs
      </h2>
      <p className="mt-3 text-gray-700">
        Prices vary by region and by how much interior comes out. These are
        typical independent shop ranges for 2026; a dealer service department sits
        at the top of them. Get two quotes and ask whether each shop plans to open
        the floor or inject from below, because those answers produce very
        different bills.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">
                Finding
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Typical scope
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Shop range
              </th>
            </tr>
          </thead>
          <tbody>
            {COST_TABLE.map((row, i) => (
              <tr key={row[0]} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                <td className="border px-3 py-2 text-xs font-semibold">
                  {row[0]}
                </td>
                <td className="border px-3 py-2 text-xs">{row[1]}</td>
                <td className="border px-3 py-2 text-xs font-semibold text-brand-700">
                  {row[2]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 rounded-xl border-l-4 border-danger-500 bg-danger-50 p-4">
        <p className="text-sm text-danger-700">
          <strong>When to walk away:</strong> a soft floor along both sidewalls on
          a long trailer usually exceeds the book value of the unit. On a used
          trailer, push up on the outriggers before you make an offer.
        </p>
      </div>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        A Wet Floor Is Also Extra Weight
      </h2>
      <p className="mt-3 text-gray-700">
        A 4 by 8 sheet of 5/8-inch plywood weighs about 60 lb dry and passes 100
        lb soaked, and the foam core of a laminated floor holds water the same
        way. A 26-foot trailer with wet edges on both sides can be carrying 150 to
        250 lb of water it did not leave the factory with.
      </p>
      <p className="mt-3 text-gray-700">
        That comes out of cargo carrying capacity, and if the wet area sits
        forward of the axles it adds to tongue weight too. A setup that was inside
        10 percent of payload in May can be over the limit in September with
        nothing new in the camper. Weigh at a CAT scale before you budget the
        repair and run the numbers again after. The{" "}
        <Link href="/guides/cat-scale-weighing" className="text-brand-600 hover:underline">
          CAT scale guide
        </Link>{" "}
        covers the three-pass method, and the{" "}
        <Link
          href="/guides/cargo-carrying-capacity-ccc"
          className="text-brand-600 hover:underline"
        >
          CCC guide
        </Link>{" "}
        explains what that weight is allowed to be.
      </p>

      <div className="mt-10 rounded-2xl bg-brand-600 p-8 text-center text-white">
        <h2 className="text-2xl font-bold">Wet Floor, Same Truck</h2>
        <p className="mt-2 text-brand-100">
          A wet floor adds real pounds to the trailer and, depending on where it
          sits, to the tongue. Check both before the next trip. Free,
          independent, no sign-up.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link
            href="/payload-calculator"
            className="inline-block rounded-xl bg-white px-6 py-3 text-sm font-bold text-brand-700 shadow-lg transition-all hover:bg-brand-50 active:scale-[0.99]"
          >
            Payload Calculator
          </Link>
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

      <AmazonAffiliate categories={["tools"]} />

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Sources &amp; References
      </h2>
      <ul className="mt-3 space-y-1 text-sm text-gray-600">
        <li>
          <a
            href="https://www.lci1.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            Lippert (LCI): trailer frame and running gear documentation, plus
            warranty language on unapproved attachments
          </a>
        </li>
        <li>
          <a
            href="https://www.rvia.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            RV Industry Association (RVIA): weight labelling and construction
            standards for towable RVs
          </a>
        </li>
        <li>
          <a
            href="https://www.rvsafety.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            RV Safety &amp; Education Foundation (RVSEF): independent load and
            weight education
          </a>
        </li>
        <li>
          <a
            href="https://www.nhtsa.gov/vehicle-safety/rv"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            NHTSA: RV safety information and recall lookup by VIN
          </a>
        </li>
        <li>
          <a
            href="https://www.nfpa.org/codes-and-standards/nfpa-1194-standard-development/1194"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            NFPA 1194: standard for recreational vehicles, including body and
            frame requirements
          </a>
        </li>
      </ul>

      <div className="mt-10 rounded-xl border border-gray-200 bg-gray-50 p-6">
        <h3 className="font-bold text-gray-900">Related Guides</h3>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
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
              href="/guides/trailer-suspension-leaf-spring-inspection"
              className="text-brand-600 hover:underline"
            >
              Trailer Leaf Spring Inspection
            </Link>
          </li>
          <li>
            <Link
              href="/guides/trailer-axle-alignment-and-tire-wear"
              className="text-brand-600 hover:underline"
            >
              Axle Alignment and Tire Wear
            </Link>
          </li>
          <li>
            <Link
              href="/guides/rv-slide-out-maintenance-and-seal-replacement"
              className="text-brand-600 hover:underline"
            >
              Slide Out Seal Replacement
            </Link>
          </li>
          <li>
            <Link
              href="/guides/rv-roof-sealant-inspection-and-resealing"
              className="text-brand-600 hover:underline"
            >
              Roof Sealant Inspection
            </Link>
          </li>
          <li>
            <Link href="/guides/cat-scale-weighing" className="text-brand-600 hover:underline">
              How to Weigh Your RV at a CAT Scale
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
