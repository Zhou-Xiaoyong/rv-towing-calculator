import type { Metadata } from "next";
import Link from "next/link";
import { FaqJsonLd, ArticleJsonLd, HowToJsonLd } from "@/components/seo/JsonLd";
import { DEFAULT_OG_IMAGES } from "@/lib/seo/default-og-image";

export const metadata: Metadata = {
  title: "Trailer Suspension and Leaf Spring Inspection: When to Replace",
  description:
    "Inspect trailer leaf springs every 12 months or 12,000 miles: the 7-point check, sag limits, wet bolt upgrade, U-bolt torque, and what replacement costs.",
  alternates: {
    canonical:
      "https://www.rvtowingcalc.com/guides/trailer-suspension-leaf-spring-inspection",
  },
  openGraph: {
    title: "Trailer Suspension and Leaf Spring Inspection: When to Replace",
    description:
      "How to inspect travel trailer leaf springs, shackles and bushings: the 12 month / 12,000 mile interval, ride height sag limits, the seven failure signs, and real replacement costs.",
    url: "https://www.rvtowingcalc.com/guides/trailer-suspension-leaf-spring-inspection",
    images: DEFAULT_OG_IMAGES,
  },
};

const FAQS = [
  {
    q: "How often should trailer leaf springs be inspected?",
    a: "Visually inspect the springs, shackle straps, bushings and U-bolts at least once a year, and again at the start of the season. If you tow frequently, tow near GVWR, or run gravel and washboard roads, drop the visual check to every 3,000 to 5,000 miles and combine it with the annual wheel bearing service. Springs are also worth a look before any long trip: the whole inspection takes a flashlight, a tape measure and ten minutes under the trailer.",
  },
  {
    q: "How much sag means a trailer leaf spring needs replacing?",
    a: "A loss of roughly 10 percent of the original ride height is the common industry trigger, and on a typical travel trailer that works out to about 3/4 inch of drop measured at the frame or spring arch. The practical test is simpler: park on level ground loaded ready to camp and compare left to right. If one side sits noticeably lower, or the spring pack has flattened and lost its arch, replace the pair. Measure and record the arch height when the springs are new so you have something to compare against later.",
  },
  {
    q: "Do I have to replace trailer leaf springs in pairs?",
    a: "Yes, always replace both springs on the same axle, even if only one is cracked. A new spring carries its load at a different rate than a fatigued one, so pairing them creates uneven ride height, uneven tire loading and a trailer that tracks crooked. That is also why you should replace the whole leaf pack rather than a single broken leaf: the remaining leaves in the pack have already been stressed and will not match a new leaf.",
  },
  {
    q: "What are wet bolts and are they worth it?",
    a: "Wet bolts are shackle bolts drilled through the shaft with a grease fitting on the head, so you can pump grease directly to a bronze bushing. Standard trailers usually ship with dry bolts and nylon or plastic bushings, which wear out faster and squeak once they do. A wet bolt kit with bronze bushings typically runs $80 to $150 per axle and turns the shackle rebuild into a permanent, greasable assembly. Grease them every 3,000 to 5,000 miles, or at least once a year.",
  },
  {
    q: "Can I add a leaf to increase my trailer's weight rating?",
    a: "No. Adding a leaf stiffens the ride and can reduce sag, but it does not change the axle, hub, tire or chassis ratings on the trailer's weight label. The legal and safe capacity comes from the lowest-rated component in the chain, so a heavier spring pack cannot be used to justify loading past GVWR or GAWR. If you need more capacity, the axle, springs, tires and frame all have to be upgraded together and the change documented.",
  },
];

const INTERVAL_TABLE = [
  [
    "Standard use",
    "Inspect yearly, service at 12 months / 12,000 miles",
    "Tie it to the wheel bearing service so it actually gets done.",
  ],
  [
    "Frequent towing or near GVWR",
    "Visual check every 3,000-5,000 miles",
    "More load cycles means more fatigue, on every trip.",
  ],
  [
    "Gravel, washboard or backroad towing",
    "Visual check every 3,000 miles",
    "Impacts and dust destroy bushings and open gaps between leaves.",
  ],
  [
    "Coastal or road-salt exposure",
    "Inspect twice a year",
    "Corrosion starts between the leaves where you cannot see it.",
  ],
  [
    "Any cracked leaf or elongated shackle hole",
    "Replace immediately",
    "Not a next-season item. Both springs on that axle come off.",
  ],
];

const SIGN_TABLE = [
  [
    "Flat or S-shaped arch, one side sitting low",
    "Steel fatigue, chronic overloading",
    "Replace the pair; find out what is overloading the axle first",
  ],
  [
    "Crack near the center bolt or at a spring eye",
    "Severe impacts, bottoming out",
    "Replace the whole pack before the next tow",
  ],
  [
    "Daylight visible between leaves",
    "Fatigue and overload",
    "The pack has lost its load-sharing. Replace",
  ],
  [
    "Chunks of rust flaking off, pitting",
    "Salt, coastal air, long-term storage",
    "Replace. Surface bloom is normal, structural loss is not",
  ],
  [
    "Oval or elongated bolt holes in the shackle straps",
    "Worn bushings, loose bolts",
    "New straps, new bolts, ideally a wet bolt kit",
  ],
  [
    "Missing or shifted U-bolt nuts, shiny wear marks",
    "Stretched U-bolts, vibration",
    "Replace U-bolts and re-torque in a diagonal pattern",
  ],
  [
    "Hairline cracks in the welded frame hangers",
    "Torsional stress from tight turns",
    "Stop towing. Needs a certified welder to reinforce",
  ],
];

const CAPACITY_TABLE = [
  ["3,500 lb axle (single)", "~1,750 lb per spring", "Small single-axle travel trailers, teardrops"],
  ["5,200 lb axle (single)", "~2,600 lb per spring", "Common on mid-size single-axle trailers"],
  ["3,500 lb axles (tandem)", "~1,750 lb per spring", "Entry tandem trailers, 6,000-7,000 lb GVWR"],
  ["5,200 lb axles (tandem)", "~2,600 lb per spring", "The most common travel trailer suspension"],
  ["6,000-7,000 lb axles (tandem)", "~3,000-3,500 lb per spring", "Large travel trailers and toy haulers"],
];

const TORQUE_TABLE = [
  ["Hitch ball nut, 3/4 in shank", "160 ft-lb", "Published Reese figure; check your ball maker"],
  ["Hitch ball nut, 1 in shank", "250 ft-lb", "The common 2-5/16 in ball on a class IV mount"],
  ["Hitch ball nut, 1-1/4 in shank", "450 ft-lb", "Heavy class V balls"],
  ["U-bolts, 1/2 in", "45-65 ft-lb", "Tighten in a diagonal pattern, recheck after 100 miles"],
  ["U-bolts, 5/8 in", "100-130 ft-lb", "Same pattern; never reuse stretched U-bolts"],
  ["Shackle and eye bolts", "30-50 ft-lb", "Dexter's commonly published range; confirm your axle"],
  ["Lug nuts", "90-120 ft-lb", "Per wheel manufacturer; recheck at 25, 50 and 100 miles"],
];

const COST_TABLE = [
  ["Leaf spring, per pair", "$90 - $220", "Match axle capacity, leaf count and spring length"],
  ["Wet bolt kit with bronze bushings", "$80 - $150 per axle", "Includes heavy-duty shackle straps"],
  ["New U-bolts and hardware", "$25 - $50 per axle", "Never reuse. They are a one-time part"],
  ["Shop labour, springs per axle", "$200 - $400", "More with seized or rusted hardware"],
  ["Complete axle assembly", "$350 - $800", "The sensible buy when the axle tube is bent"],
  ["Torsion axle conversion", "$800 - $1,500 per axle", "Including welding and alignment"],
  ["Roadside failure repair", "$800 - $2,000+", "Axle, tires, fender, tow and the lost trip"],
];

const TORSION_TABLE = [
  [
    "Ride quality",
    "Firmer; each wheel impacts the trailer directly",
    "Independent per side, noticeably smoother on broken pavement",
  ],
  [
    "Maintenance",
    "Shackles, bushings and bolts to grease and replace",
    "Almost none - no shackles, no bushings",
  ],
  [
    "Load equalising",
    "Tandem axles share load through the equaliser",
    "No equalising; each axle carries its own load",
  ],
  [
    "Repair cost",
    "Cheap and roadside-repairable",
    "A failed torsion arm means a new axle assembly",
  ],
  [
    "Typical cost",
    "About $200 per axle in parts",
    "$800 - $1,500 per axle to convert",
  ],
];

const HOWTO_STEPS = [
  {
    name: "Set up on level ground and measure the baseline",
    text: "Chock the wheels, park on flat ground loaded ready to camp and measure from a fixed frame reference point down to the pavement on both sides. Compare left to right, and against the arch measurement you recorded when the springs were new.",
  },
  {
    name: "Inspect the spring arch and eye ends",
    text: "Look along the pack with a flashlight. A flattened or S-shaped profile means fatigue. Cracks almost always start at the spring eyes or beside the centre bolt, so clean those areas and look closely.",
  },
  {
    name: "Check for gaps between the leaves",
    text: "Slide a thin feeler or a bright light behind the pack. If daylight shows between individual leaves, the pack has lost its load-sharing and needs replacing.",
  },
  {
    name: "Assess rust rather than assuming the worst",
    text: "Surface bloom is normal on an exposed spring. Flaking scale, pitting and chunks coming away mean structural loss of section, and that is a replacement.",
  },
  {
    name: "Inspect the shackle straps, bolts and holes",
    text: "Grab each shackle and try to move it. Elongated or oval bolt holes, missing nuts, or a strap that has shifted all point at worn bushings that have been hammering for a while.",
  },
  {
    name: "Check the bushings",
    text: "Plastic or nylon bushing material squeezing out of a shackle means the bushing is finished. Squeaking during turns is the audible version of the same problem. Bronze bushings and wet bolts are the durable fix.",
  },
  {
    name: "Verify U-bolts and frame hangers",
    text: "Check the U-bolt nuts for tightness and look for shiny wear marks or a shifted tie plate, which mean the axle has been moving. Inspect the welds where the hangers meet the frame for hairline cracks.",
  },
  {
    name: "Confirm the axle is square to the frame",
    text: "Measure diagonally from a fixed reference at the coupler or frame front to the centre of the axle on each side. Both sides should match within about 1/4 inch. A larger difference means the axle has shifted or the hangers are damaged.",
  },
  {
    name: "Torque, then recheck after 100 miles",
    text: "If you have replaced hardware, torque the U-bolts and shackle bolts to the axle maker's specification on the ground under load, then recheck at 50 and 100 miles and again before every trip.",
  },
];

export default function TrailerSuspensionLeafSpringInspectionPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <ArticleJsonLd
        title="Trailer Suspension and Leaf Spring Inspection: When to Replace"
        description="Why trailer leaf springs fail quietly, the 12 month / 12,000 mile inspection interval, the seven failure signs, ride height sag limits, wet bolt upgrades and real replacement costs."
        url="https://www.rvtowingcalc.com/guides/trailer-suspension-leaf-spring-inspection"
        datePublished="2026-09-20"
      />
      <FaqJsonLd
        faqs={FAQS}
        baseUrl="https://www.rvtowingcalc.com/guides/trailer-suspension-leaf-spring-inspection"
      />
      <HowToJsonLd
        name="How to Inspect Travel Trailer Leaf Springs and Suspension"
        description="A step-by-step trailer suspension inspection covering ride height measurement, spring arch, cracks, gaps between leaves, shackles, bushings, U-bolts and axle squareness."
        url="https://www.rvtowingcalc.com/guides/trailer-suspension-leaf-spring-inspection"
        totalTime="PT1H"
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
        <span className="text-gray-900">Suspension &amp; Leaf Springs</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
        Trailer Suspension and Leaf Spring Inspection: When to Replace
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        Your trailer&apos;s leaf springs do two jobs at once: they carry the
        load, and they hold the axles in position. The first job fails
        gradually and visibly. The second fails quietly, and that is the one
        that hurts &mdash; a sagging spring walks the axle out of square, the
        tires start scrubbing, and a cracked leaf becomes a tracking problem at
        highway speed. This guide covers the inspection interval, the seven
        signs that predict failure, how much sag is too much, and what the fix
        really costs.
      </p>

      <div className="mt-8 rounded-xl bg-brand-50 p-6">
        <h2 className="text-lg font-bold text-brand-800">The Short Answer</h2>
        <p className="mt-2 text-brand-700">
          Inspect the springs, shackles, bushings and U-bolts at least{" "}
          <strong>once a year</strong>, and service the assembly on the same{" "}
          <strong>12 month / 12,000 mile</strong> schedule as your wheel
          bearings. Drop to a visual check every{" "}
          <strong>3,000 to 5,000 miles</strong> if you tow often, tow near GVWR,
          or run gravel roads. Replace the springs when you find a crack,
          roughly <strong>10 percent loss of ride height</strong> (about 3/4
          inch), daylight between the leaves, or an elongated shackle bolt hole
          &mdash; and always replace them as a{" "}
          <strong>matched pair on that axle</strong>, never one at a time.
        </p>
      </div>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Why Trailer Suspension Fails Quietly
      </h2>
      <p className="mt-3 text-gray-700">
        A travel trailer suspension is about as simple as vehicle engineering
        gets: two leaf packs per axle, a centre bolt clamping each pack to the
        axle tube, a shackle at one end so the spring can change length as it
        flexes, and rubber or plastic bushings at every pivot. It is durable,
        it is cheap, and it is completely unsprung &mdash; every pothole, every
        expansion joint and every overloaded trip goes straight into it.
      </p>

      <h3 className="mt-6 text-xl font-semibold text-gray-900">
        Springs are a wear item, not a lifetime part
      </h3>
      <p className="mt-2 text-gray-700">
        Spring steel fatigues with every load cycle. Run a trailer near its{" "}
        <Link href="/gvwr-calculator" className="text-brand-600 hover:underline">
          GVWR
        </Link>{" "}
        for a few seasons and the pack loses arch, the leaves start to separate,
        and the whole assembly stops sharing load the way it was designed to.
        Most trailer springs give good service for five to ten years, and much
        less on a trailer that sits loaded, tows overweight, or lives near salt
        water.
      </p>

      <h3 className="mt-6 text-xl font-semibold text-gray-900">
        What a failed spring actually does on the road
      </h3>
      <p className="mt-2 text-gray-700">
        There are three distinct failure chains, and they escalate quickly:
      </p>
      <ul className="mt-2 ml-6 list-disc space-y-2 text-gray-700">
        <li>
          <strong>Sag and misalignment.</strong> A flattened pack lowers that
          corner and changes the axle&apos;s angle to the frame. The tires stop
          running true, so they scrub and wear in a scalloped pattern, and the
          trailer starts dog-tracking down the road.
        </li>
        <li>
          <strong>A broken leaf.</strong> Once a leaf cracks, the pack can no
          longer carry its share. The axle shifts under load, and the trailer
          loses tracking precisely when you are braking or turning.
        </li>
        <li>
          <strong>Worn shackles and bushings.</strong> Oval bolt holes let the
          axle move laterally. That is the geometry behind a{" "}
          <Link href="/guides/rv-trailer-sway-control" className="text-brand-600 hover:underline">
            sway event
          </Link>{" "}
          that no anti-sway bar can tune out.
        </li>
      </ul>
      <p className="mt-3 text-gray-700">
        Because all three develop slowly, the suspension rewards a ten-minute
        inspection more than almost any other system on the trailer.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        How Often to Inspect Trailer Leaf Springs
      </h2>
      <p className="mt-3 text-gray-700">
        There is no single interval that fits every trailer, because the load
        and the road do the damage. Use these as the baseline and shorten them
        when your own use pattern demands it.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">
                Use pattern
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Inspection interval
              </th>
              <th className="border px-3 py-2 text-left font-semibold">Note</th>
            </tr>
          </thead>
          <tbody>
            {INTERVAL_TABLE.map((row, i) => (
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
        Planning baselines drawn from general trailer industry guidance. Your
        axle and trailer manufacturer&apos;s published schedule always governs
        &mdash; including these numbers.
      </p>

      <p className="mt-4 text-gray-700">
        The single most useful habit is to do the suspension inspection in the
        same session as the{" "}
        <Link
          href="/guides/trailer-wheel-bearing-maintenance"
          className="text-brand-600 hover:underline"
        >
          wheel bearing repack
        </Link>
        . You are already under the trailer with the wheels off, and the two
        systems fail for the same reasons: load, heat and neglect.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        The 7-Point Leaf Spring Inspection
      </h2>
      <p className="mt-3 text-gray-700">
        You need a flashlight, a tape measure, a pry bar or large screwdriver,
        and level ground. Work in this order, because the first check tells you
        whether the rest is academic.
      </p>

      <svg
        viewBox="0 0 680 240"
        width="100%"
        role="img"
        aria-label="Diagram comparing a healthy arched trailer leaf spring pack with a flattened, fatigued pack that has sagged and developed gaps between the leaves"
        className="mt-6 w-full rounded-xl border border-gray-200 bg-white"
      >
        <title>Healthy leaf spring arch versus a fatigued, flattened pack</title>
        <rect x="0" y="0" width="680" height="240" fill="#ffffff" />

        <text
          x="24"
          y="30"
          fill="#111827"
          fontSize="15"
          fontWeight="700"
          fontFamily="system-ui, sans-serif"
        >
          Compare the arch, not the mileage
        </text>

        <text
          x="40"
          y="62"
          fill="#047857"
          fontSize="13"
          fontWeight="700"
          fontFamily="system-ui, sans-serif"
        >
          Healthy pack
        </text>
        <path
          d="M40 140 Q170 96 300 140"
          fill="none"
          stroke="#047857"
          strokeWidth="9"
          strokeLinecap="round"
        />
        <line x1="40" y1="140" x2="40" y2="164" stroke="#6b7280" strokeWidth="3" />
        <line x1="300" y1="140" x2="300" y2="164" stroke="#6b7280" strokeWidth="3" />
        <line x1="40" y1="176" x2="300" y2="176" stroke="#9ca3af" strokeWidth="1" />
        <text
          x="170"
          y="196"
          fill="#374151"
          fontSize="12"
          textAnchor="middle"
          fontFamily="system-ui, sans-serif"
        >
          Leaves together, even load sharing
        </text>

        <text
          x="380"
          y="62"
          fill="#b91c1c"
          fontSize="13"
          fontWeight="700"
          fontFamily="system-ui, sans-serif"
        >
          Fatigued pack
        </text>
        <path
          d="M380 146 Q510 130 640 146"
          fill="none"
          stroke="#dc2626"
          strokeWidth="9"
          strokeLinecap="round"
        />
        <path
          d="M380 158 Q510 150 640 158"
          fill="none"
          stroke="#dc2626"
          strokeWidth="7"
          strokeLinecap="round"
        />
        <line x1="380" y1="146" x2="380" y2="164" stroke="#6b7280" strokeWidth="3" />
        <line x1="640" y1="146" x2="640" y2="164" stroke="#6b7280" strokeWidth="3" />
        <line x1="380" y1="176" x2="640" y2="176" stroke="#9ca3af" strokeWidth="1" />
        <text
          x="510"
          y="196"
          fill="#b91c1c"
          fontSize="12"
          textAnchor="middle"
          fontFamily="system-ui, sans-serif"
        >
          Lost arch, daylight between leaves
        </text>

        <text
          x="40"
          y="224"
          fill="#6b7280"
          fontSize="12"
          fontFamily="system-ui, sans-serif"
        >
          Ride height is the leading indicator. Measure it when the springs are
          new so you have a number to compare.
        </text>
      </svg>
      <p className="mt-3 text-sm text-gray-500">
        Illustrative only. Spring design, leaf count and arch vary by axle
        capacity &mdash; measure your own trailer rather than comparing it to a
        generic figure.
      </p>

      <h3 className="mt-6 text-xl font-semibold text-gray-900">
        1. Ride height and arch
      </h3>
      <p className="mt-2 text-gray-700">
        This is the earliest warning and the easiest to measure. On level
        ground, loaded ready to camp, measure from a fixed reference point on
        the frame down to the pavement on both sides and write both numbers
        down. Do the same measurement when the springs are new, or when you buy
        the trailer. A side-to-side difference, or a loss of about 10 percent
        against your baseline, is the trigger to replace.
      </p>

      <h3 className="mt-6 text-xl font-semibold text-gray-900">
        2. Cracks at the eyes and the centre bolt
      </h3>
      <p className="mt-2 text-gray-700">
        Cracks almost never start in the middle of a leaf. They start at the
        spring eyes and beside the centre bolt, where stress concentrates. Wire
        brush those two areas and look with a bright light. A crack means the
        pack is done &mdash; there is no safe repair.
      </p>

      <h3 className="mt-6 text-xl font-semibold text-gray-900">
        3. Daylight between the leaves
      </h3>
      <p className="mt-2 text-gray-700">
        A healthy multi-leaf pack sits clamped together and shares load
        progressively. Once you can see light between individual leaves, the
        pack has stopped working as a stack and the load is landing on fewer
        leaves than designed.
      </p>

      <h3 className="mt-6 text-xl font-semibold text-gray-900">
        4. Rust that has taken material with it
      </h3>
      <p className="mt-2 text-gray-700">
        Every trailer spring gets surface rust, and surface rust alone is not a
        reason to replace anything. What matters is rust that has removed
        section: flaking scale, deep pitting, or chunks you can pick away.
      </p>

      <h3 className="mt-6 text-xl font-semibold text-gray-900">
        5. Shackle straps and bolt holes
      </h3>
      <p className="mt-2 text-gray-700">
        Grab each shackle strap and try to move it. Free play, a missing nut, or
        a bolt hole that has worn oval all mean the pivot has been hammering for
        thousands of miles. Elongated holes are the point where alignment is
        lost, and they cannot be fixed by tightening.
      </p>

      <h3 className="mt-6 text-xl font-semibold text-gray-900">
        6. Bushings
      </h3>
      <p className="mt-2 text-gray-700">
        Look for bushing material squeezing out of the shackle, and listen for
        squeaking in low-speed turns &mdash; that sound is dry friction. Many
        trailers ship with plastic bushings, which wear faster than bronze.
        Replacing them is inexpensive, and it is the right moment to move to a
        wet bolt kit.
      </p>

      <h3 className="mt-6 text-xl font-semibold text-gray-900">
        7. U-bolts, tie plates and frame hangers
      </h3>
      <p className="mt-2 text-gray-700">
        Loose U-bolts let the axle shift on the spring seat, which throws
        alignment out instantly. Look for shiny wear marks and shifted tie
        plates, not just loose nuts. At the mounting points, inspect the welds
        joining the hangers to the frame: a hairline crack there is a stop-tow
        condition, because the whole axle is held by that weld. This is also
        where the load path meets your{" "}
        <Link href="/guides/gawr-explained" className="text-brand-600 hover:underline">
          GAWR
        </Link>
        , so a cracked hanger is a weight-rating problem as well as a
        structural one.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Failure Signs and What Each One Means
      </h2>
      <p className="mt-3 text-gray-700">
        Match what you actually see to the corrective action, rather than
        guessing at severity.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">
                What you find
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
            {SIGN_TABLE.map((row, i) => (
              <tr key={row[0]} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                <td className="border px-3 py-2 font-semibold">{row[0]}</td>
                <td className="border px-3 py-2">{row[1]}</td>
                <td className="border px-3 py-2 text-xs">{row[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        What Your Springs Actually Carry
      </h2>
      <p className="mt-3 text-gray-700">
        A trailer leaf spring is rated by the axle it serves, and each spring
        carries half of that figure. Do not confuse the spring rating with the
        trailer&apos;s cargo capacity: the pack supports everything above it,
        including the trailer body, water, propane and gear, not just the cargo
        you loaded.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">
                Axle configuration
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Typical spring rating
              </th>
              <th className="border px-3 py-2 text-left font-semibold">Note</th>
            </tr>
          </thead>
          <tbody>
            {CAPACITY_TABLE.map((row, i) => (
              <tr key={row[0]} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                <td className="border px-3 py-2 font-semibold">{row[0]}</td>
                <td className="border px-3 py-2">{row[1]}</td>
                <td className="border px-3 py-2 text-xs">{row[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-gray-700">
        Adding a leaf can reduce sag and stiffen the ride, but it does{" "}
        <strong>not</strong> raise any rating on the trailer. Capacity is set by
        the lowest-rated component in the chain, which is usually the axle,
        hubs or tires rather than the spring. Before adding gear, confirm what
        the trailer really weighs loaded and how much{" "}
        <Link
          href="/guides/cargo-carrying-capacity-ccc"
          className="text-brand-600 hover:underline"
        >
          cargo carrying capacity
        </Link>{" "}
        you have left &mdash; a chronically overloaded trailer is the single
        most common reason a spring pack goes flat early.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Wet Bolts, Bushings and Equalisers
      </h2>
      <p className="mt-3 text-gray-700">
        Every pivot in the suspension is a wear point: two spring eyes, two
        shackle bolts and the equaliser on a tandem axle. Standard trailers
        typically ship with solid dry bolts and plastic or nylon bushings, which
        were chosen for cost and which wear out within a few seasons of real
        use.
      </p>
      <ul className="mt-2 ml-6 list-disc space-y-2 text-gray-700">
        <li>
          <strong>Wet bolt kits</strong> replace the dry bolts with drilled,
          greaseable bolts and bronze bushings. Grease them every 3,000 to
          5,000 miles, or at least once a year, until you see fresh grease
          appear at the shackle plates. Kits with heavy-duty shackle straps run
          roughly $80 to $150 per axle and are one of the better value upgrades
          on a trailer.
        </li>
        <li>
          <strong>The equaliser</strong> pivots between the two springs on a
          tandem axle and lets them share load. When its bushing wears, the
          equaliser rocks further than designed and one axle starts carrying
          more than the other.
        </li>
        <li>
          <strong>Never weld on a leaf spring.</strong> Spring steel is
          heat-treated; welding destroys the temper and turns the leaf brittle,
          which is how you get a snap under load.
        </li>
      </ul>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Leaf Springs vs Torsion Axles
      </h2>
      <p className="mt-3 text-gray-700">
        If you are replacing worn springs anyway, torsion axles are the other
        option worth understanding. They ride better, but they change the
        failure behaviour of the trailer.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold"></th>
              <th className="border px-3 py-2 text-left font-semibold">
                Leaf spring
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Torsion axle
              </th>
            </tr>
          </thead>
          <tbody>
            {TORSION_TABLE.map((row, i) => (
              <tr key={row[0]} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                <td className="border px-3 py-2 font-semibold">{row[0]}</td>
                <td className="border px-3 py-2">{row[1]}</td>
                <td className="border px-3 py-2 text-xs">{row[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-gray-700">
        The trade-off that surprises owners is equalisation. On a tandem leaf
        trailer, a blown tire transfers load through the equaliser to the
        remaining axle. A torsion axle does not equalise, so the surviving tire
        carries a larger share of the load at the worst possible moment. That
        matters if you are already running close to your{" "}
        <Link
          href="/guides/travel-trailer-tire-safety"
          className="text-brand-600 hover:underline"
        >
          tire load range
        </Link>
        .
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Replacement Torque Specs and What the Job Costs
      </h2>
      <p className="mt-3 text-gray-700">
        Suspension work has one non-negotiable rule: never support the trailer
        by the suspension. Lift and support the frame on jack stands rated for
        the load, then torque the hardware with the trailer on the ground and
        carrying its normal weight, because U-bolts are clamped against load.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">
                Fastener
              </th>
              <th className="border px-3 py-2 text-left font-semibold">Spec</th>
              <th className="border px-3 py-2 text-left font-semibold">Note</th>
            </tr>
          </thead>
          <tbody>
            {TORQUE_TABLE.map((row, i) => (
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
        Commonly published values across axle and hitch component makers, shown
        for orientation. Your axle, wheel and hitch manufacturer&apos;s figures
        take precedence over any generic table, including this one.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">Item</th>
              <th className="border px-3 py-2 text-left font-semibold">
                Typical cost
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
        Representative US ranges for planning. Regional labour rates, axle
        capacity and how much hardware has seized all move these numbers
        significantly.
      </p>

      <p className="mt-4 text-gray-700">
        Two habits prevent most repeat failures. Replace springs in{" "}
        <strong>matched pairs</strong> on the same axle &mdash; a new spring
        next to a fatigued one gives you unequal ride height and uneven tire
        loading. And fit <strong>new U-bolts</strong> every time: U-bolts
        stretch when torqued and are a one-time-use part, which is why reusing
        them is a leading cause of a shifted axle.
      </p>
      <p className="mt-3 text-gray-700">
        Slot the inspection into your normal routine. The{" "}
        <Link
          href="/guides/travel-trailer-pre-trip-inspection"
          className="text-brand-600 hover:underline"
        >
          pre-trip inspection checklist
        </Link>{" "}
        covers the wheel-end and hitch items, the{" "}
        <Link href="/guides/spring-checklist" className="text-brand-600 hover:underline">
          spring checklist
        </Link>{" "}
        is the right moment for the annual service, and our{" "}
        <Link
          href="/guides/dry-weight-vs-loaded-weight"
          className="text-brand-600 hover:underline"
        >
          dry weight vs loaded weight guide
        </Link>{" "}
        explains why the load you think you are carrying rarely matches the load
        the springs actually feel.
      </p>

      <div className="mt-10 rounded-2xl bg-brand-600 p-8 text-center text-white">
        <h2 className="text-2xl font-bold">
          Sag Starts With Weight You Have Not Counted
        </h2>
        <p className="mt-2 text-brand-100">
          Check your trailer weight, tongue weight and payload in under two
          minutes. Free, independent, no sign-up.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link
            href="/gvwr-calculator"
            className="inline-block rounded-xl bg-white px-6 py-3 text-sm font-bold text-brand-700 shadow-lg transition-all hover:bg-brand-50 active:scale-[0.99]"
          >
            GVWR Calculator
          </Link>
          <Link
            href="/payload-calculator"
            className="inline-block rounded-xl bg-white px-6 py-3 text-sm font-bold text-brand-700 shadow-lg transition-all hover:bg-brand-50 active:scale-[0.99]"
          >
            Payload Calculator
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
            Dexter Axle &mdash; suspension, axle and wheel-end service manuals
            with published inspection schedules and torque tables
          </a>
        </li>
        <li>
          <a
            href="https://www.lci1.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            Lippert Components &mdash; axle and suspension component
            documentation, including wet bolt and shackle kits
          </a>
        </li>
        <li>
          <a
            href="https://www.nhtsa.gov/equipment/tires"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            NHTSA &mdash; tire load, inflation and inspection guidance
          </a>
        </li>
        <li>
          <a
            href="https://www.rvia.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            RV Industry Association (RVIA) &mdash; trailer weight labelling and
            maintenance standards
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
            weighing, load distribution and running gear education
          </a>
        </li>
        <li>
          <a
            href="https://catscale.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            CAT Scale &mdash; certified public weigh stations, including
            per-axle weights
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
              href="/guides/travel-trailer-tire-safety"
              className="text-brand-600 hover:underline"
            >
              Travel Trailer Tire Safety
            </Link>
          </li>
          <li>
            <Link href="/guides/gawr-explained" className="text-brand-600 hover:underline">
              GAWR Explained
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
          <li>
            <Link
              href="/guides/travel-trailer-pre-trip-inspection"
              className="text-brand-600 hover:underline"
            >
              Pre-Trip Inspection Checklist
            </Link>
          </li>
          <li>
            <Link href="/guides/winter-storage" className="text-brand-600 hover:underline">
              Winter RV Storage Guide
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
