import type { Metadata } from "next";
import Link from "next/link";
import { FaqJsonLd, ArticleJsonLd, HowToJsonLd } from "@/components/seo/JsonLd";
import { DEFAULT_OG_IMAGES } from "@/lib/seo/default-og-image";

import AmazonAffiliate from "@/components/AmazonAffiliate";

export const metadata: Metadata = {
  title: "Thanksgiving Traffic: Stop-and-Go Heat and Trailer Brakes",
  description:
    "Crawling through Thanksgiving traffic puts roughly 100°F into your trailer drums per 65 mph stop. The heat math, why drums fade first, and the exit rule.",
  keywords: [
    "thanksgiving traffic towing a travel trailer",
    "trailer brakes overheating in traffic",
    "stop and go traffic with a travel trailer",
    "trailer brake fade",
    "brake controller gain in traffic",
    "thanksgiving travel day rv",
    "transmission temperature towing in a jam",
  ],
  alternates: {
    canonical:
      "https://www.rvtowingcalc.com/guides/thanksgiving-traffic-brake-heat",
  },
  openGraph: {
    title: "Thanksgiving Traffic: Stop-and-Go Heat and Trailer Brakes",
    description:
      "One stop from 65 mph moves 2,900 BTU into eight brakes, and 1,365 of it lands in the trailer's four drums. What a holiday backup does to a 7,600 lb trailer.",
    url: "https://www.rvtowingcalc.com/guides/thanksgiving-traffic-brake-heat",
    images: DEFAULT_OG_IMAGES,
  },
};

const FAQS = [
  {
    q: "How long does it take trailer brakes to cool after a traffic jam?",
    a: "Twenty to thirty minutes at rest for a drum that has been through four or five highway-speed stops, longer if the wheels are tucked behind fender skirts. Rolling at 25 mph cools faster than sitting still, because a moving drum gets air across its face and a parked one only convects. Do not pour water on a hot drum, since the temperature shock warps it and a warped drum pulses the pedal for the rest of the trip.",
  },
  {
    q: "Why do my trailer brakes feel weak at 4 mph?",
    a: "Two reasons stack up. A proportional controller reads deceleration, and the deceleration at walking speed is small, so the output current is small and the trailer contributes almost nothing. At the same time the truck is creeping with the converter slipping and the driver is covering the brake, so the truck's own brakes do the work. Add a shoe that is backed off an eighth of an inch on one wheel and the trailer's share drops further. Nothing is broken. The trailer is simply not being asked to help.",
  },
  {
    q: "Does tow/haul mode help in stop-and-go traffic?",
    a: "Yes, and for a reason that has nothing to do with hills. Tow/haul raises line pressure and holds lower gears, which keeps the converter closer to lockup and cuts the slip that turns into fluid heat at 5 mph. It also firms the downshifts so the truck does not hunt between first and second every time the wave moves. It does not cool the trailer drums, and it does not raise the gain on your brake controller.",
  },
  {
    q: "Is it safe to pull a travel trailer into a holiday backup at all?",
    a: "Yes, with a plan rather than a mood. The two failure modes are drum fade from repeated highway-speed stops and a converter that climbs past 220°F during a long creep. Both are managed by leaving a gap you can stop inside, treating the first exit after 25 minutes as the default, and refusing to close up on the car ahead because the lane next to you is moving.",
  },
];

const ENERGY_TABLE = [
  ["25 mph", "334,000 ft-lb", "430 BTU", "15°F", "The creep itself, nearly free"],
  ["45 mph", "1,083,000 ft-lb", "1,392 BTU", "50°F", "Two thirds the speed, half the heat"],
  ["55 mph", "1,618,000 ft-lb", "2,080 BTU", "74°F", "What most waves arrive at"],
  ["65 mph", "2,260,000 ft-lb", "2,905 BTU", "103°F", "One stop, no cooling"],
  ["70 mph", "2,621,000 ft-lb", "3,369 BTU", "120°F", "Eight percent more speed, 16 percent more heat"],
];

const WEIGHT_TABLE = [
  ["13,000 lb", "2,360 BTU", "84°F", "6,000 lb trailer, half-ton truck"],
  ["16,000 lb", "2,905 BTU", "103°F", "7,600 lb trailer, three-quarter-ton"],
  ["19,000 lb", "3,449 BTU", "123°F", "12,000 lb fifth wheel, dually"],
];

const ATF_TABLE = [
  ["175°F", "100,000 mi", "Unloaded highway, cool morning"],
  ["195°F", "50,000 mi", "Loaded climb at 70 mph"],
  ["215°F", "25,000 mi", "Long grade, or a hot creep"],
  ["235°F", "12,500 mi", "Fluid varnish forming now"],
];

const STEPS = [
  {
    name: "Weigh the rig as it will travel",
    text: "Energy scales with mass, and mass is the one number in this article you can still change at the driveway. A 16,000 lb combination puts 2,905 BTU into the brakes from 65 mph; a 19,000 lb combination puts 3,449. Run the loaded weight through the GCWR calculator before you decide the water tank stays full for the whole trip.",
  },
  {
    name: "Test the trailer brakes at 20 mph and write the gain down",
    text: "Empty lot, dry pavement, 20 to 25 mph, then squeeze the manual lever until the rig is clearly slowing. The trailer should pull down hard without locking a wheel, and the truck should feel like it is being held back rather than pushed. If a wheel locks, back the gain off two numbers. Write the setting on a note in the truck, because the number you tuned in July is the number you need in November.",
  },
  {
    name: "Check shoe adjustment before the holiday, not during it",
    text: "A shoe backed off an eighth of an inch at one wheel end means the other three absorb that wheel's share, which turns a 103°F stop into 137°F on the drums that are working. Spin each wheel with the trailer jacked and listen for drag that is even, then confirm the adjuster slots are not seized. Self-adjusting assemblies still need the initial setting correct.",
  },
  {
    name: "Baseline your tire temperatures",
    text: "A TPMS that reports temperature is the cheapest brake pyrometer on the rig. Note all four trailer wheel temperatures after twenty minutes at 60 mph on flat ground, then use those numbers as the baseline. A wheel end running 30°F hotter than its twin after a long creep is a dragging shoe, a tight bearing, or a brake that never fully released.",
  },
  {
    name: "Set the gap rule in feet, not car lengths",
    text: "At 55 mph the rig covers 81 feet per second. A four-second gap is 324 feet, which is roughly the length of a football field and looks absurd in a backup until the wave stops dead. Below 10 mph the rule flips: leave enough room to see the rear tires of the car ahead on the pavement, which is about six feet, so you can steer around it if it dies in place.",
  },
  {
    name: "Pick the exits before you need one",
    text: "Scan the route for three things: a truck stop with a pull-through lane, a Walmart or a mall lot with a wide entrance, and any exit with a frontage road. Twenty minutes parked in the far corner of a lot is a full cool-down. Doing it at an exit you chose an hour earlier takes no decisions, and decisions are the thing you have least of at hour three.",
  },
];

export default function ThanksgivingTrafficBrakeHeatPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <ArticleJsonLd
        title="Thanksgiving Traffic: 40 Miles of Stop-and-Go With a 7,600 lb Trailer"
        description="The braking energy behind a holiday traffic jam, why trailer drums fade before the truck's discs, the gain setting that stops working below 25 mph, and the cool-down rule that keeps a Thanksgiving tow out of the ditch."
        url="https://www.rvtowingcalc.com/guides/thanksgiving-traffic-brake-heat"
        datePublished="2026-11-19"
      />
      <FaqJsonLd
        faqs={FAQS}
        baseUrl="https://www.rvtowingcalc.com/guides/thanksgiving-traffic-brake-heat"
      />
      <HowToJsonLd
        name="How to prepare a truck and trailer for Thanksgiving stop-and-go traffic"
        description="Weigh the loaded rig, test and record trailer brake gain at 20 mph, verify shoe adjustment, baseline tire temperatures, set a following gap in feet, and choose cool-down exits before departure."
        steps={STEPS}
        totalTime="PT45M"
        url="https://www.rvtowingcalc.com/guides/thanksgiving-traffic-brake-heat"
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
        <span className="text-gray-900">Thanksgiving Traffic</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
        Thanksgiving Traffic: 40 Miles of Stop-and-Go With a 7,600 lb Trailer
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        The wave reaches you at 65 mph, brakes you to 12, and disappears up the
        road. Two minutes later it comes back. On the Wednesday before
        Thanksgiving that cycle runs for two hours across twelve miles, and the
        trailer behind you absorbs every one of those stops through four
        cast-iron drums that get almost no air at eight miles an hour.
      </p>
      <p className="mt-3 text-lg text-gray-600">
        One full stop from 65 mph with a 16,000 lb combination moves 2.26
        million ft-lb of energy. That is 2,905 BTU, and about 1,365 of it lands
        in the trailer&rsquo;s four drums. A hundred and three degrees of iron,
        per stop, with nowhere to go.
      </p>

      <div className="mt-8 rounded-xl bg-brand-50 p-6">
        <h2 className="text-lg font-bold text-brand-800">The Short Answer</h2>
        <p className="mt-2 text-brand-700">
          A traffic jam is a heat problem wearing a time problem&rsquo;s
          clothes. The trailer carries roughly 120 lb of iron across four wheel
          ends, which is 13 BTU per degree, the smallest heat sink on the rig.
          Every 65-to-zero stop adds about 100°F to it. Five of those without a
          cool-down puts the drums at 575°F, past the point where a drum brake
          behaves predictably. The creeping itself costs 15°F a stop and is
          nearly free. What costs you is the wave arriving at highway speed, and
          the fix is a 20-minute exit rather than a lighter foot on the pedal.
        </p>
      </div>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Braking Energy Goes With the Square of Speed
      </h2>
      <p className="mt-3 text-gray-700">
        Kinetic energy is one half the mass times velocity squared, and the
        velocity is in feet per second. A rig at 65 mph is moving 95 feet per
        second, so doubling the speed to 130 would quadruple the energy the
        brakes have to turn into heat. Even the modest jump from 45 to 65 mph is
        a factor of 2.1, which is why a backup that never exceeds 65 still
        punishes the brakes much harder than one that never exceeds 45.
      </p>
      <p className="mt-3 text-gray-700">
        The split matters too. A 7,600 lb trailer behind an 8,400 lb truck is
        47 percent of the combination, and a correctly set trailer brake system
        carries close to its share. Call it 1,365 BTU into the trailer and the
        rest into the truck. The truck has vented discs out in the air stream.
        The trailer has four drums with a wheel and a fender skirt around each
        one.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">
                Speed before the stop
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Energy, whole rig
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Total heat
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Rise in the trailer drums
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                What it means in a jam
              </th>
            </tr>
          </thead>
          <tbody>
            {ENERGY_TABLE.map((row, i) => (
              <tr
                key={row[0]}
                className={row[0] === "65 mph" ? "bg-danger-50" : i % 2 === 1 ? "bg-gray-50" : ""}
              >
                <td className="border px-3 py-2 text-xs font-mono font-semibold">
                  {row[0]}
                </td>
                <td className="border px-3 py-2 text-xs font-mono">{row[1]}</td>
                <td className="border px-3 py-2 text-xs font-mono">{row[2]}</td>
                <td className="border px-3 py-2 text-xs font-mono font-semibold">
                  {row[3]}
                </td>
                <td className="border px-3 py-2 text-xs">{row[4]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm text-gray-500">
        Computed for a 16,000 lb combination from one half m v squared, with 47
        percent of the braking done by the trailer and 120 lb of iron across its
        four wheel ends at 0.11 BTU per pound per degree. Assumes no cooling
        during the stop, which is close to true at low speed and generous at
        highway speed.
      </p>

      <p className="mt-4 text-gray-700">
        Read the first row and the fourth row together. The creeping that eats
        your afternoon is worth 15°F a stop. The single stop from highway speed
        is worth 103°F. Everything the drums do wrong in a holiday backup
        happens in the thirty seconds when the wave finally reaches you, and
        then the heat has nowhere to go because you are rolling at 8 mph.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Why the Trailer Loses Its Brakes First
      </h2>
      <p className="mt-3 text-gray-700">
        A drum brake is a closed cylinder with friction material pushing
        outward against the inside of the wall. The shoes heat the drum, the
        drum heats the air inside it, and that air is trapped behind a wheel and
        often behind a fender skirt. A disc brake is an open plate with vanes
        between the faces, hanging in whatever air the wheel well provides.
        Compare the two at 5 mph and the disc still cools while the drum mostly
        soaks.
      </p>
      <p className="mt-3 text-gray-700">
        Then there is the mass question. Four trailer wheel ends hold about 120
        lb of iron, and iron stores 0.11 BTU per pound per degree. That works
        out to 13 BTU for every degree of temperature. A modern half-ton
        truck&rsquo;s four rotors are heavier, are vented, and sit in a wheel
        well with more open area around them. The trailer is the smallest heat
        sink in the system and it is carrying the largest share of the load per
        pound of iron.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">
                Combination weight
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Heat from one 65 mph stop
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Rise in the trailer drums
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Typical rig
              </th>
            </tr>
          </thead>
          <tbody>
            {WEIGHT_TABLE.map((row, i) => (
              <tr key={row[0]} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                <td className="border px-3 py-2 text-xs font-mono font-semibold">
                  {row[0]}
                </td>
                <td className="border px-3 py-2 text-xs font-mono">{row[1]}</td>
                <td className="border px-3 py-2 text-xs font-mono font-semibold">
                  {row[2]}
                </td>
                <td className="border px-3 py-2 text-xs">{row[3]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm text-gray-500">
        Same assumptions as the table above, scaled by weight. The rise is
        per stop with no cooling and no prior heat in the drum, so real numbers
        after the third stop are worse rather than better.
      </p>

      <p className="mt-4 text-gray-700">
        Past roughly 500°F the lining&rsquo;s friction coefficient starts to
        fall while the magnet keeps pulling with the same force. The drum also
        grows away from the shoes as it heats, which adds clearance exactly when
        you want less. Retardation drops, pedal effort does not, and the driver
        experiences it as a rig that suddenly needs more room.
      </p>
      <p className="mt-3 text-gray-700">
        The dangerous part is where that shows up. Fade does not announce itself
        at 65 mph, because at 65 you are braking hard enough to notice the
        change and you have a long runway to react. It shows up at 4 mph, when
        the wave stops dead for the ninth time, and the trailer contributes
        almost nothing while the truck tries to hold 16,000 lb with brakes that
        have been hot for an hour. That is the bump in the bumper. It is also
        why the{" "}
        <Link
          href="/guides/trailer-brake-inspection-replacement"
          className="text-brand-600 hover:underline"
        >
          brake inspection guide
        </Link>{" "}
        puts shoe thickness and drum condition ahead of pad life on the truck.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        The Gain You Set on a Dry Road at 25 mph
      </h2>
      <p className="mt-3 text-gray-700">
        A proportional controller measures deceleration and sends current in
        proportion to it. At 3 mph the deceleration is a fraction of a g, so the
        output is a fraction of full current, and the trailer&rsquo;s magnets
        barely engage. Physics is doing what it was told. The result is that in
        a creep the truck is stopping the whole combination, which is the exact
        opposite of what the controller was bought for.
      </p>
      <p className="mt-3 text-gray-700">
        Two adjustments help without making the trailer grabby. First, verify
        the gain with a real test rather than a guess: 20 to 25 mph on dry
        pavement, manual lever squeezed until the rig is clearly slowing, and a
        target where the trailer holds the truck back without locking a wheel.
        Second, use the manual lever in a backup instead of the pedal for the
        long, slow stops, because the lever commands trailer current directly
        and the pedal does not. The{" "}
        <Link
          href="/guides/trailer-brake-controller-setup"
          className="text-brand-600 hover:underline"
        >
          controller setup walkthrough
        </Link>{" "}
        covers the full sequence, including the breakaway check most owners skip.
      </p>
      <p className="mt-3 text-gray-700">
        Watch the temperatures while you do it. A TPMS that reports wheel
        temperature gives you a brake pyrometer for the price of four sensors,
        and a trailer wheel end running 30°F above its twin after a creep is
        either a dragging shoe or a bearing on the way out. Both are cheaper to
        find in a parking lot than on the shoulder.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        The Converter Is Working at Walking Speed
      </h2>
      <p className="mt-3 text-gray-700">
        Below roughly 1,500 rpm the torque converter is not locked, and a
        converter in that state multiplies torque by slipping, which is another
        way of saying it turns fuel into heat in the fluid. At 65 mph the
        converter is locked and the transmission cooler has 65 mph of air
        through it. At 5 mph it is slipping at maximum multiplication and the
        cooler has whatever the fan pulls through a radiator that is already hot
        from the engine.
      </p>
      <p className="mt-3 text-gray-700">
        Transmission shops have used the same rule of thumb for decades: fluid
        life halves for every 20°F above 175°F. It is approximate and it is
        directionally right, and it explains why a rig that tows happily all
        summer can come out of a November backup with varnished fluid.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">
                Fluid temperature
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Expected fluid life
              </th>
              <th className="border px-3 py-2 text-left font-semibold">
                Where you see it
              </th>
            </tr>
          </thead>
          <tbody>
            {ATF_TABLE.map((row, i) => (
              <tr
                key={row[0]}
                className={row[0] === "235°F" ? "bg-danger-50" : i % 2 === 1 ? "bg-gray-50" : ""}
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
        Industry rule of thumb, not a manufacturer specification. Check your
        own owner&rsquo;s manual for the fluid and the interval, and treat the
        cluster gauge as the authority on temperature.
      </p>

      <p className="mt-4 text-gray-700">
        Practical countermeasures cost nothing. Run tow/haul so the truck holds
        a lower gear and keeps line pressure up, which shortens the slip. When
        the wave stops you for more than a minute, shift to neutral with your
        foot on the brake and let the converter unload. And if the gauge climbs
        past 220°F and stays there, the next exit is a stop, not a suggestion.
        The{" "}
        <Link href="/guides/tow-haul-mode-explained" className="text-brand-600 hover:underline">
          tow/haul explainer
        </Link>{" "}
        covers what the mode changes and what it does not.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        The On-Ramp Is Where the Jam Collects
      </h2>
      <p className="mt-3 text-gray-700">
        When the backup breaks, the merge is the first place you ask the rig for
        something it has not done in two hours. A 16,000 lb combination behind a
        400 hp engine is 40 lb per horsepower. The sedan that just cut in front
        of you is 20. The ramp is the same 900 feet for both of you, and yours
        starts from 5 mph with drums at 500°F.
      </p>
      <p className="mt-3 text-gray-700">
        Two habits pay for themselves here. Leave a gap on the ramp instead of
        tailgating the merge, so you can build speed before the lane ends rather
        than stopping again at the gore. And check the trailer brake feel once
        you are at speed, with a light manual squeeze at 45 mph, because that is
        the first honest report you will get on whether the drums recovered
        during the last ten minutes of rolling.
      </p>
      <p className="mt-3 text-gray-700">
        The mass that sets all of this is your combined weight, which is the
        same number the{" "}
        <Link href="/gcwr-calculator" className="text-brand-600 hover:underline">
          GCWR calculator
        </Link>{" "}
        produces. It is a legal limit and a stopping-distance input at the same
        time, and the second use gets ignored until a November merge.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        What the Wednesday Window Looks Like
      </h2>
      <p className="mt-3 text-gray-700">
        Holiday congestion has a shape you can plan around. The heaviest outbound
        window runs from early afternoon into the evening on the Wednesday, with
        the first hour of every trip landing inside it because that is when
        everyone leaves. Friday and Saturday mornings run light. The Sunday
        return is the one that turns dark on you, and a rig arriving at a
        campground after the office closes has its own set of problems, which
        the{" "}
        <Link
          href="/guides/thanksgiving-rv-trip-weight-and-fuel-budget"
          className="text-brand-600 hover:underline"
        >
          Thanksgiving fuel and weight budget guide
        </Link>{" "}
        covers alongside the mileage math.
      </p>
      <p className="mt-3 text-gray-700">
        The other feature of the window is temperature. November pavement in the
        Northeast and the upper Midwest runs cold, and cold drums shed heat to a
        cold wheel well more slowly than most drivers assume. Leave at 10 a.m.
        instead of 4 p.m. and you trade a two-hour backup for three hours of
        daylight and cool air. If the return slips past sunset, the{" "}
        <Link
          href="/guides/thanksgiving-night-towing-deer"
          className="text-brand-600 hover:underline"
        >
          after-dark towing guide
        </Link>{" "}
        is the companion piece, because following distance at night is set by
        headlight reach rather than by brake temperature.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Six Checks Before You Leave the Driveway
      </h2>
      <p className="mt-3 text-gray-700">
        None of this needs a part. It needs a scale ticket, an empty lot, and
        forty-five minutes with the trailer loaded.
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
        One number worth holding onto for the drive. Five highway-speed stops
        with no cooling puts a trailer drum about 515°F above ambient, which on a
        40°F November morning is 555°F, and that is already past the useful
        range. The count starts over after twenty minutes of rolling at 25 mph
        or fifteen minutes parked in a lot. Track it the way you track fuel,
        because the drum will not tell you until it is too late to care.
      </p>

      <div className="mt-10 rounded-2xl bg-brand-600 p-8 text-center text-white">
        <h2 className="text-2xl font-bold">Know the Mass You Have to Stop</h2>
        <p className="mt-2 text-brand-100">
          Combined weight sets braking energy, and braking energy sets drum
          temperature. Run your real numbers before the holiday drive.
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

      <p className="mt-8 text-gray-700">
        The recommendation is a hard rule: at 25 minutes of crawling, take the
        next exit and sit for twenty. Roll the last mile into the lot at walking
        pace with the manual lever, not the pedal, and let the drums come down
        before you rejoin. The cost is a later arrival and the small humiliation
        of watching your lane go on without you. The alternative is a fade you
        discover at 4 mph with a car six feet off your bumper, and that one is
        not a scheduling problem.
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

      <AmazonAffiliate categories={["brake-controller", "tpms"]} />

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Sources &amp; References
      </h2>
      <ul className="mt-3 space-y-1 text-sm text-gray-600">
        <li>
          <a
            href="https://www.ecfr.gov/current/title-49/subtitle-B/chapter-V/part-571/subpart-B/section-571.135"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            NHTSA Federal Motor Vehicle Safety Standard 135: light vehicle
            brake systems, including fade and hot-stop performance
          </a>
        </li>
        <li>
          <a
            href="https://www.sae.org/standards/content/j2807_202001/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            SAE J2807: performance requirements for determining tow-vehicle
            gross combination weight rating
          </a>
        </li>
        <li>
          <a
            href="https://www.nhtsa.gov/equipment/tires"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            NHTSA: tire care, load limits, and trailer safety guidance
          </a>
        </li>
        <li>
          <a
            href="https://www.fmcsa.dot.gov/ourroads/brake-systems"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            FMCSA: brake system inspection guidance, including drum and shoe
            checks
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
              href="/guides/trailer-brake-inspection-replacement"
              className="text-brand-600 hover:underline"
            >
              Trailer Brake Inspection and Replacement
            </Link>
          </li>
          <li>
            <Link
              href="/guides/tow-haul-mode-explained"
              className="text-brand-600 hover:underline"
            >
              Tow/Haul Mode Explained
            </Link>
          </li>
          <li>
            <Link
              href="/guides/mountain-towing-transmission-gears"
              className="text-brand-600 hover:underline"
            >
              Mountain Towing: Transmission Temperature and Gears
            </Link>
          </li>
          <li>
            <Link
              href="/guides/thanksgiving-night-towing-deer"
              className="text-brand-600 hover:underline"
            >
              Thanksgiving Drive Home After Dark
            </Link>
          </li>
          <li>
            <Link
              href="/guides/thanksgiving-rv-trip-weight-and-fuel-budget"
              className="text-brand-600 hover:underline"
            >
              Thanksgiving Trip Weight and Fuel Budget
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
