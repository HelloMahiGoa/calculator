const BASE = "https://calculators.digital";

export function WebSiteJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Calculators.digital",
    url: BASE,
    description: "Free online calculators for home, office, and students. Mobile-first.",
    potentialAction: {
      "@type": "SearchAction",
      target: { "@type": "EntryPoint", urlTemplate: `${BASE}/?q={search_term_string}` },
      "query-input": "required name=search_term_string",
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function BasicCalculatorJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Basic Calculator",
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Any",
    url: `${BASE}/basic`,
    description: "Free online basic calculator. Add, subtract, multiply, divide. Memory, history, copy and share.",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function ScientificCalculatorJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Scientific Calculator",
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Any",
    url: `${BASE}/scientific`,
    description:
      "Free online scientific calculator for trigonometry, powers, roots and logarithms with degree/radian modes.",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function PrintingCalculatorJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Printing Calculator",
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Any",
    url: `${BASE}/printing`,
    description:
      "Free online printing calculator with a running tape for bookkeeping, receipts and reconciliation.",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function BreadcrumbJsonLd({ items }: { items: { name: string; url: string }[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
