import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle, Cpu, Users, Scale, FlaskConical, GraduationCap, Server, ArrowRight, Loader2 } from "lucide-react";

const categories = [
  { id: "ai_solutions", label: "AI Solutions", icon: Cpu, description: "AI products, platforms, and SaaS tools" },
  { id: "experts", label: "Experts", icon: Users, description: "Independent consultants and advisors" },
  { id: "regulators", label: "Regulators", icon: Scale, description: "Regulatory bodies and compliance orgs" },
  { id: "research_labs", label: "Research Labs", icon: FlaskConical, description: "Academic and R&D institutions" },
  { id: "certified_partners", label: "Certified Partners", icon: GraduationCap, description: "System integrators and certified vendors" },
  { id: "telcos_cloud", label: "Telcos & Cloud", icon: Server, description: "Telecom and cloud infrastructure providers" },
];

const industries = ["Telecommunications", "Government", "Finance", "Healthcare", "Manufacturing", "Education", "Energy", "Retail", "Multiple"];
const regions = ["GCC & MENA", "South Asia", "Europe", "North America", "Africa", "Asia Pacific"];
const countries = ["UAE", "Saudi Arabia", "Qatar", "Kuwait", "Bahrain", "Oman", "Pakistan", "India", "Germany", "UK", "USA", "Canada", "Egypt", "Turkey", "Bangladesh", "Sri Lanka", "France", "Netherlands"];

const PartnerRegistration = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    industry: "",
    region: "",
    country: "",
    description: "",
    website: "",
    pricing: "",
    tags: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedCategory) {
      toast({ title: "Please select a category", variant: "destructive" });
      return;
    }
    setLoading(true);
    try {
      const tagsArray = formData.tags.split(",").map((t) => t.trim()).filter(Boolean);
      const { error } = await supabase.from("partners").insert({
        name: formData.name,
        organization: formData.organization,
        email: formData.email,
        phone: formData.phone || null,
        category: selectedCategory as any,
        industry: formData.industry || "Multiple",
        region: formData.region || "GCC & MENA",
        country: formData.country || "UAE",
        description: formData.description,
        website: formData.website || null,
        pricing: formData.pricing || "Contact Sales",
        tags: tagsArray,
      });
      if (error) throw error;
      setSubmitted(true);
      toast({ title: "Registration submitted!", description: "Your application is under review." });
    } catch (err: any) {
      toast({ title: "Error", description: err.message, variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen section-dark flex items-center justify-center px-4">
        <Card className="max-w-lg w-full p-10 text-center bg-[hsl(220_22%_12%)] border-[hsl(220_18%_20%)]">
          <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="text-primary" size={40} />
          </div>
          <h2 className="text-2xl font-display font-bold text-[hsl(220_15%_95%)] mb-3">Application Submitted!</h2>
          <p className="text-[hsl(220_12%_65%)] mb-6">
            Thank you for registering. Our team will review your application and get back to you within 48 hours.
          </p>
          <Button asChild className="bg-gradient-primary hover:opacity-90">
            <a href="/marketplace">Browse Marketplace</a>
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="section-dark pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <Badge className="badge-glow mb-4">Partner Registration</Badge>
          <h1 className="text-4xl sm:text-5xl font-display font-bold mb-4">
            Join the <span className="gradient-text">AI Ecosystem</span>
          </h1>
          <p className="text-xl text-[hsl(220_12%_65%)] max-w-2xl">
            Register as a partner in one of our six marketplace categories and connect with enterprises across the region.
          </p>
        </div>
      </section>

      {/* Category Selection */}
      <section className="section-light py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-display font-bold mb-6">Select Your Category</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`p-5 rounded-xl border-2 text-left transition-all ${
                    isSelected
                      ? "border-primary bg-primary/5 shadow-md"
                      : "border-border hover:border-primary/40 bg-card"
                  }`}
                >
                  <Icon className={`mb-3 ${isSelected ? "text-primary" : "text-muted-foreground"}`} size={28} />
                  <h3 className="font-semibold mb-1">{cat.label}</h3>
                  <p className="text-sm text-muted-foreground">{cat.description}</p>
                </button>
              );
            })}
          </div>

          {/* Registration Form */}
          <Card className="p-8 shadow-soft">
            <h2 className="text-2xl font-display font-bold mb-6">Registration Details</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Solution / Expert Name *</Label>
                  <Input required value={formData.name} onChange={(e) => handleChange("name", e.target.value)} placeholder="e.g., AI Analytics Platform" />
                </div>
                <div className="space-y-2">
                  <Label>Organization *</Label>
                  <Input required value={formData.organization} onChange={(e) => handleChange("organization", e.target.value)} placeholder="e.g., TechCorp Inc." />
                </div>
                <div className="space-y-2">
                  <Label>Email *</Label>
                  <Input required type="email" value={formData.email} onChange={(e) => handleChange("email", e.target.value)} placeholder="contact@company.com" />
                </div>
                <div className="space-y-2">
                  <Label>Phone</Label>
                  <Input value={formData.phone} onChange={(e) => handleChange("phone", e.target.value)} placeholder="+971 50 123 4567" />
                </div>
                <div className="space-y-2">
                  <Label>Industry *</Label>
                  <Select value={formData.industry} onValueChange={(v) => handleChange("industry", v)}>
                    <SelectTrigger><SelectValue placeholder="Select industry" /></SelectTrigger>
                    <SelectContent>
                      {industries.map((i) => <SelectItem key={i} value={i}>{i}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Region *</Label>
                  <Select value={formData.region} onValueChange={(v) => handleChange("region", v)}>
                    <SelectTrigger><SelectValue placeholder="Select region" /></SelectTrigger>
                    <SelectContent>
                      {regions.map((r) => <SelectItem key={r} value={r}>{r}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Country *</Label>
                  <Select value={formData.country} onValueChange={(v) => handleChange("country", v)}>
                    <SelectTrigger><SelectValue placeholder="Select country" /></SelectTrigger>
                    <SelectContent>
                      {countries.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Website</Label>
                  <Input value={formData.website} onChange={(e) => handleChange("website", e.target.value)} placeholder="https://company.com" />
                </div>
                <div className="space-y-2">
                  <Label>Pricing Model</Label>
                  <Input value={formData.pricing} onChange={(e) => handleChange("pricing", e.target.value)} placeholder="e.g., Enterprise, $500/mo, Free" />
                </div>
                <div className="space-y-2">
                  <Label>Tags (comma-separated)</Label>
                  <Input value={formData.tags} onChange={(e) => handleChange("tags", e.target.value)} placeholder="e.g., NLP, Analytics, Cloud" />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Description *</Label>
                <Textarea required rows={4} value={formData.description} onChange={(e) => handleChange("description", e.target.value)} placeholder="Describe your solution, expertise, or services..." />
              </div>
              <Button type="submit" disabled={loading} className="w-full sm:w-auto bg-gradient-primary hover:opacity-90 shadow-glow">
                {loading ? <Loader2 className="mr-2 animate-spin" size={18} /> : <ArrowRight className="mr-2" size={18} />}
                Submit Registration
              </Button>
            </form>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default PartnerRegistration;
