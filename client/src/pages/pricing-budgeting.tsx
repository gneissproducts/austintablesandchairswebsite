import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SEOHead from "@/components/seo/seo-head";
import { pageSEO } from "@/lib/seo-data";
import { guideSections } from "@/lib/content-data";
import { ArrowRight, Clock, DollarSign, AlertTriangle } from "lucide-react";

export default function PricingBudgeting() {
  const section = guideSections['pricing-budgeting'];
  
  const pricingData = [
    {
      item: "Round Tables (60\")",
      price: "$8-12",
      unit: "per table",
      notes: "Seats 8-10 guests"
    },
    {
      item: "Chiavari Chairs",
      price: "$3-5",
      unit: "per chair",
      notes: "Most popular wedding chair"
    },
    {
      item: "Basic Tent (20x20)",
      price: "$150-250",
      unit: "per tent",
      notes: "Covers ~50 guests cocktail style"
    },
    {
      item: "Dance Floor (12x12)",
      price: "$200-350",
      unit: "per floor",
      notes: "Accommodates 25-30 dancers"
    },
    {
      item: "Market Lights",
      price: "$2-4",
      unit: "per linear foot",
      notes: "Popular outdoor lighting option"
    },
    {
      item: "Portable Restrooms",
      price: "$75-150",
      unit: "per unit",
      notes: "Luxury units cost more"
    }
  ];

  const budgetExamples = [
    {
      event: "Backyard Wedding (100 guests)",
      items: [
        "13 round tables: $130-195",
        "100 Chiavari chairs: $300-500",
        "30x40 tent: $400-700",
        "Dance floor: $200-350",
        "Lighting & misc: $200-400"
      ],
      total: "$1,230-2,145",
      notes: "Does not include linens, catering equipment"
    },
    {
      event: "Corporate Event (75 guests)",
      items: [
        "10 round tables: $100-150",
        "75 chairs: $150-300",
        "20x30 tent: $250-450",
        "Bar setup: $100-200",
        "AV equipment: $300-600"
      ],
      total: "$900-1,700",
      notes: "Basic package, AV varies greatly"
    },
    {
      event: "Birthday Party (50 guests)",
      items: [
        "7 round tables: $70-105",
        "50 chairs: $100-200",
        "20x20 tent: $150-250",
        "Basic lighting: $50-100"
      ],
      total: "$370-655",
      notes: "Simple setup, weekend rates may apply"
    }
  ];

  return (
    <>
      <SEOHead seo={pageSEO.pricing} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="mb-16">
          <div className="relative h-64 md:h-80 rounded-xl overflow-hidden mb-8">
            <img 
              src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600" 
              alt="Austin outdoor wedding venue representing pricing and budgeting"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-4" data-testid="page-title">
                  Pricing & Budgeting
                </h1>
                <p className="text-xl text-gray-200">
                  Real Austin pricing data and budget planning
                </p>
              </div>
            </div>
          </div>
          
          <div className="max-w-3xl">
            <p className="text-xl text-muted-foreground leading-relaxed">
              Understanding event rental pricing in Austin helps you budget effectively and identify fair deals. 
              Our pricing data comes from real quotes and industry research, giving you the insight you need to 
              plan your event budget with confidence.
            </p>
          </div>
        </div>

        {/* Austin Pricing Table */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8" data-testid="pricing-table-title">
            Current Austin Rental Pricing (2025)
          </h2>
          <div className="bg-card rounded-xl overflow-hidden shadow-lg">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted">
                  <tr>
                    <th className="text-left p-4 font-semibold">Item</th>
                    <th className="text-left p-4 font-semibold">Price Range</th>
                    <th className="text-left p-4 font-semibold">Unit</th>
                    <th className="text-left p-4 font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {pricingData.map((item, index) => (
                    <tr key={index} className="border-t border-border" data-testid={`pricing-row-${index}`}>
                      <td className="p-4 font-medium">{item.item}</td>
                      <td className="p-4">
                        <Badge variant="secondary" className="text-lg font-semibold">
                          {item.price}
                        </Badge>
                      </td>
                      <td className="p-4 text-muted-foreground">{item.unit}</td>
                      <td className="p-4 text-sm text-muted-foreground">{item.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <div className="flex items-start space-x-2">
              <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
              <div>
                <p className="text-sm text-yellow-800">
                  <strong>Important:</strong> Prices vary by company, season, and package deals. Weekend rates 
                  typically 10-20% higher. Delivery fees not included (usually $50-150 depending on distance).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Budget Examples */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8" data-testid="budget-examples-title">
            Real Event Budget Examples
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {budgetExamples.map((example, index) => (
              <Card key={index} className="p-6" data-testid={`budget-example-${index}`}>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <DollarSign className="mr-2 h-5 w-5 text-primary" />
                  {example.event}
                </h3>
                <div className="space-y-2 mb-4">
                  {example.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="text-sm text-muted-foreground">
                      {item}
                    </div>
                  ))}
                </div>
                <div className="border-t border-border pt-4">
                  <div className="text-lg font-bold text-primary mb-2">
                    Total: {example.total}
                  </div>
                  <p className="text-xs text-muted-foreground">{example.notes}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Hidden Fees Warning */}
        <section className="mb-16">
          <div className="callout-box p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-6 text-primary">
              Hidden Fees to Watch For
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <strong className="text-destructive">Delivery Zone Fees:</strong>
                  <p className="text-sm text-muted-foreground mt-1">
                    Many companies charge extra for deliveries beyond their "free zone" - typically 15-25 miles from their warehouse.
                  </p>
                </div>
                <div>
                  <strong className="text-destructive">Weekend Pickup Fees:</strong>
                  <p className="text-sm text-muted-foreground mt-1">
                    Sunday pickups often incur $50-100 surcharge. Monday pickups are usually free.
                  </p>
                </div>
                <div>
                  <strong className="text-destructive">Fuel Surcharges:</strong>
                  <p className="text-sm text-muted-foreground mt-1">
                    Some companies add 3-5% fuel surcharge, especially for distant deliveries.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <strong className="text-destructive">Credit Card Processing:</strong>
                  <p className="text-sm text-muted-foreground mt-1">
                    3-4% processing fee common. Paying by check or cash often gets you a discount.
                  </p>
                </div>
                <div>
                  <strong className="text-destructive">Setup/Breakdown Labor:</strong>
                  <p className="text-sm text-muted-foreground mt-1">
                    Basic delivery may not include setup. Labor rates typically $25-40/hour per person.
                  </p>
                </div>
                <div>
                  <strong className="text-destructive">Damage Waiver:</strong>
                  <p className="text-sm text-muted-foreground mt-1">
                    Optional damage waiver typically 8-12% of rental total. Review your insurance first.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Guides */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8" data-testid="detailed-guides-title">
            Detailed Pricing Guides
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {section.articles.map((article, index) => (
              <Card key={article.slug} className="overflow-hidden hover:shadow-lg transition-shadow" data-testid={`pricing-article-${index}`}>
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

        {/* Next Steps */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4" data-testid="next-steps-title">Ready to Get Quotes?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Now that you understand Austin pricing, use our planning tools to calculate exactly what you need 
            and find reputable local companies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/planning-tools">
              <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90" data-testid="btn-planning-tools">
                Use Planning Tools
              </button>
            </Link>
            <Link href="/local-resources">
              <button className="border border-primary text-primary px-6 py-3 rounded-lg font-medium hover:bg-primary/5" data-testid="btn-find-companies">
                Find Local Companies
              </button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
