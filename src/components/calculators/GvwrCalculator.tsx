"use client";

import { useState, useCallback } from "react";
import type { SafetyCheck, SafetyStatus } from "@/lib/calculations/types";
import { getStatusByUtilization, SAFETY_THRESHOLDS } from "@/lib/calculations/safety-assessment";
import SafetyGauge from "@/components/calculators/SafetyGauge";
import SafetyCheckCard from "@/components/calculators/SafetyCheckCard";

export default function GvwrCalculator() {
  const [curbWeight, setCurbWeight] = useState(0);
  const [passengerWeight, setPassengerWeight] = useState(0);
  const [truckCargo, setTruckCargo] = useState(0);
  const [tongueWeight, setTongueWeight] = useState(0);
  const [gvwr, setGvwr] = useState(0);
  const [result, setResult] = useState<SafetyCheck | null>(null);
  const [verdict, setVerdict] = useState("");
  const [status, setStatus] = useState<SafetyStatus>("safe");

  const handleCalculate = useCallback(() => {
    const loadedTruckWeight = curbWeight + passengerWeight + truckCargo + tongueWeight;
    const utilizationPercent = (loadedTruckWeight / gvwr) * 100;
    const checkStatus = getStatusByUtilization(
      utilizationPercent,
      SAFETY_THRESHOLDS.gvwr.safe,
      SAFETY_THRESHOLDS.gvwr.warning,
    );
    const marginLbs = gvwr - loadedTruckWeight;

    const check: SafetyCheck = {
      id: "gvwr",
      name: "GVWR (Vehicle Weight)",
      actualValue: loadedTruckWeight,
      limitValue: gvwr,
      utilizationPercent,
      status: checkStatus,
      marginLbs,
      marginPercent: (marginLbs / gvwr) * 100,
      explanation: `Your loaded truck weight (curb ${Math.round(curbWeight).toLocaleString("en-US")} + passengers ${Math.round(passengerWeight).toLocaleString("en-US")} + cargo ${Math.round(truckCargo).toLocaleString("en-US")} + tongue weight ${Math.round(tongueWeight).toLocaleString("en-US")}) = ${Math.round(loadedTruckWeight).toLocaleString("en-US")} lbs. Your GVWR is ${Math.round(gvwr).toLocaleString("en-US")} lbs.`,
      recommendation:
        checkStatus === "danger"
          ? `Your truck exceeds its GVWR by ${Math.round(Math.abs(marginLbs)).toLocaleString("en-US")} lbs. This can cause tire failure, brake issues, and suspension damage. Reduce weight immediately.`
          : checkStatus === "warning"
            ? `Close to GVWR limit. ${Math.round(marginLbs).toLocaleString("en-US")} lbs remaining before you hit the vehicle's max weight rating.`
            : `Within GVWR with ${Math.round(marginLbs).toLocaleString("en-US")} lbs margin remaining.`,
    };

    setResult(check);
    setStatus(checkStatus);

    if (checkStatus === "danger") {
      setVerdict(`STOP - Your truck exceeds its GVWR by ${Math.round(Math.abs(marginLbs)).toLocaleString("en-US")} lbs. Overloading risks tire blowouts, brake failure, and suspension damage. Reduce weight before driving.`);
    } else if (checkStatus === "warning") {
      setVerdict(`CAUTION - You're approaching your GVWR limit with ${Math.round(marginLbs).toLocaleString("en-US")} lbs to spare. Monitor your load carefully.`);
    } else {
      setVerdict(`SAFE - Your truck weight is within the GVWR limit with ${Math.round(marginLbs).toLocaleString("en-US")} lbs of margin remaining.`);
    }

    setTimeout(() => {
      document.getElementById("results")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  }, [curbWeight, passengerWeight, truckCargo, tongueWeight, gvwr]);

  return (
    <div className="space-y-8">
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
        <h2 className="mb-4 text-xl font-bold text-gray-900">Enter Your Numbers</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">Curb Weight (lbs)</label>
            <input type="number" value={curbWeight || ""} onChange={(e) => setCurbWeight(Number(e.target.value) || 0)}
              placeholder="e.g., 5074" className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500" />
            <p className="mt-1 text-xs text-gray-500">Weight of empty vehicle</p>
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">GVWR (lbs)</label>
            <input type="number" value={gvwr || ""} onChange={(e) => setGvwr(Number(e.target.value) || 0)}
              placeholder="e.g., 7050" className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500" />
            <p className="mt-1 text-xs text-gray-500">From door jamb sticker</p>
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
            <label className="mb-1 block text-sm font-medium text-gray-700">Tongue / Pin Weight (lbs)</label>
            <input type="number" value={tongueWeight || ""} onChange={(e) => setTongueWeight(Number(e.target.value) || 0)}
              placeholder="e.g., 910 (13% of 7000 lb trailer)" className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500" />
            <p className="mt-1 text-xs text-gray-500">Weight transferred from trailer to truck</p>
          </div>
        </div>
        <button type="button" onClick={handleCalculate} disabled={gvwr === 0}
          className="mt-6 w-full rounded-xl bg-brand-600 px-6 py-4 text-base font-bold text-white shadow-lg shadow-brand-600/25 transition-all hover:bg-brand-700 active:scale-[0.99] disabled:cursor-not-allowed disabled:bg-gray-300 disabled:shadow-none">
          Check GVWR Safety
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
