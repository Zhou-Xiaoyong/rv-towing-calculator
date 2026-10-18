import type { Metadata } from "next";
import Link from "next/link";
import { FaqJsonLd, ArticleJsonLd, HowToJsonLd } from "@/components/seo/JsonLd";
import { DEFAULT_OG_IMAGES } from "@/lib/seo/default-og-image";

import AmazonAffiliate from "@/components/AmazonAffiliate";

export const metadata: Metadata = {
  title: "RV Slide Out Maintenance and Seal Replacement Guide",
  description:
    "RV slide out maintenance and seal replacement: which seal actually leaks, the correct lubricant for each mechanism, and a step-by-step wiper seal swap.",
  keywords: [
    "rv slide out maintenance",
    "rv slide out seal replacement",
    "rv slide out leaking water",
    "schwintek slide out lubrication",
    "rv slide out wiper seal",
    "rv slide out not working",
    "rv slide topper maintenance",
  ],
  alternates: {
    canonical:
      "https://www.rvtowingcalc.com/guides/rv-slide-out-maintenance-and-seal-replacement",
  },
  openGraph: {
    title: "RV Slide Out Maintenance and Seal Replacement Guide",
    description:
      "Why the seal you can see is rarely the one that leaks, how to inspect a slide in ten minutes, and which lubricant belongs on which mechanism.",
    url: "https://www.rvtowingcalc.com/guides/rv-slide-out-maintenance-and-seal-replacement",
    images: DEFAULT_OG_IMAGES,
  },
};

const FAQS = [
  {
    q: "How often should RV slide out seals be replaced?",
    a: "Expect five to seven years from the wiper and bulb seals on a trailer stored outdoors, and longer under cover. UV exposure and abrasion from dirt are what wear them, so a rig kept in the sun and driven on gravel roads will be at the short end. Do not replace on a calendar alone: replace when the wiper lip no longer touches the wall, when the rubber has gone hard and shiny, or when you find water inside after a hard rain. A soft, flexible seal that still wipes the sidewall is doing its job.",
  },
  {
    q: "Why is water coming in when the slide out is closed?",
    a: "The usual path is the top corner, not the wiper seal along the side. Water collects on the slide roof, runs to the corner, and finds a gap in the corner block, the roof-to-wall seam or the sealant above the opening. A trailer parked slightly nose-down makes it worse. If the floor is wet near the slide and the walls are dry, look at the roof seam and the corner trim first, then check that the slide retracts tight enough to compress the bulb seal.",
  },
  {
    q: "What should I lubricate an RV slide out with?",
    a: "Use a silicone or PTFE dry lubricant on the rubber seals, and the manufacturer's specified lubricant on the mechanism. Never use petroleum-based grease, WD-40 or oil on the seals, because they swell and soften the rubber and shorten its life. For Schwintek in-wall systems, use the dry PTFE lubricant the manufacturer recommends on the gear racks and bearing blocks. For rack-and-pinion and hydraulic systems, follow the mechanism maker's chart rather than a generic spray.",
  },
  {
    q: "Can I put supports under a slide out?",
    a: "No. Slide-out supports, sometimes sold as stabilizers, put upward force on a structure that was engineered to hang from the opening. The result is a bent frame, a misaligned room and seals that no longer meet the wall. The trailer's own stabilizers and leveling system are what hold the rig steady. The only exception is a manufacturer instruction that explicitly calls for support, which is rare on modern electric slides.",
  },
  {
    q: "Should the slide out be in or out during storage?",
    a: "Retracted, in almost every case. A closed slide keeps the seals compressed, keeps rain and snow off the slide roof, and removes the chance of the topper filling with water. The trade-off is that the seals stay squeezed for months, so treat the first extension of the season as an inspection: look for sticking, listen for the motor straining, and check the floor for water before you load the room.",
  },
];

const SEAL_TABLE = [
  [
    "Wiper (squeegee) seal",
    "Wipes the sidewall as the room moves and sheds running water",
    "Lip no longer contacts the wall, rubber hard and shiny, visible gaps at corners",
    "5 to 7 years",
  ],
  [
    "Bulb (compression) seal",
    "Seals the gap when the room is fully closed or fully open",
    "Flat or crushed bulb, room closes with a gap you can see daylight through",
    "5 to 8 years",
  ],
  [
    "Top sweep and roof seal",
    "Keeps standing water off the slide roof and out of the ceiling",
    "Cracks, lifting edges, water stains on the interior ceiling near the opening",
    "4 to 6 years",
  ],
  [
    "Corner and butt seals",
    "Close the four corners where the straight runs meet",
    "Gaps, peeling sealant, dampness at the lower corners after rain",
    "Inspect yearly, reseal as needed",
  ],
  [
    "Inner flange gasket",
    "Seals the interior trim against the wall",
    "Drafts, dust trails, damp trim inside the room",
    "8 to 10 years",
  ],
];

const SCHEDULE_TABLE = [
  [
    "Every trip, before departure",
    "Slide fully retracted and locked, nothing caught in the opening, no water on the slide roof",
    "Eyes and a flashlight",
  ],
  [
    "Monthly in season",
    "Wipe dirt from the wiper lips, spray the seals with silicone, check for tears at the corners",
    "Silicone spray, clean rag",
  ],
  [
    "Every 90 days",
    "Lubricate the mechanism per its manufacturer, check fastener torque on the trim",
    "Dry PTFE lubricant, torque wrench",
  ],
  [
    "Twice a year",
    "Inspect roof and corner sealant, re-caulk any cracked bead, check the topper fabric",
    "Sealant, caulk gun, ladder",
  ],
  [
    "Before and after storage",
    "Full extension and retraction while watching and listening, floor and ceiling check for water",
    "Flashlight, moisture meter if available",
  ],
];

const LUBE_TABLE = [
  [
    "Rubber seals (wiper, bulb, corner)",
    "Silicone spray or a dedicated rubber protectant",
    "Petroleum grease, WD-40, oil, wax",
    "Monthly in season",
  ],
  [
    "Slide roof and topper fabric",
    "Nothing on the fabric; clean with mild soap and water",
    "Silicone on canvas, solvent cleaners",
    "Twice a year",
  ],
  [
    "Rack-and-pinion rails and gears",
    "White lithium grease or the maker's gear lubricant",
    "Dry spray on loaded gear teeth",
    "Every 90 days",
  ],
  [
    "Schwintek in-wall gear racks",
    "Dry PTFE lubricant on racks and bearing blocks",
    "Heavy grease that traps grit",
    "Every 90 days",
  ],
  [
    "Hydraulic rams and pivots",
    "Light oil on pivot pins only; keep the chrome rod clean",
    "Abrasive paste or grease on the rod",
    "Yearly",
  ],
];

const TROUBLE_TABLE = [
  [
    "Slide creeps out while driving",
    "Air in the hydraulic system, a failed check valve, or a retract solenoid not sealing",
    "Do not drive it. Have the hydraulic system diagnosed; a room that opens at 60 mph is a stability emergency",
  ],
  [
    "Water inside after rain, walls dry",
    "Roof seam or top corner sealant, or the slide not closing tight enough to compress the bulb",
    "Reseal the corner and roof seam, then check retract travel and the bulb seal",
  ],
  [
    "Motor runs, room does not move",
    "Sheared pin, stripped gear, or a Schwintek motor out of sync",
    "Stop immediately; running a stalled motor burns it out. Check for a sheared drive pin and resync per the maker's procedure",
  ],
  [
    "One side moves before the other",
    "Schwintek motors out of sync, or a binding seal on one side",
    "Resync the motors, then clean and lubricate the seals on the lagging side",
  ],
  [
    "Slow or stalls in cold weather",
    "Stiff seals, thick grease, low battery voltage",
    "Warm the rig, charge the battery, use the correct cold-rated lubricant; never force it",
  ],
];

const SEAL_STEPS = [
  {
    name: "Measure the old seal and identify the profile",
    text: "Note the length of the run, the shape of the profile, and how it attaches: some wiper seals slide into a track, others are held with screws under a trim strip. Photograph the cross section before you remove anything, because a generic replacement that does not match the profile will not seat.",
  },
  {
    name: "Extend the slide and work from a stable ladder",
    text: "Extend the room fully so the seal is relaxed, then chock the trailer. Do not stand on the slide roof itself, because the skin is thin and the structure is not designed to carry a person at the edge.",
  },
  {
    name: "Remove the old seal and clean the channel",
    text: "Pull the old seal out of its track or back out the screws, then scrape out old sealant and dirt with a plastic scraper. Wipe the channel with denatured alcohol and let it dry completely. New sealant will not bond to a damp or dusty surface.",
  },
  {
    name: "Start the new seal at the center and work outward",
    text: "Feed the profile into the track or set the first screw at the middle of the run, then work toward both ends. Starting at one end guarantees the seal is stretched on one side and bunched on the other, which is exactly where it will leak.",
  },
  {
    name: "Seal the ends and every fastener",
    text: "Put a dab of non-sag sealant over each screw head and a continuous bead where the seal meets the corner block. The ends of a seal run are where water gets behind it, and they are the fastest part of the job to get wrong.",
  },
  {
    name: "Test with a hose before you trust it",
    text: "Close the room, then run water over the top corner and the roof seam for a full minute while someone watches inside. A leak you find on a driveway costs an afternoon. The same leak found after a season shows up as a soft floor and a much larger repair.",
  },
];

export default function RvSlideOutMaintenancePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <ArticleJsonLd
        title="RV Slide Out Maintenance and Seal Replacement Guide"
        description="RV slide out maintenance and seal replacement: which seal actually leaks, the inspection schedule, the right lubricant for each mechanism, and a step-by-step wiper seal swap."
        url="https://www.rvtowingcalc.com/guides/rv-slide-out-maintenance-and-seal-replacement"
        datePublished="2026-10-18"
      />
      <FaqJsonLd
        faqs={FAQS}
        baseUrl="https://www.rvtowingcalc.com/guides/rv-slide-out-maintenance-and-seal-replacement"
      />
      <HowToJsonLd
        name="How to replace an RV slide out wiper seal"
        description="A six-step procedure for replacing a slide out wiper seal so the new rubber seals at the corners rather than only along the middle of the run."
        steps={SEAL_STEPS}
        totalTime="PT2H"
        url="https://www.rvtowingcalc.com/guides/rv-slide-out-maintenance-and-seal-replacement"
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
        <span className="text-gray-900">RV Slide Out Maintenance</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
        RV Slide Out Maintenance and Seal Replacement Guide
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        A slide out is the most heavily loaded opening on a travel trailer. It
        carries its own weight on a frame that hangs out into space, it moves
        every time you set up, and it has four corners where water can get in and
        one place where it can get out: the floor. Most slide problems start as a
        ten dollar seal and are discovered as a four figure floor repair. This
        guide explains which seal actually fails, what to inspect and how often,
        which lubricant belongs where, and how to replace a wiper seal so the new
        rubber seals at the corners instead of only in the middle.
      </p>

      <div className="mt-8 rounded-xl bg-brand-50 p-6">
        <h2 className="text-lg font-bold text-brand-800">The Short Answer</h2>
        <p className="mt-2 text-brand-700">
          Inspect the seals monthly, not annually. Use{" "}
          <strong>silicone or PTFE on the rubber</strong> and the mechanism
          maker&apos;s lubricant on the gears &mdash; never petroleum products on
          seals. Replace a wiper seal when the lip stops touching the wall, not
          when it looks old. Keep the slide{" "}
          <strong>fully extended or fully retracted</strong>, never parked
          halfway. And never put jacks under a slide out; the room is designed to
          hang, not to be propped.
        </p>
      </div>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        The Seal You Can See Is Rarely the One That Leaks
      </h2>
      <p className="mt-3 text-gray-700">
        Owners tend to inspect the wiper seal, the black rubber lip that drags
        along the sidewall as the room moves. It is the most visible part of the
        system and the easiest to check, but it is a squeegee, not a gasket. Its
        job is to wipe water and dirt off the wall as the slide travels and to
        shed running water away from the opening. When it fails, the symptom is
        usually a damp wall or a dirty streak, not a puddle on the floor.
      </p>

      <svg
        viewBox="0 0 680 260"
        width="100%"
        role="img"
        aria-label="A cross section of a slide out showing the roof, the wiper seal along the sidewall and the top corner where water collects. The diagram marks the roof seam and corner block as the common leak paths and the floor as where the damage first appears."
        className="mt-6 w-full rounded-xl border border-gray-200 bg-white"
      >
        <text x="0" y="18" fontSize="14" fontWeight="700" fill="#111827">
          Where slide out water actually goes
        </text>

        <rect x="230" y="46" width="290" height="18" rx="3" fill="#d1d5db" stroke="#6b7280" />
        <text x="375" y="40" fontSize="10" fill="#374151" textAnchor="middle">
          slide roof, water collects here
        </text>

        <rect x="230" y="64" width="18" height="140" fill="#e5e7eb" stroke="#9ca3af" />
        <rect x="500" y="64" width="18" height="140" fill="#e5e7eb" stroke="#9ca3af" />
        <text x="120" y="120" fontSize="10" fill="#374151" textAnchor="middle">
          trailer wall
        </text>
        <rect x="60" y="64" width="170" height="140" fill="#f3f4f6" stroke="#9ca3af" />

        <rect x="252" y="64" width="244" height="140" fill="#fafafa" stroke="#d1d5db" />
        <text x="374" y="130" fontSize="11" fill="#374151" textAnchor="middle">
          slide room interior
        </text>

        <circle cx="239" cy="72" r="9" fill="#fca5a5" stroke="#b91c1c" />
        <text x="239" y="76" fontSize="8" fontWeight="700" fill="#7f1d1d" textAnchor="middle">
          1
        </text>
        <circle cx="509" cy="72" r="9" fill="#fca5a5" stroke="#b91c1c" />
        <text x="509" y="76" fontSize="8" fontWeight="700" fill="#7f1d1d" textAnchor="middle">
          2
        </text>
        <line x1="248" y1="72" x2="300" y2="52" stroke="#b91c1c" strokeWidth="1.5" />
        <text x="305" y="52" fontSize="10" fill="#b91c1c">
          roof seam and corner block: most common entry
        </text>

        <line x1="236" y1="110" x2="236" y2="190" stroke="#b45309" strokeWidth="3" />
        <text x="120" y="215" fontSize="10" fill="#b45309" textAnchor="middle">
          wiper seal: sheds water, is not a gasket
        </text>
        <line x1="150" y1="200" x2="232" y2="150" stroke="#b45309" strokeWidth="1" />

        <rect x="252" y="196" width="244" height="12" fill="#fde68a" stroke="#b45309" />
        <text x="374" y="232" fontSize="10" fill="#b45309" textAnchor="middle">
          damage shows up here last, as a soft floor
        </text>
      </svg>

      <p className="mt-3 text-gray-700">
        Water gets in at the top, travels down inside the wall or under the
        flooring, and only becomes visible when the floor feels soft near the
        opening. That is why a slide that has leaked for two seasons usually needs
        more than a seal. The leak path to check first is the roof seam and the
        corner block at the top of each side, followed by the bulb seal that
        should compress when the room closes. The{" "}
        <Link
          href="/guides/rv-roof-sealant-inspection-and-resealing"
          className="text-brand-600 hover:underline"
        >
          roof sealant inspection guide
        </Link>{" "}
        covers the sealant side of that work in detail.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        The Five Seals and What Each One Does
      </h2>
      <p className="mt-3 text-gray-700">
        A typical slide out has three seal runs and four corner blocks, plus the
        interior trim gasket. They fail at different rates and they fail in
        different ways, so replacing all of them at once is usually unnecessary
        and replacing only the one you can see is usually wrong.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">Seal</th>
              <th className="border px-3 py-2 text-left font-semibold">
                What it does
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Failure looks like
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Typical life
              </th>
            </tr>
          </thead>
          <tbody>
            {SEAL_TABLE.map((row, i) => (
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
        A Ten Minute Inspection, and How Often to Do It
      </h2>
      <p className="mt-3 text-gray-700">
        Seal inspection is a visual and tactile job. Run a finger along the wiper
        lip: it should feel supple and it should spring back. Look at the corner
        blocks with a flashlight while the room is closed, because that is the one
        view that shows whether the bulb seal is actually being compressed. Then
        look at the floor inside the room and the ceiling near the opening, which
        are the two places water announces itself first.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">
                Interval
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                What to check
              </th>
              <th className="border px-3 py-2 text-left font-semibold">Tools</th>
            </tr>
          </thead>
          <tbody>
            {SCHEDULE_TABLE.map((row, i) => (
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
      <p className="mt-3 text-gray-700">
        Two habits prevent more damage than any product. First, operate the slide
        all the way through its stroke every time: a room parked halfway leaves
        one seal compressed for weeks and the other exposed to sun, and it
        stresses the mechanism at the worst point in its travel. Second, sweep the
        slide roof before retracting. A branch, a pine cone or a layer of ice that
        gets pulled into the opening will tear a seal or bend a flange, and that
        repair is far more expensive than the broom.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Lubrication: Right Product, Right Place
      </h2>
      <p className="mt-3 text-gray-700">
        Nearly every slide out problem caused by the owner traces back to the
        wrong spray. Petroleum-based products soften and swell rubber, which makes
        the seal drag, which loads the motor, which is the beginning of a long
        list of complaints. The other common error is greasing a gear rack that
        runs outdoors, where the grease collects grit and turns into an abrasive
        paste.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">
                Location
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Use
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Never use
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Interval
              </th>
            </tr>
          </thead>
          <tbody>
            {LUBE_TABLE.map((row, i) => (
              <tr key={row[0]} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                <td className="border px-3 py-2 text-xs font-semibold">
                  {row[0]}
                </td>
                <td className="border px-3 py-2 text-xs">{row[1]}</td>
                <td className="border px-3 py-2 text-xs text-red-700">{row[2]}</td>
                <td className="border px-3 py-2 text-xs">{row[3]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Replacing a Wiper Seal
      </h2>
      <p className="mt-3 text-gray-700">
        A wiper seal is one of the few RV repairs that a careful owner can do in
        an afternoon with hand tools. The work is not difficult; the details are.
        Most failed replacements fail at the ends, because the seal was stretched
        during installation or the fasteners were left unsealed.
      </p>
      <ol className="mt-4 space-y-3">
        {SEAL_STEPS.map((step, i) => (
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

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        When the Problem Is the Mechanism, Not the Seal
      </h2>
      <p className="mt-3 text-gray-700">
        Three mechanism families cover nearly every travel trailer slide:
        rack-and-pinion driven by an electric motor, the in-wall Schwintek system
        with a motor at each side, and hydraulic systems on larger fifth wheels
        and toy haulers. The first two are the ones an owner can diagnose; the
        third belongs in a shop once anything beyond fluid level is involved.
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
                What to do
              </th>
            </tr>
          </thead>
          <tbody>
            {TROUBLE_TABLE.map((row, i) => (
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
      <p className="mt-3 text-gray-700">
        The first row is the one to treat as an emergency. A hydraulic slide that
        creeps out in motion changes the trailer&apos;s centre of gravity and its
        frontal area at highway speed, and the driver will feel it as a sudden
        wander or a hard pull to one side. Stop and secure the room before
        continuing. If the room will not stay in, do not tow the trailer.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        The Weight Side of a Slide Out
      </h2>
      <p className="mt-3 text-gray-700">
        A slide out is also a weight decision, and it is one that shows up in two
        places. The room itself adds roughly 300 to 800 pounds to the trailer
        depending on length, and everything stored in it counts against cargo
        carrying capacity. Water that gets past a seal adds weight where you
        cannot see it, in the flooring and insulation, and a saturated floor can
        hold far more than the gear that sits on top of it.
      </p>
      <p className="mt-3 text-gray-700">
        For towing, the relevant question is not the room&apos;s dry weight but
        what it does to tongue weight and to the trailer&apos;s total. A slide
        located ahead of the axles shifts load onto the hitch; one behind the
        axles unloads it. If you have never scaled the rig, the{" "}
        <Link href="/guides/cat-scale-weighing" className="text-brand-600 hover:underline">
          CAT scale guide
        </Link>{" "}
        walks through the three passes that separate trailer axle load from tongue
        weight, and the{" "}
        <Link href="/guides/cargo-carrying-capacity-ccc" className="text-brand-600 hover:underline">
          cargo carrying capacity guide
        </Link>{" "}
        explains how the sticker budget is calculated in the first place.
      </p>

      <div className="mt-10 rounded-2xl bg-brand-600 p-8 text-center text-white">
        <h2 className="text-2xl font-bold">Confirm the Load Before the Season Starts</h2>
        <p className="mt-2 text-brand-100">
          A slide out changes the trailer&apos;s weight, and a leak changes it
          again. Check payload, GVWR and tongue weight against your real numbers.
          Free, independent, no sign-up.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
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

      <AmazonAffiliate categories={["slide-seal"]} />

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
            RV Industry Association (RVIA) &mdash; RV construction and sealing
            standards
          </a>
        </li>
        <li>
          <a
            href="https://www.lci1.com/support"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            Lippert Components support &mdash; slide out mechanism manuals,
            lubrication charts and resync procedures
          </a>
        </li>
        <li>
          <a
            href="https://www.nhtsa.gov/recalls"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            NHTSA &mdash; recall lookup for slide out and seal defects by VIN
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
            weighing and load education
          </a>
        </li>
        <li>
          <a
            href="https://www.astm.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            ASTM International &mdash; elastomer and weatherseal test standards
          </a>
        </li>
      </ul>

      <div className="mt-10 rounded-xl border border-gray-200 bg-gray-50 p-6">
        <h3 className="font-bold text-gray-900">Related Guides</h3>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          <li>
            <Link
              href="/guides/rv-roof-sealant-inspection-and-resealing"
              className="text-brand-600 hover:underline"
            >
              RV Roof Sealant Inspection and Resealing
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
            <Link href="/guides/winter-storage" className="text-brand-600 hover:underline">
              Winter Storage Checklist
            </Link>
          </li>
          <li>
            <Link
              href="/guides/cargo-carrying-capacity-ccc"
              className="text-brand-600 hover:underline"
            >
              Cargo Carrying Capacity Explained
            </Link>
          </li>
          <li>
            <Link href="/guides/cat-scale-weighing" className="text-brand-600 hover:underline">
              How to Weigh Your RV at a CAT Scale
            </Link>
          </li>
          <li>
            <Link href="/guides/payload-capacity" className="text-brand-600 hover:underline">
              Payload Capacity Explained
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
