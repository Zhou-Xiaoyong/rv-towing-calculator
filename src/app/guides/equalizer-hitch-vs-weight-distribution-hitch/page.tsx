import type { Metadata } from "next";
import Link from "next/link";
import { FaqJsonLd, ArticleJsonLd, HowToJsonLd } from "@/components/seo/JsonLd";
import { DEFAULT_OG_IMAGES } from "@/lib/seo/default-og-image";

export const metadata: Metadata = {
  title: "Equalizer Hitch vs Weight Distribution Hitch: Which to Buy",
  description:
    "Equalizer hitch vs weight distribution hitch: how the Equal-i-zer L-bracket design differs from a standard WDH, when the upgrade is worth it, and how to choose.",
  alternates: {
    canonical:
      "https://www.rvtowingcalc.com/guides/equalizer-hitch-vs-weight-distribution-hitch",
  },
  openGraph: {
    title: "Equalizer Hitch vs Weight Distribution Hitch: Which to Buy",
    description:
      "Integrated 4-point sway control versus chain-style bars and a bolt-on friction bar. What actually changes on the road, what it costs, and how to size the right one.",
    url: "https://www.rvtowingcalc.com/guides/equalizer-hitch-vs-weight-distribution-hitch",
    images: DEFAULT_OG_IMAGES,
  },
};

const FAQS = [
  {
    q: "Is an Equal-i-zer hitch the same thing as a weight distribution hitch?",
    a: "Not quite, and the confusion is understandable because Equal-i-zer has become a generic shorthand. Equal-i-zer is a brand name from Progress Manufacturing. A weight distribution hitch is the category, and every Equal-i-zer is a weight distribution hitch, but most weight distribution hitches are not Equal-i-zer-style hitches. The distinction that matters is how sway control is delivered: an integrated design like the Equal-i-zer uses friction between the spring bars and L-brackets bolted to the trailer frame, while a conventional WDH uses chains or trunnions for the bars and relies on a separate bolt-on friction sway control bar, if it has any sway control at all.",
  },
  {
    q: "Does a weight distribution hitch increase my towing capacity?",
    a: "No, and believing otherwise is one of the more expensive mistakes in RV towing. A weight distribution hitch redistributes load that is already there: it moves weight off your truck's rear axle and returns some of it to the front axle and to the trailer axles. It does not change your truck's GVWR, GCWR, rear GAWR, payload rating or tow rating by a single pound. What it can change is which limit you hit first. Many receivers are rated differently for weight carrying versus weight distributing, so a WDH may legitimately raise the hitch's own tongue weight limit, but the vehicle ratings stand.",
  },
  {
    q: "Do I need sway control with a weight distribution hitch?",
    a: "Above roughly 5,000 lb of loaded trailer weight, yes, in practice. Weight distribution alone controls the truck's attitude and keeps weight on the steering axle, but it does not damp the yaw motion that becomes trailer sway. A conventional chain-style WDH with no sway control is a legitimate setup for a small trailer, but on a larger one you are relying entirely on tongue weight percentage and tire pressure to stay out of trouble. Integrated 4-point systems and dual-cam systems built into the hitch head are meaningfully better than a single bolt-on friction bar, which is why they cost more.",
  },
  {
    q: "Can I use a weight distribution hitch with surge brakes?",
    a: "Usually not, and you should check before buying. A weight distribution hitch transmits load through the trailer A-frame, and more importantly the spring bars restrict the coupler's fore-and-aft movement. Surge brake couplers need to slide inward to build hydraulic pressure, and a hitch that clamps or limits that travel will compromise braking. Some surge couplers are explicitly not compatible with weight distribution, and the manufacturer will say so in the coupler documentation. If you have surge brakes and want weight distribution, this specific compatibility question comes before anything else.",
  },
  {
    q: "How long do weight distribution hitch spring bars last?",
    a: "The bars themselves are usually a long-life part and go for many seasons, but the consumables around them do not. The friction surfaces of an integrated design wear and eventually need replacement, the L-bracket pads and hardware need re-torquing, and the hitch head sockets wear over time. Expect to replace L-bracket pads and hardware every few seasons, and to inspect the bar sockets, the hitch ball and all fasteners at least annually. A hitch that has been on and off the truck for a decade deserves a full inspection rather than another adjustment.",
  },
];

const COMPARISON_TABLE = [
  [
    "How the bars engage",
    "Bars sit in the head and hang on chains you tension with snap-up brackets",
    "Bars ride directly on L-brackets bolted to the trailer A-frame",
  ],
  [
    "Sway control",
    "None built in; you bolt on a separate friction sway bar",
    "Built into the design, friction at four points",
  ],
  [
    "Points of friction",
    "One, if you fit a sway bar",
    "Four: two at the L-brackets, two in the head",
  ],
  [
    "Setup effort",
    "Head angle, chain link count, sway bar tension",
    "Head angle, L-bracket position, socket bolt torque",
  ],
  [
    "Adjustment on the road",
    "Change the chain link you snap up on",
    "Not adjustable without tools, set once and re-torqued",
  ],
  [
    "Noise",
    "Quieter until a friction bar is fitted, then groans in tight turns",
    "Audible groaning and popping in tight turns, normal by design",
  ],
  [
    "Best fit",
    "Light trailers, tight budgets, occasional towing",
    "Mid-weight to heavy travel trailers towed regularly",
  ],
  [
    "Typical price",
    "$250 - $500 plus $60 - $120 for a sway bar",
    "$550 - $900 for the hitch complete",
  ],
];

const SELECTION_TABLE = [
  [
    "Under 3,500 lb gross",
    "Weight distribution often not required by the vehicle",
    "Check your owner's manual first; a friction sway bar usually covers it",
  ],
  [
    "3,500 - 5,000 lb gross",
    "Often the threshold where WDH becomes mandatory",
    "Many manufacturers specify weight distribution above 5,000 lb trailer or 500 lb tongue",
  ],
  [
    "5,000 - 7,000 lb gross",
    "Conventional WDH with a friction sway bar, or integrated 4-point",
    "The crossover zone where integrated sway control starts earning its price",
  ],
  [
    "7,000 - 10,000 lb gross",
    "Integrated 4-point or dual-cam, sized by tongue weight",
    "This is where a single friction bar stops being adequate",
  ],
  [
    "Over 10,000 lb gross",
    "Heavy-duty integrated or premium projecting-cam hitch",
    "Confirm truck payload and rear GAWR before spending on the hitch",
  ],
  [
    "Any trailer with surge brakes",
    "Verify coupler compatibility before buying",
    "Weight distribution can interfere with coupler travel",
  ],
];

const COST_TABLE = [
  [
    "Chain-style WDH, round bars",
    "$250 - $500",
    "The budget entry point; no sway control included",
  ],
  [
    "Bolt-on friction sway control bar",
    "$60 - $120",
    "The cheapest way to add yaw damping to a basic WDH",
  ],
  [
    "Integrated 4-point WDH",
    "$550 - $900",
    "Sway control built into the bar and bracket geometry",
  ],
  [
    "Dual-cam style WDH",
    "$700 - $1,000",
    "Cam-and-bar sway control, popular on heavier travel trailers",
  ],
  [
    "Premium projecting-cam hitch",
    "$2,500 - $3,500",
    "Projects the pivot point forward; reserved for long, heavy trailers",
  ],
  [
    "Replacement L-bracket pads and hardware",
    "$40 - $90 per set",
    "Consumable on an integrated design; replace when worn",
  ],
  [
    "Shop installation and setup",
    "$150 - $400",
    "Worth paying for on a first rig; includes the load-based adjustment",
  ],
  [
    "Replacement hitch ball",
    "$25 - $70",
    "Match the ball to the coupler and torque the shank nut correctly",
  ],
];

const MISTAKE_TABLE = [
  [
    "Setting it up unladen, then never readjusting",
    "The bars are preloaded for the wrong tongue weight",
    "Set the head angle and chain or bracket position with the trailer loaded ready to camp",
  ],
  [
    "Treating the WDH as a rating upgrade",
    "The setup is run past GVWR or rear GAWR with confidence it does not deserve",
    "Recheck GVWR, GAWR and payload separately before every trip",
  ],
  [
    "Chains tensioned unevenly side to side",
    "The trailer is pulled off-centre and the front axle load is unequal",
    "Count the same number of chain links on both sides, every time",
  ],
  [
    "Snap-up brackets raised with a pry bar and no safety awareness",
    "Injury risk - the bar is under heavy load while you release it",
    "Keep hands clear, use the tool the maker supplies, and never stand over the bracket",
  ],
  [
    "Failing to re-torque brackets after the break-in miles",
    "L-brackets and socket bolts settle and loosen on new installations",
    "Re-torque after the first few hundred miles, then at every annual service",
  ],
  [
    "Mismatching bar rating to tongue weight",
    "Bars that are too heavy ride harsh; too light barely transfer anything",
    "Size the bar to the tongue weight range, not to the trailer's gross weight",
  ],
  [
    "Running a sway bar without a WDH on a big trailer",
    "Sway is damped slightly but the steering axle still unloads",
    "Sway control supplements weight distribution; it does not replace it",
  ],
  [
    "Greasing friction surfaces on a sway-control design",
    "The friction that provides sway damping is destroyed",
    "Grease only the points the maker says to grease - never the friction pads",
  ],
];

const HOWTO_STEPS = [
  {
    name: "Confirm the trailer is loaded before you set anything",
    text: "Weight distribution is a load balancing exercise, so it has to be done at the trailer's real travel weight. Fill the fresh water tank if you travel with it full, load the gear you normally carry, and hitch up on level ground. A hitch set with an empty trailer will be wrong the entire season, because tongue weight changes as soon as the trailer is loaded.",
  },
  {
    name: "Take a baseline height measurement at the front and rear",
    text: "With the unhitched truck sitting on level ground, measure from the top of the front and rear wheel arches down to the pavement, or from a fixed point on the frame to the ground. Write both numbers down. These baselines are what tell you whether the hitch is doing its job after you load the bars, and they are the only reliable way to set an integrated hitch correctly.",
  },
  {
    name: "Hitch up and measure the loaded, bars-off condition",
    text: "Couple the trailer, raise the tongue jack so the truck carries the full tongue weight, then measure the same two points again. The rear will drop noticeably and the front will rise. That rise at the front axle is the problem weight distribution exists to solve - it is removed steering weight, and it is why the truck feels light and wanders.",
  },
  {
    name: "Set the hitch head angle first",
    text: "Head angle is the primary adjustment and it should be set before you touch bar tension. Adding tilt to the head increases the load the bars carry, and reducing tilt decreases it. Integrated hitches use a specific number of toothed washers or shims under the head; conventional hitches use tilt bolts. Follow your maker's stated starting position and adjust from there, because the correct angle is what makes the rest of the adjustments small.",
  },
  {
    name: "Engage the bars and restore the front height",
    text: "Load the spring bars using the maker's procedure. On a chain-style hitch, that means counting the same number of links on both sides. On an integrated design, it means positioning the bars on the L-brackets. Then measure the front wheel arch again. The standard target is to return the front height to its unloaded baseline, or close to it, and the truck and trailer should both sit visually level rather than nose-high.",
  },
  {
    name: "Check that the trailer is riding level, not nose-down",
    text: "A weight distribution hitch can lift or drop the trailer's attitude depending on head angle and bar position, and a trailer that tows nose-down or nose-up handles worse and loads its axles unevenly. Measure the trailer frame front and rear and adjust the ball height or the head as needed. Both vehicles should be level within roughly an inch.",
  },
  {
    name: "Set the L-bracket position for the sway-control friction",
    text: "On an integrated design, the L-brackets bolted to the trailer A-frame are what the bars ride on, and their position sets both the friction and the articulation available. Move them per the maker's instructions so the bars sit correctly on the brackets with the trailer hitched and loaded. Confirm the brackets cannot contact the trailer frame or the propane tray through the full steering range.",
  },
  {
    name: "Torque every fastener, then re-torque after the break-in miles",
    text: "Torque the hitch ball shank nut, the head bolts, the L-bracket hardware and the bar socket bolts to the figures the hitch manufacturer publishes for your model. New installations settle, so re-torque after the first few hundred miles of towing and again at each annual service. A hitch that has quietly loosened still tows, which is exactly what makes it dangerous.",
  },
  {
    name: "Test the setup on a quiet road before trusting it",
    text: "Take the loaded combination to an empty stretch of road and drive at increasing speed. Accelerate firmly and check for front-end lightness, brake hard from about 40 mph and confirm the combination stays straight, then pass a large vehicle at highway speed and watch for any yaw that does not settle immediately. Any sway that builds rather than damping means the setup or the trailer loading is wrong, and it needs fixing before the next trip.",
  },
];

export default function EqualizerHitchVsWeightDistributionHitchPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <ArticleJsonLd
        title="Equalizer Hitch vs Weight Distribution Hitch: Which to Buy"
        description="How integrated 4-point sway control differs from a conventional chain-style weight distribution hitch, which trailer weights justify the upgrade, how to size the bars, what each setup costs, and the eight setup mistakes that cause sway."
        url="https://www.rvtowingcalc.com/guides/equalizer-hitch-vs-weight-distribution-hitch"
        datePublished="2026-09-24"
      />
      <FaqJsonLd
        faqs={FAQS}
        baseUrl="https://www.rvtowingcalc.com/guides/equalizer-hitch-vs-weight-distribution-hitch"
      />
      <HowToJsonLd
        name="How to Set Up a Weight Distribution Hitch With Sway Control"
        description="A step-by-step weight distribution hitch setup covering baseline height measurement, loaded measurements, hitch head angle, spring bar engagement, trailer attitude, L-bracket positioning, fastener torque and a road test."
        url="https://www.rvtowingcalc.com/guides/equalizer-hitch-vs-weight-distribution-hitch"
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
        <span className="text-gray-900">Hitch Types</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
        Equalizer Hitch vs Weight Distribution Hitch: Which Do You Need?
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        This comparison gets muddled because Equal-i-zer has turned into
        shorthand for a whole category. Every Equal-i-zer is a weight
        distribution hitch, but most weight distribution hitches are not
        Equal-i-zer-style hitches, and that difference decides how your trailer
        behaves at 65 mph. The real question is not the brand &mdash; it is
        whether sway control is built into the hitch geometry or bolted on
        afterwards. This guide explains what changes on the road, which trailer
        weights justify the upgrade, how to size the bars, and the setup
        mistakes that undo a good hitch.
      </p>

      <div className="mt-8 rounded-xl bg-brand-50 p-6">
        <h2 className="text-lg font-bold text-brand-800">The Short Answer</h2>
        <p className="mt-2 text-brand-700">
          A <strong>conventional weight distribution hitch</strong> uses spring
          bars on chains and has <strong>no sway control</strong> unless you
          bolt on a separate friction bar. An{" "}
          <strong>integrated 4-point design</strong> like the Equal-i-zer makes
          the bars ride on L-brackets on the trailer frame, creating friction at{" "}
          <strong>four points</strong> and damping sway as a built-in function.
          Below about <strong>5,000 lb</strong> gross trailer weight a
          conventional hitch with a friction bar is a legitimate choice. Above{" "}
          <strong>7,000 lb</strong>, integrated or dual-cam sway control earns
          its price. Neither type{" "}
          <strong>raises a single one of your truck&apos;s ratings</strong>.
        </p>
      </div>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        What a Weight Distribution Hitch Is Actually Doing
      </h2>
      <p className="mt-3 text-gray-700">
        Start with the problem, because it explains why the two designs diverge.
        A travel trailer puts its tongue weight on a ball mounted well behind
        your truck&apos;s rear axle. That is a lever, and the longer the lever
        and the heavier the load, the more it lifts the front of the truck.
      </p>

      <h3 className="mt-6 text-xl font-semibold text-gray-900">
        The leverage problem
      </h3>
      <p className="mt-2 text-gray-700">
        Drop 800 lb of tongue weight onto a hitch ball four feet behind the rear
        axle and you have not just added 800 lb to the rear axle &mdash; you have
        applied a rotational force that unloads the front axle. That is why a
        heavily loaded half-ton feels vague and wanders: the steering wheels
        have less grip than they did before you hitched up. The rear axle is
        simultaneously overloaded and the front axle is starved, and both
        conditions are real safety problems.
      </p>

      <h3 className="mt-6 text-xl font-semibold text-gray-900">
        What the spring bars change
      </h3>
      <p className="mt-2 text-gray-700">
        Weight distribution bars are levers in the opposite direction. They
        connect the hitch head to the trailer&apos;s A-frame and, once tensioned,
        they push down on the A-frame while lifting the hitch head. The effect
        is to return load to the front axle and to shift some onto the trailer
        axles. Front-end steering feel comes back, the truck stops squatting, and
        the whole combination sits level.
      </p>

      <h3 className="mt-6 text-xl font-semibold text-gray-900">
        What it cannot do
      </h3>
      <p className="mt-2 text-gray-700">
        This is the part that gets oversold. Weight distribution moves load; it
        does not delete it. Your{" "}
        <Link href="/gvwr-calculator" className="text-brand-600 hover:underline">
          GVWR
        </Link>
        , rear{" "}
        <Link href="/guides/gawr-explained" className="text-brand-600 hover:underline">
          GAWR
        </Link>
        ,{" "}
        <Link href="/guides/payload-capacity" className="text-brand-600 hover:underline">
          payload
        </Link>{" "}
        and tow rating are all unchanged. The one rating that genuinely can
        change is the receiver hitch&apos;s own limit, because most receivers
        publish separate weight-carrying and weight-distributing figures &mdash;
        a hitch might be rated 500 lb tongue weight carrying and considerably
        more with weight distribution. That is a component rating, not a vehicle
        rating, and confusing the two is how people end up overweight with total
        confidence.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Where the Two Designs Actually Diverge
      </h2>
      <p className="mt-3 text-gray-700">
        Both types distribute weight. The difference is entirely in how they
        handle the yaw motion that becomes trailer sway, and how much of that
        work is designed in rather than added on.
      </p>

      <svg
        viewBox="0 0 680 280"
        width="100%"
        role="img"
        aria-label="Diagram showing tongue weight unloading the front axle and weight distribution spring bars returning load to the front axle and trailer axles"
        className="mt-6 w-full rounded-xl border border-gray-200 bg-white"
      >
        <title>What the spring bars change on the front axle</title>
        <rect x="0" y="0" width="680" height="280" fill="#ffffff" />

        <text
          x="24"
          y="30"
          fill="#111827"
          fontSize="15"
          fontWeight="700"
          fontFamily="system-ui, sans-serif"
        >
          Tongue weight is a lever on the front axle
        </text>

        <text
          x="40"
          y="60"
          fill="#b91c1c"
          fontSize="13"
          fontWeight="700"
          fontFamily="system-ui, sans-serif"
        >
          Without weight distribution
        </text>

        <line x1="40" y1="110" x2="330" y2="110" stroke="#374151" strokeWidth="4" />
        <circle cx="80" cy="110" r="14" fill="#ffffff" stroke="#374151" strokeWidth="3" />
        <circle cx="290" cy="110" r="14" fill="#ffffff" stroke="#374151" strokeWidth="3" />
        <path d="M290 96 v-34" stroke="#b91c1c" strokeWidth="3" />
        <path d="M283 62 l7 -12 l7 12 z" fill="#b91c1c" />
        <text
          x="262"
          y="46"
          fill="#b91c1c"
          fontSize="11"
          fontFamily="system-ui, sans-serif"
        >
          rear squats
        </text>
        <path d="M80 96 v34" stroke="#b91c1c" strokeWidth="3" />
        <path d="M73 130 l7 12 l7 -12 z" fill="#b91c1c" />
        <text
          x="44"
          y="160"
          fill="#b91c1c"
          fontSize="11"
          fontFamily="system-ui, sans-serif"
        >
          front lifts
        </text>
        <text
          x="40"
          y="188"
          fill="#6b7280"
          fontSize="12"
          fontFamily="system-ui, sans-serif"
        >
          Steering axle loses grip. The truck wanders.
        </text>

        <text
          x="386"
          y="60"
          fill="#047857"
          fontSize="13"
          fontWeight="700"
          fontFamily="system-ui, sans-serif"
        >
          With weight distribution
        </text>

        <line x1="386" y1="120" x2="656" y2="120" stroke="#374151" strokeWidth="4" />
        <circle cx="420" cy="120" r="14" fill="#ffffff" stroke="#374151" strokeWidth="3" />
        <circle cx="620" cy="120" r="14" fill="#ffffff" stroke="#374151" strokeWidth="3" />
        <path d="M420 106 v-18" stroke="#047857" strokeWidth="3" />
        <path d="M413 88 l7 -12 l7 12 z" fill="#047857" />
        <text
          x="392"
          y="66"
          fill="#047857"
          fontSize="11"
          fontFamily="system-ui, sans-serif"
        >
          load returned
        </text>
        <path d="M620 134 v18" stroke="#047857" strokeWidth="3" />
        <path d="M613 152 l7 12 l7 -12 z" fill="#047857" />
        <text
          x="600"
          y="180"
          fill="#047857"
          fontSize="11"
          fontFamily="system-ui, sans-serif"
        >
          less squat
        </text>
        <text
          x="386"
          y="204"
          fill="#6b7280"
          fontSize="12"
          fontFamily="system-ui, sans-serif"
        >
          Bars lever against the A-frame and restore the balance.
        </text>

        <line x1="24" y1="230" x2="656" y2="230" stroke="#e5e7eb" strokeWidth="1" />
        <text
          x="24"
          y="256"
          fill="#374151"
          fontSize="12"
          fontFamily="system-ui, sans-serif"
        >
          Weight distribution moves load between axles. It never raises GVWR,
          GAWR or payload.
        </text>
      </svg>
      <p className="mt-3 text-sm text-gray-500">
        Illustrative only. The exact load transferred depends on ball-to-axle
        distance, bar rating and head angle on your own combination.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Integrated Sway Control vs a Bolt-On Bar
      </h2>
      <p className="mt-3 text-gray-700">
        A single bolt-on friction sway bar gives you one friction surface and one
        direction of correction. It helps, and on a light trailer it helps
        enough. It is also a device you have to set, remember to loosen before
        reversing, and can only fit on one side of the tongue in most cases.
      </p>
      <p className="mt-3 text-gray-700">
        An integrated design spreads the work across four friction points: two
        where the bars load against the L-brackets and two inside the hitch head
        sockets where the bars pivot. Because the damping is present on both
        sides of the tongue and resists yaw in both directions, it acts earlier
        and more symmetrically than a single bar. You pay for that with price,
        with noise &mdash; these hitches groan and pop in tight turns, and that
        is normal &mdash; and with a setup that has to be right, because there is
        no quick chain-link adjustment to paper over a bad head angle.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold"></th>
              <th className="border px-3 py-2 text-left font-semibold">
                Conventional chain-style WDH
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Integrated 4-point design
              </th>
            </tr>
          </thead>
          <tbody>
            {COMPARISON_TABLE.map((row, i) => (
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
        Sizing It to Your Trailer Weight
      </h2>
      <p className="mt-3 text-gray-700">
        Match the hitch type to your loaded trailer weight, then match the spring
        bars to your tongue weight. Those are two separate decisions, and getting
        the second one wrong is common: bars are rated by tongue weight, not by
        how big the trailer looks.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">
                Loaded trailer weight
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Typical recommendation
              </th>
              <th className="border px-3 py-2 text-left font-semibold">Note</th>
            </tr>
          </thead>
          <tbody>
            {SELECTION_TABLE.map((row, i) => (
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
        General guidance for orientation. Your trailer manufacturer, the coupler
        maker and your tow vehicle&apos;s owner manual all publish requirements
        that override this table.
      </p>

      <p className="mt-4 text-gray-700">
        Before choosing a hitch, know your actual tongue weight rather than
        guessing from the brochure dry figure. Our guide to{" "}
        <Link
          href="/guides/calculate-tongue-weight-travel-trailer"
          className="text-brand-600 hover:underline"
        >
          calculating tongue weight for a travel trailer
        </Link>{" "}
        covers four measurement methods, and the{" "}
        <Link
          href="/tongue-weight-calculator"
          className="text-brand-600 hover:underline"
        >
          tongue weight calculator
        </Link>{" "}
        will tell you whether you are inside the 10 to 15 percent range that
        keeps a trailer stable.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        How to Set It Up So It Actually Works
      </h2>
      <p className="mt-3 text-gray-700">
        A correctly chosen hitch that is set up wrong tows worse than a cheap one
        set up right. The whole procedure comes down to measurement: you are
        comparing wheel arch heights before and after to prove the bars are
        doing their job.
      </p>
      <p className="mt-3 text-gray-700">
        Set the head angle before you touch bar tension, and do all of it with
        the trailer loaded as you actually travel. Then torque everything to the
        hitch maker&apos;s figures for your model and re-torque after the first
        few hundred miles, because new installations settle.
      </p>

      <p className="mt-4 text-gray-700">
        For the conventional hitch procedure in full, including the measurement
        worksheet and the chain-link counting method, see our{" "}
        <Link
          href="/guides/weight-distribution-hitch-setup"
          className="text-brand-600 hover:underline"
        >
          weight distribution hitch setup guide
        </Link>
        .
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        The Setup Mistakes That Cause Sway
      </h2>
      <p className="mt-3 text-gray-700">
        Almost every &quot;this hitch does not work&quot; story traces back to
        one of these, and most of them are free to fix.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">
                Mistake
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                What it causes
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Fix
              </th>
            </tr>
          </thead>
          <tbody>
            {MISTAKE_TABLE.map((row, i) => (
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
        What Each Option Costs
      </h2>
      <p className="mt-3 text-gray-700">
        The price gap between a basic setup and an integrated one is real, but
        put it next to the cost of a trailer. The hitch is the component that
        decides whether the whole combination is stable at speed.
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
        Representative US retail ranges for planning, excluding tax and freight.
        Bar rating, ball size and truck-specific mounts move these numbers.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        What No Hitch Will Fix
      </h2>
      <p className="mt-3 text-gray-700">
        A weight distribution hitch is one of the few towing upgrades that
        genuinely delivers what it promises, which is exactly why it gets
        credited with things it cannot do. It will not rescue an overloaded
        truck. It will not fix a trailer that is loaded tail-heavy. And it will
        not compensate for tires that are under-inflated or a receiver that is
        rated below your trailer.
      </p>
      <p className="mt-3 text-gray-700">
        Two failures are worth naming directly. If your tongue weight is below
        about 10 percent of the loaded trailer weight, no amount of sway control
        will make the trailer track properly &mdash; the{" "}
        <Link
          href="/guides/trailer-loading-position"
          className="text-brand-600 hover:underline"
        >
          cargo position
        </Link>{" "}
        has to be corrected first. And if your rear axle is over its{" "}
        <Link href="/guides/gawr-explained" className="text-brand-600 hover:underline">
          GAWR
        </Link>
        , weight distribution can move load off the rear axle but cannot move
        enough of it, because you are limited by what the front axle and the
        trailer axles can legally absorb. Run the numbers on the{" "}
        <Link
          href="/payload-calculator"
          className="text-brand-600 hover:underline"
        >
          payload calculator
        </Link>{" "}
        before you spend money on a hitch and find out the truck was the problem.
      </p>
      <p className="mt-3 text-gray-700">
        Finally, if you are still deciding between this and a fifth wheel setup,
        the trade-off is structural rather than cosmetic: a{" "}
        <Link
          href="/guides/fifth-wheel-vs-travel-trailer"
          className="text-brand-600 hover:underline"
        >
          fifth wheel
        </Link>{" "}
        puts its pin weight directly over the rear axle and needs no weight
        distribution at all, at the cost of a much heavier pin load and a lot
        more truck.
      </p>

      <div className="mt-10 rounded-2xl bg-brand-600 p-8 text-center text-white">
        <h2 className="text-2xl font-bold">
          Size the Hitch to Numbers, Not to Feel
        </h2>
        <p className="mt-2 text-brand-100">
          Check your tongue weight, payload and axle limits in under two
          minutes. Free, independent, no sign-up.
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
            href="https://www.equalizerhitch.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            Progress Manufacturing (Equal-i-zer) &mdash; product documentation,
            setup instructions and published torque figures
          </a>
        </li>
        <li>
          <a
            href="https://www.reeseprod.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            Reese &mdash; receiver class ratings and weight carrying versus
            weight distributing limits
          </a>
        </li>
        <li>
          <a
            href="https://www.curtmfg.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            CURT Manufacturing &mdash; hitch and towing accessory fitment and
            capacity documentation
          </a>
        </li>
        <li>
          <a
            href="https://www.nhtsa.gov/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            NHTSA &mdash; trailer towing safety and equipment guidance
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
            weight distribution and hitch setup education
          </a>
        </li>
        <li>
          <a
            href="https://www.rvia.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            RV Industry Association (RVIA) &mdash; industry towing and weight
            standards
          </a>
        </li>
      </ul>

      <div className="mt-10 rounded-xl border border-gray-200 bg-gray-50 p-6">
        <h3 className="font-bold text-gray-900">Related Guides</h3>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          <li>
            <Link
              href="/guides/weight-distribution-hitch-setup"
              className="text-brand-600 hover:underline"
            >
              Weight Distribution Hitch Setup
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
              href="/guides/trailer-hitch-classes-explained"
              className="text-brand-600 hover:underline"
            >
              Trailer Hitch Classes Explained
            </Link>
          </li>
          <li>
            <Link
              href="/guides/hitch-ball-selection-guide"
              className="text-brand-600 hover:underline"
            >
              Hitch Ball Selection Guide
            </Link>
          </li>
          <li>
            <Link
              href="/guides/calculate-tongue-weight-travel-trailer"
              className="text-brand-600 hover:underline"
            >
              How to Calculate Tongue Weight
            </Link>
          </li>
          <li>
            <Link
              href="/guides/trailer-length-vs-wheelbase-rule"
              className="text-brand-600 hover:underline"
            >
              Trailer Length vs Wheelbase Rule
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
