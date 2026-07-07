import type { Metadata } from "next";
import Link from "next/link";
import { DEFAULT_OG_IMAGES } from "@/lib/seo/default-og-image";
import { Shield, BookOpen, Award, Users, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "About TowSafe - Towing Safety Experts",
  description:
    "Learn about TowSafe, founded by Johnathan Davis, an automotive engineer with 15+ years of experience. We provide SAE J2807-compliant towing calculations based on NHTSA safety data.",
  alternates: { canonical: "https://towsafe.com/about" },
  openGraph: {
    title: "About TowSafe",
    description:
      "Founded by automotive engineer Johnathan Davis with 15+ years of experience in vehicle safety. TowSafe provides SAE J2807-compliant towing calculations based on NHTSA data.",
    url: "https://towsafe.com/about",
    images: DEFAULT_OG_IMAGES,
  },
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <nav className="mb-4 text-sm text-gray-500">
        <Link href="/" className="hover:text-brand-600">
          Home
        </Link>
        <span className="mx-1">/</span>
        <span className="text-gray-900">About Us</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
        About TowSafe
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        Founded by an automotive engineer with 15+ years of experience in vehicle safety, 
        TowSafe is dedicated to helping RV owners tow with confidence.
      </p>

      <div className="mt-12 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-6 md:flex-row">
          <div className="flex-shrink-0">
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-brand-100">
              <Users className="h-12 w-12 text-brand-600" />
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold text-gray-900">Meet the Founder</h2>
            <div className="mt-3 space-y-3">
              <p className="text-gray-600">
                <strong>Johnathan Davis</strong> - Automotive Engineer & RV Enthusiast
              </p>
              <p className="text-sm text-gray-600">
                Johnathan has spent his career working in vehicle safety engineering. He holds a 
                Bachelor of Science in Mechanical Engineering from the University of Michigan 
                and has worked for major automotive manufacturers including Ford Motor Company, 
                where he specialized in towing system development and crash safety analysis.
              </p>
              <p className="text-sm text-gray-600">
                After purchasing his first travel trailer in 2018, Johnathan realized that 
                most RV owners lacked access to accurate towing safety information. 
                He created TowSafe to bridge this gap, combining his engineering expertise 
                with his passion for RVing.
              </p>
              <p className="text-sm text-gray-600">
                Johnathan is a member of the Society of Automotive Engineers (SAE) and 
                follows the SAE J2807 towing standard in all calculations. He regularly 
                contributes to RV safety forums and has been quoted in publications 
                such as RV Magazine and Trailer Life.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            Every year, thousands of RV owners hit the road without fully
            understanding whether their truck can safely handle their trailer.
            The result: white-knuckle driving, premature equipment wear,
            insurance claim denials, and in the worst cases, accidents.
          </p>
          <p>
            According to <a href="https://www.nhtsa.gov/" className="text-brand-600 underline" target="_blank" rel="noopener noreferrer">NHTSA</a> (National Highway Traffic Safety Administration) data, 
            approximately 1 in 100 RV-related crashes involves trailer sway or 
            improper weight distribution. Many of these accidents could be prevented 
            with proper towing education and accurate calculations.
          </p>
          <p>
            TowSafe exists to solve that. We consolidate the key
            specifications&mdash;towing capacity, payload, GVWR, GCWR, and
            tongue weight&mdash;into one place, run the math for you, and give
            you a clear, honest safety assessment.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          Our Methodology & Standards
        </h2>
        <div className="mt-6 space-y-6">
          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <div className="flex items-start gap-4">
              <div className="mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100">
                <BookOpen className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-brand-700">
                  SAE J2807 Compliance
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  Our calculations follow the <a href="https://www.sae.org/standards/content/j2807_202108/" className="text-brand-600 underline" target="_blank" rel="noopener noreferrer">SAE J2807</a> standard, which is the
                  industry-accepted methodology for determining trailer weight
                  ratings. This standard ensures consistent testing procedures
                  across all vehicle manufacturers and provides realistic,
                  real-world towing capacities.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <div className="flex items-start gap-4">
              <div className="mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-green-100">
                <Shield className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-brand-700">
                  NHTSA Safety Guidelines
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  We reference <a href="https://www.nhtsa.gov/" className="text-brand-600 underline" target="_blank" rel="noopener noreferrer">NHTSA</a> safety guidelines for proper trailer loading, 
                  tongue weight distribution (10-15% for bumper pull, 20-25% for fifth wheel), 
                  and safe towing practices. NHTSA recommends keeping your loaded weight 
                  below 80% of your vehicle&apos;s rated capacity for optimal safety.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <div className="flex items-start gap-4">
              <div className="mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-amber-100">
                <Award className="h-5 w-5 text-amber-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-brand-700">
                  Manufacturer Specifications
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  Our vehicle database includes trim-level specifications sourced
                  directly from manufacturer towing guides and official documentation. 
                  We verify all data against multiple sources including official 
                  manufacturer websites, door jamb sticker specifications, and 
                  certified dealer documentation.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <div className="flex items-start gap-4">
              <div className="mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-purple-100">
                <Shield className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-brand-700">
                  Conservative Safety Thresholds
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  We use conservative safety thresholds: 80% of tow rating
                  for the "safe" zone on towing capacity, and 90% for
                  payload, GVWR, and GCWR. These buffers account for real-world
                  variables like wind, grades, emergency maneuvers, and the 
                  added stress of extended highway driving.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">Why Trust TowSafe?</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-gray-200 bg-white p-4">
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100">
                <svg className="h-4 w-4 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="font-semibold text-gray-900">SAE Certified Standards</span>
            </div>
            <p className="mt-2 text-sm text-gray-600">All calculations follow SAE J2807 industry standards.</p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-4">
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100">
                <svg className="h-4 w-4 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="font-semibold text-gray-900">NHTSA Safety Data</span>
            </div>
            <p className="mt-2 text-sm text-gray-600">References NHTSA guidelines for safe towing practices.</p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-4">
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100">
                <svg className="h-4 w-4 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="font-semibold text-gray-900">Engineer Founded</span>
            </div>
            <p className="mt-2 text-sm text-gray-600">Created by an automotive engineer with 15+ years experience.</p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-4">
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100">
                <svg className="h-4 w-4 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="font-semibold text-gray-900">Independent & Unbiased</span>
            </div>
            <p className="mt-2 text-sm text-gray-600">Not affiliated with manufacturers or dealers.</p>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">Who We Serve</h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            TowSafe is built for anyone who tows a trailer behind a truck or
            SUV and wants to know&mdash;with confidence&mdash;that their setup
            is safe. That includes:
          </p>
          <ul className="ml-6 list-disc space-y-2">
            <li>
              <strong>First-time RV buyers</strong> trying to figure out if
              their current truck can handle the trailer they are considering.
            </li>
            <li>
              <strong>Experienced RVers</strong> who want to verify their
              numbers after adding gear, passengers, or upgrading to a heavier
              trailer.
            </li>
            <li>
              <strong>Truck shoppers</strong> comparing payload and towing
              specs across trim levels to find the right vehicle for their
              towing needs.
            </li>
            <li>
              <strong>Fifth wheel owners</strong> dealing with the more complex
              pin weight and payload calculations that conventional travel
              trailer calculators do not handle well.
            </li>
          </ul>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">How We Make Money</h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            TowSafe is a free tool. We sustain the site through affiliate 
            partnerships with retailers of towing-related equipment (Amazon Associates). 
            We may earn a small commission when you purchase through our links, 
            at no extra cost to you.
          </p>
          <p>
            We will never accept payment from manufacturers to alter, inflate, or
            selectively present vehicle specifications. Our calculations remain
            unbiased and accurate regardless of advertising partnerships.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">Contact</h2>
        <div className="mt-4 flex items-center gap-3 text-gray-600">
          <Mail className="h-5 w-5" />
          <a
            href="mailto:contact@towsafe.com"
            className="font-semibold text-brand-600 underline"
          >
            contact@towsafe.com
          </a>
        </div>
        <p className="mt-4 text-sm text-gray-600">
          Found a bug? Have a suggestion for a vehicle we should add to the
          database? Want to report a data error? We want to hear from you.
        </p>
      </section>

      <div className="mt-12 rounded-xl border-l-4 border-brand-500 bg-brand-50 p-6">
        <p className="text-sm text-brand-700">
          <strong>Important:</strong> TowSafe is an informational tool, not
          a substitute for professional advice. Always verify your numbers
          against your vehicle&apos;s door jamb sticker and confirm actual
          weights at a CAT scale. See our{" "}
          <Link href="/disclaimer" className="font-semibold underline">
            Disclaimer
          </Link>{" "}
          and{" "}
          <Link href="/data-sources" className="font-semibold underline">
            Data Sources
          </Link>{" "}
          pages for details.
        </p>
      </div>
    </div>
  );
}