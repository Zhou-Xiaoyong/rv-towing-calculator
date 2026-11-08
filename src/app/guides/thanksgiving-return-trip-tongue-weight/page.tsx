import type { Metadata } from "next";
import Link from "next/link";
import { FaqJsonLd, ArticleJsonLd, HowToJsonLd } from "@/components/seo/JsonLd";
import { DEFAULT_OG_IMAGES } from "@/lib/seo/default-og-image";

import AmazonAffiliate from "@/components/AmazonAffiliate";

export const metadata: Metadata = {
  title: "Thanksgiving Towing: The Drive Home Drops Your Tongue Weight",
  description:
    "Six hundred pounds of gifts behind the axle takes 223 lb off the coupler: 800 becomes 577, or 8.2 percent. Inside the Thanksgiving return-leg towing math.",
  keywords: [
    "thanksgiving towing",
    "trailer tongue weight percentage",
    "tongue weight too low",
    "trailer sway tongue weight",
    "return trip trailer loading",
    "10 percent tongue weight rule",
    "thanksgiving rv trip",
  ],
  alternates: {
    canonical:
      "https://www.rvtowingcalc.com/guides/thanksgiving-return-trip-tongue-weight",
  },
  openGraph: {
    title: "Thanksgiving Towing: The Drive Home Drops Your Tongue Weight",
    description:
      "The same trailer, 600 lb heavier and 223 lb lighter on the ball. Why the return leg is the one that sways, and where to put the gifts instead.",
    url: "https://www.rvtowingcalc.com/guides/thanksgiving-return-trip-tongue-weight",
    images: DEFAULT_OG_IMAGES,
  },
};

const FAQS = [
  {
    q: "How much tongue weight should a travel trailer have?",
    a: "Between 10 and 15 percent of the loaded trailer weight, with 12 to 13 percent as the working target. A 6,400 lb trailer wants 640 to 960 lb on the coupler, and 800 sits comfortably inside that. The percentage is measured against the weight the trailer actually carries that day, not against the dry weight or the GVWR on the sticker, which is why the window moves every time you load the trailer differently.",
  },
  {
    q: "How much cargo behind the axle does it take to ruin the tongue weight?",
    a: "On a 24 ft trailer with 17.5 ft from coupler to axle center, every 100 lb placed 6.5 ft behind the axle center removes 37 lb from the coupler. Starting at 800 lb on a 6,400 lb trailer, about 340 lb in that rear corner drops you to the 10 percent floor, and 600 lb takes you to 8.2 percent on a 7,000 lb trailer. Short trailers are more sensitive than long ones because the lever distance in the denominator is smaller.",
  },
  {
    q: "Does a weight distribution hitch fix a light tongue?",
    a: "No. Spring bars transfer load between the front axle, the rear axle and the trailer axles. They do not add download at the coupler, because there is nothing to transfer weight from. A trailer sitting at 8 percent tongue weight with the bars engaged is still at 8 percent, and the bars make the combination feel firmer at the wheel without changing the yaw behavior that starts the sway.",
  },
  {
    q: "Is it safe to tow home with full gray and black tanks?",
    a: "Usually the tanks are the least harmful weight you can add. Seventy gallons of waste is 584 lb, it sits a few inches off the floor, and it is placed between or near the axles, so it barely moves the tongue percentage. It does count against trailer GVWR. Dump before you leave if there is a station on the way, but do not trade a full black tank for a rear bunk stuffed with heavy boxes.",
  },
  {
    q: "Why does the drive home feel worse than the drive out?",
    a: "Four things stack up at once. The trailer is heavier and often lighter on the tongue, the tires have sat at 25 degrees all week and are several psi under their summer setting, the light is gone by 5 pm in most of the country, and the driver has spent four days not sleeping enough. The Sunday after Thanksgiving is also one of the heaviest interstate travel days of the year, so the passing traffic that upsets a lightly loaded trailer is constant instead of occasional.",
  },
];

const RETURN_TABLE = [
  ["Outbound, as loaded Wednesday", "6,400 lb", "800 lb", "12.5%", "In the window"],
  ["Plus 400 lb of gifts over the axles", "6,800 lb", "800 lb", "11.8%", "In the window"],
  ["Plus 400 lb in the rear bunk, 5 ft back", "6,800 lb", "686 lb", "10.1%", "At the floor"],
  ["Plus 600 lb at the rear door, 6.5 ft back", "7,000 lb", "577 lb", "8.2%", "Sway risk"],
  ["Same 600 lb in the front dinette, 5 ft ahead", "7,000 lb", "971 lb", "13.9%", "In the window"],
];

const PARKED_TABLE = [
  [
    "Gray plus black tanks, 70 gal",
    "584 lb",
    "Low, near the axles, and the least disruptive 584 lb on the trailer",
  ],
  [
    "Tire pressure, set at 70\u00B0F",
    "45.5 psi at 25\u00B0F",
    "Four tires fall from 7,040 lb of capacity to about 6,400 while the axles carry 6,423",
  ],
  [
    "Spring bar tension, set for 800 lb",
    "971 lb on the ball",
    "The same link count under-lifts the front axle; measure fender height, not links",
  ],
];

const STEPS = [
  {
    name: "Weigh the tongue loaded, before anything else happens",
    text: "Trailer level, tanks in whatever state they will travel in, every gift already aboard. A tongue scale under the coupler takes two minutes and gives you a number. If it reads under 10 percent of the loaded trailer weight, stop and rearrange before you hitch. Estimating from the dry hitch weight on the listing is how this problem gets missed, because that number describes a trailer with empty tanks and one propane cylinder.",
  },
  {
    name: "Move the heavy items forward of the axle line, not behind it",
    text: "The front dinette, the pass-through, the floor between the axles and the kitchen are all load-positive. The rear bunk, the space behind the bathroom and the area under the rear window are load-negative, and they are exactly where guests put things because it is out of the way. A case of wine, a cast iron pan and a folding table belong forward. Pillows and paper towels can go anywhere.",
  },
  {
    name: "Re-tension the spring bars for the new load",
    text: "Bars set for 800 lb do not automatically suit 971 lb. Hook up, measure the front fender height at the center of the wheel arch, then engage the bars and measure again. The front should come back down to within half an inch of its height with the trailer off the ball. If it is higher than that, the bars are lifting too much and the front tires are losing grip.",
  },
  {
    name: "Dump the tanks if there is a station between you and home",
    text: "Seventy gallons is 584 lb, and it comes out for free at most truck stops and many campgrounds. If the only dump station is forty miles in the wrong direction, leave the tanks alone. Waste water rides lower and closer to the axle line than anything else you would put on board, and the ton of tongue percentage it does not move is worth more than the fuel it costs.",
  },
  {
    name: "Check the cold tire pressures and the coupler before you roll",
    text: "Pressures read cold, in the driveway, before the first mile warms them. Then look at the coupler latch, the pin through it, the breakaway cable routing and the seven-pin connector. Four days parked on gravel is enough for a cable to end up pinched under a jack foot and for a connector to fill with road spray that froze overnight.",
  },
];

export default function ThanksgivingReturnTripTongueWeightPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <ArticleJsonLd
        title="Thanksgiving Towing: The Drive Home Drops Your Tongue Weight"
        description="Why 600 lb of gifts behind the axle turns 12.5 percent tongue weight into 8.2 percent on the same trailer, what that does at highway speed, and how to load the return leg."
        url="https://www.rvtowingcalc.com/guides/thanksgiving-return-trip-tongue-weight"
        datePublished="2026-11-08"
      />
      <FaqJsonLd
        faqs={FAQS}
        baseUrl="https://www.rvtowingcalc.com/guides/thanksgiving-return-trip-tongue-weight"
      />
      <HowToJsonLd
        name="How to load a travel trailer for the Thanksgiving drive home"
        description="Weigh the tongue loaded, move heavy items forward of the axle line, re-tension the spring bars, dump the tanks if a station is on the route, and check cold tire pressures and the coupler before departure."
        steps={STEPS}
        totalTime="PT45M"
        url="https://www.rvtowingcalc.com/guides/thanksgiving-return-trip-tongue-weight"
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
        <span className="text-gray-900">Thanksgiving Return Trip Tongue Weight</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
        Thanksgiving Towing: The Drive Home Drops Your Tongue Weight
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        The 24 ft bunkhouse left on Wednesday with 800 lb on the ball, 12.5
        percent of its 6,400 lb, and it tracked straight for 400 miles. It leaves
        Sunday with a folding table, four days of gifts and a cooler that were
        not in it on the way out, and the coupler now carries 577 lb.
      </p>
      <p className="mt-3 text-lg text-gray-600">
        Nothing on the trailer changed. That is the problem.
      </p>

      <div className="mt-8 rounded-xl bg-brand-50 p-6">
        <h2 className="text-lg font-bold text-brand-800">The Short Answer</h2>
        <p className="mt-2 text-brand-700">
          Tongue weight is a percentage, and the percentage is set by where the
          load sits. On a trailer with 17.5 ft from coupler to axle center, 600 lb
          placed 6.5 ft behind the axle center removes <strong>223 lb</strong>{" "}
          from the coupler. The trailer is 600 lb heavier, still 600 lb under its
          7,600 lb GVWR, and its tongue weight has fallen from 12.5 percent to{" "}
          <strong>8.2 percent</strong>. No sticker anywhere on the rig records
          that change. Move the same 600 lb 5 ft ahead of the axle instead and the
          coupler reads 971 lb, which is the right ratio and 9 lb of payload left
          over. The comfortable version sways. The safe version does not fit four
          people and a cooler unless something else comes off the truck.
        </p>
      </div>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Tongue Weight Is a Ratio, and the Trip Home Changes It
      </h2>
      <p className="mt-3 text-gray-700">
        Every other number in this exercise is fixed. The truck&rsquo;s GVWR is
        7,100 lb, its rear axle is rated 4,100, its payload sticker says 1,690,
        and the trailer&rsquo;s GVWR is 7,600. None of that moves between
        Wednesday and Sunday. The one variable a family can change without buying
        anything is where the load sits, and it changes in both directions.
      </p>
      <p className="mt-3 text-gray-700">
        The math is a lever about the axle center. If the trailer is 17.5 ft from
        coupler to axle center and you add weight at a distance d behind that
        center, the coupler loses <strong>W &times; d &divide; 17.5</strong> lb.
        Ahead of the center, it gains the same amount. Nothing about the trailer
        resists this. It is geometry, and it does not care about the brand on the
        hitch.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">
                Return load
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Trailer weight
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Tongue weight
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Percent
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Verdict
              </th>
            </tr>
          </thead>
          <tbody>
            {RETURN_TABLE.map((row, i) => (
              <tr
                key={row[0]}
                className={
                  row[3] === "8.2%" ? "bg-danger-50" : i % 2 === 1 ? "bg-gray-50" : ""
                }
              >
                <td className="border px-3 py-2 text-xs font-semibold">
                  {row[0]}
                </td>
                <td className="border px-3 py-2 text-xs font-mono">{row[1]}</td>
                <td className="border px-3 py-2 text-xs font-mono font-bold">
                  {row[2]}
                </td>
                <td className="border px-3 py-2 text-xs font-mono">{row[3]}</td>
                <td
                  className={
                    row[3] === "8.2%"
                      ? "border px-3 py-2 text-xs font-bold text-danger-700"
                      : "border px-3 py-2 text-xs font-bold text-brand-700"
                  }
                >
                  {row[4]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm text-gray-500">
        Same truck, same trailer, same four people and cooler throughout. Trailer
        is a 24 ft bunkhouse rated 7,600 lb GVWR, loaded to 6,400 outbound with
        800 lb on the coupler at 12.5 percent. Coupler to axle center measured
        17.5 ft. Rear cargo placed 5 to 6.5 ft behind the axle center, front cargo
        5 ft ahead of it.
      </p>

      <p className="mt-4 text-gray-700">
        Rows two and three are the trip most families actually drive. Four
        hundred pounds of gifts is a stack of boxes in the rear bunk because that
        is the flat surface nobody is sleeping on after breakfast. It costs 114 lb
        of coupler weight and lands exactly on the 10 percent floor. Rows four and
        five carry the same 600 lb and reach opposite conclusions, which is the
        whole point: the difference between a stable rig and a nervous one here is
        an address inside the trailer, not a purchase.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        8.2 Percent Is Worse Than 12.5 Percent at 68 MPH
      </h2>
      <p className="mt-3 text-gray-700">
        Sway is a yaw oscillation, and the two forces that decide whether it dies
        out are the trailer&rsquo;s rotational inertia and the restoring moment at
        the coupler. Both move the wrong way on the return leg. The trailer picks
        up 9.4 percent more mass, which raises its inertia, while the download
        holding the coupler in line falls 28 percent. More mass, less control
        authority, and the same hitch hardware that felt planted on Wednesday.
      </p>
      <p className="mt-3 text-gray-700">
        That is why the failure shows up on the way home and not on the way out.
        A lightly loaded trailer tracks fine in still air at 62 mph. Then a semi
        passes at 75 with a full headwind, the bow wave hits the trailer&rsquo;s
        flat side, the rear of the trailer yaws, and the coupler has 577 lb of
        download instead of 800 to pull it back into line. The correction goes
        through the hitch, into the truck&rsquo;s rear axle, and up into the
        steering wheel, which is the feeling drivers call the tail wagging the
        dog.
      </p>
      <p className="mt-3 text-gray-700">
        Trailer brakes do not solve it either. A proportional controller set for a
        6,400 lb trailer applies slightly too much trailer brake for a 7,000 lb
        one at the same gain, and a locked or over-braked trailer axle mid-sway
        turns an oscillation into a skid. The{" "}
        <Link
          href="/guides/trailer-brake-controller-setup"
          className="text-brand-600 hover:underline"
        >
          brake controller setup guide
        </Link>{" "}
        covers gain, and the{" "}
        <Link href="/guides/tongue-weight" className="text-brand-600 hover:underline">
          tongue weight guide
        </Link>{" "}
        covers the ratio itself. Neither of them can fix a load that moved to the
        wrong end of the box.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Four Days Parked Changes Three Numbers
      </h2>
      <p className="mt-3 text-gray-700">
        The trailer sat unhitched from Wednesday night to Sunday morning, on
        whatever the host calls a driveway, through the coldest nights of the fall
        so far. Three things drifted while it sat, and only one of them is
        obvious.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">
                What changed while it sat
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                The number
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                What it does to the rig
              </th>
            </tr>
          </thead>
          <tbody>
            {PARKED_TABLE.map((row, i) => (
              <tr key={row[0]} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                <td className="border px-3 py-2 text-xs font-semibold">
                  {row[0]}
                </td>
                <td className="border px-3 py-2 text-xs font-mono font-bold">
                  {row[1]}
                </td>
                <td className="border px-3 py-2 text-xs">{row[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm text-gray-500">
        Tanks at 40 gal gray and 30 gal black, water at 8.34 lb per gallon. Tire
        pressure per the 2 percent rule for every 10&deg;F of temperature drop,
        from 50 psi set at 70&deg;F to 45.5 psi at 25&deg;F, applied to four
        ST205/75R14 load range C tires rated 1,760 lb each at 50 psi. Spring bar
        figure assumes the front-loaded return load.
      </p>

      <p className="mt-4 text-gray-700">
        The tire line is the one worth staring at. On the return leg this trailer
        puts 6,423 lb on its axles, because 7,000 minus 577 of tongue leaves the
        rest on the tires. Four tires at 45.5 psi carry about 6,400 lb between
        them. The capacity and the load meet within 23 lb, and that is before
        anyone accounts for the fact that one side of a travel trailer almost
        always carries more than the other, because the kitchen, the fridge and
        the water heater are all on the same wall.
      </p>
      <p className="mt-3 text-gray-700">
        Two fixes, and they stack. Pump the tires to the pressure on the placard
        before the first mile rather than at the first fuel stop, when they have
        already warmed and will read two to three psi high. Then put the gifts
        forward, which moves weight off the axles and back onto the coupler where
        the truck can carry it. The{" "}
        <Link
          href="/guides/towing-a-travel-trailer-in-winter"
          className="text-brand-600 hover:underline"
        >
          cold-weather towing guide
        </Link>{" "}
        has the full pressure table for the season.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Loading for the Drive Home
      </h2>
      <p className="mt-3 text-gray-700">
        Five steps, in this order. The first one is the only one that gives you a
        number instead of an opinion.
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
        If a tongue scale is not in the toolbox, a bathroom scale and a length of
        two-by-four under the coupler get you within about 25 lb, which is close
        enough to tell 8 percent from 13. The{" "}
        <Link
          href="/tongue-weight-calculator"
          className="text-brand-600 hover:underline"
        >
          tongue weight calculator
        </Link>{" "}
        converts the reading into a percentage against the loaded trailer weight,
        and the{" "}
        <Link href="/payload-calculator" className="text-brand-600 hover:underline">
          payload calculator
        </Link>{" "}
        tells you what the forward-loaded version costs the truck.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Sunday Afternoon Is the Hardest Two Hours of the Trip
      </h2>
      <p className="mt-3 text-gray-700">
        Thanksgiving Sunday is one of the heaviest return days on the interstate
        calendar, and in most of the country the sun is down before 5 pm. That
        combination lands on a rig that is heavier, lighter on the tongue and
        running 4.5 psi under its summer tire pressure, driven by someone who has
        spent four days in a house with eleven relatives.
      </p>
      <p className="mt-3 text-gray-700">
        Three habits are worth more than any accessory here. Leave before 10 am or
        after 7 pm, because the middle of the day is the crush. Set the cruise no
        higher than 65, since sway energy rises with the square of speed and the
        difference between 65 and 72 is not two minutes on a 400-mile day that
        already includes two fuel stops. And stop at the first sign of a truck
        passing that moves the trailer more than once, because a rig that answers
        the first bow wave and not the second is a rig that needs its load moved
        before it needs more speed.
      </p>
      <p className="mt-3 text-gray-700">
        Deer belong in this paragraph too. November is the peak month for
        vehicle-animal collisions in most states, dusk is when they move, and a
        7,000 lb trailer behind a half-ton truck does not stop in the distance its
        headlights show at 68 mph. The truck&rsquo;s headlights are also aimed
        high, because a coupler carrying 971 lb has already pulled the nose up.
        The{" "}
        <Link
          href="/guides/thanksgiving-truck-bed-payload"
          className="text-brand-600 hover:underline"
        >
          bed payload guide
        </Link>{" "}
        has the axle math behind that.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Check the Ratio Before You Hitch
      </h2>
      <p className="mt-3 text-gray-700">
        The recommendation is to weigh the tongue once, loaded, in the driveway on
        Sunday morning, and to treat 10 percent as a floor rather than a target.
        If the number comes back at 8 percent, the gifts move forward or some of
        them stay at the house. That is the whole fix, and it costs nothing but
        fifteen minutes and an argument about whose mother&rsquo;s casserole dish
        gets left behind.
      </p>
      <p className="mt-3 text-gray-700">
        The trade-off is real and worth saying plainly. Loading forward puts 971
        lb on a coupler whose hitch head and bars add 95, which leaves 624 lb of a
        1,690 lb payload for four people at 520 lb and a cooler at 95. That is 9
        lb of margin, so the forward-loaded version of this trip only closes if
        the cooler rides in the trailer or one passenger takes the other car. The
        rear-loaded version has 403 lb of payload headroom and a trailer that
        wants to steer. Take the tight payload and the stable trailer, and move
        the cooler.
      </p>

      <div className="mt-10 rounded-2xl bg-brand-600 p-8 text-center text-white">
        <h2 className="text-2xl font-bold">Run the Return Load Before You Pack It</h2>
        <p className="mt-2 text-brand-100">
          Where the gifts sit decides the percentage, and the percentage decides
          how the drive home feels at 65 mph.
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

      <AmazonAffiliate categories={["sway-control", "tongue-scale"]} />

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Sources &amp; References
      </h2>
      <ul className="mt-3 space-y-1 text-sm text-gray-600">
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
            href="https://www.sae.org/standards/content/j2807_202002/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            SAE J2807: towing capacity test procedures, including trailer sway
            evaluation
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
            href="https://www.nhtsa.gov/equipment/tires"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            NHTSA: tire load limits, cold inflation pressure and the vehicle
            placard
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
            href="https://www.fhwa.dot.gov/policyinformation/travel_monitoring/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            FHWA Office of Highway Policy Information: holiday traffic volume
            data
          </a>
        </li>
      </ul>

      <div className="mt-10 rounded-xl border border-gray-200 bg-gray-50 p-6">
        <h3 className="font-bold text-gray-900">Related Guides</h3>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          <li>
            <Link
              href="/guides/tongue-weight"
              className="text-brand-600 hover:underline"
            >
              Tongue Weight: The 10 to 15 Percent Rule
            </Link>
          </li>
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
              href="/guides/thanksgiving-truck-bed-payload"
              className="text-brand-600 hover:underline"
            >
              Thanksgiving Towing: Firewood in the Truck Bed Is Payload
            </Link>
          </li>
          <li>
            <Link
              href="/guides/trailer-loading-position"
              className="text-brand-600 hover:underline"
            >
              Trailer Loading Position and Weight Distribution
            </Link>
          </li>
          <li>
            <Link
              href="/guides/rv-trailer-sway-control"
              className="text-brand-600 hover:underline"
            >
              Trailer Sway Control: What Works and What Does Not
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
