"use client";

import type { SafetyCheck } from "@/lib/calculations/types";

interface SafetyCheckCardProps {
  check: SafetyCheck;
}

const STATUS_STYLES = {
  safe: {
    barColor: "bg-safe-500",
    badgeBg: "bg-safe-100",
    badgeText: "text-safe-700",
    badgeLabel: "Safe",
    icon: "M5 13l4 4L19 7",
    iconBg: "bg-safe-500",
  },
  warning: {
    barColor: "bg-warning-500",
    badgeBg: "bg-warning-100",
    badgeText: "text-warning-700",
    badgeLabel: "Warning",
    icon: "M12 9v2m0 4h.01M5 19h14a2 2 0 001.84-2.75L13.74 4a2 2 0 00-3.48 0L3.16 16.25A2 2 0 005 19z",
    iconBg: "bg-warning-500",
  },
  danger: {
    barColor: "bg-danger-500",
    badgeBg: "bg-danger-100",
    badgeText: "text-danger-700",
    badgeLabel: "Danger",
    icon: "M6 18L18 6M6 6l12 12",
    iconBg: "bg-danger-500",
  },
};

export default function SafetyCheckCard({ check }: SafetyCheckCardProps) {
  const styles = STATUS_STYLES[check.status];
  const barWidth = Math.min(check.utilizationPercent, 100);

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
      {/* Header row */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div
            className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg ${styles.iconBg}`}
          >
            <svg
              className="h-6 w-6 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={styles.icon}
              />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">{check.name}</h3>
            <span
              className={`inline-block rounded-full px-2 py-0.5 text-xs font-medium ${styles.badgeBg} ${styles.badgeText}`}
            >
              {styles.badgeLabel}
            </span>
          </div>
        </div>
        <div className="text-right">
          <div className="text-lg font-bold text-gray-900">
            {check.utilizationPercent.toFixed(0)}%
          </div>
          <div className="text-xs text-gray-500">of limit</div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="mt-4">
        <div className="relative h-3 w-full overflow-hidden rounded-full bg-gray-200">
          <div
            className={`h-full rounded-full transition-all duration-500 ${styles.barColor}`}
            style={{ width: `${barWidth}%` }}
          />
        </div>
        <div className="mt-2 flex justify-between text-xs text-gray-500">
          <span>0%</span>
          <span className="font-medium text-gray-700">
            {Math.round(check.actualValue).toLocaleString("en-US")} /{" "}
            {Math.round(check.limitValue).toLocaleString("en-US")} lbs
          </span>
          <span>100%</span>
        </div>
      </div>

      {/* Explanation */}
      <p className="mt-3 text-sm leading-relaxed text-gray-600">
        {check.explanation}
      </p>

      {/* Recommendation */}
      {check.recommendation && (
        <div
          className={`mt-3 rounded-lg ${styles.badgeBg} p-3 text-sm leading-relaxed ${styles.badgeText}`}
        >
          <span className="font-semibold">Recommendation: </span>
          {check.recommendation}
        </div>
      )}

      {/* Margin info */}
      <div className="mt-3 flex items-center justify-between border-t border-gray-100 pt-3 text-xs text-gray-500">
        <span>
          Margin:{" "}
          <span
            className={
              check.marginLbs >= 0 ? "text-safe-600" : "text-danger-600"
            }
          >
            {check.marginLbs >= 0 ? "+" : ""}
            {Math.round(check.marginLbs).toLocaleString("en-US")} lbs
          </span>
        </span>
        <span>
          ({check.marginPercent >= 0 ? "+" : ""}
          {check.marginPercent.toFixed(1)}%)
        </span>
      </div>
    </div>
  );
}
