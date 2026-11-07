import type { Metadata } from "next";
import Link from "next/link";
import { FaqJsonLd, ArticleJsonLd, HowToJsonLd } from "@/components/seo/JsonLd";
import { DEFAULT_OG_IMAGES } from "@/lib/seo/default-og-image";

import AmazonAffiliate from "@/components/AmazonAffiliate";

export const metadata: Metadata = {
  title: "Thanksgiving Towing: Firewood in the Truck Bed Is Payload",
  description:
    "A long bed stacked 16 inches deep with seasoned oak is 1,700 lb, and 895 of a half-ton's payload is already on the ball. The Thanksgiving firewood math.",
  keywords: [
    "thanksgiving towing",
    "truck bed payload",
    "how much does a truck bed of firewood weigh",
    "firewood weight per cord",
    "towing with a loaded truck bed",
    "payload capacity when towing a trailer",
    "thanksgiving travel trailer trip",
  ],
  alternates: {
    canonical:
      "https://www.rvtowingcalc.com/guides/thanksgiving-truck-bed-payload",
  },
  openGraph: {
    title: "Thanksgiving Towing: Firewood in the Truck Bed Is Payload",
    description:
      "1,700 lb of oak in the bed, 800 lb of tongue on the ball, and 1,690 lb of payload to cover both. The holiday load nobody puts on a scale.",
    url: "https://www.rvtowingcalc.com/guides/thanksgiving-truck-bed-payload",
    images: DEFAULT_OG_IMAGES,
  },
};

const FAQS = [
  {
    q: "How much does a truck bed full of firewood weigh?",
    a: "Stacked 16 inches deep, an 8 ft bed holds about 56 cubic feet, which is roughly 1,700 lb of seasoned oak at 30 lb per cubic foot. The same depth in a 5.5 ft bed comes to about 39 cubic feet and 1,170 lb. Green oak runs close to 30 percent heavier because the water is still in it, so the same stack can reach 2,200 lb. Level with the bed rails adds another 25 percent on top of that.",
  },
  {
    q: "Can I haul firewood and tow a trailer at the same time?",
    a: "Yes, if both loads come out of the same payload number. A 6,400 lb trailer at 12.5 percent puts 800 lb of tongue on the ball, and the hitch head and bars add 95 more. On a 1,690 lb sticker that leaves 795 lb for passengers, gear and wood. Four people and a cooler take 615, which leaves 180. Firewood is the first thing that has to go somewhere else, because there is no version of a bed load of oak that fits in 180 lb.",
  },
  {
    q: "Is it legal to bring firewood across state lines for Thanksgiving?",
    a: "Often not. Every state sets its own rule on out-of-state firewood, and many restrict it outright or require wood that has been heat treated to a 140°F core for at least 60 minutes and carries the certification stamp. The restrictions exist because a single log can carry emerald ash borer larvae, spongy moth egg masses or spotted lanternfly egg cases into a forest that has none. Check the destination state's agriculture department before you load, and expect campgrounds to ban outside wood regardless.",
  },
  {
    q: "Does a weight distribution hitch fix an overloaded truck bed?",
    a: "No. A weight distribution hitch moves tongue weight between the front axle, the rear axle and the trailer axles. It cannot move anything out of the bed, because the bed is bolted to the frame between the axles. If the bed load alone is over your rear axle rating, the hitch has nothing to redistribute and the extra 1,700 lb stays where you put it. Hitches solve tongue weight problems, not cargo problems.",
  },
  {
    q: "How much firewood do I need for a four-day Thanksgiving visit?",
    a: "A fire pit burns roughly 0.5 to 0.75 cubic feet of split hardwood an hour, so a four-hour evening fire is 2 to 3 cubic feet, or 60 to 90 lb. Four evenings comes to 8 to 12 cubic feet, which is 11 to 16 bundles at 0.75 cubic feet each. That is 240 to 360 lb, still a fraction of a bed load, and most of it can be bought within ten miles of where you are going to burn it.",
  },
];

const BED_TABLE = [
  ["5.5 ft bed, 16 in deep", "38.9 cu ft", "1,170 lb", "1,520 lb"],
  ["8 ft bed, 16 in deep", "56.5 cu ft", "1,700 lb", "2,210 lb"],
  ["8 ft bed, level with the rails", "70.7 cu ft", "2,120 lb", "2,760 lb"],
];

const LEDGER_TABLE = [
  ["Tongue weight, 6,400 lb trailer at 12.5%", "800 lb", "800 lb", "890 lb"],
  ["Weight distribution head, shank, spring bars", "95 lb", "895 lb", "795 lb"],
  ["Four people, 185 / 165 / 95 / 75 lb", "520 lb", "1,415 lb", "275 lb"],
  ["Cooler, six chairs, folding table", "95 lb", "1,510 lb", "180 lb"],
  ["Six bundles, kiln dried, two evenings", "120 lb", "1,630 lb", "60 lb"],
];

const FIRE_TABLE = [
  ["Load the bed with oak, 16 in deep", "1,700 lb", "3,210 lb", "1,520 lb over"],
  ["Twelve bundles bought at the destination", "240 lb", "1,750 lb", "60 lb over"],
  ["Six bundles there, burn the host's stack", "120 lb", "1,630 lb", "60 lb left"],
];

const STEPS = [
  {
    name: "Weigh the truck empty, before the wood exists",
    text: "Front axle on the first platform, drive axle on the second, trailer off the scale. The ticket gives you two numbers you cannot get anywhere else: how much of your payload is already spent on fuel, a toolbox, a bedliner and the hitch, and what the rear axle weighs with nothing in it. On a crew cab 4x4 that number is usually 2,700 to 2,900 lb, which is most of a 4,100 lb rear axle rating gone before you load a stick.",
  },
  {
    name: "Subtract the tongue and the hitch head from the sticker",
    text: "Do this in writing, not in your head. A 6,400 lb trailer at 12.5 percent is 800 lb, and the head, shank and bars for it are 95 lb. Whatever is left on the door jamb sticker after those two lines is the real budget for people, cooler and cargo.",
  },
  {
    name: "Count passengers at what they weigh, not what they say",
    text: "Four adults and one child at 185, 165, 165, 95 and 75 comes to 685 lb, and it all lands on the truck before a single bag. Anyone who drives separately takes their weight and their duffel out of your budget, which is a cheaper fix than anything you can buy.",
  },
  {
    name: "Measure the wood by volume, never by eye or by pickup load",
    text: "A face cord is 8 ft by 4 ft by 16 in, which is 42.7 cubic feet and about a third of a full cord. Load your bed to 16 in and you have roughly one of those, or 1,700 lb of oak, whether it looks like a lot or not. If the wood is going anyway, stack it forward against the cab and strap it, because 1,700 lb of split oak behind an open tailgate becomes a projectile at the first hard stop.",
  },
  {
    name: "Re-weigh loaded and read the rear axle line",
    text: "Three passes: truck empty, truck with the trailer hitched, then the whole rig with the spring bars engaged. The second pass tells you what the tongue actually does to the rear axle. The third tells you what the hitch is buying back. Compare both to the rear GAWR on the door jamb, not to the payload total.",
  },
];

export default function ThanksgivingTruckBedPayloadPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <ArticleJsonLd
        title="Thanksgiving Towing: 1,700 lb of Firewood in a 1,690 lb Payload"
        description="Why a bed load of seasoned oak outweighs most half-ton payload stickers, how it stacks on the same number as tongue weight, and the three-way fire ledger for a four-day visit."
        url="https://www.rvtowingcalc.com/guides/thanksgiving-truck-bed-payload"
        datePublished="2026-11-07"
      />
      <FaqJsonLd
        faqs={FAQS}
        baseUrl="https://www.rvtowingcalc.com/guides/thanksgiving-truck-bed-payload"
      />
      <HowToJsonLd
        name="How to load a truck bed for a Thanksgiving towing trip"
        description="Weigh the truck empty at a CAT scale, subtract tongue weight and hitch hardware from the payload sticker, count passengers at real weights, measure firewood by volume, and re-weigh loaded to read the rear axle line."
        steps={STEPS}
        totalTime="PT60M"
        url="https://www.rvtowingcalc.com/guides/thanksgiving-truck-bed-payload"
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
        <span className="text-gray-900">Thanksgiving Truck Bed Payload</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
        Thanksgiving Towing: 1,700 lb of Firewood in a 1,690 lb Payload
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        A long bed stacked 16 inches deep with seasoned oak holds about 56 cubic
        feet of wood. At 30 lb per cubic foot that is 1,700 lb, sitting in a
        2022 Ram 1500 crew cab whose payload sticker reads 1,690 and whose ball
        already carries 800 lb of trailer tongue.
      </p>
      <p className="mt-3 text-lg text-gray-600">
        Nobody weighs firewood. It arrives as &ldquo;throw some in the back for
        the fire,&rdquo; it gets stacked until the pile looks right, and it leaves
        the driveway on the same sticker as the trailer, the family and the
        cooler.
      </p>

      <div className="mt-8 rounded-xl bg-brand-50 p-6">
        <h2 className="text-lg font-bold text-brand-800">The Short Answer</h2>
        <p className="mt-2 text-brand-700">
          Firewood is the densest thing most people ever put in a truck bed:
          about <strong>30 lb per cubic foot</strong> seasoned, closer to 39 when
          it is still green. A bed loaded to 16 inches is roughly{" "}
          <strong>1,700 lb in a long bed</strong> and 1,170 in a short one, which
          is more than a half-ton payload before the tongue, the hitch or a
          single passenger is counted. On this truck, 800 lb of tongue and 95 lb
          of hitch hardware leave 795 lb for every person and every bag. Twelve
          bundles of kiln-dried wood bought ten miles from the fire pit weigh
          240 lb and cover the same four evenings.
        </p>
      </div>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        A Truck Bed Holds More Than a Ton of Oak
      </h2>
      <p className="mt-3 text-gray-700">
        The number that matters is density, and firewood is unusual because you
        can compute it exactly. A full cord is 128 cubic feet of stacked wood
        including the air gaps, and a cord of seasoned oak runs about 3,800 lb.
        Divide one by the other and you get 29.7 lb per cubic foot. Round it to
        30 and every bed load becomes arithmetic instead of a guess.
      </p>
      <p className="mt-3 text-gray-700">
        An 8 ft bed is 8.0 ft long and about 5.3 ft wide, so 42.4 square feet of
        floor. Stack 16 inches deep, which is below the rails and looks
        conservative, and you have 56.5 cubic feet. That is 1,700 lb of oak. The
        same stack in a 5.5 ft bed is 38.9 cubic feet and 1,170 lb.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">
                Bed and stack depth
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Volume
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Seasoned oak
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Green oak
              </th>
            </tr>
          </thead>
          <tbody>
            {BED_TABLE.map((row, i) => (
              <tr
                key={row[0]}
                className={row[1] === "56.5 cu ft" ? "bg-danger-50" : "bg-gray-50"}
              >
                <td className="border px-3 py-2 text-xs font-semibold">
                  {row[0]}
                </td>
                <td className="border px-3 py-2 text-xs font-mono">{row[1]}</td>
                <td className="border px-3 py-2 text-xs font-mono font-bold">
                  {row[2]}
                </td>
                <td className="border px-3 py-2 text-xs font-mono">{row[3]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm text-gray-500">
        Assumes 29.7 lb per cubic foot for seasoned oak at 3,800 lb per cord, and
        30 percent more for green wood at roughly 4,900 lb per cord. Bed floor
        measured at 8.0 by 5.3 ft and 5.5 by 5.3 ft, stacked flat, wheel wells
        ignored.
      </p>

      <p className="mt-4 text-gray-700">
        The green column is the one that surprises people. Oak cut this fall and
        split last month is still carrying 60 to 80 percent of its dry weight in
        water, and water does not burn. You are hauling it up a mountain pass at
        10 mpg and then waiting two seasons for it to be worth burning. A pin
        meter pushed into a freshly split face reads over 25 percent on wood that
        will not light cleanly, and under 20 on wood that will.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        The Bed and the Ball Spend the Same Payload
      </h2>
      <p className="mt-3 text-gray-700">
        Payload is one number on one sticker, and both loads come out of it.
        Tongue weight gets there first because it is attached to the trailer, and
        the trailer is what makes the trip a towing trip. Whatever survives that
        is the bed budget.
      </p>
      <p className="mt-3 text-gray-700">
        Take the Ram: GVWR 7,100 lb, rear GAWR 4,100 lb, 153.5 in wheelbase, and
        1,690 lb of payload on the door jamb. The trailer is a 24 ft bunkhouse,
        6,400 lb loaded, hanging 800 lb on the ball at 12.5 percent.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">
                Line item
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Weight
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Running total
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Left of 1,690 lb
              </th>
            </tr>
          </thead>
          <tbody>
            {LEDGER_TABLE.map((row, i) => (
              <tr key={row[0]} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                <td className="border px-3 py-2 text-xs font-semibold">
                  {row[0]}
                </td>
                <td className="border px-3 py-2 text-xs font-mono">{row[1]}</td>
                <td className="border px-3 py-2 text-xs font-mono">{row[2]}</td>
                <td className="border px-3 py-2 text-xs font-mono font-bold text-brand-700">
                  {row[3]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm text-gray-500">
        Payload sticker 1,690 lb, GVWR 7,100 lb, rear GAWR 4,100 lb, front GAWR
        3,700 lb, 153.5 in wheelbase on a 2022 Ram 1500 crew cab 4x4. Trailer
        loaded weight 6,400 lb against a 7,600 lb GVWR. Hitch weight is a 95 lb
        head, shank and bar set, not a 45 lb ball mount.
      </p>

      <p className="mt-4 text-gray-700">
        Sixty pounds left is the whole margin, and it is one kid's duffel or one
        more cooler lid. This is a working trip, not a comfortable one. It is
        also the version where nobody has to choose between the fire and the
        chairs, which is not true of the version most people actually drive.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Where the Wood Goes, and Why Nowhere Works
      </h2>
      <p className="mt-3 text-gray-700">
        The obvious fix is to put the oak in the trailer instead. Run the number
        and it does not survive. The trailer is rated 7,600 lb, it weighs 6,400
        loaded, and that leaves 1,200 lb of headroom. A bed load of oak is 1,700.
        It is 500 lb past a limit that already includes four days of gear, and
        stacking it over the axles does not create capacity, it just stops the
        tongue from moving while the axle rating does the failing.
      </p>
      <p className="mt-3 text-gray-700">
        There is a second reason to keep it out of the trailer. Firewood is
        unsecured mass in a box with thin walls and a floor rated per square
        foot, and 1,700 lb of split oak against the front cabinet of a travel
        trailer is how cabinet doors end up on the floor at the first railroad
        crossing. The{" "}
        <Link
          href="/guides/cargo-carrying-capacity-ccc"
          className="text-brand-600 hover:underline"
        >
          cargo carrying capacity guide
        </Link>{" "}
        covers what that label actually leaves you.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">
                Where the fire comes from
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Added weight
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Total payload
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Verdict
              </th>
            </tr>
          </thead>
          <tbody>
            {FIRE_TABLE.map((row, i) => (
              <tr
                key={row[0]}
                className={row[3].includes("over") ? "bg-danger-50" : ""}
              >
                <td className="border px-3 py-2 text-xs font-semibold">
                  {row[0]}
                </td>
                <td className="border px-3 py-2 text-xs font-mono">{row[1]}</td>
                <td className="border px-3 py-2 text-xs font-mono">{row[2]}</td>
                <td
                  className={
                    row[3].includes("over")
                      ? "border px-3 py-2 text-xs font-bold text-danger-700"
                      : "border px-3 py-2 text-xs font-bold text-brand-700"
                  }
                >
                  {row[3]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm text-gray-500">
        Same truck, same trailer, same four people and the same cooler and chairs
        already aboard at 1,510 lb. The only variable is where the fire comes
        from. Bundles counted at 0.75 cubic feet and 20 lb each.
      </p>

      <p className="mt-4 text-gray-700">
        Three rows, one truck, one trip. The bottom row is the only one that
        closes, and it closes with 60 lb to spare, which is the difference
        between a legal load and an argument with a scale on the way home.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Wood Behind the Tailgate Is Worth 1.3 Times Its Weight
      </h2>
      <p className="mt-3 text-gray-700">
        Even at a total that fits, where the wood sits changes which axle carries
        it. Any load placed behind the rear axle acts on a lever: the front axle
        loses weight, the rear axle gains more than the load itself, and the ratio
        is set by the wheelbase and the overhang.
      </p>
      <p className="mt-3 text-gray-700">
        The formula is <strong>(wheelbase + overhang) &divide; wheelbase</strong>{" "}
        for the gain at the rear axle, and <strong>overhang &divide; wheelbase</strong>{" "}
        for the loss at the front. On a 153.5 in wheelbase with 47 in of overhang
        that multiplier is 1.31. Stack 1,700 lb against the tailgate and the rear
        axle sees 2,220 lb while the front axle gives up 520.
      </p>
      <p className="mt-3 text-gray-700">
        Two things follow. First, a bed load can put you over rear GAWR while the
        payload total still looks fine, because the total counts the wood once and
        the axle counts it 1.31 times. Second, the front axle number is the one
        that changes how the truck steers, and it is the number nobody measures.
        Push the same stack forward against the cab and the multiplier falls
        toward 1.0, which is free weight you can reclaim by loading differently.
        The{" "}
        <Link
          href="/guides/gawr-explained"
          className="text-brand-600 hover:underline"
        >
          GAWR explainer
        </Link>{" "}
        has the axle ratings and the scale procedure.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Buying It There Is Cheaper, and Often the Only Legal Move
      </h2>
      <p className="mt-3 text-gray-700">
        Twelve bundles of kiln-dried wood bought at a gas station ten miles from
        the house you are visiting weigh 240 lb and cost somewhere between $60 and
        $110. The same heat from your own stack costs nothing at the till and
        close to fifteen hundred pounds of payload, which is a strange trade to
        make on the busiest travel week of the year.
      </p>
      <p className="mt-3 text-gray-700">
        The legal side is less negotiable. Moving firewood across state lines is
        restricted or banned in much of the country, because a split log is a
        delivery vehicle for emerald ash borer larvae, spongy moth egg masses and
        spotted lanternfly egg cases. Wood that has been heat treated to a
        140&nbsp;&deg;F core for at least an hour and stamped as certified is the
        usual exception, and the rule differs by state and by pest. Check the
        destination state&rsquo;s agriculture department before you load, not
        after you arrive with a bed full of evidence.
      </p>
      <p className="mt-3 text-gray-700">
        Campgrounds are stricter than states. A private park or a state park in
        an ash borer quarantine area will turn away outside wood at the gate, and
        the bundle you were going to buy locally is the only one allowed on the
        fire ring. That is worth knowing before the bed is loaded, because
        unloading 1,700 lb of oak in a check-in line is a bad way to start a
        holiday.
      </p>
      <p className="mt-3 text-gray-700">
        Thanksgiving week adds the last complication. It is dark by 5 pm in most
        of the country, the interstates run at their annual peak on Wednesday
        afternoon, and a truck with 1,700 lb against the tailgate and 800 lb on
        the ball has its front axle light and its headlights pointed at the
        treetops. That is a combination that shows up in deer-strike statistics
        every November, and it is entirely avoidable by leaving the wood at home.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Loading the Bed for a Four-Day Visit
      </h2>
      <p className="mt-3 text-gray-700">
        Five steps, in this order, and the last one is the only one that tells you
        the truth.
      </p>

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
        Run the ledger for your own truck before the holiday, not in the driveway
        with the engine running. The{" "}
        <Link href="/payload-calculator" className="text-brand-600 hover:underline">
          payload calculator
        </Link>{" "}
        takes the sticker, the tongue weight and the passenger list and returns
        what is actually left, and the{" "}
        <Link
          href="/tongue-weight-calculator"
          className="text-brand-600 hover:underline"
        >
          tongue weight calculator
        </Link>{" "}
        tells you the other half of the same subtraction. If the trailer is new to
        you, weigh the tongue with the cylinders full rather than trusting the
        listing.
      </p>
      <p className="mt-3 text-gray-700">
        The recommendation is blunt. Buy the wood where you are going to burn it,
        take a dozen bundles instead of a bed load, and spend the 1,500 lb you just
        reclaimed on the cooler, the chairs and a passenger who would otherwise be
        driving alone. The trade-off is real: store-bought bundles are kiln-dried
        and burn hot and fast, so a four-hour fire takes more wood than it would
        from a stack that has been seasoning since last fall. You will feed the
        fire more often. You will not spend the drive home wondering what the
        front tires are doing.
      </p>

      <div className="mt-10 rounded-2xl bg-brand-600 p-8 text-center text-white">
        <h2 className="text-2xl font-bold">Run the Load Before You Stack It</h2>
        <p className="mt-2 text-brand-100">
          Tongue weight and bed cargo spend the same sticker. Put both numbers in
          and see what is really left for the family.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link
            href="/payload-calculator"
            className="inline-block rounded-xl bg-white px-6 py-3 text-sm font-bold text-brand-700 shadow-lg transition-all hover:bg-brand-50 active:scale-[0.99]"
          >
            Payload Calculator
          </Link>
          <Link
            href="/tongue-weight-calculator"
            className="inline-block rounded-xl bg-white px-6 py-3 text-sm font-bold text-brand-700 shadow-lg transition-all hover:bg-brand-50 active:scale-[0.99]"
          >
            Tongue Weight Calculator
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

      <AmazonAffiliate
        categories={["weight-distribution", "tongue-scale"]}
      />

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Sources &amp; References
      </h2>
      <ul className="mt-3 space-y-1 text-sm text-gray-600">
        <li>
          <a
            href="https://www.dontmovefirewood.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            Don&rsquo;t Move Firewood: state firewood restrictions and
            heat-treatment requirements
          </a>
        </li>
        <li>
          <a
            href="https://www.aphis.usda.gov/plant-health"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            USDA APHIS: emerald ash borer, spongy moth and spotted lanternfly
            movement quarantines
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
            href="https://www.rvia.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            RV Industry Association: weight labeling and cargo carrying capacity
            standards for towable RVs
          </a>
        </li>
        <li>
          <a
            href="https://www.nhtsa.gov/equipment/tires"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            NHTSA: tire load limits, inflation and the vehicle placard
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
      </ul>

      <div className="mt-10 rounded-xl border border-gray-200 bg-gray-50 p-6">
        <h3 className="font-bold text-gray-900">Related Guides</h3>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          <li>
            <Link
              href="/guides/thanksgiving-rv-trip-weight-and-fuel-budget"
              className="text-brand-600 hover:underline"
            >
              Thanksgiving Towing: Payload and Fuel Budget
            </Link>
          </li>
          <li>
            <Link
              href="/guides/thanksgiving-rv-rental-towing-check"
              className="text-brand-600 hover:underline"
            >
              Thanksgiving RV Rental: Is Your Truck Rated for It?
            </Link>
          </li>
          <li>
            <Link
              href="/guides/cargo-carrying-capacity-ccc"
              className="text-brand-600 hover:underline"
            >
              Cargo Carrying Capacity Explained
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
              href="/guides/gawr-explained"
              className="text-brand-600 hover:underline"
            >
              GAWR Explained: Axle Ratings and Rear Axle Load
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
      </div>
    </div>
  );
}
