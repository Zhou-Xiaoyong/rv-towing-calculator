// Barrel export for calculation engine
export type {
  TrailerType,
  SafetyStatus,
  VehicleSpec,
  TrailerSpec,
  VehicleLoad,
  TowingInput,
  SafetyCheck,
  WeightItem,
  TowingResult,
  VehicleDatabaseEntry,
} from "./types";

export {
  analyzeTowing,
  calculateLoadedTrailerWeight,
  calculateTongueWeight,
  calculateLoadedTruckWeight,
} from "./towing-engine";

export {
  SAFETY_THRESHOLDS,
  DEFAULT_TONGUE_PERCENT,
  WATER_WEIGHT_PER_GALLON,
  getPropaneWeight,
  getStatusByUtilization,
  getWorstStatus,
} from "./safety-assessment";
