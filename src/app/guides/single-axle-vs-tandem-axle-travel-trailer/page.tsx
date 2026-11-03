import type { Metadata } from "next";
import Link from "next/link";
import { FaqJsonLd, ArticleJsonLd } from "@/components/seo/JsonLd";
import { DEFAULT_OG_IMAGES } from "@/lib/seo/default-og-image";

import AmazonAffiliate from "@/components/AmazonAffiliate";

export const metadata: Metadata = {
  title: "Single Axle vs Tandem Axle Travel Trailer: The Tire Math",
  description:
    "Single axle vs tandem axle: a 3,500 lb single puts 1,540 lb on each tire, and a 7,000 lb tandem puts the same on four. The reserve math, and the trade-off.",
  keywords: [
    "single axle vs tandem axle travel trailer",
    "single axle trailer vs double axle",
    "how much can a single axle trailer carry",
    "tandem axle trailer advantages",
    "travel trailer axle load per tire",
    "single axle trailer blowout",
    "st205/75r14 load range c",
    "do i need a tandem axle camper",
  ],
  alternates: {
    canonical:
      "https://www.rvtowingcalc.com/guides/single-axle-vs-tandem-axle-travel-trailer",
  },
  openGraph: {
    title: "Single Axle vs Tandem Axle Travel Trailer: The Tire Math",
    description:
      "A 3,500 lb single axle camper puts 1,540 lb on each tire. A 7,000 lb tandem puts the identical load on four. Axle count is a reserve decision, not a capacity one.",
    url: "https://www.rvtowingcalc.com/guides/single-axle-vs-tandem-axle-travel-trailer",
    images: DEFAULT_OG_IMAGES,
  },
};

const FAQS = [
  {
    q: "Is a tandem axle trailer safer than a single axle?",
    a: "It is more forgiving, which is a different word. Four tires at 61 percent of their rating have room for a slow leak, a hot afternoon, and a load that drifted to one side. Two tires at 88 percent of their rating have room for none of those. A tandem also keeps rolling on the partner tire after a blowout, while a single axle puts the brake drum on the pavement and pivots. None of that makes a single axle unsafe. It makes it a configuration you have to keep honest.",
  },
  {
    q: "How much tongue weight should a single axle trailer have?",
    a: "Target 12 to 13 percent of loaded weight rather than the bottom of the 10 to 15 percent band. A single axle has half the tire contact patch resisting lateral force that a tandem does, so it is quicker to start a sway cycle and slower to recover from one. A 3,000 lb loaded single axle wants 360 to 390 lb on the ball. Weigh it rather than trusting the brochure, because that number moves every time you relocate a cooler.",
  },
  {
    q: "Can a half-ton truck tow a tandem axle trailer?",
    a: "Regularly, and the truck is usually not the limit. A 7,000 lb tandem puts about 840 lb of tongue weight on the hitch at 12 percent, which most half-ton payload stickers absorb once passengers are subtracted. The constraint that bites first is rear axle rating, especially on a crew cab with a short bed and a full tank. Run the tongue weight through the payload calculator before you sign, and confirm the receiver is rated for the weight-carrying or weight-distributing load you plan to use.",
  },
  {
    q: "Do tandem axle trailers need a weight distribution hitch?",
    a: "Not always, and the trailer axle count is not what decides it. The trigger is the tongue weight against the receiver rating and the truck rear axle. A 5,000 lb tandem with 600 lb of tongue weight on a half-ton is fine weight-carrying. A 7,500 lb tandem at 900 lb usually is not, and the bars also return weight to the front axle, which is the part that keeps the steering honest. A single axle trailer under 3,500 lb rarely needs one, and some A-frames are not built for the load the bars apply.",
  },
  {
    q: "Why do the tires on a tandem axle wear unevenly?",
    a: "Because the two axles fight each other in every turn. The inside tire drags sideways while the outside one is pulled, and that scrubbing is the price of a tandem. Add a seized equalizer or a flattened shackle and one axle starts carrying more than its share, which shows up as cupped shoulders on one axle and clean tread on the other. Measure tread depth across all four tires each spring. If one axle is consistently 2/32 inch lower, the pair is not sharing load.",
  },
];

const TIRE_TABLE = [
  ["2,500 lb", "Single", "2", "1,100 lb", "ST205/75R14 C", "1,760 lb", "63%"],
  ["3,500 lb", "Single", "2", "1,540 lb", "ST205/75R14 C", "1,760 lb", "88%"],
  ["4,500 lb", "Single", "2", "1,980 lb", "ST225/75R15 D", "2,540 lb", "78%"],
  ["5,000 lb", "Tandem", "4", "1,100 lb", "ST205/75R14 C", "1,760 lb", "63%"],
  ["7,000 lb", "Tandem", "4", "1,540 lb", "ST225/75R15 D", "2,540 lb", "61%"],
  ["9,000 lb", "Tandem", "4", "1,980 lb", "ST235/80R16 E", "3,520 lb", "56%"],
];

const SHIFT_TABLE = [
  ["100 lb", "4 ft", "33 lb", "20 lb"],
  ["100 lb", "6 ft", "50 lb", "30 lb"],
  ["200 lb", "6 ft", "100 lb", "60 lb"],
];

const CHECK_TABLE = [
  [
    "GVWR",
    "Certification label, front left exterior corner",
    "The ceiling for the whole trailer, tongue included",
  ],
  [
    "GAWR",
    "Same label, one line per axle",
    "Whether you are managing one load figure or two",
  ],
  [
    "Tire size and load range",
    "Sidewall, the code starting with ST",
    "The real per-tire ceiling, and the number nobody reads",
  ],
  [
    "Braked axles",
    "Look behind each wheel for a backing plate and drum",
    "A tandem with one braked axle puts all the stopping on one pair of tires",
  ],
  [
    "Equalizer and shackles",
    "Under the frame, between the springs on a tandem",
    "A seized equalizer hands one axle more than half the load",
  ],
  [
    "Axle to coupler distance",
    "Tape measure, coupler to axle center",
    "The divisor in every tongue weight shift you will make",
  ],
];

export default function SingleVsTandemAxlePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <ArticleJsonLd
        title="Single Axle vs Tandem Axle Travel Trailer: The Tire Math"
        description="How axle count changes load per tire, blowout behavior, and tongue weight adjustment on a travel trailer, with per-tire load tables at each gross weight class."
        url="https://www.rvtowingcalc.com/guides/single-axle-vs-tandem-axle-travel-trailer"
        datePublished="2026-11-03"
      />
      <FaqJsonLd
        faqs={FAQS}
        baseUrl="https://www.rvtowingcalc.com/guides/single-axle-vs-tandem-axle-travel-trailer"
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
        <span className="text-gray-900">Single vs Tandem Axle</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
        Single Axle vs Tandem Axle Travel Trailer: The Tire Math
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        A 3,500 lb single axle camper leaves the lot with 1,540 lb on each tire.
        Not 1,750 lb per side of the trailer. 1,540 lb on one tire, at one
        corner, before anyone fills the freshwater tank unevenly or bolts a
        generator bracket to the rear bumper.
      </p>
      <p className="mt-3 text-lg text-gray-600">
        The ST205/75R14 load range C under it is rated 1,760 lb at 50 psi. That
        is 220 lb of headroom, or 12.5 percent, on a trailer sold as a
        lightweight. Move that same tire under a 7,000 lb tandem and it carries
        1,540 lb again. Same tire. Twice the trailer.
      </p>

      <div className="mt-8 rounded-xl bg-brand-50 p-6">
        <h2 className="text-lg font-bold text-brand-800">The Short Answer</h2>
        <p className="mt-2 text-brand-700">
          Axle count is a <strong>reserve</strong> decision, not a capacity one.
          Four tires at 61 percent of rating can absorb a slow leak and a July
          afternoon. Two tires at 88 percent cannot. A tandem also keeps rolling
          on the partner tire after a blowout, while a single axle drops a brake
          drum on the pavement and pivots on the coupler. Under 3,000 lb loaded,
          a single axle is the better trailer: lighter, cheaper in rubber, and
          far easier to place on a site. Past 3,500 lb loaded, tandem is the only
          configuration with margin left in it.
        </p>
      </div>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        The Load Is the Same. The Reserve Is Not.
      </h2>
      <p className="mt-3 text-gray-700">
        Start with what the axles actually carry. The trailer sits on the tires
        and the coupler, and the coupler takes 10 to 15 percent of gross. At 12
        percent tongue weight, the axles carry 88 percent of the loaded trailer.
        Divide that by two tires on a single axle or four on a tandem and you
        have the number the tire sidewall cares about.
      </p>
      <p className="mt-3 text-gray-700">
        Builders fit tires close to the calculation, which is why the same
        14-inch load range C shows up on a 2,500 lb teardrop and a 3,500 lb
        bunkhouse. The tire does not know which trailer it is on. It only knows
        how many pounds are stacked on it and how hot the pavement is.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">
                Loaded trailer
              </th>
              <th className="border px-3 py-2 text-left font-semibold">Axles</th>
              <th className="border px-3 py-2 text-left font-semibold">Tires</th>
              <th className="border px-3 py-2 text-left font-semibold">
                Per tire
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Tire fitted
              </th>
              <th className="border px-3 py-2 text-left font-semibold">Rated</th>
              <th className="border px-3 py-2 text-left font-semibold">
                Used at max
              </th>
            </tr>
          </thead>
          <tbody>
            {TIRE_TABLE.map((row, i) => (
              <tr
                key={row[0] + row[1]}
                className={
                  row[3] === "1,540 lb"
                    ? "bg-brand-50"
                    : i % 2 === 1
                      ? "bg-gray-50"
                      : ""
                }
              >
                <td className="border px-3 py-2 text-xs font-semibold">
                  {row[0]}
                </td>
                <td className="border px-3 py-2 text-xs">{row[1]}</td>
                <td className="border px-3 py-2 text-xs font-mono">{row[2]}</td>
                <td
                  className={
                    row[3] === "1,540 lb"
                      ? "border px-3 py-2 text-xs font-mono font-bold text-brand-700"
                      : "border px-3 py-2 text-xs font-mono"
                  }
                >
                  {row[3]}
                </td>
                <td className="border px-3 py-2 text-xs">{row[4]}</td>
                <td className="border px-3 py-2 text-xs font-mono">{row[5]}</td>
                <td className="border px-3 py-2 text-xs font-mono">
                  {row[6]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm text-gray-500">
        Per-tire loads assume 12 percent tongue weight, so the axles carry 88
        percent of gross. Tire ratings are the maximum load single at the
        inflation pressure on the sidewall, measured cold. ST tires also carry a
        65 mph maximum speed rating, and running them at the number above while
        running them above that speed is how the reserve disappears without
        anything on the trailer changing.
      </p>

      <p className="mt-4 text-gray-700">
        The two highlighted rows are the argument in one line. A 23-foot tandem
        bunkhouse at 7,000 lb and a 16-foot single axle at 3,500 lb put the
        identical 1,540 lb on each tire.         Doubling the trailer did not buy a
        single pound of tire headroom. What it bought was two more tires sharing
        the work, which is the only real difference between the configurations.
      </p>
      <p className="mt-3 text-gray-700">
        The tandem pays for that reserve out of cargo. A second axle, two more
        spring packs, extra hangers, and a second pair of brake assemblies run
        220 to 300 lb, and that weight is in the trailer before you load a bag.
        At the same GVWR, a tandem carries roughly 250 lb less gear than a
        single. Builders sidestep the problem by rating tandem trailers higher,
        which is why the configuration turns up on 7,000 lb boxes and rarely on
        3,500 lb ones. Compare the yellow{" "}
        <Link
          href="/guides/cargo-carrying-capacity-ccc"
          className="text-brand-600 hover:underline"
        >
          cargo capacity label
        </Link>{" "}
        rather than GVWR when two trailers of similar length are on your list.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        What a Blowout Does With One Axle
      </h2>
      <p className="mt-3 text-gray-700">
        A tandem loses a tire and keeps rolling. The partner on that axle goes
        from 1,540 lb to 3,080 lb, which is over its rating but survivable for
        the few hundred yards it takes to reach a wide shoulder. You will feel a
        pull and hear it. You will not lose the trailer.
      </p>
      <p className="mt-3 text-gray-700">
        A single axle loses a tire and the drum goes to the pavement. The
        trailer pivots around the coupler, and because the only remaining
        support is at the ball, it pivots fast. At 60 mph that leaves roughly two
        seconds between the bang and the trailer steering the truck. There is no
        recovery technique worth practicing for it. The only defenses are
        preventing the failure and knowing the tire is the last one you have.
      </p>
      <p className="mt-3 text-gray-700">
        Which is why a tire pressure monitoring system earns its money on this
        configuration more than any other. On a tandem, a slow leak announces
        itself as a change in how the rig tracks. On a single axle there is
        nothing to compare against, and by the time the trailer feels wrong the
        sidewall is already gone. Valve-cap sensors run about $60 and read on
        your phone. The{" "}
        <Link
          href="/guides/rv-tpms-buying-and-setup"
          className="text-brand-600 hover:underline"
        >
          TPMS guide
        </Link>{" "}
        covers the pressure and temperature thresholds worth setting.
      </p>
      <p className="mt-3 text-gray-700">
        The other defense is arithmetic. Run your actual loaded gross, not the
        brochure number, and check it against the sidewall. A single axle
        carrying 1,540 lb per tire on a 1,760 lb rating has 220 lb to spend on a
        hot day, a crowned road, and a cooler that slid against the curb-side
        wall. That is not much. Check the{" "}
        <Link
          href="/guides/travel-trailer-tire-safety"
          className="text-brand-600 hover:underline"
        >
          tire load and inflation tables
        </Link>{" "}
        before you assume the builder left you a cushion, because sometimes the
        cushion is the point of the uprated tire and sometimes there is none.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Tongue Weight Is Easier to Move on a Tandem
      </h2>
      <p className="mt-3 text-gray-700">
        Every pound you move inside a trailer changes the tongue by a fixed
        amount, set by how far you moved it and how long the lever is. The lever
        is the distance from the axle to the coupler. A 16-foot single axle
        trailer runs about 12 feet, or 144 inches. A 26-foot tandem runs about 20
        feet, or 240 inches.
      </p>

      <div className="mt-6 rounded-xl bg-gray-50 p-6">
        <h3 className="font-bold text-gray-900">The Tongue Shift Formula</h3>
        <p className="mt-3 font-mono text-sm text-gray-800">
          tongue change = weight moved &times; distance moved &divide; axle to
          coupler
        </p>
        <p className="mt-3 text-sm text-gray-700">
          200 lb of gear moved 6 ft aft on a 144-inch lever: 200 &times; 72
          &divide; 144 = <strong>100 lb off the tongue</strong>. The same move on
          a 240-inch lever takes off 60 lb.
        </p>
      </div>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">
                Weight moved
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Distance aft
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Single, 144 in
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Tandem, 240 in
              </th>
            </tr>
          </thead>
          <tbody>
            {SHIFT_TABLE.map((row, i) => (
              <tr key={row[0] + row[1]} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                <td className="border px-3 py-2 text-xs font-mono">{row[0]}</td>
                <td className="border px-3 py-2 text-xs font-mono">{row[1]}</td>
                <td className="border px-3 py-2 text-xs font-mono font-bold text-brand-700">
                  {row[2]}
                </td>
                <td className="border px-3 py-2 text-xs font-mono">{row[3]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-4 text-gray-700">
        Short lever, sharper correction. That cuts both ways. A single axle
        trailer is easy to fix when the tongue is light, and equally easy to
        wreck when a full cooler lands in the wrong place. On a 3,500 lb trailer,
        100 lb of tongue is 2.9 percentage points. On a 7,000 lb tandem, 100 lb
        is 1.4 points, and you have more floor length to work with: a 26-foot
        box gives you eight or nine feet between the axles and the rear wall,
        while a 16-footer gives you four or five.
      </p>
      <p className="mt-3 text-gray-700">
        Measure the lever yourself before you load. Coupler to the center of the
        axle on a single, coupler to the midpoint between the two axles on a
        tandem, tape measure flat on the frame. Write it inside a cabinet door.
        Then confirm the result on a scale, because the formula tells you what
        changed and the scale tells you what you have. The{" "}
        <Link href="/tongue-weight-calculator" className="text-brand-600 hover:underline">
          tongue weight calculator
        </Link>{" "}
        does the arithmetic against your trailer&apos;s own gross weight, and the{" "}
        <Link
          href="/guides/cat-scale-weighing"
          className="text-brand-600 hover:underline"
        >
          CAT scale procedure
        </Link>{" "}
        handles the part where reality disagrees with the math.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        What to Read on the Sticker and Under the Frame
      </h2>
      <p className="mt-3 text-gray-700">
        Six things decide this purchase, and five of them are printed somewhere
        on the trailer. The sixth needs a flashlight and a knee on the ground.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">Spec</th>
              <th className="border px-3 py-2 text-left font-semibold">
                Where it lives
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                What it tells you
              </th>
            </tr>
          </thead>
          <tbody>
            {CHECK_TABLE.map((row, i) => (
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

      <p className="mt-4 text-gray-700">
        Brakes are the item buyers forget to check. Most states set a trailer
        brake requirement somewhere between 1,500 and 4,000 lb, which is why a
        2,400 lb single axle pop-up can legally ship with no brakes at all, and
        why a 7,000 lb tandem has them on at least one axle. One braked axle out
        of two is common on mid-weight tandems, and it means half the tires do
        all the stopping. The{" "}
        <Link
          href="/guides/trailer-brake-laws-by-state"
          className="text-brand-600 hover:underline"
        >
          state brake law rundown
        </Link>{" "}
        has the thresholds, and a breakaway cable check belongs in the walkaround
        either way.
      </p>
      <p className="mt-3 text-gray-700">
        At the scale, a single axle is simpler to read: one axle line, one
        number, compare it to one GAWR. A tandem splits across two lines, and the
        pair is legal while one side of the trailer is not, because a CAT scale
        weighs axles and not corners. If you are near the limit on a single axle,
        pay for an individual wheel weighing at an RV rally rather than guessing
        which side is heavy. The{" "}
        <Link
          href="/guides/trailer-axle-alignment-and-tire-wear"
          className="text-brand-600 hover:underline"
        >
          axle alignment guide
        </Link>{" "}
        covers what uneven tire wear is telling you about the same problem.
      </p>
      <p className="mt-3 text-gray-700">
        Backing is the other practical difference, and it favors the single. One
        axle means one pivot point, so the trailer answers your steering input
        immediately, which matters when you are placing a 16-footer by hand on a
        gravel pad. A tandem has to drag two axles sideways before the trailer
        changes direction. On pavement you will hear that scrub, and it is tread
        you are spending. Neither behavior should decide the purchase. Both are
        reasons to practice in an empty lot before you commit to a back-in site.
      </p>
      <p className="mt-3 text-gray-700">
        Cost is honest on both sides. A tandem means four tires instead of two,
        four bearing packs instead of two, and twice the spring and shackle
        hardware to inspect each spring. Budget $700 to $900 for a set of four
        ST tires mounted and balanced, against $350 to $450 for a pair, and
        replace them on the date code at six years whether the tread looks fine
        or not.
      </p>
      <p className="mt-3 text-gray-700">
        Buy the tandem if your real loaded gross will pass 3,500 lb, and accept
        the tire bill, the extra 250 lb of axle and spring weight, and a trailer
        that resists your steering input when you back into a tight site. Buy the
        single if the loaded number stays under 3,000 lb and you are willing to
        weigh it once a season to keep it there. The number that decides it is
        not the one on the brochure. It is stamped on the sidewall, and it does
        not care what the salesman said.
      </p>

      <div className="mt-10 rounded-2xl bg-brand-600 p-8 text-center text-white">
        <h2 className="text-2xl font-bold">Check the Load Before the Axle Does</h2>
        <p className="mt-2 text-brand-100">
          Per-tire load, tongue weight, and leftover payload all come from the
          same three numbers. Run yours free and independent.
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
            href="/gvwr-calculator"
            className="inline-block rounded-xl bg-white px-6 py-3 text-sm font-bold text-brand-700 shadow-lg transition-all hover:bg-brand-50 active:scale-[0.99]"
          >
            GVWR Calculator
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

      <AmazonAffiliate categories={["tpms", "tongue-scale"]} />

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Sources &amp; References
      </h2>
      <ul className="mt-3 space-y-1 text-sm text-gray-600">
        <li>
          <a
            href="https://www.nhtsa.gov/vehicle-safety/towing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            NHTSA: trailer towing safety, tire labeling, and load limits
          </a>
        </li>
        <li>
          <a
            href="https://www.rvia.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            RV Industry Association: weight labeling and certification standards
            for towable RVs
          </a>
        </li>
        <li>
          <a
            href="https://www.dexteraxle.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            Dexter Axle: axle capacity ratings, brake configurations, and
            suspension service specifications
          </a>
        </li>
        <li>
          <a
            href="https://www.rvsafety.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            RV Safety &amp; Education Foundation: individual wheel position
            weighing and side-to-side imbalance
          </a>
        </li>
      </ul>

      <div className="mt-10 rounded-xl border border-gray-200 bg-gray-50 p-6">
        <h3 className="font-bold text-gray-900">Related Guides</h3>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          <li>
            <Link
              href="/guides/travel-trailer-tire-safety"
              className="text-brand-600 hover:underline"
            >
              Travel Trailer Tire Safety
            </Link>
          </li>
          <li>
            <Link
              href="/guides/rv-tpms-buying-and-setup"
              className="text-brand-600 hover:underline"
            >
              RV TPMS Buying and Setup
            </Link>
          </li>
          <li>
            <Link
              href="/guides/trailer-axle-alignment-and-tire-wear"
              className="text-brand-600 hover:underline"
            >
              Trailer Axle Alignment and Tire Wear
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
              href="/guides/used-travel-trailer-buying-guide"
              className="text-brand-600 hover:underline"
            >
              Used Travel Trailer Buying Guide
            </Link>
          </li>
          <li>
            <Link
              href="/guides/what-size-trailer-can-my-truck-tow"
              className="text-brand-600 hover:underline"
            >
              What Size Trailer Can My Truck Tow?
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
