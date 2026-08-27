import type { Metadata } from "next";
import Link from "next/link";
import { FaqJsonLd, ArticleJsonLd } from "@/components/seo/JsonLd";
import { DEFAULT_OG_IMAGES } from "@/lib/seo/default-og-image";

export const metadata: Metadata = {
  title: "Do You Need a CDL to Tow an RV? License Requirements by State",
  description:
    "Do you need a CDL to tow an RV? Learn the 26,001 lb GCWR threshold, which states require a non-commercial upgrade, and whether your rig crosses the line.",
  keywords: [
    "do you need a CDL to tow an RV",
    "RV license requirements by state",
    "non-commercial class A license RV",
    "26001 lbs GCWR license",
    "fifth wheel CDL requirement",
    "special license to tow travel trailer",
  ],
  alternates: {
    canonical: "https://www.rvtowingcalc.com/guides/cdl-requirements-rv-towing",
  },
  openGraph: {
    title: "Do You Need a CDL to Tow an RV? License Requirements by State",
    description:
      "Most RV owners need nothing beyond a regular license. But heavy fifth wheel rigs cross 26,001 lbs GCWR, and about a dozen states require an upgrade. Here is how to check.",
    url: "https://www.rvtowingcalc.com/guides/cdl-requirements-rv-towing",
    images: DEFAULT_OG_IMAGES,
  },
};

const FAQS = [
  {
    q: "Do you need a CDL to tow a travel trailer?",
    a: "For the overwhelming majority of travel trailer owners, no. A federal Commercial Driver's License applies only to vehicles used in commerce, and a personal RV is not commercial use under 49 CFR 383.5. Beyond that, most travel trailer plus pickup combinations stay well under the 26,001 lb combined threshold that triggers any special class. A Ford F-150 rated at 7,000 lbs GVWR pulling an 8,000 lb GVWR trailer produces a 15,000 lb combination, less than 60 percent of the threshold. Where people actually get caught is heavy fifth wheels behind three-quarter-ton and one-ton trucks.",
  },
  {
    q: "What is the 26,001 pound rule?",
    a: "It is the weight line drawn from federal commercial vehicle definitions. Under 49 CFR 383.91, Group B covers a single vehicle with a GVWR of 26,001 lbs or more, and Group A covers a combination with a Gross Combined Weight Rating of 26,001 lbs or more where the towed unit's GVWR exceeds 10,000 lbs. These thresholds were written for the trucking industry, but roughly a dozen states have borrowed them to create non-commercial license classes for heavy personal vehicles including RVs.",
  },
  {
    q: "Which states require a special license to tow an RV?",
    a: "Roughly a dozen states require something beyond a standard license for heavy personal RVs. States creating non-commercial upgrade classes include California, Texas, Pennsylvania, Maryland, Nevada, North Carolina, and South Carolina. States that apply CDL rules directly to heavy personal RVs include Arkansas, Connecticut, Hawaii, Kansas, New Mexico, Wyoming, and Washington D.C. New York uses an R endorsement, Michigan uses a Recreational Double R endorsement, and Wisconsin triggers on length rather than weight, requiring a CDL for RVs over 45 feet. Around 30 states have explicit statutory exemptions and require nothing extra regardless of size.",
  },
  {
    q: "Does my home state license work in other states?",
    a: "Yes. Driver's license requirements follow the state that issued your license, thanks to reciprocity agreements. If you live in Florida, which has no special RV license requirement, your standard Class E license is valid in California even in a 40,000 lb rig. The reverse also applies: if California requires you to hold a non-commercial Class A for your setup, you must hold it even when traveling through states with no requirement. Note that this is the opposite of speed limits, which are enforced by the state you are physically driving in.",
  },
  {
    q: "Do I need a CDL if my fifth wheel is over 15,000 lbs?",
    a: "In California specifically, a non-commercial Class A license is required to tow a fifth wheel trailer over 15,000 lbs GVWR, or a travel trailer over 10,000 lbs GVWR. This is not a CDL. It requires a written test and a skills test but no medical examiner's certificate and no commercial reporting obligations. Many California owners of larger fifth wheels are unaware of this requirement and are technically driving outside their license class. Check your own state's rules against your trailer's GVWR sticker.",
  },
  {
    q: "Does renting out my RV change the license requirement?",
    a: "It can. Peer-to-peer RV rental platforms have created a genuine gray area. If your RV is being used to generate income, some states and the FMCSA framework may treat it as operating in commerce, which is exactly the trigger for the federal CDL requirement. Several manufacturers also take the position that rental use is commercial use and void warranties on that basis. If you plan to list your RV for rent, confirm the licensing and insurance implications with your state DMV and your carrier first.",
  },
];

const WEIGHT_GROUPS_TABLE = [
  {
    group: "Group A",
    definition: "Combination with GCWR of 26,001 lbs or more, where towed unit GVWR exceeds 10,000 lbs",
    rvExample: "1-ton dually + large fifth wheel",
    licenseIfRequired: "Class A (CDL or non-commercial, by state)",
  },
  {
    group: "Group B",
    definition: "Single vehicle with GVWR of 26,001 lbs or more",
    rvExample: "Large Class A or Super C motorhome",
    licenseIfRequired: "Class B (CDL or non-commercial, by state)",
  },
  {
    group: "Group C",
    definition: "Vehicle designed to carry 16+ passengers, or hazmat",
    rvExample: "Essentially never applies to a personal RV",
    licenseIfRequired: "Class C CDL",
  },
];

const STATE_REQUIREMENTS_TABLE = [
  {
    state: "California",
    requirement: "Non-commercial Class A to tow a 5th wheel over 15,000 lbs GVWR or travel trailer over 10,000 lbs GVWR. Non-commercial Class B for a housecar 40-45 ft.",
    type: "Non-CDL upgrade",
  },
  {
    state: "Texas",
    requirement: "Non-commercial Class A for combinations at 26,001 lbs GCWR or more. Non-commercial Class B for a single vehicle over 26,000 lbs GVWR.",
    type: "Non-CDL upgrade",
  },
  {
    state: "Pennsylvania",
    requirement: "Non-commercial Class A for combinations at 26,001 lbs GCWR or more. Non-commercial Class B for single vehicles over 26,000 lbs.",
    type: "Non-CDL upgrade",
  },
  {
    state: "Maryland / D.C.",
    requirement: "Non-commercial Class A for combinations at 26,001 lbs GCWR with a trailer over 10,000 lbs. Class B for single vehicles at 26,001 lbs or more.",
    type: "Non-CDL upgrade",
  },
  {
    state: "Nevada",
    requirement: "Non-commercial Class A or B at 26,001 lbs or more. J endorsement to tow a unit over 10,000 lbs GVWR.",
    type: "Non-CDL upgrade",
  },
  {
    state: "North / South Carolina",
    requirement: "Non-commercial Class A or B / Class E for heavy combinations and single vehicles above the 26,000 lb line.",
    type: "Non-CDL upgrade",
  },
  {
    state: "New York",
    requirement: "R (Recreational Vehicle) endorsement added to a standard license for RVs over 26,000 lbs.",
    type: "Endorsement",
  },
  {
    state: "Michigan",
    requirement: "Recreational Double R endorsement for specific multi-trailer and 5th-wheel-plus-trailer configurations.",
    type: "Endorsement",
  },
  {
    state: "New Mexico",
    requirement: "Class E endorsement for an RV over 26,000 lbs.",
    type: "Endorsement",
  },
  {
    state: "Arkansas, Connecticut, Hawaii, Kansas, Wyoming",
    requirement: "Apply CDL rules directly to heavy personal RVs above the 26,000 lb threshold.",
    type: "CDL required",
  },
  {
    state: "Wisconsin",
    requirement: "CDL for RVs over 45 feet in length, regardless of weight. Length-based, not weight-based.",
    type: "CDL required",
  },
  {
    state: "~30 other states",
    requirement: "Explicit statutory exemption. A standard license covers any personal RV regardless of size or weight. Includes Florida, Arizona, Colorado, Ohio, Georgia, and most of the Midwest and South.",
    type: "No requirement",
  },
];

const GCWR_EXAMPLES_TABLE = [
  {
    rig: "F-150 + 26 ft travel trailer",
    truckGvwr: "7,000 lbs",
    trailerGvwr: "8,000 lbs",
    gcwr: "15,000 lbs",
    crosses: "No",
  },
  {
    rig: "F-250 + 32 ft travel trailer",
    truckGvwr: "10,000 lbs",
    trailerGvwr: "11,000 lbs",
    gcwr: "21,000 lbs",
    crosses: "No",
  },
  {
    rig: "RAM 2500 + mid-size 5th wheel",
    truckGvwr: "10,000 lbs",
    trailerGvwr: "14,000 lbs",
    gcwr: "24,000 lbs",
    crosses: "Close",
  },
  {
    rig: "RAM 3500 SRW + large 5th wheel",
    truckGvwr: "11,700 lbs",
    trailerGvwr: "16,000 lbs",
    gcwr: "27,700 lbs",
    crosses: "Yes",
  },
  {
    rig: "F-350 dually + luxury 5th wheel",
    truckGvwr: "14,000 lbs",
    trailerGvwr: "18,000 lbs",
    gcwr: "32,000 lbs",
    crosses: "Yes",
  },
  {
    rig: "F-450 + triple-axle toy hauler",
    truckGvwr: "16,500 lbs",
    trailerGvwr: "21,000 lbs",
    gcwr: "37,500 lbs",
    crosses: "Yes",
  },
];

export default function CdlRequirementsRvTowingPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
      <ArticleJsonLd
        title="Do You Need a CDL to Tow an RV? License Requirements by State"
        description="The 26,001 lb GCWR threshold explained, which states require a non-commercial license upgrade for heavy RVs, and how to check whether your rig crosses the line."
        url="https://www.rvtowingcalc.com/guides/cdl-requirements-rv-towing"
        datePublished="2026-08-27"
      />
      <FaqJsonLd
        faqs={FAQS}
        baseUrl="https://www.rvtowingcalc.com/guides/cdl-requirements-rv-towing"
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
        <span className="text-gray-900">CDL Requirements for RV Towing</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
        Do You Need a CDL to Tow an RV? License Requirements by State
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        Short answer: almost certainly not a CDL. But that is not the whole
        answer. About a dozen states require a license upgrade that is not a CDL,
        and the rigs that trip the wire are more common than most owners realize.
      </p>

      <div className="mt-8 rounded-xl bg-blue-50 p-6">
        <h2 className="text-lg font-bold text-blue-900">
          The Two-Minute Version
        </h2>
        <ul className="mt-2 space-y-2 text-blue-800">
          <li>
            <strong>A federal CDL applies to commercial use only.</strong> Your
            family road trip is not commerce under 49 CFR 383.5.
          </li>
          <li>
            <strong>The number that matters is 26,001 lbs.</strong> Add your
            truck&apos;s GVWR and your trailer&apos;s GVWR. That sum is your
            GCWR for licensing purposes.
          </li>
          <li>
            <strong>Under 26,001 lbs combined, no state requires anything
            extra.</strong> A regular license covers you nationwide.
          </li>
          <li>
            <strong>Over 26,001 lbs, it depends entirely on your home
            state.</strong> Roughly 30 states still require nothing. About a
            dozen require an upgrade.
          </li>
        </ul>
      </div>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Why Federal CDL Rules Do Not Apply to Your RV
      </h2>
      <p className="mt-3 text-gray-700">
        Federal law defines a commercial motor vehicle in 49 USC 31301 as one{" "}
        <em>used in commerce</em> that meets a weight, passenger, or hazmat
        threshold. The phrase &ldquo;used in commerce&rdquo; is the entire
        hinge. Driving your own fifth wheel to a campground is not commerce,
        which is why a 40,000 lb Class A motorhome can be legally sold to
        someone holding nothing but a standard license.
      </p>
      <p className="mt-3 text-gray-700">
        The FMCSA has confirmed in published guidance that states{" "}
        <strong>may</strong> extend CDL-style requirements to recreational
        vehicles used for non-business purposes if they choose. Most states have
        declined. A minority have taken them up on it, which is where the
        patchwork comes from.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        The Federal Weight Groups Everyone Borrows
      </h2>
      <p className="mt-3 text-gray-700">
        Even states that create <em>non-commercial</em> classes almost always
        copy the federal group definitions from 49 CFR 383.91. Understanding
        these three groups tells you which class name to look for in your
        state&apos;s driver manual.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">Group</th>
              <th className="border px-3 py-2 text-left font-semibold">Definition</th>
              <th className="border px-3 py-2 text-left font-semibold">RV Example</th>
              <th className="border px-3 py-2 text-left font-semibold">Class If Required</th>
            </tr>
          </thead>
          <tbody>
            {WEIGHT_GROUPS_TABLE.map((row, i) => (
              <tr key={i} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                <td className="border px-3 py-2 font-medium">{row.group}</td>
                <td className="border px-3 py-2">{row.definition}</td>
                <td className="border px-3 py-2">{row.rvExample}</td>
                <td className="border px-3 py-2">{row.licenseIfRequired}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-4 text-gray-700">
        Note the Group A wrinkle: it requires <em>both</em> a GCWR at or above
        26,001 lbs <em>and</em> a towed unit over 10,000 lbs GVWR. A one-ton
        dually towing a 9,000 lb trailer can produce a GCWR above 26,001 lbs
        while the trailer stays under 10,000 lbs, which keeps it outside the
        Group A definition in most states.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Which Rigs Actually Cross 26,001 lbs?
      </h2>
      <p className="mt-3 text-gray-700">
        This is the part that surprises people. For licensing you use{" "}
        <strong>ratings, not scale weights</strong>. Add the GVWR sticker value
        from your truck door jamb to the GVWR sticker value on your trailer. It
        does not matter that your rig actually weighs 22,000 lbs on a CAT scale
        if the combined ratings total 28,000 lbs.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">Typical Rig</th>
              <th className="border px-3 py-2 text-left font-semibold">Truck GVWR</th>
              <th className="border px-3 py-2 text-left font-semibold">Trailer GVWR</th>
              <th className="border px-3 py-2 text-left font-semibold">Combined</th>
              <th className="border px-3 py-2 text-left font-semibold">Over 26,001?</th>
            </tr>
          </thead>
          <tbody>
            {GCWR_EXAMPLES_TABLE.map((row, i) => (
              <tr key={i} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                <td className="border px-3 py-2 font-medium">{row.rig}</td>
                <td className="border px-3 py-2">{row.truckGvwr}</td>
                <td className="border px-3 py-2">{row.trailerGvwr}</td>
                <td className="border px-3 py-2">{row.gcwr}</td>
                <td className="border px-3 py-2">
                  <span
                    className={`inline-block rounded-full px-2 py-0.5 text-xs font-medium ${
                      row.crosses === "No"
                        ? "bg-green-100 text-green-800"
                        : row.crosses === "Close"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {row.crosses}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-4 text-gray-700">
        The pattern is clear. <strong>Bumper-pull travel trailers behind
        half-ton and three-quarter-ton trucks essentially never cross the
        line.</strong> Large fifth wheels behind one-ton trucks routinely do,
        and their owners are the ones who need to read their state&apos;s rules
        carefully. If you are shopping a fifth wheel over 15,000 lbs GVWR, check
        licensing before you sign.
      </p>

      <div className="mt-10 rounded-2xl bg-brand-600 p-8 text-center text-white">
        <h2 className="text-2xl font-bold">Calculate Your Combined Rating</h2>
        <p className="mt-2 text-brand-100">
          Find out in 30 seconds whether your rig crosses 26,001 lbs, and
          whether it is within your truck&apos;s actual GCWR.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/gcwr-calculator"
            className="inline-block rounded-xl bg-white px-6 py-3 text-base font-bold text-brand-700 shadow-lg transition-all hover:bg-brand-50 active:scale-[0.99]"
          >
            GCWR Calculator
          </Link>
          <Link
            href="/gvwr-calculator"
            className="inline-block rounded-xl bg-brand-700 px-6 py-3 text-base font-bold text-white shadow-lg ring-1 ring-white/30 transition-all hover:bg-brand-800 active:scale-[0.99]"
          >
            GVWR Calculator
          </Link>
        </div>
      </div>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        State-by-State Requirements
      </h2>
      <p className="mt-3 text-gray-700">
        States fall into four camps. Find yours below, then verify with your
        state DMV, because these statutes do get amended.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left font-semibold">State</th>
              <th className="border px-3 py-2 text-left font-semibold">Requirement</th>
              <th className="border px-3 py-2 text-left font-semibold">Category</th>
            </tr>
          </thead>
          <tbody>
            {STATE_REQUIREMENTS_TABLE.map((row, i) => (
              <tr key={i} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                <td className="border px-3 py-2 font-medium">{row.state}</td>
                <td className="border px-3 py-2">{row.requirement}</td>
                <td className="border px-3 py-2">
                  <span
                    className={`inline-block rounded-full px-2 py-0.5 text-xs font-medium ${
                      row.type === "No requirement"
                        ? "bg-green-100 text-green-800"
                        : row.type === "Endorsement"
                        ? "bg-yellow-100 text-yellow-800"
                        : row.type === "Non-CDL upgrade"
                        ? "bg-orange-100 text-orange-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {row.type}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-4 text-sm text-gray-500">
        This table is a research summary, not legal advice. Published sources
        disagree on several states and statutes are amended regularly. Always
        confirm with your state&apos;s official DMV or driver licensing agency
        before relying on any of it.
      </p>

      <h3 className="mt-8 text-xl font-bold text-gray-900">
        California Is the Outlier Worth Knowing
      </h3>
      <p className="mt-3 text-gray-700">
        California does not use the 26,001 lb line for trailers. It uses{" "}
        <strong>trailer GVWR alone</strong>: a non-commercial Class A is
        required to tow a fifth wheel over 15,000 lbs GVWR or a travel trailer
        over 10,000 lbs GVWR. That 10,000 lb travel trailer threshold catches a
        very large number of mid-size travel trailers whose owners have no idea
        the rule exists. If you are a California resident with a 32 ft trailer,
        go read your GVWR sticker.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        What a Non-Commercial Upgrade Actually Involves
      </h2>
      <p className="mt-3 text-gray-700">
        A non-commercial Class A or B is meaningfully lighter than a CDL:
      </p>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-green-200 bg-green-50 p-4">
          <h3 className="font-bold text-green-800">Non-Commercial Class A/B</h3>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-green-700">
            <li>Written knowledge test</li>
            <li>Skills test in your own rig</li>
            <li>No medical examiner&apos;s certificate</li>
            <li>No drug and alcohol testing program</li>
            <li>No hours-of-service logging</li>
            <li>No DOT number or annual inspection</li>
          </ul>
        </div>
        <div className="rounded-xl border border-orange-200 bg-orange-50 p-4">
          <h3 className="font-bold text-orange-800">Full CDL</h3>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-orange-700">
            <li>Written and skills tests</li>
            <li>DOT medical card required</li>
            <li>Subject to drug and alcohol regulations</li>
            <li>Employer notification obligations</li>
            <li>Lower BAC threshold (0.04)</li>
            <li>Stricter disqualification rules</li>
          </ul>
        </div>
      </div>
      <p className="mt-4 text-gray-700">
        In practice the skills test is the part that gives people pause. You
        will be asked to perform a pre-trip inspection, demonstrate backing and
        offset maneuvers, and drive a road route. If you have never formally
        practiced backing, spend a weekend in an empty lot first. Our{" "}
        <Link
          href="/guides/how-to-back-up-travel-trailer"
          className="text-brand-600 hover:underline"
        >
          trailer backing guide
        </Link>{" "}
        and{" "}
        <Link
          href="/guides/travel-trailer-pre-trip-inspection"
          className="text-brand-600 hover:underline"
        >
          pre-trip inspection checklist
        </Link>{" "}
        cover exactly what examiners look for.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Why This Matters Beyond the Ticket
      </h2>
      <div className="mt-4 rounded-xl border border-red-200 bg-red-50 p-6">
        <h3 className="font-bold text-red-800">The Insurance Angle</h3>
        <p className="mt-2 text-red-700">
          A citation for operating outside your license class is usually a
          modest fine. The real exposure is an at-fault accident while operating
          outside your license class. Insurers routinely investigate licensing
          and weight compliance after a serious claim, and operating a vehicle
          you were not licensed for gives them a documented basis to contest
          coverage. Combine that with an overloaded axle and you have a very bad
          day in a deposition.
        </p>
      </div>
      <p className="mt-4 text-gray-700">
        This is the same reason we push weight compliance so hard. Being legal
        on your license class does you no good if your rear axle is 800 lbs over
        RGAWR. Read our{" "}
        <Link
          href="/guides/gawr-explained"
          className="text-brand-600 hover:underline"
        >
          GAWR guide
        </Link>{" "}
        and{" "}
        <Link
          href="/guides/exceed-gvwr-dangers"
          className="text-brand-600 hover:underline"
        >
          what happens if you exceed GVWR
        </Link>{" "}
        for the weight side of the equation.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Your Three-Step Check
      </h2>
      <ol className="mt-3 list-decimal space-y-3 pl-6 text-gray-700">
        <li>
          <strong>Read both GVWR stickers.</strong> Truck: driver&apos;s door
          jamb, yellow Tire and Loading Information label. Trailer: usually on
          the forward roadside sidewall or inside a compartment door. Add them.
        </li>
        <li>
          <strong>Compare against 26,001 lbs.</strong> Under it, you are done in
          every state. Over it, continue to step 3. California residents: also
          check your trailer GVWR against 10,000 lbs (travel trailer) or 15,000
          lbs (fifth wheel) regardless of the combined total.
        </li>
        <li>
          <strong>Search your state DMV site</strong> for &ldquo;non-commercial
          class A&rdquo; or &ldquo;recreational vehicle license.&rdquo; Use the
          official state site, not a forum post. Requirements change and forum
          answers are frequently years out of date.
        </li>
      </ol>

      <div className="mt-8 rounded-xl border border-gray-200 bg-gray-50 p-6">
        <h3 className="font-bold text-gray-900">
          One More Safety Note
        </h3>
        <p className="mt-2 text-gray-700">
          Licensing thresholds are a legal floor, not a competence standard. A
          25,000 lb combination is legal on a standard license in 45 states, and
          it is still 25,000 lbs of momentum with a 400+ foot stopping distance.
          Whether or not your state makes you test for it, get real practice
          before your first long trip: empty-lot backing drills, a short local
          shakedown run, and a{" "}
          <Link
            href="/guides/cat-scale-weighing"
            className="text-brand-600 hover:underline"
          >
            CAT scale weigh
          </Link>{" "}
          with the rig loaded the way you actually travel.
        </p>
      </div>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Sources &amp; References
      </h2>
      <ul className="mt-3 list-disc space-y-2 pl-6 text-sm text-gray-600">
        <li>
          <a
            href="https://www.ecfr.gov/current/title-49/subtitle-B/chapter-III/subchapter-B/part-383/subpart-A/section-383.5"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            49 CFR 383.5 &mdash; CDL Definitions
          </a>
        </li>
        <li>
          <a
            href="https://www.ecfr.gov/current/title-49/subtitle-B/chapter-III/subchapter-B/part-383/subpart-F/section-383.91"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            49 CFR 383.91 &mdash; Commercial Motor Vehicle Groups A, B, C
          </a>
        </li>
        <li>
          <a
            href="https://www.fmcsa.dot.gov/regulations/title/49/section/383.3"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            FMCSA &mdash; Applicability and RV Exceptions (49 CFR 383.3)
          </a>
        </li>
        <li>
          <a
            href="https://www.dmv.ca.gov/portal/driver-licenses-identification-cards/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            California DMV &mdash; Driver License Classes
          </a>
        </li>
        <li>
          <a
            href="https://www.txdmv.gov/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            Texas DMV &mdash; Non-Commercial License Classes
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
              href="/guides/gvwr-vs-gcwr"
              className="text-brand-600 hover:underline"
            >
              GVWR vs GCWR: What&apos;s the Difference?
            </Link>
          </li>
          <li>
            <Link
              href="/guides/gawr-explained"
              className="text-brand-600 hover:underline"
            >
              GAWR Explained
            </Link>
          </li>
          <li>
            <Link
              href="/guides/fifth-wheel-pin-weight"
              className="text-brand-600 hover:underline"
            >
              5th Wheel Pin Weight
            </Link>
          </li>
          <li>
            <Link
              href="/guides/rv-towing-speed-limits"
              className="text-brand-600 hover:underline"
            >
              Towing Speed Limits by State
            </Link>
          </li>
          <li>
            <Link
              href="/guides/exceed-gvwr-dangers"
              className="text-brand-600 hover:underline"
            >
              What Happens If You Exceed GVWR
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
