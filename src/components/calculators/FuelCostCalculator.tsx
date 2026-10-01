"use client";

import { useState, useCallback } from "react";

/**
 * Towing Fuel Cost Calculator
 * Estimates fuel cost for a towing trip and compares it to driving without a trailer.
 */
export default function FuelCostCalculator() {
  const [distance, setDistance] = useState(0);
  const [mpgEmpty, setMpgEmpty] = useState(0);
  const [mpgTowing, setMpgTowing] = useState(0);
  const [mpgDropPercent, setMpgDropPercent] = useState(35);
  const [useMpgTowing, setUseMpgTowing] = useState(false);
  const [fuelPrice, setFuelPrice] = useState(0);
  const [result, setResult] = useState<{
    gallonsTowing: number;
    costTowing: number;
    gallonsEmpty: number;
    costEmpty: number;
    extraCost: number;
    costPerMileTowing: number;
    costPerMileEmpty: number;
  } | null>(null);

  const handleCalculate = useCallback(() => {
    // Determine effective towing MPG
    const towingMpg = useMpgTowing
      ? mpgTowing
      : mpgEmpty * (1 - mpgDropPercent / 100);

    const gallonsTowing = towingMpg > 0 ? distance / towingMpg : 0;
    const gallonsEmpty = mpgEmpty > 0 ? distance / mpgEmpty : 0;
    const costTowing = gallonsTowing * fuelPrice;
    const costEmpty = gallonsEmpty * fuelPrice;
    const extraCost = costTowing - costEmpty;
    const costPerMileTowing = distance > 0 ? costTowing / distance : 0;
    const costPerMileEmpty = distance > 0 ? costEmpty / distance : 0;

    setResult({ gallonsTowing, costTowing, gallonsEmpty, costEmpty, extraCost, costPerMileTowing, costPerMileEmpty });

    setTimeout(() => {
      document.getElementById("results")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  }, [distance, mpgEmpty, mpgTowing, mpgDropPercent, useMpgTowing, fuelPrice]);

  const fmtMoney = (n: number) =>
    n.toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 2, maximumFractionDigits: 2 });

  return (
    <div className="space-y-8">
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
        <h2 className="mb-4 text-xl font-bold text-gray-900">Enter Trip Details</h2>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="rounded-lg border-2 border-brand-200 bg-brand-50 p-4">
            <label className="mb-2 block text-sm font-semibold text-brand-700">Trip Distance (miles)</label>
            <input type="number" inputMode="numeric" value={distance || ""} onChange={(e) => setDistance(Number(e.target.value) || 0)}
              placeholder="e.g., 500" className="w-full rounded-lg border border-gray-300 px-4 py-3 text-lg font-bold focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500 md:py-2" />
            <p className="mt-2 text-xs text-gray-500">Round-trip or one-way distance</p>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">Fuel Price ($/gallon)</label>
            <input type="number" inputMode="decimal" step="0.01" value={fuelPrice || ""} onChange={(e) => setFuelPrice(Number(e.target.value) || 0)}
              placeholder="e.g., 3.89" className="w-full rounded-lg border border-gray-300 px-4 py-3 text-base focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500 md:py-2" />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">Truck MPG (without trailer)</label>
            <input type="number" inputMode="decimal" step="0.1" value={mpgEmpty || ""} onChange={(e) => setMpgEmpty(Number(e.target.value) || 0)}
              placeholder="e.g., 18" className="w-full rounded-lg border border-gray-300 px-4 py-3 text-base focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500 md:py-2" />
            <p className="mt-2 text-xs text-gray-500">Your truck's normal highway MPG</p>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">Towing MPG Input Mode</label>
            <div className="flex gap-2">
              <button type="button" onClick={() => setUseMpgTowing(false)}
                className={`flex-1 rounded-lg border-2 px-3 py-2 text-sm font-medium transition-colors ${!useMpgTowing ? "border-brand-600 bg-brand-50 text-brand-700" : "border-gray-200 text-gray-600"}`}>
                % Drop
              </button>
              <button type="button" onClick={() => setUseMpgTowing(true)}
                className={`flex-1 rounded-lg border-2 px-3 py-2 text-sm font-medium transition-colors ${useMpgTowing ? "border-brand-600 bg-brand-50 text-brand-700" : "border-gray-200 text-gray-600"}`}>
                Direct MPG
              </button>
            </div>
            {!useMpgTowing ? (
              <div className="mt-2">
                <input type="range" min={10} max={60} value={mpgDropPercent} onChange={(e) => setMpgDropPercent(Number(e.target.value))}
                  className="w-full" />
                <p className="text-xs text-gray-500">MPG drop when towing: <strong>{mpgDropPercent}%</strong> (typical: 25-40%)</p>
              </div>
            ) : (
              <input type="number" inputMode="decimal" step="0.1" value={mpgTowing || ""} onChange={(e) => setMpgTowing(Number(e.target.value) || 0)}
                placeholder="e.g., 11" className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500" />
            )}
          </div>
        </div>

        <button type="button" onClick={handleCalculate} disabled={distance === 0 || mpgEmpty === 0 || fuelPrice === 0 || (!useMpgTowing ? false : mpgTowing === 0)}
          className="mt-6 w-full rounded-xl bg-brand-600 px-6 py-4 text-lg font-bold text-white shadow-lg shadow-brand-600/25 transition-all hover:bg-brand-700 hover:shadow-brand-600/40 active:scale-[0.98] disabled:cursor-not-allowed disabled:bg-gray-300 disabled:shadow-none md:py-3 md:text-base">
          Calculate Fuel Cost
        </button>
      </div>

      {result && (
        <div id="results" className="space-y-6 scroll-mt-20">
          {/* Main cost comparison */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border-2 border-brand-200 bg-brand-50 p-6">
              <p className="text-sm font-medium text-brand-700">Cost Towing</p>
              <p className="mt-1 text-4xl font-extrabold text-brand-700">{fmtMoney(result.costTowing)}</p>
              <p className="mt-2 text-sm text-brand-600">
                {result.gallonsTowing.toFixed(1)} gallons · {fmtMoney(result.costPerMileTowing)}/mi
              </p>
            </div>
            <div className="rounded-2xl border-2 border-gray-200 bg-gray-50 p-6">
              <p className="text-sm font-medium text-gray-600">Cost Without Trailer</p>
              <p className="mt-1 text-4xl font-extrabold text-gray-700">{fmtMoney(result.costEmpty)}</p>
              <p className="mt-2 text-sm text-gray-500">
                {result.gallonsEmpty.toFixed(1)} gallons · {fmtMoney(result.costPerMileEmpty)}/mi
              </p>
            </div>
          </div>

          {/* Extra cost banner */}
          <div className="rounded-2xl border-l-4 border-amber-500 bg-amber-50 p-6">
            <p className="text-sm font-medium text-amber-700">Extra fuel cost of towing this trip</p>
            <p className="mt-1 text-3xl font-extrabold text-amber-700">
              {fmtMoney(result.extraCost)}
            </p>
            <p className="mt-1 text-sm text-amber-600">
              That&apos;s {fmtMoney(result.extraCost / (distance || 1))} per mile in additional fuel.
            </p>
          </div>

          {/* Breakdown */}
          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <h3 className="mb-4 text-lg font-bold text-gray-900">Trip Fuel Breakdown</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                <div>
                  <p className="text-sm font-medium text-gray-700">Without trailer</p>
                  <p className="text-xs text-gray-500">{mpgEmpty} MPG</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-gray-900">{result.gallonsEmpty.toFixed(1)} gal</p>
                  <p className="text-sm text-gray-600">{fmtMoney(result.costEmpty)}</p>
                </div>
              </div>
              <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                <div>
                  <p className="text-sm font-medium text-gray-700">With trailer</p>
                  <p className="text-xs text-gray-500">
                    {useMpgTowing ? `${mpgTowing} MPG` : `${(mpgEmpty * (1 - mpgDropPercent / 100)).toFixed(1)} MPG (−${mpgDropPercent}%)`}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-gray-900">{result.gallonsTowing.toFixed(1)} gal</p>
                  <p className="text-sm text-gray-600">{fmtMoney(result.costTowing)}</p>
                </div>
              </div>
              <div className="flex items-center justify-between pt-1">
                <div>
                  <p className="text-sm font-semibold text-amber-700">Additional fuel used</p>
                  <p className="text-xs text-gray-500">{(result.gallonsTowing - result.gallonsEmpty).toFixed(1)} extra gallons</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-amber-700">{fmtMoney(result.extraCost)}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Tips */}
          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <h3 className="mb-3 text-lg font-bold text-gray-900">Save on Towing Fuel</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex gap-2"><span className="text-brand-600">•</span> Slow down. Fuel economy drops sharply above 65 mph. Towing at 60 mph instead of 70 can save 1-2 MPG.</li>
              <li className="flex gap-2"><span className="text-brand-600">•</span> Keep tires properly inflated. Underinflated trailer tires reduce MPG and are a safety hazard.</li>
              <li className="flex gap-2"><span className="text-brand-600">•</span> Pack light. Every 100 lbs of extra weight reduces MPG by about 1-2%.</li>
              <li className="flex gap-2"><span className="text-brand-600">•</span> Use tow/haul mode on hills to avoid downshifting, which wastes fuel.</li>
              <li className="flex gap-2"><span className="text-brand-600">•</span> Plan routes with fewer steep grades when possible.</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
