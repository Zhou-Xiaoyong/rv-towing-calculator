import type { Metadata } from "next";
import Link from "next/link";
import { FaqJsonLd, ArticleJsonLd, HowToJsonLd } from "@/components/seo/JsonLd";
import { DEFAULT_OG_IMAGES } from "@/lib/seo/default-og-image";

import AmazonAffiliate from "@/components/AmazonAffiliate";

export const metadata: Metadata = {
  title: "Backing a Travel Trailer Into a Relative's Driveway on Thanksgiving",
  description:
    "Backing a travel trailer into a relative's driveway: a 12 ft 6 in roof under a 12 ft service drop, 7 in of tail swing per degree, and 158 psi on the jack foot.",
  keywords: [
    "backing a travel trailer into a driveway",
    "travel trailer height clearance",
    "parking a travel trailer at a relatives house",
    "thanksgiving rv trip driveway",
    "trailer tail swing while backing",
    "tongue jack ground pressure",
    "rv overhead clearance power lines",
  ],
  alternates: {
    canonical:
      "https://www.rvtowingcalc.com/guides/thanksgiving-backing-into-relative-driveway",
  },
  openGraph: {
    title: "Backing a Travel Trailer Into a Relative's Driveway on Thanksgiving",
    description:
      "A 54 ft combination, a 12 ft service drop, and 950 lb standing on one jack foot. The three measurements that decide whether you back in or park at the curb.",
    url: "https://www.rvtowingcalc.com/guides/thanksgiving-backing-into-relative-driveway",
    images: DEFAULT_OG_IMAGES,
  },
};

const FAQS = [
  {
    q: "How much clearance does a travel trailer need above the roof?",
    a: "Measure to the tallest thing on the roof, which is usually the air conditioner shroud and not the roof edge, and add a foot. A typical 31 ft travel trailer with a 15,000 BTU air conditioner sits 11 ft 2 in to 11 ft 8 in at the shroud, and a fifth wheel runs 12 ft 6 in to 13 ft 6 in before anything is added on top. Power company service drops are commonly at 12 ft over a residential driveway because that is the code minimum, which leaves a couple of inches of margin on a travel trailer and none at all on a fifth wheel.",
  },
  {
    q: "Can you park a travel trailer on grass?",
    a: "For a night, on flat ground, with a pad under the jack foot and boards under the tires, usually yes. The failure is the point load, not the total weight. A 950 lb tongue resting on a bare jack foot about 6 square inches across is 158 psi, and wet November turf gives way well below that, so the foot sinks and the trailer noses down. Spread the same 950 lb over a 12 by 12 inch pad and it drops to 6.6 psi, which grass handles. Do not do it on a slope, and do not leave it there for a week.",
  },
  {
    q: "Why does the back of my trailer swing so far when I back up?",
    a: "Because the trailer pivots at the coupler, and the rear corner is a long way from that pivot. On a 31 ft box the rear corner sits about 34 ft behind the ball, so one degree of angle between truck and trailer moves it roughly 7 inches. Ten degrees moves it 6 feet. That is why the spotter has to watch the rear corner on the inside of the turn rather than the fender in the mirror, and why you stop and pull forward rather than adding steering angle.",
  },
  {
    q: "Should I unhook the trailer at a relative's house?",
    a: "Unhook if the rig is staying more than a night and the spot is flat, because a coupled rig on a slope keeps the coupler loaded and the truck's parking pawl stressed. Leave it hitched if the driveway is short, the street is narrow, or you expect to move it. Either way, chock both trailer wheels before the coupler comes off the ball, and put the jack down on a pad rather than directly on asphalt that sat in the sun all afternoon.",
  },
];

const DIMENSION_TABLE = [
  ["Overall height, 31 ft travel trailer", "11 ft 6 in", "Service drops, limbs, carport headers"],
  ["Overall height, fifth wheel", "13 ft 0 in", "Anything under 13 ft 6 in is a problem"],
  ["Truck and trailer, coupled", "54 ft", "Cul-de-sac diameter, street parking"],
  ["Ball to trailer axle center", "24 ft", "How far the trailer cuts the corner"],
  ["Ball to rear corner", "34 ft", "Tail swing while backing"],
  ["Body width", "8 ft 0 in", "Whether two cars can pass you in the street"],
];

const SWING_TABLE = [
  ["1°", "7 in", "A correction you can make with the wheel"],
  ["5°", "3 ft 0 in", "Still inside the mirror's view"],
  ["10°", "6 ft 0 in", "Enough to reach a parked car"],
  ["20°", "12 ft 4 in", "Past the far edge of a 20 ft street"],
  ["30°", "19 ft 8 in", "The tail is now in the neighbor's yard"],
];

const PRESSURE_TABLE = [
  ["Tongue weight on a bare jack foot", "950 lb", "6 sq in", "158 psi"],
  ["Tongue weight on a 12 x 12 pad", "950 lb", "144 sq in", "6.6 psi"],
  ["One trailer tire at 65 psi", "1,650 lb", "25 sq in", "65 psi"],
  ["One front tire at 50 psi", "2,450 lb", "49 sq in", "50 psi"],
  ["Stabilizer jack on a 2 x 6 pad", "400 lb", "8 sq in", "48 psi"],
];

const STEPS = [
  {
    name: "Walk the last 300 feet before the truck moves",
    text: "Get out at the corner and walk it. You are looking for three things: what hangs over the driveway, how wide the street is with the neighbors' cars where they actually park, and what the surface is where the trailer will sit. None of that is visible from the driver's seat with a 31 ft box behind you.",
  },
  {
    name: "Measure to the air conditioner, not the roof edge",
    text: "Stand at the lowest point of the driveway, put a tape on the tallest item on the trailer roof, and read it against the lowest wire or limb over the path. The A/C shroud typically adds 8 to 10 inches over the roof edge, and that is the number that hits the service drop.",
  },
  {
    name: "Pick the spot before you pick the line",
    text: "A hard, flat surface beats a pretty one. Favor a spot where the tongue ends up level or slightly downhill, where the trailer does not block the neighbor's mailbox, and where you can pull straight out on Sunday without a three-point turn in the dark.",
  },
  {
    name: "Brief the spotter in signals, not sentences",
    text: "Agree on four signals and nothing else: keep coming, stop, come forward, and wheel left or right. Put the spotter where you can see them in the driver's mirror, on the side the trailer is turning toward. If you lose sight of them, stop. Radios help when the driveway is long, but the rule still holds.",
  },
  {
    name: "Back in with resets, not with more steering",
    text: "Add angle and the tail accelerates away from you. Pull forward and start the arc again, and count the resets out loud so you stop pretending this is the second one. Two or three resets into a tight driveway is normal and nobody at the table will remember.",
  },
  {
    name: "Chock, then unhook, then pad the jack",
    text: "Chock both sides of one trailer wheel before the coupler comes off the ball. Put the pad down before the jack foot touches the ground, lower the tongue until the trailer is level, and leave the stabilizers just touching. They hold the trailer still. They do not carry weight.",
  },
];

export default function ThanksgivingBackingIntoRelativeDrivewayPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <ArticleJsonLd
        title="Backing a Travel Trailer Into a Relative's Driveway on Thanksgiving"
        description="Twelve feet of service drop, seven inches of tail swing per degree of angle, and 158 psi under a jack foot on wet grass. The measurements that decide whether a Thanksgiving arrival ends in the driveway or at the curb."
        url="https://www.rvtowingcalc.com/guides/thanksgiving-backing-into-relative-driveway"
        datePublished="2026-11-20"
      />
      <FaqJsonLd
        faqs={FAQS}
        baseUrl="https://www.rvtowingcalc.com/guides/thanksgiving-backing-into-relative-driveway"
      />
      <HowToJsonLd
        name="How to back a travel trailer into a relative's driveway"
        description="Walk the approach, measure overhead clearance at the air conditioner, choose the parking spot, brief the spotter, back in with resets, and chock and unhook with a pad under the jack."
        steps={STEPS}
        totalTime="PT40M"
        url="https://www.rvtowingcalc.com/guides/thanksgiving-backing-into-relative-driveway"
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
        <span className="text-gray-900">Thanksgiving Arrival</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
        Backing a Travel Trailer Into a Relative&rsquo;s Driveway on Thanksgiving
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        The last 200 feet of a Thanksgiving trip are the only 200 feet nobody
        plans. You have been on the road since 7 a.m., the street is 20 feet
        wide with two cars parked on one side, and the driveway you have to hit
        is guarded by a maple limb and a service drop that a previous owner
        never thought about.
      </p>
      <p className="mt-3 text-lg text-gray-600">
        Your trailer is 11 feet 6 inches tall at the air conditioner. The wire
        is at 12 feet. That six inches is the whole margin, and it is measured
        at the lowest dip in the span, not where the wire meets the house.
      </p>

      <div className="mt-8 rounded-xl bg-brand-50 p-6">
        <h2 className="text-lg font-bold text-brand-800">The Short Answer</h2>
        <p className="mt-2 text-brand-700">
          Back in only if three numbers pass. Overhead clearance of at least a
          foot above the air conditioner at the lowest point of the wire. A
          street wide enough to let the trailer tail swing 12 feet without
          touching anything. And ground under the jack foot that will take 158
          psi, or a pad that spreads it down to 6.6 psi. Fail any one of them
          and the answer is the curb, a parking lot three blocks away, or
          leaving the trailer at home. A 54 ft combination that fits is worth
          more than one that almost fits.
        </p>
      </div>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Six Numbers That Decide the Last 200 Feet
      </h2>
      <p className="mt-3 text-gray-700">
        Everything about arrival comes down to dimensions you can measure in
        your own driveway a week early, which is the only time measuring is
        free. Here is the rig in question: a 31 ft box with a 7,600 lb GVWR and
        a 950 lb tongue, behind a crew cab half-ton.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">
                Measurement
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                This rig
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                What it decides
              </th>
            </tr>
          </thead>
          <tbody>
            {DIMENSION_TABLE.map((row, i) => (
              <tr key={row[0]} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                <td className="border px-3 py-2 text-xs">{row[0]}</td>
                <td className="border px-3 py-2 text-xs font-mono font-semibold">
                  {row[1]}
                </td>
                <td className="border px-3 py-2 text-xs">{row[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm text-gray-500">
        Heights measured to the top of the air conditioner shroud with the
        trailer level. Manufacturer specs usually quote the roof edge, which is
        8 to 10 inches lower and is not the number that hits anything.
      </p>

      <p className="mt-4 text-gray-700">
        The 54 ft figure is the one that empties a cul-de-sac. A residential
        cul-de-sac with a 50 ft diameter island leaves a 20 ft ring of pavement
        around it, and a rig that long cannot turn inside that ring without the
        trailer tires leaving the asphalt. If the street ends in a circle,
        drive in knowing how you are getting out, or park on the through street
        instead.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        The Wire Is at 12 Feet Because the Code Says So
      </h2>
      <p className="mt-3 text-gray-700">
        Overhead service conductors are required to sit 12 ft above a
        residential driveway, 10 ft above a sidewalk, and 18 ft above a public
        road. That is Article 230.24 of the National Electrical Code, and it is
        a minimum for the utility, not a comfortable number for you. A travel
        trailer at 11 ft 6 in passes under it with six inches to spare. A fifth
        wheel at 13 ft does not pass at all.
      </p>
      <p className="mt-3 text-gray-700">
        Three things make the real clearance worse than the nominal 12 ft. The
        wire sags between poles, so the low point is mid-span and rarely above
        the driveway apron where you measure it. The service drop moves with
        temperature and wind, and a loaded span dips lower in July than in
        January. And the drop is often the lowest wire in the group, with cable
        and telephone lines strung below it that carry no clearance rule worth
        trusting.
      </p>
      <p className="mt-3 text-gray-700">
        So measure, from the ground, at the lowest point you can see, and
        subtract a foot. If you cannot get a tape on it, do not guess from the
        driver&rsquo;s seat. The repair for a torn service drop is a utility
        crew, an outage for the whole block, and a bill that arrives in
        January.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        One Degree of Angle Moves the Tail Seven Inches
      </h2>
      <p className="mt-3 text-gray-700">
        The trailer pivots at the coupler. The rear corner is roughly 34 ft from
        that pivot on a 31 ft box, so the tail travels along an arc with a 34 ft
        radius. One degree of that arc is 34 ft times 0.0175, which is 0.59 ft,
        or about 7 inches.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">
                Angle at the coupler
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Tail movement
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                What that looks like
              </th>
            </tr>
          </thead>
          <tbody>
            {SWING_TABLE.map((row, i) => (
              <tr
                key={row[0]}
                className={row[0] === "30°" ? "bg-danger-50" : i % 2 === 1 ? "bg-gray-50" : ""}
              >
                <td className="border px-3 py-2 text-xs font-mono font-semibold">
                  {row[0]}
                </td>
                <td className="border px-3 py-2 text-xs font-mono">{row[1]}</td>
                <td className="border px-3 py-2 text-xs">{row[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm text-gray-500">
        Arc length on a 34 ft radius from the coupler to the rear corner. Real
        trailers have the corner slightly inboard of that arc, so treat these as
        the outer bound.
      </p>

      <p className="mt-4 text-gray-700">
        This is why backing into a tight driveway feels like it goes wrong all
        at once. The first five degrees look like nothing in the mirror. The
        next five put the corner six feet out, which is the width of a parked
        Civic. A spotter standing at the rear corner, on the inside of the turn,
        sees the problem at two degrees and tells you to come forward before it
        becomes a ten degree problem.
      </p>
      <p className="mt-3 text-gray-700">
        There is a second geometry trap on the way in. The trailer&rsquo;s axle
        group cuts inside the path the ball takes, and the amount of that
        cut-in grows as the turn tightens. The standard estimate is the square
        of the ball-to-axle distance divided by twice the turn radius. With 24
        ft to the axle center, a 35 ft radius turn cuts in 8.2 ft, and a 25 ft
        radius cuts in 11.5 ft. On a 20 ft street that is the entire opposite
        lane, which is why you swing wide before the turn rather than during
        it.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        158 PSI Standing on One Jack Foot
      </h2>
      <p className="mt-3 text-gray-700">
        Pressure is load divided by area, and the jack foot is the smallest area
        on the rig. A 950 lb tongue on a bare foot about 6 square inches across
        works out to 158 psi, more than triple the pressure the trailer tires
        put on the same ground. Steel that concentrates 158 psi on wet November
        turf does what a boot heel does to a lawn.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">
                What carries the load
              </th>
              <th className="border px-3 py-2 text-left font-semibold">Load</th>
              <th className="border px-3 py-2 text-left font-semibold">
                Contact area
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Pressure
              </th>
            </tr>
          </thead>
          <tbody>
            {PRESSURE_TABLE.map((row, i) => (
              <tr
                key={row[0]}
                className={row[0].includes("bare jack") ? "bg-danger-50" : i % 2 === 1 ? "bg-gray-50" : ""}
              >
                <td className="border px-3 py-2 text-xs">{row[0]}</td>
                <td className="border px-3 py-2 text-xs font-mono">{row[1]}</td>
                <td className="border px-3 py-2 text-xs font-mono">{row[2]}</td>
                <td className="border px-3 py-2 text-xs font-mono font-semibold">
                  {row[3]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm text-gray-500">
        Tire rows are load divided by inflation pressure, which is the contact
        area a tire actually generates. Jack and stabilizer rows are load
        divided by the footprint of the foot or pad.
      </p>

      <p className="mt-4 text-gray-700">
        A 12 by 12 inch pad takes the same 950 lb down to 6.6 psi, which is a
        quarter of what the trailer tires apply and well inside what grass,
        gravel, or a 20 year old asphalt apron will hold. A 2 by 6 offcut helps
        and is what most people use, but it is only 8 square inches unless you
        lay it flat, so it divides the pressure by four and no more.
      </p>
      <p className="mt-3 text-gray-700">
        The stabilizers are the other trap. They are scissor legs meant to stop
        the trailer rocking, and cranking them down to level a trailer on a
        slope puts load into a frame that was never designed for it. On the same
        table, one stabilizer taking 400 lb on a 2 by 6 pad is already 48 psi on
        the ground and a bending moment on the outrigger. Level with the tongue
        jack and blocks under the tires. Touch the stabilizers last, and only
        until they are snug.
      </p>
      <p className="mt-3 text-gray-700">
        If you do not know what your jack is carrying, that number is your
        tongue weight, and the{" "}
        <Link href="/tongue-weight-calculator" className="text-brand-600 hover:underline">
          tongue weight calculator
        </Link>{" "}
        will give it to you from the trailer&rsquo;s loaded weight at 10 to 15
        percent. It is also the same number that decides whether the truck needs
        a weight distribution hitch, which the{" "}
        <Link
          href="/guides/weight-distribution-hitch-setup"
          className="text-brand-600 hover:underline"
        >
          hitch setup guide
        </Link>{" "}
        walks through.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        The Arrival Sequence
      </h2>
      <p className="mt-3 text-gray-700">
        Forty minutes, most of it standing still. Do it in this order and the
        backing part takes care of itself.
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

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Sunday Morning, Cold, and Nine Pounds Heavier
      </h2>
      <p className="mt-3 text-gray-700">
        The hookup you do on Sunday is not the one you did on Wednesday. The
        coupler has been sitting in the weather, the breakaway cable has been
        pulled and re-clipped by somebody&rsquo;s kid, and the trailer now
        carries whatever came out of the kitchen. A 40 lb cooler moved forward
        of the axle adds about 30 lb to the tongue, which is not a problem in
        itself, but the distribution you measured before you left is no longer
        the one you are towing home.
      </p>
      <p className="mt-3 text-gray-700">
        Cold air changes the tire numbers too. Pressure falls roughly 1 psi per
        10&deg;F, so a trailer that read 65 psi in a 70&deg;F garage on Tuesday
        reads 62 psi in a 40&deg;F driveway on Sunday. That is not a leak and it
        is not a reason to air up to 70 psi. Tire ratings are set cold, so the
        correct move is to set pressure to the sidewall number at the ambient
        temperature you are actually starting in, then check again after 50
        miles on the road.
      </p>
      <p className="mt-3 text-gray-700">
        Walk the hookup in a fixed order every time: coupler latched and pinned,
        safety chains crossed, breakaway cable attached to the truck and not to
        the chain, seven-pin plugged, lights checked with a helper on the brake
        pedal, bars on the hitch, jack fully retracted. The{" "}
        <Link href="/guides/how-to-hitch-up-a-travel-trailer" className="text-brand-600 hover:underline">
          hitch-up walkthrough
        </Link>{" "}
        covers the sequence in order, and the{" "}
        <Link
          href="/guides/thanksgiving-return-trip-tongue-weight"
          className="text-brand-600 hover:underline"
        >
          return trip tongue weight guide
        </Link>{" "}
        handles the load shift that happens on the way home.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Best Picks for a Thanksgiving Arrival
      </h2>
      <p className="mt-3 text-gray-700">
        Two items earn their space in the truck for this specific trip: a way to
        know what the jack is actually carrying, and a way to see trailer tire
        pressure without kneeling in the cold on Sunday morning. Neither fixes a
        driveway. Both tell you what you are dealing with before you commit.
      </p>

      <AmazonAffiliate categories={["tongue-scale", "tpms"]} />

      <div className="mt-10 rounded-2xl bg-brand-600 p-8 text-center text-white">
        <h2 className="text-2xl font-bold">Know What the Jack Is Carrying</h2>
        <p className="mt-2 text-brand-100">
          Tongue weight sets the load on the jack foot and the load on your rear
          axle. Run the loaded numbers before the holiday drive.
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

      <p className="mt-8 text-gray-700">
        The recommendation is to park at the curb and walk the last hundred
        feet. It costs you a block, a cold walk with a bag of pies, and the mild
        embarrassment of being the relative who parked on the street. What it
        buys is no torn service drop, no rutted lawn, and no four-point turn in
        the dark on Sunday. Back it in only when the tape says a foot of
        clearance and the street says 12 feet of swing. Those two numbers are
        cheap to check on a Saturday and expensive to learn on a Thursday.
      </p>

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
            href="https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            NFPA 70, National Electrical Code: Article 230.24, clearances of
            overhead service conductors above driveways and roads
          </a>
        </li>
        <li>
          <a
            href="https://www.nhtsa.gov/equipment/tires"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            NHTSA: tire inflation, load limits, and the cold-pressure rule
          </a>
        </li>
        <li>
          <a
            href="https://www.fleet.ford.com/towing-guides/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            Ford RV and Trailer Towing Guide: published dimensions and
            configuration weights
          </a>
        </li>
        <li>
          <a
            href="https://www.sae.org/standards/content/j2807_202001/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            SAE J2807: tow-vehicle performance requirements behind published tow
            ratings
          </a>
        </li>
      </ul>

      <div className="mt-10 rounded-xl border border-gray-200 bg-gray-50 p-6">
        <h3 className="font-bold text-gray-900">Related Guides</h3>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          <li>
            <Link
              href="/guides/thanksgiving-steep-driveway-trailer-grade"
              className="text-brand-600 hover:underline"
            >
              Thanksgiving Arrival: A 9% Driveway and a 7,600 lb Trailer
            </Link>
          </li>
          <li>
            <Link
              href="/guides/how-to-back-up-travel-trailer"
              className="text-brand-600 hover:underline"
            >
              How to Back Up a Travel Trailer
            </Link>
          </li>
          <li>
            <Link
              href="/guides/how-to-hitch-up-a-travel-trailer"
              className="text-brand-600 hover:underline"
            >
              How to Hitch Up a Travel Trailer
            </Link>
          </li>
          <li>
            <Link
              href="/guides/thanksgiving-driveway-dry-camping-propane-weight"
              className="text-brand-600 hover:underline"
            >
              Thanksgiving Dry Camping: Propane and Battery Math
            </Link>
          </li>
          <li>
            <Link
              href="/guides/thanksgiving-crosswind-trailer-side-force"
              className="text-brand-600 hover:underline"
            >
              Thanksgiving Crosswind: 700 lb Pushing on Your Trailer
            </Link>
          </li>
          <li>
            <Link
              href="/guides/trailer-coupler-types-and-replacement"
              className="text-brand-600 hover:underline"
            >
              Trailer Coupler Types and Replacement
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
