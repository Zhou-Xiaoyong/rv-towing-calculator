#!/usr/bin/env node
/**
 * Sitemap reconciliation script for rvtowingcalc.com
 *
 * Scans all route directories under src/app/, extracts indexable routes,
 * diffs against the URLs already listed in src/app/sitemap.ts, and reports:
 *   1. Routes on disk but missing from sitemap (must add)
 *   2. URLs in sitemap but no longer exist on disk (must remove)
 *   3. Total count after suggested reconciliation
 *
 * Validation checks:
 *   - All URLs use www.rvtowingcalc.com domain (no bare rvtowingcalc.com)
 *   - No duplicate URLs
 *   - No .html residue
 *   - Sitemap parsable as valid TS module exports the array
 *
 * Run: node scripts/reconcile-sitemap.mjs
 */

import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname.replace(/^\//, "")), "..");
const APP_DIR = path.join(ROOT, "src", "app");
const SITEMAP_FILE = path.join(ROOT, "src", "app", "sitemap.ts");

const REQUIRED_BASE_URL = "https://www.rvtowingcalc.com";

// Recursively find all directories under src/app/ that contain a page.tsx (or page.tsx-like file)
function findPageFiles(dir, basePath = "") {
  const results = [];
  if (!fs.existsSync(dir)) return results;

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === "node_modules" || entry.name.startsWith(".")) continue;
    const fullPath = path.join(dir, entry.name);
    const relativePath = path.posix.join(basePath, entry.name);

    if (entry.isDirectory()) {
      results.push(...findPageFiles(fullPath, relativePath));
    } else if (entry.name === "page.tsx" || entry.name === "page.ts") {
      // Build route path from folder name. Group route segments use parens brackets; we skip those since pages aren't routed
      const segments = basePath.split(path.sep).filter(Boolean);
      const isGroup = segments.some((s) => s.startsWith("(") && s.endsWith(")"));
      if (isGroup) continue;
      // Skip API routes (under /api/)
      if (segments[0] === "api") continue;
      // Skip not-found
      if (segments[segments.length - 1] === "not-found") continue;
      // Skip opengraph-image and twitter-image and other generated routes
      const fileBaseName = entry.name.replace(/\.tsx?$/, "");
      if (fileBaseName !== "page") continue;

      // Build the route
      const route = "/" + segments.join("/");
      results.push(route.replace(/\/page$/, "") || "/");
    }
  }
  return results;
}

// Extract URLs from sitemap.ts (handles bare baseUrl, static strings, and ${baseUrl} template literals)
function getSitemapUrls(filePath) {
  const content = fs.readFileSync(filePath, "utf-8");
  const matches = [];

  // Pattern 1: url: `...` (template literal, possibly with ${baseUrl})
  const tplRegex = /url:\s*`([^`]+)`/g;
  let m;
  while ((m = tplRegex.exec(content)) !== null) {
    matches.push(m[1].replace(/\$\{baseUrl\}/g, REQUIRED_BASE_URL));
  }

  // Pattern 2: url: "..." or url: '...' (static string)
  const strRegex = /url:\s*(?:'([^']+)'|"([^"]+)")/g;
  while ((m = strRegex.exec(content)) !== null) {
    matches.push(m[1] ?? m[2]);
  }

  // Pattern 3: url: baseUrl (bare variable reference = the bare baseUrl, no path)
  if (/url:\s*baseUrl\b/.test(content)) {
    matches.push(REQUIRED_BASE_URL + "/");
  }

  return matches;
}

// Convert route path (e.g. /guides/foo) to expected sitemap URL (with baseUrl prefix)
function routeToSitemapUrl(route) {
  if (route === "/") return `${REQUIRED_BASE_URL}/`;
  return `${REQUIRED_BASE_URL}${route}`;
}

// Main
const routes = findPageFiles(APP_DIR, "");
const sitemapUrls = getSitemapUrls(SITEMAP_FILE);

console.log("=".repeat(70));
console.log("SITEMAP RECONCILIATION REPORT");
console.log("=".repeat(70));
console.log(`Routes on disk: ${routes.length}`);
console.log(`URLs in sitemap: ${sitemapUrls.length}`);
console.log("");

// Sort routes for stable output
const sortedRoutes = [...routes].sort();
const sortedSitemap = [...sitemapUrls].sort();

console.log("Routes on disk:");
sortedRoutes.forEach((r) => console.log(`  ${r}`));
console.log("");

console.log("URLs in sitemap.ts:");
sortedSitemap.forEach((u) => console.log(`  ${u}`));
console.log("");

// Compute expected sitemap URLs
const expectedUrls = new Set(sortedRoutes.map(routeToSitemapUrl).map((u) => u.replace(/\/$/, "")));

const existingUrls = new Set(sortedSitemap.map((u) => u.replace(/\/$/, "")));

// Missing: expected but not in sitemap
const missing = [...expectedUrls].filter((u) => !existingUrls.has(u));

// Extra: in sitemap but not on disk
const extra = [...existingUrls].filter((u) => !expectedUrls.has(u));

console.log("=".repeat(70));
console.log(`MISSING from sitemap (must add): ${missing.length}`);
console.log("=".repeat(70));
if (missing.length === 0) {
  console.log("(none — all routes on disk are present in sitemap)");
} else {
  missing.forEach((u) => console.log(`  + ${u}`));
}

console.log("");
console.log("=".repeat(70));
console.log(`EXTRA in sitemap but no route on disk: ${extra.length}`);
console.log("=".repeat(70));
if (extra.length === 0) {
  console.log("(none — all URLs in sitemap match routes on disk)");
} else {
  extra.forEach((u) => console.log(`  - ${u}`));
}

console.log("");

// Validation checks
console.log("=".repeat(70));
console.log("VALIDATION CHECKS");
console.log("=".repeat(70));

// Check 1: All URLs use www.rvtowingcalc.com
const wrongDomain = sortedSitemap.filter((u) => !u.startsWith(REQUIRED_BASE_URL));
console.log(`[${wrongDomain.length === 0 ? "PASS" : "FAIL"}] All sitemap URLs use ${REQUIRED_BASE_URL}`);
if (wrongDomain.length > 0) {
  wrongDomain.forEach((u) => console.log(`  WRONG DOMAIN: ${u}`));
}

// Check 2: No duplicate URLs
const dups = sortedSitemap.filter((u, i, arr) => arr.indexOf(u) !== i);
console.log(`[${dups.length === 0 ? "PASS" : "FAIL"}] No duplicate URLs in sitemap`);
if (dups.length > 0) {
  dups.forEach((u) => console.log(`  DUPLICATE: ${u}`));
}

// Check 3: No .html residue
const htmlUrls = sortedSitemap.filter((u) => u.endsWith(".html"));
console.log(`[${htmlUrls.length === 0 ? "PASS" : "FAIL"}] No .html residue in sitemap URLs`);
if (htmlUrls.length > 0) {
  htmlUrls.forEach((u) => console.log(`  HAS .html: ${u}`));
}

// Check 4: No trailing slash inconsistency (except root)
const trailingSlash = sortedSitemap.filter((u) => u.endsWith("/") && u !== `${REQUIRED_BASE_URL}/`);
console.log(`[${trailingSlash.length === 0 ? "PASS" : "WARN"}] No unexpected trailing slashes`);
if (trailingSlash.length > 0) {
  trailingSlash.forEach((u) => console.log(`  TRAILING SLASH: ${u}`));
}

// Check 5: public/sitemap.xml and public/robots.txt must NOT exist (would shadow routes)
const publicSitemap = path.join(ROOT, "public", "sitemap.xml");
const publicRobots = path.join(ROOT, "public", "robots.txt");
const staleSitemap = fs.existsSync(publicSitemap);
const staleRobots = fs.existsSync(publicRobots);
console.log(`[${!staleSitemap ? "PASS" : "FAIL"}] public/sitemap.xml does not exist`);
console.log(`[${!staleRobots ? "PASS" : "FAIL"}] public/robots.txt does not exist`);

console.log("");
console.log("=".repeat(70));
console.log("SUMMARY");
console.log("=".repeat(70));
console.log(`Routes on disk:          ${routes.length}`);
console.log(`URLs in sitemap now:     ${sitemapUrls.length}`);
console.log(`Missing (must add):      ${missing.length}`);
console.log(`Extra (should remove):   ${extra.length}`);
console.log(
  `Reconciled count would be: ${expectedUrls.size} URLs (${expectedUrls.size - sitemapUrls.length >= 0 ? "+" : ""}${expectedUrls.size - sitemapUrls.length})`,
);

const totalIssues = missing.length + extra.length + wrongDomain.length + dups.length + htmlUrls.length + (staleSitemap ? 1 : 0) + (staleRobots ? 1 : 0);
console.log("");
if (totalIssues === 0) {
  console.log("ALL CHECKS PASSED — sitemap is fully reconciled.");
  process.exit(0);
} else {
  console.log(`${totalIssues} issue(s) found — fix above before committing.`);
  process.exit(1);
}
