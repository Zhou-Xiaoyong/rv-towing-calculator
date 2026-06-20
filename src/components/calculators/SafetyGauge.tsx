"use client";

import type { SafetyStatus } from "@/lib/calculations/types";

interface SafetyGaugeProps {
  status: SafetyStatus;
  verdict: string;
}

const STATUS_CONFIG = {
  safe: {
    bgColor: "bg-safe-500",
    bgColorLight: "bg-safe-50",
    borderColor: "border-safe-500",
    textColor: "text-safe-700",
    textColorLight: "text-safe-600",
    title: "SAFE TO TOW",
    icon: "M5 13l4 4L19 7",
    ringColor: "stroke-safe-500",
  },
  warning: {
    bgColor: "bg-warning-500",
    bgColorLight: "bg-warning-50",
    borderColor: "border-warning-500",
    textColor: "text-warning-700",
    textColorLight: "text-warning-600",
    title: "CAUTION",
    icon: "M12 9v2m0 4h.01M5 19h14a2 2 0 001.84-2.75L13.74 4a2 2 0 00-3.48 0L3.16 16.25A2 2 0 005 19z",
    ringColor: "stroke-warning-500",
  },
  danger: {
    bgColor: "bg-danger-500",
    bgColorLight: "bg-danger-50",
    borderColor: "border-danger-500",
    textColor: "text-danger-700",
    textColorLight: "text-danger-600",
    title: "STOP - DO NOT TOW",
    icon: "M6 18L18 6M6 6l12 12",
    ringColor: "stroke-danger-500",
  },
};

export default function SafetyGauge({ status, verdict }: SafetyGaugeProps) {
  const config = STATUS_CONFIG[status];

  return (
    <div
      className={`rounded-2xl border-2 ${config.borderColor} ${config.bgColorLight} p-6 md:p-8`}
    >
      <div className="flex flex-col items-center gap-4 text-center">
        {/* Circular status indicator */}
        <div className="relative flex h-32 w-32 items-center justify-center">
          <svg className="absolute h-full w-full -rotate-90" viewBox="0 0 120 120">
            {/* Background ring */}
            <circle
              cx="60"
              cy="60"
              r="52"
              fill="none"
              stroke="currentColor"
              strokeWidth="8"
              className="text-gray-200"
            />
            {/* Status ring */}
            <circle
              cx="60"
              cy="60"
              r="52"
              fill="none"
              strokeWidth="8"
              strokeLinecap="round"
              className={config.ringColor}
              strokeDasharray="327"
              strokeDashoffset={
                status === "safe" ? "0" : status === "warning" ? "82" : "164"
              }
            />
          </svg>
          {/* Center icon */}
          <div
            className={`flex h-20 w-20 items-center justify-center rounded-full ${config.bgColor}`}
          >
            <svg
              className="h-10 w-10 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d={config.icon} />
            </svg>
          </div>
        </div>

        {/* Title */}
        <h2 className={`text-2xl font-bold ${config.textColor} md:text-3xl`}>
          {config.title}
        </h2>

        {/* Verdict message */}
        <p className="max-w-2xl text-sm leading-relaxed text-gray-700 md:text-base">
          {verdict}
        </p>
      </div>
    </div>
  );
}
