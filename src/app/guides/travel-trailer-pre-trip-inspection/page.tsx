import type { Metadata } from "next";
import Link from "next/link";
import { FaqJsonLd, ArticleJsonLd, HowToJsonLd } from "@/components/seo/JsonLd";
import { DEFAULT_OG_IMAGES } from "@/lib/seo/default-og-image";

export const metadata: Metadata = {
  title: "Travel Trailer Pre-Trip Inspection Checklist: 7-Step Walk-Around Guide",
  description:
    "Complete pre-trip inspection checklist for travel trailers. 7-step walk-around guide covering hitch connection, lights, tires, brakes, propane, and interior safety. Printable PDF-friendly.",
  alternates: {
    canonical: "https://www.rvtowingcalc.com/guides/travel-trailer-pre-trip-inspection",
  },
  openGraph: {
    title: "Travel Trailer Pre-Trip Inspection Checklist: 7-Step Walk-Around Guide",
    description:
      "Printable 7-step walk-around inspection checklist for travel trailers. Covers hitch, lights, tires, brakes, propane, and interior safety before every tow.",
    url: "https://www.rvtowingcalc.com/guides/travel-trailer-pre-trip-inspection",
    images: DEFAULT_OG_IMAGES,
  },
};

const FAQS = [
  {
    q: "How long should a pre-trip inspection take?",
    a: "A thorough pre-trip inspection takes 15 to 25 minutes for an experienced RVer, and 30 to 45 minutes for a first-timer. The walk-around portion (tires, lights, hitch) takes 5 to 10 minutes. The interior checks (appliances, propane, water, electrical) take another 10 to 15 minutes. The checklist is faster than it sounds once it becomes routine. Most experienced RVers can do the full inspection in 15 minutes.",
  },
  {
    q: "Should I do a pre-trip inspection every time I tow?",
    a: "Yes. Even on a short trip to a campground 10 miles away, run the walk-around. The most common towing failures (hitch not latched, tire blowout from low pressure, brake wire disconnected, lights not working) are all caught by a 5-minute walk-around. The cost of skipping the inspection is a tow-away that costs thousands of dollars and hours of recovery time. The cost of doing it is 15 minutes.",
  },
  {
    q: "What is the most common thing people forget on a pre-trip inspection?",
    a: "By far the most common miss is checking that the trailer is actually secured to the tow vehicle. People couple the ball, latch the coupler, then drive away without raising the tongue jack. If the coupler latch is even slightly loose or the ball is the wrong size, the trailer can separate at any bump. Always raise the tongue jack fully and confirm the safety chains are crossed under the tongue.",
  },
  {
    q: "Do I need to do a pre-trip inspection at a rest stop on a long trip?",
    a: "Yes. On long trips (over 200 miles), stop every 2 to 3 hours and do a quick walk-around: tires (look for low pressure or hot hubs), hitch (verify safety chains and breakaway switch), lights (confirm running lights still work), and a visual look under the trailer for fluid leaks or hanging parts. The full interior inspection only needs to be done before departure, but the exterior walk-around should happen multiple times per day.",
  },
  {
    q: "What is a breakaway switch and why does it matter for pre-trip inspection?",
    a: "A breakaway switch is a small device wired to the trailer battery and attached to the tow vehicle with a cable and pin. If the trailer ever separates from the tow vehicle, the pin pulls out, the switch activates, and the trailer's electric brakes engage automatically. This brings the runaway trailer to a stop in seconds. The breakaway switch must be tested before every trip: pull the pin, listen for the brakes to engage, then reinsert the pin. The cable must be attached to the tow vehicle, not to a part of the trailer that would also separate.",
  },
  {
    q: "How do I check trailer tire pressure accurately?",
    a: "Use a quality digital tire pressure gauge or a stick-style gauge rated for high pressure (most trailer tires run 50 to 80 PSI cold). Check pressure when the tires are cold, before driving more than a mile. Hot tires give falsely high readings. Inflate to the pressure listed on the trailer tire placard (typically inside the door frame) or in the owner's manual. Do not use the maximum pressure printed on the tire sidewall; that is the maximum, not the recommended pressure.",
  },
];

const INSPECTION_SECTIONS = [
  {
    id: 1,
    title: "Hitch & Coupler Connection",
    duration: "5 minutes",
    risk: "High (causes tow-aways)",
    items: [
      "Coupler fully latched onto ball with audible click",
      "Safety pin or lock inserted through coupler latch",
      "Tongue jack raised fully (off the ground)",
      "Ball mount pinned and clipped in hitch receiver",
      "Safety chains crossed under tongue and connected to tow vehicle",
      "Breakaway switch cable attached to tow vehicle (not trailer)",
      "Breakaway switch tested (pull pin, hear brakes engage, reinsert)",
      "7-pin electrical connector fully seated and locked",
      "Trailer lights tested: running, brake, left turn, right turn, reverse",
    ],
  },
  {
    id: 2,
    title: "Tires, Wheels & Suspension",
    duration: "5 minutes",
    risk: "High (blowouts cause crashes)",
    items: [
      "Cold tire pressure checked on all trailer tires (door placard spec)",
      "Spare tire pressure checked and accessible",
      "Visual tire inspection: no cracks, bulges, or bald spots",
      "Wheel lug nuts: torque wrench check (typical spec 90-120 ft-lbs)",
      "No missing or loose wheel covers",
      "Hub oil or grease levels (if serviceable bearings)",
      "Suspension: no broken leaf springs or cracked equalizers",
      "Axle bolts and U-bolts tight and not corroded",
    ],
  },
  {
    id: 3,
    title: "Exterior & Undercarriage",
    duration: "3 minutes",
    risk: "Medium (damage or fallen parts)",
    items: [
      "Slide-outs fully retracted and locked",
      "Awning fully retracted and locked",
      "All exterior compartments closed and latched",
      "Antenna, satellite dish, or AC covers secured",
      "No hanging wires, pipes, or cables under trailer",
      "No fluid leaks (water, oil, hydraulic fluid)",
      "Stabilizer jacks fully raised",
      "Steps stowed",
    ],
  },
  {
    id: 4,
    title: "Propane & Gas System",
    duration: "3 minutes",
    risk: "High (gas leaks cause explosions)",
    items: [
      "Propane tank valve closed before travel",
      "Propane tank secured in its mount (no movement)",
      "Propane cover closed and latched",
      "No propane odor at any connection",
      "CO and propane detectors tested (test button)",
      "Range hood, furnace, water heater, fridge all off",
    ],
  },
  {
    id: 5,
    title: "Interior & Cargo",
    duration: "5 minutes",
    risk: "Medium (contents shifting in transit)",
    items: [
      "Heavy items stored low and centered over axles",
      "Cabinets, drawers, and doors latched",
      "Refrigerator door locked",
      "Bathroom door latched",
      "TV and electronics secured",
      "Loose items removed from counters and tables",
      "No perishable food or open liquids",
      "Water heater bypassed (winter) or filled (summer)",
      "Fresh water tank filled or emptied per trip needs",
    ],
  },
  {
    id: 6,
    title: "Electrical & 12V Systems",
    duration: "3 minutes",
    risk: "Medium (battery, charging, brakes)",
    items: [
      "Trailer battery fully charged (12.6V+) and secured",
      "Battery terminals clean and tight",
      "Battery disconnect switch turned on",
      "Solar panel (if equipped) unobstructed and connected",
      "Inverter (if equipped) switched off when not in use",
      "Interior 12V lights test on",
      "120V shore power disconnected and cord stowed",
    ],
  },
  {
    id: 7,
    title: "Final Pre-Departure Walk",
    duration: "2 minutes",
    risk: "High (last chance to catch mistakes)",
    items: [
      "Tow vehicle mirrors adjusted for trailer width",
      "Driver and passenger windows rolled up",
      "All passengers buckled",
      "Truck shifted to tow/haul mode",
      "Backup camera or extended mirrors provide full trailer view",
      "GPS or navigation set, low-clearance route checked",
      "Weather and wind conditions reviewed",
      "Roadside emergency kit accessible (triangles, flares, tools)",
    ],
  },
];

export default function TravelTrailerPreTripInspectionPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <FaqJsonLd
        faqs={FAQS}
        baseUrl="https://www.rvtowingcalc.com/guides/travel-trailer-pre-trip-inspection"
      />
      <HowToJsonLd
        name="How to Inspect a Travel Trailer Before Towing"
        description="Complete 7-step pre-trip inspection walk-around covering hitch, tires, lights, brakes, propane, electrical, and cargo."
        totalTime="PT30M"
        url="https://www.rvtowingcalc.com/guides/travel-trailer-pre-trip-inspection"
        steps={[
          {
            name: "Inspect the hitch and coupler connection",
            text: "Verify the coupler is fully latched on the hitch ball, the safety pin is in, the tongue jack is fully raised, safety chains are crossed, the breakaway switch cable is attached to the tow vehicle, the 7-pin connector is locked, and all trailer lights work.",
          },
          {
            name: "Check tires, wheels, and suspension",
            text: "Measure cold tire pressure on every tire and the spare. Inspect for cracks, bulges, or bald spots. Torque-check lug nuts and verify axle hardware.",
          },
          {
            name: "Walk the exterior and undercarriage",
            text: "Confirm slide-outs and awning are retracted. Check for hanging parts, leaks, or loose items. Verify stabilizer jacks are raised and steps stowed.",
          },
          {
            name: "Inspect propane and gas system",
            text: "Close propane tank valve before travel. Test CO and propane detectors. Verify range, furnace, water heater, and fridge are off.",
          },
          {
            name: "Secure interior and cargo",
            text: "Latch cabinets and drawers. Lock fridge and bathroom doors. Stow loose items. Verify heavy items are low and centered.",
          },
          {
            name: "Test electrical and 12V systems",
            text: "Check battery voltage and security. Confirm battery disconnect is on. Test interior lights and stow the shore power cord.",
          },
          {
            name: "Do a final pre-departure walk",
            text: "Adjust tow mirrors, buckle all passengers, engage tow/haul mode, and verify visibility through mirrors or backup camera.",
          },
        ]}
      />
      <ArticleJsonLd
        title="Travel Trailer Pre-Trip Inspection Checklist: 7-Step Walk-Around Guide"
        description="Printable 7-step walk-around inspection checklist for travel trailers. Covers hitch, lights, tires, brakes, propane, and interior safety before every tow."
        url="https://www.rvtowingcalc.com/guides/travel-trailer-pre-trip-inspection"
        datePublished="2026-08-20"
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
        <span className="text-gray-900">Pre-Trip Inspection</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
        Travel Trailer Pre-Trip Inspection Checklist: The 7-Step Walk-Around
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        A 15-minute pre-trip inspection catches 90% of the failures that
        cause RV tow-aways, blowouts, and roadside breakdowns. This guide
        walks you through every check, in order, so nothing gets missed.
        Print this checklist and keep it in your tow vehicle. After two
        inspections you will have it memorized, and you will never tow
        without running through it again.
      </p>

      {/* Why pre-trip matters */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          Why Every Trip Needs a Pre-Trip Inspection
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
              Towing failure rates are dramatically higher than passenger
              vehicle failure rates. A study by the RV Industry Association
              found that the most common causes of RV tow-aways are:
            </p>
          <ul className="ml-6 list-disc space-y-2">
            <li>
                <strong>Tire failure</strong> (35% of incidents): blowouts
                from low pressure, age, or overload
              </li>
            <li>
                <strong>Hitch failure</strong> (20%): improper coupling,
                safety chain issues, breakaway switch not connected
              </li>
            <li>
                <strong>Brake failure</strong> (15%): wiring problems,
                controller misadjustment, electric brake magnet wear
              </li>
            <li>
                <strong>Light failure</strong> (15%): connectors, ground
                issues, burned-out bulbs
              </li>
            <li>
                <strong>Other mechanical</strong> (15%): broken leaf springs,
                axle issues, fluid leaks
              </li>
          </ul>
          <p>
              All of these are caught by a walk-around inspection. The cost
            of skipping the inspection is high: a tow-away costs thousands in
            trailer damage, hours of roadside inconvenience, and a serious
            risk to other drivers if it happens at highway speed.
          </p>
          <div className="rounded-xl border-l-4 border-danger-500 bg-danger-50 p-4">
            <p className="text-sm text-danger-700">
              <strong>Safety warning:</strong> The most dangerous inspection
              you can do is the one you skip because you are in a hurry.
              Every RV tow-away starts with someone who thought &quot;it
              will be fine.&quot; It is not fine. Run the checklist.
            </p>
          </div>
        </div>
      </section>

      {/* Inspection timing and frequency */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          When to Run the Full Inspection vs. the Quick Walk-Around
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-gray-300 bg-gray-50">
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Trip Type
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Inspection Level
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Time
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-700">
                    First trip of the season
                  </td>
                  <td className="px-4 py-3 text-gray-600">
                    Full inspection + tire inspection + battery + full systems
                    check
                  </td>
                  <td className="px-4 py-3 text-gray-600">
                    45-60 min
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-700">
                    Every departure
                  </td>
                  <td className="px-4 py-3 text-gray-600">
                    Full 7-step inspection
                  </td>
                  <td className="px-4 py-3 text-gray-600">15-25 min</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-700">
                    Every rest stop (long trips)
                  </td>
                  <td className="px-4 py-3 text-gray-600">
                    Quick walk-around: tires, hitch, lights, fluid leaks
                  </td>
                  <td className="px-4 py-3 text-gray-600">5 min</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-700">
                    After hitting a curb or pothole
                  </td>
                  <td className="px-4 py-3 text-gray-600">
                    Targeted: tires, hitch, suspension
                  </td>
                  <td className="px-4 py-3 text-gray-600">10 min</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-700">
                    After weather event (wind, hail)
                  </td>
                  <td className="px-4 py-3 text-gray-600">
                    Targeted: awning, slide-outs, exterior damage, tires
                  </td>
                  <td className="px-4 py-3 text-gray-600">10 min</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* The 7-step checklist */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          The 7-Step Pre-Trip Inspection
        </h2>
        <p className="mt-4 text-gray-600">
          Follow this checklist in order before every tow. Each step takes
          only a few minutes but together they cover every common towing
          failure mode.
        </p>
        <div className="mt-6 space-y-4">
          {INSPECTION_SECTIONS.map((section) => (
            <details
              key={section.id}
              className="group rounded-xl border border-gray-200 p-5"
              open={section.id === 1}
            >
              <summary className="cursor-pointer">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-bold text-gray-900">
                    Step {section.id}: {section.title}
                  </h3>
                  <div className="flex gap-2 text-xs">
                    <span className="rounded-full bg-gray-100 px-2 py-1 text-gray-600">
                      {section.duration}
                    </span>
                    <span
                      className={`rounded-full px-2 py-1 ${
                        section.risk === "High"
                          ? "bg-danger-50 text-danger-700"
                          : "bg-warning-50 text-warning-700"
                      }`}
                    >
                      Risk: {section.risk}
                    </span>
                  </div>
                </div>
              </summary>
              <ul className="mt-4 ml-6 list-disc space-y-2 text-sm text-gray-600">
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </details>
          ))}
        </div>
      </section>

      {/* Printable checklist */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          Quick-Reference Printable Checklist
        </h2>
        <p className="mt-4 text-gray-600">
          Save this on your phone or print it for your tow vehicle. Run
          through it before every departure.
        </p>
        <div className="mt-4 overflow-x-auto rounded-lg border border-gray-200 bg-gray-50 p-6">
          <pre className="text-sm leading-relaxed text-gray-700">
{`TRAVEL TRAILER PRE-TRIP INSPECTION
Date: ___________  Driver: ___________  Destination: ___________

STEP 1: HITCH & COUPLER                    [ ] Pass [ ] Fail
[ ] Coupler latched with audible click
[ ] Safety pin/lock in coupler latch
[ ] Tongue jack fully raised
[ ] Ball mount pinned & clipped in receiver
[ ] Safety chains crossed under tongue
[ ] Breakaway cable attached to tow vehicle
[ ] Breakaway switch tested (brakes engage)
[ ] 7-pin connector fully seated
[ ] All trailer lights working

STEP 2: TIRES, WHEELS & SUSPENSION         [ ] Pass [ ] Fail
[ ] Cold tire pressure verified (door spec)
[ ] Spare tire pressure verified
[ ] No cracks/bulges/bald spots on tires
[ ] Lug nuts torque-checked (90-120 ft-lbs)
[ ] No missing wheel covers
[ ] Suspension: no broken leaf springs
[ ] Axle U-bolts tight

STEP 3: EXTERIOR & UNDERCARRIAGE           [ ] Pass [ ] Fail
[ ] Slide-outs fully retracted & locked
[ ] Awning fully retracted & locked
[ ] All compartments closed
[ ] AC/antenna covers secured
[ ] No hanging wires/pipes underneath
[ ] No fluid leaks visible
[ ] Stabilizer jacks raised
[ ] Steps stowed

STEP 4: PROPANE & GAS                      [ ] Pass [ ] Fail
[ ] Propane tank valve CLOSED
[ ] Tank secured in mount
[ ] Cover closed and latched
[ ] No propane odor detected
[ ] CO detector tested (test button)
[ ] Propane detector tested
[ ] Range/furnace/water heater/fridge OFF

STEP 5: INTERIOR & CARGO                   [ ] Pass [ ] Fail
[ ] Heavy items low and centered
[ ] Cabinets, drawers, doors latched
[ ] Fridge door locked
[ ] Bathroom door latched
[ ] TV/electronics secured
[ ] Loose items removed from counters
[ ] No perishables or open liquids
[ ] Water system configured for trip

STEP 6: ELECTRICAL & 12V                   [ ] Pass [ ] Fail
[ ] Battery fully charged (12.6V+)
[ ] Battery secured, terminals tight
[ ] Battery disconnect switch ON
[ ] Solar panel connected
[ ] Inverter OFF if not in use
[ ] Interior 12V lights test OK
[ ] Shore power cord stowed

STEP 7: FINAL PRE-DEPARTURE                [ ] Pass [ ] Fail
[ ] Tow mirrors adjusted
[ ] All passengers buckled
[ ] Tow/haul mode engaged
[ ] Backup camera / extended mirrors OK
[ ] GPS / route / low clearance checked
[ ] Weather and wind reviewed
[ ] Emergency kit accessible

OVERALL STATUS: [ ] SAFE TO TOW  [ ] DO NOT TOW

Notes: _________________________________
       _________________________________`}
          </pre>
        </div>
        <p className="mt-4 text-sm text-gray-500">
          For more deep-dive maintenance safety, see also our{" "}
          <Link
            href="/guides/travel-trailer-tire-safety"
            className="font-semibold text-brand-600 underline"
          >
            Travel Trailer Tire Safety
          </Link>{" "}
          guide.
        </p>
      </section>

      {/* The breakaway switch deep dive */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          The Breakaway Switch: Your Last Line of Defense
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
              If everything else in the inspection fails, the breakaway
              switch is the one piece of safety equipment that can save
              your trailer (and other people&apos;s lives) if the trailer
              separates from the tow vehicle. Yet many owners never test
              it, and many more attach it incorrectly.
            </p>
          <p>
              Here is how it works and how to use it properly:
            </p>
          <ol className="ml-6 list-decimal space-y-2">
            <li>
                The breakaway switch is a small plastic box mounted on the
                trailer tongue, typically near the battery. It contains a
                pin that completes a 12V circuit when inserted.
              </li>
            <li>
                A steel cable runs from the switch to a separate attachment
                point on the tow vehicle (NOT the trailer hitch, NOT the
                safety chain mounts).
              </li>
            <li>
                If the trailer separates, the cable pulls the pin out of
                the switch. The switch then sends 12V power from the
                trailer battery directly to the electric brakes.
              </li>
            <li>
                The trailer brakes engage at full power and bring the
                runaway trailer to a stop, usually within a few hundred
                feet.
              </li>
          </ol>
          <div className="rounded-xl border-l-4 border-danger-500 bg-danger-50 p-4">
            <p className="text-sm text-danger-700">
              <strong>Common mistake:</strong> attaching the breakaway
              cable to the safety chain mounts or to the trailer hitch
              itself. If the trailer separates, those parts separate with
              it. The cable must go to a fixed point on the tow vehicle
              frame, body, or bumper mount.
            </p>
          </div>
          <p>
              Test the breakaway switch before every trip. Pull the pin
              firmly; you should hear the trailer brakes engage (a hum or
              click from the brake magnets at each wheel). Push the pin
              back in to release. If the brakes do not engage, the
              switch, battery, or wiring is faulty. Do not tow until the
              problem is fixed.
            </p>
        </div>
      </section>

      {/* Seasonal considerations */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          Seasonal Pre-Trip Inspection Differences
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
              The basics never change, but each season adds specific items
              to your checklist:
            </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border-2 border-brand-200 bg-white p-5">
              <h3 className="font-semibold text-brand-700">
                Spring (First Trip of the Year)
              </h3>
              <ul className="mt-2 ml-4 list-disc space-y-1 text-sm">
                <li>De-winterize water system if applicable</li>
                <li>Check tire age (DOT date code on sidewall)</li>
                <li>Inspect roof seals and seams</li>
                <li>Test battery under load (capacity loss in cold)</li>
                <li>Replace propane tank if rust visible</li>
                <li>Check wheel bearings for moisture damage</li>
              </ul>
            </div>
            <div className="rounded-xl border-2 border-brand-200 bg-white p-5">
              <h3 className="font-semibold text-brand-700">
                Summer Heat
              </h3>
              <ul className="mt-2 ml-4 list-disc space-y-1 text-sm">
                <li>Increase tire pressure checks (heat expands air)</li>
                <li>Inspect A/C system before departure</li>
                <li>Check refrigerator on 120V and propane modes</li>
                <li>Verify awning fabric condition</li>
                <li>Inspect roof for storm damage</li>
              </ul>
            </div>
            <div className="rounded-xl border-2 border-brand-200 bg-white p-5">
              <h3 className="font-semibold text-brand-700">
                Fall
              </h3>
              <ul className="mt-2 ml-4 list-disc space-y-1 text-sm">
                <li>Check furnace operation</li>
                <li>Test heated tanks (if equipped)</li>
                <li>Inspect seals around windows and doors</li>
                <li>Verify battery capacity in cooler weather</li>
                <li>Pack emergency cold-weather gear</li>
              </ul>
            </div>
            <div className="rounded-xl border-2 border-brand-200 bg-white p-5">
              <h3 className="font-semibold text-brand-700">
                Winter
              </h3>
              <ul className="mt-2 ml-4 list-disc space-y-1 text-sm">
                <li>Winterize if storing in cold climate</li>
                <li>Check tire pressure (cold = low)</li>
                <li>Verify antifreeze concentration in systems</li>
                <li>Bring chains, shovel, emergency supplies</li>
                <li>Check for snow/ice on roof before departure</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-12 rounded-2xl bg-brand-600 p-8 text-center text-white">
        <h2 className="text-2xl font-bold">
          Build Your Pre-Trip Numbers First
        </h2>
        <p className="mt-2 text-brand-100">
          Before you walk around the trailer, know your tongue weight,
          payload, and tow rating. Our free calculators verify the math
          before the checklist.
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
            href="/towing-capacity-calculator"
            className="inline-block rounded-xl bg-white px-6 py-3 text-sm font-bold text-brand-700 shadow-lg transition-all hover:bg-brand-50 active:scale-[0.99]"
          >
            Towing Capacity Calculator
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
              href="/guides/spring-checklist"
              className="text-brand-600 hover:underline"
            >
              Spring Pre-Departure Checklist
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
              href="/checklist"
              className="text-brand-600 hover:underline"
            >
              Printable Safety Checklist (PDF)
            </Link>
          </li>
          <li>
            <Link
              href="/guides/travel-trailer-tire-safety"
              className="text-brand-600 hover:underline"
            >
              Travel Trailer Tire Safety Guide
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
              href="/guides/weight-distribution-hitch-setup"
              className="text-brand-600 hover:underline"
            >
              Weight Distribution Hitch Setup
            </Link>
          </li>
        </ul>
      </section>

      {/* External references */}
      <section className="mt-12 border-t border-gray-200 pt-8">
        <h2 className="text-lg font-bold text-gray-900">
          Sources &amp; References
        </h2>
        <ul className="mt-3 space-y-1 text-sm text-gray-500">
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
              href="https://www.fmcsa.dot.gov/safety/towing-safety"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 hover:underline"
            >
              FMCSA Towing Safety
            </a>{" "}
            &mdash; fmcsa.dot.gov
          </li>
          <li>
            <a
              href="https://www.etrailer.com/faq-pre-trip-inspection.aspx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 hover:underline"
            >
              etrailer Pre-Trip Inspection Guide
            </a>{" "}
            &mdash; etrailer.com
          </li>
          <li>
            <a
              href="https://www.goodsam.com/towing-safety/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 hover:underline"
            >
              Good Sam Towing Safety
            </a>{" "}
            &mdash; goodsam.com
          </li>
          <li>
            <a
              href="https://www.koa.com/blog/travel-trailer-pre-trip-inspection/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 hover:underline"
            >
              KOA Pre-Trip Inspection Guide
            </a>{" "}
            &mdash; koa.com
          </li>
        </ul>
      </section>
    </div>
  );
}