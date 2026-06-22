import type { Metadata } from "next";
import Link from "next/link";
import { DEFAULT_OG_IMAGES } from "@/lib/seo/default-og-image";

export const metadata: Metadata = {
  title: "RV Towing Guides & Safety Resources",
  description:
    "Expert RV towing guides covering towing capacity, payload, GVWR, tongue weight, CAT scale weighing, weight distribution hitch setup, and more. Independent, safety-focused advice for RV owners.",
  alternates: {
    canonical: "https://rvtowingcalc.com/guides",
  },
  openGraph: {
    title: "RV Towing Guides & Safety Resources",
    description:
      "Free, independent RV towing guides. Learn about towing capacity, payload, weight distribution, CAT scale weighing, and more.",
    url: "https://rvtowingcalc.com/guides",
    images: DEFAULT_OG_IMAGES,
  },
};

const GUIDES = [
  {
    slug: "/guides/towing-capacity-explained",
    title: "Towing Capacity Explained",
    description:
      "What towing capacity means, how SAE J2807 determines it, the 80% rule, and why tow rating alone is not enough for safe towing.",
    category: "Fundamentals",
  },
  {
    slug: "/guides/gvwr-vs-gcwr",
    title: "GVWR vs GCWR: What's the Difference?",
    description:
      "Clear explanation of Gross Vehicle Weight Rating and Gross Combined Weight Rating. Learn how they interact and why both matter.",
    category: "Fundamentals",
  },
  {
    slug: "/guides/payload-capacity",
    title: "Payload Capacity Explained",
    description:
      "Why payload is the #1 towing blind spot. Learn how tongue weight, passengers, and cargo consume payload, and how to stay within limits.",
    category: "Fundamentals",
  },
  {
    slug: "/guides/tongue-weight",
    title: "Tongue Weight Guide",
    description:
      "Optimal tongue weight percentages for travel trailers and fifth wheels. How to measure, adjust, and prevent trailer sway.",
    category: "Safety",
  },
  {
    slug: "/guides/cat-scale-weighing",
    title: "How to Weigh Your RV at a CAT Scale",
    description:
      "Step-by-step guide to weighing your RV at a CAT Scale. Learn how to get per-axle weights, calculate actual tongue weight, and verify all ratings.",
    category: "Safety",
  },
  {
    slug: "/guides/weight-distribution-hitch-setup",
    title: "Weight Distribution Hitch Setup Guide",
    description:
      "Complete step-by-step WDH installation and adjustment guide. Includes measurement worksheet, common mistakes, and model comparisons.",
    category: "Equipment",
  },
];

export default function GuidesPage() {
  const categories = [...new Set(GUIDES.map((g) => g.category))];

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <nav className="mb-4 text-sm text-gray-500">
        <Link href="/" className="hover:text-brand-600">
          Home
        </Link>
        <span className="mx-1">/</span>
        <span className="text-gray-900">Guides</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
        RV Towing Guides &amp; Safety Resources
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        Free, independent guides to help you tow safely. No dealer bias, no
        sponsored content&mdash;just clear, data-driven information backed by
        SAE J2807 standards and manufacturer specifications.
      </p>

      {categories.map((category) => (
        <section key={category} className="mt-12">
          <h2 className="text-xl font-bold text-gray-900">{category}</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {GUIDES.filter((g) => g.category === category).map((guide) => (
              <Link
                key={guide.slug}
                href={guide.slug}
                className="group rounded-xl border border-gray-200 p-5 transition-all hover:border-brand-300 hover:shadow-md"
              >
                <h3 className="font-semibold text-gray-900 group-hover:text-brand-600">
                  {guide.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  {guide.description}
                </p>
              </Link>
            ))}
          </div>
        </section>
      ))}

      <section className="mt-16 rounded-2xl bg-brand-600 p-8 text-center text-white">
        <h2 className="text-2xl font-bold">
          Ready to Check Your Setup?
        </h2>
        <p className="mt-2 text-brand-100">
          Run all six safety checks in under two minutes. Free, no sign-up.
        </p>
        <Link
          href="/towing-capacity-calculator"
          className="mt-6 inline-block rounded-xl bg-white px-8 py-4 text-base font-bold text-brand-700 shadow-lg transition-all hover:bg-brand-50 active:scale-[0.99]"
        >
          Open Towing Capacity Calculator
        </Link>
      </section>
    </div>
  );
}
