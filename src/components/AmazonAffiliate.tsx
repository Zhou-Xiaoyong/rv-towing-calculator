"use client";

import { useState, type ReactNode } from "react";

const AFFILIATE_ID = "calchive-20";

interface AmazonProduct {
  id: string;
  title: string;
  description: string;
  category: string;
  icon: string;
  iconBg: string;
  iconColor: string;
  amazonUrl: string;
}

function buildAmazonSearchUrl(keywords: string): string {
  const encodedKeywords = encodeURIComponent(keywords);
  return `https://www.amazon.com/s?k=${encodedKeywords}&tag=${AFFILIATE_ID}&linkCode=ur2&camp=1789&creative=9325`;
}

const PRODUCTS: AmazonProduct[] = [
  {
    id: "wdh",
    title: "Weight Distribution Hitch with Sway Control",
    description: "Essential for trailers over 5,000 lbs. Improves stability, braking, and ride quality by distributing tongue weight across all axles.",
    category: "weight-distribution",
    icon: "balance",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    amazonUrl: buildAmazonSearchUrl("weight distribution hitch sway control"),
  },
  {
    id: "brake-controller",
    title: "Proportional Trailer Brake Controller",
    description: "Industry-standard proportional brake controller. Automatically adjusts braking force based on deceleration for smooth, safe stops.",
    category: "brake-controller",
    icon: "brake",
    iconBg: "bg-red-100",
    iconColor: "text-red-600",
    amazonUrl: buildAmazonSearchUrl("proportional trailer brake controller"),
  },
  {
    id: "tongue-scale",
    title: "Tongue Weight Scale",
    description: "Accurately measure your trailer's tongue weight. Critical for proper weight distribution and safe towing. Works with bumper pull and 5th wheel.",
    category: "tongue-scale",
    icon: "scale",
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    amazonUrl: buildAmazonSearchUrl("trailer tongue weight scale"),
  },
  {
    id: "sway-control",
    title: "Trailer Sway Control System",
    description: "Friction-style or electronic sway control that prevents trailer sway caused by wind, passing trucks, or uneven roads.",
    category: "sway-control",
    icon: "wind",
    iconBg: "bg-cyan-100",
    iconColor: "text-cyan-600",
    amazonUrl: buildAmazonSearchUrl("trailer sway control"),
  },
  {
    id: "trailer-lights",
    title: "LED Trailer Light Kit",
    description: "Waterproof LED trailer lights that are brighter and last longer than incandescent. Includes brake, turn signal, and running lights.",
    category: "trailer-lights",
    icon: "light",
    iconBg: "bg-yellow-100",
    iconColor: "text-yellow-600",
    amazonUrl: buildAmazonSearchUrl("LED trailer light kit waterproof"),
  },
  {
    id: "tire-pressure",
    title: "Tire Pressure Monitoring System (TPMS)",
    description: "Real-time tire pressure and temperature monitoring for both tow vehicle and trailer. Alerts you to issues before they become dangerous.",
    category: "tpms",
    icon: "tire",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    amazonUrl: buildAmazonSearchUrl("trailer tire pressure monitoring system tpms"),
  },
  {
    id: "deep-cycle-battery",
    title: "Deep Cycle RV Battery",
    description: "House battery for trailer 12V power. Confirm the usable capacity and the charger profile before you buy, not after.",
    category: "battery",
    icon: "battery",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    amazonUrl: buildAmazonSearchUrl("deep cycle rv battery group 27"),
  },
  {
    id: "battery-maintainer",
    title: "Smart Battery Maintainer",
    description: "Float charger for winter storage. Holds a stored battery above 12.4 V without boiling a flooded cell dry.",
    category: "battery",
    icon: "battery",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    amazonUrl: buildAmazonSearchUrl("rv battery maintainer trickle charger"),
  },
  {
    id: "slide-seal-kit",
    title: "RV Slide Out Seal Kit",
    description: "Replacement wiper and bulb seal profiles. Measure the old profile first: track-mounted and screw-fixed types are not interchangeable.",
    category: "slide-seal",
    icon: "seal",
    iconBg: "bg-sky-100",
    iconColor: "text-sky-600",
    amazonUrl: buildAmazonSearchUrl("rv slide out seal replacement kit"),
  },
  {
    id: "seal-lubricant",
    title: "Silicone Seal Lubricant",
    description: "Silicone spray for slide out seals and window gaskets. Restores flexibility without swelling the rubber the way petroleum products do.",
    category: "slide-seal",
    icon: "seal",
    iconBg: "bg-sky-100",
    iconColor: "text-sky-600",
    amazonUrl: buildAmazonSearchUrl("silicone spray lubricant rubber seals rv"),
  },
  {
    id: "moisture-meter",
    title: "Pin-Type Moisture Meter",
    description: "Reads moisture inside plywood through a seam or corner. A pinless meter cannot see past vinyl and gets fooled by the aluminum framing underneath.",
    category: "tools",
    icon: "meter",
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-600",
    amazonUrl: buildAmazonSearchUrl("pin type moisture meter wood"),
  },
  {
    id: "inspection-camera",
    title: "USB Inspection Camera",
    description: "Borescope for looking inside a wall cavity or above the underbelly without cutting a large hole. A 5 mm head fits a 3/8 inch access hole.",
    category: "tools",
    icon: "camera",
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-600",
    amazonUrl: buildAmazonSearchUrl("usb borescope inspection camera 5mm"),
  },
  {
    id: "camper-tie-downs",
    title: "Frame-Mounted Truck Camper Tie-Downs",
    description: "Bolts to the truck frame rather than the bed floor. Bed-mounted brackets pull against sheet metal that was never rated for a 3,000 lb camper.",
    category: "camper",
    icon: "camper",
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-600",
    amazonUrl: buildAmazonSearchUrl("frame mounted truck camper tie downs"),
  },
  {
    id: "camper-turnbuckles",
    title: "Spring-Loaded Camper Turnbuckles",
    description: "Holds the camper down without rigid-loading the tie-downs. Springs absorb the flex between a steel frame and an aluminum camper body.",
    category: "camper",
    icon: "camper",
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-600",
    amazonUrl: buildAmazonSearchUrl("spring loaded truck camper turnbuckles"),
  },
  {
    id: "rv-antifreeze",
    title: "RV Antifreeze, -50°F",
    description: "Propylene glycol, not ethylene glycol. The -50 rating is burst protection, so the jug will look slushy at 0°F and still protect the fittings.",
    category: "water-system",
    icon: "droplet",
    iconBg: "bg-pink-100",
    iconColor: "text-pink-600",
    amazonUrl: buildAmazonSearchUrl("rv antifreeze -50 propylene glycol"),
  },
  {
    id: "water-heater-bypass-kit",
    title: "RV Water Heater Bypass Kit",
    description: "Saves a six-gallon tank of antifreeze every season. Fit it once and the heater stays dry while the rest of the system gets filled.",
    category: "water-system",
    icon: "droplet",
    iconBg: "bg-pink-100",
    iconColor: "text-pink-600",
    amazonUrl: buildAmazonSearchUrl("rv water heater bypass kit"),
  },
  {
    id: "twist-on-valve",
    title: "Twist-On Waste Valve, 3 Inch",
    description: "A second gate that clamps onto the outlet lugs. Holds a seeping blade back without cutting the underbelly or draining the tank.",
    category: "sewer",
    icon: "valve",
    iconBg: "bg-teal-100",
    iconColor: "text-teal-600",
    amazonUrl: buildAmazonSearchUrl("valterra twist on waste valve 3 inch"),
  },
  {
    id: "sewer-hose-kit",
    title: "RV Sewer Hose Kit with Clear Elbow",
    description: "The clear elbow is the useful half. You can see the tank run clean before you close the valve, instead of guessing from the sound.",
    category: "sewer",
    icon: "valve",
    iconBg: "bg-teal-100",
    iconColor: "text-teal-600",
    amazonUrl: buildAmazonSearchUrl("rv sewer hose kit clear elbow 15 foot"),
  },
  {
    id: "gas-leak-detector",
    title: "Combustible Gas Leak Detector",
    description: "Finds propane at a joint you cannot see or reach, behind the fridge or at a furnace flare. It locates the leak; it cannot prove the system holds pressure.",
    category: "propane",
    icon: "flame",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    amazonUrl: buildAmazonSearchUrl("combustible gas leak detector propane"),
  },
  {
    id: "propane-manometer",
    title: "Propane Manometer Test Kit",
    description: "Reads in inches of water column, the only scale the drop test is written in. A 0 to 15 in. w.c. gauge with a stove manifold test spud is the whole kit.",
    category: "propane",
    icon: "flame",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    amazonUrl: buildAmazonSearchUrl("propane manometer test kit water column"),
  },
];

function ProductIcon({ icon, bgColor, textColor }: { icon: string; bgColor: string; textColor: string }) {
  const icons: Record<string, ReactNode> = {
    balance: (
      <svg className={`h-6 w-6 ${textColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
    brake: (
      <svg className={`h-6 w-6 ${textColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <circle cx="12" cy="12" r="10" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" />
      </svg>
    ),
    scale: (
      <svg className={`h-6 w-6 ${textColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
    wind: (
      <svg className={`h-6 w-6 ${textColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    ),
    light: (
      <svg className={`h-6 w-6 ${textColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    tire: (
      <svg className={`h-6 w-6 ${textColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v2M12 20v2M2 12h2M20 12h2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
      </svg>
    ),
    battery: (
      <svg className={`h-6 w-6 ${textColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <rect x="2" y="7" width="17" height="10" rx="2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M22 11v2M6 12h3M7.5 10.5v3M13 12h3.5" />
      </svg>
    ),
    seal: (
      <svg className={`h-6 w-6 ${textColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <rect x="3" y="3" width="18" height="18" rx="4" />
        <rect x="8" y="8" width="8" height="8" rx="2" />
      </svg>
    ),
    meter: (
      <svg className={`h-6 w-6 ${textColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 18a8 8 0 1116 0" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18l4-5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 18h16" />
      </svg>
    ),
    camera: (
      <svg className={`h-6 w-6 ${textColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8a2 2 0 012-2h2.5l1.2-1.6h6.6L16.5 6H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
        <circle cx="12" cy="12.5" r="3" />
      </svg>
    ),
    camper: (
      <svg className={`h-6 w-6 ${textColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16h18M4 16V9l2-3h9l2 3h3v7" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 16v-4h4v4" />
        <circle cx="7" cy="18.5" r="1.5" />
        <circle cx="17" cy="18.5" r="1.5" />
      </svg>
    ),
    droplet: (
      <svg className={`h-6 w-6 ${textColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3s5 5.4 5 9a5 5 0 11-10 0c0-3.6 5-9 5-9z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 14a2.2 2.2 0 002 2.2" />
      </svg>
    ),
    valve: (
      <svg className={`h-6 w-6 ${textColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h5m8 0h5M8 8v8m8-8v8" />
        <rect x="8" y="6" width="8" height="12" rx="1.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V3m-2 0h4" />
      </svg>
    ),
    flame: (
      <svg className={`h-6 w-6 ${textColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c3 4 6 6 6 10a6 6 0 11-12 0c0-4 3-6 6-10z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12c1.5 2 2 2.5 2 4a2 2 0 11-4 0c0-1.5.5-2 2-4z" />
      </svg>
    ),
  };

  return (
    <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${bgColor}`}>
      {icons[icon] || icons.balance}
    </div>
  );
}

interface AmazonAffiliateProps {
  categories?: string[];
  showAll?: boolean;
}

export default function AmazonAffiliate({ categories, showAll = false }: AmazonAffiliateProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const filteredProducts = categories && categories.length > 0
    ? PRODUCTS.filter(p => categories.includes(p.category))
    : PRODUCTS;
  
  const displayProducts = showAll || isExpanded
    ? filteredProducts
    : filteredProducts.slice(0, 3);

  return (
    <div className="rounded-xl border border-amber-200 bg-amber-50 p-6">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-600">
          <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
        </div>
        <div>
          <h3 className="font-bold text-amber-900">Recommended Towing Safety Gear</h3>
          <p className="text-xs text-amber-700">
            Essential safety equipment for confident towing. We may earn a commission when you shop through these links.
          </p>
        </div>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {displayProducts.map((product) => (
          <a
            key={product.id}
            href={product.amazonUrl}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="group block rounded-lg border border-amber-200 bg-white p-4 transition-all hover:border-amber-400 hover:shadow-md"
          >
            <div className="flex items-start gap-3">
              <ProductIcon icon={product.icon} bgColor={product.iconBg} textColor={product.iconColor} />
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-bold text-gray-900 leading-snug">
                  {product.title}
                </h4>
                <p className="mt-1 text-xs text-gray-600 leading-relaxed line-clamp-3">
                  {product.description}
                </p>
              </div>
            </div>
            <div className="mt-3 flex items-center justify-end">
              <span className="text-xs font-semibold text-amber-700 group-hover:underline">
                Check price on Amazon &rarr;
              </span>
            </div>
          </a>
        ))}
      </div>

      {filteredProducts.length > 3 && !showAll && (
        <div className="mt-4 text-center">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-sm font-medium text-amber-700 hover:text-amber-900"
          >
            {isExpanded ? "Show fewer products" : `See all ${filteredProducts.length} products`}
            <svg
              className={`inline-block h-4 w-4 ml-1 transition-transform ${
                isExpanded ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      )}

      <div className="mt-4 rounded-lg bg-amber-100 p-3">
        <p className="text-xs text-amber-800 text-center leading-relaxed">
          <span className="font-semibold">Disclosure:</span> We are a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for us to earn fees by linking to Amazon.com and affiliated sites. All links go to Amazon search results, so current prices and availability are shown by Amazon at the time of viewing and may change.
        </p>
      </div>
    </div>
  );
}