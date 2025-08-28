import { Helmet } from "react-helmet-async";
import { SEOData } from "@/lib/seo-data";

interface SEOHeadProps {
  seo: SEOData;
}

export default function SEOHead({ seo }: SEOHeadProps) {
  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      
      {seo.canonical && <link rel="canonical" href={seo.canonical} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:type" content={seo.ogType || "article"} />
      {seo.canonical && <meta property="og:url" content={seo.canonical} />}
      <meta property="og:site_name" content="Austin Tables and Chairs" />
      <meta property="og:locale" content="en_US" />
      {seo.ogImage && <meta property="og:image" content={seo.ogImage} />}
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      {seo.ogImage && <meta name="twitter:image" content={seo.ogImage} />}
      
      {/* Structured Data */}
      {seo.schema && seo.schema.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}
