import type { Metadata } from "next";
import Link from "next/link";
import {
  FaqJsonLd,
  ArticleJsonLd,
  HowToJsonLd,
} from "@/components/seo/JsonLd";
import { DEFAULT_OG_IMAGES } from "@/lib/seo/default-og-image";

import AmazonAffiliate from "@/components/AmazonAffiliate";

export const metadata: Metadata = {
  title: "Electric Trailer Tongue Jack Not Working? Troubleshooting Guide",
  description:
    "Electric trailer tongue jack not working? A voltage-first diagnostic order, jack load limits by type, the maintenance that prevents most failures, and when to replace.",
  keywords: [
    "electric trailer tongue jack not working",
    "trailer tongue jack troubleshooting",
    "trailer tongue jack maintenance",
    "how to replace a trailer tongue jack",
    "a-frame tongue jack",
    "trailer jack manual override",
  ],
  alternates: {
    canonical:
      "https://www.rvtowingcalc.com/guides/electric-trailer-tongue-jack-troubleshooting",
  },
  openGraph: {
    title: "Electric Trailer Tongue Jack Not Working? Troubleshooting Guide",
    description:
      "Diagnose an electric trailer tongue jack in the right order, from battery voltage through the fuse, ground, switch and motor, plus the maintenance that stops it happening again.",
    url: "https://www.rvtowingcalc.com/guides/electric-trailer-tongue-jack-troubleshooting",
    images: DEFAULT_OG_IMAGES,
  },
};

const FAQS = [
  {
    q: "Why did my electric tongue jack suddenly stop working?",
    a: "Work outward from the power source, because the answer is almost always electrical rather than mechanical. Check the battery first: an electric jack draws far more current when it is straining than when it is free-running, so a battery at eleven volts will spin the jack happily on flat ground and fail to move it when the coupler is loaded. Then check the inline fuse or circuit breaker on the jack's positive lead, then the ground, then the switch. A jack that fails outright with no click at all is usually a fuse, a disconnected ground or a dead battery. A jack that clicks but does not move is usually a switch contact or a motor that has reached the end of its life.",
  },
  {
    q: "How do I raise the jack manually if the motor has failed?",
    a: "Every electric tongue jack sold for trailer use is required to have a manual override, and it is normally the first thing to learn on a new trailer because you cannot use it in the rain with the trailer stuck on a hitch ball. On most units you remove the plastic cap on top of the housing and turn the exposed hex drive with the handle that came with the jack, or with a socket on a ratchet. Some models have a removable crank that engages a socket on the side of the housing. Test the override while the jack is working, not when it has failed, and keep the handle stored on the trailer where you can find it. If the override has never been used it is often stiff from dried grease out of the factory, and that is much better discovered in your driveway than at a campsite.",
  },
  {
    q: "Can I use the tongue jack to lift the trailer off the ground?",
    a: "No, and this is the single most dangerous thing people do with a tongue jack. Its published capacity is a lifting capacity measured on the mounting plate, not a rating for supporting the trailer in the air. Lifting the tongue until the trailer's own tyres leave the ground puts a side load on a jack that is not built for it, and a trailer held up only by its tongue jack can rotate or slide off it. To change a trailer tyre or work underneath, use axle stands or a trolley jack under the frame rail, on level ground, with the wheels chocked.",
  },
  {
    q: "What is the difference between a jack's lift capacity and my tongue weight?",
    a: "They measure different things and only one of them applies to you. Lift capacity is how much the jack can raise, measured with the load centred on the mounting flange. Tongue weight is the static downward load the trailer puts on the coupler, and it is what the jack actually carries every time the trailer is unhitched. A jack rated for three thousand pounds of lift is not certified to hold a three thousand pound tongue weight as a static support, and the flange bolts and the frame around them become the limiting factor long before the motor does.",
  },
  {
    q: "How long should a trailer tongue jack last?",
    a: "A well-covered electric jack on a weekend trailer commonly runs eight to twelve years, and a jack left permanently exposed to weather often fails inside four or five because water reaches the switch and the motor housing. The variables are water, lubrication and voltage rather than use. A jack that spends its life under a cover, gets its leg wiped and lubricated once a season, and is powered by a charged battery will outlast the trailer's first set of tyres by a wide margin. A jack that is left uncovered, run on a low battery and never lubricated will cook its own motor, and the failure mode is usually a burnt brush or a seized gear train rather than a clean electrical break.",
  },
];

const COMPONENT_TABLE = [
  [
    "Motor and gearbox",
    "Turns the leg through a reduction gear",
    "Brushes wear; water ingress corrodes the housing",
  ],
  [
    "Switch",
    "Reverses polarity to raise or lower",
    "Contacts pit and corrode; the usual cause of one-direction failure",
  ],
  [
    "Inner leg and outer tube",
    "Telescopes to lift the tongue",
    "Dry leg scores the tube; grit accelerates wear",
  ],
  [
    "Mounting flange",
    "Bolts the jack to the A-frame",
    "Loose bolts crack the frame tube, not the flange",
  ],
  [
    "Foot or wheel",
    "Transfers load to the ground",
    "Sinks on soft ground; puts a side load on the leg",
  ],
  [
    "Inline fuse or breaker",
    "Protects the positive lead",
    "Sized for the motor; a corroded holder reads open",
  ],
];

const JACK_TABLE = [
  [
    "Manual, side wind",
    "800-1,500 lb",
    "Cheapest option; requires cranking under load",
    "Small utility and pop-up trailers",
  ],
  [
    "Manual, A-frame top wind",
    "1,000-2,000 lb",
    "The traditional bolt-on jack; simple and repairable",
    "Most older travel trailers",
  ],
  [
    "Electric A-frame",
    "2,500-3,500 lb",
    "Push-button or remote; the modern default",
    "Travel trailers up to about 7,000 lb gross",
  ],
  [
    "Heavy duty electric",
    "3,500-4,500 lb",
    "Slower but far more tolerant of load",
    "Large travel trailers, toy haulers, some fifth wheels",
  ],
  [
    "Electric with drop leg",
    "2,500-4,000 lb",
    "Two-stage leg closes the gap fast before load",
    "Trailers with a long frame-to-ground distance",
  ],
];

const FAULT_TABLE = [
  [
    "No sound, no movement at all",
    "Blown inline fuse, broken ground, or flat battery",
    "Test at the jack's leads; do not start at the switch",
  ],
  [
    "Clicks but will not move",
    "Switch contact or a motor at the end of its life",
    "Jump the switch terminals to confirm before replacing it",
  ],
  [
    "Moves one direction only",
    "A worn switch, or a failed relay in a remote unit",
    "The switch is the cheaper and more likely of the two",
  ],
  [
    "Hums, strains, moves very slowly",
    "Low voltage under load, or a dry and binding leg",
    "Charge the battery, then clean and lubricate the leg",
  ],
  [
    "Works unloaded, stalls under the coupler",
    "Battery capacity, not motor power",
    "Measure voltage while the jack is running, not at rest",
  ],
  [
    "Runs but the leg does not extend",
    "Stripped drive pin or sheared gear key",
    "Repairable on most bolt-together units; compare to replacement cost",
  ],
  [
    "Blows the fuse each time it starts",
    "Short in the wiring or a seized motor",
    "Measure for continuity to ground before fitting another fuse",
  ],
];

const MAINTENANCE_TABLE = [
  [
    "Before every trip",
    "Look at the leg for rust, bending and fresh scoring",
    "Two minutes; catches the problem before it strands you",
  ],
  [
    "Every three months",
    "Wipe and lubricate the inner leg; check flange bolts",
    "Grease attracts grit, so use a dry film product on exposed surfaces",
  ],
  [
    "Twice a year",
    "Test the manual override through its full travel",
    "The one check people skip, and the one that matters most",
  ],
  [
    "Twice a year",
    "Check the inline fuse holder for corrosion",
    "A corroded holder fails open and looks like a dead motor",
  ],
  [
    "Annually",
    "Inspect the switch seal and the motor cap gasket",
    "Where virtually all water damage begins",
  ],
  [
    "In storage",
    "Cover the jack; store the trailer tongue slightly low",
    "Keeps water out of the housing and off the switch",
  ],
];

const STEPS = [
  {
    name: "Measure at the jack, not at the battery",
    text: "Test the voltage at the jack's own positive and negative leads while the switch is held. A battery that reads 12.6 volts at rest can fall well below 11 volts when the motor loads it, and a jack that stalls under load with a healthy resting battery is usually reporting a battery that has lost capacity rather than one that is discharged.",
  },
  {
    name: "Check the inline fuse or breaker",
    text: "Most electric jacks have a fuse or self-resetting breaker in the positive lead within a foot of the battery connection. Pull it out and inspect the holder as well as the fuse, because a corroded holder reads open while the fuse itself tests fine. If it blows again immediately, stop and find the short before fitting another one.",
  },
  {
    name: "Verify the ground",
    text: "The jack grounds through its mounting flange as often as it does through a dedicated wire, and a painted or corroded flange is a poor conductor. Run a temporary jumper from the jack body to the battery negative and try again. If the jack comes to life, the fault is the ground, and the permanent repair is a dedicated ground wire to the trailer frame rather than relying on the flange.",
  },
  {
    name: "Isolate the switch",
    text: "If you have voltage at the motor but no movement, the switch is the next suspect and the cheapest part to rule out. Apply twelve volts directly across the motor terminals with a fused jumper and see whether it runs. If the motor runs, the switch is faulty. If it does not, the motor or the gear train is the problem, and on most bolt-together jacks that means replacement.",
  },
  {
    name: "Listen before you dismantle anything",
    text: "A single sharp click that then goes silent is a switch or relay contact. A continuous hum with no movement is a stalled motor, which is usually low voltage or a binding leg. Complete silence is electrical and upstream. The sound narrows the fault faster than any meter reading, so hold the switch and listen before reaching for tools.",
  },
  {
    name: "Use the manual override to get mobile",
    text: "If the jack has failed and you need to move the trailer, use the manual override to raise or lower the tongue rather than trying to force the motor. Chock the wheels, take the load off the coupler, and turn the override by hand. Never lower the tongue onto an unlatched coupler to save time, and never leave a failed jack bearing the tongue weight on a slope.",
  },
];

export default function ElectricTrailerTongueJackTroubleshootingPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <ArticleJsonLd
        title="Electric Trailer Tongue Jack Not Working? Troubleshooting Guide"
        description="How to diagnose an electric trailer tongue jack in the correct order, from battery voltage through the fuse, ground, switch and motor, with jack load limits by type and the maintenance routine that prevents most failures."
        url="https://www.rvtowingcalc.com/guides/electric-trailer-tongue-jack-troubleshooting"
        datePublished="2026-10-11"
      />
      <FaqJsonLd
        faqs={FAQS}
        baseUrl="https://www.rvtowingcalc.com/guides/electric-trailer-tongue-jack-troubleshooting"
      />
      <HowToJsonLd
        name="How to troubleshoot an electric trailer tongue jack"
        description="A six-step voltage-first sequence for diagnosing an electric trailer tongue jack that has stopped working, from the power lead through the fuse, ground, switch and motor."
        steps={STEPS}
        totalTime="PT45M"
        url="https://www.rvtowingcalc.com/guides/electric-trailer-tongue-jack-troubleshooting"
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
        <span className="text-gray-900">Tongue Jack Troubleshooting</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
        Electric Trailer Tongue Jack Not Working? Here Is the Order to Check
        Things In
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        A dead tongue jack is a specific kind of frustrating, because it fails at
        the two worst moments: when you are dropping the trailer and want to get
        on with your trip, or when you are hitching up in the rain and want to go
        home. The good news is that it is one of the simplest electrical systems
        on a trailer — four components in a line, no electronics to speak of.
        Test them in the right order and the faulty one identifies itself.
      </p>

      <div className="mt-8 rounded-xl bg-brand-50 p-6">
        <h2 className="text-lg font-bold text-brand-800">The Short Answer</h2>
        <p className="mt-2 text-brand-700">
          Test the jack at its own leads with the motor running, not at the
          battery at rest. Then check{" "}
          <strong>the inline fuse, the ground, the switch, and finally the
          motor</strong> — in that order, because that is the order of likelihood
          and of cheapness. A jack that is completely silent is electrical. A
          jack that clicks is a switch or relay. A jack that hums and does not
          move is a battery that cannot hold up under load, or a leg that needs
          cleaning and lubricating. Every electric trailer jack has a manual
          override, and knowing where yours is matters more than any of this.
        </p>
      </div>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        How an Electric Tongue Jack Is Built
      </h2>
      <p className="mt-3 text-gray-700">
        There is very little inside one. A twelve volt motor drives a reduction
        gearbox, which turns a screw or a rack that extends an inner leg out of an
        outer tube. A switch on top reverses the polarity so the same motor both
        raises and lowers, and the whole assembly bolts to the A-frame with three
        bolts on a pattern that has been close to universal for decades. That
        simplicity is why a jack is usually worth diagnosing rather than
        replacing, and why the fault is nearly always in one of six places.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">
                Part
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                What it does
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                How it fails
              </th>
            </tr>
          </thead>
          <tbody>
            {COMPONENT_TABLE.map((row, i) => (
              <tr key={row[0]} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                <td className="border px-3 py-2 font-semibold">{row[0]}</td>
                <td className="border px-3 py-2 text-xs">{row[1]}</td>
                <td className="border px-3 py-2 text-xs">{row[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <svg
        viewBox="0 0 680 350"
        width="100%"
        role="img"
        aria-label="A vertical cross section of an electric tongue jack. At the top is the motor and gearbox housing with the switch and the removable cap covering the manual override hex drive. Below it the inner leg slides inside the outer tube, which bolts to the A-frame with a three bolt flange. At the bottom is the foot. Callouts mark the four points to check in order: voltage at the leads, the inline fuse, the ground at the flange, and the leg lubrication."
        className="mt-6 w-full rounded-xl border border-gray-200 bg-white"
      >
        <text x="0" y="20" fontSize="14" fontWeight="700" fill="#111827">
          Where an electric tongue jack fails, top to bottom
        </text>

        <rect x="150" y="40" width="150" height="62" rx="6" fill="#dbeafe" stroke="#3b82f6" />
        <text x="225" y="64" fontSize="11" fontWeight="700" fill="#1e40af" textAnchor="middle">
          Motor and gearbox
        </text>
        <text x="225" y="80" fontSize="10" fill="#1e40af" textAnchor="middle">
          cap hides the override
        </text>
        <text x="225" y="94" fontSize="10" fill="#1e40af" textAnchor="middle">
          hex drive
        </text>

        <rect x="196" y="110" width="58" height="26" rx="4" fill="#fef3c7" stroke="#d97706" />
        <text x="225" y="128" fontSize="10" fontWeight="700" fill="#78350f" textAnchor="middle">
          switch
        </text>

        <rect x="200" y="146" width="50" height="96" fill="#e5e7eb" stroke="#9ca3af" />
        <rect x="212" y="146" width="26" height="96" fill="#d1d5db" stroke="#9ca3af" />
        <text x="225" y="200" fontSize="10" fill="#374151" textAnchor="middle">
          leg
        </text>

        <rect x="150" y="234" width="150" height="26" fill="#f3f4f6" stroke="#9ca3af" />
        <text x="225" y="251" fontSize="10" fontWeight="700" fill="#374151" textAnchor="middle">
          three bolt mounting flange
        </text>

        <rect x="186" y="270" width="78" height="22" rx="4" fill="#e5e7eb" stroke="#9ca3af" />
        <text x="225" y="285" fontSize="10" fill="#374151" textAnchor="middle">
          foot or wheel
        </text>

        <path d="M310 71 L400 71" stroke="#3b82f6" strokeWidth="2" />
        <text x="406" y="75" fontSize="10" fontWeight="600" fill="#1e40af">
          4. switch: click but no movement
        </text>

        <path d="M266 152 L400 128" stroke="#f59e0b" strokeWidth="2" />
        <text x="406" y="132" fontSize="10" fontWeight="600" fill="#92400e">
          3. leg: clean and lubricate
        </text>

        <path d="M304 247 L400 186" stroke="#ef4444" strokeWidth="2" />
        <text x="406" y="190" fontSize="10" fontWeight="600" fill="#991b1b">
          2. ground at the flange
        </text>

        <path d="M150 60 L86 40" stroke="#374151" strokeWidth="2" />
        <text x="82" y="36" fontSize="10" fontWeight="600" fill="#374151" textAnchor="end">
          1. leads and inline fuse
        </text>

        <rect x="30" y="300" width="620" height="40" rx="6" fill="#f9fafb" stroke="#e5e7eb" />
        <text x="46" y="325" fontSize="10" fill="#6b7280">
          The jack raises the tongue. It does not support the trailer in the air —
        </text>
        <text x="46" y="336" fontSize="10" fill="#6b7280" textAnchor="start">
          use stands under the frame for any work underneath.
        </text>
      </svg>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        The Diagnostic Order
      </h2>
      <p className="mt-3 text-gray-700">
        Resistance faults on a twelve volt circuit behave in a counterintuitive
        way, and the sequence below is arranged around that. Read at rest, a
        tired battery looks perfect. Read under load, it falls apart. That single
        habit — measuring while the switch is held rather than before you press
        it — resolves more jack complaints than anything else in this article.
      </p>

      <ol className="mt-6 space-y-4">
        {STEPS.map((step, i) => (
          <li key={step.name} className="rounded-xl border border-gray-200 p-5">
            <h3 className="font-semibold text-gray-900">
              {i + 1}. {step.name}
            </h3>
            <p className="mt-2 text-gray-700">{step.text}</p>
          </li>
        ))}
      </ol>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Jack Types and Their Load Limits
      </h2>
      <p className="mt-3 text-gray-700">
        If you are replacing rather than repairing, the size of the jack matters
        more than the brand. Manufacturers publish a lift capacity on every unit,
        and the industry habit is to fit the smallest jack that will do the job,
        which is why so many trailers arrive with a jack that strains on a heavy
        tongue. Fitting one size up costs little and removes an entire failure
        mode.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">Type</th>
              <th className="border px-3 py-2 text-left font-semibold">
                Typical lift capacity
              </th>
              <th className="border px-3 py-2 text-left font-semibold">Notes</th>
              <th className="border px-3 py-2 text-left font-semibold">
                Common application
              </th>
            </tr>
          </thead>
          <tbody>
            {JACK_TABLE.map((row, i) => (
              <tr key={row[0]} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                <td className="border px-3 py-2 font-semibold text-xs">
                  {row[0]}
                </td>
                <td className="border px-3 py-2 font-semibold text-brand-700">
                  {row[1]}
                </td>
                <td className="border px-3 py-2 text-xs">{row[2]}</td>
                <td className="border px-3 py-2 text-xs">{row[3]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm text-gray-500">
        Published lift capacities are rounded marketing figures measured with the
        load centred on the flange. Add margin rather than buying to the number,
        and remember that the mounting flange and the A-frame tube it bolts to
        become the limiting factor long before the motor does.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Symptom, Cause, Fix
      </h2>
      <p className="mt-3 text-gray-700">
        The sound the jack makes narrows the fault faster than any measurement.
        Find your symptom below, and if two apply, start with the one that
        involves no tools.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">
                Symptom
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Most likely cause
              </th>
              <th className="border px-3 py-2 text-left font-semibold">Fix</th>
            </tr>
          </thead>
          <tbody>
            {FAULT_TABLE.map((row, i) => (
              <tr key={row[0]} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                <td className="border px-3 py-2 font-semibold text-xs">
                  {row[0]}
                </td>
                <td className="border px-3 py-2 text-xs">{row[1]}</td>
                <td className="border px-3 py-2 text-xs">{row[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        The Maintenance That Prevents Almost All of This
      </h2>
      <p className="mt-3 text-gray-700">
        Tongue jacks do not fail from hard work. They fail from water, dry
        bearings and low voltage — so the preventive maintenance is short, cheap
        and almost always skipped. Two of the checks below take under five
        minutes a year and account for most of the difference between a jack that
        lasts four seasons and one that lasts twelve.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">
                Interval
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Task
              </th>
              <th className="border px-3 py-2 text-left font-semibold">Why</th>
            </tr>
          </thead>
          <tbody>
            {MAINTENANCE_TABLE.map((row, i) => (
              <tr key={row[0] + row[1]} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                <td className="border px-3 py-2 font-semibold text-xs">
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
        The voltage point deserves its own line. A jack motor that is short of
        current draws more amperage to produce the same torque, which means more
        heat in the windings and faster brush wear. Running an electric jack on a
        trailer battery that never gets charged properly is the most common way
        people quietly destroy a jack, and it looks exactly like the jack
        eventually wearing out. Keeping the trailer battery healthy — which
        depends on the charge circuit on pin 6 of your seven-pin plug working —
        is part of jack maintenance.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Repair or Replace?
      </h2>
      <p className="mt-3 text-gray-700">
        The economics are unusually clean for once. A switch is a fifteen dollar
        part and takes twenty minutes to change, so it is always worth doing. An
        inline fuse holder is cheaper still. A motor swap on a bolt-together jack
        is usually close enough to the price of a whole new unit that most owners
        replace the jack, unless the unit is a premium model still under
        warranty. A bent leg is almost always replacement, because a straightened
        leg will bind again and the tube has already been stressed.
      </p>
      <p className="mt-3 text-gray-700">
        Before you buy, measure the A-frame tube and confirm the bolt pattern and
        mounting height. Fit is where replacement goes wrong, not wiring: a jack
        that is too short will not lift the tongue clear of a raised hitch ball,
        and one that is too tall may foul a lowered tailgate. Then check the amp
        draw of the new unit against your existing fuse and wire gauge, because a
        heavier duty jack on a thin feed is a jack that will stall. If you are
        re-doing the wiring anyway, this is a sensible moment to look over the
        whole harness — our{" "}
        <Link
          href="/guides/trailer-wiring-harness-7-pin-troubleshooting"
          className="text-brand-600 hover:underline"
        >
          7-pin wiring troubleshooting guide
        </Link>{" "}
        covers the charge circuit that keeps it all powered.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        The Jack Is Not a Weight Rating
      </h2>
      <p className="mt-3 text-gray-700">
        One confusion runs through almost every owner's manual and every forum
        thread on the subject: the number on the jack is about lifting, and the
        number that governs your safety is tongue weight. They are different
        quantities, and only the second one appears on the certification label of
        your trailer. A jack rated for three thousand pounds of lift is a jack
        that can raise three thousand pounds when that load is centred on its
        mounting plate; it is not a statement that three thousand pounds of
        static tongue weight is acceptable.
      </p>
      <p className="mt-3 text-gray-700">
        That distinction matters because the jack carries the tongue continuously
        whenever the trailer is unhitched, and an overloaded tongue is
        overloading the coupler, the A-frame tube and the mounting bolts at once.
        If your jack strains, the honest first question is not whether the jack
        is worn out but whether the tongue weight is higher than you think. Water
        tanks, propane bottles moved forward and gear in a front pass-through all
        add to it, and tongue weight commonly climbs a hundred pounds or more
        above the brochure figure once the trailer is loaded. Measure it with the{" "}
        <Link
          href="/tongue-weight-calculator"
          className="text-brand-600 hover:underline"
        >
          tongue weight calculator
        </Link>{" "}
        before you blame the jack.
      </p>

      <div className="mt-10 rounded-2xl bg-brand-600 p-8 text-center text-white">
        <h2 className="text-2xl font-bold">Is Your Tongue Overloading It?</h2>
        <p className="mt-2 text-brand-100">
          A straining jack is often the first symptom of a tongue weight problem
          you have not measured yet. Check it before the coupler tells you
          instead.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link
            href="/tongue-weight-calculator"
            className="inline-block rounded-xl bg-white px-6 py-3 text-sm font-bold text-brand-700 shadow-lg transition-all hover:bg-brand-50 active:scale-[0.99]"
          >
            Tongue Weight Calculator
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
            Pre-Trip Checklist
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

      <AmazonAffiliate
        categories={["tongue-scale", "trailer-lights", "sway-control"]}
      />

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
            Lippert Components &mdash; tongue jack installation and service
            documentation
          </a>
        </li>
        <li>
          <a
            href="https://www.barkermfg.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            Barker Manufacturing &mdash; electric tongue jack specifications,
            lift capacities and manual override procedures
          </a>
        </li>
        <li>
          <a
            href="https://www.rvia.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            RV Industry Association (RVIA) &mdash; RV component and labelling
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
            weighing and safety education
          </a>
        </li>
        <li>
          <a
            href="https://www.nhtsa.gov/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            NHTSA &mdash; trailer safety guidance and recall information
          </a>
        </li>
      </ul>

      <div className="mt-10 rounded-xl border border-gray-200 bg-gray-50 p-6">
        <h3 className="font-bold text-gray-900">Related Guides</h3>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          <li>
            <Link
              href="/guides/trailer-wiring-harness-7-pin-troubleshooting"
              className="text-brand-600 hover:underline"
            >
              7-Pin Trailer Wiring Troubleshooting
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
              href="/guides/trailer-coupler-types-and-replacement"
              className="text-brand-600 hover:underline"
            >
              Trailer Coupler Types &amp; Replacement
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
        </ul>
      </div>
    </div>
  );
}
