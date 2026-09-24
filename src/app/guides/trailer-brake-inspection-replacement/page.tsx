import type { Metadata } from "next";
import Link from "next/link";
import { FaqJsonLd, ArticleJsonLd, HowToJsonLd } from "@/components/seo/JsonLd";
import { DEFAULT_OG_IMAGES } from "@/lib/seo/default-og-image";

export const metadata: Metadata = {
  title: "How Long Do Trailer Brakes Last? Inspection & Replacement",
  description:
    "How long do trailer brakes last? Learn the 12,000-mile inspection interval, shoe, magnet and drum wear limits, and what a full brake replacement really costs.",
  alternates: {
    canonical:
      "https://www.rvtowingcalc.com/guides/trailer-brake-inspection-replacement",
  },
  openGraph: {
    title: "How Long Do Trailer Brakes Last? Inspection & Replacement",
    description:
      "The real service life of trailer brake shoes, magnets and drums, the wear limits that trigger replacement, the inspection procedure, and what an axle rebuild costs.",
    url: "https://www.rvtowingcalc.com/guides/trailer-brake-inspection-replacement",
    images: DEFAULT_OG_IMAGES,
  },
};

const FAQS = [
  {
    q: "How long do electric trailer brakes last?",
    a: "Plan on 12,000 to 15,000 miles for a set of electric brake shoes on a trailer that is not overloaded, and closer to 8,000 to 10,000 miles if you tow near GVWR, run mountain grades or do a lot of stop-and-go city driving. The magnet is usually the first part to fail because it is dragged against a spinning drum face every time you brake, so magnets on 12 inch electric brakes commonly need replacing between 8,000 and 12,000 miles. The drum, wiring and breakaway system age on a calendar clock rather than a mileage one, which is why an annual inspection matters even on a low-mileage trailer.",
  },
  {
    q: "How do I know when trailer brakes need replacing?",
    a: "The reliable test is measuring brake shoe lining thickness with the drum off: replace the shoes when the lining is at or below about 1/16 inch (roughly 1.5 mm) at its thinnest point, or when it is within about 1/8 inch of the rivets on a riveted shoe. Beyond measurement, the warning signs are a magnet that has worn through its friction face or lost its retaining clip, drums that are grooved or heat-cracked, a brake controller that has to be turned up progressively higher to get the same stopping force, and any wheel that runs noticeably hotter than its neighbour after a normal drive.",
  },
  {
    q: "Can I replace trailer brake shoes without replacing the drum?",
    a: "Yes, and that is the normal case. As long as the drum is still within its maximum inside diameter and is not deeply grooved or heat-cracked, it can be reused or machined once and reused. The maximum diameter is usually cast or stamped into the drum, typically 0.030 to 0.060 inch over the new specification. Past that limit the drum wall is too thin to shed heat safely. If you are replacing shoes on a drum that has already been turned once, or one that shows blue heat spots or cracks between the lug holes, replace the drum too rather than trying to save it.",
  },
  {
    q: "Should trailer brakes be replaced on both axles at once?",
    a: "Yes. Replace brake shoes as an axle set and, on a tandem trailer, ideally do all four wheels in the same service. Braking force that is uneven side to side will pull the trailer toward the stronger brake under hard braking, and on a tandem axle an axle with fresh shoes next to a worn axle will do more than its share of the work and overheat. If budget only allows one axle this time, do a complete axle and defer the other one deliberately rather than mixing new and worn shoes on opposite ends of the same axle.",
  },
  {
    q: "Do surge brakes need the same maintenance as electric brakes?",
    a: "They need less frequent shoe service but more frequent fluid service. Surge brakes have no magnet and no electric wiring, so two of the most common electric brake failures simply do not exist. In their place you have a coupler-mounted master cylinder, hydraulic lines and wheel cylinders. Brake fluid absorbs water over time, so flush it every two to three years, and inspect the wheel cylinders for weeping seals at the same time you check shoe thickness. The shoes themselves usually last longer than on an electric brake because surge actuation is more gradual.",
  },
];

const LIFESPAN_TABLE = [
  [
    "Light use, mostly highway, well under GVWR",
    "15,000 - 25,000 miles",
    "Shoes and magnets both reach the interval on condition, not mileage",
  ],
  [
    "Average use, occasional grades",
    "12,000 - 15,000 miles",
    "The baseline most manufacturers build their service advice around",
  ],
  [
    "Frequent towing or running near GVWR",
    "8,000 - 12,000 miles",
    "Every pound over the design load becomes heat in the drum",
  ],
  [
    "Mountain grades and long descents",
    "8,000 - 10,000 miles",
    "Heat is the killer; magnets cook and linings glaze",
  ],
  [
    "City, stop-and-go and delivery-style use",
    "8,000 - 12,000 miles",
    "Brake applications per mile matter more than miles",
  ],
  [
    "Coastal, salted roads or long-term storage",
    "Inspect yearly regardless",
    "Corrosion and seized adjusters, not wear, drive the replacement",
  ],
];

const WEAR_LIMIT_TABLE = [
  [
    "Brake shoe lining",
    "New: 3/16 - 1/4 in",
    "Replace at 1/16 in (about 1.5 mm), or 1/8 in from the rivets",
  ],
  [
    "Magnet friction face",
    "New: full flat face, clip intact",
    "Replace when the face is worn through, cupped, or the clip is loose",
  ],
  [
    "Brake drum inside diameter",
    "New spec stamped on the drum",
    "Machine once up to max ID (often +0.030 to +0.060 in), then discard",
  ],
  [
    "Drum surface condition",
    "Smooth, even, no heat marks",
    "Replace if grooved, cracked between lug holes, or blue from overheating",
  ],
  [
    "Shoe return springs and hold-downs",
    "Rated for one service life",
    "Replace with every shoe change - they are cheap and they fatigue",
  ],
  [
    "Adjuster (star wheel) and lever",
    "Free, self-adjusting",
    "Replace if seized, rusted solid, or if the lever is worn through",
  ],
  [
    "Breakaway switch and battery",
    "Battery should hold a charge",
    "Replace the battery yearly; test the switch by pulling the pin",
  ],
  [
    "Brake wiring and grounds",
    "Full voltage at the magnet",
    "Repair any circuit reading below about 11 volts under load",
  ],
];

const COST_TABLE = [
  [
    "Brake shoe and magnet kit, one wheel",
    "$35 - $80",
    "The common 10 in and 12 in self-adjusting assemblies",
  ],
  [
    "Complete backing plate assembly, one wheel",
    "$70 - $140",
    "Shoes, magnet, springs and adjuster pre-assembled - by far the fastest DIY route",
  ],
  [
    "Brake drum, one wheel",
    "$45 - $120",
    "Price depends on diameter and whether it is a hub-drum combination",
  ],
  [
    "Full axle rebuild, parts only (both wheels)",
    "$150 - $400",
    "Backing plate assemblies plus drums if required",
  ],
  [
    "Shop labour, one axle",
    "$150 - $350",
    "More if adjusters or drums are seized or rusted",
  ],
  [
    "Four-wheel DIY brake job, parts only",
    "$300 - $800",
    "Tandem axle, assemblies plus new hardware and seals",
  ],
  [
    "Brake fluid flush, surge brakes",
    "$90 - $180",
    "Every two to three years; often bundled with a bearing service",
  ],
  [
    "Cost of arriving with no trailer brakes",
    "Everything, plus liability",
    "Overweight and out-of-service combinations get a much harder conversation",
  ],
];

const TYPE_TABLE = [
  [
    "Actuation",
    "Electrical signal from the controller",
    "Hydraulic pressure from the coupler",
  ],
  [
    "Main wearing parts",
    "Shoes, magnet, springs, adjuster",
    "Shoes, wheel cylinders, seals",
  ],
  [
    "Typical shoe life",
    "12,000 - 15,000 miles",
    "Often longer, actuation is more gradual",
  ],
  [
    "Fluid service",
    "None",
    "Flush every 2 - 3 years",
  ],
  [
    "Breakaway protection",
    "Needs a charged battery and a working switch",
    "Mechanically self-actuating, no battery needed",
  ],
  [
    "Common failure",
    "Burnt or worn magnet, corroded wiring, bad ground",
    "Weeping wheel cylinder, water in the fluid, seized coupler",
  ],
  [
    "Controller adjustment",
    "Gain set per load, checked before each trip",
    "None - self-proportioning",
  ],
  [
    "Backing a gradient",
    "Holds the trailer, brake controller engaged",
    "Coupler compresses, brakes drag while reversing unless locked out",
  ],
];

const HOWTO_STEPS = [
  {
    name: "Chock the trailer and lift by the frame, never the axle",
    text: "Block the wheels on the opposite side, support the trailer frame on jack stands rated well above the load, then remove the wheel. Never jack or support a trailer under the axle tube or the spring pack, because you can bend the tube and throw out the alignment.",
  },
  {
    name: "Confirm the brakes are actually getting power",
    text: "Before pulling anything apart, test the circuit. With the trailer connected to the tow vehicle and the controller set, have a helper apply full manual override while you listen at each wheel for the magnet engaging. A wheel that makes no sound is an electrical fault, not a worn brake, and it needs fixing before you order parts.",
  },
  {
    name: "Pull the drum and measure the lining",
    text: "Remove the drum and measure the brake shoe lining thickness at its thinnest point with a ruler or a brake gauge. The replacement trigger is about 1/16 inch, or about 1/8 inch from the rivet heads on a riveted shoe. Also check that both shoes in the pair have worn evenly, since a big side-to-side difference points to a seized adjuster or a sticking cylinder.",
  },
  {
    name: "Inspect the magnet and its friction face",
    text: "On an electric brake, look at the magnet that sits against the drum face. The friction surface should be flat and intact, and the retaining clip should be tight. A face worn through to the coil, a cupped or chipped surface, or a magnet that falls out when you tilt the assembly all mean replacement. A worn magnet makes the brake weak and sluggish no matter how good the shoes are.",
  },
  {
    name: "Measure the drum and look for heat damage",
    text: "Measure the inside diameter with a drum gauge or an inside micrometer and compare it to the maximum diameter stamped or cast into the drum itself. Inspect the friction surface for deep grooves, blue heat spots and hairline cracks, especially between the lug holes and around the outer edge. Any crack is a discard, not a machining job.",
  },
  {
    name: "Check springs, hold-downs and the adjuster",
    text: "Shoe return springs, hold-down springs and retaining pins are one-service-life parts. Replace them every time you change shoes, because a stretched spring lets a shoe drag and overheats the assembly. Verify the star-wheel adjuster turns freely and that the self-adjusting lever is not worn through, and free up or replace anything seized.",
  },
  {
    name: "Verify the seal and bearing while you are in there",
    text: "The drum comes off the same spindle that carries the wheel bearing, so this is the moment to inspect the grease seal for weeping and the bearing for roughness and discoloration. Doing the bearing repack and the brake service in one session saves the whole job of pulling the hub twice and is how most shops price it anyway.",
  },
  {
    name: "Reassemble, then set the brake controller gain",
    text: "Reassemble with new hardware, refit the wheel and torque the lug nuts to the wheel manufacturer's figure. Then set the controller gain by the standard method: at about 20 to 25 mph on a dry surface, apply the manual override and increase gain until the wheels are just short of locking, then back off slightly. Recheck the setting every time the trailer load changes significantly.",
  },
  {
    name: "Re-torque the lug nuts after 25, 50 and 100 miles",
    text: "Freshly mounted wheels settle. Re-torque the lug nuts in a star pattern at 25, 50 and 100 miles, then check them again before any long trip. This single habit prevents the most common roadside failure after a brake and bearing service.",
  },
];

export default function TrailerBrakeInspectionReplacementPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <ArticleJsonLd
        title="How Long Do Trailer Brakes Last? Inspection & Replacement"
        description="Realistic trailer brake service life by use pattern, the lining, magnet and drum wear limits that trigger replacement, a nine-step inspection procedure, and what a full axle brake rebuild actually costs."
        url="https://www.rvtowingcalc.com/guides/trailer-brake-inspection-replacement"
        datePublished="2026-09-24"
      />
      <FaqJsonLd
        faqs={FAQS}
        baseUrl="https://www.rvtowingcalc.com/guides/trailer-brake-inspection-replacement"
      />
      <HowToJsonLd
        name="How to Inspect and Replace Travel Trailer Brakes"
        description="A step-by-step trailer brake inspection covering electrical testing, lining thickness measurement, magnet wear, drum diameter limits, springs and adjusters, bearing seals, controller gain setup and lug nut re-torque."
        url="https://www.rvtowingcalc.com/guides/trailer-brake-inspection-replacement"
        totalTime="PT3H"
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
        <span className="text-gray-900">Trailer Brakes</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
        How Long Do Trailer Brakes Last? Inspection and Replacement Guide
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        Trailer brakes are the only thing standing between seven thousand pounds
        of trailer and your truck&apos;s bumper, and they are the most neglected
        system on the average RV. The honest answer to how long trailer brakes
        last is that the shoes and the magnet wear out on a mileage clock while
        the drum, the wiring and the breakaway system age on a calendar clock.
        Wait for a symptom and you will usually discover all of it at once. This
        guide covers realistic service life, the wear limits that decide
        replacement, the inspection procedure, and what the job actually costs.
      </p>

      <div className="mt-8 rounded-xl bg-brand-50 p-6">
        <h2 className="text-lg font-bold text-brand-800">The Short Answer</h2>
        <p className="mt-2 text-brand-700">
          Expect <strong>12,000 to 15,000 miles</strong> from a set of electric
          trailer brake shoes on a trailer that is not overloaded, and closer to{" "}
          <strong>8,000 to 10,000 miles</strong> if you tow near GVWR or run
          mountain grades. The <strong>magnet</strong> usually goes first, often
          between 8,000 and 12,000 miles. Inspect at every wheel bearing service{" "}
          &mdash; <strong>12 months or 12,000 miles</strong> &mdash; and replace
          the shoes when the lining drops to about{" "}
          <strong>1/16 inch</strong>. Budget{" "}
          <strong>$150 to $400 per axle</strong> in parts to rebuild all four
          wheels yourself. Replace the whole axle set at once, never one wheel.
        </p>
      </div>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        What Actually Wears Out in a Trailer Brake
      </h2>
      <p className="mt-3 text-gray-700">
        A trailer brake is a simple machine with a short list of wear points,
        and knowing which one is failing tells you whether you are looking at a
        $40 part or a $400 job. Most travel trailers use electric drum brakes;
        smaller trailers and some boat trailers use surge brakes, which are
        hydraulically actuated and fail in a completely different way.
      </p>

      <h3 className="mt-6 text-xl font-semibold text-gray-900">
        The shoe lining is the consumable
      </h3>
      <p className="mt-2 text-gray-700">
        Every time the controller sends current to the brake, an electromagnet
        grabs the moving drum face and levers the brake shoes outward against
        the inside of the drum. The lining is what actually converts motion into
        heat, and it is designed to be consumed. New lining typically runs 3/16
        to 1/4 inch thick, and the replacement point is around 1/16 inch. What
        accelerates wear is not distance alone but heat: a trailer run close to
        its{" "}
        <Link href="/gvwr-calculator" className="text-brand-600 hover:underline">
          GVWR
        </Link>{" "}
        on a long descent can burn through lining in a fraction of the miles a
        lightly loaded trailer would need.
      </p>

      <h3 className="mt-6 text-xl font-semibold text-gray-900">
        The magnet wears faster than the shoes
      </h3>
      <p className="mt-2 text-gray-700">
        Here is the part most owners do not know to check. On an electric brake,
        the actuating magnet is dragged across the flat face of the spinning
        drum every single time you brake. It is a friction surface in its own
        right, and it wears. A magnet with a worn, cupped or chipped face still
        clicks and still makes the shoes move, so it passes a casual test while
        producing far less braking force than it should. This is the most
        common reason a controller has to be run at a higher gain than it used
        to &mdash; the brakes are not weak, the magnet is simply not grabbing.
      </p>

      <h3 className="mt-6 text-xl font-semibold text-gray-900">
        The drum has a hard limit, not a soft one
      </h3>
      <p className="mt-2 text-gray-700">
        Drums can normally be machined once and reused, and the maximum inside
        diameter is stamped or cast into the drum itself, usually 0.030 to 0.060
        inch over the new specification. Past that number the drum wall is too
        thin to shed heat, and a thin drum will fade and distort exactly when you
        need it most. Cracks between the lug holes, blue heat spots or deep
        grooves are all immediate discards. A machined-then-reused drum that has
        hit its limit is a replacement, not a judgement call.
      </p>

      <h3 className="mt-6 text-xl font-semibold text-gray-900">
        Surge brakes wear differently
      </h3>
      <p className="mt-2 text-gray-700">
        Surge brakes have no magnet and no wiring, so two of the most common
        electric brake failures do not exist. In their place sits a
        coupler-mounted master cylinder, hydraulic lines and wheel cylinders.
        Brake fluid absorbs moisture over time, so a flush every two to three
        years is the equivalent of the electric trailer&apos;s wiring check, and
        a weeping wheel cylinder seal is the failure to watch for. Shoe life is
        often longer because surge actuation ramps in more gradually than an
        electric brake at full gain.
      </p>

      <h3 className="mt-6 text-xl font-semibold text-gray-900">
        The parts nobody inspects until they fail
      </h3>
      <p className="mt-2 text-gray-700">
        Return springs, hold-down springs and retaining pins are rated for one
        service life and are almost never replaced on schedule. A stretched
        return spring lets a shoe drag against the drum, generating heat
        continuously and cooking a bearing on a long drive. The self-adjusting
        star wheel seizes with rust on a trailer that sits. And the{" "}
        <Link
          href="/guides/trailer-brake-controller-setup"
          className="text-brand-600 hover:underline"
        >
          breakaway system
        </Link>{" "}
        depends on a small battery most owners have never tested &mdash; a
        breakaway switch with a dead battery is legally present and
        functionally absent.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        How Long Trailer Brakes Actually Last
      </h2>
      <p className="mt-3 text-gray-700">
        There is no single mileage number, because brake life is a function of
        heat and brake applications rather than distance travelled. A trailer
        that lives on flat interstate runs will go far longer than an identical
        trailer doing mountain passes. Use these as planning baselines and
        shorten them for your own pattern.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">
                Use pattern
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Typical service life
              </th>
              <th className="border px-3 py-2 text-left font-semibold">Why</th>
            </tr>
          </thead>
          <tbody>
            {LIFESPAN_TABLE.map((row, i) => (
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
        Planning baselines drawn from general trailer and axle industry service
        guidance. Your axle manufacturer&apos;s published schedule governs,
        including these numbers.
      </p>

      <p className="mt-4 text-gray-700">
        Read that table alongside your towing geography. A trailer that is
        always under{" "}
        <Link
          href="/guides/travel-trailer-tire-safety"
          className="text-brand-600 hover:underline"
        >
          tire load limits
        </Link>{" "}
        and rarely sees a grade will comfortably beat the average, while a
        full-timer crossing the Rockies twice a year should treat the low end of
        each range as the real number.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        The Wear Limits That Decide Replacement
      </h2>
      <p className="mt-3 text-gray-700">
        Replacement should be a measurement decision, not a feeling. Print this
        and take it under the trailer with you.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">
                Component
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                New / in spec
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Replace when
              </th>
            </tr>
          </thead>
          <tbody>
            {WEAR_LIMIT_TABLE.map((row, i) => (
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
        Commonly published values across trailer axle and brake component
        makers, shown for orientation. Your axle manufacturer&apos;s service
        manual takes precedence over any generic table, including this one.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        How to Inspect Trailer Brakes Step by Step
      </h2>
      <p className="mt-3 text-gray-700">
        You need a jack and stands, a lug wrench, a drum gauge or inside
        micrometer, a ruler, a flashlight and a helper for the electrical test.
        Allow an afternoon for a first pass on a tandem axle, particularly if
        the drums have not been off in a few seasons.
      </p>

      <svg
        viewBox="0 0 680 250"
        width="100%"
        role="img"
        aria-label="Diagram of a trailer brake shoe showing the lining measurement points for new lining at three sixteenths of an inch and the replacement threshold at one sixteenth of an inch"
        className="mt-6 w-full rounded-xl border border-gray-200 bg-white"
      >
        <title>Measure lining thickness at the thinnest point</title>
        <rect x="0" y="0" width="680" height="250" fill="#ffffff" />

        <text
          x="24"
          y="30"
          fill="#111827"
          fontSize="15"
          fontWeight="700"
          fontFamily="system-ui, sans-serif"
        >
          The thinnest point is the number that counts
        </text>

        <text
          x="52"
          y="66"
          fill="#047857"
          fontSize="13"
          fontWeight="700"
          fontFamily="system-ui, sans-serif"
        >
          New lining
        </text>
        <rect
          x="52"
          y="78"
          width="200"
          height="26"
          fill="#a7f3d0"
          stroke="#047857"
          strokeWidth="2"
        />
        <rect
          x="52"
          y="104"
          width="200"
          height="16"
          fill="#6b7280"
          stroke="#374151"
          strokeWidth="2"
        />
        <line x1="276" y1="78" x2="276" y2="104" stroke="#047857" strokeWidth="3" />
        <text
          x="286"
          y="96"
          fill="#047857"
          fontSize="13"
          fontWeight="700"
          fontFamily="system-ui, sans-serif"
        >
          3/16 to 1/4 in
        </text>
        <text
          x="52"
          y="140"
          fill="#6b7280"
          fontSize="12"
          fontFamily="system-ui, sans-serif"
        >
          Lining bonded to the shoe backing. Loads of material to give.
        </text>

        <text
          x="396"
          y="66"
          fill="#b91c1c"
          fontSize="13"
          fontWeight="700"
          fontFamily="system-ui, sans-serif"
        >
          At the limit
        </text>
        <rect
          x="396"
          y="94"
          width="200"
          height="10"
          fill="#fecaca"
          stroke="#b91c1c"
          strokeWidth="2"
        />
        <rect
          x="396"
          y="104"
          width="200"
          height="16"
          fill="#6b7280"
          stroke="#374151"
          strokeWidth="2"
        />
        <line x1="620" y1="94" x2="620" y2="104" stroke="#b91c1c" strokeWidth="3" />
        <text
          x="470"
          y="140"
          fill="#b91c1c"
          fontSize="13"
          fontWeight="700"
          textAnchor="middle"
          fontFamily="system-ui, sans-serif"
        >
          Replace at 1/16 in
        </text>
        <text
          x="396"
          y="164"
          fill="#6b7280"
          fontSize="12"
          fontFamily="system-ui, sans-serif"
        >
          Heat has nowhere left to go. The next hard stop glazes it.
        </text>

        <line x1="24" y1="196" x2="656" y2="196" stroke="#e5e7eb" strokeWidth="1" />
        <text
          x="24"
          y="222"
          fill="#374151"
          fontSize="12"
          fontFamily="system-ui, sans-serif"
        >
          Measure every shoe, not one per axle. Uneven wear side to side points
          at a seized adjuster rather than ordinary mileage.
        </text>
      </svg>
      <p className="mt-3 text-sm text-gray-500">
        Illustrative only. Lining thickness and drum limits vary by brake
        assembly; measure your own components against the figures stamped on
        them.
      </p>

      <h3 className="mt-6 text-xl font-semibold text-gray-900">
        Test the electrical circuit before you open anything
      </h3>
      <p className="mt-2 text-gray-700">
        This is the step that saves the most wasted effort. With the trailer
        connected and the controller set, apply full manual override and listen
        at each wheel. A wheel where you hear nothing is an electrical problem
        &mdash; a broken wire, a bad ground, or a magnet that has failed
        outright &mdash; and no amount of shoe inspection will find it. Grounds
        are the usual culprit: trailer wiring grounds to the frame at a single
        bolt that rusts, and a marginal ground gives you brakes that work
        sometimes and not others.
      </p>

      <h3 className="mt-6 text-xl font-semibold text-gray-900">
        Do the bearings in the same session
      </h3>
      <p className="mt-2 text-gray-700">
        The drum sits on the same spindle as the wheel bearing, so removing it
        is already most of the labour for a{" "}
        <Link
          href="/guides/trailer-wheel-bearing-maintenance"
          className="text-brand-600 hover:underline"
        >
          bearing repack
        </Link>
        . Check the grease seal for weeping, spin the bearing for roughness and
        look for discoloration from heat. Shops price these as one job, and a
        DIY owner should treat them as one job too &mdash; pulling the hub twice
        in a season is a self-inflicted wound.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        When Adjustment Is Enough
      </h2>
      <p className="mt-3 text-gray-700">
        Drum brakes need to run with a small, correct clearance between shoe
        and drum. Too much clearance makes the brake feel wooden and forces you
        to raise the controller gain; too little makes the brake drag and
        overheat. Most trailer brakes are self-adjusting, using a star wheel
        that is turned by a lever when the brakes are applied in reverse or
        under an initial stop.
      </p>
      <p className="mt-3 text-gray-700">
        Self-adjusters only work if they can move. On a trailer that sits for
        months, the star wheel and the adjuster lever rust in place and stop
        taking up the slack, which is why a trailer can feel fine at the start
        of a season and vague by the end of it. During an inspection, confirm
        the adjuster turns and the lever is not worn. If the shoes still have
        plenty of lining and the assembly simply needs clearance set, that is a
        clean-up job, not a rebuild &mdash; but a seized adjuster replaced on a
        set of good shoes is far cheaper than discovering it by overheating the
        whole assembly.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        What Trailer Brake Replacement Costs
      </h2>
      <p className="mt-3 text-gray-700">
        The parts are not expensive. The labour and the seized hardware are what
        move the number, and pre-assembled backing plates are the reason a
        competent DIY owner can do this job with basic hand tools.
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
        Representative US ranges for planning. Axle capacity, drum diameter and
        how badly the hardware has seized all move these numbers.
      </p>

      <p className="mt-4 text-gray-700">
        One shortcut worth knowing: a complete backing plate assembly arrives
        with shoes, magnet, springs and adjuster already mounted on a new plate.
        You unbolt the old plate and bolt on the new one. It costs a little more
        than loose parts and saves the fiddliest hour of the job, which is
        exactly the hour where a return spring gets installed wrong.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Electric vs Surge Brakes: Service Differences
      </h2>
      <p className="mt-3 text-gray-700">
        The wear parts and the failure modes are different enough that the two
        systems should not be maintained on the same mental checklist.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold"></th>
              <th className="border px-3 py-2 text-left font-semibold">
                Electric brakes
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Surge brakes
              </th>
            </tr>
          </thead>
          <tbody>
            {TYPE_TABLE.map((row, i) => (
              <tr key={row[0]} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                <td className="border px-3 py-2 font-semibold">{row[0]}</td>
                <td className="border px-3 py-2">{row[1]}</td>
                <td className="border px-3 py-2 text-xs">{row[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-4 text-gray-700">
        Whichever system you have, the legal picture is worth checking before a
        long trip, because trailer brake requirements vary by state and by
        weight. Our{" "}
        <Link
          href="/guides/trailer-brake-laws-by-state"
          className="text-brand-600 hover:underline"
        >
          trailer brake laws by state
        </Link>{" "}
        guide covers the thresholds from 1,000 lb upward, and the electric
        trailer&apos;s breakaway requirement in particular.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Why Brake Service Matters More Than a Bearing Repack
      </h2>
      <p className="mt-3 text-gray-700">
        It is worth being blunt about the stakes. A loaded travel trailer has no
        engine braking of its own and, once the brakes are gone, contributes
        nothing but mass to the stopping equation. The tow vehicle&apos;s brakes
        are sized for the truck, not for the truck plus 7,000 lb, so a trailer
        with dead brakes roughly doubles the stopping distance of the
        combination &mdash; while pushing the truck sideways.
      </p>
      <p className="mt-3 text-gray-700">
        Trailer brakes also fail asymmetrically, which is what makes them
        dangerous: one weak wheel produces a pull the driver feels as the
        trailer steering the truck, usually during a hard stop. An overweight
        combination compounds all of it, because more mass means more heat and
        more fade. Confirm the load first with the{" "}
        <Link
          href="/towing-capacity-calculator"
          className="text-brand-600 hover:underline"
        >
          towing capacity calculator
        </Link>{" "}
        and the{" "}
        <Link href="/gvwr-calculator" className="text-brand-600 hover:underline">
          GVWR calculator
        </Link>
        , then make sure the brakes can arrest what you have chosen to tow.
      </p>

      <div className="mt-10 rounded-2xl bg-brand-600 p-8 text-center text-white">
        <h2 className="text-2xl font-bold">
          Make Sure the Trailer Can Stop Itself
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
            href="/towing-capacity-calculator"
            className="inline-block rounded-xl bg-white px-6 py-3 text-sm font-bold text-brand-700 shadow-lg transition-all hover:bg-brand-50 active:scale-[0.99]"
          >
            Towing Capacity Calculator
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
            Dexter Axle &mdash; electric brake service manuals, lining and drum
            wear limits, and published torque tables
          </a>
        </li>
        <li>
          <a
            href="https://www.lci1.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            Lippert Components &mdash; axle, brake and running gear component
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
            NHTSA &mdash; trailer equipment safety and tire guidance
          </a>
        </li>
        <li>
          <a
            href="https://www.rvia.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            RV Industry Association (RVIA) &mdash; RV maintenance and weight
            labelling standards
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
            running gear and braking education
          </a>
        </li>
        <li>
          <a
            href="https://www.fmcsa.dot.gov/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            FMCSA &mdash; brake performance and inspection standards for
            towed vehicles
          </a>
        </li>
      </ul>

      <div className="mt-10 rounded-xl border border-gray-200 bg-gray-50 p-6">
        <h3 className="font-bold text-gray-900">Related Guides</h3>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
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
              href="/guides/trailer-brake-laws-by-state"
              className="text-brand-600 hover:underline"
            >
              Trailer Brake Laws by State
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
              href="/guides/trailer-suspension-leaf-spring-inspection"
              className="text-brand-600 hover:underline"
            >
              Trailer Suspension &amp; Leaf Springs
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
            <Link
              href="/guides/travel-trailer-tire-safety"
              className="text-brand-600 hover:underline"
            >
              Travel Trailer Tire Safety
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
