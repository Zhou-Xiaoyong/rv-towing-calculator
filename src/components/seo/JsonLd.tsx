/**
 * Reusable FAQ JSON-LD schema component for SEO.
 * Renders a <script type="application/ld+json"> tag with FAQPage schema.
 */
export function FaqJsonLd({
  faqs,
  baseUrl,
}: {
  faqs: { q: string; a: string }[];
  baseUrl: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * Reusable Article JSON-LD schema component for SEO.
 */
export function ArticleJsonLd({
  title,
  description,
  url,
  datePublished,
}: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url,
    datePublished,
    dateModified: datePublished,
    author: {
      "@type": "Organization",
      name: "RV TowCalc",
      url: "https://rvtowingcalc.com",
    },
    publisher: {
      "@type": "Organization",
      name: "RV TowCalc",
      url: "https://rvtowingcalc.com",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * Reusable BreadcrumbList JSON-LD schema component for SEO.
 * Helps search engines understand page hierarchy.
 */
export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * WebApplication JSON-LD schema for the homepage.
 * Signals to search engines that this is a tool/web app.
 */
export function WebAppJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "RV Towing Calculator",
    url: "https://rvtowingcalc.com",
    description:
      "The only RV towing calculator that combines real vehicle data with deep safety analysis. SAE J2807 compliant.",
    applicationCategory: "UtilityApplication",
    operatingSystem: "Web Browser",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    publisher: {
      "@type": "Organization",
      name: "RV TowCalc",
      url: "https://rvtowingcalc.com",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
