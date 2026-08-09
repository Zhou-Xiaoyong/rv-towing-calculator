import type { Metadata } from "next";
import Link from "next/link";
import { FaqJsonLd, ArticleJsonLd } from "@/components/seo/JsonLd";
import { DEFAULT_OG_IMAGES } from "@/lib/seo/default-og-image";

export const metadata: Metadata = {
  title: "How to Back Up a Travel Trailer: Step-by-Step Guide for Beginners",
  description:
    "Learn how to back up a travel trailer with confidence. Step-by-step steering technique, spotter hand signals, common mistakes, and practice drills. Free towing safety guides from RV TowCalc.",
  alternates: {
    canonical: "https://rvtowingcalc.com/guides/how-to-back-up-travel-trailer",
  },
  openGraph: {
    title: "How to Back Up a Travel Trailer: Step-by-Step Guide for Beginners",
    description:
      "Master trailer backing with our complete beginner's guide. Steering technique, spotter signals, jackknifing prevention, and practice drills for RV owners.",
    url: "https://rvtowingcalc.com/guides/how-to-back-up-travel-trailer",
    images: DEFAULT_OG_IMAGES,
  },
};

const FAQS = [
  {
    q: "Why does the trailer turn the opposite way from the steering wheel?",
    a: "Because the hitch ball acts as a pivot point behind the rear axle. When you turn the steering wheel left, the rear of the tow vehicle swings right, which pushes the hitch ball to the right, causing the front of the trailer to move right and the rear of the trailer to go left. The key principle: the bottom of your steering wheel should move in the direction you want the trailer to go. If you want the trailer's rear to go left, turn the bottom of the wheel to the left (which means turning the top of the wheel to the right).",
  },
  {
    q: "Should I use my mirrors or look over my shoulder when backing up?",
    a: "Both have their place. For beginners, looking over your shoulder through the rear window gives you a direct view of the trailer's path and is more intuitive. However, mirrors are essential for monitoring your tow vehicle's sides and checking for obstacles alongside the trailer. Most experienced RVers use a combination: shoulder-check for the primary backing direction and mirrors for situational awareness. Extended towing mirrors are required by law in most states when your trailer obscures your factory mirrors.",
  },
  {
    q: "What is the most common mistake when backing up a travel trailer?",
    a: "Oversteering. Beginners tend to make large steering corrections that cause the trailer to overshoot, then they correct the other way, creating an oscillating S-curve. The fix is to make small steering inputs (no more than a quarter turn of the wheel at a time) and wait for the trailer to respond before adding more. Also, get out and look (GOAL: Get Out And Look) whenever you are unsure of your clearance. Pride causes more backing accidents than lack of skill.",
  },
  {
    q: "How do I prevent jackknifing when backing up?",
    a: "Jackknifing happens when the trailer angle exceeds about 45 degrees relative to the tow vehicle. To prevent it: (1) Never exceed a 45-degree angle between truck and trailer. (2) If you feel the trailer accelerating faster than expected, stop immediately and pull forward to straighten. (3) Back slowly, using only idle speed or light brake pressure. (4) Use your mirrors to watch the trailer's front corners. If they are getting close to your truck's bodywork, you are approaching jackknife. (5) Practice in an empty parking lot with cones before attempting a campsite backing maneuver.",
  },
  {
    q: "Should I back into a campsite from the left or the right side?",
    a: "It is almost always easier to back a trailer to the left (driver's side). This is because you have better visibility on the driver's side through your window and mirror, and the steering geometry makes left-backing more intuitive for most people. When approaching a campsite, plan your approach so you can circle wide and back in from the left if the site layout allows it. If you must back from the right (blind side), use a spotter and proceed extra slowly.",
  },
  {
    q: "How long does it take to learn to back up a travel trailer?",
    a: "Most people can learn the basic mechanics in 2-4 hours of dedicated practice in an empty parking lot. Becoming confident and smooth typically takes 10-20 backing sessions in real-world scenarios. The learning curve is steep at first but plateaus quickly once the hand-eye reversal becomes muscle memory. Set up cones in a parking lot and practice 20-30 repetitions of backing into a designated spot. The muscle memory from deliberate practice is far more valuable than reading about it.",
  },
];

const SPOTTER_SIGNALS = [
  {
    signal: "Both hands up, palms forward",
    meaning: "Stop immediately",
    when: "Any obstacle or clearance issue detected",
  },
  {
    signal: "One hand rotating (like turning a wheel)",
    meaning: "Turn the trailer in that direction",
    when: "Correcting trailer angle during the backup",
  },
  {
    signal: "Hand chopping up and down",
    meaning: "Back up slowly / keep coming",
    when: "Path is clear and you should continue",
  },
  {
    signal: "Flat hand patting downward",
    meaning: "Slow down",
    when: "You are approaching too fast",
  },
  {
    signal: "Thumbs up",
    meaning: "Perfect, hold your line",
    when: "Trailer angle is exactly right",
  },
  {
    signal: "Pointing to a specific side",
    meaning: "Watch that side for clearance",
    when: "Obstacle on one side (tree, post, utilities)",
  },
];

const COMMON_MISTAKES = [
  {
    mistake: "Turning the wheel the wrong way",
    consequence: "Trailer goes opposite of intended direction, requiring correction",
    fix: "Remember: bottom of the wheel moves toward where you want the trailer to go. Practice the motion with the vehicle stationary.",
  },
  {
    mistake: "Backing too fast",
    consequence: "Overcorrection, jackknife, inability to react to obstacles",
    fix: "Use idle speed only. Cover the brake pedal. Backing should feel painfully slow.",
  },
  {
    mistake: "Oversteering (too much wheel input)",
    consequence: "S-curve oscillation, trailer whipsaws back and forth",
    fix: "Make small inputs (quarter turn max). Wait for the trailer to respond before adding more.",
  },
  {
    mistake: "Not checking blind spots (GOAL)",
    consequence: "Hitting trees, posts, utilities, other campers",
    fix: "GOAL: Get Out And Look. When in doubt, stop and walk behind the trailer.",
  },
  {
    mistake: "Ignoring the spotter",
    consequence: "Collision with obstacles the spotter can see but the driver cannot",
    fix: "Agree on hand signals before starting. Stop if you lose sight of the spotter. The spotter has final say.",
  },
  {
    mistake: "Starting from a bad approach angle",
    consequence: "Need to reposition multiple times, frustration, rushed corrections",
    fix: "Circle wide before backing. Position the tow vehicle at a 45-degree angle to the target spot before reversing.",
  },
];

export default function HowToBackUpTravelTrailerPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <FaqJsonLd
        faqs={FAQS}
        baseUrl="https://rvtowingcalc.com/guides/how-to-back-up-travel-trailer"
      />
      <ArticleJsonLd
        title="How to Back Up a Travel Trailer: Step-by-Step Guide for Beginners"
        description="Master trailer backing with our complete beginner's guide. Steering technique, spotter signals, jackknifing prevention, and practice drills for RV owners."
        url="https://rvtowingcalc.com/guides/how-to-back-up-travel-trailer"
        datePublished="2026-08-09"
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
        <span className="text-gray-900">How to Back Up a Travel Trailer</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
        How to Back Up a Travel Trailer: Step-by-Step Guide for Beginners
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        Backing up a travel trailer is the single skill that separates
        confident RV owners from nervous ones. The steering feels reversed, the
        trailer pivots unpredictably, and one wrong move can swing your rig
        into a jackknife. But here is the truth: it is a learned skill, not a
        talent. With the right technique, a spotter you trust, and 30 minutes
        of parking lot practice, anyone can do it. This guide breaks down
        everything you need to know&mdash;the physics, the hand positions, the
        spotter signals, and the five most common mistakes that cause backing
        accidents.
      </p>

      {/* The Physics */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          Why Trailer Steering Feels Backwards
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            When you drive forward, you turn the steering wheel left and the
            vehicle goes left. Simple. But when you back up a trailer, the
            hitch ball becomes a pivot point. The rear of your tow vehicle
            swings in one direction, and the trailer responds by pivoting the
            opposite way.
          </p>
          <p>
            Here is the key principle that makes everything click:
          </p>
          <div className="rounded-xl border-l-4 border-brand-500 bg-brand-50 p-5">
            <p className="text-lg font-semibold text-brand-800">
              The bottom of the steering wheel should move in the direction you
              want the rear of the trailer to go.
            </p>
            <p className="mt-2 text-sm text-brand-700">
              Want the trailer&apos;s rear to swing left? Move the bottom of the
              wheel to the left (turn the top of the wheel to the right). Want
              it to go right? Move the bottom of the wheel to the right (turn
              the top to the left).
            </p>
          </div>
          <p>
            This reversal trips up every beginner. Your brain has spent years
            learning &ldquo;turn left to go left.&rdquo; When you reverse, that
            instinct causes you to steer the wrong way, overcorrect, and create
            a wobbling S-curve. The fix is not to think harder&mdash;it is to
            practice enough that the reversed motion becomes muscle memory.
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-gray-200 p-5 text-center">
              <p className="text-3xl font-bold text-brand-600">6-8 ft</p>
              <p className="mt-1 text-xs text-gray-500">
                Distance from hitch ball to trailer axle (typical travel trailer)
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 p-5 text-center">
              <p className="text-3xl font-bold text-warning-600">45&deg;</p>
              <p className="mt-1 text-xs text-gray-500">
                Maximum safe trailer angle before jackknife risk
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 p-5 text-center">
              <p className="text-3xl font-bold text-safe-600">3 MPH</p>
              <p className="mt-1 text-xs text-gray-500">
                Maximum backing speed for safe control
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-step */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          Step-by-Step: Backing Into a Campsite or Parking Spot
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            Follow these steps every time. Even experienced RVers run through
            this checklist mentally before starting a backup. Rushing is the
            #1 cause of backing damage.
          </p>
          <div className="space-y-4">
            <div className="flex items-start gap-4 rounded-lg border border-gray-200 p-5">
              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-500 text-sm font-bold text-white">
                1
              </span>
              <div>
                <h3 className="font-semibold text-gray-900">
                  Walk the site before you drive into it
                </h3>
                <p className="mt-1 text-sm">
                  Get out and inspect the campsite or parking area. Note the
                  location of trees, utility posts, picnic tables, fire rings,
                  and the water/electric/sewer hookups. Decide exactly where
                  you want the trailer to end up. Identify your
                  &ldquo;drive-side&rdquo; (left) and &ldquo;blind-side&rdquo;
                  (right) obstacles. If possible, plan to back in from the left
                  for maximum visibility.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-lg border border-gray-200 p-5">
              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-500 text-sm font-bold text-white">
                2
              </span>
              <div>
                <h3 className="font-semibold text-gray-900">
                  Circle wide to set up your approach angle
                </h3>
                <p className="mt-1 text-sm">
                  Drive past the spot you want to back into, then circle
                  outward in a wide arc. Your goal is to approach the target
                  spot at roughly a 45-degree angle. The wider your circle, the
                  less turning you need to do while reversing. If the road is
                  narrow, you may need to drive past the site, turn around, and
                  approach from the other direction to get the best angle.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-lg border border-gray-200 p-5">
              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-500 text-sm font-bold text-white">
                3
              </span>
              <div>
                <h3 className="font-semibold text-gray-900">
                  Stop, straighten, and begin reversing slowly
                </h3>
                <p className="mt-1 text-sm">
                  Stop with the tow vehicle and trailer roughly straight. Put
                  the vehicle in reverse. Do not touch the gas pedal in most
                  vehicles&mdash;idle speed is sufficient. Cover the brake
                  pedal with your left foot. Look over your shoulder (driver
                  side) or into your extended towing mirror. Begin rolling
                  backward at walking speed.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-lg border border-gray-200 p-5">
              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-500 text-sm font-bold text-white">
                4
              </span>
              <div>
                <h3 className="font-semibold text-gray-900">
                  Make small steering inputs
                </h3>
                <p className="mt-1 text-sm">
                  Turn the steering wheel in small increments&mdash;no more
                  than a quarter turn at a time. After each input, wait 2-3
                  seconds to see how the trailer responds. The trailer reacts
                  with a delay because the hitch lever arm amplifies small
                  movements. If the trailer starts going the wrong way, turn
                  the wheel the other way. Remember: bottom of the wheel goes
                  where you want the trailer to go.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-lg border border-gray-200 p-5">
              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-500 text-sm font-bold text-white">
                5
              </span>
              <div>
                <h3 className="font-semibold text-gray-900">
                  Pull forward to reset if the angle goes wrong
                </h3>
                <p className="mt-1 text-sm">
                  If the trailer angle exceeds 30-35 degrees, or you are
                  heading in the wrong direction, stop. Shift into drive and
                  pull forward 10-20 feet to straighten the rig. There is no
                  shame in resetting. Professional truck drivers do it every
                  time. Trying to &ldquo;save&rdquo; a bad angle by adding more
                  steering is how jackknives happen.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-lg border border-gray-200 p-5">
              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-500 text-sm font-bold text-white">
                6
              </span>
              <div>
                <h3 className="font-semibold text-gray-900">
                  GOAL: Get Out And Look
                </h3>
                <p className="mt-1 text-sm">
                  When you are close to your final position or near obstacles,
                  stop and get out. Walk behind the trailer. Check clearance
                  on both sides. Verify your utilities reach. This is the
                  single most important habit to build. Pride causes more
                  backing accidents than lack of skill. Get out as many times
                  as you need.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spotter signals */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          Spotter Hand Signals: Agree Before You Move
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            A spotter is not a luxury&mdash;it is a necessity for safe backing,
            especially in tight campsites. But hand signals only work if you
            agree on what they mean before you start. The industry-standard
            signals below are used by commercial drivers and RV instructors
            nationwide:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-gray-300 bg-gray-50">
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Signal
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Meaning
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    When to Use
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {SPOTTER_SIGNALS.map((row) => (
                  <tr key={row.signal}>
                    <td className="px-4 py-3 font-medium text-gray-700">
                      {row.signal}
                    </td>
                    <td className="px-4 py-3 text-gray-600">
                      {row.meaning}
                    </td>
                    <td className="px-4 py-3 text-xs text-gray-600">
                      {row.when}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="rounded-xl border-l-4 border-danger-500 bg-danger-50 p-4">
            <p className="text-sm text-danger-700">
              <strong>Critical rule:</strong> If you lose sight of your spotter
              in any mirror, <strong>stop immediately</strong>. The spotter
              should stand where the driver can see them in the side mirror on
              the backing side. Never use voice commands alone&mdash;engine
              noise, distance, and wind make verbal signals unreliable.
            </p>
          </div>
        </div>
      </section>

      {/* Common mistakes */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          The 6 Most Common Backing Mistakes (and How to Fix Them)
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            Every backing accident falls into one of these categories. Learn
            them, and you will avoid 95% of the damage that happens in
            campsites and storage lots:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-gray-300 bg-gray-50">
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Mistake
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Consequence
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    How to Fix
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {COMMON_MISTAKES.map((row) => (
                  <tr key={row.mistake}>
                    <td className="px-4 py-3 font-medium text-gray-700">
                      {row.mistake}
                    </td>
                    <td className="px-4 py-3 text-xs text-gray-600">
                      {row.consequence}
                    </td>
                    <td className="px-4 py-3 text-xs text-gray-600">
                      {row.fix}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Practice drills */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          Practice Drills: Master Backing Before You Hit the Campground
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            Find an empty parking lot on a weekend morning. Bring 4-6 traffic
            cones (or water bottles). These three drills will take you from
            nervous to confident in about an hour:
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-gray-200 p-5">
              <h3 className="font-semibold text-gray-900">
                Drill 1: Straight-Line Backup (10 minutes)
              </h3>
              <p className="mt-2 text-sm">
                Set up two cones 30 feet apart in a line. Drive past the first
                cone, then back up in a straight line between them. Focus on
                keeping the trailer straight using only your mirrors. If the
                trailer drifts left, turn the bottom of the wheel left to bring
                it back. Practice until you can back 30 feet without the trailer
                deviating more than 2 feet from the center line.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 p-5">
              <h3 className="font-semibold text-gray-900">
                Drill 2: 90-Degree Back-In (20 minutes)
              </h3>
              <p className="mt-2 text-sm">
                Set up four cones in an L-shape representing a campsite entrance
                and a parking pad. Approach from the left (drive side) and back
                the trailer into the &ldquo;pad&rdquo; at a 90-degree angle.
                This simulates the most common campsite backing scenario.
                Practice from both sides (left and right approach). Reset and
                pull forward every time the angle goes bad. Do 10-15
                repetitions.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 p-5">
              <h3 className="font-semibold text-gray-900">
                Drill 3: Offset Lane Change (15 minutes)
              </h3>
              <p className="mt-2 text-sm">
                Set up cones in two parallel lines 8 feet apart, offset by 10
                feet (like a zig-zag). Back the trailer from the first lane into
                the second, requiring you to curve the trailer one direction
                then straighten into the offset lane. This drill builds the
                hand-eye reversal that makes all other backing easier. It is the
                hardest of the three but the most valuable for skill building.
              </p>
            </div>
          </div>
          <div className="rounded-xl border-l-4 border-safe-500 bg-safe-50 p-4">
            <p className="text-sm text-safe-700">
              <strong>Pro tip:</strong> Record yourself backing with your phone
              on a tripod. Watching the playback reveals mistakes in real time
              that you cannot feel from the driver&apos;s seat. Most beginners
              oversteer by 2-3x what is necessary. The video makes it obvious.
            </p>
          </div>
        </div>
      </section>

      {/* Tow vehicle setup */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          Your Tow Vehicle Setup Affects Backing
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            How your trailer is hitched and loaded directly affects backing
            behavior. A poorly set up rig is harder to back even with good
            technique:
          </p>
          <ul className="ml-6 list-disc space-y-2">
            <li>
              <strong>Hitch height:</strong> The hitch ball should be level
              with the trailer coupler when the trailer is loaded. An
              angled hitch (nose-up or nose-down) changes the pivot geometry and
              makes backing feel erratic. See our{" "}
              <Link
                href="/guides/weight-distribution-hitch-setup"
                className="font-semibold text-brand-600 underline"
              >
                WDH Setup Guide
              </Link>{" "}
              for proper height measurement.
            </li>
            <li>
              <strong>Tongue weight:</strong> A trailer with insufficient
              tongue weight (below 10%) will wander during backing just as it
              does going forward. Check your tongue weight with our{" "}
              <Link
                href="/tongue-weight-calculator"
                className="font-semibold text-brand-600 underline"
              >
                Tongue Weight Calculator
              </Link>
              .
            </li>
            <li>
              <strong>Trailer length:</strong> Longer trailers pivot more
              slowly but are easier to back smoothly. Short trailers react
              fast and are harder to control. If you have a short single-axle
              trailer, use even smaller steering inputs.
            </li>
            <li>
              <strong>Towing mirrors:</strong> You cannot back safely if you
              cannot see. Extended towing mirrors are required by law in most
              states. See our guide to{" "}
              <Link
                href="/guides/rv-towing-mirrors-guide"
                className="font-semibold text-brand-600 underline"
              >
                RV towing mirrors
              </Link>{" "}
              for legal requirements and best options.
            </li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-12 rounded-2xl bg-brand-600 p-8 text-center text-white">
        <h2 className="text-2xl font-bold">
          Is Your Rig Ready for the Campground?
        </h2>
        <p className="mt-2 text-brand-100">
          Before you practice backing, make sure your weight distribution,
          tongue weight, and payload are dialed in. A well-balanced rig is
          easier to control in reverse. Check all five in under two minutes.
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
              href="/guides/weight-distribution-hitch-setup"
              className="text-brand-600 hover:underline"
            >
              Weight Distribution Hitch Setup: Step-by-Step Guide
            </Link>
          </li>
          <li>
            <Link
              href="/guides/rv-trailer-sway-control"
              className="text-brand-600 hover:underline"
            >
              RV Trailer Sway Control: Causes, Prevention &amp; Anti-Sway Devices
            </Link>
          </li>
          <li>
            <Link
              href="/guides/rv-towing-mirrors-guide"
              className="text-brand-600 hover:underline"
            >
              RV Towing Mirrors: Legal Requirements, Types &amp; Best Options
            </Link>
          </li>
          <li>
            <Link
              href="/guides/spring-checklist"
              className="text-brand-600 hover:underline"
            >
              Spring Pre-Departure Checklist for RV Owners
            </Link>
          </li>
          <li>
            <Link
              href="/guides/trailer-loading-position"
              className="text-brand-600 hover:underline"
            >
              Trailer Loading Position Guide: The 60/40 Rule
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
              href="https://www.rvia.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 hover:underline"
            >
              RV Industry Association (RVIA) Safety Education
            </a>{" "}
            &mdash; rvia.org
          </li>
          <li>
            <a
              href="https://www.fmcsa.dot.gov/regulations/title49/part/393"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 hover:underline"
            >
              FMCSA 49 CFR Part 393: Coupling Devices &amp; Safe Operation
            </a>{" "}
            &mdash; fmcsa.dot.gov
          </li>
          <li>
            <a
              href="https://rvsafety.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 hover:underline"
            >
              RV Safety &amp; Education Foundation (RVSEF)
            </a>{" "}
            &mdash; rvsafety.com
          </li>
          <li>
            <a
              href="https://www.sae.org/standards/content/j2807_202002/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 hover:underline"
            >
              SAE J2807 Towing Performance Standard
            </a>{" "}
            &mdash; sae.org
          </li>
          <li>
            <a
              href="https://koa.com/blog/rv-backing-tips/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 hover:underline"
            >
              KOA: RV Backing Tips for Beginners
            </a>{" "}
            &mdash; koa.com
          </li>
        </ul>
      </section>
    </div>
  );
}
