import type { Metadata } from "next";
import Link from "next/link";
import { FaqJsonLd, ArticleJsonLd } from "@/components/seo/JsonLd";
import { DEFAULT_OG_IMAGES } from "@/lib/seo/default-og-image";

export const metadata: Metadata = {
  title:
    "Tow/Haul Mode Explained: What It Does, When to Use It, and Why It Matters",
  description:
    "Tow/haul mode explained: what it actually changes in your transmission, when to engage it, when to leave it off, and how it protects your engine and brakes when towing an RV.",
  alternates: {
    canonical: "https://www.rvtowingcalc.com/guides/tow-haul-mode-explained",
  },
  openGraph: {
    title:
      "Tow/Haul Mode Explained: What It Does, When to Use It, and Why It Matters",
    description:
      "A clear, data-driven explanation of tow/haul mode. What it changes in the transmission, when you should use it (and when you should not), and how it protects your drivetrain when towing.",
    url: "https://www.rvtowingcalc.com/guides/tow-haul-mode-explained",
    images: DEFAULT_OG_IMAGES,
  },
};

const FAQS = [
  {
    q: "What does tow/haul mode actually do?",
    a: "Tow/haul mode is a transmission shift pattern that raises the RPM at which the transmission upshifts and lowers the RPM at which it downshifts. It also enables engine braking on downshifts so the engine resists forward motion instead of freewheeling. It does not add horsepower, change torque, or alter the engine's tuning. It simply changes when the transmission chooses to shift gears, which keeps the engine in its power band longer under load.",
  },
  {
    q: "Should I use tow/haul mode all the time when towing?",
    a: "Yes, for the majority of towing situations. Leave tow/haul mode engaged any time you are pulling a trailer on public roads, including flat terrain at highway speed. The only times to switch it off are: (1) backing up the trailer, where the slower shift response can cause the rig to lurch, (2) on extremely slippery surfaces where aggressive downshifting can break traction, and (3) when maneuvering in tight spaces at low speed. For everyday towing, leave it on.",
  },
  {
    q: "Does tow/haul mode reduce transmission temperature?",
    a: "Indirectly, yes. Tow/haul mode reduces transmission temperature in two ways. First, by staying in a lower gear at highway speed, the torque converter stays locked, eliminating the slip that generates heat. Second, engine braking removes work from the wheel brakes, which keeps the vehicle from the brake-fade and over-heating scenarios that cascade into transmission overheating on long grades. That said, tow/haul is not a substitute for monitoring transmission temperature on long mountain descents.",
  },
  {
    q: "Can tow/haul mode hurt my transmission?",
    a: "No, it cannot hurt a transmission that is in good working order. Modern electronically controlled transmissions are designed to operate in tow/haul mode continuously, and the manufacturers explicitly authorize its use while towing. What can hurt the transmission is overheating from over-loading, low fluid, or a failing cooler. Tow/haul mode actually helps you avoid overheating in normal towing scenarios, because it keeps the torque converter locked and uses engine braking to unload the wheel brakes.",
  },
  {
    q: "When should I turn off tow/haul mode?",
    a: "Three scenarios: (1) When backing up a trailer, especially on uneven ground; the delayed upshifts can cause the rig to lurch. (2) On ice, snow, or standing water, where aggressive downshifts can break rear-wheel traction. (3) When maneuvering in tight spaces like fuel stations or campground loops at low speed, where the higher shift points make it harder to control creep. Outside these three cases, leave tow/haul engaged any time you are pulling a trailer.",
  },
  {
    q: "Is tow/haul mode the same as a lower gear on an automatic?",
    a: "Yes and no. Many vehicles also have a separate 'L' or '2' gear position that holds the transmission in first or second gear. Tow/haul mode is different in that it does not hold a single gear; instead, it changes the entire shift schedule so it keeps the transmission in a lower gear longer and downshifts more aggressively. For very steep descents or very heavy loads, the dedicated L gear may be appropriate because it forces the lowest possible ratio. For typical RV towing, tow/haul is the correct setting.",
  },
];

const SHIFT_PATTERNS = [
  {
    setting: "Drive (D) — Normal",
    upshiftRpm: "1,800–2,200 RPM (low load, fuel economy target)",
    downshiftRpm: "1,200–1,500 RPM (minimal engine braking)",
    engineBraking: "Minimal — torque converter unlocks frequently",
    bestFor: "Unloaded daily driving",
    towingUse: "Not recommended for towing",
  },
  {
    setting: "Tow/Haul Mode",
    upshiftRpm: "2,400–3,000 RPM (higher torque band)",
    downshiftRpm: "2,000–2,500 RPM (active engine braking)",
    engineBraking: "Strong — uses transmission to slow the vehicle",
    bestFor: "All towing on public roads",
    towingUse: "Default setting for towing",
  },
  {
    setting: "Manual Mode (M or +/- paddle)",
    upshiftRpm: "Driver selected (full control)",
    downshiftRpm: "Driver selected (rev-matched)",
    engineBraking: "Maximum (engine in lowest driver-selected gear)",
    bestFor: "Mountain grades, heavy descents",
    towingUse: "Use for very steep or long downgrades",
  },
  {
    setting: "L / 2 / 1 (Low Range)",
    upshiftRpm: "Locked to single gear (1st or 2nd)",
    downshiftRpm: "Locked — no downshift available",
    engineBraking: "Maximum — engine at high RPM",
    bestFor: "Steep off-road descents, very low-speed maneuvering",
    towingUse: "Reserved for extreme conditions",
  },
];

const TRANSMISSION_HEAT = [
  {
    temp: "< 180°F",
    status: "Normal",
    action: "Continue normally. Tow/haul engaged.",
  },
  {
    temp: "180–220°F",
    status: "Normal under load",
    action: "Continue normally. Monitor gauge every 10 minutes.",
  },
  {
    temp: "220–240°F",
    status: "Elevated",
    action: "Reduce speed. Shift to manual mode and select a lower gear.",
  },
  {
    temp: "240–260°F",
    status: "High — reduce load",
    action: "Exit the roadway if possible. Stop and idle in neutral for 5 minutes.",
  },
  {
    temp: "> 260°F",
    status: "Critical — damage risk",
    action: "Stop immediately. Shift to neutral, idle engine, do not shut off.",
  },
];

export default function TowHaulModeExplainedPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <ArticleJsonLd
        title="Tow/Haul Mode Explained: What It Does, When to Use It, and Why It Matters"
        description="A clear, data-driven explanation of tow/haul mode. What it changes in the transmission, when you should use it, and how it protects your drivetrain when towing."
        url="https://www.rvtowingcalc.com/guides/tow-haul-mode-explained"
        datePublished="2026-09-06"
      />
      <FaqJsonLd
        faqs={FAQS}
        baseUrl="https://www.rvtowingcalc.com/guides/tow-haul-mode-explained"
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
        <span className="text-gray-900">Tow/Haul Mode Explained</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
        Tow/Haul Mode Explained: What It Does, When to Use It, and Why It
        Matters
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        Almost every modern pickup truck and large SUV has a tow/haul button on
        the dashboard or shifter. Most owners press it once when they hook up
        and forget about it. Some owners never press it at all. Both approaches
        miss the point. Tow/haul mode is a free, built-in safety feature that
        reduces transmission heat, increases engine braking, and takes work off
        your wheel brakes. Used correctly, it extends the life of your
        drivetrain. Used incorrectly (or not at all), it is one of the reasons
        tow vehicles fail on long grades.
      </p>

      <div className="mt-8 rounded-xl bg-brand-50 p-6">
        <h2 className="text-lg font-bold text-brand-800">The Short Answer</h2>
        <p className="mt-2 text-brand-700">
          Engage tow/haul mode any time you are pulling a trailer on public
          roads. Leave it engaged on the highway, in town, on flat ground, and
          on grades. The only times to switch it off are when you are backing
          up, maneuvering in tight spaces at low speed, or driving on ice or
          snow. There is no benefit to leaving it off while towing.
        </p>
      </div>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        What Tow/Haul Mode Actually Changes
      </h2>
      <p className="mt-3 text-gray-700">
        Tow/haul mode is not a magic button that adds horsepower or torque. It
        is a <strong>shift schedule change</strong>. The transmission control
        module uses a different map for deciding which gear to select, when to
        upshift, and when to downshift. Three things happen:
      </p>
      <ul className="mt-3 ml-6 list-disc space-y-2 text-gray-700">
        <li>
          <strong>Upshifts happen later.</strong> Normal mode upshifts around
          1,800 to 2,200 RPM to save fuel. Tow/haul mode waits until 2,400 to
          3,000 RPM, keeping the engine in its torque band.
        </li>
        <li>
          <strong>Downshifts happen sooner.</strong> When you press the
          accelerator, the transmission downshifts to a lower gear at higher
          road speeds than normal mode, giving you immediate power for passing
          or climbing.
        </li>
        <li>
          <strong>Engine braking engages on downshifts.</strong> When you
          release the accelerator, the transmission stays in a lower gear and
          uses the engine to slow the vehicle. The torque converter stays
          locked so the engine actually resists motion.
        </li>
      </ul>
      <p className="mt-3 text-gray-700">
        That third point is the safety feature most owners never think about.
        Engine braking removes a significant amount of work from the wheel
        brakes, which keeps them cool and ready for the next event. It is the
        single biggest reason to use tow/haul mode on long downgrades. Our{" "}
        <Link
          href="/guides/mountain-towing-transmission-gears"
          className="text-brand-600 hover:underline"
        >
          mountain towing transmission guide
        </Link>{" "}
        covers the descent technique in detail.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Shift Pattern Comparison
      </h2>
      <p className="mt-3 text-gray-700">
        The table below shows typical upshift and downshift points across the
        four modes most drivers encounter. Exact values vary by manufacturer and
        transmission, but the relative behavior is consistent.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">
                Setting
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Upshift RPM
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Downshift RPM
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Engine Braking
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Best For
              </th>
            </tr>
          </thead>
          <tbody>
            {SHIFT_PATTERNS.map((row, i) => (
              <tr key={row.setting} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                <td className="border px-3 py-2 font-semibold">{row.setting}</td>
                <td className="border px-3 py-2 text-xs">{row.upshiftRpm}</td>
                <td className="border px-3 py-2 text-xs">{row.downshiftRpm}</td>
                <td className="border px-3 py-2 text-xs">{row.engineBraking}</td>
                <td className="border px-3 py-2 text-xs">{row.bestFor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-sm text-gray-500">
        RPM values are approximate and depend on engine, transmission, axle
        ratio, and load. Check your owner&apos;s manual for your specific
        vehicle.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Why Tow/Haul Mode Reduces Transmission Heat
      </h2>
      <p className="mt-3 text-gray-700">
        Transmission temperature is the most common failure mode for a tow
        vehicle on long grades. Tow/haul mode helps in two specific ways:
      </p>
      <div className="mt-4 space-y-4">
        <div className="rounded-xl border-l-4 border-brand-500 bg-brand-50 p-4">
          <h3 className="font-semibold text-brand-800">
            1. The torque converter stays locked
          </h3>
          <p className="mt-2 text-sm text-brand-700">
            A torque converter is a fluid coupling between the engine and
            transmission. When it unlocks, it slips, and slipping generates
            heat. Normal driving mode unlocks the converter frequently to save
            fuel and reduce driveline shock. Under load, that slip becomes a
            major heat source. Tow/haul mode keeps the converter locked across
            a much wider range of speeds and loads, eliminating slip and the
            heat it produces.
          </p>
        </div>
        <div className="rounded-xl border-l-4 border-brand-500 bg-brand-50 p-4">
          <h3 className="font-semibold text-brand-800">
            2. Engine braking removes work from the wheel brakes
          </h3>
          <p className="mt-2 text-sm text-brand-700">
            On a long descent, the wheel brakes alone have to absorb all the
            gravitational potential energy of the truck plus trailer. That
            energy converts to brake heat, and overheated brakes lead to
            brake fade. Brake fade means longer stopping distances. Longer
            stopping distances mean the transmission has to downshift to
            provide more engine braking, which loads the torque converter.
            Tow/haul mode breaks this cycle by using the engine to absorb
            descent energy before the wheel brakes ever get hot.
          </p>
        </div>
      </div>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Transmission Temperature Reference
      </h2>
      <p className="mt-3 text-gray-700">
        Most modern trucks and SUVs display a transmission temperature gauge,
        either on the dashboard or through the trip computer. Use these ranges
        as your decision guide while towing:
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">
                Temperature
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Status
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {TRANSMISSION_HEAT.map((row, i) => (
              <tr
                key={row.temp}
                className={
                  row.status.includes("Critical")
                    ? "bg-danger-50"
                    : row.status.includes("High")
                    ? "bg-warning-50"
                    : i % 2 === 1
                    ? "bg-gray-50"
                    : ""
                }
              >
                <td className="border px-3 py-2 font-semibold">{row.temp}</td>
                <td className="border px-3 py-2">{row.status}</td>
                <td className="border px-3 py-2 text-xs">{row.action}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 rounded-xl border-l-4 border-danger-500 bg-danger-50 p-4">
        <p className="text-sm text-danger-700">
          <strong>If your transmission temperature warning light comes on:</strong>{" "}
          Pull over as soon as it is safe to do so. Shift to neutral, idle the
          engine for 5 to 10 minutes to circulate fluid through the cooler, and
          do not shut off the engine — the fluid pump only runs with the engine on.
          If the warning persists after the cooldown, do not continue towing.
        </p>
      </div>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        When to Use Tow/Haul Mode — and When Not To
      </h2>

      <h3 className="mt-6 text-xl font-bold text-gray-900">
        Always engage tow/haul mode:
      </h3>
      <ul className="mt-3 ml-6 list-disc space-y-2 text-gray-700">
        <li>
          <strong>Highway towing at any speed.</strong> The torque converter
          stays locked, engine braking is available, and the transmission holds
          the right gear.
        </li>
        <li>
          <strong>Climbing grades.</strong> Tow/haul holds the transmission in
          the gear you need to maintain speed, and prevents the frustrating
          upshift-downshift-upshift cycle that happens in normal mode on hills.
        </li>
        <li>
          <strong>Descending grades.</strong> This is where tow/haul pays off
          the most. Engine braking absorbs most of the descent energy, leaving
          your wheel brakes cool and ready.
        </li>
        <li>
          <strong>Stop-and-go traffic while towing.</strong> The delayed
          upshifts give you more responsive acceleration when the light turns
          green.
        </li>
        <li>
          <strong>Passing slower vehicles.</strong> The early downshift gives
          you the power band you need without waiting for the transmission to
          catch up.
        </li>
      </ul>

      <h3 className="mt-6 text-xl font-bold text-gray-900">
        Turn tow/haul mode off:
      </h3>
      <ul className="mt-3 ml-6 list-disc space-y-2 text-gray-700">
        <li>
          <strong>Backing up the trailer.</strong> The delayed upshifts can
          cause the rig to lurch unexpectedly. Use normal mode (or L gear) for
          low-speed reversing.
        </li>
        <li>
          <strong>Maneuvering at very low speed.</strong> Fuel stations,
          campground loops, and tight driveways are easier to control without
          tow/haul because the transmission shifts sooner.
        </li>
        <li>
          <strong>On ice, snow, or standing water.</strong> Aggressive
          downshifts can break rear-wheel traction. Use normal mode to keep
          the transmission in higher gears and reduce torque multiplication to
          the rear wheels.
        </li>
        <li>
          <strong>When the trailer is unloaded and you are bobtailing.</strong>{" "}
          Without a load, tow/haul keeps the engine at unnecessarily high RPM
          and hurts fuel economy. Switch back to normal mode for the daily
          drive home.
        </li>
      </ul>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Tow/Haul vs. Manual Mode and L Gear
      </h2>
      <p className="mt-3 text-gray-700">
        For very steep mountain descents, tow/haul mode may not be enough.
        Modern trucks with 10-speed or 8-speed transmissions have the option of
        a manual mode using paddle shifters or a +/- gate on the shifter.
      </p>
      <p className="mt-3 text-gray-700">
        Manual mode lets you select and hold any gear the transmission has.
        On a long 6% grade with a heavy load, dropping from 8th to 5th gear
        manually locks the engine into its highest torque band and gives you
        the maximum engine braking. The transmission will not upshift on its
        own, so you are in full control.
      </p>
      <p className="mt-3 text-gray-700">
        The dedicated L or 2 gear is reserved for extreme conditions: very
        steep off-road descents, low-speed technical maneuvering with a heavy
        load, or situations where you need maximum engine braking at very low
        speeds. Most RV towers will never need L gear on public roads.
      </p>
      <div className="mt-4 rounded-xl border-l-4 border-brand-500 bg-brand-50 p-4">
        <p className="text-sm text-brand-700">
          <strong>Practical rule:</strong> Use tow/haul for 95% of your towing.
          Switch to manual mode on long, steep grades where the transmission
          keeps hunting for the right gear. Use L gear only when you are
          descending a grade steep enough that manual mode in the lowest gear
          is not holding your speed.
        </p>
      </div>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        How Tow/Haul Interacts with Other Towing Systems
      </h2>
      <p className="mt-3 text-gray-700">
        Tow/haul mode is one tool in a stack of features modern tow vehicles
        offer. Understanding how they work together makes you a safer tower.
      </p>
      <ul className="mt-3 ml-6 list-disc space-y-2 text-gray-700">
        <li>
          <strong>Engine braking (exhaust brake, jake brake).</strong> On
          diesel trucks, an exhaust brake or jake brake closes the exhaust
          to slow the engine. It works automatically with tow/haul mode and is
          far stronger than engine braking on a gas engine. If you tow with a
          diesel (Cummins, Power Stroke, Duramax), engine braking is the main
          reason diesel is the preferred tow engine for heavy loads.
        </li>
        <li>
          <strong>Trailer brake controller.</strong> Your trailer&apos;s
          electric brakes handle a portion of the braking force, but they are
          activated by your truck&apos;s brake pedal. Tow/haul does not change
          trailer brake gain — you still need to set the controller manually
          with our{" "}
          <Link
            href="/guides/trailer-brake-controller-setup"
            className="text-brand-600 hover:underline"
          >
            brake controller setup guide
          </Link>
          .
        </li>
        <li>
          <strong>Transmission cooler.</strong> Most factory tow packages
          include an auxiliary transmission cooler. Tow/haul does not replace
          the cooler — it reduces the load on the cooler by keeping the
          torque converter locked.
        </li>
        <li>
          <strong>Auto grade braking.</strong> Many newer trucks automatically
          engage a lower gear on descents, mimicking tow/haul behavior. If
          your truck has this feature, it works alongside the manual tow/haul
          mode.
        </li>
      </ul>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Does Tow/Haul Mode Save Fuel?
      </h2>
      <p className="mt-3 text-gray-700">
        Counter-intuitively, sometimes yes. In normal driving, the transmission
        upshifts as soon as it can to keep RPM down. Under load, this means the
        transmission upshifts, the engine bogs down, you press the accelerator,
        the transmission downshifts, you go up a little, and the cycle
        repeats. That cycle wastes fuel.
      </p>
      <p className="mt-3 text-gray-700">
        Tow/haul mode skips the cycle by holding the right gear the first
        time. The engine runs at higher RPM, but it operates at lower
        throttle, and the transmission stops hunting. Under sustained load,
        tow/haul can return 0.5 to 1.5 MPG better than normal mode. There is
        no fuel-economy penalty for using tow/haul while towing.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        A Quick Pre-Trip Routine for Tow/Haul Mode
      </h2>
      <p className="mt-3 text-gray-700">
        Before every tow trip, run through this checklist:
      </p>
      <ol className="mt-3 ml-6 list-decimal space-y-2 text-gray-700">
        <li>
          Start the engine, press the brake, and shift through all gears with
          the engine running. Confirm the transmission engages each gear
          smoothly.
        </li>
        <li>
          Press the tow/haul button. Confirm the indicator light on the
          dashboard comes on.
        </li>
        <li>
          Drive a short distance (in a parking lot if possible) and verify
          that the transmission holds the lower gears longer under light
          throttle.
        </li>
        <li>
          Press the accelerator firmly. The transmission should downshift
          promptly. If it hesitates or feels sluggish, you may have a
          transmission issue — do not tow.
        </li>
        <li>
          Check transmission fluid level and condition. Smell the fluid on the
          dipstick — burnt fluid means the transmission has been overheated.
          Replace before towing.
        </li>
      </ol>

      <div className="mt-10 rounded-2xl bg-brand-600 p-8 text-center text-white">
        <h2 className="text-2xl font-bold">
          Is Your Setup Ready to Tow?
        </h2>
        <p className="mt-2 text-brand-100">
          Tow/haul mode is one tool. Towing capacity, payload, and tongue
          weight are the rest. Check all four before your next trip.
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
            href="/gcwr-calculator"
            className="inline-block rounded-xl bg-white px-6 py-3 text-sm font-bold text-brand-700 shadow-lg transition-all hover:bg-brand-50 active:scale-[0.99]"
          >
            GCWR Calculator
          </Link>
        </div>
      </div>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Sources &amp; References
      </h2>
      <ul className="mt-3 space-y-1 text-sm text-gray-600">
        <li>
          <a
            href="https://www.ford.com/help/ Tow/how-tos/towing/tow-haul-mode/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            Ford — How Tow/Haul Mode Works
          </a>
        </li>
        <li>
          <a
            href="https://www.ramtrucks.com/towing/tow-haul-mode.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            Ram Trucks — Tow/Haul Mode Overview
          </a>
        </li>
        <li>
          <a
            href="https://www.chevrolet.com/trucks/towing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            Chevrolet — Truck Towing Technology
          </a>
        </li>
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
            href="https://www.nhtsa.gov/vehicle-safety/towing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            NHTSA — Trailer Towing Safety
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
              href="/guides/mountain-towing-transmission-gears"
              className="text-brand-600 hover:underline"
            >
              Mountain Towing: Transmission Temp &amp; Gear Selection
            </Link>
          </li>
          <li>
            <Link
              href="/guides/trailer-brake-controller-setup"
              className="text-brand-600 hover:underline"
            >
              Trailer Brake Controller Setup
            </Link>
          </li>
          <li>
            <Link
              href="/guides/diesel-vs-gas-truck-rv-towing"
              className="text-brand-600 hover:underline"
            >
              Diesel vs Gas Truck for Towing
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
              href="/guides/travel-trailer-pre-trip-inspection"
              className="text-brand-600 hover:underline"
            >
              Travel Trailer Pre-Trip Inspection
            </Link>
          </li>
          <li>
            <Link
              href="/guides/towing-capacity-explained"
              className="text-brand-600 hover:underline"
            >
              Towing Capacity Explained
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}