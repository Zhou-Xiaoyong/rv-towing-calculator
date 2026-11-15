import type { Metadata } from "next";
import Link from "next/link";
import { FaqJsonLd, ArticleJsonLd, HowToJsonLd } from "@/components/seo/JsonLd";
import { DEFAULT_OG_IMAGES } from "@/lib/seo/default-og-image";

import AmazonAffiliate from "@/components/AmazonAffiliate";

export const metadata: Metadata = {
  title: "Black Friday RV Gear: Buy Against the Number That Fails First",
  description:
    "A 1,690 lb payload with 180 lb left does not need better tires. How to rank Black Friday RV gear by which limit your rig actually runs out of first.",
  keywords: [
    "black friday rv gear",
    "rv towing accessories",
    "weight distribution hitch sizing",
    "do air bags increase payload",
    "trailer tongue weight scale",
    "rv tire load range upgrade",
    "black friday rv deals",
  ],
  alternates: {
    canonical:
      "https://www.rvtowingcalc.com/guides/black-friday-rv-towing-gear-priority",
  },
  openGraph: {
    title: "Black Friday RV Gear: Buy Against the Number That Fails First",
    description:
      "Five limits, one rig, and 180 lb of payload left. Which accessory actually moves the number you are failing, and the four that only move the price.",
    url: "https://www.rvtowingcalc.com/guides/black-friday-rv-towing-gear-priority",
    images: DEFAULT_OG_IMAGES,
  },
};

const FAQS = [
  {
    q: "What is the first thing to buy for a new travel trailer?",
    a: "A tongue weight scale, before any hitch. It costs less than a tank of fuel, and it turns the hitch purchase from a guess into an arithmetic problem: a trailer whose catalog tongue weight is 650 lb can measure 800 with full cylinders and a battery, and the difference decides whether a 1,000 lb rated hitch is enough or whether you need the 1,400 lb unit. Every other accessory decision downstream depends on that one measurement.",
  },
  {
    q: "Does a weight distribution hitch add payload capacity?",
    a: "No, and it subtracts from it. The hitch head, shank and spring bars weigh 95 to 130 lb depending on rating, and that hardware sits on the truck, so it comes out of the door jamb sticker like any other cargo. What the bars do is move load between axles, taking roughly a quarter of the tongue weight off the rear axle and putting it back on the front. That fixes a rear axle problem. It does nothing for a payload total.",
  },
  {
    q: "Are air bags worth it on a half-ton that tows?",
    a: "For ride height, yes. For capacity, no. Air bags change spring rate and ride height, and every rating on the truck stays exactly where the factory put it. A bag rated to level 5,000 lb does not add a pound to a 4,100 lb rear axle rating. If a scale ticket shows the rear axle over GAWR, the fix is less tongue weight or a larger truck, and no sale price changes that.",
  },
  {
    q: "Should I upgrade to Load Range E trailer tires?",
    a: "Only if the load table says the tires are your binding limit. Going from a Load Range D ST225/75R15 at 2,540 lb to Load Range E at 2,830 lb adds 1,160 lb of capacity across four tires, which matters on a trailer loaded near its GVWR. On a 7,100 lb trailer with 6,210 lb on the axles, four D-rated tires already carry 10,160 lb against a 6,210 lb load, so the tires are the last thing to spend on and the payload sticker is the first.",
  },
];

const LIMIT_TABLE = [
  ["Payload sticker", "1,690 lb", "1,510 lb", "180 lb", "Nothing you can buy"],
  ["Rear axle (RAWR)", "4,100 lb", "3,780 lb", "320 lb", "Spring bars, about 200 lb"],
  ["Trailer GVWR", "7,600 lb", "7,100 lb", "500 lb", "Leave gear at home"],
  ["Tire capacity, 4 tires", "11,320 lb", "6,210 lb", "5,110 lb", "Load range, if it mattered"],
  ["Tongue weight, %", "10 to 15%", "12.5%", "On target", "A scale, $30"],
];

const HITCH_TABLE = [
  ["1,000 / 10,000 lb", "95 lb", "6,400 lb at 12.5%", "800 lb", "Correct"],
  ["1,400 / 14,000 lb", "130 lb", "6,400 lb at 12.5%", "800 lb", "35 lb of steel for nothing"],
  ["No WDH, ball mount only", "45 lb", "6,400 lb at 12.5%", "800 lb", "Sag, light steering"],
];

const STEPS = [
  {
    name: "Weigh the rig before the sale ends",
    text: "A CAT scale pass costs about $15 and takes ten minutes: front axle on the first platform, drive axle on the second, trailer axles on the third. Subtract the two truck axle numbers from GVWR and you have real payload left, not the sticker number. Every purchase on this list either moves one of those numbers or it does not, and the ticket tells you which.",
  },
  {
    name: "Rank the five limits by what is actually left",
    text: "Write the margins down in pounds, smallest first. The smallest margin is the constraint, and it is the only thing worth spending on this month. A rig with 180 lb of payload left and 5,110 lb of tire capacity left does not have a tire problem, no matter what the tire sale says.",
  },
  {
    name: "Size the hitch to the measured tongue, not the catalog",
    text: "Take the scale number or a bathroom-scale measurement, not the listing. Then buy the smallest rated hitch that covers it with margin, because the heavier unit is 35 lb more hardware on a payload budget that may only have 180 lb in it. Bars rated for 1,400 lb on an 800 lb tongue do not distribute better, they ride harsher and unload the front axle less smoothly.",
  },
  {
    name: "Add monitoring last, and expect it to add zero pounds",
    text: "A tire pressure system does not change any rating and does not need to. It catches the one failure that ends a trip on the shoulder, which is worth paying for once the weight side of the rig is already correct. Buy it after the hitch, not instead of it.",
  },
  {
    name: "Skip anything that claims to raise a rating",
    text: "Air bags, helper springs, sumo springs and leveling kits change how the truck sits, never what it is rated to carry. A part advertised as adding capacity is a part advertised against federal labeling rules. Read the fine print for the word leveling, which is the honest one.",
  },
];

export default function BlackFridayRvTowingGearPriorityPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <ArticleJsonLd
        title="Black Friday RV Gear: Buy Against the Number That Fails First"
        description="Five limits on one rig, 180 lb of payload left, and a sale on everything. How to rank RV towing gear by which number actually runs out first, and what each accessory really moves."
        url="https://www.rvtowingcalc.com/guides/black-friday-rv-towing-gear-priority"
        datePublished="2026-11-15"
      />
      <FaqJsonLd
        faqs={FAQS}
        baseUrl="https://www.rvtowingcalc.com/guides/black-friday-rv-towing-gear-priority"
      />
      <HowToJsonLd
        name="How to rank RV towing gear purchases by the limit your rig fails first"
        description="Weigh the rig at a CAT scale, rank the five weight limits by remaining margin, size the hitch to measured tongue weight, add monitoring last, and skip any part that claims to raise a rating."
        steps={STEPS}
        totalTime="PT45M"
        url="https://www.rvtowingcalc.com/guides/black-friday-rv-towing-gear-priority"
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
        <span className="text-gray-900">Black Friday Gear Priority</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
        Black Friday RV Gear: Buy Against the Number That Fails First
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        A half-ton with a 1,690 lb payload sticker, 800 lb of trailer tongue on
        the ball, 95 lb of hitch hardware, four people and a cooler has 180 lb
        left. It also has 5,110 lb of unused tire capacity.
      </p>
      <p className="mt-3 text-lg text-gray-600">
        One of those two numbers is a problem, and it is not the tires. The sale
        does not know the difference, which is why the average Black Friday
        trailer cart ends up with $900 of parts that address the limit the rig
        was never going to hit.
      </p>

      <div className="mt-8 rounded-xl bg-brand-50 p-6">
        <h2 className="text-lg font-bold text-brand-800">The Short Answer</h2>
        <p className="mt-2 text-brand-700">
          Rank your five limits by the pounds left, smallest first, and spend
          only on the one at the top. On a loaded half-ton that is almost always{" "}
          <strong>payload, not tire capacity</strong>: 180 lb left against 5,110.
          The order that follows is a tongue weight scale first, because it is
          the measurement every other decision depends on, then a weight
          distribution hitch sized to the measured tongue, then tire pressure
          monitoring, which moves zero pounds and prevents the failure that ends
          a trip. Air bags move nothing on the sticker, and a heavier hitch than
          you need costs 35 lb of the 180 you have.
        </p>
      </div>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Five Limits, One Rig, One of Them at 180 lb
      </h2>
      <p className="mt-3 text-gray-700">
        Every towing setup is bounded by several numbers at once, and only one of
        them is close. The rest have room, sometimes a lot of room, and that is
        the part the shopping cart gets wrong. Take a 2022 Ram 1500 crew cab with
        a 1,690 lb payload sticker, a 7,100 lb GVWR, a 4,100 lb rear axle rating,
        and a 24 ft bunkhouse at 7,100 lb loaded with 800 lb on the ball.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">Limit</th>
              <th className="border px-3 py-2 text-left font-semibold">Rated</th>
              <th className="border px-3 py-2 text-left font-semibold">Loaded</th>
              <th className="border px-3 py-2 text-left font-semibold">Left</th>
              <th className="border px-3 py-2 text-left font-semibold">
                What actually moves it
              </th>
            </tr>
          </thead>
          <tbody>
            {LIMIT_TABLE.map((row, i) => (
              <tr
                key={row[0]}
                className={row[0] === "Payload sticker" ? "bg-danger-50" : i % 2 === 1 ? "bg-gray-50" : ""}
              >
                <td className="border px-3 py-2 text-xs font-semibold">
                  {row[0]}
                </td>
                <td className="border px-3 py-2 text-xs font-mono">{row[1]}</td>
                <td className="border px-3 py-2 text-xs font-mono">{row[2]}</td>
                <td className="border px-3 py-2 text-xs font-mono font-bold text-danger-700">
                  {row[3]}
                </td>
                <td className="border px-3 py-2 text-xs">{row[4]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm text-gray-500">
        Payload loadout: 800 lb tongue, 95 lb hitch head and bars, four adults
        and a child at 520 lb, 95 lb of cooler and chairs, 1,510 total. Tire line
        is four ST225/75R15 Load Range E at 2,830 lb each. Trailer axle load
        6,210 lb after tongue.
      </p>

      <p className="mt-4 text-gray-700">
        Read the last column and the shopping list writes itself. Payload has 180
        lb of margin and no accessory on any shelf can add a pound to it, because
        the sticker is set by the axle ratings, the springs and the frame the
        truck was built with. Tire capacity has 5,110 lb of margin, which is
        nearly five times what the trailer asks of it.
      </p>
      <p className="mt-3 text-gray-700">
        An owner who buys tires is spending money to widen a gap that is already
        wide. An owner who buys nothing has 180 lb and a decision to make about
        who rides in the truck.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Buy the Measurement Before the Hardware
      </h2>
      <p className="mt-3 text-gray-700">
        The catalog tongue weight on that bunkhouse is 650 lb. The trailer that
        shows up has two full 20 lb propane cylinders, a group 27 battery, a
        power jack and whatever the dealer bolted to the A-frame, and the actual
        number measured at the coupler is 800. That is not a rounding error. It
        is 150 lb, and it is the difference between two hitch ratings that cost
        $120 apart and weigh 35 lb apart.
      </p>
      <p className="mt-3 text-gray-700">
        A tongue weight scale settles it in a driveway for less than the price of
        the fuel to get to the store. It is the only purchase on this list that
        makes the other purchases cheaper, which is why it goes first even though
        it is the least exciting box under the tree.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">
                Hitch rating
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Hardware weight
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Trailer
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Tongue on the ball
              </th>
              <th className="border px-3 py-2 text-left font-semibold">Verdict</th>
            </tr>
          </thead>
          <tbody>
            {HITCH_TABLE.map((row, i) => (
              <tr key={row[0]} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                <td className="border px-3 py-2 text-xs font-semibold">
                  {row[0]}
                </td>
                <td className="border px-3 py-2 text-xs font-mono">{row[1]}</td>
                <td className="border px-3 py-2 text-xs">{row[2]}</td>
                <td className="border px-3 py-2 text-xs font-mono">{row[3]}</td>
                <td className="border px-3 py-2 text-xs font-bold text-danger-700">
                  {row[4]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm text-gray-500">
        Hardware weights are typical for a head, shank and trunnion bar set; the
        exact figure is on the manufacturer&rsquo;s spec sheet and belongs in your
        payload ledger before you buy, not after.
      </p>

      <p className="mt-4 text-gray-700">
        Thirty-five pounds sounds trivial until it is 35 of the 180 lb you have
        left, which is 19 percent of the entire remaining budget spent on
        spring bars rated for a trailer you do not own. The{" "}
        <Link
          href="/guides/weight-distribution-hitch-setup"
          className="text-brand-600 hover:underline"
        >
          weight distribution hitch setup guide
        </Link>{" "}
        covers how the bars are adjusted once the right unit is on the truck,
        which is a different problem from buying the right unit.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        The Two Purchases That Change a Rating, and the One That Never Does
      </h2>
      <p className="mt-3 text-gray-700">
        Only two things on a trailer can legally raise how much it can carry:
        bigger axles and tires, or a lighter trailer. Tires are the cheaper half.
        Going from a Load Range D ST225/75R15 at 2,540 lb to Load Range E at 2,830
        lb adds 290 lb per tire, or 1,160 lb across a tandem. On a trailer
        running 6,210 lb on the axles that is capacity you will never use, and on
        a trailer loaded to 7,500 lb it is the difference between legal and not.
      </p>
      <p className="mt-3 text-gray-700">
        Air bags are the purchase that does nothing to any of it. A bag rated to
        level 5,000 lb changes spring rate and ride height, and the GVWR, GAWR,
        payload and tow rating stay exactly where the factory put them. The{" "}
        <Link
          href="/guides/air-bags-vs-weight-distribution-hitch"
          className="text-brand-600 hover:underline"
        >
          air bags versus weight distribution comparison
        </Link>{" "}
        runs the numbers: a bag does not add capacity, and a bar does not add
        capacity either, it only moves load from the rear axle to the front.
        Those are different jobs, and neither one is payload.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Monitoring Is Worth Buying Once the Weight Is Right
      </h2>
      <p className="mt-3 text-gray-700">
        A trailer tire pressure system adds zero pounds and changes zero ratings,
        so it sits low on this list by the arithmetic. It also catches the one
        failure that puts a rig on the shoulder at 65 mph, and the reason it
        catches it is a federal rule that works against you: FMVSS 138 requires a
        warning at 25 percent below the recommended cold pressure. A trailer tire
        that has lost 9 psi to a cold front is 11 percent low, and the dash stays
        dark.
      </p>
      <p className="mt-3 text-gray-700">
        That is a $40 to $120 purchase that buys attention rather than capacity,
        and the distinction matters for sequencing. Buy it after the hitch, not
        instead of it. An owner who monitors tire pressure perfectly while
        running 300 lb over on the rear axle has solved the smaller problem.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        The Order, in One Pass
      </h2>

      <ol className="mt-4 space-y-3">
        {STEPS.map((step, i) => (
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

      <p className="mt-6 text-gray-700">
        One more purchase deserves a mention because it is the only one that
        changes the trip rather than the rig: a second vehicle. If the payload
        ledger leaves 180 lb and the family is 520, sending one adult and one
        child in the other car costs a tank of fuel and returns 300 lb of
        capacity. No accessory in the catalog does that for less.
      </p>
      <p className="mt-3 text-gray-700">
        Run the numbers before the sales do. The{" "}
        <Link href="/payload-calculator" className="text-brand-600 hover:underline">
          payload calculator
        </Link>{" "}
        returns what is left after tongue weight, hitch hardware and passengers,
        and the{" "}
        <Link href="/gvwr-calculator" className="text-brand-600 hover:underline">
          GVWR calculator
        </Link>{" "}
        tells you whether the trailer side of the ledger has room for the gear you
        were about to buy.
      </p>

      <p className="mt-4 text-gray-700">
        The recommendation is to spend the first $30 on a scale and the next
        afternoon on a CAT ticket, then buy only against the smallest margin. For
        most half-ton owners that means a hitch sized to a measured tongue weight
        and nothing else this year, because the constraint is a sticker that no
        product can change. The trade-off is that this is a duller shopping list
        than the one the ads are selling, and it may end with the conclusion that
        the truck is the part that needs replacing, which is not a thing that
        goes on sale in November.
      </p>

      <div className="mt-10 rounded-2xl bg-brand-600 p-8 text-center text-white">
        <h2 className="text-2xl font-bold">Find Your Smallest Margin First</h2>
        <p className="mt-2 text-brand-100">
          Payload, GVWR, tongue weight and axle load all have to clear. Run the
          five checks and buy against the one that is actually close.
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
            href="/tongue-weight-calculator"
            className="inline-block rounded-xl bg-white px-6 py-3 text-sm font-bold text-brand-700 shadow-lg transition-all hover:bg-brand-50 active:scale-[0.99]"
          >
            Tongue Weight Calculator
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

      <AmazonAffiliate categories={["tongue-scale", "weight-distribution", "tpms"]} />

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Sources &amp; References
      </h2>
      <ul className="mt-3 space-y-1 text-sm text-gray-600">
        <li>
          <a
            href="https://www.nhtsa.gov/equipment/tires"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            NHTSA: tire load limits, inflation and the 25 percent low-pressure
            warning threshold
          </a>
        </li>
        <li>
          <a
            href="https://www.rvia.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            RV Industry Association: cargo carrying capacity and weight labeling
            standards
          </a>
        </li>
        <li>
          <a
            href="https://catscale.com/cat-scale-locator/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            CAT Scale: certified platform locations and the three-pass weighing
            procedure
          </a>
        </li>
        <li>
          <a
            href="https://www.ramtrucks.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            Ram Trucks: payload, GVWR and axle ratings by cab, bed and drivetrain
          </a>
        </li>
        <li>
          <a
            href="https://www.tireindustry.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            Tire Industry Association: load and inflation tables by tire size and
            load range
          </a>
        </li>
      </ul>

      <div className="mt-10 rounded-xl border border-gray-200 bg-gray-50 p-6">
        <h3 className="font-bold text-gray-900">Related Guides</h3>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          <li>
            <Link
              href="/guides/thanksgiving-truck-bed-payload"
              className="text-brand-600 hover:underline"
            >
              Thanksgiving Towing: Firewood in the Truck Bed
            </Link>
          </li>
          <li>
            <Link
              href="/guides/thanksgiving-rv-trip-weight-and-fuel-budget"
              className="text-brand-600 hover:underline"
            >
              Thanksgiving Towing Check: Payload and Fuel
            </Link>
          </li>
          <li>
            <Link
              href="/guides/weight-distribution-hitch-setup"
              className="text-brand-600 hover:underline"
            >
              Weight Distribution Hitch Setup, Step by Step
            </Link>
          </li>
          <li>
            <Link
              href="/guides/air-bags-vs-weight-distribution-hitch"
              className="text-brand-600 hover:underline"
            >
              Air Bags vs Weight Distribution Hitch
            </Link>
          </li>
          <li>
            <Link
              href="/guides/payload-capacity"
              className="text-brand-600 hover:underline"
            >
              Payload Capacity: What the Sticker Really Means
            </Link>
          </li>
          <li>
            <Link
              href="/guides/travel-trailer-tire-safety"
              className="text-brand-600 hover:underline"
            >
              Travel Trailer Tire Safety and Load Rating
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
