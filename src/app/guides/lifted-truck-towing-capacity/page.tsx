import type { Metadata } from "next";
import Link from "next/link";
import { FaqJsonLd, ArticleJsonLd } from "@/components/seo/JsonLd";
import { DEFAULT_OG_IMAGES } from "@/lib/seo/default-og-image";

export const metadata: Metadata = {
  title:
    "Towing With a Lifted Truck: How Lift Kits Affect Towing Capacity and Safety",
  description:
    "Lift kits change hitch geometry, suspension travel, and axle angles. Learn how much towing capacity you lose, what modifications restore safety, and whether a lifted truck can safely tow your RV.",
  alternates: {
    canonical: "https://www.rvtowingcalc.com/guides/lifted-truck-towing-capacity",
  },
  openGraph: {
    title: "Towing With a Lifted Truck: Capacity Loss, Safety Risks & Fixes",
    description:
      "Lift kits can reduce towing capacity by 20-40%. Learn the real numbers, how hitch geometry changes, and what modifications you need to tow safely with a lifted truck.",
    url: "https://www.rvtowingcalc.com/guides/lifted-truck-towing-capacity",
    images: DEFAULT_OG_IMAGES,
  },
};

const FAQS = [
  {
    q: "Does a lift kit reduce towing capacity?",
    a: "Yes. A suspension lift kit changes the geometry of the suspension, drivetrain, and hitch, which reduces the manufacturer's rated towing capacity. Most lift kit manufacturers explicitly state that their products reduce or void tow ratings. A 4-6 inch lift can reduce effective towing capacity by 20-40% because the lifted suspension alters axle angles, changes the hitch receiver height, and shifts weight distribution. The manufacturer tow rating assumes stock suspension geometry; any modification voids that assumption.",
  },
  {
    q: "How much towing capacity do you lose with a 6-inch lift?",
    a: "A 6-inch lift typically reduces effective towing capacity by 25-40%. The exact loss depends on the lift type (suspension vs body), whether the kit includes corrected axle geometry (drop brackets, track bar relocation), and whether the hitch height is corrected with a drop hitch. For example, a stock Ford F-250 rated for 15,000 lbs might safely tow only 9,000-11,000 lbs after a 6-inch lift without geometry correction. The loss comes from: altered driveshaft angles (increased wear and vibration), raised hitch point (poor tongue weight distribution), reduced suspension travel under load, and changed brake proportioning.",
  },
  {
    q: "Can you tow a travel trailer with a lifted truck?",
    a: "You can, but only with careful modifications and realistic capacity reduction. The three critical requirements are: (1) a drop hitch that restores the trailer coupler to level, (2) corrected axle geometry to prevent excessive driveshaft and CV joint angles, and (3) a realistic understanding that your tow rating is now 20-40% lower than stock. You also need to verify that the lifted suspension can handle the additional tongue weight without bottoming out. Many lifted trucks use softer springs for off-road articulation, which sag dangerously under trailer tongue load.",
  },
  {
    q: "What hitch do I need for a lifted truck?",
    a: "A lifted truck needs a drop hitch (also called a drop-down hitch or adjustable drop hitch) to bring the trailer coupler back to a level position. The rule of thumb: measure from the ground to the top of your receiver opening with the truck on level ground, then subtract 17-19 inches (the typical coupler height for a travel trailer on level ground). The difference is the drop you need. For a 6-inch lifted truck, this usually means a 4-6 inch drop hitch. For a 10-inch lift, you may need an 8-10 inch drop. Use an adjustable hitch so you can fine-tune for different trailers.",
  },
  {
    q: "Does a body lift affect towing the same as a suspension lift?",
    a: "No. A body lift (which raises the body on the frame using spacers) has minimal impact on towing capacity because it does not change suspension geometry, axle angles, or driveshaft alignment. The main consideration with a body lift is that the hitch receiver is mounted to the frame, so it stays at stock height while the body rises. This can create bumper and bed-rail clearance issues but does not significantly alter tow ratings. Suspension lifts, on the other hand, change every angle that matters for towing and are the primary source of capacity reduction.",
  },
  {
    q: "Do lifted trucks need a weight distribution hitch?",
    a: "Yes, and arguably more so than stock trucks. A lifted truck's altered suspension geometry means the rear end may squat more under tongue weight, and the raised hitch point can create a steeper angle on the trailer frame. A weight distribution hitch (WDH) helps restore proper weight distribution between the truck's axles and keeps the trailer level. For lifted trucks towing over 5,000 lbs, a WDH is strongly recommended. For trailers over 8,000 lbs, it is essential. Make sure the WDH shank is compatible with your drop hitch setup.",
  },
];

const LIFT_IMPACTS = [
  {
    component: "Hitch height",
    stock: "17-19 inches (typical receiver height)",
    lifted: "23-29 inches (4-6 inch lift)",
    impact: "Trailer tongue points nose-up; uneven tire wear, reduced sway stability",
    fix: "Drop hitch (4-10 inch drop depending on lift height)",
  },
  {
    component: "Driveshaft angle",
    stock: "Within 3 degrees of optimal",
    lifted: "5-8+ degrees (increased U-joint stress)",
    impact: "Vibration at speed, accelerated U-joint wear, potential driveshaft failure",
    fix: "Drop transfer case brackets, corrected control arms, or custom driveshaft",
  },
  {
    component: "Suspension travel",
    stock: "Designed for rated tongue weight + cargo",
    lifted: "Longer shocks/springs may be softer; bottom-out risk under load",
    impact: "Rear suspension bottoms out, trailer porpoising, loss of steering control",
    fix: "HD springs or air bags rated for tow load; verify spring rate before lifting",
  },
  {
    component: "Brake proportioning",
    stock: "Calibrated for stock ride height",
    lifted: "Altered weight transfer under braking",
    impact: "Rear brakes lock prematurely or front brakes work too hard; longer stops",
    fix: "Adjustable proportioning valve; upgraded brake pads/rotors; brake controller tuning",
  },
  {
    component: "Axle / CV angles",
    stock: "Within manufacturer spec",
    lifted: "Increased angles on IFS trucks; accelerated wear",
    impact: "Premature axle boot failure, CV joint clicking, potential axle breakage",
    fix: "Drop brackets, diff drops, or corrected axle geometry kits",
  },
  {
    component: "Center of gravity",
    stock: "Low, stable",
    lifted: "Raised 4-6 inches",
    impact: "Increased body roll in corners, reduced emergency maneuver stability",
    fix: "Wider track, upgraded sway bars; drive conservatively with trailer attached",
  },
];

const CAPACITY_LOSS = [
  {
    liftHeight: "2-3 inch leveling kit",
    estLoss: "5-15%",
    notes: "Minimal impact if hitch height corrected; mostly affects IFS axle angles",
  },
  {
    liftHeight: "4 inch suspension lift",
    estLoss: "15-25%",
    notes: "Requires drop hitch and geometry correction; significant for heavy trailers",
  },
  {
    liftHeight: "6 inch suspension lift",
    estLoss: "25-40%",
    notes: "Major geometry changes; drop hitch + axle correction essential",
  },
  {
    liftHeight: "8+ inch suspension lift",
    estLoss: "35-50%+",
    notes: "Generally not recommended for serious towing; extensive mods required",
  },
  {
    liftHeight: "Body lift (any height)",
    estLoss: "0-5%",
    notes: "Minimal mechanical impact; hitch height and bed clearance are main concerns",
  },
];

const CHECKLIST = [
  "Measure receiver height with truck on level ground; calculate required drop hitch size",
  "Install a quality adjustable drop hitch rated for your trailer's loaded tongue weight",
  "Verify trailer coupler is level when connected; nose-up or nose-down both cause problems",
  "Check driveshaft angles; vibration over 55 mph indicates excessive U-joint angle",
  "Inspect CV boots and axle angles on IFS trucks; replace torn boots immediately",
  "Upgrade to HD rear springs or add air bags rated for your loaded tongue weight",
  "Re-tune brake controller after lifting; brake gain may need adjustment",
  "Verify WDH shank is compatible with drop hitch; may need extended shank",
  "Recalculate your effective tow rating at 60-75% of stock rating (not 80%)",
  "Weigh the rig at a CAT scale after all mods; verify axle weights and tongue weight",
];

export default function LiftedTruckTowingPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <FaqJsonLd
        faqs={FAQS}
        baseUrl="https://www.rvtowingcalc.com/guides/lifted-truck-towing-capacity"
      />
      <ArticleJsonLd
        title="Towing With a Lifted Truck: How Lift Kits Affect Towing Capacity and Safety"
        description="Lift kits can reduce towing capacity by 20-40%. Learn the real numbers, how hitch geometry changes, and what modifications you need to tow safely with a lifted truck."
        url="https://www.rvtowingcalc.com/guides/lifted-truck-towing-capacity"
        datePublished="2026-08-16"
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
        <span className="text-gray-900">Lifted Truck Towing Capacity</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
        Towing With a Lifted Truck: How Lift Kits Affect Towing Capacity
        and Safety
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        Lifted trucks look great and handle off-road terrain with ease. But
        when it comes to towing an RV, that lift kit is working against
        you. Raised suspension changes hitch geometry, alters driveshaft
        angles, softens spring rates, and shifts brake proportioning. The
        result: your truck&apos;s rated towing capacity drops by 20-40%,
        and the trailer may tow nose-up, sway more, and wear components
        faster. This guide breaks down exactly what changes, how much
        capacity you lose, and what modifications you need to tow safely
        with a lifted truck.
      </p>

      {/* How lifts affect towing */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          How Lift Kits Change Towing Dynamics
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            A suspension lift raises the truck body and frame higher off
            the axles. This sounds simple, but it changes six critical
            systems that affect towing safety and capacity. Understanding
            each one helps you decide whether your lifted truck is up to
            the job.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-gray-300 bg-gray-50">
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Component
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Stock
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Lifted
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Impact
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Fix
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {LIFT_IMPACTS.map((row) => (
                  <tr key={row.component}>
                    <td className="px-4 py-3 font-medium text-gray-700">
                      {row.component}
                    </td>
                    <td className="px-4 py-3 text-xs text-gray-600">
                      {row.stock}
                    </td>
                    <td className="px-4 py-3 text-xs text-gray-600">
                      {row.lifted}
                    </td>
                    <td className="px-4 py-3 text-xs text-danger-700">
                      {row.impact}
                    </td>
                    <td className="px-4 py-3 text-xs text-gray-600">
                      {row.fix}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            The most dangerous combination is a tall lift (6+ inches) with
            no geometry correction and no drop hitch. The trailer rides
            nose-up, the tongue weight transfers poorly, and the
            driveshaft vibrates at highway speed. This is not just
            uncomfortable; it is a safety hazard that increases sway risk
            and component failure.
          </p>
        </div>
      </section>

      {/* Capacity loss by lift height */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          Towing Capacity Loss by Lift Height
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            No lift kit manufacturer will give you a precise capacity
            reduction figure because it depends on your specific truck,
            trailer, and modifications. But based on industry data and
            experienced tower reports, here are the realistic ranges.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-gray-300 bg-gray-50">
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Lift Type & Height
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Est. Capacity Loss
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Notes
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {CAPACITY_LOSS.map((row) => (
                  <tr key={row.liftHeight}>
                    <td className="px-4 py-3 font-medium text-gray-700">
                      {row.liftHeight}
                    </td>
                    <td className="px-4 py-3 font-semibold text-danger-700">
                      {row.estLoss}
                    </td>
                    <td className="px-4 py-3 text-gray-600">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="rounded-xl border-l-4 border-warning-500 bg-warning-50 p-5">
            <h3 className="font-semibold text-warning-700">
              The 60-75% Rule for Lifted Trucks
            </h3>
            <p className="mt-2 text-sm text-warning-700">
              While stock trucks should follow the 80% rule (loaded trailer
              at no more than 80% of max tow rating), lifted trucks should
              be more conservative. Use 60-75% of the stock tow rating as
              your safe maximum, depending on lift height and whether
              geometry correction is installed. A 6-inch lifted F-250
              rated at 15,000 lbs should not tow more than 9,000-11,000
              lbs in practice. Exceeding this risks mechanical failure,
              poor handling, and voided insurance coverage.
            </p>
          </div>
        </div>
      </section>

      {/* Drop hitch section */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          Drop Hitches: The Most Important Modification
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            When you lift a truck, the receiver hitch moves up with the
            frame. The trailer coupler, however, stays at the same height.
            Without a drop hitch, the trailer tongue points upward, which
            shifts weight off the front axle of the trailer, reduces
            tongue weight effectiveness, and increases sway.
          </p>
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-5">
            <h3 className="font-semibold text-gray-900">
              How to Calculate the Right Drop
            </h3>
            <ol className="mt-3 ml-6 list-decimal space-y-2 text-sm text-gray-700">
              <li>
                Park your truck on level ground. Measure from the ground
                to the top inside edge of the receiver tube opening.
              </li>
              <li>
                Measure from the ground to the bottom of the trailer
                coupler (with the trailer level).
              </li>
              <li>
                Subtract the coupler height from the receiver height. The
                result is the drop you need.
              </li>
            </ol>
            <p className="mt-3 text-sm text-gray-700">
              <strong>Example:</strong> Lifted truck receiver at 26
              inches. Trailer coupler at 19 inches. Required drop = 7
              inches. Choose an adjustable drop hitch with a range that
              includes 7 inches.
            </p>
          </div>
          <p>
            Use a high-quality adjustable drop hitch rated for your
            trailer&apos;s loaded tongue weight. Cheap drop hitches flex
            under load, which causes trailer porpoising and unsafe
            handling. Look for hitches rated to 12,000+ lbs GTW and
            1,200+ lbs tongue weight, with solid aluminum or steel
            construction.
          </p>
          <div className="rounded-xl border-l-4 border-danger-500 bg-danger-50 p-4">
            <p className="text-sm text-danger-700">
              <strong>Warning:</strong> Never tow with the trailer nose-up.
              If you cannot achieve a level trailer with your current drop
              hitch, do not tow. Nose-up trailers are the leading
              mechanical cause of trailer sway and loss of control.
            </p>
          </div>
        </div>
      </section>

      {/* Geometry correction */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          Suspension Geometry Correction
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            A suspension lift raises the frame relative to the axles,
            which changes the angles of the control arms, track bars,
            driveshafts, and steering linkages. Without correction, these
            altered angles cause accelerated wear, vibration, and
            potential failure.
          </p>
          <h3 className="text-lg font-semibold text-gray-900">
            Required Geometry Corrections by Lift Height
          </h3>
          <ul className="ml-6 list-disc space-y-2">
            <li>
              <strong>2-3 inch level:</strong> Minimal correction needed;
              upper control arms may help on IFS trucks to restore ball
              joint angles
            </li>
            <li>
              <strong>4 inch lift:</strong> Drop brackets for the track
              bar and control arms; driveshaft spacer or extended shaft;
              brake line extensions
            </li>
            <li>
              <strong>6 inch lift:</strong> Full geometry correction kit
              (drop brackets, corrected control arms, track bar
              relocation, extended brake lines, custom or extended
              driveshaft)
            </li>
            <li>
              <strong>8+ inch lift:</strong> Extensive custom work;
              long-travel suspension components; often not practical for
              regular towing
            </li>
          </ul>
          <p>
            Independent front suspension (IFS) trucks (most half-tons and
            some HD trucks) are more sensitive to lift geometry than
            solid axle trucks. CV axle angles, in particular, become
            critical above 3-4 inches of lift. Solid axle trucks (RAM
            2500/3500, Ford F-250/350 with solid front axle) are more
            forgiving but still need driveshaft angle correction.
          </p>
        </div>
      </section>

      {/* Pre-tow checklist */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          Lifted Truck Pre-Tow Safety Checklist
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            Before towing with a lifted truck, run through this checklist.
            Every item matters for safe towing.
          </p>
          <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
            <h3 className="font-semibold text-gray-900">
              Pre-Departure Inspection
            </h3>
            <ul className="mt-3 space-y-2 text-sm">
              {CHECKLIST.map((item, i) => (
                <li key={i} className="flex gap-3">
                  <input
                    type="checkbox"
                    className="mt-1 h-4 w-4 rounded border-gray-300"
                    readOnly
                    aria-label={`Checklist item ${i + 1}`}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border-l-4 border-success-500 bg-success-50 p-4">
            <p className="text-sm text-success-700">
              <strong>Pro tip:</strong> After your first tow with a lifted
              truck, re-torque all suspension bolts, check for driveshaft
              leaks at the transfer case and differential, and inspect CV
              boots for tears. The first few hundred miles after a lift
              reveal problems that need immediate attention.
            </p>
          </div>
        </div>
      </section>

      {/* Insurance and liability */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          Insurance, Warranty, and Legal Considerations
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            This is the part most lifted truck owners overlook. A lift kit
            can void your powertrain warranty, reduce insurance coverage,
            and create legal liability if you are involved in an accident
            while towing over the modified capacity.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border-l-4 border-warning-500 bg-warning-50 p-5">
              <h3 className="font-semibold text-warning-700">Warranty Impact</h3>
              <p className="mt-2 text-sm text-warning-700">
                Most manufacturers consider suspension modifications a
                voiding event for powertrain warranty coverage related to
                driveline components. If your lifted truck experiences a
                transmission or axle failure while towing, the dealership
                may deny warranty coverage. Keep receipts for all
                geometry-correction parts to demonstrate responsible
                modification.
              </p>
            </div>
            <div className="rounded-xl border-l-4 border-danger-500 bg-danger-50 p-5">
              <h3 className="font-semibold text-danger-700">Insurance & Liability</h3>
              <p className="mt-2 text-sm text-danger-700">
                If you are involved in an accident while towing over your
                truck's modified capacity, your insurance company may
                reduce or deny coverage. Document your lift height, all
                corrective modifications, and your conservative capacity
                calculations. Some insurers offer modified-vehicle policies
                that explicitly cover lifted trucks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-12 rounded-2xl bg-brand-600 p-8 text-center text-white">
        <h2 className="text-2xl font-bold">Verify Your Setup Before Towing</h2>
        <p className="mt-2 text-brand-100">
          Lifted trucks need conservative numbers. Use our calculators with
          your reduced effective capacity to verify a safe match.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link
            href="/towing-capacity-calculator"
            className="inline-block rounded-xl bg-white px-6 py-3 text-sm font-bold text-brand-700 shadow-lg transition-all hover:bg-brand-50 active:scale-[0.99]"
          >
            Towing Capacity Calculator
          </Link>
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
              Weight Distribution Hitch Setup Guide
            </Link>
          </li>
          <li>
            <Link
              href="/guides/towing-capacity-explained"
              className="text-brand-600 hover:underline"
            >
              Towing Capacity Explained
            </Link>
          </li>
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
              href="/guides/rv-trailer-sway-control"
              className="text-brand-600 hover:underline"
            >
              RV Trailer Sway Control
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
      </section>

      {/* External references */}
      <section className="mt-12 border-t border-gray-200 pt-8">
        <h2 className="text-lg font-bold text-gray-900">
          Sources &amp; References
        </h2>
        <ul className="mt-3 space-y-1 text-sm text-gray-500">
          <li>
            <a
              href="https://www.nhtsa.gov/road-safety/towing-and-road-safety"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 hover:underline"
            >
              NHTSA Towing and Road Safety
            </a>{" "}
            &mdash; nhtsa.gov
          </li>
          <li>
            <a
              href="https://www.sae.org/standards/content/j2807_202003/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 hover:underline"
            >
              SAE J2807 Tow Rating Test Procedure
            </a>{" "}
            &mdash; sae.org
          </li>
          <li>
            <a
              href="https://www.ford.com/support/how-tos/towing/towing-capacity/selecting-vehicle-trailer/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 hover:underline"
            >
              Ford Towing Guide
            </a>{" "}
            &mdash; ford.com
          </li>
          <li>
            <a
              href="https://www.ramtrucks.com/towing-guide.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 hover:underline"
            >
              RAM Towing Guide
            </a>{" "}
            &mdash; ramtrucks.com
          </li>
          <li>
            <a
              href="https://www.fmcsa.dot.gov/regulations/title49/section/393.70"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 hover:underline"
            >
              FMCSA 49 CFR 393.70 Coupling Devices
            </a>{" "}
            &mdash; fmcsa.dot.gov
          </li>
          <li>
            <a
              href="https://www.etrailer.com/faq-lifted-truck-towing.aspx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 hover:underline"
            >
              etrailer: Towing With a Lifted Truck
            </a>{" "}
            &mdash; etrailer.com
          </li>
        </ul>
      </section>
    </div>
  );
}
