import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/seo/seo-head";
import { pageSEO } from "@/lib/seo-data";
import { Shield, Users, BookOpen, TrendingUp, CheckCircle, MessageSquare } from "lucide-react";

export default function About() {
  const principles = [
    {
      icon: Shield,
      title: "Unbiased & Unsponsored",
      description: "We don't accept payments from rental companies. Our recommendations are based solely on research, user feedback, and industry best practices."
    },
    {
      icon: Users,
      title: "Austin-Focused",
      description: "We understand Austin's unique event landscape, from weather challenges to venue restrictions and local regulations."
    },
    {
      icon: BookOpen,
      title: "Educational First",
      description: "Our goal is to educate, not sell. We provide comprehensive information so you can make informed decisions."
    },
    {
      icon: TrendingUp,
      title: "Data-Driven",
      description: "Our pricing data, recommendations, and insights are based on real market research and industry analysis."
    }
  ];

  const teamValues = [
    "Transparency in all recommendations",
    "Comprehensive, actionable advice",
    "Local expertise and insights",
    "Continuous research and updates",
    "Community-focused approach"
  ];

  const expertise = [
    {
      area: "Market Research",
      description: "We continuously monitor Austin rental pricing, company reputations, and industry trends to provide current information."
    },
    {
      area: "Event Planning",
      description: "Our team has extensive experience in event planning, from intimate gatherings to large corporate functions."
    },
    {
      area: "Vendor Relations",
      description: "We maintain professional relationships with Austin rental companies to understand industry standards and best practices."
    },
    {
      area: "Consumer Advocacy",
      description: "We advocate for fair pricing and transparent business practices in the event rental industry."
    }
  ];

  return (
    <>
      <SEOHead seo={pageSEO.about} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="mb-16">
          <div className="relative h-64 md:h-80 rounded-xl overflow-hidden mb-8">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600" 
              alt="Team collaboration representing our mission to help Austin event planners"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-4" data-testid="page-title">
                  About Austin Tables & Chairs
                </h1>
                <p className="text-xl text-gray-200">
                  Your trusted, unbiased guide to Austin event rentals
                </p>
              </div>
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl text-muted-foreground leading-relaxed">
              We created Austin Tables & Chairs to fill a gap in the event planning landscape: honest, 
              comprehensive guidance without the sales pitch. Our mission is to help Austin-area hosts 
              navigate the rental process with confidence and knowledge.
            </p>
          </div>
        </div>

        {/* Our Mission */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12" data-testid="mission-section-title">
            Our Mission
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {principles.map((principle, index) => (
              <Card key={index} className="p-6 text-center" data-testid={`principle-${index}`}>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <principle.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{principle.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {principle.description}
                </p>
              </Card>
            ))}
          </div>
        </section>

        {/* Why We Exist */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6" data-testid="why-we-exist-title">
                Why We Exist
              </h2>
              <div className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  Planning an event shouldn't feel like navigating a maze of sales pitches and hidden fees. 
                  Too many people end up overpaying for rentals or working with companies that don't deliver 
                  what they promise.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We believe you deserve transparent information about pricing, quality, and service standards. 
                  Our research-based approach helps you understand what's fair to pay, what questions to ask, 
                  and how to avoid common pitfalls.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Most importantly, we're not affiliated with any rental companies. This independence allows 
                  us to provide honest assessments and recommendations based purely on what's best for you.
                </p>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                alt="Professional event setup showing our commitment to quality guidance"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12" data-testid="our-approach-title">
            Our Approach
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {expertise.map((area, index) => (
              <Card key={index} className="p-6" data-testid={`expertise-${index}`}>
                <h3 className="text-xl font-semibold mb-3">{area.area}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {area.description}
                </p>
              </Card>
            ))}
          </div>
        </section>

        {/* Our Values */}
        <section className="mb-16">
          <div className="callout-box p-8 rounded-xl">
            <h2 className="text-3xl font-bold mb-8 text-primary text-center">
              What Guides Our Work
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                {teamValues.slice(0, 3).map((value, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{value}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                {teamValues.slice(3).map((value, index) => (
                  <div key={index + 3} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Austin Connection */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1531218150217-54595bc2b934?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                alt="Austin cityscape showing our local connection"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6" data-testid="austin-connection-title">
                Why Austin Matters
              </h2>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Austin's event scene is unique. From the unpredictable spring weather to the busy festival 
                  season, from historic venue restrictions to the booming corporate event market – local 
                  knowledge makes all the difference.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We understand Austin's rental market dynamics, seasonal pricing patterns, and the specific 
                  challenges of hosting events in Texas's capital city. This local expertise helps us provide 
                  relevant, actionable advice tailored to our community.
                </p>
                <Badge variant="outline" className="text-primary border-primary">
                  Austin-Based Research & Insights
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="mb-16">
          <Card className="p-8 border-yellow-200 bg-yellow-50">
            <h3 className="text-xl font-semibold mb-4">Important Disclaimer</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>
                Austin Tables & Chairs provides educational and advisory information only. We are not 
                affiliated with any rental companies featured on this site and do not receive compensation 
                for listings or recommendations.
              </p>
              <p>
                While we strive for accuracy, rental company policies, pricing, and availability can change. 
                Always verify current information directly with rental companies before making commitments.
              </p>
              <p>
                This site does not constitute professional event planning advice. For complex events, 
                consider consulting with professional event planners who understand your specific needs.
              </p>
            </div>
          </Card>
        </section>

        {/* Contact CTA */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4" data-testid="contact-cta-title">
            Questions About Our Mission?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            We welcome feedback, suggestions, and questions about our approach. Your input helps us 
            improve our guides and better serve the Austin community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" data-testid="btn-contact-us">
              <a href="/contact">
                <MessageSquare className="mr-2 h-5 w-5" />
                Contact Us
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" data-testid="btn-suggest-topic">
              <a href="/contact">Suggest a Topic</a>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
}
