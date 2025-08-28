import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import SEOHead from "@/components/seo/seo-head";
import { Mail, MessageSquare, Users, BookOpen } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    category: "general"
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // In a real implementation, this would send to your backend
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      
      toast({
        title: "Message Sent!",
        description: "Thank you for your feedback. We'll get back to you soon.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        category: "general"
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactReasons = [
    {
      icon: MessageSquare,
      title: "General Questions",
      description: "Have a question about event rentals in Austin? We're here to help."
    },
    {
      icon: BookOpen,
      title: "Topic Suggestions",
      description: "Suggest new guides, articles, or topics you'd like us to cover."
    },
    {
      icon: Users,
      title: "Company Feedback",
      description: "Share your experience with Austin rental companies (good or bad)."
    },
    {
      icon: Mail,
      title: "Corrections & Updates",
      description: "Found outdated information? Let us know so we can fix it."
    }
  ];

  const seoData = {
    title: "Contact Austin Tables and Chairs | Suggest Topics & Ask Questions",
    description: "Contact Austin Tables and Chairs with questions, topic suggestions, or feedback about Austin event rental companies. We're here to help.",
    canonical: "https://austintablesandchairs.com/contact"
  };

  return (
    <>
      <SEOHead seo={seoData} />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" data-testid="page-title">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Questions about event rentals? Ideas for new content? Feedback on our guides? 
            We'd love to hear from you.
          </p>
        </div>

        {/* Contact Reasons */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-12" data-testid="contact-reasons-title">
            Why People Contact Us
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactReasons.map((reason, index) => (
              <Card key={index} className="text-center p-6" data-testid={`contact-reason-${index}`}>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <reason.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{reason.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {reason.description}
                </p>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Form */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6" data-testid="contact-form-title">
                Send Us a Message
              </h2>
              <Card>
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          data-testid="contact-name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          data-testid="contact-email"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="category">What's this about?</Label>
                      <select
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        className="w-full mt-1 px-3 py-2 border border-border rounded-md bg-background"
                        data-testid="contact-category"
                      >
                        <option value="general">General Question</option>
                        <option value="topic-suggestion">Topic Suggestion</option>
                        <option value="company-feedback">Company Feedback</option>
                        <option value="correction">Correction/Update</option>
                        <option value="media">Media Inquiry</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Brief description of your message"
                        data-testid="contact-subject"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        placeholder="Please provide as much detail as possible..."
                        data-testid="contact-message"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full"
                      data-testid="contact-submit"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      We typically respond within 24-48 hours during business days.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6" data-testid="response-info-title">
                What to Expect
              </h2>
              <Card className="mb-8">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-2">Response Time</h3>
                      <p className="text-muted-foreground text-sm">
                        We aim to respond to all messages within 24-48 hours during business days. 
                        Complex questions may take longer as we research to provide accurate information.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Topic Suggestions</h3>
                      <p className="text-muted-foreground text-sm">
                        We love hearing your ideas! If you suggest a topic that becomes a full guide, 
                        we'll credit you (if you'd like) and send you a heads up when it's published.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Company Feedback</h3>
                      <p className="text-muted-foreground text-sm">
                        Your experiences help us keep our recommendations current. We'll never share 
                        your personal information, but your feedback helps improve our guides.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Quick Questions?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Before reaching out, check if your question is already answered in our FAQ section 
                    or existing guides.
                  </p>
                  <div className="space-y-2">
                    <Button asChild variant="outline" size="sm" className="w-full">
                      <a href="/faq">Browse FAQ</a>
                    </Button>
                    <Button asChild variant="outline" size="sm" className="w-full">
                      <a href="/planning-tools">Planning Tools</a>
                    </Button>
                    <Button asChild variant="outline" size="sm" className="w-full">
                      <a href="/pricing-budgeting">Pricing Guide</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Privacy Note */}
        <section className="text-center">
          <Card className="p-6 border-muted bg-muted/50">
            <h3 className="font-semibold mb-2">Privacy & Use</h3>
            <p className="text-sm text-muted-foreground">
              We'll only use your contact information to respond to your message. We don't share 
              personal information with rental companies or third parties. If you share feedback 
              about specific companies, we may incorporate general insights into our guides while 
              keeping your identity private.
            </p>
          </Card>
        </section>
      </div>
    </>
  );
}
