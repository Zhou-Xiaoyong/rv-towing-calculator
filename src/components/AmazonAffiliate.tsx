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
  priceRange?: string;
  rating?: string;
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
    priceRange: "$300 - $700",
    rating: "4.5+",
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
    priceRange: "$80 - $200",
    rating: "4.7+",
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
    priceRange: "$40 - $150",
    rating: "4.6+",
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
    priceRange: "$100 - $300",
    rating: "4.4+",
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
    priceRange: "$30 - $80",
    rating: "4.3+",
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
    priceRange: "$150 - $400",
    rating: "4.5+",
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
            <div className="mt-3 flex items-center justify-between">
              <span className="text-xs font-semibold text-amber-600">
                {product.priceRange}
              </span>
              <div className="flex items-center gap-2">
                {product.rating && (
                  <span className="flex items-center gap-0.5 text-xs text-gray-500">
                    <svg className="h-3 w-3 fill-current text-amber-400" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                    {product.rating}
                  </span>
                )}
                <span className="text-xs font-medium text-amber-600 group-hover:underline">
                  View on Amazon →
                </span>
              </div>
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
          <span className="font-semibold">Disclosure:</span> We are a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for us to earn fees by linking to Amazon.com and affiliated sites. Products shown are categories of recommended gear; actual product availability and pricing may vary.
        </p>
      </div>
    </div>
  );
}