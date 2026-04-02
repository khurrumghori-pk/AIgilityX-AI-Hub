import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import {
  Star, MapPin, Building2, Globe, Mail, Phone, ArrowLeft,
  Cpu, Users, Scale, FlaskConical, GraduationCap, Server,
  Send, Calendar, CheckCircle, BarChart3
} from "lucide-react";

const categoryLabelMap: Record<string, string> = {
  ai_solutions: "AI Solutions",
  experts: "Expert",
  regulators: "Regulator",
  research_labs: "Research Lab",
  certified_partners: "Certified Partner",
  telcos_cloud: "Telco & Cloud",
};

const categoryIconMap: Record<string, any> = {
  ai_solutions: Cpu,
  experts: Users,
  regulators: Scale,
  research_labs: FlaskConical,
  certified_partners: GraduationCap,
  telcos_cloud: Server,
};

interface Partner {
  id: string;
  name: string;
  organization: string;
  category: string;
  industry: string;
  region: string;
  country: string;
  description: string;
  tags: string[];
  rating: number;
  reviews_count: number;
  deployments: number;
  pricing: string;
  website: string | null;
  email: string;
  phone: string | null;
  created_at: string;
}

const PartnerDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();
  const [partner, setPartner] = useState<Partner | null>(null);
  const [loading, setLoading] = useState(true);
  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (id) fetchPartner();
  }, [id]);

  const fetchPartner = async () => {
    const { data, error } = await supabase.from("partners").select("*").eq("id", id!).single();
    if (!error && data) {
      setPartner({ ...data, tags: data.tags || [], rating: Number(data.rating) || 0 } as Partner);
    }
    setLoading(false);
  };

  const handleContact = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
      toast({ title: "Message Sent!", description: "The partner will get back to you shortly." });
    }, 1000);
  };

  const Icon = partner ? (categoryIconMap[partner.category] || Cpu) : Cpu;

  if (loading) {
    return (
      <div className="min-h-screen section-light pt-32 px-4">
        <div className="container mx-auto max-w-5xl space-y-6">
          <Skeleton className="h-8 w-48" />
          <Skeleton className="h-64 w-full rounded-xl" />
          <Skeleton className="h-48 w-full rounded-xl" />
        </div>
      </div>
    );
  }

  if (!partner) {
    return (
      <div className="min-h-screen section-light pt-32 px-4 text-center">
        <h2 className="text-2xl font-bold mb-4">Partner not found</h2>
        <Button asChild><Link to="/marketplace">Back to Marketplace</Link></Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="section-dark pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <Link to="/marketplace" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6">
            <ArrowLeft size={16} className="mr-1" /> Back to Marketplace
          </Link>
          <div className="flex flex-col md:flex-row md:items-start gap-6">
            <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center shrink-0">
              <Icon className="text-primary-foreground" size={36} />
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h1 className="text-3xl sm:text-4xl font-display font-bold text-[hsl(220_15%_95%)]">{partner.name}</h1>
                <Badge className="badge-glow">{categoryLabelMap[partner.category]}</Badge>
              </div>
              <p className="text-lg text-[hsl(220_12%_65%)] flex items-center gap-2 mb-1">
                <Building2 size={18} /> {partner.organization}
              </p>
              <p className="text-[hsl(220_12%_65%)] flex items-center gap-2">
                <MapPin size={16} /> {partner.region} • {partner.country}
              </p>
            </div>
            <div className="flex flex-col items-end gap-2 text-right">
              <div className="flex items-center gap-1">
                <Star className="text-amber-500 fill-amber-500" size={20} />
                <span className="text-xl font-bold text-[hsl(220_15%_95%)]">{partner.rating}</span>
                <span className="text-sm text-[hsl(220_12%_65%)]">({partner.reviews_count} reviews)</span>
              </div>
              <p className="text-sm text-[hsl(220_12%_65%)]">
                <Calendar size={14} className="inline mr-1" />
                Since {new Date(partner.created_at).toLocaleDateString("en-US", { month: "long", year: "numeric" })}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="section-light py-12 px-4">
        <div className="container mx-auto max-w-5xl grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <Card className="p-6 shadow-soft">
              <h2 className="text-xl font-display font-bold mb-4">About</h2>
              <p className="text-muted-foreground leading-relaxed">{partner.description}</p>
              {partner.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {partner.tags.map((tag, i) => (
                    <Badge key={i} variant="outline">{tag}</Badge>
                  ))}
                </div>
              )}
            </Card>

            <Card className="p-6 shadow-soft">
              <h2 className="text-xl font-display font-bold mb-4">Key Metrics</h2>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="p-4 bg-muted rounded-xl text-center">
                  <BarChart3 className="mx-auto text-primary mb-2" size={24} />
                  <p className="text-2xl font-bold">{partner.deployments}+</p>
                  <p className="text-sm text-muted-foreground">Deployments</p>
                </div>
                <div className="p-4 bg-muted rounded-xl text-center">
                  <Star className="mx-auto text-amber-500 mb-2" size={24} />
                  <p className="text-2xl font-bold">{partner.rating}</p>
                  <p className="text-sm text-muted-foreground">Rating</p>
                </div>
                <div className="p-4 bg-muted rounded-xl text-center">
                  <CheckCircle className="mx-auto text-emerald-500 mb-2" size={24} />
                  <p className="text-2xl font-bold">{partner.reviews_count}</p>
                  <p className="text-sm text-muted-foreground">Reviews</p>
                </div>
              </div>
            </Card>

            {/* Contact Form */}
            <Card className="p-6 shadow-soft">
              <h2 className="text-xl font-display font-bold mb-4">Request a Demo</h2>
              {sent ? (
                <div className="text-center py-8">
                  <CheckCircle className="text-primary mx-auto mb-3" size={40} />
                  <p className="font-semibold">Your inquiry has been sent!</p>
                  <p className="text-sm text-muted-foreground">The partner team will respond within 24-48 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleContact} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Your Name *</Label>
                      <Input required value={contactForm.name} onChange={(e) => setContactForm(p => ({ ...p, name: e.target.value }))} placeholder="Full name" />
                    </div>
                    <div className="space-y-2">
                      <Label>Your Email *</Label>
                      <Input required type="email" value={contactForm.email} onChange={(e) => setContactForm(p => ({ ...p, email: e.target.value }))} placeholder="you@company.com" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Message *</Label>
                    <Textarea required rows={4} value={contactForm.message} onChange={(e) => setContactForm(p => ({ ...p, message: e.target.value }))} placeholder="Tell them what you're looking for..." />
                  </div>
                  <Button type="submit" disabled={sending} className="bg-gradient-primary hover:opacity-90">
                    <Send size={16} className="mr-2" /> {sending ? "Sending..." : "Send Inquiry"}
                  </Button>
                </form>
              )}
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="p-6 shadow-soft">
              <h3 className="font-display font-bold mb-4">Details</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between"><span className="text-muted-foreground">Industry</span><span className="font-medium">{partner.industry}</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Pricing</span><span className="font-medium">{partner.pricing}</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Category</span><span className="font-medium">{categoryLabelMap[partner.category]}</span></div>
              </div>
            </Card>

            <Card className="p-6 shadow-soft">
              <h3 className="font-display font-bold mb-4">Contact Info</h3>
              <div className="space-y-3 text-sm">
                <a href={`mailto:${partner.email}`} className="flex items-center gap-2 text-primary hover:underline">
                  <Mail size={16} /> {partner.email}
                </a>
                {partner.phone && (
                  <p className="flex items-center gap-2 text-muted-foreground"><Phone size={16} /> {partner.phone}</p>
                )}
                {partner.website && (
                  <a href={partner.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary hover:underline">
                    <Globe size={16} /> Visit Website
                  </a>
                )}
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnerDetail;
