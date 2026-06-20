"use client";

import { useState, useCallback } from "react";
import type { SafetyCheck, SafetyStatus } from "@/lib/calculations/types";
import { getStatusByUtilization, SAFETY_THRESHOLDS } from "@/lib/calculations/safety-assessment";
import SafetyGauge from "@/components/calculators/SafetyGauge";
import SafetyCheckCard from "@/components/calculators/SafetyCheckCard";

export default function PayloadCalculator() {
  const [payloadCapacity, setPayloadCapacity] = useState(0);
  const [passengerWeight, setPassengerWeight] = useState(0);
  const [truckCargo, setTruckCargo] = useState(0);
  const [tongueWeight, setTongueWeight] = useState(0);
  const [result, setResult] = useState<SafetyCheck | null>(null);
  const [verdict, setVerdict] = useState("");
  const [status, setStatus] = useState<SafetyStatus>("safe");

  const handleCalculate = useCallback(() => {
    const usedPayload = passengerWeight + truckCargo + tongueWeight;
    const utilizationPercent = (usedPayload / payloadCapacity) * 100;
    const checkStatus = getStatusByUtilization(
      utilizationPercent,
      SAFETY_THRESHOLDS.payload.safe,
      SAFETY_THRESHOLDS.payload.warning,
    );
    const marginLbs = payloadCapacity - usedPayload;

    const check: SafetyCheck = {
      id: "payload",
      name: "Payload Capacity",
      actualValue: usedPayload,
      limitValue: payloadCapacity,
      utilizationPercent,
      status: checkStatus,
      marginLbs,
      marginPercent: (marginLbs / payloadCapacity) * 100,
      explanation: `Payload used: tongue/pin weight ${Math.round(tongueWeight).toLocaleString("en-US")} lbs + passengers ${Math.round(passengerWeight).toLocaleString("en-US")} lbs + cargo ${Math.round(truckCargo).toLocaleString("en-US")} lbs = ${Math.round(usedPayload).toLocaleString("en-US")} lbs. Your payload capacity is ${Math.round(payloadCapacity).toLocaleString("en-US")} lbs.`,
      recommendation:
        checkStatus === "danger"
          ? `You're over payload by ${Math.round(Math.abs(marginLbs)).toLocaleString("en-US")} lbs. This is the most common and dangerous towing mistake. Reduce cargo/passengers, use a weight distribution hitch, or get a truck with more payload.`
          : checkStatus === "warning"
            ? `Payload is tight. You have ${Math.round(marginLbs).toLocaleString("en-US")} lbs remaining. Consider reducing cargo for a safer buffer.`
            : `Payload is within safe range with ${Math.round(marginLbs).toLocaleString("en-US")} lbs to spare.`,
    };

    setResult(check);
    setStatus(checkStatus);

    if (checkStatus === "danger") {
      setVerdict(`STOP - Your payload is exceeded by ${Math.round(Math.abs(marginLbs)).toLocaleString("en-US")} lbs. This is unsafe and can cause tire failure, brake issues, and suspension damage. Do not tow until you reduce weight or upgrade your vehicle.`);
    } else if (checkStatus === "warning") {
      setVerdict(`CAUTION - You're within your payload limit but the margin is thin. You have ${Math.round(marginLbs).toLocaleString("en-US")} lbs remaining. Consider reducing cargo for a safer buffer.`);
    } else {
      setVerdict(`SAFE - Your payload usage is within the recommended safe zone. You have ${Math.round(marginLbs).toLocaleString("en-US")} lbs of payload remaining.`);
    }

    setTimeout(() => {
      document.getElementById("results")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  }, [payloadCapacity, passengerWeight, truckCargo, tongueWeight]);

  return (
    <div className="space-y-8">
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
        <div className="mb-2 inline-block rounded-full bg-danger-100 px-3 py-1 text-xs font-medium text-danger-700">
          #1 Most Exceeded Limit
        </div>
        <h2 className="mb-4 text-xl font-bold text-gray-900">
          Enter Your Numbers
        </h2>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="rounded-lg border-2 border-brand-200 bg-brand-50 p-4">
            <label className="mb-1 block text-sm font-semibold text-brand-700">
              Payload Capacity (lbs)
            </label>
            <input
              type="number"
              value={payloadCapacity || ""}
              onChange={(e) => setPayloadCapacity(Number(e.target.value) || 0)}
              placeholder="e.g., 1976"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-lg font-bold focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
            />
            <p className="mt-1 text-xs text-gray-500">
              From your truck&apos;s door jamb sticker
            </p>
          </div>

          <div className="space-y-3">
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Passenger Weight (lbs)
              </label>
              <input
                type="number"
                value={passengerWeight || ""}
                onChange={(e) => setPassengerWeight(Number(e.target.value) || 0)}
                placeholder="e.g., 700 (4 people)"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Cargo in Truck (lbs)
              </label>
              <input
                type="number"
                value={truckCargo || ""}
                onChange={(e) => setTruckCargo(Number(e.target.value) || 0)}
                placeholder="e.g., 300"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Tongue / Pin Weight (lbs)
              </label>
              <input
                type="number"
                value={tongueWeight || ""}
                onChange={(e) => setTongueWeight(Number(e.target.value) || 0)}
                placeholder="e.g., 800"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
              />
              <p className="mt-1 text-xs text-gray-500">
                ~13% of loaded trailer weight (travel trailer) or ~22% (fifth wheel)
              </p>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={handleCalculate}
          disabled={payloadCapacity === 0}
          className="mt-6 w-full rounded-xl bg-brand-600 px-6 py-4 text-base font-bold text-white shadow-lg shadow-brand-600/25 transition-all hover:bg-brand-700 hover:shadow-brand-600/40 active:scale-[0.99] disabled:cursor-not-allowed disabled:bg-gray-300 disabled:shadow-none"
        >
          Check Payload Safety
        </button>
      </div>

      {result && (
        <div id="results" className="space-y-6 scroll-mt-20">
          <SafetyGauge status={status} verdict={verdict} />
          <SafetyCheckCard check={result} />
        </div>
      )}
    </div>
  );
}
