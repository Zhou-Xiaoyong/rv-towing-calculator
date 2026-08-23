import type { MetadataRoute } from "next";

/**
 * Sitemap — lastmod 按页面内容实际创建/更新日期硬编码。
 *
 * 日期来源：git 首次提交日期（`git log --diff-filter=A`），
 * 即文章/页面内容的原始发布日期。
 *
 * 维护规则：
 * - 新增页面时，用其发布日期作为 lastmod。
 * - 仅当某页面内容被实质性更新时，才把 lastmod 改为新日期。
 * - 技术性修改（canonical 修复、lint、依赖升级等）不更新 lastmod。
 * - guides 列表页（/guides）例外：每次新增文章都会改变列表内容，
 *   所以用最近一次新增文章的日期。
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.rvtowingcalc.com";

  return [
    // 首页
    {
      url: baseUrl,
      lastModified: new Date("2026-06-20"),
      changeFrequency: "weekly",
      priority: 1,
    },
    // 计算器
    {
      url: `${baseUrl}/towing-capacity-calculator`,
      lastModified: new Date("2026-06-20"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/payload-calculator`,
      lastModified: new Date("2026-06-20"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/gvwr-calculator`,
      lastModified: new Date("2026-06-20"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tongue-weight-calculator`,
      lastModified: new Date("2026-06-20"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/gcwr-calculator`,
      lastModified: new Date("2026-06-20"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // Guides 列表页 — 每次新增文章列表内容会变，用最近一次新增文章的日期
    {
      url: `${baseUrl}/guides`,
      lastModified: new Date("2026-08-23"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/checklist`,
      lastModified: new Date("2026-07-07"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    // ── Fundamentals ──
    {
      url: `${baseUrl}/guides/towing-capacity-explained`,
      lastModified: new Date("2026-06-20"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/guides/gvwr-vs-gcwr`,
      lastModified: new Date("2026-06-20"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/guides/payload-capacity`,
      lastModified: new Date("2026-06-20"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/guides/tongue-weight`,
      lastModified: new Date("2026-06-20"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/guides/trailer-loading-position`,
      lastModified: new Date("2026-07-20"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/guides/how-to-read-tire-and-loading-label`,
      lastModified: new Date("2026-07-10"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/guides/axle-ratio-for-towing`,
      lastModified: new Date("2026-08-06"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/guides/calculate-tongue-weight-travel-trailer`,
      lastModified: new Date("2026-07-27"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    // ── Safety ──
    {
      url: `${baseUrl}/guides/cat-scale-weighing`,
      lastModified: new Date("2026-06-22"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/guides/exceed-gvwr-dangers`,
      lastModified: new Date("2026-06-29"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/guides/how-to-back-up-travel-trailer`,
      lastModified: new Date("2026-08-09"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/guides/rv-trailer-sway-control`,
      lastModified: new Date("2026-08-06"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/guides/trailer-brake-controller-setup`,
      lastModified: new Date("2026-08-02"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/guides/weight-distribution-hitch-setup`,
      lastModified: new Date("2026-06-22"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/guides/fifth-wheel-pin-weight`,
      lastModified: new Date("2026-08-13"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/guides/travel-trailer-tire-safety`,
      lastModified: new Date("2026-08-13"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/guides/dry-weight-vs-loaded-weight`,
      lastModified: new Date("2026-08-16"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/guides/gawr-explained`,
      lastModified: new Date("2026-08-23"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/guides/lifted-truck-towing-capacity`,
      lastModified: new Date("2026-08-16"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/guides/travel-trailer-pre-trip-inspection`,
      lastModified: new Date("2026-08-20"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/guides/spring-checklist`,
      lastModified: new Date("2026-07-07"),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/guides/winter-storage`,
      lastModified: new Date("2026-07-07"),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    // ── Buying Guides ──
    {
      url: `${baseUrl}/guides/best-half-ton-trucks-8000-lbs`,
      lastModified: new Date("2026-06-29"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/guides/diesel-vs-gas-truck-rv-towing`,
      lastModified: new Date("2026-08-02"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/guides/rv-towing-mirrors-guide`,
      lastModified: new Date("2026-08-09"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/guides/fifth-wheel-vs-travel-trailer`,
      lastModified: new Date("2026-07-06"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/guides/electric-trucks-rv-towing`,
      lastModified: new Date("2026-07-06"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/guides/ram-1500-vs-f150-towing`,
      lastModified: new Date("2026-07-20"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/guides/mountain-towing-transmission-gears`,
      lastModified: new Date("2026-07-20"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/guides/can-suv-tow-small-travel-trailer`,
      lastModified: new Date("2026-07-27"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/guides/hitch-ball-selection-guide`,
      lastModified: new Date("2026-08-20"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/guides/midsize-truck-rv-towing`,
      lastModified: new Date("2026-08-23"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    // ── Matchups ──
    {
      url: `${baseUrl}/guides/can-ford-f150-tow-jayco-jay-flight-28bhs`,
      lastModified: new Date("2026-07-07"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/guides/can-ram-2500-tow-keystone-montana`,
      lastModified: new Date("2026-07-10"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/guides/can-chevy-silverado-1500-tow-grand-design-imagine-2800bh`,
      lastModified: new Date("2026-07-07"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    // ── Utility pages ──
    {
      url: `${baseUrl}/about`,
      lastModified: new Date("2026-06-20"),
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${baseUrl}/data-sources`,
      lastModified: new Date("2026-06-20"),
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${baseUrl}/disclaimer`,
      lastModified: new Date("2026-06-20"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date("2026-06-20"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
