import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SEOHead from "@/components/seo/seo-head";
import { baseSEO, pageSEO } from "@/lib/seo-data";
import { blogPosts } from "@/lib/content-data";
import { ArrowRight, BookOpen, DollarSign, Users, Home, Clipboard, Calendar } from "lucide-react";

export default function HomePage() {
  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <>
      <SEOHead seo={{ ...baseSEO, ...pageSEO.home }} />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
          }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />
        
        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight" data-testid="hero-headline">
                Your Trusted Guide to Austin Event Rentals
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-100 leading-relaxed" data-testid="hero-subheadline">
                Get unbiased, expert advice on renting tables, chairs, tents, and more. From contracts to pricing, 
                we break down everything you need to know about working with Austin rental companies — without the sales pitch.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/how-rental-companies-work">
                  <Button size="lg" className="bg-white text-primary hover:bg-gray-100 shadow-lg" data-testid="cta-start-guide">
                    <BookOpen className="mr-2 h-5 w-5" />
                    Start Your Guide
                  </Button>
                </Link>
                <Link href="/pricing-budgeting">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary shadow-lg" data-testid="cta-see-prices">
                    <DollarSign className="mr-2 h-5 w-5" />
                    See Local Prices
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Right Column - Featured Content Cards */}
            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <h3 className="text-white text-xl font-semibold mb-4">What You'll Learn</h3>
                <div className="space-y-3">
                  <div className="flex items-center text-white/90">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    <span>Fair pricing for tables, chairs, and tents</span>
                  </div>
                  <div className="flex items-center text-white/90">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    <span>How to compare quotes and avoid hidden fees</span>
                  </div>
                  <div className="flex items-center text-white/90">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    <span>Best rental companies in Austin area</span>
                  </div>
                  <div className="flex items-center text-white/90">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    <span>Austin-specific weather and venue tips</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8" data-testid="mission-title">What This Site Is</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="callout-box">
              <h3 className="text-xl font-semibold mb-4 text-primary">✓ Unbiased & Unsponsored</h3>
              <p className="text-muted-foreground">
                We don't accept payments from rental companies. Our recommendations are based solely on 
                research, user feedback, and industry best practices.
              </p>
            </div>
            <div className="callout-box">
              <h3 className="text-xl font-semibold mb-4 text-primary">✓ Austin-Area Focus</h3>
              <p className="text-muted-foreground">
                For Austin-area event hosts, planners, and anyone renting for weddings, parties, or 
                corporate events. Local insights for local needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Sections Preview */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" data-testid="guides-section-title">
              Your Complete Event Rental Guide
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to know about renting event equipment in Austin, from understanding 
              contracts to comparing prices.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* How Rental Companies Work */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow" data-testid="card-how-rentals-work">
              <img 
                src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400" 
                alt="Professional event tent setup" 
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">How Rental Companies Work</h3>
                <p className="text-muted-foreground mb-4">
                  Understand the rental process from consultation to pickup, including contracts, 
                  deposits, and what to expect on delivery day.
                </p>
                <Link href="/how-rental-companies-work" className="text-primary font-medium hover:underline inline-flex items-center">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            {/* Pricing & Budgeting */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow" data-testid="card-pricing-budgeting">
              <img 
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400" 
                alt="Austin outdoor wedding venue setup" 
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Pricing & Budgeting</h3>
                <p className="text-muted-foreground mb-4">
                  Real Austin pricing data, budget examples, and how to spot hidden fees. Know what's 
                  fair to pay before you get quotes.
                </p>
                <Link href="/pricing-budgeting" className="text-primary font-medium hover:underline inline-flex items-center">
                  See Pricing <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            {/* Equipment & Options */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow" data-testid="card-equipment-options">
              <img 
                src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400" 
                alt="Beautiful table and chair arrangement for events" 
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Equipment & Options</h3>
                <p className="text-muted-foreground mb-4">
                  Complete guide to tables, chairs, tents, climate control, and accessories. Learn 
                  which options work best for your event type.
                </p>
                <Link href="/equipment-options" className="text-primary font-medium hover:underline inline-flex items-center">
                  Browse Equipment <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            {/* Local Resources */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow" data-testid="card-local-resources">
              <img 
                src="https://images.unsplash.com/photo-1531218150217-54595bc2b934?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400" 
                alt="Austin cityscape representing local resources" 
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Local Resources</h3>
                <p className="text-muted-foreground mb-4">
                  Directory of reputable Austin rental companies, venue considerations, and Austin-specific 
                  tips for successful events.
                </p>
                <Link href="/local-resources" className="text-primary font-medium hover:underline inline-flex items-center">
                  Find Companies <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            {/* Planning Tools */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow" data-testid="card-planning-tools">
              <img 
                src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400" 
                alt="Luxury event rental equipment display for planning" 
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Planning Tools & Checklists</h3>
                <p className="text-muted-foreground mb-4">
                  Interactive charts, downloadable checklists, and calculators to help you plan the 
                  perfect event with the right equipment.
                </p>
                <Link href="/planning-tools" className="text-primary font-medium hover:underline inline-flex items-center">
                  Get Tools <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            {/* Blog */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow" data-testid="card-blog">
              <img 
                src="https://images.unsplash.com/photo-1505236858219-8359eb29e329?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400" 
                alt="Event planning and setup scene" 
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Blog & Seasonal Guides</h3>
                <p className="text-muted-foreground mb-4">
                  Latest insights, seasonal planning guides, cost breakdowns, and expert tips for 
                  hosting memorable events in Austin.
                </p>
                <Link href="/blog" className="text-primary font-medium hover:underline inline-flex items-center">
                  Read Articles <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Blog Posts */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" data-testid="featured-blog-title">Latest Guides & Insights</h2>
            <p className="text-xl text-muted-foreground">
              Stay informed with our latest research and seasonal event planning tips
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <article key={post.slug} className="bg-card rounded-xl shadow-lg overflow-hidden" data-testid={`featured-post-${index}`}>
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="text-sm text-primary font-medium mb-2">{post.category}</div>
                  <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="mr-2 h-4 w-4" />
                    {post.date}
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/blog">
              <Button data-testid="view-all-articles">View All Articles</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4" data-testid="cta-section-title">
            Ready to Plan Your Austin Event?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Start with our comprehensive guides and planning tools to ensure your event is both 
            memorable and budget-friendly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/how-rental-companies-work">
              <Button variant="secondary" size="lg" data-testid="cta-browse-guides">
                Browse All Guides
              </Button>
            </Link>
            <Link href="/planning-tools">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary" data-testid="cta-download-checklists">
                Download Checklists
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
