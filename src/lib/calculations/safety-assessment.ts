// ============================================================
// Safety Assessment Logic
// Defines thresholds for Safe/Warning/Danger status
// Based on industry best practices and SAE J2807 guidelines
// ============================================================

import type { SafetyStatus } from "./types";

/**
 * Safety threshold configuration for each check type.
 *
 * Rationale for thresholds:
 * - Towing Capacity: 80% safety margin is widely recommended by RV experts.
 *   Towing at max capacity stresses the vehicle and leaves no buffer for
 *   wind, hills, or emergency maneuvers.
 * - Payload/GVWR/GCWR: 90% threshold. These are hard limits set by the
 *   manufacturer. 90% gives a reasonable buffer while acknowledging that
 *   payload is often the binding constraint and harder to reduce.
 */
export const SAFETY_THRESHOLDS = {
  towingCapacity: {
    safe: 80, // <= 80% of tow rating
    warning: 100, // 80-100% = warning, > 100% = danger
  },
  payload: {
    safe: 90,
    warning: 100,
  },
  gvwr: {
    safe: 90,
    warning: 100,
  },
  gcwr: {
    safe: 90,
    warning: 100,
  },
  trailerGvwr: {
    safe: 90, // <= 90% of trailer's own GVWR
    warning: 100, // 90-100% = warning, > 100% = danger
  },
  tongueWeight: {
    // Travel trailer: optimal 10-15%, acceptable 10-17%
    travelTrailer: {
      minOptimal: 10,
      maxOptimal: 15,
      minAcceptable: 10,
      maxAcceptable: 17,
    },
    // Fifth wheel: optimal 20-25%, acceptable 18-27%
    fifthWheel: {
      minOptimal: 20,
      maxOptimal: 25,
      minAcceptable: 18,
      maxAcceptable: 27,
    },
  },
} as const;

/**
 * Determine safety status based on utilization percentage.
 *
 * @param utilizationPercent - Actual value as percentage of limit
 * @param safeThreshold - Percentage at/below which is "safe"
 * @param warningThreshold - Percentage at/below which is "warning" (and above safe)
 * @returns Safety status: safe, warning, or danger
 */
export function getStatusByUtilization(
  utilizationPercent: number,
  safeThreshold: number,
  warningThreshold: number,
): SafetyStatus {
  if (utilizationPercent <= safeThreshold) {
    return "safe";
  } else if (utilizationPercent <= warningThreshold) {
    return "warning";
  } else {
    return "danger";
  }
}

/**
 * Determine the worst (most severe) status from a list of statuses.
 * danger > warning > safe
 */
export function getWorstStatus(statuses: SafetyStatus[]): SafetyStatus {
  if (statuses.includes("danger")) return "danger";
  if (statuses.includes("warning")) return "warning";
  return "safe";
}

/**
 * Default tongue weight percentage by trailer type.
 * - Travel trailer: 13% (middle of 10-15% optimal range)
 * - Fifth wheel: 22% (middle of 20-25% optimal range)
 */
export const DEFAULT_TONGUE_PERCENT = {
  "travel-trailer": 13,
  "fifth-wheel": 22,
} as const;

/**
 * Water weight per gallon (lbs)
 */
export const WATER_WEIGHT_PER_GALLON = 8.34;

/**
 * Propane content weight per tank size (lbs) — propane ONLY, not including tank shell.
 * Trailer dry weight (UVW) already includes the weight of empty propane tanks,
 * so we add only the propane content to avoid double-counting the tank shell.
 * - 20 lb tank: 20 lbs of propane content
 * - 30 lb tank: 30 lbs of propane content
 * - 40 lb tank: 40 lbs of propane content
 * Note: Total filled tank weight is ~37/55/72 lbs respectively (shell ~17 lbs).
 */
export const PROPANE_WEIGHT_PER_TANK = {
  20: 20, // 20 lbs propane content (tank shell ~17 lbs already in UVW)
  30: 30, // 30 lbs propane content
  40: 40, // 40 lbs propane content
} as const;

/**
 * Get propane weight for a given tank size.
 * Falls back to 37 lbs (standard 20lb tank) if size not found.
 */
export function getPropaneWeight(
  tankCount: number,
  tankSize: number,
): number {
  const weightPerTank =
    PROPANE_WEIGHT_PER_TANK[tankSize as keyof typeof PROPANE_WEIGHT_PER_TANK] ??
    37;
  return tankCount * weightPerTank;
}

/**
 * Weight Distribution Hitch (WDH) recommendation threshold.
 * Industry standard: WDH is recommended for travel trailers over 5,000 lbs.
 * Source: etrailer.com, Equalizer Hitch, Reese towing guidelines
 */
export const WDH_RECOMMENDATION_THRESHOLD = 5000;
