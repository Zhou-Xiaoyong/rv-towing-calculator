// ============================================================
// RV Towing Calculator - Type Definitions
// Based on SAE J2807 standard for trailer weight ratings
// ============================================================

/** Trailer hitch type - determines tongue/pin weight percentage */
export type TrailerType = "travel-trailer" | "fifth-wheel";

/** Safety status levels for visual signal lights */
export type SafetyStatus = "safe" | "warning" | "danger";

/** Unit system */
export type UnitSystem = "imperial"; // lbs, ft - US market only for MVP

/** Weight unit label */
export type WeightUnit = "lbs";

// ============================================================
// Input Types
// ============================================================

/** Vehicle specification input (from door jamb sticker or manufacturer specs) */
export interface VehicleSpec {
  /** Vehicle year (e.g., 2024) */
  year: number;
  /** Vehicle make (e.g., "Ford") */
  make: string;
  /** Vehicle model (e.g., "F-150") */
  model: string;
  /** Trim/configuration (e.g., "XLT 3.5L EcoBoost SuperCrew 4x4") */
  trim: string;
  /** Engine description (e.g., "6.7L Power Stroke V8 Diesel") — used for diesel detection */
  engine?: string;
  /** Curb weight - weight of vehicle as it sits empty (lbs) */
  curbWeight: number;
  /** GVWR - Gross Vehicle Weight Rating (lbs), from door jamb sticker */
  gvwr: number;
  /** GCWR - Gross Combined Weight Rating (lbs), from manufacturer specs */
  gcwr: number;
  /** Manufacturer's maximum tow rating (lbs) */
  towRating: number;
  /** Payload capacity (lbs) = GVWR - curb weight, or from door jamb sticker */
  payloadCapacity: number;
  /** Hitch receiver max tongue weight rating (lbs) */
  hitchRating: number;
}

/** Trailer specification input */
export interface TrailerSpec {
  trailerType: TrailerType;
  /** Trailer dry weight / UVW (lbs) - as shipped from factory */
  dryWeight: number;
  /** Cargo weight loaded into trailer (lbs) - gear, food, clothing, etc. */
  cargoWeight: number;
  /** Fresh water capacity (gallons) */
  freshWaterGallons: number;
  /** Propane tanks count */
  propaneTanks: number;
  /** Propane tank size (lbs per tank, typically 20 or 30) */
  propaneTankSize: number;
  /** Trailer GVWR (lbs) - max loaded weight from trailer sticker */
  trailerGvwr: number;
}

/** Load input - people and cargo in the tow vehicle */
export interface VehicleLoad {
  /** Total passenger weight (lbs) - estimate ~150-200 lbs per person */
  passengerWeight: number;
  /** Cargo weight in truck bed/cabin (lbs) - tools, firewood, coolers, etc. */
  cargoWeight: number;
}

/** Complete calculation input */
export interface TowingInput {
  vehicle: VehicleSpec;
  trailer: TrailerSpec;
  vehicleLoad: VehicleLoad;
  /** Custom tongue weight percentage override (optional). If not provided, uses type defaults */
  tongueWeightPercent?: number;
}

// ============================================================
// Calculation Result Types
// ============================================================

/** Individual safety check result */
export interface SafetyCheck {
  /** Unique identifier for this check */
  id: string;
  /** Human-readable name (e.g., "Towing Capacity") */
  name: string;
  /** Current actual value (lbs) */
  actualValue: number;
  /** Maximum allowed value (lbs) */
  limitValue: number;
  /** Utilization percentage (actual / limit * 100) */
  utilizationPercent: number;
  /** Safety status */
  status: SafetyStatus;
  /** Safety margin in lbs (limit - actual) */
  marginLbs: number;
  /** Safety margin as percentage of limit */
  marginPercent: number;
  /** Explanation of the check result */
  explanation: string;
  /** Recommended action if not safe */
  recommendation?: string;
}

/** Weight breakdown item for visualization */
export interface WeightItem {
  label: string;
  value: number;
  color: string;
  category: "truck" | "trailer" | "load";
}

/** Complete towing calculation result */
export interface TowingResult {
  /** All individual safety checks */
  checks: SafetyCheck[];
  /** Overall safety status (worst of all checks) */
  overallStatus: SafetyStatus;
  /** Overall verdict message */
  verdict: string;
  /** Additional actionable recommendations (WDH, brake controller, etc.) */
  recommendations: Recommendation[];
  /** Weight breakdown for visualization */
  weightBreakdown: WeightItem[];
  /** Calculated loaded trailer weight (lbs) */
  loadedTrailerWeight: number;
  /** Calculated tongue/pin weight (lbs) */
  tongueWeight: number;
  /** Loaded truck weight (lbs) = curb + passengers + cargo + tongue */
  loadedTruckWeight: number;
  /** Loaded trailer weight on axles (lbs) = loaded trailer - tongue */
  trailerAxleWeight: number;
  /** Total combined weight (lbs) = loaded truck + trailer axle weight */
  combinedWeight: number;
  /** Tongue weight percentage of loaded trailer weight */
  tongueWeightPercent: number;
  /** The trailer type used */
  trailerType: TrailerType;
}

/** Actionable recommendation beyond basic safety checks */
export interface Recommendation {
  /** Unique identifier */
  id: string;
  /** Priority level */
  priority: "info" | "warning" | "danger";
  /** Short title */
  title: string;
  /** Detailed description */
  description: string;
}

// ============================================================
// Vehicle Database Types
// ============================================================

/** Vehicle database entry for trim-level spec lookup */
export interface VehicleDatabaseEntry {
  id: string;
  year: number;
  make: string;
  model: string;
  trim: string;
  engine: string;
  cabType: string;
  bedLength: string;
  driveType: string;
  axleRatio: string;
  curbWeight: number;
  gvwr: number;
  gcwr: number;
  towRating: number;
  payloadCapacity: number;
  hitchRating: number;
  dataSource: string;
  lastUpdated: string;
}
