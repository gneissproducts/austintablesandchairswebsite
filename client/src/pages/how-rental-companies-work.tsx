import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import SEOHead from "@/components/seo/seo-head";
import { HowToStructuredData } from "@/components/ui/structured-data";
import { pageSEO } from "@/lib/seo-data";
import { guideSections } from "@/lib/content-data";
import { ArrowRight, Clock, CheckCircle } from "lucide-react";

export default function HowRentalCompaniesWork() {
  const section = guideSections['how-rental-companies-work'];
  
  const howToSteps = [
    {
      name: "Research and Initial Contact",
      text: "Start by researching local rental companies and making initial contact to discuss your event needs and get preliminary quotes."
    },
    {
      name: "Site Visit and Consultation",
      text: "Schedule a site visit where the rental company assesses your venue and provides detailed recommendations for equipment and layout."
    },
    {
      name: "Contract Review and Signing",
      text: "Carefully review the rental contract, understanding all terms including delivery, setup, damage policies, and cancellation terms."
    },
    {
      name: "Final Confirmations",
      text: "Confirm all details 1-2 weeks before your event, including delivery times, setup requirements, and contact information."
    },
    {
      name: "Delivery and Setup",
      text: "On event day, rental company delivers and sets up equipment according to your agreed plan and timeline."
    },
    {
      name: "Event and Pickup",
      text: "Enjoy your event and ensure equipment is ready for pickup at the agreed time, typically the day after your event."
    }
  ];

  return (
    <>
      <SEOHead seo={pageSEO.howRentalWork} />
      <HowToStructuredData 
        title="How to Work with Event Rental Companies in Austin" 
        steps={howToSteps} 
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="mb-16">
          <div className="relative h-64 md:h-80 rounded-xl overflow-hidden mb-8">
            <img 
              src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600" 
              alt="Professional event tent setup showing how rental companies work"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-4" data-testid="page-title">
                  How Rental Companies Work
                </h1>
                <p className="text-xl text-gray-200">
                  Understanding the process from start to finish
                </p>
              </div>
            </div>
          </div>
          
          <div className="max-w-3xl">
            <p className="text-xl text-muted-foreground leading-relaxed">
              Working with event rental companies doesn't have to be complicated. This comprehensive guide 
              walks you through every step of the rental process, from initial consultation to post-event 
              pickup, so you know exactly what to expect.
            </p>
          </div>
        </div>

        {/* Process Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8" data-testid="process-overview-title">
            The Rental Process: Step by Step
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {howToSteps.map((step, index) => (
              <Card key={index} className="p-6" data-testid={`process-step-${index}`}>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{step.name}</h3>
                    <p className="text-sm text-muted-foreground">{step.text}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Key Topics */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8" data-testid="key-topics-title">
            Essential Topics to Understand
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {section.articles.map((article, index) => (
              <Card key={article.slug} className="overflow-hidden hover:shadow-lg transition-shadow" data-testid={`article-card-${index}`}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold">{article.title}</h3>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="mr-1 h-4 w-4" />
                      {article.readTime}
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    {article.excerpt}
                  </p>
                  <Link 
                    href={`/blog/${article.slug}`} 
                    className="text-primary font-medium hover:underline inline-flex items-center"
                  >
                    Read Full Guide <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Key Tips Callout */}
        <section className="mb-16">
          <div className="callout-box p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-6 text-primary">
              Essential Tips for Working with Rental Companies
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <strong>Book Early:</strong> Popular dates fill up 2-3 months in advance, especially during Austin's peak season.
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <strong>Get Multiple Quotes:</strong> Prices can vary significantly between companies for the same items.
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <strong>Read Contracts Carefully:</strong> Pay special attention to damage policies and cancellation terms.
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <strong>Schedule Site Visits:</strong> Professional companies will visit your venue to ensure proper planning.
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <strong>Confirm Insurance:</strong> Most companies require liability insurance or special event coverage.
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <strong>Plan for Weather:</strong> Austin weather can be unpredictable - discuss backup plans.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4" data-testid="next-steps-title">Ready to Start Planning?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Now that you understand how rental companies work, explore our pricing guide to understand 
            what you should expect to pay for your event.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pricing-budgeting">
              <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90" data-testid="btn-pricing-guide">
                View Pricing Guide
              </button>
            </Link>
            <Link href="/planning-tools">
              <button className="border border-primary text-primary px-6 py-3 rounded-lg font-medium hover:bg-primary/5" data-testid="btn-planning-tools">
                Get Planning Tools
              </button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
