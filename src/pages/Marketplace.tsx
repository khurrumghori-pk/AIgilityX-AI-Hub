import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { 
  Search, 
  Star, 
  ArrowRight, 
  Filter, 
  Cpu, 
  Users, 
  Scale, 
  FlaskConical, 
  GraduationCap, 
  Server,
  MapPin,
  Building2,
  LayoutGrid,
  Loader2,
  Plus
} from "lucide-react";

const categoryMap: Record<string, string> = {
  ai_solutions: "solutions",
  experts: "experts",
  regulators: "regulators",
  research_labs: "research",
  certified_partners: "partners",
  telcos_cloud: "telcos",
};

const categoryLabelMap: Record<string, string> = {
  ai_solutions: "AI Solutions",
  experts: "Expert",
  regulators: "Regulator",
  research_labs: "Research Lab",
  certified_partners: "Certified Partner",
  telcos_cloud: "Telco & Cloud",
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
}

const Marketplace = () => {
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("all");
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [selectedCountry, setSelectedCountry] = useState(searchParams.get("country") || "all");
  const [activeCategory, setActiveCategory] = useState("all");
  const [partners, setPartners] = useState<Partner[]>([]);
  const [loading, setLoading] = useState(true);

  const categoryTabs = [
    { id: "all", label: "All", icon: LayoutGrid },
    { id: "solutions", label: "AI Solutions", icon: Cpu },
    { id: "experts", label: "Experts", icon: Users },
    { id: "regulators", label: "Regulators", icon: Scale },
    { id: "research", label: "Research Labs", icon: FlaskConical },
    { id: "partners", label: "Certified Partners", icon: GraduationCap },
    { id: "telcos", label: "Telcos & Cloud", icon: Server },
  ];

  useEffect(() => {
    fetchPartners();
  }, []);

  const fetchPartners = async () => {
    setLoading(true);
    const { data, error } = await supabase.from("partners").select("*");
    if (!error && data) {
      setPartners(data.map((p: any) => ({
        ...p,
        tags: p.tags || [],
        rating: Number(p.rating) || 0,
      })));
    }
    setLoading(false);
  };

  const getTypeFromCategory = (cat: string) => categoryMap[cat] || cat;

  const filteredPartners = partners.filter(p => {
    const type = getTypeFromCategory(p.category);
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         p.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesIndustry = selectedIndustry === "all" || p.industry === selectedIndustry;
    const matchesRegion = selectedRegion === "all" || p.region === selectedRegion;
    const matchesCountry = selectedCountry === "all" || p.country === selectedCountry;
    const matchesCategory = activeCategory === "all" || type === activeCategory;
    return matchesSearch && matchesIndustry && matchesRegion && matchesCountry && matchesCategory;
  });

  const getIconForType = (type: string) => {
    const mapped = categoryMap[type] || type;
    const icons: Record<string, any> = {
      solutions: Cpu,
      experts: Users,
      regulators: Scale,
      research: FlaskConical,
      partners: GraduationCap,
      telcos: Server,
    };
    return icons[mapped] || Cpu;
  };

  return (
    <div className="min-h-screen">
      {/* Header - Dark Section */}
      <section className="section-dark pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-4xl space-y-4">
            <Badge className="badge-glow">Marketplace</Badge>
            <h1 className="text-4xl sm:text-5xl font-display font-bold">
              Discover the <span className="gradient-text">AI Ecosystem</span>
            </h1>
            <p className="text-xl text-[hsl(220_12%_65%)] max-w-3xl">
              Six integrated marketplaces connecting solution providers, experts, regulators, 
              research labs, certified partners, and telco infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Tabs - Light Section */}
      <section className="section-light sticky top-16 z-40 py-4 px-4 sm:px-6 lg:px-8 border-b border-border bg-[hsl(220_20%_97%)]/95 backdrop-blur-sm">
        <div className="container mx-auto">
          <Tabs value={activeCategory} onValueChange={setActiveCategory}>
            <TabsList className="h-auto p-1 bg-muted flex-wrap justify-start gap-1">
              {categoryTabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <TabsTrigger 
                    key={tab.id} 
                    value={tab.id}
                    className="data-[state=active]:bg-gradient-primary data-[state=active]:text-primary-foreground px-4 py-2"
                  >
                    <Icon className="w-4 h-4 mr-2" />
                    {tab.label}
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </Tabs>
        </div>
      </section>

      {/* Filters & Content - Light Section */}
      <section className="section-light py-8 px-4 sm:px-6 lg:px-8 min-h-screen">
        <div className="container mx-auto">
          {/* Filters */}
          <Card className="p-6 mb-8 shadow-soft">
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
              <div className="lg:col-span-2 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                <Input
                  placeholder="Search solutions, experts, research..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={selectedIndustry} onValueChange={setSelectedIndustry}>
                <SelectTrigger>
                  <SelectValue placeholder="Industry" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Industries</SelectItem>
                  <SelectItem value="Telecommunications">Telecommunications</SelectItem>
                  <SelectItem value="Government">Government</SelectItem>
                  <SelectItem value="Finance">Finance</SelectItem>
                  <SelectItem value="Healthcare">Healthcare</SelectItem>
                  <SelectItem value="Manufacturing">Manufacturing</SelectItem>
                  <SelectItem value="Multiple">Multiple</SelectItem>
                </SelectContent>
              </Select>
              <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                <SelectTrigger>
                  <SelectValue placeholder="Region" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Regions</SelectItem>
                  <SelectItem value="GCC & MENA">GCC & MENA</SelectItem>
                  <SelectItem value="South Asia">South Asia</SelectItem>
                  <SelectItem value="Europe">Europe</SelectItem>
                  <SelectItem value="North America">North America</SelectItem>
                  <SelectItem value="Africa">Africa</SelectItem>
                </SelectContent>
              </Select>
              <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                <SelectTrigger>
                  <SelectValue placeholder="Country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Countries</SelectItem>
                  <SelectItem value="UAE">UAE</SelectItem>
                  <SelectItem value="Saudi Arabia">Saudi Arabia</SelectItem>
                  <SelectItem value="Qatar">Qatar</SelectItem>
                  <SelectItem value="Kuwait">Kuwait</SelectItem>
                  <SelectItem value="Pakistan">Pakistan</SelectItem>
                  <SelectItem value="India">India</SelectItem>
                  <SelectItem value="Germany">Germany</SelectItem>
                  <SelectItem value="UK">UK</SelectItem>
                  <SelectItem value="USA">USA</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </Card>

          {/* Results Count */}
          <div className="mb-6 flex items-center justify-between">
            <p className="text-muted-foreground">
              Showing <span className="font-semibold text-foreground">{filteredPartners.length}</span> results
            </p>
            <div className="flex items-center gap-3">
              <Link to="/partner-registration">
                <Button size="sm" className="bg-gradient-primary hover:opacity-90">
                  <Plus size={16} className="mr-2" />
                  Register as Partner
                </Button>
              </Link>
              <Button variant="outline" size="sm">
                <Filter size={16} className="mr-2" />
                Advanced Filters
              </Button>
            </div>
          </div>

          {/* Loading */}
          {loading && (
            <div className="flex items-center justify-center py-20">
              <Loader2 className="animate-spin text-primary" size={40} />
            </div>
          )}

          {/* Solutions Grid */}
          {!loading && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPartners.map((partner) => {
                const TypeIcon = getIconForType(partner.category);
                return (
                  <Card key={partner.id} className="p-6 hover-lift flex flex-col shadow-soft">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                        <TypeIcon className="text-primary-foreground" size={24} />
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {categoryLabelMap[partner.category] || partner.category}
                      </Badge>
                    </div>

                    <h3 className="text-xl font-semibold mb-2">{partner.name}</h3>
                    <p className="text-sm text-muted-foreground mb-1 flex items-center gap-1">
                      <Building2 size={14} />
                      {partner.organization}
                    </p>
                    <p className="text-xs text-muted-foreground mb-3 flex items-center gap-1">
                      <MapPin size={12} />
                      {partner.region} • {partner.country}
                    </p>
                    
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex items-center">
                        <Star className="text-amber-500 fill-amber-500" size={16} />
                        <span className="ml-1 text-sm font-medium">{partner.rating}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">({partner.reviews_count} reviews)</span>
                    </div>

                    <p className="text-sm text-muted-foreground mb-4 flex-grow line-clamp-3">
                      {partner.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {partner.tags.slice(0, 2).map((tag, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="pt-4 border-t border-border space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Deployments</span>
                        <span className="font-medium">{partner.deployments}+</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Pricing</span>
                        <span className="font-medium">{partner.pricing}</span>
                      </div>
                      <Button asChild className="w-full bg-gradient-primary hover:opacity-90">
                        <Link to={`/partner/${partner.id}`}>
                          View Details
                          <ArrowRight className="ml-2" size={16} />
                        </Link>
                      </Button>
                    </div>
                  </Card>
                );
              })}
            </div>
          )}

          {/* Empty State */}
          {!loading && filteredPartners.length === 0 && (
            <div className="text-center py-20">
              <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="text-muted-foreground" size={32} />
              </div>
              <p className="text-xl text-muted-foreground mb-4">No results found</p>
              <p className="text-muted-foreground mb-6">Try adjusting your filters or search terms</p>
              <Button onClick={() => {
                setSearchQuery("");
                setSelectedIndustry("all");
                setSelectedRegion("all");
                setSelectedCountry("all");
                setActiveCategory("all");
              }}>
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Marketplace;
