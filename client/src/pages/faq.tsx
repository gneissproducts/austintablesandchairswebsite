import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/seo/seo-head";
import { FAQStructuredData } from "@/components/ui/structured-data";
import { pageSEO } from "@/lib/seo-data";
import { faqData } from "@/lib/content-data";
import { ChevronDown, Search, MessageCircle } from "lucide-react";

export default function FAQ() {
  const [searchTerm, setSearchTerm] = useState("");
  const [openItems, setOpenItems] = useState<number[]>([]);

  const filteredFaqs = faqData.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqCategories = [
    {
      title: "Booking & Contracts",
      faqs: filteredFaqs.filter(faq => 
        faq.question.includes("book") || 
        faq.question.includes("cancel") || 
        faq.question.includes("deposit") ||
        faq.question.includes("contract")
      )
    },
    {
      title: "Insurance & Liability",
      faqs: filteredFaqs.filter(faq => 
        faq.question.includes("insurance") || 
        faq.question.includes("damage") ||
        faq.question.includes("liable")
      )
    },
    {
      title: "Delivery & Setup",
      faqs: filteredFaqs.filter(faq => 
        faq.question.includes("delivery") || 
        faq.question.includes("setup") ||
        faq.question.includes("pickup")
      )
    },
    {
      title: "Weather & Events",
      faqs: filteredFaqs.filter(faq => 
        faq.question.includes("weather") || 
        faq.question.includes("rain") ||
        faq.question.includes("outdoor")
      )
    },
    {
      title: "Pricing & Fees",
      faqs: filteredFaqs.filter(faq => 
        faq.question.includes("price") || 
        faq.question.includes("cost") ||
        faq.question.includes("fee") ||
        faq.question.includes("zone")
      )
    }
  ].filter(category => category.faqs.length > 0);

  // If no categories match, show all FAQs in a general category
  const generalFaqs = faqCategories.length === 0 ? filteredFaqs : 
    filteredFaqs.filter(faq => !faqCategories.some(cat => cat.faqs.includes(faq)));

  return (
    <>
      <SEOHead seo={pageSEO.faq} />
      <FAQStructuredData faqs={faqData} />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" data-testid="page-title">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Get answers to the most common questions about event rentals in Austin, from insurance 
            requirements to delivery logistics.
          </p>
          
          {/* Search */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search FAQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
              data-testid="faq-search"
            />
          </div>
        </div>

        {/* FAQ Sections */}
        <div className="space-y-12">
          {faqCategories.map((category, categoryIndex) => (
            <section key={categoryIndex}>
              <h2 className="text-2xl font-bold mb-6" data-testid={`category-${categoryIndex}-title`}>
                {category.title}
              </h2>
              <div className="space-y-4">
                {category.faqs.map((faq, faqIndex) => {
                  const globalIndex = faqData.indexOf(faq);
                  const isOpen = openItems.includes(globalIndex);
                  
                  return (
                    <Card key={globalIndex} className="overflow-hidden" data-testid={`faq-item-${globalIndex}`}>
                      <button
                        onClick={() => toggleItem(globalIndex)}
                        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-muted/50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset"
                        data-testid={`faq-question-${globalIndex}`}
                      >
                        <h3 className="text-lg font-semibold pr-4">{faq.question}</h3>
                        <ChevronDown 
                          className={`h-5 w-5 text-muted-foreground transition-transform ${
                            isOpen ? 'rotate-180' : ''
                          }`} 
                        />
                      </button>
                      {isOpen && (
                        <CardContent className="px-6 pb-4 border-t border-border">
                          <p className="text-muted-foreground leading-relaxed" data-testid={`faq-answer-${globalIndex}`}>
                            {faq.answer}
                          </p>
                        </CardContent>
                      )}
                    </Card>
                  );
                })}
              </div>
            </section>
          ))}

          {/* General FAQs (if any don't fit into categories) */}
          {generalFaqs.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold mb-6">General Questions</h2>
              <div className="space-y-4">
                {generalFaqs.map((faq, faqIndex) => {
                  const globalIndex = faqData.indexOf(faq);
                  const isOpen = openItems.includes(globalIndex);
                  
                  return (
                    <Card key={globalIndex} className="overflow-hidden">
                      <button
                        onClick={() => toggleItem(globalIndex)}
                        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-muted/50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset"
                      >
                        <h3 className="text-lg font-semibold pr-4">{faq.question}</h3>
                        <ChevronDown 
                          className={`h-5 w-5 text-muted-foreground transition-transform ${
                            isOpen ? 'rotate-180' : ''
                          }`} 
                        />
                      </button>
                      {isOpen && (
                        <CardContent className="px-6 pb-4 border-t border-border">
                          <p className="text-muted-foreground leading-relaxed">
                            {faq.answer}
                          </p>
                        </CardContent>
                      )}
                    </Card>
                  );
                })}
              </div>
            </section>
          )}
        </div>

        {/* No Results */}
        {filteredFaqs.length === 0 && searchTerm && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg mb-4">
              No FAQs found matching "{searchTerm}"
            </p>
            <Button 
              variant="outline"
              onClick={() => setSearchTerm("")}
              data-testid="clear-faq-search"
            >
              Clear Search
            </Button>
          </div>
        )}

        {/* Contact CTA */}
        <section className="mt-16 text-center bg-muted rounded-xl p-8">
          <MessageCircle className="h-12 w-12 mx-auto mb-4 text-primary" />
          <h2 className="text-2xl font-bold mb-4" data-testid="contact-cta-title">
            Still Have Questions?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            If you can't find the answer you're looking for, we'd love to help. Send us your question 
            and we'll get back to you with detailed information.
          </p>
          <Button asChild data-testid="contact-us-button">
            <a href="/contact">Contact Us</a>
          </Button>
        </section>
      </div>
    </>
  );
}
