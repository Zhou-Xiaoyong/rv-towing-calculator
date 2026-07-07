"use client";

import { useState } from "react";

const AFFILIATE_ID = "calchive-20";

interface AmazonProduct {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  amazonUrl: string;
  priceRange?: string;
  rating?: string;
}

const PRODUCTS: AmazonProduct[] = [
  {
    id: "wdh",
    title: "Reese Strait-Line Weight Distribution Hitch",
    description: "Proven weight distribution system with integrated sway control. Perfect for trailers over 5,000 lbs.",
    category: "weight-distribution",
    imageUrl: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=400&h=400&fit=crop",
    amazonUrl: `https://www.amazon.com/dp/B00066J7PK/ref=as_li_ss_tl?tag=${AFFILIATE_ID}`,
    priceRange: "$400 - $600",
    rating: "4.7/5",
  },
  {
    id: "brakes-controller",
    title: "Tekonsha Prodigy P2 Brake Controller",
    description: "Proportional brake controller that senses deceleration. Industry standard for trailer braking safety.",
    category: "brake-controller",
    imageUrl: "https://images.unsplash.com/photo-1605286385059-9751d9cd4332?w=400&h=400&fit=crop",
    amazonUrl: `https://www.amazon.com/dp/B000CB9BM8/ref=as_li_ss_tl?tag=${AFFILIATE_ID}`,
    priceRange: "$100 - $150",
    rating: "4.8/5",
  },
  {
    id: "tongue-scale",
    title: "Camco Tongue Weight Scale",
    description: "Digital tongue weight scale with 2,000 lb capacity. Essential for proper trailer balance.",
    category: "tongue-scale",
    imageUrl: "https://images.unsplash.com/photo-1552674605-548140901c7c?w=400&h=400&fit=crop",
    amazonUrl: `https://www.amazon.com/dp/B0009N6ILC/ref=as_li_ss_tl?tag=${AFFILIATE_ID}`,
    priceRange: "$50 - $80",
    rating: "4.6/5",
  },
  {
    id: "trailer-sway-control",
    title: "Husky Center Line Sway Control",
    description: "Dual-cam sway control that prevents trailer sway before it starts. Easy to install.",
    category: "sway-control",
    imageUrl: "https://images.unsplash.com/photo-1552674605-548140901c7c?w=400&h=400&fit=crop",
    amazonUrl: `https://www.amazon.com/dp/B002N3Y7CW/ref=as_li_ss_tl?tag=${AFFILIATE_ID}`,
    priceRange: "$300 - $450",
    rating: "4.5/5",
  },
  {
    id: "trailer-lights",
    title: "Hopkins LED Trailer Light Kit",
    description: "Complete LED trailer light kit with waterproof design. Brighter, longer-lasting than incandescent.",
    category: "trailer-lights",
    imageUrl: "https://images.unsplash.com/photo-1552674605-548140901c7c?w=400&h=400&fit=crop",
    amazonUrl: `https://www.amazon.com/dp/B000BH5POG/ref=as_li_ss_tl?tag=${AFFILIATE_ID}`,
    priceRange: "$40 - $70",
    rating: "4.4/5",
  },
  {
    id: "weight-distribution-hitch",
    title: "Equal-i-zer 4-Point Weight Distribution Hitch",
    description: "Premium weight distribution with 4-point sway control. Great for heavy trailers.",
    category: "weight-distribution",
    imageUrl: "https://images.unsplash.com/photo-1552674605-548140901c7c?w=400&h=400&fit=crop",
    amazonUrl: `https://www.amazon.com/dp/B0002ZPQ5M/ref=as_li_ss_tl?tag=${AFFILIATE_ID}`,
    priceRange: "$500 - $700",
    rating: "4.9/5",
  },
];

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
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-600">
            <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>
          <div>
            <h3 className="font-bold text-amber-900">Recommended Towing Safety Gear</h3>
            <p className="text-xs text-amber-700">
              These products help ensure safe, stable towing. We earn a small commission when you purchase through these links.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {displayProducts.map((product) => (
          <a
            key={product.id}
            href={product.amazonUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex gap-3 rounded-lg border border-amber-200 bg-white p-3 transition-all hover:border-amber-400 hover:shadow-md"
          >
            <div className="flex h-20 w-20 flex-shrink-0 overflow-hidden rounded-md bg-gray-100">
              <img
                src={product.imageUrl}
                alt={product.title}
                className="h-full w-full object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col justify-between">
              <div>
                <h4 className="text-sm font-semibold text-gray-900 line-clamp-2">
                  {product.title}
                </h4>
                <p className="mt-1 text-xs text-gray-600 line-clamp-2">
                  {product.description}
                </p>
              </div>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-xs font-semibold text-amber-600">
                  {product.priceRange}
                </span>
                {product.rating && (
                  <span className="flex items-center gap-1 text-xs text-gray-500">
                    <svg className="h-3 w-3 fill-current text-amber-400" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                    {product.rating}
                  </span>
                )}
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
            {isExpanded ? "Show fewer products" : `Show all ${filteredProducts.length} products`}
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
        <p className="text-xs text-amber-800 text-center">
          <span className="font-semibold">Disclosure:</span> We are a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for us to earn fees by linking to Amazon.com and affiliated sites.
        </p>
      </div>
    </div>
  );
}