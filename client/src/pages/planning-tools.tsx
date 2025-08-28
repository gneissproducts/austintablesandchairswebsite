import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SEOHead from "@/components/seo/seo-head";
import { HowToStructuredData } from "@/components/ui/structured-data";
import { pageSEO } from "@/lib/seo-data";
import { planningToolsData } from "@/lib/content-data";
import { Users, Home, Music, Download, CheckCircle } from "lucide-react";

export default function PlanningTools() {

  const deliverySteps = [
    {
      name: "Confirm Delivery Details 48 Hours Prior",
      text: "Contact rental company to confirm delivery time, setup crew size, and any last-minute changes to your order."
    },
    {
      name: "Prepare the Delivery Site",
      text: "Clear pathways, ensure adequate parking for delivery trucks, and have contact person available on-site."
    },
    {
      name: "Conduct Pre-Setup Inspection",
      text: "Walk through the setup plan with the crew, point out any obstacles, utilities, or special considerations."
    },
    {
      name: "Monitor Setup Process",
      text: "Stay available during setup to answer questions and ensure everything is placed according to your specifications."
    },
    {
      name: "Final Inspection and Sign-Off",
      text: "Inspect all equipment for damage or missing items before crew leaves. Document any issues immediately."
    }
  ];

  const checklistItems = [
    { task: "Research and contact 3+ rental companies", timeline: "8-12 weeks before", completed: false },
    { task: "Get written quotes with detailed breakdowns", timeline: "6-8 weeks before", completed: false },
    { task: "Check insurance requirements with venue", timeline: "6-8 weeks before", completed: false },
    { task: "Schedule site visits with top 2 companies", timeline: "4-6 weeks before", completed: false },
    { task: "Review and sign rental contract", timeline: "4-6 weeks before", completed: false },
    { task: "Pay deposit (typically 25-50%)", timeline: "4-6 weeks before", completed: false },
    { task: "Finalize guest count and layout", timeline: "3-4 weeks before", completed: false },
    { task: "Confirm delivery and pickup times", timeline: "2 weeks before", completed: false },
    { task: "Submit final payment", timeline: "1 week before", completed: false },
    { task: "Prepare delivery site and contact info", timeline: "Day before", completed: false },
    { task: "Conduct final walkthrough", timeline: "Day of delivery", completed: false }
  ];

  return (
    <>
      <SEOHead seo={pageSEO.planningTools} />
      <HowToStructuredData 
        title="Event Rental Delivery Day Preparation" 
        steps={deliverySteps} 
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="mb-16">
          <div className="relative h-64 md:h-80 rounded-xl overflow-hidden mb-8">
            <img 
              src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600" 
              alt="Event planning tools and luxury rental equipment display"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-4" data-testid="page-title">
                  Planning Tools & Checklists
                </h1>
                <p className="text-xl text-gray-200">
                  Calculate your needs and stay organized
                </p>
              </div>
            </div>
          </div>
          
          <div className="max-w-3xl">
            <p className="text-xl text-muted-foreground leading-relaxed">
              Take the guesswork out of event planning with our comprehensive sizing charts 
              and checklists. These tools help you determine exactly what you need and keep your planning 
              process organized from start to finish.
            </p>
          </div>
        </div>

        {/* Planning Tools Tabs */}
        <Tabs defaultValue="charts" className="mb-16">
          <TabsList className="grid w-full grid-cols-3" data-testid="planning-tools-tabs">
            <TabsTrigger value="charts" data-testid="tab-charts">Size Charts</TabsTrigger>
            <TabsTrigger value="checklist" data-testid="tab-checklist">Checklist</TabsTrigger>
            <TabsTrigger value="delivery" data-testid="tab-delivery">Delivery Guide</TabsTrigger>
          </TabsList>

          <TabsContent value="charts" className="mt-8">
            <div className="space-y-12">
              {/* Table & Chair Chart */}
              <section>
                <h2 className="text-2xl font-bold mb-6" data-testid="table-chair-chart-title">
                  Table & Chair Quantity Chart
                </h2>
                <Card>
                  <CardContent className="p-6">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left p-3">Guests</th>
                            <th className="text-left p-3">60" Round Tables</th>
                            <th className="text-left p-3">Chairs</th>
                          </tr>
                        </thead>
                        <tbody>
                          {planningToolsData.tableChairCalculator.map((row, index) => (
                            <tr key={index} className="border-b" data-testid={`table-chart-row-${index}`}>
                              <td className="p-3 font-medium">{row.guests}</td>
                              <td className="p-3">{row.roundTables}</td>
                              <td className="p-3">{row.chairs}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Tent Size Chart */}
              <section>
                <h2 className="text-2xl font-bold mb-6" data-testid="tent-size-chart-title">
                  Tent Size Guide
                </h2>
                <Card>
                  <CardContent className="p-6">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left p-3">Event Type</th>
                            <th className="text-left p-3">Tent Size</th>
                            <th className="text-left p-3">Capacity</th>
                          </tr>
                        </thead>
                        <tbody>
                          {planningToolsData.tentSizeGuide.map((row, index) => (
                            <tr key={index} className="border-b" data-testid={`tent-chart-row-${index}`}>
                              <td className="p-3 font-medium">{row.event}</td>
                              <td className="p-3">{row.size}</td>
                              <td className="p-3">{row.guests}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Dance Floor Chart */}
              <section>
                <h2 className="text-2xl font-bold mb-6" data-testid="dance-floor-chart-title">
                  Dance Floor Size Chart
                </h2>
                <Card>
                  <CardContent className="p-6">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left p-3">Total Guests</th>
                            <th className="text-left p-3">Dance Floor Size</th>
                            <th className="text-left p-3">Planning Assumption</th>
                          </tr>
                        </thead>
                        <tbody>
                          {planningToolsData.danceFloorSizes.map((row, index) => (
                            <tr key={index} className="border-b" data-testid={`dance-floor-row-${index}`}>
                              <td className="p-3 font-medium">{row.guests}</td>
                              <td className="p-3">{row.size}</td>
                              <td className="p-3 text-sm text-muted-foreground">{row.percentage}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </section>
            </div>
          </TabsContent>

          <TabsContent value="checklist" className="mt-8">
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Event Rental Planning Checklist</span>
                  <Button variant="outline" size="sm" data-testid="download-checklist">
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {checklistItems.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/50" data-testid={`checklist-item-${index}`}>
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div className="flex-1">
                        <div className="font-medium">{item.task}</div>
                        <div className="text-sm text-muted-foreground">{item.timeline}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="delivery" className="mt-8">
            <div className="space-y-8">
              <Card className="p-6">
                <CardHeader>
                  <CardTitle>Delivery Day: What to Expect</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
                    {deliverySteps.map((step, index) => (
                      <Card key={index} className="p-4" data-testid={`delivery-step-${index}`}>
                        <div className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                            {index + 1}
                          </div>
                          <div>
                            <h3 className="font-semibold text-sm mb-2">{step.name}</h3>
                            <p className="text-xs text-muted-foreground">{step.text}</p>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <div className="callout-box p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4 text-primary">
                  Important Delivery Considerations
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-sm">
                    <li>• Delivery typically occurs 1-2 days before your event</li>
                    <li>• Pickup usually happens the day after your event</li>
                    <li>• Ensure adequate parking for delivery trucks</li>
                    <li>• Have a designated contact person available</li>
                  </ul>
                  <ul className="space-y-2 text-sm">
                    <li>• Clear pathways for equipment transport</li>
                    <li>• Mark underground utilities and sprinkler systems</li>
                    <li>• Weather backup plans for outdoor setup</li>
                    <li>• Document any pre-existing equipment damage</li>
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Next Steps */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4" data-testid="next-steps-title">
            Ready to Get Quotes?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Now that you know what you need, use our local resources to find reputable Austin 
            rental companies and understand fair pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" data-testid="btn-local-resources">
              <a href="/local-resources">Find Local Companies</a>
            </Button>
            <Button asChild variant="outline" size="lg" data-testid="btn-pricing-guide">
              <a href="/pricing-budgeting">Review Pricing Guide</a>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
}
