"use client";

import { useState } from "react";
import { ArticleJsonLd } from "@/components/seo/JsonLd";
import { Check, Shield, Mail, Download, AlertCircle } from "lucide-react";

export default function ChecklistPage() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <div className="mx-auto max-w-3xl">
      <div className="mb-8 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <Shield className="h-8 w-8 text-green-600" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
          Towing Safety Checklist
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Download our comprehensive safety checklist to ensure every trip starts safely
        </p>
      </div>

      {!isSubmitted ? (
        <div className="mb-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-bold text-gray-900">Get Your Free Checklist</h2>
          <p className="mb-6 text-gray-600">
            Enter your email below to download our printable Towing Safety Checklist PDF. 
            We'll also send you tips and updates to help you tow safely.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <div className="flex gap-3">
                <div className="relative flex-1">
                  <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    required
                    className="w-full rounded-lg border border-gray-300 bg-gray-50 py-3 pl-10 pr-4 text-base focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center gap-2 rounded-lg bg-brand-600 px-6 py-3 font-bold text-white shadow-lg shadow-brand-600/25 transition-all hover:bg-brand-700 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Download className="h-5 w-5" />
                      Download PDF
                    </>
                  )}
                </button>
              </div>
            </div>
            <p className="text-xs text-gray-500">
              By entering your email, you agree to receive our weekly newsletter with towing tips and safety information. 
              You can unsubscribe at any time.
            </p>
          </form>
        </div>
      ) : (
        <div className="mb-8 rounded-2xl border border-green-200 bg-green-50 p-6 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-200">
            <Check className="h-6 w-6 text-green-700" />
          </div>
          <h2 className="mb-2 text-xl font-bold text-green-800">Checklist Downloaded!</h2>
          <p className="mb-4 text-green-700">
            Thank you for subscribing. Your Towing Safety Checklist PDF has been sent to {email}.
          </p>
          <button
            onClick={() => {
              setIsSubmitted(false);
              setEmail("");
            }}
            className="text-sm font-medium text-green-700 hover:text-green-900"
          >
            Download again
          </button>
        </div>
      )}

      <div className="space-y-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900">Preview: Towing Safety Checklist</h2>
        
        <div className="space-y-4">
          <Section title="Before Hooking Up">
            <CheckItem text="Inspect hitch and receiver for cracks or damage" />
            <CheckItem text="Verify hitch ball size matches trailer coupler" />
            <CheckItem text="Check weight distribution hitch (if using) is properly set" />
            <CheckItem text="Inspect safety chains for wear and proper attachment" />
            <CheckItem text="Verify trailer lights are working (brake, turn signal, running lights)" />
            <CheckItem text="Check tire pressure on both vehicle and trailer" />
            <CheckItem text="Inspect trailer brakes (if equipped)" />
            <CheckItem text="Ensure trailer jack is securely raised" />
          </Section>

          <Section title="Loading the Trailer">
            <CheckItem text="Load heavy items forward (near axle)" />
            <CheckItem text="Ensure 10-15% of trailer weight on tongue (bumper pull)" />
            <CheckItem text="Ensure 20-25% of trailer weight on pin (fifth wheel)" />
            <CheckItem text="Secure all cargo with tie-downs" />
            <CheckItem text="Distribute weight evenly side-to-side" />
            <CheckItem text="Do not exceed trailer GVWR" />
          </Section>

          <Section title="Inside the Vehicle">
            <CheckItem text="Adjust mirrors for proper trailer visibility" />
            <CheckItem text="Set trailer brake controller (if using)" />
            <CheckItem text="Adjust tire pressure for load" />
            <CheckItem text="Check oil and transmission fluid" />
            <CheckItem text="Ensure spare tire and tools are accessible" />
          </Section>

          <Section title="Pre-Departure Walkaround">
            <CheckItem text="Verify coupler is locked and safety pins are in place" />
            <CheckItem text="Check safety chains are crossed under the coupler" />
            <CheckItem text="Inspect electrical connection" />
            <CheckItem text="Test trailer brakes" />
            <CheckItem text="Verify trailer lights are working" />
            <CheckItem text="Check trailer tire condition and pressure" />
            <CheckItem text="Confirm all doors and hatches are latched" />
          </Section>

          <Section title="On the Road">
            <CheckItem text="Drive slowly and allow extra stopping distance" />
            <CheckItem text="Use turn signals early" />
            <CheckItem text="Make wide turns to avoid curbs" />
            <CheckItem text="Check mirrors frequently" />
            <CheckItem text="Avoid sudden braking and acceleration" />
            <CheckItem text="Take breaks every 2-3 hours" />
          </Section>
        </div>

        <div className="rounded-lg bg-amber-50 p-4">
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
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold text-gray-900">
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-100 text-xs font-bold text-brand-700">
          •
        </div>
        {title}
      </h3>
      <ul className="space-y-2">
        {children}
      </ul>
    </div>
  );
}

function CheckItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3 rounded-lg bg-gray-50 p-3">
      <div className="mt-0.5 h-5 w-5 flex-shrink-0 rounded border-2 border-gray-300 bg-white">
        <Check className="h-3 w-3 text-gray-400 opacity-0" />
      </div>
      <span className="text-sm text-gray-700">{text}</span>
    </li>
  );
}