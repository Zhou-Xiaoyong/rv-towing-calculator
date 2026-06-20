"use client";

import { useState, useCallback } from "react";
import type { SafetyCheck, SafetyStatus, TrailerType } from "@/lib/calculations/types";
import { SAFETY_THRESHOLDS } from "@/lib/calculations/safety-assessment";
import SafetyGauge from "@/components/calculators/SafetyGauge";
import SafetyCheckCard from "@/components/calculators/SafetyCheckCard";

export default function TongueWeightCalculator() {
  const [trailerType, setTrailerType] = useState<TrailerType>("travel-trailer");
  const [loadedTrailerWeight, setLoadedTrailerWeight] = useState(0);
  const [hitchRating, setHitchRating] = useState(0);
  const [result, setResult] = useState<SafetyCheck | null>(null);
  const [verdict, setVerdict] = useState("");
  const [status, setStatus] = useState<SafetyStatus>("safe");

  const handleCalculate = useCallback(() => {
    const thresholds = trailerType === "fifth-wheel"
      ? SAFETY_THRESHOLDS.tongueWeight.fifthWheel
      : SAFETY_THRESHOLDS.tongueWeight.travelTrailer;

    const defaultPercent = trailerType === "fifth-wheel" ? 22 : 13;
    const tongueWeight = (loadedTrailerWeight * defaultPercent) / 100;
    const tonguePercent = defaultPercent;
    const typeLabel = trailerType === "fifth-wheel" ? "Pin weight" : "Tongue weight";
    const rangeLabel = trailerType === "fifth-wheel" ? "20-25%" : "10-15%";

    const exceedsHitch = hitchRating > 0 && tongueWeight > hitchRating;
    let checkStatus: SafetyStatus;
    if (exceedsHitch) {
      checkStatus = "danger";
    } else if (tonguePercent >= thresholds.minOptimal && tonguePercent <= thresholds.maxOptimal) {
      checkStatus = "safe";
    } else if (tonguePercent >= thresholds.minAcceptable && tonguePercent <= thresholds.maxAcceptable) {
      checkStatus = "warning";
    } else {
      checkStatus = "danger";
    }

    const limitValue = Math.min(
      hitchRating || Infinity,
      (loadedTrailerWeight * thresholds.maxAcceptable) / 100,
    );

    let explanation = `${typeLabel} at ${defaultPercent}% of loaded trailer weight = ${Math.round(tongueWeight).toLocaleString("en-US")} lbs. Optimal range for ${trailerType === "fifth-wheel" ? "fifth wheels" : "travel trailers"} is ${rangeLabel} (${Math.round(loadedTrailerWeight * thresholds.minOptimal / 100).toLocaleString("en-US")}-${Math.round(loadedTrailerWeight * thresholds.maxOptimal / 100).toLocaleString("en-US")} lbs).`;
    let recommendation: string | undefined;

    if (exceedsHitch) {
      explanation += ` Your hitch receiver rating is ${Math.round(hitchRating).toLocaleString("en-US")} lbs - you're exceeding it!`;
      recommendation = `CRITICAL: Tongue weight exceeds your hitch rating by ${Math.round(tongueWeight - hitchRating).toLocaleString("en-US")} lbs. You need a higher-rated hitch or a lighter trailer setup.`;
    } else {
      // Calculate all ranges for the user
      const minOptimal = Math.round((loadedTrailerWeight * thresholds.minOptimal) / 100);
      const maxOptimal = Math.round((loadedTrailerWeight * thresholds.maxOptimal) / 100);
      const minAcceptable = Math.round((loadedTrailerWeight * thresholds.minAcceptable) / 100);
      const maxAcceptable = Math.round((loadedTrailerWeight * thresholds.maxAcceptable) / 100);

      recommendation = `For your ${Math.round(loadedTrailerWeight).toLocaleString("en-US")} lb loaded trailer:\n• Optimal ${typeLabel.toLowerCase()}: ${minOptimal}-${maxOptimal} lbs (${thresholds.minOptimal}-${thresholds.maxOptimal}%)\n• Acceptable range: ${minAcceptable}-${maxAcceptable} lbs\n• Below ${minAcceptable} lbs: sway risk\n• Above ${maxAcceptable} lbs: overload risk`;
    }

    const check: SafetyCheck = {
      id: "tongue-weight",
      name: `${typeLabel} Ratio`,
      actualValue: tongueWeight,
      limitValue,
      utilizationPercent: (tongueWeight / limitValue) * 100,
      status: checkStatus,
      marginLbs: limitValue - tongueWeight,
      marginPercent: ((limitValue - tongueWeight) / limitValue) * 100,
      explanation,
      recommendation,
    };

    setResult(check);
    setStatus(checkStatus);

    if (checkStatus === "danger") {
      setVerdict(exceedsHitch
        ? `STOP - Your ${typeLabel.toLowerCase()} (${Math.round(tongueWeight).toLocaleString("en-US")} lbs) exceeds your hitch receiver rating. This is extremely dangerous and can cause hitch failure.`
        : `CAUTION - Your ${typeLabel.toLowerCase()} percentage is outside the acceptable range. Adjust your cargo distribution.`);
    } else if (checkStatus === "warning") {
      setVerdict(`CAUTION - Your ${typeLabel.toLowerCase()} is within acceptable range but not in the optimal zone. Adjust cargo distribution for better towing stability.`);
    } else {
      setVerdict(`SAFE - Your ${typeLabel.toLowerCase()} is in the optimal range for stable towing. Good weight distribution!`);
    }

    setTimeout(() => {
      document.getElementById("results")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  }, [trailerType, loadedTrailerWeight, hitchRating]);

  return (
    <div className="space-y-8">
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
        <h2 className="mb-4 text-xl font-bold text-gray-900">Enter Your Numbers</h2>

        {/* Trailer type */}
        <div className="mb-4">
          <label className="mb-2 block text-sm font-medium text-gray-700">Trailer Type</label>
          <div className="flex gap-3">
            <button type="button" onClick={() => setTrailerType("travel-trailer")}
              className={`flex-1 rounded-lg border-2 px-4 py-3 text-sm font-medium transition-colors ${trailerType === "travel-trailer" ? "border-brand-600 bg-brand-50 text-brand-700" : "border-gray-200 text-gray-600 hover:border-gray-300"}`}>
              Travel Trailer (10-15%)
            </button>
            <button type="button" onClick={() => setTrailerType("fifth-wheel")}
              className={`flex-1 rounded-lg border-2 px-4 py-3 text-sm font-medium transition-colors ${trailerType === "fifth-wheel" ? "border-brand-600 bg-brand-50 text-brand-700" : "border-gray-200 text-gray-600 hover:border-gray-300"}`}>
              Fifth Wheel (20-25%)
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">Loaded Trailer Weight (lbs)</label>
            <input type="number" inputMode="numeric" value={loadedTrailerWeight || ""} onChange={(e) => setLoadedTrailerWeight(Number(e.target.value) || 0)}
              placeholder="e.g., 7000" className="w-full rounded-lg border border-gray-300 px-4 py-3 text-base focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500 md:py-2 md:text-sm" />
            <p className="mt-2 text-xs text-gray-500">Dry weight + cargo + water + propane</p>
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">Hitch Receiver Rating (lbs)</label>
            <input type="number" inputMode="numeric" value={hitchRating || ""} onChange={(e) => setHitchRating(Number(e.target.value) || 0)}
              placeholder="e.g., 1300" className="w-full rounded-lg border border-gray-300 px-4 py-3 text-base focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500 md:py-2 md:text-sm" />
            <p className="mt-2 text-xs text-gray-500">Max tongue weight your hitch can handle</p>
          </div>
        </div>

        <button type="button" onClick={handleCalculate} disabled={loadedTrailerWeight === 0}
          className="mt-6 w-full rounded-xl bg-brand-600 px-6 py-4 text-lg font-bold text-white shadow-lg shadow-brand-600/25 transition-all hover:bg-brand-700 hover:shadow-brand-600/40 active:scale-[0.98] disabled:cursor-not-allowed disabled:bg-gray-300 disabled:shadow-none md:py-3 md:text-base">
          Calculate Tongue Weight
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
