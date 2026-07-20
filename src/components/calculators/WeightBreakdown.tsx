"use client";

import type { WeightItem } from "@/lib/calculations/types";

interface WeightBreakdownProps {
  items: WeightItem[];
  loadedTruckWeight: number;
  loadedTrailerWeight: number;
  /** Trailer weight on its own axles = loadedTrailerWeight − tongue/pin weight */
  trailerAxleWeight: number;
  combinedWeight: number;
}

export default function WeightBreakdown({
  items,
  loadedTruckWeight,
  loadedTrailerWeight,
  trailerAxleWeight,
  combinedWeight,
}: WeightBreakdownProps) {
  // Truck side: curb + passengers + truck cargo + tongue/pin weight.
  // Trailer side: the trailer's axle weight (excludes the tongue/pin weight,
  //   which has already been transferred to the truck side).
  // truckTotal + trailerAxleWeight == combinedWeight (no double counting).
  const truckItems = items.filter((i) => i.category === "truck" || i.category === "load");
  const trailerItems = items.filter((i) => i.category === "trailer");
  const truckTotal = truckItems.reduce((sum, i) => sum + i.value, 0);
  // The four trailer items sum to the FULL loaded trailer weight (incl. tongue).
  // The portion physically riding on the trailer axles is the full trailer minus
  // the tongue weight that shifted onto the truck.
  const fullTrailerTotal = trailerItems.reduce((sum, i) => sum + i.value, 0);
  const trailerTotal = trailerAxleWeight > 0 ? trailerAxleWeight : fullTrailerTotal;

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <h3 className="mb-4 font-semibold text-gray-900">Weight Breakdown</h3>

      {/* Combined bar */}
      <div className="mb-2 flex justify-between text-xs text-gray-500">
        <span>Total Combined Weight</span>
        <span className="font-bold text-gray-900">
          {Math.round(combinedWeight).toLocaleString("en-US")} lbs
        </span>
      </div>
      <div className="flex h-8 w-full overflow-hidden rounded-lg">
        {/* Truck portion */}
        <div
          className="flex h-full"
          style={{ width: `${(truckTotal / combinedWeight) * 100}%` }}
        >
          {truckItems.map((item, idx) => (
            <div
              key={`truck-${idx}`}
              className="h-full"
              style={{
                width: `${(item.value / truckTotal) * 100}%`,
                backgroundColor: item.color,
              }}
              title={`${item.label}: ${Math.round(item.value).toLocaleString("en-US")} lbs`}
            />
          ))}
        </div>
        {/* Trailer portion */}
        {/* The bar width is sized by axle weight (trailerTotal), but the inner
            segments are scaled relative to the full trailer weight so their
            proportions stay true to the actual item values (they just sit on a
            bar that's been shortened by the tongue weight). */}
        <div
          className="flex h-full"
          style={{
            width: `${(trailerTotal / combinedWeight) * 100}%`,
            // Scale inner segment widths so they fill this shortened bar
            // proportionally. transform-origin left keeps the left edge aligned
            // with the end of the truck segment.
            transform: `scaleX(${fullTrailerTotal > 0 ? trailerTotal / fullTrailerTotal : 1})`,
            transformOrigin: "left",
          }}
        >
          {trailerItems.map((item, idx) => (
            <div
              key={`trailer-${idx}`}
              className="h-full"
              style={{
                width: `${(item.value / fullTrailerTotal) * 100}%`,
                backgroundColor: item.color,
              }}
              title={`${item.label}: ${Math.round(item.value).toLocaleString("en-US")} lbs`}
            />
          ))}
        </div>
      </div>

      {/* Divider labels */}
      <div className="mt-2 flex justify-between text-xs font-medium text-gray-600">
        <span>Truck: {Math.round(truckTotal).toLocaleString("en-US")} lbs</span>
        <span>
          {/* Trailer label shows the axle weight (the part on the ground
              that isn't already counted on the truck). Loaded trailer total is
              shown in the summary stats below. */}
          Trailer (axle): {Math.round(trailerTotal).toLocaleString("en-US")} lbs
        </span>
      </div>

      {/* Legend */}
      <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2">
        {items.map((item, idx) => (
          <div key={idx} className="flex items-center gap-2 text-xs">
            <span
              className="h-3 w-3 flex-shrink-0 rounded"
              style={{ backgroundColor: item.color }}
            />
            <span className="text-gray-600">{item.label}</span>
            <span className="ml-auto font-medium text-gray-900">
              {Math.round(item.value).toLocaleString("en-US")} lbs
            </span>
          </div>
        ))}
      </div>

      {/* Summary stats */}
      <div className="mt-5 grid grid-cols-3 gap-3 border-t border-gray-100 pt-4">
        <div className="text-center">
          <div className="text-xs text-gray-500">Loaded Truck</div>
          <div className="text-sm font-bold text-gray-900">
            {Math.round(loadedTruckWeight).toLocaleString("en-US")}
          </div>
          <div className="text-xs text-gray-400">lbs</div>
        </div>
        <div className="text-center">
          <div className="text-xs text-gray-500">Loaded Trailer</div>
          <div className="text-sm font-bold text-gray-900">
            {Math.round(loadedTrailerWeight).toLocaleString("en-US")}
          </div>
          <div className="text-xs text-gray-400">lbs</div>
        </div>
        <div className="text-center">
          <div className="text-xs text-gray-500">Combined</div>
          <div className="text-sm font-bold text-gray-900">
            {Math.round(combinedWeight).toLocaleString("en-US")}
          </div>
          <div className="text-xs text-gray-400">lbs</div>
        </div>
      </div>
    </div>
  );
}
