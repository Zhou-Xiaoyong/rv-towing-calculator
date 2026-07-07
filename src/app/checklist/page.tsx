"use client";

import { Printer, Shield, AlertCircle, Check } from "lucide-react";

export default function ChecklistPage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="mx-auto max-w-3xl">
      {/* Screen-only content */}
      <div className="mb-8 text-center print:hidden">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <Shield className="h-8 w-8 text-green-600" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
          Towing Safety Checklist
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Use this comprehensive checklist to ensure every trip starts safely. 
          Print it out and keep it in your tow vehicle for quick reference.
        </p>
        <button
          onClick={handlePrint}
          className="mt-6 inline-flex items-center gap-2 rounded-lg bg-brand-600 px-6 py-3 font-bold text-white shadow-lg shadow-brand-600/25 transition-all hover:bg-brand-700"
        >
          <Printer className="h-5 w-5" />
          Print Checklist
        </button>
      </div>

      {/* Printable checklist content */}
      <div className="printable-checklist rounded-2xl border border-gray-200 bg-white p-6 shadow-sm print:border-0 print:shadow-none print:p-0">
        <div className="mb-6 hidden print:block">
          <h1 className="text-2xl font-bold text-gray-900">Towing Safety Checklist</h1>
          <p className="mt-1 text-sm text-gray-600">
            Complete each item before every trip. Check the box when verified.
          </p>
        </div>

        <h2 className="mb-4 text-xl font-bold text-gray-900 print:text-lg">
          Before Hooking Up
        </h2>
        <ul className="space-y-2 mb-6">
          <CheckItem text="Inspect hitch and receiver for cracks or damage" />
          <CheckItem text="Verify hitch ball size matches trailer coupler" />
          <CheckItem text="Check weight distribution hitch (if using) is properly set" />
          <CheckItem text="Inspect safety chains for wear and proper attachment" />
          <CheckItem text="Verify trailer lights are working (brake, turn signal, running lights)" />
          <CheckItem text="Check tire pressure on both vehicle and trailer" />
          <CheckItem text="Inspect trailer brakes (if equipped)" />
          <CheckItem text="Ensure trailer jack is securely raised" />
        </ul>

        <h2 className="mb-4 text-xl font-bold text-gray-900 print:text-lg">
          Loading the Trailer
        </h2>
        <ul className="space-y-2 mb-6">
          <CheckItem text="Load heavy items forward (near axle)" />
          <CheckItem text="Ensure 10-15% of trailer weight on tongue (bumper pull)" />
          <CheckItem text="Ensure 20-25% of trailer weight on pin (fifth wheel)" />
          <CheckItem text="Secure all cargo with tie-downs" />
          <CheckItem text="Distribute weight evenly side-to-side" />
          <CheckItem text="Do not exceed trailer GVWR" />
        </ul>

        <h2 className="mb-4 text-xl font-bold text-gray-900 print:text-lg">
          Inside the Vehicle
        </h2>
        <ul className="space-y-2 mb-6">
          <CheckItem text="Adjust mirrors for proper trailer visibility" />
          <CheckItem text="Set trailer brake controller (if using)" />
          <CheckItem text="Adjust tire pressure for load" />
          <CheckItem text="Check oil and transmission fluid" />
          <CheckItem text="Ensure spare tire and tools are accessible" />
        </ul>

        <h2 className="mb-4 text-xl font-bold text-gray-900 print:text-lg">
          Pre-Departure Walkaround
        </h2>
        <ul className="space-y-2 mb-6">
          <CheckItem text="Verify coupler is locked and safety pins are in place" />
          <CheckItem text="Check safety chains are crossed under the coupler" />
          <CheckItem text="Inspect electrical connection" />
          <CheckItem text="Test trailer brakes" />
          <CheckItem text="Verify trailer lights are working" />
          <CheckItem text="Check trailer tire condition and pressure" />
          <CheckItem text="Confirm all doors and hatches are latched" />
        </ul>

        <h2 className="mb-4 text-xl font-bold text-gray-900 print:text-lg">
          On the Road
        </h2>
        <ul className="space-y-2 mb-6">
          <CheckItem text="Drive slowly and allow extra stopping distance" />
          <CheckItem text="Use turn signals early" />
          <CheckItem text="Make wide turns to avoid curbs" />
          <CheckItem text="Check mirrors frequently" />
          <CheckItem text="Avoid sudden braking and acceleration" />
          <CheckItem text="Take breaks every 2-3 hours" />
        </ul>

        <div className="rounded-lg bg-amber-50 p-4 print:bg-white print:border print:border-amber-200">
          <div className="flex items-start gap-3">
            <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-600" />
            <div>
              <h4 className="font-semibold text-amber-800">Pro Tip</h4>
              <p className="mt-1 text-sm text-amber-700">
                Weigh your fully loaded vehicle and trailer at a CAT scale before your first trip. 
                This will help you ensure you're within all weight limits and properly balanced.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-gray-200 print:block hidden">
          <p className="text-xs text-gray-500">
            For more towing safety resources, visit towsafe.com
          </p>
        </div>
      </div>

      {/* Screen-only print button at bottom */}
      <div className="mt-6 text-center print:hidden">
        <button
          onClick={handlePrint}
          className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-6 py-3 font-bold text-white shadow-lg shadow-brand-600/25 transition-all hover:bg-brand-700"
        >
          <Printer className="h-5 w-5" />
          Print This Checklist
        </button>
        <p className="mt-3 text-sm text-gray-500">
          Print double-sided and keep a copy in your glove compartment.
        </p>
      </div>
    </div>
  );
}

function CheckItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3">
      <div className="mt-0.5 h-5 w-5 flex-shrink-0 rounded border-2 border-gray-400 bg-white print:border-gray-600">
        <Check className="h-3 w-3 text-gray-400 opacity-0" />
      </div>
      <span className="text-sm text-gray-700">{text}</span>
    </li>
  );
}