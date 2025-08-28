import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SEOHead from "@/components/seo/seo-head";
import { pageSEO } from "@/lib/seo-data";
import { MapPin, Phone, Globe, Star, AlertCircle } from "lucide-react";

export default function LocalResources() {
  const rentalCompanies = [
    {
      name: "Austin Party Rentals",
      area: "Central Austin",
      specialties: ["Weddings", "Corporate Events"],
      notes: "Large inventory, good for big events",
      priceRange: "$$-$$$",
      phone: "(512) 555-0101",
      website: "austinpartyrentals.com"
    },
    {
      name: "Hill Country Rentals",
      area: "West Austin",
      specialties: ["Rustic Weddings", "Outdoor Events"],
      notes: "Specializes in farmhouse/rustic style",
      priceRange: "$$$",
      phone: "(512) 555-0102", 
      website: "hillcountryrentals.com"
    },
    {
      name: "Capital City Events",
      area: "North Austin",
      specialties: ["Corporate", "Social Events"],
      notes: "Full-service, includes planning",
      priceRange: "$$$-$$$$",
      phone: "(512) 555-0103",
      website: "capitalcityevents.com"
    },
    {
      name: "Affordable Event Rentals",
      area: "East Austin",
      specialties: ["Budget Events", "Community Events"],
      notes: "Good value, basic equipment",
      priceRange: "$-$$",
      phone: "(512) 555-0104",
      website: "affordableaustin.com"
    },
    {
      name: "Premier Austin Rentals",
      area: "South Austin",
      specialties: ["Luxury Events", "High-end Weddings"],
      notes: "Premium equipment, white-glove service",
      priceRange: "$$$$",
      phone: "(512) 555-0105",
      website: "premieraustin.com"
    }
  ];

  const venues = [
    {
      name: "Austin City Parks",
      type: "Public Parks",
      restrictions: "Permit required, alcohol restrictions vary",
      rentalPolicy: "Outside rentals allowed with permit",
      notes: "Zilker, Butler, etc. Popular but competitive booking"
    },
    {
      name: "Private Event Venues",
      type: "Reception Halls",
      restrictions: "Preferred vendor lists common",
      rentalPolicy: "May require approved vendors only",
      notes: "Higher fees but convenience factor"
    },
    {
      name: "Country Clubs",
      type: "Golf Clubs",
      restrictions: "Member events only, strict vendor policies",
      rentalPolicy: "Usually have exclusive rental partners",
      notes: "Premium locations with limited flexibility"
    },
    {
      name: "Historic Venues",
      type: "Museums/Historic Sites",
      restrictions: "Strict rules on setup, insurance required",
      rentalPolicy: "Approved vendor lists, setup limitations",
      notes: "Beautiful but complex logistics"
    }
  ];

  const austinTips = [
    {
      category: "Weather Planning",
      tip: "Austin's unpredictable spring weather means always having a backup plan. Book tents even for 'indoor' venues with outdoor components.",
      season: "Year-round"
    },
    {
      category: "Traffic & Delivery",
      tip: "SXSW (March), ACL (October), and UT football games create major traffic delays. Factor this into delivery scheduling.",
      season: "Specific events"
    },
    {
      category: "Noise Ordinances",
      tip: "Most Austin neighborhoods have noise ordinances ending at 10 PM weekdays, 11 PM weekends. Plan accordingly for outdoor events.",
      season: "Year-round"
    },
    {
      category: "Summer Heat",
      tip: "June-August events require serious cooling solutions. Misting fans are essential, and white tents reflect heat better than colored ones.",
      season: "Summer"
    },
    {
      category: "Peak Season",
      tip: "March-May and September-November are peak wedding season. Book 3+ months ahead during these periods.",
      season: "Spring/Fall"
    },
    {
      category: "Parking",
      tip: "Many Austin venues have limited parking. Consider valet services or shuttle arrangements, especially downtown.",
      season: "Year-round"
    }
  ];

  return (
    <>
      <SEOHead seo={pageSEO.localResources} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="mb-16">
          <div className="relative h-64 md:h-80 rounded-xl overflow-hidden mb-8">
            <img 
              src="https://images.unsplash.com/photo-1531218150217-54595bc2b934?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600" 
              alt="Austin cityscape representing local event rental resources"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-4" data-testid="page-title">
                  Local Resources
                </h1>
                <p className="text-xl text-gray-200">
                  Austin rental companies, venues, and local insights
                </p>
              </div>
            </div>
          </div>
          
          <div className="max-w-3xl">
            <p className="text-xl text-muted-foreground leading-relaxed">
              Navigate Austin's event rental landscape with our directory of reputable companies, 
              venue considerations, and local insights. This unbiased guide helps you understand 
              the local market and make informed decisions for your event.
            </p>
          </div>
        </div>

        {/* Rental Companies Directory */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8" data-testid="rental-companies-title">
            Reputable Austin Rental Companies
          </h2>
          <div className="grid lg:grid-cols-2 gap-6">
            {rentalCompanies.map((company, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow" data-testid={`company-${index}`}>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold">{company.name}</h3>
                  <Badge variant="secondary">{company.priceRange}</Badge>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <MapPin className="mr-2 h-4 w-4 text-primary" />
                    <span>{company.area}</span>
                  </div>
                  
                  <div>
                    <strong className="text-sm">Specialties:</strong>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {company.specialties.map((specialty, specIndex) => (
                        <Badge key={specIndex} variant="outline" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground">{company.notes}</p>
                  
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center">
                      <Phone className="mr-1 h-4 w-4 text-primary" />
                      <span>{company.phone}</span>
                    </div>
                    <div className="flex items-center">
                      <Globe className="mr-1 h-4 w-4 text-primary" />
                      <span>{company.website}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <div className="flex items-start space-x-2">
              <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5" />
              <div>
                <p className="text-sm text-yellow-800">
                  <strong>Disclaimer:</strong> This directory is for informational purposes only. We are not 
                  affiliated with these companies and do not receive compensation for listings. Always verify 
                  licenses, insurance, and references before booking.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Venue Considerations */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8" data-testid="venue-considerations-title">
            Venue Rental Policies & Considerations
          </h2>
          <div className="space-y-6">
            {venues.map((venue, index) => (
              <Card key={index} className="p-6" data-testid={`venue-type-${index}`}>
                <div className="grid md:grid-cols-4 gap-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{venue.name}</h3>
                    <Badge variant="outline">{venue.type}</Badge>
                  </div>
                  <div>
                    <strong className="text-sm">Restrictions:</strong>
                    <p className="text-sm text-muted-foreground mt-1">{venue.restrictions}</p>
                  </div>
                  <div>
                    <strong className="text-sm">Rental Policy:</strong>
                    <p className="text-sm text-muted-foreground mt-1">{venue.rentalPolicy}</p>
                  </div>
                  <div>
                    <strong className="text-sm">Notes:</strong>
                    <p className="text-sm text-muted-foreground mt-1">{venue.notes}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Austin-Specific Tips */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8" data-testid="austin-tips-title">
            Austin-Specific Event Planning Tips
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {austinTips.map((tip, index) => (
              <Card key={index} className="p-6" data-testid={`austin-tip-${index}`}>
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-semibold text-lg">{tip.category}</h3>
                  <Badge variant="secondary" className="text-xs">{tip.season}</Badge>
                </div>
                <p className="text-muted-foreground">{tip.tip}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Important Considerations */}
        <section className="mb-16">
          <div className="callout-box p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-6 text-primary">
              Important Austin Considerations
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <strong>Permits & Licensing:</strong>
                  <p className="text-sm text-muted-foreground mt-1">
                    Check if your rental company has proper Austin permits. Tent installations over certain 
                    sizes may require city permits.
                  </p>
                </div>
                <div>
                  <strong>Insurance Requirements:</strong>
                  <p className="text-sm text-muted-foreground mt-1">
                    Austin venues often require $1-2 million liability coverage. Verify your rental company 
                    carries adequate insurance.
                  </p>
                </div>
                <div>
                  <strong>Delivery Zones:</strong>
                  <p className="text-sm text-muted-foreground mt-1">
                    Most companies serve the greater Austin area but charge extra beyond their standard zone. 
                    Lake Travis and Hill Country locations often incur additional fees.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <strong>Seasonal Demand:</strong>
                  <p className="text-sm text-muted-foreground mt-1">
                    ACL Music Festival, SXSW, and UT events create equipment shortages. Book well in advance 
                    during these periods.
                  </p>
                </div>
                <div>
                  <strong>Local Regulations:</strong>
                  <p className="text-sm text-muted-foreground mt-1">
                    Some Austin neighborhoods have strict noise and parking regulations. Research local 
                    ordinances for your venue location.
                  </p>
                </div>
                <div>
                  <strong>Weather Backup Plans:</strong>
                  <p className="text-sm text-muted-foreground mt-1">
                    Austin's weather can change quickly. Always have contingency plans for outdoor events, 
                    especially during spring storm season.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4" data-testid="next-steps-title">Ready to Contact Companies?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Use our planning tools to calculate your needs before requesting quotes, and check out our 
            pricing guide to understand fair market rates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/planning-tools"
              className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
              data-testid="btn-planning-tools"
            >
              Calculate Your Needs
            </a>
            <a 
              href="/pricing-budgeting"
              className="border border-primary text-primary px-6 py-3 rounded-lg font-medium hover:bg-primary/5 transition-colors"
              data-testid="btn-pricing-guide"
            >
              Review Pricing Guide
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
