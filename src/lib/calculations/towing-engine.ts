// ============================================================
// RV Towing Calculation Engine
// Implements SAE J2807-compliant five-dimensional safety checks
// ============================================================

import type {
  SafetyCheck,
  SafetyStatus,
  TowingInput,
  TowingResult,
  WeightItem,
  TrailerType,
  Recommendation,
} from "./types";
import {
  SAFETY_THRESHOLDS,
  DEFAULT_TONGUE_PERCENT,
  WATER_WEIGHT_PER_GALLON,
  WDH_RECOMMENDATION_THRESHOLD,
  getPropaneWeight,
  getStatusByUtilization,
  getWorstStatus,
} from "./safety-assessment";

/**
 * Calculate loaded trailer weight.
 * Loaded = dry weight + cargo + water + propane
 */
export function calculateLoadedTrailerWeight(
  input: TowingInput,
): number {
  const { trailer } = input;
  const waterWeight = trailer.freshWaterGallons * WATER_WEIGHT_PER_GALLON;
  const propaneWeight = getPropaneWeight(
    trailer.propaneTanks,
    trailer.propaneTankSize,
  );

  return (
    trailer.dryWeight +
    trailer.cargoWeight +
    waterWeight +
    propaneWeight
  );
}

/**
 * Calculate tongue/pin weight based on trailer type and percentage.
 * Travel trailer: tongue weight = 10-15% of loaded trailer weight
 * Fifth wheel: pin weight = 20-25% of loaded trailer weight
 */
export function calculateTongueWeight(
  loadedTrailerWeight: number,
  trailerType: TrailerType,
  customPercent?: number,
): { weight: number; percent: number } {
  const percent = customPercent ?? DEFAULT_TONGUE_PERCENT[trailerType];
  const weight = (loadedTrailerWeight * percent) / 100;
  return { weight, percent };
}

/**
 * Calculate loaded truck weight.
 * Loaded truck = curb weight + passengers + cargo in truck + tongue/pin weight
 */
export function calculateLoadedTruckWeight(
  input: TowingInput,
  tongueWeight: number,
): number {
  return (
    input.vehicle.curbWeight +
    input.vehicleLoad.passengerWeight +
    input.vehicleLoad.cargoWeight +
    tongueWeight
  );
}

/**
 * Run the complete towing safety analysis.
 * Performs all five safety checks and returns comprehensive results.
 */
export function analyzeTowing(input: TowingInput): TowingResult {
  // -------------------------------------------------------
  // Step 1: Calculate base weights
  // -------------------------------------------------------
  const loadedTrailerWeight = calculateLoadedTrailerWeight(input);
  const { weight: tongueWeight, percent: tongueWeightPercent } =
    calculateTongueWeight(
      loadedTrailerWeight,
      input.trailer.trailerType,
      input.tongueWeightPercent,
    );
  const loadedTruckWeight = calculateLoadedTruckWeight(input, tongueWeight);
  const trailerAxleWeight = loadedTrailerWeight - tongueWeight;
  const combinedWeight = loadedTruckWeight + trailerAxleWeight;

  // -------------------------------------------------------
  // Step 2: Run five safety checks
  // -------------------------------------------------------
  const checks: SafetyCheck[] = [];

  // Check 1: Towing Capacity
  checks.push(
    checkTowingCapacity(
      loadedTrailerWeight,
      input.vehicle.towRating,
      input.trailer.trailerType,
    ),
  );

  // Check 2: Payload Capacity
  checks.push(
    checkPayload(
      tongueWeight,
      input.vehicleLoad.passengerWeight,
      input.vehicleLoad.cargoWeight,
      input.vehicle.payloadCapacity,
    ),
  );

  // Check 3: GVWR (Gross Vehicle Weight Rating)
  checks.push(
    checkGvwr(loadedTruckWeight, input.vehicle.gvwr),
  );

  // Check 4: GCWR (Gross Combined Weight Rating)
  checks.push(
    checkGcwr(combinedWeight, input.vehicle.gcwr),
  );

  // Check 5: Tongue Weight Percentage
  checks.push(
    checkTongueWeight(
      tongueWeight,
      loadedTrailerWeight,
      tongueWeightPercent,
      input.trailer.trailerType,
      input.vehicle.hitchRating,
    ),
  );

  // Check 6: Trailer GVWR (if provided)
  if (input.trailer.trailerGvwr > 0) {
    checks.push(
      checkTrailerGvwr(loadedTrailerWeight, input.trailer.trailerGvwr),
    );
  }

  // -------------------------------------------------------
  // Step 3: Determine overall status, verdict, and recommendations
  // -------------------------------------------------------
  const overallStatus = getWorstStatus(checks.map((c) => c.status));

  const verdict = generateVerdict(
    overallStatus,
    checks,
    input.trailer.trailerType,
  );

  const recommendations = generateRecommendations(
    overallStatus,
    checks,
    input,
    loadedTrailerWeight,
    tongueWeight,
  );

  // -------------------------------------------------------
  // Step 4: Build weight breakdown for visualization
  // -------------------------------------------------------
  const weightBreakdown = buildWeightBreakdown(
    input,
    tongueWeight,
    loadedTrailerWeight,
  );

  return {
    checks,
    overallStatus,
    verdict,
    recommendations,
    weightBreakdown,
    loadedTrailerWeight,
    tongueWeight,
    loadedTruckWeight,
    trailerAxleWeight,
    combinedWeight,
    tongueWeightPercent,
    trailerType: input.trailer.trailerType,
  };
}

// ============================================================
// Individual Safety Checks
// ============================================================

/**
 * Check 6: Trailer GVWR
 * Is the loaded trailer weight within the trailer's own GVWR?
 * This prevents overloading the trailer's axles, frame, and tires.
 */
function checkTrailerGvwr(
  loadedTrailerWeight: number,
  trailerGvwr: number,
): SafetyCheck {
  const utilizationPercent = (loadedTrailerWeight / trailerGvwr) * 100;
  const status = getStatusByUtilization(
    utilizationPercent,
    SAFETY_THRESHOLDS.trailerGvwr.safe,
    SAFETY_THRESHOLDS.trailerGvwr.warning,
  );
  const marginLbs = trailerGvwr - loadedTrailerWeight;

  return {
    id: "trailer-gvwr",
    name: "Trailer GVWR",
    actualValue: loadedTrailerWeight,
    limitValue: trailerGvwr,
    utilizationPercent,
    status,
    marginLbs,
    marginPercent: (marginLbs / trailerGvwr) * 100,
    explanation: `Your loaded trailer weighs ${formatLbs(loadedTrailerWeight)}. The trailer's GVWR (max loaded weight from the trailer's sticker) is ${formatLbs(trailerGvwr)}.`,
    recommendation:
      status === "danger"
        ? `Your trailer exceeds its GVWR by ${formatLbs(Math.abs(marginLbs))}. This overloads the trailer's axles, frame, and tires — risking tire blowout and structural failure. Remove ${formatLbs(Math.abs(marginLbs) + 100)} of cargo immediately.`
        : status === "warning"
          ? `Close to trailer GVWR. ${formatLbs(marginLbs)} remaining. Consider reducing cargo to stay within the safe zone.`
          : `Trailer is within its GVWR with ${formatLbs(marginLbs)} to spare.`,
  };
}

/**
 * Check 1: Towing Capacity
 * Is the loaded trailer weight within the vehicle's tow rating?
 * Industry best practice: stay at or below 80% of tow rating.
 */
function checkTowingCapacity(
  loadedTrailerWeight: number,
  towRating: number,
  trailerType: TrailerType,
): SafetyCheck {
  const utilizationPercent = (loadedTrailerWeight / towRating) * 100;
  const status = getStatusByUtilization(
    utilizationPercent,
    SAFETY_THRESHOLDS.towingCapacity.safe,
    SAFETY_THRESHOLDS.towingCapacity.warning,
  );
  const marginLbs = towRating - loadedTrailerWeight;

  const trailerLabel =
    trailerType === "fifth-wheel" ? "fifth wheel" : "travel trailer";

  return {
    id: "towing-capacity",
    name: "Towing Capacity",
    actualValue: loadedTrailerWeight,
    limitValue: towRating,
    utilizationPercent,
    status,
    marginLbs,
    marginPercent: (marginLbs / towRating) * 100,
    explanation: `Your loaded ${trailerLabel} weighs ${formatLbs(loadedTrailerWeight)}. Your vehicle's max tow rating is ${formatLbs(towRating)}.`,
    recommendation:
      status === "danger"
        ? `Your trailer exceeds your tow rating by ${formatLbs(Math.abs(marginLbs))}. You need a vehicle with at least ${formatLbs(loadedTrailerWeight + 500)} tow rating for a safe margin.`
        : status === "warning"
          ? `You're within your tow rating but above the recommended 80% safety margin. Consider reducing cargo by ${formatLbs(loadedTrailerWeight - towRating * 0.8)} to reach the safe zone.`
          : `You're within the recommended 80% safety margin. Good to go.`,
  };
}

/**
 * Check 2: Payload Capacity
 * Is the payload (passengers + cargo + tongue weight) within the vehicle's payload rating?
 * This is the #1 blind spot for RV owners - most people only check towing capacity.
 */
function checkPayload(
  tongueWeight: number,
  passengerWeight: number,
  cargoWeight: number,
  payloadCapacity: number,
): SafetyCheck {
  const usedPayload = tongueWeight + passengerWeight + cargoWeight;
  const utilizationPercent = (usedPayload / payloadCapacity) * 100;
  const status = getStatusByUtilization(
    utilizationPercent,
    SAFETY_THRESHOLDS.payload.safe,
    SAFETY_THRESHOLDS.payload.warning,
  );
  const marginLbs = payloadCapacity - usedPayload;

  return {
    id: "payload",
    name: "Payload Capacity",
    actualValue: usedPayload,
    limitValue: payloadCapacity,
    utilizationPercent,
    status,
    marginLbs,
    marginPercent: payloadCapacity > 0 ? (marginLbs / payloadCapacity) * 100 : 0,
    explanation: `Payload used: tongue/pin weight ${formatLbs(tongueWeight)} + passengers ${formatLbs(passengerWeight)} + cargo ${formatLbs(cargoWeight)} = ${formatLbs(usedPayload)}. Your payload capacity is ${formatLbs(payloadCapacity)}.`,
    recommendation:
      status === "danger"
        ? `You're over payload by ${formatLbs(Math.abs(marginLbs))}. This is the most common and dangerous towing mistake. Options: reduce cargo/passengers, use a weight distribution hitch, or get a truck with more payload (${formatLbs(usedPayload + 200)}+ needed).`
        : status === "warning"
          ? `Payload is tight. You have ${formatLbs(marginLbs)} remaining. Consider reducing cargo to create a safer buffer.`
          : `Payload is within safe range with ${formatLbs(marginLbs)} to spare.`,
  };
}

/**
 * Check 3: GVWR (Gross Vehicle Weight Rating)
 * Is the total weight on the truck (including tongue weight) within the GVWR?
 */
function checkGvwr(loadedTruckWeight: number, gvwr: number): SafetyCheck {
  const utilizationPercent = (loadedTruckWeight / gvwr) * 100;
  const status = getStatusByUtilization(
    utilizationPercent,
    SAFETY_THRESHOLDS.gvwr.safe,
    SAFETY_THRESHOLDS.gvwr.warning,
  );
  const marginLbs = gvwr - loadedTruckWeight;

  return {
    id: "gvwr",
    name: "GVWR (Vehicle Weight)",
    actualValue: loadedTruckWeight,
    limitValue: gvwr,
    utilizationPercent,
    status,
    marginLbs,
    marginPercent: (marginLbs / gvwr) * 100,
    explanation: `Your loaded truck weight (curb weight + passengers + cargo + tongue weight) is ${formatLbs(loadedTruckWeight)}. Your GVWR is ${formatLbs(gvwr)}.`,
    recommendation:
      status === "danger"
        ? `Your truck exceeds its GVWR by ${formatLbs(Math.abs(marginLbs))}. This can cause tire failure, brake issues, and suspension damage. Reduce weight immediately.`
        : status === "warning"
          ? `Close to GVWR limit. ${formatLbs(marginLbs)} remaining before you hit the vehicle's max weight rating.`
          : `Within GVWR with ${formatLbs(marginLbs)} margin remaining.`,
  };
}

/**
 * Check 4: GCWR (Gross Combined Weight Rating)
 * Is the combined weight of truck + trailer within the GCWR?
 */
function checkGcwr(combinedWeight: number, gcwr: number): SafetyCheck {
  const utilizationPercent = (combinedWeight / gcwr) * 100;
  const status = getStatusByUtilization(
    utilizationPercent,
    SAFETY_THRESHOLDS.gcwr.safe,
    SAFETY_THRESHOLDS.gcwr.warning,
  );
  const marginLbs = gcwr - combinedWeight;

  return {
    id: "gcwr",
    name: "GCWR (Combined Weight)",
    actualValue: combinedWeight,
    limitValue: gcwr,
    utilizationPercent,
    status,
    marginLbs,
    marginPercent: (marginLbs / gcwr) * 100,
    explanation: `Your combined weight (loaded truck + loaded trailer) is ${formatLbs(combinedWeight)}. Your GCWR is ${formatLbs(gcwr)}.`,
    recommendation:
      status === "danger"
        ? `Combined weight exceeds GCWR by ${formatLbs(Math.abs(marginLbs))}. This strains your engine, transmission, and brakes. Reduce trailer cargo or upgrade your tow vehicle.`
        : status === "warning"
          ? `Approaching GCWR limit. ${formatLbs(marginLbs)} remaining. Monitor engine temp and braking performance on hills.`
          : `Combined weight is within limits with ${formatLbs(marginLbs)} to spare.`,
  };
}

/**
 * Check 5: Tongue Weight Percentage
 * Is the tongue/pin weight within the optimal range for the trailer type?
 * Too low = trailer sway risk; too high = excessive load on truck.
 */
function checkTongueWeight(
  tongueWeight: number,
  loadedTrailerWeight: number,
  tonguePercent: number,
  trailerType: TrailerType,
  hitchRating: number,
): SafetyCheck {
  const thresholds =
    trailerType === "fifth-wheel"
      ? SAFETY_THRESHOLDS.tongueWeight.fifthWheel
      : SAFETY_THRESHOLDS.tongueWeight.travelTrailer;

  const typeLabel =
    trailerType === "fifth-wheel" ? "Pin weight" : "Tongue weight";
  const rangeLabel =
    trailerType === "fifth-wheel" ? "20-25%" : "10-15%";

  // Check hitch receiver rating first
  const exceedsHitch = tongueWeight > hitchRating;

  // Determine status based on percentage range
  let status: SafetyStatus;
  if (exceedsHitch) {
    status = "danger";
  } else if (
    tonguePercent >= thresholds.minOptimal &&
    tonguePercent <= thresholds.maxOptimal
  ) {
    status = "safe";
  } else if (
    tonguePercent >= thresholds.minAcceptable &&
    tonguePercent <= thresholds.maxAcceptable
  ) {
    status = "warning";
  } else {
    status = "danger";
  }

  let explanation = `${typeLabel} is ${formatLbs(tongueWeight)} (${tonguePercent.toFixed(1)}% of loaded trailer weight). Optimal range for ${trailerType === "fifth-wheel" ? "fifth wheels" : "travel trailers"} is ${rangeLabel}.`;

  let recommendation: string | undefined;
  if (exceedsHitch) {
    explanation += ` Your hitch receiver rating is ${formatLbs(hitchRating)} - you're exceeding it!`;
    recommendation = `CRITICAL: Tongue weight exceeds your hitch rating by ${formatLbs(tongueWeight - hitchRating)}. You need a higher-rated hitch or a lighter trailer setup.`;
  } else if (tonguePercent < thresholds.minAcceptable) {
    recommendation = `Tongue weight is too low (${tonguePercent.toFixed(1)}%). This increases trailer sway risk. Redistribute cargo forward in the trailer to increase tongue weight to at least ${thresholds.minAcceptable}%.`;
  } else if (tonguePercent > thresholds.maxAcceptable) {
    recommendation = `Tongue weight is too high (${tonguePercent.toFixed(1)}%). This overloads your truck's rear axle. Redistribute cargo toward the back of the trailer, but keep tongue weight above ${thresholds.minAcceptable}%.`;
  }

  // Use hitch rating as the "limit" for the gauge if hitch is the binding constraint,
  // otherwise use loaded trailer weight * maxAcceptable%
  const limitValue = Math.min(
    hitchRating,
    (loadedTrailerWeight * thresholds.maxAcceptable) / 100,
  );

  return {
    id: "tongue-weight",
    name: `${typeLabel} Ratio`,
    actualValue: tongueWeight,
    limitValue,
    utilizationPercent: (tongueWeight / limitValue) * 100,
    status,
    marginLbs: limitValue - tongueWeight,
    marginPercent: ((limitValue - tongueWeight) / limitValue) * 100,
    explanation,
    recommendation,
  };
}

// ============================================================
// Helper Functions
// ============================================================

function generateVerdict(
  status: SafetyStatus,
  checks: SafetyCheck[],
  trailerType: TrailerType,
): string {
  const failedChecks = checks.filter((c) => c.status === "danger");
  const warningChecks = checks.filter((c) => c.status === "warning");
  const trailerLabel = trailerType === "fifth-wheel" ? "fifth wheel" : "travel trailer";

  if (status === "danger") {
    if (failedChecks.length === 1) {
      return `STOP - Do not tow. Your ${failedChecks[0].name.toLowerCase()} check failed. ${failedChecks[0].recommendation ?? ""}`;
    }
    return `STOP - Do not tow. ${failedChecks.length} safety checks failed: ${failedChecks.map((c) => c.name).join(", ")}. Fix these issues before hitting the road.`;
  }

  if (status === "warning") {
    return `CAUTION - You can tow but with warnings. ${warningChecks.length} check(s) need attention: ${warningChecks.map((c) => c.name).join(", ")}. Review the recommendations below.`;
  }

  return `SAFE TO TOW - Your ${trailerLabel} setup passes all safety checks. You're within recommended margins for towing capacity, payload, GVWR, GCWR, and tongue weight. Have a safe trip!`;
}

/**
 * Generate actionable recommendations beyond the basic safety checks.
 * Includes WDH recommendation, altitude derating notice, and general tips.
 */
function generateRecommendations(
  status: SafetyStatus,
  checks: SafetyCheck[],
  input: TowingInput,
  loadedTrailerWeight: number,
  tongueWeight: number,
): Recommendation[] {
  const recs: Recommendation[] = [];
  const isTravelTrailer = input.trailer.trailerType === "travel-trailer";

  // WDH recommendation for travel trailers over threshold
  if (isTravelTrailer && loadedTrailerWeight >= WDH_RECOMMENDATION_THRESHOLD) {
    recs.push({
      id: "wdh",
      priority: status === "danger" ? "warning" : "info",
      title: "Weight Distribution Hitch Recommended",
      description: `Your loaded travel trailer (${formatLbs(loadedTrailerWeight)}) exceeds ${formatLbs(WDH_RECOMMENDATION_THRESHOLD)}. A Weight Distribution Hitch (WDH) with sway control is strongly recommended. WDH distributes tongue weight across all axles of the tow vehicle and trailer, improving stability, steering control, and braking. It does NOT increase your payload capacity — it only redistributes the load.`,
    });
  }

  // Sway control recommendation for travel trailers
  if (isTravelTrailer && loadedTrailerWeight >= 5000) {
    recs.push({
      id: "sway-control",
      priority: "info",
      title: "Trailer Sway Control",
      description: `For travel trailers over ${formatLbs(5000)}, an integrated sway control system is recommended. This helps prevent dangerous trailer oscillation caused by wind, passing trucks, and sudden maneuvers. Many modern WDH systems include built-in sway control.`,
    });
  }

  // Trailer brake controller reminder
  if (loadedTrailerWeight >= 3000) {
    recs.push({
      id: "brake-controller",
      priority: "info",
      title: "Trailer Brake Controller Required",
      description: `Trailers over ${formatLbs(3000)} are required by law in most states to have their own braking system. Ensure your tow vehicle has a properly installed and calibrated electronic brake controller. Test it before every trip.`,
    });
  }

  // Payload warning - the #1 towing mistake
  const payloadCheck = checks.find((c) => c.id === "payload");
  if (payloadCheck && payloadCheck.status !== "safe") {
    recs.push({
      id: "payload-warning",
      priority: payloadCheck.status === "danger" ? "danger" : "warning",
      title: "Payload Is Your Binding Constraint",
      description: `Most RV towing problems are caused by exceeded payload, NOT towing capacity. Your payload includes passengers, cargo in the truck, AND tongue/pin weight. If you're over payload, the only real solutions are: (1) reduce passengers/cargo, (2) tow with a lighter trailer, or (3) upgrade to a truck with higher payload (consider a 3/4-ton or 1-ton). A WDH does NOT increase payload.`,
    });
  }

  // Altitude derating notice for gas engines
  const isDiesel = input.vehicle.make && /diesel|duramax|cummins|power stroke/i.test(
    input.vehicle.trim,
  );
  if (!isDiesel && loadedTrailerWeight > input.vehicle.towRating * 0.7) {
    recs.push({
      id: "altitude-derating",
      priority: "info",
      title: "Altitude Power Derating",
      description: `Gasoline engines lose approximately 3-4% of power per 1,000 ft above sea level. If you'll be towing at high elevations (Rocky Mountains, Sierra Nevada), your effective towing capacity is reduced. Diesel engines (Duramax, Cummins, Power Stroke) are turbocharged and lose much less power at altitude. Plan accordingly and monitor engine temperature on grades.`,
    });
  }

  // CAT scale recommendation
  recs.push({
    id: "cat-scale",
    priority: "info",
    title: "Verify at a CAT Scale",
    description: `These calculations are estimates based on manufacturer specifications and your input. Before a long trip, weigh your fully loaded rig at a CAT scale (found at most truck stops, ~$15). Weigh the truck alone first, then truck + trailer. This gives you real-world axle weights for each axle, which is the only way to know your true payload and GVWR status.`,
  });

  return recs;
}

function buildWeightBreakdown(
  input: TowingInput,
  tongueWeight: number,
  loadedTrailerWeight: number,
): WeightItem[] {
  const { trailer } = input;
  const waterWeight = trailer.freshWaterGallons * WATER_WEIGHT_PER_GALLON;
  const propaneWeight = getPropaneWeight(
    trailer.propaneTanks,
    trailer.propaneTankSize,
  );

  return [
    {
      label: "Truck Curb Weight",
      value: input.vehicle.curbWeight,
      color: "#3b82f6",
      category: "truck",
    },
    {
      label: "Passengers",
      value: input.vehicleLoad.passengerWeight,
      color: "#60a5fa",
      category: "truck",
    },
    {
      label: "Cargo in Truck",
      value: input.vehicleLoad.cargoWeight,
      color: "#93c5fd",
      category: "truck",
    },
    {
      label: "Tongue/Pin Weight",
      value: tongueWeight,
      color: "#f59e0b",
      category: "load",
    },
    {
      label: "Trailer Dry Weight",
      value: trailer.dryWeight,
      color: "#10b981",
      category: "trailer",
    },
    {
      label: "Trailer Cargo",
      value: trailer.cargoWeight,
      color: "#34d399",
      category: "trailer",
    },
    {
      label: "Fresh Water",
      value: waterWeight,
      color: "#6ee7b7",
      category: "trailer",
    },
    {
      label: "Propane",
      value: propaneWeight,
      color: "#a7f3d0",
      category: "trailer",
    },
  ];
}

/** Format weight in lbs with thousands separator */
function formatLbs(value: number): string {
  return `${Math.round(value).toLocaleString("en-US")} lbs`;
}
