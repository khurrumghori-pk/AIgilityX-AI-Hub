import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Network, 
  Zap, 
  Shield, 
  TrendingUp, 
  Globe, 
  Cpu,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

const Home = () => {
  const features = [
    {
      icon: Network,
      title: "Telco-Native Infrastructure",
      description: "Deploy AI at the edge with ultra-low latency through 5G MEC nodes and carrier data centers."
    },
    {
      icon: Zap,
      title: "AI Infrastructure as a Service",
      description: "On-demand GPU compute, model training, and inference with telco-grade security."
    },
    {
      icon: Shield,
      title: "Compliance & Security",
      description: "Data sovereignty, privacy-by-design, and adherence to local regulatory requirements."
    },
    {
      icon: TrendingUp,
      title: "Market Intelligence",
      description: "Real-time insights on AI adoption trends, investment patterns, and emerging technologies."
    },
    {
      icon: Globe,
      title: "Global Ecosystem",
      description: "Multi-telco marketplace connecting solution providers with enterprises worldwide."
    },
    {
      icon: Cpu,
      title: "Curated AI Solutions",
      description: "Vetted, enterprise-ready AI applications across industries with two-stage evaluation."
    }
  ];

  const stats = [
    { value: "45.2%", label: "Annual AI Market Growth" },
    { value: "83%", label: "Enterprise AI Adoption" },
    { value: "$15.8B", label: "Annual Government Investment" },
    { value: "16,500+", label: "AI Professionals" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-slide-up">
            <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
              Enterprise AI Solutions Marketplace
            </Badge>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              AIgilityX AI Hub
              <span className="bg-gradient-primary bg-clip-text text-transparent block mt-2">Your Gateway to Global AI Innovation</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover and deploy vetted AI solutions from trusted partners across GCC & MENA, South Asia, Europe, and North America. Accelerate your digital transformation with enterprise-ready AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/marketplace">
                <Button size="lg" className="bg-gradient-primary hover:opacity-90 shadow-glow text-lg px-8">
                  Explore Marketplace
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link to="/onboarding">
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Become a Partner
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl font-bold">Why AIgilityX AI Hub?</h2>
            <p className="text-xl text-muted-foreground">
              The only AI marketplace built specifically for telecommunications operators
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="p-6 hover:shadow-lg-custom transition-all duration-300 border-border bg-gradient-card">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-primary-foreground" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Competitive Advantages */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-accent/10 text-accent border-accent/20">
                Competitive Edge
              </Badge>
              <h2 className="text-4xl font-bold">
                Beyond Traditional AI Marketplaces
              </h2>
              <p className="text-lg text-muted-foreground">
                Unlike single-entity platforms, AIgilityX is a multi-telco, globally scalable solution
                that transforms infrastructure into revenue-generating AI services.
              </p>
              <ul className="space-y-4">
                {[
                  "Multi-telco federation vs. single operator focus",
                  "GPU-as-a-Service and edge computing integration",
                  "Network-native AI with ultra-low latency",
                  "Open ecosystem with global solution interoperability"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/about">
                <Button variant="outline" size="lg">
                  Learn More
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-primary rounded-2xl opacity-20 absolute inset-0 blur-3xl" />
              <Card className="relative p-8 bg-card/50 backdrop-blur-sm">
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-background rounded-lg">
                    <span className="text-sm font-medium">Network Integration</span>
                    <Badge className="bg-primary/10 text-primary">100%</Badge>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-background rounded-lg">
                    <span className="text-sm font-medium">Solution Coverage</span>
                    <Badge className="bg-primary/10 text-primary">Global</Badge>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-background rounded-lg">
                    <span className="text-sm font-medium">Deployment Speed</span>
                    <Badge className="bg-primary/10 text-primary">Instant</Badge>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-background rounded-lg">
                    <span className="text-sm font-medium">Compliance</span>
                    <Badge className="bg-primary/10 text-primary">Certified</Badge>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <Card className="relative overflow-hidden bg-gradient-primary p-12 text-center">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="relative z-10 max-w-3xl mx-auto space-y-6">
              <h2 className="text-4xl font-bold text-primary-foreground">
                Ready to Power Your AI Transformation?
              </h2>
              <p className="text-xl text-primary-foreground/90">
                Join the telco revolution and unlock new AI-driven revenue streams
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/marketplace">
                  <Button size="lg" variant="secondary" className="shadow-lg">
                    Browse Solutions
                  </Button>
                </Link>
                <Link to="/onboarding">
                  <Button size="lg" variant="outline" className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10">
                    List Your Solution
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;
