import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/seo/seo-head";
import { pageSEO } from "@/lib/seo-data";
import { blogPosts } from "@/lib/content-data";
import { Calendar, Clock, Search, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = ["all", "SEASONAL GUIDE", "COST BREAKDOWN", "EXPERT TIPS", "EQUIPMENT GUIDE", "BUDGET GUIDE", "LOCAL RESOURCES"];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts[0];
  const regularPosts = blogPosts.slice(1);

  return (
    <>
      <SEOHead seo={pageSEO.blog} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4" data-testid="page-title">
              Event Rental Blog
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Expert advice, seasonal guides, and insider tips for planning successful events in Austin, Texas.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto mb-12">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
                data-testid="search-input"
              />
            </div>
            <select 
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-2 border border-border rounded-lg bg-background"
              data-testid="category-filter"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === "all" ? "All Categories" : category}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Featured Article */}
        {!searchTerm && selectedCategory === "all" && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8" data-testid="featured-section-title">Featured Article</h2>
            <Card className="overflow-hidden hover:shadow-xl transition-shadow" data-testid="featured-article">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title} 
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <Badge variant="secondary" className="mb-4">
                    {featuredPost.category}
                  </Badge>
                  <h3 className="text-2xl font-bold mb-4">
                    <Link href={`/blog/${featuredPost.slug}`} className="hover:text-primary">
                      {featuredPost.title}
                    </Link>
                  </h3>
                  <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="mr-2 h-4 w-4" />
                        {featuredPost.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="mr-2 h-4 w-4" />
                        {featuredPost.readTime}
                      </div>
                    </div>
                    <Link href={`/blog/${featuredPost.slug}`}>
                      <Button variant="ghost" className="text-primary font-medium">
                        Read More <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </Card>
          </section>
        )}

        {/* Articles Grid */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold" data-testid="articles-section-title">
              {searchTerm || selectedCategory !== "all" ? "Search Results" : "Latest Articles"}
            </h2>
            <div className="text-sm text-muted-foreground">
              {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found
            </div>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No articles found matching your search.</p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                }}
                data-testid="clear-search"
              >
                Clear Search
              </Button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <Card key={post.slug} className="overflow-hidden hover:shadow-xl transition-shadow" data-testid={`article-card-${index}`}>
                  <Link href={`/blog/${post.slug}`}>
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-48 object-cover"
                    />
                  </Link>
                  <CardContent className="p-6">
                    <Badge variant="secondary" className="mb-3">
                      {post.category}
                    </Badge>
                    <h3 className="text-xl font-semibold mb-3">
                      <Link href={`/blog/${post.slug}`} className="hover:text-primary">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Calendar className="mr-1 h-4 w-4" />
                          {post.date}
                        </div>
                        <div className="flex items-center">
                          <Clock className="mr-1 h-4 w-4" />
                          {post.readTime}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </section>

        {/* Newsletter Signup */}
        <section className="mt-16 bg-muted rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4" data-testid="newsletter-title">
            Stay Updated with Austin Event Tips
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Get notified when we publish new guides, pricing updates, and seasonal planning tips 
            specifically for Austin events.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1"
              data-testid="newsletter-email"
            />
            <Button data-testid="newsletter-submit">Subscribe</Button>
          </div>
          <p className="text-xs text-muted-foreground mt-3">
            Unsubscribe anytime. We never share your email.
          </p>
        </section>
      </div>
    </>
  );
}
