import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import {
  Mail,
  Globe,
  MapPin,
  Phone,
  Send,
  CheckCircle2,
  Building2,
  Users,
  Newspaper,
  ArrowRight,
} from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [inquirySubmitted, setInquirySubmitted] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  const handleInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySubmitted(true);
    toast({ title: "Inquiry Submitted", description: "We'll get back to you within 48 hours." });
  };

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSubmitted(true);
    toast({ title: "Subscribed!", description: "You'll receive our next ecosystem update." });
  };

  const offices = [
    { city: "Dubai, UAE", address: "DIFC Innovation Hub, Gate Avenue", type: "HQ" },
    { city: "Riyadh, KSA", address: "King Abdullah Financial District", type: "Regional" },
    { city: "Islamabad, Pakistan", address: "National IT Park, Blue Area", type: "Regional" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero - Dark */}
      <section className="section-dark pt-32 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-slide-up">
            <Badge className="badge-glow text-sm px-4 py-2">
              <Mail className="w-4 h-4 mr-2" /> Get In Touch
            </Badge>
            <h1 className="text-5xl sm:text-6xl font-display font-bold leading-tight">
              Contact & <span className="gradient-text">Join Us</span>
            </h1>
            <p className="text-xl text-[hsl(220_12%_65%)] max-w-3xl mx-auto">
              Partner inquiries, media requests, or general questions — we'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Inquiry Form + Info - Light */}
      <section className="section-light py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Form */}
            <Card className="lg:col-span-2 p-8 shadow-soft">
              {inquirySubmitted ? (
                <div className="flex flex-col items-center justify-center py-16 space-y-6">
                  <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center">
                    <CheckCircle2 className="text-primary-foreground" size={40} />
                  </div>
                  <h3 className="text-2xl font-display font-bold">Thank You!</h3>
                  <p className="text-muted-foreground text-center max-w-md">
                    Your inquiry has been submitted. Our partnership team will review it and respond within 48 hours.
                  </p>
                  <Button onClick={() => setInquirySubmitted(false)} variant="outline">
                    Submit Another Inquiry
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleInquiry} className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-display font-bold mb-1">Partner Inquiry</h2>
                    <p className="text-muted-foreground">Tell us about your organization and interest</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label>Full Name *</Label>
                      <Input placeholder="Your full name" required />
                    </div>
                    <div className="space-y-2">
                      <Label>Email Address *</Label>
                      <Input type="email" placeholder="email@company.com" required />
                    </div>
                    <div className="space-y-2">
                      <Label>Organization</Label>
                      <Input placeholder="Company or organization" />
                    </div>
                    <div className="space-y-2">
                      <Label>Phone</Label>
                      <Input type="tel" placeholder="+1 234 567 8900" />
                    </div>
                    <div className="space-y-2">
                      <Label>Inquiry Type *</Label>
                      <Select required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="partnership">Partnership Inquiry</SelectItem>
                          <SelectItem value="vendor">Solution Provider Listing</SelectItem>
                          <SelectItem value="enterprise">Enterprise Buyer</SelectItem>
                          <SelectItem value="government">Government / Regulator</SelectItem>
                          <SelectItem value="media">Media / Press</SelectItem>
                          <SelectItem value="general">General Question</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Region *</Label>
                      <Select required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select region" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="gcc">GCC & MENA</SelectItem>
                          <SelectItem value="south-asia">South Asia</SelectItem>
                          <SelectItem value="europe">Europe</SelectItem>
                          <SelectItem value="north-america">North America</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Message *</Label>
                    <Textarea
                      placeholder="Tell us about your interest in AIgilityX and how we can collaborate..."
                      className="min-h-[120px]"
                      required
                    />
                  </div>

                  <div className="flex items-start space-x-3">
                    <Checkbox id="consent" />
                    <label htmlFor="consent" className="text-sm text-muted-foreground cursor-pointer">
                      I agree to the processing of my data as described in the{" "}
                      <span className="text-primary hover:underline">Privacy Policy</span>
                    </label>
                  </div>

                  <Button type="submit" size="lg" className="bg-gradient-primary hover:opacity-90 shadow-glow w-full sm:w-auto">
                    <Send className="mr-2" size={18} /> Submit Inquiry
                  </Button>
                </form>
              )}
            </Card>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Offices */}
              <Card className="p-6 shadow-soft">
                <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <MapPin className="text-primary" size={20} /> Our Offices
                </h3>
                <div className="space-y-4">
                  {offices.map((office, i) => (
                    <div key={i} className="p-4 bg-muted/50 rounded-xl">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-medium">{office.city}</h4>
                        <Badge variant="outline" className="text-xs">{office.type}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{office.address}</p>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Quick Contact */}
              <Card className="p-6 shadow-soft">
                <h3 className="font-semibold text-lg mb-4">Quick Contact</h3>
                <div className="space-y-3">
                  <a href="mailto:partners@aigilityx.com" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                    <Mail size={16} /> partners@aigilityx.com
                  </a>
                  <a href="mailto:info@aigilityx.com" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                    <Mail size={16} /> info@aigilityx.com
                  </a>
                  <span className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Globe size={16} /> www.aigilityx.com
                  </span>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter - Dark */}
      <section className="section-dark py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-3xl">
          <Card className="card-themed p-8 md:p-12 text-center">
            <Newspaper className="mx-auto text-primary mb-6" size={48} />
            <h2 className="text-3xl font-display font-bold text-[hsl(220_15%_95%)] mb-3">
              Stay in the Loop
            </h2>
            <p className="text-[hsl(220_12%_60%)] mb-8 max-w-md mx-auto">
              Get monthly insights on sovereign AI trends, platform updates, and partnership opportunities.
            </p>

            {newsletterSubmitted ? (
              <div className="flex items-center justify-center gap-3 text-primary">
                <CheckCircle2 size={24} />
                <span className="text-lg font-medium">You're subscribed!</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletter} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  required
                  className="bg-[hsl(220_25%_12%)] border-[hsl(220_18%_20%)] flex-1"
                />
                <Button type="submit" className="bg-gradient-primary hover:opacity-90 shadow-glow">
                  Subscribe <ArrowRight className="ml-2" size={16} />
                </Button>
              </form>
            )}
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Contact;
