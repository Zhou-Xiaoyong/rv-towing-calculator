import type { Metadata } from "next";
import Link from "next/link";
import { FaqJsonLd, ArticleJsonLd, HowToJsonLd } from "@/components/seo/JsonLd";
import { DEFAULT_OG_IMAGES } from "@/lib/seo/default-og-image";

export const metadata: Metadata = {
  title: "Trailer Brake Controller Setup: Installation, Adjustment & Safety Guide",
  description:
    "Complete trailer brake controller setup guide for RV owners. Learn proportional vs time-delayed, 4-wire and 7-way wiring, gain adjustment, manual override, and how to test your trailer brakes. Free calculator links included.",
  alternates: {
    canonical: "https://www.rvtowingcalc.com/guides/trailer-brake-controller-setup",
  },
  openGraph: {
    title: "Trailer Brake Controller Setup: Installation, Adjustment & Safety",
    description:
      "Step-by-step trailer brake controller installation and adjustment guide. Wiring diagrams, gain settings, proportional vs time-delayed, and how to test trailer brakes before every trip.",
    url: "https://www.rvtowingcalc.com/guides/trailer-brake-controller-setup",
    images: DEFAULT_OG_IMAGES,
  },
};

const FAQS = [
  {
    q: "What does a trailer brake controller do?",
    a: "A trailer brake controller sends electrical current to your trailer's electric brakes in proportion to how hard you press the tow vehicle's brake pedal. When you brake gently, the trailer brakes apply gently. When you brake hard, the trailer brakes apply hard. Without a brake controller, your truck's brakes alone must stop both the truck and the trailer, dramatically increasing stopping distance and brake wear. Federal law requires trailer brakes on any trailer with a GVWR over 3,000 lbs in most states, and a properly adjusted brake controller is the only way to operate them safely.",
  },
  {
    q: "What's the difference between proportional and time-delayed brake controllers?",
    a: "Proportional controllers use an internal accelerometer or connect to the vehicle's brake pressure sensor to apply trailer brakes in exact proportion to your braking. They feel natural and smooth. Time-delayed controllers apply a preset amount of braking after a short delay, with the braking force building over time regardless of how hard you pressed the pedal. Proportional controllers are strongly recommended for RV towing: they stop the trailer faster, reduce brake wear, and prevent the jerky lurching that time-delayed controllers cause at low speeds. The price difference is $30-$80, which is negligible compared to the safety improvement.",
  },
  {
    q: "Do I need a brake controller if my truck came with a tow package?",
    a: "Not necessarily. Many newer trucks (2015+) with factory tow packages include an integrated trailer brake controller (ITBC) already installed, usually as part of the tow package or a separate option. Check your dashboard for a manual brake lever and gain adjustment buttons near the trailer connector. If your truck has a 7-pin connector but no brake controller controls, you likely have the tow package wiring but not the controller itself. Trucks with a 4-pin flat connector generally have neither the wiring nor the controller and will need a full installation.",
  },
  {
    q: "How do I adjust the gain on my trailer brake controller?",
    a: "The standard procedure: drive the truck and trailer to 20-25 MPH on a flat, empty road or parking lot. Fully apply the manual override lever. If the trailer wheels lock up, the gain is too high&mdash;reduce it. If the trailer barely slows, the gain is too low&mdash;increase it. The correct setting is just below the point where the trailer wheels lock. At that setting, you achieve maximum braking without losing control. Re-test after loading the trailer for a trip, as added weight changes the braking dynamics. For proportional controllers, this setting is usually between 4.0 and 8.0 on the gain display.",
  },
  {
    q: "Can I install a brake controller myself?",
    a: "Yes, if your truck is pre-wired for a brake controller (most trucks 2005+ have a plug under the dash), installation takes 30-60 minutes and requires basic tools: a screwdriver, wire strippers, zip ties, and the controller's included wiring harness. If your truck is not pre-wired, it requires running wires through the firewall to the battery and to the 7-pin connector at the rear bumper&mdash;a 2-4 hour job that some owners are comfortable with and others prefer to have professionally installed ($100-$200 labor at most RV dealers or trailer shops).",
  },
  {
    q: "How do I test if my trailer brakes are working?",
    a: "Three checks before every trip: (1) With the trailer connected and the engine running, have someone stand next to the trailer wheels while you manually squeeze the brake controller lever. They should hear a distinct humming/buzzing from each brake magnet. (2) At 5-10 MPH in a parking lot, squeeze the manual lever fully. You should feel the trailer pulling back on the truck. (3) Drive at normal braking speed and listen for unusual grinding or squealing. If any wheel does not respond, inspect the magnet, wiring, and brake shoes at that wheel. Perform this test before every trip.",
  },
];

const CONTROLLER_TYPES = [
  {
    type: "Proportional (Accelerometer)",
    howItWorks:
      "Internal sensor detects deceleration and applies trailer brakes proportional to vehicle braking",
    price: "$60 - $150",
    pros: "Smooth, natural braking feel; effective at any speed; no connection to vehicle hydraulics needed",
    cons: "Must be mounted level and oriented correctly; may feel slightly delayed on initial application",
    recommended: "Tekonsha Prodigy P2, Tekonsha Primus IQ, CURT Echo",
  },
  {
    type: "Proportional (Hydraulic Sensor)",
    howItWorks:
      "Connects to vehicle brake line pressure or OBD-II data to apply trailer brakes",
    price: "$150 - $400",
    pros: "Most accurate proportional braking; responds instantly; integrates with vehicle display",
    cons: "More complex installation; vehicle-specific wiring may be required",
    recommended: "OEM integrated controllers (Ford TBC, RAM ITBC, GM ITBC)",
  },
  {
    type: "Time-Delayed",
    howItWorks:
      "Applies a preset braking force that ramps up over time regardless of pedal pressure",
    price: "$30 - $60",
    pros: "Inexpensive; simple installation; works with any vehicle",
    cons: "Jerky at low speeds; can skid trailer in panic stops; inconsistent braking feel; not recommended for RV towing",
    recommended: "Use only for light utility trailers; not recommended for RVs",
  },
];

export default function TrailerBrakeControllerGuidePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <FaqJsonLd
        faqs={FAQS}
        baseUrl="https://www.rvtowingcalc.com/guides/trailer-brake-controller-setup"
      />
      <HowToJsonLd
        name="How to Install and Adjust a Trailer Brake Controller"
        description="Complete guide to installing, wiring, adjusting gain, and testing a trailer brake controller for safe RV towing."
        totalTime="PT2H"
        url="https://www.rvtowingcalc.com/guides/trailer-brake-controller-setup"
        steps={[
          {
            name: "Determine your vehicle's wiring setup",
            text: "Check if your truck is pre-wired with a brake controller plug under the dash (most 2005+ trucks). Identify whether you need a vehicle-specific wiring harness or a universal harness.",
          },
          {
            name: "Mount the brake controller",
            text: "Choose a mounting location that allows easy access to the manual override lever and gain controls, typically below the dashboard near the driver's right knee. For proportional controllers, ensure the unit is mounted level and pointed in the direction of travel.",
          },
          {
            name: "Connect the wiring harness",
            text: "Plug the vehicle-specific harness into the port under the dash, then connect to the controller. For non-pre-wired vehicles, run power from the battery, ground to chassis, brake signal from the brake light switch, and output to the 7-pin connector.",
          },
          {
            name: "Adjust the gain setting",
            text: "Drive to 20-25 MPH on a flat road with the trailer connected. Fully apply the manual override. Increase gain until the trailer wheels just begin to lock, then back off slightly. This is your correct gain setting.",
          },
          {
            name: "Test and verify brake operation",
            text: "Perform a low-speed test at 5-10 MPH. Verify that all trailer brake magnets hum when the manual lever is applied. Check that the trailer brakes engage before the truck brakes on a normal stop.",
          },
        ]}
      />
      <ArticleJsonLd
        title="Trailer Brake Controller Setup: Installation, Adjustment & Safety Guide"
        description="Complete guide to installing, wiring, adjusting gain, and testing a trailer brake controller for safe RV towing. Includes proportional vs time-delayed comparison and free calculator links."
        url="https://www.rvtowingcalc.com/guides/trailer-brake-controller-setup"
        datePublished="2026-08-02"
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
        <span className="text-gray-900">Trailer Brake Controller Setup</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
        Trailer Brake Controller Setup: Installation, Adjustment &amp; Safety
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        Your truck can accelerate a 7,000 lb travel trailer without breaking a
        sweat. But can it stop it? Without a properly installed and adjusted
        trailer brake controller, the answer is no&mdash;not safely, and not
        legally. This guide covers everything from choosing the right
        controller to dialing in the gain setting and testing your brakes
        before every trip.
      </p>

      {/* Why it matters */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          Why Trailer Brakes Are Not Optional
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            Most states require trailer brakes on any trailer with a GVWR of
            3,000 lbs or more. A loaded travel trailer at 6,500 lbs without
            functioning trailer brakes adds roughly 120-180 feet to your 60-0
            MPH stopping distance&mdash;the length of four tractor-trailers
            end to end. That is the difference between stopping short of a
            stalled vehicle and hitting it at highway speed.
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-gray-200 p-5 text-center">
              <p className="text-3xl font-bold text-brand-600">~150 ft</p>
              <p className="mt-1 text-xs text-gray-500">
                60-0 MPH: Truck Only
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 p-5 text-center">
              <p className="text-3xl font-bold text-warning-600">~200 ft</p>
              <p className="mt-1 text-xs text-gray-500">
                60-0 MPH: Truck + Trailer Brakes
              </p>
            </div>
            <div className="rounded-xl border border-danger-200 bg-danger-50 p-5 text-center">
              <p className="text-3xl font-bold text-danger-600">~330 ft</p>
              <p className="mt-1 text-xs text-gray-500">
                60-0 MPH: No Trailer Brakes
              </p>
            </div>
          </div>
          <p className="text-xs text-gray-400">
            Approximate stopping distances for a half-ton truck with a 6,500 lb
            travel trailer on dry pavement. Actual distance varies by vehicle,
            road conditions, and brake system condition.
          </p>
          <div className="rounded-xl border-l-4 border-danger-500 bg-danger-50 p-4">
            <p className="text-sm text-danger-700">
              <strong>Legal note:</strong> In most U.S. states, towing a
              trailer over 3,000 lbs GVWR without functioning brakes is a
              moving violation. In an accident where non-functioning trailer
              brakes contributed to the collision, your insurance company may
              deny the claim. Trailer brakes are a legal requirement, not a
              convenience.
            </p>
          </div>
        </div>
      </section>

      {/* Controller types */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          Types of Trailer Brake Controllers
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            There are three types of brake controllers on the market. For RV
            towing, the recommendation is straightforward:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-gray-300 bg-gray-50">
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Type
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    How It Works
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Price Range
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Best For
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {CONTROLLER_TYPES.map((row) => (
                  <tr key={row.type}>
                    <td className="px-4 py-3 font-medium text-gray-700">
                      {row.type}
                    </td>
                    <td className="px-4 py-3 text-gray-600">
                      {row.howItWorks}
                    </td>
                    <td className="px-4 py-3 text-gray-600">{row.price}</td>
                    <td className="px-4 py-3 text-gray-600">{row.recommended}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="rounded-xl border-l-4 border-brand-500 bg-brand-50 p-4">
            <p className="text-sm text-brand-700">
              <strong>Our recommendation:</strong> Use a proportional
              controller. The Tekonsha Prodigy P2 ($100-$130) is the benchmark
              in the RV community and compatible with almost every truck. If
              your truck has a factory option for an integrated brake
              controller, that is the best choice&mdash;it integrates with the
              dashboard display and uses vehicle brake pressure data for the
              most precise proportional control.
            </p>
          </div>
        </div>
      </section>

      {/* Pre-wired vs full install */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          Step 1: Check Your Truck&apos;s Wiring
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            Before buying a controller, determine what your truck already has:
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border-2 border-safe-200 bg-safe-50 p-5">
              <h3 className="font-semibold text-safe-700">
                Pre-Wired (Plug and Play)
              </h3>
              <p className="mt-2 text-sm">
                Most trucks 2005 and newer have a brake controller connector
                under the dashboard, usually near the OBD-II port or above the
                parking brake pedal. Look for a rectangular 4- or 5-pin
                connector taped to a wire harness. You will need a
                vehicle-specific adapter harness ($12-$25) to connect this port
                to your controller&mdash;do not cut the factory connector.
                Installation takes 30 minutes.
              </p>
            </div>
            <div className="rounded-xl border-2 border-warning-200 bg-warning-50 p-5">
              <h3 className="font-semibold text-warning-700">
                Not Pre-Wired (Full Install)
              </h3>
              <p className="mt-2 text-sm">
                Older trucks or base models without a tow package may lack the
                under-dash connector. You will need to run four wires: 12V
                power from the battery (with a 30-amp auto-reset circuit
                breaker at the battery), ground to the chassis, brake signal
                from the brake light switch (cold side), and output to the 7-pin
                connector&apos;s blue wire. This is a 2-4 hour job. Professional
                installation costs $100-$200.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mounting */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          Step 2: Mount the Controller
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            The mounting location is critical for proportional controllers with
            an internal accelerometer. Follow these rules:
          </p>
          <ul className="ml-6 list-disc space-y-2">
            <li>
              <strong>Level:</strong> The controller must be mounted
              horizontally, level in both directions. Use the mounting
              bracket&apos;s built-in bubble level (if equipped) or a small
              torpedo level.
            </li>
            <li>
              <strong>Direction:</strong> Mount so the controller&apos;s front
              panel points toward the front of the vehicle. The accelerometer
              must face the direction of travel.
            </li>
            <li>
              <strong>Accessibility:</strong> You must be able to reach the
              manual override lever without taking your eyes off the road.
              Common locations: below the dash near the driver&apos;s right knee,
              or on the center console within finger reach.
            </li>
            <li>
              <strong>Clearance:</strong> Make sure your knee does not hit the
              controller when moving between pedals, and the mounting does not
              interfere with steering column tilt or parking brake operation.
            </li>
          </ul>
        </div>
      </section>

      {/* Wiring */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          Step 3: Connect the Wiring
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            The standard 7-pin trailer connector wiring for brake controllers
            follows this color code. Understanding these circuits helps with
            troubleshooting:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-gray-300 bg-gray-50">
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Pin
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Wire Color
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Function
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-700">1</td>
                  <td className="px-4 py-3 text-gray-600">White</td>
                  <td className="px-4 py-3 text-gray-600">Ground</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-700">2</td>
                  <td className="px-4 py-3 text-gray-600">Blue</td>
                  <td className="px-4 py-3 text-gray-600">
                    Electric Brake Output
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-700">3</td>
                  <td className="px-4 py-3 text-gray-600">
                    Green or Brown
                  </td>
                  <td className="px-4 py-3 text-gray-600">
                    Running/Tail Lights
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-700">4</td>
                  <td className="px-4 py-3 text-gray-600">Black</td>
                  <td className="px-4 py-3 text-gray-600">
                    12V Battery (Auxiliary)
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-700">5</td>
                  <td className="px-4 py-3 text-gray-600">Red</td>
                  <td className="px-4 py-3 text-gray-600">
                    Left Turn / Stop
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-700">6</td>
                  <td className="px-4 py-3 text-gray-600">Brown</td>
                  <td className="px-4 py-3 text-gray-600">
                    Right Turn / Stop
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-700">7</td>
                  <td className="px-4 py-3 text-gray-600">
                    Purple or Yellow
                  </td>
                  <td className="px-4 py-3 text-gray-600">
                    Reverse Lights / Center Auxiliary
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            The blue wire (Pin 2) is the critical circuit for brake controller
            operation. This wire carries the modulated voltage from the
            controller to the trailer&apos;s brake magnets. If your trailer
            brakes are not working, this is the first circuit to check.
          </p>
          <div className="rounded-xl border-l-4 border-danger-500 bg-danger-50 p-4">
            <p className="text-sm text-danger-700">
              <strong>Critical safety step:</strong> Always install a 30-amp
              auto-reset circuit breaker at the battery on the black 12V power
              wire. Do not connect directly to the battery without circuit
              protection. A short in the brake wiring can cause a fire without
              a breaker. The auto-reset type is preferred because it will
              restore power once the short is cleared, rather than leaving you
              stranded without trailer brakes.
            </p>
          </div>
        </div>
      </section>

      {/* Gain adjustment */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          Step 4: Adjust the Gain Setting
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            Gain is the most misunderstood setting on a brake controller. It
            controls the maximum voltage sent to the trailer brakes during a
            full stop. Setting it correctly is the difference between brakes
            that stop the trailer safely and brakes that either do nothing or
            lock up dangerously.
          </p>
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-5">
            <h3 className="font-semibold text-gray-900">
              The Standard Gain Adjustment Procedure
            </h3>
            <ol className="mt-3 ml-6 list-decimal space-y-2 text-sm">
              <li>
                Find a flat, empty stretch of road or a large parking lot.
              </li>
              <li>
                Drive the truck and trailer to 20-25 MPH in a straight line.
              </li>
              <li>
                Fully squeeze and hold the manual override lever. Do not touch
                the brake pedal.
              </li>
              <li>
                Observe the trailer&apos;s behavior: if the wheels lock and skid,
                the gain is too high. If the trailer barely slows, the gain is
                too low.
              </li>
              <li>
                Adjust the gain up or down and repeat until the trailer brakes
                firmly without locking the wheels at 20-25 MPH.
              </li>
            </ol>
          </div>
          <p>
            The correct gain setting typically falls between 4.0 and 8.0 on
            most proportional controllers for a travel trailer in the
            5,000-8,000 lb range. Lighter trailers need lower gain. Heavier
            trailers or trailers with more axles need higher gain. Re-adjust
            whenever your trailer&apos;s loaded weight changes significantly.
          </p>
          <div className="rounded-xl border-l-4 border-warning-500 bg-warning-50 p-4">
            <p className="text-sm text-warning-700">
              <strong>Common mistake:</strong> Setting gain too low because you
              are afraid of locking the brakes. This is dangerous because the
              trailer pushes the truck during hard stops. A trailer that skids
              briefly at 20 MPH during manual override testing will NOT skid
              during normal progressive braking because the controller applies
              braking gradually. Set gain just below lock-up, not at the
              &ldquo;feels smooth&rdquo; point.
            </p>
          </div>
        </div>
      </section>

      {/* Testing */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          Step 5: Pre-Trip Trailer Brake Test
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            Perform these three checks before every trip. They take five
            minutes and can prevent a serious accident:
          </p>
          <div className="space-y-3">
            <div className="flex items-start gap-3 rounded-lg border border-safe-200 bg-safe-50 p-4">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-safe-500 text-xs font-bold text-white">
                1
              </span>
              <div>
                <strong className="text-safe-800">
                  Magnet Audible Check
                </strong>
                <p className="mt-1 text-sm text-safe-700">
                  With the trailer connected and the engine running, have a
                  helper stand next to each trailer wheel while you manually
                  squeeze the brake controller lever to maximum. Each brake
                  assembly should produce a distinct humming or buzzing sound.
                  No sound from a wheel means a broken wire, failed magnet, or
                  bad ground at that wheel. Fix it before departing.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg border border-safe-200 bg-safe-50 p-4">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-safe-500 text-xs font-bold text-white">
                2
              </span>
              <div>
                <strong className="text-safe-800">
                  Low-Speed Pull Test
                </strong>
                <p className="mt-1 text-sm text-safe-700">
                  Drive forward at 5-10 MPH in a parking lot or empty road.
                  Squeeze the manual override lever fully without touching the
                  brake pedal. You should feel the trailer pulling back
                  noticeably on the truck&mdash;the deceleration should be
                  obvious. If you barely feel anything, the gain is too low or
                  the brakes are not functioning.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg border border-safe-200 bg-safe-50 p-4">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-safe-500 text-xs font-bold text-white">
                3
              </span>
              <div>
                <strong className="text-safe-800">
                  Breakaway Switch Test
                </strong>
                <p className="mt-1 text-sm text-safe-700">
                  With the trailer parked and the breakaway cable not attached
                  to the truck, pull the breakaway switch pin. The trailer
                  brakes should lock immediately and hold. Push the pin back in
                  to release. This verifies that the trailer&apos;s emergency
                  battery is charged and the breakaway system functions. Test
                  this monthly and before any long trip.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Troubleshooting */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          Common Brake Controller Issues and Fixes
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-gray-300 bg-gray-50">
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Symptom
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Likely Cause
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Fix
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-700">
                    Controller displays &ldquo;n.c.&rdquo; or &ldquo;no
                    connection&rdquo;
                  </td>
                  <td className="px-4 py-3 text-gray-600">
                    Open circuit: trailer is not connected, blue wire is
                    broken, or trailer ground is bad
                  </td>
                  <td className="px-4 py-3 text-gray-600">
                    Check 7-pin connector for corrosion; test continuity on
                    the blue wire from controller to trailer brakes; clean the
                    trailer ground connection at the frame
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-700">
                    Brakes lock immediately at any gain setting
                  </td>
                  <td className="px-4 py-3 text-gray-600">
                    Short circuit in the blue wire or a brake magnet shorted
                    to ground
                  </td>
                  <td className="px-4 py-3 text-gray-600">
                    Inspect the blue wire for pinched or chafed insulation;
                    test each brake magnet for resistance (3-4 ohms is normal;
                    0 or infinite ohms indicates a short or open)
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-700">
                    Braking feels weak even at maximum gain
                  </td>
                  <td className="px-4 py-3 text-gray-600">
                    Worn brake shoes, corroded connections, inadequate wire
                    gauge, or insufficient ground
                  </td>
                  <td className="px-4 py-3 text-gray-600">
                    Check brake shoe thickness; clean all connections with
                    contact cleaner; verify the ground wire is connected to
                    clean bare metal on the trailer frame
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-700">
                    One wheel locks before the others
                  </td>
                  <td className="px-4 py-3 text-gray-600">
                    Brake adjustment out of balance between wheels; one magnet
                    stronger than others
                  </td>
                  <td className="px-4 py-3 text-gray-600">
                    Adjust each brake&apos;s star wheel individually so all
                    wheels have equal drag; replace magnets as a matched set if
                    resistances vary significantly
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-700">
                    Controller gets very hot during use
                  </td>
                  <td className="px-4 py-3 text-gray-600">
                    Excessive current draw, undersized power wire, or poor
                    ground
                  </td>
                  <td className="px-4 py-3 text-gray-600">
                    Verify the 12V power wire is at least 10-gauge; check all
                    connections for looseness or corrosion; test current draw
                    (each brake magnet draws 3-3.5 amps at full power)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Maintenance */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          Trailer Brake Maintenance Schedule
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            The brake controller is only as good as the brakes it controls.
            Follow this schedule to keep your system in top condition:
          </p>
          <div className="space-y-3">
            <div className="flex items-start gap-3 rounded-lg border border-gray-200 p-4">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-100 text-xs font-bold text-brand-700">
                E
              </span>
              <div>
                <strong className="text-gray-900">
                  Every Trip (Before Departure)
                </strong>
                <ul className="mt-1 ml-4 list-disc space-y-0.5 text-sm">
                  <li>Perform the three-step pre-trip brake test</li>
                  <li>Inspect 7-pin connector for corrosion or bent pins</li>
                  <li>Verify breakaway switch battery charge with a test pull</li>
                </ul>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg border border-gray-200 p-4">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-100 text-xs font-bold text-brand-700">
                A
              </span>
              <div>
                <strong className="text-gray-900">Annually (Spring)</strong>
                <ul className="mt-1 ml-4 list-disc space-y-0.5 text-sm">
                  <li>Remove drums and inspect brake shoes, magnets, and wiring</li>
                  <li>Clean and repack wheel bearings</li>
                  <li>Adjust all brakes to equal drag using the star wheel</li>
                  <li>Test and replace breakaway battery if needed (every 3-5 years)</li>
                </ul>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg border border-gray-200 p-4">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-100 text-xs font-bold text-brand-700">
                3
              </span>
              <div>
                <strong className="text-gray-900">Every 3 Years</strong>
                <ul className="mt-1 ml-4 list-disc space-y-0.5 text-sm">
                  <li>Replace brake magnets if resistance reading is out of spec</li>
                  <li>Replace all brake wiring if insulation shows cracking or corrosion</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-12 rounded-2xl bg-brand-600 p-8 text-center text-white">
        <h2 className="text-2xl font-bold">Check Your Complete Towing Setup</h2>
        <p className="mt-2 text-brand-100">
          Stopping is just as important as pulling. Use our free calculators
          to verify payload, tongue weight, GVWR, and GCWR&mdash;every number
          that matters for a safe trip.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link
            href="/towing-capacity-calculator"
            className="inline-block rounded-xl bg-white px-6 py-3 text-sm font-bold text-brand-700 shadow-lg transition-all hover:bg-brand-50 active:scale-[0.99]"
          >
            Towing Capacity Calculator
          </Link>
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
              href="/guides/weight-distribution-hitch-setup"
              className="text-brand-600 hover:underline"
            >
              Weight Distribution Hitch Setup: Step-by-Step Guide
            </Link>
          </li>
          <li>
            <Link
              href="/guides/tongue-weight"
              className="text-brand-600 hover:underline"
            >
              Tongue Weight Guide: Optimal Ranges &amp; Sway Prevention
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
              href="/guides/exceed-gvwr-dangers"
              className="text-brand-600 hover:underline"
            >
              What Happens If You Exceed GVWR: Safety Risks &amp; Real Consequences
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
        </ul>
      </section>

      {/* External references */}
      <section className="mt-12 border-t border-gray-200 pt-8">
        <h2 className="text-lg font-bold text-gray-900">Sources &amp; References</h2>
        <ul className="mt-3 space-y-1 text-sm text-gray-500">
          <li>
            <a
              href="https://www.tekonsha.com/support"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 hover:underline"
            >
              Tekonsha Brake Controller Installation &amp; Support
            </a>{" "}
            &mdash; tekonsha.com
          </li>
          <li>
            <a
              href="https://www.curtmfg.com/towing-electrical"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 hover:underline"
            >
              CURT Trailer Brake Controllers &amp; Wiring
            </a>{" "}
            &mdash; curtmfg.com
          </li>
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
              href="https://www.etrailer.com/faq-brake-controller.aspx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 hover:underline"
            >
              etrailer Brake Controller Installation Guide
            </a>{" "}
            &mdash; etrailer.com
          </li>
          <li>
            <a
              href="https://www.rvia.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 hover:underline"
            >
              RV Industry Association (RVIA)
            </a>{" "}
            &mdash; rvia.org
          </li>
          <li>
            <a
              href="https://www.fmcsa.dot.gov/regulations/title49/part/393"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 hover:underline"
            >
              FMCSA 49 CFR Part 393: Parts and Accessories for Safe Operation
            </a>{" "}
            &mdash; fmcsa.dot.gov
          </li>
          <li>
            <a
              href="https://www.dmv.org/articles/trailer-brake-laws-by-state"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 hover:underline"
            >
              Trailer Brake Laws by State
            </a>{" "}
            &mdash; dmv.org
          </li>
        </ul>
      </section>
    </div>
  );
}
