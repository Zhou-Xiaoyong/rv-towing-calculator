"use client";

import { useState, useCallback, useMemo } from "react";
import type {
  TowingInput,
  TowingResult,
  TrailerType,
  VehicleSpec,
} from "@/lib/calculations/types";
import { analyzeTowing } from "@/lib/calculations/towing-engine";
import {
  VEHICLE_DATABASE,
  getVehicleMakes,
  getVehicleModels,
  getVehicleTrims,
  dbEntryToVehicleSpec,
} from "@/data/vehicle-data";
import type { TrailerDatabaseEntry } from "@/data/trailer-data";
import { allTrailers } from "@/data/trailer-data";
import SafetyGauge from "./SafetyGauge";
import SafetyCheckCard from "./SafetyCheckCard";
import WeightBreakdown from "./WeightBreakdown";
import TrailerSelector from "./TrailerSelector";
import AmazonAffiliate from "../AmazonAffiliate";

type InputMode = "database" | "manual";
type TrailerInputMode = "database" | "manual";

export default function TowingCalculator() {
  const [inputMode, setInputMode] = useState<InputMode>("database");
  const [trailerInputMode, setTrailerInputMode] = useState<TrailerInputMode>("manual");
  const [selectedMake, setSelectedMake] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedTrim, setSelectedTrim] = useState("");
  const [selectedTrailer, setSelectedTrailer] = useState<TrailerDatabaseEntry | null>(null);
  const [result, setResult] = useState<TowingResult | null>(null);
  const [hasCalculated, setHasCalculated] = useState(false);

  // Manual vehicle specs
  const [vehicle, setVehicle] = useState<VehicleSpec>({
    year: 2024,
    make: "",
    model: "",
    trim: "",
    curbWeight: 0,
    gvwr: 0,
    gcwr: 0,
    towRating: 0,
    payloadCapacity: 0,
    hitchRating: 0,
  });

  // Trailer specs
  const [trailerType, setTrailerType] = useState<TrailerType>("travel-trailer");
  const [dryWeight, setDryWeight] = useState(0);
  const [cargoWeight, setCargoWeight] = useState(0);
  const [freshWaterGallons, setFreshWaterGallons] = useState(0);
  const [propaneTanks, setPropaneTanks] = useState(2);
  const [propaneTankSize, setPropaneTankSize] = useState(20);
  const [trailerGvwr, setTrailerGvwr] = useState(0);

  // Vehicle load
  const [passengerWeight, setPassengerWeight] = useState(0);
  const [truckCargoWeight, setTruckCargoWeight] = useState(0);

  const makes = useMemo(() => getVehicleMakes(), []);
  const models = useMemo(
    () => (selectedMake ? getVehicleModels(selectedMake) : []),
    [selectedMake],
  );
  const trims = useMemo(
    () =>
      selectedMake && selectedModel
        ? getVehicleTrims(selectedMake, selectedModel)
        : [],
    [selectedMake, selectedModel],
  );

  const handleMakeChange = (make: string) => {
    setSelectedMake(make);
    setSelectedModel("");
    setSelectedTrim("");
  };

  const handleModelChange = (model: string) => {
    setSelectedModel(model);
    setSelectedTrim("");
  };

  const handleTrimChange = (trimId: string) => {
    setSelectedTrim(trimId);
    const entry = VEHICLE_DATABASE.find((v) => v.id === trimId);
    if (entry) {
      const spec = dbEntryToVehicleSpec(entry);
      setVehicle(spec);
    }
  };

  const handleTrailerSelect = (trailer: TrailerDatabaseEntry) => {
    setSelectedTrailer(trailer);
    setTrailerInputMode("database");
    // Auto-fill trailer specs from database
    setDryWeight(trailer.dryWeight);
    setTrailerGvwr(trailer.gvwr);
    setFreshWaterGallons(trailer.freshWater);
    // Set trailer type
    setTrailerType(trailer.type === "fifth-wheel" ? "fifth-wheel" : "travel-trailer");
    // Auto-set propane tanks based on trailer data
    if (trailer.propaneLbs) {
      setPropaneTanks(Math.round(trailer.propaneLbs / 20)); // Assume 20lb tanks
      setPropaneTankSize(20);
    }
  };

  const handleCalculate = useCallback(() => {
    let input: TowingInput;

    if (inputMode === "database") {
      const entry = VEHICLE_DATABASE.find((v) => v.id === selectedTrim);
      if (!entry) return;
      input = {
        vehicle: dbEntryToVehicleSpec(entry),
        trailer: {
          trailerType,
          dryWeight,
          cargoWeight,
          freshWaterGallons,
          propaneTanks,
          propaneTankSize,
          trailerGvwr,
        },
        vehicleLoad: {
          passengerWeight,
          cargoWeight: truckCargoWeight,
        },
      };
    } else {
      input = {
        vehicle,
        trailer: {
          trailerType,
          dryWeight,
          cargoWeight,
          freshWaterGallons,
          propaneTanks,
          propaneTankSize,
          trailerGvwr,
        },
        vehicleLoad: {
          passengerWeight,
          cargoWeight: truckCargoWeight,
        },
      };
    }

    const res = analyzeTowing(input);
    setResult(res);
    setHasCalculated(true);

    // Scroll to results
    setTimeout(() => {
      document
        .getElementById("results")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  }, [
    inputMode,
    selectedTrim,
    vehicle,
    trailerType,
    dryWeight,
    cargoWeight,
    freshWaterGallons,
    propaneTanks,
    propaneTankSize,
    trailerGvwr,
    passengerWeight,
    truckCargoWeight,
  ]);

  return (
    <div className="space-y-8">
      {/* Input Form */}
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
        {/* Vehicle Input Section */}
        <div>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="flex items-center gap-2 text-lg font-bold text-gray-900">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600 text-sm font-bold text-white">
                1
              </span>
              Your Tow Vehicle
            </h2>
            <div className="flex gap-1 rounded-lg bg-gray-100 p-1">
              <button
                type="button"
                onClick={() => setInputMode("database")}
                className={`rounded-md px-3 py-1 text-xs font-medium transition-colors ${
                  inputMode === "database"
                    ? "bg-white text-brand-600 shadow-sm"
                    : "text-gray-500"
                }`}
              >
                Select Vehicle
              </button>
              <button
                type="button"
                onClick={() => setInputMode("manual")}
                className={`rounded-md px-3 py-1 text-xs font-medium transition-colors ${
                  inputMode === "manual"
                    ? "bg-white text-brand-600 shadow-sm"
                    : "text-gray-500"
                }`}
              >
                Manual Input
              </button>
            </div>
          </div>

          {inputMode === "database" ? (
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Make
                </label>
                <select
                  value={selectedMake}
                  onChange={(e) => handleMakeChange(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-base focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500 md:py-2 md:text-sm"
                >
                  <option value="">Select make</option>
                  {makes.map((make) => (
                    <option key={make} value={make}>
                      {make}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Model
                </label>
                <select
                  value={selectedModel}
                  onChange={(e) => handleModelChange(e.target.value)}
                  disabled={!selectedMake}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-base focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500 disabled:bg-gray-50 md:py-2 md:text-sm"
                >
                  <option value="">Select model</option>
                  {models.map((model) => (
                    <option key={model} value={model}>
                      {model}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Trim / Configuration
                </label>
                <select
                  value={selectedTrim}
                  onChange={(e) => handleTrimChange(e.target.value)}
                  disabled={!selectedModel}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-base focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500 disabled:bg-gray-50 md:py-2 md:text-sm"
                >
                  <option value="">Select trim</option>
                  {trims.map((trim) => (
                    <option key={trim.id} value={trim.id}>
                      {trim.year} {trim.trim} - {trim.engine}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
              <NumberInput
                label="Curb Weight (lbs)"
                value={vehicle.curbWeight}
                onChange={(v) => setVehicle({ ...vehicle, curbWeight: v })}
              />
              <NumberInput
                label="GVWR (lbs)"
                value={vehicle.gvwr}
                onChange={(v) => setVehicle({ ...vehicle, gvwr: v })}
              />
              <NumberInput
                label="GCWR (lbs)"
                value={vehicle.gcwr}
                onChange={(v) => setVehicle({ ...vehicle, gcwr: v })}
              />
              <NumberInput
                label="Tow Rating (lbs)"
                value={vehicle.towRating}
                onChange={(v) => setVehicle({ ...vehicle, towRating: v })}
              />
              <NumberInput
                label="Payload Capacity (lbs)"
                value={vehicle.payloadCapacity}
                onChange={(v) => setVehicle({ ...vehicle, payloadCapacity: v })}
              />
              <NumberInput
                label="Hitch Rating (lbs)"
                value={vehicle.hitchRating}
                onChange={(v) => setVehicle({ ...vehicle, hitchRating: v })}
              />
            </div>
          )}

          {/* Vehicle spec preview */}
          {inputMode === "database" && selectedTrim && (
            <div className="mt-4 grid grid-cols-2 gap-2 rounded-lg bg-gray-50 p-3 text-xs md:grid-cols-4">
              <SpecChip label="Curb Weight" value={vehicle.curbWeight} />
              <SpecChip label="GVWR" value={vehicle.gvwr} />
              <SpecChip label="GCWR" value={vehicle.gcwr} />
              <SpecChip label="Tow Rating" value={vehicle.towRating} />
              <SpecChip label="Payload" value={vehicle.payloadCapacity} />
              <SpecChip label="Hitch Rating" value={vehicle.hitchRating} />
            </div>
          )}
        </div>

        {/* Divider */}
        <hr className="my-6 border-gray-200" />

        {/* Trailer Input Section */}
        <div>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="flex items-center gap-2 text-lg font-bold text-gray-900">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600 text-sm font-bold text-white">
                2
              </span>
              Your Trailer
            </h2>
            <div className="flex gap-1 rounded-lg bg-gray-100 p-1">
              <button
                type="button"
                onClick={() => setTrailerInputMode("database")}
                className={`rounded-md px-3 py-1 text-xs font-medium transition-colors ${
                  trailerInputMode === "database"
                    ? "bg-white text-brand-600 shadow-sm"
                    : "text-gray-500"
                }`}
              >
                Select Trailer
              </button>
              <button
                type="button"
                onClick={() => {
                  setTrailerInputMode("manual");
                  setSelectedTrailer(null);
                }}
                className={`rounded-md px-3 py-1 text-xs font-medium transition-colors ${
                  trailerInputMode === "manual"
                    ? "bg-white text-brand-600 shadow-sm"
                    : "text-gray-500"
                }`}
              >
                Manual Input
              </button>
            </div>
          </div>

          {trailerInputMode === "database" ? (
            <div className="space-y-4">
              <p className="text-sm text-gray-600">
                Select your trailer from our database of {allTrailers.length}+ RVs with verified specifications.
              </p>
              <TrailerSelector
                onTrailerSelect={handleTrailerSelect}
                onCustomSpecs={(specs) => {
                  setDryWeight(specs.dryWeight);
                  setTrailerGvwr(specs.gvwr);
                  setTrailerType(specs.type);
                  setTrailerInputMode("manual");
                }}
                selectedTrailerId={selectedTrailer?.id}
              />
              
              {/* Selected trailer info */}
              {selectedTrailer && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-green-900">
                      {selectedTrailer.brand} {selectedTrailer.model} {selectedTrailer.trim}
                    </h4>
                    <span className="text-xs bg-green-200 text-green-800 px-2 py-1 rounded">
                      {selectedTrailer.type}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                    <div>
                      <span className="text-green-700">Dry Weight:</span>
                      <p className="font-medium">{selectedTrailer.dryWeight} lbs</p>
                    </div>
                    <div>
                      <span className="text-green-700">GVWR:</span>
                      <p className="font-medium">{selectedTrailer.gvwr} lbs</p>
                    </div>
                    <div>
                      <span className="text-green-700">
                        {selectedTrailer.type === "fifth-wheel" ? "Pin Weight:" : "Hitch Weight:"}
                      </span>
                      <p className="font-medium">
                        {selectedTrailer.pinWeight || selectedTrailer.hitchWeight} lbs
                      </p>
                    </div>
                    <div>
                      <span className="text-green-700">Length:</span>
                      <p className="font-medium">{selectedTrailer.length} ft</p>
                    </div>
                  </div>
                  <p className="mt-2 text-xs text-green-700">
                    ✓ Specs auto-filled from database. You can adjust cargo and water below.
                  </p>
                </div>
              )}
              
              {/* Still allow adjusting cargo, water, etc. */}
              <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
                <NumberInput
                  label="Cargo in Trailer (lbs)"
                  value={cargoWeight}
                  onChange={setCargoWeight}
                  hint="Gear, food, clothing"
                />
                <NumberInput
                  label="Fresh Water (gallons)"
                  value={freshWaterGallons}
                  onChange={setFreshWaterGallons}
                  hint="8.34 lbs/gallon"
                />
                <NumberInput
                  label="Propane Tanks"
                  value={propaneTanks}
                  onChange={setPropaneTanks}
                />
              </div>
            </div>
          ) : (
            /* Manual trailer input - original UI */
            <div className="space-y-4">
              {/* Trailer type selector */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Trailer Type
                </label>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setTrailerType("travel-trailer")}
                    className={`flex-1 rounded-lg border-2 px-4 py-3 text-sm font-medium transition-colors ${
                      trailerType === "travel-trailer"
                        ? "border-brand-600 bg-brand-50 text-brand-700"
                        : "border-gray-200 text-gray-600 hover:border-gray-300"
                    }`}
                  >
                    Travel Trailer
                    <span className="mt-1 block text-xs font-normal text-gray-500">
                      Bumper pull, 10-15% tongue weight
                    </span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setTrailerType("fifth-wheel")}
                    className={`flex-1 rounded-lg border-2 px-4 py-3 text-sm font-medium transition-colors ${
                      trailerType === "fifth-wheel"
                        ? "border-brand-600 bg-brand-50 text-brand-700"
                        : "border-gray-200 text-gray-600 hover:border-gray-300"
                    }`}
                  >
                    Fifth Wheel
                    <span className="mt-1 block text-xs font-normal text-gray-500">
                      Gooseneck, 20-25% pin weight
                    </span>
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
                <NumberInput
                  label="Dry Weight / UVW (lbs)"
                  value={dryWeight}
                  onChange={setDryWeight}
                  hint="From trailer sticker"
                />
                <NumberInput
                  label="Cargo in Trailer (lbs)"
                  value={cargoWeight}
                  onChange={setCargoWeight}
                  hint="Gear, food, clothing"
                />
                <NumberInput
                  label="Fresh Water (gallons)"
                  value={freshWaterGallons}
                  onChange={setFreshWaterGallons}
                  hint="8.34 lbs/gallon"
                />
                <NumberInput
                  label="Propane Tanks"
                  value={propaneTanks}
                  onChange={setPropaneTanks}
                />
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Propane Tank Size
                  </label>
                  <select
                    value={propaneTankSize}
                    onChange={(e) => setPropaneTankSize(Number(e.target.value))}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-base focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500 md:py-2 md:text-sm"
                  >
                    <option value={20}>20 lb (standard)</option>
                    <option value={30}>30 lb</option>
                    <option value={40}>40 lb</option>
                  </select>
                </div>
                <NumberInput
                  label="Trailer GVWR (lbs)"
                  value={trailerGvwr}
                  onChange={setTrailerGvwr}
                  hint="From trailer sticker"
                />
              </div>
            </div>
          )}
        </div>

        {/* Divider */}
        <hr className="my-6 border-gray-200" />

        {/* Vehicle Load Section */}
        <div>
          <h2 className="mb-4 flex items-center gap-2 text-lg font-bold text-gray-900">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600 text-sm font-bold text-white">
              3
            </span>
            Passengers &amp; Cargo in Truck
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <NumberInput
              label="Passenger Weight (lbs)"
              value={passengerWeight}
              onChange={setPassengerWeight}
              hint="~150-200 lbs per person"
            />
            <NumberInput
              label="Cargo in Truck (lbs)"
              value={truckCargoWeight}
              onChange={setTruckCargoWeight}
              hint="Tools, firewood, coolers"
            />
          </div>
        </div>

        {/* Calculate Button */}
        <button
          type="button"
          onClick={handleCalculate}
          className="mt-8 w-full rounded-xl bg-brand-600 px-6 py-4 text-lg font-bold text-white shadow-lg shadow-brand-600/25 transition-all hover:bg-brand-700 hover:shadow-brand-600/40 active:scale-[0.98] md:py-3 md:text-base"
        >
          Calculate Towing Safety
        </button>
      </div>

      {/* Results */}
      {hasCalculated && result && (
        <div id="results" className="space-y-6 scroll-mt-20">
          <SafetyGauge status={result.overallStatus} verdict={result.verdict} />

          {/* Quick stats */}
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <QuickStat
              label="Loaded Trailer"
              value={result.loadedTrailerWeight}
              color="text-brand-600"
            />
            <QuickStat
              label={
                trailerType === "fifth-wheel" ? "Pin Weight" : "Tongue Weight"
              }
              value={result.tongueWeight}
              sub={`${result.tongueWeightPercent.toFixed(1)}%`}
              color="text-warning-600"
            />
            <QuickStat
              label="Loaded Truck"
              value={result.loadedTruckWeight}
              color="text-gray-700"
            />
            <QuickStat
              label="Combined Weight"
              value={result.combinedWeight}
              color="text-gray-700"
            />
          </div>

          {/* Individual checks */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-gray-900">
              Safety Check Details
            </h3>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              {result.checks.map((check) => (
                <SafetyCheckCard key={check.id} check={check} />
              ))}
            </div>
          </div>

          {/* Weight breakdown */}
          <WeightBreakdown
            items={result.weightBreakdown}
            loadedTruckWeight={result.loadedTruckWeight}
            loadedTrailerWeight={result.loadedTrailerWeight}
            combinedWeight={result.combinedWeight}
          />

          {/* Recommendations */}
          {result.recommendations.length > 0 && (
            <div>
              <h3 className="mb-4 text-lg font-bold text-gray-900">
                Recommendations &amp; Tips
              </h3>
              <div className="space-y-3">
                {result.recommendations.map((rec) => (
                  <div
                    key={rec.id}
                    className={`rounded-xl border p-4 ${
                      rec.priority === "danger"
                        ? "border-red-300 bg-red-50"
                        : rec.priority === "warning"
                          ? "border-amber-300 bg-amber-50"
                          : "border-blue-200 bg-blue-50"
                    }`}
                  >
                    <h4
                      className={`mb-1 text-sm font-bold ${
                        rec.priority === "danger"
                          ? "text-red-700"
                          : rec.priority === "warning"
                            ? "text-amber-700"
                            : "text-blue-700"
                      }`}
                    >
                      {rec.title}
                    </h4>
                    <p className="text-sm leading-relaxed text-gray-600">
                      {rec.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <AmazonAffiliate />

          {/* Disclaimer */}
          <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
            <p className="text-xs leading-relaxed text-gray-500">
              <strong>Disclaimer:</strong> These calculations are estimates
              based on SAE J2807 standards and manufacturer specifications.
              Always verify your actual weights at a CAT scale. Your
              vehicle&apos;s door jamb sticker has the official ratings. This
              tool is for informational purposes only and does not replace
              professional advice. Never exceed manufacturer-specified weight
              ratings.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

// ============================================================
// Helper Components
// ============================================================

function NumberInput({
  label,
  value,
  onChange,
  hint,
}: {
  label: string;
  value: number;
  onChange: (value: number) => void;
  hint?: string;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type="number"
        inputMode="numeric"
        value={value || ""}
        onChange={(e) => onChange(Number(e.target.value) || 0)}
        placeholder="0"
        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-base focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500 md:py-2 md:text-sm"
      />
      {hint && <p className="mt-2 text-xs text-gray-500">{hint}</p>}
    </div>
  );
}

function SpecChip({ label, value }: { label: string; value: number }) {
  return (
    <div className="text-center">
      <div className="text-xs text-gray-500">{label}</div>
      <div className="font-semibold text-gray-900">
        {value ? value.toLocaleString("en-US") : "--"}
      </div>
    </div>
  );
}

function QuickStat({
  label,
  value,
  sub,
  color,
}: {
  label: string;
  value: number;
  sub?: string;
  color: string;
}) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 text-center shadow-sm">
      <div className="text-xs text-gray-500">{label}</div>
      <div className={`text-xl font-bold ${color}`}>
        {Math.round(value).toLocaleString("en-US")}
      </div>
      <div className="text-xs text-gray-400">lbs{sub ? ` (${sub})` : ""}</div>
    </div>
  );
}
