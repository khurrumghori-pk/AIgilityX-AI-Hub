import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Network, 
  Zap, 
  Globe, 
  Shield, 
  Users, 
  Target, 
  CheckCircle2, 
  ArrowRight,
  Building2,
  Scale,
  FlaskConical,
  Server
} from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Globe,
      title: "Sovereign AI Ecosystem",
      description: "Building the world's first sovereign AI partner ecosystem with multi-region scaling across GCC, South Asia, Europe, and beyond."
    },
    {
      icon: Shield,
      title: "Trust & Compliance",
      description: "Supporting compliance, governance, transparency, and responsible AI through built-in regulatory frameworks."
    },
    {
      icon: Network,
      title: "Multi-Category Marketplace",
      description: "Six integrated categories connecting solution providers, experts, regulators, research labs, partners, and telcos."
    },
    {
      icon: Zap,
      title: "AI Factory Pipeline",
      description: "National and enterprise validation mechanism for AI solutions from intake to deployment and monitoring."
    }
  ];

  const categories = [
    { icon: Building2, name: "Solution Providers", count: "500+" },
    { icon: Users, name: "Individual Experts", count: "200+" },
    { icon: Scale, name: "Regulators", count: "30+" },
    { icon: FlaskConical, name: "Research Labs", count: "75+" },
    { icon: Target, name: "Certified Partners", count: "150+" },
    { icon: Server, name: "Telcos & Cloud", count: "25+" },
  ];

  const differentiators = [
    {
      title: "Multi-Telco Federation",
      description: "Unlike single-entity platforms, AIgilityX scales across regions and telcos globally."
    },
    {
      title: "Research-to-Commercialization",
      description: "Complete pipeline from research and innovation to market-ready deployment."
    },
    {
      title: "Sovereign Cloud Deployment",
      description: "GPU-as-a-Service and edge computing via telco infrastructure partners."
    },
    {
      title: "Multilingual Operation",
      description: "Full support for English, Arabic, and Urdu with RTL layouts and localized content."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Dark */}
      <section className="section-dark pt-32 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="badge-glow">About AIgilityX</Badge>
            <h1 className="text-5xl sm:text-6xl font-display font-bold leading-tight">
              The World's First
              <span className="block gradient-text mt-2">Sovereign AI Hub</span>
            </h1>
            <p className="text-xl text-[hsl(220_12%_65%)] max-w-3xl mx-auto">
              AIgilityX Global AI Hub™ unifies AI companies, experts, regulators, research labs, 
              certified partners, and telcos in one sovereign ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Statement - Light */}
      <section className="section-light py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <Card className="p-12 bg-gradient-card shadow-lg-custom">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <Target className="mx-auto text-primary" size={56} />
              <h2 className="text-3xl sm:text-4xl font-display font-bold">Our Vision</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To create the world's first Sovereign AI Partner Ecosystem — a single marketplace 
                for AI solutions, research, experts, and infrastructure. We enable AI Factory as a 
                national and enterprise validation mechanism, support compliance and responsible AI, 
                and empower Telcos to offer GPU-as-a-Service and sovereign cloud deployments.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Six Categories - Dark */}
      <section className="section-dark py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="badge-glow mb-4">Ecosystem</Badge>
            <h2 className="text-4xl font-display font-bold mb-4">Six First-Class Categories</h2>
            <p className="text-xl text-[hsl(220_12%_65%)] max-w-2xl mx-auto">
              Each category with unique flows, dashboards, and listings
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card key={index} className="card-themed p-6 hover-lift group">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:shadow-glow transition-all">
                        <Icon className="text-primary-foreground" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[hsl(220_15%_95%)]">{category.name}</h3>
                        <p className="text-sm text-[hsl(220_12%_60%)]">Active listings</p>
                      </div>
                    </div>
                    <span className="text-2xl font-display font-bold gradient-text">{category.count}</span>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Values - Light */}
      <section className="section-light py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-accent/10 text-accent border-accent/20 mb-4">Core Values</Badge>
            <h2 className="text-4xl font-display font-bold mb-4">Built for Scale</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our platform design
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="p-8 hover-lift shadow-soft">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="text-primary-foreground" size={32} />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Competitive Differentiation - Dark */}
      <section className="section-dark py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <Badge className="badge-glow">Differentiation</Badge>
              <h2 className="text-4xl font-display font-bold">
                Why <span className="gradient-text">AIgilityX</span> is Different
              </h2>
              <p className="text-lg text-[hsl(220_12%_65%)]">
                Setting new standards for sovereign AI platforms with multi-role users, 
                multi-language operation, and multi-region scaling.
              </p>
              <ul className="space-y-4">
                {differentiators.map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="font-semibold text-[hsl(220_15%_95%)] mb-1">{item.title}</h4>
                      <p className="text-sm text-[hsl(220_12%_60%)]">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <Link to="/marketplace">
                <Button size="lg" className="bg-gradient-primary hover:opacity-90 shadow-glow">
                  Explore Marketplace
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>
            </div>

            <div className="relative">
              <div className="aspect-square bg-primary/20 rounded-3xl absolute inset-0 blur-3xl" />
              <Card className="card-themed relative p-8">
                <div className="space-y-6">
                  {[
                    { label: "Regions Covered", value: "5+", badge: "Global" },
                    { label: "Languages Supported", value: "3", badge: "RTL Ready" },
                    { label: "User Categories", value: "6", badge: "First-Class" },
                    { label: "AI Factory Phases", value: "5", badge: "Complete" },
                  ].map((stat, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-[hsl(220_25%_8%)] rounded-xl">
                      <div>
                        <p className="text-sm text-[hsl(220_12%_60%)]">{stat.label}</p>
                        <p className="text-2xl font-display font-bold gradient-text">{stat.value}</p>
                      </div>
                      <Badge className="bg-primary/10 text-primary border-primary/30">{stat.badge}</Badge>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement - Light with Gradient Card */}
      <section className="section-light py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <Card className="relative overflow-hidden bg-gradient-primary p-12 md:p-16">
            <div className="absolute inset-0 grid-pattern opacity-20" />
            <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
              <Users className="mx-auto text-primary-foreground" size={56} />
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary-foreground">
                Our Mission
              </h2>
              <p className="text-lg leading-relaxed text-primary-foreground/90">
                To build a multilingual, accessible, scalable sovereign AI ecosystem that empowers 
                every stakeholder — from solution providers to telcos — enabling rapid AI adoption, 
                compliance, and commercialization across the globe.
              </p>
              <div className="pt-4">
                <Link to="/onboarding">
                  <Button size="lg" variant="secondary" className="shadow-lg">
                    Join the Ecosystem
                    <ArrowRight className="ml-2" size={18} />
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

export default About;
