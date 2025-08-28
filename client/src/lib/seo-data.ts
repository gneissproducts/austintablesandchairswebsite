export interface SEOData {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  schema?: any[];
}

export const baseSEO: SEOData = {
  title: "Austin Tables and Chairs - Unbiased Event Rental Guide for Austin, Texas",
  description: "Get unbiased, expert advice on event rentals in Austin, Texas. Compare prices, understand contracts, and find the best tables, chairs, tents and equipment for your event.",
  canonical: "https://austintablesandchairs.com/",
  ogType: "website",
  schema: [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://austintablesandchairs.com/#organization",
      "name": "Austin Tables and Chairs",
      "url": "https://austintablesandchairs.com/",
      "description": "Unbiased event rental guide for Austin, Texas",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "email": "contact@austintablesandchairs.com"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://austintablesandchairs.com/#website",
      "url": "https://austintablesandchairs.com/",
      "name": "Austin Tables and Chairs",
      "description": "Unbiased event rental guide for Austin, Texas",
      "publisher": {
        "@id": "https://austintablesandchairs.com/#organization"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://austintablesandchairs.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://austintablesandchairs.com/#localbusiness",
      "name": "Austin Tables and Chairs Guide",
      "description": "Comprehensive guide to event rentals in Austin, Texas",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Austin",
        "addressRegion": "TX",
        "addressCountry": "US"
      },
      "areaServed": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": "30.2672",
          "longitude": "-97.7431"
        },
        "geoRadius": "50000"
      }
    }
  ]
};

export const pageSEO = {
  home: {
    title: "Austin Tables and Chairs - Unbiased Event Rental Guide",
    description: "Get unbiased, expert advice on event rentals in Austin, Texas. Compare prices, understand contracts, and find the best equipment for your event.",
    canonical: "https://austintablesandchairs.com/"
  },
  howRentalWork: {
    title: "How Event Rental Companies Work in Austin, Texas | Guide",
    description: "Understand Austin event rental companies: contracts, deposits, delivery, setup, insurance requirements, and customer service standards.",
    canonical: "https://austintablesandchairs.com/how-rental-companies-work"
  },
  pricing: {
    title: "Austin Event Rental Pricing Guide 2025 | Fair Prices & Budget Tips",
    description: "Austin event rental pricing guide with real costs for tables, chairs, tents. Budget examples, hidden fees to avoid, and fair pricing ranges.",
    canonical: "https://austintablesandchairs.com/pricing-budgeting"
  },
  equipment: {
    title: "Event Equipment Guide Austin | Tables, Chairs, Tents & More",
    description: "Complete guide to event equipment rentals in Austin: table sizes, chair types, tent sizing, climate control, and essential accessories.",
    canonical: "https://austintablesandchairs.com/equipment-options"
  },
  localResources: {
    title: "Best Event Rental Companies in Austin Texas | Local Directory",
    description: "Directory of reputable Austin event rental companies, venue restrictions, local regulations, and Austin-specific event planning tips.",
    canonical: "https://austintablesandchairs.com/local-resources"
  },
  planningTools: {
    title: "Event Planning Tools & Checklists | Austin Tables and Chairs",
    description: "Free event planning tools: guest count charts, tent size calculator, delivery checklist, and downloadable PDF planning guides.",
    canonical: "https://austintablesandchairs.com/planning-tools"
  },
  blog: {
    title: "Event Rental Blog | Austin Planning Tips & Seasonal Guides",
    description: "Expert event rental advice, seasonal planning guides, cost breakdowns, and tips for hosting successful events in Austin, Texas.",
    canonical: "https://austintablesandchairs.com/blog"
  },
  faq: {
    title: "Event Rental FAQ | Insurance, Damage, Booking & Pricing Questions",
    description: "Frequently asked questions about event rentals: insurance requirements, damage policies, booking timelines, and deposit information.",
    canonical: "https://austintablesandchairs.com/faq"
  },
  about: {
    title: "About Austin Tables and Chairs | Unbiased Event Rental Advice",
    description: "Learn about our mission to provide unbiased, unsponsored event rental advice for Austin-area hosts, planners, and event organizers.",
    canonical: "https://austintablesandchairs.com/about"
  }
};
