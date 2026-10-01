"use client";

import { useState, useCallback } from "react";
import { WATER_WEIGHT_PER_GALLON } from "@/lib/calculations/safety-assessment";

/**
 * Water Weight Calculator
 * Converts gallons to pounds and shows the impact on your cargo capacity.
 * Water weighs 8.34 lbs per gallon — a 50-gallon tank adds 417 lbs.
 */
export default function WaterWeightCalculator() {
  const [gallons, setGallons] = useState(0);
  const [tankCapacity, setTankCapacity] = useState(0);
  const [result, setResult] = useState<{ waterWeight: number; halfWeight: number; fullWeight: number } | null>(null);

  const handleCalculate = useCallback(() => {
    const waterWeight = gallons * WATER_WEIGHT_PER_GALLON;
    const fullWeight = tankCapacity > 0 ? tankCapacity * WATER_WEIGHT_PER_GALLON : waterWeight;
    const halfWeight = fullWeight / 2;
    setResult({ waterWeight, halfWeight, fullWeight });
    setTimeout(() => {
      document.getElementById("results")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  }, [gallons, tankCapacity]);

  // Common water weights for quick reference
  const commonWeights = [
    { gal: 10, label: "10 gal" },
    { gal: 20, label: "20 gal" },
    { gal: 30, label: "30 gal" },
    { gal: 40, label: "40 gal" },
    { gal: 50, label: "50 gal" },
    { gal: 60, label: "60 gal" },
  ];

  return (
    <div className="space-y-8">
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
        <h2 className="mb-4 text-xl font-bold text-gray-900">Calculate Water Weight</h2>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="rounded-lg border-2 border-blue-200 bg-blue-50 p-4">
            <label className="mb-2 block text-sm font-semibold text-blue-700">Water in Tank (gallons)</label>
            <input type="number" inputMode="numeric" value={gallons || ""} onChange={(e) => setGallons(Number(e.target.value) || 0)}
              placeholder="e.g., 45" className="w-full rounded-lg border border-gray-300 px-4 py-3 text-lg font-bold focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 md:py-2" />
            <p className="mt-2 text-xs text-gray-500">How many gallons of water are you carrying?</p>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">Tank Capacity (gallons, optional)</label>
            <input type="number" inputMode="numeric" value={tankCapacity || ""} onChange={(e) => setTankCapacity(Number(e.target.value) || 0)}
              placeholder="e.g., 50" className="w-full rounded-lg border border-gray-300 px-4 py-3 text-base focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 md:py-2" />
            <p className="mt-2 text-xs text-gray-500">Full tank size — to compare full vs half vs your load</p>
          </div>
        </div>

        <button type="button" onClick={handleCalculate} disabled={gallons === 0}
          className="mt-6 w-full rounded-xl bg-blue-600 px-6 py-4 text-lg font-bold text-white shadow-lg shadow-blue-600/25 transition-all hover:bg-blue-700 active:scale-[0.98] disabled:cursor-not-allowed disabled:bg-gray-300 disabled:shadow-none md:py-3 md:text-base">
          Calculate Water Weight
        </button>

        {/* Quick reference table */}
        <div className="mt-6">
          <h3 className="mb-3 text-sm font-semibold text-gray-700">Quick Reference: Gallons → Pounds</h3>
          <div className="grid grid-cols-3 gap-2 sm:grid-cols-6">
            {commonWeights.map((item) => (
              <button key={item.gal} type="button" onClick={() => setGallons(item.gal)}
                className="rounded-lg border border-gray-200 bg-gray-50 px-2 py-2 text-center text-xs transition-colors hover:border-blue-300 hover:bg-blue-50">
                <div className="font-semibold text-gray-700">{item.label}</div>
                <div className="text-blue-600">{Math.round(item.gal * WATER_WEIGHT_PER_GALLON)} lbs</div>
              </button>
            ))}
          </div>
          <p className="mt-2 text-xs text-gray-500">Click any value to load it into the calculator above.</p>
        </div>
      </div>

      {result && (
        <div id="results" className="space-y-6 scroll-mt-20">
          {/* Main result */}
          <div className="rounded-2xl border-2 border-blue-200 bg-blue-50 p-6 text-center">
            <p className="text-sm font-medium text-blue-700">Your water weighs</p>
            <p className="mt-1 text-5xl font-extrabold text-blue-700">
              {Math.round(result.waterWeight).toLocaleString("en-US")}
              <span className="ml-2 text-2xl font-bold text-blue-500">lbs</span>
            </p>
            <p className="mt-2 text-sm text-blue-600">
              {gallons.toLocaleString("en-US")} gallons × 8.34 lbs/gallon
            </p>
          </div>

          {/* Comparison cards */}
          {tankCapacity > 0 && (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-gray-200 bg-white p-4 text-center">
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Empty Tank</p>
                <p className="mt-1 text-2xl font-bold text-gray-400">0 lbs</p>
                <p className="mt-1 text-xs text-gray-500">0 gallons</p>
              </div>
              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-center">
                <p className="text-xs font-semibold uppercase tracking-wide text-amber-600">Half Tank</p>
                <p className="mt-1 text-2xl font-bold text-amber-700">{Math.round(result.halfWeight).toLocaleString("en-US")} lbs</p>
                <p className="mt-1 text-xs text-amber-600">{Math.round(tankCapacity / 2)} gallons</p>
              </div>
              <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-center">
                <p className="text-xs font-semibold uppercase tracking-wide text-red-600">Full Tank</p>
                <p className="mt-1 text-2xl font-bold text-red-700">{Math.round(result.fullWeight).toLocaleString("en-US")} lbs</p>
                <p className="mt-1 text-xs text-red-600">{tankCapacity} gallons</p>
              </div>
            </div>
          )}

          {/* Impact explanation */}
          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <h3 className="mb-3 text-lg font-bold text-gray-900">What This Means for Your Towing</h3>
            <div className="space-y-3 text-sm text-gray-600">
              <p>
                That <strong className="text-gray-900">{Math.round(result.waterWeight).toLocaleString("en-US")} lbs</strong> of water
                counts directly against your trailer&apos;s Cargo Carrying Capacity (CCC) and your truck&apos;s payload.
                It also adds to your tongue weight.
              </p>
              <p>
                If you can fill up at your destination instead of towing with a full tank, you could save
                <strong className="text-blue-700"> {tankCapacity > 0 ? Math.round((tankCapacity - gallons) * WATER_WEIGHT_PER_GALLON) : 0} lbs</strong>
                {tankCapacity > 0 && gallons < tankCapacity
                  ? ` by arriving with ${gallons} gallons instead of a full ${tankCapacity}-gallon tank.`
                  : " by traveling with an empty or partially full tank."}
              </p>
              <div className="rounded-lg bg-blue-50 p-3 text-blue-700">
                💡 <strong>Tip:</strong> Water is the single heaviest thing most RVers carry. A 50-gallon tank (417 lbs) is
                roughly equivalent to carrying five adults. Most campgrounds have water hookups — fill up when you arrive,
                not before you leave home.
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
