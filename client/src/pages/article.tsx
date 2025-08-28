import { useParams } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/seo/seo-head";
import { ArticleStructuredData } from "@/components/ui/structured-data";
import { blogPosts, guideSections } from "@/lib/content-data";
import { Calendar, Clock, ArrowLeft, ArrowRight, BookOpen, ExternalLink } from "lucide-react";
import { Link } from "wouter";

export default function Article() {
  const { slug } = useParams() as { slug: string };
  
  // Find the article in blog posts or guide sections
  const blogPost = blogPosts.find(post => post.slug === slug);
  
  // If it's a guide article, find it in guide sections
  let guideArticle = null;
  let guideSection = null;
  if (!blogPost) {
    for (const [sectionKey, section] of Object.entries(guideSections)) {
      const foundArticle = section.articles.find(article => article.slug === slug);
      if (foundArticle) {
        guideArticle = foundArticle;
        guideSection = section;
        break;
      }
    }
  }

  const article = blogPost || guideArticle;
  
  if (!article) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
        <p className="text-muted-foreground mb-8">The article you're looking for doesn't exist or may have been moved.</p>
        <Link href="/blog">
          <Button>Browse Articles</Button>
        </Link>
      </div>
    );
  }

  // Generate article content based on slug
  const generateContent = (slug: string) => {
    switch (slug) {
      case "hosting-summer-event-austin-heat":
        return (
          <div className="content-prose">
            <h2>Essential Cooling Solutions for Austin Summer Events</h2>
            <p>Austin summers are legendary for their intensity, with temperatures regularly soaring above 100°F and humidity that makes it feel even hotter. Planning an outdoor event during summer months requires serious consideration of guest comfort and safety.</p>
            
            <h3>Must-Have Cooling Equipment</h3>
            <ul>
              <li><strong>Misting Fans:</strong> These are your first line of defense against Austin heat. Budget $25-40 per fan and plan for one every 10-15 guests in outdoor areas.</li>
              <li><strong>White Tents:</strong> Dark-colored tents absorb heat. White tents reflect sunlight and can be 10-15 degrees cooler inside.</li>
              <li><strong>Portable AC Units:</strong> For enclosed spaces like reception tents, portable AC units ($200-400 each) provide serious cooling power.</li>
              <li><strong>Shade Structures:</strong> Beyond tents, consider market umbrellas or shade sails for cocktail areas.</li>
            </ul>

            <h3>Timing Considerations</h3>
            <p>Schedule outdoor activities during cooler parts of the day. Consider:</p>
            <ul>
              <li>Morning ceremonies (before 10 AM)</li>
              <li>Late afternoon receptions (after 6 PM)</li>
              <li>Evening parties when temperatures drop</li>
            </ul>

            <h3>Budget Impact</h3>
            <p>Cooling solutions typically add 15-25% to your rental budget, but they're essential for guest comfort and safety. Factor in:</p>
            <ul>
              <li>Generator rental for powered equipment</li>
              <li>Additional staffing for setup/monitoring</li>
              <li>Water stations and hydration amenities</li>
            </ul>
          </div>
        );
      
      case "austin-wedding-rental-costs-150-guests":
        return (
          <div className="content-prose">
            <h2>Real Cost Breakdown: 150-Guest Austin Wedding Reception</h2>
            <p>Based on recent quotes from five Austin rental companies, here's what you can expect to pay for a typical 150-guest wedding reception in 2025.</p>

            <h3>Core Rental Items</h3>
            <div className="bg-muted p-6 rounded-lg my-6">
              <h4 className="font-semibold mb-3">Equipment Breakdown:</h4>
              <ul className="space-y-2">
                <li>19 Round tables (60"): <strong>$190-285</strong></li>
                <li>150 Chiavari chairs: <strong>$450-750</strong></li>
                <li>40×60 tent: <strong>$800-1,400</strong></li>
                <li>20×20 dance floor: <strong>$300-500</strong></li>
                <li>Bar setup (2 bars): <strong>$150-300</strong></li>
                <li>Market lighting: <strong>$400-600</strong></li>
                <li>Basic linens: <strong>$380-570</strong></li>
              </ul>
              <div className="border-t pt-3 mt-3">
                <strong>Equipment Subtotal: $2,670-4,405</strong>
              </div>
            </div>

            <h3>Additional Costs Often Overlooked</h3>
            <ul>
              <li><strong>Delivery & Setup:</strong> $200-400 (varies by location)</li>
              <li><strong>Generator rental:</strong> $150-250 (for lighting/sound)</li>
              <li><strong>Damage waiver:</strong> $200-350 (8-12% of rental total)</li>
              <li><strong>Weekend pickup fee:</strong> $75-150</li>
              <li><strong>Credit card processing:</strong> $80-175 (3-4% if paying by card)</li>
            </ul>

            <h3>Total Investment Range</h3>
            <p className="text-lg font-semibold bg-primary/10 p-4 rounded-lg">
              <strong>Budget Option:</strong> $3,375-4,730<br />
              <strong>Mid-Range:</strong> $4,500-6,200<br />
              <strong>Premium:</strong> $6,000-8,500
            </p>

            <h3>Money-Saving Strategies</h3>
            <ul>
              <li>Choose Friday or Sunday for 10-15% savings</li>
              <li>Skip the damage waiver if you have event insurance</li>
              <li>Pay by check to avoid processing fees</li>
              <li>Book early in the season for better rates</li>
              <li>Consider off-season dates (January-February)</li>
            </ul>
          </div>
        );
      
      default:
        return (
          <div className="content-prose">
            <p>This is a comprehensive guide covering all aspects of {article.title.toLowerCase()}. Our detailed analysis provides actionable insights for Austin event planners.</p>
            
            <h2>Key Considerations</h2>
            <p>When planning your event, it's important to understand the specific challenges and opportunities that come with Austin's unique event landscape.</p>
            
            <h3>Expert Recommendations</h3>
            <p>Based on our research and industry analysis, we recommend taking a methodical approach to ensure your event's success while staying within budget.</p>
            
            <h3>Local Market Insights</h3>
            <p>Austin's event rental market has specific characteristics that differ from other cities. Understanding these nuances helps you make better decisions.</p>
            
            <h3>Action Steps</h3>
            <ol>
              <li>Research your specific requirements thoroughly</li>
              <li>Get quotes from multiple reputable companies</li>
              <li>Compare not just prices, but service levels and policies</li>
              <li>Plan for Austin-specific considerations like weather and traffic</li>
              <li>Build contingencies into your timeline and budget</li>
            </ol>
          </div>
        );
    }
  };

  const content = generateContent(slug);
  const relatedPosts = blogPosts.filter(post => post.slug !== slug && post.category === (blogPost?.category || "EXPERT TIPS")).slice(0, 3);

  const seoData = {
    title: `${article.title} | Austin Tables and Chairs`,
    description: article.excerpt,
    canonical: `https://austintablesandchairs.com/blog/${slug}`,
    ogType: "article"
  };

  return (
    <>
      <SEOHead seo={seoData} />
      {blogPost && (
        <ArticleStructuredData article={{
          title: blogPost.title,
          description: blogPost.excerpt,
          date: blogPost.date
        }} />
      )}
      
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Navigation */}
        <div className="mb-8">
          <Link href={guideSection ? `/${Object.keys(guideSections).find(key => guideSections[key] === guideSection)}` : "/blog"}>
            <Button variant="ghost" size="sm" data-testid="back-button">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {guideSection ? `Back to ${guideSection.title}` : "Back to Blog"}
            </Button>
          </Link>
        </div>

        {/* Article Header */}
        <header className="mb-12">
          {blogPost && (
            <Badge variant="secondary" className="mb-4">
              {blogPost.category}
            </Badge>
          )}
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight" data-testid="article-title">
            {article.title}
          </h1>
          
          <div className="flex items-center space-x-6 text-muted-foreground mb-8">
            {blogPost && (
              <div className="flex items-center">
                <Calendar className="mr-2 h-4 w-4" />
                <span>{blogPost.date}</span>
              </div>
            )}
            <div className="flex items-center">
              <Clock className="mr-2 h-4 w-4" />
              <span>{article.readTime || "8 min read"}</span>
            </div>
            <div className="flex items-center">
              <BookOpen className="mr-2 h-4 w-4" />
              <span>{guideSection ? "Guide" : "Article"}</span>
            </div>
          </div>

          <div className="text-xl text-muted-foreground leading-relaxed">
            {article.excerpt}
          </div>
        </header>

        {/* Article Image */}
        {blogPost && (
          <div className="mb-12">
            <img 
              src={blogPost.image} 
              alt={blogPost.title} 
              className="w-full h-64 md:h-96 object-cover rounded-xl"
            />
          </div>
        )}

        {/* Article Content */}
        <div className="mb-16">
          {content}
        </div>

        {/* Author/Disclaimer */}
        <div className="border-t border-border pt-8 mb-12">
          <div className="bg-muted/50 rounded-lg p-6">
            <h3 className="font-semibold mb-3">About This Guide</h3>
            <p className="text-sm text-muted-foreground">
              This information is based on research of Austin's event rental market and is provided for 
              educational purposes. Pricing and policies may vary by company and change over time. Always 
              verify current information directly with rental companies before making decisions.
            </p>
          </div>
        </div>

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <section className="border-t border-border pt-12">
            <h2 className="text-2xl font-bold mb-8" data-testid="related-articles-title">
              Related Articles
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((post, index) => (
                <Card key={post.slug} className="overflow-hidden hover:shadow-lg transition-shadow" data-testid={`related-article-${index}`}>
                  <Link href={`/blog/${post.slug}`}>
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-32 object-cover"
                    />
                  </Link>
                  <CardContent className="p-4">
                    <Badge variant="outline" className="text-xs mb-2">
                      {post.category}
                    </Badge>
                    <h3 className="font-semibold mb-2 line-clamp-2">
                      <Link href={`/blog/${post.slug}`} className="hover:text-primary">
                        {post.title}
                      </Link>
                    </h3>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Clock className="mr-1 h-3 w-3" />
                      {post.readTime}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Navigation to next guide or CTA */}
        <section className="mt-16 text-center">
          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-4" data-testid="next-steps-title">
              Ready to Plan Your Event?
            </h2>
            <p className="text-muted-foreground mb-6">
              Use our planning tools and local resources to put this knowledge into action.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild data-testid="btn-planning-tools">
                <Link href="/planning-tools">Use Planning Tools</Link>
              </Button>
              <Button asChild variant="outline" data-testid="btn-local-resources">
                <Link href="/local-resources">Find Austin Companies</Link>
              </Button>
            </div>
          </Card>
        </section>
      </article>
    </>
  );
}
