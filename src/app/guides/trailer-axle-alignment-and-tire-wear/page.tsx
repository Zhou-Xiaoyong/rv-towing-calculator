import type { Metadata } from "next";
import Link from "next/link";
import { FaqJsonLd, ArticleJsonLd, HowToJsonLd } from "@/components/seo/JsonLd";
import { DEFAULT_OG_IMAGES } from "@/lib/seo/default-og-image";

export const metadata: Metadata = {
  title: "Trailer Axle Alignment and Tire Wear: How to Diagnose It",
  description:
    "Trailer tire wear patterns tell you whether the problem is toe, camber, bearings or overload. Learn how to read them and check axle alignment yourself.",
  keywords: [
    "trailer axle alignment",
    "trailer tire wear patterns",
    "uneven trailer tire wear",
    "bent trailer axle",
    "why are my trailer tires wearing on the inside",
    "trailer axle alignment cost",
  ],
  alternates: {
    canonical:
      "https://www.rvtowingcalc.com/guides/trailer-axle-alignment-and-tire-wear",
  },
  openGraph: {
    title: "Trailer Axle Alignment and Tire Wear: How to Diagnose It",
    description:
      "How to read feathered tread, one-shoulder camber wear, cupping and dog-tracking, check axle alignment with a tape measure, and what repair really costs.",
    url: "https://www.rvtowingcalc.com/guides/trailer-axle-alignment-and-tire-wear",
    images: DEFAULT_OG_IMAGES,
  },
};

const FAQS = [
  {
    q: "How do I know if my trailer axle is bent?",
    a: "The strongest clue is a wear pattern that affects one tire instead of both. If both tires on an axle wear the inside shoulder evenly, the likely cause is overloading flattening the axle's built-in camber bow. If only one tire wears a shoulder bald while its neighbour looks fine, you are looking at a bent spindle or an axle that has shifted on the springs, usually after a curb or pothole strike. Confirm it by measuring the diagonals from the coupler to each hub centre; a difference of more than about a quarter inch between sides is a real problem. A shop with a laser alignment rig will give you a definitive answer in under an hour.",
  },
  {
    q: "Can trailer axle alignment be adjusted, or does it need a new axle?",
    a: "It can usually be corrected. Toe and camber on a straight trailer axle are set by physically bending the axle tube, which an alignment shop does with a hydraulic press and a set of gauges while the axle stays on the trailer. Axle squareness to the tongue and parallelism between tandem axles are corrected by loosening the U-bolts and shifting the axle on the spring perches. A new axle is only required when the tube or a spindle is bent past the range that can be corrected, or when a spindle itself is bent, since spindles are welded and cannot be re-angled.",
  },
  {
    q: "Why are my trailer tires wearing on the inside edge only?",
    a: "Inside shoulder wear on both tires of the same axle is the classic signature of negative camber, and on a trailer that almost always means the axle is carrying more load than it was built to carry. Straight trailer axles are manufactured with a slight upward bow that straightens out at the rated axle weight. Run the trailer above its GAWR, or load one side far heavier than the other, and the tube bows further downward than intended so the tops of the tires tilt inward. Weigh the trailer at a CAT scale before buying parts, then correct the load or step up to a heavier axle.",
  },
  {
    q: "How much does trailer axle alignment cost?",
    a: "A measurement-only alignment check typically runs $75 to $150 in the US, and a full alignment with toe and camber correction runs about $150 to $400 per axle, more if the shop has to bend a stubborn tube or free rusted U-bolts. Compare that against the alternative: a set of four replacement ST tires at roughly $120 to $350 each. Misalignment that takes the shoulder off tires in one season has already paid for the alignment several times over, and it is also quietly costing you 1 to 2 mpg in scrubbing drag.",
  },
  {
    q: "How often should trailer axle alignment be checked?",
    a: "There is no fixed mileage interval, because alignment does not wear out on a schedule; it is knocked out of true by impacts and by overload. The practical rule is to check alignment whenever a new set of tires begins to show an uneven pattern, after any significant curb, pothole or debris strike, after a spring or shackle replacement, and once whenever you buy a used trailer. For a trailer that runs long distances every season, having the axles measured during the annual bearing service is the cheapest way to stay ahead of it.",
  },
];

const WEAR_PATTERN_TABLE = [
  [
    "Inside edge, both tires",
    "Inner shoulder worn smooth while the tread centre still has depth",
    "Negative camber: overloaded axle, flattened camber bow, or a lopsided load",
    "Actual axle weight vs GAWR on a CAT scale",
  ],
  [
    "Outside edge, both tires",
    "Outer shoulder wears first, splayed stance",
    "Excessive positive camber, or a trailer running far lighter than the axle rating",
    "Ride height and real loaded weight",
  ],
  [
    "One tire only, either edge",
    "One tire bald on a shoulder while its neighbour looks nearly new",
    "Bent spindle, or the axle has shifted on the springs after an impact",
    "Axle squareness and spindle condition",
  ],
  [
    "Feathered tread",
    "Running a hand one way across the tread feels sharp, the other way smooth",
    "Toe-in or toe-out: the classic alignment failure",
    "Toe measured across the tire diameter",
  ],
  [
    "Cupping or scalloping",
    "Dips and high spots repeating around the tread circumference",
    "Worn wheel bearings, imbalance, or play in the suspension and shackles",
    "Bearing play and hub temperature after a drive",
  ],
  [
    "Centre of the tread",
    "Centre bald, both shoulders still have tread",
    "Overinflation for the actual load",
    "Cold pressure against the tire load table",
  ],
  [
    "Both shoulders, centre fine",
    "The reverse of the above - looks under-inflated",
    "Underinflation for the load, or a slow leak",
    "Cold pressure, valve stems, wheel seals",
  ],
  [
    "One flat patch",
    "A single bald spot on an otherwise healthy tire",
    "A dragging brake, or the trailer sat parked for months",
    "Brake drag, then move the trailer in storage",
  ],
];

const SYMPTOM_TABLE = [
  [
    "Trailer runs offset from the truck - dog-tracking",
    "Axle not square to the tongue, or shifted on the spring perches",
    "High",
    "Measure squareness, then align before the next trip",
  ],
  [
    "New sway above 55 mph that was not there last season",
    "Tandem axles no longer parallel, or a load imbalance that appeared",
    "High",
    "Measure axle parallelism, then re-weigh the trailer",
  ],
  [
    "Pulls to one side under braking",
    "Uneven brake output, or a bent spindle on one side",
    "High",
    "Brake inspection first, alignment second",
  ],
  [
    "One hub noticeably hotter than the others",
    "Bearing preload, dragging brake, or scrubbing from misalignment",
    "Medium",
    "Infrared thermometer on all hubs, then bearing service",
  ],
  [
    "A new set of tires bald in a single season",
    "Toe or camber out of spec",
    "Medium",
    "Measure toe, then align",
  ],
  [
    "Fuel economy dropped 1 to 2 mpg with no other change",
    "Lateral scrub from misalignment",
    "Low to medium",
    "Alignment check at the next service",
  ],
  [
    "Vibration through the tow vehicle at highway speed",
    "Imbalance, bearing play, or a bent rim",
    "Medium",
    "Balance the tires, then check bearings",
  ],
];

const SPEC_TABLE = [
  [
    "Toe",
    "Essentially zero. Any deviation is measured in thousandths of an inch",
    "Usually - by bending the tube",
    "Hydraulic bending to the axle maker's tolerance, then re-check",
  ],
  [
    "Camber",
    "A slight positive bow at rest, straightening to near zero at rated GAWR",
    "Usually - by bending the tube",
    "Bend, or fit a camber correction kit where the axle supports one",
  ],
  [
    "Axle squareness to the tongue",
    "Perpendicular to the trailer's centreline",
    "Yes",
    "Loosen the U-bolts, shift the axle on the perches, re-torque",
  ],
  [
    "Tandem axle parallelism",
    "Both axles parallel to each other and to the frame",
    "Yes",
    "Compare diagonals hub to hub and adjust each axle",
  ],
  [
    "Ride height and spring sag",
    "Equal side to side, within the spring maker's published spec",
    "No",
    "Replace springs, add a leaf, or correct the load",
  ],
  [
    "Wheel bearing play",
    "None detectable by hand at the tire",
    "Yes",
    "Set the spindle nut to the correct preload and re-check",
  ],
];

const COST_TABLE = [
  [
    "Alignment measurement only",
    "$75 - $150",
    "Often credited against the repair if you proceed",
  ],
  [
    "Full alignment with toe and camber correction",
    "$150 - $400 per axle",
    "Higher when U-bolts are rusted or the tube needs a hard bend",
  ],
  [
    "Axle beam replacement, one axle",
    "$400 - $1,200",
    "Capacity, brake style and whether springs are included drive the range",
  ],
  [
    "Springs, shackles and wet bolts, one axle",
    "$250 - $600",
    "Cheapest moment to do it is while the axle is already out",
  ],
  [
    "Bearing and seal service, one axle",
    "$120 - $300",
    "Roughly $40 to $90 in parts if you do it yourself",
  ],
  [
    "One replacement ST tire, mounted",
    "$120 - $350 each",
    "A ruined set of four costs more than several alignments",
  ],
  [
    "Roadside tire change on a shoulder",
    "$200 - $500",
    "Before you count the risk to the trailer and to you",
  ],
];

const HOWTO_STEPS = [
  {
    name: "Park on level ground and set the trailer to its towing condition",
    text: "Alignment numbers only mean something with the trailer loaded the way you tow it and the tires at their correct cold pressure. Park on a flat, hard surface such as concrete, chock the wheels, and leave the trailer coupled or supported at the same coupler height you use on the road, because hitch height changes how the axles sit.",
  },
  {
    name: "Measure ride height and spring sag side to side first",
    text: "Before blaming alignment, measure from the ground to the same fixed point on the frame on both sides of each axle. A difference of more than about a half inch suggests collapsed or unequal springs, and a sagging spring changes camber on that side. Fixing a broken spring is a different job from aligning an axle, and doing them in the wrong order wastes the alignment.",
  },
  {
    name: "Check the axle for square using the diagonal method",
    text: "Drop a plumb line or hold a tape from a fixed point on the coupler or tongue to the centre of each hub, and compare the two measurements. On a tandem trailer, also cross-measure from the front hub on one side to the rear hub on the other, in both directions. A difference of more than roughly a quarter inch between the two diagonals means an axle is not square to the frame.",
  },
  {
    name: "String-line the tire sidewalls to check tracking",
    text: "Run a taut string or chalk line from the front of the tongue past the outside of the tires on one side, held at a constant height, and note the gap to the front and rear edges of each tire. Compare the same line on the other side. A trailer whose axles track straight will show matching, parallel gaps. A widening or narrowing gap across the tire is toe error, and a shift between the two axles is a parallelism problem.",
  },
  {
    name: "Check bearing play and brake drag before ordering parts",
    text: "Grip each tire at the top and bottom and rock it; any detectable movement is bearing play, not alignment. Spin each wheel and listen for roughness, then feel each hub after a normal drive with an infrared thermometer. A hot hub points to bearing preload or a dragging brake, and cupped wear on a tire with a hot hub is a bearing problem that no alignment will fix.",
  },
  {
    name: "Weigh the trailer before you conclude the axle is bent",
    text: "A surprisingly large share of one-side and inside-edge wear is simply overload, not damage. Put the trailer on a CAT scale to get per-axle and, on a three-pass weigh, per-side numbers, then compare each axle against its GAWR plate. If one side is carrying several hundred pounds more than the other, redistribute the load and the wear pattern may never come back.",
  },
  {
    name: "Hand the numbers to an alignment shop and ask for printouts",
    text: "A trailer alignment rig measures toe, camber, squareness and parallelism with the trailer loaded, then corrects them by bending the tube or shifting the axle. Ask for before and after readings in writing. That printout tells you whether the fix was geometry, and it gives you a baseline if the same tire starts wearing again a season later.",
  },
];

export default function TrailerAxleAlignmentAndTireWearPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <ArticleJsonLd
        title="Trailer Axle Alignment and Tire Wear: How to Diagnose It"
        description="How to read trailer tire wear patterns to separate toe, camber, bearing, overload and brake problems, how to check axle alignment with a tape measure and a string line, and what alignment and axle repair really cost."
        url="https://www.rvtowingcalc.com/guides/trailer-axle-alignment-and-tire-wear"
        datePublished="2026-09-28"
      />
      <FaqJsonLd
        faqs={FAQS}
        baseUrl="https://www.rvtowingcalc.com/guides/trailer-axle-alignment-and-tire-wear"
      />
      <HowToJsonLd
        name="How to Check Trailer Axle Alignment"
        description="A seven-step DIY trailer axle alignment check covering ride height and spring sag, the coupler-to-hub diagonal measurement, string-lining the tire sidewalls for toe tracking, bearing play and hub temperature, CAT scale weighing, and what to ask a professional alignment shop for."
        url="https://www.rvtowingcalc.com/guides/trailer-axle-alignment-and-tire-wear"
        totalTime="PT2H"
        steps={HOWTO_STEPS}
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
        <span className="text-gray-900">Axle Alignment</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
        Trailer Axle Alignment and Tire Wear: How to Diagnose and Fix It
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        When one trailer tire is bald on the shoulder and the other on the same
        axle looks nearly new, the tire is not the problem. Trailer tires wear
        the way they do because of geometry, load and mechanical play, and every
        pattern on the tread is a readable clue. This guide shows you how to
        separate toe from camber from a bad bearing from plain overload, how to
        measure the axles yourself, and what the repair costs.
      </p>

      <div className="mt-8 rounded-xl bg-brand-50 p-6">
        <h2 className="text-lg font-bold text-brand-800">The Short Answer</h2>
        <p className="mt-2 text-brand-700">
          Straight trailer axles are built with a slight{" "}
          <strong>upward camber bow</strong> that straightens out at the rated
          axle weight. Wear the <strong>inside edge of both tires</strong> and
          the axle is overloaded or the bow has flattened. Wear{" "}
          <strong>one tire only</strong> and suspect a bent spindle. Feel a{" "}
          <strong>feathered tread</strong> and you have a{" "}
          <strong>toe</strong> problem &mdash; a 1/8 inch toe error drags each
          tire sideways roughly <strong>28 feet per mile</strong>. Check the
          load on a CAT scale before buying parts, then measure ride height,
          diagonals and bearing play. Budget{" "}
          <strong>$150 to $400 per axle</strong> for a proper alignment and{" "}
          <strong>$400 to $1,200</strong> for a replacement axle.
        </p>
      </div>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Why Trailer Axles Go Out of Alignment
      </h2>
      <p className="mt-3 text-gray-700">
        A trailer axle looks like a dumb steel tube, but it is a spring. It is
        manufactured with a deliberate upward bow in the middle, and that bow is
        engineered to flatten out when the axle is loaded to its GAWR, so the
        tires run flat on the pavement at the only moment that matters &mdash;
        while you are towing. Everything that goes wrong with trailer tire wear
        flows from disturbing that design condition.
      </p>

      <h3 className="mt-6 text-xl font-semibold text-gray-900">
        Camber: the bow that is supposed to be there
      </h3>
      <p className="mt-2 text-gray-700">
        Camber is the inward or outward tilt of the wheel seen from behind. The
        tops of the tires on an unloaded trailer may lean slightly outward; that
        is the axle at rest, waiting for load to pull it straight. Overload the
        trailer past its{" "}
        <Link href="/gvwr-calculator" className="text-brand-600 hover:underline">
          GVWR
        </Link>{" "}
        or the{" "}
        <Link href="/guides/gawr-explained" className="text-brand-600 hover:underline">
          GAWR
        </Link>{" "}
        printed on the axle and the tube bows further than designed, tilting the
        tops inward so the inside shoulders carry the load and get scrubbed off.
      </p>

      <h3 className="mt-6 text-xl font-semibold text-gray-900">
        Toe: the alignment angle that eats tires
      </h3>
      <p className="mt-2 text-gray-700">
        Toe describes whether the front edges of the tires point toward each
        other or away. Trailers want essentially zero toe, and the reason is
        arithmetic: a toe error of just 1/8 inch across the tire diameter drags
        each tire sideways about 28 feet per mile, which over a 10,000 mile
        season is more than 50 miles of lateral scrubbing. That is where
        feathered tread and rapid shoulder wear come from. Toe goes out when a
        spindle is welded off square, when the axle shifts on the spring perches
        after an impact, or when the frame itself is out of square.
      </p>

      <h3 className="mt-6 text-xl font-semibold text-gray-900">
        Squareness and dog-tracking
      </h3>
      <p className="mt-2 text-gray-700">
        Axles must sit perpendicular to the trailer centreline. Skew one even
        slightly and the trailer stops following the tow vehicle&apos;s path
        &mdash; it runs offset, which drivers describe as dog-tracking. On a
        tandem there is a fourth specification: the two axles must be parallel
        to each other. A pair that is out of parallel pushes the trailer
        sideways with the tongue pointing straight ahead, which is exactly the
        condition that produces sway appearing &ldquo;for no reason&rdquo; at
        highway speed.
      </p>

      <h3 className="mt-6 text-xl font-semibold text-gray-900">
        Bent spindles and curbed wheels
      </h3>
      <p className="mt-2 text-gray-700">
        Spindles are welded to the axle tube and cannot be re-angled, so a bent
        spindle means an axle replacement rather than a correction. This is why
        asymmetry matters so much. If both tires on an axle wear alike, the
        cause is systematic &mdash; load or geometry. If one tire wears and its
        neighbour does not, look for damage from a single event: a curb clipped
        while turning, a pothole at highway speed, or a wheel dropped off a
        shoulder.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        How to Read Trailer Tire Wear Patterns
      </h2>
      <p className="mt-3 text-gray-700">
        Get on your knees with a flashlight and a tread depth gauge, and inspect
        all four tires before you touch a tool. Compare each tire against the
        one opposite it on the same axle, and against the axle in front or
        behind it. The pattern tells you which system to investigate.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">
                Wear pattern
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                What it looks like
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Most likely cause
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Check this first
              </th>
            </tr>
          </thead>
          <tbody>
            {WEAR_PATTERN_TABLE.map((row, i) => (
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
        Symptom-to-cause associations drawn from general trailer running gear and
        tire service guidance. Tandem trailers also scuff their tires slightly in
        tight turns by design, because the inside tire travels a shorter arc.
        Your axle maker&apos;s specification governs, and a laser alignment
        shop&apos;s measurement beats any table, including this one.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Symptom Checker: What the Trailer Is Doing
      </h2>
      <p className="mt-3 text-gray-700">
        Wear patterns take thousands of miles to develop. The trailer usually
        tells you sooner through how it behaves, and some of those behaviours
        are safety issues rather than maintenance items.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">
                Symptom
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Likely cause
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Severity
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {SYMPTOM_TABLE.map((row, i) => (
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
        Severity is our own assessment based on how directly each condition
        affects stability and braking. Anything marked High should be diagnosed
        before the next trip rather than at the end of the season.
      </p>

      <p className="mt-4 text-gray-700">
        Note how many of these end up as stability problems rather than tire
        bills. A trailer whose axles are no longer parallel scrubs rubber and
        also removes the margin you were relying on for{" "}
        <Link href="/guides/rv-trailer-sway-control" className="text-brand-600 hover:underline">
          sway control
        </Link>
        .
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Trailer Axle Alignment Specifications
      </h2>
      <p className="mt-3 text-gray-700">
        Trailers are simpler than cars because the wheels do not steer, but that
        also means fewer people ever look at the numbers. These are the
        measurements that matter and, more usefully, which of them you can
        actually change.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">
                Measurement
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Target
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Adjustable?
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                How it is corrected
              </th>
            </tr>
          </thead>
          <tbody>
            {SPEC_TABLE.map((row, i) => (
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
        Exact tolerances are set by the axle manufacturer and vary between
        designs, so treat this as orientation rather than a specification to
        shim to. A shop with a laser rig and the axle maker&apos;s tolerance
        sheet is the authority.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        How to Check Axle Alignment Yourself
      </h2>
      <p className="mt-3 text-gray-700">
        You cannot set toe and camber at home without a bending rig, but you can
        determine whether your axles are square, whether one has shifted,
        whether a bearing is loose, and whether the trailer is simply carrying
        too much weight. You need a tape measure, a chalk line, a jack, a plumb
        line and an infrared thermometer.
      </p>

      <svg
        viewBox="0 0 680 260"
        width="100%"
        role="img"
        aria-label="Diagram showing a trailer viewed from above with diagonal tape measurements from the coupler to each hub centre, illustrating axle squareness and a shifted axle resulting in dog tracking"
        className="mt-6 w-full rounded-xl border border-gray-200 bg-white"
      >
        <title>Measure both diagonals from the coupler to each hub</title>
        <rect x="0" y="0" width="680" height="260" fill="#ffffff" />

        <text
          x="24"
          y="30"
          fill="#111827"
          fontSize="15"
          fontWeight="700"
          fontFamily="system-ui, sans-serif"
        >
          Square axle: diagonals A and B match
        </text>

        <line x1="40" y1="70" x2="300" y2="70" stroke="#374151" strokeWidth="2" />
        <line x1="40" y1="130" x2="300" y2="130" stroke="#374151" strokeWidth="2" />
        <line x1="40" y1="70" x2="40" y2="130" stroke="#374151" strokeWidth="2" />
        <text
          x="150"
          y="112"
          fill="#6b7280"
          fontSize="12"
          textAnchor="middle"
          fontFamily="system-ui, sans-serif"
        >
          trailer frame
        </text>

        <circle cx="40" cy="100" r="6" fill="#047857" />
        <text
          x="18"
          y="152"
          fill="#047857"
          fontSize="12"
          fontWeight="700"
          fontFamily="system-ui, sans-serif"
        >
          coupler
        </text>

        <line x1="300" y1="62" x2="300" y2="138" stroke="#111827" strokeWidth="4" />
        <circle cx="300" cy="70" r="6" fill="#1d4ed8" />
        <circle cx="300" cy="130" r="6" fill="#1d4ed8" />

        <line x1="40" y1="100" x2="300" y2="70" stroke="#047857" strokeWidth="2" strokeDasharray="5 4" />
        <line x1="40" y1="100" x2="300" y2="130" stroke="#047857" strokeWidth="2" strokeDasharray="5 4" />
        <text x="185" y="72" fill="#047857" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">
          A
        </text>
        <text x="185" y="140" fill="#047857" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">
          B
        </text>

        <text
          x="24"
          y="190"
          fill="#111827"
          fontSize="15"
          fontWeight="700"
          fontFamily="system-ui, sans-serif"
        >
          Shifted axle: one diagonal longer, and the trailer dog-tracks
        </text>

        <line x1="380" y1="212" x2="640" y2="212" stroke="#374151" strokeWidth="2" />
        <line x1="380" y1="248" x2="640" y2="248" stroke="#374151" strokeWidth="2" />
        <line x1="380" y1="212" x2="380" y2="248" stroke="#374151" strokeWidth="2" />
        <circle cx="380" cy="230" r="6" fill="#b91c1c" />

        <line x1="380" y1="205" x2="380" y2="255" stroke="#111827" strokeWidth="4" />
        <line x1="616" y1="200" x2="660" y2="262" stroke="#111827" strokeWidth="4" />
        <circle cx="380" cy="212" r="6" fill="#1d4ed8" />
        <circle cx="644" cy="248" r="6" fill="#1d4ed8" />

        <line x1="380" y1="230" x2="380" y2="212" stroke="#b91c1c" strokeWidth="2" strokeDasharray="5 4" />
        <line x1="380" y1="230" x2="644" y2="248" stroke="#b91c1c" strokeWidth="3" />
        <text x="520" y="232" fill="#b91c1c" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">
          longer diagonal
        </text>
      </svg>
      <p className="mt-3 text-sm text-gray-500">
        Illustrative only. Measure to a fixed, repeatable point on each hub, hold
        the tape at the same height, and take each reading twice.
      </p>

      <h3 className="mt-6 text-xl font-semibold text-gray-900">
        The diagonal measurement is the fastest check
      </h3>
      <p className="mt-2 text-gray-700">
        Pick a single fixed reference on the coupler or the front of the tongue,
        then measure to the centre of each hub on the same axle. Repeat on the
        second axle if you have one, crossing from front-left to rear-right and
        from front-right to rear-left. On a healthy trailer the two diagonals
        agree closely; a difference beyond roughly a quarter inch means an axle
        is skewed or has slid on its perches.
      </p>

      <h3 className="mt-6 text-xl font-semibold text-gray-900">
        Weigh it before you condemn it
      </h3>
      <p className="mt-2 text-gray-700">
        Do not skip this step. Inside-edge wear on both tires is far more often
        an overload than a manufacturing problem. A{" "}
        <Link href="/guides/cat-scale-weighing" className="text-brand-600 hover:underline">
          three-pass CAT scale weigh
        </Link>{" "}
        gives you per-axle numbers, and weighing each side separately reveals the
        imbalance that flattens one end of an axle. Compare the result to the
        axle&apos;s GAWR plate and the trailer&apos;s{" "}
        <Link href="/gvwr-calculator" className="text-brand-600 hover:underline">
          GVWR
        </Link>
        .
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        What a Professional Alignment Involves
      </h2>
      <p className="mt-3 text-gray-700">
        A dedicated trailer alignment shop will weigh or simulate the loaded
        condition, mount gauges on each hub, and read toe, camber, squareness
        and parallelism. Correction is physical: the technician uses a hydraulic
        ram and a chain to bend the axle tube a few thousandths at a time,
        re-measuring after each pass. Squareness and parallelism are fixed by
        loosening the U-bolts and walking the axle along the spring perches
        until the diagonals match, then re-torquing.
      </p>
      <p className="mt-3 text-gray-700">
        Ask for before and after printouts, because an alignment that is not
        measured is not an alignment. Have the springs, shackles and wet bolts
        inspected in the same visit: worn spring eye bushings let the axle move
        under load, so a fresh alignment on tired bushings will not hold. Our{" "}
        <Link
          href="/guides/trailer-suspension-leaf-spring-inspection"
          className="text-brand-600 hover:underline"
        >
          leaf spring inspection guide
        </Link>{" "}
        covers what to look at.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        What Alignment and Axle Repair Cost
      </h2>
      <p className="mt-3 text-gray-700">
        The measurement is cheap. The parts are not. Below is what US owners
        typically pay, so you can compare a repair against the cost of simply
        buying tires again next season.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">Item</th>
              <th className="border px-3 py-2 text-left font-semibold">
                Typical US cost
              </th>
              <th className="border px-3 py-2 text-left font-semibold">Note</th>
            </tr>
          </thead>
          <tbody>
            {COST_TABLE.map((row, i) => (
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
        Representative US ranges for planning. Axle capacity, brake style,
        corrosion and how much hardware has seized all move these numbers.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        How to Stop It Happening Again
      </h2>
      <p className="mt-3 text-gray-700">
        Alignment is not a wear item, so if you have paid for a correction and
        the same tire starts wearing again, something upstream is still wrong.
        The usual culprits are an overloaded trailer, a trailer that is not
        towing level, or worn spring bushings letting the axle move.
      </p>
      <p className="mt-3 text-gray-700">
        Keep the trailer level by setting the ball mount drop so the tongue sits
        at the height the trailer maker specifies, and remember that a{" "}
        <Link
          href="/guides/weight-distribution-hitch-setup"
          className="text-brand-600 hover:underline"
        >
          weight distribution hitch
        </Link>{" "}
        changes the load on the trailer axles as well as the truck&apos;s. Check
        cold tire pressure against the{" "}
        <Link
          href="/guides/travel-trailer-tire-safety"
          className="text-brand-600 hover:underline"
        >
          tire load and pressure rules
        </Link>{" "}
        before every trip, and slow to a crawl for curbs and driveway lips
        &mdash; the most common way an axle gets knocked out of true is a
        slow-speed curb strike, not a highway pothole.
      </p>
      <p className="mt-3 text-gray-700">
        One more habit worth building: after any trip where you hit something
        hard, feel the tread by hand. Feathering shows up within a few hundred
        miles of a toe change.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Why This Matters More Than the Tire Bill
      </h2>
      <p className="mt-3 text-gray-700">
        It is tempting to treat uneven wear as a cosmetic annoyance with a
        rubber bill attached. It is not. Tires worn to the cords lose load
        capacity exactly where the tread is thinnest, and misalignment pushes
        sideways force into bearings designed for radial load only &mdash; which
        is why an out-of-true axle runs hot and why the failure usually arrives
        somewhere far from home.
      </p>
      <p className="mt-3 text-gray-700">
        There is a load story in it too. A trailer quietly running over its{" "}
        <Link href="/guides/gawr-explained" className="text-brand-600 hover:underline">
          axle rating
        </Link>{" "}
        is also asking its brakes to do more than they were sized for. Confirm
        the combination before your next trip with the{" "}
        <Link href="/towing-capacity-calculator" className="text-brand-600 hover:underline">
          towing capacity calculator
        </Link>{" "}
        and the{" "}
        <Link href="/tongue-weight-calculator" className="text-brand-600 hover:underline">
          tongue weight calculator
        </Link>
        , then make sure the running gear under it is straight.
      </p>

      <div className="mt-10 rounded-2xl bg-brand-600 p-8 text-center text-white">
        <h2 className="text-2xl font-bold">
          Is Your Trailer Actually Within Its Ratings?
        </h2>
        <p className="mt-2 text-brand-100">
          Check towing capacity, payload, GVWR and tongue weight in under two
          minutes. Free, independent, no sign-up.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
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
          <Link
            href="/checklist"
            className="inline-block rounded-xl bg-white px-6 py-3 text-sm font-bold text-brand-700 shadow-lg transition-all hover:bg-brand-50 active:scale-[0.99]"
          >
            Printable Checklist
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

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Sources &amp; References
      </h2>
      <ul className="mt-3 space-y-1 text-sm text-gray-600">
        <li>
          <a
            href="https://www.dexteraxle.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            Dexter Axle &mdash; axle beam specifications, camber and toe
            tolerances, and running gear service documentation
          </a>
        </li>
        <li>
          <a
            href="https://www.lci1.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            Lippert Components &mdash; axle, spring and suspension component
            documentation
          </a>
        </li>
        <li>
          <a
            href="https://www.nhtsa.gov/equipment/tires"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            NHTSA &mdash; tire safety, load limits and tread wear guidance
          </a>
        </li>
        <li>
          <a
            href="https://www.rvia.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            RV Industry Association (RVIA) &mdash; weight labelling and RV
            standards
          </a>
        </li>
        <li>
          <a
            href="https://www.rvsafety.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            RV Safety &amp; Education Foundation (RVSEF) &mdash; independent
            weighing and running gear education
          </a>
        </li>
        <li>
          <a
            href="https://www.fmcsa.dot.gov/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            FMCSA &mdash; vehicle and towed equipment inspection standards
          </a>
        </li>
      </ul>

      <div className="mt-10 rounded-xl border border-gray-200 bg-gray-50 p-6">
        <h3 className="font-bold text-gray-900">Related Guides</h3>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
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
              href="/guides/trailer-suspension-leaf-spring-inspection"
              className="text-brand-600 hover:underline"
            >
              Trailer Suspension &amp; Leaf Springs
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
              href="/guides/cat-scale-weighing"
              className="text-brand-600 hover:underline"
            >
              How to Weigh Your RV at a CAT Scale
            </Link>
          </li>
          <li>
            <Link
              href="/guides/gawr-explained"
              className="text-brand-600 hover:underline"
            >
              GAWR Explained
            </Link>
          </li>
          <li>
            <Link
              href="/guides/trailer-brake-inspection-replacement"
              className="text-brand-600 hover:underline"
            >
              Trailer Brake Inspection &amp; Replacement
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
