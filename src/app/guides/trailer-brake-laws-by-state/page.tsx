import type { Metadata } from "next";
import Link from "next/link";
import { FaqJsonLd, ArticleJsonLd } from "@/components/seo/JsonLd";
import { DEFAULT_OG_IMAGES } from "@/lib/seo/default-og-image";

export const metadata: Metadata = {
  title:
    "Trailer Brake Laws by State: When Are Trailer Brakes Required?",
  description:
    "Trailer brake laws by state: the weight threshold at which trailer brakes become mandatory, electric vs surge brakes, breakaway requirements, and how to stay legal across state lines.",
  alternates: {
    canonical: "https://www.rvtowingcalc.com/guides/trailer-brake-laws-by-state",
  },
  openGraph: {
    title: "Trailer Brake Laws by State: When Are Trailer Brakes Required?",
    description:
      "The state-by-state trailer brake requirement at a glance: 1,000 lb, 1,500 lb, 3,000 lb, and 4,500 lb thresholds, plus which states use a stopping-distance rule.",
    url: "https://www.rvtowingcalc.com/guides/trailer-brake-laws-by-state",
    images: DEFAULT_OG_IMAGES,
  },
};

const FAQS = [
  {
    q: "At what weight are trailer brakes required?",
    a: "There is no single federal threshold for private recreational towing — each state sets its own. The most common threshold is 3,000 lbs gross trailer weight, but it ranges from 1,000 lbs (New York) to 4,500 lbs (Texas) to 15,000 lbs (Michigan). Two states (New Jersey and North Dakota) require trailer brakes regardless of weight, and six states use a stopping-distance test instead of a fixed number.",
  },
  {
    q: "Do I need trailer brakes if I'm just towing across state lines?",
    a: "Yes, and the rules follow the road you're on, not your registration. The safest approach is to comply with the strictest state on your planned route. If your home state allows 3,000 lbs but you pass through New York, which requires brakes at 1,000 lbs, you must have working brakes to be legal there.",
  },
  {
    q: "What is a breakaway system and when is it required?",
    a: "A breakaway system applies the trailer brakes automatically if the trailer separates from the tow vehicle, using a small battery. Once trailer brakes are required, almost every state also requires a breakaway system for heavier trailers. Even where it isn't strictly required, a breakaway switch is cheap insurance and is mandatory equipment on every RV sold through an RVIA dealer.",
  },
  {
    q: "What's the difference between electric and surge brakes?",
    a: "Electric brakes are activated by a brake controller in the cab and give you proportional, driver-controlled braking — the standard for RV trailers. Surge brakes are self-contained hydraulic brakes on the trailer tongue that activate from the trailer's momentum pushing against the hitch; they need no controller and are common on boat and rental trailers. Most states permit surge brakes for lighter trailers but require driver-controlled electric brakes above a certain weight.",
  },
  {
    q: "Can I legally tow a 3,500 lb travel trailer without trailer brakes?",
    a: "Not in most states. A 3,500 lb loaded travel trailer exceeds the 3,000 lb threshold that governs the majority of states, so you would need electric brakes, a working brake controller, and typically a breakaway system. Check the exact statute for the state you're towing in, but plan on brakes for any trailer over about 3,000 lbs.",
  },
];

const THRESHOLD_GROUPS = [
  {
    label: "Brakes always required",
    threshold: "No weight threshold",
    states: "New Jersey, North Dakota",
    note: "Trailer brakes required regardless of trailer weight.",
  },
  {
    label: "1,000 lbs",
    threshold: "Over 1,000 lbs",
    states: "New York",
    note: "Lowest fixed threshold in the country.",
  },
  {
    label: "1,500 lbs",
    threshold: "Over 1,500 lbs",
    states: "California, Idaho, Nevada",
    note: "Covers most loaded utility and boat trailers.",
  },
  {
    label: "2,000 lbs",
    threshold: "Over 2,000 lbs",
    states: "Mississippi",
    note: "Well below the typical travel-trailer loaded weight.",
  },
  {
    label: "3,000 lbs",
    threshold: "Over 3,000 lbs",
    states:
      "Alabama, Arizona, Arkansas, Colorado, Connecticut, Florida, Georgia, Hawaii, Illinois, Indiana, Iowa, Louisiana, Maine, Maryland, Minnesota, Missouri, Montana, Nebraska, New Mexico, Ohio, Oklahoma, Pennsylvania, South Carolina, South Dakota, Tennessee, Vermont, Virginia, Washington, West Virginia, Wisconsin",
    note: "The single most common threshold — 30 states.",
  },
  {
    label: "4,000 lbs",
    threshold: "Over 4,000 lbs",
    states: "Delaware, North Carolina, Rhode Island",
    note: "Above most small single-axle trailers.",
  },
  {
    label: "4,500 lbs",
    threshold: "Over 4,500 lbs",
    states: "Texas",
    note: "Common for larger boat and utility trailers.",
  },
  {
    label: "5,000 lbs",
    threshold: "Over 5,000 lbs",
    states: "Alaska",
    note: "Plus performance and stopping-distance requirements.",
  },
  {
    label: "10,000+ lbs",
    threshold: "Over 10,000 / 15,000 lbs",
    states: "Massachusetts (10,000), Michigan (15,000)",
    note: "Highest thresholds; most travel trailers still qualify for brakes on safety grounds.",
  },
  {
    label: "Stopping-distance rule",
    threshold: "No fixed weight",
    states: "Kansas, Kentucky, New Hampshire, Oregon, Utah, Wyoming",
    note: "Statute written as a stopping distance from a set speed (e.g., 30–50 ft at 20 mph) rather than a numeric weight.",
  },
];

const STATE_TABLE = [
  ["Alabama", "3,000 lbs"],
  ["Alaska", "5,000 lbs"],
  ["Arizona", "3,000 lbs"],
  ["Arkansas", "3,000 lbs"],
  ["California", "1,500 lbs"],
  ["Colorado", "3,000 lbs"],
  ["Connecticut", "3,000 lbs"],
  ["Delaware", "4,000 lbs"],
  ["Florida", "3,000 lbs"],
  ["Georgia", "3,000 lbs"],
  ["Hawaii", "3,000 lbs"],
  ["Idaho", "1,500 lbs"],
  ["Illinois", "3,000 lbs"],
  ["Indiana", "3,000 lbs"],
  ["Iowa", "3,000 lbs"],
  ["Kansas", "Stopping-distance"],
  ["Kentucky", "Stopping-distance"],
  ["Louisiana", "3,000 lbs"],
  ["Maine", "3,000 lbs"],
  ["Maryland", "3,000 lbs"],
  ["Massachusetts", "10,000 lbs"],
  ["Michigan", "15,000 lbs"],
  ["Minnesota", "3,000 lbs"],
  ["Mississippi", "2,000 lbs"],
  ["Missouri", "3,000 lbs"],
  ["Montana", "3,000 lbs"],
  ["Nebraska", "3,000 lbs"],
  ["Nevada", "1,500 lbs"],
  ["New Hampshire", "Stopping-distance"],
  ["New Jersey", "Always required"],
  ["New Mexico", "3,000 lbs"],
  ["New York", "1,000 lbs"],
  ["North Carolina", "4,000 lbs"],
  ["North Dakota", "Always required"],
  ["Ohio", "3,000 lbs"],
  ["Oklahoma", "3,000 lbs"],
  ["Oregon", "Stopping-distance"],
  ["Pennsylvania", "3,000 lbs"],
  ["Rhode Island", "4,000 lbs"],
  ["South Carolina", "3,000 lbs"],
  ["South Dakota", "3,000 lbs"],
  ["Tennessee", "3,000 lbs"],
  ["Texas", "4,500 lbs"],
  ["Utah", "Stopping-distance"],
  ["Vermont", "3,000 lbs"],
  ["Virginia", "3,000 lbs"],
  ["Washington", "3,000 lbs"],
  ["West Virginia", "3,000 lbs"],
  ["Wisconsin", "3,000 lbs"],
  ["Wyoming", "Stopping-distance"],
];

export default function TrailerBrakeLawsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <ArticleJsonLd
        title="Trailer Brake Laws by State: When Are Trailer Brakes Required?"
        description="A state-by-state guide to trailer brake requirements, the weight thresholds that trigger them, electric vs surge brakes, and breakaway systems."
        url="https://www.rvtowingcalc.com/guides/trailer-brake-laws-by-state"
        datePublished="2026-09-10"
      />
      <FaqJsonLd
        faqs={FAQS}
        baseUrl="https://www.rvtowingcalc.com/guides/trailer-brake-laws-by-state"
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
        <span className="text-gray-900">Trailer Brake Laws by State</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
        Trailer Brake Laws by State: When Are Trailer Brakes Required?
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        There is no single federal rule that tells you when a travel trailer
        needs brakes — that job is left to 50 different state statutes, and the
        thresholds range from 1,000 lbs all the way up to 15,000 lbs. If you
        tow across state lines, the strictest law on your route is the one that
        applies. Here is the full picture.
      </p>

      <div className="mt-8 rounded-xl bg-brand-50 p-6">
        <h2 className="text-lg font-bold text-brand-800">The Short Answer</h2>
        <p className="mt-2 text-brand-700">
          Plan on trailer brakes for any loaded trailer over about{" "}
          <strong>3,000 lbs</strong> — that is the single most common threshold
          and it governs 30 states. But the range is wide: New York requires
          them at 1,000 lbs, California, Idaho and Nevada at 1,500 lbs, and a
          few states (New Jersey, North Dakota) require brakes on every trailer
          regardless of weight. When in doubt, install working brakes and a
          breakaway system.
        </p>
      </div>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Federal Law vs. State Law
      </h2>
      <p className="mt-3 text-gray-700">
        For private recreational towing, brake requirements are a state matter.
        The federal brake equipment rules published by the{" "}
        <a
          href="https://www.fmcsa.dot.gov/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-600 hover:underline"
        >
          Federal Motor Carrier Safety Administration (FMCSA)
        </a>{" "}
        apply to commercial operations, not your family RV. That means the
        answer to &quot;do I need trailer brakes?&quot; changes the moment you
        cross a state line.
      </p>
      <p className="mt-3 text-gray-700">
        A useful rule of thumb: <strong>legal does not equal safe.</strong>{" "}
        Several states with high thresholds (like Michigan&apos;s 15,000 lbs)
        still leave you legally allowed to tow a trailer that far exceeds what
        your tow vehicle can safely stop. Every RV sold through an RVIA member
        dealer comes with trailer brakes as standard equipment regardless of
        state law — for good reason.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        The Thresholds at a Glance
      </h2>
      <p className="mt-3 text-gray-700">
        These numbers represent the loaded trailer weight at which brakes
        become legally required. Base your compliance on{" "}
        <strong>loaded</strong> weight, not the brochure dry weight — cargo,
        water, propane, and gear can push you over the line quickly.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">
                Threshold
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Trigger
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                States
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Note
              </th>
            </tr>
          </thead>
          <tbody>
            {THRESHOLD_GROUPS.map((row, i) => (
              <tr key={row.label} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                <td className="border px-3 py-2 font-semibold">{row.label}</td>
                <td className="border px-3 py-2">{row.threshold}</td>
                <td className="border px-3 py-2 text-xs">{row.states}</td>
                <td className="border px-3 py-2 text-xs">{row.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Full State-by-State Table
      </h2>
      <p className="mt-3 text-gray-700">
        A compact reference for all 50 states. &quot;Stopping-distance&quot;
        means the statute is written as a required stopping distance from a set
        speed rather than a numeric weight, and &quot;Always required&quot;
        means brakes are mandated on every trailer.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">
                State
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Brakes Required Over
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                State
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Brakes Required Over
              </th>
            </tr>
          </thead>
          <tbody>
            {(() => {
              const rows = [];
              for (let i = 0; i < STATE_TABLE.length; i += 2) {
                const left = STATE_TABLE[i];
                const right = STATE_TABLE[i + 1];
                rows.push(
                  <tr key={left[0]} className={i % 4 === 2 ? "bg-gray-50" : ""}>
                    <td className="border px-3 py-2 font-semibold">{left[0]}</td>
                    <td className="border px-3 py-2">{left[1]}</td>
                    <td className="border px-3 py-2 font-semibold">
                      {right ? right[0] : ""}
                    </td>
                    <td className="border px-3 py-2">{right ? right[1] : ""}</td>
                  </tr>,
                );
              }
              return rows;
            })()}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm text-gray-500">
        Source: RVIA Trailer Brake Requirements summary and state statutes.
        This table is informational, not legal advice — laws change and some
        states add performance, wheel, or breakaway conditions on top of the
        weight threshold. Verify your state&apos;s current statute before
        towing.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Electric vs. Surge Brakes
      </h2>
      <p className="mt-3 text-gray-700">
        Two systems dominate trailer braking, and the choice affects legality
        in some states.
      </p>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-gray-200 p-5">
          <h3 className="font-semibold text-gray-900">Electric Brakes</h3>
          <p className="mt-2 text-sm text-gray-700">
            Activated by a brake controller in the cab, giving proportional,
            driver-controlled braking. This is the standard for RV travel
            trailers. Requires a 7-way connector and a properly adjusted
            controller. See our{" "}
            <Link
              href="/guides/trailer-brake-controller-setup"
              className="text-brand-600 hover:underline"
            >
              brake controller setup guide
            </Link>
            .
          </p>
        </div>
        <div className="rounded-xl border border-gray-200 p-5">
          <h3 className="font-semibold text-gray-900">Surge Brakes</h3>
          <p className="mt-2 text-sm text-gray-700">
            Self-contained hydraulic brakes on the trailer tongue, activated by
            the trailer&apos;s momentum pushing against the hitch. No controller
            needed. Common on boat and rental trailers. Many states permit surge
            brakes for lighter trailers but require driver-controlled electric
            brakes above a certain weight.
          </p>
        </div>
      </div>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Breakaway Systems: The Law Most People Miss
      </h2>
      <p className="mt-3 text-gray-700">
        A breakaway system applies the trailer brakes automatically if the
        trailer separates from the tow vehicle, using a small onboard battery
        and a switch connected to the hitch by a cable. Once brakes are
        required, nearly every state also requires breakaway protection for
        heavier trailers — and it is standard equipment on every RVIA-built
        trailer. Even where it isn&apos;t mandated, a working breakaway switch
        costs under $50 and can prevent a runaway trailer.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        How to Stay Legal and Safe
      </h2>
      <ol className="mt-3 ml-6 list-decimal space-y-2 text-gray-700">
        <li>
          <strong>Weigh the loaded trailer.</strong> Use a{" "}
          <Link href="/guides/cat-scale-weighing" className="text-brand-600 hover:underline">
            CAT scale
          </Link>{" "}
          to get the real number, then compare it to the threshold of every
          state on your route.
        </li>
        <li>
          <strong>Comply with the strictest state.</strong> The law of the road
          you&apos;re on applies, not your registration state.
        </li>
        <li>
          <strong>Match brakes to your rig&apos;s weight.</strong> Verify your
          combined weight against your{" "}
          <Link href="/gcwr-calculator" className="text-brand-600 hover:underline">
            GCWR
          </Link>{" "}
          and make sure the trailer brakes are rated for the trailer, not the
          empty shell.
        </li>
        <li>
          <strong>Test before every trip.</strong> Confirm the controller gain,
          the breakaway battery charge, and that the brakes engage. Add it to
          your{" "}
          <Link href="/guides/travel-trailer-pre-trip-inspection" className="text-brand-600 hover:underline">
            pre-trip inspection
          </Link>
          .
        </li>
        <li>
          <strong>Check speed limits too.</strong> Brakes and{" "}
          <Link href="/guides/rv-towing-speed-limits" className="text-brand-600 hover:underline">
            towing speed limits
          </Link>{" "}
          go hand in hand — your ST tires and stopping distance cap your safe
          speed well below some posted limits.
        </li>
      </ol>

      <div className="mt-10 rounded-2xl bg-brand-600 p-8 text-center text-white">
        <h2 className="text-2xl font-bold">
          Know Your Rig&apos;s Real Numbers
        </h2>
        <p className="mt-2 text-brand-100">
          Trailer brakes only help if the rest of the rig is within its limits.
          Check the full setup in under two minutes.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link
            href="/gcwr-calculator"
            className="inline-block rounded-xl bg-white px-6 py-3 text-sm font-bold text-brand-700 shadow-lg transition-all hover:bg-brand-50 active:scale-[0.99]"
          >
            GCWR Calculator
          </Link>
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
        </div>
      </div>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Sources &amp; References
      </h2>
      <ul className="mt-3 space-y-1 text-sm text-gray-600">
        <li>
          <a
            href="https://www.rvia.org/system/files/media/file/Trailer%20Brake%20Requirements.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            RVIA — Trailer Brake Requirements (PDF)
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
            href="https://www.fmcsa.dot.gov/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            Federal Motor Carrier Safety Administration (FMCSA)
          </a>
        </li>
        <li>
          <a
            href="https://www.nhtsa.gov/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            National Highway Traffic Safety Administration (NHTSA)
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
              href="/guides/trailer-brake-controller-setup"
              className="text-brand-600 hover:underline"
            >
              Trailer Brake Controller Setup
            </Link>
          </li>
          <li>
            <Link
              href="/guides/rv-towing-speed-limits"
              className="text-brand-600 hover:underline"
            >
              RV Towing Speed Limits by State
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
              href="/guides/rv-trailer-sway-control"
              className="text-brand-600 hover:underline"
            >
              RV Trailer Sway Control
            </Link>
          </li>
          <li>
            <Link
              href="/guides/cdl-requirements-rv-towing"
              className="text-brand-600 hover:underline"
            >
              CDL Requirements for RV Towing
            </Link>
          </li>
          <li>
            <Link
              href="/guides/gvwr-vs-gcwr"
              className="text-brand-600 hover:underline"
            >
              GVWR vs GCWR
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
