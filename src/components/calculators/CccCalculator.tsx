"use client";

import { useState, useCallback } from "react";
import type { SafetyCheck, SafetyStatus } from "@/lib/calculations/types";
import {
  getStatusByUtilization,
  SAFETY_THRESHOLDS,
  WATER_WEIGHT_PER_GALLON,
  getPropaneWeight,
} from "@/lib/calculations/safety-assessment";
import SafetyGauge from "@/components/calculators/SafetyGauge";
import SafetyCheckCard from "@/components/calculators/SafetyCheckCard";

export default function CccCalculator() {
  const [trailerGvwr, setTrailerGvwr] = useState(0);
  const [uvw, setUvw] = useState(0);
  const [waterGallons, setWaterGallons] = useState(0);
  const [propaneTanks, setPropaneTanks] = useState(2);
  const [propaneTankSize, setPropaneTankSize] = useState(20);
  const [cargoWeight, setCargoWeight] = useState(0);
  const [result, setResult] = useState<SafetyCheck | null>(null);
  const [verdict, setVerdict] = useState("");
  const [status, setStatus] = useState<SafetyStatus>("safe");
  const [breakdown, setBreakdown] = useState<{ ccc: number; water: number; propane: number; available: number; remaining: number } | null>(null);

  const handleCalculate = useCallback(() => {
    const ccc = trailerGvwr - uvw;
    const waterWeight = waterGallons * WATER_WEIGHT_PER_GALLON;
    const propaneWeight = getPropaneWeight(propaneTanks, propaneTankSize);
    const availableCargo = ccc - waterWeight - propaneWeight;
    const remaining = availableCargo - cargoWeight;

    // Use cargo utilization: how much of available cargo is used
    const utilizationPercent =
      availableCargo > 0 ? (cargoWeight / availableCargo) * 100 : cargoWeight > 0 ? 101 : 0;
    const checkStatus = getStatusByUtilization(
      utilizationPercent,
      SAFETY_THRESHOLDS.payload.safe,
      SAFETY_THRESHOLDS.payload.warning,
    );

    const check: SafetyCheck = {
      id: "ccc",
      name: "Cargo Carrying Capacity",
      actualValue: waterWeight + propaneWeight + cargoWeight,
      limitValue: ccc,
      utilizationPercent: ccc > 0 ? ((waterWeight + propaneWeight + cargoWeight) / ccc) * 100 : 0,
      status: checkStatus,
      marginLbs: remaining,
      marginPercent: availableCargo > 0 ? (remaining / availableCargo) * 100 : 0,
      explanation: `Your trailer's CCC is ${Math.round(ccc).toLocaleString("en-US")} lbs (GVWR ${Math.round(trailerGvwr).toLocaleString("en-US")} - UVW ${Math.round(uvw).toLocaleString("en-US")}). Water (${waterGallons} gal) adds ${Math.round(waterWeight).toLocaleString("en-US")} lbs and propane (${propaneTanks}×${propaneTankSize}lb) adds ${Math.round(propaneWeight).toLocaleString("en-US")} lbs. That leaves ${Math.round(availableCargo).toLocaleString("en-US")} lbs for gear and food. You're packing ${Math.round(cargoWeight).toLocaleString("en-US")} lbs.`,
      recommendation:
        checkStatus === "danger"
          ? `You're over your available cargo capacity by ${Math.round(Math.abs(remaining)).toLocaleString("en-US")} lbs. This pushes your trailer over GVWR, risking tire blowouts and axle damage. Lighten your load or travel with less water.`
          : checkStatus === "warning"
            ? `You're close to your cargo limit. Only ${Math.round(remaining).toLocaleString("en-US")} lbs remaining. Consider traveling with a half-full water tank to free up ${Math.round(waterWeight / 2).toLocaleString("en-US")} lbs.`
            : `You're within your cargo capacity with ${Math.round(remaining).toLocaleString("en-US")} lbs to spare. Safe to pack.`,
    };

    setResult(check);
    setStatus(checkStatus);
    setBreakdown({ ccc, water: waterWeight, propane: propaneWeight, available: availableCargo, remaining });

    if (checkStatus === "danger") {
      setVerdict(`Your trailer would be over its GVWR by ${Math.round(Math.abs(remaining)).toLocaleString("en-US")} lbs. Water (${Math.round(waterWeight).toLocaleString("en-US")} lbs) and propane (${Math.round(propaneWeight).toLocaleString("en-US")} lbs) already eat into your CCC — your cargo puts you over. Remove gear or drain water before towing.`);
    } else if (checkStatus === "warning") {
      setVerdict(`You're within CCC but the margin is thin. Only ${Math.round(remaining).toLocaleString("en-US")} lbs of cargo capacity remains. A half-empty water tank would give you ${Math.round(waterWeight / 2).toLocaleString("en-US")} lbs more breathing room.`);
    } else {
      setVerdict(`Your cargo load is safe. You have ${Math.round(remaining).toLocaleString("en-US")} lbs of cargo capacity remaining after water and propane.`);
    }

    setTimeout(() => {
      document.getElementById("results")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  }, [trailerGvwr, uvw, waterGallons, propaneTanks, propaneTankSize, cargoWeight]);

  return (
    <div className="space-y-8">
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
        <h2 className="mb-4 text-xl font-bold text-gray-900">Enter Your Trailer Numbers</h2>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="rounded-lg border-2 border-brand-200 bg-brand-50 p-4">
            <label className="mb-2 block text-sm font-semibold text-brand-700">Trailer GVWR (lbs)</label>
            <input type="number" inputMode="numeric" value={trailerGvwr || ""} onChange={(e) => setTrailerGvwr(Number(e.target.value) || 0)}
              placeholder="e.g., 7850" className="w-full rounded-lg border border-gray-300 px-4 py-3 text-lg font-bold focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500 md:py-2" />
            <p className="mt-2 text-xs text-gray-500">Max weight rating on trailer tires/axles</p>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">UVW / Dry Weight (lbs)</label>
            <input type="number" inputMode="numeric" value={uvw || ""} onChange={(e) => setUvw(Number(e.target.value) || 0)}
              placeholder="e.g., 6218" className="w-full rounded-lg border border-gray-300 px-4 py-3 text-base focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500 md:py-2" />
            <p className="mt-2 text-xs text-gray-500">Unloaded vehicle weight from dealer/sticker</p>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">Fresh Water (gallons)</label>
            <input type="number" inputMode="numeric" value={waterGallons || ""} onChange={(e) => setWaterGallons(Number(e.target.value) || 0)}
              placeholder="e.g., 45" className="w-full rounded-lg border border-gray-300 px-4 py-3 text-base focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500 md:py-2" />
            <p className="mt-2 text-xs text-gray-500">Water weighs 8.34 lbs/gal</p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">Propane Tanks</label>
              <input type="number" inputMode="numeric" value={propaneTanks} onChange={(e) => setPropaneTanks(Number(e.target.value) || 0)}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-base focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500 md:py-2" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">Tank Size (lbs)</label>
              <select value={propaneTankSize} onChange={(e) => setPropaneTankSize(Number(e.target.value))}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-base focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500 md:py-2">
                <option value={20}>20 lb</option>
                <option value={30}>30 lb</option>
                <option value={40}>40 lb</option>
              </select>
            </div>
          </div>

          <div className="md:col-span-2">
            <label className="mb-2 block text-sm font-medium text-gray-700">Cargo You Plan to Pack (lbs)</label>
            <input type="number" inputMode="numeric" value={cargoWeight || ""} onChange={(e) => setCargoWeight(Number(e.target.value) || 0)}
              placeholder="e.g., 700 (food, clothes, gear, tools)" className="w-full rounded-lg border border-gray-300 px-4 py-3 text-base focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500 md:py-2" />
            <p className="mt-2 text-xs text-gray-500">Everything you add: food, clothing, tools, firewood, etc.</p>
          </div>
        </div>

        <button type="button" onClick={handleCalculate} disabled={trailerGvwr === 0 || uvw === 0}
          className="mt-6 w-full rounded-xl bg-brand-600 px-6 py-4 text-lg font-bold text-white shadow-lg shadow-brand-600/25 transition-all hover:bg-brand-700 hover:shadow-brand-600/40 active:scale-[0.98] disabled:cursor-not-allowed disabled:bg-gray-300 disabled:shadow-none md:py-3 md:text-base">
          Calculate Cargo Capacity
        </button>
      </div>

      {result && breakdown && (
        <div id="results" className="space-y-6 scroll-mt-20">
          <SafetyGauge status={status} verdict={verdict} />

          {/* CCC breakdown */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-4 text-lg font-bold text-gray-900">How Your CCC Is Used</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                <span className="text-sm text-gray-600">CCC (GVWR − UVW)</span>
                <span className="text-sm font-bold text-gray-900">{Math.round(breakdown.ccc).toLocaleString("en-US")} lbs</span>
              </div>
              <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                <span className="text-sm text-gray-600">− Water ({waterGallons} gal)</span>
                <span className="text-sm font-medium text-blue-600">−{Math.round(breakdown.water).toLocaleString("en-US")} lbs</span>
              </div>
              <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                <span className="text-sm text-gray-600">− Propane ({propaneTanks}×{propaneTankSize}lb)</span>
                <span className="text-sm font-medium text-amber-600">−{Math.round(breakdown.propane).toLocaleString("en-US")} lbs</span>
              </div>
              <div className="flex items-center justify-between border-b-2 border-gray-300 pb-2">
                <span className="text-sm font-semibold text-gray-700">= Available for cargo</span>
                <span className="text-sm font-bold text-brand-700">{Math.round(breakdown.available).toLocaleString("en-US")} lbs</span>
              </div>
              <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                <span className="text-sm text-gray-600">− Your cargo</span>
                <span className="text-sm font-medium text-gray-700">−{Math.round(cargoWeight).toLocaleString("en-US")} lbs</span>
              </div>
              <div className="flex items-center justify-between pt-1">
                <span className="text-sm font-bold text-gray-900">Remaining cargo capacity</span>
                <span className={`text-sm font-bold ${breakdown.remaining >= 0 ? "text-success-600" : "text-danger-600"}`}>
                  {Math.round(breakdown.remaining).toLocaleString("en-US")} lbs
                </span>
              </div>
            </div>
          </div>

          <SafetyCheckCard check={result} />
        </div>
      )}
    </div>
  );
}
