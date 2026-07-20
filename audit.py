"""Comprehensive site audit - check all pages, links, and content."""
from playwright.sync_api import sync_playwright
import json

BASE = "http://localhost:3000"

ROUTES = [
    "/",
    "/about",
    "/checklist",
    "/data-sources",
    "/disclaimer",
    "/gcwr-calculator",
    "/gvwr-calculator",
    "/payload-calculator",
    "/privacy",
    "/tongue-weight-calculator",
    "/towing-capacity-calculator",
    "/guides",
    "/guides/best-half-ton-trucks-8000-lbs",
    "/guides/can-chevy-silverado-1500-tow-grand-design-imagine-2800bh",
    "/guides/can-ford-f150-tow-jayco-jay-flight-28bhs",
    "/guides/can-ram-2500-tow-keystone-montana",
    "/guides/cat-scale-weighing",
    "/guides/electric-trucks-rv-towing",
    "/guides/exceed-gvwr-dangers",
    "/guides/fifth-wheel-vs-travel-trailer",
    "/guides/gvwr-vs-gcwr",
    "/guides/how-to-read-tire-and-loading-label",
    "/guides/mountain-towing-transmission-gears",
    "/guides/payload-capacity",
    "/guides/ram-1500-vs-f150-towing",
    "/guides/spring-checklist",
    "/guides/tongue-weight",
    "/guides/towing-capacity-explained",
    "/guides/weight-distribution-hitch-setup",
    "/guides/winter-storage",
]

results = []

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    context = browser.new_context(viewport={"width": 1280, "height": 900})
    page = context.new_page()

    for route in ROUTES:
        page_errors = []
        page.on("console", lambda msg: page_errors.append(f"[{msg.type}] {msg.text}") if msg.type in ("error", "warning") else None)
        page.on("pageerror", lambda err: page_errors.append(f"[pageerror] {err}"))

        url = BASE + route
        try:
            resp = page.goto(url, wait_until="networkidle", timeout=30000)
            status = resp.status if resp else None
            title = page.title()
            h1_count = page.locator("h1").count()
            h1_texts = [page.locator("h1").nth(i).inner_text() for i in range(h1_count)]
            links = page.locator("a[href]").count()
            images = page.locator("img").count()
            broken_images = page.evaluate("""() => {
                return Array.from(document.querySelectorAll('img'))
                    .filter(img => !img.complete || img.naturalWidth === 0)
                    .map(img => img.src);
            }""")
            results.append({
                "route": route,
                "status": status,
                "title": title,
                "h1_count": h1_count,
                "h1_texts": h1_texts,
                "links": links,
                "images": images,
                "broken_images": broken_images,
                "errors": list(page_errors),
            })
        except Exception as e:
            results.append({
                "route": route,
                "status": "exception",
                "error": str(e),
                "errors": list(page_errors),
            })

    browser.close()

print(json.dumps(results, ensure_ascii=False, indent=2))
