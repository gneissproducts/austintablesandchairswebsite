import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SEOHead from "@/components/seo/seo-head";
import { pageSEO } from "@/lib/seo-data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function EquipmentOptions() {
  const tableOptions = [
    {
      type: "Round Tables",
      sizes: ["48\" (6 guests)", "60\" (8-10 guests)", "72\" (10-12 guests)"],
      pros: ["Great for conversation", "Flexible seating", "Classic look"],
      cons: ["Less space efficient", "Limited head table options"],
      price: "$8-12 each"
    },
    {
      type: "Rectangular Tables",
      sizes: ["6' (6 guests)", "8' (8-10 guests)"],
      pros: ["Space efficient", "Good for head tables", "Easy to arrange"],
      cons: ["Less intimate", "Can feel formal"],
      price: "$6-10 each"
    },
    {
      type: "Cocktail Tables",
      sizes: ["30\" high", "36\" high", "42\" high (bar height)"],
      pros: ["Encourages mingling", "Takes less space", "Modern look"],
      cons: ["Standing only", "Not for meals", "May need linens"],
      price: "$10-15 each"
    }
  ];

  const chairOptions = [
    {
      type: "Chiavari Chairs",
      description: "Classic wedding chair with elegant design",
      colors: ["Gold", "Silver", "White", "Natural", "Mahogany"],
      price: "$3-5 each",
      best: "Weddings, upscale events"
    },
    {
      type: "Folding Chairs",
      description: "Simple, practical seating option",
      colors: ["White", "Black", "Brown"],
      price: "$1.50-3 each",
      best: "Casual events, budget-conscious"
    },
    {
      type: "Cross-Back Chairs",
      description: "Rustic farmhouse style",
      colors: ["Natural", "White", "Antique"],
      price: "$4-6 each",
      best: "Rustic weddings, barn venues"
    }
  ];

  const tentSizing = [
    {
      size: "20x20 (400 sq ft)",
      cocktail: "50-60 guests",
      seated: "32 guests",
      notes: "Good for small gatherings"
    },
    {
      size: "20x30 (600 sq ft)",
      cocktail: "75-90 guests",
      seated: "48 guests",
      notes: "Popular mid-size option"
    },
    {
      size: "20x40 (800 sq ft)",
      cocktail: "100-120 guests",
      seated: "64 guests",
      notes: "Standard wedding reception"
    },
    {
      size: "30x40 (1200 sq ft)",
      cocktail: "150-180 guests",
      seated: "96 guests",
      notes: "Large reception with dance floor"
    },
    {
      size: "40x60 (2400 sq ft)",
      cocktail: "300-360 guests",
      seated: "192 guests",
      notes: "Very large events"
    }
  ];

  return (
    <>
      <SEOHead seo={pageSEO.equipment} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="mb-16">
          <div className="relative h-64 md:h-80 rounded-xl overflow-hidden mb-8">
            <img 
              src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600" 
              alt="Beautiful table and chair arrangement showing equipment options"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-4" data-testid="page-title">
                  Equipment & Options
                </h1>
                <p className="text-xl text-gray-200">
                  Complete guide to event rental equipment
                </p>
              </div>
            </div>
          </div>
          
          <div className="max-w-3xl">
            <p className="text-xl text-muted-foreground leading-relaxed">
              Choosing the right equipment for your event affects both the atmosphere and your budget. 
              This comprehensive guide covers all major rental categories with specific recommendations 
              for different event types and Austin weather considerations.
            </p>
          </div>
        </div>

        {/* Equipment Tabs */}
        <Tabs defaultValue="tables" className="mb-16">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5" data-testid="equipment-tabs">
            <TabsTrigger value="tables" data-testid="tab-tables">Tables</TabsTrigger>
            <TabsTrigger value="chairs" data-testid="tab-chairs">Chairs</TabsTrigger>
            <TabsTrigger value="tents" data-testid="tab-tents">Tents</TabsTrigger>
            <TabsTrigger value="climate" data-testid="tab-climate">Climate Control</TabsTrigger>
            <TabsTrigger value="accessories" data-testid="tab-accessories">Accessories</TabsTrigger>
          </TabsList>

          <TabsContent value="tables" className="mt-8">
            <h2 className="text-3xl font-bold mb-8" data-testid="tables-section-title">
              Tables & Seating Arrangements
            </h2>
            <div className="grid lg:grid-cols-3 gap-6">
              {tableOptions.map((table, index) => (
                <Card key={index} className="p-6" data-testid={`table-option-${index}`}>
                  <h3 className="text-xl font-semibold mb-3">{table.type}</h3>
                  <div className="mb-4">
                    <Badge variant="secondary" className="mb-2">{table.price}</Badge>
                    <div className="text-sm text-muted-foreground">
                      <strong>Sizes:</strong>
                      <ul className="mt-1">
                        {table.sizes.map((size, sizeIndex) => (
                          <li key={sizeIndex}>• {size}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <strong className="text-green-600 text-sm">Pros:</strong>
                      <ul className="text-sm text-muted-foreground mt-1">
                        {table.pros.map((pro, proIndex) => (
                          <li key={proIndex}>• {pro}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <strong className="text-red-600 text-sm">Cons:</strong>
                      <ul className="text-sm text-muted-foreground mt-1">
                        {table.cons.map((con, conIndex) => (
                          <li key={conIndex}>• {con}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="chairs" className="mt-8">
            <h2 className="text-3xl font-bold mb-8" data-testid="chairs-section-title">
              Chair Types & Styling
            </h2>
            <div className="grid lg:grid-cols-3 gap-6">
              {chairOptions.map((chair, index) => (
                <Card key={index} className="overflow-hidden" data-testid={`chair-option-${index}`}>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{chair.type}</h3>
                    <p className="text-muted-foreground mb-4">{chair.description}</p>
                    <div className="space-y-3">
                      <div>
                        <Badge variant="secondary">{chair.price}</Badge>
                      </div>
                      <div>
                        <strong className="text-sm">Available Colors:</strong>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {chair.colors.map((color, colorIndex) => (
                            <Badge key={colorIndex} variant="outline" className="text-xs">
                              {color}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <strong className="text-sm">Best For:</strong>
                        <p className="text-sm text-muted-foreground mt-1">{chair.best}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="tents" className="mt-8">
            <h2 className="text-3xl font-bold mb-8" data-testid="tents-section-title">
              Tent Size Guide & Weather Considerations
            </h2>
            <div className="mb-8 callout-box p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4 text-primary">Austin Weather Considerations</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <strong>Summer (June-August):</strong>
                  <p className="text-muted-foreground mt-1">
                    Extreme heat requires white tents for better heat reflection. Consider sidewalls 
                    with AC for guest comfort.
                  </p>
                </div>
                <div>
                  <strong>Spring/Fall (March-May, September-November):</strong>
                  <p className="text-muted-foreground mt-1">
                    Prime season but storms possible. Sidewalls recommended for wind protection.
                  </p>
                </div>
                <div>
                  <strong>Winter (December-February):</strong>
                  <p className="text-muted-foreground mt-1">
                    Generally mild but occasional cold fronts. Heaters may be needed for evening events.
                  </p>
                </div>
                <div>
                  <strong>Storm Season (April-October):</strong>
                  <p className="text-muted-foreground mt-1">
                    Secure anchoring essential. Professional installation required for safety.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-xl overflow-hidden shadow-lg">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-muted">
                    <tr>
                      <th className="text-left p-4 font-semibold">Tent Size</th>
                      <th className="text-left p-4 font-semibold">Cocktail Style</th>
                      <th className="text-left p-4 font-semibold">Seated Dinner</th>
                      <th className="text-left p-4 font-semibold">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tentSizing.map((tent, index) => (
                      <tr key={index} className="border-t border-border" data-testid={`tent-size-${index}`}>
                        <td className="p-4 font-medium">{tent.size}</td>
                        <td className="p-4">{tent.cocktail}</td>
                        <td className="p-4">{tent.seated}</td>
                        <td className="p-4 text-sm text-muted-foreground">{tent.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="climate" className="mt-8">
            <h2 className="text-3xl font-bold mb-8" data-testid="climate-section-title">
              Climate Control Options
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="p-6" data-testid="climate-fans">
                <h3 className="text-xl font-semibold mb-3">Fans & Cooling</h3>
                <div className="space-y-3">
                  <div>
                    <strong>Misting Fans:</strong>
                    <p className="text-sm text-muted-foreground">$25-40 each. Essential for Austin summers.</p>
                  </div>
                  <div>
                    <strong>Ceiling Fans:</strong>
                    <p className="text-sm text-muted-foreground">$15-25 each. For tented events.</p>
                  </div>
                  <div>
                    <strong>Portable AC Units:</strong>
                    <p className="text-sm text-muted-foreground">$200-400 each. For enclosed spaces.</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6" data-testid="climate-heating">
                <h3 className="text-xl font-semibold mb-3">Heating Options</h3>
                <div className="space-y-3">
                  <div>
                    <strong>Patio Heaters:</strong>
                    <p className="text-sm text-muted-foreground">$25-40 each. For winter events.</p>
                  </div>
                  <div>
                    <strong>Tent Heaters:</strong>
                    <p className="text-sm text-muted-foreground">$75-150 each. Professional installation required.</p>
                  </div>
                  <div>
                    <strong>Fire Pits:</strong>
                    <p className="text-sm text-muted-foreground">$50-100 each. Decorative and functional.</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6" data-testid="climate-generators">
                <h3 className="text-xl font-semibold mb-3">Power & Generators</h3>
                <div className="space-y-3">
                  <div>
                    <strong>Small Generators:</strong>
                    <p className="text-sm text-muted-foreground">$75-125 per day. For basic lighting.</p>
                  </div>
                  <div>
                    <strong>Large Generators:</strong>
                    <p className="text-sm text-muted-foreground">$200-400 per day. For AC/heating systems.</p>
                  </div>
                  <div>
                    <strong>Power Distribution:</strong>
                    <p className="text-sm text-muted-foreground">Professional setup required for safety.</p>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="accessories" className="mt-8">
            <h2 className="text-3xl font-bold mb-8" data-testid="accessories-section-title">
              Event Essentials & Accessories
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="p-6" data-testid="accessories-lighting">
                <h3 className="text-lg font-semibold mb-3">Lighting</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Market lights: $2-4/ft</li>
                  <li>• Chandeliers: $75-200 each</li>
                  <li>• Uplighting: $15-25 each</li>
                  <li>• Lanterns: $5-15 each</li>
                </ul>
              </Card>

              <Card className="p-6" data-testid="accessories-linens">
                <h3 className="text-lg font-semibold mb-3">Linens</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Table linens: $8-25 each</li>
                  <li>• Napkins: $0.75-2 each</li>
                  <li>• Chair covers: $2-5 each</li>
                  <li>• Sashes: $1-3 each</li>
                </ul>
              </Card>

              <Card className="p-6" data-testid="accessories-dance">
                <h3 className="text-lg font-semibold mb-3">Dance & Entertainment</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Dance floors: $200-350</li>
                  <li>• Staging: $150-300</li>
                  <li>• Photo booths: $300-600</li>
                  <li>• Games: $50-150 each</li>
                </ul>
              </Card>

              <Card className="p-6" data-testid="accessories-service">
                <h3 className="text-lg font-semibold mb-3">Service Items</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Bars: $75-150 each</li>
                  <li>• Trash cans: $10-20 each</li>
                  <li>• Restrooms: $75-200 each</li>
                  <li>• Hand wash stations: $40-75 each</li>
                </ul>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
