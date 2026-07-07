import type { Metadata } from "next";
import { ArticleJsonLd } from "@/components/seo/JsonLd";
import { ThermometerSun, Car, Battery, Droplets, Leaf, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Spring Towing Pre-Departure Checklist: Get Ready for RV Season",
  description: "Complete spring checklist for your tow vehicle and trailer. Ensure safety and reliability before hitting the road this season.",
  openGraph: {
    title: "Spring Towing Pre-Departure Checklist",
    description: "Complete spring checklist for your tow vehicle and trailer",
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Spring RV camping",
      },
    ],
  },
};

export default function SpringChecklistPage() {
  return (
    <div className="mx-auto max-w-3xl">
      <ArticleJsonLd
        title="Spring Towing Pre-Departure Checklist: Get Ready for RV Season"
        description="Complete spring checklist for your tow vehicle and trailer. Ensure safety and reliability before hitting the road this season."
        url="https://rvtowingcalc.com/guides/spring-checklist"
        datePublished="2024-03-15"
      />

      <div className="mb-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
            <ThermometerSun className="h-6 w-6 text-green-600" />
          </div>
          <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
            Spring Seasonal Guide
          </span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
          Spring Towing Pre-Departure Checklist
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Winter is over, and it's time to get your tow vehicle and trailer ready for the camping season. 
          Follow this comprehensive checklist to ensure a safe and trouble-free start to your spring adventures.
        </p>
      </div>

      <div className="mb-8 rounded-2xl border border-amber-200 bg-amber-50 p-6">
        <div className="flex items-start gap-4">
          <Clock className="mt-1 h-6 w-6 flex-shrink-0 text-amber-600" />
          <div>
            <h3 className="font-bold text-amber-800">Timing Matters</h3>
            <p className="mt-1 text-sm text-amber-700">
              Start your spring preparation at least 2-3 weeks before your first trip. 
              This gives you time to address any issues and order replacement parts if needed.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <Section 
          icon={Car} 
          iconColor="text-blue-600"
          bgColor="bg-blue-100"
          title="Tow Vehicle Inspection"
        >
          <ChecklistItem text="Change engine oil and filter" />
          <ChecklistItem text="Check transmission fluid level and condition" />
          <ChecklistItem text="Inspect coolant level and condition - flush if needed" />
          <ChecklistItem text="Replace air filter if dirty" />
          <ChecklistItem text="Check brake pads, rotors, and calipers" />
          <ChecklistItem text="Inspect tires for wear, cracks, and proper inflation" />
          <ChecklistItem text="Check wheel bearings and lug nut torque" />
          <ChecklistItem text="Test battery - cold weather can reduce capacity" />
          <ChecklistItem text="Inspect belts and hoses for cracks or wear" />
          <ChecklistItem text="Check power steering fluid" />
        </Section>

        <Section 
          icon={Leaf} 
          iconColor="text-green-600"
          bgColor="bg-green-100"
          title="Trailer Inspection"
        >
          <ChecklistItem text="Inspect trailer tires - look for dry rot and proper pressure" />
          <ChecklistItem text="Check wheel bearings - repack if needed" />
          <ChecklistItem text="Inspect brakes - adjust or replace as needed" />
          <ChecklistItem text="Test all trailer lights - replace burnt bulbs" />
          <ChecklistItem text="Check electrical connector for corrosion" />
          <ChecklistItem text="Inspect safety chains for wear" />
          <ChecklistItem text="Lubricate hitch coupler and jack" />
          <ChecklistItem text="Check trailer frame for rust or damage" />
          <ChecklistItem text="Inspect awning for tears or damage" />
          <ChecklistItem text="Test propane system for leaks" />
        </Section>

        <Section 
          icon={Droplets} 
          iconColor="text-cyan-600"
          bgColor="bg-cyan-100"
          title="RV Systems Check"
        >
          <ChecklistItem text="Flush fresh water tank and lines" />
          <ChecklistItem text="Clean and sanitize water system" />
          <ChecklistItem text="Test water pump" />
          <ChecklistItem text="Inspect water heater - flush sediment" />
          <ChecklistItem text="Check gray and black water tanks" />
          <ChecklistItem text="Inspect shower and sinks for leaks" />
          <ChecklistItem text="Test toilet operation" />
          <ChecklistItem text="Check refrigerator - run on both propane and electric" />
          <ChecklistItem text="Test air conditioner" />
          <ChecklistItem text="Inspect roof for leaks" />
        </Section>

        <Section 
          icon={Battery} 
          iconColor="text-yellow-600"
          bgColor="bg-yellow-100"
          title="Interior & Safety"
        >
          <ChecklistItem text="Replace smoke detector batteries" />
          <ChecklistItem text="Test carbon monoxide detector" />
          <ChecklistItem text="Check fire extinguisher pressure" />
          <ChecklistItem text="Inspect LP gas detector" />
          <ChecklistItem text="Clean interior and check for mold/mildew" />
          <ChecklistItem text="Test all appliances" />
          <ChecklistItem text="Verify first aid kit is complete" />
          <ChecklistItem text="Check emergency tools and roadside kit" />
          <ChecklistItem text="Update registration and insurance documents" />
          <ChecklistItem text="Review and update emergency contact list" />
        </Section>
      </div>

      <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-xl font-bold text-gray-900">Pro Tips for Spring Towing</h2>
        <div className="space-y-4">
          <TipItem text="Start with a short test drive before your first long trip to identify any issues." />
          <TipItem text="Consider getting a professional inspection if you're not mechanically inclined." />
          <TipItem text="Don't forget to check your weight distribution hitch - it may need adjustment after winter storage." />
          <TipItem text="Check your state's towing laws - some states require brakes on trailers over a certain weight." />
          <TipItem text="Always weigh your loaded vehicle and trailer at a CAT scale before your first trip." />
        </div>
      </div>

      <div className="mt-8 flex flex-col items-center justify-center rounded-2xl bg-gradient-to-r from-green-600 to-emerald-600 p-8 text-center text-white">
        <h2 className="text-2xl font-bold">Ready to Hit the Road?</h2>
        <p className="mt-2">Use our towing calculator to ensure your vehicle can safely tow your trailer.</p>
        <a
          href="/calculator"
          className="mt-4 rounded-lg bg-white px-6 py-3 font-bold text-green-700 shadow-lg transition-all hover:shadow-xl"
        >
          Calculate Your Towing Capacity
        </a>
      </div>
    </div>
  );
}

function Section({ 
  icon: Icon, 
  iconColor, 
  bgColor,
  title, 
  children 
}: { 
  icon: React.ComponentType<{ className?: string }>;
  iconColor: string;
  bgColor: string;
  title: string; 
  children: React.ReactNode 
}) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <h2 className="mb-4 flex items-center gap-3 text-xl font-bold text-gray-900">
        <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${bgColor}`}>
          <Icon className={`h-5 w-5 ${iconColor}`} />
        </div>
        {title}
      </h2>
      <ul className="grid gap-3 sm:grid-cols-2">
        {children}
      </ul>
    </div>
  );
}

function ChecklistItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3">
      <div className="mt-0.5 h-5 w-5 flex-shrink-0 rounded border-2 border-green-500 bg-green-50">
        <svg className="mt-0.5 ml-0.5 h-3 w-3 text-green-500" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      </div>
      <span className="text-sm text-gray-700">{text}</span>
    </li>
  );
}

function TipItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3 rounded-lg bg-gray-50 p-3">
      <div className="mt-0.5 h-5 w-5 flex-shrink-0 rounded-full bg-blue-100">
        <svg className="mt-0.5 ml-0.5 h-3 w-3 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
        </svg>
      </div>
      <span className="text-sm text-gray-700">{text}</span>
    </div>
  );
}