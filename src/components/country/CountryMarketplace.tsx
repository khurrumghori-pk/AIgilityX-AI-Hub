import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import {
  Search, Star, ArrowRight, Cpu, Users, Scale, FlaskConical,
  GraduationCap, Server, MapPin, Building2, LayoutGrid, Loader2, Plus
} from "lucide-react";

const categoryMap: Record<string, string> = {
  ai_solutions: "solutions", experts: "experts", regulators: "regulators",
  research_labs: "research", certified_partners: "partners", telcos_cloud: "telcos",
};

const categoryLabelMap: Record<string, string> = {
  ai_solutions: "AI Solutions", experts: "Expert", regulators: "Regulator",
  research_labs: "Research Lab", certified_partners: "Certified Partner", telcos_cloud: "Telco & Cloud",
};

interface Partner {
  id: string; name: string; organization: string; category: string;
  industry: string; region: string; country: string; description: string;
  tags: string[]; rating: number; reviews_count: number; deployments: number; pricing: string;
}

const categoryTabs = [
  { id: "all", label: "All", icon: LayoutGrid },
  { id: "solutions", label: "AI Solutions", icon: Cpu },
  { id: "experts", label: "Experts", icon: Users },
  { id: "regulators", label: "Regulators", icon: Scale },
  { id: "research", label: "Research Labs", icon: FlaskConical },
  { id: "partners", label: "Certified Partners", icon: GraduationCap },
  { id: "telcos", label: "Telcos & Cloud", icon: Server },
];

const getIconForType = (type: string) => {
  const mapped = categoryMap[type] || type;
  const icons: Record<string, any> = {
    solutions: Cpu, experts: Users, regulators: Scale,
    research: FlaskConical, partners: GraduationCap, telcos: Server,
  };
  return icons[mapped] || Cpu;
};

interface Props {
  countryName: string;
  dbCountryName: string;
  accentColor: string;
  accentGradient: string;
}

const CountryMarketplace = ({ countryName, dbCountryName, accentColor, accentGradient }: Props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [partners, setPartners] = useState<Partner[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("partners")
        .select("*")
        .eq("country", dbCountryName);
      if (!error && data) {
        setPartners(data.map((p: any) => ({ ...p, tags: p.tags || [], rating: Number(p.rating) || 0 })));
      }
      setLoading(false);
    };
    fetch();
  }, [dbCountryName]);

  const filtered = partners.filter(p => {
    const type = categoryMap[p.category] || p.category;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = activeCategory === "all" || type === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="section-light py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-12 space-y-4">
          <Badge className="bg-accent/10 text-accent border-accent/20">{countryName} Marketplace</Badge>
          <h2 className="text-4xl font-display font-bold">
            {countryName} <span className="gradient-text">AI Ecosystem</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore approved AI solutions, experts, and infrastructure partners operating in {countryName}.
          </p>
        </div>

        {/* Tabs */}
        <Tabs value={activeCategory} onValueChange={setActiveCategory} className="mb-8">
          <TabsList className="h-auto p-1 bg-muted flex-wrap justify-center gap-1">
            {categoryTabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <TabsTrigger key={tab.id} value={tab.id}
                  className="data-[state=active]:bg-gradient-primary data-[state=active]:text-primary-foreground px-3 py-1.5 text-sm">
                  <Icon className="w-4 h-4 mr-1.5" />{tab.label}
                </TabsTrigger>
              );
            })}
          </TabsList>
        </Tabs>

        {/* Search */}
        <div className="max-w-md mx-auto mb-8 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
          <Input placeholder={`Search ${countryName} partners...`} value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} className="pl-10" />
        </div>

        {/* Results */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">{filtered.length}</span> partners in {countryName}
          </p>
          <Link to="/partner-registration">
            <Button size="sm" style={{ background: accentGradient }} className="text-white hover:opacity-90">
              <Plus size={16} className="mr-2" />Register as {countryName} Partner
            </Button>
          </Link>
        </div>

        {loading && (
          <div className="flex items-center justify-center py-16">
            <Loader2 className="animate-spin text-primary" size={36} />
          </div>
        )}

        {!loading && filtered.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((partner) => {
              const TypeIcon = getIconForType(partner.category);
              return (
                <Card key={partner.id} className="p-6 hover-lift flex flex-col shadow-soft">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: accentGradient }}>
                      <TypeIcon className="text-white" size={24} />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {categoryLabelMap[partner.category] || partner.category}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{partner.name}</h3>
                  <p className="text-sm text-muted-foreground mb-1 flex items-center gap-1">
                    <Building2 size={14} />{partner.organization}
                  </p>
                  <p className="text-xs text-muted-foreground mb-3 flex items-center gap-1">
                    <MapPin size={12} />{partner.region} • {partner.country}
                  </p>
                  <div className="flex items-center gap-2 mb-4">
                    <Star className="text-amber-500 fill-amber-500" size={16} />
                    <span className="text-sm font-medium">{partner.rating}</span>
                    <span className="text-sm text-muted-foreground">({partner.reviews_count} reviews)</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 flex-grow line-clamp-3">{partner.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {partner.tags.slice(0, 2).map((tag, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">{tag}</Badge>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-border space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Deployments</span>
                      <span className="font-medium">{partner.deployments}+</span>
                    </div>
                    <Button asChild className="w-full hover:opacity-90 text-white" style={{ background: accentGradient }}>
                      <Link to={`/partner/${partner.id}`}>
                        View Details<ArrowRight className="ml-2" size={16} />
                      </Link>
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
        )}

        {!loading && filtered.length === 0 && (
          <div className="text-center py-16">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="text-muted-foreground" size={28} />
            </div>
            <p className="text-lg text-muted-foreground mb-2">No partners found in {countryName}</p>
            <p className="text-sm text-muted-foreground mb-6">Be the first to register in this region</p>
            <Link to="/partner-registration">
              <Button style={{ background: accentGradient }} className="text-white">Register as Partner</Button>
            </Link>
          </div>
        )}

        {/* Link to full marketplace */}
        <div className="text-center mt-12">
          <Link to={`/marketplace?country=${encodeURIComponent(dbCountryName)}`}>
            <Button variant="outline" size="lg">
              View Full Global Marketplace <ArrowRight className="ml-2" size={16} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CountryMarketplace;
