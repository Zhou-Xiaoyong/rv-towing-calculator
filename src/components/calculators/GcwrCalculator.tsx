"use client";

import { useState, useCallback } from "react";
import type { SafetyCheck, SafetyStatus } from "@/lib/calculations/types";
import { getStatusByUtilization, SAFETY_THRESHOLDS } from "@/lib/calculations/safety-assessment";
import SafetyGauge from "@/components/calculators/SafetyGauge";
import SafetyCheckCard from "@/components/calculators/SafetyCheckCard";

export default function GcwrCalculator() {
  const [curbWeight, setCurbWeight] = useState(0);
  const [passengerWeight, setPassengerWeight] = useState(0);
  const [truckCargo, setTruckCargo] = useState(0);
  const [loadedTrailerWeight, setLoadedTrailerWeight] = useState(0);
  const [gcwr, setGcwr] = useState(0);
  const [result, setResult] = useState<SafetyCheck | null>(null);
  const [verdict, setVerdict] = useState("");
  const [status, setStatus] = useState<SafetyStatus>("safe");

  const handleCalculate = useCallback(() => {
    // Combined weight = curb + passengers + cargo + loaded trailer
    // (tongue weight is part of trailer weight and also transferred to truck,
    // but total weight on the ground is the sum of truck + trailer)
    const combinedWeight = curbWeight + passengerWeight + truckCargo + loadedTrailerWeight;
    const utilizationPercent = (combinedWeight / gcwr) * 100;
    const checkStatus = getStatusByUtilization(
      utilizationPercent,
      SAFETY_THRESHOLDS.gcwr.safe,
      SAFETY_THRESHOLDS.gcwr.warning,
    );
    const marginLbs = gcwr - combinedWeight;

    const check: SafetyCheck = {
      id: "gcwr",
      name: "GCWR (Combined Weight)",
      actualValue: combinedWeight,
      limitValue: gcwr,
      utilizationPercent,
      status: checkStatus,
      marginLbs,
      marginPercent: (marginLbs / gcwr) * 100,
      explanation: `Your combined weight (truck curb ${Math.round(curbWeight).toLocaleString("en-US")} + passengers ${Math.round(passengerWeight).toLocaleString("en-US")} + truck cargo ${Math.round(truckCargo).toLocaleString("en-US")} + loaded trailer ${Math.round(loadedTrailerWeight).toLocaleString("en-US")}) = ${Math.round(combinedWeight).toLocaleString("en-US")} lbs. Your GCWR is ${Math.round(gcwr).toLocaleString("en-US")} lbs.`,
      recommendation:
        checkStatus === "danger"
          ? `Combined weight exceeds GCWR by ${Math.round(Math.abs(marginLbs)).toLocaleString("en-US")} lbs. This strains your engine, transmission, and brakes. Reduce trailer cargo or upgrade your tow vehicle.`
          : checkStatus === "warning"
            ? `Approaching GCWR limit. ${Math.round(marginLbs).toLocaleString("en-US")} lbs remaining. Monitor engine temp and braking performance on hills.`
            : `Combined weight is within limits with ${Math.round(marginLbs).toLocaleString("en-US")} lbs to spare.`,
    };

    setResult(check);
    setStatus(checkStatus);

    if (checkStatus === "danger") {
      setVerdict(`STOP - Your combined weight exceeds your GCWR by ${Math.round(Math.abs(marginLbs)).toLocaleString("en-US")} lbs. This puts excessive strain on your engine, transmission, and brakes. Do not tow until you reduce weight.`);
    } else if (checkStatus === "warning") {
      setVerdict(`CAUTION - You're approaching your GCWR limit with ${Math.round(marginLbs).toLocaleString("en-US")} lbs remaining. Watch engine temperature and braking on hills.`);
    } else {
      setVerdict(`SAFE - Your combined weight is within the GCWR limit with ${Math.round(marginLbs).toLocaleString("en-US")} lbs of margin remaining.`);
    }

    setTimeout(() => {
      document.getElementById("results")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  }, [curbWeight, passengerWeight, truckCargo, loadedTrailerWeight, gcwr]);

  return (
    <div className="space-y-8">
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
        <h2 className="mb-4 text-xl font-bold text-gray-900">Enter Your Numbers</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">Truck Curb Weight (lbs)</label>
            <input type="number" value={curbWeight || ""} onChange={(e) => setCurbWeight(Number(e.target.value) || 0)}
              placeholder="e.g., 5074" className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500" />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">GCWR (lbs)</label>
            <input type="number" value={gcwr || ""} onChange={(e) => setGcwr(Number(e.target.value) || 0)}
              placeholder="e.g., 17100" className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500" />
            <p className="mt-1 text-xs text-gray-500">From owner&apos;s manual or towing guide</p>
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">Passenger Weight (lbs)</label>
            <input type="number" value={passengerWeight || ""} onChange={(e) => setPassengerWeight(Number(e.target.value) || 0)}
              placeholder="e.g., 700" className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500" />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">Cargo in Truck (lbs)</label>
            <input type="number" value={truckCargo || ""} onChange={(e) => setTruckCargo(Number(e.target.value) || 0)}
              placeholder="e.g., 300" className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500" />
          </div>
          <div className="md:col-span-2">
            <label className="mb-1 block text-sm font-medium text-gray-700">Loaded Trailer Weight (lbs)</label>
            <input type="number" value={loadedTrailerWeight || ""} onChange={(e) => setLoadedTrailerWeight(Number(e.target.value) || 0)}
              placeholder="e.g., 7000 (dry + cargo + water + propane)" className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500" />
            <p className="mt-1 text-xs text-gray-500">Dry weight + cargo + water (8.34 lbs/gal) + propane</p>
          </div>
        </div>
        <button type="button" onClick={handleCalculate} disabled={gcwr === 0}
          className="mt-6 w-full rounded-xl bg-brand-600 px-6 py-4 text-base font-bold text-white shadow-lg shadow-brand-600/25 transition-all hover:bg-brand-700 active:scale-[0.99] disabled:cursor-not-allowed disabled:bg-gray-300 disabled:shadow-none">
          Check GCWR Safety
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
