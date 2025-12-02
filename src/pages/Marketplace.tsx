import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
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
  Building2
} from "lucide-react";

const Marketplace = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("all");
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [selectedCountry, setSelectedCountry] = useState("all");
  const [activeCategory, setActiveCategory] = useState("solutions");

  const categoryTabs = [
    { id: "solutions", label: "AI Solutions", icon: Cpu },
    { id: "experts", label: "Experts", icon: Users },
    { id: "regulators", label: "Regulators", icon: Scale },
    { id: "research", label: "Research Labs", icon: FlaskConical },
    { id: "partners", label: "Certified Partners", icon: GraduationCap },
    { id: "telcos", label: "Telcos & Cloud", icon: Server },
  ];

  const solutions = [
    {
      id: 1,
      name: "AI-Powered Customer Analytics",
      partner: "TelcoAI Solutions",
      category: "Analytics",
      industry: "Telecommunications",
      region: "GCC & MENA",
      country: "UAE",
      description: "Advanced customer behavior analytics using machine learning to predict churn and optimize engagement.",
      rating: 4.8,
      reviews: 127,
      deployments: 450,
      price: "Enterprise",
      tags: ["Churn Prediction", "Customer Insights", "Real-time Analytics"],
      type: "solutions"
    },
    {
      id: 2,
      name: "Network Optimization AI",
      partner: "SmartGrid AI",
      category: "Infrastructure",
      industry: "Telecommunications",
      region: "GCC & MENA",
      country: "Saudi Arabia",
      description: "Intelligent network traffic management and optimization powered by deep learning algorithms.",
      rating: 4.9,
      reviews: 89,
      deployments: 320,
      price: "Contact Sales",
      tags: ["5G Optimization", "Traffic Management", "Predictive Maintenance"],
      type: "solutions"
    },
    {
      id: 3,
      name: "Arabic NLP Suite",
      partner: "LanguageAI",
      category: "NLP",
      industry: "Government",
      region: "GCC & MENA",
      country: "Qatar",
      description: "Comprehensive natural language processing tools optimized for Arabic language and dialects.",
      rating: 4.7,
      reviews: 203,
      deployments: 680,
      price: "Starting at $5,000/mo",
      tags: ["Arabic Language", "Sentiment Analysis", "Translation"],
      type: "solutions"
    },
    {
      id: 4,
      name: "Dr. Ahmed Al-Hassan",
      partner: "Independent Consultant",
      category: "AI Strategy",
      industry: "Multiple",
      region: "GCC & MENA",
      country: "UAE",
      description: "20+ years experience in AI strategy, digital transformation, and enterprise AI implementation.",
      rating: 4.9,
      reviews: 56,
      deployments: 180,
      price: "$500/hr",
      tags: ["Strategy", "Consulting", "Implementation"],
      type: "experts"
    },
    {
      id: 5,
      name: "KACST AI Research Lab",
      partner: "King Abdulaziz City",
      category: "Research",
      industry: "Government",
      region: "GCC & MENA",
      country: "Saudi Arabia",
      description: "Leading research in Arabic NLP, computer vision, and sovereign AI infrastructure.",
      rating: 4.8,
      reviews: 42,
      deployments: 95,
      price: "Collaboration",
      tags: ["NLP Research", "Computer Vision", "Sovereign AI"],
      type: "research"
    },
    {
      id: 6,
      name: "stc Cloud Platform",
      partner: "stc",
      category: "Cloud Infrastructure",
      industry: "Telecommunications",
      region: "GCC & MENA",
      country: "Saudi Arabia",
      description: "Sovereign cloud platform with GPU-as-a-Service for AI workloads and edge computing.",
      rating: 4.9,
      reviews: 167,
      deployments: 520,
      price: "Pay-as-you-go",
      tags: ["GPU Cloud", "Edge Computing", "Sovereign"],
      type: "telcos"
    }
  ];

  const filteredSolutions = solutions.filter(solution => {
    const matchesSearch = solution.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         solution.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         solution.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesIndustry = selectedIndustry === "all" || solution.industry === selectedIndustry;
    const matchesRegion = selectedRegion === "all" || solution.region === selectedRegion;
    const matchesCountry = selectedCountry === "all" || solution.country === selectedCountry;
    const matchesCategory = activeCategory === "all" || solution.type === activeCategory;
    return matchesSearch && matchesIndustry && matchesRegion && matchesCountry && matchesCategory;
  });

  const getIconForType = (type: string) => {
    const icons: Record<string, any> = {
      solutions: Cpu,
      experts: Users,
      regulators: Scale,
      research: FlaskConical,
      partners: GraduationCap,
      telcos: Server
    };
    return icons[type] || Cpu;
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
              Showing <span className="font-semibold text-foreground">{filteredSolutions.length}</span> results
            </p>
            <Button variant="outline" size="sm">
              <Filter size={16} className="mr-2" />
              Advanced Filters
            </Button>
          </div>

          {/* Solutions Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSolutions.map((solution) => {
              const TypeIcon = getIconForType(solution.type);
              return (
                <Card key={solution.id} className="p-6 hover-lift flex flex-col shadow-soft">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                      <TypeIcon className="text-primary-foreground" size={24} />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {solution.category}
                    </Badge>
                  </div>

                  <h3 className="text-xl font-semibold mb-2">{solution.name}</h3>
                  <p className="text-sm text-muted-foreground mb-1 flex items-center gap-1">
                    <Building2 size={14} />
                    {solution.partner}
                  </p>
                  <p className="text-xs text-muted-foreground mb-3 flex items-center gap-1">
                    <MapPin size={12} />
                    {solution.region} • {solution.country}
                  </p>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center">
                      <Star className="text-amber-500 fill-amber-500" size={16} />
                      <span className="ml-1 text-sm font-medium">{solution.rating}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">({solution.reviews} reviews)</span>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4 flex-grow line-clamp-3">
                    {solution.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {solution.tags.slice(0, 2).map((tag, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-border space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Deployments</span>
                      <span className="font-medium">{solution.deployments}+</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Pricing</span>
                      <span className="font-medium">{solution.price}</span>
                    </div>
                    <Link to={`/solution/${solution.id}`}>
                      <Button className="w-full bg-gradient-primary hover:opacity-90">
                        View Details
                        <ArrowRight className="ml-2" size={16} />
                      </Button>
                    </Link>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Empty State */}
          {filteredSolutions.length === 0 && (
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
                setActiveCategory("solutions");
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
