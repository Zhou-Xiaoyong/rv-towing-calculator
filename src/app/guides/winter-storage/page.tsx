import type { Metadata } from "next";
import { ArticleJsonLd } from "@/components/seo/JsonLd";
import { Snowflake, ThermometerSnowflake, Lock, Droplets, Shield, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Winter RV Storage Guide: Prepare Your Trailer for Cold Weather",
  description: "Complete winterization checklist for your RV and trailer. Protect your investment during the cold winter months.",
  openGraph: {
    title: "Winter RV Storage Guide",
    description: "Complete winterization checklist for your RV and trailer",
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1482192505345-5655af888cc4?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Winter RV storage",
      },
    ],
  },
};

export default function WinterStoragePage() {
  return (
    <div className="mx-auto max-w-3xl">
      <ArticleJsonLd
        title="Winter RV Storage Guide: Prepare Your Trailer for Cold Weather"
        description="Complete winterization checklist for your RV and trailer. Protect your investment during the cold winter months."
        url="https://rvtowingcalc.com/guides/winter-storage"
        datePublished="2024-10-15"
      />

      <div className="mb-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
            <Snowflake className="h-6 w-6 text-blue-600" />
          </div>
          <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
            Winter Seasonal Guide
          </span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
          Winter RV Storage Guide
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Proper winterization is essential to protect your RV or trailer from damage caused by freezing temperatures, 
          moisture, and other winter hazards. Follow this guide to ensure your investment stays in top condition.
        </p>
      </div>

      <div className="mb-8 rounded-2xl border border-amber-200 bg-amber-50 p-6">
        <div className="flex items-start gap-4">
          <Clock className="mt-1 h-6 w-6 flex-shrink-0 text-amber-600" />
          <div>
            <h3 className="font-bold text-amber-800">Timing Matters</h3>
            <p className="mt-1 text-sm text-amber-700">
              Start winterization before the first freeze. Ideally, complete all steps when temperatures are consistently 
              below 40°F (4°C) but before they drop to freezing (32°F / 0°C).
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <Section 
          icon={Droplets} 
          iconColor="text-cyan-600"
          bgColor="bg-cyan-100"
          title="Winterize the Water System"
        >
          <ChecklistItem text="Drain all water from fresh water tank" />
          <ChecklistItem text="Drain hot water heater" />
          <ChecklistItem text="Open all faucets and shower valves to drain" />
          <ChecklistItem text="Flush toilet to remove water" />
          <ChecklistItem text="Blow out water lines with compressed air" />
          <ChecklistItem text="Add RV antifreeze (non-toxic) to all lines" />
          <ChecklistItem text="Protect water pump with antifreeze" />
          <ChecklistItem text="Drain and clean gray and black water tanks" />
          <ChecklistItem text="Add tank treatment to prevent odors" />
          <ChecklistItem text="Disconnect and store water hoses indoors" />
        </Section>

        <Section 
          icon={ThermometerSnowflake} 
          iconColor="text-blue-600"
          bgColor="bg-blue-100"
          title="Protect Against Freezing"
        >
          <ChecklistItem text="Remove all food items - rodents love stored food" />
          <ChecklistItem text="Clean kitchen thoroughly - no crumbs" />
          <ChecklistItem text="Disconnect and remove batteries" />
          <ChecklistItem text="Store batteries in a cool, dry place" />
          <ChecklistItem text="Add fuel stabilizer to gas tank" />
          <ChecklistItem text="Run engine briefly to circulate stabilizer" />
          <ChecklistItem text="Change engine oil if storing for extended period" />
          <ChecklistItem text="Inspect and clean furnace/heating system" />
          <ChecklistItem text="Seal exterior openings to prevent drafts" />
          <ChecklistItem text="Cover exposed pipes and hoses" />
        </Section>

        <Section 
          icon={Lock} 
          iconColor="text-gray-600"
          bgColor="bg-gray-100"
          title="Exterior Preparation"
        >
          <ChecklistItem text="Wash and wax the exterior" />
          <ChecklistItem text="Inspect roof for damage - repair if needed" />
          <ChecklistItem text="Clean gutters and drains" />
          <ChecklistItem text="Remove debris from awning" />
          <ChecklistItem text="Clean and store awning" />
          <ChecklistItem text="Inspect seals around windows and doors" />
          <ChecklistItem text="Apply silicone lubricant to door hinges" />
          <ChecklistItem text="Cover tires with tire covers" />
          <ChecklistItem text="Block tires to prevent flat spots" />
          <ChecklistItem text="Install RV cover for additional protection" />
        </Section>

        <Section 
          icon={Shield} 
          iconColor="text-green-600"
          bgColor="bg-green-100"
          title="Safety & Security"
        >
          <ChecklistItem text="Install smoke/carbon monoxide detectors" />
          <ChecklistItem text="Add rodent traps and deterrents" />
          <ChecklistItem text="Install security camera if stored outdoors" />
          <ChecklistItem text="Use wheel locks for added security" />
          <ChecklistItem text="Remove valuables from the trailer" />
          <ChecklistItem text="Notify insurance company about storage" />
          <ChecklistItem text="Check storage facility security measures" />
          <ChecklistItem text="Leave emergency contact information" />
          <ChecklistItem text="Create maintenance checklist for spring" />
          <ChecklistItem text="Take photos of the trailer before storage" />
        </Section>
      </div>

      <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-xl font-bold text-gray-900">Storage Options Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="py-3 px-4 text-left font-semibold text-gray-700">Option</th>
                <th className="py-3 px-4 text-left font-semibold text-gray-700">Pros</th>
                <th className="py-3 px-4 text-left font-semibold text-gray-700">Cons</th>
                <th className="py-3 px-4 text-left font-semibold text-gray-700">Cost</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4 font-medium">Indoor Storage</td>
                <td className="py-3 px-4 text-gray-600">Maximum protection, climate controlled</td>
                <td className="py-3 px-4 text-gray-600">Most expensive, limited availability</td>
                <td className="py-3 px-4 text-gray-600">$100-$300/month</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4 font-medium">Outdoor Covered</td>
                <td className="py-3 px-4 text-gray-600">Protection from sun/rain, affordable</td>
                <td className="py-3 px-4 text-gray-600">Still exposed to cold temperatures</td>
                <td className="py-3 px-4 text-gray-600">$50-$150/month</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Outdoor Uncovered</td>
                <td className="py-3 px-4 text-gray-600">Least expensive, easy access</td>
                <td className="py-3 px-4 text-gray-600">Full exposure to elements, more maintenance</td>
                <td className="py-3 px-4 text-gray-600">$20-$80/month</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-xl font-bold text-gray-900">Pro Tips for Winter Storage</h2>
        <div className="space-y-4">
          <TipItem text="Check on your trailer monthly during storage - look for signs of damage or intrusion." />
          <TipItem text="Use moisture absorbers inside to prevent mold and mildew." />
          <TipItem text="Keep windows slightly open for ventilation (if weather permits)." />
          <TipItem text="Disconnect all power sources to prevent battery drain." />
          <TipItem text="Consider a battery maintainer if storing batteries on-site." />
        </div>
      </div>

      <div className="mt-8 flex flex-col items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-600 p-8 text-center text-white">
        <h2 className="text-2xl font-bold">Ready for Spring?</h2>
        <p className="mt-2">Check out our spring pre-departure checklist to get your trailer ready for the camping season.</p>
        <a
          href="/guides/spring-checklist"
          className="mt-4 rounded-lg bg-white px-6 py-3 font-bold text-blue-700 shadow-lg transition-all hover:shadow-xl"
        >
          Spring Preparation Guide
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
      <div className="mt-0.5 h-5 w-5 flex-shrink-0 rounded border-2 border-blue-500 bg-blue-50">
        <svg className="mt-0.5 ml-0.5 h-3 w-3 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
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