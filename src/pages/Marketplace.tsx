import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from "react-router-dom";
import { Search, Star, ArrowRight, Filter } from "lucide-react";

const Marketplace = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const solutions = [
    {
      id: 1,
      name: "AI-Powered Customer Analytics",
      vendor: "TelcoAI Solutions",
      category: "Analytics",
      industry: "Telecommunications",
      description: "Advanced customer behavior analytics using machine learning to predict churn and optimize engagement.",
      rating: 4.8,
      reviews: 127,
      deployments: 450,
      price: "Enterprise",
      tags: ["Churn Prediction", "Customer Insights", "Real-time Analytics"]
    },
    {
      id: 2,
      name: "Network Optimization AI",
      vendor: "SmartGrid AI",
      category: "Infrastructure",
      industry: "Telecommunications",
      description: "Intelligent network traffic management and optimization powered by deep learning algorithms.",
      rating: 4.9,
      reviews: 89,
      deployments: 320,
      price: "Contact Sales",
      tags: ["5G Optimization", "Traffic Management", "Predictive Maintenance"]
    },
    {
      id: 3,
      name: "Arabic NLP Suite",
      vendor: "LanguageAI",
      category: "NLP",
      industry: "Government",
      description: "Comprehensive natural language processing tools optimized for Arabic language and dialects.",
      rating: 4.7,
      reviews: 203,
      deployments: 680,
      price: "Starting at $5,000/mo",
      tags: ["Arabic Language", "Sentiment Analysis", "Translation"]
    },
    {
      id: 4,
      name: "Fraud Detection Engine",
      vendor: "SecureAI Labs",
      category: "Security",
      industry: "Finance",
      description: "Real-time fraud detection using anomaly detection and pattern recognition algorithms.",
      rating: 4.9,
      reviews: 156,
      deployments: 890,
      price: "Enterprise",
      tags: ["Fraud Prevention", "Risk Management", "Real-time Detection"]
    },
    {
      id: 5,
      name: "Smart City IoT Platform",
      vendor: "UrbanTech AI",
      category: "IoT",
      industry: "Government",
      description: "Integrated IoT and AI platform for smart city management and optimization.",
      rating: 4.6,
      reviews: 94,
      deployments: 210,
      price: "Contact Sales",
      tags: ["Smart Cities", "IoT Integration", "Urban Planning"]
    },
    {
      id: 6,
      name: "Predictive Maintenance AI",
      vendor: "IndustrialAI",
      category: "Operations",
      industry: "Manufacturing",
      description: "Predict equipment failures and optimize maintenance schedules using machine learning.",
      rating: 4.8,
      reviews: 178,
      deployments: 540,
      price: "Starting at $8,000/mo",
      tags: ["Predictive Analytics", "Asset Management", "Downtime Reduction"]
    }
  ];

  const filteredSolutions = solutions.filter(solution => {
    const matchesSearch = solution.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         solution.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesIndustry = selectedIndustry === "all" || solution.industry === selectedIndustry;
    const matchesCategory = selectedCategory === "all" || solution.category === selectedCategory;
    return matchesSearch && matchesIndustry && matchesCategory;
  });

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* Header */}
        <div className="mb-12 space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold">AI Solutions Marketplace</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Discover vetted, enterprise-ready AI solutions from leading providers worldwide
          </p>
        </div>

        {/* Filters */}
        <Card className="p-6 mb-8">
          <div className="grid md:grid-cols-4 gap-4">
            <div className="md:col-span-2 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
              <Input
                placeholder="Search solutions..."
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
                <SelectItem value="Manufacturing">Manufacturing</SelectItem>
              </SelectContent>
            </Select>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="Analytics">Analytics</SelectItem>
                <SelectItem value="Infrastructure">Infrastructure</SelectItem>
                <SelectItem value="NLP">NLP</SelectItem>
                <SelectItem value="Security">Security</SelectItem>
                <SelectItem value="IoT">IoT</SelectItem>
                <SelectItem value="Operations">Operations</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </Card>

        {/* Results Count */}
        <div className="mb-6 flex items-center justify-between">
          <p className="text-muted-foreground">
            Showing {filteredSolutions.length} of {solutions.length} solutions
          </p>
          <Button variant="outline" size="sm">
            <Filter size={16} className="mr-2" />
            More Filters
          </Button>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSolutions.map((solution) => (
            <Card key={solution.id} className="p-6 hover:shadow-lg-custom transition-all duration-300 flex flex-col">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-xl">
                    {solution.name.charAt(0)}
                  </span>
                </div>
                <Badge variant="secondary">{solution.category}</Badge>
              </div>

              <h3 className="text-xl font-semibold mb-2">{solution.name}</h3>
              <p className="text-sm text-muted-foreground mb-1">{solution.vendor}</p>
              
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center">
                  <Star className="text-yellow-500 fill-yellow-500" size={16} />
                  <span className="ml-1 text-sm font-medium">{solution.rating}</span>
                </div>
                <span className="text-sm text-muted-foreground">({solution.reviews} reviews)</span>
              </div>

              <p className="text-sm text-muted-foreground mb-4 flex-grow">
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
          ))}
        </div>

        {/* Empty State */}
        {filteredSolutions.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-muted-foreground mb-4">No solutions found matching your criteria</p>
            <Button onClick={() => {
              setSearchQuery("");
              setSelectedIndustry("all");
              setSelectedCategory("all");
            }}>
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Marketplace;
