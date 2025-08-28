import { Helmet } from "react-helmet-async";

interface StructuredDataProps {
  data: any;
}

export default function StructuredData({ data }: StructuredDataProps) {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(data)}
      </script>
    </Helmet>
  );
}

export const FAQStructuredData = ({ faqs }: { faqs: Array<{ question: string; answer: string }> }) => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return <StructuredData data={faqSchema} />;
};

export const HowToStructuredData = ({ title, steps }: { title: string; steps: Array<{ name: string; text: string }> }) => {
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": title,
    "step": steps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.name,
      "text": step.text
    }))
  };

  return <StructuredData data={howToSchema} />;
};

export const ArticleStructuredData = ({ article }: { article: { title: string; description: string; date: string; author?: string } }) => {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.description,
    "datePublished": article.date,
    "author": {
      "@type": "Organization",
      "name": article.author || "Austin Tables and Chairs"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Austin Tables and Chairs",
      "url": "https://austintablesandchairs.com"
    }
  };

  return <StructuredData data={articleSchema} />;
};
