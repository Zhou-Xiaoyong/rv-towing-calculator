/** Format a weight value in lbs with thousands separator */
export function formatLbs(value: number): string {
  return `${Math.round(value).toLocaleString("en-US")} lbs`;
}

/** Format a percentage value */
export function formatPercent(value: number, decimals = 1): string {
  return `${value.toFixed(decimals)}%`;
}

/** Format a number with thousands separator (no unit) */
export function formatNumber(value: number): string {
  return Math.round(value).toLocaleString("en-US");
}

/** Clamp a number between min and max */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}
