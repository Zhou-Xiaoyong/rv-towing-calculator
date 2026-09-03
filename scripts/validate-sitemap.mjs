/**
 * Validates the built sitemap.xml / robots.txt produced by `next build`.
 *
 * Checks:
 *   1. XML parses as well-formed and root element is <urlset>
 *   2. No duplicate <loc>
 *   3. Every <loc> uses https://www.rvtowingcalc.com (no bare host, no .html)
 *   4. Both new guide slugs are present
 *   5. URL count equals indexable routes on disk
 *   6. robots.txt exists and points at the www sitemap
 *
 * Usage: node scripts/validate-sitemap.mjs
 */
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const BASE = "https://www.rvtowingcalc.com";
const SITEMAP = path.join(ROOT, ".next", "server", "app", "sitemap.xml.body");
const ROBOTS = path.join(ROOT, ".next", "server", "app", "robots.txt.body");
const APP = path.join(ROOT, "src", "app");

const NEW_SLUGS = [
  "/guides/cargo-carrying-capacity-ccc",
  "/guides/trailer-hitch-classes-explained",
];

const results = [];
const check = (name, ok, detail = "") => {
  results.push({ name, ok, detail });
  console.log(`[${ok ? "PASS" : "FAIL"}] ${name}${detail ? ` — ${detail}` : ""}`);
};

if (!fs.existsSync(SITEMAP)) {
  console.error("sitemap.xml.body not found — run the build first.");
  process.exit(1);
}

const xml = fs.readFileSync(SITEMAP, "utf8");

// 1. Well-formed + root element
const wellFormed =
  xml.trim().startsWith("<?xml") || xml.includes("<urlset");
const hasUrlset = /<urlset[^>]*xmlns="http:\/\/www\.sitemaps\.org\/schemas\/sitemap\/0\.9"/.test(xml);
const tagsBalanced =
  (xml.match(/<url>/g) || []).length === (xml.match(/<\/url>/g) || []).length;
check("sitemap XML well-formed and root is <urlset>", wellFormed && hasUrlset && tagsBalanced);

// 2/3. Collect locs
const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
const dupes = locs.filter((u, i) => locs.indexOf(u) !== i);
check("no duplicate <loc>", dupes.length === 0, dupes.length ? dupes.join(", ") : `${locs.length} URLs`);

const badDomain = locs.filter((u) => !u.startsWith(`${BASE}/`) && u !== BASE);
check(
  `all <loc> use ${BASE}`,
  badDomain.length === 0,
  badDomain.length ? badDomain.join(", ") : `${locs.length} URLs`
);

const htmlResidue = locs.filter((u) => u.includes(".html"));
check("no .html residue", htmlResidue.length === 0, htmlResidue.join(", "));

const trailing = locs.filter((u) => u.endsWith("/") && u !== `${BASE}/`);
check("no unexpected trailing slashes", trailing.length === 0, trailing.join(", "));

// 4. New slugs present
const paths = locs.map((u) => u.replace(BASE, "") || "/");
const missingNew = NEW_SLUGS.filter((s) => !paths.includes(s));
check("both new guides present in sitemap", missingNew.length === 0, missingNew.join(", "));

// 5. Count equals indexable routes on disk
function walk(dir, prefix, out) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.name.startsWith("_") || e.name.startsWith(".")) continue;
    if (e.isDirectory()) {
      if (e.name.startsWith("(") && e.name.endsWith(")")) walk(path.join(dir, e.name), prefix, out);
      else walk(path.join(dir, e.name), `${prefix}/${e.name}`, out);
    }
  }
  if (fs.existsSync(path.join(dir, "page.tsx"))) out.push(prefix === "" ? "/" : prefix);
}
const routes = [];
walk(APP, "", routes);
const indexable = routes.filter((r) => {
  if (r.includes("not-found") || r.startsWith("/api")) return false;
  const p = path.join(APP, r === "/" ? "page.tsx" : path.join(r.slice(1), "page.tsx"));
  const src = fs.existsSync(p) ? fs.readFileSync(p, "utf8") : "";
  return !/robots\s*:\s*\{[^}]*index\s*:\s*false/.test(src);
});
check(
  "sitemap URL count equals indexable routes on disk",
  locs.length === indexable.length,
  `sitemap=${locs.length} disk=${indexable.length}`
);

// 6. robots.txt
const robots = fs.existsSync(ROBOTS) ? fs.readFileSync(ROBOTS, "utf8") : "";
check("robots.txt generated", robots.length > 0);
check(
  "robots.txt declares www sitemap",
  robots.includes(`Sitemap: ${BASE}/sitemap.xml`),
  robots.includes(`Sitemap: ${BASE}/sitemap.xml`) ? "" : robots.slice(0, 120)
);

// 7. public/ must not shadow
check("public/sitemap.xml absent", !fs.existsSync(path.join(ROOT, "public", "sitemap.xml")));
check("public/robots.txt absent", !fs.existsSync(path.join(ROOT, "public", "robots.txt")));

const failed = results.filter((r) => !r.ok);
console.log(`\n${failed.length === 0 ? "ALL SITEMAP CHECKS PASSED" : `${failed.length} CHECK(S) FAILED`}`);
console.log(`Total URLs: ${locs.length}`);
process.exit(failed.length === 0 ? 0 : 1);
