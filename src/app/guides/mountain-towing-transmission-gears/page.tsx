import type { Metadata } from "next";
import Link from "next/link";
import { FaqJsonLd, ArticleJsonLd } from "@/components/seo/JsonLd";
import { DEFAULT_OG_IMAGES } from "@/lib/seo/default-og-image";

export const metadata: Metadata = {
  title: "Towing in Mountains: Transmission Temperature & Gear Selection Guide",
  description:
    "How to protect your transmission and select the right gears when towing an RV through mountain grades. Covers temperature limits, tow/haul mode, downshift strategy, and real-world data for safe mountain towing.",
  alternates: {
    canonical: "https://rvtowingcalc.com/guides/mountain-towing-transmission-gears",
  },
  openGraph: {
    title: "Towing in Mountains: Transmission Temperature & Gear Selection Guide",
    description:
      "Protect your transmission when towing RVs through mountains. Temperature limits, gear selection, tow/haul mode, and real-world safety data for grade towing.",
    url: "https://rvtowingcalc.com/guides/mountain-towing-transmission-gears",
    images: DEFAULT_OG_IMAGES,
  },
};

const FAQS = [
  {
    q: "What transmission temperature is too hot when towing?",
    a: "Most automotive transmissions are designed to operate at 175-200°F under normal conditions. When towing, temperatures of 200-230°F are common and generally acceptable. The danger zone starts above 230°F: at this point, transmission fluid begins to lose its lubricating properties and viscosity. At 250°F, fluid breakdown accelerates rapidly, rubber seals soften, and clutch pack wear increases dramatically. At 280°F+, you risk permanent transmission damage within minutes. If your transmission temperature gauge reaches 230°F, reduce speed and consider pulling over. At 250°F, you must stop and let the transmission cool before continuing. Every truck's specific limits vary; check your owner's manual for the exact warning threshold.",
  },
  {
    q: "Should I use tow/haul mode in the mountains?",
    a: "Yes, always engage tow/haul mode when towing in mountainous terrain, even on moderate grades. Tow/haul mode changes the transmission shift strategy in three critical ways: (1) it holds lower gears longer before upshifting, keeping the engine in its torque band; (2) it downshifts earlier when you ease off the throttle or apply the brakes, using engine compression to help slow the vehicle; (3) it locks out the highest overdrive gears to prevent constant shifting between gears on grades. Without tow/haul mode, the transmission will hunt between overdrive and a lower gear every time you encounter a slight incline, generating excessive heat from the constant shifting. Tow/haul mode reduces shifting frequency by 50-70% on grades, which directly reduces heat buildup.",
  },
  {
    q: "How do I handle long downhill grades with a travel trailer?",
    a: "The single most important rule for downhill grades: do NOT rely solely on your brakes. Use engine braking to control your speed, and only supplement with brakes when engine braking is insufficient. Before the descent, slow down to 35-45 mph and manually select a gear that holds your speed without constant braking. If you find yourself using the brakes frequently, you are in too high a gear—slow down further and shift lower. Apply brakes in firm, brief applications (5-8 seconds) to slow the vehicle 5-10 mph, then release completely to allow them to cool. Never ride the brakes continuously. If your speed increases despite engine braking and intermittent brake applications, pull over at the first safe opportunity. Runaway truck ramps are designed for exactly this scenario—use them without hesitation if needed.",
  },
  {
    q: "Can I manually select gears on a modern automatic transmission?",
    a: "Yes, and you should when towing in mountains. Most modern trucks with 8- or 10-speed automatics allow manual gear selection via the shift lever or steering wheel paddles. On uphill grades, manually selecting 3rd or 4th gear (or L3/L4 on the selector) prevents the transmission from hunting between gears. On downhill grades, selecting 2nd or 3rd gear provides engine braking without over-revving the engine. The key is to choose a gear that holds your desired speed on the grade without frequent shifting or excessive RPM. Watch the tachometer: 3,000-4,500 RPM is the normal towing range for most engines. Avoid exceeding 5,500 RPM sustained. Your owner's manual lists the maximum RPM for each gear at various speeds.",
  },
  {
    q: "Does an auxiliary transmission cooler help with mountain towing?",
    a: "Yes, an auxiliary transmission cooler is one of the most cost-effective upgrades for mountain towing. Most factory tow packages include an auxiliary cooler, but if your truck does not have one (or if you are towing near the maximum rating), adding one can reduce transmission temperatures by 30-50°F on sustained grades. Coolers range from $100-$300 for the unit and $200-$500 for professional installation. The most effective type is a plate-and-fin cooler (not the cheaper tube-and-fin design), mounted in front of the radiator where it gets maximum airflow. If you tow in mountains regularly, this is a $300-$800 investment that can prevent a $3,000-$7,000 transmission replacement.",
  },
  {
    q: "What causes transmission failure when towing in mountains?",
    a: "Transmission failure when towing in mountains is caused by a cascade of heat-related events. First, sustained high temperatures (230°F+) cause the transmission fluid to lose viscosity and lubricating ability. Second, thin fluid allows clutch packs to slip under load, generating even more heat—a vicious cycle. Third, overheated fluid degrades the rubber seals, allowing internal pressure loss. Fourth, metal-on-metal contact from insufficient lubrication damages bushings, bearings, and gear surfaces. The entire cascade can happen in 20-30 minutes of sustained grade climbing at high temperatures. The most common failure mode is clutch pack burnout (the transmission slips and cannot hold a gear), which requires a full rebuild. Preventing this is straightforward: monitor temperature, use tow/haul mode, select appropriate gears, and stop to cool down when temperatures rise.",
  },
];

const TEMP_RANGES = [
  {
    range: "175-200°F",
    status: "Normal",
    color: "safe",
    description: "Normal operating range for towing on flat terrain. No action needed.",
  },
  {
    range: "200-230°F",
    status: "Warm",
    color: "warning",
    description: "Common when towing on moderate grades. Acceptable but monitor closely. Reduce speed if sustained.",
  },
  {
    range: "230-250°F",
    status: "Hot",
    color: "danger",
    description: "Danger zone. Reduce speed immediately. Use lower gears. Pull over if temperature does not drop within 5 minutes.",
  },
  {
    range: "250-280°F",
    status: "Critical",
    color: "danger",
    description: "Transmission fluid breakdown accelerating. Stop immediately and let cool for 30+ minutes before continuing. Check fluid level and condition.",
  },
  {
    range: "280°F+",
    status: "Emergency",
    color: "danger",
    description: "Permanent damage likely within minutes. Stop, shift to Park, turn off engine. Do not continue until transmission has fully cooled and been inspected.",
  },
];

const GRADE_STRATEGY = [
  {
    grade: "4-6% (Moderate)",
    uphill: "Tow/haul mode, maintain 45-55 mph, let transmission hold gears. Watch temp gauge.",
    downhill: "Select 3rd or 4th gear manually. Brief brake applications only. Speed 40-50 mph.",
    tempExpect: "200-220°F uphill, 175-195°F downhill",
  },
  {
    grade: "6-8% (Steep)",
    uphill: "Tow/haul mode, manually select 2nd or 3rd gear. Speed 35-45 mph. Do not push past 4,500 RPM sustained.",
    downhill: "Select 2nd or 3rd gear manually. Speed 30-40 mph. Apply brakes 5-8 sec bursts to drop 5 mph, then release.",
    tempExpect: "220-245°F uphill, 180-210°F downhill",
  },
  {
    grade: "8-12% (Very Steep)",
    uphill: "Manually select 1st or 2nd gear. Speed 25-35 mph. Do not over-rev. Stop every 15-20 min if temp exceeds 230°F.",
    downhill: "Select 2nd gear. Speed 25-35 mph. Frequent brief brake applications. If speed increases beyond control, use runaway ramp.",
    tempExpect: "240-260°F uphill, 190-220°F downhill",
  },
];

export default function MountainTowingGuidePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <FaqJsonLd
        faqs={FAQS}
        baseUrl="https://rvtowingcalc.com/guides/mountain-towing-transmission-gears"
      />
      <ArticleJsonLd
        title="Towing in Mountains: Transmission Temperature & Gear Selection Guide"
        description="How to protect your transmission and select the right gears when towing an RV through mountain grades. Covers temperature limits, tow/haul mode, downshift strategy, and real-world data."
        url="https://rvtowingcalc.com/guides/mountain-towing-transmission-gears"
        datePublished="2026-07-20"
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
        <span className="text-gray-900">Mountain Towing Safety</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
        Towing in Mountains: Transmission Temperature &amp; Gear Selection Guide
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        Towing an RV through mountain grades is where transmissions die, brakes
        fade, and overconfident drivers discover that their half-ton truck is not
        as capable as the brochure promised. The good news: mountain towing is
        entirely manageable if you understand transmission temperature, gear
        selection, and the specific strategies that keep you safe on uphill and
        downhill grades. This guide gives you the knowledge that most RV owners
        learn the hard way&mdash;or never learn at all.
      </p>

      {/* Why mountains are different */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          Why Mountain Towing Is Fundamentally Different
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            On flat terrain, your transmission operates at 175-200°F and shifts
            occasionally. The engine produces enough power to maintain speed in
            overdrive, and the brakes only need to handle minor speed
            adjustments. Mountains change everything:
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-gray-200 p-5">
              <h3 className="font-semibold text-danger-700">
                Uphill: The Heat Generator
              </h3>
              <p className="mt-2 text-sm">
                Every 1% of grade adds approximately 20 lbs of resistance per
                1,000 lbs of weight. A 6% grade means your 10,000 lb
                combined rig is fighting 1,200 lbs of grade resistance alone,
                on top of aerodynamic drag and rolling resistance. The engine
                must produce 50-100% more power than on flat ground, and the
                transmission must hold lower gears and shift more frequently.
                Each shift generates heat through clutch pack engagement, and
                sustained high-load operation heats the fluid directly. The
                result: transmission temperatures can spike 50-80°F above
                normal within minutes of starting a climb.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 p-5">
              <h3 className="font-semibold text-danger-700">
                Downhill: The Brake Destroyer
              </h3>
              <p className="mt-2 text-sm">
                Gravity is now your enemy, not your friend. On a 6% downgrade,
                your 10,000 lb rig accumulates kinetic energy at a rate that
                would require approximately 60-80 horsepower of braking to
                maintain a steady speed. Your brakes were designed to stop a
                6,000-7,000 lb truck, not continuously dissipate 80 hp of
                heat from a 10,000 lb combined rig. Continuous braking on a
                downgrade causes brake fade&mdash;the pads overheat, the
                fluid boils, and stopping distance triples or more. This is
                why runaway truck ramps exist on mountain highways.
              </p>
            </div>
          </div>

          <div className="rounded-xl border-l-4 border-danger-500 bg-danger-50 p-4">
            <p className="text-sm text-danger-700">
              <strong>The critical insight:</strong> Uphill grades destroy
              transmissions. Downhill grades destroy brakes. Both failures can be
              fatal. The strategies for each direction are completely different,
              and understanding both is essential for safe mountain towing.
            </p>
          </div>
        </div>
      </section>

      {/* Transmission temperature guide */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          Transmission Temperature: Your Most Important Gauge
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            If your truck has a transmission temperature gauge, it is the single
            most important instrument to watch while towing in mountains. If it
            does not have one, install an aftermarket gauge ($50-$150) before
            your first mountain tow. Here is what the numbers mean:
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-gray-300 bg-gray-50">
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Temperature Range
                  </th>
                  <th className="px-4 py-3 text-center font-semibold text-gray-900">
                    Status
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    What It Means &amp; Action Required
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {TEMP_RANGES.map((row) => (
                  <tr
                    key={row.range}
                    className={
                      row.color === "danger"
                        ? "bg-danger-50"
                        : row.color === "warning"
                        ? "bg-warning-50"
                        : "bg-safe-50"
                    }
                  >
                    <td className="px-4 py-3 font-bold text-gray-900">
                      {row.range}
                    </td>
                    <td className="px-4 py-3 text-center">
                      <span
                        className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
                          row.color === "danger"
                            ? "bg-danger-100 text-danger-700"
                            : row.color === "warning"
                            ? "bg-warning-100 text-warning-700"
                            : "bg-safe-100 text-safe-700"
                        }`}
                      >
                        {row.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">
                      {row.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="rounded-xl border-l-4 border-brand-500 bg-brand-50 p-4">
            <p className="text-sm text-brand-700">
              <strong>Pro tip:</strong> Transmission temperature gauges on many
              trucks read from the torque converter outlet&mdash;the hottest
              point in the system. The actual sump temperature (what matters for
              fluid life) is typically 10-20°F cooler than the gauge reading.
              This means if your gauge reads 230°F, the fluid in the pan is
              probably 210-220°F. Still warm, but not yet in the critical zone.
              However, do not use this offset as an excuse to push harder; the
              gauge reading is your operational reference.
            </p>
          </div>
        </div>
      </section>

      {/* Tow/haul mode */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          Tow/Haul Mode: Your First Line of Defense
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            Every modern truck with a towing package has a tow/haul mode button
            (sometimes labeled &ldquo;TOW&rdquo; or with a trailer icon). This
            is not a suggestion&mdash;it is a requirement when towing in
            mountains. Here is what tow/haul mode actually does:
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-gray-300 bg-gray-50">
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Behavior
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Normal Mode
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Tow/Haul Mode
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-700">
                    Upshift point
                  </td>
                  <td className="px-4 py-3 text-gray-600">
                    Shifts at ~1,800-2,200 RPM for fuel economy
                  </td>
                  <td className="px-4 py-3 text-gray-600">
                    Shifts at ~3,000-3,500 RPM for power
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-700">
                    Downshift trigger
                  </td>
                  <td className="px-4 py-3 text-gray-600">
                    Downshifts only when speed drops significantly
                  </td>
                  <td className="px-4 py-3 text-gray-600">
                    Downshifts early on throttle release and brake application
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-700">
                    Overdrive
                  </td>
                  <td className="px-4 py-3 text-gray-600">
                    Allows 8th/10th gear (overdrive)
                  </td>
                  <td className="px-4 py-3 text-gray-600">
                    Locks out top 1-2 overdrive gears
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-700">
                    Shift frequency on grades
                  </td>
                  <td className="px-4 py-3 text-gray-600">
                    Hunts between gears every 5-15 seconds
                  </td>
                  <td className="px-4 py-3 text-gray-600">
                    Holds a gear for 30-60+ seconds
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-700">
                    Engine braking
                  </td>
                  <td className="px-4 py-3 text-gray-600">
                    Minimal; stays in high gear
                  </td>
                  <td className="px-4 py-3 text-gray-600">
                    Active; drops to compression-braking gear on decel
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-700">
                    Transmission heat
                  </td>
                  <td className="px-4 py-3 text-gray-600">
                    Higher (constant shifting generates clutch heat)
                  </td>
                  <td className="px-4 py-3 text-gray-600">
                    Lower (50-70% fewer shifts = less clutch engagement heat)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            Tow/haul mode reduces transmission heat by holding gears longer,
            preventing constant upshift/downshift cycles that generate heat
            through clutch engagement. It also provides engine braking on
            downhills that reduces brake workload. On a 6% downgrade, tow/haul
            mode alone can reduce your brake usage by 40-60%. Use it on every
            grade, every time&mdash;no exceptions.
          </p>
        </div>
      </section>

      {/* Uphill strategy */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          Uphill Strategy: Protecting Your Transmission
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            When climbing a grade, your transmission is under maximum stress. The
            goal is to minimize heat generation while maintaining reasonable
            progress. Here is the strategy, step by step:
          </p>

          <div className="space-y-3">
            <div className="flex items-start gap-3 rounded-lg border border-safe-200 bg-safe-50 p-4">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-safe-500 text-xs font-bold text-white">
                1
              </span>
              <div>
                <strong className="text-safe-800">
                  Engage tow/haul mode before the grade begins
                </strong>
                <p className="mt-1 text-sm text-safe-700">
                  Do not wait until you are already struggling. Engage tow/haul
                  mode at the bottom of the hill or even earlier. The
                  transmission will hold lower gears from the start, avoiding
                  the heat spike from hunting.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg border border-safe-200 bg-safe-50 p-4">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-safe-500 text-xs font-bold text-white">
                2
              </span>
              <div>
                <strong className="text-safe-800">
                  Accept a slower speed
                </strong>
                <p className="mt-1 text-sm text-safe-700">
                  35-45 mph is a perfectly acceptable climbing speed for a
                  tow vehicle. Trying to maintain 65 mph on a 6% grade with
                  8,000 lbs behind you will push your transmission past 250°F.
                  Slow down early and steady. Other vehicles can pass. Your
                  transmission cannot be replaced on the side of the road.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg border border-safe-200 bg-safe-50 p-4">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-safe-500 text-xs font-bold text-white">
                3
              </span>
              <div>
                <strong className="text-safe-800">
                  Manually select gears on steep grades
                </strong>
                <p className="mt-1 text-sm text-safe-700">
                  On grades above 6%, manually shift to 2nd or 3rd gear and
                  let the engine run at 3,000-4,500 RPM. This prevents the
                  transmission from hunting between gears at the edge of its
                  shift points. High RPM is normal and expected when towing
                  uphill&mdash;your engine is designed for it. The alternative
                  (constant shifting between gears) generates far more heat than
                  sustained RPM.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg border border-warning-200 bg-warning-50 p-4">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-warning-500 text-xs font-bold text-white">
                4
              </span>
              <div>
                <strong className="text-warning-800">
                  Monitor temperature and pull over if it reaches 230°F
                </strong>
                <p className="mt-1 text-sm text-warning-700">
                  If the temperature gauge hits 230°F, reduce speed and shift to
                  a lower gear. If it continues climbing to 245°F+, find a safe
                  place to pull over. Put the transmission in Park, turn off the
                  engine, and wait 20-30 minutes for temperatures to drop below
                  200°F before continuing. This is not a sign of weakness; it
                  is the smartest thing you can do. A 30-minute cool-down pause
                  prevents a $4,000 transmission rebuild.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg border border-safe-200 bg-safe-50 p-4">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-safe-500 text-xs font-bold text-white">
                5
              </span>
              <div>
                <strong className="text-safe-800">
                  Use your GCWR calculation to gauge difficulty
                </strong>
                <p className="mt-1 text-sm text-safe-700">
                  Before your trip, use our{" "}
                  <Link
                    href="/gcwr-calculator"
                    className="font-semibold text-brand-600 underline"
                  >
                    GCWR Calculator
                  </Link>{" "}
                  to calculate your combined weight. If your GCW is within 80%
                  of your GCWR, expect transmission temperatures 30-50°F higher
                  than normal on moderate grades. If you are at or near GCWR,
                  expect temperatures 50-80°F higher. This helps you anticipate
                  when to proactively slow down and shift lower.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Downhill strategy */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          Downhill Strategy: Engine Braking &amp; Brake Management
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            The downhill is where most towing accidents happen. Not because the
            truck lacks power, but because gravity provides more power than the
            brakes can dissipate. The strategy is simple in concept but requires
            discipline:
          </p>

          <div className="rounded-xl border-l-4 border-danger-500 bg-danger-50 p-4">
            <p className="text-sm text-danger-700">
              <strong>The golden rule of downhill towing:</strong> Start slow,
              stay slow, and never rely on your brakes alone. The speed you
              start the downhill at is the speed you will fight to maintain.
              Enter the descent at 35-45 mph, not 65 mph. Once you are going
              too fast, slowing down requires more braking than you may have
              available.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-gray-300 bg-gray-50">
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Grade
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Uphill Strategy
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Downhill Strategy
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Expected Trans Temp
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {GRADE_STRATEGY.map((row) => (
                  <tr key={row.grade}>
                    <td className="px-4 py-3 font-medium text-gray-700">
                      {row.grade}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">
                      {row.uphill}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">
                      {row.downhill}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-500">
                      {row.tempExpect}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="space-y-3">
            <div className="flex items-start gap-3 rounded-lg border border-danger-200 bg-danger-50 p-4">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-danger-500 text-xs font-bold text-white">
                1
              </span>
              <div>
                <strong className="text-danger-700">
                  Select a lower gear BEFORE the descent
                </strong>
                <p className="mt-1 text-sm text-danger-600">
                  At the top of the hill, slow down and manually select 2nd or
                  3rd gear. Do not wait until you are already accelerating
                  downhill&mdash;shifting at speed is harder on the transmission
                  and may not engage properly if RPM is mismatched. Set your
                  gear first, then start the descent.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg border border-danger-200 bg-danger-50 p-4">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-danger-500 text-xs font-bold text-white">
                2
              </span>
              <div>
                <strong className="text-danger-700">
                  Apply brakes in firm, brief bursts
                </strong>
                <p className="mt-1 text-sm text-danger-600">
                  When speed increases 5-10 mph above your target, apply the
                  brakes firmly for 5-8 seconds to bring speed back down, then
                  release completely. This allows the brakes to cool between
                  applications. Never ride the brakes continuously&mdash;that
                  causes rapid heat buildup and fade. The &ldquo;snub
                  braking&rdquo; technique (firm brief applications) is the
                  standard method used by professional drivers on mountain
                  grades.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg border border-danger-200 bg-danger-50 p-4">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-danger-500 text-xs font-bold text-white">
                3
              </span>
              <div>
                <strong className="text-danger-700">
                  If speed continues to increase, pull over or use a runaway ramp
                </strong>
                <p className="mt-1 text-sm text-danger-600">
                  If engine braking and snub braking together cannot maintain
                  your target speed, you are in the wrong gear or too heavy for
                  this grade. Do not try to fight gravity with more brake
                  pressure&mdash;the brakes will fade and then fail. Pull onto a
                  shoulder or turnout at the first safe opportunity. If no
                  turnout is available and a runaway truck ramp appears, use it.
                  These ramps are designed to safely stop heavy vehicles. Using
                  one is not embarrassing; it is the correct response to a
                  dangerous situation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transmission cooler upgrade */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          Auxiliary Transmission Cooler: The Best $300 Upgrade
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            If your truck does not have a factory auxiliary transmission cooler
            (check for a small radiator in front of the main radiator), or if
            you are towing near your GCWR, this upgrade is strongly recommended
            before your first mountain trip:
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-gray-300 bg-gray-50">
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Cooler Type
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Cost
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Temp Reduction
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Recommendation
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-700">
                    Tube-and-fin (basic)
                  </td>
                  <td className="px-4 py-3 text-gray-600">$50-$100</td>
                  <td className="px-4 py-3 text-gray-600">10-20°F</td>
                  <td className="px-4 py-3 text-sm text-gray-500">
                    Minimal improvement; not recommended for heavy towing
                  </td>
                </tr>
                <tr className="bg-safe-50">
                  <td className="px-4 py-3 font-medium text-safe-700">
                    Plate-and-fin (recommended)
                  </td>
                  <td className="px-4 py-3 text-gray-600">$100-$250</td>
                  <td className="px-4 py-3 text-gray-600">30-50°F</td>
                  <td className="px-4 py-3 text-sm text-safe-600">
                    Best value; significant temp reduction for mountain towing
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-700">
                    Stack plate (heavy-duty)
                  </td>
                  <td className="px-4 py-3 text-gray-600">$200-$400</td>
                  <td className="px-4 py-3 text-gray-600">40-60°F</td>
                  <td className="px-4 py-3 text-sm text-gray-500">
                    Maximum cooling; for trucks towing at or near GCWR regularly
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            Professional installation costs $200-$500 but ensures correct
            routing, fittings, and airflow positioning. A DIY install is
            possible for experienced mechanics, but incorrect routing can reduce
            effectiveness or even restrict flow. The cooler should be mounted in
            front of the AC condenser (if present) or radiator, where it
            receives maximum airflow. Never mount it behind another heat
            exchanger.
          </p>

          <div className="rounded-xl border-l-4 border-brand-500 bg-brand-50 p-4">
            <p className="text-sm text-brand-700">
              <strong>When to add a cooler:</strong> If you tow in mountains more
              than 3-4 times per year, or if your combined weight is above 80%
              of GCWR, an auxiliary cooler is a smart investment. The cost of
              the cooler and installation ($300-$800 total) is a fraction of the
              cost of a transmission replacement ($3,000-$7,000). Check your
              combined weight with our{" "}
              <Link
                href="/gcwr-calculator"
                className="font-semibold text-brand-600 underline"
              >
                GCWR Calculator
              </Link>{" "}
              before deciding.
            </p>
          </div>
        </div>
      </section>

      {/* Pre-trip checklist */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          Mountain Towing Pre-Trip Checklist
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            Before driving into the mountains with your RV, run through this
            checklist. Every item on it has been the cause of a real-world
            towing incident:
          </p>

          <div className="space-y-3">
            <div className="flex items-start gap-3 rounded-lg border border-gray-200 p-4">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-100 text-xs font-bold text-brand-700">
                1
              </span>
              <div>
                <strong className="text-gray-900">
                  Verify your combined weight is within GCWR
                </strong>
                <p className="mt-1 text-sm">
                  Use our{" "}
                  <Link
                    href="/towing-capacity-calculator"
                    className="font-semibold text-brand-600 underline"
                  >
                    Towing Capacity Calculator
                  </Link>{" "}
                  to confirm all five safety checks pass. Mountain grades
                  amplify the consequences of being overweight. If any check
                  fails, address it before the trip.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg border border-gray-200 p-4">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-100 text-xs font-bold text-brand-700">
                2
              </span>
              <div>
                <strong className="text-gray-900">
                  Check transmission fluid level and condition
                </strong>
                <p className="mt-1 text-sm">
                  Low fluid level is the #1 cause of overheating. If the fluid
                  is dark brown or smells burnt, change it before the trip. Use
                  the manufacturer&apos;s recommended fluid type&mdash;not all
                  ATF is compatible with all transmissions.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg border border-gray-200 p-4">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-100 text-xs font-bold text-brand-700">
                3
              </span>
              <div>
                <strong className="text-gray-900">
                  Install or verify a transmission temperature gauge
                </strong>
                <p className="mt-1 text-sm">
                  If your truck does not have a factory gauge, install an
                  aftermarket one. You cannot manage what you cannot measure.
                  $50-$150 for the gauge is the cheapest transmission protection
                  available.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg border border-gray-200 p-4">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-100 text-xs font-bold text-brand-700">
                4
              </span>
              <div>
                <strong className="text-gray-900">
                  Inspect brakes: pads, rotors, fluid, and trailer brake controller
                </strong>
                <p className="mt-1 text-sm">
                  Brake pads below 50% remaining should be replaced before a
                  mountain trip. Brake fluid should be clean and at the correct
                  level. Verify your trailer brake controller is adjusted
                  correctly&mdash;test it on a flat road before the mountains.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg border border-gray-200 p-4">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-100 text-xs font-bold text-brand-700">
                5
              </span>
              <div>
                <strong className="text-gray-900">
                  Verify tire condition and load ratings
                </strong>
                <p className="mt-1 text-sm">
                  Mountain roads demand more from tires: higher speeds on curves,
                  more braking force, and greater heat. Verify all tires (truck
                  and trailer) are at the recommended cold pressure for your
                  load, and that the combined tire load rating exceeds your
                  actual axle weights. Use our{" "}
                  <Link
                    href="/guides/cat-scale-weighing"
                    className="font-semibold text-brand-600 underline"
                  >
                    CAT Scale guide
                  </Link>{" "}
                  to get real axle weights.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg border border-gray-200 p-4">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-100 text-xs font-bold text-brand-700">
                6
              </span>
              <div>
                <strong className="text-gray-900">
                  Plan your route: know the grades
                </strong>
                <p className="mt-1 text-sm">
                  Use resources like the{" "}
                  <a
                    href="https://www.fhwa.dot.gov/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-600 hover:underline"
                  >
                    FHWA grade database
                  </a>
                  , trucker apps (SmartTruckRoute), or AAA mountain driving
                  guides to identify steep grades on your route. Knowing that a
                  7% grade is ahead lets you prepare before you reach it, not
                  after.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-12 rounded-2xl bg-brand-600 p-8 text-center text-white">
        <h2 className="text-2xl font-bold">
          Check Your Weight Before the Mountains
        </h2>
        <p className="mt-2 text-brand-100">
          Mountain grades punish overweight rigs. Verify your GVWR, payload,
          GCWR, and tongue weight with our free calculators before you drive
          into the hills.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link
            href="/towing-capacity-calculator"
            className="inline-block rounded-xl bg-white px-6 py-3 text-sm font-bold text-brand-700 shadow-lg transition-all hover:bg-brand-50 active:scale-[0.99]"
          >
            Towing Capacity Calculator
          </Link>
          <Link
            href="/gcwr-calculator"
            className="inline-block rounded-xl bg-white px-6 py-3 text-sm font-bold text-brand-700 shadow-lg transition-all hover:bg-brand-50 active:scale-[0.99]"
          >
            GCWR Calculator
          </Link>
          <Link
            href="/payload-calculator"
            className="inline-block rounded-xl bg-white px-6 py-3 text-sm font-bold text-brand-700 shadow-lg transition-all hover:bg-brand-50 active:scale-[0.99]"
          >
            Payload Calculator
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
              href="/guides/exceed-gvwr-dangers"
              className="text-brand-600 hover:underline"
            >
              What Happens If You Exceed GVWR
            </Link>
          </li>
          <li>
            <Link
              href="/guides/towing-capacity-explained"
              className="text-brand-600 hover:underline"
            >
              Towing Capacity Explained: The Complete Guide
            </Link>
          </li>
          <li>
            <Link
              href="/guides/gvwr-vs-gcwr"
              className="text-brand-600 hover:underline"
            >
              GVWR vs GCWR: What&apos;s the Difference?
            </Link>
          </li>
          <li>
            <Link
              href="/guides/payload-capacity"
              className="text-brand-600 hover:underline"
            >
              Payload Capacity Explained: The #1 Towing Blind Spot
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
              href="/guides/weight-distribution-hitch-setup"
              className="text-brand-600 hover:underline"
            >
              Weight Distribution Hitch Setup: Step-by-Step Guide
            </Link>
          </li>
        </ul>
      </section>

      {/* External references */}
      <section className="mt-12 border-t border-gray-200 pt-8">
        <h2 className="text-lg font-bold text-gray-900">Sources &amp; References</h2>
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
              href="https://www.fhwa.dot.gov/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 hover:underline"
            >
              Federal Highway Administration (FHWA) Grade Data
            </a>{" "}
            &mdash; fhwa.dot.gov
          </li>
          <li>
            <a
              href="https://www.sae.org/standards/content/j2807_202002/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 hover:underline"
            >
              SAE J2807: Performance Requirements for Determining Tow-Vehicle GCWR
            </a>{" "}
            &mdash; sae.org
          </li>
          <li>
            <a
              href="https://www.ford.com/trucks/f150/features/towing/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 hover:underline"
            >
              Ford F-150 Towing Guide (Tow/Haul Mode Specifications)
            </a>{" "}
            &mdash; ford.com
          </li>
          <li>
            <a
              href="https://www.ramtrucks.com/towing-guide.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 hover:underline"
            >
              RAM 1500 Towing Guide (Transmission Cooling Specifications)
            </a>{" "}
            &mdash; ramtrucks.com
          </li>
          <li>
            <a
              href="https://www.rvia.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 hover:underline"
            >
              RV Industry Association (RVIA) Safety Standards
            </a>{" "}
            &mdash; rvia.org
          </li>
        </ul>
      </section>
    </div>
  );
}
